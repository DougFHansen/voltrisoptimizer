/**
 * Prova executável das regras de segurança de `lib/auth-safe.ts`.
 *
 * Roda sem Next.js e sem Supabase: `node --test tests/auth-safe.test.ts`.
 * O import usa a extensão `.ts` explícita porque os helpers são exercitados
 * direto pelo runtime do Node (type stripping do Node 24), sem bundler.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  SAFE_REDIRECT_FALLBACK,
  safeRedirectPath,
  oauthDestination,
  describeAuthFailure,
  looksLikeEmail,
  isPlausibleLogin,
  isLinkableProvider,
  podeDesvincular,
} from '../lib/auth-safe.ts';

// ---------------------------------------------------------------------------
// 1. Open redirect no /auth/callback
// ---------------------------------------------------------------------------

test('safeRedirectPath aceita caminho interno simples', () => {
  assert.equal(safeRedirectPath('/dashboard'), '/dashboard');
  assert.equal(safeRedirectPath('/dashboard/profile'), '/dashboard/profile');
});

test('safeRedirectPath preserva query e hash do caminho interno', () => {
  assert.equal(safeRedirectPath('/dashboard?tab=1#top'), '/dashboard?tab=1#top');
});

test('safeRedirectPath bloqueia URL absoluta para host externo', () => {
  assert.equal(safeRedirectPath('https://evil.com'), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath('http://evil.com/x'), SAFE_REDIRECT_FALLBACK);
});

test('safeRedirectPath bloqueia protocol-relative //host', () => {
  // Este era o buraco real: `${origin}//evil.com` virava redirect externo.
  assert.equal(safeRedirectPath('//evil.com'), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath('//evil.com/dashboard'), SAFE_REDIRECT_FALLBACK);
});

test('safeRedirectPath bloqueia barra invertida (burla de parser)', () => {
  assert.equal(safeRedirectPath('/a\\@evil.com'), SAFE_REDIRECT_FALLBACK);
});

test('safeRedirectPath bloqueia CRLF injection', () => {
  assert.equal(safeRedirectPath('/ok\r\nSet-Cookie: x=1'), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath('/ok\nfoo'), SAFE_REDIRECT_FALLBACK);
});

test('safeRedirectPath aceita @ no caminho (ainda é rota do próprio site)', () => {
  // `/@evil.com` NÃO troca de host: continua sendo caminho relativo.
  assert.equal(safeRedirectPath('/@evil.com'), '/@evil.com');
});

test('safeRedirectPath cai no fallback para null/undefined/vazio', () => {
  assert.equal(safeRedirectPath(null), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath(undefined), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath(''), SAFE_REDIRECT_FALLBACK);
  assert.equal(safeRedirectPath('   '), SAFE_REDIRECT_FALLBACK);
});

test('safeRedirectPath aceita fallback customizado', () => {
  assert.equal(safeRedirectPath('nao-comeca-com-barra', '/login'), '/login');
});

test('oauthDestination trata "/" como dashboard', () => {
  assert.equal(oauthDestination('/'), SAFE_REDIRECT_FALLBACK);
  assert.equal(oauthDestination(null), SAFE_REDIRECT_FALLBACK);
  assert.equal(oauthDestination('//evil.com'), SAFE_REDIRECT_FALLBACK);
  assert.equal(oauthDestination('/dashboard/billing'), '/dashboard/billing');
});

// ---------------------------------------------------------------------------
// 2. Anti-oráculo: falha de login vira mensagem única segura
// ---------------------------------------------------------------------------

test('describeAuthFailure reconhece e-mail não confirmado', () => {
  const r = describeAuthFailure('Email not confirmed');
  assert.equal(r.kind, 'email-not-confirmed');
  assert.equal(r.suggestConfirm, true);
});

test('describeAuthFailure reconhece rate limit', () => {
  const a = describeAuthFailure('Too many requests');
  const b = describeAuthFailure('A rate limit has been reached');
  assert.equal(a.kind, 'rate-limited');
  assert.equal(b.kind, 'rate-limited');
});

test('describeAuthFailure trata credencial inválida e sugere OAuth (conta sem senha)', () => {
  const r = describeAuthFailure('Invalid login credentials');
  assert.equal(r.kind, 'invalid-credentials');
  assert.equal(r.suggestOAuth, true);
  // NUNCA pode revelar se o e-mail existe.
  assert.ok(!/not found|does not exist|no such|doesn.t exist/i.test(r.message));
});

test('describeAuthFailure tem fallback silencioso para erro desconhecido', () => {
  const r = describeAuthFailure(null);
  assert.equal(r.kind, 'unknown');
  assert.ok(!/not found|does not exist|no such|doesn.t exist/i.test(r.message));
});

// ---------------------------------------------------------------------------
// 3. Roteamento login por e-mail vs username
// ---------------------------------------------------------------------------

test('looksLikeEmail roteia corretamente', () => {
  assert.equal(looksLikeEmail('cliente@gmail.com'), true);
  assert.equal(looksLikeEmail('  a@b.co '), true);
  assert.equal(looksLikeEmail('cliente'), false);
  assert.equal(looksLikeEmail('a@b'), false);
  assert.equal(looksLikeEmail(''), false);
});

test('isPlausibleLogin barra payloads absurdos e caracteres de ILIKE', () => {
  assert.equal(isPlausibleLogin('joao.dev'), true);
  assert.equal(isPlausibleLogin('a_b-9'), true);
  assert.equal(isPlausibleLogin('x'), false); // curto demais
  assert.equal(isPlausibleLogin('a'.repeat(60)), false); // longo demais
  assert.equal(isPlausibleLogin('com % space'), false);
  assert.equal(isPlausibleLogin('joao--'), true); // hyphens são do charset válido
  assert.equal(isPlausibleLogin(null), false);
  assert.equal(isPlausibleLogin(123), false);
});

// ---------------------------------------------------------------------------
// 4. Painel de identidades
// ---------------------------------------------------------------------------

test('isLinkableProvider só aceita provedores reais', () => {
  assert.equal(isLinkableProvider('google'), true);
  assert.equal(isLinkableProvider('apple'), true);
  assert.equal(isLinkableProvider('email'), false); // email não é "linkável" aqui
  assert.equal(isLinkableProvider('facebook '), false);
});

test('podeDesvincular exige ao menos uma forma de entrar restando', () => {
  // Único provedor e sem senha => não pode (destruiria o acesso).
  assert.equal(podeDesvincular([{ provider: 'google' }], false), false);
  // Único provedor mas com senha => pode sair do google e ainda logar por senha.
  assert.equal(podeDesvincular([{ provider: 'google' }], true), false);
  // Dois provedores => pode remover um.
  assert.equal(podeDesvincular([{ provider: 'google' }, { provider: 'email' }], false), true);
});
