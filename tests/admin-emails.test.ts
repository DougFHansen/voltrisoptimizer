import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');
const DATA_DIR = 'lib/guides-i18n/data';

test('rota admin/emails gateia a leitura service_role atras de sessao admin', () => {
  const src = read('app/api/admin/emails/route.ts');
  assert.match(src, /auth\.getUser\(\)/, 'verifica a sessao');
  assert.match(src, /is_admin/, 'verifica admin');
  assert.match(src, /status:\s*401/, '401 sem sessao');
  assert.match(src, /status:\s*403/, '403 para nao-admin');
  assert.match(src, /createAdminClient/, 'le via service_role client (tabela sem policy authenticated)');
  assert.match(src, /\.from\('email_outbox'\)/, 'le a tabela de outbox');
  assert.match(src, /idempotency_key:.*manual-/s, 'requeue e aditivo com chave nova');
});

test('aba Emails usa a rota protegida (sem Supabase/service_role no browser) e sem mascara BR', () => {
  const src = read('app/[locale]/restricted-area-admin/emails/AdminEmailsTab.tsx');
  assert.match(src, /fetch\('\/api\/admin\/emails'/, 'busca pela rota protegida');
  assert.doesNotMatch(src, /service_role|SERVICE_ROLE|createAdminClient/, 'sem service_role no cliente');
  assert.doesNotMatch(src, /from '@\/utils\/supabase\/client'/, 'sem client Supabase direto no browser');
  assert.doesNotMatch(src, /R\$|BRL|'pt-BR'/, 'sem moeda/locale BR');
});

test('aba Emails registrada no painel admin INTL', () => {
  const page = read('app/[locale]/restricted-area-admin/page.tsx');
  assert.match(page, /import AdminEmailsTab from '\.\/emails\/AdminEmailsTab'/, 'import presente');
  assert.match(page, /label:\s*'Emails',\s*value:\s*'emails'/, 'entrada de aba');
  assert.match(page, /activeTab === 'emails' && <AdminEmailsTab/, 'render condicional por aba');
});

test('chaves i18n da aba Emails existem em todos os 14 idiomas', () => {
  const required = [
    'Email Outbox',
    'Re-queue',
    'Delivery log for all transactional emails',
    'Loading emails…',
    'No emails found',
  ];
  const files = readdirSync(DATA_DIR).filter((f) => f.endsWith('.json'));
  assert.equal(files.length, 14, 'esperado 14 dicionarios');
  for (const f of files) {
    const dict = JSON.parse(read(`${DATA_DIR}/${f}`));
    for (const key of required) {
      assert.ok(typeof dict[key] === 'string' && dict[key].length > 0, `${f} deve conter "${key}"`);
    }
  }
});
