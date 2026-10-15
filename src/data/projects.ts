export interface CaseStudy {
  overview: string;
  problem: string;
  approach: string;
  implementation: string;
  result: string;
  technologies: string[];
}

export interface ProjectScreenshot {
  title: string;
  caption: string;
  tag: string;
}

export type MainCategory =
  | 'Web Development'
  | 'Mobile Development'
  | 'UI/UX'
  | 'Backend & Database'
  | 'Experimental';

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  categoryGroup: 'Enterprise' | 'Fintech & Mobile' | 'Creative Tech' | 'Education & Platforms' | 'Brand & Commerce';
  categories: MainCategory[];
  year: string;
  role: string;
  description: string;
  techStack: string[];
  projectUrl: string;
  githubUrl: string;
  isFeatured?: boolean;
  isContinueBuilding?: boolean;
  progressPercentage?: number;
  developmentStatus?: string;
  currentSprint?: string;
  highlightBadge?: string;
  matchScore: number;
  contentRating: string;
  runtime: string;
  accentColor: string;
  streamingRows: ('trending' | 'enterprise' | 'fintech' | 'creative' | 'continue' | 'featured')[];
  videoPreviewType: 'gov' | 'dashboard' | 'cashflow' | 'kinetic' | 'marketplace' | 'code' | 'education' | 'commerce' | 'brand' | 'companion';
  metrics?: { label: string; value: string }[];
  caseStudy: CaseStudy;
  screenshots: ProjectScreenshot[];
  architectureNotes?: string[];
}

export const projectsData: Project[] = [
  {
    id: 'kcd-wilayah-8',
    number: '01',
    title: 'KCD WILAYAH VIII',
    tagline: 'Sistem Layanan & Pengaduan Terpadu',
    category: 'Government Web Application',
    categoryGroup: 'Enterprise',
    categories: ['Web Development', 'UI/UX', 'Backend & Database'],
    year: '2026',
    role: 'Lead Front-End & UI Architect',
    description: 'Sistem Layanan & Pengaduan Terpadu untuk Kantor Cabang Dinas Pendidikan Wilayah VIII Jawa Barat. Mengintegrasikan penerimaan aduan publik, verifikasi berkas perizinan sekolah, pelacakan tiket aduan real-time, dan dashboard analitik kependidikan dengan arsitektur modern Next.js dan Supabase.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
    projectUrl: 'https://kcd8-portal.vercel.app',
    githubUrl: 'https://github.com/atriadha99/kcd-wilayah-8',
    isFeatured: true,
    isContinueBuilding: true,
    progressPercentage: 88,
    developmentStatus: 'Sprint 4 • Public Beta Refinement',
    currentSprint: 'Multi-Role SLA Escalation & Digital Stamp Verification',
    highlightBadge: 'Flagship GovTech 2026',
    matchScore: 99,
    contentRating: 'GOV-TECH',
    runtime: 'Sub-second Verification',
    accentColor: '#3b82f6',
    streamingRows: ['trending', 'enterprise', 'continue', 'featured'],
    videoPreviewType: 'gov',
    metrics: [
      { label: 'Public Resolution SLA', value: '< 48 Hours' },
      { label: 'Schools Integrated', value: '180+ High Schools' },
      { label: 'Ticket Verification', value: 'Zero Paperwork' }
    ],
    architectureNotes: [
      'Next.js App Router with React Server Components for instant public landing and server-rendered ticket trackers',
      'Supabase Row-Level Security (RLS) isolating school complaints, civil inquiries, and administrative dispute resolution',
      'Automated email notification webhook dispatch with encrypted ticket verification hashes',
      'High-contrast accessible design system compliant with Indonesian government digital public service standards'
    ],
    screenshots: [
      {
        title: 'Central Integrated Public Grievance Portal',
        caption: 'High-clarity filing flow with categorized department routing and instant receipt generation.',
        tag: 'Public Portal'
      },
      {
        title: 'Inspector & Dispatcher Incident Console',
        caption: 'Real-time multi-school status board with SLA countdown timers and priority tagging.',
        tag: 'Admin Dashboard'
      },
      {
        title: 'Citizen Mobile Real-Time Ticket Tracker',
        caption: 'Transparent step-by-step resolution timeline accessible via QR code and SMS links.',
        tag: 'Mobile Tracker'
      }
    ],
    caseStudy: {
      overview: 'KCD Wilayah VIII adalah inisiatif digitalisasi pelayanan publik pendidikan di bawah Dinas Pendidikan Provinsi Jawa Barat, mencakup wilayah Kabupaten Bandung dan sekitarnya.',
      problem: 'Sebelumnya pengaduan masyarakat dan pengurusan dokumen legalitas sekolah berlangsung lewat surat fisik atau pesan instan tak terstruktur yang berujung pada lambatnya penanganan, hilangnya berkas, dan minimnya transparansi status pengaduan bagi warga.',
      approach: 'Merancang alur layanan satu pintu yang sangat jelas dan inklusif. Memisahkan jalur pengaduan masyarakat umum dengan jalur kedinasan sekolah, dilengkapi sistem tracking publik berbasis nomor tiket unik dan dashboard analitik resolusi masalah.',
      implementation: 'Frontend dibangun menggunakan Next.js dengan App Router dan Tailwind CSS untuk menjamin waktu muat instan di jaringan mobile warga. Backend didukung Supabase PostgreSQL dengan trigger database otomatis untuk logging kronologis dan manajemen status tiket.',
      result: 'Memangkas waktu penanganan keluhan dari rata-rata 14 hari kerja menjadi di bawah 48 jam, meningkatkan transparansi publik, dan menghadirkan sistem arsip pengaduan yang terstruktur rapi.',
      technologies: ['Next.js (App Router)', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons']
    }
  },
  {
    id: 'compawnion',
    number: '02',
    title: 'COMPawnion',
    tagline: 'Smart Pet Health, Nutrition & Animal Companion Platform',
    category: 'Mobile & Web Companion',
    categoryGroup: 'Fintech & Mobile',
    categories: ['Mobile Development', 'UI/UX', 'Web Development'],
    year: '2025 — 2026',
    role: 'Full-Stack Developer & UX Architect',
    description: 'Platform digital komprehensif pendamping pemilik hewan peliharaan. Menghadirkan rekam medis digital satwa, kalkulator nutrisi cerdas berdasarkan ras dan berat badan, reminder jadwal vaksinasi berkala, serta radar klinik veteriner siaga 24 jam.',
    techStack: ['React Native', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Leaflet Maps'],
    projectUrl: 'https://compawnion.vercel.app',
    githubUrl: 'https://github.com/atriadha99/compawnion',
    isFeatured: true,
    isContinueBuilding: true,
    progressPercentage: 74,
    developmentStatus: 'Sprint 3 • Clinic Radar & Health Logs',
    currentSprint: 'Emergency Vet Geolocation & Push Vaccine Reminders',
    highlightBadge: 'Mobile & Pet-Tech',
    matchScore: 97,
    contentRating: 'PET-HEALTH',
    runtime: 'Local-First Sync',
    accentColor: '#ec4899',
    streamingRows: ['trending', 'fintech', 'continue', 'featured'],
    videoPreviewType: 'companion',
    metrics: [
      { label: 'Vaccination Reminders', value: '100% On-Schedule' },
      { label: 'Nutrition Accuracy', value: 'Species-tailored' },
      { label: 'Vet Clinic Locator', value: '< 5km Radius' }
    ],
    architectureNotes: [
      'Dual-client architecture sharing schema definitions between Next.js web portal and mobile app',
      'Offline-first medical logbook caching for emergency check-ups in low-connectivity shelters',
      'Dynamic veterinary map pins with real-time operational status (open now / 24-hour on-call)',
      'Pet age-to-human milestone converter with interactive growth velocity curves'
    ],
    screenshots: [
      {
        title: 'Pet Health Dashboard & Immunization Timeline',
        caption: 'Visual medical passport displaying rabies, distemper, and deworming milestones.',
        tag: 'Medical Card'
      },
      {
        title: 'Emergency 24H Veterinary Clinic Radar',
        caption: 'Geo-spatial proximity finder highlighting open emergency animal hospitals.',
        tag: 'Map & Geo'
      },
      {
        title: 'Daily Calorie & Nutrition Calculator',
        caption: 'Weight management curve with species-calibrated dry/wet food intake suggestions.',
        tag: 'Nutrition'
      }
    ],
    caseStudy: {
      overview: 'COMPawnion lahir untuk mengakhiri kelalaian jadwal vaksinasi dan perawatan darurat satwa kesayangan akibat buku vaksinasi kertas yang sering terselip atau rusak.',
      problem: 'Pemilik hewan peliharaan di Indonesia kerap lupa tanggal jadwal pengulangan vaksin tahunan, kesulitan mencari dokter hewan jaga darurat saat malam hari, dan bingung menentukan takaran nutrisi yang seimbang.',
      approach: 'Menciptakan "buku paspor kesehatan satwa digital" dengan estetika ramah dan hangat. Memadukan kemudahan pencatatan riwayat klinik, alarm pengingat otomatis, dan panduan pertolongan pertama satwa.',
      implementation: 'Arsitektur frontend dibangun dengan Next.js dan Tailwind CSS, dirancang mobile-first dengan gestur ramah jempol. Terhubung ke Supabase dengan sinkronisasi rekam medis dan integrasi geolokasi peta Leaflet.',
      result: 'Memberikan ketenangan pikiran bagi pemilik hewan, mendigitalisasi ratusan data satwa, dan mempermudah dokter hewan membaca rekam medis pasien secara cepat saat kunjungan klinik.',
      technologies: ['Next.js', 'React Native', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Leaflet API']
    }
  },
  {
    id: 'temucashflow',
    number: '03',
    title: 'TemuCashflow',
    tagline: 'Dual-Platform Financial Management & Cash Flow Engine',
    category: 'Financial Management',
    categoryGroup: 'Fintech & Mobile',
    categories: ['Mobile Development', 'Web Development', 'Backend & Database'],
    year: '2024 — 2025',
    role: 'Full-Stack & Mobile Developer',
    description: 'Ekosistem manajemen finansial komprehensif yang menghubungkan web dashboard dengan aplikasi native Android. Menghadirkan pencatatan transaksi cepat, proyeksi arus kas visual, multi-wallet balance, dan kontrol persetujuan transaksi keluarga/bisnis.',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Java', 'Android Studio', 'Firebase'],
    projectUrl: 'https://github.com/atriadha99/temucashflow',
    githubUrl: 'https://github.com/atriadha99/temucashflow',
    isFeatured: true,
    isContinueBuilding: true,
    progressPercentage: 92,
    developmentStatus: 'Sprint 6 • Cloud Sync Hardening',
    currentSprint: 'Cross-device offline mutation queue & CSV Ledger reconciliation',
    highlightBadge: 'Web & Native Mobile',
    matchScore: 98,
    contentRating: 'FULL-STACK',
    runtime: '< 3s Log Speed',
    accentColor: '#10b981',
    streamingRows: ['trending', 'fintech', 'continue', 'featured'],
    videoPreviewType: 'cashflow',
    metrics: [
      { label: 'Log Speed', value: '< 3 seconds' },
      { label: 'Architecture', value: 'Web + Android Native' },
      { label: 'Sync Engine', value: 'Realtime PostgreSQL' }
    ],
    architectureNotes: [
      'Dual-client sync pipeline between Android native SQLite and Supabase PostgreSQL',
      'Row-Level Security (RLS) rules safeguarding family and business ledger privacy',
      'Optimistic mutations with local queue for instant offline ledger entry',
      'Automated recurring transaction projection engine'
    ],
    screenshots: [
      {
        title: 'Executive Financial Runway & Net Worth',
        caption: 'Consolidated balance summary across bank accounts, e-wallets, and cash reserves.',
        tag: 'Dashboard'
      },
      {
        title: 'Android Native Fast-Log Interface',
        caption: 'One-thumb transaction capture with smart category suggestions and receipt upload.',
        tag: 'Android App'
      },
      {
        title: 'Shared Family Approval Flow',
        caption: 'Permission-based approval queue for expenses surpassing custom budget thresholds.',
        tag: 'Security & RLS'
      }
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
    id: 'pt-abb-dashboard',
    number: '04',
    title: 'PT ABB Dashboard',
    tagline: 'Enterprise Industrial Analytics & Operational Monitoring',
    category: 'Enterprise System',
    categoryGroup: 'Enterprise',
    categories: ['Web Development', 'UI/UX', 'Backend & Database'],
    year: '2024 — 2025',
    role: 'Front-End Developer',
    description: 'Enterprise dashboard dikembangkan untuk monitoring data operasional peralatan industri dan visualisasi informasi bisnis secara real-time. Berfokus pada penyajian data latensi rendah, layout responsif, dan alur pengambilan keputusan yang terukur.',
    techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
    projectUrl: 'https://ptabb.vercel.app/',
    githubUrl: 'Private Enterprise Repository',
    isFeatured: true,
    isContinueBuilding: true,
    progressPercentage: 96,
    developmentStatus: 'Sprint 8 • Production Field Optimization',
    currentSprint: 'Low-latency canvas chart re-render & factory floor tablet UI',
    highlightBadge: 'Enterprise Deployment',
    matchScore: 99,
    contentRating: 'PRODUCTION',
    runtime: '< 250ms Latency',
    accentColor: '#3b82f6',
    streamingRows: ['trending', 'enterprise', 'continue', 'featured'],
    videoPreviewType: 'dashboard',
    metrics: [
      { label: 'Latency Reduction', value: '< 250ms' },
      { label: 'Data Points Monitored', value: '50k+ / day' },
      { label: 'Device Coverage', value: 'Desktop & Field Tablet' }
    ],
    architectureNotes: [
      'Modular dashboard architecture inspired by industrial scada visual standards',
      'High-throughput state hydration and background polling with graceful backoff',
      'Zero layout reflow chart re-rendering with hardware-accelerated canvas',
      'Role-based permission gating for field engineers vs plant managers'
    ],
    screenshots: [
      {
        title: 'Central Industrial Telemetry Hub',
        caption: 'Real-time multi-machine sensor feed visualization with automated anomaly thresholds.',
        tag: 'Telemetry'
      },
      {
        title: 'Shift Operator Analytics Matrix',
        caption: 'Operational duty scheduling, shift handover logs, and uptime KPI dashboards.',
        tag: 'Analytics'
      },
      {
        title: 'Field Tablet Responsive View',
        caption: 'Touch-optimized layout with high-contrast typography designed for plant floor inspections.',
        tag: 'Mobile/Tablet'
      }
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
    id: 'noctra-portfolio',
    number: '05',
    title: 'NOCTRA Portfolio',
    tagline: 'Digital Product Studio & Interactive Streaming Experience',
    category: 'Digital Studio Platform',
    categoryGroup: 'Creative Tech',
    categories: ['Web Development', 'UI/UX', 'Experimental'],
    year: '2026',
    role: 'Creative Technologist & Front-End Engineer',
    description: 'Situs identitas digital studio yang memadukan filosofi desain editorial streaming, interaksi mikro presisi, tipografi neo-grotesk berani, dan performa tinggi tanpa kompromi.',
    techStack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis Scroll'],
    projectUrl: 'https://noctra-dev.vercel.app',
    githubUrl: 'https://github.com/atriadha99/noctra-portfolio',
    isFeatured: true,
    highlightBadge: 'Studio Flagship',
    matchScore: 99,
    contentRating: 'ORIGINAL',
    runtime: '98+ Lighthouse',
    accentColor: '#38bdf8',
    streamingRows: ['trending', 'creative', 'featured'],
    videoPreviewType: 'code',
    metrics: [
      { label: 'Lighthouse Performance', value: '98+' },
      { label: 'Typography Rhythm', value: 'Neo-Grotesk Grid' },
      { label: 'Motion System', value: 'Hardware-Accelerated' }
    ],
    architectureNotes: [
      'Next.js 15+ App Router architecture with streaming SSR and static prerendering',
      'Full Netflix-tier interactive streaming UX with billboard auto-rotate and carousels',
      'Zero layout reflow GPU-composited scale transitions on hover and modals',
      'Local state persistence for user bookmarking and streaming preferences'
    ],
    screenshots: [
      {
        title: 'Cinematic Billboard Spotlight',
        caption: 'Full-bleed hero banner with dynamic backdrop gradients and project controls.',
        tag: 'Streaming Billboard'
      },
      {
        title: 'Horizontal Carousels & Hover Enlarge',
        caption: 'Micro-interaction card expansions with instant action triggers and tech chips.',
        tag: 'Streaming Rows'
      },
      {
        title: 'Immersive Case Study Theatre',
        caption: 'Full-screen project inspection modal with tabbed architecture and technical blueprints.',
        tag: 'Detail Modal'
      }
    ],
    caseStudy: {
      overview: 'NOCTRA merupakan wujud dari identitas ganda sebagai Front-End Developer dan Digital Product Builder yang mengedepankan standar visual studio digital berkelas tinggi.',
      problem: 'Banyak portfolio developer terjebak dalam template generik, efek neon berlebihan, dan kartu yang seragam, gagal mengomunikasikan kedewasaan desain dan kemampuan rekayasa produk yang serius.',
      approach: 'Mengadaptasi estetika streaming platform premium: tipografi display ekspresif, palet monokromatik terkontrol dengan aksen electric blue khas NOCTRA, tata letak asimetris yang dinamis, serta navigasi yang bersih dan fungsional.',
      implementation: 'Dibangun di atas Next.js 15+ App Router dengan TypeScript dan Tailwind CSS. Menggunakan Lenis untuk smooth inertial scrolling, Framer Motion untuk transisi status case study, serta integrasi keyboard shortcuts dan Easter eggs.',
      result: 'Menghadirkan pengalaman studio digital orisinal yang cepat, responsif di seluruh breakpoint, aksesibel, dan secara meyakinkan merepresentasikan kualitas craftsmanship NOCTRA.',
      technologies: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'Howler.js']
    }
  },
  {
    id: 'sabda-alam-web',
    number: '06',
    title: 'Sabda Alam Tourism Portal',
    tagline: 'Eco-Tourism Destination Guide & Booking Directory',
    category: 'Tourism & Culture',
    categoryGroup: 'Education & Platforms',
    categories: ['Web Development', 'UI/UX'],
    year: '2023 — 2024',
    role: 'Front-End Developer',
    description: 'Portal web destinasi wisata alam terpadu yang menampilkan peta atraksi interaktif, estimasi tiket rekreasi dinamis, panduan konservasi alam, dan navigasi fasilitas rekreasi keluarga di Garut.',
    techStack: ['React.js', 'Tailwind CSS', 'Leaflet Maps', 'Vite', 'REST API'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    isFeatured: true,
    highlightBadge: 'Tourism Architecture',
    matchScore: 94,
    contentRating: 'DESTINATION',
    runtime: 'High Accessibility',
    accentColor: '#22c55e',
    streamingRows: ['enterprise', 'featured'],
    videoPreviewType: 'brand',
    metrics: [
      { label: 'Attractions Mapped', value: '20+ Zones' },
      { label: 'Image Caching', value: 'WebP Optimization' },
      { label: 'User Rating', value: '4.8 / 5.0' }
    ],
    architectureNotes: [
      'Interactive vector map pins with elevation data and walking trail estimates',
      'Automated weather widget integration pulling local Garut mountain forecasts',
      'Ticket calculator with family bundle pricing and seasonal discounts',
      'Optimized WebP asset delivery with responsive srcsets for mobile travelers'
    ],
    screenshots: [
      {
        title: 'Interactive Nature Trail Map',
        caption: 'Pinpoint navigation of hot springs, hiking paths, and family villas.',
        tag: 'Trail Map'
      },
      {
        title: 'Visitor Ticket Calculator',
        caption: 'Dynamic weekend vs weekday admission estimator with child rates.',
        tag: 'Booking'
      },
      {
        title: 'High-Res Natural Flora Showcase',
        caption: 'Botanical gallery celebrating regional West Java flora and conservation efforts.',
        tag: 'Gallery'
      }
    ],
    caseStudy: {
      overview: 'Sabda Alam Tourism Web menghubungkan calon wisatawan dengan informasi fasilitas taman rekreasi alam secara transparan dan menarik secara visual.',
      problem: 'Wisatawan sering kesulitan mencari jam buka akurat, harga tiket terkini, serta peta rute di area rekreasi pegunungan yang luas.',
      approach: 'Menciptakan antarmuka visual hijau alami yang memancarkan keteduhan alam, dilengkapi widget perkiraan cuaca dan rute atraksi yang ramah mobile.',
      implementation: 'Frontend dibangun menggunakan React.js dan Tailwind CSS dengan optimasi gambar berformat WebP dan integrasi peta interaktif.',
      result: 'Meningkatkan kesiapan wisatawan sebelum berkunjung dan mempermudah akses informasi fasilitas rekreasi secara instan.',
      technologies: ['React.js', 'Tailwind CSS', 'Leaflet Maps API', 'Vite']
    }
  },
  {
    id: 'portal-ekskul-binusa',
    number: '07',
    title: 'Portal Ekskul SMK Binusa',
    tagline: 'Vocational Extracurricular Information & Quota System',
    category: 'Education Platform',
    categoryGroup: 'Education & Platforms',
    categories: ['Web Development', 'Backend & Database', 'UI/UX'],
    year: '2023 — 2024',
    role: 'Front-End Developer',
    description: 'Sistem informasi terpusat berbasis web untuk manajemen ekstrakurikuler sekolah kejuruan, mengotomasi pendaftaran siswa baru, jadwal latihan berkala, absensi digital, dan rekapitulasi anggota per organisasi.',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    isFeatured: true,
    highlightBadge: 'Institutional SaaS',
    matchScore: 95,
    contentRating: 'SAAS LIVE',
    runtime: '100% Digital',
    accentColor: '#06b6d4',
    streamingRows: ['enterprise', 'featured'],
    videoPreviewType: 'education',
    metrics: [
      { label: 'Adoption Rate', value: '100% Digital' },
      { label: 'Clubs Managed', value: '15+ Organizations' },
      { label: 'Form Errors', value: 'Eliminated to 0' }
    ],
    architectureNotes: [
      'Role-based dashboard for Students, Extracurricular Coaches, and School Admins',
      'Automated seat-allocation engine preventing club oversubscription',
      'Digital QR-code attendance verification for sports and arts rehearsals',
      'One-click semester export reports for the Student Affairs Department'
    ],
    screenshots: [
      {
        title: 'Club Directory & Membership Portal',
        caption: 'Visual overview of 15+ student organizations with schedules and requirements.',
        tag: 'Student View'
      },
      {
        title: 'Coach Attendance & Roster Manager',
        caption: 'Digital weekly attendance log and skill assessment dashboard.',
        tag: 'Instructor View'
      },
      {
        title: 'Institutional Administration Matrix',
        caption: 'School-wide analytics on student participation and quota limits.',
        tag: 'Admin System'
      }
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
    id: 'lendspace-hki',
    number: '08',
    title: 'Lendspace HKI',
    tagline: 'Commercial Asset & Creative Space Leasing Ecosystem',
    category: 'Marketplace Platform',
    categoryGroup: 'Enterprise',
    categories: ['Web Development', 'UI/UX', 'Backend & Database'],
    year: '2024',
    role: 'Lead Front-End & Product Ideator',
    description: 'Platform marketplace penyewaan aset komersial, studio kreatif, dan ruang usaha terintegrasi. Konsep arsitektur dan sistem desain antarmukanya telah resmi terdaftar dan bersertifikasi Hak Kekayaan Intelektual (HKI).',
    techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Figma'],
    projectUrl: 'Coming Soon / HKI Certified',
    githubUrl: 'Private Repository',
    isFeatured: true,
    highlightBadge: '🏆 HKI Registered',
    matchScore: 97,
    contentRating: 'CERTIFIED',
    runtime: 'IP Certified',
    accentColor: '#f59e0b',
    streamingRows: ['trending', 'enterprise'],
    videoPreviewType: 'marketplace',
    metrics: [
      { label: 'Legal Recognition', value: 'Certified HKI' },
      { label: 'Listing Taxonomy', value: 'Dynamic Space Filters' },
      { label: 'Security', value: 'Role-based Permissions' }
    ],
    architectureNotes: [
      'Intellectual Property certified marketplace design language and workflows',
      'Dynamic multi-facet space taxonomy engine with geo-zone proximity filtering',
      'Real-time booking calendar with collision detection against overlapping leases',
      'High-resolution spatial photo galleries with instant thumbnail caching'
    ],
    screenshots: [
      {
        title: 'Curated Creative Hub Catalog',
        caption: 'High-density commercial asset cards with capacity indicators and hourly rates.',
        tag: 'Marketplace'
      },
      {
        title: 'Interactive Space Specification Sheet',
        caption: 'Acoustic specs, power grid capacity, parking allocations, and 360 preview.',
        tag: 'Asset Details'
      },
      {
        title: 'Kemenkumham HKI IP Certificate',
        caption: 'Official intellectual property registration for commercial software architecture.',
        tag: 'Legal Milestone'
      }
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
    number: '09',
    title: 'Noctra Velocitra',
    tagline: 'High-Performance Web Animation & Kinetic Tech Lab',
    category: 'Creative Technology',
    categoryGroup: 'Creative Tech',
    categories: ['Experimental', 'UI/UX', 'Web Development'],
    year: '2024 — 2025',
    role: 'Creative Developer',
    description: 'Laboratorium eksperimen komputasi grafis web, physics-based micro-interactions, dan kinetic typography yang dirancang untuk menguji batas performa browser pada 60fps tanpa memory leak.',
    techStack: ['React.js', 'Vite', 'HTML5 Canvas', 'Web Animations API', 'Tailwind CSS'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    isFeatured: true,
    highlightBadge: 'R&D Laboratory',
    matchScore: 96,
    contentRating: 'LAB 60FPS',
    runtime: '60 FPS Solid',
    accentColor: '#a855f7',
    streamingRows: ['trending', 'creative'],
    videoPreviewType: 'kinetic',
    metrics: [
      { label: 'Target Frame Rate', value: 'Solid 60 FPS' },
      { label: 'Bundle Footprint', value: '< 15 kB primitives' },
      { label: 'GPU Utilization', value: 'Transform3D Compositing' }
    ],
    architectureNotes: [
      'Pure RAF loop with frame delta damping preventing battery drain',
      'Zero layout reflow: transforms strictly composited on GPU layers',
      'Dynamic physics springs with customizable tension and friction coefficients',
      'Fluid cursor magnetic attraction algorithm with boundary detection'
    ],
    screenshots: [
      {
        title: 'Kinetic Typography Distortion Mesh',
        caption: 'Real-time cursor distortion of headline glyphs using canvas particle rasterization.',
        tag: 'Canvas FX'
      },
      {
        title: 'Physics Spring Velocity Tester',
        caption: 'Interactive visual playground for testing damping ratios and inertia curves.',
        tag: 'Spring Engine'
      },
      {
        title: 'Low-End Device 60FPS Telemetry',
        caption: 'Chromium DevTools rendering profile showing zero dropped frames under load.',
        tag: 'Performance'
      }
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
    id: 'yare-coffee',
    number: '10',
    title: 'Yare! Coffee Bintaro',
    tagline: 'Specialty Coffee Brand Experience & Digital Ordering Hub',
    category: 'Brand & Hospitality',
    categoryGroup: 'Brand & Commerce',
    categories: ['Web Development', 'UI/UX'],
    year: '2023 — 2024',
    role: 'Creative Developer & Barista Technologist',
    description: 'Digital presence and ordering system built for an independent specialty coffee shop in Bintaro, embodying tactile café minimalism, seasonal roast tasting notes, and seamless customer engagement.',
    techStack: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    highlightBadge: 'F&B Craft & Tech',
    matchScore: 94,
    contentRating: 'CRAFT',
    runtime: '6+ Yrs Discipline',
    accentColor: '#eab308',
    streamingRows: ['creative'],
    videoPreviewType: 'brand',
    metrics: [
      { label: 'Sensory Alignment', value: 'Specialty Coffee' },
      { label: 'Mobile Traffic', value: '85%+' },
      { label: 'Digital Menu Speed', value: '< 1s load' }
    ],
    architectureNotes: [
      'Bespoke sensory color palette mirroring washed and natural coffee bean processes',
      'Dynamic bean profile notes displaying acidity, body, and tasting notes',
      'Mobile-first responsive ordering workflow optimized for café counter visits',
      'Lightweight bundle footprint under 28 kB for lightning fast cellular connectivity'
    ],
    screenshots: [
      {
        title: 'Single Origin Bean Showcase',
        caption: 'Sensory flavor wheel cards and roast profiles for specialty pour-over origins.',
        tag: 'Sensory Menu'
      },
      {
        title: 'Counter Bar Location & Atmosphere',
        caption: 'Editorial photo documentary highlighting the architectural bar and craft brewing gear.',
        tag: 'Spatial Aesthetic'
      },
      {
        title: 'QR Code Quick Order Interface',
        caption: 'Seamless table-side order sheet optimized for instant mobile browsing.',
        tag: 'Mobile Menu'
      }
    ],
    caseStudy: {
      overview: 'Yare! Coffee Bintaro menghadirkan antarmuka digital yang mencerminkan ketelitian craft barista dan atmosfer ruang seduh nyata ke dalam format web yang intim.',
      problem: 'Menu fisik café sering kali tidak ter-update dengan ketersediaan biji kopi musiman dan menyulitkan pengunjung memahami profile rasa yang kompleks.',
      approach: 'Menerapkan tata letak minimalis Jepang-Skandinavia dengan visualisasi flavor notes yang ramah pemula tanpa menghilangkan kedalaman istilah specialty coffee.',
      implementation: 'Dibangun dengan React.js dan Tailwind CSS, memanfaatkan transisi mikro halus untuk mencerminkan ketenangan pengalaman ngopi langsung di kedai.',
      result: 'Memberikan identitas digital yang solid bagi jenama kedai, meningkatkan pemesanan biji kopi musiman, dan memangkas waktu tunggu antrean di kasir.',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite']
    }
  },
  {
    id: 'temulab-mobile',
    number: '11',
    title: 'TemuLab Android App',
    tagline: 'Interactive Learning & STEM Student Companion',
    category: 'Mobile Application',
    categoryGroup: 'Fintech & Mobile',
    categories: ['Mobile Development', 'UI/UX'],
    year: '2023 — 2024',
    role: 'Android Native Developer',
    description: 'Aplikasi mobile edukasi interaktif untuk siswa kejuruan dan sains, menyediakan akses modul terstruktur, simulasi laboratorium digital, dan kuis pemahaman materi secara praktis di smartphone.',
    techStack: ['Java', 'Android Studio', 'XML Layouts', 'SQLite', 'Firebase'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    highlightBadge: 'Android Native',
    matchScore: 93,
    contentRating: 'NATIVE',
    runtime: 'Offline First',
    accentColor: '#14b8a6',
    streamingRows: ['fintech'],
    videoPreviewType: 'education',
    metrics: [
      { label: 'Platform', value: 'Android 8.0+' },
      { label: 'Storage Mode', value: 'Offline Cache' },
      { label: 'Quiz Engine', value: 'Instant Evaluation' }
    ],
    architectureNotes: [
      'Native Android MVVM architectural pattern for clean separation of concerns',
      'Local SQLite caching allowing students to study without active cellular data',
      'Firebase Authentication and cloud progress sync upon internet reconnection',
      'Low memory footprint optimized for budget entry-level Android devices'
    ],
    screenshots: [
      {
        title: 'Interactive Chapter Roadmaps',
        caption: 'Progress tracking nodes with gamified completion badges.',
        tag: 'Study Tree'
      },
      {
        title: 'Digital Lab Quiz Engine',
        caption: 'Instant feedback quiz system with step-by-step formula breakdowns.',
        tag: 'Evaluation'
      },
      {
        title: 'Offline Notes & Summary Deck',
        caption: 'Downloadable PDF summaries and flashcards saved locally in SQLite.',
        tag: 'Offline Study'
      }
    ],
    caseStudy: {
      overview: 'TemuLab dibangun untuk menyediakan sarana belajar mandiri yang tidak bergantung pada koneksi internet berkecepatan tinggi bagi siswa di daerah dengan jaringan terbatas.',
      problem: 'Banyak materi pembelajaran online dikemas dalam video resolusi tinggi yang menghabiskan kuota internet siswa dan gagal dimuat di perangkat ponsel berspesifikasi rendah.',
      approach: 'Merancang arsitektur mobile native berbasis teks interaktif, ilustrasi vektor ringan, serta modul kuis offline yang otomatis mensinkronkan skor saat ada koneksi.',
      implementation: 'Diprogram secara native menggunakan Java dan Android Studio dengan SQLite untuk penyimpanan data lokal dan Firebase Auth untuk identitas siswa.',
      result: 'Memberikan pengalaman belajar yang stabil dan bebas hambatan, hemat kuota internet, dan dapat dijalankan di ragam perangkat Android dengan lancar.',
      technologies: ['Java', 'Android Studio', 'SQLite', 'Firebase Realtime']
    }
  },
  {
    id: 'ecommerce-platform',
    number: '12',
    title: 'E-Commerce Platform',
    tagline: 'Modern Commercial Retail & High-Speed Checkout Experience',
    category: 'Commercial Commerce',
    categoryGroup: 'Brand & Commerce',
    categories: ['Web Development', 'UI/UX', 'Backend & Database'],
    year: '2024 — 2025',
    role: 'Front-End Engineer',
    description: 'Aplikasi belanja retail modern dengan fokus pada kecepatan browsing katalog, filter atribut instan, keranjang belanja teroptimasi dengan optimistic updates, dan checkout responsif.',
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
    projectUrl: 'https://github.com/atriadha99',
    githubUrl: 'https://github.com/atriadha99',
    highlightBadge: 'Commercial Architecture',
    matchScore: 96,
    contentRating: 'RETAIL',
    runtime: 'Zero-Wait Cart',
    accentColor: '#f97316',
    streamingRows: ['fintech'],
    videoPreviewType: 'commerce',
    metrics: [
      { label: 'Catalog Search', value: 'Instant Filter' },
      { label: 'Cart Latency', value: 'Zero Wait (Optimistic)' },
      { label: 'Mobile Conversion', value: 'Thumb-friendly Flow' }
    ],
    architectureNotes: [
      'Optimistic cart updates with background synchronization',
      'Faceted SKU filtering by size, color, price tier, and instant search index',
      'Slide-over bag drawer with persisted cross-tab session cart',
      'Checkout flow designed for frictionless one-handed mobile purchasing'
    ],
    screenshots: [
      {
        title: 'Editorial Lookbook Catalog',
        caption: 'High-density product card grid with hover detail zoom and rapid add-to-bag.',
        tag: 'Catalog'
      },
      {
        title: 'Slide-Over Instant Bag Drawer',
        caption: 'Real-time cart calculation with free shipping progress bar and tax preview.',
        tag: 'Cart System'
      },
      {
        title: 'Single-Stage Responsive Checkout',
        caption: 'Streamlined checkout form with address auto-complete and multi-gateway preview.',
        tag: 'Checkout'
      }
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
