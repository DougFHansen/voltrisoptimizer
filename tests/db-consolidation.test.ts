import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');

// FASE 9/13 - o schema master do INTL deve carregar sozinho as policies que o
// app usa (não depender de aplicar adicoes.sql separadamente) e jamais tocar
// RLS de forma destrutiva.

test('completo.idempotente.sql traz as policies UPDATE de notifications (own + admin)', () => {
  const sql = read('completo.idempotente.sql');
  assert.match(sql, /CREATE POLICY "Users can update their own notifications"[\s\S]{0,200}FOR UPDATE[\s\S]{0,200}auth\.uid\(\) = user_id/, 'usuario marca as proprias como lidas');
  assert.match(sql, /CREATE POLICY "Admin can update all notifications"[\s\S]{0,200}FOR UPDATE[\s\S]{0,200}public\.check_is_admin\(\)/, 'admin marca qualquer uma como lida');
});

test('adicoes.sql e o master dizem a mesma coisa (consolidado, nao paralelo)', () => {
  const ad = read('adicoes.sql');
  const sql = read('completo.idempotente.sql');
  for (const policy of ['Users can update their own notifications', 'Admin can update all notifications']) {
    assert.ok(ad.includes(`CREATE POLICY "${policy}"`), `adicoes.sql define "${policy}"`);
    assert.ok(sql.includes(`CREATE POLICY "${policy}"`), `master define "${policy}" (consolidado)`);
  }
});

test('nenhuma tabela da paridade tem RLS desabilitado (regra inegociavel)', () => {
  // O unico DISABLE herdado do BR e em `installations` (fluxo device-credential,
  // documentado no bloco add_link_status_events e no relatorio final). Nada mais
  // pode aparecer aqui: notifications/email_outbox/profiles/orders/tickets etc.
  // precisam manter RLS ligado, sempre.
  const paridade = ['notifications', 'email_outbox', 'profiles', 'orders', 'tickets', 'payments', 'licenses'];
  for (const rel of ['completo.idempotente.sql', 'adicoes.sql', 'supabase/migrations/20261019160000_email_outbox.sql']) {
    const sql = read(rel);
    const disables = [...sql.matchAll(/ALTER\s+TABLE\s+[^;\n]*?(\w+)[^;\n]*?\s+DISABLE\s+ROW\s+LEVEL\s+SECURITY/gi)].map((m) => m[1].toLowerCase());
    for (const t of disables) {
      assert.equal(t, 'installations', `${rel} so pode DISABLE RLS em installations (heranca BR), nao em "${t}"`);
    }
    for (const t of paridade) {
      assert.equal(/DISABLE ROW LEVEL SECURITY/i.test(sql.match(new RegExp(`ALTER TABLE [^;]*${t}[^;]*`, 'i'))?.[0] ?? ''), false, `${rel} nao desabilita RLS de ${t}`);
    }
  }
});

test('email_outbox permanece legivel apenas por service role', () => {
  const sql = read('completo.idempotente.sql');
  assert.match(sql, /CREATE POLICY "service role only email_outbox"/, 'policy restritiva presente');
  assert.doesNotMatch(sql, /CREATE POLICY[^;]*email_outbox[^;]*TO authenticated/, 'nenhuma policy authenticated sobre o outbox');
});
