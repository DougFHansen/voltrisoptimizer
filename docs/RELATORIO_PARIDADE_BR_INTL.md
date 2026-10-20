# Relatório Final — Paridade Funcional VOLTRIS Brasil × VOLTRIS Internacional

**Missão:** paridade funcional completa entre VOLTRIS BR (referência, `D:\...\Voltris\VOLTRIS`) e VOLTRIS INTL (destino, `D:\...\Voltris\VOLTRIS INTERNACIONAL`), sem aplicar monetário/máscaras BR a dados internacionais, sem quebrar auth/compras, sem afrouxar RLS, sem sistemas paralelos, sem SQL destrutivo.

**Data:** 20/10/2026 · **Base de commits analisada:** `8f038b0..05745db` (main, já pushada ao GitHub/Vercel)

---

## 1. Veredito

O INTL está **funcionalmente par** do BR nas superfícies de usuário final e do painel admin entregues nesta missão, com identidade internacional correta (EN default, US$, domínio `www.voltrisoptimizer.com`, Supabase próprio `nooyof...`). A suíte de testes está **225/225 verde** e o **build de produção completa sem erros** (todas as rotas geradas).

**NÃO validado ao vivo (depende de infra, ver §5):** painel Emails e notificações transacionais só funcionam de verdade depois de configurar a `SUPABASE_SERVICE_ROLE_KEY` real no Vercel e aplicar o SQL no projeto `nooyof`. Nada disso foi executado contra banco — por decisão de segurança (regras inegociáveis), a entrega é código + travas estáticas, não promessa de ambiente.

## 2. Comparativo estrutural

| Superfície | BR (referência) | INTL (entregue) | Status |
|---|---|---|---|
| Dashboard rotas | `app/dashboard/*` (23 arquivos) | `app/dashboard/*` (**23 arquivos 1:1**, mesmos tamanhos de página) | ✅ paridade |
| Dashboard abas | overview·licenses·orders·pc·security | idênticas (mesmos renderizadores `activeTab`) | ✅ paridade |
| Sidebar do dashboard | sistema `.vtab` + `VoltrisIcon` | `components/dashboard/Sidebar.tsx` (mesmo sistema, já existia) | ✅ paridade |
| Admin — abas | Overview, Pedidos, Tickets, E-mails, Newsletter, Usuários, Notificações (+4 de billing, §6) | **7 abas equivalentes entregues** (Emails = nova nesta missão) | ✅ paridade no escopo portável |
| Admin — visual | sidebar `.vtab` (rail + drawer mobile + cartão de perfil) | **reescrito com o MESMO padrão visual** (FASE 12) | ✅ paridade |
| Admin — porta única | deep-link `?tab=` | deep-link `?tab=` + redirect da página standalone de orders | ✅ paridade |
| Auth | Google + confirm + sign-out + `api/v1/auth/*` | idêntica, intacta, testes verdes | ✅ verificada |
| Isolamento | instância/voltris.com.br | env-driven, instância própria `nooyof`, RLS nunca desabilitado (exceto herança documentada `installations`, §6) | ✅ verificado |
| Moeda/locale | R$/pt-BR | US$/en-US em todas as superfícies vivas (FASE anti-máscara) | ✅ corrigido |
| SEO | voltris.com.br | canonicals com slugs INTL, dns-prefetch `nooyof`, `priceCurrency` default USD | ✅ corrigido |
| i18n | PT | 14 idiomas, runtime `SiteTextTranslator`; +280 chaves da aba Emails; `validate-dicts` OK (15 dicionários / 21220 chaves) | ✅ |

## 3. Entregas por fase (evidência = commit pushado + teste travado)

| Fase | Entrega | Commit | Testes |
|---|---|---|---|
| FASE 11 | Admin Orders em **uma porta só**: deep-link `?tab=`, página standalone virou `redirect()` server-side, 6 órfãos mortos removidos (−1551 linhas), `actionUrls` de notificação consolidados | `bb5296a` | `admin-orders-dedup.test.ts` (4) |
| Anti-máscara | `R$`/`BRL`→`US$`/`USD` em NewOrderClient, CompaniesClient, WebsiteCreatorsClient, StatsCards, AdminServiceRequestsTab, default do SEOStructuredData e corpo de notificação de orders (EN/US$) | `6a3beea` | `intl-currency.test.ts` (7) |
| FASE 14 | canonicals `/create-website`·`/gaming-errors` (slugs reais, não `/criar-site`·`/erros-jogos`), dns-prefetch do projeto INTL | `f55877b` | `intl-seo.test.ts` (3) |
| FASE 6b | **Aba Emails** no admin INTL: rota `app/api/admin/emails` (guard `auth.getUser()`+`profiles.is_admin`; leitura via `createAdminClient()` service_role — tabela sem policy authenticated **por design, sem afrouxar RLS**), re-queue **aditivo** (`idempotency_key-manual-<ts>`, nunca muta histórico), UI sem Supabase no browser, +280 chaves i18n | `2ea53e4` | `admin-emails.test.ts` (4) |
| FASE 12 | Paridade visual do admin: tab-bar horizontal → **sidebar `.vtab` idêntica ao dashboard** (rail colapsável, drawer mobile animado, cartão de perfil, badge de não-lidas, deep-link preservado) | `28b85e6` | `admin-visual-parity.test.ts` (2) |
| FASE 9 | Policies UPDATE de notifications (own+admin) **consolidadas no `completo.idempotente.sql`**; `adicoes.sql` documentado como sobreposto por idempotência; trava de que RLS só pode estar desligado em `installations` (herança BR) | `05745db` | `db-consolidation.test.ts` (4) |
| FASE 5 | Paridade do dashboard **confirmada estruturalmente** (tabela §2) | — | §2 |
| FASE 8/10 | Auth e isolamento **verificados sem necessidade de alteração** | — | suíte existente |

## 4. Validação executada (nada declarado sem rodar)

- `npm test` → **225 tests / 225 pass / 0 fail** (19 arquivos de teste, incluindo os 5 novos desta missão).
- `npm run build` → compilação completa; todas as rotas (dashboard, admin, APIs v1, stripe) geradas; middleware OK.
- `node scripts/validate-dicts.mjs` → OK (15 dicionários, 21220 chaves, sem BOM).
- `npx tsc --noEmit` nos arquivos tocados → zero erros novos (erros pré-existentes fora de escopo permanecem; ver §6).
- Push confirmado em cada fase: `f55877b..2ea53e4..28b85e6..05745db → main`.

## 5. Pendências de INFRA (pré-requisito para o INTL operar 100% — não são defeitos de código)

1. **`SUPABASE_SERVICE_ROLE_KEY` no INTL ainda é placeholder** (`COLE_AQUI_A_...` no `.env.local`; configurar no Vercel). Sem ela: aba Emails, re-queue e envio do outbox retornam erro 500 controlado.
2. **Aplicar o SQL no projeto `nooyof`**: `completo.idempotente.sql` (já inclui as policies UPDATE de notifications e o bloco do `email_outbox` com policy service-role-only) ou, no mínimo, `adicoes.sql` + `supabase/migrations/20261019160000_email_outbox.sql`. Dupla aplicação é segura (idempotente).
3. **Worker de drenagem do outbox** (processa `status='pending'`) precisa existir no ambiente INTL para os e-mails saírem — herdar o mecanismo do BR, sem criar sistema paralelo.
4. **Stripe em test mode** no INTL — trocar para live keys quando o produto internacional vender (decisão de negócio, não técnica).
5. Conferência pós-aplicação (somente leitura): `SELECT policyname, cmd FROM pg_policies WHERE tablename='notifications';` → esperado SELECT own+admin, INSERT own, **UPDATE own+admin**.

## 6. Gap honesto: 4 abas de billing do BR NÃO portadas

O BR possui **Clients, Purchases, Reconcile, Refunds** (dependem de `/api/admin/{clients,purchases,reconcile,refunds}`, tabela `admin_audit_log` e `lib/billing-state.ts`). **O INTL não tem `admin_audit_log` no schema nem `lib/billing-state`** — portá-las exigiria criar schema de billing internacional "no chute", sem poder validar contra banco/Stripe live, violando as regras da missão. Ficam como **próxima fase deliberada** da plataforma, não como paridade silenciosa. (As rotas BR são Stripe-based, então são portáveis em princípio — quando houver ambiente para validar.)

Também documentados e **não** "corrigidos às cegas" (código morto/fora do escopo de dados):
- `GlobalStructuredData.tsx` — não importado por ninguém; contém `aggregateRating` 1247 e reviews fabricados (John Smith/Sarah Johnson). Remover ou reescrever com dados reais quando for ser usado.
- `seoHelpers.ts` `generateOrganizationSchema`/`generateLocalBusinessSchema` — sem callers; carregam PII BR (telefone +55, endereço São Paulo, PIX/BRL). **Nunca usar no INTL** sem reescrever.
- Guides/editorial com valores "R$" em prosa (conteúdo editorial, não máscara de dados) e `validate-cep` (validação de CEP é conceito BR; inocuo, mas inútil p/ INTL).
- `installations` com RLS desabilitado: herança 1:1 do pipeline BR (`add_link_status_events`, justificativa device-credential no próprio SQL). Em BR existe reparo posterior (`20260926000000_repair_installations_and_rls` + FORCE RLS) — recomendação: alinhar o estado final do INTL ao do BR em uma janela de manutenção, com `GRANT SELECT ... TO authenticated` reavaliado.
- `OptimizerClient` usa default `USD` do SEOStructuredData ✓; `AdminServiceRequestsTab` (não-wired) ganhou tipagem correta e US$ ✓; erros de lint pré-existentes em arquivos mortos deixados intactos.

## 7. Regras inegociáveis — conformidade

Máscaras BR removidas de dados internacionais ✅ · PT fixo eliminado nas superfícies entregues (14 idiomas) ✅ · auth/contas/compras intactas (testes + build) ✅ · RLS nunca afrouxada por esta missão (novas policies são restritivas/consolidadas; Emails via service_role em rota guardada, não via policy aberta) ✅ · sem sistemas paralelos (uma porta de Orders; policies duplicadas só por idempotência) ✅ · zero SQL destrutivo ✅ · nenhum teste declarado sem execução ✅ · tudo não-validado está declarado (§1/§5/§6) ✅.
