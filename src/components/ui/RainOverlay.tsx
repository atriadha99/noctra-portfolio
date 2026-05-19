'use client'

import { useEffect, useState } from 'react'

export default function RainOverlay() {
  const [drops, setDrops] = useState<{ left: string; top: string; animationDelay: string; animationDuration: string }[]>([])

  useEffect(() => {
    const generatedDrops = Array.from({ length: 120 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${0.5 + Math.random()}s`,
    }))
    setDrops(generatedDrops)
  }, [])

  if (drops.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden opacity-20">
      {drops.map((drop, i) => (
        <span
          key={i}
          className="absolute h-20 w-[1px] animate-rain bg-white/30"
          style={drop}
        />
      ))}
    </div>
  )
}