'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { Button } from '@/components/ui/button'
import { company } from '@/config/site.config'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Navigation component with mobile responsiveness
 * Uses client-side interactivity for scroll behavior and mobile menu
 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-dark/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16">
              <Image
                src={company.logo.src}
                alt={company.logo.alt}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <span className="text-white text-xl font-bold uppercase tracking-wide hidden sm:block">
              {company.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              onClick={(e) => handleNavClick(e as any, '#contact')}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  'block h-0.5 w-6 bg-white transition-transform',
                  isMobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 bg-white transition-opacity',
                  isMobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 bg-white transition-transform',
                  isMobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              fullWidth
              className="mt-4"
              onClick={(e) => handleNavClick(e as any, '#contact')}
            >
              Book Consultation
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}