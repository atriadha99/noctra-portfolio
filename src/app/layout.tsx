import './globals.css'

import CursorGlow from '@/components/ui/CursorGlow'
import RainOverlay from '@/components/ui/RainOverlay'
import BootLoader from '@/components/ui/BootLoader'
import AmbientPlayer from '@/components/player/AmbientPlayer'

export const metadata = {
  title: 'NOCTRA',
  description: 'Midnight Digital Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        <BootLoader />

        <CursorGlow />

        <RainOverlay />

        <AmbientPlayer />

        {children}

      </body>
    </html>
  )
}