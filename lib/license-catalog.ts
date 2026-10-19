/**
 * Fonte CANONICA unica do produto VOLTRIS no backend INTERNACIONAL.
 *
 * Espelha a metodologia do site BR (lib/license-catalog.ts), porem com a
 * dimensao MOEDA: o navegador nunca decide plano, valor ou moeda - apenas
 * escolhe uma chave deste catalogo. O preco e sempre resolvido no servidor a
 * partir do idioma (locale -> currency) e deste catalogo.
 *
 * Limites de dispositivos confirmados no mecanismo canono (RPC v3 + gerador C#):
 *   standard=1, pro=3, enterprise=9999 (ilimitado), trial=1.
 */

import type { Locale } from './locale.ts';

export type PlanType = 'standard' | 'pro' | 'enterprise';
export type BillingPeriod = 'month' | 'year';

export type Currency = 'usd' | 'eur' | 'brl' | 'jpy' | 'krw' | 'pln';

/** Moedas Stripe sem casas decimais (unit_amount nao multiplica por 100). */
const ZERO_DECIMAL_CURRENCIES: ReadonlySet<Currency> = new Set<Currency>(['jpy', 'krw']);

export interface PlanDefinition {
    /** codigo de 3 letras embutido na license_key */
    code: string;
    maxDevices: number;
    displayName: string;
}

export const LICENSE_PLANS: Record<PlanType, PlanDefinition> = {
    standard: { code: 'STA', maxDevices: 1, displayName: 'VOLTRIS STANDARD' },
    pro: { code: 'PRO', maxDevices: 3, displayName: 'VOLTRIS PRO' },
    enterprise: { code: 'ENT', maxDevices: 9999, displayName: 'VOLTRIS ENTERPRISE' },
};

/** Mapa idioma -> moeda de cobranca. Idiomas sem moeda dedicada caem em USD. */
export const LOCALE_CURRENCY: Record<Locale, Currency> = {
    'pt-br': 'brl',
    en: 'usd',
    es: 'eur',
    fr: 'eur',
    de: 'eur',
    it: 'eur',
    ja: 'jpy',
    ko: 'krw',
    pl: 'pln',
    // fallback (cobertura limitada / instavel na Stripe): USD
    ar: 'usd',
    ru: 'usd',
    'zh-cn': 'usd',
    vi: 'usd',
    tr: 'usd',
    id: 'usd',
};

/** Resolve a moeda de um idioma, com fallback seguro para USD. */
export function currencyForLocale(locale: string | null | undefined): Currency {
    if (locale && locale in LOCALE_CURRENCY) return LOCALE_CURRENCY[locale as Locale];
    return 'usd';
}

/** Converte o valor "cheio" do catalogo para a menor unidade da moeda (Stripe). */
export function toMinorUnits(amount: number, currency: Currency): number {
    return ZERO_DECIMAL_CURRENCIES.has(currency)
        ? Math.round(amount)
        : Math.round(amount * 100);
}

/** Reverte a menor unidade da Stripe (amount_total) para o valor cheio da moeda.
 *  Usado no webhook para gravar payments.amount na escala correta por moeda.
 *  Aceita qualquer codigo ISO devolvido pela Stripe (special-case apenas JPY/KRW). */
export function fromMinorUnits(minor: number, currency: Currency | string): number {
    return ZERO_DECIMAL_CURRENCIES.has(currency as Currency) ? minor : minor / 100;
}

/**
 * Tabela de precos por plano x periodo x moeda.
 * BRL mantem exatamente os tiers do site BR (mesmo produto/empresa).
 */
const LICENSE_PRICES: Record<PlanType, Record<BillingPeriod, Record<Currency, number>>> = {
    standard: {
        month: { usd: 6.9, eur: 6.9, brl: 4.99, jpy: 1100, krw: 9900, pln: 27.9 },
        year: { usd: 49, eur: 49, brl: 29.9, jpy: 7900, krw: 69000, pln: 199 },
    },
    pro: {
        month: { usd: 12.9, eur: 12.9, brl: 15.0, jpy: 1980, krw: 17900, pln: 52.9 },
        year: { usd: 89, eur: 89, brl: 59.9, jpy: 13800, krw: 129000, pln: 369 },
    },
    enterprise: {
        month: { usd: 39.9, eur: 39.9, brl: 299.9, jpy: 6000, krw: 55000, pln: 159.9 },
        year: { usd: 349, eur: 349, brl: 1099.9, jpy: 52000, krw: 480000, pln: 1399 },
    },
};

/** Nomes base (ingles) exibidos no recibo Stripe; a UI localiza via t(). */
const LICENSE_NAMES: Record<PlanType, Record<BillingPeriod, string>> = {
    standard: { month: 'VOLTRIS Standard Monthly', year: 'VOLTRIS Standard Annual' },
    pro: { month: 'VOLTRIS Pro Monthly', year: 'VOLTRIS Pro Annual' },
    enterprise: { month: 'VOLTRIS Enterprise Monthly', year: 'VOLTRIS Enterprise Annual' },
};

/** Price ID real por (plan,period,currency). Opcional ate o cadastro na Stripe;
 *  quando presente o checkout pode usar `price` em vez de `price_data`. */
const LICENSE_PRICE_IDS: Partial<Record<PlanType, Partial<Record<BillingPeriod, Partial<Record<Currency, string>>>>>> = {};

export interface ResolvedLicenseProduct {
    plan: PlanType;
    period: BillingPeriod;
    currency: Currency;
    /** valor cheio do catalogo, na moeda resolvida */
    amount: number;
    /** menor unidade para Stripe (respeita moedas sem decimal) */
    minorAmount: number;
    /** nome padrao (ingles); o checkout pode sobrescrever com o rotulo traduzido */
    name: string;
    maxDevices: number;
    stripePriceId?: string;
}

export function isPlanType(value: unknown): value is PlanType {
    return typeof value === 'string' && Object.prototype.hasOwnProperty.call(LICENSE_PLANS, value.toLowerCase());
}

export function isBillingPeriod(value: unknown): value is BillingPeriod {
    return value === 'month' || value === 'year';
}

export function isCurrency(value: unknown): value is Currency {
    return typeof value === 'string' && (['usd', 'eur', 'brl', 'jpy', 'krw', 'pln'] as const).includes(value as Currency);
}

/** Resolve (plan, period, currency) -> produto do catalogo, ou null se invalido. */
export function resolveLicenseProduct(
    plan: unknown,
    period: unknown,
    currency: unknown = 'usd',
): ResolvedLicenseProduct | null {
    if (!isPlanType(plan) || !isBillingPeriod(period) || !isCurrency(currency)) return null;
    const amount = LICENSE_PRICES[plan][period][currency];
    if (typeof amount !== 'number') return null;
    return {
        plan,
        period,
        currency,
        amount,
        minorAmount: toMinorUnits(amount, currency),
        name: LICENSE_NAMES[plan][period],
        maxDevices: LICENSE_PLANS[plan].maxDevices,
        stripePriceId: LICENSE_PRICE_IDS[plan]?.[period]?.[currency],
    };
}

/** Conveniencia: resolve direto a partir do idioma do visitante. */
export function resolveLicenseProductForLocale(
    plan: unknown,
    period: unknown,
    locale: string | null | undefined,
): ResolvedLicenseProduct | null {
    return resolveLicenseProduct(plan, period, currencyForLocale(locale));
}

/** Reconciliacao Stripe->plano pelo Price ID quando cadastrado (fonte autoridade). */
export function planFromStripePriceId(priceId: unknown): { plan: PlanType; period: BillingPeriod; currency: Currency } | null {
    if (typeof priceId !== 'string') return null;
    for (const plan of Object.keys(LICENSE_PRICES) as PlanType[]) {
        for (const period of Object.keys(LICENSE_PRICES[plan]) as BillingPeriod[]) {
            const map = LICENSE_PRICE_IDS[plan]?.[period];
            if (!map) continue;
            for (const currency of Object.keys(map) as Currency[]) {
                if (map[currency] === priceId) return { plan, period, currency };
            }
        }
    }
    return null;
}

/**
 * Servicos (pagamento unico) mantem-se apenas em USD como base de compatibilidade;
 * o foco internacional e a assinatura de licenca (multi-moeda).
 */
export const SERVICE_CATALOG: Record<string, { name: string; amount: number; currency: Currency; mode: 'payment' }> = {
    formatacao_basica: { name: 'Basic Formatting', amount: 19.9, currency: 'usd', mode: 'payment' },
    formatacao_media: { name: 'Standard Formatting', amount: 29.9, currency: 'usd', mode: 'payment' },
    formatacao_avancada: { name: 'Advanced Formatting', amount: 39.9, currency: 'usd', mode: 'payment' },
    otimizacao_basica: { name: 'Basic Optimization', amount: 15.9, currency: 'usd', mode: 'payment' },
    otimizacao_media: { name: 'Standard Optimization', amount: 19.9, currency: 'usd', mode: 'payment' },
    otimizacao_avancada: { name: 'Advanced Optimization', amount: 29.9, currency: 'usd', mode: 'payment' },
};
