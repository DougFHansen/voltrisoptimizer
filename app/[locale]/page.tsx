import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeClient from '@/components/HomeClient';

const supportedLocales = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'pt-br'] as const;
type SupportedLocale = typeof supportedLocales[number];

interface HomePageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const titles: Record<SupportedLocale, string> = {
  'en':    'VOLTRIS - PC Optimization and Technical Support',
  'es':    'VOLTRIS - Optimización de PC y Soporte Técnico',
  'fr':    'VOLTRIS - Optimisation PC et Support Technique',
  'de':    'VOLTRIS - PC-Optimierung und Technischer Support',
  'it':    'VOLTRIS - Ottimizzazione PC e Supporto Tecnico',
  'ja':    'VOLTRIS - PC最適化とテクニカルサポート',
  'ko':    'VOLTRIS - PC 최적화 및 기술 지원',
  'ar':    'VOLTRIS - تحسين الكمبيوتر والدعم الفني',
  'pt-br': 'VOLTRIS - Otimização de PC e Suporte Técnico',
};

const descriptions: Record<SupportedLocale, string> = {
  'en':    'The leading authority in gaming performance and Windows optimization. Download Voltris Optimizer and request specialized technical support.',
  'es':    'La mayor autoridad en rendimiento gaming y optimización de Windows. Descarga Voltris Optimizer y solicita soporte técnico especializado.',
  'fr':    'La référence en matière de performance gaming et optimisation Windows. Téléchargez Voltris Optimizer et demandez un support technique spécialisé.',
  'de':    'Die führende Autorität für Gaming-Performance und Windows-Optimierung. Laden Sie Voltris Optimizer herunter und fordern Sie technischen Support an.',
  'it':    'La massima autorità in performance gaming e ottimizzazione Windows. Scarica Voltris Optimizer e richiedi supporto tecnico specializzato.',
  'ja':    'ゲーミングパフォーマンスとWindows最適化の最高権威。Voltris Optimizerをダウンロードし、専門的なテクニカルサポートをリクエストしてください。',
  'ko':    '게이밍 성능 및 Windows 최적화의 최고 권위자. Voltris Optimizer를 다운로드하고 전문 기술 지원을 요청하세요.',
  'ar':    'السلطة الرائدة في أداء الألعاب وتحسين ويندوز. قم بتنزيل Voltris Optimizer واطلب الدعم الفني المتخصص.',
  'pt-br': 'A maior autoridade em performance gamer e otimização de Windows. Baixe o Voltris Optimizer e solicite suporte técnico especializado.',
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (supportedLocales.includes(locale as SupportedLocale) ? locale : 'en') as SupportedLocale;

  return {
    title: titles[safeLocale],
    description: descriptions[safeLocale],
    alternates: {
      canonical: `/${safeLocale}`,
      languages: {
        'en':      '/en',
        'es':      '/es',
        'fr':      '/fr',
        'de':      '/de',
        'it':      '/it',
        'ja':      '/ja',
        'ko':      '/ko',
        'ar':      '/ar',
        'pt-br':   '/pt-br',
        'x-default': '/en',
      },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!supportedLocales.includes(locale as SupportedLocale)) {
    notFound();
  }

  return <HomeClient />;
}
