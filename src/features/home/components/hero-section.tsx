import { HeroBackground } from './hero-background'
import { HeroCarousel } from './hero-carousel'

/**
 * Hero Section - Enhanced with Carousel
 * Background animation is isolated in a client component
 * Carousel content provides dynamic showcase of services
 */
export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Animation - Client Component */}
      <HeroBackground />

      {/* Carousel Content - Client Component */}
      <div className="container-custom relative z-10 pt-20">
        <HeroCarousel />
      </div>
    </section>
  )
}