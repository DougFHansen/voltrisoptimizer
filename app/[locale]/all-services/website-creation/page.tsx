import { Metadata } from 'next';
import WebsiteCreationClient from './WebsiteCreationClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
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
            canonical: `https://www.voltrisoptimizer.com/${locale}/all-services/website-creation`,
            languages: {
                'en': `/en/all-services/website-creation`,
                'es': `/es/all-services/website-creation`,
                'pt-br': `/pt-br/all-services/website-creation`,
                'de': `/de/all-services/website-creation`,
                'fr': `/fr/all-services/website-creation`,
                'it': `/it/all-services/website-creation`,
                'ja': `/ja/all-services/website-creation`,
                'ko': `/ko/all-services/website-creation`,
                'ar': `/ar/all-services/website-creation`
            }
        }
    };
}

export default function WebsiteCreationPage() {
  return <WebsiteCreationClient />;
}
