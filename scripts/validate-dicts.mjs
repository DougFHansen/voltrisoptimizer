// Validador de dicionarios i18n. Roda no "prebuild" para que um dicionario
// corrompido quebre a build com mensagem clara em vez de virar stack do webpack
// ("Import trace: ./lib/guides-i18n/data/vi.json" + BUILD_UTILS_SPAWN_1).
//
// Historia real: o commit 3f49886 levou um vi.json TRUNCADO no meio (sem a chave
// de fechamento) porque um `git add -A` rodou enquanto um script de traducao
// ainda escrevia os arquivos. Idem id/pl/tr, que ficaram validos porem
// incompletos (19.720 chaves contra 21.141). Em producao isso derruba o build.
//
// Checagens (todas falham com exit 1 e dizem qual arquivo e o motivo):
//   1. JSON parseia.
//   2. Estrutura: objeto simples de chaves -> strings (o formato esperado por
//      applyGuideDict / SiteTextTranslator).
//   3. Nenhum arquivo esta brutalmente atrasado em relacao ao maior dicionario
//   (os idiomas compartilham as MESMAS chaves-fonte em ingles).
//   4. Arquivos .tmp sobrando no diretorio = escrita interrompida.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA_DIR = path.join(ROOT, 'lib/guides-i18n/data');
const STRINGS_EN = path.join(ROOT, 'lib/guides-i18n/strings.en.json');

// Tolerancia: os dicionarios divergem por poucas entradas (vi 21.118 vs 21.141).
// 95% pega um arquivo paralisado em ~93% sem acusar divergencia legitima.
const MIN_FRACAO_ESPERADA = 0.95;

const erros = [];

function lerJson(caminho, rotulo) {
  let bruto;
  try {
    bruto = fs.readFileSync(caminho, 'utf8');
  } catch (e) {
    erros.push(`${rotulo}: nao consegui ler (${e.message})`);
    return null;
  }

  const fim = bruto.trimEnd().slice(-1);
  if (fim !== '}' && fim !== ']') {
    erros.push(
      `${rotulo}: arquivo truncado (termina com ${JSON.stringify(fim)} em vez de "}", ` +
      `${bruto.length} caracteres) - escrita interrompida no meio`
    );
    return null;
  }

  try {
    return JSON.parse(bruto);
  } catch (e) {
    erros.push(`${rotulo}: JSON invalido - ${e.message}`);
    return null;
  }
}

if (!fs.existsSync(DATA_DIR)) {
  console.error(`[validate-dicts] diretorio ausente: ${DATA_DIR}`);
  process.exit(1);
}

for (const nome of fs.readdirSync(DATA_DIR)) {
  if (nome.endsWith('.tmp')) {
    erros.push(`sobrou ${nome} em lib/guides-i18n/data (escrita atomica falhou no meio)`);
  }
}

const idiomas = fs.readdirSync(DATA_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => ({ arquivo: f, caminho: path.join(DATA_DIR, f) }));

const contagem = [];
for (const { arquivo, caminho } of idiomas) {
  const dados = lerJson(caminho, `lib/guides-i18n/data/${arquivo}`);
  if (dados === null) continue;

  if (typeof dados !== 'object' || Array.isArray(dados) || dados === null) {
    erros.push(`lib/guides-i18n/data/${arquivo}: esperava um objeto { ingles: traducao }`);
    continue;
  }

  const chaves = Object.keys(dados);
  contagem.push({ arquivo, chaves: chaves.length });

  // Amostra de tipos: uma traducao virando objeto/array quebra applyGuideDict em
  // runtime com erro obscuro, então é barrada aqui.
  const ruim = chaves.find((k) => typeof dados[k] !== 'string');
  if (ruim !== undefined) {
    erros.push(
      `lib/guides-i18n/data/${arquivo}: valor de ${JSON.stringify(String(ruim).slice(0, 60))} ` +
      `nao e string (${typeof dados[ruim]})`
    );
  }
}

if (fs.existsSync(STRINGS_EN)) {
  const fontes = lerJson(STRINGS_EN, 'lib/guides-i18n/strings.en.json');
  if (fontes !== null) {
    const n = Array.isArray(fontes) ? fontes.length : Object.keys(fontes).length;
    contagem.push({ arquivo: 'strings.en.json (fonte)', chaves: n });
  }
}

const maximo = contagem.length ? Math.max(...contagem.map((c) => c.chaves)) : 0;
for (const { arquivo, chaves } of contagem) {
  if (maximo > 0 && chaves / maximo < MIN_FRACAO_ESPERADA) {
    erros.push(
      `${arquivo}: so ${chaves} chaves contra ${maximo} do maior dicionario ` +
      `(${(100 * chaves / maximo).toFixed(1)}%) - retraduzir com scripts/translate-guides.mjs`
    );
  }
}

if (erros.length) {
  console.error(`\n[validate-dicts] ${erros.length} problema(s) nos dicionarios i18n:\n`);
  for (const e of erros) console.error('  - ' + e);
  console.error('\nA build esta parada de proposito: um dicionario truncado passa no commit');
  console.error('mas derruba o webpack na Vercel. Corrija (ou reverta) o arquivo antes.\n');
  process.exit(1);
}

console.log(
  `[validate-dicts] ok - ${contagem.length} dicionarios, ` +
  `${maximo} chaves no maior, todos parses validos`
);
