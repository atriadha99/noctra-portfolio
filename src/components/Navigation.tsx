export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-[0.3em]">
            NOCTRA
          </h1>

          <p className="text-xs text-zinc-500">
            immersive digital atmosphere
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#">Home</a>
          <a href="#projects">Projects</a>
          <a href="#music">Music</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
