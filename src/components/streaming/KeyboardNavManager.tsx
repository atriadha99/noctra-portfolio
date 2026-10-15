'use client';

import React, { useEffect, useRef } from 'react';
import { useStreamingStore } from '@/store/streamingStore';
import { projectsData } from '@/data/projects';

export default function KeyboardNavManager() {
  const {
    activeModalProject,
    closeModal,
    openModal,
    isEasterEggOpen,
    openEasterEgg,
    closeEasterEgg,
    showToast,
    isSearchOpen,
    setIsSearchOpen,
  } = useStreamingStore();

  const keyBuffer = useRef<string[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in inputs or textareas
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        if (e.key === 'Escape') {
          target.blur();
        }
        return;
      }

      // 1. Escape key
      if (e.key === 'Escape') {
        if (isEasterEggOpen) {
          closeEasterEgg();
          return;
        }
        if (activeModalProject) {
          closeModal();
          return;
        }
        if (isSearchOpen) {
          setIsSearchOpen(false);
          return;
        }
      }

      // 2. Cmd/Ctrl + K shortcut
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Toggle easter egg or search
        if (!isEasterEggOpen) {
          openEasterEgg();
          showToast('⚡ Director\'s Secret Cut & Developer Mode Unlocked!');
        } else {
          closeEasterEgg();
        }
        return;
      }

      // 3. Secret keyword typing buffer (detecting: coffee, dev, noctra, espresso)
      if (e.key.length === 1 && /[a-z]/i.test(e.key)) {
        keyBuffer.current.push(e.key.toLowerCase());

        // Keep buffer to last 10 characters
        if (keyBuffer.current.length > 10) {
          keyBuffer.current.shift();
        }

        const bufferStr = keyBuffer.current.join('');

        if (
          bufferStr.endsWith('coffee') ||
          bufferStr.endsWith('dev') ||
          bufferStr.endsWith('noctra') ||
          bufferStr.endsWith('espresso')
        ) {
          openEasterEgg();
          showToast('☕ Easter Egg Unlocked: Director\'s Secret Cut & Barista Mode!');
          keyBuffer.current = [];
        }

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          keyBuffer.current = [];
        }, 3000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    activeModalProject,
    closeModal,
    openModal,
    isEasterEggOpen,
    openEasterEgg,
    closeEasterEgg,
    showToast,
    isSearchOpen,
    setIsSearchOpen,
  ]);

  return null;
}
