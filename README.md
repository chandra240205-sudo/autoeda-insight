# Auto EDA Insight 📊
**Intelligent Data Analytics Dashboard**

> Ujian Akhir Semester — SD-1306 Data Science Programming | ITSB  
> Kelompok 5 — Kelas B

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
cd autoeda_fixed

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install semua dependencies
pip install -r requirements.txt
```

### 3. Jalankan Aplikasi / Run the App

```bash
python app.py
```

Buka browser dan akses: **http://localhost:5000**

---

## 📁 Struktur Project

```
autoeda_fixed/
├── app.py                          ← Main Flask server (routes & API)
├── requirements.txt                ← Python dependencies
├── README.md                       ← Panduan ini
├── users.json                      ← Penyimpanan data pengguna
│
├── backend/
│   ├── data_loader.py              ← Load Excel / CSV / TXT, deteksi datetime
│   ├── preprocessing.py            ← Deteksi tipe data kolom
│   ├── descriptive_stats.py        ← Hitung statistik deskriptif
│   ├── visualization.py            ← Plot Plotly (numerik, kategorik, bivariate, time series)
│   └── insight_generator.py        ← Generasi insight otomatis
│
├── frontend/
│   ├── templates/
│   │   ├── landing.html            ← Halaman landing / beranda publik
│   │   ├── login.html              ← Halaman login
│   │   ├── register.html           ← Halaman registrasi
│   │   └── index.html              ← Dashboard utama (pasca login)
│   └── static/
│       ├── css/style.css           ← Tampilan (dark/light mode, tema)
│       └── js/script.js            ← Logika frontend + i18n bilingual
│
└── data/
    ├── raw/                        ← File dataset yang diunggah pengguna
    └── processed/                  ← File hasil ekspor / cleaned data
```

---

## ✅ Fitur Lengkap

### 🔐 Autentikasi
| Fitur | Status |
|-------|--------|
| Registrasi akun baru | ✅ |
| Login / Logout | ✅ |
| Session management | ✅ |
| Profil pengguna (nama & foto) | ✅ |

### 📂 Manajemen Dataset
| Fitur | Status |
|-------|--------|
| Upload Excel (.xlsx / .xls) | ✅ |
| Upload CSV (.csv) | ✅ |
| Upload Text (.txt) | ✅ |
| Riwayat dataset per pengguna | ✅ |
| Reuse dataset sebelumnya | ✅ |
| Ekspor data ke CSV / XLSX | ✅ |

### 📋 Pratinjau & Info Data
| Fitur | Status |
|-------|--------|
| Auto deteksi tipe data kolom | ✅ |
| Data Preview (tabel interaktif) | ✅ |
| Dataset Information (baris, kolom, tipe) | ✅ |

### 📊 Statistik Deskriptif
| Fitur | Status |
|-------|--------|
| Statistik Numerik | ✅ |
| Statistik Kategorik | ✅ |

### 📈 Visualisasi
| Fitur | Status |
|-------|--------|
| Numerical Viz (histogram, box plot, dsb.) | ✅ |
| Categorical Viz (bar chart, pie chart) | ✅ |
| Correlation & Multivariate (heatmap, scatter) | ✅ |
| Cat vs Numerical (box plot, violin plot) | ✅ |
| Temporal Analytics (time series) | ✅ |

### 🧹 Data Cleaning
| Fitur | Status |
|-------|--------|
| Analisis masalah data otomatis | ✅ |
| Apply cleaning (hapus duplikat, isi missing, dsb.) | ✅ |
| Perbandingan sebelum & sesudah cleaning | ✅ |
| State cleaned dataset tersimpan di sesi | ✅ |

### 💡 Insight & Ekspor
| Fitur | Status |
|-------|--------|
| Smart Insights (otomatis) | ✅ |
| Ekspor laporan PDF | ✅ |

### 🌐 UI / UX
| Fitur | Status |
|-------|--------|
| Dark / Light Mode | ✅ |
| Bahasa Indonesia / English (i18n) | ✅ |
| Responsive UI | ✅ |
| Sidebar navigasi dengan section label | ✅ |

---

## 📊 Statistik yang Dihitung

### Numerik
Mean, Median, Min, Max, Std Dev, Variance, Mode, Skewness, Kurtosis,
Missing Count & %, Uji Distribusi Normal (Shapiro-Wilk), Outlier Count (IQR)

### Kategorik
Unique Categories, Mode, Mode Frequency & %, Missing Count & %, Top 5 Categories

---

## 🔌 API Endpoints

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| POST | `/api/upload` | Upload dataset |
| POST | `/api/preview` | Pratinjau data |
| POST | `/api/stats/numerical` | Statistik numerik |
| POST | `/api/stats/categorical` | Statistik kategorik |
| POST | `/api/viz/numerical` | Visualisasi numerik |
| POST | `/api/viz/categorical` | Visualisasi kategorik |
| POST | `/api/viz/bivariate` | Korelasi & multivariate |
| POST | `/api/viz/catnum` | Cat vs Numerical |
| POST | `/api/viz/timeseries` | Temporal analytics |
| POST | `/api/insights` | Generate insights |
| POST | `/api/cleaning/analyze` | Analisis kualitas data |
| POST | `/api/cleaning/apply` | Terapkan cleaning |
| POST | `/api/cleaning/comparison` | Perbandingan cleaning |
| GET  | `/api/export/<fmt>` | Ekspor CSV / XLSX |
| GET/POST | `/api/profile` | Profil pengguna |
| GET  | `/api/datasets/history` | Riwayat dataset |
| POST | `/api/datasets/reuse` | Gunakan ulang dataset |

---

## 🐍 Dependencies Utama

| Package | Versi | Fungsi |
|---------|-------|--------|
| Flask | 3.0.0 | Web framework |
| Pandas | 2.1.4 | Manipulasi data |
| NumPy | 1.26.2 | Komputasi numerik |
| SciPy | 1.11.4 | Statistik (Shapiro-Wilk, dsb.) |
| openpyxl | 3.1.2 | Baca/tulis Excel (.xlsx) |
| xlrd | 2.0.1 | Baca Excel (.xls legacy) |
| Werkzeug | 3.0.1 | Utilitas Flask |

---

## 🔧 Troubleshooting

**Port sudah dipakai?**
```bash
# Ganti port di baris terakhir app.py:
app.run(port=5001, debug=True)
```

**Error install dependencies?**
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**File CSV tidak terbaca?**  
Pastikan encoding UTF-8. Jika ada karakter khusus, simpan ulang di Excel sebagai *CSV UTF-8*.

**Halaman tidak terupdate setelah perubahan JS/CSS?**  
Lakukan hard refresh di browser: `Ctrl + Shift + R` (Windows/Linux) atau `Cmd + Shift + R` (Mac).

**Cleaned dataset tidak terbaca di visualisasi setelah cleaning?**  
Pastikan Anda menekan tombol **"Gunakan Data Bersih"** setelah proses cleaning selesai, lalu buka kembali menu visualisasi.

---

## 👥 Kelompok 5 — Kelas B

| No | Nama | NIM |
|----|------|-----|
| 1  | *(Muhammad Nabil Khairil Anam)* | *(52250066)* |
| 2  | *(Chandra Rizal Alamsyah)* | *(52250068)* |
| 3  | *(Lulu Najla Salsabilla)* | *(52250069)* |
| 4  | *(Naila Syahrani Putri)* | *(52250070)* |
| 5  | *(Dameria Adelina Mini Simarmata)* | *(52250071)* |

---

*Institut Teknologi Sains Bandung (ITSB) — SD-1306 Data Science Programming*