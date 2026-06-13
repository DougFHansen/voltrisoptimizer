import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Windows Guides 2026 | Professional Support',
  description: '50+ technical Windows guides: formatting, optimization, security, and hardware. 2026 professional step-by-step. Learn from experts.',
  keywords: [
    'technical support guides',
    'it tutorials',
    'windows formatting guide',
    'how to optimize pc',
    'digital security guide',
    'data backup tutorial',
    'preventative computer maintenance',
    'resolve windows errors',
    'driver installation',
    'computer cleaning',
    'hardware guide',
    'internet tips',
    'wifi security',
    'gaming pc build'
  ],
  openGraph: {
    title: 'Support Technical Guides and Tutorials | VOLTRIS',
    description: 'Learn professional technical support, optimization, and computer maintenance techniques with our complete and detailed guides.',
    url: 'https://www.voltrisoptimizer.com/guides',
    siteName: 'VOLTRIS',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'VOLTRIS Guides',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Support Technical Guides and Tutorials | VOLTRIS',
    description: 'Learn professional technical support, optimization, and computer maintenance techniques with our complete guides.',
    images: ['/logo.png'],
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
    canonical: 'https://www.voltrisoptimizer.com/guides',
  },
};

