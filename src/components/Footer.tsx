'use client';

import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { useStreamingStore } from '@/store/streamingStore';

export default function Footer() {
  const { openEasterEgg } = useStreamingStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#141414] text-[#737373] py-16 px-4 sm:px-8 md:px-12 text-[13px] font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Contact Question */}
        <div>
          <span>Ada pertanyaan tentang ketersediaan proyek atau perekrutan? </span>
          <a
            href="mailto:atriadha.dev@gmail.com"
            className="hover:underline text-zinc-300"
          >
            Hubungi: atriadha.dev@gmail.com
          </a>
        </div>

        {/* 4 Columns Netflix Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-xs leading-relaxed">
          <div className="space-y-3">
            <a href="#hero" className="block hover:underline">
              Beranda Proyek
            </a>
            <a href="#trending" className="block hover:underline">
              10 Proyek Teratas
            </a>
            <a href="#continue-building" className="block hover:underline">
              Sprints &amp; Pengerjaan
            </a>
            <a href="#catalog" className="block hover:underline">
              Katalog Keahlian
            </a>
          </div>

          <div className="space-y-3">
            <a
              href="https://github.com/atriadha99"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Pusat Repositori (GitHub)
            </a>
            <a
              href="https://www.linkedin.com/in/andika-triadha-844976294/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:underline"
            >
              Jaringan Profesional (LinkedIn)
            </a>
            <a href="#journey" className="block hover:underline">
              Timeline Serial (5 Musim)
            </a>
            <a href="#about" className="block hover:underline">
              Profil Sutradara (Tentang)
            </a>
          </div>

          <div className="space-y-3">
            <a href="#recommendations" className="block hover:underline">
              Rekomendasi Algoritma
            </a>
            <a href="#experience" className="block hover:underline">
              Disiplin Barista &amp; F&amp;B
            </a>
            <a href="#capabilities" className="block hover:underline">
              Matriks Kapabilitas
            </a>
            <button
              onClick={openEasterEgg}
              className="block text-left text-amber-500/80 hover:underline cursor-pointer"
            >
              ☕ Mode Rahasia Barista (⌘K)
            </button>
          </div>

          <div className="space-y-3">
            <a href="#contact" className="block hover:underline">
              Rekrut &amp; Hubungi Kami
            </a>
            <span className="block text-zinc-500">
              HKI No. 0002819-A Terdaftar
            </span>
            <span className="block text-zinc-500">
              Lighthouse Score: 98+
            </span>
            <span className="block text-zinc-500">
              Status: Terbuka untuk Tawaran Kerja
            </span>
          </div>
        </div>

        {/* Netflix Language & Service Code Row */}
        <div className="space-y-4 pt-2">
          {/* Language Selector Box like Netflix */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] border border-[#737373] text-zinc-300 text-xs">
            <Globe className="w-3.5 h-3.5" />
            <span>Bahasa Indonesia (ID)</span>
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
              <span>Ke Atas</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
