import { NextResponse } from 'next/server';
import { loadSiteDict } from '@/lib/site-i18n/dict-map';

/**
 * Serves the per-locale, English-keyed site dictionary to the client-side
 * SiteTextTranslator. The dictionary is the SAME single source of truth used by
 * the guide bodies (lib/guides-i18n/data/{lang}.json), kept here behind an
 * endpoint so it is NEVER inlined into every static page's HTML/RSC payload
 * (which would add megabytes per page). The loop keeps writing to that file;
 * this route just reads it at request time.
 *
 * Cacheable on the CDN; English (source of truth) and unknown locales return an
 * empty object, which makes the translator inert.
 */
export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const dict = await loadSiteDict(locale);
  return NextResponse.json(dict ?? {}, {
    headers: {
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
    },
  });
}
