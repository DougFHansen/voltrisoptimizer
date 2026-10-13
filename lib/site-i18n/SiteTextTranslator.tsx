'use client';

import { useEffect, useRef } from 'react';
import type { Dict } from './apply';

// Webpack compilation hash (unique per build), replaced as a global at bundle time.
declare const __webpack_hash__: string;

/**
 * Client-side text translator for arbitrary client-component prose (Fase 2 of
 * the "translate the whole site" plan).
 *
 * Why this exists: page bodies live in 'use client' components whose JSX text
 * (and inline data arrays) cannot be rewritten safely at every call site, and a
 * server <Children> walker does not reach a client component's internal tree.
 * The SEO-critical surfaces (metadata + the 316 guide bodies + guide listing)
 * are already translated on the server. This component covers the remaining
 * visible text by translating DOM text nodes against the SAME per-locale,
 * English-keyed dictionary the guides use — so behavior is identical to a t()
 * lookup: exact English source -> translation, anything unknown stays English.
 *
 * Care taken to never break layout:
 *  - Only whole text nodes whose whitespace-normalized value EXACTLY equals a
 *    dictionary key are replaced (never partial/inline-mixed fragments, so
 *    "Hello {name}" style nodes and inline <Link>/<strong> siblings are safe).
 *  - Skips <script>/<style>/<code>/<pre>/<textarea> and noscript.
 *  - Idempotent: once a node holds a translated value it is no longer a key, and
 *    we capture the original English per node so re-walks never double-translate.
 *  - MutationObserver translates content added later (SPA nav, lazy reveals).
 *  - English locale fetches nothing and is inert (no cost, no flash).
 *
 * The dictionary is fetched once from a CDN-cacheable API route (never inlined
 * into each static page's HTML) and memoized per locale in module scope.
 */
const SKIP_SELECTOR = 'script,style,code,pre,textarea,noscript';
const cache = new WeakMap<Node, string | null>(); // original English captured per node
const dictCache: Record<string, Dict | null> = {};
// Per-deploy cache-busting token. `__webpack_hash__` is the compilation hash,
// unique per build and inlined by webpack on both server and client, so a new
// deployment (fresh translations) forces the browser to re-fetch the dictionary
// instead of serving a stale `force-cache` copy from a previous build.
const BUILD: string = typeof __webpack_hash__ !== 'undefined' ? __webpack_hash__ : 'dev';

function normalized(v: string): string {
  return v.replace(/\s+/g, ' ').trim();
}

function shouldSkip(node: Node): boolean {
  let p: HTMLElement | null = node.parentElement;
  while (p) {
    if (p.matches(SKIP_SELECTOR)) return true;
    p = p.parentElement;
  }
  return false;
}

async function fetchDict(locale: string): Promise<Dict | null> {
  const l = (locale || 'en').toLowerCase();
  if (l === 'en' || l === 'en-us') return null; // source of truth, nothing to do
  if (l in dictCache) return dictCache[l];
  try {
    const res = await fetch(`/api/site-dict/${l}?v=${BUILD}`, { cache: 'force-cache' });
    if (!res.ok) return (dictCache[l] = null);
    const json = (await res.json()) as Dict;
    dictCache[l] = json;
    return json;
  } catch {
    return (dictCache[l] = null);
  }
}

export default function SiteTextTranslator({ locale }: { locale: string }) {
  const dictRef = useRef<Record<string, string> | null>(null);

  useEffect(() => {
    let cancelled = false;
    let observer: MutationObserver | null = null;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const translateText = (node: Text) => {
      if (shouldSkip(node) || !dictRef.current) return;
      const cur = node.nodeValue;
      if (cur == null) return;
      const original = cache.has(node) ? cache.get(node) : cur;
      if (original == null) return;
      const key = normalized(String(original));
      if (!key) return;
      const tr = dictRef.current[key];
      if (tr && tr !== cur) {
        // Replace only the text run, preserving leading/trailing whitespace.
        const lead = (cur.match(/^\s*/) || [''])[0];
        const trail = (cur.match(/\s*$/) || [''])[0];
        node.nodeValue = lead + tr + trail;
      }
    };

    const walk = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let tn: Node | null;
      while ((tn = walker.nextNode())) {
        if (!(tn as any).__vt) {
          cache.set(tn, (tn as Text).nodeValue);
          (tn as any).__vt = true;
        }
        translateText(tn as Text);
      }
    };

    fetchDict(locale).then((dict) => {
      if (cancelled || !dict || Object.keys(dict).length === 0) return;
      const m: Record<string, string> = {};
      for (const k of Object.keys(dict)) {
        const n = normalized(k);
        if (n) m[n] = dict[k];
      }
      dictRef.current = m;

      walk(document.body);

      observer = new MutationObserver((muts) => {
        for (const mu of muts) {
          mu.addedNodes.forEach((nd) => {
            if (nd.nodeType === 1 || nd.nodeType === 3) walk(nd);
          });
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Catch-all re-walks for content injected after first paint but not via a
      // childList we can see cleanly (e.g. next/script JSON-LD, delayed reveals,
      // the cookie banner). walk() is idempotent and only ever rewrites nodes
      // whose ORIGINAL English still matches a key, so this is safe to repeat.
      const t1 = setTimeout(() => { if (!cancelled) walk(document.body); }, 900);
      const t2 = setTimeout(() => { if (!cancelled) walk(document.body); }, 2500);
      timers.push(t1, t2);
    });

    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [locale]);

  // No DOM of its own.
  return null;
}
