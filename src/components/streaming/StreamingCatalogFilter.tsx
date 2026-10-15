'use client';

import React, { useMemo, useState } from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown, Bookmark, Sparkles } from 'lucide-react';
import { Project, projectsData } from '@/data/projects';
import { useStreamingStore } from '@/store/streamingStore';
import ProjectCard from './ProjectCard';

const categories = [
  { id: 'ALL', label: 'All Titles' },
  { id: 'Web Development', label: 'Web Development' },
  { id: 'Mobile Development', label: 'Mobile Development' },
  { id: 'UI/UX', label: 'UI/UX' },
  { id: 'Backend & Database', label: 'Backend & Database' },
  { id: 'Experimental', label: 'Experimental' },
  { id: 'MY_LIST', label: '🔖 My List' },
];

export default function StreamingCatalogFilter() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    bookmarkedIds,
  } = useStreamingStore();

  const [sortBy, setSortBy] = useState<'match' | 'year' | 'title'>('match');

  // Filtered and Sorted list
  const filteredProjects = useMemo(() => {
    let list = [...projectsData];

    // Filter by category
    if (selectedCategory === 'MY_LIST') {
      list = list.filter((p) => bookmarkedIds.includes(p.id));
    } else if (selectedCategory !== 'ALL') {
      list = list.filter(
        (p) =>
          p.categories?.includes(selectedCategory as any) ||
          p.categoryGroup === selectedCategory ||
          p.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.role.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'match') return b.matchScore - a.matchScore;
      if (sortBy === 'year') return b.year.localeCompare(a.year);
      return a.title.localeCompare(b.title);
    });

    return list;
  }, [selectedCategory, searchQuery, sortBy, bookmarkedIds]);

  const hasActiveFilter = selectedCategory !== 'ALL' || searchQuery.trim().length > 0;

  const clearAllFilters = () => {
    setSelectedCategory('ALL');
    setSearchQuery('');
  };

  return (
    <div id="catalog" className="px-6 md:px-12 py-12 border-t border-white/[0.08] space-y-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E50914] mb-2 uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KATALOG TAYANGAN NOCTRA</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Telusuri menurut Kategori
          </h2>
        </div>

        {/* Live Filter Metric */}
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
          <span>
            MENAMPILKAN <strong className="text-white font-bold">{filteredProjects.length}</strong> DARI{' '}
            {projectsData.length} JUDUL
          </span>
          {hasActiveFilter && (
            <button
              onClick={clearAllFilters}
              className="text-[#E50914] hover:underline transition-colors cursor-pointer"
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-3 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-md">
        {/* Category Pills (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count =
              cat.id === 'MY_LIST'
                ? bookmarkedIds.length
                : cat.id === 'ALL'
                ? projectsData.length
                : projectsData.filter((p) => p.categoryGroup === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 active:scale-95 ${
                  isSelected
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/[0.08]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/10 text-black' : 'bg-white/10 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3">
          {/* Instant Search Bar */}
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search title, tech (e.g. React)..."
              aria-label="Search projects by name, technology, or category"
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'match' | 'year' | 'title')}
              aria-label="Sort projects"
              className="bg-transparent text-white text-xs font-mono focus:outline-none cursor-pointer"
            >
              <option value="match" className="bg-zinc-900 text-white">
                Match Score
              </option>
              <option value="year" className="bg-zinc-900 text-white">
                Timeline / Year
              </option>
              <option value="title" className="bg-zinc-900 text-white">
                Title A-Z
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Filtered Grid View */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-zinc-950/40 border border-dashed border-white/10 space-y-3">
          <p className="text-base font-mono text-zinc-300">
            No projects matched your criteria for "{searchQuery || selectedCategory}".
          </p>
          <p className="text-xs text-zinc-500">
            Try searching for terms like <strong className="text-zinc-300">"React"</strong>,{' '}
            <strong className="text-zinc-300">"Android"</strong>,{' '}
            <strong className="text-zinc-300">"Supabase"</strong>, or reset your filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-zinc-200 transition-colors mt-2"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="w-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
