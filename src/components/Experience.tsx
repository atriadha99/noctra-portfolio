'use client';

import { experiences, educationData } from '@/data/experience';
import { Briefcase, Coffee, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-[#E50914] mb-3 uppercase font-bold">
            <span>DOKUMENTASI REKAM JEJAK &amp; PENGALAMAN</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            PENGALAMAN
          </h2>
        </div>
        <p className="text-sm md:text-base text-zinc-400 max-w-md font-light">
          Karier ganda yang ditempa dalam rekayasa perangkat lunak modern dan dipertajam oleh enam tahun disiplin operasional F&amp;B specialty volume tinggi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Experience Timeline Column */}
        <div className="lg:col-span-8 space-y-8">
          <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase pb-2 border-b border-white/[0.08]">
            TIMELINE KRONOLOGIS // 2018 — 2026
          </p>

          <div className="space-y-12">
            {experiences.map((item, idx) => (
              <div
                key={idx}
                className="group relative border-l border-white/[0.1] pl-6 sm:pl-8 space-y-3 transition-colors hover:border-[#E50914]"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-[#E50914] transition-colors" />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-[#E50914] font-bold">
                    {item.period}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                    {item.type === 'engineering' ? (
                      <span className="inline-flex items-center gap-1 text-blue-300">
                        <Briefcase className="w-3 h-3" /> ENGINEERING
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-300/80">
                        <Coffee className="w-3 h-3" /> F&amp;B OPERATIONS
                      </span>
                    )}
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-100">
                    {item.role}
                  </h3>
                  <p className="font-mono text-sm text-zinc-300">{item.organization}</p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-zinc-500 flex items-start gap-2">
                      <span className="text-zinc-600 select-none">↳</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Context Column */}
        <div className="lg:col-span-4 space-y-10 lg:border-l lg:border-white/[0.08] lg:pl-10">
          {/* F&B Operational Philosophy Note */}
          <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10] space-y-3 font-mono text-xs">
            <span className="text-blue-400 font-bold block">// WHY BARISTA MATTERS</span>
            <p className="text-zinc-300 leading-relaxed font-sans text-sm font-light">
              "Banyak orang bisa menulis kode. Namun pengalaman mengelola ratusan pesanan kopi di jam sibuk mengajarkan empati pelanggan instan, toleransi tekanan tinggi, efisiensi alur kerja (mise-en-place), dan presisi hingga gram terakhir."
            </p>
          </div>

          {/* Education Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-white/[0.08]">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3 className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
                ACADEMIC FOUNDATION
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div key={idx} className="space-y-1.5 font-mono">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400 font-bold">{edu.period}</span>
                    {edu.gpa && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-base font-bold text-white font-sans">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-zinc-300">{edu.degree}</p>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed pt-1">
                    {edu.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
