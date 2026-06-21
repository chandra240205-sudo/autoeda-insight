"""
descriptive_stats.py — Advanced descriptive statistics
Meeting 14: Basic stats for numerical & categorical variables
"""

import pandas as pd
import numpy as np
from scipy import stats as scipy_stats
import re


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


def _normalize_category_label(value):
    """Group category values that only differ by case or extra whitespace."""
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


def compute_numerical_stats(df: pd.DataFrame) -> list:
    """
    Compute comprehensive statistics for all numerical columns.
    Returns list of dicts, one per column.
    """
    num_df = df.select_dtypes(include=[np.number])
    results = []

    for col in num_df.columns:
        series = num_df[col].dropna()
        n_total = len(df[col])
        n_missing = int(df[col].isnull().sum())

        if len(series) == 0:
            results.append({'column': col, 'error': 'All values missing'})
            continue

        # Mode
        mode_result = series.mode()
        mode_val = float(mode_result.iloc[0]) if len(mode_result) > 0 else None

        # Normality test (Shapiro-Wilk, max 5000 samples)
        sample = series.sample(min(len(series), 5000), random_state=42) if len(series) > 5 else series
        try:
            _, p_value = scipy_stats.shapiro(sample)
            is_normal = bool(p_value > 0.05)
        except Exception:
            is_normal = None
            p_value = None

        # Outliers using IQR
        q1 = float(series.quantile(0.25))
        q3 = float(series.quantile(0.75))
        iqr = q3 - q1
        lower_bound = q1 - 1.5 * iqr
        upper_bound = q3 + 1.5 * iqr
        n_outliers = int(((series < lower_bound) | (series > upper_bound)).sum())

        results.append({
            'column': col,
            'count': int(len(series)),
            'mean': _safe_round(series.mean()),
            'median': _safe_round(series.median()),
            'min': _safe_round(float(series.min())),
            'max': _safe_round(float(series.max())),
            'std': _safe_round(series.std()),
            'variance': _safe_round(series.var()),
            'mode': _safe_round(mode_val),
            'skewness': _safe_round(float(series.skew())),
            'kurtosis': _safe_round(float(series.kurtosis())),
            'q1': _safe_round(q1),
            'q3': _safe_round(q3),
            'iqr': _safe_round(iqr),
            'missing_count': n_missing,
            'missing_pct': _safe_round((n_missing / n_total) * 100),
            'is_normal': is_normal,
            'normality_pvalue': _safe_round(float(p_value)) if p_value is not None else None,
            'n_outliers': n_outliers,
            'outlier_pct': _safe_round((n_outliers / len(series)) * 100),
        })

    return results


def compute_categorical_stats(df: pd.DataFrame) -> list:
    """
    Compute statistics for categorical (object/string) columns.
    """
    cat_df = df.select_dtypes(include=['object', 'category'])
    results = []

    for col in cat_df.columns:
        series = df[col]
        n_total = len(series)
        n_missing = int(series.isnull().sum())
        series_clean = series.dropna().map(_normalize_category_label).dropna()

        if len(series_clean) == 0:
            results.append({'column': col, 'error': 'All values missing'})
            continue

        value_counts = series_clean.value_counts()
        mode_val = value_counts.index[0] if len(value_counts) > 0 else None
        mode_freq = int(value_counts.iloc[0]) if len(value_counts) > 0 else 0
        mode_pct = _safe_round((mode_freq / len(series_clean)) * 100)

        # Top 5 categories
        top_categories = [
            {
                'value': str(val),
                'count': int(cnt),
                'pct': _safe_round((cnt / len(series_clean)) * 100)
            }
            for val, cnt in value_counts.head(5).items()
        ]

        results.append({
            'column': col,
            'count': int(len(series_clean)),
            'unique': int(series_clean.nunique()),
            'mode': str(mode_val) if mode_val is not None else None,
            'mode_freq': mode_freq,
            'mode_pct': mode_pct,
            'missing_count': n_missing,
            'missing_pct': _safe_round((n_missing / n_total) * 100),
            'top_categories': top_categories,
        })

    return results


def _safe_round(val, decimals: int = 4):
    """Round a value safely, return None if not possible."""
    try:
        if val is None or np.isnan(val):
            return None
        return round(float(val), decimals)
    except Exception:
        return None
