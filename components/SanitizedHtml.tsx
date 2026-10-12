'use client';

import { createElement, useEffect, useState } from 'react';

interface SanitizedHtmlProps {
    /** Build-time, developer-authored HTML string (trusted content). */
    html: string;
    className?: string;
    /** Wrapper tag. Defaults to a <div>. */
    as?: 'div' | 'p' | 'span';
}

/**
 * Renders trusted, build-time HTML with the FULL content present in the initial
 * server-rendered HTML (critical for SEO/crawlers), then sanitizes it in the
 * browser after hydration.
 *
 * Why not `isomorphic-dompurify` here? It statically pulls `jsdom`, whose
 * dependency `@exodus/bytes` is pure ESM. On Vercel's serverless Node runtime
 * this throws `ERR_REQUIRE_ESM` during SSR and turns every guide page into a
 * 500. By importing the browser-only `dompurify` lazily inside useEffect, jsdom
 * is never evaluated on the server. The content is our own static strings, so
 * rendering it raw on the server is safe; sanitization still runs client-side.
 */
export default function SanitizedHtml({ html, className, as = 'div' }: SanitizedHtmlProps) {
    const [safeHtml, setSafeHtml] = useState(html);

    useEffect(() => {
        let active = true;
        import('dompurify')
            .then((mod) => {
                const DOMPurify = mod.default;
                if (active) setSafeHtml(DOMPurify.sanitize(html));
            })
            .catch(() => {
                /* If the sanitizer cannot load, keep the original trusted HTML. */
            });
        return () => {
            active = false;
        };
    }, [html]);

    return createElement(as, { className, dangerouslySetInnerHTML: { __html: safeHtml } });
}
