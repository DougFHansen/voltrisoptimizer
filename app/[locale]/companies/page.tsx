import { Metadata } from 'next';
import EmpresasClient from './EmpresasClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        
  title: 'Suporte de TI e Gestão Remota para Empresas - VOLTRIS',
  description: 'Otimize a infraestrutura de TI da sua empresa. Suporte remoto rápido, segurança cibernética (LGPD) e otimização de performance para máxima produtividade.',
  keywords: [
    'suporte ti empresas',
    'terceirização de ti',
    'gestão de ti remota',
    'segurança corporativa',
    'otimização de frota pc',
    'lgpd compliance'
  ],
  openGraph: {
    title: 'Gestão Avançada de TI para Empresas | VOLTRIS',
    description: 'Aumente a produtividade e reduza o tempo de inatividade com suporte corporativo especializado.',
    url: 'https://www.voltrisoptimizer.com/empresas',
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
                'ar': `/ar/companies`
            }
        }
    };
}

export default function EmpresasPage() {
  return <EmpresasClient />;
}
