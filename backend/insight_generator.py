"""
insight_generator.py — Intelligent Insight Generator (Optimized & Robust)
Meeting 15: Otomatis hasilkan wawasan dari data tanpa crash akibat NaN/Excel errors
"""

import pandas as pd
import numpy as np
from scipy import stats as scipy_stats

def generate_insights(df: pd.DataFrame) -> list:
    """
    Hasikan daftar insight otomatis berdasarkan data.
    Sudah diamankan dari isu NaN, Infinity, dan tipe data campuran pada Excel.
    """
    insights = []
    
    # Amankan dataframe dari tipe data aneh atau kosong total
    if df is None or df.empty:
        return insights

    # Pisahkan numerik dan kategorik dengan lebih ketat
    num_df = df.select_dtypes(include=[np.number]).dropna(how='all', axis=1)
    cat_df = df.select_dtypes(include=['object', 'category']).dropna(how='all', axis=1)

    # ─── 1. Variabel dengan rata-rata tertinggi ───────────────────────────────
    try:
        if len(num_df.columns) > 0:
            means = num_df.mean().dropna()
            if not means.empty:
                top_mean_col = means.idxmax()
                top_mean_val = means[top_mean_col]
                
                # Pastikan bukan NaN atau Infinity
                if pd.notnull(top_mean_val) and not np.isinf(top_mean_val):
                    insights.append({
                        'type': 'mean',
                        'icon': '📈',
                        'title': f'Rata-rata Tertinggi: <strong>{top_mean_col}</strong>',
                        'description': (
                            f'Variabel <strong>{top_mean_col}</strong> memiliki nilai rata-rata tertinggi '
                            f'sebesar <strong>{round(float(top_mean_val), 2):,}</strong> dibandingkan seluruh variabel numerik lainnya.'
                        ),
                        'level': 'info'
                    })
    except Exception:
        pass

    # ─── 2. Variabel dengan missing value terbanyak ──────────────────────────
    try:
        missing = df.isnull().sum()
        if missing.max() > 0:
            top_miss_col = missing.idxmax()
            top_miss_count = int(missing[top_miss_col])
            top_miss_pct = round(top_miss_count / len(df) * 100, 2)
            level = 'danger' if top_miss_pct > 20 else ('warning' if top_miss_pct > 5 else 'info')
            insights.append({
                'type': 'missing',
                'icon': '⚠️',
                'title': f'Missing Value Terbanyak: <strong>{top_miss_col}</strong>',
                'description': (
                    f'Kolom <strong>{top_miss_col}</strong> memiliki <strong>{top_miss_count}</strong> '
                    f'nilai kosong (<strong>{top_miss_pct}%</strong> dari total data). '
                    + ('Perlu penanganan imputasi segera.' if top_miss_pct > 20 else 'Perlu diperhatikan.')
                ),
                'level': level
            })
        else:
            insights.append({
                'type': 'missing',
                'icon': '✅',
                'title': 'Data Lengkap — Tidak Ada Missing Value',
                'description': 'Seluruh kolom tidak memiliki nilai yang hilang. Dataset dalam kondisi bersih.',
                'level': 'success'
            })
    except Exception:
        pass

    # ─── 3. Variabel dengan outlier terbanyak ────────────────────────────────
    try:
        if len(num_df.columns) > 0:
            outlier_counts = {}
            for col in num_df.columns:
                s = num_df[col].dropna()
                if len(s) < 4:
                    continue
                q1 = s.quantile(0.25)
                q3 = s.quantile(0.75)
                iqr = q3 - q1
                if iqr > 0:
                    n_out = int(((s < q1 - 1.5*iqr) | (s > q3 + 1.5*iqr)).sum())
                    outlier_counts[col] = n_out

            if outlier_counts and max(outlier_counts.values()) > 0:
                top_out_col = max(outlier_counts, key=outlier_counts.get)
                top_out_n = outlier_counts[top_out_col]
                denom = len(num_df[top_out_col].dropna())
                top_out_pct = round(top_out_n / denom * 100, 2) if denom > 0 else 0
                level = 'warning' if top_out_pct > 10 else 'info'
                insights.append({
                    'type': 'outlier',
                    'icon': '🔍',
                    'title': f'Outlier Terbanyak: <strong>{top_out_col}</strong>',
                    'description': (
                        f'Variabel <strong>{top_out_col}</strong> memiliki <strong>{top_out_n}</strong> '
                        f'outlier (<strong>{top_out_pct}%</strong> dari datanya) berdasarkan metode IQR.'
                    ),
                    'level': level
                })
    except Exception:
        pass

    # ─── 4. Variabel dengan standar deviasi terbesar ─────────────────────────
    try:
        if len(num_df.columns) > 0:
            stds = num_df.std().dropna()
            if not stds.empty:
                top_std_col = stds.idxmax()
                top_std_val = stds[top_std_col]
                if pd.notnull(top_std_val) and not np.isinf(top_std_val):
                    insights.append({
                        'type': 'std',
                        'icon': '📊',
                        'title': f'Variabilitas Tertinggi: <strong>{top_std_col}</strong>',
                        'description': (
                            f'Variabel <strong>{top_std_col}</strong> memiliki standar deviasi terbesar '
                            f'(<strong>{round(float(top_std_val), 2):,}</strong>), menunjukkan sebaran data yang paling lebar.'
                        ),
                        'level': 'info'
                    })
    except Exception:
        pass

    # ─── 5. Korelasi terkuat antar variabel ──────────────────────────────────
    try:
        if len(num_df.columns) >= 2:
            corr_df = num_df.corr().abs()
            # Hilangkan NaN hasil kalkulasi korelasi jika ada kolom konstan
            corr_df = corr_df.fillna(0)
            np.fill_diagonal(corr_df.values, 0)
            
            max_corr = corr_df.max().max()
            if max_corr > 0 and pd.notnull(max_corr):
                col_a, col_b = corr_df.stack().idxmax()
                actual_corr_matrix = num_df[[col_a, col_b]].corr()
                actual_corr = actual_corr_matrix.iloc[0, 1] if actual_corr_matrix.shape == (2,2) else 0
                actual_corr = 0 if pd.isnull(actual_corr) else actual_corr
                
                direction = 'positif' if actual_corr > 0 else 'negatif'
                strength = 'sangat kuat' if abs(actual_corr) > 0.8 else ('kuat' if abs(actual_corr) > 0.6 else 'sedang')
                level = 'success' if abs(actual_corr) > 0.6 else 'info'
                insights.append({
                    'type': 'correlation',
                    'icon': '🔗',
                    'title': f'Korelasi Terkuat: <strong>{col_a}</strong> ↔ <strong>{col_b}</strong>',
                    'description': (
                        f'Terdapat korelasi <strong>{direction} {strength}</strong> antara '
                        f'<strong>{col_a}</strong> dan <strong>{col_b}</strong> '
                        f'(r = <strong>{round(float(actual_corr), 4)}</strong>).'
                    ),
                    'level': level
                })
    except Exception:
        pass

    # ─── 6. Distribusi normal vs tidak normal ─────────────────────────────────
    try:
        if len(num_df.columns) > 0:
            normal_cols = []
            non_normal_cols = []
            for col in num_df.columns:
                s = num_df[col].dropna()
                if len(s) < 8:
                    continue
                try:
                    sample = s.sample(min(len(s), 1000), random_state=42) # Batasi 1000 baris agar cepat
                    _, p = scipy_stats.shapiro(sample)
                    if p > 0.05:
                        normal_cols.append(col)
                    else:
                        non_normal_cols.append(col)
                except Exception:
                    pass

            if normal_cols or non_normal_cols:
                insights.append({
                    'type': 'normality',
                    'icon': '🔔',
                    'title': 'Distribusi Data: Normal vs Tidak Normal',
                    'description': (
                        f'<strong>{len(normal_cols)}</strong> variabel terdistribusi normal '
                        f'({", ".join(normal_cols[:2])}{"..." if len(normal_cols) > 2 else ""}). '
                        f'<strong>{len(non_normal_cols)}</strong> variabel tidak normal '
                        f'({", ".join(non_normal_cols[:2])}{"..." if len(non_normal_cols) > 2 else ""}).'
                    ),
                    'level': 'info'
                })
    except Exception:
        pass

    # ─── 7. Skewness ekstrem ──────────────────────────────────────────────────
    try:
        if len(num_df.columns) > 0:
            skews = num_df.skew().abs().dropna()
            if not skews.empty:
                top_skew_col = skews.idxmax()
                top_skew_val = num_df[top_skew_col].skew()
                if pd.notnull(top_skew_val) and abs(top_skew_val) > 1:
                    direction = 'kanan (positif)' if top_skew_val > 0 else 'kiri (negatif)'
                    insights.append({
                        'type': 'skewness',
                        'icon': '📉',
                        'title': f'Kemiringan Ekstrem: <strong>{top_skew_col}</strong>',
                        'description': (
                            f'Variabel <strong>{top_skew_col}</strong> memiliki skewness sebesar '
                            f'<strong>{round(float(top_skew_val), 3)}</strong> (condong ke <strong>{direction}</strong>). '
                            'Data tidak simetris dan mungkin perlu transformasi.'
                        ),
                        'level': 'warning'
                    })
    except Exception:
        pass

    # ─── 8. Kategori dominan ─────────────────────────────────────────────────
    try:
        if len(cat_df.columns) > 0:
            for col in cat_df.columns:
                s = cat_df[col].dropna()
                if len(s) == 0:
                    continue
                vc = s.value_counts()
                if not vc.empty:
                    top_val = str(vc.index[0])
                    top_pct = round(vc.iloc[0] / len(s) * 100, 2)
                    if top_pct > 50:
                        insights.append({
                            'type': 'dominant_category',
                            'icon': '🏆',
                            'title': f'Kategori Dominan di <strong>{col}</strong>',
                            'description': (
                                f'Nilai <strong>"{top_val}"</strong> mendominasi kolom <strong>{col}</strong> '
                                f'dengan proporsi <strong>{top_pct}%</strong> dari seluruh data.'
                            ),
                            'level': 'info'
                        })
                        break  # Cukup kembalikan satu yang paling dominan
    except Exception:
        pass

    # ─── 9. Dataset overview ─────────────────────────────────────────────────
    try:
        total_missing = int(df.isnull().sum().sum())
        total_cells = int(df.shape[0] * df.shape[1])
        completeness = round((1 - total_missing / total_cells) * 100, 2) if total_cells > 0 else 100
        level = 'success' if completeness >= 95 else ('warning' if completeness >= 80 else 'danger')
        insights.append({
            'type': 'overview',
            'icon': '📋',
            'title': f'Kelengkapan Dataset: <strong>{completeness}%</strong>',
            'description': (
                f'Dataset memiliki <strong>{df.shape[0]:,}</strong> baris × '
                f'<strong>{df.shape[1]}</strong> kolom. '
                f'Total sel kosong: <strong>{total_missing:,}</strong> dari <strong>{total_cells:,}</strong> sel.'
            ),
            'level': level
        })
    except Exception:
        pass

    # ─── 10. Time Series Patterns ──────────────────────────────────────────
    try:
        date_cols = df.select_dtypes(include=['datetime64', 'datetime']).columns.tolist()
        num_cols = df.select_dtypes(include=[np.number]).columns.tolist()
        if date_cols and num_cols:
            col_t = date_cols[0]
            col_v = num_cols[0]
            ts_data = df[[col_t, col_v]].dropna().sort_values(col_t)
            if len(ts_data) > 10:
                first_val = ts_data[col_v].iloc[:3].mean()
                last_val = ts_data[col_v].iloc[-3:].mean()
                diff_pct = ((last_val - first_val) / first_val) * 100
                
                trend_str = "Kenaikan" if diff_pct > 0 else "Penurunan"
                level = "success" if diff_pct > 0 else "warning"
                
                insights.append({
                    'type': 'timeseries',
                    'icon': '⏳',
                    'title': f'Analisis Tren Temporal: <strong>{col_v}</strong>',
                    'description': (
                        f'Berdasarkan kolom waktu <strong>{col_t}</strong>, variabel <strong>{col_v}</strong> '
                        f'menunjukkan tren <strong>{trend_str}</strong> sebesar <strong>{abs(round(diff_pct, 2))}%</strong> '
                        f'sejak awal periode data.'
                    ),
                    'level': level
                })
    except Exception:
        pass

    return insights