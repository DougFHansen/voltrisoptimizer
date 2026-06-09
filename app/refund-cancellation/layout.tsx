import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Refund and Cancellation Policy - VOLTRIS',
    description: 'Read the VOLTRIS refund and cancellation policy. Learn about your right to withdraw, refund deadlines, and cancellation procedures for our services.',
    keywords: ['refund policy', 'cancellation policy', 'refund rights', 'voltris refund', 'service cancellation'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/reembolso-cancelamento'
    },
    openGraph: {
        title: 'Refund and Cancellation Policy - VOLTRIS',
        description: 'Transparency and commitment to our customers. Learn about our refund rules.',
        url: 'https://www.voltrisoptimizer.com/reembolso-cancelamento',
        type: 'website',
        locale: 'en_US',
        siteName: 'VOLTRIS',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'VOLTRIS - Refund Policy' }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Refund Policy | VOLTRIS',
        description: 'Transparency in refunds and cancellations.',
        images: ['/logo.png']
    }
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
    return children;
}
