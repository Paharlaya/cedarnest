import { services } from '@/config/site.config'
import { cn } from '@/lib/utils/cn'

const ServiceIcons = {
  salesforce: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z" stroke="#00D4FF" strokeWidth="2" fill="none"/>
    </svg>
  ),
  'ai-agentforce': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" stroke="#00D4FF" strokeWidth="2" fill="none"/>
      <circle cx="20" cy="20" r="5" fill="#00D4FF"/>
    </svg>
  ),
  integration: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="30" height="20" rx="3" stroke="#00D4FF" strokeWidth="2" fill="none"/>
      <line x1="5" y1="15" x2="35" y2="15" stroke="#00D4FF" strokeWidth="2"/>
    </svg>
  ),
}

/**
 * Expertise Section - Server Component
 * Showcases services with proper semantic markup
 */
export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-dark-lighter">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Enterprise-Grade Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            We don't just implement technology. We build competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className={cn(
                'glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300',
                service.isFeatured && 'ring-2 ring-accent-cyan shadow-2xl shadow-accent-cyan/20'
              )}
            >
              {/* Icon */}
              <div className="mb-6">
                {ServiceIcons[service.id as keyof typeof ServiceIcons]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <svg
                      className="w-4 h-4 text-accent-cyan flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}