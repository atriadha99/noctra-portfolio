import Image from "next/image";

export default function Photography() {
  // Mengambil gambar dari folder public/photography/
  const photos = [
    "/photography/photo-1.jpg",
    "/photography/photo-2.jpg",
    "/photography/photo-3.jpg",
    "/photography/photo-4.jpg",
    "/photography/photo-5.jpg",
    "/photography/photo-6.jpg",
  ]

  return (
    <section
      id="photography"
      className="relative z-10 max-w-6xl mx-auto px-8 py-20"
    >
      <div className="mb-12">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
          Visual Assets
        </p>

        <h3 className="text-4xl font-black mb-4">
          Moments & Aesthetics
        </h3>

        <p className="text-zinc-400 leading-relaxed max-w-xl">
          Sebagian cerita tidak ditulis lewat baris kode, melainkan ditangkap oleh lensa. Koleksi visual dari F&B branding hingga midnight street photography.
        </p>
      </div>

      {/* Masonry Grid Setup pakai CSS Columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {photos.map((src, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            {/* Menggunakan next/image untuk optimasi performa dan lazy loading otomatis */}
            <Image 
              src={src} 
              alt={`Gallery ${idx}`} 
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-700 ease-out" 
            />

            {/* Overlay saat di-hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white font-mono text-sm tracking-widest border border-white/20 px-4 py-2 rounded-full bg-black/50">VIEW</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}