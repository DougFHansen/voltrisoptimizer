/**
 * Prova executável da fonte de verdade do idioma (`lib/locale.ts`) — FASE 2 da
 * missão internacional.
 *
 * Roda sem Next.js e sem Supabase: `node --test tests/locale.test.ts`. Import com
 * `.ts` explícito porque os helpers são exercitados direto pelo Node 24 (type
 * stripping), sem bundler.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  normalizeLocale,
  isSupportedLocale,
  localeFromAcceptLanguage,
  resolveUserLocale,
  localeDirection,
  isRtlLocale,
  toIntlTag,
  formatCurrencyForLocale,
  formatDateForLocale,
  localeFromPathname,
  LOCALE_META,
} from '../lib/locale.ts';

test('existem exatamente 15 locales suportados e o padrão é en', () => {
  assert.equal(SUPPORTED_LOCALES.length, 15);
  assert.equal(DEFAULT_LOCALE, 'en');
  // Lista canônica da missão.
  const expected = ['en','es','fr','de','it','ja','ko','ar','pt-br','ru','zh-cn','vi','tr','id','pl'];
  assert.deepEqual([...SUPPORTED_LOCALES].sort(), [...expected].sort());
});

test('todo locale tem meta com label/direção/tag Intl válida', () => {
  for (const code of SUPPORTED_LOCALES) {
    const meta = LOCALE_META[code];
    assert.ok(meta, `faltando meta para ${code}`);
    assert.ok(meta.label.length > 0);
    assert.ok(['ltr', 'rtl'].includes(meta.direction));
    assert.match(meta.intl, /^[a-z]{2,3}-[A-Z]{2}$/);
  }
});

test('normalizeLocale aceita variantes e aliases do mundo real', () => {
  assert.equal(normalizeLocale('PT-BR'), 'pt-br');
  assert.equal(normalizeLocale('pt_BR'), 'pt-br');
  assert.equal(normalizeLocale('pt'), 'pt-br');
  assert.equal(normalizeLocale('pt-PT'), 'pt-br');
  assert.equal(normalizeLocale('zh'), 'zh-cn');
  assert.equal(normalizeLocale('zh-Hans'), 'zh-cn');
  assert.equal(normalizeLocale('en-GB'), 'en');
  assert.equal(normalizeLocale('es-MX'), 'es');
  assert.equal(normalizeLocale('ja'), 'ja');
});

test('normalizeLocale joga lixo para o padrão, sem vazar código arbitrário', () => {
  assert.equal(normalizeLocale('xx'), DEFAULT_LOCALE);
  assert.equal(normalizeLocale(''), DEFAULT_LOCALE);
  assert.equal(normalizeLocale('   '), DEFAULT_LOCALE);
  assert.equal(normalizeLocale(null), DEFAULT_LOCALE);
  assert.equal(normalizeLocale(undefined), DEFAULT_LOCALE);
  assert.equal(normalizeLocale(123), DEFAULT_LOCALE);
  // Nunca devolve algo fora dos 15.
  assert.ok(isSupportedLocale(normalizeLocale('<script>')));
});

test('localeFromAcceptLanguage respeita ordem e q=', () => {
  assert.equal(localeFromAcceptLanguage('ja,en-US;q=0.9,pt;q=0.8'), 'ja');
  assert.equal(localeFromAcceptLanguage('de-DE,de;q=0.9,en;q=0.8'), 'de');
  assert.equal(localeFromAcceptLanguage('pt-BR,pt;q=0.9'), 'pt-br');
  assert.equal(localeFromAcceptLanguage('xx,yy'), null);
  assert.equal(localeFromAcceptLanguage(null), null);
});

test('resolveUserLocale segue a prioridade perfil > metadata > cookie > navegador > header', () => {
  assert.equal(resolveUserLocale({ profileLocale: 'fr', metadataLocale: 'de', cookieLocale: 'es' }), 'fr');
  assert.equal(resolveUserLocale({ profileLocale: null, metadataLocale: 'de', cookieLocale: 'es' }), 'de');
  assert.equal(resolveUserLocale({ cookieLocale: 'es', navigatorLocale: 'it' }), 'es');
  assert.equal(resolveUserLocale({ navigatorLocale: 'it' }), 'it');
  assert.equal(resolveUserLocale({ acceptLanguage: 'pl,xx' }), 'pl');
  assert.equal(resolveUserLocale({}), DEFAULT_LOCALE);
});

test('resolveUserLocale NÃO trava em en por causa de lixo no perfil: cede ao próximo', () => {
  // Perfil com valor inválido + cookie confiável 'ja' -> deve vir 'ja', não 'en'.
  assert.equal(resolveUserLocale({ profileLocale: 'lixo', cookieLocale: 'ja' }), 'ja');
  // Só lixo em tudo -> padrão.
  assert.equal(resolveUserLocale({ profileLocale: 'lixo' }), DEFAULT_LOCALE);
});

test('direção e RTL', () => {
  assert.equal(localeDirection('ar'), 'rtl');
  assert.equal(isRtlLocale('ar'), true);
  assert.equal(isRtlLocale('ar-SA'), true);
  assert.equal(isRtlLocale('he'), false); // he não é suportado -> vira padrão (en, ltr)
  assert.equal(localeDirection('pt-br'), 'ltr');
});

test('toIntlTag devolve tag BCP47 correta', () => {
  assert.equal(toIntlTag('pt-br'), 'pt-BR');
  assert.equal(toIntlTag('zh-cn'), 'zh-CN');
  assert.equal(toIntlTag('en'), 'en-US');
});

test('formatCurrencyForLocale usa a moeda REAL, sem converter valor', () => {
  // USD em locale japonês: documento em japonês, valor em USD (missão §8.4).
  const ja = formatCurrencyForLocale('ja', 19.99, 'usd');
  assert.match(ja, /19\.99/); // valor preservado, não convertido
  assert.ok(!ja.includes('19,99'), `locale ja não deveria usar vírgula decimal: ${ja}`);
  // EUR em inglês mantém EUR.
  const en = formatCurrencyForLocale('en', 19.99, 'eur');
  assert.match(en, /19[.,]99/);
});

test('formatDateForLocale formata e ignora datas inválidas sem explodir', () => {
  const d = new Date('2026-01-31T00:00:00Z');
  assert.notEqual(formatDateForLocale('en', d), '');
  assert.equal(formatDateForLocale('en', 'data-invalida'), '');
});

test('localeFromPathname lê a primeira seção', () => {
  assert.equal(localeFromPathname('/pt-br/dashboard/profile'), 'pt-br');
  assert.equal(localeFromPathname('/dashboard'), DEFAULT_LOCALE);
  assert.equal(localeFromPathname(''), DEFAULT_LOCALE);
  assert.equal(localeFromPathname(null), DEFAULT_LOCALE);
});
