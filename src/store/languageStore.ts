'use client';

import { create } from 'zustand';

export type Language = 'id' | 'en';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (id: string, en: string) => string;
}

export const useLanguageStore = create<LanguageState>((set, get) => ({
  language: (() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('noctra_language');
        if (saved === 'id' || saved === 'en') return saved;
      } catch (e) {
        console.error('Failed to read language preference', e);
      }
    }
    return 'id'; // Default Bahasa Indonesia
  })(),

  setLanguage: (lang) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('noctra_language', lang);
      } catch (e) {
        console.error('Failed to save language preference', e);
      }
    }
    set({ language: lang });
  },

  toggleLanguage: () => {
    const nextLang = get().language === 'id' ? 'en' : 'id';
    get().setLanguage(nextLang);
  },

  t: (idText, enText) => {
    return get().language === 'en' ? enText : idText;
  },
}));
