"""
Auto EDA Insight - Main Flask Application
Meeting 15: Advanced Analytics, Visualization, Insights
"""

from functools import wraps
from flask import Flask, render_template, request, jsonify, send_file, redirect, url_for, session
import pandas as pd
import numpy as np
import os, io, json, hashlib
import re
import unicodedata
from werkzeug.exceptions import RequestEntityTooLarge
import time
from werkzeug.utils import secure_filename
from backend.data_loader import load_file, get_dataset_info
from backend.preprocessing import detect_data_types, get_data_preview
from backend.descriptive_stats import compute_numerical_stats, compute_categorical_stats
from backend.visualization import ( # Import _safe_json_value
    get_numerical_plots, get_categorical_plots,
    get_bivariate_plots, get_catnum_plots,
    get_timeseries_plots
)
from backend.insight_generator import generate_insights

app = Flask(
    __name__,
    template_folder='frontend/templates',
    static_folder='frontend/static'
)

app.config['UPLOAD_FOLDER'] = 'data/raw'
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024
app.config['ALLOWED_EXTENSIONS'] = {'xlsx', 'xls', 'csv', 'txt'}
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.secret_key = os.getenv('SECRET_KEY', 'dev-key-change-me')

APP_USER = os.getenv('APP_USER', 'admin')
APP_PASSWORD = os.getenv('APP_PASSWORD', 'AutoEDA123')
USER_STORE_FILE = os.path.join('data', 'users.json')
PROFILE_PHOTO_FOLDER = os.path.join('frontend', 'static', 'assets', 'profile')
PROFILE_PHOTO_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

os.makedirs('data/raw', exist_ok=True)
os.makedirs('data/processed', exist_ok=True)
os.makedirs('data', exist_ok=True)
os.makedirs(PROFILE_PHOTO_FOLDER, exist_ok=True)
if not os.path.exists(USER_STORE_FILE):
    with open(USER_STORE_FILE, 'w', encoding='utf-8') as _f:
        json.dump({}, _f)


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']


def _safe_preview_value(value):
    """Convert pandas/numpy values into compact, JSON-safe preview cells."""
    try:
        if pd.isna(value):
            return ''
    except (TypeError, ValueError):
        pass

    if isinstance(value, (pd.Timestamp, np.datetime64)):
        try:
            return pd.to_datetime(value).strftime('%Y-%m-%d %H:%M:%S')
        except Exception:
            return str(value)

    if isinstance(value, np.generic):
        value = value.item()

    if isinstance(value, float) and not np.isfinite(value):
        return ''

    return str(value)


def _dirty_preview(df, mask=None, limit=5):
    """Return a small row preview for detected dirty data."""
    if mask is None:
        preview_df = df.head(limit)
    else:
        preview_df = df.loc[mask].head(limit)

    return {
        'columns': list(df.columns),
        'rows': [
            [_safe_preview_value(value) for value in row]
            for row in preview_df.to_numpy()
        ]
    }


_MISSING_TOKENS = {
    '', '-', '--', '---', '_', 'na', 'n/a', 'nan', 'none', 'null', 'nil',
    'missing', 'blank', '#n/a', '#na', '?', '??', '???', 'tidak ada', 'kosong',
    'unknown', 'unk', 'undefined', 'not available', 'not applicable', 'n.a',
    'n.a.', 'tbd', 'belum ada'
}

_MOJIBAKE_REPLACEMENTS = {
    '\u00e2\u20ac\u201d': '-',
    '\u00e2\u20ac\u201c': '-',
    '\u00e2\u20ac\u0153': '"',
    '\u00e2\u20ac\ufffd': '"',
    '\u00e2\u20ac\u02dc': "'",
    '\u00e2\u20ac\u2122': "'",
    '\u00e2\u20ac\u00a6': '...',
    '\u00c2': '',
    '\u00c3\u2014': 'x',
    '\u00e2\u2020\u2019': '->',
    '\u00e2\u2020\u0090': '<-',
    '\u00e2\u2020\u201d': '<->',
}

_CATEGORY_ALIASES = {
    'ewallet': 'E-Wallet',
    'ewalet': 'E-Wallet',
    'cashondelivery': 'COD',
    'cod': 'COD',
    'banktransfer': 'Bank Transfer',
    'transferbank': 'Bank Transfer',
    'virtualaccount': 'Virtual Account',
    'va': 'Virtual Account',
    'creditcard': 'Credit Card',
    'kreditcard': 'Credit Card',
    'kartukredit': 'Credit Card',
}


def _clean_text_value(value):
    """Normalize text cells: encoding artifacts, whitespace, control chars, and dash variants."""
    if pd.isna(value):
        return value
    text = str(value)
    for bad, good in _MOJIBAKE_REPLACEMENTS.items():
        text = text.replace(bad, good)
    text = unicodedata.normalize('NFKC', text)
    text = text.replace('\u2014', '-').replace('\u2013', '-').replace('\u2212', '-')
    text = ''.join(ch if ch.isprintable() else ' ' for ch in text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def _standardize_column_name(name):
    cleaned = _clean_text_value(name)
    cleaned = re.sub(r'\s+', ' ', cleaned).strip()
    return cleaned or 'column'


def _standardize_category_values(df):
    """Merge categorical text variants that only differ by case or spacing."""
    standardized = df.copy()
    changed = 0
    for col in standardized.select_dtypes(include=['object', 'string', 'category']).columns:
        non_missing = standardized[col].dropna()
        if non_missing.empty:
            continue

        unique_ratio = non_missing.astype(str).nunique() / max(len(non_missing), 1)
        if non_missing.astype(str).nunique() > 100 and unique_ratio > 0.5:
            continue

        original = standardized[col].copy()

        def normalize_category(value):
            if pd.isna(value):
                return value
            text = _clean_text_value(value)
            if text == '':
                return np.nan
            compact_key = re.sub(r'[^a-z0-9]+', '', text.casefold())
            if compact_key in _CATEGORY_ALIASES:
                return _CATEGORY_ALIASES[compact_key]
            return text.casefold().title()

        standardized[col] = standardized[col].map(normalize_category)
        changed += int(((original.astype('string') != standardized[col].astype('string')) & original.notna()).sum())

    return standardized, changed


def _normalize_text_missing(df):
    """Trim text cells and convert common placeholder strings into real NaN."""
    normalized = df.copy()
    normalized.columns = [_standardize_column_name(col) for col in normalized.columns]
    replacements = 0
    stripped = 0
    cleaned_cells = 0
    for col in normalized.select_dtypes(include=['object', 'string']).columns:
        original = normalized[col]
        text = original.astype('string')
        cleaned = text.map(lambda value: pd.NA if pd.isna(value) else _clean_text_value(value))
        stripped += int(((text.str.strip() != text) & text.notna()).sum())
        cleaned_cells += int(((text != cleaned) & text.notna() & cleaned.notna()).sum())
        normalized_token = cleaned.str.lower().str.replace(r'[\s._]+', ' ', regex=True).str.strip()
        dash_only = cleaned.str.fullmatch(r'[-\u2013\u2014_]+', na=False)
        missing_mask = normalized_token.isin(_MISSING_TOKENS) | dash_only
        replacements += int(missing_mask.sum())
        normalized[col] = cleaned.mask(missing_mask, np.nan)

    before_rows, before_cols = normalized.shape
    normalized = normalized.dropna(how='all')
    normalized = normalized.loc[:, ~normalized.isna().all(axis=0)]
    return normalized.reset_index(drop=True), {
        'pseudo_missing': replacements,
        'stripped_cells': stripped,
        'cleaned_text_cells': cleaned_cells,
        'empty_rows_removed': before_rows - normalized.shape[0],
        'empty_cols_removed': before_cols - normalized.shape[1],
    }


def _parse_numeric_text(series):
    """Parse numeric-looking text, including currency, percent, and ID/US separators."""
    text = series.astype('string').map(lambda value: pd.NA if pd.isna(value) else _clean_text_value(value))
    text = text.str.strip()
    text = text.str.replace(r'^\((.*)\)$', r'-\1', regex=True)
    text = text.str.replace(r'[^\d,.\-+]', '', regex=True)

    def normalize_number(value):
        if pd.isna(value) or value == '':
            return np.nan
        value = str(value)
        comma = value.rfind(',')
        dot = value.rfind('.')
        if comma > -1 and dot > -1:
            if comma > dot:
                value = value.replace('.', '').replace(',', '.')
            else:
                value = value.replace(',', '')
        elif comma > -1:
            parts = value.split(',')
            value = value.replace(',', '') if len(parts[-1]) == 3 and len(parts) > 1 else value.replace(',', '.')
        elif dot > -1:
            parts = value.split('.')
            if len(parts) > 1 and all(len(p) == 3 for p in parts[1:]):
                value = value.replace('.', '')
        return value

    return pd.to_numeric(text.map(normalize_number), errors='coerce')


def _detect_numeric_text_column(series, threshold=0.8):
    non_missing = series.dropna()
    if non_missing.empty:
        return False, 0, _parse_numeric_text(series)
    converted = _parse_numeric_text(non_missing)
    convertible_pct = float(converted.notna().mean() * 100)
    return convertible_pct >= threshold * 100, round(convertible_pct, 2), _parse_numeric_text(series)


@app.after_request
def add_no_cache(response):
    if request.path.startswith('/static/'):
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
    return response


def _normalize_username(username):
    return username.strip().lower()


def _hash_password(password):
    return hashlib.sha256(password.encode('utf-8')).hexdigest()


def _load_users():
    try:
        with open(USER_STORE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return {}


def _save_users(users):
    with open(USER_STORE_FILE, 'w', encoding='utf-8') as f:
        json.dump(users, f, indent=2)


def _is_reserved_username(username):
    return _normalize_username(username) == _normalize_username(APP_USER)


def _get_user_record(username_key):
    users = _load_users()
    return users.get(username_key)


def _ensure_user_record(username_key, password_hash=None):
    users = _load_users()
    record = users.get(username_key)
    if record is None:
        record = {}
    elif isinstance(record, str):
        record = {'password_hash': record}
    if password_hash is not None:
        record['password_hash'] = password_hash
    users[username_key] = record
    _save_users(users)
    return record


def verify_user(username, password):
    username_key = _normalize_username(username)
    if username_key == _normalize_username(APP_USER) and password == APP_PASSWORD:
        return True
    stored = _get_user_record(username_key)
    if isinstance(stored, dict):
        return stored.get('password_hash') == _hash_password(password)
    return False


def add_user(username, password):
    username_key = _normalize_username(username)
    if not username_key:
        raise ValueError('Nama pengguna tidak boleh kosong')
    if _is_reserved_username(username):
        raise ValueError('Nama pengguna sudah digunakan')
    users = _load_users()
    if username_key in users:
        raise ValueError('Nama pengguna sudah terdaftar')
    users[username_key] = {
        'password_hash': _hash_password(password),
        'display_name': username,
        'photo_filename': None
    }
    _save_users(users)


def _get_profile(username):
    username_key = _normalize_username(username)
    record = _get_user_record(username_key)
    display_name = username
    photo_filename = None
    if isinstance(record, dict):
        display_name = record.get('display_name', username)
        photo_filename = record.get('photo_filename')
    return {
        'username': username_key,
        'display_name': display_name,
        'photo_filename': photo_filename
    }


def _allowed_profile_photo(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in PROFILE_PHOTO_EXTENSIONS


def _save_profile(username, display_name=None, photo_filename=None):
    username_key = _normalize_username(username)
    users = _load_users()
    record = users.get(username_key)
    if record is None or isinstance(record, str):
        record = {'password_hash': record if isinstance(record, str) else None}
    if display_name is not None:
        record['display_name'] = display_name.strip() or username
    if photo_filename is not None:
        record['photo_filename'] = photo_filename
    users[username_key] = record
    _save_users(users)


def _dataset_payload(filename):
    safe_filename = secure_filename(filename or '')
    if not safe_filename:
        raise ValueError('Filename diperlukan')

    filepath = os.path.join(app.config['UPLOAD_FOLDER'], safe_filename)
    if not os.path.exists(filepath):
        raise FileNotFoundError('Dataset tidak ditemukan')

    df = load_file(filepath)
    return {
        'filename': safe_filename,
        'info': get_dataset_info(df, safe_filename, filepath),
        'type_info': detect_data_types(df),
        'preview': get_data_preview(df)
    }


def _dataset_display_name(filename):
    name = secure_filename(filename or '')
    if name.startswith('cleaned_'):
        base = name[len('cleaned_'):]
        return 'cleaned_' + (base.split('_', 1)[1] if '_' in base else base)
    return name.split('_', 1)[1] if '_' in name else name


def _record_dataset_history(username, filename, info=None):
    username_key = _normalize_username(username)
    if not username_key or not filename:
        return

    safe_filename = secure_filename(filename)
    users = _load_users()
    record = users.get(username_key)
    if record is None or isinstance(record, str):
        record = {'password_hash': record if isinstance(record, str) else None}

    history = record.get('dataset_history', [])
    history = [item for item in history if item.get('filename') != safe_filename]
    history.insert(0, {
        'filename': safe_filename,
        'original_name': _dataset_display_name(safe_filename),
        'used_at': int(time.time()),
        'rows': info.get('rows') if info else None,
        'columns': info.get('columns') if info else None,
        'file_size': info.get('file_size') if info else None,
        'has_datetime': bool(info.get('has_datetime')) if info else False
    })
    record['dataset_history'] = history[:30]
    users[username_key] = record
    _save_users(users)


def _get_dataset_history(username):
    username_key = _normalize_username(username)
    record = _get_user_record(username_key)
    if not isinstance(record, dict):
        return []

    history = []
    for item in record.get('dataset_history', []):
        filename = secure_filename(item.get('filename', ''))
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if filename and os.path.exists(filepath):
            history.append(item)
    return history


def login_required(view):
    @wraps(view)
    def wrapped_view(*args, **kwargs):
        if not session.get('user'):
            return redirect(url_for('login'))
        return view(*args, **kwargs)
    return wrapped_view


@app.route('/')
def landing():
    return render_template('landing.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if session.get('user'):
        return redirect(url_for('app_home'))

    error = None
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '')
        if verify_user(username, password):
            session['user'] = username
            return redirect(url_for('app_home'))
        error = 'Nama pengguna atau kata sandi salah'

    return render_template('login.html', error=error)


@app.route('/register', methods=['GET', 'POST'])
def register():
    if session.get('user'):
        return redirect(url_for('app_home'))

    error = None
    success = None
    username = ''
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        password = request.form.get('password', '')
        confirm_password = request.form.get('confirm_password', '')

        if not username or not password or not confirm_password:
            error = 'Semua kolom harus diisi'
        elif password != confirm_password:
            error = 'Kata sandi tidak cocok'
        else:
            try:
                add_user(username, password)
                success = 'Akun berhasil dibuat. Silakan masuk.'
            except ValueError as e:
                error = str(e)

    return render_template('register.html', error=error, success=success, username=username)


@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('landing'))


@app.route('/app')
@login_required
def app_home():
    profile = _get_profile(session.get('user'))
    return render_template('index.html', user=profile['display_name'], profile_username=profile['username'])


@app.route('/api/profile', methods=['GET', 'POST'])
@login_required
def profile_api():
    username = session.get('user')
    if request.method == 'GET':
        profile = _get_profile(username)
        photo_url = None
        if profile['photo_filename']:
            photo_url = url_for('static', filename=f'assets/profile/{profile["photo_filename"]}')
        return jsonify({
            'success': True,
            'profile': {
                'username': profile['username'],
                'display_name': profile['display_name'],
                'photo_url': photo_url
            }
        })

    display_name = request.form.get('display_name', '').strip()
    photo = request.files.get('photo')
    profile = _get_profile(username)
    photo_filename = profile['photo_filename']

    if photo and photo.filename:
        if not _allowed_profile_photo(photo.filename):
            return jsonify({'success': False, 'error': 'Format foto profil tidak valid. Gunakan PNG/JPG/GIF.'}), 400
        ext = photo.filename.rsplit('.', 1)[1].lower()
        safe_name = secure_filename(f'{profile["username"]}.{ext}')
        photo_path = os.path.join(PROFILE_PHOTO_FOLDER, safe_name)
        photo.save(photo_path)
        photo_filename = safe_name

    if display_name:
        _save_profile(username, display_name=display_name, photo_filename=photo_filename)
    elif photo_filename is not None:
        _save_profile(username, photo_filename=photo_filename)

    updated = _get_profile(username)
    photo_url = None
    if updated['photo_filename']:
        photo_url = url_for('static', filename=f'assets/profile/{updated["photo_filename"]}')

    return jsonify({
        'success': True,
        'profile': {
            'username': updated['username'],
            'display_name': updated['display_name'],
            'photo_url': photo_url
        }
    })


@app.route('/api/datasets/history', methods=['GET'])
@login_required
def dataset_history_api():
    return jsonify({'success': True, 'history': _get_dataset_history(session.get('user'))})


@app.route('/api/datasets/reuse', methods=['POST'])
@login_required
def dataset_reuse_api():
    data = request.get_json() or {}
    filename = data.get('filename')
    try:
        payload = _dataset_payload(filename)
        _record_dataset_history(session.get('user'), payload['filename'], payload['info'])
        return jsonify({'success': True, **payload})
    except FileNotFoundError as e:
        return jsonify({'success': False, 'error': str(e)}), 404
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/upload', methods=['POST'])
@login_required
def upload_file():
    if 'file' not in request.files:
        return jsonify({'success': False, 'error': 'No file provided'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'success': False, 'error': 'No file selected'}), 400
    if not allowed_file(file.filename):
        return jsonify({'success': False, 'error': 'Tipe file tidak valid. Diterima: .xlsx, .xls, .csv, .txt'}), 400

    filename = f'{int(time.time())}_{secure_filename(file.filename)}'
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    try:
        payload = _dataset_payload(filename)
        _record_dataset_history(session.get('user'), filename, payload['info'])
        return jsonify({'success': True, **payload})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/viz/timeseries', methods=['POST'])
def viz_timeseries():
    data = request.get_json()
    filename = data.get('filename') # No specific columns needed for timeseries, it auto-detects
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        # get_timeseries_plots already handles column detection internally
        plots = get_timeseries_plots(df)
        return jsonify({'success': True, 'plots': plots})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/export/<fmt>', methods=['GET'])
def export_data(fmt):
    filename = request.args.get('filename')
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        output = io.BytesIO()
        if fmt == 'csv':
            df.to_csv(output, index=False)
            filename_out = f"export_{filename.split('.')[0]}.csv"
            mimetype = 'text/csv'
        else:
            df.to_excel(output, index=False)
            filename_out = f"export_{filename.split('.')[0]}.xlsx"
            mimetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        
        output.seek(0)
        return send_file(
            output,
            mimetype=mimetype,
            as_attachment=True,
            download_name=filename_out
        )
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/stats/numerical', methods=['POST'])
def numerical_stats():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        stats = compute_numerical_stats(df)
        return jsonify({'success': True, 'stats': stats})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/stats/categorical', methods=['POST'])
def categorical_stats():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        stats = compute_categorical_stats(df)
        return jsonify({'success': True, 'stats': stats})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/preview', methods=['POST'])
def data_preview():
    data = request.get_json()
    filename = data.get('filename')
    page = data.get('page', 1)
    per_page = data.get('per_page', 15)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        start = (page - 1) * per_page
        end = start + per_page
        slice_df = df.iloc[start:end]
        for col in slice_df.select_dtypes(include=['datetime64']).columns:
            slice_df = slice_df.copy()
            slice_df[col] = slice_df[col].astype(str)
        return jsonify({
            'success': True,
            'data': slice_df.fillna('').astype(str).values.tolist(),
            'columns': list(df.columns),
            'total_rows': len(df),
            'page': page,
            'total_pages': max(1, (len(df) + per_page - 1) // per_page)
        })
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


# ─── MEETING 15 ROUTES ───────────────────────────────────────────────────────

@app.route('/api/viz/numerical', methods=['POST'])
def viz_numerical():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        plots = get_numerical_plots(df)
        return jsonify({'success': True, 'plots': plots})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/viz/categorical', methods=['POST'])
def viz_categorical():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        plots = get_categorical_plots(df)
        return jsonify({'success': True, 'plots': plots})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/viz/bivariate', methods=['POST'])
def viz_bivariate():
    data = request.get_json()
    filename = data.get('filename')
    x_col = data.get('x_col')
    y_col = data.get('y_col')
    z_col = data.get('z_col')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        plots = get_bivariate_plots(df, x_col=x_col, y_col=y_col, z_col=z_col)
        return jsonify({'success': True, 'plots': plots})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/viz/catnum', methods=['POST'])
def viz_catnum():
    data = request.get_json()
    filename = data.get('filename')
    cat_col = data.get('cat_col')
    num_col = data.get('num_col')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        plots = get_catnum_plots(df, cat_col=cat_col, num_col=num_col)
        return jsonify({'success': True, 'plots': plots})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/insights', methods=['POST'])
def insights():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        result = generate_insights(df)
        return jsonify({'success': True, 'insights': result})
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500

def _detect_similar_columns(df, similarity_threshold=0.85):
    """Detect columns with similar names that might represent the same data."""
    import difflib
    cols = list(df.columns)
    similar_groups = []
    processed = set()
    
    for i, col1 in enumerate(cols):
        if col1 in processed:
            continue
        group = [col1]
        for col2 in cols[i+1:]:
            if col2 in processed:
                continue
            # Normalize for comparison
            norm1 = col1.lower().replace('_', ' ').replace('-', ' ').strip()
            norm2 = col2.lower().replace('_', ' ').replace('-', ' ').strip()
            similarity = difflib.SequenceMatcher(None, norm1, norm2).ratio()
            if similarity >= similarity_threshold:
                group.append(col2)
                processed.add(col2)
        if len(group) > 1:
            similar_groups.append(group)
            processed.add(col1)
    
    return similar_groups


# ─── DATA CLEANING ROUTES ────────────────────────────────────────────────────

@app.route('/api/cleaning/analyze', methods=['POST'])
def cleaning_analyze():
    data = request.get_json()
    filename = data.get('filename')
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        raw_df = load_file(filepath)
        df, normalization = _normalize_text_missing(raw_df)
        total_rows = int(len(df))
        
        # Column standardization analysis
        similar_columns = _detect_similar_columns(df)
        col_standardization = []
        for group in similar_columns:
            col_standardization.append({
                'columns': group,
                'suggested_name': group[0].lower().replace(' ', '_').replace('-', '_'),
                'count': len(group)
            })
        
        # Missing values analysis
        missing = []
        for col in df.columns:
            mc = int(df[col].isna().sum())
            if mc > 0:
                missing.append({
                    'column': col,
                    'missing_count': mc,
                    'missing_pct': round(mc / total_rows * 100, 2) if total_rows else 0,
                    'dtype': str(df[col].dtype),
                    'preview': _dirty_preview(df, df[col].isna())
                })
        
        # Duplicate rows
        dup_mask = df.duplicated(keep=False)
        dup_count = int(df.duplicated().sum())
        dup_preview = _dirty_preview(df, dup_mask, limit=10)
        
        # Outliers (IQR method for numerical cols) - ensure float values are JSON-safe
        outliers = []
        for col in df.select_dtypes(include=[np.number]).columns:
            series = df[col].dropna()
            if series.empty:
                continue
            Q1 = series.quantile(0.25)
            Q3 = series.quantile(0.75)
            IQR = Q3 - Q1
            if pd.isna(IQR):
                continue
            lower = Q1 - 1.5 * IQR
            upper = Q3 + 1.5 * IQR
            outlier_mask = (df[col] < lower) | (df[col] > upper)
            oc = int(outlier_mask.sum())
            if oc > 0:
                outliers.append({
                    'column': col,
                    'outlier_count': oc,
                    'outlier_pct': round(oc / total_rows * 100, 2) if total_rows else 0,
                    'lower_bound': float(lower),
                    'upper_bound': float(upper),
                    'min_val': round(float(series.min()), 4),
                    'max_val': round(float(series.max()), 4),
                    'preview': _dirty_preview(df, outlier_mask)
                })
        
        # Inconsistent data types (columns that might be numeric stored as string)
        type_issues = []
        for col in df.select_dtypes(include=['object']).columns:
            is_numeric_like, convertible_pct, converted_full = _detect_numeric_text_column(df[col])
            if is_numeric_like:
                preview_mask = df[col].notna() & converted_full.notna()
                type_issues.append({
                    'column': col,
                    'current_type': 'object/string',
                    'suggested_type': 'numeric',
                    'convertible_pct': convertible_pct,
                    'preview': _dirty_preview(df, preview_mask)
                })
        
        # Whitespace / leading-trailing spaces
        whitespace = []
        for col in raw_df.select_dtypes(include=['object']).columns:
            ws_mask = raw_df[col].notna() & raw_df[col].apply(lambda x: str(x) != str(x).strip())
            ws_count = int(ws_mask.sum())
            if ws_count > 0:
                whitespace.append({
                    'column': col,
                    'count': ws_count,
                    'preview': _dirty_preview(raw_df, ws_mask)
                })
        
        import math
        def safe_float(v):
            try:
                if v is None: return None
                f = float(v)
                return None if (math.isnan(f) or math.isinf(f)) else round(f, 4)
            except: return None

        # Sanitize outliers floats
        for o in outliers:
            for k in ['lower_bound','upper_bound','min_val','max_val']:
                o[k] = safe_float(o.get(k))

        return jsonify({
            'success': True,
            'total_rows': total_rows,
            'total_cols': len(df.columns),
            'columns': list(df.columns),
            'normalization': normalization,
            'missing': missing,
            'duplicates': {
                'count': dup_count,
                'sample': dup_preview['rows'],
                'columns': dup_preview['columns'],
                'preview': dup_preview
            },
            'outliers': outliers,
            'type_issues': type_issues,
            'whitespace': whitespace,
            'col_standardization': col_standardization
        }) # All values should now be JSON-safe
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/cleaning/apply', methods=['POST'])
def cleaning_apply():
    data = request.get_json()
    filename = data.get('filename')
    actions = data.get('actions', {})
    if not filename:
        return jsonify({'success': False, 'error': 'Filename diperlukan'}), 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(filename))
    try:
        df = load_file(filepath)
        original_shape = df.shape
        report = []

        df, normalization = _normalize_text_missing(df)
        if normalization['stripped_cells'] > 0:
            report.append(f"Normalized whitespace in {normalization['stripped_cells']} text cells")
        if normalization['cleaned_text_cells'] > 0:
            report.append(f"Cleaned symbols/encoding artifacts in {normalization['cleaned_text_cells']} text cells")
        if normalization['pseudo_missing'] > 0:
            report.append(f"Converted {normalization['pseudo_missing']} placeholder/blank text values to missing values")
        if normalization['empty_rows_removed'] > 0:
            report.append(f"Removed {normalization['empty_rows_removed']} completely empty rows")
        if normalization['empty_cols_removed'] > 0:
            report.append(f"Removed {normalization['empty_cols_removed']} completely empty columns")

        df, category_standardized = _standardize_category_values(df)
        if category_standardized > 0:
            report.append(f"Standardized {category_standardized} categorical text values with inconsistent case/spacing")

        # Convert numeric-looking text before missing/outlier handling so imputation
        # and IQR checks operate on the intended numeric columns.
        if actions.get('fix_types'):
            for col in df.select_dtypes(include=['object']).columns:
                is_numeric_like, convertible_pct, converted = _detect_numeric_text_column(df[col])
                if is_numeric_like:
                    df[col] = converted
                    report.append(f"Converted '{col}' to numeric ({convertible_pct}% parseable)")
        
        # Handle missing values
        mv_action = actions.get('missing_values')
        if mv_action == 'drop_rows' and df.isna().any().any(): # Only drop if there are missing values
            before = len(df)
            df = df.dropna()
            report.append(f"Dropped {before - len(df)} rows with missing values")
        elif mv_action == 'fill_mean':
            for col in df.select_dtypes(include=[np.number]).columns:
                n = df[col].isna().sum()
                if n > 0:
                    df[col] = df[col].fillna(df[col].mean())
                    report.append(f"Filled {n} missing in '{col}' with mean ({df[col].mean():.4f})")
            for col in df.select_dtypes(exclude=[np.number]).columns:
                n = df[col].isna().sum()
                if n > 0:
                    mode_val = df[col].mode(dropna=True)
                    if len(mode_val) > 0:
                        df[col] = df[col].fillna(mode_val[0])
                        report.append(f"Filled {n} missing in '{col}' with mode")
        elif mv_action == 'fill_median':
            for col in df.select_dtypes(include=[np.number]).columns:
                n = df[col].isna().sum()
                if n > 0:
                    df[col] = df[col].fillna(df[col].median())
                    report.append(f"Filled {n} missing in '{col}' with median")
            for col in df.select_dtypes(exclude=[np.number]).columns:
                n = df[col].isna().sum()
                if n > 0:
                    mode_val = df[col].mode(dropna=True)
                    if len(mode_val) > 0:
                        df[col] = df[col].fillna(mode_val[0])
                        report.append(f"Filled {n} missing in '{col}' with mode")
        elif mv_action == 'fill_mode':
            for col in df.columns:
                n = df[col].isna().sum()
                if n > 0:
                    mode_val = df[col].mode()
                    if len(mode_val) > 0:
                        df[col] = df[col].fillna(mode_val[0])
                        report.append(f"Filled {n} missing in '{col}' with mode")
        
        # Handle duplicates
        if actions.get('remove_duplicates') and df.duplicated().any(): # Only drop if there are duplicates
            before = len(df)
            df = df.drop_duplicates()
            report.append(f"Removed {before - len(df)} duplicate rows")
        
        # Handle outliers
        outlier_action = actions.get('outliers')
        if outlier_action == 'remove':
            for col in df.select_dtypes(include=[np.number]).columns:
                Q1 = df[col].quantile(0.25)
                Q3 = df[col].quantile(0.75)
                IQR = Q3 - Q1
                lower, upper = Q1 - 1.5 * IQR, Q3 + 1.5 * IQR
                mask = (df[col] >= lower) & (df[col] <= upper) | df[col].isna()
                removed = int((~mask).sum())
                if removed > 0:
                    df = df[mask]
                    report.append(f"Removed {removed} outliers from '{col}'")
        elif outlier_action == 'cap':
            for col in df.select_dtypes(include=[np.number]).columns:
                Q1 = df[col].quantile(0.25)
                Q3 = df[col].quantile(0.75)
                IQR = Q3 - Q1
                lower, upper = Q1 - 1.5*IQR, Q3 + 1.5*IQR
                capped = ((df[col] < lower) | (df[col] > upper)).sum()
                if capped > 0 and not df[col].empty: # Ensure column is not empty before capping
                    df[col] = df[col].clip(lower=lower, upper=upper)
                    report.append(f"Capped {capped} outliers in '{col}'")
        
        # Strip whitespace
        if actions.get('strip_whitespace'):
            for col in df.select_dtypes(include=['object']).columns:
                df[col] = df[col].apply(lambda x: _clean_text_value(x) if isinstance(x, str) else x)
            report.append("Stripped whitespace from all string columns")

        # Standardize similar column names
        if actions.get('standardize_columns'):
            similar_groups = _detect_similar_columns(df)
            for group in similar_groups:
                suggested = group[0].lower().replace(' ', '_').replace('-', '_')
                for col in group[1:]:
                    df = df.rename(columns={col: suggested})
                report.append(f"Standardized columns {group} -> '{suggested}'")

        if not report:
            report.append("No changes were applied because the selected checks found no matching issues")
        
        # Save cleaned file
        clean_name = 'cleaned_' + filename
        clean_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(clean_name))
        
        ext = filename.rsplit('.', 1)[-1].lower()
        if ext in ['xlsx', 'xls']: # Ensure df is not empty before saving
            df.to_excel(clean_path, index=False) 
        else:
            df.to_csv(clean_path, index=False)

        cleaned_info = get_dataset_info(df, clean_name, clean_path)
        _record_dataset_history(session.get('user'), clean_name, cleaned_info)

        return jsonify({
            'success': True,
            'original_shape': list(original_shape),
            'cleaned_shape': list(df.shape),
            'report': report,
            'cleaned_filename': clean_name,
            'rows_removed': original_shape[0] - df.shape[0],
            'cols_removed': original_shape[1] - df.shape[1],
            'info': cleaned_info
        })
    except Exception as e:
        import traceback; print(traceback.format_exc())
        return jsonify({'success': False, 'error': str(e)}), 500


@app.route('/api/cleaning/comparison', methods=['POST'])
def cleaning_comparison():
    """Returns side-by-side comparison stats for original vs cleaned data."""
    data = request.get_json()
    original = data.get('original_filename')
    cleaned = data.get('cleaned_filename')
    if not original or not cleaned:
        return jsonify({'success': False, 'error': 'Both filenames required'}), 400
    try:
        df_orig = load_file(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(original)))
        df_clean = load_file(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(cleaned)))
        return jsonify({
            'success': True,
            'original': { # Ensure all values are JSON-safe
                'rows': int(len(df_orig)), 'cols': int(len(df_orig.columns)),
                'missing': int(df_orig.isna().sum().sum()),
                'duplicates': int(df_orig.duplicated().sum())
            },
            'cleaned': { # Ensure all values are JSON-safe
                'rows': int(len(df_clean)), 'cols': int(len(df_clean.columns)),
                'missing': int(df_clean.isna().sum().sum()),
                'duplicates': int(df_clean.duplicated().sum())
            }
        })
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
