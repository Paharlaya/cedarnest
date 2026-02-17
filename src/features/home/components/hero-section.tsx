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
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
            <span className="text-accent-cyan">⭐</span>
            <span className="text-white/90 text-sm">5.0 Rating • 15 Google Reviews</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Salesforce & AI
            <span className="block gradient-text">Integration Experts</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-balance">
            Specializing in Sales Cloud, Service Cloud, Experience Cloud, AI Agents, and complex
            enterprise integrations that drive digital transformations.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white hover:opacity-90 transition-all duration-200">
              Book a Strategy Call
            </a>
            <a href="#process" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-dark-card border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200">
              View Our Approach
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}