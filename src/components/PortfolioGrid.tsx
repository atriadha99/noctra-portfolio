'use client';

import { useState } from 'react';

const projects = {
  coffee: [
    { title: "Temu Sua Coffee", category: "Brand Development • Coffee Shop", year: "2024", description: "Konsep coffee shop homy dengan menu unggulan Temu Aren Latte. Tagline: 'Temu tak sekedar tatap, tapi rasa yang menetap.'" },
    { title: "Paradis Coffee and Space", category: "Coworking Space • F&B", year: "2024", description: "Coffee shop + communal space di Bandung. Business proposal & konsep ruang kreatif." },
  ],
  software: [
    { title: "Noctra Music Player", category: "Android • Java • Custom UI", year: "2024", description: "Music player aesthetic dengan custom player activity. Terintegrasi dengan Spotify SDK." },
    { title: "Aesthetic Cashflow App", category: "Android • Financial Tracker", year: "2024", description: "Pencatatan cashflow dengan desain clean & modern, visualisasi data, dashboard." },
    { title: "Dompet Digital Ecosystem", category: "Fintech • API Integration", year: "2024", description: "Integrasi rekening bank, e-wallet & payment gateway (Midtrans/Xendit)." },
    { title: "Smart Finance Products", category: "Digital Products", year: "2024", description: "Dompet Rapi, Smart Sheet Keuangan (Harian/Mingguan/Bulanan) untuk Excel & Google Sheets." },
    { title: "Java Swing Inventory", category: "Desktop App • MySQL", year: "2023", description: "Sistem pengelolaan stok barang dengan CRUD, JTable, search, database integration." },
  ],
  creative: [
    { title: "Photography Portfolio", category: "Urban • Night Ride • Automotive", year: "2024", description: "Coffee shop aesthetic, night ride, car meet, dan human interest photography." },
    { title: "Automotive Visual Concepts", category: "Cinematic • Car Meet", year: "2024", description: "Night ride, Shell meetup, custom motorcycle visualization, engine swap concepts." },
    { title: "Bandung Dystopia Novel", category: "Creative Writing • 200 chapters", year: "2024", description: "Cerita berlatar Gedung Sate. Menunjukkan ketahanan mental & storytelling." },
  ],
  academic: [
    { title: "Cloud Computing Research", category: "Academic Paper", year: "2024", description: "Perbandingan dan Implementasi Infrastruktur On-Premises, Cloud, dan Hybrid." },
    { title: "Loyal Customer Classification", category: "ML • Altair AI Studio", year: "2023", description: "Analisis dataset Amazon Sale Report untuk memprediksi loyalitas pelanggan." },
    { title: "Digital Ticketing System", category: "System Analysis", year: "2023", description: "Perancangan sistem pemesanan tiket bioskop digital (APS)." },
  ],
};

type Category = 'all' | 'coffee' | 'software' | 'creative' | 'academic';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory];
  };

  const categories = [
    { id: 'all', label: 'Semua', icon: '🎯', count: Object.values(projects).flat().length },
    { id: 'coffee', label: 'Coffee & Brand', icon: '☕', count: projects.coffee.length },
    { id: 'software', label: 'Software Dev', icon: '</>', count: projects.software.length },
    { id: 'creative', label: 'Creative', icon: '📸', count: projects.creative.length },
    { id: 'academic', label: 'Academic', icon: '📚', count: projects.academic.length },
  ];

  return (
    <section className="py-24 px-4" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono mb-4">Featured Projects</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Dari kopi hingga kode, dari brand hingga aplikasi — 15+ projects completed
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`group px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-black'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
              <span className={`ml-2 text-xs ${activeCategory === cat.id ? 'text-black/50' : 'text-white/30'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredProjects().map((project, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-white/5 to-black rounded-xl mb-3 overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent group-hover:scale-105 transition duration-500">
                  <span className="text-5xl opacity-30 group-hover:opacity-60 transition">
                    {project.type === 'coffee' && '☕'}
                    {project.type === 'software' && '{ }'}
                    {project.type === 'creative' && '✨'}
                    {project.type === 'academic' && '📖'}
                    {activeCategory === 'all' && '◆'}
                  </span>
                </div>
              </div>
              <h3 className="font-mono text-base md:text-lg group-hover:text-white transition">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-white/40 mt-1">
                {project.category}
              </p>
              <p className="text-xs text-white/20 mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="max-w-lg w-full bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-mono">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-white/50 hover:text-white/80 text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-sm text-white/50 mb-2">{selectedProject.category}</p>
              <p className="text-white/70 mb-4">{selectedProject.description}</p>
              <p className="text-xs text-white/30">Year: {selectedProject.year}</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition">
                  View Project →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}