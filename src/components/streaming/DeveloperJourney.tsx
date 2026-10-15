'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, Calendar, CheckCircle2, ChevronRight, Play, Award, Coffee, Briefcase, GraduationCap } from 'lucide-react';

interface Episode {
  episodeNumber: string;
  title: string;
  year: string;
  duration: string;
  synopsis: string;
  badge?: string;
  iconType: 'engineering' | 'operations' | 'academic' | 'award';
  techStack: string[];
}

interface Season {
  seasonId: string;
  seasonNumber: string;
  title: string;
  subtitle: string;
  years: string;
  episodesCount: number;
  synopsis: string;
  keyTechUnlocked: string[];
  episodes: Episode[];
}

const seasons: Season[] = [
  {
    seasonId: 'season-01',
    seasonNumber: 'Season 01',
    title: 'Learning',
    subtitle: 'From Aircraft Structures to Code Foundations',
    years: '2017 — 2020',
    episodesCount: 3,
    synopsis: 'Rigorous aerospace construction discipline at SMKN 12 Bandung, first steps in computer science algorithms, and learning the high-pressure craftsmanship of specialty espresso.',
    keyTechUnlocked: ['C++', 'HTML5 / CSS3', 'Aerospace Precision Blueprinting', 'Mise-en-Place Discipline'],
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'Aerospace Structural Tolerance',
        year: '2017',
        duration: 'Graduated',
        synopsis: 'Vocational training in Aircraft Structure Construction (SMKN 12 Bandung). Instilled strict millimeter tolerances, structural integrity, and safety protocols.',
        iconType: 'academic',
        badge: 'Foundation',
        techStack: ['Structural Blueprinting', 'Precision Measurement', 'Safety Protocols'],
      },
      {
        episodeNumber: 'E02',
        title: 'First Lines of Code & Computational Logic',
        year: '2018 — 2019',
        duration: '2 Years',
        synopsis: 'Self-directed exploration into programming fundamentals: algorithmic loops, control flows, data types, and web markup.',
        iconType: 'engineering',
        badge: 'First Code',
        techStack: ['C++', 'Python Basics', 'Semantic HTML', 'CSS Flexbox'],
      },
      {
        episodeNumber: 'E03',
        title: 'Specialty Coffee Barista Apprenticeship',
        year: '2018 — 2020',
        duration: 'Hospitality',
        synopsis: 'Working the bar across independent specialty cafés in Bandung. Mastering workstation preparation (mise-en-place), customer empathy, and multi-tasking under peak volume.',
        iconType: 'operations',
        badge: 'Craft Discipline',
        techStack: ['Espresso Calibration', 'Workflow Speed', 'Customer Psychology'],
      },
    ],
  },
  {
    seasonId: 'season-02',
    seasonNumber: 'Season 02',
    title: 'Building',
    subtitle: 'Forging the Dual-Track: React & Barista Mastery',
    years: '2020 — 2023',
    episodesCount: 3,
    synopsis: 'Transitioning from static web experiments to reactive component architectures, enrolling in S1 Informatics Engineering, and leading specialty bar operations through the pandemic.',
    keyTechUnlocked: ['JavaScript (ES6+)', 'React.js', 'Git / GitHub', 'Espresso Sensory Extraction'],
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'The High-Pressure Barista Discipline',
        year: '2020 — 2022',
        duration: 'Solo Shifts',
        synopsis: 'Barista at Ideologi Kopi and Djaman Coffee. Handling morning rushes alone, inventory accounting (HPP), and perfecting manual brew variable control.',
        iconType: 'operations',
        badge: 'High Pressure',
        techStack: ['V60 Variable Extraction', 'Inventory Management', 'Solo Bar Workflow'],
      },
      {
        episodeNumber: 'E02',
        title: 'Component Architecture & React Reactivity',
        year: '2022',
        duration: 'Full Immersion',
        synopsis: 'Deep dive into modern JavaScript, declarative UI state, lifecycle hooks, and asynchronous REST API integration.',
        iconType: 'engineering',
        badge: 'React Transition',
        techStack: ['React.js', 'JavaScript ES6+', 'REST APIs', 'Tailwind CSS'],
      },
      {
        episodeNumber: 'E03',
        title: 'Academic Informatics Engineering Enrollment',
        year: '2023',
        duration: 'S1 Degree',
        synopsis: 'Commenced Bachelor of Informatics Engineering at Universitas Pamulang (Active Student, GPA 3.20) focusing on Software Engineering and Database Systems.',
        iconType: 'academic',
        badge: 'GPA 3.20',
        techStack: ['Data Structures', 'Database Architecture', 'Software Engineering'],
      },
    ],
  },
  {
    seasonId: 'season-03',
    seasonNumber: 'Season 03',
    title: 'Freelance & Projects',
    subtitle: 'First Commercial Shipments & Institutional SaaS',
    years: '2023 — 2024',
    episodesCount: 3,
    synopsis: 'Shipping real-world applications for actual clients: eco-tourism web guides, vocational school management portals, and specialty coffee brand platforms.',
    keyTechUnlocked: ['Tailwind CSS', 'Supabase', 'PostgreSQL', 'Leaflet Maps API', 'Vite'],
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'Sabda Alam Eco-Tourism Portal',
        year: '2023',
        duration: 'Public Launch',
        synopsis: 'Delivered an interactive tourism directory with dynamic ticket price calculators and interactive trail mapping for families traveling to Garut.',
        iconType: 'engineering',
        badge: 'Tourism Portal',
        techStack: ['React.js', 'Tailwind CSS', 'Leaflet Maps', 'Vite'],
      },
      {
        episodeNumber: 'E02',
        title: 'SMK Binusa Extracurricular SaaS',
        year: '2023 — 2024',
        duration: 'Institutional SaaS',
        synopsis: 'Eliminated paper registration for 15+ student organizations with automated seat quotas, Supabase database, and digital attendance logs.',
        iconType: 'engineering',
        badge: '100% Digital',
        techStack: ['React.js', 'Supabase', 'PostgreSQL', 'Role-based Auth'],
      },
      {
        episodeNumber: 'E03',
        title: 'Yare! Coffee Bintaro Digital Experience',
        year: '2024',
        duration: 'F&B Craft & Web',
        synopsis: 'Built a minimalist sensory coffee ordering hub capturing single-origin tasting profiles, counter atmosphere, and fast table-side mobile orders.',
        iconType: 'operations',
        badge: 'Craft & Code',
        techStack: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      },
    ],
  },
  {
    seasonId: 'season-04',
    seasonNumber: 'Season 04',
    title: 'Professional Development',
    subtitle: 'Enterprise Telemetry, Dual-Sync & HKI IP Certification',
    years: '2024 — 2025',
    episodesCount: 3,
    synopsis: 'Engineering industrial-grade systems under strict performance budgets, dual-client synchronization engines, and receiving official government intellectual property recognition.',
    keyTechUnlocked: ['TypeScript', 'Next.js App Router', 'Native Android Java', 'HKI Intellectual Property'],
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'PT ABB Industrial Operational Dashboard',
        year: '2024 — 2025',
        duration: 'Enterprise Production',
        synopsis: 'Built real-time industrial telemetry monitoring with < 250ms latency, zero layout reflow canvas charts, and multi-machine shift operator handover logs.',
        iconType: 'engineering',
        badge: 'Enterprise Telemetry',
        techStack: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
      },
      {
        episodeNumber: 'E02',
        title: 'TemuCashflow: Web + Android Native Engine',
        year: '2024 — 2025',
        duration: 'Dual Platform',
        synopsis: 'Architected financial management ecosystem connecting Android native Java client with React web dashboard via Supabase PostgreSQL and Row-Level Security.',
        iconType: 'engineering',
        badge: 'Dual Platform',
        techStack: ['Java (Android Studio)', 'React.js', 'Supabase', 'PostgreSQL', 'Firebase'],
      },
      {
        episodeNumber: 'E03',
        title: 'Lendspace Commercial Marketplace HKI Registration',
        year: '2024',
        duration: 'Legal Milestone',
        synopsis: 'Conceptualized and built the design system for commercial space leasing, officially certified and registered with Hak Kekayaan Intelektual (HKI) Kemenkumham RI.',
        iconType: 'award',
        badge: '🏆 Certified HKI',
        techStack: ['React.js', 'Supabase', 'Tailwind CSS', 'Figma', 'Legal IP'],
      },
    ],
  },
  {
    seasonId: 'season-05',
    seasonNumber: 'Season 05',
    title: 'Project Work & Future Releases',
    subtitle: 'Public GovTech, Animal Companion & NOCTRA Experience',
    years: '2025 — 2026+',
    episodesCount: 3,
    synopsis: 'Architecting flagship public service platforms for West Java government, animal health ecosystems, and the NOCTRA digital streaming portfolio.',
    keyTechUnlocked: ['Next.js 16 (Turbopack)', 'Framer Motion', 'Zustand', 'Lenis Inertial Scroll'],
    episodes: [
      {
        episodeNumber: 'E01',
        title: 'KCD Wilayah VIII: Sistem Layanan & Pengaduan Terpadu',
        year: '2026',
        duration: 'Flagship GovTech',
        synopsis: 'Lead front-end engineering for government public grievance and school administrative portal, resolving citizen complaints with < 48h SLA tracking.',
        iconType: 'engineering',
        badge: 'Flagship 2026',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      },
      {
        episodeNumber: 'E02',
        title: 'COMPawnion Smart Pet Health & Clinic Radar',
        year: '2025 — 2026',
        duration: 'Pet-Tech Platform',
        synopsis: 'Digital pet health passport with automated vaccination calendars, species-tailored nutrition calculations, and 24h veterinary emergency proximity radar.',
        iconType: 'engineering',
        badge: 'Pet Health',
        techStack: ['React Native', 'Next.js', 'TypeScript', 'Supabase', 'Leaflet Maps'],
      },
      {
        episodeNumber: 'E03',
        title: 'NOCTRA: The Interactive Developer Streaming Experience',
        year: '2026',
        duration: 'Studio Flagship',
        synopsis: 'Digital product portfolio reinterpreting streaming platform UX with simulated video preview shaders, horizontal carousels, and secret developer Easter eggs.',
        iconType: 'award',
        badge: 'Studio Flagship',
        techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
      },
    ],
  },
];

export default function DeveloperJourney() {
  const [activeSeasonId, setActiveSeasonId] = useState('season-05');
  const activeSeason = seasons.find((s) => s.seasonId === activeSeasonId) || seasons[4];

  return (
    <section id="journey" className="relative z-10 py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 mb-2 uppercase">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>04 // SERIES TIMELINE &amp; TRAJECTORY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Developer Journey</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 uppercase font-semibold">
              5 Seasons
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1.5 max-w-xl">
            Explore Andika's evolution from aircraft structure manufacturing and high-volume specialty coffee operations to enterprise software systems.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-zinc-900 border border-white/10">
          {seasons.map((s) => (
            <button
              key={s.seasonId}
              onClick={() => setActiveSeasonId(s.seasonId)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSeasonId === s.seasonId
                  ? 'bg-[#E50914] text-white font-bold shadow-lg shadow-red-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{s.seasonNumber}</span>
              <span className="hidden sm:inline text-zinc-300">({s.title})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Season Showcase Billboard */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSeason.seasonId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
        >
          {/* Season Overview Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#181818] border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 text-[#E50914] font-bold">
                {activeSeason.seasonNumber.toUpperCase()} • {activeSeason.years}
              </span>
              <span className="text-zinc-400">
                {activeSeason.episodesCount} Episode Ditayangkan
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {activeSeason.seasonNumber}: {activeSeason.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-300 font-medium">
                {activeSeason.subtitle}
              </p>
            </div>

            <p className="text-sm text-zinc-300 font-light leading-relaxed max-w-3xl">
              {activeSeason.synopsis}
            </p>

            {/* Unlocked Technologies Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mr-1">
                Tech & Skills Unlocked:
              </span>
              {activeSeason.keyTechUnlocked.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/10 text-zinc-300"
                >
                  ✓ {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Season Episodes List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 px-2">
              <span>EPISODES IN THIS SEASON</span>
              <span>CHRONOLOGICAL ORDER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {activeSeason.episodes.map((ep, idx) => (
                <motion.div
                  key={ep.episodeNumber}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="p-5 md:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between space-y-4 group"
                >
                  {/* Episode Header */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blue-400">{ep.episodeNumber}</span>
                      <div className="flex items-center gap-2">
                        {ep.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/10 text-zinc-300 border border-white/10">
                            {ep.badge}
                          </span>
                        )}
                        <span className="text-zinc-500">{ep.year}</span>
                      </div>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {ep.title}
                    </h4>

                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {ep.synopsis}
                    </p>
                  </div>

                  {/* Episode Tech Tags */}
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {ep.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
