'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectCarouselRowProps {
  id: string;
  title: string;
  badge?: string;
  subtitle?: string;
  projects: Project[];
  emptyMessage?: string;
}

export default function ProjectCarouselRow({
  id,
  title,
  badge,
  subtitle,
  projects,
  emptyMessage,
}: ProjectCarouselRowProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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

  if (projects.length === 0 && !emptyMessage) {
    return null;
  }

  return (
    <div
      id={id}
      className="relative space-y-3 py-4 md:py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Row Header */}
      <div className="flex items-baseline justify-between px-6 md:px-12">
        <div className="flex items-center gap-3">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>{title}</span>
            {badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider font-semibold border border-blue-500/30 bg-blue-500/10 text-blue-400 uppercase">
                {badge}
              </span>
            )}
          </h3>
          {subtitle && (
            <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
              {subtitle}
            </span>
          )}
        </div>

        <span className="text-xs font-mono text-zinc-400">
          {projects.length} {projects.length === 1 ? 'Title' : 'Titles'}
        </span>
      </div>

      {/* Carousel Track Container */}
      {projects.length === 0 && emptyMessage ? (
        <div className="mx-6 md:mx-12 p-8 rounded-xl border border-dashed border-white/10 bg-zinc-900/40 text-center space-y-2">
          <p className="text-sm font-mono text-zinc-400">{emptyMessage}</p>
          <p className="text-xs text-zinc-400">
            Hover over any project card and click the <span className="text-blue-400 font-bold">+</span> button to add it to your personal streaming queue.
          </p>
        </div>
      ) : (
        <div className="relative group/carousel">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              aria-label={`Scroll ${title} left`}
              className={`absolute left-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/85 flex items-center justify-center text-white transition-opacity duration-200 cursor-pointer backdrop-blur-xs ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              aria-label={`Scroll ${title} right`}
              className={`absolute right-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-black/60 hover:bg-black/85 flex items-center justify-center text-white transition-opacity duration-200 cursor-pointer backdrop-blur-xs ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Horizontal Scrolling Row */}
          <div
            ref={rowRef}
            className="flex items-center gap-4 sm:gap-5 overflow-x-auto overflow-y-visible px-6 md:px-12 py-4 scroll-smooth no-scrollbar scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
