'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              NOCTRA
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              ANDIKA AGUNG TRIADHA
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Front-End Developer &amp; Digital Product Builder · Bandung, Indonesia
          </p>
        </div>

        {/* Channels & Copyright */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
          <a
            href="https://github.com/atriadha99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="https://www.linkedin.com/in/andika-triadha-844976294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-700">·</span>
          <a
            href="mailto:atriadha.dev@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <span className="text-zinc-700">·</span>
          <span className="text-zinc-600">© 2026 NOCTRA</span>

          <button
            onClick={scrollToTop}
            className="ml-4 p-2.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
