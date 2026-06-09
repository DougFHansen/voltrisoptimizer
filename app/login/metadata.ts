import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In to Client Area | VOLTRIS',
  description: 'Access your VOLTRIS account to manage services, orders, and remote technical support. Secure and fast login.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Sign In to Client Area | VOLTRIS',
    description: 'Access your VOLTRIS account to manage services, orders, and remote technical support. Secure and fast login.',
    url: 'https://www.voltrisoptimizer.com/login',
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
    title: 'Sign In to Client Area | VOLTRIS',
    description: 'Access your VOLTRIS account to manage services, orders, and remote technical support. Secure and fast login.',
    images: ['https://www.voltrisoptimizer.com/logo.png']
  }
}; 