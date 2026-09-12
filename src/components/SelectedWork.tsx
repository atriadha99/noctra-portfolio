'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ExternalLink, Lock, Layers } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import CaseStudyModal from './CaseStudyModal';

export default function SelectedWork() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  const p1 = projectsData[0]; // PT ABB Dashboard
  const p2 = projectsData[1]; // TemuCashflow
  const p3 = projectsData[2]; // NOCTRA Portfolio
  const p4 = projectsData[3]; // Lendspace HKI
  const remaining = projectsData.slice(4); // 05, 06, 07

  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-blue-400 mb-3 uppercase">
            <span>02 // INDEX OF WORKS</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">7 SELECTED PROJECTS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            SELECTED WORK
          </h2>
        </div>
        <p className="text-sm md:text-base text-zinc-400 max-w-md font-light">
          An editorial compilation of enterprise systems, financial engineering, marketplace architectures, and high-craft digital experiences.
        </p>
      </div>

      {/* Editorial Layout: Asymmetric Showcase */}
      <div className="space-y-24 md:space-y-32">
        {/* --- PROJECT 01: PT ABB DASHBOARD (Hero Spotlight) --- */}
        <div className="group relative border border-white/[0.08] bg-[#0c0c10] rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Project Details Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 md:p-14 flex flex-col justify-between space-y-8 z-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-4">
                  <span className="text-blue-400 font-bold">{p1.number}</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-white uppercase tracking-wider">{p1.category}</span>
                  <span className="text-zinc-700">|</span>
                  <span>{p1.year}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {p1.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                  {p1.description}
                </p>

                {/* Metrics */}
                {p1.metrics && (
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/[0.06] font-mono text-xs">
                    {p1.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-zinc-500 block text-[10px] uppercase">{m.label}</span>
                        <span className="text-white font-semibold text-xs sm:text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p1.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveCaseStudy(p1)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-all duration-300"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={p1.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white font-mono text-xs hover:border-white/40 transition-all duration-300"
                  >
                    <span>LIVE SYSTEM</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visual Preview Frame (Interactive Industrial UI Mockup) */}
            <div
              onClick={() => setActiveCaseStudy(p1)}
              className="lg:col-span-6 bg-[#08080a] border-t lg:border-t-0 lg:border-l border-white/[0.08] p-6 sm:p-10 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#111116] shadow-2xl overflow-hidden transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                {/* Top Window Bar */}
                <div className="px-4 py-3 bg-[#18181f] border-b border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-zinc-300 font-semibold">ptabb.vercel.app</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SYSTEM ONLINE
                  </span>
                </div>

                {/* Dashboard Screen Mockup */}
                <div className="p-5 space-y-4 font-mono">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase">TELEMETRY MONITOR</p>
                      <h4 className="text-sm font-bold text-white font-sans">FACILITY OVERVIEW — LINE 04</h4>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px]">
                      LIVE REST STREAM
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[9px] text-zinc-500 block">THROUGHPUT</span>
                      <span className="text-white text-xs font-bold font-sans">14,280 u/h</span>
                      <span className="text-[9px] text-emerald-400 block mt-0.5">▲ +4.2%</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[9px] text-zinc-500 block">UPTIME</span>
                      <span className="text-white text-xs font-bold font-sans">99.82%</span>
                      <span className="text-[9px] text-zinc-400 block mt-0.5">Shift Normal</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-[9px] text-zinc-500 block">LATENCY</span>
                      <span className="text-white text-xs font-bold font-sans">142 ms</span>
                      <span className="text-[9px] text-emerald-400 block mt-0.5">Optimal</span>
                    </div>
                  </div>

                  {/* Visual Chart Wave */}
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex justify-between text-[10px] text-zinc-500">
                      <span>OPERATIONAL CYCLE</span>
                      <span>00:00 — 23:59</span>
                    </div>
                    <svg viewBox="0 0 300 60" className="w-full h-14 text-blue-500 overflow-visible">
                      <defs>
                        <linearGradient id="gradP1" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,45 Q30,15 60,35 T120,20 T180,40 T240,10 T300,25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,45 Q30,15 60,35 T120,20 T180,40 T240,10 T300,25 L300,60 L0,60 Z"
                        fill="url(#gradP1)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PROJECT 02: TEMUCASHFLOW (Hero Spotlight Reversed) --- */}
        <div className="group relative border border-white/[0.08] bg-[#0c0c10] rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Preview Frame (Dual Platform Web & Mobile Mockup) */}
            <div
              onClick={() => setActiveCaseStudy(p2)}
              className="lg:col-span-6 order-2 lg:order-1 bg-[#08080a] border-t lg:border-t-0 lg:border-r border-white/[0.08] p-6 sm:p-10 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="w-full max-w-lg flex flex-col sm:flex-row gap-4 items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                {/* Mobile Device Mockup */}
                <div className="w-44 rounded-2xl border border-white/15 bg-[#121217] p-3 shadow-2xl space-y-3 font-mono">
                  <div className="flex justify-between items-center text-[9px] text-zinc-500 border-b border-white/[0.08] pb-1.5">
                    <span>ANDROID NATIVE</span>
                    <span className="text-emerald-400">SYNCED</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-zinc-500 uppercase">NET BALANCE</span>
                    <p className="text-xs font-bold text-white font-sans">Rp 28.450.000</p>
                  </div>
                  <div className="space-y-1.5 pt-1 border-t border-white/[0.06] text-[9px]">
                    <div className="flex justify-between text-zinc-300">
                      <span>Coffee Supplies</span>
                      <span className="text-red-400 font-mono">-1.250k</span>
                    </div>
                    <div className="flex justify-between text-zinc-300">
                      <span>Client Retainer</span>
                      <span className="text-emerald-400 font-mono">+8.500k</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="w-full py-1 rounded bg-blue-500/20 text-center text-[9px] text-blue-400 font-bold">
                      + QUICK ENTRY
                    </div>
                  </div>
                </div>

                {/* Web Dashboard Widget Mockup */}
                <div className="w-full sm:w-60 rounded-xl border border-white/15 bg-[#111116] p-4 shadow-2xl space-y-3 font-mono">
                  <div className="flex justify-between items-center text-[10px] text-zinc-400 border-b border-white/[0.08] pb-2">
                    <span className="text-zinc-300 font-semibold font-sans">CASH FLOW ENGINE</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-400">SUPABASE</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-zinc-500 uppercase">MONTHLY RUNWAY</span>
                    <p className="text-sm font-bold text-emerald-400 font-sans">6.4 MONTHS</p>
                  </div>
                  <div className="h-12 w-full bg-white/[0.02] rounded border border-white/[0.06] flex items-end justify-between p-1.5 gap-1">
                    {[40, 65, 30, 85, 70, 95, 80].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="w-full bg-blue-500/40 hover:bg-blue-400 transition-colors rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-12 md:p-14 flex flex-col justify-between space-y-8 z-10">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 mb-4">
                  <span className="text-blue-400 font-bold">{p2.number}</span>
                  <span className="text-zinc-700">|</span>
                  <span className="text-white uppercase tracking-wider">{p2.category}</span>
                  <span className="text-zinc-700">|</span>
                  <span>{p2.year}</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {p2.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-6">
                  {p2.description}
                </p>

                {/* Metrics */}
                {p2.metrics && (
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/[0.06] font-mono text-xs">
                    {p2.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-zinc-500 block text-[10px] uppercase">{m.label}</span>
                        <span className="text-white font-semibold text-xs sm:text-sm">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p2.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setActiveCaseStudy(p2)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-all duration-300"
                  >
                    <span>READ CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={p2.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/5 text-white font-mono text-xs hover:border-white/40 transition-all duration-300"
                  >
                    <span>GITHUB REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SPLIT EDITORIAL ROW: PROJECTS 03 & 04 --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project 03: NOCTRA Portfolio */}
          <div className="group border border-white/[0.08] bg-[#0c0c10] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                <span className="text-blue-400 font-bold">{p3.number}</span>
                <span className="text-zinc-500 uppercase">{p3.category}</span>
                <span>{p3.year}</span>
              </div>

              <div
                onClick={() => setActiveCaseStudy(p3)}
                className="cursor-pointer mb-6 rounded-xl border border-white/10 bg-[#08080a] p-6 text-center space-y-2 group-hover:border-blue-500/30 transition-colors"
              >
                <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 block uppercase">
                  EDITORIAL STUDIO EXPERIMENT
                </span>
                <p className="font-display text-2xl font-bold tracking-tight text-white">
                  NOCTRA / STUDIO
                </p>
                <p className="text-xs text-zinc-400 font-mono">Next.js 15 · Lenis · Framer Motion</p>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {p3.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                {p3.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p3.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setActiveCaseStudy(p3)}
                  className="font-mono text-xs text-white hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={p3.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>LIVE SITE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Project 04: Lendspace HKI */}
          <div className="group border border-white/[0.08] bg-[#0c0c10] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                <span className="text-blue-400 font-bold">{p4.number}</span>
                <span className="text-zinc-500 uppercase">{p4.category}</span>
                <span className="px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px]">
                  🏆 HKI CERTIFIED
                </span>
              </div>

              <div
                onClick={() => setActiveCaseStudy(p4)}
                className="cursor-pointer mb-6 rounded-xl border border-white/10 bg-[#08080a] p-6 text-center space-y-2 group-hover:border-yellow-500/30 transition-colors"
              >
                <span className="text-[10px] font-mono tracking-[0.3em] text-yellow-500/80 block uppercase">
                  INTELLECTUAL PROPERTY ASSET
                </span>
                <p className="font-display text-2xl font-bold tracking-tight text-white">
                  LENDSPACE LEASING
                </p>
                <p className="text-xs text-zinc-400 font-mono">React.js · Supabase · Space Taxonomy</p>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {p4.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                {p4.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p4.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => setActiveCaseStudy(p4)}
                  className="font-mono text-xs text-white hover:text-blue-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-xs text-zinc-500 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>HKI REGISTERED</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- EDITORIAL STRIP: PROJECTS 05, 06, 07 --- */}
        <div className="space-y-4">
          <p className="text-xs font-mono tracking-[0.25em] text-zinc-500 uppercase mb-4">
            ADDITIONAL CASE ARCHIVES //
          </p>

          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {remaining.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveCaseStudy(item)}
                className="group py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center cursor-pointer transition-colors duration-300 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
              >
                {/* Number & Type */}
                <div className="md:col-span-2 font-mono text-xs text-zinc-500 flex items-center gap-3">
                  <span className="text-blue-400 font-bold">{item.number}</span>
                  <span className="text-zinc-700">|</span>
                  <span className="uppercase text-zinc-400">{item.year}</span>
                </div>

                {/* Title & Tagline */}
                <div className="md:col-span-4">
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">{item.tagline}</p>
                </div>

                {/* Tech Stack */}
                <div className="md:col-span-4 flex flex-wrap gap-1.5">
                  {item.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/[0.08] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-2 flex justify-end items-center gap-2 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  <span className="hidden sm:inline">VIEW CASE</span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Injection */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}
