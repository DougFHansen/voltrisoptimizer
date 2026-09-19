import { Metadata } from 'next';
import { getLocalizedAlternates } from '@/lib/seo';
import { GuideTemplateClient, GuideTemplateProps, ContentSection, RelatedGuide, SummaryTableItem } from './GuideTemplateClient';

// Re-export types if needed by consumers (though usually page.tsx doesn't need them explicitely)
export type { GuideTemplateProps, ContentSection, RelatedGuide, SummaryTableItem };

const BASE_URL = 'https://www.voltrisoptimizer.com';

/**
 * Generates metadata for the guide pages.
 * slug: path segment of the guide (e.g. 'formatacao-windows') — used for canonical to fix indexation.
 */
export function createGuideMetadata(slug: string, title: string, description: string, keywords: string[], locale: string = 'en'): Metadata {
  const { canonical, languages } = getLocalizedAlternates(`/guides/${slug}`, locale);

  return {
    title: `${title} | VOLTRIS`,
    description,
    keywords,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical, languages },
    openGraph: {
      title: `${title} | VOLTRIS`,
      description,
      type: "article",
      locale: locale,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
  };
}

/**
 * Server Component wrapper for the Guide Template.
 * Passes all props down to the Client Component which handles the interactive UI.
 */
export function GuideTemplate(props: GuideTemplateProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": props.title,
    "description": props.description,
    "author": {
      "@type": "Organization",
      "name": "Voltris Experts"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Voltris",
      "logo": { "@type": "ImageObject", "url": "https://www.voltrisoptimizer.com/logo.png" }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GuideTemplateClient {...props} />
    </>
  );
}