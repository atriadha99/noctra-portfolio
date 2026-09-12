'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import LiveClock from './ui/LiveClock';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 md:pt-44 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Top Editorial Index / Metadata Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 text-xs font-mono tracking-widest text-zinc-400"
      >
        <div className="flex items-center gap-6">
          <span className="text-white font-semibold">NOCTRA STUDIO</span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="hidden sm:inline">DISCIPLINE × CODE × CRAFT</span>
        </div>
        <div className="flex items-center gap-4">
          <LiveClock />
        </div>
      </motion.div>

      {/* Main Asymmetric Typographic Statement */}
      <div className="my-auto py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            INFORMATICS ENGINEERING & PRODUCT ENGINEERING
          </div>

          {/* Large Name Display */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.92]">
            ANDIKA AGUNG
            <br />
            <span className="text-zinc-400">TRIADHA</span>
          </h1>

          {/* Role Headline */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-300 pt-2">
            FRONT-END DEVELOPER{' '}
            <span className="text-zinc-500">&amp;</span> DIGITAL PRODUCT BUILDER
          </h2>
        </motion.div>

        {/* Editorial Supporting Description & Asymmetric Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 md:mt-16 pt-8 border-t border-white/[0.08]"
        >
          {/* Statement Column */}
          <div className="lg:col-span-7">
            <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-zinc-300">
              I build thoughtful web and mobile experiences with modern technologies, from interface to deployment.
            </p>
            <p className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed max-w-xl">
              Grounded in rigorous software engineering and refined by 6+ years of specialty F&amp;B operational discipline — bridging technical precision, customer psychology, and tactile digital interfaces.
            </p>
          </div>

          {/* Meta Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-10 font-mono text-xs text-zinc-400">
            <div className="space-y-3">
              <div>
                <span className="text-zinc-500 block text-[10px] tracking-[0.2em] uppercase">BASE OF OPERATIONS</span>
                <span className="text-white text-sm">Bandung, West Java, Indonesia</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] tracking-[0.2em] uppercase">CORE FOCUS</span>
                <span className="text-zinc-200">Web Architecture · Mobile Systems · Studio UX</span>
              </div>
            </div>

            {/* Quick Channel Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://github.com/atriadha99"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/andika-triadha-844976294/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>

              <a
                href="mailto:atriadha.dev@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>EMAIL</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll / Jump Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-between pt-6 border-t border-white/[0.08] text-xs font-mono tracking-widest text-zinc-400"
      >
        <span className="hidden sm:inline text-zinc-400">PORTFOLIO INDEX / 2026 EDITION</span>
        <a
          href="#work"
          className="group inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
        >
          <span>VIEW SELECTED WORK</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
