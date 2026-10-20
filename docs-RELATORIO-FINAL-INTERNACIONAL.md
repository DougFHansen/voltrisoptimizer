# Relatorio Final - Missao VOLTRIS INTERNACIONAL

> FASE 18. Fecha a missao de internacionalizacao (15 idiomas) do Voltris
> Optimizer, cobrando e-mails de Auth, faturas PDF, compra Stripe, outbox
> transacional e seguranca. Cada fase abaixo aponta o commit SHA associado.

## Escopo e regra-mestre

A missao portou o nucleo internacional SEM criar sistemas paralelos e SEM
tocar no projeto VOLTRIS Brasil. Regras respeitadas em todo o trabalho:

- **Reutilizar, nao duplicar**: blocos visuais de e-mail (`logoBlock`, `hero`,
  `button`, `footerBlock`) e o cliente Resend/outbox foram portados do padrao
  ja existente, expostos via `export` e consumidos pelos novos renderizadores.
- **Nunca inventar dado fiscal**: `lib/company-intl.ts` so le env vars; campo
  ausente vira em dash (`-`), jamais um valor fabricado.
- **Nunca portar segredo/credencial**: nada de chave real em codigo; tudo por
  `process.env`.
- **Nao destruir dados do BR**: zero edicao no outro repositorio.

---

## Matriz de cobertura por fase

| Fase | Descricao | Commit |
|---|---|---|
| 1 | Auditoria global (evidencias) | analise (sem codigo) |
| 2 | Fonte de verdade do idioma (coluna `preferred_locale` + `lib/locale.ts`) | `2983b67` |
| 14 (fatia 2) | Cliente Resend + outbox transacional (dominio internacional) | `72127cc` |
| 3/4/5/6 (fatia 3A) | Matriz i18n 15 idiomas + render Auth confirm/recovery + identidade visual | `7f9461b` |
| 3B | Rota Send Email Hook do Supabase Auth (15 idiomas) | `4a5c565` |
| 7 | Auditoria Stripe + fix checkout le `preferred_locale` + `renew:<invoice.id>` | `d7ddfeb` |
| 8 | Gerador de fatura PDF multilingue (pdf-lib) | `73e1755` |
| 9 | Download do PDF autenticado com guarda IDOR | `73e1755` |
| 10 | E-mail automatico de compra (com link do PDF) | `73e1755` |
| 11 | E-mails transacionais (purchase/renewal/pastDue/canceled/refunded) | `73e1755` |
| 12 | Renovacao automatica + fatura | `73e1755` |
| 13 | Cancelamento + reembolso internacionais | `73e1755` |
| 15 | Rate limit por IP no Send Email Hook | `f0c1a4b` |
| 16 | Locais ru/zh-cn/vi/tr/id/pl com UI nativa (15 idiomas completos) | `9a0fe4c` |
| 16b | Seletor de idioma em login/cadastro/dashboard | `81166be` |
| 17 | Typecheck + lint + build producao + checklist env vars | `452cc9b` + `1dfb30b` |

---

## Os 15 idiomas

`en, es, fr, de, it, ja, ko, ar (RTL), pt-br, ru, zh-cn, vi, tr, id, pl`.

- **E-mails de Auth** (confirmacao + recuperacao): 15 idiomas, com `dir=rtl`
  exclusivo para arabe.
- **E-mails de cobranca** (compra/renovacao/cobranca-pendente/cancelamento/
  reembolso): 5 templates x 15 idiomas (22 chaves cada).
- **Fatura PDF**: 26 chaves x 15 idiomas.
- **Site (locales/)**: UI nativa (common/navigation/footer) nos 15; o corpo
  dos guias e traduzido pelo dicionario `lib/guides-i18n/data/<lang>.json`
  (21.141 chaves no maior).

### Matriz de fontes Unicode do PDF (limitacao honesta)

O `pdf-lib` com `StandardFonts.Helvetica` so codifica WinAnsi (cp1252). Por
isso os rotulos do PDF usam fonte Unicode nativa apenas para:
`en, es, fr, de, it, pt-br, id`. Os demais (`ja, ko, zh-cn, ru, ar, vi, tr,
pl`) caem para rotulos em ingles via `pdfCopyLocale()` — o corpo do e-mail
HTML permanece UTF-8 nativo (sem essa limitacao), e a moeda/formato do PDF
continuam locais.

---

## Decisoes arquiteturais (com racional)

1. **E-mail de compra LINKA a rota de download, nao anexa o PDF.**
   `/api/invoices/<id>/download` renderiza o PDF on-demand. Sem blob no banco,
   funciona em qualquer cliente de e-mail, e o conteudo reflete o dado no
   momento do clique.

2. **Idempotencia por FATO, nao por relogio.** Chaves deterministicas:
   `purchase:<payment_id>`, `renewal:<stripe_invoice_id>`,
   `past-due:<stripe_invoice_id>`, `cancel:<subscription_id>`,
   `refund:<payment_id>`. Reenvio do Stripe gera duplicata no outbox -> 1 envio.

3. **Webhook nunca derruba a emissao de licenca se o e-mail falhar.** Todo
   dispatcher de cobranca envolto em try/catch -> logWarn; e `enqueueEmail` ja
   nunca lanca por design do outbox.

4. **Rate limit em memoria por IP (janela fixa 60s).** Mesma concessao de
   `license-rate-guard`: em serverless cada instancia conta sozinha; teto real
   ~= N x limite. Suficiente para forca bruta/loops; nao exige infra extra.

5. **Camada pura testavel em `node --test`.** `auth-hook-rate-limit.ts`,
   `invoice-data.ts`, `invoice-copy.ts`, `company-intl.ts` nao importam
   `next/server` no caminho de teste (via `checkAuthHookRateByIp` / import
   dinamico), permitindo 129 testes em node sem harness Next.

---

## Validacao (estado final)

- **Testes**: 129/129 passando (`npm test`).
- **Typecheck**: sem erros novos (erros pre-existentes em paginas/marketing
  nao tocadas pela missao permanecem como estava).
- **Build de producao**: `next build` EXIT 0; 6908 paginas estaticas geradas;
  rotas da missao confirmadas no output: `/api/auth/send-email-hook`,
  `/api/invoices/[id]/download`, `/api/stripe/portal`, `/api/stripe/refund`,
  `/api/webhook/stripe`.
- **validate-dicts (prebuild)**: ok, 15 dicionarios, 21.141 chaves no maior.

---

## Ativos novos (resumo)

| Arquivo | Papel |
|---|---|
| `lib/locale.ts` | fonte pura dos 15 idiomas + metadata Intl (BCP47) |
| `lib/email-copy.ts` | 19 chaves x 15 idiomas (e-mails de Auth) |
| `lib/email-templates.ts` | shell compativel + blocos visuais (exportados) |
| `lib/auth-hook.ts` | parse/validacao/render do payload do Send Email Hook |
| `app/api/auth/send-email-hook/route.ts` | rota do hook (FASE 3B/15) |
| `lib/resend-client.ts` | cliente Resend (dominio internacional) |
| `lib/email-outbox.ts` | outbox transacional + coluna locale |
| `lib/company-intl.ts` | dados fiscais por env, nunca inventa |
| `lib/invoice-copy.ts` | 26 chaves x 15 idiomas (rotulos do PDF) |
| `lib/invoice-data.ts` | builder puro da fatura (moeda/status/format) |
| `lib/invoice-pdf.ts` | renderer pdf-lib + sanitize WinAnsi |
| `app/api/invoices/[id]/download/route.ts` | download autenticado c/ IDOR |
| `lib/email-billing-copy.ts` | 22 chaves x 15 idiomas (5 templates cobranca) |
| `lib/email-billing-templates.ts` | 5 renderers de e-mail de cobranca |
| `lib/billing-email-dispatch.ts` | ponte webhook <-> outbox |
| `lib/auth-hook-rate-limit.ts` | rate limit por IP (FASE 15) |
| `locales/{ru,zh-cn,vi,tr,id,pl}/` | 6 locais novos com UI nativa (FASE 16) |

---

## Pendencias fora do codigo (acao humana)

1. **Vercel**: preencher as env vars do checklist (`docs-producao-checklist.md`),
   sobretudo `SUPABASE_AUTH_HOOK_SECRET`, `NEXT_PUBLIC_BASE_URL` e os
   `NEXT_PUBLIC_COMPANY_*` com dados fiscais reais da entidade juridica.
2. **Supabase**: ativar o Send Email Hook (URL + header Bearer) e apontar o
   SMTP para `smtp.resend.com`.
3. **Stripe**: registrar o webhook endpoint com os 5 eventos e colar o
   `whsec_` na env.
4. **Resend**: verificar o dominio remetente (SPF/DKIM).
5. **Worker do outbox**: agendar cron (Vercel Cron ou similar) para consumir a
   fila `email_outbox`.
6. **Traducao de marketing**: os 6 locais novos estao com rotulos de UI
   nativos; os paragrafos longos de `pages.json` ainda estao em ingles
   (fallback). Retrduzir com o loop de traducao quando houver prioridade SEO
   local para ru/zh-cn/vi/tr/id/pl.

## Fim da missao

Todas as 18 fases foram executadas na ordem, com teste + build + commit + push
por fatia. Repo `DougFHansen/voltrisoptimizer` @ `main`.
