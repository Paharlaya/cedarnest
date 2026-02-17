'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/config/site.config'
import { ScrollReveal, fadeInUp, fadeInScale } from '@/components/animations/scroll-animations'
import { useState } from 'react'

export function ContactSectionAnimated() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="contact" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Animated quantum field background */}
      <div className="absolute inset-0">
        {[0, 1, 2, 3, 4].map((i) => {
          // Fixed positions to avoid hydration mismatch
          const positions = [
            { left: '10%', top: '20%' },
            { left: '70%', top: '10%' },
            { left: '30%', top: '60%' },
            { left: '80%', top: '70%' },
            { left: '50%', top: '40%' },
          ]

          return (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(0, 212, 255, 0.1)' : 'rgba(0, 102, 255, 0.1)'} 0%, transparent 70%)`,
                left: positions[i].left,
                top: positions[i].top,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                delay: i * 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
              Let's Build Your Salesforce Ecosystem
            </h2>
            <p className="text-xl text-white/70 mb-12 text-balance">
              Ready to transform your business with intelligent automation?
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {/* Email Contact with typing animation */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="flex items-center justify-center gap-2 text-white/60 mb-3">
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                  <span>Email</span>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg sm:text-2xl md:text-4xl text-accent-cyan hover:text-accent-blue transition-colors font-semibold inline-block break-all px-4 sm:px-0"
                >
                  {contactInfo.email}
                </a>
              </div>
            </ScrollReveal>

            {/* CTA Button with ripple effect */}
            <ScrollReveal delay={0.4}>
              <motion.a
                href={`mailto:${contactInfo.email}?subject=Strategy Call Request`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button background with animated gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-blue"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />

                {/* Ripple effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{
                    scale: 2,
                    transition: { duration: 0.5 },
                  }}
                />

                {/* Particle burst effect */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={isHovered ? {
                      x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
                      y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    } : {}}
                    transition={{
                      duration: 1,
                      repeat: isHovered ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                  />
                ))}

                <span className="relative z-10 text-white">
                  Book Your Strategy Call
                </span>
              </motion.a>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.p
                className="text-white/50 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Free 30-minute consultation to discuss your project
              </motion.p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}