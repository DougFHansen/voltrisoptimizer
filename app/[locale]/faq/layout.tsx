import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `Frequently Asked Questions (FAQ) | VOLTRIS`,
        description: `Find answers to your questions about remote technical support, website creation, payments, security, and more. See answers to common questions.`,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/faq`,
            languages: {
                'en': `/en/faq`,
                'es': `/es/faq`,
                'pt-br': `/pt-br/faq`,
                'de': `/de/faq`,
                'fr': `/fr/faq`,
                'it': `/it/faq`,
                'ja': `/ja/faq`,
                'ko': `/ko/faq`,
                'ar': `/ar/faq`
            }
        }
    };
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
