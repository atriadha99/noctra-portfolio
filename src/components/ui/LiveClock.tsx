'use client'

import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()

      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      )
    }

    update()

    const interval = setInterval(update, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-zinc-500">
      BANDUNG — {time}
    </p>
  )
}