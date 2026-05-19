'use client'

import { useEffect, useState } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Banyak orang bisa menulis kode. Banyak orang bisa meracik kopi. Namun, sangat sedikit orang yang bisa membangun brand, mendesain UI, menghitung HPP, mengintegrasikan API, lalu mendeploy seluruh ekosistem sendirian di jam 2 pagi.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setIsTyping(false);
      }
    }, 30);
    return () => clearInterval(typing);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90 pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50">
          ✦ PORTFOLIO 2024 ✦
        </div>
        
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-mono font-bold tracking-tighter mb-6 bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent drop-shadow-sm">
          NOCTRA
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 font-light mb-6 tracking-wide">
          Andika • Front-End Developer
        </p>
        
        {/* Typing effect quote */}
        <div className="max-w-2xl mx-auto mt-8">
          <p className="text-base text-white/40 italic leading-relaxed min-h-[120px]">
            {displayText}
            {isTyping && <span className="inline-block w-[2px] h-4 bg-white/40 ml-1 animate-pulse" />}
          </p>
        </div>
        
        {/* Developer signature & Roles */}
        <div className="mt-12 space-y-3">
          <div className="flex justify-center gap-2 text-xs text-white/30 font-mono">
            <span className="px-3 py-1 rounded-full bg-white/5">Front-End Developer</span>
            <span className="px-3 py-1 rounded-full bg-white/5">Photographer</span>
            <span className="px-3 py-1 rounded-full bg-white/5">Barista</span>
            <span className="px-3 py-1 rounded-full bg-white/5">Brand Creator</span>
          </div>
          
          <p className="text-sm text-white/40 mt-6">
            currently coding with rainy playlists & iced coffee
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center">
            <div className="w-1 h-2 bg-white/40 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
