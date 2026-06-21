# Auto EDA Insight 📊
**Intelligent Data Analytics Dashboard**

> Final Exam SD-1306 Data Science Programming | ITSB

---

## 🚀 Quick Start

### 1. Persyaratan / Requirements
- Python 3.9 atau lebih baru
- pip (Python package manager)

### 2. Instalasi / Installation

```bash
# Clone atau extract project ini ke folder pilihan Anda
# Buka terminal di VS Code: Terminal > New Terminal

# Masuk ke folder project
cd Auto_EDA_Insight

# Buat virtual environment
python -m venv venv

# Install semua dependencies
.\venv\Scripts\pip install -r requirements.txt
```

### 3. Jalankan Aplikasi / Run the App

```bash
python app.py
```

Buka browser dan akses: **http://localhost:5000**

---

## 📁 Struktur Project

```
Auto_EDA_Insight/
├── app.py                    ← Main Flask server
├── requirements.txt          ← Python dependencies
├── README.md                 ← Panduan ini
│
├── backend/
│   ├── data_loader.py        ← Load Excel/CSV/TXT
│   ├── preprocessing.py      ← Deteksi tipe data
│   └── descriptive_stats.py  ← Hitung statistik
│
├── frontend/
│   ├── templates/
│   │   └── index.html        ← Halaman utama dashboard
│   └── static/
│       ├── css/style.css     ← Tampilan (dark/light mode)
│       └── js/script.js      ← Logika frontend + bilingual
│
└── data/
    └── raw/                  ← File yang diunggah tersimpan di sini
```

---

## ✅ Fitur Meeting 14

| Fitur | Status |
|-------|--------|
| Upload Excel (.xlsx/.xls) | ✅ |
| Upload CSV (.csv) | ✅ |
| Upload Text (.txt) | ✅ |
| Auto Data Type Detection | ✅ |
| Data Preview (tabel interaktif) | ✅ |
| Dataset Information | ✅ |
| Descriptive Stats — Numerical | ✅ |
| Descriptive Stats — Categorical | ✅ |
| Dark / Light Mode | ✅ |
| Bahasa Indonesia / English | ✅ |
| Responsive UI | ✅ |

---

## 📊 Statistik yang Dihitung

### Numerik
Mean, Median, Min, Max, Std Dev, Variance, Mode, Skewness, Kurtosis,
Missing Count & %, Normal Distribution Test (Shapiro-Wilk), Outlier Count (IQR)

### Kategorik
Unique Categories, Mode, Mode Frequency & %, Missing Count & %, Top 5 Categories

---

## 🔧 Troubleshooting

**Port sudah dipakai?**
```bash
python app.py  # Coba port lain di app.py: port=5001
```

**Error install openpyxl?**
```bash
pip install openpyxl --upgrade
```

**File CSV tidak terbaca?**
Pastikan encoding UTF-8. Jika ada karakter khusus, simpan ulang di Excel sebagai CSV UTF-8.

---

## 👥 Kelompok
Isi nama anggota kelompok di sini.

---
*ITSB — Institut Teknologi Sains Bandung*
