import { HeroSection } from '@/features/home/components/hero-section'
import { ExpertiseSection } from '@/features/home/components/expertise-section'
import { ProcessSection } from '@/features/home/components/process-section'
import { ContactSection } from '@/features/home/components/contact-section'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

/**
 * Homepage - Server Component by default
 * All sections are rendered on the server for optimal performance
 * Only interactive elements use client components
 */
export default function HomePage() {
  return (
    <>
      <Navigation />

      <main id="main-content">
        <HeroSection />
        <ExpertiseSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}