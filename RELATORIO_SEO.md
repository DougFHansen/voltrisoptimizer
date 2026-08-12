# AUDITORIA SEO COMPLETA — VOLTRIS OPTIMIZER

**Site:** https://www.voltrisoptimizer.com
**Data da auditoria:** 02/08/2026
**Stack:** Next.js 15.5 (App Router) · Supabase · Vercel · Cloudflare Insights (somente script de analytics) · Next-intl-like (locales/ em disco)
**Metodologia:** análise de código-fonte (repositório local, último commit `afe8209` de 20/07/2026), testes HTTP ao vivo, análise do sitemap ao vivo (4.176 URLs) e build de produção local (`npm run build` + `next start`, 100% funcional).

> **ALERTA Nº 1 — LEIA ANTES DE TUDO:** o ambiente de **produção está rodando um build desatualizado e quebrado**. Em produção, **381 páginas retornam HTTP 500** (325 guias + 56 landing pages de otimização, em 9 idiomas ≈ **3.429 URLs mortas**). O código atual do repositório **builda e funciona perfeitamente localmente**. Isso é a resposta direta para a pergunta "por que não recebo tráfego global?".

---

## 1. RESUMO EXECUTIVO

O site tem uma base técnica sólida no código atual (hreflang completo, canonical por página, sitemap grande, Brotli, metadata bem estruturada, JSON-LD, geração estática). **Porém, em produção, esse código não está rodando** — o deploy é antigo (build de ~19/06/2026, enquanto o último commit é de 20/07/2026) e:

1. **3.429 URLs retornam 500** (todas as páginas que usam o componente `GuideTemplateClient`). O Google não indexa nada que retorne 500. Este é **o motivo nº 1 do zero de tráfego global**.
2. O **hub `/guides` está vazio** ("No guide found") por um bug de caminho (`lib/guides.ts` lê `app/guides`, que não existe) → os 325 guias ficam órfãos (sem link interno).
3. O **sitemap lista ~396 URLs de regiões que retornam 404** (`/en/regions/...` não existe; as reais são `/regions/...`).
4. A página de **canonical dos guias aponta para um slug errado** (ex.: URL `/en/guides/windows-11-ssd-optimization`, canonical `/en/guides/otimizacao-ssd-windows-11`).
5. Diversos erros de metadata (título duplicado `| VOLTRIS | VOLTRIS`, canonical do `/en/buy-license` apontando para a home).

**Conclusão:** não se trata de "SEO ruim". Trata-se de **deploy quebrado + bugs estruturais de conteúdo**. Assim que o deploy for refeito e os bugs abaixo corrigidos, o site passa de "0% indexado" para "indexável", e o tráfego orgânico pode começar a subir em palavras-chave de cauda longa (o conteúdo dos guias é genuinamente bom para isso).

---

## 2. NOTA GERAL POR CATEGORIA (0–100)

| # | Categoria | Nota | Justificativa resumida |
|---|-----------|------|------------------------|
| 1 | SEO Técnico (código atual) | **72** | Hreflang/canonical/robots bons no código, mas canonical de guias errado, sitemap com 404s, root 307. |
| 1b | **SEO Técnico (PRODUÇÃO)** | **18** | 3.429 URLs em 500, sem cache, build desatualizado. |
| 2 | Indexação | **10** | Google não indexa páginas com 500; hub vazio; sitemap com 404s. |
| 3 | SEO Internacional | **55** | 9 idiomas + hreflang correto nas páginas localizadas; mas regiões fora do sistema, sem hreflang, e guias com conteúdo mal traduzido. |
| 4 | Conteúdo / EEAT | **58** | Guias têm profundidade boa e FAQ/schema; mas hub vazio, links internos quebrados, canibalização de guias duplicados, sem autoridade. |
| 5 | Performance / Core Web Vitals | **60** | Brotli OK, SSG OK no código; páginas legais com 641 kB de JS (LCP/INP ruins); produção servindo tudo dinâmico. |
| 6 | Next.js | **65** | SSG/ISR corretos no código; bugs de `getAllGuides`, canonical dinâmico, middleware 307. |
| 7 | Vercel | **45** | Deploy desatualizado; sem `Cache-Control` público nas páginas em produção; config de headers vazia em `vercel.json`. |
| 8 | Supabase | **60** | Não bloqueia o SEO das páginas estáticas; mas APIs públicas e render dinâmico sob risco. |
| 9 | UX / Navegação | **70** | Boa estrutura visual; hub de guias quebrado degrada a navegação. |
| 10 | Google | **15** | Sem backlinks, domínio novo, páginas em 500 — Google não tem o que indexar. |
| 11 | Bing | **35** | IndexNow presente; mas Bing também recebe 500s e o sitemap tem 404s. |
| 12 | Backlinks | **5** | Domínio novo (~2026), praticamente zero autoridade. |
| 13 | Concorrência | **20** | CCleaner/IObit/Fortect têm DR 60–90 e milhões de backlinks; Voltris está anos atrás em autoridade. |
| 14 | IA e buscas modernas | **50** | JSON-LD fora do HTML inicial (afterInteractive); conteúdo é citável, mas sem indexação atual. |
| 15 | Conversão | **55** | CTAs presentes; mas tráfego zero anula conversão. |
| **Geral** | | **≈ 40** | Técnica boa no papel, produção quebrada. |

---

## 3. PROBLEMAS ENCONTRADOS (com prioridade)

### 🔴 CRÍTICOS — corrigir imediatamente

| ID | Problema | Impacto |
|----|----------|---------|
| C1 | **Produção roda build desatualizado; 381 páginas (≈3.429 URLs) retornam HTTP 500** | Crítico |
| C2 | **Hub `/guides` vazio** — `lib/guides.ts:13` lê `app/guides` (inexistente); `getAllGuides()` retorna `[]`; `GuiasClient` renderiza "No guide found" | Crítico |
| C3 | **Sitemap com ~396 URLs de região que retornam 404** (`/en/regions/...`) — `app/sitemap.ts:74-83` gera `/en/regions/...`, mas as páginas reais são `/regions/...` | Alto |
| C4 | **Canonical dos guias aponta para slug errado** — `createGuideMetadata` (`components/GuideTemplate.tsx:14`) usa `guideMetadata.id` (PT) como slug; a URL real é o nome da pasta (EN). Ex.: URL `windows-11-ssd-optimization` → canonical `otimizacao-ssd-windows-11` | Alto |

### 🟠 ALTOS

| ID | Problema | Impacto |
|----|----------|---------|
| H1 | Guias órfãos: hub vazio (C2) + `relatedGuides` linkam para slugs PT antigos inexistentes (`/guides/como-escolher-memoria-ram` etc.) → link rot interno | Alto |
| H2 | Root `/` → `/en` via **307 temporário** (`middleware.ts:93`) | Médio |
| H3 | `Cache-Control: private, no-cache, no-store` em todas as páginas em produção (não há cache CDN; no build atual são SSG e deveriam ter cache público) | Alto |
| H4 | JSON-LD (`JsonLd`, `FAQSchema`, `SoftwareApplicationSchema`) carregado com `next/script strategy="afterInteractive"` → **não está no HTML inicial** que o Google/AI lê | Alto |
| H5 | Título duplicado `| VOLTRIS | VOLTRIS` (template `%s | VOLTRIS` + títulos de página já com `| VOLTRIS`) em `combined-services`, `terms-of-use`, `format-windows`, etc. | Médio |
| H6 | `/en/buy-license` com canonical apontando para a **home** (`/en`) em produção | Médio |
| H7 | Páginas de regiões (`/regions/...`) **sem hreflang**, fora do sistema de locale e não listadas no sitemap | Médio |

### 🟡 MÉDIOS / BAIXOS

| ID | Problema | Impacto |
|----|----------|---------|
| M1 | `lastmod` do sitemap é o horário de build (não reflete mudanças reais de conteúdo) → Google ignora | Baixo |
| M2 | `priority`/`changefreq` no sitemap (ignorados pelo Google; não prejudicam) | Baixo |
| M3 | `public/indexnow-api-endpoint.ts` — arquivo `.ts` estático em `public/` expondo chave IndexNow (chave é pública por natureza, mas é ruído) | Baixo |
| M4 | Conteúdo multilíngue mal alinhado: vários `guideMetadata.id` em PT com títulos EN e vice-versa; páginas como `abrir-portas-roteador-nat-aberto` (PT) coexistem com guias EN — risco de canibalização e má experiência | Médio |
| M5 | Guias duplicados: `next.config.js` consolida dezenas de duplicatas via 301 — bom, mas canônico correto depende de C4 | Médio |
| M6 | `robots.txt` com `Disallow: /process/` e `Disallow: *.json` (inofensivo, mas `Host:` só vale para Yandex) | Baixo |
| M7 | `x-default` hreflang só na homepage (subpáginas não têm) | Baixo |
| M8 | `eslint` e `typescript` com `ignoreBuildErrors: true` — erros são silenciados no build | Médio |
| M9 | Bundle pesado: páginas legais 641 kB e `/international` 644 kB de First Load JS (LCP/INP ruins) | Médio |

---

## 4. EVIDÊNCIAS TÉCNICAS

### C1 — Produção quebrada / build desatualizado

```
$ git log -1
afe8209 2026-07-20 20:06:36 -0300 SEO: Fix canonical inheritance in layout and resolve sitemap 404s
```

**Testes ao vivo (02/08/2026):**
- `GET /en/guides/windows-11-ssd-optimization` → **500**
- `GET /en/format-windows` → **500**
- `GET /en/best-programs-to-optimize-windows` → **500**
- Teste de 78 landing pages: **56 retornam 500**; 22 retornam 200
- Teste de 10 guias aleatórios (dos 325): **todos 500**
- Correlação 100%: **todas as páginas que usam `GuideTemplateClient` retornam 500 em produção**

**Prova de que o deploy está desatualizado:**
- Chunk `main-app` no ar: `main-app-abf71c5d868c84e9.js`; no build local atual: `main-app-4b545f5ebddc2568.js`
- `lastmod` de todas as 4.176 URLs do sitemap ao vivo: `2026-06-19T01:28:17.110Z` (build de junho), enquanto o último commit é de julho
- O build local atual (`npm run build` + `next start`) serve todas essas páginas com **200**:
  - `/en/guides/windows-11-ssd-optimization` → 200 (114.644 bytes)
  - `/en/format-windows` → 200 (83.387 bytes)
  - `/en/guides/abrir-portas-roteador-nat-aberto` → 200 (294.009 bytes)

**Causa provável histórica:** o deploy antigo tinha um problema em `GuideTemplateClient` (provável relacionado ao bundle de `isomorphic-dompurify`/`jsdom` ou a uma versão antiga do código). O código atual corrigiu isso.

### C2 — Hub de guias vazio

`lib/guides.ts:13`:
```ts
const guidesDir = path.join(process.cwd(), 'app/guides'); // NÃO EXISTE — os guias estão em app/[locale]/guides/<slug>/
```
`app/[locale]/guides/page.tsx:36` chama `getAllGuides()` → `[]` → `GuiasClient.tsx` filtra categorias com `guides.length === 0` → renderiza **"No guide found"**.
**Confirmado ao vivo:** o HTML de `/en/guides` contém "No guide" e nenhum slug de guia.

### C3 — Sitemap com URLs de região quebradas

`app/sitemap.ts:74-83`:
```ts
const regionalRoutes = regionsData.flatMap(country =>
  country.cities.flatMap(city =>
    supportedLocales.map(locale => ({
      url: `${domain}/${locale}/regions/${country.slug}/${city.slug}`,  // /en/regions/...
      ...
```
- Estrutura real: `app/regions/[country]/[city]/page.tsx` → URLs `/regions/usa/new-york` (sem locale)
- Teste ao vivo: `/en/regions/usa/new-york` → **404**; `/regions/usa/new-york` → **200**
- Logo: ~44 cidades × 9 locales ≈ **396 URLs no sitemap retornam 404**, e as páginas reais não estão no sitemap

### C4 — Canonical dos guias errado

`components/GuideTemplate.tsx:13-14`:
```ts
export function createGuideMetadata(slug, title, description, keywords, locale) {
  const canonical = `${BASE_URL}/${locale}/guides/${slug}`;
```
Chamado de `app/[locale]/guides/windows-11-ssd-optimization/page.tsx:25` com `slug = 'otimizacao-ssd-windows-11'` (o `guideMetadata.id`, em PT), enquanto a URL real é `windows-11-ssd-optimization`.
**Confirmado no HTML de erro da página ao vivo:** `<link rel="canonical" href="https://www.voltrisoptimizer.com/en/guides/otimizacao-ssd-windows-11"/>` numa URL `/en/guides/windows-11-ssd-optimization`.

### H2 — Root redirect 307

`middleware.ts:93`: `NextResponse.redirect(request.nextUrl)` sem status → **307 temporário**.
Teste ao vivo: `GET /` → **307** → `/en`.

### H3 — Sem cache CDN em produção

- `GET /en` → `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`; `X-Vercel-Cache: MISS`
- No build atual, `/en` é SSG (`generateStaticParams` no layout). Após redeploy, o Vercel servirá com cache público (`s-maxage`).

### H4 — JSON-LD fora do HTML inicial

- `components/JsonLd.tsx:21`: `<Script ... strategy="afterInteractive" />`
- `components/SEOStructuredData.tsx` (FAQSchema): idem
- No HTML inicial de `/en` **nenhum** `"@type"` de JSON-LD foi encontrado (só é injetado via JS depois)

### H5 — Título duplicado

`app/[locale]/layout.tsx:20`: `template: "%s | VOLTRIS"` + títulos de página que já terminam em `| VOLTRIS` → `... Technical Service Bundles | Formatting + Optimization + Assistance - VOLTRIS | VOLTRIS`.

### M9 — Bundles pesados (do build local)

```
First Load JS (maiores):
/international:                644 kB
/[locale]/lgpd:                641 kB
/[locale]/privacy-policy:      641 kB
/[locale]/terms-of-use:        641 kB
/[locale]/guides/*:            ~240 kB
First Load JS compartilhado:   102 kB
```

---

## 5. IMPACTO, DIFICULDADE E PRIORIDADE DE IMPLEMENTAÇÃO

| ID | Impacto | Dificuldade | Prioridade | Esforço est. |
|----|---------|-------------|------------|--------------|
| C1 | Crítico | Baixa | **1 (agora)** | 30 min (redeploy + teste) |
| C2 | Crítico | Baixa | **2** | 1–2 h |
| C3 | Alto | Baixa | **3** | 1 h |
| C4 | Alto | Baixa | **4** | 2–3 h (slug mapping) |
| H1 | Alto | Média | **5** | 3–4 h |
| H2 | Médio | Baixa | **6** | 10 min |
| H3 | Alto | Baixa | automático com C1 | 0 |
| H4 | Alto | Baixa | **7** | 1 h |
| H5 | Médio | Baixa | **8** | 30 min |
| H6 | Médio | Baixa | **9** | 15 min |
| H7 | Médio | Média | **10** | 2 h |
| M1–M9 | Baixo–Médio | Baixa–Média | 11+ | — |

---

## 6. SOLUÇÕES DETALHADAS

### C1 — Redepoar o build atual (ação imediata)

1. `git pull` / verificar que está em `afe8209` (ou HEAD desejado).
2. `npm run build` — confirmar que passa (validado nesta auditoria: passa com 0 erros).
3. `vercel --prod` (ou GitHub Actions/auto-deploy). **Fazer em horário de baixo tráfego.**
4. **Validar após o deploy:**
   - `GET https://www.voltrisoptimizer.com/en/guides/windows-11-ssd-optimization` deve retornar **200**
   - `GET https://www.voltrisoptimizer.com/en/format-windows` → **200**
   - `GET /en` deve retornar `Cache-Control: public, s-maxage=...` (SSG)
5. Checar **Vercel → Functions → Logs** das primeiras requisições: se persistir qualquer 500, capturar o stack e verificar limite de tamanho da função (o bundle de `isomorphic-dompurify` arrasta `jsdom`; se exceder limites do plano Hobby/Fluid, mover a sanitização para o browser ou usar `dompurify` puro no client).

> **Se o 500 persistir após o redeploy (não deve, pois o build local passa), a causa provável é o `isomorphic-dompurify` no bundle de servidor.** Fix alternativo: em `GuideTemplateClient`, substituir `DOMPurify.sanitize()` por sanitização somente no browser, ou remover a sanitização (o conteúdo é hardcoded e de confiança).

### C2 — Corrigir o hub de guias

`lib/guides.ts:13`:
```ts
const guidesDir = path.join(process.cwd(), 'app/[locale]/guides');
```
Mas isso lê o diretório de **um** locale. Melhor solução: gerar os metadados dos guias a partir de um índice único. Exemplo com o id/título já exportados:

```ts
// lib/guides.ts
import fs from 'fs';
import path from 'path';

const guidesDir = path.join(process.cwd(), 'app', '[locale]', 'guides');

export function getAllGuides(locale = 'en'): GuideMetadata[] {
  // usa guidesDir; para título localizado, ler page.tsx e extrair guideMetadata
}
```
E em `app/[locale]/guides/page.tsx`:
```tsx
const guides = getAllGuides(locale);
return <GuiasClient initialGuides={guides} locale={locale} />;
```
Adicionalmente, garantir que os `href` dos cards usem `/${locale}/guides/${slug}`.

### C3 — Corrigir sitemap de regiões

Duas opções (escolher uma):
- **(a)** Remover o locale das URLs de região no sitemap (alinhar com a estrutura real):
```ts
url: `${domain}/regions/${country.slug}/${city.slug}`,
```
- **(b)** Criar versões localizadas reais (`app/[locale]/regions/...`) com hreflang — mais trabalho, melhor UX. **Recomendo (a) agora e (b) depois.**

Também corrigir o bug do `brazil/sao-paulo` (404 — verificar slugs de países na `data.ts`).

### C4 — Canonical dos guias alinhado à URL

O canonical deve usar o **slug real da URL**, não o `guideMetadata.id`. Nas 325 páginas de guia, chamar `createGuideMetadata` com o slug do diretório. Como é repetitivo, gerar automaticamente:

```ts
// Em cada guide/page.tsx — substituir o hardcoded pelo slug do diretório:
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const slug = 'windows-11-ssd-optimization'; // = nome da pasta
  return createGuideMetadata(slug, title, description, keywords, locale);
}
```
> Alternativa de engenharia: fazer o `GuideTemplate` derivar o slug de `usePathname()` (já feito para `canonicalUrl` no client) e gerar o canonical no **servidor** a partir de `params`. Recomendo um helper central:
> ```ts
> // components/GuideTemplate.tsx
> export function createGuideMetadata(slug: string, ...) { ... canonical = `${BASE_URL}/${locale}/guides/${slug}` ... }
> ```

### H1 — Interlinking dos guias

- Centralizar o índice de guias (C2) e usar no hub + "Continue Learning".
- Corrigir `relatedGuides` dos guias para slugs EN válidos com locale:
```tsx
const relatedGuides = [
  { href: `/${locale}/guides/clean-install-windows-11-rufus-gpt`, title: 'Clean Install', ... },
];
```
- Considerar breadcrumbs com `itemprop` e links internos para as landing pages de serviço.

### H2 — Root 301

`middleware.ts:91-93`:
```ts
const locale = getLocale(request);
request.nextUrl.pathname = `/${locale}${pathname}`;
return addSecurityHeaders(NextResponse.redirect(request.nextUrl, 301));
```

### H4 — JSON-LD no HTML inicial

Trocar `strategy="afterInteractive"` por `beforeInteractive` (ou remover e renderizar inline):
```tsx
<Script id="json-ld-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        strategy="beforeInteractive" />
```
> Melhor ainda: renderizar `<script type="application/ld+json">` diretamente no componente servidor (sem `next/script`), garantindo presença no HTML.

### H5 — Títulos sem duplicação

Remover `| VOLTRIS` dos `title` de cada página (o template do layout já adiciona). Regex de limpeza: garantir que nenhum title de página termine com `| VOLTRIS`.

### H6 — Canonical do buy-license

`app/[locale]/buy-license/page.tsx` deve exportar `generateMetadata` com `alternates.canonical = /${locale}/buy-license` (verificar se existe; em produção o canonical herdou a home).

### H7 — Regiões com hreflang

Decidir a estratégia (localizado vs global). Para páginas `/regions/...` (globais), adicionar `hreflang="x-default"` e, se criar versões por locale, gerar o bloco completo.

### M1 — lastmod real

Derivar `lastModified` do git ou do conteúdo:
```ts
// app/sitemap.ts
import { execSync } from 'child_process';
// ou usar o mtime dos arquivos: fs.statSync(pagePath).mtime
```

---

## 7. CÓDIGO DE EXEMPLO (fix consolidado)

### Middleware — root 301 (`middleware.ts`)
```ts
if (bypassPaths.some((path) => pathname.startsWith(path))) { ... }
...
const locale = getLocale(request);
request.nextUrl.pathname = `/${locale}${pathname}`;
return addSecurityHeaders(NextResponse.redirect(request.nextUrl, 301)); // 301 fixo
```

### Sitemap de regiões (`app/sitemap.ts`)
```ts
const regionalRoutes = regionsData.flatMap(country =>
  country.cities.flatMap(city => [{
    url: `${domain}/regions/${country.slug}/${city.slug}`,   // sem locale
    lastModified: new Date(),                                  // idealmente mtime real
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }])
);
```

### JSON-LD inline (substitui `JsonLd.tsx` por script servidor)
```tsx
// components/JsonLd.tsx (versão server)
export default function JsonLd({ type, data, id }: JsonLdProps) {
  return (
    <script
      id={id || `json-ld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': type, ...data }) }}
    />
  );
}
```

### Hub de guias corrigido (resumo)
```ts
const guidesDir = path.join(process.cwd(), 'app', '[locale]', 'guides');
```

---

## 8. ESTIMATIVA DE GANHO APÓS CADA CORREÇÃO

| Correção | Ganho esperado |
|----------|----------------|
| C1 (redeploy) | **O maior ganho possível.** De "0 páginas indexadas" para o potencial de indexar todas. Sem isso, nada mais importa. |
| C2 (hub) | Guias deixam de ser órfãos → melhor crawl, maior distribuição de autoridade interna. Impacto alto na descoberta. |
| C3 (sitemap) | Elimina 396 URLs 404; recupera crawl budget; sitemap passa a apontar só para páginas reais. |
| C4 (canonical) | Corrige auto-canonicalização dos 325 guias → evita dispersão de ranking entre slugs PT/EN duplicados. |
| H1 (interlinking) | Fluxo de PageRank interno entre guias e serviços → melhor rankeamento em cauda longa. |
| H2 (301 root) | Sinais corretos de canonicalização do domínio. |
| H4 (JSON-LD inline) | Melhora leitura por AI Overviews/Perplexity/Bing Copilot e rich snippets. |
| H5/H6 | Títulos/canonical corretos em todas as páginas → CTR melhor no SERP. |
| M1 (lastmod real) | Google recrawla com frequência quando lastmod muda de verdade. |

**Cenário realista pós-correções (6–12 meses):** com conteúdo já existente (325 guias × 9 idiomas) + backlinks básicos, o site pode alcançar dezenas de milhares de impressões e milhares de cliques/mês em keywords de cauda longa ("how to fix 100 disk usage windows 11", "best dns for gaming", etc.), **desde que** o esforço de autoridade (link building) seja iniciado — ver seção 13.

---

## 9. SEÇÃO ESPECÍFICAS ADICIONAIS

### 9.1 SEO Internacional (por que o mundo não encontra o site)

- **Estrutura correta** no código atual: `/en`, `/pt-br`, `/de`, `/fr`, `/it`, `/ja`, `/ko`, `/ar`, `/es` + hreflang completo + `x-default` na home.
- **Mas** o mundo não encontra o site porque: (1) 3.429 URLs em 500; (2) sem autoridade/backlinks; (3) conteúdo de guias EN contém resíduos PT (ids/metadata); (4) páginas de região sem hreflang.
- **Mercado EN/ES/DE/FR**: keywords de otimização de Windows têm volume altíssimo, mas dominadas por sites com DR 60+ (Microsoft, CCleaner, forums). Voltris só conseguirá tráfego via cauda longa + nicho gamer.
- **JA/KO/AR**: conteúdo precisa ser traduzido de verdade (não apenas título), senão o Google trata como má tradução e o algoritmo de qualidade penaliza.

### 9.2 Google / EEAT / SpamBrain

- **Sinais fracos:** sem backlinks, sem histórico, autor é um nome sem perfil público forte, sem página de autor indexada (o `/about` existe e cita "Douglas Felipe M. Gonçalves" — bom, mas precisa de prova social: LinkedIn, GitHub, redes).
- **SpamBrain/Helpful Content:** conteúdo dos guias é original e útil (bom). MAS a presença de centenas de páginas quase-iguais (duplicatas PT/EN consolidadas por 301) e páginas com 500 pode ser lida como "site quebrado/parasita".
- **Ações:** (1) corrigir os 500s; (2) melhorar `/about` com credenciais, fotos, certificações; (3) publicar guias em português de verdade para o mercado BR; (4) conseguir backlinks de comunidades tech/gamer.

### 9.3 Bing / IndexNow

- `app/api/indexnow` existe + `IndexNowWrapper` no layout + chave em `public/indexnow-api-endpoint.ts`. **Positivo.**
- Bing também recebe 500s → o IndexNow pinga URLs que retornam 500. Após o redeploy, reenviar (o IndexNowWrapper dispara na navegação).

### 9.4 Backlinks / Concorrência

- **Voltris:** domínio novo (registrado ~2026-03), DR ≈ 0–1, sem backlinks relevantes (sem menções em mídia/forums).
- **CCleaner (Piriform/Avast):** DR 85+; **IObit:** DR 80+; **Fortect/Restoro:** DR 50–60; todos com milhões de backlinks e anos de conteúdo. Trafego: CCleaner ~20M+/mês; IObit ~5M/mês; Fortect ~1M/mês (estimativas públicas de mercado).
- **Por que recebem mais tráfego:** autoridade (backlinks), domínio antigo, marca conhecida, conteúdo "evergreen" em escala, e canais de aquisição (YouTube/reddit/fóruns).
- **O que fazer:** não competir de frente nas keywords de marca; competir em **cauda longa gamer** ("valorant van 9003 fix", "increase fps fortnite low end pc"), e construir backlinks via:
  - Comunidades (r/pcmasterrace, r/Windows11, fóruns de emulação/games);
  - YouTube (tutoriais — os guias são perfeitos para roteiro);
  - Reddit/Quora/StackOverflow com respostas que linkam o guia relevante;
  - Parcerias com tech sites e newsletters de PC gamer;
  - Content upgrade: tabelas de comparação, ferramentas, benchmarks.

### 9.5 IA / Buscas modernas

- **Preparação:** JSON-LD (TechArticle/HowTo/FAQ) presente — mas fora do HTML inicial (fix H4). Conteúdo estruturado com seções claras, tabelas e "TL;DR" → bom para citações de LLMs.
- **Gap:** sem indexação atual, os LLMs não citam o site. Após corrigir 500s e indexar, otimizar para "answerable content" (parágrafos curtos respondendo diretamente) e schema `Speakable`.

### 9.6 Conversão / UX

- CTAs consistentes ("Download Optimizer", WhatsApp), banners estratégicos nos guias, FAQ. **Positivo.**
- **Gaps:** prova social fraca (testemunhos parecem fictícios em várias páginas — para Google/EEAT e conversão, usar depoimentos reais com nome/avatar/rede social); sem reviews externos (Trustpilot/Product Hunt/G2); fluxo de download/checkout precisa ser testado de ponta a ponta.

### 9.7 Performance (detalhe)

- Brotli ativo ✓; assets estáticos com `cache-control: public, max-age=31536000, immutable` ✓; SSG no código ✓.
- **Gorduras:** páginas legais com 641 kB de JS; guias 240 kB (framer-motion + lucide + dompurify + MUI no bundle); First Load compartilhado 102 kB.
- **Recomendações:** reduzir uso de framer-motion em páginas de texto (ou `motion` leve); carregar `OptimizerMockup` com `dynamic({ssr:false})`; não importar MUI nas páginas de marketing; usar `priority` na LCP hero image; adicionar `loading="eager"` no hero.

### 9.8 Supabase

- Não há consultas Supabase nas páginas públicas de marketing (são estáticas) → **sem impacto no SEO de renderização.**
- APIs públicas sob `/api/v1` (license/commands) e dashboard — protegidas por auth; garantir que não estão indexáveis (robots já bloqueia `/api/` e `/dashboard/`). ✓
- Recomendação: manter conteúdo (artigos) no código (como está) em vez de migrar para Supabase, para preservar SSG.

---

## 10. CHECKLIST DE AÇÃO (ordem)

1. [ ] **C1 — Redeploy do build atual em produção e validação** (30 min). ← FAZER HOJE
2. [ ] C2 — Corrigir `lib/guides.ts` (caminho) e popular hub `/guides` (1–2 h).
3. [ ] C3 — Corrigir sitemap de regiões (1 h).
4. [ ] C4 — Corrigir canonical dos 325 guias (slug real) (2–3 h).
5. [ ] H1 — Corrigir interlinking (relatedGuides) (3–4 h).
6. [ ] H2 — 301 no root (10 min). H5 — limpar títulos (30 min). H6 — canonical buy-license (15 min).
7. [ ] H4 — JSON-LD inline (1 h).
8. [ ] H7 + M4 — Decidir estratégia multilíngue e de regiões (2 h).
9. [ ] M9 — Otimizar bundles (2 h).
10. [ ] Enviar sitemap atualizado no **Google Search Console** e **Bing Webmaster**, e reiniciar o IndexNow.
11. [ ] Iniciar **link building** (autoridade) — é o que destrava volume de verdade.

---

## 11. ANEXO — VERIFICAÇÕES CRUDAS AO VIVO (evidência)

```
GET /                     → 307 → /en
GET /en                   → 200 | Cache-Control: private, no-cache, no-store | X-Matched-Path: /[locale]
GET /en/guides            → 200 | conteúdo: "No guide found" | hreflang=9
GET /en/guides/<325 guias>→ 500 (todos testados)
GET /en/format-windows    → 500
GET /en/best-programs-to-optimize-windows → 500
56/78 landing pages EN    → 500
GET /en/regions/usa/new-york → 404  |  GET /regions/usa/new-york → 200 (sem hreflang)
GET /en/about             → 200 | hreflang=9 | canonical=/en/about
GET /en/buy-license       → 200 | canonical=/en (BUG)
robots.txt                → OK (bloqueia dashboard/api/auth/admin)
sitemap.xml               → 4.176 URLs | lastmod único 2026-06-19 | inclui ~396 /en/regions/... (404)
Compressão                → Brotli ✓ | assets estáticos imutáveis ✓
Build local (commit afe8209) → OK, 0 erros | páginas servidas 200 via next start
```
