/**
 * Prova executável das regras de "cadastro completo" e telefone internacional de
 * `lib/profile-completeness.ts`.
 *
 * Roda sem Next.js e sem Supabase: `node --test tests/profile-completeness.test.ts`.
 * O import usa a extensão `.ts` explícita porque os helpers são exercitados direto
 * pelo runtime do Node (type stripping do Node 24), sem bundler.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';

import {
  REQUIRED_PROFILE_FIELDS,
  missingProfileFields,
  isProfileComplete,
  phoneDigits,
  toE164,
  nationalPart,
  isPhonePlausible,
} from '../lib/profile-completeness.ts';

const COMPLETE = {
  full_name: 'Voltris Tecnologia',
  login: 'voltris',
  country: 'Brazil',
  phone: '+5511999999999',
  address: 'Av. Paulista, 1000',
  city: 'Sao Paulo',
  state: 'SP',
  cep: '01310-100',
};

// ---------------------------------------------------------------------------
// 1. Completude: TODOS os campos, em qualquer país
// ---------------------------------------------------------------------------

test('REQUIRED_PROFILE_FIELDS exige os oito campos do cadastro', () => {
  assert.equal(REQUIRED_PROFILE_FIELDS.length, 8);
  for (const f of ['full_name', 'login', 'country', 'phone', 'address', 'city', 'state', 'cep']) {
    assert.ok((REQUIRED_PROFILE_FIELDS as readonly string[]).includes(f), f);
  }
});

test('perfil vazio tem todos os campos faltando e não está completo', () => {
  assert.deepEqual(missingProfileFields({}), [...REQUIRED_PROFILE_FIELDS]);
  assert.equal(isProfileComplete({}), false);
  assert.equal(isProfileComplete(null), false);
});

test('um único campo faltando já deixa o cadastro incompleto', () => {
  const semLogin = { ...COMPLETE, login: '' };
  assert.deepEqual(missingProfileFields(semLogin), ['login']);
  assert.equal(isProfileComplete(semLogin), false);
});

test('só espaços em branco não contam como preenchido', () => {
  assert.equal(isProfileComplete({ ...COMPLETE, city: '   ' }), false);
});

test('cadastro com todos os campos está completo', () => {
  assert.deepEqual(missingProfileFields(COMPLETE), []);
  assert.equal(isProfileComplete(COMPLETE), true);
});

test('completo independe do país (EUA sem CEP brasileiro também vale)', () => {
  const usa = {
    full_name: 'John Doe',
    login: 'johndoe',
    country: 'United States',
    phone: '+14155551234',
    address: '1 Market St',
    city: 'San Francisco',
    state: 'CA',
    cep: '94105',
  };
  assert.equal(isProfileComplete(usa), true);
});

// ---------------------------------------------------------------------------
// 2. Telefone internacional em E.164 (DDI + nacional)
// ---------------------------------------------------------------------------

test('phoneDigits remove tudo que não é dígito', () => {
  assert.equal(phoneDigits('+55 (11) 99999-9999'), '5511999999999');
  assert.equal(phoneDigits(null), '');
});

test('toE164 monta DDI + nacional com "+" (Brasil e EUA)', () => {
  assert.equal(toE164('+55', '11999999999'), '+5511999999999');
  assert.equal(toE164('+1', '4155551234'), '+14155551234');
  // aceita DDI sem "+" e com máscara
  assert.equal(toE164('55', '(11) 99999-9999'), '+5511999999999');
});

test('toE164 sem número devolve string vazia', () => {
  assert.equal(toE164('+55', ''), '');
  assert.equal(toE164('+55', '   '), '');
});

test('nationalPart recupera a parte nacional removendo o DDI', () => {
  assert.equal(nationalPart('+55', '+5511999999999'), '11999999999');
  assert.equal(nationalPart('+1', '+14155551234'), '4155551234');
});

test('nationalPart recorta o DDI exato mesmo com DDD igual ao DDI (BR 55)', () => {
  // DDI 55 + DDD 55 + celular de 9 dígitos (999999999) → "+55" + "55999999999"
  assert.equal(nationalPart('+55', '+5555999999999'), '55999999999');
});

test('nationalPart preserva legado salvo só com o nacional (sem DDI)', () => {
  assert.equal(nationalPart('+55', '11999999999'), '11999999999');
});

test('toE164 e nationalPart são inversos (round-trip)', () => {
  const nacional = '11999999999';
  const salvo = toE164('+55', nacional);
  assert.equal(nationalPart('+55', salvo), nacional);
});

// ---------------------------------------------------------------------------
// 3. Plausibilidade de telefone no padrão do país
// ---------------------------------------------------------------------------

test('Brasil aceita fixo (10) e celular (11), rejeita resto', () => {
  assert.equal(isPhonePlausible('Brazil', '11999999999'), true);
  assert.equal(isPhonePlausible('Brazil', '1133334444'), true);
  assert.equal(isPhonePlausible('Brazil', '119999999'), false);
  assert.equal(isPhonePlausible('Brazil', '119999999999'), false);
});

test('demais países aceitam faixa internacional de 6 a 15 dígitos', () => {
  assert.equal(isPhonePlausible('United States', '4155551234'), true);
  assert.equal(isPhonePlausible('Germany', '3012345678'), true);
  assert.equal(isPhonePlausible('United States', '123'), false);
  assert.equal(isPhonePlausible('United States', '1234567890123456'), false);
});
