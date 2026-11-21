'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Zap, ShoppingBag, LayoutDashboard, UserCheck, LifeBuoy } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';
import { useStreamingStore } from '@/store/streamingStore';

interface ServiceTier {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  priceEn: string;
  badge: string;
  badgeEn: string;
  icon: React.ElementType;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  serviceValue: string;
}

const serviceTiers: ServiceTier[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    nameEn: 'Landing Page',
    price: 'Mulai Rp1.500.000',
    priceEn: 'Starts at IDR 1,500,000',
    badge: 'Cepat & Konversi Tinggi',
    badgeEn: 'Fast & High-Converting',
    icon: Zap,
    description: 'Halaman promosi modern satu halaman dengan animasi halus, optimasi SEO, dan alur konversi penjualan yang tajam.',
    descriptionEn: 'Modern single-page promotional experience with smooth micro-interactions, SEO optimization, and high-conversion copy flow.',
    features: [
      'Desain kustom responsif mobile-first',
      'Animasi transisi halus (Framer Motion)',
      'Integrasi tombol order WhatsApp & form',
      'Optimasi kecepatan loading 95+ Lighthouse',
      'Setup domain & deployment Vercel/Cloudflare'
    ],
    featuresEn: [
      'Custom responsive mobile-first design',
      'Smooth micro-interactions (Framer Motion)',
      'Direct WhatsApp order buttons & web form',
      '95+ Lighthouse load speed optimization',
      'Domain setup & high-availability deployment'
    ],
    serviceValue: 'Landing page (mulai Rp1.500.000)',
  },
  {
    id: 'company-profile',
    name: 'Company Profile',
    nameEn: 'Company Profile',
    price: 'Mulai Rp2.500.000',
    priceEn: 'Starts at IDR 2,500,000',
    badge: 'Kredibilitas Bisnis',
    badgeEn: 'Corporate Identity',
    icon: Layers,
    description: 'Website profil perusahaan profesional multi-halaman untuk memperkuat reputasi, portofolio layanan, dan kepercayaan klien.',
    descriptionEn: 'Multi-page corporate website engineered to present your organization, service offerings, and enterprise credibility.',
    features: [
      'Struktur multi-halaman (Tentang, Layanan, Kontak)',
      'Desain editorial berkelas studio premium',
      'Integrasi peta lokasi interaktif & media gallery',
      'SEO on-page terstruktur untuk pencarian Google',
      'Dukungan multi-bahasa jika dibutuhkan'
    ],
    featuresEn: [
      'Multi-page structure (About, Services, Team, Contact)',
      'Premium editorial design aesthetic',
      'Interactive maps & rich media galleries',
      'Structured on-page SEO for Google indexing',
      'Multi-language bilingual readiness'
    ],
    serviceValue: 'Company profile (mulai Rp2.500.000)',
  },
  {
    id: 'katalog-umkm',
    name: 'Katalog UMKM + Order WhatsApp',
    nameEn: 'SME Catalog + WhatsApp Checkout',
    price: 'Mulai Rp2.500.000',
    priceEn: 'Starts at IDR 2,500,000',
    badge: 'Penjualan Praktis',
    badgeEn: 'Direct Sales',
    icon: ShoppingBag,
    description: 'Katalog produk digital interaktif dengan fitur keranjang belanja yang langsung mengirimkan rincian pesanan ke WhatsApp admin.',
    descriptionEn: 'Interactive digital product storefront with cart checkout compiling structured order receipts directly to WhatsApp.',
    features: [
      'Katalog produk terstruktur dengan kategori & filter',
      'Keranjang belanja instan tanpa login rumit',
      'Format pesan pesanan rapi otomatis ke WhatsApp',
      'Bebas potongan komisi marketplace',
      'Mudah diupdate lewat Google Sheets / Dashboard'
    ],
    featuresEn: [
      'Categorized SKU catalog with dynamic filters',
      'Instant frictionless shopping bag',
      'Formatted automated checkout receipt to WhatsApp',
      'Zero 0% marketplace commission cuts',
      'Easy inventory updates via Sheets or simple CMS'
    ],
    serviceValue: 'Katalog UMKM + order WhatsApp (mulai Rp2.500.000)',
  },
  {
    id: 'dashboard-admin',
    name: 'Dashboard Admin',
    nameEn: 'Admin Dashboard',
    price: 'Mulai Rp4.000.000',
    priceEn: 'Starts at IDR 4,000,000',
    badge: 'Operasional & Analitik',
    badgeEn: 'Operations & Telemetry',
    icon: LayoutDashboard,
    description: 'Sistem dashboard manajemen internal untuk monitoring data real-time, manajemen armada/stok, dan reporting efisien.',
    descriptionEn: 'Internal business intelligence and operations console for real-time telemetry, fleet/inventory audits, and rapid reporting.',
    features: [
      'Visualisasi grafik interaktif & KPI cards',
      'Manajemen data CRUD lengkap (Tambah/Ubah/Hapus)',
      'Autentikasi role-based (Admin, Manajer, Staf)',
      'Export data ke format Excel / CSV / PDF',
      'Arsitektur cloud database (Neon / Supabase PostgreSQL)'
    ],
    featuresEn: [
      'Interactive analytics charts & real-time KPI tiles',
      'Complete CRUD records management',
      'Role-based permission gating (Admin, Manager, Staff)',
      'One-click Excel / CSV / PDF report exports',
      'Resilient relational cloud database (PostgreSQL)'
    ],
    serviceValue: 'Dashboard admin (mulai Rp4.000.000)',
  },
  {
    id: 'sistem-ppdb',
    name: 'Sistem PPDB / Pendaftaran',
    nameEn: 'Enrollment & Registration System',
    price: 'Mulai Rp5.000.000',
    priceEn: 'Starts at IDR 5,000,000',
    badge: 'Layanan Institusi',
    badgeEn: 'Institutional Portal',
    icon: UserCheck,
    description: 'Portal penerimaan siswa/peserta baru terstruktur untuk sekolah, yayasan, atau institusi pelatihan dengan alur verifikasi berkas.',
    descriptionEn: 'Centralized enrollment and application portal for schools and training institutes with document validation workflows.',
    features: [
      'Formulir pendaftaran multi-tahap yang mudah diisi',
      'Upload & pratinjau berkas digital (Ijazah, KK, Foto)',
      'Manajemen kuota pendaftar dan nomor registrasi otomatis',
      'Panel seleksi verifikator untuk panitia penerimaan',
      'Pengecekan status kelulusan peserta secara mandiri'
    ],
    featuresEn: [
      'Multi-step guided applicant intake form',
      'Digital document upload & thumbnail preview',
      'Automated seat allocation & unique registration IDs',
      'Inspector review board for admissions committee',
      'Self-service applicant status tracking portal'
    ],
    serviceValue: 'Sistem PPDB / pendaftaran (mulai Rp5.000.000)',
  },
  {
    id: 'sistem-pengaduan',
    name: 'Sistem Pengaduan Terpadu',
    nameEn: 'Integrated Grievance System',
    price: 'Mulai Rp7.500.000+',
    priceEn: 'Starts at IDR 7,500,000+',
    badge: 'GovTech & Enterprise',
    badgeEn: 'GovTech & Enterprise',
    icon: LifeBuoy,
    description: 'Platform tata kelola aduan publik terintegrasi seperti KCD Wilayah VIII, lengkap dengan tiket unik, SLA tracking, dan dispatch analitik.',
    descriptionEn: 'Flagship enterprise complaint management platform with ticket hashes, SLA resolution timers, and multi-department routing.',
    features: [
      'Pelaporan publik berbasis nomor tiket unik terenkripsi',
      'Tracking kronologis progres penanganan transparan',
      'Dashboard dispatcher untuk eskalasi & SLA penugasan',
      'Arsip digital berkas aduan tanpa ketergantungan kertas',
      'Notifikasi webhook email/SMS status pengaduan'
    ],
    featuresEn: [
      'Citizen grievance filing with encrypted ticket hashes',
      'Transparent chronological resolution timeline',
      'Dispatcher incident board with SLA escalation timers',
      'Paperless audit archive compliant with standards',
      'Automated status updates dispatch via Webhook'
    ],
    serviceValue: 'Sistem pengaduan terpadu (mulai Rp7.500.000+)',
  },
];

export default function ClientServices() {
  const { language, t } = useLanguageStore();
  const { setSelectedService } = useStreamingStore();

  const handleSelectService = (serviceValue: string) => {
    setSelectedService(serviceValue);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto border-t border-[#2f2f2f]/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#E50914] mb-3 uppercase">
            <span className="w-1.5 h-3 bg-[#E50914] rounded-sm"></span>
            <span>{t('LAYANAN & ESTIMASI BIAYA // UNTUK KLIEN & REKRUTER', 'SERVICES & STARTING RATES // FOR CLIENTS & BUSINESS')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t('LAYANAN & HARGA MULAI', 'SERVICES & PRICING TIERS')}
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#a3a3a3] max-w-lg font-normal leading-relaxed">
          {t(
            'Solusi arsitektur web modern, dashboard industri, dan platform pendaftaran dengan standar pengerjaan rapi dan transparan.',
            'Production-grade web solutions, operations dashboards, and application systems with transparent pricing and clean delivery.'
          )}
        </p>
      </div>

      {/* Services Grid (6 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {serviceTiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.id}
              className="p-6 sm:p-7 rounded-[8px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/60 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="w-10 h-10 rounded-[4px] bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center text-[#E50914] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                    {language === 'en' ? tier.badgeEn : tier.badge}
                  </span>
                </div>

                {/* Service Name & Price */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#E50914] transition-colors">
                    {language === 'en' ? tier.nameEn : tier.name}
                  </h3>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-white font-display">
                      {language === 'en' ? tier.priceEn : tier.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#a3a3a3] leading-relaxed font-normal min-h-[36px]">
                  {language === 'en' ? tier.descriptionEn : tier.description}
                </p>

                {/* Features List */}
                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  {(language === 'en' ? tier.featuresEn : tier.features).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#46d369] shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-white/[0.08]">
                <button
                  onClick={() => handleSelectService(tier.serviceValue)}
                  className="w-full py-2.5 px-4 rounded-[4px] bg-[#222222] group-hover:bg-[#E50914] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <span>{t('Pilih Layanan Ini', 'Select This Service')}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Owner Footnote Note */}
      <div className="mt-8 p-4 sm:p-5 rounded-[6px] border border-white/10 bg-[#161616] flex items-center gap-3 text-xs text-zinc-400">
        <ShieldCheck className="w-5 h-5 text-[#E50914] shrink-0" />
        <p className="leading-relaxed">
          <strong className="text-white font-semibold">
            {t('Catatan Transparansi Biaya: ', 'Pricing Transparency Note: ')}
          </strong>
          {t(
            'Harga bisa berubah berdasarkan kompleksitas, revisi, integrasi, hosting, dan maintenance.',
            'Prices may vary based on complexity, revisions, third-party integrations, hosting, and ongoing maintenance.'
          )}
        </p>
      </div>
    </section>
  );
}
