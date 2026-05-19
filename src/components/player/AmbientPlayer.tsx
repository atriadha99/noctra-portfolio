'use client'

import { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { useMusicStore } from '@/store/music-store'

export default function AmbientPlayer() {
  const soundRef = useRef<Howl | null>(null)
  const { isPlaying, toggle } = useMusicStore()

  useEffect(() => {
    soundRef.current = new Howl({
      src: ['/audio/rain-drive.mp3'],
      loop: true,
      volume: 0.3
    })

    return () => {
      soundRef.current?.unload()
    }
  }, [])

  useEffect(() => {
    if (!soundRef.current) return

    if (isPlaying) {
      soundRef.current.play()
    } else {
      soundRef.current.pause()
    }
  }, [isPlaying])

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl"
    >
      {isPlaying ? 'Pause Ambient' : 'Play Ambient'}
    </button>
  )
}