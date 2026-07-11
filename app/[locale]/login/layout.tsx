import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Sign In to Client Area | VOLTRIS`,
        description: `Access your VOLTRIS account to manage services, orders, and remote technical support. Secure and fast login.`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/login`,
            languages: {
                'en': `/en/login`,
                'es': `/es/login`,
                'pt-br': `/pt-br/login`,
                'de': `/de/login`,
                'fr': `/fr/login`,
                'it': `/it/login`,
                'ja': `/ja/login`,
                'ko': `/ko/login`,
                'ar': `/ar/login`
            }
        }
    };
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }