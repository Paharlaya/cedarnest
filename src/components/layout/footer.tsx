import Image from 'next/image'
import { company, contactInfo } from '@/config/site.config'

/**
 * Footer Component - Server Component
 * Simple, professional footer with essential information
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide font-heading">
                {company.name}
              </h3>
            </div>
            <p className="text-white/70 mb-4">
              {company.description}
            </p>
            <p className="text-white/60 text-sm">
              {company.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4 font-heading">
              Services
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>Salesforce Implementation</li>
              <li>AI & Agentforce</li>
              <li>Enterprise Integration</li>
              <li>Digital Transformation</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-white text-lg font-semibold mb-4 font-heading">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-white/70 hover:text-accent-cyan transition-colors text-sm md:text-base break-all md:break-normal"
              >
                {contactInfo.email}
              </a>
              {contactInfo.socialLinks?.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="block text-white/70 hover:text-accent-cyan transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/60 text-sm">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}