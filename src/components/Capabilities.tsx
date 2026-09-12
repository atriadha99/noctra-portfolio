'use client';

import { capabilities } from '@/data/capabilities';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-blue-400 mb-3 uppercase">
            <span>03 // TECHNICAL STACK &amp; DISCIPLINES</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            CAPABILITIES
          </h2>
        </div>
        <p className="text-sm md:text-base text-zinc-400 max-w-md font-light">
          Structured competencies across modern web architectures, cloud databases, native mobile ecosystems, and deployment workflows.
        </p>
      </div>

      {/* Editorial Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {capabilities.map((cap) => (
          <div
            key={cap.number}
            className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0c0c10] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <span className="font-mono text-sm text-blue-400 font-bold">
                  // {cap.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  SYSTEM CORE
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                {cap.category}
              </h3>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                {cap.subtitle}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-8">
                {cap.description}
              </p>
            </div>

            {/* Technical Skills List */}
            <div className="pt-6 border-t border-white/[0.06]">
              <div className="flex flex-wrap gap-2">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-300 text-xs font-mono hover:border-blue-500/40 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
