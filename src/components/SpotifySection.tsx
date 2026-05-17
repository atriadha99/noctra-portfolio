export default function SpotifySection() {
  return (
    <section
      id="music"
      className="max-w-6xl mx-auto px-8 py-20"
    >
      <div className="mb-12">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          Current Playlist
        </p>

        <h3 className="text-4xl font-black">
          What keeps me coding at 2AM
        </h3>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

        <div className="relative z-10 overflow-hidden rounded-2xl">
          <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/2KEFUQb2SGRQHycm9VQuJ4?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}