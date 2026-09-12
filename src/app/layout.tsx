import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import SmoothScroll from '@/components/ui/SmoothScroll'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'NOCTRA / ANDIKA AGUNG TRIADHA — Front-End Developer & Digital Product Builder',
  description: 'Digital Product Studio & Portfolio of Andika Agung Triadha (NOCTRA). Building thoughtful web and mobile experiences with modern technologies, from interface to deployment. Based in Bandung, Indonesia.',
  keywords: [
    'NOCTRA',
    'Andika Agung Triadha',
    'Front-End Developer',
    'Digital Product Builder',
    'Creative Technologist',
    'React',
    'Next.js',
    'TypeScript',
    'Bandung Indonesia'
  ],
  authors: [{ name: 'Andika Agung Triadha (NOCTRA)' }],
  creator: 'NOCTRA',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noctra-dev.vercel.app',
    title: 'NOCTRA / ANDIKA AGUNG TRIADHA',
    description: 'Front-End Developer & Digital Product Builder. Building thoughtful web and mobile experiences with modern technologies.',
    siteName: 'NOCTRA Studio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOCTRA / ANDIKA AGUNG TRIADHA',
    description: 'Front-End Developer & Digital Product Builder. Based in Bandung, Indonesia.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-blue-500/30 selection:text-white">
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}