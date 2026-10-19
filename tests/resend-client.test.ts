/**
 * Prova das funções PURAS do cliente Resend (`lib/resend-client.ts`).
 *
 * Roda sem tocar na API: `node --test tests/resend-client.test.ts`. Só exercita
 * o que é determinístico (validação de e-mail, classificação de erro, limpeza de
 * segredo). A chamada real de envio é validada no build + no checklist manual.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  isValidEmail,
  scrubSecrets,
  classifyResendError,
  ResendConfigError,
  RESEND_TIMEOUT_MS,
} from '../lib/resend-client.ts';

test('isValidEmail aceita formatos reais e recusa lixo', () => {
  assert.equal(isValidEmail('user@example.com'), true);
  assert.equal(isValidEmail('nome.sobrenome+tag@sub.dominio.com.br'), true);
  assert.equal(isValidEmail('a@b.co'), true);
  assert.equal(isValidEmail('no-at-sign'), false);
  assert.equal(isValidEmail('two@@ats.com'), false);
  assert.equal(isValidEmail('a..b@example.com'), false);
  assert.equal(isValidEmail(''), false);
  assert.equal(isValidEmail(null), false);
  assert.equal(isValidEmail(123), false);
  // Não permite vários destinatários colados (injeção de Bcc).
  assert.equal(isValidEmail('a@x.com,b@y.com'), false);
});

test('scrubSecrets redige a chave exata e o formato re_xxx', () => {
  process.env.RESEND_API_KEY = 're_SUPERSECRETVALUE123';
  try {
    const out = scrubSecrets('Auth failed for re_SUPERSECRETVALUE123 token');
    assert.ok(!out.includes('SUPERSECRET'), 'chave exata deveria sumir');
    assert.ok(out.includes('[REDACTED]'));
    // Formato re_ genérico mesmo sem bater a chave exata.
    const out2 = scrubSecrets('oops re_ANOTHERLONGTOKEN99 leaked here');
    assert.ok(!out2.includes('ANOTHERLONGTOKEN99'));
  } finally {
    delete process.env.RESEND_API_KEY;
  }
});

test('classifyResendError trata timeout como transitório repetível', () => {
  const err = new Error('boom');
  err.name = 'TimeoutError';
  const c = classifyResendError(err);
  assert.equal(c.kind, 'TIMEOUT');
  assert.equal(c.retryable, true);
});

test('classifyResendError classifica por status HTTP', () => {
  assert.equal(classifyResendError({ statusCode: 401, message: 'x' }).kind, 'AUTH');
  assert.equal(classifyResendError({ statusCode: 401, message: 'x' }).retryable, false);
  assert.equal(classifyResendError({ statusCode: 403, message: 'x' }).kind, 'AUTH');

  const rate = classifyResendError({ status: 429, message: 'x', headers: { 'retry-after': '37' } });
  assert.equal(rate.kind, 'RATE_LIMIT');
  assert.equal(rate.retryable, true);
  assert.equal(rate.retryAfterSec, 37);

  assert.equal(classifyResendError({ statusCode: 422, message: 'sender not verified' }).kind, 'SENDER');
  assert.equal(classifyResendError({ statusCode: 400, message: 'bad payload' }).kind, 'VALIDATION');
  assert.equal(classifyResendError({ statusCode: 503, message: 'down' }).kind, 'SERVER');
  assert.equal(classifyResendError({ statusCode: 503, message: 'down' }).retryable, true);
});

test('classifyResendError detecta falha de rede como repetível', () => {
  const c = classifyResendError(new Error('fetch failed: ECONNRESET'));
  assert.equal(c.kind, 'NETWORK');
  assert.equal(c.retryable, true);
});

test('classifyResendError sanitiza segredo em erros de payload (4xx)', () => {
  process.env.RESEND_API_KEY = 're_LEAKMEABCDEFGHIJ';
  try {
    const c = classifyResendError({ statusCode: 400, message: 'bad payload re_LEAKMEABCDEFGHIJ' });
    assert.equal(c.kind, 'VALIDATION');
    assert.ok(!c.message.includes('LEAKME'), 'chave nao deveria vazar na mensagem');
  } finally {
    delete process.env.RESEND_API_KEY;
  }
});

test('ResendConfigError e CONFIG nao repetivel', () => {
  const err = new ResendConfigError('RESEND_FROM_EMAIL missing.');
  const c = classifyResendError(err);
  assert.equal(c.kind, 'CONFIG');
  assert.equal(c.retryable, false);
});

test('timeout padrão cabe na duração de uma função serverless', () => {
  assert.equal(RESEND_TIMEOUT_MS, 10_000);
});
