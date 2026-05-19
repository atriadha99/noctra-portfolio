'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with email API later)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono mb-4">Let's Connect</h2>
          <p className="text-white/50">
            Ready to create something unforgettable? Let's talk.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <a href="mailto:hello@noctra.com" className="block text-white/60 hover:text-white transition">
                  ✉️ hello@noctra.com
                </a>
                <a href="#" className="block text-white/60 hover:text-white transition">
                  📱 +62 812 3456 7890
                </a>
                <div className="pt-4 flex gap-4">
                  <a href="#" className="text-white/40 hover:text-white transition">GitHub</a>
                  <a href="#" className="text-white/40 hover:text-white transition">LinkedIn</a>
                  <a href="#" className="text-white/40 hover:text-white transition">Instagram</a>
                  <a href="#" className="text-white/40 hover:text-white transition">Spotify</a>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-mono text-lg mb-2">Currently</h3>
              <p className="text-sm text-white/60">
                🎧 Coding with rainy playlists<br />
                ☕ Drinking iced coffee<br />
                📍 Based in Bandung<br />
                🚀 Available for freelance
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition text-white placeholder:text-white/30"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition text-white placeholder:text-white/30"
              required
            />
            <textarea
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition text-white placeholder:text-white/30 resize-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-mono text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12 pt-8 text-xs text-white/20">
          © {new Date().getFullYear()} NOCTRA — IMMERSIVE DIGITAL ATMOSPHERE
        </div>
      </div>
    </section>
  );
}