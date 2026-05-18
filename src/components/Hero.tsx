'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Music2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 text-sm text-zinc-300">
          <Music2 size={16} className="text-violet-400" />
          currently coding with rainy playlists & iced coffee
        </div>

        <p className="uppercase tracking-[0.4em] text-xs text-violet-400 mb-5">
          Front-End Developer • Photographer • Barista
        </p>

        <h2 className="text-6xl md:text-7xl font-black leading-tight">
          Crafting
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            digital atmosphere
          </span>
        </h2>

        <p className="mt-8 text-zinc-400 text-lg max-w-xl leading-relaxed">
          Frontend developer from Bandung blending code, coffee culture,
          photography, and immersive UI experiences.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-2xl bg-white text-black font-semibold flex items-center gap-2 hover:shadow-lg transition"
          >
            Explore Projects
            <ArrowRight size={18} />
          </a>

          <a
            href="https://github.com/atriadha99"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Open GitHub
          </a>
        </div>
      </motion.div>

      <div className="relative flex justify-center">
        <div className="absolute w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />

        <div className="relative w-[360px] rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

          <div className="relative z-10">
            <div className="flex justify-between mb-6">
              <div>
                <p className="text-sm text-zinc-500">Now Playing</p>
                <h3 className="font-bold text-xl">After Rain Drive</h3>
              </div>

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="relative flex items-center justify-center py-8">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 animate-spin [animation-duration:8s] flex items-center justify-center shadow-2xl">
                <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
