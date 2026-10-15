'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Camera,
  Coffee,
  Code2,
  GraduationCap,
  Sparkles,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Cinematic Studio Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E50914] mb-2 uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROFIL SUTRADARA &amp; FILOSOFI REKAYASA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Di Balik Kode, Lensa
            <br />
            <span className="text-zinc-500">&amp; Mesin Espresso.</span>
          </h2>
        </div>

        <div className="p-4 rounded-xl bg-[#181818] border border-white/10 font-mono text-xs text-zinc-400 max-w-sm space-y-1">
          <div className="flex items-center justify-between text-white font-bold pb-1 border-b border-white/[0.06]">
            <span>ANDIKA AGUNG TRIADHA</span>
            <span className="text-[#E50914] font-mono">BANDUNG / ID</span>
          </div>
          <p className="text-zinc-300">Front-End Developer • Fotografer • Barista Specialty</p>
          <p className="text-[11px] text-zinc-500">S1 Teknik Informatika (IPK 3.20) • SMKN 12 Konstruksi Pesawat</p>
        </div>
      </div>

      {/* Main 4-Pillar Cinematic Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Pillar 1: Front-End Developer (Span 7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#181818] border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-mono text-blue-400 font-semibold tracking-wider uppercase">
                CORE CRAFT // SOFTWARE ENGINEERING
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Front-End Developer &amp; Product Builder
              </h3>
            </div>

            <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed">
              I develop thoughtful digital products that blend editorial elegance with industrial reliability. From sub-250ms telemetry monitoring at <strong className="text-white font-medium">PT ABB</strong> to public service dispatch for <strong className="text-white font-medium">KCD Wilayah VIII</strong>, my priority is interfaces that feel immediate, performant, and durable in production.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2 text-xs font-mono">
            {['React.js', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Framer Motion'].map((item) => (
              <span key={item} className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Pillar 2: Barista Background & Discipline (Span 5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Coffee className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                OPERATIONAL RIGOR // 6+ YEARS F&amp;B
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                The Barista Mise-en-Place
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Managing hundreds of coffee orders solo during weekend rushes at Riels Coffee, Ideologi, and Djaman taught me lessons no coding bootcamp can: instant user empathy, extreme composure under pressure, and the ritual of <em>mise-en-place</em>—having every tool in its exact place before the first order arrives.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-black/50 border border-white/[0.06] text-xs font-mono text-amber-300/90 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>"Every line of code is calibrated like a 1:16 ratio pour-over."</span>
          </div>
        </div>

        {/* Pillar 3: Photography & Visual Storytelling (Span 5) */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Camera className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-mono text-purple-400 font-semibold tracking-wider uppercase">
                VISUAL COMPOSITION // PHOTOGRAPHY
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Framing &amp; Spatial Aesthetics
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              Behind the lens, I capture street textures, coffee bar architecture, and fleeting human interactions. Photography informs my approach to web UI: negative space, natural light hierarchy, and cinematic rhythm.
            </p>
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
            <span>Gear: 35mm Prime / Rangefinder</span>
            <span className="text-purple-400">Natural Light &amp; Shadow</span>
          </div>
        </div>

        {/* Pillar 4: Academic & Aerostructures (Span 7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/10 space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                FOUNDATIONS // DUAL EDUCATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
                Informatics Engineering &amp; Aircraft Standards
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] space-y-1">
                <span className="text-emerald-400 font-bold block">UNIVERSITAS PAMULANG</span>
                <span className="text-white font-sans font-medium text-sm block">S1 Teknik Informatika</span>
                <span className="text-zinc-400 block">2023 — Present • GPA 3.20</span>
                <p className="text-zinc-500 text-[11px] font-sans pt-1">
                  Database systems, algorithms, software engineering principles.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/[0.08] space-y-1">
                <span className="text-blue-400 font-bold block">SMKN 12 BANDUNG</span>
                <span className="text-white font-sans font-medium text-sm block">Aircraft Structure Construction</span>
                <span className="text-zinc-400 block">Aerospace Diploma</span>
                <p className="text-zinc-500 text-[11px] font-sans pt-1">
                  Millimeter structural tolerance and safety protocols.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs font-mono text-zinc-400 flex items-center justify-between">
            <span>Philosophy: Durability over Fleeting Trends</span>
            <span className="text-emerald-400 font-bold">Craftsmanship Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
