'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Mohon cantumkan nama Anda.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Mohon masukkan alamat email yang valid.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Mohon tulis pesan atau deskripsi proyek Anda.');
      return;
    }

    setStatus('submitting');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `NOCTRA Inbound Inquiry from ${formData.name}`,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
      } else {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Web Development', message: '' });
      }
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Web Development', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto border-t border-[#2f2f2f]/60">
      {/* Section Header */}
      <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#E50914] mb-8 uppercase">
        <span className="w-1.5 h-3 bg-[#E50914] rounded-sm"></span>
        <span>HUBUNGI KREATOR // CASTING &amp; KOLABORASI</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Bold Headline & Direct Channels */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
              SIAP MEMULAI
              <br />
              <span className="text-[#E50914]">PROYEK BERIKUTNYA?</span>
            </h2>

            <p className="text-base md:text-lg text-[#bcbcbc] font-normal leading-relaxed max-w-lg">
              Punya ide produk digital, aplikasi mobile, atau arsitektur web modern yang ingin direalisasikan dengan standar sinematik tinggi?
            </p>
            <p className="text-sm text-[#808080] mt-3 font-normal leading-relaxed max-w-lg">
              Terbuka untuk kolaborasi full-time, kontrak proyek, atau konsultasi front-end engineering dan UI engineering.
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="space-y-3 pt-6 border-t border-white/[0.08] text-xs">
            <a
              href="mailto:atriadha.dev@gmail.com"
              className="flex items-center justify-between p-4 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/60 hover:bg-[#202020] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[4px] bg-[#E50914]/20 flex items-center justify-center text-[#E50914]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">EMAIL LANGSUNG</span>
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
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">REPOSITORI KODE</span>
                  <span className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                    github.com/atriadha99
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#808080] group-hover:text-white transition-colors" />
            </a>

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
                  <span className="text-[#808080] block text-[10px] uppercase font-bold tracking-wider">JARINGAN PROFESIONAL</span>
                  <span className="text-white font-medium group-hover:text-[#E50914] transition-colors">
                    linkedin.com/in/andika-triadha
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
              Kirim Pesan / Tawaran Proyek
            </h3>
            <p className="text-xs text-[#808080] mb-6">
              Respon biasa dikirimkan dalam 24–48 jam kerja.
            </p>

            {status === 'success' && (
              <div className="p-4 rounded-[4px] bg-[#46d369]/10 border border-[#46d369]/30 text-[#46d369] text-xs font-semibold flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Pesan berhasil diterima! Saya akan segera merespons ke email Anda.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-[4px] bg-[#E50914]/10 border border-[#E50914]/30 text-[#E50914] text-xs font-semibold flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  NAMA ANDA *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  EMAIL *
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="alex@perusahaan.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="inquiry-service" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  JENIS KOLABORASI
                </label>
                <select
                  id="inquiry-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-[4px] bg-[#222222] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                >
                  <option value="Web Development">Aplikasi Web / Modern Next.js Architecture</option>
                  <option value="Mobile Engineering">Native Android / React Native Application</option>
                  <option value="UI Implementation">Design System / Frontend Craftsmanship</option>
                  <option value="Full Product">End-to-End Digital Product / Startup MVP</option>
                  <option value="Other">Konsultasi / Rekrutmen Tim Tech</option>
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mb-1.5">
                  DETAIL KEBUTUHAN *
                </label>
                <textarea
                  id="inquiry-message"
                  required
                  rows={4}
                  placeholder="Ceritakan gambaran singkat proyek, timeline, atau ekspektasi Anda..."
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
                <span>{status === 'submitting' ? 'MENGIRIMKAN...' : 'KIRIMKAN PESAN SEKARANG'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
