'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Info, Sparkles, CheckCircle2, Hammer, Clock, ArrowUpRight } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';

const continueBuildingProjects = projectsData.filter((p) => p.isContinueBuilding);

export default function ContinueBuilding() {
  const { openModal } = useStreamingStore();

  return (
    <section id="continue-building" className="relative z-10 py-8 md:py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 md:mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 mb-2 uppercase">
            <Hammer className="w-3.5 h-3.5" />
            <span>01 // ACTIVE REPOSITORIES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            <span>Continue Building</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase font-semibold">
              Live Sprints
            </span>
          </h2>
        </div>

        <p className="text-xs font-mono text-zinc-400 max-w-md">
          Direct insight into projects currently in active engineering, sprint testing, and deployment cycles.
        </p>
      </div>

      {/* Grid / Carousel Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {continueBuildingProjects.map((project, idx) => {
          const progress = project.progressPercentage || 80;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              {/* Top Accent Gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* Header row: Number & Status */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500">{project.number}</span>
                  <span
                    className="px-2 py-0.5 rounded-md border text-[10px] font-semibold"
                    style={{
                      borderColor: `${project.accentColor}40`,
                      backgroundColor: `${project.accentColor}15`,
                      color: project.accentColor,
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title and Tagline */}
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1 font-light leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Current Sprint Note */}
                {project.currentSprint && (
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/[0.06] text-[11px] font-mono text-zinc-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] uppercase tracking-wider">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>Current Milestone</span>
                    </div>
                    <p className="line-clamp-2 text-zinc-300 text-xs font-sans">
                      {project.currentSprint}
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Progress & Quick Actions */}
              <div className="p-5 pt-0 space-y-3">
                {/* Progress Bar with Indicator */}
                <div className="space-y-1.5 font-mono">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-zinc-400">Progress</span>
                    <span className="text-emerald-400 font-bold">{progress}%</span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <span className="truncate">{project.developmentStatus || 'In Development'}</span>
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-1 border-t border-white/[0.06]">
                  <button
                    onClick={() => openModal(project)}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs transition-all flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Inspect</span>
                  </button>

                  <button
                    onClick={() => openModal(project)}
                    aria-label={`View details for ${project.title}`}
                    className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-all active:scale-95"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
