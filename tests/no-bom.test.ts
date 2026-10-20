import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Trava anti-recaída (build Vercel): o Vercel lê package.json com JSON.parse, que
// NÃO tolera BOM UTF-8 (EF BB BF). Um BOM reintroduzido (ex.: PowerShell Set-Content)
// quebra o build com "Unexpected token '﻿'". Este teste garante que package.json e
// todos os JSON estritamente parseados no build (dicionários i18n lidos no prebuild e
// configs de projeto) estejam SEM BOM e sejam JSON válido.

const root = process.cwd();
const BOM = [0xef, 0xbb, 0xbf];
const hasBom = (b: Buffer) => b.length >= 3 && b[0] === BOM[0] && b[1] === BOM[1] && b[2] === BOM[2];
const bytes = (rel: string) => fs.readFileSync(path.join(root, rel));

test('package.json nao pode ter BOM nem ser JSON invalido (estoura o build Vercel)', () => {
  const b = bytes('package.json');
  assert.ok(!hasBom(b), 'package.json comecando com BOM UTF-8 (EF BB BF) — remove o BOM');
  // Nao deve conter U+FEFF em lugar nenhum do comeco, nem whitespace antes do '{'.
  const head = b.slice(0, 1).toString('utf8');
  assert.equal(head, '{', 'package.json deve comecar exatamente com "{");');
  assert.doesNotThrow(() => JSON.parse(b.toString('utf8')), 'package.json deve ser JSON valido');
});

test('dicionarios i18n (lidos no prebuild/validate-dicts) estao sem BOM e validos', () => {
  const dir = path.join(root, 'lib/guides-i18n/data');
  const jsons = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.json'));
  assert.ok(jsons.length >= 14, `esperado >=14 dicionarios, achou ${jsons.length}`);
  for (const f of jsons) {
    const b = bytes(path.join('lib/guides-i18n/data', f));
    assert.ok(!hasBom(b), `${f} tem BOM UTF-8`);
    assert.doesNotThrow(() => JSON.parse(b.toString('utf8')), `${f} nao e JSON valido`);
  }
});

test('configs de projeto opacionais, quando existem, estao sem BOM', () => {
  const candidates = [
    'package-lock.json',
    'tsconfig.json',
    'vercel.json',
    'appsettings.json',
    'next.config.js',
    'next.config.mjs',
    'next.config.ts',
  ];
  for (const rel of candidates) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) continue;
    const b = bytes(rel);
    assert.ok(!hasBom(b), `${rel} tem BOM UTF-8`);
    if (rel.endsWith('.json')) {
      assert.doesNotThrow(() => JSON.parse(b.toString('utf8')), `${rel} nao e JSON valido`);
    }
  }
});
