'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- DATA TYPES ---
interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  achievement?: string;
  projectUrl: string;
  githubUrl: string;
  isFeatured?: boolean;
}

// --- PROJECTS DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "PT ABB Dashboard",
    description: "Enterprise dashboard yang dikembangkan untuk membantu monitoring data operasional dan visualisasi informasi bisnis secara real-time. Fokus utama proyek ini adalah penyajian data yang cepat, responsif, dan mudah dipahami untuk mendukung pengambilan keputusan.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
    category: "Enterprise Dashboard",
    projectUrl: "#",
    githubUrl: "Private Repository",
    isFeatured: true
  },
  {
    id: 2,
    title: "Temu Cashflow Web",
    description: "Platform manajemen keuangan berbasis web yang dirancang untuk individu, keluarga, dan bisnis. Memiliki fitur pencatatan transaksi, dashboard cashflow, laporan keuangan, dan approval-based transaction control.",
    techStack: ["React.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    category: "Financial Management System",
    projectUrl: "#",
    githubUrl: "https://github.com/atriadha99/temucashflow",
    isFeatured: true
  },
  {
    id: 3,
    title: "Temu Cashflow App",
    description: "Aplikasi mobile pencatatan keuangan yang membantu pengguna mengelola pemasukan, pengeluaran, dan laporan keuangan secara praktis melalui perangkat Android.",
    techStack: ["Java", "Android Studio", "Firebase"],
    category: "Mobile Application",
    projectUrl: "Google Play Store (Coming Soon)",
    githubUrl: "Private Repository"
  },
  {
    id: 4,
    title: "Lendspace",
    description: "Platform marketplace penyewaan aset dan ruang yang menghubungkan pemilik dengan penyewa dalam satu ekosistem digital. Konsep dan desain aplikasi telah terdaftar sebagai Hak Kekayaan Intelektual (HKI).",
    techStack: ["React.js", "Supabase", "Tailwind CSS"],
    category: "Marketplace Platform",
    achievement: "HKI Registered",
    projectUrl: "Coming Soon",
    githubUrl: "Private Repository",
    isFeatured: true
  },
  {
    id: 5,
    title: "Portal Ekskul SMK Binusa",
    description: "Sistem informasi ekstrakurikuler berbasis web yang memudahkan siswa melakukan pendaftaran, melihat jadwal kegiatan, serta membantu sekolah dalam mengelola data anggota dan aktivitas ekstrakurikuler.",
    techStack: ["React.js", "Supabase"],
    category: "Education Platform",
    projectUrl: "#",
    githubUrl: "Private Repository"
  },
  {
    id: 6,
    title: "TemuLab",
    description: "Aplikasi mobile edukasi yang dirancang untuk menyediakan akses pembelajaran, materi, dan fitur interaktif dalam satu platform yang sederhana dan mudah digunakan.",
    techStack: ["Java", "Android Studio"],
    category: "Educational Application",
    projectUrl: "Coming Soon",
    githubUrl: "Private Repository"
  },
  {
    id: 7,
    title: "Sabda Alam Web",
    description: "Website informasi destinasi wisata yang menampilkan fasilitas, galeri, informasi tiket, serta detail layanan untuk meningkatkan pengalaman pengunjung secara digital.",
    techStack: ["React.js", "Tailwind CSS"],
    category: "Tourism Website",
    projectUrl: "#",
    githubUrl: "Private Repository"
  },
  {
    id: 8,
    title: "Yare! Coffee Bintaro",
    description: "Website company profile yang dibangun untuk memperkuat identitas digital coffee shop melalui tampilan modern, informasi menu, branding, dan media komunikasi pelanggan.",
    techStack: ["React.js", "Tailwind CSS"],
    category: "Business Website",
    projectUrl: "#",
    githubUrl: "Private Repository"
  },
  {
    id: 9,
    title: "Noctra Portfolio",
    description: "Portfolio pribadi yang menampilkan pengalaman, keterampilan, dan proyek-proyek pengembangan web dengan fokus pada performa, desain modern, dan pengalaman pengguna.",
    techStack: ["React.js", "Vite", "Tailwind CSS"],
    category: "Portfolio Website",
    projectUrl: "https://noctra-dev.vercel.app",
    githubUrl: "https://github.com/atriadha99"
  }
];

// --- ICON HELPER ---
const CategoryIcon = ({ category }: { category: string }) => {
  const lowerCat = category.toLowerCase();
  if (lowerCat.includes('dashboard') || lowerCat.includes('system')) return '📊';
  if (lowerCat.includes('mobile') || lowerCat.includes('application')) return '📱';
  if (lowerCat.includes('marketplace')) return '🤝';
  if (lowerCat.includes('education')) return '🎓';
  if (lowerCat.includes('tourism')) return '🏕️';
  if (lowerCat.includes('business') || lowerCat.includes('coffee')) return '☕';
  if (lowerCat.includes('portfolio')) return '👨‍💻';
  return '💻';
};

// --- MAIN COMPONENT ---
export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen bg-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="portfolio">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Dari konsep hingga deployment — Koleksi proyek yang telah saya kembangkan sebagai Front-End Developer.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="h-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col relative overflow-hidden">
                
                {/* Featured Badge */}
                {project.isFeatured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-sm">
                    ★ Featured
                  </div>
                )}

                {/* Achievement Badge */}
                {project.achievement && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold backdrop-blur-sm">
                    🏆 {project.achievement}
                  </div>
                )}

                {/* Icon & Category */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-3xl bg-white/5 p-3 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <CategoryIcon category={project.category} />
                  </span>
                  <span className="text-xs font-mono text-white/40 uppercase tracking-wider">{project.category}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-md text-white/60">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
                  <span className="text-xs text-white/30 group-hover:text-white/50 transition-colors">View Details</span>
                  <svg className="w-5 h-5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail Project (Glassmorphism) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-2xl w-full bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-mono">
                  {selectedProject.category}
                </span>
                {selectedProject.achievement && (
                  <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono">
                    🏆 {selectedProject.achievement}
                  </span>
                )}
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl"><CategoryIcon category={selectedProject.category} /></span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              {/* Description (ATS Friendly - Full Text) */}
              <p className="text-white/60 mb-8 leading-relaxed">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider text-white/40 mb-3 font-mono">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm font-mono bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.projectUrl !== "#" && selectedProject.projectUrl !== "Coming Soon" && selectedProject.projectUrl !== "Google Play Store (Coming Soon)" && (
                  <a 
                    href={selectedProject.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 text-center text-sm flex items-center justify-center gap-2"
                  >
                    Visit Project <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
                {selectedProject.projectUrl === "Coming Soon" || selectedProject.projectUrl === "Google Play Store (Coming Soon)" ? (
                  <button disabled className="flex-1 px-6 py-3 bg-white/10 text-white/50 font-bold rounded-xl cursor-not-allowed text-center text-sm">
                    🚀 Coming Soon
                  </button>
                ) : null}
                
                {selectedProject.githubUrl !== "Private Repository" ? (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 text-center text-sm flex items-center justify-center gap-2 border border-white/10"
                  >
                    GitHub <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                ) : (
                  <button disabled className="flex-1 px-6 py-3 bg-white/5 text-white/30 font-bold rounded-xl cursor-not-allowed text-center text-sm border border-white/5">
                    🔒 Private Repo
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
npm install framer-motion
