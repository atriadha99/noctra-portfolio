'use client';

import { useState } from 'react';

const projects = {
  coffee: [
    { type: "coffee", title: "Temu Sua Digital Ecosystem", category: "Business Concept", year: "2024", description: "Coffee Shop Management Ecosystem. Menu Digital, Inventory, Customer Loyalty, dan Financial Dashboard." },
    { type: "coffee", title: "Temu Sua Coffee", category: "Brand Development • Coffee Shop", year: "2024", description: "Konsep coffee shop homy dengan menu unggulan Temu Aren Latte. Tagline: 'Temu tak sekedar tatap, tapi rasa yang menetap.'" },
    { type: "coffee", title: "Paradis Coffee and Space", category: "Coworking Space • F&B", year: "2024", description: "Coffee shop + communal space di Bandung. Business proposal & konsep ruang kreatif." },
  ],
  software: [
    { type: "software", title: "LendSpace", category: "Web Development", year: "2024", description: "Platform pengelolaan pinjam-meminjam, pencatatan transaksi, monitoring peminjaman, dan dashboard pengguna.", link: "https://lendspace.vercel.app/" },
    { type: "software", title: "PT ABB", category: "Web Development", year: "2024", description: "Website company profile corporate yang responsif untuk menampilkan layanan perusahaan dengan optimasi branding digital.", link: "https://ptabb.vercel.app/" },
    { type: "software", title: "Ekskul BINUSA", category: "Web Development", year: "2024", description: "Platform ekstrakurikuler sekolah untuk informasi kegiatan, manajemen organisasi, dan media komunikasi siswa.", link: "https://ekskul-binusa.vercel.app/" },
    { type: "software", title: "TemuCashFlow", category: "Mobile Development", year: "2024", description: "Aplikasi manajemen keuangan pribadi dengan pencatatan cash flow dan dashboard keuangan. (Status: Soon Release on Play Store)", link: "/projects/temucashflow" },
    { type: "software", title: "Noctra Music Player", category: "Android • Java • Custom UI", year: "2024", description: "Music player aesthetic dengan custom player activity. Terintegrasi dengan Spotify SDK." },
    { type: "software", title: "Aesthetic Cashflow App", category: "Android • Financial Tracker", year: "2024", description: "Pencatatan cashflow dengan desain clean & modern, visualisasi data, dashboard." },
    { type: "software", title: "Dompet Digital Ecosystem", category: "Fintech • API Integration", year: "2024", description: "Integrasi rekening bank, e-wallet & payment gateway (Midtrans/Xendit)." },
    { type: "software", title: "Smart Finance Products", category: "Digital Products", year: "2024", description: "Dompet Rapi, Smart Sheet Keuangan (Harian/Mingguan/Bulanan) untuk Excel & Google Sheets." },
    { type: "software", title: "Java Swing Inventory", category: "Desktop App • MySQL", year: "2023", description: "Sistem pengelolaan stok barang dengan CRUD, JTable, search, database integration." },
  ],
  creative: [
    { type: "creative", title: "Sabda Alam Digital Experience", category: "UI/UX & Product Design", year: "2024", description: "Redesign website destinasi wisata. Fokus pada UX Research, Tourism Digital Experience, dan Booking Flow Optimization." },
    { type: "creative", title: "Fight Club Tracker", category: "Startup Concept", year: "2024", description: "Workout Tracker & MMA Training Log dengan Progress Analytics dan Google Fit Integration." },
    { type: "creative", title: "Photography Portfolio", category: "Urban • Night Ride • Automotive", year: "2024", description: "Coffee shop aesthetic, night ride, car meet, dan human interest photography." },
    { type: "creative", title: "Automotive Visual Concepts", category: "Cinematic • Car Meet", year: "2024", description: "Night ride, Shell meetup, custom motorcycle visualization, engine swap concepts." },
    { type: "creative", title: "Bandung Dystopia Novel", category: "Creative Writing • 200 chapters", year: "2024", description: "Cerita berlatar Gedung Sate. Menunjukkan ketahanan mental & storytelling." },
  ],
  academic: [
    { type: "academic", title: "Cloud Computing Research", category: "Academic Paper", year: "2024", description: "Perbandingan dan Implementasi Infrastruktur On-Premises, Cloud, dan Hybrid." },
    { type: "academic", title: "Loyal Customer Classification", category: "ML • Altair AI Studio", year: "2023", description: "Analisis dataset Amazon Sale Report untuk memprediksi loyalitas pelanggan." },
    { type: "academic", title: "Digital Ticketing System", category: "System Analysis", year: "2023", description: "Perancangan sistem pemesanan tiket bioskop digital (APS)." },
  ],
};

type Category = 'all' | 'coffee' | 'software' | 'creative' | 'academic';

const getProjectIcon = (category: string) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes('web')) return '🌐 ';
  if (lowerCat.includes('mobile') || lowerCat.includes('android')) return '📱 ';
  if (lowerCat.includes('desktop')) return '💻 ';
  return '';
};

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
        
        {/* Featured Case Study: Sabda Alam */}
        <div className="mb-16 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-black border border-white/20 p-1">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-black/80 backdrop-blur-xl rounded-[23px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Mockup / Image Placeholder */}
            <div className="w-full md:w-1/2 aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700">🏕️</div>
            </div>
            
            {/* Case Study Details */}
            <div className="w-full md:w-1/2 space-y-6 z-10">
              <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
                Featured Case Study
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-mono font-bold mb-2">Sabda Alam Garut</h3>
                <p className="text-white/50 text-lg">Tourism Digital Experience Redesign</p>
              </div>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">
                Website lama belum mengoptimalkan alur reservasi dan belum menampilkan pengalaman wisata secara emosional. Redesign ini berfokus pada pendekatan UX Research, UI Design modern, dan Front-End Development yang interaktif.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/40">
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">UX Research</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">UI Design</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Next.js</span>
              </div>
              <button className="px-6 py-3 bg-white text-black font-mono text-sm font-bold rounded-lg hover:bg-white/90 hover:-translate-y-1 transition-all duration-300">
                View Case Study →
              </button>
            </div>
          </div>
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
                  </span>
                </div>
              </div>
              <h3 className="font-mono text-base md:text-lg group-hover:text-white transition">
                {getProjectIcon(project.category)}{project.title}
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
                <h3 className="text-xl font-mono">{getProjectIcon(selectedProject.category)}{selectedProject.title}</h3>
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
                {selectedProject.link ? (
                  <a href={selectedProject.link} target={selectedProject.link.startsWith('/') ? "_self" : "_blank"} rel="noopener noreferrer" className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition inline-flex items-center gap-2">
                    {selectedProject.link.startsWith('/') ? 'View Case Study' : 'Visit Website'} 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                ) : (
                  <button className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition">
                    View Project →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}