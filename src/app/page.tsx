import { HeroSection } from '@/features/home/components/hero-section'
import { ExpertiseSectionAnimated } from '@/features/home/components/expertise-section-animated'
import { ProcessSectionAnimated } from '@/features/home/components/process-section-animated'
import { ContactSectionAnimated } from '@/features/home/components/contact-section-animated'
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
        <ExpertiseSectionAnimated />
        <ProcessSectionAnimated />
        <ContactSectionAnimated />
      </main>

      <Footer />
    </>
  )
}