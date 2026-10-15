'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Play,
  Plus,
  Check,
  Share2,
  ExternalLink,
  Github,
  ThumbsUp,
  Volume2,
  VolumeX,
  Layers,
  Sparkles,
  ChevronDown,
  TrendingUp,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Award
} from 'lucide-react';
import { Project, projectsData } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';
import SimulatedVideoPreview from './SimulatedVideoPreview';

export default function StreamingDetailModal() {
  const {
    activeModalProject,
    closeModal,
    openModal,
    toggleBookmark,
    isBookmarked,
    showToast,
    isMuted,
    toggleMute,
  } = useStreamingStore();

  const [activeTab, setActiveTab] = useState<'episodes' | 'case-study' | 'specs' | 'gallery'>('episodes');
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);
  const [liked, setLiked] = useState(false);

  // Keyboard navigation & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject, closeModal]);

  // Reset tab on modal project change
  useEffect(() => {
    if (activeModalProject) {
      setActiveTab('episodes');
      setSelectedScreenshotIdx(0);
    }
  }, [activeModalProject?.id]);

  if (!activeModalProject) return null;

  const project = activeModalProject;
  const bookmarked = isBookmarked(project.id);

  // Similar projects for "Konten Serupa / More Like This"
  const similarProjects = projectsData
    .filter((p) => p.id !== project.id && (p.categoryGroup === project.categoryGroup || p.isFeatured))
    .slice(0, 3);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/#${project.id}`;
      navigator.clipboard.writeText(url);
      showToast(`Tautan "${project.title}" disalin ke clipboard!`);
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window Container (Netflix exact #181818 charcoal box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[6px] bg-[#181818] shadow-2xl text-white z-10 my-auto scrollbar-thin scrollbar-thumb-zinc-700 select-none"
        >
          {/* Top Hero Banner with Simulated Preview & Multi-stop Gradient */}
          <div className="relative w-full h-72 sm:h-96 md:h-[420px] overflow-hidden bg-black">
            <SimulatedVideoPreview project={project} isPlaying={true} isMuted={isMuted} />

            {/* Netflix Gradient Mask seamlessly into #181818 */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, transparent 50%, rgba(24,24,24,0.7) 75%, #181818 100%), linear-gradient(77deg, rgba(0,0,0,0.8) 0%, transparent 70%)',
              }}
            />

            {/* Top Close Button (Exact Netflix Round Grey Badge) */}
            <button
              onClick={closeModal}
              aria-label="Tutup jendela"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#181818]/85 hover:bg-[#181818] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Action Overlay on Banner */}
            <div className="absolute bottom-6 left-6 right-6 z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
                <span className="text-[#E50914] font-black text-sm">N</span>
                <span className="text-zinc-300 uppercase">{project.category}</span>
              </div>

              <h2
                id="modal-title"
                className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase"
              >
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-white/90 max-w-2xl font-light line-clamp-2 drop-shadow">
                {project.tagline}
              </p>

              {/* Action Buttons Toolbar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Netflix Play Button */}
                <a
                  href={
                    project.projectUrl !== '#' && !project.projectUrl.includes('Coming Soon')
                      ? project.projectUrl
                      : project.githubUrl.startsWith('http')
                      ? project.githubUrl
                      : '#'
                  }
                  target={
                    project.projectUrl.startsWith('http') || project.githubUrl.startsWith('http')
                      ? '_blank'
                      : '_self'
                  }
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-[4px] bg-white text-black font-bold text-sm sm:text-base hover:bg-white/80 active:bg-white/60 transition-colors cursor-pointer shadow-lg"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Putar Demo</span>
                </a>

                {/* Circle My List */}
                <button
                  onClick={() => toggleBookmark(project.id, project.title)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    bookmarked
                      ? 'border-[#E50914] bg-[#E50914]/20 text-[#E50914]'
                      : 'border-white/40 bg-[#2a2a2a] text-white hover:border-white'
                  }`}
                  title={bookmarked ? 'Hapus dari Daftar Saya' : 'Tambah ke Daftar Saya'}
                >
                  {bookmarked ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </button>

                {/* Circle Like */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                    liked
                      ? 'border-[#46d369] bg-[#46d369]/20 text-[#46d369]'
                      : 'border-white/40 bg-[#2a2a2a] text-white hover:border-white'
                  }`}
                  title="Suka"
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>

                {/* Circle GitHub Repo */}
                {project.githubUrl.startsWith('http') && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/40 bg-[#2a2a2a] text-white hover:border-white flex items-center justify-center transition-all cursor-pointer"
                    title="Buka Repositori GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {/* Circle Share */}
                <button
                  onClick={handleShare}
                  aria-label="Bagikan"
                  className="w-10 h-10 rounded-full border border-white/40 bg-[#2a2a2a] text-white hover:border-white flex items-center justify-center transition-all cursor-pointer"
                  title="Salin Tautan"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Netflix Meta & Two Columns Layout */}
          <div className="p-6 sm:p-10 space-y-8 bg-[#181818]">
            {/* Top 2 Columns: Left Synopsis vs Right Cast/Credits */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Left Column (65%) */}
              <div className="md:col-span-8 space-y-4">
                {/* Meta Badges Row */}
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-[#46d369] font-bold text-base">
                    {project.matchScore}% Cocok
                  </span>
                  <span className="text-zinc-400 font-medium">{project.year}</span>
                  <span className="border border-white/40 px-1.5 py-0.2 rounded text-xs text-zinc-300">
                    {project.contentRating}
                  </span>
                  <span className="text-zinc-300 text-xs">{project.runtime}</span>
                  <span className="border border-white/40 px-1.5 py-0.2 rounded text-[10px] text-zinc-300 font-bold">
                    Ultra HD 4K
                  </span>
                  <span className="border border-white/40 px-1.5 py-0.2 rounded text-[10px] text-zinc-300 font-bold">
                    Spatial Audio
                  </span>
                </div>

                {/* Synopsis */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Case Study Overview highlight */}
                <div className="p-4 rounded bg-[#232323] border border-white/10 space-y-1.5 text-xs">
                  <span className="text-zinc-400 font-bold block">RINGKASAN EKSEKUTIF</span>
                  <p className="text-zinc-300 font-light leading-relaxed">
                    {project.caseStudy.overview}
                  </p>
                </div>
              </div>

              {/* Right Column (35%): Exact Netflix Cast & Genres */}
              <div className="md:col-span-4 space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-zinc-500">Pemeran: </span>
                  <span className="text-zinc-200 font-medium">{project.role} (Andika Agung Triadha)</span>
                </div>

                <div>
                  <span className="text-zinc-500">Genre: </span>
                  <span className="text-zinc-200 font-medium">
                    {project.techStack.join(', ')}
                  </span>
                </div>

                <div>
                  <span className="text-zinc-500">Kategori: </span>
                  <span className="text-zinc-200 font-medium">
                    {project.categoryGroup}, {project.category}
                  </span>
                </div>

                <div>
                  <span className="text-zinc-500">Status Rilis: </span>
                  <span className="text-[#46d369] font-semibold">
                    {project.developmentStatus || 'Production Deployed'}
                  </span>
                </div>
              </div>
            </div>

            {/* Netflix Episode & Chapters Section */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Episode &amp; Bab Rekayasa
                </h3>
                <span className="text-xs text-zinc-400 font-mono">Musim 1</span>
              </div>

              {/* Episode Items List */}
              <div className="space-y-3">
                {/* Episode 1 */}
                <div className="p-4 rounded-[4px] bg-[#222222] hover:bg-[#2a2a2a] transition-colors border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-zinc-400 w-6">1</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        Latar Belakang &amp; Tantangan (The Challenge)
                      </h4>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-xl">
                        {project.caseStudy.problem}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 shrink-0">Problem Scope</span>
                </div>

                {/* Episode 2 */}
                <div className="p-4 rounded-[4px] bg-[#222222] hover:bg-[#2a2a2a] transition-colors border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-zinc-400 w-6">2</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        Pendekatan Arsitektur &amp; Desain (Approach)
                      </h4>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-xl">
                        {project.caseStudy.approach}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 shrink-0">Architecture</span>
                </div>

                {/* Episode 3 */}
                <div className="p-4 rounded-[4px] bg-[#222222] hover:bg-[#2a2a2a] transition-colors border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-zinc-400 w-6">3</span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        Hasil &amp; Dampak Produksi (Results &amp; Impact)
                      </h4>
                      <p className="text-xs text-zinc-300 font-light leading-relaxed max-w-xl">
                        {project.caseStudy.result}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#46d369] shrink-0 font-bold">Production Live</span>
                </div>
              </div>
            </div>

            {/* Konten Serupa (More Like This Grid) */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Konten Serupa
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {similarProjects.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => openModal(sim)}
                    className="p-4 rounded-[4px] bg-[#222222] hover:bg-[#2a2a2a] border border-white/5 transition-all cursor-pointer space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#46d369] font-bold">{sim.matchScore}% Cocok</span>
                        <span className="border border-white/30 px-1 py-0.2 rounded text-[10px] text-zinc-400">
                          {sim.contentRating}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-base text-white">
                        {sim.title}
                      </h4>

                      <p className="text-xs text-zinc-400 font-light line-clamp-3 leading-relaxed">
                        {sim.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                      <span>{sim.category}</span>
                      <span className="text-white hover:text-[#E50914] font-bold">Lihat &gt;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tentang [Project Title] (Netflix Project Credits Footer) */}
            <div className="space-y-2 pt-6 border-t border-white/10 text-xs text-zinc-400 leading-relaxed font-light">
              <h4 className="font-display font-bold text-base text-white pb-1">
                Tentang {project.title}
              </h4>
              <p>
                <strong className="text-zinc-300 font-medium">Perekayasa Perangkat Lunak: </strong>
                Andika Agung Triadha (Front-End &amp; UI Architect)
              </p>
              <p>
                <strong className="text-zinc-300 font-medium">Tumpukan Teknologi: </strong>
                {project.techStack.join(', ')}
              </p>
              <p>
                <strong className="text-zinc-300 font-medium">Klasifikasi Usia Proyek: </strong>
                Cocok untuk dievaluasi oleh perekrut teknis, tim engineering, dan calon klien.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
