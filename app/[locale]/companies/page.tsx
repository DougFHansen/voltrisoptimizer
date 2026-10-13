import { Metadata } from 'next';
import EmpresasClient from './EmpresasClient';
import { localizeMetadata } from '@/lib/site-i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return await localizeMetadata(locale, {
        
  title: 'IT Support and Managed Remote Services for Companies - VOLTRIS',
  description: "Optimize your company's IT infrastructure. Fast remote support, cybersecurity and LGPD-compliant data protection for maximum productivity.",
  keywords: [
    'suporte ti empresas',
    'terceirização de ti',
    'gestão de ti remota',
    'segurança corporativa',
    'otimização de frota pc',
    'lgpd compliance'
  ],
  openGraph: {
    title: 'Advanced IT Management for Companies | VOLTRIS',
    description: 'Boost productivity and cut downtime with specialized corporate remote IT support.',
    url: 'https://www.voltrisoptimizer.com/companies',
    images: ['/logo.png']
  },
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/companies`,
            languages: {
                'en': `/en/companies`,
                'es': `/es/companies`,
                'pt-br': `/pt-br/companies`,
                'de': `/de/companies`,
                'fr': `/fr/companies`,
                'it': `/it/companies`,
                'ja': `/ja/companies`,
                'ko': `/ko/companies`,
                'ar': `/ar/companies`,
                'ru': `/ru/companies`,
                'zh-cn': `/zh-cn/companies`,
                'vi': `/vi/companies`,
                'tr': `/tr/companies`,
                'id': `/id/companies`,
                'pl': `/pl/companies`,
                'x-default': `/en/companies`
            }
        }
    });
}

export default function EmpresasPage() {
  return <EmpresasClient />;
}
