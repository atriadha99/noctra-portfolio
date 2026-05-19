import { create } from 'zustand'

interface MusicState {
  isPlaying: boolean
  toggle: () => void
}

export const useMusicStore = create<MusicState>((set) => ({
  isPlaying: false,
  toggle: () => set((state) => ({ isPlaying: !state.isPlaying }))
}))