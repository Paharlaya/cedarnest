'use client'

import { ParticlesBackground } from './particles'

/**
 * Hero Background - Client Component
 * Combines particle effects with gradient animations
 * Interactive particle system with mouse repulse and click effects
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />

      {/* Particles Effect */}
      <ParticlesBackground />

      {/* Animated Orbs */}
      <div className="absolute -top-1/2 -left-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl animate-pulse animation-delay-200" />
      </div>

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}