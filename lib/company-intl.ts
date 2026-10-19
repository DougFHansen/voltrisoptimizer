/**
 * Dados da empresa VOLTRIS para documentos comerciais internacionais (FASE 8 da
 * missão VOLTRIS INTERNACIONAL).
 *
 * Por que env vars: razão social, endereço e VAT são dado FISCAL/contratual e
 * variam por país. Se mudarem, o documento tem que mudar junto. A fonte correta
 * disso é o ambiente, não o repositório.
 *
 * **Nunca inventamos dados fiscais.** Se uma env var não estiver setada, o
 * campo vira `'—'` (em dash) no PDF. Um invoice com endereço/VAT errado é pior
 * que um invoice sem esse bloco.
 *
 * Env vars (todas opcionais):
 * - `NEXT_PUBLIC_COMPANY_LEGAL_NAME`  razão social / legal name
 * - `NEXT_PUBLIC_COMPANY_DISPLAY_NAME` nome de exibição (default `Voltris`)
 * - `NEXT_PUBLIC_COMPANY_ADDRESS_LINE1`
 * - `NEXT_PUBLIC_COMPANY_ADDRESS_LINE2`
 * - `NEXT_PUBLIC_COMPANY_CITY`
 * - `NEXT_PUBLIC_COMPANY_REGION`  state / province / prefecture
 * - `NEXT_PUBLIC_COMPANY_POSTAL_CODE`
 * - `NEXT_PUBLIC_COMPANY_COUNTRY`  ISO 3166-1 alpha-2 (`US`, `DE`, `JP`, ...)
 * - `NEXT_PUBLIC_COMPANY_TAX_ID`   VAT / EIN / GST — o FMT depende do país
 * - `NEXT_PUBLIC_COMPANY_TAX_ID_LABEL` default `VAT` (EU), `EIN` (US), etc.
 * - `NEXT_PUBLIC_COMPANY_EMAIL`   default `support@voltris.com`
 * - `NEXT_PUBLIC_COMPANY_PHONE`
 * - `NEXT_PUBLIC_COMPANY_WEBSITE` default `https://voltris.com`
 */

const DASH = '—';

export interface CompanyInfoIntl {
    legalName: string;
    displayName: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    region: string;
    postalCode: string;
    /** ISO 3166-1 alpha-2, 2 letras maiúsculas. Vazio quando ausente. */
    country: string;
    taxId: string;
    /** Rótulo do taxId: `VAT`, `GST`, `EIN`, `Tax ID`, etc. */
    taxIdLabel: string;
    email: string;
    phone: string;
    website: string;
    /** Nota legal impressa em todo documento. */
    legalNote: string;
}

function readEnv(name: string, fallback: string = DASH): string {
    const raw = process.env[name];
    if (!raw || !raw.trim()) return fallback;
    return raw.trim();
}

/**
 * Snapshot imutável dos dados da empresa lidos do ambiente.
 *
 * Aceita override explícito em teste para não depender de mutation de
 * `process.env`.
 */
export function getCompanyInfoIntl(overrides?: Partial<CompanyInfoIntl>): CompanyInfoIntl {
    const base: CompanyInfoIntl = {
        legalName: readEnv('NEXT_PUBLIC_COMPANY_LEGAL_NAME'),
        displayName: readEnv('NEXT_PUBLIC_COMPANY_DISPLAY_NAME', 'Voltris'),
        addressLine1: readEnv('NEXT_PUBLIC_COMPANY_ADDRESS_LINE1'),
        addressLine2: readEnv('NEXT_PUBLIC_COMPANY_ADDRESS_LINE2', ''),
        city: readEnv('NEXT_PUBLIC_COMPANY_CITY'),
        region: readEnv('NEXT_PUBLIC_COMPANY_REGION', ''),
        postalCode: readEnv('NEXT_PUBLIC_COMPANY_POSTAL_CODE', ''),
        country: readEnv('NEXT_PUBLIC_COMPANY_COUNTRY', ''),
        taxId: readEnv('NEXT_PUBLIC_COMPANY_TAX_ID'),
        taxIdLabel: readEnv('NEXT_PUBLIC_COMPANY_TAX_ID_LABEL', 'VAT'),
        email: readEnv('NEXT_PUBLIC_COMPANY_EMAIL', 'support@voltris.com'),
        phone: readEnv('NEXT_PUBLIC_COMPANY_PHONE', ''),
        website: readEnv('NEXT_PUBLIC_COMPANY_WEBSITE', 'https://voltris.com'),
        legalNote: readEnv('NEXT_PUBLIC_COMPANY_LEGAL_NOTE', ''),
    };
    return { ...base, ...(overrides ?? {}) };
}

/**
 * Monte de endereço compacto em uma linha única, pulando partes vazias.
 * Não traduz — ordem e separadores são os mesmos em todo lugar por
 * compatibilidade com leitores de tela e processadores postais.
 */
export function formatAddressOneLine(c: CompanyInfoIntl): string {
    const parts: string[] = [];
    if (c.addressLine1 && c.addressLine1 !== DASH) parts.push(c.addressLine1);
    if (c.addressLine2) parts.push(c.addressLine2);
    const cityRegion = [c.city, c.region].filter((v) => v && v !== DASH).join(', ');
    if (cityRegion) parts.push(cityRegion);
    if (c.postalCode) parts.push(c.postalCode);
    if (c.country) parts.push(c.country.toUpperCase());
    return parts.length > 0 ? parts.join(' · ') : DASH;
}

export const COMPANY_FIELD_DASH = DASH;

/** Retorna true quando o campo parece preenchido de verdade. */
function filled(v: string | null | undefined): boolean {
    if (!v) return false;
    const t = v.trim();
    return t.length > 0 && t !== DASH;
}

/**
 * Auditoria rápida para o checklist de produção (FASE 17). Uma invoice sem
 * razão social/endereço válido não pode sair de produção.
 */
export function getCompanyIntlMissingFields(c: CompanyInfoIntl = getCompanyInfoIntl()): string[] {
    const missing: string[] = [];
    if (!filled(c.legalName)) missing.push('legalName');
    if (!filled(c.addressLine1)) missing.push('addressLine1');
    if (!filled(c.city)) missing.push('city');
    if (!filled(c.country)) missing.push('country');
    if (!filled(c.taxId)) missing.push('taxId');
    return missing;
}

/**
 * Validador de país ISO 3166-1 alpha-2 (2 letras). Não faz lista completa, só
 * checagem de formato. Um `country` fora do padrão aparece no PDF, mas é
 * preferível a omitir um país que o operator configurou com typo.
 */
export function isValidIso3166Alpha2(code: string | null | undefined): boolean {
    if (!code) return false;
    return /^[A-Z]{2}$/i.test(code.trim());
}
