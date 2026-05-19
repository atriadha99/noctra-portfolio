'use client';

const services = [
  {
    title: "Frontend Development",
    description: "Membangun aplikasi web dengan Next.js, React, dan performa tinggi. Pengalaman UI yang immersive dan responsif.",
    icon: "⚡",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "UI/UX Design",
    description: "Mendesain antarmuka yang intuitif dengan pendekatan dark & immersive digital atmosphere.",
    icon: "🎨",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Mobile Development",
    description: "Aplikasi Android kustom dengan integrasi API, database lokal/cloud, dan UI yang aesthetic.",
    icon: "📱",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Brand & Coffee",
    description: "Dari konsep coffee shop, branding, HPP, hingga strategi digital untuk F&B dan produk kreatif.",
    icon: "☕",
    gradient: "from-amber-500/20 to-orange-500/20"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono mb-4">Layanan & Keahlian</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Dari kode hingga kopi, dari brand hingga aplikasi
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-mono text-lg mb-2 group-hover:text-white/90">
                  {service.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}