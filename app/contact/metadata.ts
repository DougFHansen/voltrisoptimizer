import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Talk to Us | VOLTRIS',
  description: 'Contact VOLTRIS. Remote technical support, website creation, and technology solutions. Phone, WhatsApp, email, and service hours.',
  keywords: [
    'contact voltris',
    'talk to us',
    'technical support contact',
    'phone voltris',
    'whatsapp voltris',
    'email voltris',
    'remote support contact',
    'voltris service',
    'technical support phone',
    'it contact'
  ],
  openGraph: {
    title: 'Contact | Talk to Us | VOLTRIS',
    description: 'Contact VOLTRIS. Phone, WhatsApp, email, and service hours.',
    url: 'https://www.voltrisoptimizer.com/contato',
    siteName: 'VOLTRIS',
    images: [
      {
        url: 'https://www.voltrisoptimizer.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact VOLTRIS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | VOLTRIS',
    description: 'Contact us. Phone, WhatsApp, and email.',
    images: ['https://www.voltrisoptimizer.com/logo.png'],
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
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/contato',
  },
};

