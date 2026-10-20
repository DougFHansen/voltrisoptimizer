import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Trava a paridade FASE 6 (painel administrativo): a aba "Overview" do admin do
// VOLTRIS INTERNACIONAL existe, é a aba padrão, usa o padrão de dados do INTL
// (Supabase client + RLS, sem service_role, sem rota paralela), não fixa moeda/
// locale brasileiros, e suas strings visíveis estão traduzidas nos 14 idiomas.

const root = process.cwd();
const read = (rel: string) => fs.readFileSync(path.join(root, rel), 'utf8');

const TAB = 'app/[locale]/restricted-area-admin/overview/AdminOverviewTab.tsx';
const PAGE = 'app/[locale]/restricted-area-admin/page.tsx';

test('overview admin existe e usa o padrão INTL (Supabase client + RLS)', () => {
  const src = read(TAB);
  assert.match(src, /import \{ createClient \} from '@\/utils\/supabase\/client'/, 'usa o client Supabase do INTL');
  assert.match(src, /createClient\(\)/, 'padrão client+RLS');
  assert.match(src, /\.from\(table\)/, 'helper de contagem usa supabase.from(table) sob RLS');
  assert.match(src, /count\('profiles'/, 'conta usuários');
  assert.match(src, /count\('orders'/, 'conta pedidos');
  assert.match(src, /count\('tickets'/, 'conta tickets');
  assert.match(src, /\.from\('notifications'\)/, 'conta não lidas');
  assert.match(src, /count:\s*'exact',\s*head:\s*true/, 'usa contagem head:true (não baixa linhas nem usa segredo)');
});

test('overview não fixa moeda/locale BR nem usa service_role/rota paralela', () => {
  const src = read(TAB);
  assert.doesNotMatch(src, /'pt-BR'/, 'sem locale pt-BR');
  assert.doesNotMatch(src, /R\$/, 'sem símbolo monetário brasileiro');
  assert.doesNotMatch(src, /BRL/, 'sem moeda BRL');
  assert.doesNotMatch(src, /service_role|SERVICE_ROLE/, 'não usa service_role (lê via RLS, sem rota paralela)');
  assert.match(src, /toLocaleString\('en-US'\)/, 'números formatados em en-US');
});

test('aba Overview está registrada e é a aba padrão do admin', () => {
  const page = read(PAGE);
  assert.match(page, /import AdminOverviewTab from '\.\/overview\/AdminOverviewTab'/, 'import presente');
  assert.match(page, /value:\s*'overview'/, 'entrada no array de tabs');
  assert.match(page, /activeTab === 'overview' && <AdminOverviewTab/, 'render condicional por aba');
  assert.match(page, /useState\('overview'\)/, 'aba padrão é overview (paridade com o BR)');
});

test('strings visíveis da Overview têm tradução nos 14 dicionários (fonte inglês)', () => {
  const keys = ['Business Overview', 'Unread notifications', 'New in period', 'Loading metrics…', 'Could not load metrics', 'All time'];
  const locales = ['es', 'pt-br', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];
  for (const l of locales) {
    const dict = JSON.parse(read(`lib/guides-i18n/data/${l}.json`));
    for (const k of keys) {
      assert.ok(Object.prototype.hasOwnProperty.call(dict, k), `${l} deve ter a chave ${JSON.stringify(k)}`);
    }
  }
});
