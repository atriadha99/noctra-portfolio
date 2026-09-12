export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'engineering' | 'operations';
  description: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: '2024 — 2025',
    role: 'Front-End Developer',
    organization: 'E-Commerce Platform & Studio Projects',
    location: 'Bandung / Remote',
    type: 'engineering',
    description: 'Mengembangkan arsitektur antarmuka aplikasi web komersial dan sistem dashboard operasional dengan fokus pada performa, desain komponen modular, dan integrasi API skala produksi.',
    highlights: [
      'Implementasi antarmuka performa tinggi dengan React.js, Next.js, dan Tailwind CSS',
      'Integrasi autentikasi, basis data Supabase PostgreSQL, dan sistem state interaktif',
      'Optimasi responsive layout dan UX conversion flow untuk ribuan kunjungan pengguna'
    ]
  },
  {
    period: '2025 — 2026',
    role: 'Barista & Operational Lead',
    organization: 'Riels Coffee',
    location: 'Bandung, Indonesia',
    type: 'operations',
    description: 'Menjalankan standar operasional bar kopi specialty, manajemen workflow jam sibuk, kalibrasi rasa harian, dan komunikasi langsung dengan beragam segmen pelanggan.',
    highlights: [
      'Presisi kalibrasi espresso dan konsistensi profil seduh kopi manual',
      'Eksekusi alur kerja berkecepatan tinggi dalam lingkungan pelayanan bertekanan tinggi',
      'Manajemen relasi pelanggan dan perumusan solusi cepat atas kendala operasional bar'
    ]
  },
  {
    period: '2023',
    role: 'Barista',
    organization: 'Ayya Coffee and Eatery',
    location: 'Bandung, Indonesia',
    type: 'operations',
    description: 'Mengelola operasional workstation minuman, penyusunan mise-en-place, dan menjaga ritme kerja tim bar agar tetap efisien selama puncak kunjungan tamu.',
    highlights: [
      'Disiplin penyiapan bahan baku, sanitasi stasiun kerja, dan kontrol kualitas saji',
      'Kolaborasi erat dengan tim dapur dan service untuk menjamin pengalaman pelanggan maksimal'
    ]
  },
  {
    period: '2022 — 2023',
    role: 'Barista',
    organization: 'Djaman Coffee',
    location: 'Bandung, Indonesia',
    type: 'operations',
    description: 'Bertanggung jawab atas operasional bar espresso harian, pencatatan transaksi point-of-sale, dan inventaris bahan baku mingguan.',
    highlights: [
      'Penerapan ketelitian inventarisasi stok harian untuk meminimalisir waste',
      'Peningkatan retensi pelanggan melalui komunikasi yang ramah, hangat, dan informatif'
    ]
  },
  {
    period: '2020 — 2022',
    role: 'Barista',
    organization: 'Ideologi Kopi',
    location: 'Bandung, Indonesia',
    type: 'operations',
    description: 'Memperdalam fondasi teknik ekstraksi kopi, pelayanan pelanggan personal, dan disiplin jam kerja di tengah tantangan masa transisi industri hospitality.',
    highlights: [
      'Penguasaan manual brew extraction variables (rasio, temperatur, grind size, pouring technique)',
      'Manajemen ritme order mandiri saat shift solo bar'
    ]
  },
  {
    period: '2018 — 2020',
    role: 'Barista & Craft Apprentice',
    organization: 'Various Specialty Coffee Shops',
    location: 'Bandung, Indonesia',
    type: 'operations',
    description: 'Awal mula pembelajaran etos kerja profesional, pemahaman dasar customer satisfaction, ketangguhan fisik, dan perhatian mendalam pada detail mikro.',
    highlights: [
      'Membangun mentalitas kebiasaan bersih, teratur, dan tanggap sebelum diminta',
      'Menanamkan fondasi dedikasi bahwa keunggulan lahir dari repetisi dan kedisiplinan harian'
    ]
  }
];

export const educationData = [
  {
    institution: 'Universitas Pamulang',
    degree: 'Bachelor of Informatics Engineering (S1 Teknik Informatika)',
    period: '2023 — Present',
    status: 'Active Student',
    gpa: '3.20 / 4.00',
    notes: 'Fokus studi: Software Engineering, Data Structures, Web Systems, Database Architecture.'
  },
  {
    institution: 'SMK Negeri 12 Bandung',
    degree: 'Aircraft Structure Construction (Konstruksi Rangka Pesawat Udara)',
    period: 'Graduated 2017',
    status: 'Vocational Diploma',
    gpa: null,
    notes: 'Pendidikan vokasi ketat dengan standar kedirgantaraan internasional: toleransi presisi milimeter, disiplin struktural, dan kepatuhan prosedur keselamatan.'
  }
];
