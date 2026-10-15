'use client';

import { capabilities } from '@/data/capabilities';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-4 sm:px-8 md:px-12 max-w-[1400px] mx-auto border-t border-[#2f2f2f]/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest text-[#E50914] mb-3 uppercase">
            <span className="w-1.5 h-3 bg-[#E50914] rounded-sm"></span>
            <span>GENRE & SPESIFIKASI TEKNIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            KEAHLIAN & CORE STACK
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#a3a3a3] max-w-md font-normal leading-relaxed">
          Kumpulan keahlian teknik mulai dari modern web architectures, cloud database, native Android ecosystem, hingga pipeline deployment performa tinggi.
        </p>
      </div>

      {/* Netflix Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {capabilities.map((cap) => (
          <div
            key={cap.number}
            className="p-6 sm:p-8 rounded-[6px] border border-white/[0.08] bg-[#181818] hover:border-[#E50914]/50 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-5">
                <span className="text-xs text-[#E50914] font-mono font-bold tracking-wider">
                  KATEGORI {cap.number}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/10 text-[#e5e5e5]">
                  FULL STACK READY
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                {cap.category}
              </h3>
              <p className="text-xs font-semibold text-[#46d369] uppercase tracking-wider mb-3">
                {cap.subtitle} • 99% KECOCOKAN
              </p>
              <p className="text-sm text-[#bcbcbc] leading-relaxed font-normal mb-6">
                {cap.description}
              </p>
            </div>

            {/* Technical Skills List */}
            <div className="pt-5 border-t border-white/[0.08]">
              <div className="flex flex-wrap gap-2">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-[4px] border border-white/10 bg-[#222222] text-[#e5e5e5] text-xs font-mono hover:border-[#E50914] hover:text-white transition-colors cursor-default"
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
