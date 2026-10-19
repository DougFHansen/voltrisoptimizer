/**
 * FONTE DE VERDADE DO IDIOMA (FASE 2 da missão internacional).
 *
 * Por que este módulo existe separado do `lib/i18n.ts`:
 *
 *  - `lib/i18n.ts` importa `next/navigation` (`notFound`) e `path`, então só pode
 *    rodar dentro do Next. Mas a resolução do idioma precisa acontecer LUGARES SEM
 *    NAVEGADOR E SEM SERVIDOR NEXT: um webhook da Stripe (roda sem navegador), uma
 *    Edge Function do Send Email Hook, uma tarefa assíncrona pós-compra, e os
 *    próprios testes de Node (`node --test`). Se amarrarmos a resolução ao
 *    `i18n.ts`, esses caminhos ficam órfãos ou quebram no teste.
 *  - Este arquivo é 100% puro: nenhuma importação de Next/React/DOM. A lista de
 *    locales abaixo é a MESMA de `lib/i18n.ts` (mantida em sincronia de propósito;
 *    o teste `locale.test.ts` garante que os 15 códigos não divirjam).
 *
 * Regra inegociável da missão: o idioma usado para gerar um documento/e-mail NÃO
 * pode depender do estado visual do navegador. A prioridade de resolução é sempre:
 *
 *   perfil (coluna `profiles.preferred_locale`)  >  user_metadata  >  cookie  >
 *   Accept-Language  >  padrão ('en')
 *
 * Nunca confiamos num código arbitrário vindo do frontend: tudo passa por
 * `normalizeLocale`, que devolve sempre um dos 15 suportados (ou o padrão).
 */

/** Os 15 locales oficiais do site internacional (idêntico a `lib/i18n.ts`). */
export const SUPPORTED_LOCALES = [
  'en',
  'es',
  'fr',
  'de',
  'it',
  'ja',
  'ko',
  'ar',
  'pt-br',
  'ru',
  'zh-cn',
  'vi',
  'tr',
  'id',
  'pl',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** Locale usado quando nada válido foi encontrado (fallback controlado). */
export const DEFAULT_LOCALE: Locale = 'en';

export interface LocaleMeta {
  /** Nome nativo do idioma (para o seletor). */
  label: string;
  /** Região ISO associada (para Intl). */
  region: string;
  /** Direção do texto. */
  direction: 'ltr' | 'rtl';
  /** Tag BCP47 correta para `Intl.*` (datas e moedas). */
  intl: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  'en': { label: 'English', region: 'US', direction: 'ltr', intl: 'en-US' },
  'es': { label: 'Español', region: 'ES', direction: 'ltr', intl: 'es-ES' },
  'fr': { label: 'Français', region: 'FR', direction: 'ltr', intl: 'fr-FR' },
  'de': { label: 'Deutsch', region: 'DE', direction: 'ltr', intl: 'de-DE' },
  'it': { label: 'Italiano', region: 'IT', direction: 'ltr', intl: 'it-IT' },
  'ja': { label: '日本語', region: 'JP', direction: 'ltr', intl: 'ja-JP' },
  'ko': { label: '한국어', region: 'KR', direction: 'ltr', intl: 'ko-KR' },
  'ar': { label: 'العربية', region: 'SA', direction: 'rtl', intl: 'ar-SA' },
  'pt-br': { label: 'Português', region: 'BR', direction: 'ltr', intl: 'pt-BR' },
  'ru': { label: 'Русский', region: 'RU', direction: 'ltr', intl: 'ru-RU' },
  'zh-cn': { label: '简体中文', region: 'CN', direction: 'ltr', intl: 'zh-CN' },
  'vi': { label: 'Tiếng Việt', region: 'VN', direction: 'ltr', intl: 'vi-VN' },
  'tr': { label: 'Türkçe', region: 'TR', direction: 'ltr', intl: 'tr-TR' },
  'id': { label: 'Bahasa Indonesia', region: 'ID', direction: 'ltr', intl: 'id-ID' },
  'pl': { label: 'Polski', region: 'PL', direction: 'ltr', intl: 'pl-PL' },
};

export function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value.toLowerCase());
}

/**
 * Normaliza QUALQUER entrada (código solto, parte de um pathname, valor de
 * `navigator.language`, BCP47 arbitrário) para um dos 15 suportados, ou o padrão.
 *
 * Casos tratados:
 *  - 'PT-BR', 'pt_br', 'pt-BR'  -> 'pt-br'
 *  - 'pt' / 'pt-PT'              -> 'pt-br' (único português que o site serve)
 *  - 'zh', 'zh-Hans', 'zh-TW'    -> 'zh-cn' (único chinês suportado)
 *  - 'en-GB', 'es-MX', 'fr-CA'   -> prefixo base ('en', 'es', 'fr')
 *  - 'xx', '', null, 123         -> DEFAULT_LOCALE
 */
export function normalizeLocale(raw: unknown): Locale {
  if (typeof raw !== 'string') return DEFAULT_LOCALE;
  const v = raw.trim().toLowerCase().replace(/_/g, '-');
  if (!v) return DEFAULT_LOCALE;

  // Exato (inclui 'pt-br' e 'zh-cn', que têm sufixo).
  if ((SUPPORTED_LOCALES as readonly string[]).includes(v)) return v as Locale;

  // Aliases explícitos de idioma que o site só serve numa variante.
  if (v === 'pt' || v.startsWith('pt-')) return 'pt-br';
  if (v === 'zh' || v.startsWith('zh-')) return 'zh-cn';

  // Prefixo base: 'en-US' -> 'en', 'es-MX' -> 'es', 'fr-CA' -> 'fr'.
  const base = v.split('-')[0];
  if ((SUPPORTED_LOCALES as readonly string[]).includes(base)) return base as Locale;

  return DEFAULT_LOCALE;
}

/**
 * Lê um cabeçalho `Accept-Language` (ex.: 'ja,en-US;q=0.9,pt;q=0.8') e devolve o
 * primeiro locale suportado por ordem de preferência (respeitando q=), ou null
 * quando nada casa. Chamador decide o fallback (normalmente DEFAULT_LOCALE).
 */
export function localeFromAcceptLanguage(header: string | null | undefined): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().startsWith('q='));
      const q = qParam ? Number.parseFloat(qParam.split('=')[1]) : 1;
      return { tag: tag.trim(), q: Number.isFinite(q) ? q : 0 };
    })
    .filter((x) => x.tag && x.q > 0)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const exact = tag.toLowerCase().replace(/_/g, '-');
    if ((SUPPORTED_LOCALES as readonly string[]).includes(exact)) return exact as Locale;
    const base = exact.split('-')[0];
    if ((SUPPORTED_LOCALES as readonly string[]).includes(base)) return base as Locale;
    if (base === 'pt') return 'pt-br';
    if (base === 'zh') return 'zh-cn';
  }
  return null;
}

export interface LocaleCandidates {
  /** Coluna `profiles.preferred_locale` (fonte primária). */
  profileLocale?: unknown;
  /** `auth.users.user_metadata.preferred_locale`. */
  metadataLocale?: unknown;
  /** Cookie de idioma do site, se existir. */
  cookieLocale?: unknown;
  /** `navigator.language` (só para uso no cliente; backend ignora). */
  navigatorLocale?: unknown;
  /** Cabeçalho `Accept-Language` bruto. */
  acceptLanguage?: string | null;
}

/**
 * Tenta extrair um locale CONFIÁVEL de um candidato bruto. Diferente de
 * `normalizeLocale` (que joga lixo no padrão), aqui o lixo devolve `null` para que
 * o caller caia no próximo candidato. Só aceita quando o valor realmente carrega
 * a assinatura de um dos 15 (match exato, variante 'en-US', ou alias 'pt'/'zh').
 */
function trustedLocale(raw: unknown): Locale | null {
  if (raw == null) return null;
  const s = String(raw).trim().toLowerCase().replace(/_/g, '-');
  if (!s) return null;
  const normalized = normalizeLocale(s);
  const base = s.split('-')[0];
  const isRealSignal =
    s === normalized ||
    s.startsWith(normalized + '-') ||
    base === normalized ||
    (normalized === 'pt-br' && base === 'pt') ||
    (normalized === 'zh-cn' && base === 'zh');
  return isRealSignal ? normalized : null;
}

/**
 * Resolve o idioma do usuário seguindo a PRIORIDADE da missão. Retorna sempre um
 * locale válido. Nunca sobrescreve a preferência gravada — quem persiste chama
 * explicitamente ao salvar; aqui só LEMOS.
 *
 * Um valor inválido/lixo numa fonte mais alta NÃO trava a resolução em 'en': ele
 * simplesmente cede a vez à próxima fonte (perfil > metadata > cookie > navegador
 * > Accept-Language > padrão).
 */
export function resolveUserLocale(c: LocaleCandidates): Locale {
  const order: unknown[] = [c.profileLocale, c.metadataLocale, c.cookieLocale, c.navigatorLocale];
  for (const raw of order) {
    const resolved = trustedLocale(raw);
    if (resolved) return resolved;
  }
  return localeFromAcceptLanguage(c.acceptLanguage) ?? DEFAULT_LOCALE;
}

export function localeDirection(locale: unknown): 'ltr' | 'rtl' {
  return LOCALE_META[normalizeLocale(locale)].direction;
}

export function isRtlLocale(locale: unknown): boolean {
  return localeDirection(locale) === 'rtl';
}

/** Tag BCP47 correta para Intl (datas/moedas). Sempre retorna um dos 15. */
export function toIntlTag(locale: unknown): string {
  return LOCALE_META[normalizeLocale(locale)].intl;
}

/**
 * Formata moeda SEM converter o valor (missão §8.4: idioma e moeda são dimensões
 * diferentes). A moeda SEMPRE vem da cobrança real da Stripe — o chamador passa.
 */
export function formatCurrencyForLocale(locale: unknown, amount: number, currency: string): string {
  const tag = toIntlTag(locale);
  const safeCurrency = (currency || 'usd').toUpperCase();
  try {
    return new Intl.NumberFormat(tag, { style: 'currency', currency: safeCurrency }).format(amount);
  } catch {
    // Moeda desconhecida para o Intl: devolve número + código, nunca inventa símbolo.
    return `${amount.toFixed(2)} ${safeCurrency}`;
  }
}

/** Formata data no padrão do locale (sem converter o instante histórico). */
export function formatDateForLocale(locale: unknown, date: Date | string | number): string {
  const tag = toIntlTag(locale);
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  try {
    return new Intl.DateTimeFormat(tag, { year: 'numeric', month: 'long', day: 'numeric' }).format(d);
  } catch {
    return d.toISOString().slice(0, 10);
  }
}

/** Extrai o idioma da primeira seção de um pathname (`/pt-br/dashboard` -> 'pt-br'). */
export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (!pathname) return DEFAULT_LOCALE;
  const first = pathname.split('/').filter(Boolean)[0];
  return normalizeLocale(first);
}
