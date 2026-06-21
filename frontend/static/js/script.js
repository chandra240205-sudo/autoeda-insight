/**
 * Auto EDA Insight - Main JavaScript
 * Features: Dark/Light Mode, EN/ID Language, File Upload, Stats Display
 */

// =====================================================
// TRANSLATIONS (EN / ID)
// =====================================================
const TRANSLATIONS = {
  en: {
    brand_sub: "Insight Platform",
    nav_main: "MAIN",
    nav_welcome: "Home",
    nav_dashboard: "Dashboard",
    nav_upload: "Upload Data",
    nav_settings: "Settings",
    nav_preview: "Data Preview",
    nav_analytics: "ANALYTICS",
    nav_numerical: "Numerical Stats",
    nav_categorical: "Categorical Stats",
    nav_viz_label: "VISUALIZATION",
    nav_viz_num: "Numerical Viz",
    nav_viz_cat: "Categorical Viz",
    nav_viz_biv: "Correlation & Multivariate",
    nav_viz_cn: "Cat vs Numerical",
    nav_viz_ts: "Temporal Analytics",
    nav_insights: "Smart Insights",
    nav_profile: "Profile",
    di_active: "Active Dataset",
    welcome_title: "Welcome to AutoEDA",
    welcome_subtitle: "Upload your dataset and get instant automated insights, statistics, and visualizations - powered by AI-driven EDA.",
    welcome_cta_upload: "Upload Data Now",
    welcome_cta_team: "Meet Our Team",
    welcome_section_label: "DEVELOPER TEAM",
    welcome_feature_1: "📊 Descriptive Stats",
    welcome_feature_2: "📈 Interactive Visuals",
    welcome_feature_3: "💡 Automated Insights",
    welcome_feature_4: "🔍 Outlier Detection",
    welcome_feature_5: "🔗 Correlation Analysis",
    team_view_full: "View Full Team Profile ->",
    welcome_team_title: "Our Team",
    welcome_team_sub: "Group 5 - Class B - SD-1306 Data Science Programming - ITSB",
    hero_title: "Intelligent Data Analytics",
    hero_sub: "Upload your dataset and get instant automated insights, statistics, and visualizations - powered by AI-driven EDA.",
    hero_cta: "Upload Dataset",
    viz_select_column: "Choose column:",
    stat_rows: "Total Rows",
    stat_cols: "Total Columns",
    stat_numerical: "Numerical",
    stat_categorical: "Categorical",
    stat_missing: "Missing Cells",
    col_map_title: "Column Type Map",
    upload_title: "Upload Dataset",
    upload_sub: "Supported formats: Excel (.xlsx, .xls), CSV (.csv), Text (.txt)",
    upload_drag: "Drag & Drop your file here",
    upload_or: "or",
    upload_browse: "Browse File",
    upload_hint: "Max file size: 50MB",
    uploading: "Uploading and analyzing...",
    view_preview: "View Data Preview",
    view_stats: "View Statistics",
    preview_title: "Data Preview",
    search_placeholder: "Search...",
    select_column: "-- Select Column --",
    select_cat_column: "-- Select Categorical Column --",
    select_num_column: "-- Select Numerical Column --",
    rows_label: "rows",
    cols_label: "cols",
    columns_label: "columns",
    dashboard_desc: "Overview of key charts, trends, and correlations.",
    dashboard_preparing: "Preparing visuals...",
    dashboard_ready: "Dashboard visuals ready",
    dashboard_failed: "Failed to load visuals: ",
    dashboard_histogram: "Histogram",
    dashboard_category_distribution: "Category Distribution",
    dashboard_scatter: "Scatter Plot",
    dashboard_heatmap: "Correlation Heatmap",
    dashboard_corr_matrix: "Correlation Matrix",
    dashboard_time_series: "Time Series",
    chart_values: "Values",
    chart_categories: "Categories",
    chart_value: "Value",
    table_empty: "No data loaded yet. Please upload a file first.",
    num_stats_title: "Numerical Statistics",
    num_stats_sub: "Comprehensive descriptive statistics for all numerical variables",
    cat_stats_title: "Categorical Statistics",
    cat_stats_sub: "Frequency analysis and distribution for categorical variables",
    stats_empty: "No dataset loaded. Please upload a file first.",
    go_upload: "Go to Upload",
    // Stats table headers
    th_column: "Column",
    th_count: "Count",
    th_mean: "Mean",
    th_median: "Median",
    th_min: "Min",
    th_max: "Max",
    th_std: "Std Dev",
    th_variance: "Variance",
    th_mode: "Mode",
    th_skew: "Skewness",
    th_kurtosis: "Kurtosis",
    th_missing: "Missing",
    th_missing_pct: "Missing %",
    th_normal: "Normal?",
    th_outliers: "Outliers",
    th_unique: "Unique",
    th_mode_freq: "Mode Freq",
    th_mode_pct: "Mode %",
    th_top: "Top Categories",
    normal_yes: "Normal",
    normal_no: "Not Normal",
    // Page titles
    page_welcome: "Welcome",
    page_dashboard: "Dashboard",
    page_upload: "Upload Data",
    page_preview: "Data Preview",
    page_numerical: "Numerical Statistics",
    page_categorical: "Categorical Statistics",
    page_viz_num: "Numerical Visualization",
    page_viz_cat: "Categorical Visualization",
    page_viz_biv: "Correlation & Multivariate",
    page_viz_cn: "Categorical vs Numerical",
    page_viz_ts: "Temporal Analytics",
    page_insights: "Smart Insights",
    viz_num_sub: "Histogram, Boxplot, Density Plot, QQ Plot & Violin Plot",
    viz_cat_sub: "Bar Chart, Pie Chart, Count Plot & Pareto Chart",
    viz_biv_sub: "Scatter Plot, Heatmap Correlation, Pair Plot & Bubble Chart",
    viz_cn_sub: "Boxplot, Violin, Grouped Bar & Strip Plot by Category",
    viz_ts_sub: "Trend analysis, moving averages, and temporal patterns",
    viz_ts_empty: "No time/date columns detected in the dataset.",
    insights_sub: "Automated interpretations generated from your data",
    // Toast
    toast_upload_ok: "File uploaded and analyzed successfully!",
    toast_upload_err: "Upload failed: ",
    profile_load_err: "Failed to load profile",
    profile_update_err: "Failed to update profile",
    profile_update_ok: "Profile updated successfully",
    error_prefix: "Error: ",
    toast_type_err: "Invalid file type. Use .xlsx, .csv, or .txt",
    toast_size_err: "File size exceeds {size}MB limit.",
    toast_load_err: "Failed to load statistics.",
    no_numerical: "No numerical columns found in this dataset.",
    no_categorical: "No categorical columns found in this dataset.",
    // Team
    nav_team_section: "TEAM",
    nav_team: "Our Team",
    team_title: "Our Team",
    team_sub: "Group 5 - Class B - SD-1306 Data Science Programming - ITSB",
    team_course: "SD-1306 Data Science Programming",
    team_info: "Group 5 - Class B - Institut Teknologi Sains Bandung (ITSB)",
    team_lecturer: "Lecturer:",
    role_lead: "Project Lead",
    role_lead_desc: "Project Manager & Backend Developer",
    role_backend: "Backend Dev",
    role_backend_desc: "Backend Developer & Data Engineer",
    role_frontend: "Frontend Dev",
    role_frontend_desc: "Frontend Developer & UI/UX Designer",
    role_analyst: "Data Analyst",
    role_analyst_desc: "Data Analyst & Statistics Expert",
    role_viz: "Visualization",
    role_viz_desc: "Data Visualization & Reporting",
    page_team: "Our Team",
    page_profile: "Profile",
    page_settings: "Settings",
    profile_title: "My Profile",
    profile_sub: "Edit your display name and profile photo.",
    history_title: "Dataset History",
    history_sub: "Datasets you have used before can be reopened anytime.",
    history_refresh: "Refresh",
    history_loading: "Loading dataset history...",
    history_empty: "No dataset history yet. Upload a dataset first.",
    history_use: "Use Dataset",
    history_used_at: "Last used",
    history_reuse_ok: "Dataset loaded from history.",
    history_reuse_err: "Failed to load dataset: ",
    // New keys for visuals & navigation
    nav_viz_comp: "Comparison",
    nav_data_quality: "DATA QUALITY",
    nav_cleaning: "Data Cleaning",
    dataset_info_title: "Dataset Info",
    page_viz_comp: "Visual Comparison",
    page_cleaning: "Data Cleaning",
    viz_select_type: "Visual Type:",
    viz_type_histogram: "Histogram",
    viz_type_boxplot: "Boxplot",
    viz_type_density: "Density Plot",
    viz_type_qq: "QQ Plot",
    viz_type_violin: "Violin Plot",
    viz_type_bar: "Bar Chart",
    viz_type_pie: "Pie / Donut Chart",
    viz_type_pareto: "Pareto Chart",
    viz_comp_sub: "Compare distributions across columns visually in one view",
    // Bivariate labels
    biv_x_label: "Column X:",
    biv_y_label: "Column Y:",
    biv_z_label: "Column Z (Size):",
    biv_type_label: "Visual Type:",
    biv_type_heatmap: "Correlation Heatmap",
    biv_type_scatter: "Scatter Plot",
    biv_type_pair: "Pair Plot",
    biv_type_bubble: "Bubble Chart",
    biv_btn_generate: "Generate",
    biv_err_xy_diff: "Please select two different X and Y columns",
    biv_err_xyz_diff: "Please select different X, Y, and Z columns",
    // CatNum labels
    cn_cat_label: "Categorical Column",
    cn_num_label: "Numerical Column",
    cn_type_label: "Visual Type",
    cn_type_boxplot: "Boxplot",
    cn_type_violin: "Violin Plot",
    cn_type_bar: "Grouped Bar",
    cn_type_strip: "Strip Plot",
    cn_btn_generate: "Generate",
    cn_err_select: "Please select categorical and numerical columns first",
    // Comparison section
    comp_type_label: "Visual Type",
    comp_col_label: "Select Columns",
    comp_col_max: "(max 5)",
    comp_loading_cols: "Loading columns...",
    comp_btn_run: "Show Comparison",
    comp_err_min2: "Select at least 2 columns for comparison",
    comp_err_max5: "Maximum 5 columns selected",
    comp_no_num: "No numerical columns",
    comp_no_cat: "No categorical columns",
    comp_type_histogram: "Histogram Overlay",
    comp_type_boxplot: "Boxplot Comparison",
    comp_type_violin: "Violin Comparison",
    comp_type_bar_cat: "Bar Comparison (Categorical)",
    comp_chart_hist: "Density Overlay - Multiple Columns",
    comp_chart_box: "Boxplot Comparison",
    comp_chart_violin: "Violin Comparison",
    comp_chart_bar: "Bar Comparison (Top 5 Categories)",
    comp_stat_median: "Median",
    comp_stat_mean: "Mean",
    comp_stat_q1: "Q1",
    comp_stat_q3: "Q3",
    // Data Cleaning section
    cleaning_title: "Data Cleaning",
    cleaning_sub: "Identify and clean dirty data: missing values, duplicates, outliers, and more",
    cleaning_empty: "No dataset loaded. Please upload a file first.",
    cleaning_go_upload: "Go to Upload",
    cleaning_loading: "Analyzing data quality...",
    cleaning_err_analyze: "Analysis failed: ",
    cleaning_retry: "Retry Analysis",
    cleaning_tab_missing: "Missing Values",
    cleaning_tab_duplicates: "Duplicates",
    cleaning_tab_outliers: "Outliers",
    cleaning_tab_types: "Type Issues",
    cleaning_tab_whitespace: "Whitespace",
    cleaning_actions_title: "Choose Cleaning Actions",
    cleaning_actions_sub: "Select actions to apply to the dataset. The original data will not be deleted - results will be saved as a new file.",
    cleaning_action_leave: "- Leave as is -",
    cleaning_action_drop_rows: "Drop rows with missing values",
    cleaning_action_fill_mean: "Fill with mean",
    cleaning_action_fill_median: "Fill with median",
    cleaning_action_fill_mode: "Fill with mode",
    cleaning_action_title_missing: "Missing Values",
    cleaning_action_title_duplicates: "Duplicate Rows",
    cleaning_action_duplicates_label: "Remove all duplicate rows",
    cleaning_action_title_outliers: "Outliers (IQR Method)",
    cleaning_action_outliers_remove: "Remove rows containing outliers",
    cleaning_action_outliers_cap: "Winsorize (clamp to IQR bounds)",
    cleaning_action_title_types: "Data Types",
    cleaning_action_types_label: "Convert numerical columns stored as text",
    cleaning_action_title_whitespace: "Whitespace",
    cleaning_action_whitespace_label: "Trim leading/trailing whitespace",
    cleaning_action_apply: "Apply Cleaning",
    cleaning_action_reanalyze: "Re-analyze",
    cleaning_result_title: "Data Cleaned Successfully!",
    cleaning_use_cleaned: "Use Cleaned Dataset",
    cleaning_download_csv: "Download CSV",
    cleaning_download_excel: "Download Excel",
    cleaning_summary_rows: "Total Rows",
    cleaning_summary_cols: "Total Columns",
    cleaning_summary_missing: "Missing Values",
    cleaning_summary_duplicates: "Duplicates",
    cleaning_summary_outliers: "Outliers",
    cleaning_summary_types: "Type Issues",
    cleaning_no_missing: "No missing values detected!",
    cleaning_no_outliers: "No outliers detected",
    // Generic chart labels
    chart_frequency: "Frequency",
    chart_density: "Density",
    chart_theoretical_qq: "Theoretical Quantiles",
    chart_sample_qq: "Sample Quantiles",
    chart_count: "Count",
    chart_cumulative_pct: "Cumulative %",
    chart_insight_auto: "Insight",
    chart_data_unavailable: "Data not available for this visual type on the selected column.",
    chart_distribution_mismatch: "sebaran data tidak pas untuk jenis visuali tersebut",
    chart_no_data: "Insufficient data for this visualization.",
    viz_loading: "Loading visualizations...",
    viz_err_load: "Failed to load visualization",
    // Toast / alerts
    toast_fetch_stats: "Failed to load statistics.",
    toast_fetch_insights: "Failed to load insights.",
    // Viz comparison loading text
    comp_loading: "Loading comparison data...",
    catnum_loading: "Loading available columns...",
    catnum_loading_viz: "Loading visualization...",
    biv_loading: "Loading correlation analysis...",
    biv_loading_viz: "Loading visualization...",
    biv_err: "Failed to load correlation",
    cleaning_err_json: "Server responded with status ",
    cleaning_err_json2: " (not valid JSON)",
    cleaning_err_toast: "Analysis failed.",
    cleaning_action_missing: "- Leave as is -",
    cleaning_action_drop: "Drop rows with missing values",
    cleaning_action_mean: "Fill with mean",
    cleaning_action_median: "Fill with median",
    cleaning_action_mode: "Fill with mode",
    cleaning_action_remove: "Remove rows containing outliers",
    cleaning_action_winsorize: "Winsorize (clamp to IQR bounds)",
    cleaning_action_convert: "Convert numerical columns stored as text",
    cleaning_action_trim: "Trim leading/trailing whitespace",
    // Loading texts
    loading_analyze: "Analyzing data and generating insights...",
    loading_cleaning: "Analyzing data quality...",
    // Additional messages
    cleaning_no_duplicates: "No duplicate rows found!",
    cleaning_no_type_issues: "No data type issues detected!",
    cleaning_no_whitespace: "No excess whitespace detected!",
    chart_original_data: "Original Data",
    chart_detected: "Detected",
    chart_none: "None",
  },
  id: {
    brand_sub: "Platform Wawasan",
    nav_main: "UTAMA",
    nav_welcome: "Beranda",
    nav_dashboard: "Dashboard",
    nav_upload: "Unggah Data",
    nav_preview: "Pratinjau Data",
    nav_analytics: "ANALITIK",
    nav_numerical: "Statistik Numerik",
    nav_categorical: "Statistik Kategorik",
    nav_viz_label: "VISUALISASI",
    nav_viz_num: "Viz Numerik",
    nav_viz_cat: "Viz Kategorikal",
    nav_viz_biv: "Korelasi & Multivariat",
    nav_viz_cn: "Kat vs Numerik",
    nav_viz_ts: "Analitik Temporal",
    nav_insights: "Insight Cerdas",
    di_active: "Dataset Aktif",
    welcome_title: "Selamat Datang di AutoEDA",
    welcome_subtitle: "Unggah dataset Anda dan dapatkan wawasan otomatis, statistik, dan visualisasi secara instan - didukung oleh EDA berbasis AI.",
    welcome_cta_upload: "Unggah Data Sekarang",
    welcome_cta_team: "Kenali Tim Kami",
    welcome_section_label: "TIM PENGEMBANG",
    welcome_feature_1: "📊 Statistik Deskriptif",
    welcome_feature_2: "📈 Visualisasi Interaktif",
    welcome_feature_3: "💡 Insight Otomatis",
    welcome_feature_4: "🔍 Deteksi Outlier",
    welcome_feature_5: "🔗 Analisis Korelasi",
    team_view_full: "Lihat Profil Lengkap Tim ->",
    welcome_team_title: "Tim Kami",
    welcome_team_sub: "Kelompok 5 - Kelas B - SD-1306 Pemrograman Sains Data - ITSB",
    hero_title: "Analitik Data Cerdas",
    hero_sub: "Unggah dataset Anda dan dapatkan wawasan otomatis, statistik, dan visualisasi secara instan - didukung oleh EDA berbasis AI.",
    hero_cta: "Unggah Dataset",
    viz_select_column: "Pilih kolom:",
    stat_rows: "Total Baris",
    stat_cols: "Total Kolom",
    stat_numerical: "Numerik",
    stat_categorical: "Kategorik",
    stat_missing: "Sel Kosong",
    col_map_title: "Peta Tipe Kolom",
    upload_title: "Unggah Dataset",
    upload_sub: "Format yang didukung: Excel (.xlsx, .xls), CSV (.csv), Teks (.txt)",
    upload_drag: "Seret & Lepas file Anda di sini",
    upload_or: "atau",
    upload_browse: "Pilih File",
    upload_hint: "Ukuran file maksimal: 50MB",
    uploading: "Mengunggah dan menganalisis...",
    view_preview: "Lihat Pratinjau Data",
    view_stats: "Lihat Statistik",
    preview_title: "Pratinjau Data",
    search_placeholder: "Cari...",
    select_column: "-- Pilih Kolom --",
    select_cat_column: "-- Pilih Kolom Kategorik --",
    select_num_column: "-- Pilih Kolom Numerik --",
    rows_label: "baris",
    cols_label: "kolom",
    columns_label: "kolom",
    dashboard_desc: "Ringkasan visual utama, tren, dan korelasi.",
    dashboard_preparing: "Menyiapkan visual...",
    dashboard_ready: "Visual dashboard siap",
    dashboard_failed: "Gagal memuat visual: ",
    dashboard_histogram: "Histogram",
    dashboard_category_distribution: "Distribusi Kategori",
    dashboard_scatter: "Scatter Plot",
    dashboard_heatmap: "Heatmap Korelasi",
    dashboard_corr_matrix: "Matriks Korelasi",
    dashboard_time_series: "Deret Waktu",
    chart_values: "Nilai",
    chart_categories: "Kategori",
    chart_value: "Nilai",
    table_empty: "Belum ada data. Silakan unggah file terlebih dahulu.",
    num_stats_title: "Statistik Numerik",
    num_stats_sub: "Statistik deskriptif komprehensif untuk semua variabel numerik",
    cat_stats_title: "Statistik Kategorik",
    cat_stats_sub: "Analisis frekuensi dan distribusi untuk variabel kategorik",
    stats_empty: "Belum ada dataset. Silakan unggah file terlebih dahulu.",
    go_upload: "Pergi ke Unggah",
    th_column: "Kolom",
    th_count: "Jumlah",
    th_mean: "Rata-rata",
    th_median: "Median",
    th_min: "Min",
    th_max: "Max",
    th_std: "Std Deviasi",
    th_variance: "Varians",
    th_mode: "Modus",
    th_skew: "Kemencengan",
    th_kurtosis: "Kurtosis",
    th_missing: "Hilang",
    th_missing_pct: "% Hilang",
    th_normal: "Normal?",
    th_outliers: "Pencilan",
    th_unique: "Unik",
    th_mode_freq: "Frek. Modus",
    th_mode_pct: "% Modus",
    th_top: "Kategori Teratas",
    normal_yes: "Normal",
    normal_no: "Tidak Normal",
    page_welcome: "Selamat Datang",
    page_dashboard: "Dashboard",
    page_upload: "Unggah Data",
    page_preview: "Pratinjau Data",
    page_numerical: "Statistik Numerik",
    page_categorical: "Statistik Kategorik",
    page_viz_num: "Visualisasi Numerik",
    page_viz_cat: "Visualisasi Kategorik",
    page_viz_biv: "Korelasi & Multivariat",
    page_viz_cn: "Kategorik vs Numerik",
    page_viz_ts: "Analitik Temporal",
    page_insights: "Insight Cerdas",
    viz_num_sub: "Histogram, Boxplot, Density Plot, QQ Plot & Violin Plot",
    viz_cat_sub: "Bar Chart, Pie Chart, Count Plot & Pareto Chart",
    viz_biv_sub: "Scatter Plot, Heatmap Korelasi, Pair Plot & Bubble Chart",
    viz_cn_sub: "Boxplot, Violin, Grouped Bar & Strip Plot berdasarkan Kategori",
    viz_ts_sub: "Analisis tren, rata-rata bergerak, dan pola temporal",
    viz_ts_empty: "Tidak ada kolom waktu/tanggal yang terdeteksi dalam dataset.",
    insights_sub: "Interpretasi otomatis yang dihasilkan dari data Anda",
    toast_upload_ok: "File berhasil diunggah dan dianalisis!",
    toast_upload_err: "Gagal mengunggah: ",
    toast_type_err: "Tipe file tidak valid. Gunakan .xlsx, .csv, atau .txt",
    toast_size_err: "Ukuran file melebihi batas {size}MB.",
    toast_load_err: "Gagal memuat statistik.",
    no_numerical: "Tidak ada kolom numerik dalam dataset ini.",
    no_categorical: "Tidak ada kolom kategorik dalam dataset ini.",
    // Team
    nav_team_section: "TIM",
    nav_team: "Tim Kami",
    team_title: "Tim Kami",
    team_sub: "Kelompok 5 - Kelas B - SD-1306 Pemrograman Sains Data - ITSB",
    team_course: "SD-1306 Pemrograman Sains Data",
    team_info: "Kelompok 5 - Kelas B - Institut Teknologi Sains Bandung (ITSB)",
    team_lecturer: "Dosen:",
    role_lead: "Ketua Kelompok",
    role_lead_desc: "Manajer Proyek & Pengembang Backend",
    role_backend: "Backend Dev",
    role_backend_desc: "Pengembang Backend & Data Engineer",
    role_frontend: "Frontend Dev",
    role_frontend_desc: "Pengembang Frontend & Desainer UI/UX",
    role_analyst: "Analis Data",
    role_analyst_desc: "Analis Data & Ahli Statistik",
    role_viz: "Visualisasi",
    role_viz_desc: "Visualisasi Data & Pelaporan",
    page_team: "Tim Kami",
    page_profile: "Profil",
    profile_title: "Profil Saya",
    profile_sub: "Ubah nama tampilan dan foto profil Anda.",
    history_title: "Riwayat Dataset",
    history_sub: "Dataset yang pernah digunakan bisa dibuka kembali kapan saja.",
    history_refresh: "Muat Ulang",
    history_loading: "Memuat riwayat dataset...",
    history_empty: "Belum ada riwayat dataset. Unggah dataset terlebih dahulu.",
    history_use: "Gunakan Dataset",
    history_used_at: "Terakhir digunakan",
    history_reuse_ok: "Dataset berhasil dimuat dari riwayat.",
    history_reuse_err: "Gagal memuat dataset: ",
    profile_load_err: "Gagal memuat profil",
    profile_update_err: "Gagal memperbarui profil",
    profile_update_ok: "Profil berhasil diperbarui",
    error_prefix: "Kesalahan: ",
    // New keys for visuals & navigation
    nav_viz_comp: "Perbandingan",
    nav_data_quality: "KUALITAS DATA",
    nav_cleaning: "Pembersihan Data",
    dataset_info_title: "Info Dataset",
    page_viz_comp: "Perbandingan Visual",
    page_cleaning: "Pembersihan Data",
    viz_select_type: "Jenis Visual:",
    viz_type_histogram: "Histogram",
    viz_type_boxplot: "Boxplot",
    viz_type_density: "Density Plot",
    viz_type_qq: "QQ Plot",
    viz_type_violin: "Violin Plot",
    viz_type_bar: "Bar Chart",
    viz_type_pie: "Pie / Donut Chart",
    viz_type_pareto: "Pareto Chart",
    viz_comp_sub: "Bandingkan distribusi antar kolom secara visual dalam satu tampilan",
    // Bivariate labels
    biv_x_label: "Kolom X:",
    biv_y_label: "Kolom Y:",
    biv_z_label: "Kolom Z (Ukuran):",
    biv_type_label: "Jenis Visual:",
    biv_type_heatmap: "Heatmap Korelasi",
    biv_type_scatter: "Scatter Plot",
    biv_type_pair: "Pair Plot",
    biv_type_bubble: "Bubble Chart",
    biv_btn_generate: "Generate",
    biv_err_xy_diff: "Pilih dua kolom X dan Y yang berbeda",
    biv_err_xyz_diff: "Pilih kolom X, Y, dan Z yang berbeda satu sama lain",
    // CatNum labels
    cn_cat_label: "Kolom Kategorik",
    cn_num_label: "Kolom Numerik",
    cn_type_label: "Jenis Visual",
    cn_type_boxplot: "Boxplot",
    cn_type_violin: "Violin Plot",
    cn_type_bar: "Grouped Bar",
    cn_type_strip: "Strip Plot",
    cn_btn_generate: "Generate",
    cn_err_select: "Pilih kolom kategorik dan numerik terlebih dahulu",
    // Comparison section
    comp_type_label: "Jenis Visual",
    comp_col_label: "Pilih Kolom",
    comp_col_max: "(maks 5)",
    comp_loading_cols: "Memuat kolom...",
    comp_btn_run: "Tampilkan Comparison",
    comp_err_min2: "Pilih minimal 2 kolom untuk perbandingan",
    comp_err_max5: "Maksimal 5 kolom dipilih",
    comp_no_num: "Tidak ada kolom numerik",
    comp_no_cat: "Tidak ada kolom kategorik",
    comp_type_histogram: "Histogram Overlay",
    comp_type_boxplot: "Boxplot Comparison",
    comp_type_violin: "Violin Comparison",
    comp_type_bar_cat: "Bar Comparison (Kategorik)",
    comp_chart_hist: "Density Overlay - Banyak Kolom",
    comp_chart_box: "Perbandingan Boxplot",
    comp_chart_violin: "Perbandingan Violin",
    comp_chart_bar: "Perbandingan Bar (Top 5 Kategori)",
    comp_stat_median: "Median",
    comp_stat_mean: "Rata-rata",
    comp_stat_q1: "Q1",
    comp_stat_q3: "Q3",
    // Data Cleaning section
    cleaning_title: "Pembersihan Data",
    cleaning_sub: "Identifikasi dan bersihkan data kotor: missing values, duplikat, outlier, dan lainnya",
    cleaning_empty: "Belum ada dataset. Silakan unggah file terlebih dahulu.",
    cleaning_go_upload: "Pergi ke Unggah",
    cleaning_loading: "Menganalisis kualitas data...",
    cleaning_err_analyze: "Analisis gagal: ",
    cleaning_retry: "Coba Lagi",
    cleaning_tab_missing: "Missing Values",
    cleaning_tab_duplicates: "Duplikat",
    cleaning_tab_outliers: "Outlier",
    cleaning_tab_types: "Masalah Tipe",
    cleaning_tab_whitespace: "Spasi",
    cleaning_actions_title: "Pilih Aksi Pembersihan",
    cleaning_actions_sub: "Pilih tindakan yang ingin diterapkan pada dataset. Data asli tidak akan dihapus - hasil akan disimpan sebagai file baru.",
    cleaning_action_leave: "- Biarkan (tidak diubah) -",
    cleaning_action_drop_rows: "Hapus baris yang memiliki missing value",
    cleaning_action_fill_mean: "Isi dengan rata-rata (mean)",
    cleaning_action_fill_median: "Isi dengan median",
    cleaning_action_fill_mode: "Isi dengan nilai terbanyak (mode)",
    cleaning_action_title_missing: "Missing Values",
    cleaning_action_title_duplicates: "Baris Duplikat",
    cleaning_action_duplicates_label: "Hapus semua baris duplikat",
    cleaning_action_title_outliers: "Outlier (Metode IQR)",
    cleaning_action_outliers_remove: "Hapus baris yang mengandung outlier",
    cleaning_action_outliers_cap: "Winsorize (jepit ke batas IQR)",
    cleaning_action_title_types: "Tipe Data",
    cleaning_action_types_label: "Konversi kolom numerik yang disimpan sebagai teks",
    cleaning_action_title_whitespace: "Spasi",
    cleaning_action_whitespace_label: "Hapus spasi berlebih di awal/akhir teks",
    cleaning_action_apply: "Terapkan Pembersihan",
    cleaning_action_reanalyze: "Analisis Ulang",
    cleaning_result_title: "Data Berhasil Dibersihkan!",
    cleaning_use_cleaned: "Gunakan Dataset Bersih",
    cleaning_download_csv: "Download CSV",
    cleaning_download_excel: "Download Excel",
    cleaning_summary_rows: "Total Baris",
    cleaning_summary_cols: "Total Kolom",
    cleaning_summary_missing: "Nilai Hilang",
    cleaning_summary_duplicates: "Duplikat",
    cleaning_summary_outliers: "Outlier",
    cleaning_summary_types: "Masalah Tipe",
    cleaning_no_missing: "Tidak ada missing value terdeteksi!",
    cleaning_no_outliers: "Tidak ada outlier terdeteksi",
    // Generic chart labels
    chart_frequency: "Frekuensi",
    chart_density: "Densitas",
    chart_theoretical_qq: "Kuantil Teoretis",
    chart_sample_qq: "Kuantil Sampel",
    chart_count: "Jumlah",
    chart_cumulative_pct: "Kumulatif %",
    chart_insight_auto: "Insight",
    chart_data_unavailable: "Data tidak tersedia untuk jenis visual ini pada kolom yang dipilih.",
    chart_distribution_mismatch: "sebaran data tidak pas untuk jenis visuali tersebut",
    chart_no_data: "Data tidak cukup untuk visualisasi ini.",
    viz_loading: "Memuat visualisasi...",
    viz_err_load: "Gagal memuat visualisasi",
    // Toast / alerts
    toast_fetch_stats: "Gagal memuat statistik.",
    toast_fetch_insights: "Gagal memuat insight.",
    // Viz comparison loading text
    comp_loading: "Memuat data untuk perbandingan...",
    catnum_loading: "Memuat kolom yang tersedia...",
    catnum_loading_viz: "Memuat visualisasi...",
    biv_loading: "Memuat analisis korelasi...",
    biv_loading_viz: "Memuat visualisasi...",
    biv_err: "Gagal memuat korelasi",
    cleaning_err_json: "Server merespons status ",
    cleaning_err_json2: " (bukan JSON valid)",
    cleaning_err_toast: "Analisis gagal.",
    cleaning_action_missing: "- Biarkan (tidak diubah) -",
    cleaning_action_drop: "Hapus baris yang memiliki missing value",
    cleaning_action_mean: "Isi dengan rata-rata (mean)",
    cleaning_action_median: "Isi dengan median",
    cleaning_action_mode: "Isi dengan nilai terbanyak (mode)",
    cleaning_action_remove: "Hapus baris yang mengandung outlier",
    cleaning_action_winsorize: "Winsorize (jepit ke batas IQR)",
    cleaning_action_convert: "Konversi kolom numerik yang disimpan sebagai teks",
    cleaning_action_trim: "Hapus spasi berlebih di awal/akhir teks",
    // Loading texts
    loading_analyze: "Menganalisis data dan membuat insight...",
    loading_cleaning: "Menganalisis kualitas data...",
    // Additional messages
    cleaning_no_duplicates: "Tidak ada baris duplikat!",
    cleaning_no_type_issues: "Tidak ada masalah tipe data terdeteksi!",
    cleaning_no_whitespace: "Tidak ada whitespace berlebih terdeteksi!",
    chart_original_data: "Data Asli",
    chart_detected: "Terdeteksi",
    chart_none: "Tidak ada",
  }
};

// =====================================================
// APP STATE
// =====================================================
const state = {
  lang: localStorage.getItem('eda_lang') || 'en',
  theme: localStorage.getItem('eda_theme') || 'dark',
  currentFile: null,
  datasetInfo: null,
  previewPage: 1,
  previewTotalPages: 1,
  allRows: [],
  filteredRows: [],
  columns: [],
};

// =====================================================
// INIT
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(state.theme);
  applyLang(state.lang);
  initSidebar();
  initThemeToggle();
  initLangToggle();
  initUpload();
  initProfileForm();
  initTableSearch();
  initPagination();
  initExportButtons(); // Tambahkan inisialisasi ekspor
  navigateSection('dashboard');
});

// =====================================================
// THEME
// =====================================================
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  state.theme = theme;
  localStorage.setItem('eda_theme', theme);
}

function initThemeToggle() {
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });
}

// =====================================================
// LANGUAGE
// =====================================================
function t(key) {
  // Try current language, fall back to English, then the key
  return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
}

function applyLang(lang) {
  state.lang = lang;
  localStorage.setItem('eda_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.getElementById('lang-label').textContent = lang.toUpperCase();

  // Translate elements with data-i18n. Use innerHTML when data-i18n-html is present.
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || '';
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = txt;
    else el.textContent = txt;
  });

  // Translate common attributes: placeholder, title, alt, value, aria-label
  ['placeholder','title','alt','value','aria-label'].forEach(attr => {
    document.querySelectorAll('[data-i18n-' + attr + ']').forEach(el => {
      const key = el.getAttribute('data-i18n-' + attr);
      const txt = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || '';
      try { el.setAttribute(attr, txt); } catch(e) { /* ignore */ }
    });
  });

  // Translate option elements with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    opt.textContent = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || opt.textContent;
  });

  refreshDynamicLanguage();
  // Update page title
  updatePageTitle();
}

function refreshDynamicLanguage() {
  const active = document.querySelector('.nav-item.active')?.getAttribute('data-section');
  if (!active) return;

  if (state.datasetInfo) {
    updateSidebarInfo({ info: state.datasetInfo });
    const badge = document.getElementById('col-map-badge');
    if (badge && badge.textContent !== '-') {
      const total = parseInt(badge.textContent, 10);
      if (!Number.isNaN(total)) badge.textContent = `${total} ${t('columns_label')}`;
    }
  }

  if (active === 'stats-numerical' && state.currentFile) loadNumericalStats();
  if (active === 'stats-categorical' && state.currentFile) loadCategoricalStats();
  if (active === 'dashboard' && state.currentFile) loadDashboardOverview();
  if (active === 'profile') loadDatasetHistory();
  if (active === 'viz-numerical' && window._numPlots) {
    const col = document.getElementById('viz-num-select')?.value;
    const type = document.getElementById('viz-num-type')?.value || 'histogram';
    if (col && typeof showNumVizSingle === 'function') showNumVizSingle(col, type);
  }
  if (active === 'viz-categorical' && window._catPlots) {
    const col = document.getElementById('viz-cat-select')?.value;
    const type = document.getElementById('viz-cat-type')?.value || 'bar';
    if (col && typeof showCatVizSingle === 'function') showCatVizSingle(col, type);
  }
  if (active === 'viz-comparison' && window._compNumPlots) loadVizComparison();
  if (active === 'viz-bivariate' && state.currentFile) loadVizBivariate();
  if (active === 'viz-catnum' && state.currentFile) loadVizCatNum();
  if (active === 'viz-timeseries' && state.currentFile) loadVizTimeSeries();
  if (active === 'insights' && state.currentFile) loadInsights();
  if (active === 'data-cleaning' && _cleaningData) {
    renderCleaningSummary(_cleaningData);
    renderCleaningTabs(_cleaningData);
  }
}

function initLangToggle() {
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(state.lang === 'en' ? 'id' : 'en');
  });
}

// =====================================================
// SIDEBAR & NAVIGATION
// =====================================================
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const mainWrapper = document.querySelector('.main-wrapper');

  // Toggle manual via tombol
  document.getElementById('sidebar-toggle').addEventListener('click', () => {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    mainWrapper.classList.toggle('expanded', isCollapsed);
    state.sidebarPinned = !isCollapsed;
  });

  // Hover: otomatis melebar saat kursor masuk, menyempit saat keluar
  // Hanya aktif saat sidebar dalam kondisi collapsed (tidak dipaksa buka)
  sidebar.addEventListener('mouseenter', () => {
    if (sidebar.classList.contains('collapsed')) {
      sidebar.classList.add('hover-open');
    }
  });
  sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('hover-open');
  });

  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navigateSection(item.getAttribute('data-section'));
    });
  });
}

async function loadProfile() {
  const status = document.getElementById('profile-status');
  status.textContent = '';
  try {
    const res = await fetch('/api/profile');
    const data = await res.json();
    if (!data.success) {
      showToast(t('profile_load_err'), 'error');
      return;
    }
    const profile = data.profile;
    document.getElementById('profile-display-name').textContent = profile.display_name || profile.username;
    document.getElementById('profile-username').textContent = `@${profile.username}`;
    document.getElementById('display-name').value = profile.display_name || '';
    document.getElementById('profile-summary').textContent = `${profile.username ? '@' + profile.username : ''}`;
    const avatarImg = document.getElementById('profile-avatar-img');
    const avatarFallback = document.getElementById('profile-avatar-fallback');
    if (profile.photo_url) {
      avatarImg.src = profile.photo_url;
      avatarImg.style.display = 'block';
      avatarFallback.style.display = 'none';
    } else {
      avatarImg.style.display = 'none';
      avatarFallback.style.display = 'flex';
      avatarFallback.textContent = profile.display_name ? profile.display_name.charAt(0).toUpperCase() : profile.username.charAt(0).toUpperCase();
    }
    const topbarLabel = document.getElementById('topbar-user-label');
    if (topbarLabel) topbarLabel.textContent = profile.display_name || profile.username;
    loadDatasetHistory();
  } catch (err) {
    showToast(t('profile_load_err') + ': ' + (err.message || err), 'error');
  }
}

function activateDatasetFromResponse(data, toastMessage) {
  state.currentFile = data.filename;
  state.datasetInfo = data.info;
  renderUploadResult(data);
  renderDashboardCards(data);
  renderColumnMap(data.type_info);
  updateSidebarInfo(data);
  const tsNav = document.getElementById('nav-ts');
  if (tsNav) tsNav.style.display = data.info?.has_datetime ? 'flex' : 'none';
  if (toastMessage) showToast(toastMessage, 'success');
}

function formatHistoryDate(value) {
  if (!value) return '-';
  const date = new Date(Number(value) * 1000);
  if (Number.isNaN(date.getTime())) return '-';
  return date.toLocaleString(state.lang === 'id' ? 'id-ID' : 'en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
}

function renderDatasetHistory(history) {
  const list = document.getElementById('dataset-history-list');
  if (!list) return;
  if (!history || history.length === 0) {
    list.innerHTML = `<div class="history-empty">${t('history_empty')}</div>`;
    return;
  }

  list.innerHTML = history.map(item => {
    const rows = item.rows ?? '-';
    const columns = item.columns ?? '-';
    const size = item.file_size || '-';
    return `
      <div class="history-item">
        <div>
          <div class="history-name">${escapeHtml(item.original_name || item.filename)}</div>
          <div class="history-meta">
            <span>${escapeHtml(String(rows))} ${t('rows_label')}</span>
            <span>${escapeHtml(String(columns))} ${t('cols_label')}</span>
            <span>${escapeHtml(size)}</span>
            <span>${t('history_used_at')}: ${escapeHtml(formatHistoryDate(item.used_at))}</span>
          </div>
        </div>
        <button class="btn-primary" type="button" onclick="reuseDataset('${escapeAttr(item.filename)}')">${t('history_use')}</button>
      </div>
    `;
  }).join('');
}

async function loadDatasetHistory() {
  const list = document.getElementById('dataset-history-list');
  if (!list) return;
  list.innerHTML = `<div class="history-empty">${t('history_loading')}</div>`;
  try {
    const res = await fetch('/api/datasets/history');
    const data = await res.json();
    if (!data.success) {
      list.innerHTML = `<div class="history-empty">${escapeHtml(data.error || t('toast_load_err'))}</div>`;
      return;
    }
    renderDatasetHistory(data.history || []);
  } catch (err) {
    list.innerHTML = `<div class="history-empty">${escapeHtml(err.message || err)}</div>`;
  }
}

async function reuseDataset(filename) {
  showLoading(t('uploading'));
  try {
    const res = await fetch('/api/datasets/reuse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename })
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) {
      showToast(t('history_reuse_err') + (data.error || ''), 'error');
      return;
    }
    activateDatasetFromResponse(data, t('history_reuse_ok'));
    loadDatasetHistory();
  } catch (err) {
    hideLoading();
    showToast(t('history_reuse_err') + (err.message || err), 'error');
  }
}

async function handleProfileFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('profile-status');
  status.textContent = '';
  const form = document.getElementById('profile-form');
  const formData = new FormData(form);
  try {
    const res = await fetch('/api/profile', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (!data.success) {
      showToast(data.error || t('profile_update_err'), 'error');
      return;
    }
    showToast(t('profile_update_ok'), 'success');
    loadProfile();
  } catch (err) {
    showToast(t('profile_update_err') + ': ' + (err.message || err), 'error');
  }
}

function initProfileForm() {
  const profileForm = document.getElementById('profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', handleProfileFormSubmit);
  }
}

// Tambahkan fungsi untuk menangani ekspor CSV/Excel
function initExportButtons() {
  const toggle = document.getElementById('export-dropdown-toggle');
  const menu = document.getElementById('export-dropdown-menu');
  const wrapper = document.getElementById('export-dropdown');
  if (!toggle || !menu || !wrapper) return;

  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = wrapper.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  menu.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      wrapper.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!wrapper.contains(event.target)) {
      wrapper.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      wrapper.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Export CSV / Excel - called directly from HTML onclick
window.exportData = function(fmt) {
  if (!state.currentFile) {
    showToast(state.lang === 'id' ? 'Silakan upload dataset terlebih dahulu.' : 'Please upload a dataset first.', 'error');
    return;
  }
  window.location.href = `/api/export/${fmt}?filename=${encodeURIComponent(state.currentFile)}`;
};

window.exportHTMLDashboard = async function() {
  if (!state.currentFile) {
    showToast(state.lang === 'id' ? 'Silakan upload dataset terlebih dahulu.' : 'Please upload a dataset first.', 'error');
    return;
  }

  showLoading(state.lang === 'id' ? 'Mempersiapkan HTML...' : 'Preparing HTML...');
  try {
    const [numRes, catRes, tsRes, insightsRes] = await Promise.all([
      fetch('/api/stats/numerical', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      }),
      fetch('/api/stats/categorical', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      }),
      fetch('/api/viz/timeseries', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      }),
      fetch('/api/insights', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      })
    ]);

    const [numData, catData, tsData, insightsData] = await Promise.all([numRes.json(), catRes.json(), tsRes.json(), insightsRes.json()]);
    hideLoading();

    let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>AutoEDA Dashboard - ${state.currentFile}</title><style>`;
    html += `body{font-family:Arial,sans-serif;margin:24px;color:#111;background:#f5f7ff}h1,h2,h3{color:#1f2a58;}table{width:100%;border-collapse:collapse;margin:16px 0}th,td{border:1px solid #ccd1e4;padding:8px;text-align:left}th{background:#6c6fff;color:#fff}section{margin-bottom:24px;}code{background:#eef0ff;padding:2px 4px;border-radius:4px;}`;
    html += `</style></head><body><h1>AutoEDA Dashboard</h1><p><strong>File:</strong> ${state.currentFile}</p><p><strong>Generated:</strong> ${new Date().toLocaleString(state.lang === 'id' ? 'id-ID' : 'en-US')}</p>`;

    const info = state.datasetInfo || {};
    html += `<section><h2>Dataset Summary</h2><table><tbody>`;
    html += `<tr><th>Rows</th><td>${info.rows || 0}</td></tr>`;
    html += `<tr><th>Columns</th><td>${info.columns || 0}</td></tr>`;
    html += `<tr><th>Numerical Columns</th><td>${info.numerical_columns || 0}</td></tr>`;
    html += `<tr><th>Categorical Columns</th><td>${info.categorical_columns || 0}</td></tr>`;
    html += `<tr><th>Datetime Columns</th><td>${info.datetime_columns || 0}</td></tr>`;
    html += `<tr><th>Missing Cells</th><td>${info.total_missing || 0} (${info.missing_pct || 0}%)</td></tr>`;
    html += `</tbody></table></section>`;

    if (numData.success && numData.stats && numData.stats.length) {
      html += `<section><h2>Numerical Statistics</h2><table><thead><tr>`;
      html += `<th>Column</th><th>Mean</th><th>Median</th><th>Std</th><th>Variance</th><th>Missing %</th><th>Normal</th><th>Outliers</th></tr></thead><tbody>`;
      numData.stats.slice(0, 10).forEach(s => {
        html += `<tr><td>${s.column}</td><td>${s.mean ?? '-'}</td><td>${s.median ?? '-'}</td><td>${s.std ?? '-'}</td><td>${s.variance ?? '-'}</td><td>${s.missing_pct ?? '-'}%</td><td>${s.is_normal === true ? 'Yes' : s.is_normal === false ? 'No' : '-'}</td><td>${s.n_outliers ?? 0}</td></tr>`;
      });
      html += `</tbody></table><p style="font-size:0.9rem;opacity:0.8">Showing up to 10 numerical columns.</p></section>`;
    }

    if (catData.success && catData.stats && catData.stats.length) {
      html += `<section><h2>Categorical Statistics</h2><table><thead><tr>`;
      html += `<th>Column</th><th>Unique</th><th>Mode</th><th>Mode %</th><th>Missing %</th></tr></thead><tbody>`;
      catData.stats.slice(0, 10).forEach(s => {
        html += `<tr><td>${s.column}</td><td>${s.unique ?? '-'}</td><td>${s.mode ?? '-'}</td><td>${s.mode_pct ?? '-'}%</td><td>${s.missing_pct ?? '-'}%</td></tr>`;
      });
      html += `</tbody></table><p style="font-size:0.9rem;opacity:0.8">Showing up to 10 categorical columns.</p></section>`;
    }

    if (tsData.success && tsData.plots && tsData.plots.pattern_summary) {
      html += `<section><h2>Time Series Summary</h2><table><tbody>`;
      html += `<tr><th>Date Column</th><td>${tsData.plots.date_col}</td></tr>`;
      html += `<tr><th>Value Column</th><td>${tsData.plots.num_col}</td></tr>`;
      html += `<tr><th>Trend</th><td>${tsData.plots.pattern_summary.trend}</td></tr>`;
      html += `<tr><th>Trend R2</th><td>${tsData.plots.pattern_summary.trend_r2}</td></tr>`;
      html += `<tr><th>Fluctuation</th><td>${tsData.plots.pattern_summary.fluctuation_pct ?? '-'}%</td></tr>`;
      html += `<tr><th>Seasonality</th><td>${tsData.plots.pattern_summary.seasonality.join(', ')}</td></tr>`;
      html += `</tbody></table></section>`;
    }

    if (insightsData.success && insightsData.insights && insightsData.insights.length) {
      html += `<section><h2>Automated Insights</h2><ul>`;
      insightsData.insights.forEach(ins => {
        html += `<li><strong>${ins.title}</strong>: ${ins.description}</li>`;
      });
      html += `</ul></section>`;
    }

    html += `<footer style="margin-top:48px;color:#5b5f74;font-size:0.9rem;">Generated by AutoEDA Insight - Intelligent Data Analytics Platform</footer></body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `dashboard_${state.currentFile.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    showToast(state.lang === 'id' ? 'HTML dashboard berhasil diunduh!' : 'HTML dashboard downloaded successfully!', 'success');
  } catch (err) {
    hideLoading();
    showToast((state.lang === 'id' ? 'Gagal membuat HTML:' : 'Failed to create HTML:') + ' ' + err.message, 'error');
  }
};

// PDF Export - Academic Professional Report
window.exportPDFReport = async function(downloadHtml = false) {
  if (!state.currentFile) {
    showToast(state.lang === 'id' ? 'Silakan upload dataset terlebih dahulu.' : 'Please upload a dataset first.', 'error');
    return;
  }

  let printWindow = null;
  if (!downloadHtml) {
    printWindow = window.open('', '_blank', 'width=960,height=800,scrollbars=yes');
    if (!printWindow) {
      showToast(state.lang === 'id' ? 'Pop-up diblokir. Izinkan pop-up untuk browser ini.' : 'Pop-up blocked. Please allow pop-ups for this site.', 'error');
      return;
    }
    printWindow.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Preparing report...</title></head><body style="font-family:Arial,sans-serif;padding:24px"><p>Preparing report...</p></body></html>`);
    printWindow.document.close();
    printWindow.focus();
  }

  try {
  const info = state.datasetInfo || {};
  const lang = state.lang;
  const now = new Date().toLocaleString(lang === 'id' ? 'id-ID' : 'en-US');
  const nowDate = new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const reportTitle = lang === 'id' ? 'Laporan Analisis Data Eksploratori' : 'Exploratory Data Analysis Report';
  const subtitle = lang === 'id'
    ? `Analisis Otomatis Dataset: ${state.currentFile}`
    : `Automated Analysis of Dataset: ${state.currentFile}`;

  let restoreSectionAfterCapture = null;
  try {
    if (typeof loadDashboardOverview === 'function' && document.getElementById('dashboard-overview-holder')) {
      const activeSection = document.querySelector('.section.active')?.id?.replace('section-', '') || null;
      restoreSectionAfterCapture = activeSection && activeSection !== 'dashboard' ? activeSection : null;
      // Switch to dashboard section via DOM only (avoids double loadDashboardOverview call)
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      const dashSection = document.getElementById('section-dashboard');
      const dashNav = document.querySelector('.nav-item[data-section="dashboard"]');
      if (dashSection) dashSection.classList.add('active');
      if (dashNav) dashNav.classList.add('active');
      await loadDashboardOverview();
      await new Promise(resolve => setTimeout(resolve, 900));
    }
  } catch (_) {}

  // Capture Plotly chart snapshots
  const baseChartIds = ['vts-main','vn-hist','vn-box','vc-main','vb-scatter','vb-heatmap','db-scatter','db-heatmap','db-ts'];
  const renderedPlotIds = Array.from(document.querySelectorAll('.js-plotly-plot'))
    .map(el => el.id)
    .filter(Boolean);
  const chartIds = Array.from(new Set([...baseChartIds, ...renderedPlotIds]));
  const chartImages = [];
  const chartLabels = {
    'vts-main': lang === 'id' ? 'Tren Waktu' : 'Time Series Trend',
    'vn-hist': lang === 'id' ? 'Distribusi Numerik (Histogram)' : 'Numerical Distribution (Histogram)',
    'vn-box': lang === 'id' ? 'Distribusi Numerik (Box Plot)' : 'Numerical Distribution (Box Plot)',
    'vc-main': lang === 'id' ? 'Frekuensi Kategorik' : 'Categorical Frequency',
    'vb-scatter': lang === 'id' ? 'Analisis Multivariat (Scatter)' : 'Multivariate Analysis (Scatter)',
    'vb-heatmap': lang === 'id' ? 'Matriks Korelasi (Heatmap)' : 'Correlation Matrix (Heatmap)',
    'db-scatter': lang === 'id' ? 'Scatter Plot Dashboard' : 'Dashboard Scatter Plot',
    'db-heatmap': lang === 'id' ? 'Heatmap Korelasi Dashboard' : 'Dashboard Correlation Heatmap',
    'db-ts': lang === 'id' ? 'Tren Temporal (Dashboard)' : 'Temporal Trend (Dashboard)',
  };
  try {
    await ensurePlotlyAsync();
    for (const id of chartIds) {
      const el = document.getElementById(id);
      if (el && el.data) {
        try {
          const imgData = await Plotly.toImage(el, { format: 'png', width: 900, height: 420 });
          const cardTitle = el.closest('.dashboard-card')?.querySelector('.card-title-row')?.textContent?.trim();
          chartImages.push({ id, src: imgData, label: chartLabels[id] || cardTitle || id });
        } catch(_) {}
      }
    }
  } catch(_) {}
  if (restoreSectionAfterCapture && typeof switchSection === 'function') {
    try { navigateSection(restoreSectionAfterCapture); } catch (_) {}
  }

  // Ã¢â€â‚¬Ã¢â€â‚¬ Fetch cleaning diagnostics Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  let cleaningForReport = _cleaningData || null;
  if (!cleaningForReport) {
    try {
      const cleanRes = await fetch('/api/cleaning/analyze', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      });
      const cleanData = await cleanRes.json();
      if (cleanData.success) cleaningForReport = cleanData;
    } catch (_) {}
  }

  // Ã¢â€â‚¬Ã¢â€â‚¬ Helper: fetch numerical stats Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  const fetchNumericalStats = async () => {
    const rows = document.querySelectorAll('#table-num-stats tbody tr');
    if (rows.length > 0) {
      const headers = [];
      document.querySelectorAll('#table-num-stats thead th').forEach(th => headers.push(th.textContent));
      const data = [];
      rows.forEach(row => {
        const cells = [];
        row.querySelectorAll('td').forEach(td => cells.push(td.textContent));
        data.push(cells);
      });
      return { headers, data };
    }
    try {
      const res = await fetch('/api/stats/numerical', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      });
      const json = await res.json();
      if (json.success && json.stats && json.stats.length) {
        const headers = [t('th_column'), t('th_count'), t('th_mean'), t('th_median'), t('th_min'), t('th_max'), t('th_std'), t('th_variance'), t('th_mode'), t('th_skew'), t('th_kurtosis'), t('th_missing'), t('th_missing_pct'), t('th_normal'), t('th_outliers')];
        const fmt = v => (v === null || v === undefined) ? '-' : String(v);
        const data = json.stats.map(s => [
          fmt(s.column), fmt(s.count), fmt(s.mean), fmt(s.median), fmt(s.min), fmt(s.max),
          fmt(s.std), fmt(s.variance), fmt(s.mode), fmt(s.skewness), fmt(s.kurtosis),
          fmt(s.missing_count), fmt(s.missing_pct) + '%',
          s.is_normal === true ? (lang==='id'?'Ya':'Yes') : s.is_normal === false ? (lang==='id'?'Tidak':'No') : '-',
          fmt(s.n_outliers)
        ]);
        return { headers, data };
      }
    } catch(_) {}
    return null;
  };

  // Ã¢â€â‚¬Ã¢â€â‚¬ Helper: fetch categorical stats Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  const fetchCategoricalStats = async () => {
    const rows = document.querySelectorAll('#table-cat-stats tbody tr');
    if (rows.length > 0) {
      const headers = [];
      document.querySelectorAll('#table-cat-stats thead th').forEach(th => headers.push(th.textContent));
      const data = [];
      rows.forEach(row => {
        const cells = [];
        row.querySelectorAll('td').forEach(td => cells.push(td.textContent));
        data.push(cells);
      });
      return { headers, data };
    }
    try {
      const res = await fetch('/api/stats/categorical', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      });
      const json = await res.json();
      if (json.success && json.stats && json.stats.length) {
        const fmt = v => (v === null || v === undefined) ? '-' : String(v);
        const headers = [t('th_column'), t('th_count'), t('th_unique'), t('th_mode'), t('th_mode_freq'), t('th_mode_pct'), t('th_missing'), t('th_missing_pct')];
        const data = json.stats.map(s => [
          fmt(s.column), fmt(s.count), fmt(s.unique), fmt(s.mode),
          fmt(s.mode_freq), fmt(s.mode_pct)+'%', fmt(s.missing_count), fmt(s.missing_pct)+'%'
        ]);
        return { headers, data };
      }
    } catch(_) {}
    return null;
  };

  // Ã¢â€â‚¬Ã¢â€â‚¬ Helper: fetch insights Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  const fetchInsights = async () => {
    const items = Array.from(document.querySelectorAll('#insights-container .insight-card'));
    if (items.length > 0) {
      return items.map(item => ({
        title: item.querySelector('.insight-title')?.textContent || '',
        body: item.querySelector('.insight-desc')?.textContent || ''
      }));
    }
    try {
      const res = await fetch('/api/insights', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: state.currentFile })
      });
      const json = await res.json();
      if (json.success && json.insights && json.insights.length) {
        return json.insights.map(ins => ({ title: ins.title, body: ins.description }));
      }
    } catch(_) {}
    return null;
  };

  // Ã¢â€â‚¬Ã¢â€â‚¬ Fetch all data Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  const [numStats, catStats, insightsList] = await Promise.all([
    fetchNumericalStats(),
    fetchCategoricalStats(),
    fetchInsights()
  ]);

  const reportBrandName = 'Auto EDA Insight';
  const reportScope = lang === 'id' ? 'Laporan Analisis Data Publik' : 'Public Data Analysis Report';
  const reportNotice = lang === 'id' ? 'Dokumen ini dibuat otomatis dan bersifat eksploratif.' : 'This document was generated automatically and is exploratory.';

  const cleanReportText = value => String(value ?? '')
    .replace(/\u2014/g, '-')
    .replace(/\u2013/g, '-')
    .replace(/\u2194/g, '<->')
    .replace(/\u2212/g, '-')
    .replace(/\u00d7/g, 'x')
    .replace(/\u03b1/g, 'alpha')
    .replace(/\u00b7/g, '-')
    .replace(/\u2705\s*/g, '')
    .replace(/\u2713/g, 'Ya')
    .replace(/\u2714/g, 'Ya')
    .replace(/\u2717/g, 'Tidak')
    .replace(/\u26a0\ufe0f?\s*/g, '')
    .replace(/\u2460/g, '1.')
    .replace(/\u2461/g, '2.')
    .replace(/\u2462/g, '3.')
    .replace(/\u2463/g, '4.')
    .replace(/[\u201c\u201d\u201e]/g, '')
    .replace(/\u2019/g, "'")
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\b([A-Za-z]{4,})(\s+\1\b)+/gi, '$1')
    .trim();

  // Build table HTML helper
  const buildTable = (headers, rows, caption = '') => {
    let html = '<div class="table-wrapper">';
    if (caption) html += `<p class="table-caption">${cleanReportText(caption)}</p>`;
    const wideClass = headers.length > 8 ? ' class="wide-table"' : '';
    html += `<table${wideClass}><thead><tr>` + headers.map(h => `<th>${cleanReportText(h)}</th>`).join('') + '</tr></thead><tbody>';
    rows.forEach((row, i) => {
      html += `<tr class="${i % 2 === 0 ? 'even' : 'odd'}">` + row.map(c => `<td>${cleanReportText(c)}</td>`).join('') + '</tr>';
    });
    html += '</tbody></table></div>';
    return html;
  };

  const buildSplitTable = (headers, rows, caption = '', groups = []) => {
    if (!rows || !rows.length) return '';
    if (!groups.length || headers.length <= 8) return buildTable(headers, rows, caption);
    return groups.map((group, index) => {
      const groupHeaders = group.map(i => headers[i]).filter(Boolean);
      const groupRows = rows.map(row => group.map(i => row[i] ?? ''));
      const suffix = index === 0
        ? ''
        : (lang === 'id' ? ' (lanjutan)' : ' (continued)');
      return buildTable(groupHeaders, groupRows, `${caption}${suffix}`);
    }).join('');
  };

  const tocPages = {
    abstract: 3,
    intro: 4,
    background: 4,
    objectives: 4,
    methodology: 5,
    dataset: 6,
    profile: 6,
    inventory: 6,
    quality: 7,
    numerical: 8,
    categorical: 9,
    visual: 10,
    insights: 11,
    conclusion: 12,
    references: 13
  };

  // Ã¢â€â‚¬Ã¢â€â‚¬ Missing value rate classification Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  const missingPct = parseFloat(info.missing_pct) || 0;
  const dataQualityLabel = missingPct === 0
    ? (lang==='id' ? 'Sangat Baik - Tidak ada nilai hilang' : 'Excellent - No missing values')
    : missingPct < 5
      ? (lang==='id' ? 'Baik - Nilai hilang di bawah 5%' : 'Good - Missing values below 5%')
      : missingPct < 20
        ? (lang==='id' ? 'Sedang - Perlu penanganan nilai hilang' : 'Fair - Missing values need handling')
        : (lang==='id' ? 'Rendah - Nilai hilang signifikan, pertimbangkan imputasi' : 'Poor - Significant missing values, consider imputation');
  const qualityColor = missingPct === 0 ? '#1a7f3c' : missingPct < 5 ? '#2e7d32' : missingPct < 20 ? '#e65100' : '#b71c1c';

  // Ã¢â€â‚¬Ã¢â€â‚¬ HTML Template Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
  let html = `<!DOCTYPE html>
<html lang="${lang === 'id' ? 'id' : 'en'}">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${reportTitle} - ${state.currentFile}</title>
<style>
/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
   ACADEMIC REPORT STYLESHEET - Professional EDA Report
   Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */

/* Page geometry */
@page {
  size: A4 portrait;
  margin-top: 3cm;
  margin-right: 3cm;
  margin-bottom: 3cm;
  margin-left: 4cm;
  @bottom-center {
    content: counter(page);
    font-family: 'Times New Roman', Times, serif;
    font-size: 10pt;
    color: #000;
  }
}

@page :first { @bottom-center { content: none; } }

/* Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* Base typography - academic serif body */
body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 11pt;
  line-height: 1.7;
  color: #111;
  background: #fff;
  counter-reset: section 0 figure 0 table-num 0;
  text-rendering: optimizeLegibility;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬ Running header (every page except cover) Ã¢â€â‚¬Ã¢â€â‚¬ */
.running-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bbb;
  padding-bottom: 5pt;
  margin-bottom: 14pt;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8.5pt;
  color: #555;
}
.running-header .rh-left { display: flex; align-items: center; gap: 7pt; }
.running-header img { display: none; }
.running-header .rh-title { font-weight: 700; color: #1a237e; font-size: 8pt; }
.running-header .rh-sub { font-size: 7pt; color: #777; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Cover page Ã¢â€â‚¬Ã¢â€â‚¬ */
.cover-page {
  page-break-after: always;
  min-height: 237mm;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  box-shadow: none;
  position: relative;
}

.cover-institution-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1pt solid #1a237e;
  padding-bottom: 8pt;
  margin-bottom: 14pt;
}
.cover-institution-bar .ci-logos {
  display: flex; align-items: center; gap: 12pt;
}
.cover-institution-bar img { height: 52pt; object-fit: contain; }
.cover-institution-bar .ci-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: 700;
  color: #1a237e;
  line-height: 1.4;
  text-align: center;
}
.cover-institution-bar .ci-sub {
  font-size: 7.5pt;
  color: #555;
  font-weight: 400;
}

.cover-doc-type {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
  color: #555;
  border: none;
  border-radius: 0;
  padding: 0;
  margin: 0 0 12pt;
}

.cover-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22pt;
  font-weight: 900;
  color: #0d1b5e;
  text-align: center;
  line-height: 1.2;
  margin: 10pt 0 6pt;
  letter-spacing: -0.02em;
}

.cover-subtitle {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11pt;
  color: #3949ab;
  text-align: center;
  margin-bottom: 14pt;
  font-style: italic;
}

.cover-rule { width: 80pt; height: 2.5pt; background: #1a237e; margin: 8pt auto 14pt; border-radius: 2pt; }

.cover-meta {
  width: 100%;
  border: 1pt solid #c5cae9;
  border-radius: 3pt;
  margin: 6pt 0 0;
  overflow: hidden;
}
.cover-meta table { width: 100%; border-collapse: collapse; font-size: 11pt; }
.cover-meta th {
  background: #1a237e;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8pt;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 7pt 12pt;
  text-align: left;
}
.cover-meta td { padding: 4pt 6pt; border-bottom: none; vertical-align: top; }
.cover-meta td:first-child { font-weight: 700; width: 38%; color: #000; font-family: 'Times New Roman', Times, serif; font-size: 11pt; }
.cover-meta tr:last-child td { border-bottom: none; }
.cover-meta tr:nth-child(even) td { background: transparent; }

.cover-footer {
  margin-top: auto;
  padding-top: 10pt;
  width: 100%;
  border-top: none;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 7.5pt;
  color: #777;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬ Table of Contents Ã¢â€â‚¬Ã¢â€â‚¬ */
.toc-page { page-break-after: always; }
.toc-entry {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 5pt 0;
  font-size: 10.5pt;
}
.toc-link {
  color: inherit;
  text-decoration: none;
}
.toc-link:hover {
  text-decoration: underline;
}
.figure-list {
  margin: 12pt 0 0;
}
.figure-list ul {
  list-style: disc inside;
  margin: 0;
  padding: 0 0 0 16pt;
}
.figure-list li {
  margin: 5pt 0;
  font-size: 10.5pt;
}
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18pt;
  font-weight: 900;
  color: #0d1b5e;
  margin: 0 0 12pt;
  line-height: 1.2;
  border-bottom: 2pt solid #1a237e;
  padding-bottom: 5pt;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13pt;
  font-weight: 800;
  color: #1a237e;
  margin: 22pt 0 8pt;
  padding: 5pt 0 4pt;
  border-bottom: 1pt solid #c5cae9;
  page-break-after: avoid;
  counter-increment: section;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11.5pt;
  font-weight: 700;
  color: #283593;
  margin: 16pt 0 6pt;
  page-break-after: avoid;
}

h4 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10.5pt;
  font-weight: 700;
  color: #3949ab;
  margin: 12pt 0 5pt;
  page-break-after: avoid;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬ Body text Ã¢â€â‚¬Ã¢â€â‚¬ */
p { margin: 6pt 0; text-align: justify; hyphens: auto; }
p + p { text-indent: 1.5em; }
ul, ol { margin: 8pt 0 8pt 18pt; }
li { margin: 3pt 0; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Abstract block Ã¢â€â‚¬Ã¢â€â‚¬ */
.abstract-block {
  border: none;
  background: transparent;
  border-radius: 0;
  padding: 0;
  margin: 14pt 0;
}
.abstract-block p { font-size: 10.5pt; text-align: justify; }
.abstract-label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1a237e;
  margin-bottom: 8pt;
  display: block;
}
.keywords-line { font-size: 9.5pt; margin-top: 10pt; color: #444; }
.keywords-line strong { color: #1a237e; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ KPI stat grid Ã¢â€â‚¬Ã¢â€â‚¬ */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10pt;
  margin: 14pt 0;
}
.kpi-box {
  border: none;
  border-top: 1pt solid #d7dceb;
  border-radius: 0;
  padding: 7pt 6pt;
  text-align: center;
  background: transparent;
  page-break-inside: avoid;
}
.kpi-val {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20pt;
  font-weight: 900;
  color: #1a237e;
  line-height: 1;
}
.kpi-lbl {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 7.5pt;
  color: #555;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 5pt;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬ Tables Ã¢â€â‚¬Ã¢â€â‚¬ */
.table-wrapper { margin: 12pt 0; page-break-inside: avoid; }
.table-caption {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-style: italic;
  color: #444;
  margin-bottom: 5pt;
  counter-increment: table-num;
}
.table-caption::before {
  content: "Tabel " counter(table-num) ". ";
  font-weight: 700;
  font-style: normal;
  color: #1a237e;
}
table { width: 100%; border-collapse: collapse; font-size: 9.5pt; page-break-inside: avoid; }
thead th {
  background: #1a237e;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 8.5pt;
  padding: 7pt 9pt;
  text-align: left;
  border-right: 0.5pt solid #3949ab;
}
thead th:last-child { border-right: none; }
tbody td {
  padding: 6pt 9pt;
  border-bottom: 0.5pt solid #dde;
  border-right: 0.5pt solid #eef;
  vertical-align: top;
  color: #1a1a2e;
}
tbody td:last-child { border-right: none; }
tr.even td { background: #f8f9ff; }
tr.odd  td { background: #fff; }
tbody tr:hover td { background: #eef2ff; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Callout boxes Ã¢â€â‚¬Ã¢â€â‚¬ */
.callout-info, .callout-warn, .callout-danger, .callout-success, .callout-note {
  border-radius: 0;
  padding: 0;
  margin: 12pt 0;
  font-size: 10pt;
  page-break-inside: avoid;
}
.callout-info,
.callout-warn,
.callout-danger,
.callout-success,
.callout-note { background: transparent; border-left: none; }
.callout-label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8pt;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 4pt;
}
.callout-info    .callout-label { color: #0d47a1; }
.callout-warn    .callout-label { color: #f57f17; }
.callout-danger  .callout-label { color: #b71c1c; }
.callout-success .callout-label { color: #1b5e20; }
.callout-note    .callout-label { color: #4a148c; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Insight cards Ã¢â€â‚¬Ã¢â€â‚¬ */
.insight-list { display: flex; flex-direction: column; gap: 8pt; margin: 10pt 0; }
.insight-card {
  border: none;
  border-radius: 0;
  padding: 0 0 8pt;
  background: transparent;
  page-break-inside: avoid;
}
.insight-card .ic-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10pt;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 3pt;
}
.insight-card .ic-body { font-size: 9.5pt; color: #333; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Method grid Ã¢â€â‚¬Ã¢â€â‚¬ */
.method-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10pt; margin: 12pt 0; }
.method-card {
  border: none;
  border-radius: 0;
  padding: 0;
  background: transparent;
  page-break-inside: avoid;
}
.method-card .mc-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9.5pt;
  font-weight: 800;
  color: #1a237e;
  margin-bottom: 4pt;
}
.method-card .mc-body { font-size: 9pt; color: #333; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Figure (chart image) Ã¢â€â‚¬Ã¢â€â‚¬ */
.figure-block { margin: 14pt 0; page-break-inside: avoid; }
.figure-img { width: 100%; height: auto; border: none; border-radius: 0; display: block; }
.figure-caption {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-style: italic;
  color: #444;
  margin-top: 5pt;
  text-align: center;
}

.figure-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14pt; margin: 14pt 0; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Quality badge Ã¢â€â‚¬Ã¢â€â‚¬ */
.quality-badge {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9pt;
  font-weight: 700;
  padding: 4pt 12pt;
  border-radius: 20pt;
  margin: 8pt 0;
}

/* Ã¢â€â‚¬Ã¢â€â‚¬ Page breaks Ã¢â€â‚¬Ã¢â€â‚¬ */
.page-break {
  page-break-after: always;
  break-after: page;
}
.no-break { page-break-inside: avoid; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ References Ã¢â€â‚¬Ã¢â€â‚¬ */
.ref-item { margin: 6pt 0; padding-left: 18pt; text-indent: -18pt; font-size: 10pt; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Signature section Ã¢â€â‚¬Ã¢â€â‚¬ */
.signature-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20pt; margin-top: 20pt; }
.sig-box { text-align: center; padding-top: 40pt; border-top: 1pt solid #333; font-size: 9.5pt; }
.sig-name { font-weight: 700; font-size: 10pt; }
.sig-role { color: #555; font-size: 9pt; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Data quality row colors Ã¢â€â‚¬Ã¢â€â‚¬ */
.dq-good   td { color: #1b5e20; }
.dq-warn   td { color: #e65100; }
.dq-bad    td { color: #b71c1c; }

/* Ã¢â€â‚¬Ã¢â€â‚¬ Print Ã¢â€â‚¬Ã¢â€â‚¬ */
/* KTI/publication layout overrides */
body {
  font-family: 'Times New Roman', Times, serif;
  font-size: 12pt;
  line-height: 2;
  color: #000;
  background: #fff;
  text-align: justify;
  orphans: 3;
  widows: 3;
}
@media screen {
  html { background: #e9e9e9; }
  body {
    width: 210mm;
    min-height: 297mm;
    margin: 18px auto;
    padding: 3cm 3cm 3cm 4cm;
    box-shadow: 0 0 0 1px #d0d0d0, 0 12px 36px rgba(0,0,0,0.14);
  }
  .cover-page,
  .toc-page,
  section {
    position: relative;
  }
  .page-break {
    height: 28px;
    margin: 28px -3cm 28px -4cm;
    border-top: 1px dashed #9a9a9a;
    background: #f5f5f5;
  }
}
.running-header { display: none !important; }
.cover-page {
  min-height: 237mm;
  padding: 0;
  justify-content: flex-start;
  text-align: center;
}
.cover-institution-bar {
  border: none;
  display: block;
  margin-bottom: 34pt;
  text-align: center;
}
.cover-institution-bar .ci-name,
.cover-doc-type,
.cover-title,
.cover-subtitle,
h1, h2, h3, h4,
.abstract-label,
.kpi-val,
.kpi-lbl,
.table-caption,
.callout-label,
.insight-card .ic-title,
.method-card .mc-title,
.figure-caption,
.cover-footer {
  font-family: 'Times New Roman', Times, serif;
  color: #000;
  letter-spacing: 0;
}
.cover-institution-bar .ci-name {
  font-size: 12pt;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.45;
}
.cover-institution-bar .ci-sub,
.cover-doc-type,
.cover-subtitle { font-size: 12pt; }
.cover-doc-type {
  font-weight: 700;
  margin: 0 0 18pt;
  text-transform: uppercase;
}
.cover-title {
  font-size: 16pt;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.5;
  margin: 18pt 0 10pt;
  max-width: 100%;
  word-break: normal;
  overflow-wrap: anywhere;
}
.cover-subtitle {
  line-height: 1.6;
  margin-bottom: 24pt;
}
.cover-rule { display: none; }
.cover-meta {
  width: 92%;
  border: none;
  margin: 24pt auto 0;
  text-align: left;
}
.cover-meta th {
  background: transparent;
  color: #000;
  border-bottom: 0.75pt solid #000;
  font-size: 11pt;
  text-align: center;
}
.cover-meta td {
  border: none;
  color: #000;
  font-size: 11pt;
  line-height: 1.5;
  padding: 3pt 4pt;
}
.cover-footer {
  border: none;
  font-size: 10pt;
  margin-top: auto;
  line-height: 1.4;
}
h1 {
  font-size: 14pt;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  border: none;
  margin: 0 0 18pt;
  padding: 0;
  line-height: 1.5;
  page-break-after: avoid;
}
h2 {
  font-size: 12pt;
  font-weight: 700;
  text-align: left;
  border: none;
  margin: 18pt 0 8pt;
  padding: 0;
  line-height: 1.6;
  page-break-after: avoid;
}
h3, h4 {
  font-size: 12pt;
  font-weight: 700;
  margin: 12pt 0 6pt;
  line-height: 1.6;
  page-break-after: avoid;
}
p {
  margin: 0 0 6pt;
  text-align: justify;
  text-indent: 1.27cm;
  line-height: 2;
}
.abstract-block p:first-of-type,
section > p:first-of-type,
.table-caption,
.figure-caption,
.keywords-line,
.callout-info,
.callout-warn,
.callout-success,
.callout-note,
.callout-danger { text-indent: 0; }
.abstract-label { display: none; }
.abstract-block {
  margin: 0;
}
.abstract-block p {
  font-size: 12pt;
  line-height: 2;
}
.keywords-line {
  font-size: 12pt;
  margin-top: 8pt;
  text-align: justify;
  line-height: 1.6;
}
ul, ol {
  margin: 0 0 8pt 1.27cm;
  padding-left: 14pt;
}
li {
  margin: 0 0 3pt;
  line-height: 1.8;
  text-align: justify;
}
.method-grid {
  display: block;
  margin: 8pt 0;
}
.kpi-list {
  margin: 8pt 0 10pt 0;
  padding-left: 0;
  list-style: none;
}
.kpi-list li {
  position: relative;
  margin: 0 0 3pt;
  padding-left: 18pt;
  line-height: 1.8;
}
.kpi-list li::before,
.insight-list li::before {
  content: "\\2022";
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 700;
}
.kpi-list strong {
  font-weight: 700;
}
.method-card, .insight-card {
  border: none;
  background: transparent;
  text-align: left;
  padding: 0 0 6pt;
}
.method-card .mc-body,
.insight-card .ic-body,
.callout-info,
.callout-warn,
.callout-success,
.callout-note,
.callout-danger {
  font-size: 12pt;
  line-height: 1.8;
  text-align: justify;
}
.method-card .mc-title,
.insight-card .ic-title,
.callout-label {
  font-size: 12pt;
  font-weight: 700;
  text-transform: none;
  margin: 0 0 3pt;
}
.insight-list {
  margin: 8pt 0 10pt 0;
  padding-left: 0;
  list-style: none;
  display: block;
}
.insight-list li {
  position: relative;
  margin: 0 0 6pt;
  padding-left: 18pt;
  line-height: 1.8;
}
.insight-list strong {
  font-weight: 700;
}
.table-wrapper {
  margin: 10pt 0 14pt;
  page-break-inside: auto;
}
.table-caption {
  font-size: 11pt;
  text-align: center;
  margin: 0 0 6pt;
  line-height: 1.4;
}
table {
  width: 100%;
  border-collapse: collapse;
  border: 0.75pt solid #000;
  font-size: 10pt;
  line-height: 1.35;
  table-layout: fixed;
}
table.wide-table {
  font-size: 8.5pt;
  line-height: 1.25;
}
thead th {
  background: transparent;
  color: #000;
  border: 0.75pt solid #000;
  padding: 4pt 5pt;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 10pt;
  line-height: 1.3;
  vertical-align: middle;
  overflow-wrap: break-word;
  word-break: normal;
}
table.wide-table thead th {
  font-size: 8.5pt;
  padding: 3pt 4pt;
}
thead th:last-child {
  border-right: 0.75pt solid #000;
}
tbody td {
  color: #000;
  border: 0.75pt solid #000;
  padding: 4pt 5pt;
  background: transparent;
  line-height: 1.35;
  text-align: left;
  vertical-align: top;
  overflow-wrap: break-word;
  word-break: normal;
}
table.wide-table tbody td {
  padding: 3pt 4pt;
}
tbody td:last-child {
  border-right: 0.75pt solid #000;
}
tbody tr:last-child td {
  border-bottom: 0.75pt solid #000;
}
tr.even td, tr.odd td, tbody tr:hover td { background: transparent; }
.figure-block {
  margin: 12pt 0 16pt;
  text-align: center;
}
.figure-img {
  max-width: 100%;
  max-height: 160mm;
  border: 0.5pt solid #ddd;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.figure-caption {
  font-size: 10pt;
  text-align: center;
  margin-top: 6pt;
  line-height: 1.4;
}
.toc-entry {
  font-size: 12pt;
  margin: 3pt 0;
  line-height: 1.6;
}
.toc-section {
  color: #000;
  font-size: 12pt;
  margin-top: 5pt;
}
.toc-subsection {
  padding-left: 1.27cm;
  color: #000;
}
.toc-entry .toc-fill {
  border-bottom: 0.5pt dotted #000;
}
.toc-entry .toc-page-num { color: #000; }
.reference-list {
  margin: 8pt 0 0 0;
  padding-left: 0;
  list-style-position: outside;
  counter-reset: refs;
}
.reference-list li {
  list-style: none;
  counter-increment: refs;
  position: relative;
  margin: 0 0 8pt 0;
  padding-left: 1.35cm;
  text-indent: 0;
  line-height: 1.6;
  text-align: justify;
}
.reference-list li::before {
  content: "[" counter(refs) "] ";
  position: absolute;
  left: 0;
  width: 1.1cm;
  text-align: left;
}
@media print {
  html, body {
    width: auto;
    min-height: auto;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  h1, h2, h3, h4 { page-break-after: avoid; }
  table { page-break-inside: auto; }
  tr { page-break-inside: avoid; }
  .no-break, .kpi-box, .insight-card, .method-card, .figure-block { page-break-inside: avoid; }
  .running-header { display: none; }
  thead { display: table-header-group; }
  table { font-size: 9pt; }
  table.wide-table { font-size: 7.5pt; }
}
</style>
</head>
<body>

<!-- Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
     HALAMAN COVER / COVER PAGE
     Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â -->
<div class="cover-page">

  <div class="cover-title">${reportTitle}</div>
  <div class="cover-subtitle">${subtitle}</div>

  <div class="cover-rule"></div>

  <div class="cover-meta">
    <table>
      <thead>
        <tr><th colspan="2">${lang==='id'?'Informasi Dokumen':'Document Information'}</th></tr>
      </thead>
      <tbody>
        <tr><td>${lang==='id'?'Dataset':'Dataset'}</td><td>${state.currentFile}</td></tr>
        <tr><td>${lang==='id'?'Total Observasi':'Total Observations'}</td><td>${(info.rows||0).toLocaleString()}</td></tr>
        <tr><td>${lang==='id'?'Total Variabel':'Total Variables'}</td><td>${info.columns||0}</td></tr>
        <tr><td>${lang==='id'?'Jenis Analisis':'Analysis Type'}</td><td>${lang==='id'?'Analisis Data Eksploratori (EDA)':'Exploratory Data Analysis (EDA)'}</td></tr>
        <tr><td>${lang==='id'?'Tanggal Dihasilkan':'Generated Date'}</td><td>${nowDate}</td></tr>
        <tr><td>${lang==='id'?'Versi Platform':'Platform Version'}</td><td>Auto EDA Insight v8</td></tr>
      </tbody>
    </table>
  </div>

  <div class="cover-footer">
    <span>Auto EDA Insight - ${lang==='id'?'Platform Analitik Data Cerdas':'Intelligent Data Analytics Platform'}</span>
    <span>${reportNotice}</span>
  </div>
</div>

<!-- Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â
     DAFTAR ISI / TABLE OF CONTENTS
     Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â -->
<div class="toc-page">
  <div class="running-header">
    <div class="rh-left">
            <div>
        <div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div>
        <div class="rh-sub">${state.currentFile} - ${reportScope}</div>
      </div>
    </div>
      </div>

  <h1>${lang==='id'?'Daftar Isi':'Table of Contents'}</h1>

  <div style="margin-top:14pt">
    ${[
      { num:'',     label: lang==='id'?'Abstrak':'Abstract',                               id:'abstract', sub: false, page: tocPages.abstract },
      { num:'1.',   label: lang==='id'?'Pendahuluan':'Introduction',                       id:'introduction', sub: false, page: tocPages.intro },
      { num:'1.1',  label: lang==='id'?'Latar Belakang':'Background',                      id:'background', sub: true,  page: tocPages.background },
      { num:'1.2',  label: lang==='id'?'Tujuan Analisis':'Objectives',                     id:'objectives', sub: true,  page: tocPages.objectives },
      { num:'2.',   label: lang==='id'?'Metodologi Analisis':'Analytical Methodology',     id:'methodology', sub: false, page: tocPages.methodology },
      { num:'3.',   label: lang==='id'?'Deskripsi Dataset':'Dataset Description',          id:'dataset-overview', sub: false, page: tocPages.dataset },
      { num:'3.1',  label: lang==='id'?'Profil Umum Dataset':'General Dataset Profile',    id:'profile', sub: true,  page: tocPages.profile },
      { num:'3.2',  label: lang==='id'?'Inventaris Variabel':'Variable Inventory',         id:'inventory', sub: true,  page: tocPages.inventory },
      { num:'4.',   label: lang==='id'?'Evaluasi Kualitas Data':'Data Quality Evaluation', id:'data-quality', sub: false, page: tocPages.quality },
      { num:'5.',   label: lang==='id'?'Statistik Deskriptif Numerik':'Numerical Descriptive Statistics', id:'numerical-stats', sub: false, page: tocPages.numerical },
      { num:'6.',   label: lang==='id'?'Statistik Deskriptif Kategorik':'Categorical Descriptive Statistics', id:'categorical-stats', sub: false, page: tocPages.categorical },
      { num:'7.',   label: lang==='id'?'Visualisasi Eksploratori':'Exploratory Visualizations', id:'visualizations', sub: false, page: tocPages.visual },
      { num:'8.',   label: lang==='id'?'Temuan dan Insight Otomatis':'Automated Findings & Insights', id:'insights', sub: false, page: tocPages.insights },
      { num:'9.',   label: lang==='id'?'Kesimpulan':'Conclusion',                          id:'conclusion', sub: false, page: tocPages.conclusion },
      { num:'10.',  label: lang==='id'?'Referensi':'References',                           id:'references', sub: false, page: tocPages.references },
    ].map(e => `
      <div class="toc-entry ${e.sub ? 'toc-subsection' : 'toc-section'}">
        <a class="toc-link" href="#${e.id}">${e.num ? `<strong>${e.num}</strong>&nbsp;` : ''}${e.label}</a>
        <span class="toc-fill"></span>
        <span class="toc-page-num">${e.page}</span>
      </div>`).join('')}
  </div>
</div>

<div class="page-break"></div>
<div class="figures-page">
  <div class="running-header">
    <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

  <h1>${lang==='id'?'Daftar Gambar':'List of Figures'}</h1>
  ${chartImages.length > 0 ? `
    <div class="figure-list">
      <ul>
        ${chartImages.map((ci, idx) => {
          const figNum = idx + 1;
          return `<li><a class="toc-link" href="#visualization-${figNum}">${lang === 'id' ? `Gambar ${figNum}` : `Figure ${figNum}`}</a></li>`;
        }).join('')}
      </ul>
    </div>
  ` : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Visualisasi Tidak Tersedia':'Visualisations Not Available'}</span>${lang==='id'?'Tidak ada grafik aktif yang dapat diekspor. Buka menu visualisasi terlebih dahulu dan pastikan grafik telah dirender sebelum mengekspor laporan ini.':'No active charts available for export. Open the visualisation menus and ensure charts are rendered before exporting this report.'}</div>`}
</div>

<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<!-- ABSTRAK -->
<section id="abstract">
  <h1>${lang==='id'?'Abstrak':'Abstract'}</h1>
  <div class="abstract-block">
    <span class="abstract-label">${lang==='id'?'Abstrak':'Abstract'}</span>
    <p>${lang==='id'
      ? `Laporan ini menyajikan Exploratory Data Analysis (EDA) terhadap dataset <strong>${state.currentFile}</strong> yang terdiri atas <strong>${(info.rows||0).toLocaleString()}</strong> observasi dan <strong>${info.columns||0}</strong> variabel (${info.numerical_columns||0} numerik, ${info.categorical_columns||0} kategorik, ${info.datetime_columns||0} waktu). Analisis dilaksanakan secara otomatis menggunakan platform Auto EDA Insight dan difokuskan pada pemrofilan struktur data, distribusi variabel, evaluasi kualitas data, serta identifikasi pola awal melalui statistik deskriptif dan visualisasi eksploratif.`
      : `This report presents an Exploratory Data Analysis (EDA) of the dataset <strong>${state.currentFile}</strong>, comprising <strong>${(info.rows||0).toLocaleString()}</strong> observations and <strong>${info.columns||0}</strong> variables (${info.numerical_columns||0} numerical, ${info.categorical_columns||0} categorical, ${info.datetime_columns||0} datetime). The analysis was performed automatically using the Auto EDA Insight platform, focusing on data structure profiling, variable distributions, data quality evaluation, and preliminary pattern identification through descriptive statistics and exploratory visualization.`}
    </p>
    <p>${lang==='id'
      ? `Hasil pemeriksaan kualitas data menunjukkan tingkat nilai hilang sebesar <strong>${info.missing_pct||0}%</strong> dengan klasifikasi: <strong style="color:${qualityColor}">${dataQualityLabel}</strong>. Seluruh temuan dalam laporan ini bersifat eksploratif dan merupakan langkah awal sebelum pemodelan statistik atau pengambilan keputusan berbasis data lebih lanjut.`
      : `The data quality assessment reveals a missing-value rate of <strong>${info.missing_pct||0}%</strong>, classified as: <strong style="color:${qualityColor}">${dataQualityLabel}</strong>. All findings herein are exploratory in nature and represent an initial step prior to statistical modelling or further data-driven decision making.`}
    </p>
    <div class="keywords-line"><strong>${lang==='id'?'Kata kunci':'Keywords'}:</strong> Exploratory Data Analysis (EDA), descriptive statistics, data quality assessment, automated visualization, data profiling.</div>
  </div>
</section>

<!-- BAB 1 PENDAHULUAN -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="introduction">
  <h2>1. ${lang==='id'?'Pendahuluan':'Introduction'}</h2>

  <h3 id="background">1.1 ${lang==='id'?'Latar Belakang':'Background'}</h3>
  <p>${lang==='id'
    ? 'Exploratory Data Analysis (EDA) merupakan tahapan fundamental dalam siklus ilmu data yang bertujuan untuk memahami karakteristik, distribusi, dan kualitas data sebelum proses pemodelan atau analisis inferensial dilakukan. EDA memungkinkan analis untuk mendeteksi anomali, mengidentifikasi pola tersembunyi, menguji asumsi, dan merumuskan hipotesis awal berdasarkan pemeriksaan statistik dan visual terhadap dataset.'
    : 'Exploratory Data Analysis (EDA) is a fundamental phase in the data science lifecycle, aimed at understanding the characteristics, distributions, and quality of data prior to modelling or inferential analysis. EDA enables analysts to detect anomalies, identify hidden patterns, test assumptions, and formulate initial hypotheses through statistical and visual examination of a dataset.'}
  </p>
  <p>${lang==='id'
    ? `Laporan ini dihasilkan secara otomatis oleh platform <em>Auto EDA Insight</em> untuk menyajikan analisis eksploratori yang netral dan dapat dipublikasikan. Dataset yang dianalisis adalah <strong>${state.currentFile}</strong>, yang memuat ${(info.rows||0).toLocaleString()} baris data dan ${info.columns||0} kolom variabel.`
    : `This report was generated automatically by the <em>Auto EDA Insight</em> platform to provide a neutral exploratory analysis suitable for public distribution. The analysed dataset is <strong>${state.currentFile}</strong>, containing ${(info.rows||0).toLocaleString()} records and ${info.columns||0} variable columns.`}
  </p>

  <h3 id="objectives">1.2 ${lang==='id'?'Tujuan Analisis':'Objectives'}</h3>
  <p>${lang==='id'?'Tujuan analisis ini meliputi:':'The objectives of this analysis are as follows:'}</p>
  <ol>
    <li>${lang==='id'?'Memahami struktur dan karakteristik umum dataset.':'Understand the structure and general characteristics of the dataset.'}</li>
    <li>${lang==='id'?'Mengevaluasi kualitas data mencakup nilai hilang, duplikasi, dan outlier.':'Evaluate data quality including missing values, duplicates, and outliers.'}</li>
    <li>${lang==='id'?'Menganalisis distribusi statistik variabel numerik dan kategorik.':'Analyse the statistical distribution of numerical and categorical variables.'}</li>
    <li>${lang==='id'?'Mengidentifikasi pola, tren, dan hubungan antar variabel melalui visualisasi.':'Identify patterns, trends, and inter-variable relationships through visualisation.'}</li>
    <li>${lang==='id'?'Menyajikan temuan dan insight awal sebagai landasan analisis lebih lanjut.':'Present preliminary findings and insights as a foundation for further analysis.'}</li>
  </ol>
</section>

<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<!-- BAB 2 METODOLOGI -->
<section id="methodology">
  <h2>2. ${lang==='id'?'Metodologi Analisis':'Analytical Methodology'}</h2>
  <p>${lang==='id'
    ? 'Analisis dilakukan menggunakan pendekatan EDA terstruktur yang mencakup empat tahap utama: profiling dataset, analisis statistik deskriptif, evaluasi kualitas data, dan visualisasi eksploratif. Platform Auto EDA Insight mengintegrasikan seluruh tahapan secara otomatis dengan backend berbasis Python (pandas, scipy, numpy) dan visualisasi berbasis Plotly.'
    : 'The analysis follows a structured EDA approach comprising four main stages: dataset profiling, descriptive statistical analysis, data quality evaluation, and exploratory visualisation. The Auto EDA Insight platform integrates all stages automatically with a Python-based backend (pandas, scipy, numpy) and Plotly-based visualisation.'}
  </p>

  <div class="method-grid">
    <div class="method-card">
      <div class="mc-title">2.1 ${lang==='id'?'Profiling Dataset':'Dataset Profiling'}</div>
      <div class="mc-body">${lang==='id'
        ?'Mengidentifikasi ukuran dataset, tipe masing-masing variabel (numerik, kategorik, waktu), kelengkapan data, serta ringkasan metadata file.'
        :'Identifies dataset size, variable types (numerical, categorical, datetime), data completeness, and file metadata summary.'}</div>
    </div>
    <div class="method-card">
      <div class="mc-title">2.2 ${lang==='id'?'Statistik Deskriptif':'Descriptive Statistics'}</div>
      <div class="mc-body">${lang==='id'
        ?'Menghitung ukuran pemusatan (mean, median, modus), sebaran (standar deviasi, varians, kuartil, IQR), serta ukuran bentuk distribusi (skewness, kurtosis) untuk setiap variabel.'
        :'Computes measures of central tendency (mean, median, mode), dispersion (standard deviation, variance, quartiles, IQR), and distribution shape (skewness, kurtosis) for each variable.'}</div>
    </div>
    <div class="method-card">
      <div class="mc-title">2.3 ${lang==='id'?'Evaluasi Kualitas Data':'Data Quality Evaluation'}</div>
      <div class="mc-body">${lang==='id'
        ?'Mendeteksi nilai hilang (missing values), baris duplikat, outlier berbasis metode IQR (Interquartile Range), inkonsistensi tipe data, dan whitespace berlebih pada data teks.'
        :'Detects missing values, duplicate rows, outliers using the IQR (Interquartile Range) method, data type inconsistencies, and excess whitespace in text fields.'}</div>
    </div>
    <div class="method-card">
      <div class="mc-title">2.4 ${lang==='id'?'Visualisasi Eksploratif':'Exploratory Visualisation'}</div>
      <div class="mc-body">${lang==='id'
        ?'Menyajikan histogram dan box plot untuk variabel numerik, grafik frekuensi untuk variabel kategorik, heatmap korelasi, scatter plot multivariat, serta tren temporal jika tersedia.'
        :'Presents histograms and box plots for numerical variables, frequency charts for categorical variables, correlation heatmaps, multivariate scatter plots, and temporal trends when available.'}</div>
    </div>
  </div>

  <div class="callout-note">
    <span class="callout-label">${lang==='id'?'Catatan Metodologis':'Methodological Note'}</span>
    ${lang==='id'
      ?'Seluruh temuan dalam laporan ini bersifat eksploratif. Validasi domain, pemeriksaan sumber data asli, dan uji statistik inferensial lanjutan tetap diperlukan sebelum menarik kesimpulan kausal atau membuat keputusan bisnis berdasarkan hasil analisis ini.'
      :'All findings in this report are exploratory. Domain validation, review of original data sources, and further inferential statistical testing remain necessary before drawing causal conclusions or making business decisions based on this analysis.'}
  </div>
</section>

<!-- BAB 3 DESKRIPSI DATASET -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="dataset-overview">
  <h2>3. ${lang==='id'?'Deskripsi Dataset':'Dataset Description'}</h2>

  <h3 id="profile">3.1 ${lang==='id'?'Profil Umum Dataset':'General Dataset Profile'}</h3>
  <p>${lang==='id'
    ?`Dataset <strong>${state.currentFile}</strong> memuat total <strong>${(info.rows||0).toLocaleString()}</strong> observasi yang tersebar pada <strong>${info.columns||0}</strong> variabel. Dari jumlah tersebut, sebanyak ${info.numerical_columns||0} variabel bertipe numerik, ${info.categorical_columns||0} variabel bertipe kategorik, dan ${info.datetime_columns||0} variabel bertipe waktu (datetime).`
    :`The dataset <strong>${state.currentFile}</strong> contains a total of <strong>${(info.rows||0).toLocaleString()}</strong> observations across <strong>${info.columns||0}</strong> variables. Of these, ${info.numerical_columns||0} are numerical, ${info.categorical_columns||0} are categorical, and ${info.datetime_columns||0} are datetime variables.`}
  </p>

  <ul class="kpi-list">
    <li><strong>${lang==='id'?'Total Observasi':'Total Observations'}:</strong> ${(info.rows||0).toLocaleString()}</li>
    <li><strong>${lang==='id'?'Total Variabel':'Total Variables'}:</strong> ${info.columns||0}</li>
    <li><strong>${lang==='id'?'Variabel Numerik':'Numerical Variables'}:</strong> ${info.numerical_columns||0}</li>
    <li><strong>${lang==='id'?'Variabel Kategorik':'Categorical Variables'}:</strong> ${info.categorical_columns||0}</li>
    <li><strong>${lang==='id'?'Variabel Waktu':'Datetime Variables'}:</strong> ${info.datetime_columns||0}</li>
    <li><strong>${lang==='id'?'Proporsi Data Hilang':'Missing Data Rate'}:</strong> ${info.missing_pct||0}%</li>
  </ul>

  ${info.column_names && info.column_names.length ? `
  <h3 id="inventory">3.2 ${lang==='id'?'Inventaris Variabel':'Variable Inventory'}</h3>
  <p>${lang==='id'
    ?'Tabel berikut menyajikan daftar lengkap variabel yang terdapat dalam dataset beserta urutannya.'
    :'The following table presents the complete list of variables in the dataset with their respective order.'}</p>
  ${buildTable(
    ['No.', lang==='id'?'Nama Variabel':'Variable Name'],
    info.column_names.map((col, i) => [String(i+1), col]),
    lang==='id'?'Daftar variabel dalam dataset.':'List of variables in the dataset.'
  )}` : ''}
</section>

<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<!-- BAB 4 KUALITAS DATA -->
<section id="data-quality">
  <h2>4. ${lang==='id'?'Evaluasi Kualitas Data':'Data Quality Evaluation'}</h2>
  <p>${lang==='id'
    ?'Evaluasi kualitas data dilakukan secara komprehensif untuk mengidentifikasi masalah yang dapat mempengaruhi validitas analisis lebih lanjut. Pemeriksaan meliputi: nilai hilang, duplikasi baris, outlier, inkonsistensi tipe data, dan whitespace pada data teks.'
    :'A comprehensive data quality evaluation was conducted to identify issues that could affect the validity of further analysis. Checks include: missing values, row duplication, outliers, data type inconsistencies, and whitespace in text data.'}
  </p>

  ${buildTable(
    [lang==='id'?'Dimensi Kualitas':'Quality Dimension', lang==='id'?'Nilai':'Value', lang==='id'?'Keterangan':'Description'],
    [
      [lang==='id'?'Total Observasi':'Total Observations', (info.rows||0).toLocaleString(), lang==='id'?'Jumlah baris dalam dataset':'Number of rows in the dataset'],
      [lang==='id'?'Total Variabel':'Total Variables', info.columns||0, lang==='id'?'Jumlah kolom dalam dataset':'Number of columns in the dataset'],
      [lang==='id'?'Sel Data Kosong':'Missing Cells', `${info.total_missing||0} (${info.missing_pct||0}%)`, lang==='id'?`Tingkat missing: ${dataQualityLabel}`:`Missing rate: ${dataQualityLabel}`],
      [lang==='id'?'Variabel Numerik':'Numerical Variables', info.numerical_columns||0, lang==='id'?'Dianalisis dengan statistik deskriptif kuantitatif':'Analysed with quantitative descriptive statistics'],
      [lang==='id'?'Variabel Kategorik':'Categorical Variables', info.categorical_columns||0, lang==='id'?'Dianalisis dengan distribusi frekuensi':'Analysed with frequency distributions'],
      [lang==='id'?'Variabel Waktu':'Datetime Variables', info.datetime_columns||0, lang==='id'?'Dianalisis dengan tren temporal':'Analysed with temporal trend analysis'],
    ],
    lang==='id'?'Ringkasan kualitas dan dimensi dataset.':'Dataset quality and dimension summary.'
  )}

  ${cleaningForReport ? (() => {
    const cd = cleaningForReport;
    const dupCount = cd.duplicates?.count || 0;
    const outlierCols = cd.outliers?.length || 0;
    const typeIssues = cd.type_issues?.length || 0;
    const wsIssues = cd.whitespace?.length || 0;
    const missingCols = cd.missing?.length || 0;
    const statusFn = (val, zero, nonzero) => val === 0 ? zero : nonzero;
    return `
    <h3>${lang==='id'?'Diagnostik Pembersihan Data':'Data Cleaning Diagnostics'}</h3>
    <p>${lang==='id'
      ?'Tabel berikut merangkum hasil pemeriksaan otomatis terhadap potensi masalah kualitas data menggunakan metode IQR untuk deteksi outlier.'
      :'The following table summarises the results of automated checks for potential data quality issues, using the IQR method for outlier detection.'}</p>
    ${buildTable(
      [lang==='id'?'Pemeriksaan':'Check', lang==='id'?'Hasil':'Result', lang==='id'?'Status':'Status', lang==='id'?'Rekomendasi':'Recommendation'],
      [
        [lang==='id'?'Kolom dengan nilai hilang':'Columns with missing values', missingCols, statusFn(missingCols,'✅ Baik','⚠️ Perhatian'), statusFn(missingCols, lang==='id'?'Tidak diperlukan tindakan':'No action required', lang==='id'?'Pertimbangkan imputasi atau penghapusan':'Consider imputation or removal')],
        [lang==='id'?'Baris duplikat':'Duplicate rows', (dupCount.toLocaleString?dupCount.toLocaleString():dupCount), statusFn(dupCount,'✅ Baik','⚠️ Perhatian'), statusFn(dupCount, lang==='id'?'Tidak diperlukan tindakan':'No action required', lang==='id'?'Hapus duplikat sebelum pemodelan':'Remove duplicates before modelling')],
        [lang==='id'?'Kolom dengan outlier (IQR)':'Columns with outliers (IQR)', outlierCols, statusFn(outlierCols,'✅ Baik','⚠️ Tinjau'), statusFn(outlierCols, lang==='id'?'Tidak diperlukan tindakan':'No action required', lang==='id'?'Verifikasi apakah outlier valid atau error input':'Verify whether outliers are valid or data entry errors')],
        [lang==='id'?'Kolom dengan tipe data tidak konsisten':'Columns with type inconsistencies', typeIssues, statusFn(typeIssues,'✅ Baik','⚠️ Perhatian'), statusFn(typeIssues, lang==='id'?'Tidak diperlukan tindakan':'No action required', lang==='id'?'Konversi tipe data sesuai kebutuhan':'Convert data types as needed')],
        [lang==='id'?'Kolom dengan whitespace berlebih':'Columns with excess whitespace', wsIssues, statusFn(wsIssues,'✅ Baik','⚠️ Perhatian'), statusFn(wsIssues, lang==='id'?'Tidak diperlukan tindakan':'No action required', lang==='id'?'Terapkan strip() pada kolom teks':'Apply strip() to text columns')],
      ],
      lang==='id'?'Hasil diagnostik kualitas data otomatis.':'Automated data quality diagnostic results.'
    )}
    ${_cleanedFilename ? `<div class="callout-success"><span class="callout-label">${lang==='id'?'Dataset Bersih Tersedia':'Cleaned Dataset Available'}</span>${lang==='id'?`Versi dataset yang telah dibersihkan tersedia sebagai <strong>${_cleanedFilename}</strong>.`:`A cleaned version of this dataset is available as <strong>${_cleanedFilename}</strong>.`}</div>` : ''}`;
  })() : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Data Cleaning Belum Dijalankan':'Data Cleaning Not Run'}</span>${lang==='id'?'Diagnostik pembersihan data belum tersedia. Buka menu Data Cleaning untuk memperoleh analisis kualitas data yang lebih rinci.':'Data cleaning diagnostics are not yet available. Open the Data Cleaning menu to obtain a more detailed data quality analysis.'}</div>`}
</section>

<!-- BAB 5 STATISTIK NUMERIK -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="numerical-stats">
  <h2>5. ${lang==='id'?'Statistik Deskriptif Numerik':'Numerical Descriptive Statistics'}</h2>
  <p>${lang==='id'
    ?`Bagian ini menyajikan statistik deskriptif lengkap untuk seluruh ${info.numerical_columns||0} variabel numerik dalam dataset. Ukuran yang disajikan mencakup pemusatan data (mean, median, modus), sebaran data (standar deviasi, varians, minimum, maksimum, kuartil), serta karakteristik distribusi (skewness, kurtosis) dan anomali (outlier, missing).`
    :`This section presents comprehensive descriptive statistics for all ${info.numerical_columns||0} numerical variables in the dataset. Measures include central tendency (mean, median, mode), dispersion (standard deviation, variance, minimum, maximum, quartiles), distribution characteristics (skewness, kurtosis), and anomalies (outliers, missing values).`}
  </p>

  ${numStats
    ? buildSplitTable(numStats.headers, numStats.data,
        lang==='id'?'Statistik deskriptif variabel numerik.':'Descriptive statistics for numerical variables.',
        [[0,1,2,3,4,5,6,7], [0,8,9,10,11,12,13,14]])
    : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Data Belum Dimuat':'Data Not Loaded'}</span>${lang==='id'?'Statistik numerik belum tersedia. Buka menu Statistik Numerik terlebih dahulu.':'Numerical statistics not yet available. Open the Numerical Statistics menu first.'}</div>`}

  <div class="callout-info" style="margin-top:10pt">
    <span class="callout-label">${lang==='id'?'Panduan Interpretasi':'Interpretation Guide'}</span>
    <ul style="margin:6pt 0 0 16pt; font-size:9pt">
      <li><strong>${lang==='id'?'Skewness':'Skewness'}</strong>: ${lang==='id'?'|skew| > 1 -> distribusi condong kuat; |skew| 0.5-1 -> condong sedang; |skew| < 0.5 -> mendekati simetris.':'|skew| > 1 -> strong skew; |skew| 0.5-1 -> moderate skew; |skew| < 0.5 -> approximately symmetric.'}</li>
      <li><strong>${lang==='id'?'Kurtosis':'Kurtosis'}</strong>: ${lang==='id'?'Nilai > 0 (leptokurtik) menandakan ekor distribusi lebih berat dari normal; nilai < 0 (platikurtik) menandakan ekor lebih ringan.':'Values > 0 (leptokurtic) indicate heavier tails than normal; values < 0 (platykurtic) indicate lighter tails.'}</li>
      <li><strong>${lang==='id'?'Normalitas':'Normality'}</strong>: ${lang==='id'?'Diuji menggunakan uji Shapiro-Wilk (ÃŽÂ± = 0.05).':'Tested using the Shapiro-Wilk test (ÃŽÂ± = 0.05).'}</li>
      <li><strong>${lang==='id'?'Outlier':'Outliers'}</strong>: ${lang==='id'?'Dideteksi menggunakan metode IQR (nilai di luar [Q1 Ã¢Ë†â€™ 1.5Ãƒ-IQR, Q3 + 1.5Ãƒ-IQR]).':'Detected using the IQR method (values outside [Q1 Ã¢Ë†â€™ 1.5Ãƒ-IQR, Q3 + 1.5Ãƒ-IQR]).'}</li>
    </ul>
  </div>
</section>

<!-- BAB 6 STATISTIK KATEGORIK -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="categorical-stats">
  <h2>6. ${lang==='id'?'Statistik Deskriptif Kategorik':'Categorical Descriptive Statistics'}</h2>
  <p>${lang==='id'
    ?`Bagian ini menyajikan analisis distribusi frekuensi dan karakteristik untuk seluruh ${info.categorical_columns||0} variabel kategorik dalam dataset. Ukuran yang disajikan mencakup jumlah observasi valid, jumlah kategori unik, modus (kategori paling sering muncul), frekuensi dan proporsi modus, serta jumlah nilai hilang.`
    :`This section presents frequency distribution analysis and characteristics for all ${info.categorical_columns||0} categorical variables in the dataset. Measures include valid observation count, unique category count, mode (most frequent category), mode frequency and proportion, and missing value count.`}
  </p>

  ${catStats
    ? buildTable(catStats.headers, catStats.data,
        lang==='id'?'Statistik deskriptif variabel kategorik.':'Descriptive statistics for categorical variables.')
    : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Data Belum Dimuat':'Data Not Loaded'}</span>${lang==='id'?'Statistik kategorik belum tersedia. Buka menu Statistik Kategorik terlebih dahulu.':'Categorical statistics not yet available. Open the Categorical Statistics menu first.'}</div>`}
</section>

<!-- BAB 7 VISUALISASI -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="visualizations">
  <h2>7. ${lang==='id'?'Visualisasi Eksploratori':'Exploratory Visualisations'}</h2>
  <p>${lang==='id'
    ?'Bagian ini menyajikan visualisasi yang dihasilkan secara otomatis dari data aktif dalam sesi analisis saat laporan dicetak. Setiap visualisasi disertai dengan keterangan yang menjelaskan jenis grafik dan informasi yang disajikan.'
    :'This section presents visualisations generated automatically from data active in the analysis session at the time of report generation. Each visualisation is accompanied by a caption describing the chart type and information presented.'}
  </p>

  ${chartImages.length > 0 ? (() => {
    let vizHtml = '';
    chartImages.forEach((ci, idx) => {
      const figNum = idx + 1;
      vizHtml += `
      <div class="figure-block" id="visualization-${figNum}">
        <img class="figure-img" src="${ci.src}" alt="${ci.label}" />
        <div class="figure-caption">${lang === 'id' ? `Gambar ${figNum}` : `Figure ${figNum}`}. ${ci.label}.</div>
      </div>`;
    });
    return vizHtml;
  })() : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Visualisasi Tidak Tersedia':'Visualisations Not Available'}</span>${lang==='id'?'Tidak ada grafik aktif yang dapat diekspor. Buka menu visualisasi terlebih dahulu dan pastikan grafik telah dirender sebelum mengekspor laporan ini.':'No active charts available for export. Open the visualisation menus and ensure charts are rendered before exporting this report.'}</div>`}
</section>

<!-- BAB 8 INSIGHT -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="insights">
  <h2>8. ${lang==='id'?'Temuan dan Insight Otomatis':'Automated Findings & Insights'}</h2>
  <p>${lang==='id'
    ?'Berikut adalah temuan-temuan yang diidentifikasi secara otomatis oleh sistem berdasarkan analisis statistik dan pola data. Setiap temuan merupakan observasi eksploratif yang memerlukan validasi domain lebih lanjut sebelum dijadikan dasar keputusan.'
    :'The following findings were automatically identified by the system based on statistical analysis and data patterns. Each finding is an exploratory observation requiring further domain validation before being used as a basis for decision-making.'}
  </p>

  ${insightsList && insightsList.length > 0
    ? `<ul class="insight-list">${insightsList.map(ins => `
      <li><strong>${ins.title}</strong>. ${ins.body}</li>`).join('')}</ul>`
    : `<div class="callout-warn"><span class="callout-label">${lang==='id'?'Insight Belum Dimuat':'Insights Not Loaded'}</span>${lang==='id'?'Insight otomatis belum tersedia. Buka menu Smart Insights untuk menghasilkan temuan.':'Automated insights not yet available. Open the Smart Insights menu to generate findings.'}</div>`}
</section>

<!-- BAB 9 KESIMPULAN -->
<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<section id="conclusion">
  <h2>9. ${lang==='id'?'Kesimpulan':'Conclusion'}</h2>
  <p>${lang==='id'
    ?`Laporan ini telah menyajikan Exploratory Data Analysis secara komprehensif terhadap dataset <strong>${state.currentFile}</strong> yang memuat <strong>${(info.rows||0).toLocaleString()}</strong> observasi dan <strong>${info.columns||0}</strong> variabel. Analisis mencakup profiling dataset, evaluasi kualitas data, statistik deskriptif, visualisasi eksploratori, dan insight otomatis.`
    :`This report has presented a comprehensive Exploratory Data Analysis of the dataset <strong>${state.currentFile}</strong>, comprising <strong>${(info.rows||0).toLocaleString()}</strong> observations and <strong>${info.columns||0}</strong> variables. The analysis covers dataset profiling, data quality evaluation, descriptive statistics, exploratory visualisation, and automated insights.`}
  </p>
  <p>${lang==='id'
    ?`Tingkat nilai hilang sebesar <strong>${info.missing_pct||0}%</strong> memberikan penilaian kualitas data: <strong style="color:${qualityColor}">${dataQualityLabel}</strong>.`
    :`The missing-value rate of <strong>${info.missing_pct||0}%</strong> yields a data quality assessment of: <strong style="color:${qualityColor}">${dataQualityLabel}</strong>.`}
  </p>

  <h3>${lang==='id'?'Keterbatasan Analisis':'Limitations'}</h3>
  <ul>
    <li>${lang==='id'?'Seluruh analisis bersifat eksploratif dan tidak menyimpulkan hubungan kausal.':'All analysis is exploratory and does not establish causal relationships.'}</li>
    <li>${lang==='id'?'Interpretasi statistik harus dikontekstualisasikan dengan pengetahuan domain yang relevan.':'Statistical interpretations must be contextualised with relevant domain knowledge.'}</li>
    <li>${lang==='id'?'Visualisasi dihasilkan dari data aktif pada sesi saat laporan dicetak; grafik yang belum dibuka tidak akan muncul.':'Visualisations are generated from data active at the time of report printing; unopened charts will not appear.'}</li>
    <li>${lang==='id'?'Deteksi outlier menggunakan metode IQR mungkin tidak optimal untuk semua distribusi data.':'Outlier detection using the IQR method may not be optimal for all data distributions.'}</li>
  </ul>

  <h3>${lang==='id'?'Rekomendasi Lanjutan':'Recommendations'}</h3>
  <ul>
    <li>${lang==='id'?'Lakukan penanganan missing values sebelum pemodelan prediktif.':'Address missing values before predictive modelling.'}</li>
    <li>${lang==='id'?'Validasi outlier yang terdeteksi dengan pakar domain atau sumber data asli.':'Validate detected outliers with domain experts or original data sources.'}</li>
    <li>${lang==='id'?'Pertimbangkan feature engineering berdasarkan pola yang teridentifikasi.':'Consider feature engineering based on identified patterns.'}</li>
    <li>${lang==='id'?'Lanjutkan dengan analisis inferensial dan pemodelan statistik sesuai tujuan riset.':'Proceed with inferential analysis and statistical modelling aligned with research objectives.'}</li>
  </ul>
</section>

<div class="page-break"></div>
<div class="running-header">
  <div class="rh-left"><div><div class="rh-title">${lang==='id'?'LAPORAN EDA OTOMATIS':'AUTOMATED EDA REPORT'}</div><div class="rh-sub">${state.currentFile} - ${reportScope}</div></div></div>
  </div>

<!-- BAB 10 REFERENSI -->
<section id="references">
  <h2>10. ${lang==='id'?'Referensi':'References'}</h2>
  <ol class="reference-list">
    <li>Tukey, J. W. (1977). <em>Exploratory Data Analysis</em>. Addison-Wesley.</li>
    <li>McKinney, W. (2017). <em>Python for Data Analysis</em> (2nd ed.). O'Reilly Media.</li>
    <li>The pandas development team. (2023). <em>pandas: Powerful Python data analysis toolkit</em> (Version 2.x). https://pandas.pydata.org/</li>
    <li>Virtanen, P., Gommers, R., Oliphant, T. E., et al. (2020). SciPy 1.0: Fundamental algorithms for scientific computing in Python. <em>Nature Methods</em>, 17, 261-272.</li>
    <li>Plotly Technologies Inc. (2023). <em>Collaborative data science with Plotly</em>. https://plotly.com/</li>
    <li>Seabold, S., & Perktold, J. (2010). Statsmodels: Econometric and statistical modeling with Python. In <em>Proceedings of the 9th Python in Science Conference</em> (pp. 57-61).</li>
  </ol>
</section>

<!-- FOOTER AKHIR -->
<div style="margin-top:30pt; padding-top:12pt; border-top:1.5pt solid #1a237e; display:flex; justify-content:space-between; align-items:center; font-family:Arial,Helvetica,sans-serif; font-size:8pt; color:#777;">
  <span>Auto EDA Insight - ${lang==='id'?'Platform Analitik Data Cerdas':'Intelligent Data Analytics Platform'}</span>
  <span>${lang==='id'?'Dibuat':'Generated'}: ${now}</span>
  <span>${reportNotice}</span>
</div>

</body>
</html>`;

  // Text content is already cleaned via buildTable -> cleanReportText at cell level.
  // Do NOT apply cleanReportText to the full HTML to avoid corrupting tags/CSS.
  html = html
    .replace(/<span class="toc-page-num">(?:-|Ã¢â‚¬â€œ)<\/span>/g, '<span class="toc-page-num"></span>')
    .replace(/<div class="cover-footer">[\s\S]*?<\/div>\s*<\/div>/g, '</div>')
    .replace(/<div class="rh-sub">([^<]*)<\/div>/g, (_, text) => `<div class="rh-sub">${cleanReportText(text)}</div>`);

  if (downloadHtml) {
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `academic_report_${state.currentFile.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    return;
  }

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => {
    if (printWindow && !printWindow.closed) {
      try { printWindow.print(); } catch (_) {}
    }
  }, 800);
  } catch (err) {
    console.error('[AutoEDA PDF Export Error]', err);
    if (printWindow && !printWindow.closed) {
      try {
        printWindow.document.open();
        printWindow.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Export Error</title></head><body style="font-family:Arial,sans-serif;padding:24px"><h2>Export Gagal</h2><p>${escapeHtml(String(err?.message || err))}</p><hr><pre style="font-size:9pt;white-space:pre-wrap">${escapeHtml(String(err?.stack || 'No stack trace'))}</pre></body></html>`);
        printWindow.document.close();
      } catch (_) {}
    }
    showToast((state.lang === 'id' ? 'Gagal membuat PDF: ' : 'Failed to create PDF: ') + (err?.message || err), 'error');
  }
};

window.exportHTMLDashboard = async function() {
  if (!state.currentFile) {
    showToast(state.lang === 'id' ? 'Silakan upload dataset terlebih dahulu.' : 'Please upload a dataset first.', 'error');
    return;
  }

  showLoading(state.lang === 'id' ? 'Mempersiapkan HTML akademis...' : 'Preparing academic HTML...');
  try {
    await window.exportPDFReport(true);
    hideLoading();
    showToast(state.lang === 'id' ? 'HTML report akademis berhasil diunduh!' : 'Academic HTML report downloaded successfully!', 'success');
  } catch (err) {
    hideLoading();
    showToast((state.lang === 'id' ? 'Gagal membuat HTML:' : 'Failed to create HTML:') + ' ' + err.message, 'error');
  }
};

function switchSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const section = document.getElementById(`section-${sectionId}`);
  const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (section) section.classList.add('active');
  if (navItem) navItem.classList.add('active');

  updatePageTitle(sectionId);

  // Lazy load content when switching - ALL sections handled here
  if (sectionId === 'stats-numerical') {
    if (state.currentFile) loadNumericalStats();
  } else if (sectionId === 'stats-categorical') {
    if (state.currentFile) loadCategoricalStats();
  } else if (sectionId === 'viz-timeseries') {
    if (state.currentFile) loadVizTimeSeries();
  } else if (sectionId === 'preview') {
    if (state.currentFile) {
      loadPreview(1);
    } else {
      document.getElementById('table-empty').style.display = 'block';
    }
  } else if (sectionId === 'dashboard') {
    if (state.currentFile) loadDashboardOverview();
  } else if (sectionId === 'viz-numerical') {
    if (state.currentFile) loadVizNumerical();
  } else if (sectionId === 'viz-categorical') {
    if (state.currentFile) loadVizCategorical();
  } else if (sectionId === 'viz-bivariate') {
    if (state.currentFile) loadVizBivariate();
  } else if (sectionId === 'viz-catnum') {
    if (state.currentFile) loadVizCatNum();
  } else if (sectionId === 'insights') {
    if (state.currentFile) loadInsights();
  }
}

function navigateSection(sectionId) {
  if (typeof window.switchSection === 'function' && window.switchSection !== switchSection) {
    window.switchSection(sectionId);
    return;
  }
  switchSection(sectionId);
}

function updatePageTitle(sectionId) {
  const map = {
    'welcome': 'page_welcome',
    'dashboard': 'page_dashboard',
    'upload': 'page_upload',
    'preview': 'page_preview',
    'stats-numerical': 'page_numerical',
    'stats-categorical': 'page_categorical',
    'team': 'page_team',
    'profile': 'page_profile',
    'viz-numerical': 'page_viz_num',
    'viz-categorical': 'page_viz_cat',
    'viz-bivariate': 'page_viz_biv',
    'viz-catnum': 'page_viz_cn',
    'viz-timeseries': 'page_viz_ts',
    'insights': 'page_insights',
  };
  const active = sectionId || document.querySelector('.nav-item.active')?.getAttribute('data-section') || 'welcome';
  const key = map[active] || 'page_dashboard';
  document.getElementById('page-title').textContent = t(key);
}

// =====================================================
// FILE UPLOAD
// =====================================================
function initUpload() {
  const area = document.getElementById('upload-area');
  const input = document.getElementById('file-input');

  // Drag events
  area.addEventListener('dragover', (e) => { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', () => area.classList.remove('drag-over'));
  area.addEventListener('drop', (e) => {
    e.preventDefault();
    area.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  });

  area.addEventListener('click', (e) => {
    // Mencegah double trigger: Jika yang diklik adalah tombol browse (label), 
    // jangan panggil input.click() lagi karena sudah dihandle otomatis oleh HTML.
    if (e.target.closest('label')) return;
    input.click();
  });

  input.addEventListener('change', () => {
    if (input.files[0]) handleFile(input.files[0]);
  });
}

async function handleFile(file) {
  const allowed = ['.xlsx', '.xls', '.csv', '.txt'];
  const ext = '.' + file.name.split('.').pop().toLowerCase();
  const fileInput = document.getElementById('file-input');
  const maxFileSizeMB = 50; // Consistent with app.config['MAX_CONTENT_LENGTH']
  const maxFileSize = maxFileSizeMB * 1024 * 1024; // Convert MB to bytes

  if (!allowed.includes(ext)) {
    showToast(t('toast_type_err'), 'error');
    return;
  }
  if (file.size > maxFileSize) {
    showToast(t('toast_size_err').replace('{size}', maxFileSizeMB), 'error');
    return;
  }

  showLoading(t('uploading'));
  showProgress();

  const formData = new FormData();
  formData.append('file', file);

  // Animate progress bar
  animateProgress();

  try {
    const res = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await res.json();
    
    // Reset nilai input agar file yang sama bisa diunggah ulang tanpa refresh
    if (fileInput) fileInput.value = "";
    
    hideLoading();
    hideProgress();

    if (data.success) {
      activateDatasetFromResponse(data, t('toast_upload_ok'));
      loadDatasetHistory();
    } else {
      showToast(t('toast_upload_err') + data.error, 'error');
    }
  } catch (err) {
    hideLoading();
    hideProgress();
    showToast(t('toast_upload_err') + err.message, 'error');
  }
}

function animateProgress() {
  const fill = document.getElementById('progress-fill');
  let w = 0;
  const iv = setInterval(() => {
    w = Math.min(w + Math.random() * 8, 85);
    fill.style.width = w + '%';
    if (w >= 85) clearInterval(iv);
  }, 120);
}

function showProgress() {
  document.getElementById('upload-progress').style.display = 'block';
  const side = document.getElementById('upload-side-wrapper');
  if (side) side.style.display = 'none';
}
function hideProgress() {
  document.getElementById('upload-progress').style.display = 'none';
  document.getElementById('progress-fill').style.width = '100%';
  setTimeout(() => { document.getElementById('progress-fill').style.width = '0%'; }, 300);
}

// =====================================================
// RENDER UPLOAD RESULT
// =====================================================
function renderUploadResult(data) {
  const info = data.info;
  const side = document.getElementById('upload-side-wrapper');
  if (side) side.style.display = 'grid';
  document.getElementById('result-filename').textContent = info.filename;
  document.getElementById('result-meta').textContent =
    `${info.file_size} · ${state.lang === 'id' ? 'Berhasil diunggah' : 'Uploaded successfully'}`;

  const grid = document.getElementById('result-grid');
  grid.innerHTML = [
    { label: t('stat_rows'), value: info.rows.toLocaleString() },
    { label: t('stat_cols'), value: info.columns },
    { label: t('stat_numerical'), value: info.numerical_columns },
    { label: t('stat_categorical'), value: info.categorical_columns },
    { label: 'Datetime', value: info.datetime_columns },
    { label: t('th_missing'), value: `${info.total_missing} (${info.missing_pct}%)` },
    { label: state.lang === 'id' ? 'Ukuran File' : 'File Size', value: info.file_size },
    { label: t('dashboard_time_series'), value: info.has_datetime ? t('chart_detected') : t('chart_none') },
  ].map(item => `
    <div class="result-item">
      <div class="result-item-label">${item.label}</div>
      <div class="result-item-value">${item.value}</div>
    </div>
  `).join('');
}

// =====================================================
// RENDER DASHBOARD CARDS
// =====================================================
function renderDashboardCards(data) {
  const info = data.info;
  document.getElementById('summary-cards').style.display = 'grid';
  document.getElementById('stat-rows').textContent = info.rows.toLocaleString();
  document.getElementById('stat-cols').textContent = info.columns;
  document.getElementById('stat-num').textContent = info.numerical_columns;
  document.getElementById('stat-cat').textContent = info.categorical_columns;
  document.getElementById('stat-missing').textContent =
    `${info.total_missing} (${info.missing_pct}%)`;
  // Activate dashboard and render overview after upload
  navigateSection('dashboard');
}

// Dashboard overview: small-multiples style visual grid (like Tableau)
async function loadDashboardOverview() {
  if (!state.currentFile) { showToast(t('toast_load_err'), 'error'); return; }
  const info = state.datasetInfo || {};
  const holder = document.getElementById('dashboard-overview-holder');
  holder.style.display = 'block';
  holder.innerHTML = `
    <div class="dashboard-overview-panel" style="margin-top:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
        <div>
          <h3>${t('page_dashboard')} - ${state.lang === 'id' ? 'Visualisasi Interaktif' : 'Interactive Visualizations'}</h3>
          <div class="dashboard-panel-meta">${t('dashboard_desc')}</div>
        </div>
      </div>
      <div id="db-grid" class="dashboard-grid" style="margin-top:24px;"></div>
    </div>`;

  const grid = document.getElementById('db-grid');
  grid.innerHTML = '';
  showLoading(t('dashboard_preparing'));
  try {
    // Fetch core viz payloads
    const [numRes, catRes, bivRes, cnRes, tsRes] = await Promise.all([
      fetch('/api/viz/numerical', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile})}),
      fetch('/api/viz/categorical', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile})}),
      fetch('/api/viz/bivariate', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile})}),
      fetch('/api/viz/catnum', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile})}),
      fetch('/api/viz/timeseries', {method:'POST',headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile})}),
    ]);

    const [numData, catData, bivData, cnData, tsData] = await Promise.all([numRes.json(), catRes.json(), bivRes.json(), cnRes.json(), tsRes.json()]);
    hideLoading();

    ensurePlotly(() => {
      const c = chartColors();
      const plotConfig = {};
      // Numerical: render up to 4 histograms
      if (numData.success && numData.plots) {
        const cols = Object.keys(numData.plots).slice(0,4);
        cols.forEach((col, idx) => {
          const p = numData.plots[col];
          const id = `db-num-${idx}`;
          grid.insertAdjacentHTML('beforeend', `<div class="card dashboard-card small"><div class="card-title-row"><span>${t('dashboard_histogram')}</span><span title="${escapeAttr(col)}">${escapeHtml(col)}</span></div><div id="${id}" class="dashboard-plot"></div></div>`);
          if (p.histogram) {
            renderPlotWhenReady(id, [histogramTrace(p.histogram, c, t('chart_frequency'))], plotLayout('', t('chart_values'), t('chart_count'), {autosize:true,margin:{t:24,b:48,l:48,r:18}, bargap:0.04}), plotConfig);
          }
        });
      }

      // Categorical: up to 4 bar charts
      if (catData.success && catData.plots) {
        const cols = Object.keys(catData.plots).slice(0,4);
        cols.forEach((col, idx) => {
          const p = catData.plots[col];
          const id = `db-cat-${idx}`;
          grid.insertAdjacentHTML('beforeend', `<div class="card dashboard-card small"><div class="card-title-row"><span>${t('dashboard_category_distribution')}</span><span title="${escapeAttr(col)}">${escapeHtml(col)}</span></div><div id="${id}" class="dashboard-plot"></div></div>`);
          renderPlotWhenReady(id, [{type:'bar', x:p.labels.slice(0,8), y:p.counts.slice(0,8), marker:{color:c.palette.slice(0,8)}, hoverinfo:'x+y', hovertemplate:`<b>%{x}</b><br>${t('chart_count')}: %{y}<extra></extra>`}], plotLayout('', t('chart_categories'), t('chart_count'), {autosize:true,margin:{t:24,b:58,l:48,r:18}, xaxis:{tickangle:-20}}), plotConfig);
        });
      }

      // Bivariate: scatter and heatmap if available
      if (bivData.success && bivData.plots) {
        if (bivData.plots.scatter) {
          const s = bivData.plots.scatter;
          grid.insertAdjacentHTML('beforeend', `<div class="card dashboard-card medium"><div class="card-title-row"><span>${t('dashboard_scatter')}</span><span title="${escapeAttr(`${s.x_col} vs ${s.y_col}`)}">${escapeHtml(`${s.x_col} vs ${s.y_col}`)}</span></div><div id="db-scatter" class="dashboard-plot dashboard-plot-medium"></div></div>`);
          renderPlotWhenReady('db-scatter', [{type:'scatter', x:s.x, y:s.y, mode:'markers', marker:{color:c.accent,size:6}, hoverinfo:'x+y', hovertemplate:'<b>X:</b> %{x}<br><b>Y:</b> %{y}<extra></extra>'}], plotLayout(s.x_col, 'X', 'Y', {autosize:true,margin:{t:24,b:48,l:48,r:18}}), plotConfig);
        }
        if (bivData.plots.heatmap) {
          const hm = bivData.plots.heatmap;
          grid.insertAdjacentHTML('beforeend', `<div class="card dashboard-card medium"><div class="card-title-row"><span>${t('dashboard_heatmap')}</span><span></span></div><div id="db-heatmap" class="dashboard-plot dashboard-plot-medium"></div></div>`);
          renderPlotWhenReady('db-heatmap', [{type:'heatmap', z:hm.matrix, x:hm.columns, y:hm.columns, colorscale:'RdBu', hoverongaps:false, hovertemplate:'%{y} - %{x}<br>Correlation: %{z:.3f}<extra></extra>'}], plotLayout(t('dashboard_corr_matrix'), '', '', {autosize:true,margin:{t:34,b:70,l:86,r:18}, xaxis:{tickangle:-30}}), plotConfig);
        }
      }

      // Time series: plot main chart if present
      if (tsData.success && tsData.plots && tsData.plots.dates && tsData.plots.dates.length) {
        const p = tsData.plots;
        grid.insertAdjacentHTML('beforeend', `<div class="card dashboard-card wide"><div class="card-title-row"><span>${t('dashboard_time_series')}</span><span title="${escapeAttr(p.num_col)}">${escapeHtml(p.num_col)}</span></div><div id="db-ts" class="dashboard-plot dashboard-plot-wide"></div></div>`);
        const traces = [{x:p.dates, y:p.values, type:'scatter', mode:'lines+markers', line:{color:c.accent,width:2}, marker:{size:4}, hoverinfo:'x+y', hovertemplate:`<b>%{x}</b><br>${t('chart_value')}: %{y}<extra></extra>`}];
        renderPlotWhenReady('db-ts', traces, plotLayout('', p.date_col, p.num_col, {autosize:true,margin:{t:24,b:50,l:56,r:18}}), plotConfig);
      }
    });

    showToast(t('dashboard_ready'), 'success');
  } catch (err) {
    hideLoading();
    showToast(t('dashboard_failed') + err.message, 'error');
  }
}

function renderColumnMap(typeInfo) {
  const card = document.getElementById('column-map-card');
  const list = document.getElementById('column-type-list');
  const badge = document.getElementById('col-map-badge');
  card.style.display = 'block';

  const total = (typeInfo.numerical?.length || 0) + (typeInfo.categorical?.length || 0) +
    (typeInfo.datetime?.length || 0) + (typeInfo.boolean?.length || 0);
  badge.textContent = `${total} ${t('columns_label')}`;

  const chips = [];
  (typeInfo.numerical || []).forEach(c => chips.push({ name: c.name, type: 'numerical', dtype: c.dtype }));
  (typeInfo.categorical || []).forEach(c => chips.push({ name: c.name, type: 'categorical', dtype: c.dtype }));
  (typeInfo.datetime || []).forEach(c => chips.push({ name: c.name, type: 'datetime', dtype: c.dtype }));
  (typeInfo.boolean || []).forEach(c => chips.push({ name: c.name, type: 'boolean', dtype: c.dtype }));

  list.innerHTML = chips.map(c => `
    <span class="col-chip ${c.type}" title="${c.dtype}">
      <span class="col-chip-dot"></span>${c.name}
    </span>
  `).join('');
}

function updateSidebarInfo(data) {
  const info = data.info;
  document.getElementById('sidebar-dataset-info').style.display = 'block';
  document.getElementById('sidebar-filename').textContent = info.filename;
  document.getElementById('sidebar-meta').textContent = `${info.rows.toLocaleString()} ${t('rows_label')} × ${info.columns} ${t('cols_label')}`;
}

// =====================================================
// DATA PREVIEW
// =====================================================
async function loadPreview(page) {
  if (!state.currentFile) return;
  showLoading();

  try {
    const res = await fetch('/api/preview', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: state.currentFile, page, per_page: 15 })
    });
    const data = await res.json();
    hideLoading();
    if (data.success) {
      state.previewPage = data.page;
      state.previewTotalPages = data.total_pages;
      state.columns = data.columns;
      state.allRows = data.data;
      renderTable(data.columns, data.data);
      document.getElementById('page-info').textContent = `${data.page} / ${data.total_pages}`;
      document.getElementById('prev-page').disabled = data.page <= 1;
      document.getElementById('next-page').disabled = data.page >= data.total_pages;
      document.getElementById('preview-meta-label').textContent = state.lang === 'id'
        ? `Menampilkan baris ${((data.page-1)*15)+1}-${Math.min(data.page*15, data.total_rows)} dari ${data.total_rows.toLocaleString()}`
        : `Showing rows ${((data.page-1)*15)+1}-${Math.min(data.page*15, data.total_rows)} of ${data.total_rows.toLocaleString()}`;
    }
  } catch (err) {
    hideLoading();
  }
}

function renderTable(columns, rows) {
  const head = document.getElementById('table-head');
  const body = document.getElementById('table-body');
  const empty = document.getElementById('table-empty');

  if (!columns || columns.length === 0) {
    head.innerHTML = '';
    body.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  head.innerHTML = `<tr><th>#</th>${columns.map(c => `<th title="${c}">${c}</th>`).join('')}</tr>`;

  const offset = (state.previewPage - 1) * 15;
  body.innerHTML = rows.map((row, i) =>
    `<tr><td style="color:var(--text-3)">${offset + i + 1}</td>${row.map(cell => `<td title="${cell}">${cell}</td>`).join('')}</tr>`
  ).join('');
}

function initTableSearch() {
  document.getElementById('table-search').addEventListener('input', function () {
    const q = this.value.toLowerCase();
    if (!q) {
      renderTable(state.columns, state.allRows);
      return;
    }
    const filtered = state.allRows.filter(row =>
      row.some(cell => String(cell).toLowerCase().includes(q))
    );
    renderTable(state.columns, filtered);
  });
}

function initPagination() {
  document.getElementById('prev-page').addEventListener('click', () => {
    if (state.previewPage > 1) loadPreview(state.previewPage - 1);
  });
  document.getElementById('next-page').addEventListener('click', () => {
    if (state.previewPage < state.previewTotalPages) loadPreview(state.previewPage + 1);
  });
}

// =====================================================
// NUMERICAL STATS
// =====================================================
async function loadNumericalStats() {
  const empty = document.getElementById('num-stats-empty');
  const container = document.getElementById('num-stats-container');

  if (!state.currentFile) {
    empty.style.display = 'block';
    container.style.display = 'none';
    return;
  }

  showLoading();
  try {
    const res = await fetch('/api/stats/numerical', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: state.currentFile })
    });
    const data = await res.json();
    hideLoading();

    if (!data.success) { showToast(t('toast_load_err'), 'error'); return; }

    const stats = data.stats;
    if (!stats || stats.length === 0) {
      empty.querySelector('p').textContent = t('no_numerical');
      empty.style.display = 'block';
      container.style.display = 'none';
      return;
    }

    empty.style.display = 'none';
    container.style.display = 'block';

    const headers = [
      t('th_column'), t('th_count'), t('th_mean'), t('th_median'),
      t('th_min'), t('th_max'), t('th_std'), t('th_variance'),
      t('th_mode'), t('th_skew'), t('th_kurtosis'),
      t('th_missing'), t('th_missing_pct'), t('th_normal'), t('th_outliers')
    ];

    container.innerHTML = `
      <div class="card">
        <div class="stats-scroll">
          <table class="stats-table" id="table-num-stats">
            <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${stats.map(s => `
                <tr>
                  <td>${s.column}</td>
                  <td>${fmt(s.count)}</td>
                  <td>${fmt(s.mean)}</td>
                  <td>${fmt(s.median)}</td>
                  <td>${fmt(s.min)}</td>
                  <td>${fmt(s.max)}</td>
                  <td>${fmt(s.std)}</td>
                  <td>${fmt(s.variance)}</td>
                  <td>${fmt(s.mode)}</td>
                  <td>${fmt(s.skewness)}</td>
                  <td>${fmt(s.kurtosis)}</td>
                  <td class="${s.missing_count > 0 ? 'val-missing' : ''}">${fmt(s.missing_count)}</td>
                  <td class="${s.missing_count > 0 ? 'val-missing' : ''}">${fmt(s.missing_pct)}%</td>
                  <td class="${s.is_normal === true ? 'val-normal' : s.is_normal === false ? 'val-notnormal' : ''}">
                    ${s.is_normal === true ? t('normal_yes') : s.is_normal === false ? t('normal_no') : '-'}
                  </td>
                  <td class="${s.n_outliers > 0 ? 'val-outlier' : ''}">${fmt(s.n_outliers)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } catch (err) {
    hideLoading();
    showToast(t('toast_load_err'), 'error');
  }
}

// =====================================================
// CATEGORICAL STATS
// =====================================================
async function loadCategoricalStats() {
  const empty = document.getElementById('cat-stats-empty');
  const container = document.getElementById('cat-stats-container');

  if (!state.currentFile) {
    empty.style.display = 'block';
    container.style.display = 'none';
    return;
  }

  showLoading();
  try {
    const res = await fetch('/api/stats/categorical', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: state.currentFile })
    });
    const data = await res.json();
    hideLoading();

    if (!data.success) { showToast(t('toast_load_err'), 'error'); return; }

    const stats = data.stats;
    if (!stats || stats.length === 0) {
      empty.querySelector('p').textContent = t('no_categorical');
      empty.style.display = 'block';
      container.style.display = 'none';
      return;
    }

    empty.style.display = 'none';
    container.style.display = 'block';

    container.innerHTML = `
      <div class="cat-cards-grid">
        ${stats.map(s => `
          <div class="cat-stat-card">
            <div class="cat-card-header">
              <div class="cat-col-name">${s.column}</div>
              <span class="cat-unique-badge">${s.unique} unique</span>
            </div>
            <div class="cat-meta-row">
              <div class="cat-meta-item">
                <div class="cat-meta-label">${t('th_count')}</div>
                <div class="cat-meta-value">${fmt(s.count)}</div>
              </div>
              <div class="cat-meta-item">
                <div class="cat-meta-label">${t('th_mode')}</div>
                <div class="cat-meta-value" title="${s.mode}" style="font-size:0.75rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${s.mode || '-'}</div>
              </div>
              <div class="cat-meta-item">
                <div class="cat-meta-label">${t('th_mode_pct')}</div>
                <div class="cat-meta-value">${fmt(s.mode_pct)}%</div>
              </div>
              <div class="cat-meta-item">
                <div class="cat-meta-label">${t('th_missing')}</div>
                <div class="cat-meta-value" style="color:${s.missing_count > 0 ? '#ff5050' : 'inherit'}">${fmt(s.missing_count)}</div>
              </div>
            </div>
            <div class="cat-bar-list">
              ${(s.top_categories || []).map(cat => `
                <div class="cat-bar-item">
                  <div class="cat-bar-label">
                    <span title="${cat.value}" style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block">${cat.value}</span>
                    <span>${cat.pct}%</span>
                  </div>
                  <div class="cat-bar-track">
                    <div class="cat-bar-fill" style="width:${cat.pct}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <table id="table-cat-stats" style="display:none;">
        <thead>
          <tr>
            <th>${t('th_column')}</th>
            <th>${t('th_count')}</th>
            <th>${t('th_unique')}</th>
            <th>${t('th_mode')}</th>
            <th>${t('th_mode_freq')}</th>
            <th>${t('th_mode_pct')}</th>
            <th>${t('th_missing')}</th>
            <th>${t('th_missing_pct')}</th>
          </tr>
        </thead>
        <tbody>
          ${stats.map(s => `
            <tr>
              <td>${s.column}</td>
              <td>${fmt(s.count)}</td>
              <td>${fmt(s.unique)}</td>
              <td>${s.mode || '-'}</td>
              <td>${fmt(s.mode_freq)}</td>
              <td>${fmt(s.mode_pct)}%</td>
              <td>${fmt(s.missing_count)}</td>
              <td>${fmt(s.missing_pct)}%</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } catch (err) {
    hideLoading();
    showToast(t('toast_load_err'), 'error');
  }
}

// =====================================================
// UTILITIES
// =====================================================
function fmt(val) {
  if (val === null || val === undefined) return '-';
  if (typeof val === 'number') {
    if (Number.isInteger(val)) return val.toLocaleString();
    return parseFloat(val.toFixed(4)).toLocaleString(undefined, { maximumFractionDigits: 4 });
  }
  return val;
}

function escapeHtml(val) {
  return String(val ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(val) {
  return escapeHtml(val);
}

function renderCleaningPreview(preview, title = 'Preview data kotor') {
  const columns = preview?.columns || [];
  const rows = preview?.rows || [];
  if (!columns.length || !rows.length) return '';

  return `
    <div class="cleaning-preview">
      <div class="cleaning-preview-title">${escapeHtml(title)}</div>
      <div class="cleaning-preview-table-wrap">
        <table class="cleaning-preview-table">
          <thead>
            <tr>${columns.map(c => `<th>${escapeHtml(c)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(row => `
              <tr>${columns.map((_, i) => `<td>${escapeHtml(row[i] ?? '')}</td>`).join('')}</tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.className = 'toast'; }, 3500);
}

function showLoading(msg) {
  document.getElementById('loading-overlay').style.display = 'flex';
  if (msg) document.getElementById('loading-text').textContent = msg;
}
function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

// Expose switchSection globally for button onclick attrs
window.switchSection = switchSection;

// =====================================================
// MEETING 15 - VISUALISASI & INSIGHTS
// =====================================================

// Tambah Plotly.js via CDN jika belum ada
function ensurePlotly(cb) {
  if (window.Plotly) { cb(); return; }
  const s = document.createElement('script');
  s.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
  s.onload = cb;
  document.head.appendChild(s);
}

function ensurePlotlyAsync() {
  return new Promise((resolve, reject) => {
    if (window.Plotly) return resolve(window.Plotly);
    const s = document.createElement('script');
    s.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js';
    s.onload = () => resolve(window.Plotly);
    s.onerror = () => reject(new Error('Failed to load Plotly')); 
    document.head.appendChild(s);
  });
}

// Warna tema chart
function chartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    bg: 'transparent',
    paper: isDark ? '#171b24' : '#ffffff',
    plot: isDark ? 'rgba(255,255,255,0.015)' : '#fbfcff',
    text: isDark ? '#edf2ff' : '#202538',
    muted: isDark ? '#a8b0c7' : '#586175',
    grid: isDark ? 'rgba(255,255,255,0.085)' : 'rgba(32,37,56,0.1)',
    axis: isDark ? 'rgba(255,255,255,0.22)' : 'rgba(32,37,56,0.22)',
    hoverBg: isDark ? '#202636' : '#ffffff',
    accent: '#16c7a4',
    accent2: '#4f8cff',
    accent3: '#f97373',
    accent4: '#f5b84b',
    histogramBase: [22, 199, 164],
    palette: ['#16c7a4','#4f8cff','#f97373','#f5b84b','#9b7bff','#36cfc9','#ff8f5a','#65d96e']
  };
}

function plotLayout(title, xLabel, yLabel, extra = {}) {
  const c = chartColors();
  const base = {
    title: {
      text: title,
      font: { color: c.text, size: 15, family: 'Plus Jakarta Sans, Segoe UI, sans-serif', weight: 700 },
      x: 0.03,
      xanchor: 'left'
    },
    paper_bgcolor: c.bg,
    plot_bgcolor: c.plot,
    font: { color: c.text, size: 12, family: 'Plus Jakarta Sans, Segoe UI, sans-serif' },
    hovermode: 'closest',
    hoverlabel: {
      bgcolor: c.hoverBg,
      bordercolor: c.axis,
      namelength: -1,
      font: { color: c.text, size: 12, family: 'Plus Jakarta Sans, Segoe UI, sans-serif' }
    },
    xaxis: {
      automargin: true,
      title: { text: xLabel, standoff: 12, font: { color: c.muted, size: 12 } },
      gridcolor: c.grid,
      linecolor: c.axis,
      tickcolor: c.axis,
      zeroline: false,
      showline: true,
      mirror: false,
      tickfont: { color: c.muted, size: 11 }
    },
    yaxis: {
      automargin: true,
      title: { text: yLabel, standoff: 12, font: { color: c.muted, size: 12 } },
      gridcolor: c.grid,
      linecolor: c.axis,
      tickcolor: c.axis,
      zeroline: false,
      rangemode: 'tozero',
      showline: true,
      mirror: false,
      tickfont: { color: c.muted, size: 11 }
    },
    legend: {
      orientation: 'h',
      y: -0.18,
      x: 0,
      font: { color: c.muted, size: 11 },
      bgcolor: 'rgba(0,0,0,0)'
    },
    margin: { t: title ? 58 : 28, r: 28, b: 64, l: 64 },
    showlegend: false,
    autosize: true,
  };
  return {
    ...base,
    ...extra,
    title: { ...base.title, ...(extra.title || {}) },
    xaxis: { ...base.xaxis, ...(extra.xaxis || {}) },
    yaxis: { ...base.yaxis, ...(extra.yaxis || {}) },
    legend: { ...base.legend, ...(extra.legend || {}) },
    margin: { ...base.margin, ...(extra.margin || {}) },
  };
}

function histogramTrace(histogram, colors, frequencyLabel) {
  const counts = histogram?.y || [];
  const maxCount = Math.max(1, ...counts);
  const [r, g, b] = colors.histogramBase || [22, 199, 164];
  const barColors = counts.map(count => {
    const intensity = 0.32 + (count / maxCount) * 0.58;
    return `rgba(${r}, ${g}, ${b}, ${intensity.toFixed(2)})`;
  });
  return {
    type: 'bar',
    x: histogram?.x || [],
    y: counts,
    width: histogram?.bin_width ? histogram.bin_width * 0.86 : undefined,
    marker: {
      color: barColors,
      line: { color: colors.accent, width: 1.1 },
    },
    cliponaxis: false,
    hovertemplate: `<b>%{x}</b><br>${frequencyLabel}: %{y}<extra></extra>`,
  };
}

function histogramLayout(title, xLabel, yLabel, histogram, extra = {}) {
  const c = chartColors();
  const isDiscrete = histogram?.mode === 'discrete';
  return plotLayout(title, xLabel, yLabel, {
    bargap: isDiscrete ? 0.32 : 0.06,
    bargroupgap: isDiscrete ? 0.08 : 0.02,
    xaxis: {
      tickmode: isDiscrete ? 'array' : 'auto',
      tickvals: isDiscrete ? histogram.x : undefined,
      ticktext: isDiscrete ? histogram.x.map(v => String(v)) : undefined,
      gridcolor: isDiscrete ? 'rgba(0,0,0,0)' : c.grid,
    },
    yaxis: { rangemode: 'tozero' },
    ...extra
  });
}

function plotlyConfig(extra = {}) {
  return {
    responsive: true,
    displayModeBar: false,
    scrollZoom: true,
    doubleClick: 'reset',
    ...extra
  };
}

function renderPlotWhenReady(targetId, traces, layout, config = {}) {
  const draw = () => {
    const el = document.getElementById(targetId);
    if (!el || !window.Plotly) return;
    Plotly.react(el, traces, layout, plotlyConfig(config)).then(() => {
      requestAnimationFrame(() => Plotly.Plots.resize(el));
    });
  };
  requestAnimationFrame(() => requestAnimationFrame(draw));
}

function boxSummaryTrace(name, bp, color, orientation = 'vertical') {
  const trace = {
    type: 'box',
    name,
    q1: [bp.q1],
    median: [bp.median],
    q3: [bp.q3],
    lowerfence: [bp.lower_fence ?? bp.min],
    upperfence: [bp.upper_fence ?? bp.max],
    mean: [bp.mean],
    marker: { color, size: 5, opacity: 0.75 },
    fillcolor: `${color}44`,
    line: { color, width: 2 },
    boxmean: true,
    hovertemplate: `<b>${escapeHtml(name)}</b><br>Q1: %{q1}<br>Median: %{median}<br>Q3: %{q3}<extra></extra>`
  };
  const outliers = bp.outliers || [];
  if (orientation === 'horizontal') {
    trace.x = outliers;
    trace.orientation = 'h';
  } else {
    trace.y = outliers;
  }
  return trace;
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// SECTION: VIZ NUMERIK
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
async function loadVizNumerical() {
  const empty = document.getElementById('viz-num-empty');
  const container = document.getElementById('viz-num-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading('Memuat visualisasi numerik...');
  try {
    const res = await fetch('/api/viz/numerical', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast('Gagal memuat visualisasi', 'error'); return; }

    const plots = data.plots;
    const cols = Object.keys(plots);
    if (cols.length === 0) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    // Tab pilih kolom
    container.innerHTML = `
      <div class="viz-col-tabs" style="align-items:center;gap:8px">
        <span class="viz-col-label">${t('viz_select_column')}</span>
        <select class="viz-select" id="viz-num-select">
          ${cols.map(c => `<option value="${c}" ${c === cols[0] ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div id="viz-num-charts"></div>
    `;

    window._numPlots = plots;
    document.getElementById('viz-num-select').addEventListener('change', (e) => {
      showNumViz(e.target.value);
    });
    showNumViz(cols[0]);
  } catch(e) { hideLoading(); showToast('Error: ' + e.message, 'error'); }
}

window.showNumViz = function(col) {
  const p = window._numPlots[col];
  if (!p) return;
  const area = document.getElementById('viz-num-charts');
  const lang = typeof state !== 'undefined' ? state.lang : 'id';
  const freqLabel  = lang === 'id' ? 'Frekuensi' : 'Frequency';
  const densLabel  = lang === 'id' ? 'Densitas'  : 'Density';
  const theoLabel  = lang === 'id' ? 'Kuantil Teoretis' : 'Theoretical Quantiles';
  const sampLabel  = lang === 'id' ? 'Kuantil Sampel'   : 'Sample Quantiles';

  area.innerHTML = `
    <div class="viz-num-grid">
      <div class="card viz-card viz-card-hist"><div id="vn-hist" style="height:440px;"></div></div>
      <div class="card viz-card viz-card-box"><div id="vn-box" style="height:440px;"></div></div>
      <div class="card viz-card viz-card-kde"><div id="vn-kde" style="height:440px;"></div></div>
      <div class="card viz-card viz-card-qq"><div id="vn-qq" style="height:440px;"></div></div>
      <div class="card viz-card viz-card-violin"><div id="vn-violin" style="height:440px;"></div></div>
    </div>
  `;

  ensurePlotly(() => {
    const c = chartColors();

    // Ã¢â€â‚¬Ã¢â€â‚¬ Histogram Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (p.histogram) {
      Plotly.newPlot('vn-hist', [histogramTrace(p.histogram, c, freqLabel)], plotLayout(
        `Histogram - ${col}`, col, freqLabel,
        { bargap: 0.04, bargroupgap: 0.02, plot_bgcolor: c.bg, paper_bgcolor: c.bg }
      ), { responsive: true, displayModeBar: false });
    }

    // Ã¢â€â‚¬Ã¢â€â‚¬ Boxplot Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (p.boxplot) {
      const bp = p.boxplot;
      Plotly.newPlot('vn-box', [{
        type: 'box', name: col,
        q1: [bp.q1], median: [bp.median], q3: [bp.q3],
        lowerfence: [bp.lower_fence], upperfence: [bp.upper_fence],
        mean: [bp.mean], y: bp.outliers,
        marker: { color: c.accent2, size: 5 },
        fillcolor: c.accent2 + '44',
        line: { color: c.accent2 },
        boxmean: true
      }], plotLayout(`Boxplot - ${col}`, '', col, { showlegend: false }),
        { responsive: true, displayModeBar: false });
    }

    // Ã¢â€â‚¬Ã¢â€â‚¬ Density (KDE) Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (p.density) {
      Plotly.newPlot('vn-kde', [{
        type: 'scatter', mode: 'lines',
        x: p.density.x, y: p.density.y,
        line: { color: c.accent, width: 2.5 },
        fill: 'tozeroy',
        fillcolor: c.accent + '2a',
        hovertemplate: `<b>%{x:.4f}</b><br>${densLabel}: %{y:.4f}<extra></extra>`
      }], plotLayout(`Density Plot - ${col}`, col, densLabel),
        { responsive: true, displayModeBar: false });
    }

    // Ã¢â€â‚¬Ã¢â€â‚¬ QQ Plot Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (p.qq) {
      Plotly.newPlot('vn-qq', [
        {
          type: 'scatter', mode: 'markers',
          x: p.qq.theoretical, y: p.qq.sample,
          marker: { color: c.accent, size: 5, opacity: 0.75 },
          name: lang === 'id' ? 'Data' : 'Data'
        },
        {
          type: 'scatter', mode: 'lines',
          x: p.qq.line_x, y: p.qq.line_y,
          line: { color: c.accent3, dash: 'dash', width: 2 },
          name: lang === 'id' ? 'Referensi Normal' : 'Normal Reference'
        }
      ], plotLayout(`QQ Plot - ${col}`, theoLabel, sampLabel,
        { showlegend: true, legend: { orientation: 'h', y: -0.25 } }),
        { responsive: true, displayModeBar: false });
    }

    // Ã¢â€â‚¬Ã¢â€â‚¬ Violin Plot Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
    if (p.violin) {
      Plotly.newPlot('vn-violin', [{
        type: 'violin',
        y: p.violin.values,
        name: col,
        box: { visible: true },
        meanline: { visible: true },
        marker: { color: c.accent2 },
        line: { color: c.accent2 },
        points: 'suspectedoutliers',
        spanmode: 'hard'
      }], plotLayout(`Violin Plot - ${col}`, col, '', { showlegend: false }),
      { responsive: true, displayModeBar: false });
    }
  });
};

function getCategoricalChartProfile(plot) {
  const total = (plot.counts || []).reduce((a, b) => a + b, 0);
  const pctSum = (plot.pcts || []).reduce((a, b) => a + b, 0);
  const uniqueCount = (plot.labels || []).length;
  const dominantPct = Math.max(0, ...(plot.pcts || [0]));
  const isPercentLike = Math.abs(pctSum - 100) < 2 || (plot.pcts || []).every(v => v >= 1 && v <= 100);
  return { total, pctSum, uniqueCount, dominantPct, isPercentLike };
}

function chooseBestCategoricalChart(plot) {
  const profile = getCategoricalChartProfile(plot);
  if (profile.isPercentLike || profile.uniqueCount > 6 || profile.dominantPct > 60) return 'bar';
  if (profile.uniqueCount <= 4) return 'pie';
  return 'bar';
}

function chartAdvice(plot) {
  const profile = getCategoricalChartProfile(plot);
  if (profile.isPercentLike) return 'Data berbentuk persentase/proporsi - chart batang lebih jelas daripada pie chart.';
  if (profile.uniqueCount > 6) return 'Jumlah kategori cukup banyak - chart batang horizontal lebih mudah dibaca.';
  return 'Kategori tidak terlalu banyak - pie chart masih cocok, tetapi batang tetap disertakan untuk pembacaan yang lebih akurat.';
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
function fmtVizNumber(val, digits = 3) {
  if (val === null || val === undefined || Number.isNaN(Number(val))) return '-';
  const n = Number(val);
  return Number.isInteger(n) ? n.toLocaleString() : n.toLocaleString(undefined, { maximumFractionDigits: digits });
}

function renderVizInsight(title, points) {
  const cleanPoints = (points || []).filter(Boolean);
  if (!cleanPoints.length) return '';
  return `
    <div class="viz-auto-insight">
      <div class="viz-auto-insight-title">${escapeHtml(title || 'Insight Otomatis')}</div>
      <ul>
        ${cleanPoints.map(point => `<li>${escapeHtml(point)}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderVizMismatch() {
  return `<div class="empty-state" style="min-height:320px;display:flex;align-items:center;justify-content:center;text-align:center;padding:32px;"><p>${t('chart_distribution_mismatch')}</p></div>`;
}

function hasEnoughVariation(values, minUnique = 2) {
  const clean = (values || []).filter(v => v !== null && v !== undefined && v !== '');
  return clean.length >= 3 && new Set(clean.map(v => String(v))).size >= minUnique;
}

function isNumericalVizCompatible(plot, vizType) {
  if (!plot) return false;
  if (vizType === 'histogram') return !!plot.histogram?.x?.length && !!plot.histogram?.y?.length;
  if (vizType === 'boxplot') return !!plot.boxplot;
  if (vizType === 'density') return !!plot.density?.x?.length && hasEnoughVariation(plot.density.x, 5);
  if (vizType === 'qq') return !!plot.qq?.sample?.length && plot.qq.sample.length >= 8 && hasEnoughVariation(plot.qq.sample, 5);
  if (vizType === 'violin') return !!plot.violin?.values?.length && hasEnoughVariation(plot.violin.values, 5);
  return false;
}

function isCategoricalVizCompatible(plot, vizType) {
  const labels = plot?.labels || [];
  const counts = plot?.counts || [];
  const pcts = plot?.pcts || [];
  if (!labels.length || !counts.length) return false;
  if (vizType === 'bar' || vizType === 'pareto') return labels.length >= 1;
  if (vizType === 'pie') {
    const hasTinySlices = pcts.some(v => Number(v) > 0 && Number(v) < 5);
    return labels.length >= 2 && labels.length <= 6 && !hasTinySlices;
  }
  return false;
}

function isBivariateVizCompatible(plots, type) {
  if (type === 'heatmap') return (plots?.heatmap?.columns || []).length >= 2;
  if (type === 'scatter') return !!plots?.scatter && hasEnoughVariation(plots.scatter.x, 2) && hasEnoughVariation(plots.scatter.y, 2);
  if (type === 'pair') return (plots?.pairplot?.columns || []).length >= 2 && (plots?.pairplot?.pairs || []).length > 0;
  if (type === 'bubble') return !!plots?.bubble && hasEnoughVariation(plots.bubble.x, 2) && hasEnoughVariation(plots.bubble.y, 2) && hasEnoughVariation(plots.bubble.z, 2);
  return false;
}

function isCatNumVizCompatible(plots, vizType) {
  if (!plots?.categories?.length) return false;
  if (vizType === 'boxplot') return (plots.boxplot_by_cat || []).length >= 2;
  if (vizType === 'violin') return (plots.violin_by_cat || []).length >= 2;
  if (vizType === 'bar') return (plots.grouped_bar || []).some(g => (g.means || []).some(v => Number.isFinite(Number(v))));
  if (vizType === 'strip') return (plots.strip || []).filter(s => (s.values || []).length > 0).length >= 2;
  return false;
}

function numericalVizInsights(col, plot, vizType) {
  const bp = plot?.boxplot;
  const points = [];
  if (vizType === 'histogram' && plot?.histogram?.y?.length) {
    const maxCount = Math.max(...plot.histogram.y);
    const idx = plot.histogram.y.indexOf(maxCount);
    points.push(`Nilai paling sering muncul di sekitar ${fmtVizNumber(plot.histogram.x[idx])} dengan frekuensi ${fmtVizNumber(maxCount)}.`);
  }
  if (bp) {
    const outlierCount = bp.outliers?.length || 0;
    points.push(`Rata-rata ${col} adalah ${fmtVizNumber(bp.mean)}, median ${fmtVizNumber(bp.median)}, dan rentang Q1-Q3 berada pada ${fmtVizNumber(bp.q1)} sampai ${fmtVizNumber(bp.q3)}.`);
    points.push(outlierCount > 0 ? `Terdeteksi ${fmtVizNumber(outlierCount)} contoh outlier pada sampel boxplot.` : 'Tidak ada outlier ekstrem yang tampil pada sampel boxplot.');
    if (bp.mean !== undefined && bp.median !== undefined) {
      const direction = bp.mean > bp.median ? 'condong ke nilai besar' : bp.mean < bp.median ? 'condong ke nilai kecil' : 'relatif seimbang';
      points.push(`Perbandingan mean dan median menunjukkan distribusi ${direction}.`);
    }
  }
  if (vizType === 'qq') points.push('Semakin dekat titik dengan garis referensi, semakin dekat distribusi kolom ini dengan pola normal.');
  if (vizType === 'density') {
    points.push('Puncak kurva density menunjukkan area nilai dengan konsentrasi observasi tertinggi.');
    if (plot?.density?.domain === 'p01_p99') {
      points.push(`Density memakai rentang P1-P99 (${fmtVizNumber(plot.density.x_min)} sampai ${fmtVizNumber(plot.density.x_max)}) agar outlier ekstrem tidak membuat kurva terlihat datar.`);
    }
  }
  return points;
}

function categoricalVizInsights(col, plot, vizType) {
  const points = [];
  const total = (plot?.counts || []).reduce((sum, n) => sum + Number(n || 0), 0);
  if (!plot?.labels?.length || !total) return points;
  points.push(`Kategori terbesar pada ${col} adalah "${plot.labels[0]}" dengan ${fmtVizNumber(plot.counts[0])} data (${fmtVizNumber(plot.pcts?.[0] || 0, 2)}%).`);
  points.push(`Visual ini menampilkan ${fmtVizNumber(plot.total_shown || plot.labels.length)} dari ${fmtVizNumber(plot.total_categories || plot.labels.length)} kategori unik.`);
  if (vizType === 'pareto' && plot.cumulative?.length) {
    const idx80 = plot.cumulative.findIndex(v => Number(v) >= 80);
    points.push(idx80 >= 0 ? `${idx80 + 1} kategori teratas sudah mencakup sekitar 80% data.` : 'Kategori teratas belum mencapai 80% dari total data yang ditampilkan.');
  } else if ((plot.pcts?.[0] || 0) > 50) {
    points.push('Distribusi cukup terkonsentrasi karena satu kategori mendominasi lebih dari separuh data.');
  } else {
    points.push('Distribusi kategori terlihat lebih tersebar, tidak hanya bertumpu pada satu label.');
  }
  return points;
}

function bivariateVizInsights(type, plots) {
  const points = [];
  if (type === 'heatmap' && plots?.heatmap) {
    let best = { cols: [], val: 0 };
    plots.heatmap.matrix.forEach((row, i) => row.forEach((val, j) => {
      if (i >= j || val === null || val === undefined) return;
      if (Math.abs(val) > Math.abs(best.val)) best = { cols: [plots.heatmap.columns[i], plots.heatmap.columns[j]], val };
    }));
    if (best.cols.length) points.push(`Korelasi terkuat adalah ${best.cols[0]} dengan ${best.cols[1]} sebesar ${fmtVizNumber(best.val, 4)}.`);
    points.push('Nilai mendekati 1 atau -1 menunjukkan hubungan linear yang lebih kuat antar kolom.');
  }
  if (type === 'scatter' && plots?.scatter) {
    const reg = plots.scatter.regression;
    points.push(`Scatter membandingkan ${plots.scatter.x_col} terhadap ${plots.scatter.y_col}.`);
    if (reg) points.push(`Garis regresi memiliki R2 ${fmtVizNumber(reg.r2, 4)}, sehingga kekuatan hubungan linearnya dapat dibaca dari nilai tersebut.`);
  }
  if (type === 'pair' && plots?.pairplot) {
    points.push(`Pair plot menampilkan kombinasi antar ${plots.pairplot.columns.length} kolom numerik pertama.`);
    points.push('Panel diagonal menunjukkan distribusi tiap kolom, sedangkan panel lain menunjukkan pola hubungan antar pasangan kolom.');
  }
  if (type === 'bubble' && plots?.bubble) {
    points.push(`Bubble chart memakai ${plots.bubble.x_col} sebagai X, ${plots.bubble.y_col} sebagai Y, dan ${plots.bubble.z_col} sebagai ukuran/warna.`);
    points.push('Bubble yang lebih besar menandakan nilai kolom ukuran yang lebih tinggi.');
  }
  return points;
}

function catNumVizInsights(catCol, numCol, plots, vizType) {
  const points = [];
  const box = plots?.boxplot_by_cat || [];
  if (box.length) {
    const highest = box.reduce((best, item) => item.mean > best.mean ? item : best, box[0]);
    const lowest = box.reduce((best, item) => item.mean < best.mean ? item : best, box[0]);
    points.push(`Rata-rata ${numCol} tertinggi ada pada kategori "${highest.category}" (${fmtVizNumber(highest.mean)}).`);
    points.push(`Rata-rata terendah ada pada kategori "${lowest.category}" (${fmtVizNumber(lowest.mean)}).`);
  }
  if (vizType === 'strip') points.push('Strip plot membantu melihat kepadatan titik dan penyebaran nilai mentah di tiap kategori.');
  if (vizType === 'boxplot' || vizType === 'violin') points.push('Perbedaan median dan lebar sebaran antar kategori menunjukkan variasi performa tiap kelompok.');
  if (vizType === 'bar') points.push('Grouped bar menekankan perbandingan rata-rata numerik antar kategori.');
  return points;
}

function timeSeriesVizInsights(plot) {
  const points = [];
  const values = plot?.values || [];
  if (!values.length) return points;
  const first = Number(values[0]);
  const last = Number(values[values.length - 1]);
  const changePct = first ? ((last - first) / Math.abs(first)) * 100 : null;
  points.push(`Data temporal memakai ${plot.date_col} sebagai waktu dan ${plot.num_col} sebagai nilai utama.`);
  points.push(`Tren otomatis terbaca ${plot.trend_info?.label || '-'} dengan R2 ${fmtVizNumber(plot.trend_info?.r2, 4)}.`);
  if (changePct !== null && Number.isFinite(changePct)) points.push(`Perubahan dari titik awal ke akhir sekitar ${fmtVizNumber(changePct, 2)}%.`);
  if (plot.ma7?.length) points.push('Moving average membantu meredam fluktuasi harian agar arah tren lebih mudah dibaca.');
  return points;
}

function comparisonVizInsights(type, checked, plots) {
  const points = [];
  points.push(`Perbandingan ini melibatkan ${checked.length} kolom: ${checked.join(', ')}.`);
  if (type === 'bar') {
    checked.forEach(col => {
      const p = plots[col];
      if (p?.labels?.length) points.push(`${col} paling banyak berada pada kategori "${p.labels[0]}" (${fmtVizNumber(p.counts[0])} data).`);
    });
  } else {
    const means = checked.map(col => ({ col, mean: plots[col]?.boxplot?.mean })).filter(item => item.mean !== undefined);
    if (means.length) {
      const highest = means.reduce((best, item) => item.mean > best.mean ? item : best, means[0]);
      points.push(`Kolom dengan rata-rata tertinggi adalah ${highest.col} (${fmtVizNumber(highest.mean)}).`);
    }
  }
  return points;
}

// SECTION: VIZ KATEGORIKAL
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
async function loadVizCategorical() {
  const empty = document.getElementById('viz-cat-empty');
  const container = document.getElementById('viz-cat-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading('Memuat visualisasi kategorikal...');
  try {
    const res = await fetch('/api/viz/categorical', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast('Gagal memuat visualisasi', 'error'); return; }

    const plots = data.plots;
    const cols = Object.keys(plots);
    if (cols.length === 0) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    container.innerHTML = `
      <div class="viz-col-tabs">
        <span class="viz-col-label">${t('viz_select_column')}</span>
        <select class="viz-select" id="viz-cat-select">
          ${cols.map(c => `<option value="${c}" ${c === cols[0] ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <div id="viz-cat-charts"></div>
    `;

    window._catPlots = plots;
    document.getElementById('viz-cat-select').addEventListener('change', (e) => {
      showCatViz(e.target.value);
    });
    showCatViz(cols[0]);
  } catch(e) { hideLoading(); showToast('Error: ' + e.message, 'error'); }
}

window.showCatViz = function(col) {
  const p = window._catPlots[col];
  if (!p) return;
  const bestMode = chooseBestCategoricalChart(p);
  const area = document.getElementById('viz-cat-charts');

  area.innerHTML = `
    <div class="viz-stack">
      <div class="card viz-card">
        <div id="vc-main"></div>
      </div>
      <div class="card viz-card">
        <div id="vc-summary"></div>
      </div>
    </div>
  `;

  ensurePlotly(() => {
    const c = chartColors();

    if (bestMode === 'pie' && (p.labels.length <= 4 || !p.pcts.some(v => v > 15))) {
      Plotly.newPlot('vc-main', [{
        type:'pie', labels: p.labels, values: p.counts,
        marker:{colors: c.palette},
        hole: 0.35,
        textinfo: 'label+percent',
        textfont: { color: c.text }
      }], {
        title:{text:`Pie / Donut - ${col}`, font:{color:c.text,size:13},x:0.05},
        paper_bgcolor:'transparent', plot_bgcolor:'transparent',
        font:{color:c.text,size:11},
        margin:{t:45,r:24,b:20,l:20}, showlegend:true,
        legend:{font:{color:c.text}}
      }, {responsive:true, displayModeBar:false});
    } else {
      Plotly.newPlot('vc-main', [{
        type:'bar', orientation:'h',
        x: p.counts, y: p.labels,
        text: p.pcts.map(v => `${v}%`),
        textposition: 'outside',
        marker:{color: c.palette.slice(0, p.labels.length), opacity:0.88}
      }], {
        title:{text:`Bar Chart - ${col}`, font:{color:c.text,size:13},x:0.05},
        paper_bgcolor:'transparent', plot_bgcolor:'transparent',
        font:{color:c.text,size:11},
        xaxis:{title:'Jumlah / Frekuensi', gridcolor:c.grid, tickfont:{color:c.text}},
        yaxis:{automargin:true, tickfont:{color:c.text}},
        margin:{t:45,r:30,b:30,l:140}, showlegend:false
      }, {responsive:true, displayModeBar:false});
    }

    Plotly.newPlot('vc-summary', [
      {type:'bar', name:'Jumlah', x: p.labels, y: p.counts, marker:{color:c.accent}},
      {type:'scatter', name:'Kumulatif %', x: p.labels, y: p.cumulative,
       yaxis:'y2', mode:'lines+markers', line:{color:c.accent3, width:2}, marker:{size:5, color:c.accent3}}
    ], {
      title:{text:`Ringkasan - ${col}`, font:{color:c.text,size:13},x:0.05},
      paper_bgcolor:'transparent', plot_bgcolor:'transparent',
      font:{color:c.text,size:11},
      xaxis:{gridcolor:c.grid, tickfont:{color:c.text}},
      yaxis:{title:'Jumlah', gridcolor:c.grid, tickfont:{color:c.text}},
      yaxis2:{title:'Kumulatif %', overlaying:'y', side:'right', range:[0,110], tickfont:{color:c.text}, showgrid:false},
      margin:{t:45,r:60,b:60,l:55}, showlegend:true, legend:{font:{color:c.text}}
    }, {responsive:true, displayModeBar:false});
  });
};

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// SECTION: CORRELATION & BIVARIATE
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
let _bivNumCols = [];
let _bivInitialPlots = null;

async function loadVizBivariate() {
  const empty = document.getElementById('viz-biv-empty');
  const container = document.getElementById('viz-biv-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('biv_loading'));
  try {
    const res = await fetch('/api/viz/bivariate', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast(t('biv_err'), 'error'); return; }

    const plots = data.plots;
    if (!Object.keys(plots).length) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    // Daftar kolom numerik diambil dari heatmap (selalu mencakup semua kolom numerik)
    _bivNumCols = (plots.heatmap && plots.heatmap.columns) ? plots.heatmap.columns : [];
    _bivInitialPlots = plots;

    populateBivariateSelects(plots);
    setupBivariateControls();

    // Render awal: tampilkan heatmap korelasi (default)
    renderBivariateView('heatmap', plots);
  } catch(e) { hideLoading(); showToast('Error: ' + e.message, 'error'); }
}

function populateBivariateSelects(plots) {
  const xSel = document.getElementById('biv-x-select');
  const ySel = document.getElementById('biv-y-select');
  const zSel = document.getElementById('biv-z-select');

  const opts = (selectedDefault) => _bivNumCols.map((c, i) =>
    `<option value="${escapeAttr(c)}" ${c === selectedDefault ? 'selected' : ''}>${escapeHtml(c)}</option>`
  ).join('');

  const defX = (plots.scatter && plots.scatter.x_col) || _bivNumCols[0] || '';
  const defY = (plots.scatter && plots.scatter.y_col) || _bivNumCols[1] || _bivNumCols[0] || '';
  const defZ = (plots.bubble && plots.bubble.z_col) || _bivNumCols[2] || _bivNumCols[0] || '';

  xSel.innerHTML = opts(defX);
  ySel.innerHTML = opts(defY);
  zSel.innerHTML = opts(defZ);
}

function setupBivariateControls() {
  const typeSel = document.getElementById('biv-type-select');
  const runBtn = document.getElementById('btn-run-bivariate');

  // Tampilkan/sembunyikan select kolom sesuai jenis visual yang dipilih
  const updateFieldVisibility = () => {
    const type = typeSel.value;
    const xLabel = document.getElementById('biv-x-label');
    const xSel = document.getElementById('biv-x-select');
    const yLabel = document.getElementById('biv-y-label');
    const ySel = document.getElementById('biv-y-select');
    const zLabel = document.getElementById('biv-z-label');
    const zSel = document.getElementById('biv-z-select');

    // Heatmap & Pair Plot menggunakan seluruh kolom numerik, jadi X/Y/Z disembunyikan
    const showXY = (type === 'scatter' || type === 'bubble');
    const showZ = (type === 'bubble');

    [xLabel, xSel, yLabel, ySel].forEach(el => el.style.display = showXY ? '' : 'none');
    [zLabel, zSel].forEach(el => el.style.display = showZ ? '' : 'none');

    if (type === 'scatter') {
      xLabel.setAttribute('data-i18n', 'biv_x_label');
      yLabel.setAttribute('data-i18n', 'biv_y_label');
    } else if (type === 'bubble') {
      xLabel.setAttribute('data-i18n', 'biv_x_label');
      yLabel.setAttribute('data-i18n', 'biv_y_label');
      zLabel.setAttribute('data-i18n', 'biv_z_label');
    }
  };

  updateFieldVisibility();
  typeSel.addEventListener('change', updateFieldVisibility);

  // Generate button: fetch ulang dengan kolom yang dipilih user
  runBtn.onclick = async () => {
    const type = typeSel.value;
    const xCol = document.getElementById('biv-x-select').value;
    const yCol = document.getElementById('biv-y-select').value;
    const zCol = document.getElementById('biv-z-select').value;

    if (type === 'heatmap' || type === 'pair') {
      renderBivariateView(type, _bivInitialPlots);
      return;
    }

    if (type === 'scatter' && (!xCol || !yCol || xCol === yCol)) {
      showToast(t('biv_err_xy_diff'), 'error');
      return;
    }
    if (type === 'bubble' && (!xCol || !yCol || !zCol || xCol === yCol || xCol === zCol || yCol === zCol)) {
      showToast(t('biv_err_xyz_diff'), 'error');
      return;
    }

    showLoading(t('biv_loading_viz'));
    try {
      const res = await fetch('/api/viz/bivariate', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({filename: state.currentFile, x_col:xCol, y_col:yCol, z_col:zCol})
      });
      const data = await res.json();
      hideLoading();
      if (!data.success) { showToast(t('viz_err_load'), 'error'); return; }
      renderBivariateView(type, data.plots);
    } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
  };
}

function renderBivariateView(type, plots) {
  const chartArea = document.getElementById('viz-biv-chart');
  if (!isBivariateVizCompatible(plots, type)) {
    chartArea.innerHTML = renderVizMismatch();
    return;
  }
  ensurePlotly(() => {
    const c = chartColors();

    if (type === 'heatmap') {
      if (!plots.heatmap) { chartArea.innerHTML = `<div class="empty-state"><p>${t('biv_type_heatmap')} ${t('chart_no_data')}</p></div>`; return; }
      chartArea.innerHTML = '<div id="vb-heatmap" style="min-height:540px"></div><div id="vb-insight"></div>';
      const hm = plots.heatmap;
      renderPlotWhenReady('vb-heatmap', [{
        type:'heatmap', z: hm.matrix, x: hm.columns, y: hm.columns,
        colorscale:[['0','#f97373'],['0.5',c.plot],['1','#16c7a4']],
        zmid:0, zmin:-1, zmax:1,
        text: hm.matrix.map(row => row.map(v => v !== null ? v.toFixed(2) : '')),
        texttemplate:'%{text}', textfont:{size:10, color:c.text},
        hovertemplate: '%{y} ↔ %{x}<br>Correlation: %{z:.3f}<extra></extra>',
        colorbar: { thickness: 12, len: 0.78, tickfont: { color: c.muted } }
      }], plotLayout(t('biv_type_heatmap'), '', '', {
        margin:{t:58,r:50,b:110,l:112},
        xaxis:{tickangle:-35, side:'bottom'},
        yaxis:{autorange:'reversed'},
      }), {});

    } else if (type === 'scatter') {
      if (!plots.scatter) { chartArea.innerHTML = `<div class="empty-state"><p>${t('biv_type_scatter')} ${t('chart_no_data')}</p></div>`; return; }
      chartArea.innerHTML = '<div id="vb-scatter" style="min-height:540px"></div><div id="vb-insight"></div>';
      const sc = plots.scatter;
      const traces = [{
        type:'scatter', mode:'markers', name:'Data',
        x: sc.x, y: sc.y,
        marker:{color: c.accent2, size:8, opacity:0.72, line:{color:c.paper, width:0.8}},
        hovertemplate: `<b>${sc.x_col}</b>: %{x}<br><b>${sc.y_col}</b>: %{y}<extra></extra>`
      }];
      if (sc.regression) {
        traces.push({
          type:'scatter', mode:'lines', name:`R2=${sc.regression.r2}`,
          x: sc.regression.x, y: sc.regression.y,
          line:{color: c.accent3, width:3, dash:'dash'}
        });
      }
      renderPlotWhenReady('vb-scatter', traces,
        plotLayout(`${t('biv_type_scatter')}: ${sc.x_col} vs ${sc.y_col}`, sc.x_col, sc.y_col,
          {showlegend:true}),
        {});

    } else if (type === 'pair') {
      if (!plots.pairplot || !plots.pairplot.pairs) { chartArea.innerHTML = `<div class="empty-state"><p>${t('biv_type_pair')} ${t('chart_no_data')}</p></div>`; return; }
      chartArea.innerHTML = '<div id="vb-pairplot" style="min-height:420px"></div><div id="vb-insight"></div>';
      const pp = plots.pairplot;
      const nCols = pp.columns.length;
      const traces = pp.pairs.map(pair => ({
        type: pair.x_col === pair.y_col ? 'histogram' : 'scatter',
        mode: 'markers',
        x: pair.x,
        y: pair.x_col === pair.y_col ? undefined : pair.y,
        xaxis: `x${pair.col + 1}`,
        yaxis: `y${pair.row + 1}`,
        marker:{color: c.accent, size:3, opacity:0.5},
        showlegend: false
      }));

      const layout = {
        title:{text:t('biv_type_pair'), font:{color:c.text,size:13},x:0.05},
        paper_bgcolor:'transparent', plot_bgcolor:'transparent',
        font:{color:c.text,size:10}, margin:{t:45,r:20,b:60,l:60},
        height: 100 + nCols * 130
      };
      pp.columns.forEach((col, i) => {
        const axIdx = i + 1;
        const xKey = i === 0 ? 'xaxis' : `xaxis${axIdx}`;
        const yKey = i === 0 ? 'yaxis' : `yaxis${axIdx}`;
        layout[xKey] = {
          domain: [i/nCols + 0.02, (i+1)/nCols - 0.02],
          gridcolor:c.grid, title:{text:col,font:{size:9,color:c.text}}, tickfont:{size:8,color:c.text}
        };
        layout[yKey] = {
          domain: [i/nCols + 0.02, (i+1)/nCols - 0.02],
          gridcolor:c.grid, tickfont:{size:8,color:c.text}
        };
      });

      renderPlotWhenReady('vb-pairplot', traces, layout, {});

    } else if (type === 'bubble') {
      if (!plots.bubble) { chartArea.innerHTML = `<div class="empty-state"><p>${t('biv_type_bubble')} ${t('chart_no_data')}</p></div>`; return; }
      chartArea.innerHTML = '<div id="vb-bubble" style="min-height:420px"></div><div id="vb-insight"></div>';
      const bub = plots.bubble;
      renderPlotWhenReady('vb-bubble', [{
        type:'scatter', mode:'markers',
        x: bub.x, y: bub.y,
        marker:{
          size: bub.sizes, sizemode:'area',
          color: bub.z, colorscale:'Viridis', showscale:true,
          colorbar:{title:{text:bub.z_col, font:{color:c.text}}, tickfont:{color:c.text}},
          opacity:0.75
        }
      }], plotLayout(`${t('biv_type_bubble')}: ${bub.x_col} vs ${bub.y_col} (${bub.z_col})`,
         bub.x_col, bub.y_col), {});
    }

    const insight = document.getElementById('vb-insight');
    if (insight) insight.innerHTML = renderVizInsight(t('chart_insight_auto'), bivariateVizInsights(type, plots));
  });
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// SECTION: KATEGORIK vs NUMERIK
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
async function loadVizCatNum() {
  const empty = document.getElementById('viz-cn-empty');
  const container = document.getElementById('viz-cn-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('catnum_loading'));
  try {
    const [numRes, catRes] = await Promise.all([
      fetch('/api/viz/numerical', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile}) }),
      fetch('/api/viz/categorical', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile}) })
    ]);
    const [numData, catData] = await Promise.all([numRes.json(), catRes.json()]);
    hideLoading();

    const numCols = numData.success ? Object.keys(numData.plots) : [];
    const catCols = catData.success ? Object.keys(catData.plots) : [];

    if (!numCols.length || !catCols.length) {
      empty.style.display = 'block'; container.style.display = 'none'; return;
    }

    // Populate dropdowns in HTML
    const catSel = document.getElementById('cn-cat-select');
    const numSel = document.getElementById('cn-num-select');
    const typeSel = document.getElementById('cn-type-select');

    catSel.innerHTML = catCols.map(c => `<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('');
    numSel.innerHTML = numCols.map(c => `<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('');

    empty.style.display = 'none';
    container.style.display = 'block';

    // Add chart area if not present
    if (!document.getElementById('viz-cn-chart')) {
      const chartDiv = document.createElement('div');
      chartDiv.id = 'viz-cn-chart';
      chartDiv.className = 'card viz-card';
      chartDiv.style.minHeight = '420px';
      container.appendChild(chartDiv);
    }

    // Generate chart function
    window._runCatNum = async function() {
      const catCol = catSel.value;
      const numCol = numSel.value;
      const vizType = typeSel.value;
      if (!catCol || !numCol) { showToast(t('cn_err_select'), 'warning'); return; }

      showLoading(t('catnum_loading_viz'));
      try {
        const res = await fetch('/api/viz/catnum', {
          method:'POST', headers:{'Content-Type':'application/json'},
          body: JSON.stringify({filename: state.currentFile, cat_col: catCol, num_col: numCol})
        });
        const data = await res.json();
        hideLoading();
        if (!data.success) { showToast(t('viz_err_load'), 'error'); return; }

        const plots = data.plots;
        if (!plots || !plots.categories) { showToast(t('chart_no_data'), 'warning'); return; }

        const chartDiv = document.getElementById('viz-cn-chart');
        if (!isCatNumVizCompatible(plots, vizType)) {
          chartDiv.innerHTML = renderVizMismatch();
          return;
        }
        chartDiv.innerHTML = `<div id="vcn-single" style="height:540px;"></div><div id="vcn-insight"></div>`;

        ensurePlotly(() => {
          const c = chartColors();

          if (vizType === 'boxplot' && plots.boxplot_by_cat) {
            const traces = plots.boxplot_by_cat.map((bp, i) =>
              boxSummaryTrace(bp.category, bp, c.palette[i % c.palette.length])
            );
            renderPlotWhenReady('vcn-single', traces,
              plotLayout(`${t('cn_type_boxplot')}: ${numCol} per ${catCol}`, catCol, numCol, {showlegend:false}),
              {});

          } else if (vizType === 'violin' && plots.violin_by_cat) {
            const traces = plots.violin_by_cat.map((vl, i) => ({
              type:'violin', name: vl.category, y: vl.values,
              box:{visible:true}, meanline:{visible:true},
              marker:{color: c.palette[i % c.palette.length]}, opacity:0.7
            }));
            renderPlotWhenReady('vcn-single', traces,
              plotLayout(`${t('cn_type_violin')}: ${numCol} per ${catCol}`, catCol, numCol, {showlegend:false}),
              {});

          } else if (vizType === 'bar' && plots.grouped_bar) {
            const traces = plots.grouped_bar.map((gb, i) => ({
              type:'bar', name: gb.num_col,
              x: plots.categories, y: gb.means,
              marker:{color: c.palette[i % c.palette.length], opacity:0.85}
            }));
            renderPlotWhenReady('vcn-single', traces,
              plotLayout(`${t('cn_type_bar')} - ${numCol} per ${catCol}`, catCol, t('chart_count'),
                {showlegend:true, legend:{font:{color:c.text}}, barmode:'group'}),
              {});

          } else if (vizType === 'strip' && plots.strip) {
            const traces = plots.strip.map((st, i) => ({
              type:'scatter', mode:'markers', name: st.category,
              x: st.values.map(() => st.category), y: st.values,
              marker:{color: c.palette[i % c.palette.length], size:5, opacity:0.55}
            }));
            renderPlotWhenReady('vcn-single', traces,
              plotLayout(`${t('cn_type_strip')}: ${numCol} per ${catCol}`, catCol, numCol, {showlegend:false}),
              {});
          } else {
            document.getElementById('vcn-single').innerHTML = `<div style="padding:40px;text-align:center;opacity:0.5">${t('chart_data_unavailable')}</div>`;
          }

          const insight = document.getElementById('vcn-insight');
          if (insight) insight.innerHTML = renderVizInsight(t('chart_insight_auto'), catNumVizInsights(catCol, numCol, plots, vizType));
        });
      } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
    };

    // Attach event listener to Generate button
    const btn = document.getElementById('btn-run-catnum');
    btn.onclick = window._runCatNum;

    // Auto-render on first load
    window._runCatNum();

  } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// SECTION: INSIGHTS
// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
async function loadInsights() {
  const empty = document.getElementById('insights-empty');
  const container = document.getElementById('insights-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('loading_analyze'));
  try {
    const res = await fetch('/api/insights', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast(t('toast_fetch_insights'), 'error'); return; }

    const insights = data.insights;
    if (!insights || !insights.length) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    const levelClass = { info:'insight-info', warning:'insight-warning', success:'insight-success', danger:'insight-danger' };
    const foundLabel = state.lang === 'id' ? 'Insight Ditemukan' : 'Insights Found';
    const autoLabel = state.lang === 'id' ? 'Dihasilkan otomatis berdasarkan analisis statistik data Anda' : 'Automatically generated from your data analysis';

    container.innerHTML = `
      <div class="insights-header">
        <div class="insights-badge">${insights.length} ${foundLabel}</div>
        <p style="margin:0;opacity:0.7;font-size:0.85rem">${autoLabel}</p>
      </div>
      <div class="insights-grid">
        ${insights.map(ins => `
          <div class="insight-card ${levelClass[ins.level] || 'insight-info'}">
            <div class="insight-icon">${ins.icon}</div>
            <div class="insight-body">
              <div class="insight-title">${ins.title}</div>
              <div class="insight-desc">${ins.description}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } catch(e) { hideLoading(); showToast(t('toast_fetch_insights') + ': ' + e.message, 'error'); }
}

// --- IMPLEMENTASI FUNGSI TEMPORAL YANG HILANG ---
async function loadVizTimeSeries() {
  const empty = document.getElementById('viz-ts-empty');
  const container = document.getElementById('viz-ts-container');
  if (!state.currentFile) { 
    empty.style.display='block'; 
    container.style.display='none'; 
    empty.querySelector('p').innerHTML = t('stats_empty');
    return; 
  }

  showLoading(state.lang === 'id' ? 'Menganalisis tren waktu...' : 'Analyzing time trends...');
  try {
    const res = await fetch('/api/viz/timeseries', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    
    if (!data.success || !data.plots || !data.plots.dates || data.plots.dates.length === 0) {
      empty.style.display = 'block';
      container.style.display = 'none';
      empty.querySelector('p').innerHTML = t('viz_ts_empty');
      return;
    }

    empty.style.display = 'none';
    container.style.display = 'block';
    container.innerHTML = `
      <div class="card viz-card"><div id="vts-main" style="height:540px;"></div><div id="vts-insight"></div></div>
    `;

    const p = data.plots;
    const summaryNode = { set innerHTML(value) {} };
    const summary = p.pattern_summary || {};

    // Trend icon & color helper
    const trendVal = (summary.trend || '').toLowerCase();
    const trendIcon = trendVal.includes('up') || trendVal.includes('naik') ? '📈' :
                      trendVal.includes('down') || trendVal.includes('turun') ? '📉' : '➡️';
    const trendColor = trendVal.includes('up') || trendVal.includes('naik') ? '#00d4aa' :
                       trendVal.includes('down') || trendVal.includes('turun') ? '#ff6b6b' : '#7c6dfa';

    const r2Val = summary.trend_r2 != null ? Number(summary.trend_r2).toFixed(3) : '-';
    const r2Strength = summary.trend_r2 != null ?
      (summary.trend_r2 > 0.7 ? (state.lang === 'id' ? 'Kuat' : 'Strong') :
       summary.trend_r2 > 0.3 ? (state.lang === 'id' ? 'Sedang' : 'Moderate') :
       (state.lang === 'id' ? 'Lemah' : 'Weak')) : '-';

    const seasonVal = Array.isArray(summary.seasonality) ? summary.seasonality.join(', ') : (summary.seasonality || '-');
    const fluctVal = summary.fluctuation_pct ? summary.fluctuation_pct + '%' : '-';

    const isId = state.lang === 'id';

    summaryNode.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;flex-wrap:wrap;gap:8px;">
        <div>
          <h3 style="margin:0;font-size:1.05rem">${isId ? '📊 Ringkasan Time Series' : '📊 Time Series Summary'}</h3>
          <p style="margin:4px 0 0;font-size:0.8rem;opacity:0.55">${isId ? 'Deteksi pola otomatis dari data temporal' : 'Auto-detected patterns from temporal data'}</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="background:rgba(124,109,250,0.12);color:#7c6dfa;border:1px solid rgba(124,109,250,0.25);border-radius:20px;padding:4px 12px;font-size:0.75rem;font-weight:600;">
            📅 ${isId ? 'Tanggal' : 'Date'}: <strong>${p.date_col || '-'}</strong>
          </span>
          <span style="background:rgba(0,212,170,0.12);color:#00d4aa;border:1px solid rgba(0,212,170,0.25);border-radius:20px;padding:4px 12px;font-size:0.75rem;font-weight:600;">
            📌 ${isId ? 'Nilai' : 'Value'}: <strong>${p.num_col || '-'}</strong>
          </span>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">

        <!-- Trend Card -->
        <div style="background:var(--surface-2,rgba(255,255,255,0.04));border:1px solid var(--border,rgba(255,255,255,0.1));border-left:3px solid ${trendColor};border-radius:10px;padding:14px;">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.55;margin-bottom:6px">${isId ? 'Arah Tren' : 'Trend Direction'}</div>
          <div style="font-size:1.4rem;line-height:1">${trendIcon}</div>
          <div style="font-weight:700;font-size:0.95rem;margin-top:4px;color:${trendColor}">${summary.trend || '-'}</div>
        </div>

        <!-- RÃ‚2 Card -->
        <div style="background:var(--surface-2,rgba(255,255,255,0.04));border:1px solid var(--border,rgba(255,255,255,0.1));border-left:3px solid #7c6dfa;border-radius:10px;padding:14px;">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.55;margin-bottom:6px">${isId ? 'Kekuatan Tren (RÃ‚2)' : 'Trend Strength (RÃ‚2)'}</div>
          <div style="font-size:1.5rem;font-weight:700;color:#7c6dfa;line-height:1">${r2Val}</div>
          <div style="font-size:0.75rem;margin-top:4px;opacity:0.65">${r2Strength}</div>
        </div>

        <!-- Fluctuation Card -->
        <div style="background:var(--surface-2,rgba(255,255,255,0.04));border:1px solid var(--border,rgba(255,255,255,0.1));border-left:3px solid #ff9933;border-radius:10px;padding:14px;">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.55;margin-bottom:6px">${isId ? 'Fluktuasi' : 'Fluctuation'}</div>
          <div style="font-size:1.5rem;font-weight:700;color:#ff9933;line-height:1">${fluctVal}</div>
          <div style="font-size:0.75rem;margin-top:4px;opacity:0.65">${isId ? 'Variasi dari rata-rata' : 'Variation from mean'}</div>
        </div>

        <!-- Seasonality Card -->
        <div style="background:var(--surface-2,rgba(255,255,255,0.04));border:1px solid var(--border,rgba(255,255,255,0.1));border-left:3px solid #5b8fff;border-radius:10px;padding:14px;">
          <div style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.05em;opacity:0.55;margin-bottom:6px">${isId ? 'Seasonality' : 'Seasonality'}</div>
          <div style="font-size:1.05rem;font-weight:700;color:#5b8fff;line-height:1.2;margin-top:2px">${seasonVal}</div>
          <div style="font-size:0.75rem;margin-top:4px;opacity:0.65">${isId ? 'Pola berulang (lag 7/30)' : 'Recurring pattern (lag 7/30)'}</div>
        </div>

      </div>
    `;

    ensurePlotly(() => {
      const c = chartColors();
      const origLabel = t('chart_original_data');
      const maLabel   = state.lang === 'id' ? 'Moving Avg (7H)' : 'Moving Avg (7D)';
      const trendLabel = state.lang === 'id' ? `Tren (${p.trend_info.label})` : `Trend (${p.trend_info.label})`;
      const traces = [
        {
          x: p.dates, y: p.values, name: origLabel,
          type: 'scatter', mode: 'lines', line: {color: c.accent, width: 1.5}
        },
        {
          x: p.dates, y: p.ma7, name: maLabel,
          type: 'scatter', mode: 'lines', line: {color: c.accent2, width: 2}
        },
        {
          x: p.dates, y: p.trend, name: trendLabel,
          type: 'scatter', mode: 'lines', line: {color: c.accent3, dash: 'dot', width: 2}
        }
      ];

      const chartTitle = state.lang === 'id' 
        ? `Analisis Tren: ${p.num_col} terhadap ${p.date_col}`
        : `Trend Analysis: ${p.num_col} over ${p.date_col}`;

      renderPlotWhenReady('vts-main', traces, 
        plotLayout(chartTitle, p.date_col, p.num_col, 
        { showlegend: true, legend: { orientation: 'h', y: -0.2 } }),
        {}
      );
      const insight = document.getElementById('vts-insight');
      if (insight) insight.innerHTML = renderVizInsight('Insight Otomatis', timeSeriesVizInsights(p));
    });
  } catch(e) { 
    hideLoading(); 
    showToast('Error: ' + e.message, 'error'); 
  }
}

// Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬Ã¢â€â‚¬
// switchSection sudah menangani semua section secara langsung di atas.
// =====================================================
// UPDATE switchSection TO HANDLE NEW SECTIONS
// =====================================================
const _origSwitchSection = window.switchSection;
window.switchSection = function(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const section = document.getElementById(`section-${sectionId}`);
  const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (section) section.classList.add('active');
  if (navItem) navItem.classList.add('active');

  updatePageTitle(sectionId);

  if (sectionId === 'stats-numerical') {
    if (state.currentFile) loadNumericalStats();
  } else if (sectionId === 'stats-categorical') {
    if (state.currentFile) loadCategoricalStats();
  } else if (sectionId === 'viz-timeseries') {
    if (state.currentFile) loadVizTimeSeries();
  } else if (sectionId === 'preview') {
    if (state.currentFile) loadPreview(1);
    else document.getElementById('table-empty').style.display = 'block';
  } else if (sectionId === 'dashboard') {
    if (state.currentFile) loadDashboardOverview();
  } else if (sectionId === 'viz-numerical') {
    if (state.currentFile) loadVizNumerical();
  } else if (sectionId === 'viz-categorical') {
    if (state.currentFile) loadVizCategorical();
  } else if (sectionId === 'viz-bivariate') {
    if (state.currentFile) loadVizBivariate();
  } else if (sectionId === 'viz-catnum') {
    if (state.currentFile) loadVizCatNum();
  } else if (sectionId === 'profile') {
    loadProfile();
  } else if (sectionId === 'insights') {
    if (state.currentFile) loadInsights();
  } else if (sectionId === 'viz-comparison') {
    if (state.currentFile) loadVizComparison();
  } else if (sectionId === 'data-cleaning') {
    if (state.currentFile) loadDataCleaning();
  }
};

// Override updatePageTitle to include new sections
const _origUpdatePageTitle = updatePageTitle;
function updatePageTitle(sectionId) {
  const extras = {
    'viz-comparison': 'page_viz_comp',
    'data-cleaning': 'page_cleaning',
  };
  if (sectionId && extras[sectionId]) {
    document.getElementById('page-title').textContent = t(extras[sectionId]);
    return;
  }
  const map = {
    'welcome': 'page_welcome', 'dashboard': 'page_dashboard', 'upload': 'page_upload',
    'preview': 'page_preview', 'stats-numerical': 'page_numerical',
    'stats-categorical': 'page_categorical', 'team': 'page_team',
    'profile': 'page_profile', 'viz-numerical': 'page_viz_num', 'viz-categorical': 'page_viz_cat',
    'viz-bivariate': 'page_viz_biv', 'viz-catnum': 'page_viz_cn',
    'viz-timeseries': 'page_viz_ts', 'insights': 'page_insights',
  };
  const active = sectionId || document.querySelector('.nav-item.active')?.getAttribute('data-section') || 'welcome';
  const key = map[active] || 'page_dashboard';
  document.getElementById('page-title').textContent = t(key);
}

// =====================================================
// ENHANCED NUMERICAL VIZ - with visual type dropdown
// =====================================================
async function loadVizNumerical() {
  const empty = document.getElementById('viz-num-empty');
  const container = document.getElementById('viz-num-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('viz_loading'));
  try {
    const res = await fetch('/api/viz/numerical', {
      method: 'POST', headers: {'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast(t('viz_err_load'), 'error'); return; }

    const plots = data.plots;
    const cols = Object.keys(plots);
    if (cols.length === 0) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    container.innerHTML = `
      <div class="viz-col-tabs" style="align-items:center;gap:12px;flex-wrap:wrap;">
        <span class="viz-col-label">${t('viz_select_column')}</span>
        <select class="viz-select" id="viz-num-select">
          ${cols.map(c => `<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('')}
        </select>
        <span class="viz-col-label">${t('viz_select_type')}</span>
        <select class="viz-select" id="viz-num-type">
          <option value="histogram">${t('viz_type_histogram')}</option>
          <option value="boxplot">${t('viz_type_boxplot')}</option>
          <option value="density">${t('viz_type_density')}</option>
          <option value="qq">${t('viz_type_qq')}</option>
          <option value="violin">${t('viz_type_violin')}</option>
        </select>
      </div>
      <div id="viz-num-charts"></div>
    `;

    window._numPlots = plots;
    const colSel = document.getElementById('viz-num-select');
    const typeSel = document.getElementById('viz-num-type');
    const refresh = () => showNumVizSingle(colSel.value, typeSel.value);
    colSel.addEventListener('change', refresh);
    typeSel.addEventListener('change', refresh);
    showNumVizSingle(cols[0], 'histogram');
  } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
}

window.showNumVizSingle = function(col, vizType) {
  const p = window._numPlots[col];
  if (!p) return;
  const area = document.getElementById('viz-num-charts');
  if (!isNumericalVizCompatible(p, vizType)) {
    area.innerHTML = `<div class="card viz-card">${renderVizMismatch()}</div>`;
    return;
  }
  area.innerHTML = `
    <div class="card viz-card"><div id="vn-single" style="height:540px;"></div></div>
    <div id="vn-insight"></div>
  `;

  ensurePlotly(() => {
    const c = chartColors();
    const freqLabel = t('chart_frequency');
    const densLabel = t('chart_density');

    if (vizType === 'histogram' && p.histogram) {
      renderPlotWhenReady('vn-single', [histogramTrace(p.histogram, c, freqLabel)],
        plotLayout(`${t('viz_type_histogram')} - ${col}`, col, freqLabel, {
          bargap: 0.04,
          xaxis: { automargin: true, title: col, gridcolor: c.grid, zerolinecolor: c.grid, tickfont: { color: c.text } },
          yaxis: { automargin: true, title: freqLabel, gridcolor: c.grid, zerolinecolor: c.grid, tickfont: { color: c.text }, rangemode: 'tozero' }
        }),
        {});

    } else if (vizType === 'boxplot' && p.boxplot) {
      const bp = p.boxplot;
      renderPlotWhenReady('vn-single', [boxSummaryTrace(col, bp, c.accent2)],
        plotLayout(`${t('viz_type_boxplot')} - ${col}`, '', col, { showlegend: false }),
        {});

    } else if (vizType === 'density' && p.density) {
      const densityTitle = p.density.domain === 'p01_p99'
        ? `${t('viz_type_density')} - ${col} (P1-P99)`
        : `${t('viz_type_density')} - ${col}`;
      renderPlotWhenReady('vn-single', [{
        type: 'scatter', mode: 'lines',
        x: p.density.x, y: p.density.y,
        line: { color: c.accent, width: 2.5 },
        fill: 'tozeroy', fillcolor: c.accent + '2a',
        hovertemplate: `<b>%{x:.4f}</b><br>${densLabel}: %{y:.8f}<extra></extra>`
      }], plotLayout(densityTitle, col, densLabel),
        {});

    } else if (vizType === 'qq' && p.qq) {
      renderPlotWhenReady('vn-single', [
        { type: 'scatter', mode: 'markers', x: p.qq.theoretical, y: p.qq.sample,
          marker: { color: c.accent, size: 5, opacity: 0.75 }, name: 'Data' },
        { type: 'scatter', mode: 'lines', x: p.qq.line_x, y: p.qq.line_y,
          line: { color: c.accent3, dash: 'dash', width: 2 }, name: 'Normal Ref' }
      ], plotLayout(`${t('viz_type_qq')} - ${col}`, t('chart_theoretical_qq'), t('chart_sample_qq'),
        { showlegend: true }),
        {});

    } else if (vizType === 'violin' && p.violin) {
      renderPlotWhenReady('vn-single', [{
        type: 'violin', y: p.violin.values, name: col,
        box: { visible: true }, meanline: { visible: true },
        marker: { color: c.accent2 }, line: { color: c.accent2 },
        points: 'suspectedoutliers', spanmode: 'hard'
      }], plotLayout(`${t('viz_type_violin')} - ${col}`, col, '', { showlegend: false }),
        {});

    } else {
      area.innerHTML = `<div class="card viz-card" style="padding:20px;opacity:0.6">${t('chart_data_unavailable')}</div>`;
    }

    const insight = document.getElementById('vn-insight');
    if (insight) insight.innerHTML = renderVizInsight(t('chart_insight_auto'), numericalVizInsights(col, p, vizType));
  });
};

// =====================================================
// ENHANCED CATEGORICAL VIZ - with visual type dropdown
// =====================================================
async function loadVizCategorical() {
  const empty = document.getElementById('viz-cat-empty');
  const container = document.getElementById('viz-cat-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('viz_loading'));
  try {
    const res = await fetch('/api/viz/categorical', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({filename: state.currentFile})
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast(t('viz_err_load'), 'error'); return; }

    const plots = data.plots;
    const cols = Object.keys(plots);
    if (cols.length === 0) { empty.style.display='block'; container.style.display='none'; return; }

    empty.style.display = 'none';
    container.style.display = 'block';

    container.innerHTML = `
      <div class="viz-col-tabs" style="align-items:center;gap:12px;flex-wrap:wrap;">
        <span class="viz-col-label">${t('viz_select_column')}</span>
        <select class="viz-select" id="viz-cat-select">
          ${cols.map(c => `<option value="${escapeAttr(c)}">${escapeHtml(c)}</option>`).join('')}
        </select>
        <span class="viz-col-label">${t('viz_select_type')}</span>
        <select class="viz-select" id="viz-cat-type">
          <option value="bar">${t('viz_type_bar')}</option>
          <option value="pie">${t('viz_type_pie')}</option>
          <option value="pareto">${t('viz_type_pareto')}</option>
        </select>
      </div>
      <div id="viz-cat-charts"></div>
    `;

    window._catPlots = plots;
    const colSel = document.getElementById('viz-cat-select');
    const typeSel = document.getElementById('viz-cat-type');
    const refresh = () => showCatVizSingle(colSel.value, typeSel.value);
    colSel.addEventListener('change', refresh);
    typeSel.addEventListener('change', refresh);
    showCatVizSingle(cols[0], 'bar');
  } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
}

window.showCatVizSingle = function(col, vizType) {
  const p = window._catPlots[col];
  if (!p) return;
  const area = document.getElementById('viz-cat-charts');
  if (!isCategoricalVizCompatible(p, vizType)) {
    area.innerHTML = `<div class="card viz-card">${renderVizMismatch()}</div>`;
    return;
  }
  area.innerHTML = `
    <div class="card viz-card"><div id="vc-single" style="height:540px;"></div></div>
    <div id="vc-insight"></div>
  `;

  ensurePlotly(() => {
    const c = chartColors();

    if (vizType === 'bar') {
      renderPlotWhenReady('vc-single', [{
        type:'bar', orientation:'h',
        x: p.counts, y: p.labels,
        text: p.pcts.map(v => `${v}%`), textposition: 'outside',
        textfont: { color: c.muted, size: 11 },
        cliponaxis: false,
        marker: {
          color: c.palette.slice(0, p.labels.length),
          opacity: 0.92,
          line: { color: 'rgba(255,255,255,0.2)', width: 1 }
        }
      }], plotLayout(`${t('viz_type_bar')} - ${col}`, t('chart_count'), '', {
        margin: { t: 58, r: 96, b: 54, l: 168 },
        yaxis: { automargin: true, tickfont: { color: c.muted, size: 11 } },
        xaxis: { rangemode: 'tozero' },
        showlegend: false
      }), {});

    } else if (vizType === 'pie') {
      renderPlotWhenReady('vc-single', [{
        type: 'pie', labels: p.labels, values: p.counts,
        marker: { colors: c.palette, line: { color: c.paper, width: 2 } },
        hole: 0.48,
        sort: false,
        direction: 'clockwise',
        pull: p.labels.map((_, i) => i === 0 ? 0.035 : 0),
        textinfo: 'label+percent',
        textposition: 'outside',
        textfont: { color: c.text, size: 12 },
        hovertemplate: '<b>%{label}</b><br>%{value} (%{percent})<extra></extra>'
      }], {
        title: { text: `${t('viz_type_pie')} - ${col}`, font: { color: c.text, size: 15 }, x: 0.03, xanchor: 'left' },
        paper_bgcolor: 'transparent', plot_bgcolor: 'transparent', font: { color: c.text, size: 12 },
        uniformtext: { minsize: 10, mode: 'hide' },
        margin: { t: 64, r: 50, b: 48, l: 50 },
        showlegend: true,
        legend: { orientation: 'h', y: -0.1, font: { color: c.muted, size: 11 } }
      }, {});

    } else if (vizType === 'pareto') {
      renderPlotWhenReady('vc-single', [
        { type: 'bar', name: t('chart_count'), x: p.labels, y: p.counts,
          marker: { color: c.palette.slice(0, p.labels.length), line: { color: c.axis, width: 1 } } },
        { type: 'scatter', name: t('chart_cumulative_pct'), x: p.labels, y: p.cumulative,
          yaxis: 'y2', mode: 'lines+markers', line: { color: c.accent3, width: 3, shape: 'spline' },
          marker: { size: 8, color: c.accent3, line: { color: c.paper, width: 1 } } }
      ], plotLayout(`${t('viz_type_pareto')} - ${col}`, '', t('chart_count'), {
        yaxis2: { title: { text: t('chart_cumulative_pct'), font: { color: c.muted, size: 12 } }, overlaying: 'y', side: 'right', range: [0, 110],
          tickfont: { color: c.muted, size: 11 }, showgrid: false, zeroline: false },
        margin: { t: 58, r: 82, b: 96, l: 64 },
        xaxis: { tickangle: -28 },
        showlegend: true
      }), {});
    }

    const insight = document.getElementById('vc-insight');
    if (insight) insight.innerHTML = renderVizInsight(t('chart_insight_auto'), categoricalVizInsights(col, p, vizType));
  });
};

// =====================================================
// COMPARISON SECTION
// =====================================================
async function loadVizComparison() {
  const empty = document.getElementById('viz-comp-empty');
  const container = document.getElementById('viz-comp-container');
  if (!state.currentFile) { empty.style.display='block'; container.style.display='none'; return; }

  showLoading(t('comp_loading'));
  try {
    const [numRes, catRes] = await Promise.all([
      fetch('/api/viz/numerical', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile}) }),
      fetch('/api/viz/categorical', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({filename: state.currentFile}) })
    ]);
    const [numData, catData] = await Promise.all([numRes.json(), catRes.json()]);
    hideLoading();

    window._compNumPlots = numData.success ? numData.plots : {};
    window._compCatPlots = catData.success ? catData.plots : {};

    empty.style.display = 'none';
    container.style.display = 'block';

    // Build column checkboxes
    const allNumCols = Object.keys(window._compNumPlots);
    const allCatCols = Object.keys(window._compCatPlots);
    const checkboxDiv = document.getElementById('comp-col-checkboxes');
    
    const renderCheckboxes = () => {
      const type = document.getElementById('comp-type-select').value;
      const cols = type === 'bar' ? allCatCols : allNumCols;
      if (cols.length === 0) {
        checkboxDiv.innerHTML = `<span style="opacity:0.45;font-size:0.85rem;font-style:italic">${type === 'bar' ? t('comp_no_cat') : t('comp_no_num')}</span>`;
        return;
      }
      checkboxDiv.innerHTML = cols.map(col => `
        <label class="comp-checkbox-label">
          <input type="checkbox" value="${escapeAttr(col)}" onchange="toggleCompCheckbox(this)">
          <span class="cb-dot"></span>
          <span title="${escapeAttr(col)}">${escapeHtml(col)}</span>
        </label>
      `).join('');
    };

    document.getElementById('comp-type-select').addEventListener('change', renderCheckboxes);
    renderCheckboxes();

    document.getElementById('btn-run-comparison').addEventListener('click', runComparison);
  } catch(e) { hideLoading(); showToast(t('viz_err_load') + ': ' + e.message, 'error'); }
}

window.toggleCompCheckbox = function(cb) {
  const label = cb.closest('.comp-checkbox-label');
  const checked = document.querySelectorAll('#comp-col-checkboxes input:checked');
  if (checked.length > 5 && cb.checked) {
    cb.checked = false;
    showToast(t('comp_err_max5'), 'warning');
    return;
  }
  label.classList.toggle('checked', cb.checked);
};

window.runComparison = function() {
  const type = document.getElementById('comp-type-select').value;
  const checked = Array.from(document.querySelectorAll('#comp-col-checkboxes input:checked')).map(cb => cb.value);
  if (checked.length < 2) { showToast(t('comp_err_min2'), 'warning'); return; }

  const chartDiv = document.getElementById('viz-comp-chart');
  const plotsForCheck = type === 'bar' ? window._compCatPlots : window._compNumPlots;
  const compatible = checked.every(col => {
    const p = plotsForCheck[col];
    if (type === 'histogram') return isNumericalVizCompatible(p, 'density');
    if (type === 'boxplot') return isNumericalVizCompatible(p, 'boxplot');
    if (type === 'violin') return isNumericalVizCompatible(p, 'violin');
    if (type === 'bar') return isCategoricalVizCompatible(p, 'bar');
    return false;
  });
  if (!compatible) {
    chartDiv.innerHTML = renderVizMismatch();
    document.getElementById('viz-comp-stats').innerHTML = '';
    return;
  }
  chartDiv.innerHTML = `<div id="comp-plot" style="height:540px;"></div><div id="comp-insight"></div>`;

  const statsDiv = document.getElementById('viz-comp-stats');
  statsDiv.innerHTML = '';

  ensurePlotly(() => {
    const c = chartColors();
    const plots = type === 'bar' ? window._compCatPlots : window._compNumPlots;

    if (type === 'histogram') {
      const traces = checked.map((col, i) => {
        const p = plots[col];
        return {
          type: 'scatter', mode: 'lines', name: col,
          x: p?.density?.x || [], y: p?.density?.y || [],
          fill: 'tozeroy', fillcolor: c.palette[i] + '24',
          line: { color: c.palette[i], width: 3, shape: 'spline' },
          hovertemplate: `<b>${col}</b><br>${t('chart_value')}: %{x}<br>${t('chart_density')}: %{y:.8f}<extra></extra>`
        };
      });
      renderPlotWhenReady('comp-plot', traces,
        plotLayout(t('comp_chart_hist'), t('chart_value'), t('chart_density'), { showlegend: true, hovermode: 'x unified' }),
        {});

    } else if (type === 'boxplot') {
      const traces = checked.map((col, i) => {
        const p = plots[col];
        if (!p?.boxplot) return null;
        return boxSummaryTrace(col, p.boxplot, c.palette[i]);
      }).filter(Boolean);
      renderPlotWhenReady('comp-plot', traces,
        plotLayout(t('comp_chart_box'), t('th_column'), t('chart_value'), { showlegend: false }),
        {});

    } else if (type === 'violin') {
      const traces = checked.map((col, i) => {
        const p = plots[col];
        if (!p?.violin) return null;
        return {
          type: 'violin', name: col, y: p.violin.values,
          box: { visible: true }, meanline: { visible: true },
          marker: { color: c.palette[i], opacity: 0.5 },
          line: { color: c.palette[i], width: 1.8 },
          fillcolor: c.palette[i] + '55',
          opacity: 0.82,
          points: false
        };
      }).filter(Boolean);
      renderPlotWhenReady('comp-plot', traces,
        plotLayout(t('comp_chart_violin'), t('th_column'), t('chart_value'), { showlegend: false }),
        {});

    } else if (type === 'bar') {
      const traces = checked.map((col, i) => {
        const p = plots[col];
        const top5labels = (p?.labels || []).slice(0, 5);
        const top5counts = (p?.counts || []).slice(0, 5);
        return {
          type: 'bar', name: col, x: top5labels, y: top5counts,
          marker: { color: c.palette[i], opacity: 0.9, line: { color: c.axis, width: 1 } }
        };
      });
      renderPlotWhenReady('comp-plot', traces,
        plotLayout(t('comp_chart_bar'), t('chart_categories'), t('chart_count'),
          { barmode: 'group', showlegend: true, bargap: 0.18, bargroupgap: 0.08 }),
        {});
    }

    const insight = document.getElementById('comp-insight');
    if (insight) insight.innerHTML = renderVizInsight(t('chart_insight_auto'), comparisonVizInsights(type, checked, plots));

    // Summary stats cards
    checked.forEach((col, i) => {
      const p = plots[col];
      if (!p) return;
      const bp = p.boxplot;
      if (bp) {
        statsDiv.innerHTML += `
          <div style="background:var(--surface-2);border:1px solid var(--border);border-left:3px solid ${c.palette[i]};border-radius:10px;padding:14px;">
            <div style="font-weight:700;color:${c.palette[i]};margin-bottom:8px" title="${escapeAttr(col)}">${escapeHtml(col)}</div>
            <div style="font-size:0.8rem;display:grid;grid-template-columns:1fr 1fr;gap:4px;">
              <span style="opacity:0.7">${t('comp_stat_median')}:</span><span>${bp.median?.toFixed(3) ?? '-'}</span>
              <span style="opacity:0.7">${t('comp_stat_mean')}:</span><span>${bp.mean?.toFixed(3) ?? '-'}</span>
              <span style="opacity:0.7">${t('comp_stat_q1')}:</span><span>${bp.q1?.toFixed(3) ?? '-'}</span>
              <span style="opacity:0.7">${t('comp_stat_q3')}:</span><span>${bp.q3?.toFixed(3) ?? '-'}</span>
            </div>
          </div>`;
      }
    });
  });
};

// =====================================================
// DATA CLEANING
// =====================================================
let _cleaningData = null;
let _cleanedFilename = null;
let _cleanedInfo = null;

async function loadDataCleaning() {
  const empty = document.getElementById('cleaning-empty');
  const container = document.getElementById('cleaning-container');
  if (!state.currentFile) {
    empty.innerHTML = `
      <div class="empty-icon"></div>
      <p>${t('cleaning_empty')}</p>
      <button class="btn-primary" onclick="switchSection('upload')">${t('cleaning_go_upload')}</button>
    `;
    empty.style.display='block'; container.style.display='none'; return;
  }
  await analyzeDataCleaning();
}

async function analyzeDataCleaning() {
  const empty = document.getElementById('cleaning-empty');
  const container = document.getElementById('cleaning-container');
  showLoading(t('cleaning_loading'));
  try {
    const res = await fetch('/api/cleaning/analyze', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: state.currentFile })
    });
    let data;
    try {
      data = await res.json();
    } catch (parseErr) {
      throw new Error(`${t('cleaning_err_json')}${res.status}${t('cleaning_err_json2')}`);
    }
    hideLoading();
    if (!data.success) {
      showToast(t('cleaning_err_analyze') + data.error, 'error');
      empty.innerHTML = `
        <div class="empty-icon"></div>
        <p>${t('cleaning_err_analyze')}${data.error || 'Unknown error'}</p>
        <button class="btn-primary" onclick="reAnalyzeCleaning()">${t('cleaning_retry')}</button>
        <button class="btn-secondary" onclick="switchSection('upload')" style="margin-left:8px">${t('cleaning_go_upload')}</button>
      `;
      empty.style.display = 'block';
      container.style.display = 'none';
      return;
    }

    _cleaningData = data;
    empty.style.display = 'none';
    container.style.display = 'block';

    renderCleaningSummary(data);
    renderCleaningTabs(data);
  } catch(e) {
    hideLoading();
    showToast(t('cleaning_err_toast') + ' ' + e.message, 'error');
    empty.innerHTML = `
      <div class="empty-icon"></div>
      <p>${t('cleaning_err_toast')} ${e.message}</p>
      <button class="btn-primary" onclick="reAnalyzeCleaning()">${t('cleaning_retry')}</button>
      <button class="btn-secondary" onclick="switchSection('upload')" style="margin-left:8px">${t('cleaning_go_upload')}</button>
    `;
    empty.style.display = 'block';
    container.style.display = 'none';
  }
}

window.reAnalyzeCleaning = analyzeDataCleaning;

function renderCleaningSummary(data) {
  const sc = document.getElementById('cleaning-summary-cards');
  const missingTotal = data.missing.reduce((s, m) => s + m.missing_count, 0);
  const items = [
    { label: t('cleaning_summary_rows'), val: data.total_rows.toLocaleString(), cls: '' },
    { label: t('cleaning_summary_cols'), val: data.total_cols, cls: '' },
    { label: t('cleaning_summary_missing'), val: missingTotal.toLocaleString(), cls: missingTotal > 0 ? 'val-danger' : 'val-success' },
    { label: t('cleaning_summary_duplicates'), val: data.duplicates.count.toLocaleString(), cls: data.duplicates.count > 0 ? 'val-warning' : 'val-success' },
    { label: t('cleaning_summary_outliers'), val: data.outliers.length, cls: data.outliers.length > 0 ? 'val-warning' : 'val-success' },
    { label: t('cleaning_summary_types'), val: data.type_issues.length, cls: data.type_issues.length > 0 ? 'val-warning' : 'val-success' },
  ];
  sc.innerHTML = items.map(it => `
    <div class="cleaning-summary-card">
      <div class="cleaning-summary-val ${it.cls}">${it.val}</div>
      <div class="cleaning-summary-label">${it.label}</div>
    </div>
  `).join('');
}

function renderCleaningTabs(data) {
  const missingTotal = data.missing.reduce((s, m) => s + m.missing_count, 0);

  // Update badges
  const setBadge = (id, count) => {
    const el = document.getElementById('badge-' + id);
    el.textContent = count;
    el.className = 'cleaning-tab-badge' + (count === 0 ? ' zero' : '');
  };
  setBadge('missing', missingTotal);
  setBadge('duplicates', data.duplicates.count);
  setBadge('outliers', data.outliers.reduce((s, o) => s + o.outlier_count, 0));
  setBadge('types', data.type_issues.length);
  setBadge('whitespace', data.whitespace.reduce((s, w) => s + w.count, 0));

  // Missing tab
  const missingPanel = document.getElementById('cleaning-tab-missing');
  const lang = state.lang;
  if (data.missing.length === 0) {
    missingPanel.innerHTML = `<div style="color:#28c76f;padding:8px 0">${t('cleaning_no_missing')}</div>`;
  } else {
    missingPanel.innerHTML = `
      <p style="opacity:0.7;font-size:0.85rem;margin-top:0">${data.missing.length} ${lang === 'id' ? 'kolom memiliki nilai kosong (missing)' : 'columns have missing values'}</p>
      ${data.missing.map(m => `
        <div class="cleaning-issue-row">
          <div>
            <div class="cleaning-issue-col">${m.column}</div>
            <div class="cleaning-issue-meta">${m.dtype} - ${m.missing_pct}% ${lang === 'id' ? 'kosong' : 'empty'}</div>
            <div class="cleaning-progress-bar"><div class="cleaning-progress-fill" style="width:${m.missing_pct}%"></div></div>
          </div>
          <div style="text-align:right">
            <span class="cleaning-issue-badge badge-danger">${m.missing_count.toLocaleString()} ${lang === 'id' ? 'kosong' : 'empty'}</span>
          </div>
          ${renderCleaningPreview(m.preview, lang === 'id' ? 'Preview baris dengan nilai kosong' : 'Preview rows with missing values')}
        </div>
      `).join('')}
    `;
  }

  // Duplicates tab
  const dupPanel = document.getElementById('cleaning-tab-duplicates');
  if (data.duplicates.count === 0) {
    dupPanel.innerHTML = `<div style="color:#28c76f;padding:8px 0">${t('cleaning_no_duplicates')}</div>`;
  } else {
    dupPanel.innerHTML = `
      <p style="opacity:0.7;font-size:0.85rem;margin-top:0">
        <span class="cleaning-issue-badge badge-warning">${data.duplicates.count} ${lang === 'id' ? 'baris duplikat' : 'duplicate rows'}</span> ${lang === 'id' ? 'ditemukan' : 'found'}
      </p>
      ${renderCleaningPreview(
        data.duplicates.preview || { columns: data.duplicates.columns, rows: data.duplicates.sample },
        lang === 'id' ? 'Preview baris duplikat (maks. 10)' : 'Preview duplicate rows (max 10)'
      )}
    `;
  }

  // Outliers tab
  const outPanel = document.getElementById('cleaning-tab-outliers');
  if (data.outliers.length === 0) {
    outPanel.innerHTML = `<div style="color:#28c76f;padding:8px 0">${t('cleaning_no_outliers')}</div>`;
  } else {
    outPanel.innerHTML = `
      <p style="opacity:0.7;font-size:0.85rem;margin-top:0">${lang === 'id' ? 'Outlier dideteksi menggunakan metode IQR (Q1 âˆ’ 1.5Ã-IQR, Q3 + 1.5Ã-IQR)' : 'Outliers detected using IQR method (Q1 âˆ’ 1.5Ã-IQR, Q3 + 1.5Ã-IQR)'}</p>
      ${data.outliers.map(o => `
        <div class="cleaning-issue-row">
          <div>
            <div class="cleaning-issue-col">${o.column}</div>
            <div class="cleaning-issue-meta">${lang === 'id' ? 'Batas' : 'Bounds'}: [${o.lower_bound}, ${o.upper_bound}] - Range: [${o.min_val}, ${o.max_val}]</div>
            <div class="cleaning-progress-bar"><div class="cleaning-progress-fill" style="width:${o.outlier_pct}%"></div></div>
          </div>
          <span class="cleaning-issue-badge badge-warning">${o.outlier_count.toLocaleString()} ${lang === 'id' ? 'outlier' : 'outliers'} (${o.outlier_pct}%)</span>
          ${renderCleaningPreview(o.preview, lang === 'id' ? 'Preview baris dengan outlier' : 'Preview rows with outliers')}
        </div>
      `).join('')}
    `;
  }

  // Type issues tab
  const typePanel = document.getElementById('cleaning-tab-types');
  if (data.type_issues.length === 0) {
    typePanel.innerHTML = `<div style="color:#28c76f;padding:8px 0">${t('cleaning_no_type_issues')}</div>`;
  } else {
    typePanel.innerHTML = `
      <p style="opacity:0.7;font-size:0.85rem;margin-top:0">${lang === 'id' ? 'Kolom berikut disimpan sebagai teks tetapi tampaknya berisi nilai numerik:' : 'The following columns are stored as text but appear to contain numeric values:'}</p>
      ${data.type_issues.map(ti => `
        <div class="cleaning-issue-row">
          <div>
            <div class="cleaning-issue-col">${ti.column}</div>
            <div class="cleaning-issue-meta">${ti.current_type} -> ${lang === 'id' ? 'disarankan' : 'suggested'}: ${ti.suggested_type}</div>
          </div>
          <span class="cleaning-issue-badge badge-info">${ti.convertible_pct}% ${lang === 'id' ? 'dapat dikonversi' : 'convertible'}</span>
          ${renderCleaningPreview(ti.preview, lang === 'id' ? 'Preview nilai yang terdeteksi numerik' : 'Preview detected numeric values')}
        </div>
      `).join('')}
    `;
  }

  // Whitespace tab
  const wsPanel = document.getElementById('cleaning-tab-whitespace');
  if (data.whitespace.length === 0) {
    wsPanel.innerHTML = `<div style="color:#28c76f;padding:8px 0">✅ ${t('cleaning_no_whitespace')}</div>`;
  } else {
    wsPanel.innerHTML = `
      <p style="opacity:0.7;font-size:0.85rem;margin-top:0">Kolom dengan spasi berlebih di awal/akhir:</p>
      ${data.whitespace.map(ws => `
        <div class="cleaning-issue-row">
          <div class="cleaning-issue-col">${ws.column}</div>
          <span class="cleaning-issue-badge badge-info">${ws.count.toLocaleString()} cell terpengaruh</span>
          ${renderCleaningPreview(ws.preview, 'Preview cell dengan spasi berlebih')}
        </div>
      `).join('')}
    `;
  }
}

window.showCleaningTab = function(tab) {
  document.querySelectorAll('.cleaning-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.cleaning-tab-panel').forEach(p => p.style.display = 'none');
  document.querySelector(`.cleaning-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`cleaning-tab-${tab}`).style.display = 'block';
};

window.applyCleaning = async function() {
  if (!state.currentFile) { showToast('Upload dataset terlebih dahulu', 'error'); return; }
  
  const actions = {
    missing_values: document.getElementById('action-missing').value || null,
    remove_duplicates: document.getElementById('action-duplicates').checked,
    outliers: document.getElementById('action-outliers').value || null,
    fix_types: document.getElementById('action-types').checked,
    strip_whitespace: document.getElementById('action-whitespace').checked,
  };

  const hasAnyAction = actions.missing_values || actions.remove_duplicates || 
                       actions.outliers || actions.fix_types || actions.strip_whitespace;
  if (!hasAnyAction) {
    showToast('Pilih minimal satu aksi pembersihan terlebih dahulu', 'warning');
    return;
  }

  showLoading('Membersihkan data...');
  try {
    const res = await fetch('/api/cleaning/apply', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: state.currentFile, actions })
    });
    const data = await res.json();
    hideLoading();
    if (!data.success) { showToast('Gagal membersihkan: ' + data.error, 'error'); return; }

    _cleanedFilename = data.cleaned_filename;
    _cleanedInfo = data.info || null;
    const resultDiv = document.getElementById('cleaning-result');
    const resultBody = document.getElementById('cleaning-result-body');
    resultDiv.style.display = 'block';

    resultBody.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-bottom:16px;">
        <div class="cleaning-summary-card">
          <div class="cleaning-summary-val">${data.original_shape[0].toLocaleString()}</div>
          <div class="cleaning-summary-label">Baris Asli</div>
        </div>
        <div class="cleaning-summary-card">
          <div class="cleaning-summary-val val-success">${data.cleaned_shape[0].toLocaleString()}</div>
          <div class="cleaning-summary-label">Baris Setelah Bersih</div>
        </div>
        <div class="cleaning-summary-card">
          <div class="cleaning-summary-val ${data.rows_removed > 0 ? 'val-warning' : 'val-success'}">${data.rows_removed.toLocaleString()}</div>
          <div class="cleaning-summary-label">Baris Dihapus</div>
        </div>
      </div>
      <div style="background:var(--surface-2);border-radius:10px;padding:14px;">
        <div style="font-weight:600;margin-bottom:8px">📋 Laporan Pembersihan:</div>
        <ul style="margin:0;padding-left:18px;">
          ${data.report.map(r => `<li style="padding:3px 0;font-size:0.88rem">${r}</li>`).join('')}
        </ul>
      </div>
    `;

    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast('Data berhasil dibersihkan!', 'success');
  } catch(e) { hideLoading(); showToast('Error: ' + e.message, 'error'); }
};

window.useCleanedDataset = function() {
  if (!_cleanedFilename) return;
  reuseDataset(_cleanedFilename);
};

window.downloadCleanedFile = function(fmt) {
  if (!_cleanedFilename) { showToast('Belum ada data yang dibersihkan', 'error'); return; }
  window.location.href = `/api/export/${fmt}?filename=${encodeURIComponent(_cleanedFilename)}`;
};






