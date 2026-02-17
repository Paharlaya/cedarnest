'use client'

import { useState, useEffect } from 'react'
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
    title: 'Salesforce Implementation',
    subtitle: 'Any Cloud Platform',
    description: 'Expert Salesforce implementation across Sales Cloud, Service Cloud, Marketing Cloud, and more. We customize and configure Salesforce to perfectly fit your business processes.',
    cta: {
      primary: { text: 'Get Implementation', href: '#contact' },
      secondary: { text: 'View Our Approach', href: '#process' }
    },
    stats: [
      { value: 'Multi-Cloud', label: 'Expertise' },
      { value: '15+', label: 'Happy Clients' },
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
  autoSlide?: boolean
  slideInterval?: number
}

export function HeroCarousel({ autoSlide = true, slideInterval = 6000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || isHovered) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, slideInterval)

    return () => clearInterval(interval)
  }, [autoSlide, slideInterval, isHovered])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-center space-y-6 max-w-5xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading px-4 sm:px-0"
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
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto text-balance px-4 sm:px-0"
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

      {/* Minimal Navigation Arrows - Positioned at extreme edges */}
      <button
        onClick={goToPrevious}
        className="fixed left-8 md:left-12 lg:left-16 xl:left-24 2xl:left-32 top-1/2 -translate-y-1/2 w-12 h-16 flex items-center justify-center text-white/40 hover:text-accent-cyan transition-all duration-200 group z-30"
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
        className="fixed right-8 md:right-12 lg:right-16 xl:right-24 2xl:right-32 top-1/2 -translate-y-1/2 w-12 h-16 flex items-center justify-center text-white/40 hover:text-accent-cyan transition-all duration-200 group z-30"
        aria-label="Next slide"
      >
        <motion.div
          className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[14px] border-l-current"
          whileHover={{ scale: 1.2, x: 3 }}
          transition={{ type: 'spring', stiffness: 400 }}
        />
      </button>

      {/* Slide Indicators - Moved lower to avoid text overlap */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent-cyan scale-125 shadow-lg shadow-accent-cyan/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Lightsaber Progress Bar - Positioned at very bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20 overflow-hidden">
        <motion.div
          className={`relative h-full bg-gradient-to-r ${currentSlideData.gradient}`}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: slideInterval / 1000, ease: 'linear' }}
          key={currentSlide}
        >
          {/* Lightsaber glow effect */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} blur-sm scale-y-[300%] opacity-60`}
          />
          <motion.div
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-4 bg-white rounded-full blur-sm shadow-[0_0_10px_currentColor] shadow-accent-cyan`}
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 212, 255, 0.8)',
                '0 0 20px rgba(0, 212, 255, 1)',
                '0 0 10px rgba(0, 212, 255, 0.8)'
              ]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>
      </div>
    </div>
  )
}