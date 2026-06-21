"""
visualization.py — Automated Visualization Analytics
Meeting 15: Numerical, Categorical, Bivariate & Multivariate, Cat vs Num
Menghasilkan data visualisasi dalam format JSON untuk Plotly.js di frontend
"""

import pandas as pd
import numpy as np
from scipy import stats as scipy_stats
import re


_CATEGORY_ALIASES = {
    'ewallet': 'E-Wallet',
    'ewalet': 'E-Wallet',
    'e-wallet': 'E-Wallet',
    'e-walet': 'E-Wallet',
    'electronicwallet': 'E-Wallet',
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


def _safe(val):
    """Konversi nilai ke tipe yang aman untuk JSON."""
    if val is None:
        return None
    if isinstance(val, (np.integer,)):
        return int(val)
    if isinstance(val, (np.floating,)):
        if np.isnan(val) or np.isinf(val):
            return None
        return float(val)
    if isinstance(val, (np.bool_,)):
        return bool(val)
    return val


def _normalize_category_label(value):
    """Return a stable category label so case/spacing variants are grouped together."""
    if pd.isna(value):
        return np.nan
    text = str(value).strip()
    text = re.sub(r'\s+', ' ', text)
    if text == '':
        return np.nan
    compact_key = re.sub(r'[^a-z0-9]+', '', text.casefold())
    if compact_key in _CATEGORY_ALIASES:
        return _CATEGORY_ALIASES[compact_key]
    return text.casefold().title()


def get_numerical_plots(df: pd.DataFrame) -> dict:
    """
    Hasilkan data plot untuk semua kolom numerik:
    - Histogram
    - Boxplot
    - Density (KDE)
    - QQ Plot
    - Violin Plot
    """
    num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    result = {}

    for col in num_cols:
        series = df[col].dropna()
        if len(series) < 3:
            continue

        vals = series.tolist()

        # --- Histogram ---
        unique_vals = np.sort(series.unique())
        is_discrete = (
            len(unique_vals) <= 20 and
            np.allclose(unique_vals, np.round(unique_vals), atol=1e-8)
        )
        if is_discrete:
            counts_series = series.value_counts().sort_index()
            x_vals = [round(float(v), 4) for v in counts_series.index.tolist()]
            diffs = np.diff(x_vals) if len(x_vals) > 1 else np.array([1.0])
            min_step = float(np.min(diffs[diffs > 0])) if np.any(diffs > 0) else 1.0
            histogram = {
                'x': x_vals,
                'y': [int(c) for c in counts_series.values.tolist()],
                'bin_width': round(min_step * 0.72, 4),
                'mode': 'discrete'
            }
        else:
            counts, bin_edges = np.histogram(series, bins=min(30, max(5, len(series) // 10)))
            histogram = {
                'x': [round(float(e), 4) for e in bin_edges[:-1]],
                'y': [int(c) for c in counts],
                'bin_width': round(float(bin_edges[1] - bin_edges[0]), 4),
                'mode': 'continuous'
            }

        # --- Boxplot ---
        q1 = float(series.quantile(0.25))
        q3 = float(series.quantile(0.75))
        iqr = q3 - q1
        lower_fence = q1 - 1.5 * iqr
        upper_fence = q3 + 1.5 * iqr
        outliers_vals = series[(series < lower_fence) | (series > upper_fence)].tolist()
        boxplot = {
            'min': float(series.min()),
            'q1': round(q1, 4),
            'median': round(float(series.median()), 4),
            'q3': round(q3, 4),
            'max': float(series.max()),
            'mean': round(float(series.mean()), 4),
            'lower_fence': round(lower_fence, 4),
            'upper_fence': round(upper_fence, 4),
            'outliers': [round(float(v), 4) for v in outliers_vals[:200]]
        }

        # --- KDE (Density Plot) ---
        try:
            kde_series = series.astype(float)
            clipped = False
            lower_q = float(kde_series.quantile(0.01))
            upper_q = float(kde_series.quantile(0.99))
            raw_min = float(kde_series.min())
            raw_max = float(kde_series.max())

            # KDE becomes visually flat when a few extreme values stretch the x-axis.
            # Use a robust 1%-99% domain for highly skewed / outlier-heavy columns.
            if (
                np.isfinite(lower_q) and np.isfinite(upper_q) and upper_q > lower_q and
                (raw_min < lower_q or raw_max > upper_q) and
                (raw_max - raw_min) > 3 * (upper_q - lower_q)
            ):
                kde_series = kde_series[(kde_series >= lower_q) & (kde_series <= upper_q)]
                x_min, x_max = lower_q, upper_q
                clipped = True
            else:
                x_min, x_max = raw_min, raw_max

            if len(kde_series) < 3 or kde_series.nunique() < 2 or x_max <= x_min:
                density = None
            else:
                kde = scipy_stats.gaussian_kde(kde_series)
                x_kde = np.linspace(x_min, x_max, 160)
                y_kde = kde(x_kde)
                density = {
                    'x': [round(float(v), 4) for v in x_kde],
                    'y': [round(float(v), 10) for v in y_kde],
                    'domain': 'p01_p99' if clipped else 'full',
                    'x_min': round(float(x_min), 4),
                    'x_max': round(float(x_max), 4)
                }
        except Exception:
            density = None

        # --- QQ Plot ---
        try:
            (quantiles, values), _ = scipy_stats.probplot(series)
            qq = {
                'theoretical': [round(float(v), 4) for v in quantiles],
                'sample': [round(float(v), 4) for v in values],
                'line_x': [round(float(quantiles[0]), 4), round(float(quantiles[-1]), 4)],
                'line_y': [round(float(values[0]), 4), round(float(values[-1]), 4)]
            }
        except Exception:
            qq = None

        # --- Violin (gunakan sample boxplot + density untuk simulasi) ---
        sample_vals = series.sample(min(500, len(series)), random_state=42).tolist()
        violin = {
            'values': [round(float(v), 4) for v in sample_vals],
            'median': round(float(series.median()), 4),
            'mean': round(float(series.mean()), 4)
        }

        result[col] = {
            'histogram': histogram,
            'boxplot': boxplot,
            'density': density,
            'qq': qq,
            'violin': violin
        }

    return result


def get_categorical_plots(df: pd.DataFrame) -> dict:
    """
    Hasilkan data plot untuk kolom kategorikal:
    - Bar Chart
    - Pie Chart
    - Count Plot (sama dengan bar chart, ditampilkan berbeda)
    - Pareto Chart
    """
    cat_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
    result = {}

    for col in cat_cols:
        series = df[col].dropna().map(_normalize_category_label).dropna()
        if len(series) == 0:
            continue

        vc = series.value_counts()
        # Batasi 15 kategori teratas
        top_n = vc.head(15)
        labels = [str(k) for k in top_n.index.tolist()]
        counts = [int(v) for v in top_n.values.tolist()]
        total = sum(counts)
        pcts = [round(c / total * 100, 2) for c in counts]

        # Pareto: cumulative percentage
        cumulative = []
        running = 0
        for c in counts:
            running += c / total * 100
            cumulative.append(round(running, 2))

        result[col] = {
            'labels': labels,
            'counts': counts,
            'pcts': pcts,
            'cumulative': cumulative,
            'total_shown': len(labels),
            'total_categories': int(series.nunique())
        }

    return result


def get_bivariate_plots(df: pd.DataFrame, x_col: str = None, y_col: str = None, z_col: str = None) -> dict:
    """
    Hasilkan data untuk analisis bivariat & multivariat:
    - Scatter Plot (pasangan 2 kolom numerik pertama)
    - Correlation Heatmap
    - Pair Plot data (max 5 kolom numerik)
    - Bubble Chart
    """
    num_cols = df.select_dtypes(include=[np.number]).columns.tolist()

    result = {}

    # --- Correlation Heatmap ---
    # Heatmap selalu menggunakan semua kolom numerik yang tersedia
    # Ini tidak akan terpengaruh oleh x_col, y_col, z_col
    # karena tujuannya adalah overview korelasi antar semua numerik.
    
    if len(num_cols) >= 2:
        corr_df = df[num_cols].corr()
        corr_matrix = []
        for i, col_i in enumerate(num_cols):
            row = []
            for j, col_j in enumerate(num_cols):
                val = corr_df.loc[col_i, col_j]
                row.append(round(float(val), 4) if not np.isnan(val) else None)
            corr_matrix.append(row)

        result['heatmap'] = {
            'columns': num_cols,
            'matrix': corr_matrix
        }

        # --- Scatter Plot ---
        # Gunakan x_col dan y_col yang dipilih user, atau fallback ke 2 kolom pertama
        col_x = x_col if x_col in num_cols else (num_cols[0] if len(num_cols) >= 1 else None)
        col_y = y_col if y_col in num_cols else (num_cols[1] if len(num_cols) >= 2 else None)
        if col_x and col_y and col_x != col_y:
            scatter_df = df[[col_x, col_y]].dropna()
            sample = scatter_df.sample(min(500, len(scatter_df)), random_state=42)

            # Regression line
            try:
                slope, intercept, r_val, p_val, _ = scipy_stats.linregress(
                    sample[col_x], sample[col_y]
                )
                x_range = np.linspace(sample[col_x].min(), sample[col_x].max(), 50)
                y_line = slope * x_range + intercept
                reg_line = {
                    'x': [round(float(v), 4) for v in x_range],
                    'y': [round(float(v), 4) for v in y_line],
                    'r2': round(r_val ** 2, 4),
                    'slope': round(float(slope), 4),
                    'intercept': round(float(intercept), 4)
                }
            except Exception:
                reg_line = None

            result['scatter'] = {
                'x_col': col_x,
                'y_col': col_y,
                'x': [round(float(v), 4) for v in sample[col_x].tolist()],
                'y': [round(float(v), 4) for v in sample[col_y].tolist()],
                'regression': reg_line
            }

        # --- Pair Plot data (max 5 kolom) ---
        pair_cols = num_cols[:5]
        pairs = []
        for i in range(len(pair_cols)):
            for j in range(len(pair_cols)):
                col_i = pair_cols[i]
                col_j = pair_cols[j]
                pair_df = df[[col_i, col_j]].dropna()
                sample = pair_df.sample(min(200, len(pair_df)), random_state=42)
                x_vals = sample.iloc[:, 0].astype(float)
                y_vals = sample.iloc[:, 1].astype(float)
                pairs.append({
                    'x_col': col_i,
                    'y_col': col_j,
                    'row': i,
                    'col': j,
                    'x': [round(float(v), 4) for v in x_vals.tolist()],
                    'y': [round(float(v), 4) for v in y_vals.tolist()]
                })
        result['pairplot'] = {
            'columns': pair_cols,
            'pairs': pairs
        }

        # --- Bubble Chart ---
        # Gunakan x_col, y_col, z_col yang dipilih user, atau fallback ke 3 kolom pertama
        col_x = x_col if x_col in num_cols else (num_cols[0] if len(num_cols) >= 1 else None)
        col_y = y_col if y_col in num_cols else (num_cols[1] if len(num_cols) >= 2 else None)
        col_z = z_col if z_col in num_cols else (num_cols[2] if len(num_cols) >= 3 else None)
        if col_x and col_y and col_z and col_x != col_y and col_x != col_z and col_y != col_z:
            bub_df = df[[col_x, col_y, col_z]].dropna()
            sample = bub_df.sample(min(300, len(bub_df)), random_state=42)
            z_vals = sample[col_z].tolist()
            z_min, z_max = min(z_vals), max(z_vals)
            # Normalize size 5-40
            if z_max != z_min:
                sizes = [round(5 + (v - z_min) / (z_max - z_min) * 35, 2) for v in z_vals]
            else:
                sizes = [20] * len(z_vals)
            result['bubble'] = {
                'x_col': col_x,
                'y_col': col_y,
                'z_col': col_z,
                'x': [round(float(v), 4) for v in sample[col_x].tolist()],
                'y': [round(float(v), 4) for v in sample[col_y].tolist()],
                'z': [round(float(v), 4) for v in z_vals],
                'sizes': sizes
            }

    return result


def get_catnum_plots(df: pd.DataFrame, cat_col: str = None, num_col: str = None) -> dict:
    """
    Analisis Kategorik vs Numerik:
    - Boxplot by Category
    - Violin by Category
    - Grouped Bar Chart
    - Strip Plot
    """
    num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    cat_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()

    if not num_cols or not cat_cols:
        return {}

    # Gunakan kolom yang dipilih user, atau fallback
    selected_cat_col = cat_col if cat_col in cat_cols else (cat_cols[0] if len(cat_cols) >= 1 else None)
    selected_num_col = num_col if num_col in num_cols else (num_cols[0] if len(num_cols) >= 1 else None)

    if not selected_cat_col or not selected_num_col:
        return {}

    cat_series = df[selected_cat_col].map(_normalize_category_label)
    num_series = df[selected_num_col]
    combined = pd.DataFrame({selected_cat_col: cat_series, selected_num_col: num_series}).dropna()

    if combined.empty:
        return {}

    categories = combined[selected_cat_col].unique().tolist()[:12]
    categories = [str(c) for c in categories]

    result = {
        'cat_col': selected_cat_col,
        'num_col': selected_num_col,
        'categories': categories
    }

    # Boxplot by Category
    boxplots = []
    for cat in categories: # Gunakan selected_cat_col dan selected_num_col
        s = combined[combined[selected_cat_col].astype(str) == cat][selected_num_col]
        if len(s) < 2:
            continue
        q1 = float(s.quantile(0.25))
        q3 = float(s.quantile(0.75))
        iqr = q3 - q1
        boxplots.append({
            'category': cat,
            'min': round(float(s.min()), 4),
            'q1': round(q1, 4),
            'median': round(float(s.median()), 4),
            'q3': round(q3, 4),
            'max': round(float(s.max()), 4),
            'mean': round(float(s.mean()), 4),
            'outliers': [round(float(v), 4) for v in
                         s[(s < q1 - 1.5*iqr) | (s > q3 + 1.5*iqr)].tolist()[:50]]
        })
    result['boxplot_by_cat'] = boxplots

    # Violin by Category (sample values)
    violins = []
    for cat in categories: # Gunakan selected_cat_col dan selected_num_col
        s = combined[combined[selected_cat_col].astype(str) == cat][selected_num_col]
        if len(s) < 2:
            continue
        sample = s.sample(min(200, len(s)), random_state=42)
        violins.append({
            'category': cat,
            'values': [round(float(v), 4) for v in sample.tolist()],
            'median': round(float(s.median()), 4),
            'mean': round(float(s.mean()), 4)
        })
    result['violin_by_cat'] = violins

    # Grouped Bar Chart (mean per category, semua kolom numerik)
    grouped_bar = []
    for nc in num_cols[:5]: # Gunakan selected_cat_col
                tmp = pd.DataFrame({selected_cat_col: cat_series, nc: df[nc]}).dropna()
                cat_means = []
                for cat in categories:
                    s = tmp[tmp[selected_cat_col].astype(str) == cat][nc]
                    cat_means.append(round(float(s.mean()), 4) if len(s) > 0 else 0)
                grouped_bar.append({'num_col': nc, 'means': cat_means})
    result['grouped_bar'] = grouped_bar

    # Strip Plot (sample per category)
    strips = [] # Gunakan selected_cat_col dan selected_num_col
    for cat in categories:
        s = combined[combined[selected_cat_col].astype(str) == cat][selected_num_col]
        sample = s.sample(min(100, len(s)), random_state=42)
        strips.append({
            'category': cat,
            'values': [round(float(v), 4) for v in sample.tolist()]
        })
    result['strip'] = strips

    return result

def get_timeseries_plots(df: pd.DataFrame) -> dict:
    """
    Hasilkan analisis deret waktu otomatis:
    - Time Series Line Chart
    - Trend Line (Linear Regression)
    - Moving Average (7-day & 30-day)
    """
    df = df.copy()
    
    # 1. Agresif konversi kolom yang mengandung keyword tanggal
    # PENTING: Gunakan 'order_date', 'ship_date', bukan hanya 'order', 'ship' (terlalu broad!)
    for col in df.columns:
        col_lower = col.lower()
        if any(key in col_lower for key in ['date', 'time', 'order_date', 'ship_date', 'tgl', 'tanggal', 'waktu', 'timestamp']):
            try:
                if not pd.api.types.is_datetime64_any_dtype(df[col]):
                    # Gunakan dayfirst=True untuk format umum di Indonesia/Eropa
                    df[col] = pd.to_datetime(df[col], errors='coerce', dayfirst=True, utc=False)
            except Exception as e:
                print(f"Failed to convert {col}: {e}")
                pass

    date_cols = df.select_dtypes(include=['datetime64']).columns.tolist()
    # Fallback: cek kolom object yang mungkin tanggal
    # PENTING: Gunakan 'order_date', 'ship_date' untuk spesifikasi lebih baik
    if not date_cols:
        for col in df.select_dtypes(include=['object']).columns:
            col_lower = col.lower()
            if any(key in col_lower for key in ['date', 'time', 'order_date', 'ship_date', 'tgl', 'tanggal', 'waktu']):
                try:
                    test_convert = pd.to_datetime(df[col], errors='coerce', dayfirst=True)
                    if test_convert.notna().sum() > len(df) * 0.8:  # At least 80% valid dates
                        df[col] = test_convert
                        date_cols.append(col)
                except:
                    pass
        date_cols = df.select_dtypes(include=['datetime64']).columns.tolist()
    
    # 2. Pastikan ada kolom numerik, jika kolom angka terbaca string (karena simbol $ atau koma)
    # Kita coba bersihkan kolom yang mungkin merupakan angka
    for col in df.select_dtypes(include=['object']).columns:
        # Cek apakah 80% data di kolom ini adalah angka setelah dibersihkan
        sample = df[col].dropna().head(20).astype(str)
        if len(sample) > 0:
            cleaned = sample.str.replace(r'[$,%\.]', '', regex=True)
            numeric_count = cleaned.str.isnumeric().sum()
            if numeric_count >= len(sample) * 0.8:  # At least 80% numeric
                try:
                    df[col] = pd.to_numeric(df[col].astype(str).replace(r'[$,%]', '', regex=True), errors='coerce')
                except:
                    pass

    num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
    
    if not date_cols or not num_cols:
        return {}

    # Gunakan kolom tanggal pertama dan kolom numerik pertama
    date_col = date_cols[0]
    num_col = num_cols[0]
    
    # Sortir berdasarkan waktu
    ts_df = df[[date_col, num_col]].dropna().sort_values(by=date_col)
    
    if ts_df.empty:
        return {}

    # Resample jika data terlalu padat (misal per hari) untuk kelancaran visualisasi
    if len(ts_df) > 300:
        ts_df = ts_df.set_index(date_col).resample('D').mean().reset_index().dropna()

    dates = ts_df[date_col].dt.strftime('%Y-%m-%d').tolist()
    values = ts_df[num_col].tolist()
    
    # Moving Average
    ma7 = ts_df[num_col].rolling(window=7, min_periods=1).mean().tolist()
    ma30 = ts_df[num_col].rolling(window=30, min_periods=1).mean().tolist()
    
    # Trend Line (Linear)
    r_val = 0
    try:
        x_numeric = np.arange(len(ts_df))
        slope, intercept, r_val, _, _ = scipy_stats.linregress(x_numeric, ts_df[num_col])
        trend = (slope * x_numeric + intercept).tolist()
        trend_label = "Meningkat" if slope > 0 else "Menurun"
    except:
        trend = []
        trend_label = "Stabil"

    # Fluctuation and seasonality summary
    fluctuation_pct = None
    seasonality = []
    try:
        if len(ts_df) >= 2 and ts_df[num_col].mean() != 0:
            fluctuation = ts_df[num_col].diff().abs().dropna()
            fluctuation_pct = round(float(fluctuation.mean() / abs(ts_df[num_col].mean()) * 100), 4)
        if len(ts_df) >= 14:
            acf7 = ts_df[num_col].autocorr(lag=7)
            if acf7 is not None and acf7 > 0.45:
                seasonality.append('weekly')
            acf30 = ts_df[num_col].autocorr(lag=30) if len(ts_df) >= 30 else None
            if acf30 is not None and acf30 > 0.45:
                seasonality.append('monthly')
    except Exception:
        fluctuation_pct = None
        seasonality = []

    if not seasonality:
        seasonality = ['no clear seasonality detected']

    return {
        'date_col': date_col,
        'num_col': num_col,
        'dates': dates,
        'values': [round(float(v), 4) for v in values],
        'ma7': [round(float(v), 4) for v in ma7],
        'ma30': [round(float(v), 4) for v in ma30],
        'trend': [round(float(v), 4) for v in trend],
        'trend_info': {
            'label': trend_label,
            'r2': round(float(r_val**2), 4)
        },
        'pattern_summary': {
            'fluctuation_pct': fluctuation_pct,
            'seasonality': seasonality,
            'trend': trend_label,
            'trend_r2': round(float(r_val**2), 4)
        }
    }
