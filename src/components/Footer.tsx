import { Github, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 px-8 py-14 text-center"
    >
      <h4 className="text-3xl font-black mb-4">
        Let’s build something unforgettable.
      </h4>

      <p className="text-zinc-500 mb-8 max-w-xl mx-auto">
        Available for freelance projects and immersive digital experiences.
      </p>

      <div className="flex justify-center gap-6 text-zinc-400">
        <a href="https://github.com/atriadha99" className="hover:text-white transition">
          <Github />
        </a>

        <a href="https://www.instagram.com/avacadika_/" className="hover:text-white transition">
          <Instagram />
        </a>

        <a href="mailto:atriadha.dev@gmail.com" className="hover:text-white transition">
          <Mail />
        </a>
      </div>
    </footer>
  )
}
