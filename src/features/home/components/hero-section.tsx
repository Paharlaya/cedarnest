'use client'

import { HeroBackground } from './hero-background'
import { HeroCarousel } from './hero-carousel'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = [
  { gradient: 'from-accent-cyan to-accent-blue' },
  { gradient: 'from-purple-500 to-accent-cyan' },
  { gradient: 'from-accent-blue to-purple-600' }
]

/**
 * Hero Section - Enhanced with Carousel
 * Background animation is isolated in a client component
 * Carousel content provides dynamic showcase of services
 */
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = 6000

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, slideInterval)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Animation - Client Component */}
      <HeroBackground />

      {/* Carousel Content - Client Component */}
      <div className="container-custom relative z-10 pt-20">
        <HeroCarousel currentSlideIndex={currentSlide} onSlideChange={setCurrentSlide} />
      </div>

      {/* Fixed Controls Within Hero Section */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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

      {/* Progress Bar Fixed Within Hero Section */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20 overflow-hidden">
        <motion.div
          className={`relative h-full bg-gradient-to-r ${slides[currentSlide].gradient}`}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: slideInterval / 1000, ease: 'linear' }}
          key={currentSlide}
        >
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient} blur-sm scale-y-[300%] opacity-60`}
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
    </section>
  )
}