'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BootLoader() {
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(true)

  const messages = [
    'INITIALIZING NOCTRA SYSTEM...',
    'LOADING MIDNIGHT ENGINE...',
    'CONNECTING TO BANDUNG FREQUENCY...',
    'SYSTEM READY'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(interval)
          // Wait 1 second after "SYSTEM READY" before hiding the loader
          setTimeout(() => setLoading(false), 1000)
          return prev
        }
        return prev + 1
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          <div className="text-center space-y-4 font-mono">
            {messages.map((msg, idx) => (
              <p
                key={idx}
                className={`transition-all duration-500 text-sm ${
                  idx === step
                    ? 'text-green-500 animate-pulse'
                    : idx < step
                    ? 'text-white/40'
                    : 'text-white/10'
                }`}
              >
                {msg}
              </p>
            ))}
            <div className="mt-12 h-4">
              <span
                className={`text-xs text-white/20 block transition-opacity duration-1000 ${
                  step === messages.length - 1 ? 'opacity-100 animate-bounce' : 'opacity-0'
                }`}
              >
                SCROLL
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
