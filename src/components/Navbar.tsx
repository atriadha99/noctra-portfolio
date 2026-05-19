'use client'

import { motion } from 'framer-motion'

const links = [
  { name: 'Projects', href: '#portfolio' },
  { name: 'Photography', href: '#photography' },
  { name: 'Spotify', href: '#music' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >

      <div className="flex items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">

        <a href="#" className="font-bold tracking-[0.3em] text-white hover:text-white/80 transition-colors">
          NOCTRA
        </a>

        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            {link.name}
          </a>
        ))}

      </div>

    </motion.nav>
  )
}