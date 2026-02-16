import { contactInfo } from '@/config/site.config'

/**
 * Contact Section - Server Component
 * Simple, focused contact section with clear CTA
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Salesforce Ecosystem
          </h2>
          <p className="text-xl text-white/70 mb-12 text-balance">
            Ready to transform your business with intelligent automation?
          </p>

          <div className="space-y-8">
            {/* Email Contact */}
            <div>
              <div className="flex items-center justify-center gap-2 text-white/60 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-3xl md:text-4xl text-accent-cyan hover:text-accent-blue transition-colors font-semibold"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* CTA Button */}
            <a
              href={`mailto:${contactInfo.email}?subject=Strategy Call Request`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white hover:opacity-90 transition-all duration-200"
            >
              Book Your Strategy Call
            </a>

            <p className="text-white/50 text-sm">
              Free 30-minute consultation to discuss your project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}