export interface CaseStudy {
  overview: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  technologies: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  description: string;
  techStack: string[];
  projectUrl: string;
  githubUrl: string;
  isFeatured?: boolean;
  highlightBadge?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    id: 'pt-abb-dashboard',
    number: '01',
    title: 'PT ABB Dashboard',
    tagline: 'Enterprise Industrial Analytics & Operational Monitoring',
    category: 'Enterprise System',
    year: '2024 — 2025',
    role: 'Front-End Developer',
    description: 'Enterprise dashboard dikembangkan untuk monitoring data operasional peralatan industri dan visualisasi informasi bisnis secara real-time. Berfokus pada penyajian data latensi rendah, layout responsif, dan alur pengambilan keputusan yang terukur.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
    projectUrl: 'https://ptabb.vercel.app/',
    githubUrl: 'Private Enterprise Repository',
    isFeatured: true,
    highlightBadge: 'Enterprise Deployment',
    metrics: [
      { label: 'Latency Reduction', value: '< 250ms' },
      { label: 'Data Points Monitored', value: '50k+ / day' },
      { label: 'Device Coverage', value: 'Desktop & Field Tablet' }
    ],
    caseStudy: {
      overview: 'PT ABB Dashboard adalah platform sentralisasi visualisasi data operasional untuk fasilitas industri, mengkonsolidasikan telemetri mesin, shift operator, dan performa harian ke dalam satu antarmuka yang bersih dan presisi.',
      problem: 'Sebelum sistem ini dibangun, pengawas lapangan dan manajemen mengandalkan rekonsiliasi laporan manual berbasis spreadsheet yang lambat, rentan inkonsistensi data, dan menyulitkan identifikasi anomali mesin secara cepat.',
      approach: 'Merancang arsitektur dashboard modular dengan prinsip visual hierarchy yang ketat terinspirasi standar kontrol industri. Setiap modul informasi dikelompokkan berdasarkan prioritas urgensi, dilengkapi visualisasi metrik dengan kontras tinggi tanpa noise visual berlebih.',
      implementation: 'Frontend dibangun menggunakan React.js dan Tailwind CSS dengan manajemen state terpusat. Mengimplementasikan polling data teroptimasi, caching request API, visualisasi grafik performa interaktif, dan penanganan graceful degradation saat jaringan lapangan tidak stabil.',
      result: 'Berhasil memangkas waktu pemantauan operasional lapangan hingga lebih dari 60%, memberikan visibilitas metrik seketika bagi pengawas teknis, dan deployed secara stabil di production environment.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Vite', 'REST API Integration']
    }
  },
  {
    id: 'temucashflow',
    number: '02',
    title: 'TemuCashflow',
    tagline: 'Dual-Platform Financial Management & Cash Flow Engine',
    category: 'Financial Management',
    year: '2024 — 2025',
    role: 'Full-Stack & Mobile Developer',
    description: 'Ekosistem manajemen finansial komprehensif yang menghubungkan web dashboard dengan aplikasi native Android. Menghadirkan pencatatan transaksi cepat, proyeksi arus kas visual, multi-wallet balance, dan kontrol persetujuan transaksi keluarga/bisnis.',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Java', 'Android Studio', 'Firebase'],
    projectUrl: 'https://github.com/atriadha99/temucashflow',
    githubUrl: 'https://github.com/atriadha99/temucashflow',
    isFeatured: true,
    highlightBadge: 'Web & Native Mobile',
    metrics: [
      { label: 'Log Speed', value: '< 3 seconds' },
      { label: 'Architecture', value: 'Web + Android Native' },
      { label: 'Sync Engine', value: 'Realtime PostgreSQL' }
    ],
    caseStudy: {
      overview: 'TemuCashflow dirancang untuk menyelesaikan friksi pencatatan keuangan harian bagi profesional independen dan bisnis keluarga kecil, memastikan seluruh aliran uang tercatat tanpa birokrasi pembukuan yang rumit.',
      problem: 'Mayoritas aplikasi keuangan konvensional terlalu berat dengan istilah akuntansi rumit atau terbatas hanya pada satu perangkat tanpa sinkronisasi real-time antar anggota tim/keluarga.',
      approach: 'Menerapkan pendekatan input berbasis gestur cepat pada mobile dan dashboard analitik mendalam pada web. Membangun model data relasional di Supabase PostgreSQL dengan Row-Level Security untuk menjaga integritas dan kerahasiaan catatan.',
      implementation: 'Frontend web menggunakan React.js dengan visualisasi breakdown cashflow bulanan. Klien mobile diprogram secara native menggunakan Java di Android Studio dengan integrasi Firebase Auth dan Realtime Sync ke basis data Supabase.',
      result: 'Pencatatan mutasi transaksi dapat diselesaikan dalam hitungan detik. Pengguna memiliki visibilitas penuh atas runway keuangan, kategori pengeluaran terbesar, dan rekap saldo harian.',
      technologies: ['React.js', 'Supabase (PostgreSQL)', 'Java', 'Android Studio', 'Firebase Cloud Messaging', 'Tailwind CSS']
    }
  },
  {
    id: 'noctra-portfolio',
    number: '03',
    title: 'NOCTRA Portfolio',
    tagline: 'Digital Product Studio & Creative Technology Experience',
    category: 'Digital Studio Platform',
    year: '2026',
    role: 'Creative Technologist & Front-End Engineer',
    description: 'Situs identitas digital studio yang memadukan filosofi desain editorial Antikode, interaksi mikro presisi, tipografi neo-grotesk berani, dan performa tinggi tanpa kompromi.',
    techStack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis Scroll'],
    projectUrl: 'https://noctra-dev.vercel.app',
    githubUrl: 'https://github.com/atriadha99',
    isFeatured: true,
    highlightBadge: 'Studio Flagship',
    metrics: [
      { label: 'Lighthouse Performance', value: '98+' },
      { label: 'Typography Rhythm', value: 'Neo-Grotesk Grid' },
      { label: 'Motion System', value: 'Hardware-Accelerated' }
    ],
    caseStudy: {
      overview: 'NOCTRA merupakan wujud dari identitas ganda sebagai Front-End Developer dan Digital Product Builder yang mengedepankan standar visual studio digital berkelas tinggi.',
      problem: 'Banyak portfolio developer terjebak dalam template generik, efek neon berlebihan, dan kartu yang seragam, gagal mengomunikasikan kedewasaan desain dan kemampuan rekayasa produk yang serius.',
      approach: 'Mengadaptasi estetika studio editorial kelas dunia: tipografi display ekspresif, palet monokromatik terkontrol dengan aksen electric blue khas NOCTRA, tata letak asimetris yang dinamis, serta navigasi yang bersih dan fungsional.',
      implementation: 'Dibangun di atas Next.js 15+ App Router dengan TypeScript dan Tailwind CSS. Menggunakan Lenis untuk smooth inertial scrolling, Framer Motion untuk transisi status case study, serta integrasi Howler dan Spotify embed yang elegan.',
      result: 'Menghadirkan pengalaman studio digital orisinal yang cepat, responsif di seluruh breakpoint, aksesibel, dan secara meyakinkan merepresentasikan kualitas craftsmanship NOCTRA.',
      technologies: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Howler.js']
    }
  },
  {
    id: 'lendspace-hki',
    number: '04',
    title: 'Lendspace HKI',
    tagline: 'Commercial Asset & Creative Space Leasing Ecosystem',
    category: 'Marketplace Platform',
    year: '2024',
    role: 'Lead Front-End & Product Ideator',
    description: 'Platform marketplace penyewaan aset komersial, studio kreatif, dan ruang usaha terintegrasi. Konsep arsitektur dan sistem desain antarmukanya telah resmi terdaftar dan bersertifikasi Hak Kekayaan Intelektual (HKI).',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Figma'],
    projectUrl: 'Coming Soon / HKI Certified',
    githubUrl: 'Private Repository',
    isFeatured: true,
    highlightBadge: '🏆 HKI Registered',
    metrics: [
      { label: 'Legal Recognition', value: 'Certified HKI' },
      { label: 'Listing Taxonomy', value: 'Dynamic Space Filters' },
      { label: 'Security', value: 'Role-based Permissions' }
    ],
    caseStudy: {
      overview: 'Lendspace mempertemukan pemilik ruang komersial, creative hub, dan venue event dengan tenant atau kreator yang membutuhkan sewa jangka fleksibel.',
      problem: 'Proses penyewaan ruang kreatif di kota-kota berkembang masih terfragmentasi oleh perantara manual, ketiadaan kalender ketersediaan terverifikasi, dan format transparansi harga yang buruk.',
      approach: 'Merumuskan alur eksplorasi spasial yang intuitif: visualisasi foto skala besar, spesifikasi kapasitas, filter zonasi distrik, dan fitur reservasi terverifikasi. Seluruh konsep dan desain interaksi didaftarkan ke HKI untuk perlindungan aset intelektual.',
      implementation: 'Frontend dikembangkan dengan React.js dan Tailwind CSS, didukung Supabase untuk autentikasi user, manajemen katalog ruang, dan queries ketersediaan waktu sewa secara instan.',
      result: 'Berhasil memperoleh sertifikasi resmi Hak Kekayaan Intelektual (HKI) dari Kemenkumham RI dan membuktikan kelayakan arsitektur untuk pengembangan marketplace skala komersial.',
      technologies: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Figma UI System']
    }
  },
  {
    id: 'noctra-velocitra',
    number: '05',
    title: 'Noctra Velocitra',
    tagline: 'High-Performance Web Animation & Kinetic Tech Lab',
    category: 'Creative Technology',
    year: '2024',
    role: 'Creative Developer',
    description: 'Laboratorium eksperimen komputasi grafis web, physics-based micro-interactions, dan kinetic typography yang dirancang untuk menguji batas performa browser pada 60fps tanpa memory leak.',
    techStack: ['React.js', 'Vite', 'HTML5 Canvas', 'Web Animations API', 'Tailwind CSS'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    highlightBadge: 'R&D Laboratory',
    metrics: [
      { label: 'Target Frame Rate', value: 'Solid 60 FPS' },
      { label: 'Bundle Footprint', value: '< 15 kB primitives' },
      { label: 'GPU Utilization', value: 'Transform3D Compositing' }
    ],
    caseStudy: {
      overview: 'Noctra Velocitra adalah sarana riset dan pengembangan mandiri untuk menghasilkan modul interaksi halus yang nantinya diaplikasikan ke proyek-proyek produksi klien.',
      problem: 'Banyak efek animasi di web modern menyebabkan jank, lonjakan CPU, dan menguras baterai perangkat mobile akibat reflow/repaint yang tidak efisien.',
      approach: 'Mengeksplorasi optimasi kompositing layer pada browser, membatasi manipulasi DOM langsung ke properti GPU-accelerated (transform dan opacity), serta membuat hooks interaksi berbasis requestAnimationFrame.',
      implementation: 'Dibangun dengan Vite dan React, memanfaatkan manipulasi koordinat cursor real-time, spring physics calculation, dan dynamic kinetic text re-rendering.',
      result: 'Menghasilkan pustaka micro-interactions berbobot ringan yang teruji mulus di perangkat low-end sekalipun, yang kini menjadi pondasi motion system NOCTRA.',
      technologies: ['React.js', 'Vite', 'Web Animations API', 'RAF Loop Engine', 'Tailwind CSS']
    }
  },
  {
    id: 'portal-ekskul-binusa',
    number: '06',
    title: 'Portal Ekskul SMK Binusa',
    tagline: 'Vocational High School Extracurricular Management System',
    category: 'Education Platform',
    year: '2023 — 2024',
    role: 'Front-End Developer',
    description: 'Sistem informasi terpusat berbasis web untuk manajemen ekstrakurikuler sekolah kejuruan, mengotomasi pendaftaran siswa baru, jadwal latihan berkala, absensi digital, dan rekapitulasi anggota per organisasi.',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'Private Repository',
    highlightBadge: 'Institutional SaaS',
    metrics: [
      { label: 'Adoption Rate', value: '100% Digital' },
      { label: 'Clubs Managed', value: '15+ Organizations' },
      { label: 'Form Errors', value: 'Eliminated to 0' }
    ],
    caseStudy: {
      overview: 'Portal Ekskul SMK Binusa menggantikan sistem pendaftaran kertas konvensional dengan portal web responsif yang mudah diakses siswa lewat smartphone maupun komputer laboratorium sekolah.',
      problem: 'Pendaftaran tahunan ekstrakurikuler sebelumnya menyebabkan penumpukan formulir kertas yang rentan hilang, jadwal bentrok antar klub olahraga dan seni, serta sulitnya guru kesiswaan merekap kehadiran.',
      approach: 'Membangun antarmuka berbasis peran (Siswa, Pembina Ekskul, dan Admin Kesiswaan). Desain mengutamakan kesederhanaan formulir pendaftaran dan kalender visual kegiatan per minggu.',
      implementation: 'Frontend dirancang dengan React.js dan Tailwind CSS, terhubung ke Supabase database dengan autentikasi email instansi dan validasi kuota otomatis per cabang ekstrakurikuler.',
      result: 'Menghilangkan ketergantungan dokumen fisik, mempercepat verifikasi keanggotaan siswa dari 2 minggu menjadi instan, dan mempermudah pelaporan kesiswaan tahunan.',
      technologies: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'REST API']
    }
  },
  {
    id: 'ecommerce-platform',
    number: '07',
    title: 'E-Commerce Platform',
    tagline: 'Modern Commercial Retail & High-Speed Checkout Experience',
    category: 'Commercial Commerce',
    year: '2024 — 2025',
    role: 'Front-End Engineer',
    description: 'Aplikasi belanja retail modern dengan fokus pada kecepatan browsing katalog, filter atribut instan, keranjang belanja teroptimasi dengan optimistic updates, dan checkout responsif.',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    highlightBadge: 'Commercial Architecture',
    metrics: [
      { label: 'Catalog Search', value: 'Instant Filter' },
      { label: 'Cart Latency', value: 'Zero Wait (Optimistic)' },
      { label: 'Mobile Conversion', value: 'Thumb-friendly Flow' }
    ],
    caseStudy: {
      overview: 'Platform e-commerce ritel berorientasi gaya hidup kontemporer, dirancang dengan tipografi bersih dan pengalaman transaksi tanpa hambatan.',
      problem: 'Situs e-commerce tradisional sering kali lambat saat memuat katalog produk dengan varian warna/ukuran, serta menyajikan alur checkout berliku yang meningkatkan abandonment rate.',
      approach: 'Mengadopsi tata letak katalog bergaya editorial majalah mode, dipadukan dengan panel keranjang geser (slide-over cart) dan alur pembayaran satu halaman yang ringkas.',
      implementation: 'Dibangun menggunakan React.js dan Next.js dengan state management lokal terisolasi untuk update kuantitas seketika. Terintegrasi dengan REST API untuk perhitungan pajak, ongkir, dan validasi stok.',
      result: 'Memberikan pengalaman belanja digital yang mulus dan cepat, dengan navigasi katalog yang memanjakan mata pembeli dan tingkat responsivitas tinggi di smartphone.',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API Integration']
    }
  }
];

export const allProjects = projectsData;
export const projects = projectsData;
