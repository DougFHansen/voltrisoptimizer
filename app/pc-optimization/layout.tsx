import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PC Optimization - Make Your Computer Faster | VOLTRIS',
    description: 'Complete PC optimization. Temporary file cleanup, disabling unnecessary programs, performance tuning, and more. Faster PC in minutes.',
    keywords: ['pc optimization', 'make pc faster', 'optimize windows', 'pc cleanup', 'improve pc performance', 'slow computer', 'accelerate windows'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/pc-optimization'
    },
    openGraph: {
        title: 'PC Optimization - Make Your Computer Faster | VOLTRIS',
        description: 'Complete optimization to make your PC faster. Professional remote service.',
        url: 'https://www.voltrisoptimizer.com/pc-optimization',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - PC Optimization' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PC Optimization | VOLTRIS',
        description: 'Make your PC faster with our professional optimization.',
        images: ['/logo.png']
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
    }
};

export default function OtimizacaoPcLayout({ children }: { children: React.ReactNode }) {
    return children;
}
