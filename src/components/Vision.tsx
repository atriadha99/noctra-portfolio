'use client';

export default function Vision() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl" />
          
          <h2 className="text-3xl md:text-4xl font-mono mb-6 relative">Philosophy</h2>
          
          <div className="space-y-12 relative">
            {/* Coffee Philosophy */}
            <div className="group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">☕</div>
              <h3 className="text-xl font-mono mb-3">Temu Sua Coffee</h3>
              <p className="text-white/60 italic text-lg mb-2">
                "Temu tak sekedar tatap, tapi rasa yang menetap."
              </p>
              <p className="text-sm text-white/40 max-w-2xl mx-auto">
                Konsep coffee shop dengan nuansa homy, hangat, tempat untuk deeptalk, 
                pulang, istirahat, dan melepas penat.
              </p>
            </div>

            {/* Development Philosophy */}
            <div className="group pt-8 border-t border-white/10">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{'</>'}</div>
              <h3 className="text-xl font-mono mb-3">Code & Creativity</h3>
              <p className="text-base text-white/50 leading-relaxed max-w-2xl mx-auto">
                Saya adalah Front-End Developer yang memiliki pengalaman di industri kopi dan fotografi. Kombinasi unik tersebut membantu saya memahami bagaimana desain, pengalaman pelanggan, dan teknologi dapat bekerja bersama untuk membangun produk digital yang lebih manusiawi.
              </p>
            </div>
          </div>
        </div>
        
        {/* Statistics / Numbers */}
        <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-4xl font-mono font-bold text-white mb-2">20+</h4>
            <p className="text-xs text-white/50 uppercase tracking-widest">Personal Projects</p>
          </div>
          <div>
            <h4 className="text-4xl font-mono font-bold text-white mb-2">3+</h4>
            <p className="text-xs text-white/50 uppercase tracking-widest">Years Experience</p>
          </div>
          <div>
            <h4 className="text-4xl font-mono font-bold text-white mb-2">100%</h4>
            <p className="text-xs text-white/50 uppercase tracking-widest">Coffee Fueled</p>
          </div>
          <div>
            <h4 className="text-4xl font-mono font-bold text-white mb-2">∞</h4>
            <p className="text-xs text-white/50 uppercase tracking-widest">Lines of Code</p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-lg font-mono text-white/40">
            "I build things that work in the real world."
          </p>
          <p className="text-sm text-white/30 mt-4">
            Available for freelance projects and immersive digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}