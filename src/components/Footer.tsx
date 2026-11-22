'use client';

import React from 'react';
import { ArrowUp, Globe, MessageCircle } from 'lucide-react';
import { useStreamingStore } from '@/store/streamingStore';
import { useLanguageStore } from '@/store/languageStore';

export default function Footer() {
  const { openEasterEgg } = useStreamingStore();
  const { language, setLanguage, toggleLanguage, t } = useLanguageStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#141414] text-[#737373] py-10 sm:py-12 px-6 sm:px-10 md:px-16 text-[13px] font-sans">
      <div className="max-w-7xl lg:max-w-[1400px] mx-auto space-y-8">
        {/* Top Contact Question */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span>{t('Ada pertanyaan tentang ketersediaan proyek atau perekrutan? ', 'Questions about project availability or hiring? ')}</span>
            <a
              href="mailto:atriadha.dev@gmail.com"
              className="hover:underline text-zinc-300 font-medium"
            >
              atriadha.dev@gmail.com
            </a>
          </div>

          {/* Task 5: WhatsApp direct pill */}
          <a
            href="https://wa.me/6285156770861?text=Halo%20Andika%2C%20saya%20tertarik%20dengan%20layanan%20front-end%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors text-xs font-medium cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp: +62 851-5677-0861</span>
          </a>
        </div>

        {/* 4 Columns Netflix Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 text-xs leading-relaxed">
          <div className="space-y-3">
            <a href="#hero" className="block hover:underline">
              {t('Beranda Proyek', 'Project Billboard')}
            </a>
            <a href="#trending" className="block hover:underline">
              {t('10 Proyek Teratas', 'Top 10 Ranked')}
            </a>
            <a href="#featured-row" className="block hover:underline">
              {t('Proyek Unggulan', 'Featured Projects')}
            </a>
            <a href="#continue-watching" className="block hover:underline">
              {t('Lanjutkan Menonton', 'Continue Watching')}
            </a>
            <a href="#catalog" className="block hover:underline">
              {t('Katalog Keahlian', 'Skills Catalog')}
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="https://github.com/atriadha99"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              GitHub (atriadha99)
            </a>
            {/* Task 4: Verified LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/andika-triadha-844976294/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              LinkedIn (andika-triadha)
            </a>
            {/* Task 5: WhatsApp link */}
            <a
              href="https://wa.me/6285156770861?text=Halo%20Andika%2C%20saya%20tertarik%20dengan%20layanan%20front-end%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline text-[#25D366]/90 hover:text-[#25D366]"
            >
              WhatsApp (+62 851-5677-0861)
            </a>
            <a href="#services" className="block hover:underline">
              {t('Layanan & Harga', 'Services & Pricing')}
            </a>
            <a href="#journey" className="block hover:underline">
              {t('Timeline Serial (5 Musim)', 'Developer Journey (5 Seasons)')}
            </a>
          </div>

          <div className="space-y-3">
            <a href="#about" className="block hover:underline">
              {t('Profil Kreator (Tentang)', 'Creator Profile (About)')}
            </a>
            <a href="#recommendations" className="block hover:underline">
              {t('Rekomendasi Algoritma', 'Algorithmic Suggestions')}
            </a>
            <a href="#experience" className="block hover:underline">
              {t('Disiplin Barista & F&B', 'Operational Rigor & F&B')}
            </a>
            <a href="#capabilities" className="block hover:underline">
              {t('Matriks Kapabilitas', 'Technical Capabilities')}
            </a>
            <button
              onClick={openEasterEgg}
              className="block text-left text-amber-500/80 hover:underline cursor-pointer"
            >
              ☕ {t('Mode Rahasia Barista (⌘K)', 'Secret Barista Mode (⌘K)')}
            </button>
          </div>

          <div className="space-y-3">
            <a href="#contact" className="block hover:underline text-white font-medium">
              {t('Rekrut & Hubungi Kami', 'Hire & Contact Studio')}
            </a>
            <a
              href="/CV-Andika-Agung-Triadha.pdf"
              download="CV-Andika-Agung-Triadha.pdf"
              className="block hover:underline text-[#ff7875]"
            >
              {t('Unduh CV (PDF)', 'Download Resume (PDF)')}
            </a>
            <span className="block text-zinc-500">
              HKI No. 0002819-A Terdaftar
            </span>
            <span className="block text-zinc-500">
              Lighthouse Score: 98+
            </span>
            <span className="block text-zinc-500">
              Status: {t('Terbuka untuk Tawaran Kerja', 'Open for Opportunities')}
            </span>
          </div>
        </div>

        {/* Netflix Language & Service Code Row */}
        <div className="space-y-4 pt-2">
          {/* Interactive Netflix Language Selector Box */}
          <div className="inline-flex items-center gap-2 p-1 rounded-[4px] border border-[#737373] bg-black/40 text-xs">
            <Globe className="w-3.5 h-3.5 text-zinc-400 ml-1.5" />
            <button
              onClick={() => setLanguage('id')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                language === 'id' ? 'bg-[#E50914] text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Bahasa Indonesia (ID)
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-[2px] transition-colors cursor-pointer ${
                language === 'en' ? 'bg-[#E50914] text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              English (EN)
            </button>
          </div>

          {/* Service Code Button */}
          <div>
            <button
              onClick={openEasterEgg}
              className="px-2 py-1 border border-[#737373] text-[#737373] hover:text-white hover:border-white transition-colors text-[11px] font-mono"
            >
              Kode Layanan: 2026-NOCTRA-AT
            </button>
          </div>

          {/* Copyright notice */}
          <div className="text-[11px] text-zinc-500 flex items-center justify-between pt-2">
            <span>Noctra Indonesia • Andika Agung Triadha (Front-End &amp; UI Architect)</span>
            <button
              onClick={scrollToTop}
              className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>{t('Ke Atas', 'Back to Top')}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
