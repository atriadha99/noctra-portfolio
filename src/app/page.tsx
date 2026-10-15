import Navbar from '@/components/Navbar';
import CinematicHero from '@/components/streaming/CinematicHero';
import ContinueBuilding from '@/components/streaming/ContinueBuilding';
import StreamingRowsShowcase from '@/components/streaming/StreamingRowsShowcase';
import StreamingCatalogFilter from '@/components/streaming/StreamingCatalogFilter';
import BecauseYouViewed from '@/components/streaming/BecauseYouViewed';
import DeveloperJourney from '@/components/streaming/DeveloperJourney';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Experience from '@/components/Experience';
import StudioMusic from '@/components/StudioMusic';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StreamingDetailModal from '@/components/streaming/StreamingDetailModal';
import EasterEggModal from '@/components/streaming/EasterEggModal';
import StreamingToast from '@/components/streaming/StreamingToast';
import KeyboardNavManager from '@/components/streaming/KeyboardNavManager';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#141414] text-[#ffffff] antialiased selection:bg-[#E50914] selection:text-white">
      {/* Global Keyboard Navigation, Arrow Nav & Secret Easter Egg Listener */}
      <KeyboardNavManager />

      {/* Streaming Navigation with Scroll Darkening, Search, Notifications, Profile Menu */}
      <Navbar />

      {/* Main Streaming Experience */}
      <main className="relative z-10 overflow-hidden bg-[#141414]">
        {/* 1. Cinematic Hero Billboard with Auto-Rotating Projects, Gradient Vignette, Putar / Selengkapnya */}
        <CinematicHero />

        {/* 2. Authentic Netflix Rows (Top 10, Lanjutkan Menonton, Populer, dll) overlapping the Hero */}
        <StreamingRowsShowcase />

        {/* 4. Browse by Category: Web Dev, Mobile Dev, UI/UX, Backend/Database, Experimental */}
        <StreamingCatalogFilter />

        {/* 5. Because You Viewed... Playful Algorithmic Recommendations */}
        <BecauseYouViewed />

        {/* 6. Developer Journey: Series & Seasons Timeline (Seasons 01 to 05) */}
        <DeveloperJourney />

        {/* 7. Cinematic Profile: Developer, Photographer, Barista, Education & Philosophy */}
        <About />

        {/* 8. Engineering Capabilities Matrix */}
        <Capabilities />

        {/* 9. Dual-Track Experience & Operational Discipline */}
        <Experience />

        {/* 10. Studio Soundscape */}
        <StudioMusic />

        {/* 11. Contact Section & Direct Booking */}
        <ContactSection />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />

      {/* Interactive Detail Modal (Opens on any card/button click, Escape to close, locks body scroll) */}
      <StreamingDetailModal />

      {/* Hidden Easter Egg: Director's Secret Cut & Developer Mode */}
      <EasterEggModal />

      {/* Global Interactive Notification Toast */}
      <StreamingToast />
    </div>
  );
}
