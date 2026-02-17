'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/config/site.config'
import { ScrollReveal, fadeInUp } from '@/components/animations/scroll-animations'

const stepVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: -30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
  },
}

const lineVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
  },
}

export function ProcessSectionAnimated() {
  return (
    <section id="process" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated neural network background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0066FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Animated connection lines */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${i * 20}%`}
              y1="0"
              x2={`${(i + 1) * 20}%`}
              y2="100%"
              stroke="url(#grad1)"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container-custom relative">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            Structured phases with transparency and measurable milestones
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative group"
            >
              <motion.div
                className="glass rounded-2xl p-8 h-full relative overflow-hidden transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Step Number with animated border */}
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue flex items-center justify-center text-white font-bold relative"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 212, 255, 0.3)',
                        '0 0 40px rgba(0, 212, 255, 0.6)',
                        '0 0 20px rgba(0, 212, 255, 0.3)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    {step.number}
                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-accent-cyan/30"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-6 relative z-10 group-hover:text-white/90 transition-colors">
                  {step.description}
                </p>

                {/* Details with staggered animation */}
                {step.details && (
                  <motion.ul className="space-y-2 relative z-10" role="list">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.1 + detailIndex * 0.05,
                          duration: 0.3,
                        }}
                        className="flex items-center gap-3 text-white/60 text-sm group-hover:text-white/80 transition-colors"
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3 + detailIndex * 0.1,
                          }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </motion.div>

              {/* Connection Line Animation (Desktop) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 z-0">
                  <svg width="32" height="2" className="overflow-visible">
                    <motion.path
                      d="M0,1 L32,1"
                      stroke="url(#grad1)"
                      strokeWidth="2"
                      fill="none"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={lineVariants}
                      transition={{
                        delay: index * 0.15 + 0.3,
                        duration: 0.8,
                      }}
                      strokeDasharray="5 5"
                    />
                  </svg>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}