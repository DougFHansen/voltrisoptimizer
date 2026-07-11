import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "VOLTRIS Global - Remote IT Support for International Users",
    template: "%s | VOLTRIS Global"
  },
  description: "Professional remote IT support for users worldwide. PC formatting, optimization, virus removal, and technical support in multiple languages. Fast, secure, and 100% online.",
  keywords: [
    "remote it support international",
    "it technician online global",
    "remote pc formatting worldwide",
    "online technical support expats",
    "international computer repair",
    "remote windows optimization",
    "global it support english",
    "tech support for expats",
    "online it company worldwide",
    "remote technical assistance global",
    "configure windows remotely",
    "voltris global support"
  ],
  authors: [{ name: "VOLTRIS" }],
  creator: "VOLTRIS",
  publisher: "VOLTRIS",
  metadataBase: new URL('https://www.voltrisoptimizer.com'),
  alternates: {
    canonical: '/international',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.voltrisoptimizer.com/international',
    siteName: 'VOLTRIS Global',
    title: 'Remote IT Support for International Users | Pay in USD/EUR',
    description: 'Fix your computer problems with a certified remote technician. Flexible scheduling, multiple payment options, and support in your language.',
    images: [
      {
        url: '/logo-international.png',
        width: 1200,
        height: 630,
        alt: 'VOLTRIS Global - IT Support for International Users',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote IT Support for International Users | VOLTRIS',
    description: 'Professional IT support for users worldwide. Pay in USD/EUR. Available in English, Portuguese, and more.',
    images: ['/logo-international.png'],
    creator: '@voltris',
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
  category: 'technology',
};

export default function InternationalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}