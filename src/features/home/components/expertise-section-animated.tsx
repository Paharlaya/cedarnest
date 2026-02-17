'use client'

import { motion } from 'framer-motion'
import { services } from '@/config/site.config'
import { cn } from '@/lib/utils/cn'
import { ScrollReveal, StaggerReveal, fadeInUp, fadeInScale } from '@/components/animations/scroll-animations'

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

// Card animation with hover effects
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export function ExpertiseSectionAnimated() {
  return (
    <section id="expertise" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container-custom relative">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Enterprise-Grade Expertise
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            We don't just implement technology. We build competitive advantages.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className={cn(
                'glass rounded-2xl p-8 transition-all duration-300 cursor-pointer relative group',
                service.isFeatured && 'ring-2 ring-accent-cyan shadow-2xl shadow-accent-cyan/20'
              )}
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan animate-gradient-x opacity-50 blur-sm" />
              </div>

              {/* Card content */}
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div
                  className="mb-6"
                  animate={{
                    rotate: [0, 0, 360, 360],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 5,
                    times: [0, 0.1, 0.2, 1],
                  }}
                >
                  {ServiceIcons[service.id as keyof typeof ServiceIcons]}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                {/* Features List with staggered animation */}
                <ul className="space-y-2" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + featureIndex * 0.05,
                        duration: 0.4,
                      }}
                      className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors"
                    >
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
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover particle effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent-cyan/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-accent-blue/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-200 group-hover:animate-ping" />
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}