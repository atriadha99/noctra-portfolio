'use client';

import Link from 'next/link';

export default function TemuCashFlowDetail() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/10 selection:text-white pb-24">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-mono text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2">
            <span>←</span> Back to Portfolio
          </Link>
          <span className="font-mono text-xs tracking-widest text-emerald-400">STATUS: SOON RELEASE</span>
        </div>
      </nav>

      <article className="pt-32 px-6 max-w-4xl mx-auto">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">📱</span>
            <h1 className="text-4xl md:text-5xl font-mono font-bold">TemuCashFlow</h1>
          </div>
          <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
            Aplikasi manajemen keuangan pribadi masa kini. Menyederhanakan pencatatan pemasukan, pengeluaran, dan visualisasi cash flow dalam genggaman Anda.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['React Native / Flutter', 'Firebase', 'Mobile Development', 'UI/UX Design'].map(tech => (
              <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Mockup Screens (Placeholders) */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((screen) => (
            <div key={screen} className="aspect-[9/19] rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-2 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500" />
              <div className="w-full h-full rounded-[20px] bg-black/80 flex items-center justify-center border border-white/5">
                <p className="font-mono text-white/30 text-sm text-center px-4">
                  App Screen Mockup {screen} <br/> (Insert Image Here)
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-mono font-bold mb-8">Key Features & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-mono mb-3">💸 Pencatatan Cash Flow</h3>
              <p className="text-white/50 text-sm leading-relaxed">Sistem input transaksi yang cepat dan intuitif. Memisahkan kategori pemasukan dan pengeluaran dengan warna dan ikon yang jelas.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-mono mb-3">📊 Dashboard Keuangan</h3>
              <p className="text-white/50 text-sm leading-relaxed">Visualisasi data keuangan dalam bentuk grafik yang mudah dipahami, membantu pengguna memantau persentase alokasi dana.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-mono mb-3">📱 Mobile First Experience</h3>
              <p className="text-white/50 text-sm leading-relaxed">Dibangun secara native/cross-platform dengan mengutamakan performa aplikasi dan efisiensi memori pada perangkat mobile pengguna.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-mono mb-3">🔒 Keamanan Data</h3>
              <p className="text-white/50 text-sm leading-relaxed">Seluruh data pencatatan terenkripsi dengan aman di database. Menyediakan privasi penuh bagi para pengguna.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center p-12 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20">
          <h2 className="text-2xl font-mono mb-4">Ingin tau lebih banyak tentang aplikasi ini?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            TemuCashFlow saat ini sedang dalam tahap persiapan untuk perilisan di Play Store. Hubungi saya untuk akses beta atau diskusi pengembangan lebih lanjut.
          </p>
          <Link href="/#contact" className="px-8 py-4 bg-white text-black font-mono font-bold rounded-full hover:bg-white/90 transition-all">
            Mari Berdiskusi
          </Link>
        </section>
      </article>
    </main>
  );
}