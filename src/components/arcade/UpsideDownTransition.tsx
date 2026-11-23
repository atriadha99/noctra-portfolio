'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { arcadeAudio } from './ArcadeAudio';

interface UpsideDownTransitionProps {
  onComplete: () => void;
}

export default function UpsideDownTransition({ onComplete }: UpsideDownTransitionProps) {
  const [phase, setPhase] = useState<'glitch' | 'suckIn' | 'title' | 'done'>('glitch');

  useEffect(() => {
    // Play Gate Warp sound
    arcadeAudio.playGateWarp();

    const t1 = setTimeout(() => setPhase('suckIn'), 500);
    const t2 = setTimeout(() => setPhase('title'), 1200);
    const t3 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* Red Glitch & Dimension Tear Flash */}
      {phase === 'glitch' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 0.9, 0] }}
          transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.7, 1] }}
          className="absolute inset-0 bg-red-600/40 mix-blend-screen pointer-events-none"
        />
      )}

      {/* Floating Upside Down Spores */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${(i * 19) % 100}vw`,
              y: '105vh',
              opacity: 0.2 + (i % 5) * 0.15,
              scale: 0.5 + (i % 4) * 0.5,
            }}
            animate={{
              y: '-10vh',
              x: `${((i * 19) % 100) + (i % 2 === 0 ? 6 : -6)}vw`,
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-red-400/70 shadow-[0_0_8px_#ef4444]"
          />
        ))}
      </div>

      {/* Vignette & Red Mist */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-red-950/20 to-black pointer-events-none" />

      {/* Title Card (Stranger Things Retro Font Style) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 space-y-4"
      >
        <div className="inline-block border-y-2 border-red-600/80 py-2 px-8">
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.4em] text-red-400 font-bold uppercase drop-shadow-[0_0_10px_#ef4444]">
            NOCTRA SECRET ARCADE
          </span>
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-widest text-transparent uppercase drop-shadow-[0_0_25px_rgba(239,68,68,0.9)]"
          style={{
            WebkitTextStroke: '2px #ef4444',
            textShadow: '0 0 20px #dc2626, 0 0 40px #991b1b',
            fontFamily: 'serif',
          }}
        >
          THE UPSIDE DOWN
        </h1>

        <p className="text-sm sm:text-base font-mono text-zinc-400 tracking-wider">
          CHAPTER 01: THE HAWKINS RIFT
        </p>

        <p className="text-[11px] font-mono text-red-500/80 tracking-widest animate-pulse pt-6">
          [ KLIK ATAU TEKAN SPASI UNTUK MEMULAI ]
        </p>
      </motion.div>
    </div>
  );
}
