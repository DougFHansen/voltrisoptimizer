import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');

// FASE 11 - the international admin must expose Orders through ONE interface.
// The standalone page duplicated the AdminOrdersTab (and mislabeled
// international amounts with a Brazilian currency symbol); it is now a redirect.

test('admin Orders vive em uma unica interface (pagina standalone virou redirect)', () => {
  const page = read('app/[locale]/restricted-area-admin/orders/page.tsx');
  assert.match(page, /from 'next\/navigation'/, 'usa o redirect do Next');
  assert.match(page, /\bredirect\(/, 'redireciona em vez de duplicar a UI');
  assert.match(page, /restricted-area-admin\?tab=orders/, 'alvo e a aba consolidada do admin');
  assert.doesNotMatch(page, /supabase/, 'nao refaz fetch de dados (sem UI paralela)');
  assert.doesNotMatch(page, /R\$|toFixed/, 'sem mascara de moeda brasileira');
});

test('painel admin INTL aceita deep-link ?tab= (porta de entrada unica)', () => {
  const admin = read('app/[locale]/restricted-area-admin/page.tsx');
  assert.match(admin, /URLSearchParams\(window\.location\.search\)/, 'le o ?tab= da URL');
  assert.match(admin, /setActiveTab\(requested\)/, 'abre a aba solicitada');
  assert.match(admin, /tabs\.some\(/, 'so abre abas validas');
});

test('rota de pedidos: notificacao em ingles, US$ e actionUrl para aba consolidada', () => {
  const route = read('app/api/orders/route.ts');
  assert.doesNotMatch(route, /R\$|BRL/, 'sem moeda brasileira em dados internacionais');
  assert.match(route, /US\$\s/, 'usa a moeda internacional (US$)');
  assert.match(route, /\/restricted-area-admin\?tab=orders/, 'admin linka a aba consolidada');
  assert.match(route, /\/dashboard\?tab=orders/, 'cliente linka a aba real do dashboard');
  assert.doesNotMatch(route, /\/restricted-area-admin\/orders/, 'sem link para pagina standalone');
});

test('codigo legado morto do dashboard/FAQ nao pode voltar', () => {
  const dead = [
    'components/dashboard/tabs/OverviewTab.tsx',
    'components/dashboard/tabs/ProfileTab.tsx',
    'components/dashboard/tabs/TicketsTab.tsx',
    'components/dashboard/tabs/NotificationsTab.tsx',
    'components/FAQSection.tsx',
    'components/FAQSEO.tsx',
  ];
  for (const rel of dead) {
    assert.equal(existsSync(rel), false, `${rel} deve permanecer removido`);
  }
});
