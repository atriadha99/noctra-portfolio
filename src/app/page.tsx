import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWork from '@/components/SelectedWork';
import Capabilities from '@/components/Capabilities';
import Experience from '@/components/Experience';
import StudioMusic from '@/components/StudioMusic';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased bg-grid-pattern selection:bg-blue-500/30 selection:text-white">
      {/* Top Sticky Minimalist Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-hidden">
        {/* Editorial Hero */}
        <Hero />

        {/* About / "BUILDING WITH PURPOSE" */}
        <About />

        {/* Selected Work (Centerpiece with 7 Featured Projects & Case Studies) */}
        <SelectedWork />

        {/* Capabilities (01 Front-End, 02 Backend, 03 Mobile, 04 Tools) */}
        <Capabilities />

        {/* Experience Timeline (Dual-track Engineering & F&B Operations Discipline) */}
        <Experience />

        {/* Studio Soundscape ("What keeps me coding at 2AM") */}
        <StudioMusic />

        {/* Contact Section ("LET'S BUILD SOMETHING") */}
        <ContactSection />
      </main>

      {/* Minimal Studio Footer */}
      <Footer />
    </div>
  );
}
