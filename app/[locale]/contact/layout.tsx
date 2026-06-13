import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Contact | Talk to Us | VOLTRIS`,
        description: `Contact VOLTRIS. Remote technical support, website creation, and technology solutions. Phone, WhatsApp, email, and service hours.`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/contact`,
            languages: {
                'en': `/en/contact`,
                'es': `/es/contact`,
                'pt-br': `/pt-br/contact`,
                'de': `/de/contact`,
                'fr': `/fr/contact`,
                'it': `/it/contact`,
                'ja': `/ja/contact`,
                'ko': `/ko/contact`,
                'ar': `/ar/contact`
            }
        }
    };
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

