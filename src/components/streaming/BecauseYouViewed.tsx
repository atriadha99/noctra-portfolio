'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, ChevronRight, CheckCircle2, Film, Tag } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';

interface TechGenre {
  name: string;
  categoryTag: string;
  matchScore: number;
  experienceLevel: string;
  description: string;
  accentColor: string;
  featuredIn: string[];
}

const recommendations: Record<string, { title: string; subtitle: string; technologies: TechGenre[] }> = {
  'frontend': {
    title: 'Because you viewed Front-End Development',
    subtitle: 'High-affinity engineering genres, UI component systems & reactivity engines',
    technologies: [
      {
        name: 'React',
        categoryTag: 'Component Architecture',
        matchScore: 99,
        experienceLevel: '4+ Years • Primary Engine',
        description: 'Declarative component hierarchies, optimistic mutations, and custom hooks architecture.',
        accentColor: '#38bdf8',
        featuredIn: ['pt-abb-dashboard', 'temucashflow', 'yare-coffee', 'sabda-alam-web'],
      },
      {
        name: 'Next.js',
        categoryTag: 'Full-Stack Framework',
        matchScore: 98,
        experienceLevel: 'App Router • SSR / SSG',
        description: 'Server components, streaming SSR, edge caching, and Turbopack production builds.',
        accentColor: '#ffffff',
        featuredIn: ['kcd-wilayah-8', 'noctra-portfolio', 'ecommerce-platform'],
      },
      {
        name: 'Vue',
        categoryTag: 'Reactive Web',
        matchScore: 90,
        experienceLevel: 'Composition API',
        description: 'Single-file components, lightweight reactivity, and seamless progressive enhancement.',
        accentColor: '#42b883',
        featuredIn: ['sabda-alam-web', 'portal-ekskul-binusa'],
      },
      {
        name: 'Tailwind CSS',
        categoryTag: 'Design System & Tokens',
        matchScore: 100,
        experienceLevel: 'v3 / v4 Engine',
        description: 'Utility-first token systems, custom theme layers, and fluid responsive grid layouts.',
        accentColor: '#38bdf8',
        featuredIn: ['kcd-wilayah-8', 'compawnion', 'pt-abb-dashboard', 'temucashflow'],
      },
      {
        name: 'Supabase',
        categoryTag: 'BaaS & Realtime Sync',
        matchScore: 96,
        experienceLevel: 'Auth & RLS Architecture',
        description: 'Postgres triggers, Row-Level Security policies, and instant WebSocket state hydration.',
        accentColor: '#3ecf8e',
        featuredIn: ['kcd-wilayah-8', 'temucashflow', 'compawnion', 'portal-ekskul-binusa'],
      },
      {
        name: 'PostgreSQL',
        categoryTag: 'Relational Database',
        matchScore: 95,
        experienceLevel: 'Schema Modeling',
        description: 'ACID compliance, relational joins, indexing strategies, and automated data pipelines.',
        accentColor: '#336791',
        featuredIn: ['kcd-wilayah-8', 'temucashflow', 'lendspace-hki'],
      },
      {
        name: 'Android / Kotlin',
        categoryTag: 'Native Mobile',
        matchScore: 94,
        experienceLevel: 'Android Studio • Java/Kotlin',
        description: 'Native mobile clients, SQLite offline cache, and background notification services.',
        accentColor: '#a4c639',
        featuredIn: ['temucashflow', 'temulab-mobile'],
      },
    ],
  },
  'mobile': {
    title: 'Because you viewed Mobile Development',
    subtitle: 'Native mobile runtimes, offline-first persistence & cross-client synchronization',
    technologies: [
      {
        name: 'Android / Kotlin',
        categoryTag: 'Native Architecture',
        matchScore: 97,
        experienceLevel: 'Native Java & Kotlin',
        description: 'High-performance mobile UX, background services, and hardware sensor integration.',
        accentColor: '#a4c639',
        featuredIn: ['temucashflow', 'temulab-mobile'],
      },
      {
        name: 'React Native',
        categoryTag: 'Cross-Platform',
        matchScore: 93,
        experienceLevel: 'Expo & CLI',
        description: 'Unified TypeScript codebases for iOS and Android with 60 FPS touch gestures.',
        accentColor: '#61dafb',
        featuredIn: ['compawnion'],
      },
      {
        name: 'Supabase Sync',
        categoryTag: 'Offline-First Cloud',
        matchScore: 95,
        experienceLevel: 'Postgres Realtime',
        description: 'Local SQLite mutations synchronized upon cellular reconnection with conflict resolution.',
        accentColor: '#3ecf8e',
        featuredIn: ['temucashflow', 'compawnion'],
      },
      {
        name: 'Firebase',
        categoryTag: 'Cloud Services',
        matchScore: 92,
        experienceLevel: 'Auth & FCM Push',
        description: 'Multi-factor authentication, remote config, and low-latency push notifications.',
        accentColor: '#ffca28',
        featuredIn: ['temucashflow', 'temulab-mobile'],
      },
    ],
  },
};

export default function BecauseYouViewed() {
  const [selectedPill, setSelectedPill] = useState<'frontend' | 'mobile'>('frontend');
  const { openModal } = useStreamingStore();

  const currentRec = recommendations[selectedPill];

  return (
    <section id="recommendations" className="relative z-10 py-10 md:py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header with Playful Streaming Recommendation Cue */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E50914] mb-2 uppercase font-bold">
            <Film className="w-3.5 h-3.5" />
            <span>REKOMENDASI ALGORITMA NOCTRA</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>{currentRec.title}</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1.5 max-w-2xl">
            {currentRec.subtitle}
          </p>
        </div>

        {/* Switch recommendation track */}
        <div className="flex items-center p-1 rounded-md bg-black/60 border border-white/15 text-xs font-mono">
          <button
            onClick={() => setSelectedPill('frontend')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
              selectedPill === 'frontend'
                ? 'bg-[#E50914] text-white font-bold shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Jalur Front-End
          </button>
          <button
            onClick={() => setSelectedPill('mobile')}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
              selectedPill === 'mobile'
                ? 'bg-[#E50914] text-white font-bold shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Jalur Mobile
          </button>
        </div>
      </div>

      {/* Grid of Technology "Genres" */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        <AnimatePresence mode="popLayout">
          {currentRec.technologies.map((tech, idx) => {
            const relatedProjects = tech.featuredIn
              .map((id) => projectsData.find((p) => p.id === id))
              .filter(Boolean);

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between"
              >
                {/* Top Badge & Match Index */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span
                      className="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                      style={{
                        borderColor: `${tech.accentColor}40`,
                        backgroundColor: `${tech.accentColor}15`,
                        color: tech.accentColor,
                      }}
                    >
                      {tech.categoryTag}
                    </span>
                    <span className="text-emerald-400 font-bold">{tech.matchScore}% MATCH</span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {tech.experienceLevel}
                    </p>
                  </div>

                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Direct Links to Featured Projects */}
                <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-2">
                  <span className="block text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    Featured Titles
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {relatedProjects.map((p) => (
                      <button
                        key={p!.id}
                        onClick={() => openModal(p!)}
                        className="text-[11px] font-mono px-2 py-1 rounded bg-black/60 hover:bg-white hover:text-black text-zinc-300 border border-white/10 transition-all truncate max-w-[150px]"
                      >
                        {p!.title}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
