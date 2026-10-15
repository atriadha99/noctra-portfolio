'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Bell,
  User,
  X,
  Menu,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Bookmark,
  Volume2,
  VolumeX,
  ExternalLink,
  Sparkles,
  Coffee,
  ChevronDown,
  Edit2,
  HelpCircle
} from 'lucide-react';
import { useStreamingStore } from '@/store/streamingStore';

const navItems = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Acara TV & Series', href: '#journey' },
  { name: 'Proyek', href: '#trending' },
  { name: 'Baru & Populer', href: '#continue-building' },
  { name: 'Daftar Saya', href: '#my-list-row' },
  { name: 'Telusuri menurut Keahlian', href: '#catalog' },
];

const studioNotifications = [
  {
    id: 1,
    title: 'KCD Wilayah VIII: Rilis Versi Publik',
    desc: 'Sistem Layanan & Pengaduan Terpadu kini terintegrasi 180+ SMKN se-Jabar.',
    time: 'Hari ini',
    unread: true,
  },
  {
    id: 2,
    title: 'COMPawnion: Fitur Radar Klinik 24 Jam',
    desc: 'Deteksi geolokasi klinik dokter hewan darurat aktif.',
    time: 'Kemarin',
    unread: true,
  },
  {
    id: 3,
    title: '🏆 Sertifikasi HKI Kemenkumham Terdaftar',
    desc: 'Arsitektur marketplace Lendspace resmi bersertifikat HKI RI.',
    time: '2 hari lalu',
    unread: false,
  },
];

export default function StreamingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const {
    searchQuery,
    setSearchQuery,
    bookmarkedIds,
    isMuted,
    toggleMute,
    setSelectedCategory,
    openEasterEgg,
    showToast,
  } = useStreamingStore();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click or escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsNotificationsOpen(false);
        setIsProfileOpen(false);
        setSearchExpanded(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearchToggle = () => {
    setSearchExpanded((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => searchInputRef.current?.focus(), 120);
      }
      return next;
    });
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-400 select-none ${
          isScrolled
            ? 'bg-[#141414] shadow-xl'
            : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 py-3 md:py-4">
          {/* Left: Netflix Red Logo & Navigation Links */}
          <div className="flex items-center gap-6 lg:gap-10">
            {/* Iconic Netflix Red Wordmark */}
            <a
              href="#hero"
              className="flex items-center focus:outline-none group tracking-tighter"
              aria-label="Noctra Home"
            >
              <span className="font-display text-2xl sm:text-3xl md:text-[32px] font-black tracking-[-0.04em] text-[#E50914] drop-shadow-sm uppercase">
                NOCTRA
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-[13px] font-normal">
              {navItems.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`transition-colors duration-200 cursor-pointer ${
                    idx === 0
                      ? 'text-white font-bold'
                      : 'text-[#e5e5e5] hover:text-[#b3b3b3]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Search, Notifications, Avatar Profile */}
          <div className="flex items-center gap-3 sm:gap-5 text-white">
            {/* Expanding Search Bar */}
            <div className="relative flex items-center">
              <AnimatePresence>
                {searchExpanded && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative flex items-center overflow-hidden mr-1"
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Judul, keahlian, teknologi..."
                      className="w-full bg-black/90 border border-white text-white text-xs pl-8 pr-7 py-1.5 focus:outline-none"
                    />
                    <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 pointer-events-none" />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2 text-zinc-400 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={handleSearchToggle}
                aria-label="Cari proyek"
                className="p-1 hover:text-zinc-300 transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Direct Hire / Recruiter Tag */}
            <a
              href="#contact"
              className="hidden xl:inline-block text-[13px] text-[#e5e5e5] hover:text-white transition-colors"
            >
              Rekrut Andika
            </a>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsProfileOpen(false);
                }}
                aria-label="Pemberitahuan"
                className="relative p-1 hover:text-zinc-300 transition-colors"
              >
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#E50914]" />
              </button>

              {/* Notification Popover Dropdown */}
              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-80 sm:w-96 rounded-md bg-[rgba(0,0,0,0.92)] border border-white/15 shadow-2xl p-4 text-xs z-50 divide-y divide-white/10"
                  >
                    <div className="flex items-center justify-between pb-3 text-zinc-300 font-bold text-sm">
                      <span>Pemberitahuan Proyek</span>
                      <span className="text-[11px] text-[#E50914] font-semibold">3 Baru</span>
                    </div>

                    <div className="py-2 space-y-3 max-h-72 overflow-y-auto scrollbar-thin">
                      {studioNotifications.map((notif) => (
                        <div
                          key={notif.id}
                          className="flex items-start gap-3 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#E50914] mt-1.5 shrink-0" />
                          <div className="space-y-0.5">
                            <h4 className="font-semibold text-white text-xs">{notif.title}</h4>
                            <p className="text-[11px] text-zinc-300 font-light leading-relaxed">{notif.desc}</p>
                            <span className="text-[10px] text-zinc-500 font-mono block">{notif.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-center">
                      <a
                        href="#continue-building"
                        onClick={() => setIsNotificationsOpen(false)}
                        className="text-xs text-zinc-400 hover:text-white transition-colors block py-1"
                      >
                        Lihat Semua Rilis & Sprints →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Avatar & Dropdown (Exact Netflix Avatar Box) */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsNotificationsOpen(false);
                }}
                className="flex items-center gap-1.5 group cursor-pointer focus:outline-none"
                aria-label="Menu Akun Profil"
              >
                {/* Classic Netflix Square Avatar */}
                <div className="w-8 h-8 rounded-[4px] bg-[#E50914] flex items-center justify-center overflow-hidden border border-transparent group-hover:border-white transition-all shadow-md">
                  <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center text-white font-bold text-xs select-none">
                    AT
                  </div>
                </div>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${
                    isProfileOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Netflix Dropdown Box */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-64 rounded bg-[#000000]/95 border border-white/15 shadow-2xl p-3 text-xs z-50 text-white space-y-3"
                  >
                    {/* Profile Switcher Row */}
                    <div className="space-y-2 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3 p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-7 h-7 rounded-[4px] bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                          HR
                        </div>
                        <span className="text-zinc-200 hover:underline">Profil Recruiter</span>
                      </div>

                      <div className="flex items-center gap-3 p-1.5 rounded hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="w-7 h-7 rounded-[4px] bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white">
                          TL
                        </div>
                        <span className="text-zinc-200 hover:underline">Profil Tech Lead</span>
                      </div>

                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          openEasterEgg();
                        }}
                        className="w-full flex items-center gap-3 p-1.5 rounded hover:bg-white/10 transition-colors text-left text-amber-400 font-medium"
                      >
                        <div className="w-7 h-7 rounded-[4px] bg-amber-600 flex items-center justify-center text-xs">
                          ☕
                        </div>
                        <span>Profil Barista (Secret Cut)</span>
                      </button>
                    </div>

                    {/* Quick Channels Links */}
                    <div className="space-y-1.5 pb-3 border-b border-white/10 text-zinc-300">
                      <a
                        href="https://github.com/atriadha99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/andika-triadha-844976294/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Linkedin className="w-3.5 h-3.5 text-blue-400" /> LinkedIn
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>

                      <a
                        href="mailto:atriadha.dev@gmail.com"
                        className="flex items-center justify-between p-1.5 rounded hover:bg-white/10 hover:text-white transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-emerald-400" /> Email
                        </span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                      </a>
                    </div>

                    {/* Sound Setting */}
                    <div className="flex items-center justify-between p-1 text-[11px] text-zinc-400">
                      <span>Audio Preview</span>
                      <button
                        onClick={toggleMute}
                        className="px-2 py-0.5 rounded border border-white/20 hover:border-white text-zinc-200"
                      >
                        {isMuted ? 'Muted' : 'Aktif'}
                      </button>
                    </div>

                    {/* Sign out equivalent */}
                    <div className="pt-2 text-center border-t border-white/10">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          showToast('NOCTRA • Portfolio Andika Agung Triadha 2026');
                        }}
                        className="text-zinc-400 hover:text-white text-[11px] hover:underline"
                      >
                        Keluar dari Profil Noctra
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu"
              className="md:hidden p-1 text-white hover:text-zinc-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-[#141414] flex flex-col justify-between px-6 pt-24 pb-8 md:hidden"
          >
            <div className="space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                DAFTAR TAYANGAN NOCTRA
              </span>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="font-display text-2xl font-bold tracking-tight text-white hover:text-[#E50914] text-left transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
              <span>© 2026 NOCTRA • Andika Triadha</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEasterEgg();
                }}
                className="text-amber-400 font-bold"
              >
                ☕ Secret Cut
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
