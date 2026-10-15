'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Check, ThumbsUp, ChevronDown } from 'lucide-react';
import { Project } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal, toggleBookmark, isBookmarked } = useStreamingStore();
  const bookmarked = isBookmarked(project.id);
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative flex-none w-[240px] sm:w-[280px] md:w-[320px] aspect-[16/9] select-none group focus-within:z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Card (Normal Flow) */}
      <div
        onClick={() => openModal(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal(project);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${project.title} - ${project.matchScore}% cocok`}
        className="w-full h-full rounded-[4px] overflow-hidden bg-[#181818] border border-white/5 relative cursor-pointer shadow-md transition-transform duration-300 flex flex-col justify-between"
      >
        {/* Background Visual Art & Accent Glow */}
        <div
          className="absolute inset-0 opacity-40 transition-opacity duration-300 group-hover:opacity-75"
          style={{
            background: `radial-gradient(circle at 75% 20%, ${project.accentColor}40 0%, transparent 70%), linear-gradient(180deg, rgba(24,24,24,0.4) 0%, rgba(20,20,20,0.95) 100%)`,
          }}
        />

        {/* Diagonal Subtle Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.06) 75%, transparent 75%, transparent)',
            backgroundSize: '16px 16px',
          }}
        />

        {/* Top Card Badges */}
        <div className="relative z-10 flex items-center justify-between p-3 text-[11px] font-sans">
          <div className="flex items-center gap-1.5">
            <span className="text-[#E50914] font-black text-sm">N</span>
            <span className="text-[10px] text-zinc-300 font-semibold uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <span className="text-[#46d369] font-bold text-xs">
            {project.matchScore}% Cocok
          </span>
        </div>

        {/* Center / Bottom Typography */}
        <div className="relative z-10 p-3 pt-0 space-y-0.5">
          <h4 className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h4>

          <p className="text-[11px] text-zinc-400 line-clamp-1 font-light">
            {project.tagline}
          </p>

          {/* Quick Genres Bullet List */}
          <div className="flex items-center gap-1 text-[10px] text-zinc-300 pt-1 truncate">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <React.Fragment key={tech}>
                {i > 0 && <span className="text-[#E50914]">•</span>}
                <span>{tech}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* If Continue Building: Red Progress Bar at Card Bottom like Netflix */}
        {project.isContinueBuilding && (
          <div className="relative z-10 w-full h-1 bg-zinc-700 overflow-hidden">
            <div
              className="h-full bg-[#E50914]"
              style={{ width: `${project.progressPercentage || 80}%` }}
            />
          </div>
        )}
      </div>

      {/* Netflix Hover Enlarge Popup Panel (Desktop) */}
      <div
        className={`hidden md:block absolute -top-12 -left-8 w-[380px] rounded-md bg-[#181818] shadow-2xl border border-white/20 z-50 overflow-hidden transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 scale-105 pointer-events-auto shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Preview Thumbnail */}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden bg-black cursor-pointer flex flex-col justify-between p-3"
          onClick={() => openModal(project)}
        >
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at 75% 20%, ${project.accentColor}50 0%, transparent 70%), linear-gradient(180deg, rgba(24,24,24,0.4) 0%, rgba(20,20,20,0.95) 100%)`,
            }}
          />

          <div className="relative z-10 flex items-center justify-between text-xs font-bold">
            <span className="text-[#E50914] font-black text-lg">N</span>
            <span className="text-[#46d369] font-mono">{project.matchScore}% Cocok</span>
          </div>

          <div className="relative z-10">
            <h4 className="font-display text-lg font-bold text-white drop-shadow">
              {project.title}
            </h4>
          </div>
        </div>

        {/* Interactive Action Bar */}
        <div className="p-4 space-y-3 bg-[#181818]">
          <div className="flex items-center justify-between">
            {/* Left circular buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(project);
                }}
                className="w-9 h-9 rounded-full bg-white hover:bg-white/80 text-black flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow"
                title="Putar Proyek"
              >
                <Play className="w-4 h-4 fill-black translate-x-0.5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(project.id, project.title);
                }}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  bookmarked
                    ? 'border-[#E50914] bg-[#E50914]/20 text-[#E50914]'
                    : 'border-white/40 bg-[#2a2a2a] text-white hover:border-white'
                }`}
                title={bookmarked ? 'Hapus dari Daftar Saya' : 'Tambah ke Daftar Saya'}
              >
                {bookmarked ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLiked(!liked);
                }}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  liked
                    ? 'border-[#46d369] bg-[#46d369]/20 text-[#46d369]'
                    : 'border-white/40 bg-[#2a2a2a] text-white hover:border-white'
                }`}
                title="Suka"
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
            </div>

            {/* Right expand chevron button */}
            <button
              onClick={() => openModal(project)}
              className="w-9 h-9 rounded-full border border-white/40 bg-[#2a2a2a] hover:border-white text-white flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
              title="Info Selengkapnya"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Metadata Row */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#46d369] font-bold">{project.matchScore}% Cocok</span>
            <span className="border border-white/40 px-1 py-0.2 rounded text-[10px] text-zinc-300">
              {project.contentRating}
            </span>
            <span className="text-zinc-400 text-xs">{project.runtime}</span>
            <span className="border border-white/40 px-1 py-0.2 rounded text-[9px] text-zinc-300 font-bold">
              HD
            </span>
          </div>

          {/* Genre Chips with Red Dots */}
          <div className="flex items-center gap-1.5 text-xs text-white truncate">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                {i > 0 && <span className="text-[#E50914] text-[10px]">•</span>}
                <span>{tech}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
