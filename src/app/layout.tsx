import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'

// Font optimization with Next.js font loader
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// SEO and metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://cedarnest.com'),
  title: {
    default: 'Cedar Nest Web Studio | Salesforce & AI Integration Experts',
    template: '%s | Cedar Nest',
  },
  description: 'Premium Salesforce consulting, AI Agentforce implementation, and enterprise digital transformation. Specializing in Sales Cloud, Service Cloud, and intelligent automation.',
  keywords: ['Salesforce', 'AI Integration', 'Digital Transformation', 'Sales Cloud', 'Service Cloud', 'Agentforce'],
  authors: [{ name: 'Cedar Nest Web Studio' }],
  creator: 'Cedar Nest Web Studio',
  publisher: 'Cedar Nest Web Studio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cedarnest.com',
    siteName: 'Cedar Nest Web Studio',
    title: 'Cedar Nest Web Studio | Salesforce & AI Integration Experts',
    description: 'Premium Salesforce consulting and enterprise digital transformation',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cedar Nest Web Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cedar Nest Web Studio',
    description: 'Premium Salesforce consulting and enterprise digital transformation',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} antialiased bg-dark text-white`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}