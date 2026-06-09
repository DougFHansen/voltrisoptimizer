import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy (LGPD) | VOLTRIS',
  description: 'How VOLTRIS applies Brazilian data protection law (LGPD): data subject rights, legal bases, data processing, and Data Protection Officer contact. Compliance with Law 13.709/2018.',
  openGraph: {
    title: 'Privacy Policy (LGPD) | VOLTRIS',
    description: 'Information on VOLTRIS LGPD compliance: data subject rights, legal bases, and data processing.',
    url: 'https://www.voltrisoptimizer.com/lgpd',
    type: 'website',
    images: [
      {
        url: 'https://www.voltrisoptimizer.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'VOLTRIS Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy (LGPD) | VOLTRIS',
    description: 'LGPD compliance: data subject rights, legal bases, and data processing.',
    images: ['https://www.voltrisoptimizer.com/logo.png']
  }
};