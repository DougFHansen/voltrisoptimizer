import { Metadata } from 'next';
import WebsiteCreationClient from './WebsiteCreationClient';

export const metadata: Metadata = {
  title: 'Professional Web Creation | VOLTRIS',
  description: 'Professional, fast, and SEO-optimized website development. Boost your sales with a modern and responsive website.',
  keywords: 'web creation, web development, professional website, responsive site, seo site, buy website, virtual store, ecommerce',
  openGraph: {
    title: 'Professional Web Creation | VOLTRIS',
    description: 'Modern websites that convert visitors into customers.',
    url: 'https://www.voltrisoptimizer.com/all-services/website-creation',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/all-services/website-creation',
  },
};

export default function WebsiteCreationPage() {
  return <WebsiteCreationClient />;
}
