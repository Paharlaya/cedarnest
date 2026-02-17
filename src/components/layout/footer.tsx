'use client'

import Image from 'next/image'
import { company, contactInfo } from '@/config/site.config'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Footer Component - Enhanced Glassmorphic Design
 * Futuristic footer with animated gradients and glass effects
 */
export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('footer')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="relative bg-dark/50 backdrop-blur-xl border-t border-white/10 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-blue/20" />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-accent-cyan/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #00d4ff, #0066ff, #00d4ff, transparent)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="container-custom py-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Info */}
          <motion.div
            className="group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="flex items-center gap-4 mb-6 relative">
              {/* Glow effect on logo */}
              <motion.div
                className="absolute -left-4 -top-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="relative w-16 h-16 z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.h3
                className="text-white text-2xl font-bold uppercase tracking-wide font-heading relative z-10"
                style={{
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
                }}
              >
                {company.name}
              </motion.h3>
            </div>
            <p className="text-white/70 mb-4">
              {company.description}
            </p>
            <p className="text-white/60 text-sm">
              {company.tagline}
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4 font-heading relative">
              <span className="relative z-10">
                Services
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h4>
            <ul className="space-y-2">
              {['Salesforce Implementation', 'AI & Agentforce', 'Enterprise Integration', 'Digital Transformation'].map((service, index) => (
                <motion.li
                  key={service}
                  className="text-white/70 hover:text-accent-cyan transition-colors cursor-pointer relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative z-10">{service}</span>
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4 font-heading relative inline-block">
              <span className="relative z-10">
                Get In Touch
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </h4>
            <div className="space-y-2">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="block text-white/70 hover:text-accent-cyan transition-all duration-300 text-sm md:text-base break-all md:break-normal relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">
                  {contactInfo.email}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-md opacity-0 group-hover:opacity-100 blur-md"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              {contactInfo.socialLinks?.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  className="block text-white/70 hover:text-accent-cyan transition-all duration-300 relative group"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <span className="relative z-10">{social.platform}</span>
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-white/10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {/* Animated border gradient */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
              backgroundSize: '200% 100%'
            }}
            animate={{
              backgroundPosition: ['200% 0%', '0% 0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.p
            className="text-center text-white/60 text-sm relative z-10"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} {company.name}. All rights reserved.
          </motion.p>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-accent-cyan/50 rounded-full"
                initial={{
                  x: `${20 * (i + 1)}%`,
                  y: 100,
                  opacity: 0
                }}
                animate={{
                  y: -20,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}