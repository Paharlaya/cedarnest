'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Removed heroicons import - using custom minimal arrows

const slides = [
  {
    id: 1,
    title: 'Digital Transformation',
    subtitle: 'Experts',
    description: 'Transform your business with cutting-edge digital solutions. From legacy system modernization to cloud migration, we deliver end-to-end transformation that drives growth and innovation.',
    cta: {
      primary: { text: 'Start Transformation', href: '#contact' },
      secondary: { text: 'View Case Studies', href: '#expertise' }
    },
    stats: [
      { value: '200+', label: 'Projects' },
      { value: '98%', label: 'Success Rate' },
      { value: '50%', label: 'Cost Reduction' }
    ],
    gradient: 'from-accent-cyan to-accent-blue'
  },
  {
    id: 2,
    title: 'Salesforce Solutions',
    subtitle: 'Agentforce Experts',
    description: 'Expert Salesforce and Agentforce implementation across all clouds. We customize and configure solutions to perfectly fit your unique business processes and goals.',
    cta: {
      primary: { text: 'Get Implementation', href: '#contact' },
      secondary: { text: 'View Our Approach', href: '#process' }
    },
    stats: [
      { value: '5+ Clouds', label: 'Expertise' },
      { value: '4+', label: 'Happy Clients' },
      { value: '100%', label: 'On-Time Delivery' }
    ],
    gradient: 'from-purple-500 to-accent-cyan'
  },
  {
    id: 3,
    title: 'Salesforce Integration',
    subtitle: 'Seamless Connectivity',
    description: 'Connect Salesforce with your existing systems, third-party apps, and data sources. We create seamless integrations that ensure data flows smoothly across your entire tech stack.',
    cta: {
      primary: { text: 'Integrate Now', href: '#contact' },
      secondary: { text: 'Integration Solutions', href: '#expertise' }
    },
    stats: [
      { value: '50+', label: 'Integrations' },
      { value: '99.9%', label: 'Uptime' },
      { value: 'Real-time', label: 'Data Sync' }
    ],
    gradient: 'from-accent-blue to-purple-600'
  }
]

interface HeroCarouselProps {
  currentSlideIndex: number
  onSlideChange: (index: number) => void
}

export function HeroCarousel({ currentSlideIndex, onSlideChange }: HeroCarouselProps) {
  const goToPrevious = () => {
    onSlideChange((currentSlideIndex - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    onSlideChange((currentSlideIndex + 1) % slides.length)
  }

  const currentSlideData = slides[currentSlideIndex]

  return (
    <>
      {/* Main Carousel Content */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-center space-y-6 max-w-5xl mx-auto min-h-[500px] flex flex-col justify-center"
        >
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading px-4 sm:px-0 min-h-[120px] sm:min-h-[140px] lg:min-h-[160px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {currentSlideData.title} &
            <span className={`block bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent pb-2`}>
              {currentSlideData.subtitle}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto text-balance px-4 sm:px-0 min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {currentSlideData.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-3 justify-center flex-wrap px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href={currentSlideData.cta.primary.href}
              className={`inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r ${currentSlideData.gradient} text-white hover:opacity-90 transition-all duration-200 hover:scale-105`}
            >
              {currentSlideData.cta.primary.text}
            </a>
            <a
              href={currentSlideData.cta.secondary.href}
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-dark-card border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
            >
              {currentSlideData.cta.secondary.text}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-8 max-w-md mx-auto pt-6 px-2 sm:px-0 pb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {currentSlideData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-white/70 text-[10px] sm:text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        </AnimatePresence>

        {/* Minimal Navigation Arrows - At extreme edges */}
        <button
        onClick={goToPrevious}
        className="absolute -left-10 md:-left-20 lg:-left-32 xl:-left-40 2xl:-left-48 top-1/2 -translate-y-1/2 w-12 h-16 flex items-center justify-center text-white/40 hover:text-accent-cyan transition-all duration-200 group z-20"
        aria-label="Previous slide"
      >
        <motion.div
          className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[14px] border-r-current"
          whileHover={{ scale: 1.2, x: -3 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-10 md:-right-20 lg:-right-32 xl:-right-40 2xl:-right-48 top-1/2 -translate-y-1/2 w-12 h-16 flex items-center justify-center text-white/40 hover:text-accent-cyan transition-all duration-200 group z-20"
        aria-label="Next slide"
      >
        <motion.div
          className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[14px] border-l-current"
          whileHover={{ scale: 1.2, x: 3 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </button>
      </div>

    </>
  )
}