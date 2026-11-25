'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle2, AlertCircle, Download, MessageCircle } from 'lucide-react';
import { useLanguageStore } from '@/store/languageStore';
import { useStreamingStore } from '@/store/streamingStore';
import { supabase } from '@/lib/supabase';

export default function ContactSection() {
  const { language, t } = useLanguageStore();
  const { selectedService, setSelectedService } = useStreamingStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'Landing page (mulai Rp1.500.000)',
    message: '',
    website: '',
  });

  // Sync when selectedService in store updates from the Services section
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === 'submitting') return;

    // Honeypot anti-spam: if hidden field is filled by a bot, abort silently
    if (formData.website) {
      return;
    }

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage(t('Mohon cantumkan nama Anda.', 'Please provide your name.'));
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage(t('Mohon masukkan alamat email yang valid.', 'Please enter a valid email address.'));
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage(t('Mohon tulis pesan atau deskripsi proyek Anda.', 'Please describe your project or inquiry.'));
      return;
    }

    if (!supabase) {
      setStatus('error');
      setErrorMessage(t('Gagal mengirim, coba lagi.', 'Failed to send, please try again.'));
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_messages').insert({
        nama: formData.name.trim(),
        email: formData.email.trim(),
        jenis_layanan: formData.service ? formData.service : null,
        pesan: formData.message.trim(),
      });

      if (error) {
        setStatus('error');
        setErrorMessage(t('Gagal mengirim, coba lagi.', 'Failed to send, please try again.'));
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        service: selectedService || 'Landing page (mulai Rp1.500.000)',
        message: '',
        website: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage(t('Gagal mengirim, coba lagi.', 'Failed to send, please try again.'));
    }
  };

  return (
    <section id="contact" className="pt-12 pb-10 md:pt-16 md:pb-12 px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto border-t border-[#2f2f2f]/60">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#E50914] mb-8 uppercase">
        <span className="w-1.5 h-3 bg-[#E50914] rounded-sm"></span>
        <span>{t('HUBUNGI KREATOR // CASTING & KOLABORASI', 'CONTACT CREATOR // CASTING & COLLABORATION')}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Bold Headline & Direct Channels */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
              {t('SIAP MEMULAI', 'READY TO SHIP')}{' '}
              <br />
              <span className="text-[#E50914]">{t('PROYEK BERIKUTNYA?', 'YOUR NEXT PROJECT?')}</span>
            </h2>

            <p className="text-base md:text-lg text-[#bcbcbc] font-normal leading-relaxed max-w-lg">
              {t(
                'Punya ide produk digital, aplikasi mobile, atau arsitektur web modern yang ingin direalisasikan dengan standar sinematik tinggi?',
                'Have an idea for a web platform, mobile application, or high-performance frontend architecture you want to bring to life?'
              )}
            </p>
            <p className="text-sm text-[#808080] mt-3 font-normal leading-relaxed max-w-lg">
              {t(
                'Terbuka untuk kolaborasi full-time, kontrak proyek, atau konsultasi front-end engineering dan UI engineering.',
                'Open for full-time frontend roles, freelance contracts, and software engineering consultations.'
              )}
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08] text-xs">
            {/* Task 1: Download CV Button in Contact Section */}
            <a
              href="/CV-Andika-Agung-Triadha.pdf"
              download="CV-Andika-Agung-Triadha.pdf"
              className="flex items-center justify-between p-4 rounded-[6px] border border-[#E50914]/40 bg-[#E50914]/10 hover:border-[#E50914] hover:bg-[#E50914]/20 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#E50914] flex items-center justify-center text-white">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#ff7875] block text-[10px] uppercase font-bold tracking-wider">
                    {t('RESUME & CV RESMI', 'OFFICIAL RESUME / CV')}
                  </span>
                  <span className="text-white font-bold group-hover:text-[#ff7875] transition-colors">
                    {t('Download CV-Andika-Agung-Triadha.pdf', 'Download CV-Andika-Agung-Triadha.pdf')}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#ff7875] group-hover:text-white transition-colors" />
            </a>

            {/* Task 5: WhatsApp Button */}
            <a
              href="https://wa.me/6285156770861?text=Halo%20Andika%2C%20saya%20tertarik%20dengan%20layanan%20front-end%20Anda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#25D366]/60 hover:bg-[#202020] transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">
                    {t('WHATSAPP LANGSUNG', 'DIRECT WHATSAPP')}
                  </span>
                  <span className="text-white font-medium group-hover:text-[#25D366] transition-colors">
                    +62 851-5677-0861
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
            </a>

            <a
              href="mailto:atriadha.dev@gmail.com"
              className="flex items-center justify-between p-4 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/60 hover:bg-[#202020] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">
                    {t('EMAIL LANGSUNG', 'DIRECT EMAIL')}
                  </span>
                  <span className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                    atriadha.dev@gmail.com
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/atriadha99"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/60 hover:bg-[#202020] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-white/10 flex items-center justify-center text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">
                    {t('REPOSITORI KODE', 'CODE REPOSITORIES')}
                  </span>
                  <span className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                    github.com/atriadha99
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
            </a>

            {/* Task 4: Verified LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/andika-triadha-844976294/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/60 hover:bg-[#202020] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5]">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">
                    {t('JARINGAN PROFESIONAL', 'PROFESSIONAL NETWORK')}
                  </span>
                  <span className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                    linkedin.com/in/andika-triadha-844976294
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Clean Netflix Red Action Form */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-[8px] border border-white/[0.08] bg-[#181818] shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-1">
              {t('Kirim Pesan / Tawaran Proyek', 'Send Message / Project Inquiry')}
            </h3>
            <p className="text-xs text-[#808080] mb-6">
              {t('Respon biasa dikirimkan dalam 24–48 jam kerja.', 'Typically responds within 24–48 business hours.')}
            </p>

            {status === 'success' && (
              <div className="p-4 rounded-[4px] bg-[#46d369]/10 border border-[#46d369]/30 text-[#46d369] text-xs font-semibold flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>{t('Pesan terkirim, terima kasih!', 'Message sent, thank you!')}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-[4px] bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-xs font-semibold flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot anti-spam field */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="inquiry-website">Website</label>
                <input
                  id="inquiry-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  {t('NAMA ANDA *', 'YOUR NAME *')}
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder={t('Nama Anda', 'Your Name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  {t('EMAIL *', 'EMAIL ADDRESS *')}
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiry-service" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  {t('JENIS LAYANAN / KOLABORASI', 'SERVICE / COLLABORATION TYPE')}
                </label>
                <select
                  id="inquiry-service"
                  value={formData.service}
                  onChange={(e) => {
                    setFormData({ ...formData, service: e.target.value });
                    setSelectedService(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                >
                  <option value="Landing page (mulai Rp1.500.000)">Landing page — mulai Rp1.500.000</option>
                  <option value="Company profile (mulai Rp2.500.000)">Company profile — mulai Rp2.500.000</option>
                  <option value="Katalog UMKM + order WhatsApp (mulai Rp2.500.000)">Katalog UMKM + order WhatsApp — mulai Rp2.500.000</option>
                  <option value="Dashboard admin (mulai Rp4.000.000)">Dashboard admin — mulai Rp4.000.000</option>
                  <option value="Sistem PPDB / pendaftaran (mulai Rp5.000.000)">Sistem PPDB / pendaftaran — mulai Rp5.000.000</option>
                  <option value="Sistem pengaduan terpadu (mulai Rp7.500.000+)">Sistem pengaduan terpadu — mulai Rp7.500.000+</option>
                  <option value="Aplikasi Mobile Android Native / Hybrid">Aplikasi Mobile Android Native / Hybrid</option>
                  <option value="Full-Stack Web App / Startup MVP">Full-Stack Web App / Startup MVP</option>
                  <option value="Konsultasi & Rekrutmen Front-End">Konsultasi / Rekrutmen Tim Tech</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  {t('DETAIL KEBUTUHAN *', 'PROJECT BRIEF / MESSAGE *')}
                </label>
                <textarea
                  id="inquiry-message"
                  required
                  rows={4}
                  placeholder={t(
                    'Ceritakan gambaran singkat proyek, timeline, atau ekspektasi Anda...',
                    'Briefly describe your project, timeline, or requirements...'
                  )}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full mt-2 py-3.5 px-6 rounded-[4px] bg-[#E50914] hover:bg-[#b80710] text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-[#E50914]/20 cursor-pointer"
              >
                <span>{status === 'submitting' ? t('MENGIRIMKAN...', 'SENDING...') : t('KIRIMKAN PESAN SEKARANG', 'SEND INQUIRY NOW')}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
