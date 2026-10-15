'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Project } from '@/data/projects';

interface SimulatedVideoPreviewProps {
  project: Project;
  isPlaying?: boolean;
  isMuted?: boolean;
  className?: string;
  compact?: boolean;
}

export default function SimulatedVideoPreview({
  project,
  isPlaying = true,
  className = '',
  compact = false,
}: SimulatedVideoPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Animated tickers for preview states
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Subtle canvas animation for kinetic / dashboard / code
  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (project.videoPreviewType === 'dashboard') {
        // Draw live telemetry graph
        ctx.strokeStyle = `${project.accentColor}80`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height * 0.5 +
            Math.sin((x + frame * 3) * 0.04) * 20 +
            Math.cos((x - frame * 2) * 0.02) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Pulsing data points
        const pulseX = (frame * 2.5) % canvas.width;
        const pulseY =
          canvas.height * 0.5 +
          Math.sin((pulseX + frame * 3) * 0.04) * 20 +
          Math.cos((pulseX - frame * 2) * 0.02) * 12;
        ctx.fillStyle = project.accentColor;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (project.videoPreviewType === 'kinetic') {
        // Kinetic particle constellation
        const numNodes = 12;
        const nodes: { x: number; y: number }[] = [];
        for (let i = 0; i < numNodes; i++) {
          const x = (Math.sin(frame * 0.02 + i) * 0.4 + 0.5) * canvas.width;
          const y = (Math.cos(frame * 0.025 + i * 1.5) * 0.35 + 0.5) * canvas.height;
          nodes.push({ x, y });

          ctx.fillStyle = i % 2 === 0 ? project.accentColor : '#ffffff';
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }
      } else {
        // Grid scan line for other preview types
        const scanY = (frame * 1.8) % canvas.height;
        ctx.strokeStyle = `${project.accentColor}30`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(canvas.width, scanY);
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(render);
    };

    animFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, project.videoPreviewType, project.accentColor]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none bg-zinc-950 flex flex-col justify-between ${className}`}
    >
      {/* Background Stylized Abstract Backdrop */}
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 65% 35%, ${project.accentColor}40 0%, transparent 65%), linear-gradient(180deg, rgba(10,10,14,0.6) 0%, rgba(9,9,11,0.98) 100%)`,
        }}
      />

      {/* Grid line texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: compact ? '24px 24px' : '40px 40px',
        }}
      />

      {/* Dynamic Animated Canvas Layer */}
      <canvas
        ref={canvasRef}
        width={compact ? 360 : 720}
        height={compact ? 200 : 420}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Top Simulated HUD / Status Bar */}
      <div className="relative z-10 flex items-center justify-between p-3 sm:p-4 text-[10px] font-mono tracking-wider text-zinc-400 border-b border-white/[0.06] bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-ping"
            style={{ backgroundColor: project.accentColor }}
          />
          <span className="text-white font-semibold uppercase">{project.category}</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
            {project.contentRating}
          </span>
          <span>{project.runtime}</span>
        </div>
      </div>

      {/* Center Simulated UI Content based on Preview Type */}
      <div className="relative z-10 px-4 py-3 my-auto flex flex-col justify-center">
        {project.videoPreviewType === 'gov' && (
          <div className="space-y-2.5 max-w-sm">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-blue-400 font-semibold">Sistem Layanan & Pengaduan Terpadu</span>
              <span className="text-emerald-400 font-semibold">SLA &lt; 48H</span>
            </div>
            <div className="grid grid-cols-3 gap-2 font-mono">
              <div className="p-2 rounded bg-black/70 border border-blue-500/20 text-center">
                <span className="block text-[9px] text-zinc-500">KCD WILAYAH</span>
                <span className="text-xs font-bold text-blue-400">VIII JABAR</span>
              </div>
              <div className="p-2 rounded bg-black/70 border border-blue-500/20 text-center">
                <span className="block text-[9px] text-zinc-500">INTEGRATED</span>
                <span className="text-xs font-bold text-white">180+ SMKN</span>
              </div>
              <div className="p-2 rounded bg-black/70 border border-blue-500/20 text-center">
                <span className="block text-[9px] text-zinc-500">DISPATCH SLA</span>
                <span className="text-xs font-bold text-emerald-400">REALTIME</span>
              </div>
            </div>
          </div>
        )}

        {project.videoPreviewType === 'companion' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-pink-400 font-semibold">Pet Health & Clinic Radar</span>
              <span className="text-emerald-400 font-semibold">24H EMERGENCY</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-1.5 rounded bg-pink-500/10 border border-pink-500/20 text-[11px] text-pink-300">
                <span>Vaccine & Rabies Passport</span>
                <span className="font-bold text-emerald-400">UP TO DATE</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-black/60 border border-white/10 text-[11px] text-zinc-300">
                <span>Veterinary Proximity Radar</span>
                <span className="font-bold text-cyan-400">&lt; 3.2 km</span>
              </div>
            </div>
          </div>
        )}

        {project.videoPreviewType === 'dashboard' && (
          <div className="space-y-2.5 max-w-sm">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">Industrial Sensor Telemetry</span>
              <span className="text-emerald-400 font-semibold">ONLINE • 240V</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded bg-black/60 border border-white/10 text-center">
                <span className="block text-[9px] text-zinc-500 font-mono">LATENCY</span>
                <span className="text-xs font-bold text-blue-400 font-mono">182 ms</span>
              </div>
              <div className="p-2 rounded bg-black/60 border border-white/10 text-center">
                <span className="block text-[9px] text-zinc-500 font-mono">THROUGHPUT</span>
                <span className="text-xs font-bold text-white font-mono">54.2 k/s</span>
              </div>
              <div className="p-2 rounded bg-black/60 border border-white/10 text-center">
                <span className="block text-[9px] text-zinc-500 font-mono">MACHINE LOAD</span>
                <span className="text-xs font-bold text-emerald-400 font-mono">99.8%</span>
              </div>
            </div>
          </div>
        )}

        {project.videoPreviewType === 'cashflow' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400">Real-Time Ledger Sync</span>
              <span className="text-emerald-400 font-semibold">+Rp 24,500,000</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300">
                <span>Enterprise Retainer Contract</span>
                <span className="font-bold">+Rp 18,000,000</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-300">
                <span>Cloud Infrastructure & CI/CD</span>
                <span className="font-bold">-Rp 1,450,000</span>
              </div>
            </div>
          </div>
        )}

        {project.videoPreviewType === 'code' && (
          <div className="p-3 rounded-lg bg-black/80 border border-white/10 font-mono text-[11px] leading-relaxed max-w-md shadow-xl">
            <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/10 text-zinc-500 text-[10px]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 text-zinc-400">noctra.engine.tsx</span>
            </div>
            <p className="text-purple-400">
              export const <span className="text-blue-400">studioExperience</span> = &#123;
            </p>
            <p className="pl-3 text-zinc-300">
              fidelity: <span className="text-emerald-400">'editorial-streaming'</span>,
            </p>
            <p className="pl-3 text-zinc-300">
              craft: <span className="text-yellow-400">'high-velocity-engineering'</span>,
            </p>
            <p className="pl-3 text-zinc-300">
              match: <span className="text-cyan-400">{project.matchScore}%</span>
            </p>
            <p className="text-purple-400">&#125;;</p>
          </div>
        )}

        {project.videoPreviewType === 'kinetic' && (
          <div className="text-center space-y-1">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-purple-300">
              60 FPS GPU COMPOSITOR
            </p>
            <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
              Hardware-Accelerated Physics
            </p>
            <p className="text-[11px] font-mono text-zinc-400">
              Spring damping: 0.84 • RAF loop zero memory leak
            </p>
          </div>
        )}

        {project.videoPreviewType === 'marketplace' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-amber-400 font-semibold">🏆 HKI REGISTERED ASSET</span>
              <span className="text-zinc-400">ID: 0002819-A</span>
            </div>
            <div className="p-2 rounded bg-black/60 border border-white/10 text-[11px] text-zinc-300">
              Spatial commercial leasing engine with verified digital lease agreements.
            </div>
          </div>
        )}

        {project.videoPreviewType === 'education' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-cyan-400">Institutional SaaS</span>
              <span className="text-emerald-400 font-semibold">100% Digital</span>
            </div>
            <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-200">
              Zero paper waste. 15+ student organizations managed seamlessly.
            </div>
          </div>
        )}

        {project.videoPreviewType === 'commerce' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-orange-400">Optimistic Bag Architecture</span>
              <span className="text-zinc-300 font-semibold">0ms Cart Latency</span>
            </div>
            <div className="p-2 rounded bg-orange-950/40 border border-orange-500/20 text-[11px] text-orange-200">
              Magazine lookbook layout with one-hand checkout interaction.
            </div>
          </div>
        )}

        {project.videoPreviewType === 'brand' && (
          <div className="space-y-2 max-w-sm font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-yellow-400">Specialty Coffee Craft</span>
              <span className="text-zinc-300">West Java Single Origin</span>
            </div>
            <div className="p-2 rounded bg-yellow-950/40 border border-yellow-500/20 text-[11px] text-yellow-200">
              Tasting notes: Bergamot, stone fruit, cane sugar sweetness.
            </div>
          </div>
        )}
      </div>

      {/* Bottom Live Streaming Indicator */}
      <div className="relative z-10 flex items-center justify-between p-3 sm:p-4 text-[10px] font-mono text-zinc-400 border-t border-white/[0.06] bg-black/40 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold">{project.title}</span>
          <span className="text-zinc-600">/</span>
          <span className="text-blue-400">{project.year}</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span>{project.matchScore}% MATCH</span>
        </div>
      </div>
    </div>
  );
}
