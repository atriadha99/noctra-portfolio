'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Info, Plus, Check } from 'lucide-react';
import { Project } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';

interface Top10CarouselRowProps {
  id: string;
  title: string;
  projects: Project[];
}

export default function Top10CarouselRow({ id, title, projects }: Top10CarouselRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { openModal, toggleBookmark, isBookmarked } = useStreamingStore();

  const checkScroll = useCallback(() => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, projects.length]);

  const scroll = (direction: 'left' | 'right') => {
    const el = rowRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div id={id} className="relative space-y-2 py-4 group/row select-none">
      {/* Row Header */}
      <div className="px-4 sm:px-8 md:px-12 flex items-center gap-2">
        <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2 group-hover/row:text-zinc-200 transition-colors">
          <span>{title}</span>
          <span className="text-xs text-cyan-400 opacity-0 group-hover/row:opacity-100 transition-opacity font-normal hidden sm:inline-flex items-center">
            Jelajahi Semua &gt;
          </span>
        </h3>
      </div>

      {/* Carousel Container with Chevrons */}
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute left-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/85 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        {/* Horizontal Track */}
        <div
          ref={rowRef}
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 sm:px-8 md:px-12 py-3"
        >
          {projects.slice(0, 10).map((project, idx) => {
            const rank = idx + 1;
            const bookmarked = isBookmarked(project.id);

            return (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="relative flex-none flex items-center cursor-pointer group/card focus:outline-none"
              >
                {/* Netflix Iconic Giant Number */}
                <div className="netflix-top10-number -mr-8 sm:-mr-12 pointer-events-none select-none z-0">
                  {rank}
                </div>

                {/* Card Poster */}
                <div className="relative z-10 w-[140px] sm:w-[170px] md:w-[190px] aspect-[2/3] rounded-[4px] overflow-hidden bg-[#181818] border border-white/10 group-hover/card:scale-105 group-hover/card:border-white/40 transition-all duration-300 shadow-xl flex flex-col justify-between p-3.5">
                  {/* Card Background Gradient */}
                  <div
                    className="absolute inset-0 opacity-40 transition-opacity group-hover/card:opacity-70"
                    style={{
                      background: `radial-gradient(circle at 50% 20%, ${project.accentColor}50 0%, transparent 80%), linear-gradient(180deg, rgba(20,20,20,0.4) 0%, #141414 100%)`,
                    }}
                  />

                  {/* Top "N" Series Badge */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-bold">
                    <span className="text-[#E50914] font-black text-sm">N</span>
                    <span className="text-[#46d369] font-mono">{project.matchScore}%</span>
                  </div>

                  {/* Bottom Title & Tagline */}
                  <div className="relative z-10 space-y-1">
                    <span className="text-[9px] font-mono uppercase text-zinc-400 block truncate">
                      {project.category}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white leading-tight drop-shadow">
                      {project.title}
                    </h4>

                    {/* Quick Micro Action Icons on Hover */}
                    <div className="pt-2 flex items-center gap-1.5 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                        className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors"
                        title="Putar"
                      >
                        <Play className="w-3.5 h-3.5 fill-black" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(project.id, project.title);
                        }}
                        className="w-7 h-7 rounded-full bg-[#2a2a2a] border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors"
                        title="Daftar Saya"
                      >
                        {bookmarked ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute right-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/85 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}
