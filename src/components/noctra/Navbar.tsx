'use client'

import { motion } from 'framer-motion'

const links = [
  { name: 'Terminal', href: '#terminal' },
  { name: 'Projects', href: '#projects' },
  { name: 'Photography', href: '#photography' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 1 }}
      className="fixed left-1/2 top-6 z-50 transform"
    >
      <div className="flex items-center gap-6 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 backdrop-blur-xl shadow-2xl">
        <p className="select-none font-mono text-xs font-bold tracking-[0.4em] text-white">
          NOCTRA
        </p>

        <div className="h-4 w-[1px] bg-white/10" />

        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
