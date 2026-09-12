'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Lock, CheckCircle2, AlertCircle, Compass, Wrench, Trophy } from 'lucide-react';
import { Project } from '@/data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d11] border border-white/[0.12] rounded-2xl shadow-2xl z-10 text-white p-6 sm:p-10 md:p-12 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="space-y-4 border-b border-white/[0.08] pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-blue-400">
              <span>PROJECT {project.number}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 uppercase">{project.category}</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">{project.year}</span>
              {project.highlightBadge && (
                <span className="px-2.5 py-0.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px]">
                  {project.highlightBadge}
                </span>
              )}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-light">
              {project.tagline}
            </p>

            {/* Quick Spec Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-mono">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">MY ROLE</span>
                <span className="text-zinc-200">{project.role}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">TIMELINE</span>
                <span className="text-zinc-200">{project.year}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">CATEGORY</span>
                <span className="text-zinc-200">{project.category}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">DEPLOYMENT</span>
                <span className="text-zinc-200">{project.projectUrl !== '#' && !project.projectUrl.includes('Coming Soon') ? 'Production' : 'Private / In Dev'}</span>
              </div>
            </div>
          </div>

          {/* Case Study Body */}
          <div className="py-8 space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
            {/* Overview */}
            <section className="space-y-3">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-400" />
                OVERVIEW
              </h3>
              <p className="text-zinc-200">{project.caseStudy.overview}</p>
            </section>

            {/* Problem */}
            <section className="space-y-3 border-t border-white/[0.06] pt-8">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                THE PROBLEM
              </h3>
              <p className="text-zinc-400">{project.caseStudy.problem}</p>
            </section>

            {/* Approach */}
            <section className="space-y-3 border-t border-white/[0.06] pt-8">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-400" />
                ARCHITECTURAL APPROACH
              </h3>
              <p className="text-zinc-300">{project.caseStudy.approach}</p>
            </section>

            {/* Implementation */}
            <section className="space-y-3 border-t border-white/[0.06] pt-8">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                IMPLEMENTATION DETAILS
              </h3>
              <p className="text-zinc-400">{project.caseStudy.implementation}</p>
            </section>

            {/* Result */}
            <section className="space-y-3 border-t border-white/[0.06] pt-8">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase flex items-center gap-2">
                <Trophy className="w-4 h-4 text-emerald-400" />
                RESULTS &amp; DELIVERABLES
              </h3>
              <p className="text-zinc-300">{project.caseStudy.result}</p>
            </section>

            {/* Technologies */}
            <section className="space-y-4 border-t border-white/[0.06] pt-8">
              <h3 className="font-display text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase">
                TECHNOLOGIES UTILIZED
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 font-mono text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Action Links Bar */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              {project.projectUrl !== '#' && !project.projectUrl.includes('Coming Soon') ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-colors"
                >
                  <span>LAUNCH LIVE PROJECT</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-zinc-500 font-mono text-xs cursor-not-allowed">
                  <span>DEPLOYMENT: {project.projectUrl}</span>
                </span>
              )}

              {project.githubUrl.startsWith('http') ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-zinc-200 hover:text-white hover:border-white/30 font-mono text-xs transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-500 font-mono text-xs">
                  <Lock className="w-3.5 h-3.5 text-zinc-600" />
                  <span>{project.githubUrl}</span>
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-zinc-500 hover:text-white transition-colors"
            >
              CLOSE CASE STUDY [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
