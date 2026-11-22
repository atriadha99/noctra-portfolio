'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Plus, Check, ThumbsUp, ChevronDown, ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';
import { useLanguageStore } from '@/store/languageStore';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal, toggleBookmark, isBookmarked } = useStreamingStore();
  const { language, t } = useLanguageStore();
  const bookmarked = isBookmarked(project.id);
  const [liked, setLiked] = useState(false);

  const displayTagline = language === 'en' && project.taglineEn ? project.taglineEn : project.tagline;

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
        className="w-full h-full rounded-[4px] overflow-hidden bg-[#181818] border border-white/10 relative cursor-pointer shadow-md transition-transform duration-300 flex flex-col justify-between"
      >
        {/* Task 11: 16:9 Cover Image (Screenshots for live projects, dark consistent template for others) */}
        <div className="absolute inset-0 overflow-hidden bg-[#181818]">
          <img
            src={`/covers/${project.id}.webp?v=5`}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Netflix Exact Multi-Stop Gradient Overlay for high text contrast */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,15,15,0.4) 0%, rgba(20,20,20,0.55) 35%, rgba(15,15,15,0.94) 90%)',
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
            {project.matchScore}% {t('Cocok', 'Match')}
          </span>
        </div>

        {/* Center / Bottom Typography */}
        <div className="relative z-10 p-3 pt-0 space-y-1">
          <h4 className="font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-zinc-100 transition-colors">
            {project.title}
          </h4>

          <p className="text-[11px] text-zinc-400 line-clamp-1 font-light">
            {displayTagline}
          </p>

          {/* Quick Genres Bullet List */}
          <div className="flex items-center gap-1 text-[10px] text-zinc-300 truncate">
            {project.techStack.slice(0, 3).map((tech, i) => (
              <React.Fragment key={tech}>
                {i > 0 && <span className="text-[#E50914]">•</span>}
                <span>{tech}</span>
              </React.Fragment>
            ))}
          </div>

          {/* Direct Verified Action Links on Card for instant access */}
          {(project.verifiedLiveUrl || project.verifiedGithubUrl) && (
            <div className="flex items-center gap-1.5 pt-1">
              {project.verifiedLiveUrl && (
                <a
                  href={project.verifiedLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-white text-black text-[10px] font-bold hover:bg-white/80 transition-colors cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.verifiedGithubUrl && (
                <a
                  href={project.verifiedGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[3px] bg-[#222222] text-white border border-white/20 text-[10px] font-bold hover:border-white transition-colors cursor-pointer"
                  title="GitHub Repository"
                >
                  <Github className="w-2.5 h-2.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}
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

      {/* Netflix Hover Enlarge Popup Panel (Desktop) - bounded to card footprint to avoid covering neighbors */}
      <div
        className={`hidden md:block absolute -top-3 -left-1 w-[calc(100%+8px)] rounded-md bg-[#181818] shadow-2xl border border-white/20 z-50 overflow-hidden transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 scale-[1.02] pointer-events-auto shadow-[0_12px_36px_rgba(0,0,0,0.95)]'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Preview Thumbnail */}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden bg-black cursor-pointer flex flex-col justify-between p-3"
          onClick={() => openModal(project)}
        >
          {/* Cover image in hover preview */}
          <img
            src={`/covers/${project.id}.webp?v=5`}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-70 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />

          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: `radial-gradient(circle at 75% 20%, ${project.accentColor}50 0%, transparent 70%), linear-gradient(180deg, rgba(24,24,24,0.3) 0%, rgba(20,20,20,0.95) 100%)`,
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

          {/* Prominent Live Demo & GitHub Buttons in Hover Modal */}
          {(project.verifiedLiveUrl || project.verifiedGithubUrl) && (
            <div className="flex items-center gap-2 pt-0.5">
              {project.verifiedLiveUrl && (
                <a
                  href={project.verifiedLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-white text-black text-xs font-bold hover:bg-white/90 active:bg-white/70 transition-colors shadow cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.verifiedGithubUrl && (
                <a
                  href={project.verifiedGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[#222222] text-white border border-white/20 text-xs font-bold hover:border-white active:bg-white/10 transition-colors shadow cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          )}

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
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-white">
            {project.techStack.map((tech, i) => (
              <React.Fragment key={tech}>
                {i > 0 && <span className="text-[#E50914] text-[10px]">•</span>}
                <span className="whitespace-nowrap">{tech}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
