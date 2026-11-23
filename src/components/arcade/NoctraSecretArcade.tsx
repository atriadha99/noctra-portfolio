'use client';

import React, { useState, useEffect } from 'react';
import { useStreamingStore } from '@/store/streamingStore';
import UpsideDownTransition from './UpsideDownTransition';
import NoctraArcadeGame from './NoctraArcadeGame';
import { arcadeAudio } from './ArcadeAudio';

export default function NoctraSecretArcade() {
  const { isArcadeOpen, closeArcade } = useStreamingStore();
  const [phase, setPhase] = useState<'transition' | 'game'>('transition');

  useEffect(() => {
    if (isArcadeOpen) {
      setPhase('transition');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      arcadeAudio.stopMusic();
    }

    return () => {
      document.body.style.overflow = 'unset';
      arcadeAudio.stopMusic();
    };
  }, [isArcadeOpen]);

  // Global ESC key listener to exit arcade anytime
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isArcadeOpen) {
        closeArcade();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isArcadeOpen, closeArcade]);

  if (!isArcadeOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      {phase === 'transition' ? (
        <UpsideDownTransition onComplete={() => setPhase('game')} />
      ) : (
        <NoctraArcadeGame onClose={closeArcade} />
      )}
    </div>
  );
}
