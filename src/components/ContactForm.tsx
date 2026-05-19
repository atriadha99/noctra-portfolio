'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Hapus pesan error secara otomatis saat user mulai mengetik
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    // Validasi form
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      
      try {
        // Mengirim data menggunakan Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO: Ganti dengan Access Key Anda
            name: formData.name,
            email: formData.email,
            message: formData.message,
          })
        });

        const result = await response.json();
        if (result.success) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
          setErrors(prev => ({ ...prev, message: 'Gagal mengirim pesan. Coba lagi nanti.' }));
        }
      } catch (error) {
        setErrors(prev => ({ ...prev, message: 'Terjadi kesalahan jaringan.' }));
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
      <h3 className="text-2xl md:text-3xl font-mono mb-6 text-white text-center">Let's Connect</h3>
      
      {submitSuccess && (
        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 mb-6 text-center animate-fade-in text-sm font-mono">
          Pesan berhasil terkirim! Saya akan segera menghubungi Anda.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-mono text-white/60 mb-2">Nama</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Anda"
            className={`w-full px-4 py-3 bg-black/50 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-lg focus:outline-none text-white transition-colors`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-mono text-white/60 mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="nama@email.com"
            className={`w-full px-4 py-3 bg-black/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-lg focus:outline-none text-white transition-colors`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mono text-white/60 mb-2">Pesan</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tulis pesan Anda di sini..."
            className={`w-full px-4 py-3 bg-black/50 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-white/30'} rounded-lg focus:outline-none text-white transition-colors resize-none`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full py-4 px-6 bg-white text-black font-mono font-bold rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-4">
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </div>
  );
}