'use client';

import { useEffect, useRef } from 'react';
import { Headphones, Volume2, VolumeX } from 'lucide-react';
import { Howl } from 'howler';
import { useMusicStore } from '@/store/music-store';

export default function StudioMusic() {
  const playlistId = '2KEFUQb2SGRQHycm9VQuJ4';
  const soundRef = useRef<Howl | null>(null);
  const { isPlaying, toggle } = useMusicStore();

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/rain-drive.mp3'],
      loop: true,
      volume: 0.25,
      html5: true,
      onloaderror: () => {
        // graceful fallback if file isn't present
      }
    });

    return () => {
      soundRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section id="studio-sound" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Editorial Heading Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3 text-xs font-mono tracking-[0.25em] text-blue-400 uppercase">
            <span>05 // STUDIO SOUNDSCAPE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            WHAT KEEPS ME
            <br />
            <span className="text-zinc-500">CODING AT 2AM.</span>
          </h2>

          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">
            Late-night Bandung frequency. A curated rotation of ambient electronica, lo-fi downtempo, and atmospheric soundscapes accompanying technical deep work.
          </p>

          {/* Ambient Engine Control */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={toggle}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              {isPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>AMBIENT ENGINE: ACTIVE</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-zinc-500" />
                  <span>START AMBIENT SOUND (25%)</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-zinc-600" />
              SPOTIFY EMBED
            </span>
          </div>
        </div>

        {/* Studio Spotify Embed Container */}
        <div className="lg:col-span-7">
          <div className="p-4 sm:p-6 rounded-2xl border border-white/[0.1] bg-[#0c0c10] shadow-2xl relative overflow-hidden group">
            {/* Top Player Metadata Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold">NOCTRA // MIDNIGHT FREQUENCY</span>
              </div>
              <span className="text-[10px] text-zinc-500 tracking-wider">OFFICIAL PLAYLIST</span>
            </div>

            {/* Spotify Embed iFrame */}
            <div className="relative rounded-xl overflow-hidden bg-black/40">
              <iframe
                title="NOCTRA Coding Playlist"
                data-testid="embed-iframe"
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder={0}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
