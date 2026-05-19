'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        Scroll
      </span>

      <div className="flex h-10 w-6 justify-center rounded-full border border-white/10 p-1">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-2 w-2 rounded-full bg-white"
        />
      </div>
    </div>
  )
}
