'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Coffee,
  Camera,
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Flame,
  Volume2,
  Sliders,
  CheckCircle2,
  Eye,
  FileCode,
  Laptop
} from 'lucide-react';
import { useStreamingStore } from '@/store/streamingStore';

const funnyNotes = [
  {
    title: 'Git Commit at 02:45 AM after 4 double espressos',
    content: '"git commit -m \'fix: the universe now centers correctly with flexbox after sacrificing two espresso shots\'"',
  },
  {
    title: 'The Golden Extraction vs. Bundle Size Rule',
    content: 'Just like over-extracting coffee brings bitter tannins, over-bundling node_modules brings bitter TTFB. Keep both clean, calibrated, and under 30 seconds.',
  },
  {
    title: 'Peak Rush Hour Mise-en-Place',
    content: 'If your milk pitcher isn\'t chilled and your TypeScript types aren\'t strict, the Sunday morning rush will break your spirit.',
  },
  {
    title: 'Senior Dev vs Head Barista',
    content: 'A Senior Dev argues about tabs vs spaces. A Head Barista argues about 92.5°C vs 93.0°C water temperature. They are the same person.',
  },
];

const secretPhotography = [
  {
    title: 'Barista Morning Mise-en-Place',
    location: 'Riels Coffee, Bandung',
    camera: 'Fuji X-T4 • 35mm f/1.4',
    settings: '1/250s • f/2.0 • ISO 320',
    caption: 'Steam wand reflection, early morning natural window light before the 7:00 AM rush.',
    gradient: 'from-amber-950 via-zinc-900 to-black',
  },
  {
    title: 'Bandung Urban Texture',
    location: 'Jl. Braga, Bandung',
    camera: 'Fuji 35mm Film Simulation',
    settings: '1/500s • f/4.0 • ISO 160',
    caption: 'Neo-classical art-deco facades meeting modern street signage in rain reflections.',
    gradient: 'from-blue-950 via-zinc-900 to-black',
  },
  {
    title: 'Mechanical Pour-Over Dripper',
    location: 'Studio Noctra',
    camera: '35mm Prime Lens',
    settings: '1/125s • f/1.4 • ISO 400',
    caption: 'V60 ceramic spiral ribs catching blooming carbon dioxide degassing bubbles.',
    gradient: 'from-orange-950 via-zinc-900 to-black',
  },
];

const experimentalConcepts = [
  {
    title: 'Web Audio Drone Synthesizer',
    status: 'Experimental R&D',
    desc: 'Binaural 432Hz ambient soundscape generator written in Web Audio API for deep coding focus sessions.',
    tech: 'Web Audio API • OscillatorNode',
  },
  {
    title: 'Latte Art Physics Mesh',
    status: 'Prototype',
    desc: 'Fluid dynamics simulation on HTML5 Canvas modeling milk foam surface tension on espresso crema.',
    tech: 'Canvas 2D • Navier-Stokes Approximation',
  },
  {
    title: 'Terminal CLI Portfolio Mode',
    status: 'Internal Sandbox',
    desc: 'Lightweight bash environment where recruiters can type `cat resume.txt` or `ssh andika@noctra.dev`.',
    tech: 'TypeScript • V8 Parser',
  },
];

export default function EasterEggModal() {
  const { isEasterEggOpen, closeEasterEgg } = useStreamingStore();
  const [activeTab, setActiveTab] = useState<'coffee' | 'photo' | 'experimental' | 'notes'>('coffee');

  // Interactive V60 Brew Timer state
  const [brewSeconds, setBrewSeconds] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isBrewing) {
      interval = setInterval(() => {
        setBrewSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBrewing]);

  const resetBrew = () => {
    setIsBrewing(false);
    setBrewSeconds(0);
  };

  const getBrewStage = (sec: number) => {
    if (sec === 0) return 'Ready to Bloom (Add 45g water)';
    if (sec <= 45) return 'Bloom Phase: Carbon Dioxide degassing (0 — 45s)';
    if (sec <= 90) return 'Pour 1: Gentle spiral to 120g (45 — 90s)';
    if (sec <= 150) return 'Pour 2: Center pour to 225g (90 — 150s)';
    return 'Drawdown & Extraction Complete! Enjoy your pour-over ☕';
  };

  if (!isEasterEggOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeEasterEgg}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Secret Cut Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0c0c11] border border-amber-500/30 shadow-2xl text-white z-10 my-auto scrollbar-thin scrollbar-thumb-zinc-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Director Bar */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-gradient-to-r from-amber-500/10 via-zinc-900 to-black">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                <Coffee className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-lg text-white">
                    NOCTRA // DIRECTOR'S SECRET CUT
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    DEV MODE UNLOCKED
                  </span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  Hidden coffee logs, experimental labs &amp; 35mm street photography by Andika
                </p>
              </div>
            </div>

            <button
              onClick={closeEasterEgg}
              aria-label="Close easter egg"
              className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 transition-all active:scale-95"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-4 border-b border-white/10 bg-black/40 text-xs font-mono">
            <button
              onClick={() => setActiveTab('coffee')}
              className={`px-3 py-2 rounded-xl flex items-center gap-2 transition-all ${
                activeTab === 'coffee'
                  ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>V60 Brew Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('photo')}
              className={`px-3 py-2 rounded-xl flex items-center gap-2 transition-all ${
                activeTab === 'photo'
                  ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>35mm Photography</span>
            </button>

            <button
              onClick={() => setActiveTab('experimental')}
              className={`px-3 py-2 rounded-xl flex items-center gap-2 transition-all ${
                activeTab === 'experimental'
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Experimental Labs</span>
            </button>

            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-2 rounded-xl flex items-center gap-2 transition-all ${
                activeTab === 'notes'
                  ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Barista Dev Notes</span>
            </button>
          </div>

          {/* Modal Tab Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Tab 1: V60 Interactive Brew Lab */}
            {activeTab === 'coffee' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-zinc-900/80 border border-amber-500/20">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                      INTERACTIVE SPECIALTY EXTRACTION
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      The Andika V60 Golden Ratio (1:15)
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-lg">
                      15g Specialty Beans (Medium-Fine) • 225g Water at 92°C • Target Time: 2m 30s.
                    </p>
                  </div>

                  {/* Stopwatch Timer Display */}
                  <div className="flex flex-col items-center sm:items-end gap-3">
                    <div className="font-mono text-4xl sm:text-5xl font-bold text-amber-400 bg-black/60 px-5 py-2 rounded-xl border border-white/10 tracking-wider">
                      {Math.floor(brewSeconds / 60)
                        .toString()
                        .padStart(2, '0')}
                      :{(brewSeconds % 60).toString().padStart(2, '0')}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsBrewing(!isBrewing)}
                        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isBrewing ? 'Pause Timer' : 'Start Pour'}</span>
                      </button>
                      <button
                        onClick={resetBrew}
                        className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-white/10 text-xs transition-all active:scale-95"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Stage Banner */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/10 font-mono text-xs flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping shrink-0" />
                  <span className="text-amber-300 font-semibold">{getBrewStage(brewSeconds)}</span>
                </div>

                {/* 3 Step Guidelines */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-1">
                    <span className="text-amber-400 font-bold">01 // THE BLOOM</span>
                    <p className="text-zinc-300 text-xs font-sans">
                      Pour 45g water in 15 seconds. Let coffee degas for 30s. Watch the crema rise.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-1">
                    <span className="text-amber-400 font-bold">02 // SPIRAL EXTRACTION</span>
                    <p className="text-zinc-300 text-xs font-sans">
                      Pour steadily in gentle clockwise spirals to 140g. Avoid touching paper filter ribs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 space-y-1">
                    <span className="text-amber-400 font-bold">03 // DRAWDOWN &amp; CLARITY</span>
                    <p className="text-zinc-300 text-xs font-sans">
                      Finish pour to 225g at 1:45. Let draw down until bed is flat and dry at 2:30.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: 35mm Photography Showcase */}
            {activeTab === 'photo' && (
              <div className="space-y-4">
                <p className="text-xs font-mono text-zinc-400">
                  PHOTOGRAPHIC ESSAYS // 35MM FRAMING, STREET ARCHITECTURE &amp; COFFEE BAR LIGHT
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {secretPhotography.map((photo) => (
                    <div
                      key={photo.title}
                      className="rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden space-y-3 p-4 flex flex-col justify-between"
                    >
                      {/* Simulated Viewport Frame */}
                      <div
                        className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${photo.gradient} border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden`}
                      >
                        <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
                          <span className="px-1.5 py-0.5 rounded bg-black/60 border border-white/10">
                            RAW • 3:2
                          </span>
                          <span>{photo.settings}</span>
                        </div>

                        {/* Viewfinder crosshairs */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center">
                            <div className="w-1 h-1 bg-white rounded-full" />
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-amber-300/80 bg-black/60 p-1 rounded backdrop-blur-sm">
                          📍 {photo.location}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-sm text-white">
                          {photo.title}
                        </h4>
                        <p className="text-[11px] font-mono text-purple-400">
                          {photo.camera}
                        </p>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Experimental Labs */}
            {activeTab === 'experimental' && (
              <div className="space-y-4">
                <p className="text-xs font-mono text-zinc-400">
                  INTERNAL LABS // UNFINISHED ARCHITECTURAL PROTOTYPES &amp; CONCEPT WORK
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {experimentalConcepts.map((exp) => (
                    <div
                      key={exp.title}
                      className="p-5 rounded-2xl bg-zinc-900 border border-white/10 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold uppercase">
                          {exp.status}
                        </span>
                        <h4 className="font-display font-bold text-base text-white">
                          {exp.title}
                        </h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.08] text-[10px] font-mono text-zinc-500">
                        {exp.tech}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Funny Notes & Overheard */}
            {activeTab === 'notes' && (
              <div className="space-y-4">
                <p className="text-xs font-mono text-zinc-400">
                  BEHIND THE SCENES // OVERHEARD AT THE ESPRESSO BAR DURING GIT MERGE
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {funnyNotes.map((note, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-zinc-900 border border-white/10 space-y-2"
                    >
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                        #{idx + 1} • {note.title}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 font-mono italic leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <span>NOCTRA SECRET CUT • TYPE &quot;DEV&quot; OR &quot;COFFEE&quot; ANYWHERE TO REOPEN</span>
            <button
              onClick={closeEasterEgg}
              className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all"
            >
              Back to Main Experience
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
