import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');

// FASE 12 - visual parity of the INTL admin panel with the user dashboard.
// The reference (BR) panel states that the admin and the dashboard are the
// SAME interface at two access levels: the sidebar reuses the dashboard menu
// system (.vtab + colored VoltrisIcon glyphs, collapse rail, mobile drawer,
// profile card). The INTL panel previously used a horizontal tab bar; it now
// uses the same sidebar language as the INTL dashboard (components/dashboard/Sidebar.tsx).

test('painel admin INTL usa a mesma linguagem visual da sidebar do dashboard', () => {
  const admin = read('app/[locale]/restricted-area-admin/page.tsx');
  const dash = read('components/dashboard/Sidebar.tsx');

  // mesma classe de menu do dashboard
  assert.match(admin, /className=\{`vtab\b/, 'usa o sistema .vtab do dashboard');
  assert.match(dash, /className=\{`vtab\b/, 'o dashboard tambem usa .vtab (referencia viva)');

  // mesmos glifos de icone
  assert.match(admin, /import VoltrisIcon, \{ VoltrisIconName \} from '@\/components\/dashboard\/VoltrisIcon'/, 'icone compartilhado');
  assert.match(admin, /vtab__ico/, 'icone com a classe do menu compartilhado');

  // mesma estrutura de sidebar: aside + rail colapsavel + drawer mobile
  assert.match(admin, /<aside/, 'sidebar lateral (aside) em vez de barra de abas');
  assert.match(admin, /vtab--rail/, 'modo trilho colapsado como no dashboard');
  assert.match(admin, /sidebarCollapsed/, 'estado de colapso da sidebar');
  assert.match(admin, /AnimatePresence/, 'drawer animado no mobile (igual ao dashboard)');

  // cartao de perfil como no dashboard
  assert.match(admin, /System Admin/, 'cartao de perfil do admin na sidebar');
});

test('deep-link ?tab= continua funcionando com a sidebar (porta unica)', () => {
  const admin = read('app/[locale]/restricted-area-admin/page.tsx');
  assert.match(admin, /URLSearchParams\(window\.location\.search\)\.get\('tab'\)/, 'le ?tab= da URL');
  assert.match(admin, /setActiveTab\(requested\)/, 'abre a aba solicitada via sidebar');
});
