'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { Container, ISourceOptions } from '@tsparticles/engine'

export function ParticlesBackground() {
  const [init, setInit] = useState(false)

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version for better performance
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded callback
    console.log('Particles loaded', container)
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 1
      },
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#00D4FF', '#00A8E8', '#007EA7'],
        },
        links: {
          color: '#00D4FF',
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1.5,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 1.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: 0.8,
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.3,
            sync: false,
          },
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 5 },
          animation: {
            enable: true,
            speed: 3,
            minimumValue: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0 w-full h-full"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    )
  }

  return null
}