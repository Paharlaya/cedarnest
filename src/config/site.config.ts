import type { CompanyInfo, Service, ProcessStep, ContactInfo } from '@/types'

/**
 * Centralized site configuration
 * Single source of truth for all site content
 * Makes it easy to update content without touching components
 */

export const company: CompanyInfo = {
  name: 'Cedar Nest',
  tagline: 'Digital Transformation & Salesforce Integration Experts',
  logo: {
    src: '/cedar-nest-logo.png',
    alt: 'Cedar Nest',
  },
  description: 'Full-service digital agency specializing in custom web development and Salesforce solutions. We build powerful websites and implement enterprise CRM systems that drive growth.',
}

export const services: Service[] = [
  {
    id: 'salesforce',
    title: 'Salesforce Solutions',
    description: 'Complete CRM implementation and optimization services',
    features: [
      'Sales Cloud Implementation',
      'Service Cloud Setup',
      'Experience Cloud Portals',
      'Custom Apex Development',
      'Third-party Integrations',
    ],
    isFeatured: true,
  },
  {
    id: 'ai-agentforce',
    title: 'Web Development',
    description: 'Modern, responsive websites that drive conversions',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Performance Optimization',
      'SEO & Analytics',
    ],
    isFeatured: true,
  },
  {
    id: 'integration',
    title: 'Digital Integration',
    description: 'Seamlessly connect your digital ecosystem',
    features: [
      'API Development',
      'System Integration',
      'Database Migration',
      'Cloud Infrastructure',
      'Workflow Automation',
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