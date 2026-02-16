/**
 * Core type definitions for the application
 * Following DRY principles - single source of truth for all types
 */

// Navigation types
export interface NavLink {
  label: string
  href: string
  isActive?: boolean
  isButton?: boolean
  external?: boolean
}

// Service/Expertise types
export interface Service {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  features: string[]
  isFeatured?: boolean
}

// Process step types
export interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  details?: string[]
}

// Contact information types
export interface ContactInfo {
  email: string
  phone?: string
  address?: string
  socialLinks?: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  icon?: React.ReactNode
}

// Hero section types
export interface HeroContent {
  badge?: string
  title: string
  titleHighlight?: string
  subtitle: string
  ctaPrimary: {
    text: string
    href: string
  }
  ctaSecondary?: {
    text: string
    href: string
  }
  stats?: HeroStat[]
}

export interface HeroStat {
  value: string
  label: string
}

// Company information
export interface CompanyInfo {
  name: string
  tagline: string
  logo: {
    src: string
    alt: string
  }
  description: string
}

// SEO types
export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  twitterHandle?: string
}