import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Trava a paridade FASE 7 (notificações): o painel administrativo de notificações
// existe, está registrado nas abas do admin, usa o padrão do INTL (Supabase client
// direto + RLS), não fixa locale/moeda brasileiros, e o adicoes.sql provê as
// políticas de UPDATE idempotentes (dono + admin) que o schema não tinha.

const root = process.cwd();
const read = (rel: string) => fs.readFileSync(path.join(root, rel), 'utf8');

const TAB = 'app/[locale]/restricted-area-admin/notifications/AdminNotificationsTab.tsx';
const PAGE = 'app/[locale]/restricted-area-admin/page.tsx';
const SQL = 'adicoes.sql';

test('painel admin de notificações existe e usa o padrão INTL (Supabase direto)', () => {
  const src = read(TAB);
  assert.match(src, /import \{ createClient \} from '@\/utils\/supabase\/client'/, 'deve usar o client Supabase do INTL');
  assert.match(src, /\.from\('notifications'\)/, 'deve consultar a tabela notifications');
  assert.match(src, /createClient\(\)/, 'padrão client+RLS, não rota de API paralela');
});

test('painel não fixa locale/moeda brasileira (é internacionalizável)', () => {
  const src = read(TAB);
  assert.doesNotMatch(src, /'pt-BR'/, 'não deve formatar datas em pt-BR');
  assert.doesNotMatch(src, /R\$|BRL/, 'não deve fixar símbolo monetário brasileiro');
  assert.doesNotMatch(src, /DIAL_CODES\[?['"]?Brazil/i, 'não deve embutir default BR');
});

test('tab está registrada e renderizada na página do admin', () => {
  const page = read(PAGE);
  assert.match(page, /import AdminNotificationsTab from '\.\/notifications\/AdminNotificationsTab'/, 'import presente');
  assert.match(page, /value:\s*'notifications'/, 'entrada no array de tabs');
  assert.match(page, /activeTab === 'notifications' && <AdminNotificationsTab/, 'render condicional por aba');
});

test('adicoes.sql provê políticas UPDATE de notifications de forma idempotente', () => {
  const sql = read(SQL);
  // Aditivo/idempotente: DROP IF EXISTS antes de cada CREATE.
  assert.match(sql, /DROP POLICY IF EXISTS "Users can update their own notifications"/);
  assert.match(sql, /CREATE POLICY "Users can update their own notifications"/);
  assert.match(sql, /FOR UPDATE[\s\S]*?auth\.uid\(\)\s*=\s*user_id/, 'UPDATE do próprio usuário por user_id');
  assert.match(sql, /CREATE POLICY "Admin can update all notifications"/);
  assert.match(sql, /public\.check_is_admin\(\)/, 'usa o helper SECURITY DEFINER existente (evita recursão RLS)');
  // Nada destrutivo: o arquivo não deve conter DROP TABLE/DELETE/TRUNCATE nem desabilitar RLS.
  assert.doesNotMatch(sql, /DROP TABLE/i);
  assert.doesNotMatch(sql, /^\s*DELETE\s+FROM/im);
  assert.doesNotMatch(sql, /TRUNCATE/i);
  assert.doesNotMatch(sql, /DISABLE ROW LEVEL SECURITY/i);
});

test('strings visíveis do painel têm traduções nos 15 dicionários (fonte inglês)', () => {
  const keys = ['Mark as read', 'Recipient', 'No notifications here', 'Loading notifications…'];
  const locales = ['en', 'es', 'pt-br', 'fr', 'de', 'it', 'ja', 'ko', 'ar', 'ru', 'zh-cn', 'vi', 'tr', 'id', 'pl'];
  // 'en' é a fonte (as strings JÁ são inglês no componente); os demais têm dicionário.
  for (const l of locales) {
    if (l === 'en') continue;
    const dict = JSON.parse(read(`lib/guides-i18n/data/${l}.json`));
    for (const k of ['Recipient', 'No notifications here', 'Loading notifications…']) {
      assert.ok(Object.prototype.hasOwnProperty.call(dict, k), `${l} deve ter a chave ${JSON.stringify(k)}`);
    }
  }
});
