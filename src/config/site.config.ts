import type { CompanyInfo, Service, ProcessStep, ContactInfo } from '@/types'

/**
 * Centralized site configuration
 * Single source of truth for all site content
 * Makes it easy to update content without touching components
 */

export const company: CompanyInfo = {
  name: 'Cedar Nest Web Studio',
  tagline: 'Salesforce & AI Integration Experts',
  logo: {
    src: '/logo.svg',
    alt: 'Cedar Nest Web Studio',
  },
  description: 'Premium Salesforce consulting, AI Agentforce implementation, and enterprise digital transformation.',
}

export const services: Service[] = [
  {
    id: 'salesforce',
    title: 'Salesforce Solutions',
    description: 'Full-cycle consulting from architecture to optimization',
    features: [
      'Sales Cloud Implementation',
      'Service Cloud + Amazon Connect',
      'Experience Cloud Portals',
      'Custom Apex & Lightning',
      'Enterprise Integrations',
    ],
    isFeatured: false,
  },
  {
    id: 'ai-agentforce',
    title: 'AI & Agentforce',
    description: 'Intelligent automation that delivers measurable ROI',
    features: [
      'Custom AI Agents',
      'Process Automation',
      'Intelligent Workflows',
      'Predictive Systems',
      'Secure AI Architecture',
    ],
    isFeatured: true,
  },
  {
    id: 'integration',
    title: 'Integration & Web',
    description: 'Scalable architecture and modern web solutions',
    features: [
      'REST/SOAP Integrations',
      'Payment Gateway Setup',
      'High-Performance Websites',
      'Secure Infrastructure',
      'Real-time Data Sync',
    ],
    isFeatured: false,
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your business goals and technical requirements',
    details: ['Requirements gathering', 'Technical assessment', 'ROI analysis'],
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    description: 'Architecting the optimal solution for your needs',
    details: ['Solution design', 'Technology stack', 'Implementation roadmap'],
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    description: 'Building with best practices and security in mind',
    details: ['Agile development', 'Regular updates', 'Quality assurance'],
  },
  {
    id: 'testing',
    number: '04',
    title: 'Testing',
    description: 'Rigorous testing to ensure reliability and performance',
    details: ['Unit testing', 'Integration testing', 'User acceptance testing'],
  },
  {
    id: 'deployment',
    number: '05',
    title: 'Deployment',
    description: 'Smooth rollout with minimal disruption',
    details: ['Staged deployment', 'Data migration', 'Go-live support'],
  },
  {
    id: 'support',
    number: '06',
    title: 'Support',
    description: 'Ongoing optimization and expert assistance',
    details: ['24/7 monitoring', 'Performance optimization', 'Feature updates'],
  },
]

export const contactInfo: ContactInfo = {
  email: 'cedarnestwebstudio@gmail.com',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/cedarnest',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/cedarnest',
    },
  ],
}

export const siteConfig = {
  company,
  services,
  processSteps,
  contactInfo,
}