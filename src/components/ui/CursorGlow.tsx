'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener('mousemove', updateMouse)

    return () => {
      window.removeEventListener('mousemove', updateMouse)
    }
  }, [])

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 120,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[999] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl"
    />
  )
}