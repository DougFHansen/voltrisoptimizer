import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile | VOLTRIS',
  description: 'Manage your data, orders, and preferences in your VOLTRIS profile. Full account security, privacy, and control.',
  openGraph: {
    title: 'User Profile | VOLTRIS',
    description: 'Manage your data, orders, and preferences in your VOLTRIS profile. Full account security, privacy, and control.',
    url: 'https://www.voltrisoptimizer.com/profile',
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
    title: 'User Profile | VOLTRIS',
    description: 'Manage your data, orders, and preferences in your VOLTRIS profile. Full account security, privacy, and control.',
    images: ['https://www.voltrisoptimizer.com/logo.png']
  }
}; 