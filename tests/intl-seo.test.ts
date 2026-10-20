import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');

// FASE 14 (SEO / internacional): canonicals devem apontar para o slug real da
// rota internacional, e o HTML nao pode referenciar um projeto Supabase
// estrangeiro (o do site BR). O projeto INTL e nooyofqlmnyaxwlbtqfx.

test('create-website canonical usa o slug internacional (nao o BR criar-site)', () => {
  const src = read('app/[locale]/create-website/metadata.ts');
  assert.match(src, /url:\s*'\/create-website'/, 'canonical bate com a rota');
  assert.doesNotMatch(src, /criar-site/, 'sem slug brasileiro');
});

test('gaming-errors canonical usa o slug internacional (nao o BR erros-jogos)', () => {
  const src = read('app/[locale]/gaming-errors/metadata.ts');
  assert.match(src, /url:\s*'\/gaming-errors'/, 'canonical bate com a rota');
  assert.doesNotMatch(src, /erros-jogos/, 'sem slug brasileiro');
});

test('SEOHead nao vaza o projeto Supabase do site BR', () => {
  const src = read('components/SEOHead.tsx');
  assert.doesNotMatch(src, /vjscxpxvdfhryixksrno/, 'sem referencia ao projeto BR');
  assert.match(src, /nooyofqlmnyaxwlbtqfx\.supabase\.co/, 'prefetch do projeto INTL');
});
