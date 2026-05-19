import Navbar from '@/components/Navbar'
import Skyline from '@/components/skyline/Skyline'
import Hero from '@/components/Hero'
import NoctraTerminal from '@/components/terminal/NoctraTerminal'
import CurrentlyBuilding from '@/components/noctra/CurrentlyBuilding'
import PortfolioGrid from '@/components/PortfolioGrid'
import GithubActivity from '@/components/noctra/GithubActivity'
import Gallery from '@/components/photography/Gallery'
import FadeUp from '@/components/ui/FadeUp'
import Particles from '@/components/ui/Particles'
import SmoothScroll from '@/components/ui/SmoothScroll'
import SpotifySection from '@/components/SpotifySection'
import Services from '@/components/Services'
import Vision from '@/components/Vision'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white antialiased selection:bg-white selection:text-black">
      <SmoothScroll />
      <Skyline />
      <Particles />
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <section id="services" className="container mx-auto px-6 py-24">
          <FadeUp>
            <Services />
          </FadeUp>
        </section>

        <section id="terminal" className="container mx-auto max-w-5xl px-6 py-24">
          <FadeUp>
            <NoctraTerminal />
          </FadeUp>
        </section>

        <section id="building" className="container mx-auto max-w-5xl px-6 py-16">
          <FadeUp>
            <CurrentlyBuilding />
          </FadeUp>
        </section>

        <section id="portfolio" className="container mx-auto px-6 py-24">
          <FadeUp>
            <PortfolioGrid />
          </FadeUp>
        </section>

        <section id="vision" className="container mx-auto px-6 py-32">
          <FadeUp>
            <Vision />
          </FadeUp>
        </section>

        <section id="music" className="container mx-auto px-6 py-16">
          <FadeUp>
            <SpotifySection />
          </FadeUp>
        </section>

        <section id="github" className="container mx-auto max-w-5xl px-6 py-16">
          <FadeUp>
            <GithubActivity />
          </FadeUp>
        </section>

        <section id="photography" className="container mx-auto px-6 py-24">
          <FadeUp>
            <Gallery />
          </FadeUp>
        </section>

        <section id="contact" className="container mx-auto px-6 py-24">
          <FadeUp>
            <ContactForm />
          </FadeUp>
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
