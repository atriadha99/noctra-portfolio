'use client';

import { create } from 'zustand';
import { Project } from '@/data/projects';

interface StreamingState {
  // Modal State
  activeModalProject: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;

  // Search & Filter State
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Bookmarking / "My List" State
  bookmarkedIds: string[];
  toggleBookmark: (id: string, title?: string) => void;
  isBookmarked: (id: string) => boolean;

  // Hero Preview State
  isHeroPreviewPlaying: boolean;
  setHeroPreviewPlaying: (playing: boolean) => void;
  isMuted: boolean;
  toggleMute: () => void;

  // Global Toast
  toast: { message: string; visible: boolean } | null;
  showToast: (message: string) => void;
  hideToast: () => void;

  // Easter Egg Modal State
  isEasterEggOpen: boolean;
  openEasterEgg: () => void;
  closeEasterEgg: () => void;
}

export const useStreamingStore = create<StreamingState>((set, get) => ({
  activeModalProject: null,
  openModal: (project) => {
    set({ activeModalProject: project });
  },
  closeModal: () => {
    set({ activeModalProject: null });
  },

  isEasterEggOpen: false,
  openEasterEgg: () => set({ isEasterEggOpen: true }),
  closeEasterEgg: () => set({ isEasterEggOpen: false }),

  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  selectedCategory: 'ALL',
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  isSearchOpen: false,
  setIsSearchOpen: (open) => set({ isSearchOpen: open }),

  bookmarkedIds: (() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('noctra_stream_bookmarks');
        return stored ? JSON.parse(stored) : ['pt-abb-dashboard', 'noctra-portfolio'];
      } catch {
        return ['pt-abb-dashboard', 'noctra-portfolio'];
      }
    }
    return ['pt-abb-dashboard', 'noctra-portfolio'];
  })(),

  toggleBookmark: (id: string, title?: string) => {
    const current = get().bookmarkedIds;
    const exists = current.includes(id);
    const updated = exists ? current.filter((item) => item !== id) : [...current, id];

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('noctra_stream_bookmarks', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save bookmark', e);
      }
    }

    set({ bookmarkedIds: updated });
    get().showToast(
      exists
        ? `Removed "${title || 'Project'}" from My List`
        : `Added "${title || 'Project'}" to My List`
    );
  },

  isBookmarked: (id: string) => get().bookmarkedIds.includes(id),

  isHeroPreviewPlaying: false,
  setHeroPreviewPlaying: (playing) => set({ isHeroPreviewPlaying: playing }),
  isMuted: true,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),

  toast: null,
  showToast: (message: string) => {
    set({ toast: { message, visible: true } });
    setTimeout(() => {
      set((state) =>
        state.toast?.message === message ? { toast: null } : state
      );
    }, 2800);
  },
  hideToast: () => set({ toast: null }),
}));
