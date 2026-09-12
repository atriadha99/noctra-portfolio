'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'WORK', href: '#work' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CAPABILITIES', href: '#capabilities' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
          >
            <span className="font-display text-lg md:text-xl font-bold tracking-tight text-white">
              NOCTRA
            </span>
            <span className="hidden sm:inline-block text-zinc-600">/</span>
            <span className="hidden sm:inline-block text-xs font-mono tracking-widest text-zinc-400 uppercase">
              ANDIKA AGUNG T.
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-mono text-emerald-400 ml-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-7 text-xs font-mono tracking-widest text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white relative py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="mailto:atriadha.dev@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#09090b] flex flex-col justify-between px-8 pt-32 pb-12 md:hidden"
          >
            <div className="space-y-6">
              <p className="text-xs font-mono tracking-[0.3em] text-zinc-500 uppercase">
                INDEX / DIRECTORY
              </p>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/[0.08]">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>LOCATION</span>
                <span className="text-white">BANDUNG, INDONESIA</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>CONTACT</span>
                <a
                  href="mailto:atriadha.dev@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  atriadha.dev@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block py-3.5 text-center font-mono text-xs font-bold rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  START A PROJECT →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}