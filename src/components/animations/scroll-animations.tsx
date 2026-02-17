'use client'

import { motion, useAnimation, useInView, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Animation variants for different effects
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom ease for smooth animation
    },
  },
}

export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export const slideInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// Card hover animation
export const cardHover = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "easeOut"
    }
  }
}

// Scroll reveal wrapper component
interface ScrollRevealProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className = '',
  delay = 0,
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, {
    once,
    amount: 0.2,
    margin: "-50px"
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Stagger reveal for lists
export function StaggerReveal({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const controls = useAnimation()
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  )
}