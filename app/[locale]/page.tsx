import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomeClient from '@/components/HomeClient';

const supportedLocales = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'pt-br', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'] as const;
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
  'ru':    'VOLTRIS — Оптимизация ПК и техническая поддержка',
  'zh-cn': 'VOLTRIS - PC 优化与技术支持',
  'vi':    'VOLTRIS - Tối ưu hóa PC và Hỗ trợ Kỹ thuật',
  'tr':    'VOLTRIS - PC Optimizasyonu ve Teknik Destek',
  'id':    'VOLTRIS - Optimasi PC dan Dukungan Teknis',
  'pl':    'VOLTRIS - Optymalizacja PC i wsparcie techniczne',
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
  'ru':    'Ведущий авторитет в игровой производительности и оптимизации Windows. Скачайте Voltris Optimizer и запросите специализированную техническую поддержку.',
  'zh-cn': '游戏性能与 Windows 优化领域的权威。下载 Voltris Optimizer 并获取专业技术支持。',
  'vi':    'Chuyên gia hàng đầu về hiệu năng game và tối ưu hóa Windows. Tải Voltris Optimizer và yêu cầu hỗ trợ kỹ thuật chuyên nghiệp.',
  'tr':    'Oyun performansı ve Windows optimizasyonunda öncü otorite. Voltris Optimizer’ı indirin ve uzman teknik destek talep edin.',
  'id':    'Otoritas terdepan dalam performa gaming dan optimasi Windows. Unduh Voltris Optimizer dan minta dukungan teknis khusus.',
  'pl':    'Wiodący autorytet w zakresie wydajności w grach i optymalizacji systemu Windows. Pobierz Voltris Optimizer i zamów specjalistyczne wsparcie techniczne.',
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
        'ru':      '/ru',
        'zh-cn':   '/zh-cn',
        'vi':      '/vi',
        'tr':      '/tr',
        'id':      '/id',
        'pl':      '/pl',
        'x-default': '/en',
      },
    },
    openGraph: {
      title: titles[safeLocale],
      description: descriptions[safeLocale],
      url: `https://www.voltrisoptimizer.com/${safeLocale}`,
      siteName: 'VOLTRIS',
      type: 'website',
      images: [{
        url: 'https://www.voltrisoptimizer.com/logo.png',
        width: 1200,
        height: 630,
        alt: titles[safeLocale],
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[safeLocale],
      description: descriptions[safeLocale],
      images: ['https://www.voltrisoptimizer.com/logo.png'],
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
