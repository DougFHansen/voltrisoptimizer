import { MetadataRoute } from 'next'

/**
 * Technical SEO Control: robots.ts
 * Configured for maximum visibility to indexable content while
 * strictly forbidding non-existent or administrative paths.
 */
export default function robots(): MetadataRoute.Robots {
  const domain = 'https://www.voltrisoptimizer.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/restricted-area-admin/',
          '/api/',
          '/auth/',
          '/admin/',
          '/private/',
          '*.json',
          '/_next/',
          '/static/',
          '/public/',
          '/tmp/',
          '/*.php', // Standard security shield: block PHP probes
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/restricted-area-admin/',
          '/admin/',
          '/api/',
          '/auth/',
          '*.php',
        ],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
        ],
      }
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  }
}