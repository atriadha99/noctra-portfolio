'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Info, Volume2, VolumeX, RotateCcw, Plus, Check } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';
import SimulatedVideoPreview from './SimulatedVideoPreview';

// Top featured showcase projects
const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 4);

export default function CinematicHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const { openModal, toggleBookmark, isBookmarked, isMuted, toggleMute } = useStreamingStore();

  const currentProject = featuredProjects[currentIndex] || featuredProjects[0];
  const bookmarked = isBookmarked(currentProject.id);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setProgress(0);
  }, []);

  // Auto-rotation timer with progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 8000;
    const stepTime = 100;
    const increment = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      id="hero"
      aria-label="Cinematic Featured Billboard"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-end overflow-hidden pt-24 pb-20 sm:pb-28 px-4 sm:px-8 md:px-12 select-none bg-[#141414]"
    >
      {/* Background Cinematic Visual / Simulated Video */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#141414]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Simulated Live Video / Canvas Telemetry */}
            <SimulatedVideoPreview
              project={currentProject}
              isPlaying={true}
              isMuted={isMuted}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Netflix Exact Multi-Stop Gradient Overlays */}
        {/* Left-to-right dark gradient for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(77deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 80%)',
          }}
        />

        {/* Bottom vertical fade seamlessly into Netflix black #141414 */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, transparent 55%, rgba(20,20,20,0.6) 75%, #141414 100%)',
          }}
        />

        {/* Top subtle vignette */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Hero Content Column */}
      <div className="relative z-20 max-w-3xl space-y-4 sm:space-y-5">
        {/* Top "N SERIES" Badge */}
        <motion.div
          key={`series-${currentProject.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 tracking-[0.25em] text-xs font-bold"
        >
          <span className="text-[#E50914] font-black text-base leading-none">N</span>
          <span className="text-zinc-200 text-[11px] font-sans font-extrabold uppercase">
            S E R I E S
          </span>
        </motion.div>

        {/* Big Netflix Billboard Title */}
        <div className="space-y-2">
          <motion.h1
            key={`title-${currentProject.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] uppercase leading-[0.95]"
          >
            {currentProject.title}
          </motion.h1>

          {/* Top 10 Badge Ribbon */}
          <motion.div
            key={`top10-${currentProject.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2.5 pt-1"
          >
            <div className="flex items-center justify-center bg-[#E50914] text-white font-black text-[10px] sm:text-xs px-1.5 py-0.5 rounded-[2px] tracking-tight">
              TOP 10
            </div>
            <span className="text-white font-bold text-sm sm:text-base drop-shadow-md">
              #1 dalam Kategori Web &amp; Aplikasi Hari Ini
            </span>
          </motion.div>
        </div>

        {/* Synopsis Description */}
        <motion.p
          key={`desc-${currentProject.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] line-clamp-3"
        >
          {currentProject.description}
        </motion.p>

        {/* Signature Netflix Buttons: Play (Putar) and More Info (Selengkapnya) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {/* Exact Netflix White Play Button */}
          <a
            href={
              currentProject.projectUrl !== '#' && !currentProject.projectUrl.includes('Coming Soon')
                ? currentProject.projectUrl
                : currentProject.githubUrl.startsWith('http')
                ? currentProject.githubUrl
                : '#catalog'
            }
            target={
              currentProject.projectUrl.startsWith('http') || currentProject.githubUrl.startsWith('http')
                ? '_blank'
                : '_self'
            }
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-[4px] bg-white text-black font-bold text-sm sm:text-base hover:bg-white/80 active:bg-white/60 transition-colors shadow-lg cursor-pointer"
          >
            <Play className="w-5 h-5 fill-black" />
            <span>Putar Proyek</span>
          </a>

          {/* Exact Netflix Translucent Grey "More Info" Button */}
          <button
            onClick={() => openModal(currentProject)}
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3 rounded-[4px] bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.4)] text-white font-bold text-sm sm:text-base transition-colors backdrop-blur-sm cursor-pointer shadow-lg"
          >
            <Info className="w-5 h-5 text-white" />
            <span>Selengkapnya</span>
          </button>

          {/* Circle Add to My List */}
          <button
            onClick={() => toggleBookmark(currentProject.id, currentProject.title)}
            aria-label={bookmarked ? 'Hapus dari Daftar Saya' : 'Tambah ke Daftar Saya'}
            className={`w-11 h-11 rounded-full border border-white/40 flex items-center justify-center transition-all bg-[rgba(42,42,42,0.6)] hover:border-white ${
              bookmarked ? 'text-[#E50914] border-[#E50914]' : 'text-white'
            }`}
          >
            {bookmarked ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Right Edge: Exact Netflix Sound Button & Maturity Rating Tag */}
      <div className="absolute right-0 bottom-24 sm:bottom-32 z-20 flex items-center gap-3">
        {/* Circular Volume Toggle Button */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Nyalakan Audio' : 'Matikan Audio'}
          className="w-10 h-10 rounded-full border border-white/50 bg-[rgba(42,42,42,0.6)] hover:border-white text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Netflix Exact Maturity Rating Tag attached to right border */}
        <div className="bg-[rgba(51,51,51,0.6)] border-l-3 border-[#dcdcdc] py-1 pl-3 pr-6 sm:pr-10 text-xs sm:text-sm font-bold text-white flex items-center gap-2 select-none shadow">
          <span>{currentProject.contentRating}</span>
          <span className="text-zinc-400 font-normal">|</span>
          <span className="text-zinc-300 font-normal">{currentProject.runtime}</span>
        </div>
      </div>

      {/* Bottom Subtle Slide Indicator Tabs */}
      <div className="relative z-20 flex items-center gap-1.5 mt-8 sm:mt-12">
        {featuredProjects.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => {
              setCurrentIndex(idx);
              setProgress(0);
            }}
            aria-label={`Slide ${idx + 1}`}
            className="h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              width: currentIndex === idx ? '36px' : '12px',
              backgroundColor: currentIndex === idx ? '#E50914' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
