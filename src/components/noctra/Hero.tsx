'use client'

import { motion } from 'framer-motion'
import ScrollIndicator from '../ui/ScrollIndicator'
import Magnetic from '../ui/Magnetic'
import LiveClock from '../ui/LiveClock'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-500/5 blur-3xl md:h-[600px] md:w-[600px]"
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-[10px] uppercase tracking-[0.6em] text-zinc-500 md:text-xs"
        >
          Midnight Digital Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-7xl md:text-9xl"
        >
          NOCTRA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl space-y-4"
        >
          <p className="text-sm font-light leading-relaxed text-zinc-400 md:text-lg">
            Building digital experiences between midnight coffee and city lights.
          </p>

          <div className="flex flex-col items-center gap-2 pt-2">
            <LiveClock />
            <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600">Rain • Code • Coffee</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Magnetic>
            <button className="rounded-full bg-white px-8 py-3.5 text-xs font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.1)] transition duration-300 hover:scale-105">
              Explore Universe
            </button>
          </Magnetic>

          <Magnetic>
            <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-xs font-medium text-white backdrop-blur-xl transition duration-300 hover:bg-white/10">
              View Archive
            </button>
          </Magnetic>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  )
}
