'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supportedLocales, isValidLocale, type Locale } from '@/lib/i18n';

/**
 * Language selector for the public site header.
 *
 * Design goals:
 *  - Real SVG flags (no emoji — emoji flags render inconsistently on Windows).
 *  - Dark glass dropdown matching the header's neon aesthetic.
 *  - LOCALE STABILITY: the current locale is derived from the URL path only
 *    (deterministic between SSR and client — no hydration mismatch), and
 *    switching writes a `voltris-locale` cookie (read by middleware) plus a
 *    hard navigation to the same route in the new locale, so every page —
 *    localized or bypass routes like /international — renders consistently.
 */

const LOCALE_META: Record<Locale, { native: string; country: string }> = {
  'en':    { native: 'English',     country: 'United States' },
  'es':    { native: 'Español',     country: 'España' },
  'fr':    { native: 'Français',    country: 'France' },
  'de':    { native: 'Deutsch',     country: 'Deutschland' },
  'it':    { native: 'Italiano',    country: 'Italia' },
  'ja':    { native: '日本語',       country: '日本' },
  'ko':    { native: '한국어',       country: '한국' },
  'ar':    { native: 'العربية',     country: 'السعودية' },
  'pt-br': { native: 'Português',   country: 'Brasil' },
  'ru':    { native: 'Русский',     country: 'Россия' },
  'zh-cn': { native: '简体中文',     country: '中国' },
  'vi':    { native: 'Tiếng Việt',  country: 'Việt Nam' },
  'tr':    { native: 'Türkçe',      country: 'Türkiye' },
  'id':    { native: 'Bahasa Indonesia', country: 'Indonesia' },
  'pl':    { native: 'Polski',      country: 'Polska' },
};

const CODE: Record<Locale, string> = {
  'en': 'EN', 'es': 'ES', 'fr': 'FR', 'de': 'DE', 'it': 'IT',
  'ja': 'JA', 'ko': 'KO', 'ar': 'AR', 'pt-br': 'PT',
  'ru': 'RU', 'zh-cn': 'ZH', 'vi': 'VI', 'tr': 'TR', 'id': 'ID', 'pl': 'PL',
};

// ── Flags (20×14 viewBox, inline SVG, rounded by clipPath) ──────────────────
function Clip({ id }: { id: string }) {
  return (
    <clipPath id={id}>
      <rect width="20" height="14" rx="2.5" />
    </clipPath>
  );
}

export function Flag({ locale, className = 'w-5 h-[14px]' }: { locale: Locale; className?: string }) {
  const id = `f${locale.replace('-', '')}`;
  const base = (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true" focusable="false">
      <defs>
        <Clip id={id} />
      </defs>
      <g clipPath={`url(#${id})`}>
        {locale === 'en' && (
          <>
            <rect width="20" height="14" fill="#f7f7f7" />
            {[1, 3, 5, 7, 9, 11, 13].map((y) => <rect key={y} y={y} width="20" height="1" fill="#D7263D" />)}
            <rect width="9" height="7" fill="#1E3A8F" />
            {[1, 2.5, 4, 5.5].map((y) =>
              [1, 2.6, 4.2, 5.8, 7.4].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.45" fill="#fff" />)
            )}
          </>
        )}
        {locale === 'pt-br' && (
          <>
            <rect width="20" height="14" fill="#009C3B" />
            <polygon points="10,1.6 18.4,7 10,12.4 1.6,7" fill="#FFDF00" />
            <circle cx="10" cy="7" r="3.1" fill="#002776" />
            <path d="M7 6.2 Q10 8.2 13 6.6" stroke="#fff" strokeWidth="0.8" fill="none" />
          </>
        )}
        {locale === 'es' && (
          <>
            <rect width="20" height="14" fill="#AA151B" />
            <rect y="3.5" width="20" height="7" fill="#F1BF00" />
            <rect x="4.6" y="5.4" width="2.6" height="3.4" rx="0.5" fill="#AA151B" opacity="0.85" />
          </>
        )}
        {locale === 'fr' && (
          <>
            <rect width="6.7" height="14" fill="#002395" />
            <rect x="6.7" width="6.6" height="14" fill="#fff" />
            <rect x="13.3" width="6.7" height="14" fill="#ED2939" />
          </>
        )}
        {locale === 'de' && (
          <>
            <rect width="20" height="4.67" fill="#10141F" />
            <rect y="4.67" width="20" height="4.66" fill="#DD0000" />
            <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
          </>
        )}
        {locale === 'it' && (
          <>
            <rect width="6.7" height="14" fill="#008C45" />
            <rect x="6.7" width="6.6" height="14" fill="#fff" />
            <rect x="13.3" width="6.7" height="14" fill="#CD212A" />
          </>
        )}
        {locale === 'ja' && (
          <>
            <rect width="20" height="14" fill="#fff" />
            <circle cx="10" cy="7" r="3.7" fill="#E6001E" />
          </>
        )}
        {locale === 'ko' && (
          <>
            <rect width="20" height="14" fill="#fff" />
            <path d="M6.6 4.4 Q10 2.6 13.4 4.4 Q15.6 6.8 13.4 9.6 Q10 11.4 6.6 9.6 Q4.4 6.8 6.6 4.4 Z" fill="#004A9E" opacity="0.001" />
            <circle cx="10" cy="7" r="3.3" fill="#CD2E3A" />
            <path d="M6.7 7 A3.3 3.3 0 0 0 13.3 7 A1.65 1.65 0 0 1 10 7 A1.65 1.65 0 0 0 6.7 7 Z" fill="#004A9E" />
            <g stroke="#111" strokeWidth="0.55">
              <path d="M15.2 3.2 l1.6 1.1 M14.8 4.1 l1.6 1.1 M15.6 2.5 l1.6 1.1" transform="rotate(33 16 4)" />
              <path d="M2.8 10.8 l1.6 1.1 M2.4 11.7 l1.6 1.1" transform="rotate(33 3.6 11.4)" />
            </g>
          </>
        )}
        {locale === 'ar' && (
          <>
            <rect width="20" height="14" fill="#165D33" />
            <path d="M4 9.4 Q10 10.6 15.4 8.6" stroke="#fff" strokeWidth="0.9" fill="none" strokeLinecap="round" />
            <path d="M12.8 10.8 l2.6 -0.6 -0.5 1.9 -2.1 -0.4 Z" fill="#fff" opacity="0" />
            <rect x="12.6" y="9.6" width="3.4" height="0.8" rx="0.4" fill="#fff" transform="rotate(-14 14.3 10)" />
          </>
        )}
        {locale === 'ru' && (
          <>
            <rect width="20" height="14" fill="#fff" />
            <rect y="4.67" width="20" height="4.66" fill="#0039A6" />
            <rect y="9.33" width="20" height="4.67" fill="#D52B1E" />
          </>
        )}
        {locale === 'zh-cn' && (
          <>
            <rect width="20" height="14" fill="#DE2910" />
            <polygon fill="#FFDE00" points="5,2.2 5.56,3.83 7.28,3.86 5.90,4.89 6.41,6.54 5,5.55 3.59,6.54 4.10,4.89 2.72,3.86 4.44,3.83" />
            <circle cx="9.6" cy="3.1" r="0.62" fill="#FFDE00" />
            <circle cx="11.1" cy="4.9" r="0.62" fill="#FFDE00" />
            <circle cx="11.1" cy="7.1" r="0.62" fill="#FFDE00" />
            <circle cx="9.6" cy="8.9" r="0.62" fill="#FFDE00" />
          </>
        )}
        {locale === 'vi' && (
          <>
            <rect width="20" height="14" fill="#DA251D" />
            <polygon fill="#FFFF00" points="10,3.6 10.79,5.91 13.23,5.95 11.28,7.42 12.0,9.75 10,8.35 8.0,9.75 8.72,7.42 6.77,5.95 9.21,5.91" />
          </>
        )}
        {locale === 'tr' && (
          <>
            <rect width="20" height="14" fill="#E30A17" />
            <circle cx="8.3" cy="7" r="3.4" fill="#fff" />
            <circle cx="9.5" cy="7" r="2.7" fill="#E30A17" />
            <polygon fill="#fff" points="13.2,5.4 13.58,6.48 14.72,6.51 13.81,7.20 14.14,8.29 13.2,7.64 12.26,8.29 12.59,7.20 11.68,6.51 12.82,6.48" />
          </>
        )}
        {locale === 'id' && (
          <>
            <rect width="20" height="14" fill="#fff" />
            <rect width="20" height="7" fill="#CE1126" />
          </>
        )}
        {locale === 'pl' && (
          <>
            <rect width="20" height="14" fill="#fff" />
            <rect y="7" width="20" height="7" fill="#DC143C" />
          </>
        )}
      </g>
      <rect width="19.5" height="13.5" x="0.25" y="0.25" rx="2.4" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
    </svg>
  );
  return base;
}

// ── Selector ─────────────────────────────────────────────────────────────────
export default function LanguageSelector({ inDrawer = false }: { inDrawer?: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Locale derivado SOMENTE da URL (determinístico SSR/client, sem "flash").
  const segments = (pathname || '/').split('/').filter(Boolean);
  const current: Locale = segments.length > 0 && isValidLocale(segments[0]) ? (segments[0] as Locale) : 'en';

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClickAway);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickAway);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const switchTo = (next: Locale) => {
    if (next === current) {
      setOpen(false);
      return;
    }
    try {
      // Persiste a escolha para o middleware (1 ano). SameSite=Lax: enviado em
      // navegações normais, suficiente para detecção server-side.
      document.cookie = `voltris-locale=${next};path=/;max-age=31536000;SameSite=Lax`;
    } catch {
      /* ignore */
    }
    // Troca o segmento de locale preservando o restante do caminho E a query.
    const rest = segments.length > 0 && isValidLocale(segments[0]) ? segments.slice(1) : segments;
    const search = typeof window !== 'undefined' ? window.location.search || '' : '';
    const target = next === 'en' ? '/' + rest.join('/') : '/' + [next, ...rest].join('/');
    const url = (target === '/' ? '' : target) + search;
    // Navegação HARD: recarrega toda a árvore localizada (metadata, provedores,
    // dicionário) — evita estado obsoleto de contexto em páginas cliente.
    window.location.href = url || '/';
  };

  return (
    <div ref={ref} className={`relative ${inDrawer ? 'w-full' : 'shrink-0'}`} data-notrans>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
        className={`group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 ${
          inDrawer ? 'w-full justify-start px-4 py-3' : 'px-3 py-2'
        }`}
      >
        <Flag locale={current} className="w-5 h-[14px] shrink-0 shadow-sm" />
        <span className="text-xs font-bold tracking-widest opacity-90">{CODE[current]}</span>
        <svg viewBox="0 0 10 6" className={`w-2.5 h-1.5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute z-[120] ${inDrawer ? 'left-0 top-full mt-2' : 'right-0 top-full mt-2'} w-60 origin-top rounded-2xl border border-white/10 bg-[#0A0A14]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] py-2 transition-all duration-200 max-h-[min(70dvh,520px)] overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 ${
          open ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-[0.97]'
        }`}
        role="listbox"
      >
        {supportedLocales.map((loc) => {
          const active = loc === current;
          return (
            <button
              key={loc}
              role="option"
              aria-selected={active}
              onClick={() => switchTo(loc)}
              className={`flex w-full items-center gap-3 px-3 py-2 text-left transition-colors duration-150 ${
                active ? 'bg-[#8B31FF]/15' : 'hover:bg-white/5'
              }`}
            >
              <Flag locale={loc} className="w-6 h-4 shrink-0" />
              <span className="flex-1 min-w-0">
                <span className={`block truncate text-sm font-bold ${active ? 'text-white' : 'text-slate-300'}`}>
                  {LOCALE_META[loc].native}
                </span>
                <span className="block truncate text-[10px] font-medium text-slate-500">
                  {LOCALE_META[loc].country}
                </span>
              </span>
              {active && (
                <svg viewBox="0 0 16 16" className="w-4 h-4 shrink-0">
                  <path d="M3 8.5l3.2 3.2L13 5" stroke="url(#lg-check)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="lg-check" x1="0" y1="0" x2="16" y2="16">
                      <stop offset="0" stopColor="#31A8FF" /><stop offset="0.5" stopColor="#8B31FF" /><stop offset="1" stopColor="#FF4B6B" />
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
