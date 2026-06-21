"""
data_loader.py — File reading module
Supports: Excel (.xlsx/.xls), CSV (.csv), Text (.txt)
"""

import pandas as pd
import numpy as np
import os
import csv
import re


_NUMERIC_COLUMN_HINTS = {
    'price', 'harga', 'amount', 'jumlah', 'total', 'subtotal', 'sales', 'revenue',
    'profit', 'cost', 'biaya', 'discount', 'diskon', 'qty', 'quantity', 'unit_price',
    'unit price', 'payment', 'nilai'
}

_ID_COLUMN_HINTS = {'id', 'code', 'kode', 'phone', 'telp', 'hp', 'zip', 'postal'}


def load_file(filepath: str) -> pd.DataFrame:
    ext = os.path.splitext(filepath)[1].lower()

    if ext in ['.xlsx', '.xls']:
        # Try all sheets, use first non-empty one
        try:
            xl = pd.ExcelFile(filepath, engine='openpyxl' if ext == '.xlsx' else 'xlrd')
            df = None
            for sheet in xl.sheet_names:
                tmp = xl.parse(sheet)
                if not tmp.empty:
                    df = tmp
                    break
            if df is None:
                df = xl.parse(0)
        except Exception:
            df = pd.read_excel(filepath, engine='openpyxl' if ext == '.xlsx' else 'xlrd')

    elif ext == '.csv':
        # Detect encoding first
        encoding = _detect_encoding(filepath)
        # Detect delimiter
        delimiter = _detect_delimiter(filepath, encoding)
        df = pd.read_csv(
            filepath,
            delimiter=delimiter,
            encoding=encoding,
            encoding_errors='replace',
            on_bad_lines='skip'
        )

    elif ext == '.txt':
        encoding = _detect_encoding(filepath)
        # Try multiple delimiters
        for delim in ['\t', ',', ';', '|']:
            try:
                tmp = pd.read_csv(
                    filepath,
                    delimiter=delim,
                    encoding=encoding,
                    encoding_errors='replace',
                    on_bad_lines='skip'
                )
                if tmp.shape[1] > 1:
                    df = tmp
                    break
            except Exception:
                continue
        else:
            df = pd.read_csv(filepath, encoding=encoding, encoding_errors='replace', on_bad_lines='skip')

    else:
        raise ValueError(f"Unsupported file type: {ext}")

    # Clean column names
    df.columns = [str(c).strip() for c in df.columns]

    # Remove completely empty rows/cols
    df = df.dropna(how='all').reset_index(drop=True)
    df = df.loc[:, ~df.columns.str.startswith('Unnamed')]

    # Auto-parse date columns
    # PENTING: Gunakan 'order_date', 'ship_date' (spesifik) bukan 'order', 'ship' (terlalu broad)
    for col in df.columns:
        col_lower = col.lower()
        if any(kw in col_lower for kw in ['date', 'time', 'tanggal', 'waktu', 'tgl', 'ship_date', 'order_date', 'timestamp']):
            try:
                df[col] = pd.to_datetime(df[col], errors='coerce', dayfirst=True)
            except Exception:
                pass

    df = _coerce_numeric_like_columns(df)

    return df


def _parse_numeric_text(series: pd.Series) -> pd.Series:
    text = series.astype('string').str.strip()
    text = text.str.replace(r'^\((.*)\)$', r'-\1', regex=True)
    text = text.str.replace(r'[^\d,.\-+]', '', regex=True)

    def normalize_number(value):
        if pd.isna(value) or value == '':
            return np.nan
        value = str(value)
        comma = value.rfind(',')
        dot = value.rfind('.')
        if comma > -1 and dot > -1:
            value = value.replace('.', '').replace(',', '.') if comma > dot else value.replace(',', '')
        elif comma > -1:
            parts = value.split(',')
            value = value.replace(',', '') if len(parts[-1]) == 3 and len(parts) > 1 else value.replace(',', '.')
        elif dot > -1:
            parts = value.split('.')
            if len(parts) > 1 and all(len(p) == 3 for p in parts[1:]):
                value = value.replace('.', '')
        return value

    return pd.to_numeric(text.map(normalize_number), errors='coerce')


def _coerce_numeric_like_columns(df: pd.DataFrame) -> pd.DataFrame:
    coerced = df.copy()
    for col in coerced.select_dtypes(include=['object', 'string']).columns:
        col_key = re.sub(r'[_\-\s]+', ' ', str(col).casefold()).strip()
        if any(hint in col_key for hint in _ID_COLUMN_HINTS):
            continue

        non_missing = coerced[col].dropna()
        if non_missing.empty:
            continue

        converted = _parse_numeric_text(non_missing)
        parseable_pct = converted.notna().mean()
        has_numeric_hint = any(hint in col_key for hint in _NUMERIC_COLUMN_HINTS)

        if parseable_pct >= 0.9 or (has_numeric_hint and parseable_pct >= 0.6):
            coerced[col] = _parse_numeric_text(coerced[col])

    return coerced


def get_dataset_info(df: pd.DataFrame, filename: str, filepath: str) -> dict:
    file_size = os.path.getsize(filepath)
    num_cols  = df.select_dtypes(include=[np.number]).columns.tolist()
    cat_cols  = df.select_dtypes(include=['object', 'category']).columns.tolist()
    date_cols = df.select_dtypes(include=['datetime64']).columns.tolist()

    # Agresif: juga cek kolom bertipe object yang NAMANYA mengandung kata terkait waktu
    # (sama seperti logika di visualization.py)
    # PENTING: Gunakan 'order_date', 'ship_date', bukan hanya 'order', 'ship' (terlalu broad!)
    datetime_keywords = ['date', 'time', 'order_date', 'ship_date', 'tgl', 'tanggal', 'waktu', 'timestamp']
    for col in df.select_dtypes(include=['object']).columns:
        col_lower = col.lower()
        if any(kw in col_lower for kw in datetime_keywords) and col not in date_cols:
            try:
                test = pd.to_datetime(df[col], errors='coerce', dayfirst=True)
                if test.notna().sum() > len(df) * 0.3:   # >30% bisa di-parse → anggap datetime
                    date_cols.append(col)
            except Exception:
                pass

    total_missing = int(df.isnull().sum().sum())
    total_cells   = df.shape[0] * df.shape[1]
    missing_pct   = round((total_missing / total_cells) * 100, 2) if total_cells > 0 else 0

    return {
        'filename':            filename,
        'file_size':           _format_size(file_size),
        'rows':                int(df.shape[0]),
        'columns':             int(df.shape[1]),
        'numerical_columns':   len(num_cols),
        'categorical_columns': len(cat_cols),
        'datetime_columns':    len(date_cols),
        'total_missing':       total_missing,
        'missing_pct':         missing_pct,
        'has_datetime':        len(date_cols) > 0,
        'column_names':        list(df.columns),
    }


def _detect_encoding(filepath: str) -> str:
    """Try common encodings, return the first that works."""
    for enc in ['utf-8', 'utf-8-sig', 'latin-1', 'cp1252', 'iso-8859-1']:
        try:
            with open(filepath, 'r', encoding=enc) as f:
                f.read(4096)
            return enc
        except (UnicodeDecodeError, LookupError):
            continue
    return 'latin-1'


def _detect_delimiter(filepath: str, encoding: str) -> str:
    """Sniff CSV delimiter, fallback to comma."""
    try:
        with open(filepath, 'r', encoding=encoding, errors='replace') as f:
            sample = f.read(8192)
        dialect = csv.Sniffer().sniff(sample, delimiters=',;\t|')
        return dialect.delimiter
    except Exception:
        return ','


def _format_size(size_bytes: int) -> str:
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024:
            return f"{size_bytes:.1f} {unit}"
        size_bytes /= 1024
    return f"{size_bytes:.1f} TB"

def _safe_json_value(value):
    """Converts numpy types and other non-JSON-serializable types to standard Python types."""
    if isinstance(value, (np.integer,)):
        return int(value)
    if isinstance(value, (np.floating,)):
        if np.isnan(value) or np.isinf(value):
            return None
        return float(value)
    if isinstance(value, (np.bool_,)):
        return bool(value)
    return value
