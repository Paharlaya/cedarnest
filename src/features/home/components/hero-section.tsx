import { HeroBackground } from './hero-background'

const heroStats = [
  { value: 'Enterprise', label: 'Solutions' },
  { value: '15+', label: 'Happy Clients' },
  { value: '100%', label: 'Success Rate' },
]

/**
 * Hero Section - Server Component
 * Background animation is isolated in a client component
 * Content renders on the server for optimal SEO and performance
 */
export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Animation - Client Component */}
      <HeroBackground />

      {/* Content - Server Rendered */}
      <div className="container-custom relative z-10 pt-20">
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading px-4 sm:px-0">
            Digital Transformation &
            <span className="block gradient-text pb-2">Salesforce Integration Experts</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto text-balance px-4 sm:px-0">
            We build stunning, high-performance websites and implement powerful Salesforce solutions.
            From custom web development to CRM integration, we deliver end-to-end digital experiences
            that transform your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 justify-center flex-wrap px-4 sm:px-0">
            <a href="#contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white hover:opacity-90 transition-all duration-200">
              Book a Strategy Call
            </a>
            <a href="#process" className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-dark-card border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200">
              View Our Approach
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-md mx-auto pt-6 px-2 sm:px-0">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg sm:text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/70 text-[10px] sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}