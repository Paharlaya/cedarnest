import { processSteps } from '@/config/site.config'

/**
 * Process Section - Server Component
 * Shows our 6-step process with proper semantic structure
 */
export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Structured phases with transparency and measurable milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <article key={step.id} className="relative">
              <div className="glass rounded-2xl p-8 h-full">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-6">
                  {step.description}
                </p>

                {/* Details */}
                {step.details && (
                  <ul className="space-y-2" role="list">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 text-white/60 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Connection Line (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}