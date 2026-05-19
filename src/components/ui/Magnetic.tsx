'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function Magnetic({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    const element = ref.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    if (!ref.current) return

    ref.current.style.transform = 'translate(0px,0px)'
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="transition-transform duration-300"
    >
      {children}
    </motion.div>
  )
}