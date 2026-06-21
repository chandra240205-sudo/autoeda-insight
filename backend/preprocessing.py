"""
preprocessing.py — Data type detection & preview module
"""

import pandas as pd
import numpy as np


def detect_data_types(df: pd.DataFrame) -> dict:
    """
    Detect and classify column data types into:
    numerical, categorical, datetime, boolean
    """
    result = {
        'numerical': [],
        'categorical': [],
        'datetime': [],
        'boolean': [],
        'summary': {}
    }

    for col in df.columns:
        dtype = str(df[col].dtype)
        null_count = int(df[col].isnull().sum())
        null_pct = round((null_count / len(df)) * 100, 2) if len(df) > 0 else 0
        unique_count = int(df[col].nunique())

        col_info = {
            'name': col,
            'dtype': dtype,
            'null_count': null_count,
            'null_pct': null_pct,
            'unique_count': unique_count,
            'sample': _get_sample(df[col])
        }

        if pd.api.types.is_datetime64_any_dtype(df[col]):
            result['datetime'].append(col_info)
        elif pd.api.types.is_bool_dtype(df[col]):
            result['boolean'].append(col_info)
        elif pd.api.types.is_numeric_dtype(df[col]):
            result['numerical'].append(col_info)
        else:
            result['categorical'].append(col_info)

    result['summary'] = {
        'total_columns': len(df.columns),
        'numerical': len(result['numerical']),
        'categorical': len(result['categorical']),
        'datetime': len(result['datetime']),
        'boolean': len(result['boolean']),
    }

    return result


def get_data_preview(df: pd.DataFrame, n_rows: int = 5) -> dict:
    """
    Return first n rows as preview + column types.
    """
    preview_df = df.head(n_rows).copy()

    # Convert datetime to string for JSON
    for col in preview_df.select_dtypes(include=['datetime64']).columns:
        preview_df[col] = preview_df[col].astype(str)

    return {
        'columns': list(df.columns),
        'dtypes': {col: str(df[col].dtype) for col in df.columns},
        'data': preview_df.fillna('').astype(str).values.tolist(),
        'shape': {'rows': int(df.shape[0]), 'cols': int(df.shape[1])}
    }


def _get_sample(series: pd.Series, n: int = 3) -> list:
    """Get n non-null sample values from a series."""
    non_null = series.dropna()
    samples = non_null.head(n).tolist()
    return [str(s) for s in samples]
