# Checklist de Producao - Voltris Internacional

> FASE 17 da missao VOLTRIS INTERNACIONAL. Este documento lista TUDO que precisa
> ser configurado manualmente nos paineis (Vercel / Supabase / Stripe / Resend)
> para as funcionalidades multilingues entrarem em vigor. Nada aqui e codigo;
> e ativacao de servico.

---

## 1. Variaveis de ambiente (Vercel -> Settings -> Environment Variables)

### 1.1 Obrigatorias (o app nao sobe / funcionalidade quebra sem elas)

| Variavel | Onde e usada | Descricao |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | lib/supabase | URL do projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | lib/supabase | anon key publica |
| `SUPABASE_SERVICE_ROLE_KEY` | webhook, rotas admin, outbox | service_role (NUNCA prefixar NEXT_PUBLIC; e secreta) |
| `STRIPE_SECRET_KEY` | lib/stripe, checkout, refund | chave secreta Stripe (sk_live_ em producao) |
| `STRIPE_WEBHOOK_SECRET` | app/api/webhook/stripe | segredo do endpoint de webhook (whsec_) |
| `RESEND_API_KEY` | lib/resend-client | chave da API Resend (re_...) |
| `RESEND_FROM_EMAIL` | envio de e-mail | remetente verificado (ex: billing@voltris.com) |
| `SUPABASE_AUTH_HOOK_SECRET` | app/api/auth/send-email-hook | segredo compartilhado do Send Email Hook |
| `NEXT_PUBLIC_BASE_URL` | links de e-mail, invoice download | URL publica do site (ex: https://voltrisoptimizer.com) |

### 1.2 Identidade visual / dominio de e-mail

| Variavel | Descricao |
|---|---|
| `RESEND_VERIFIED_DOMAIN` | dominio verificado na Resend (para SPF/DKIM) |
| `RESEND_FROM_NAME` | nome de exibicao do remetente (ex: "Voltris") |
| `VOLTRIS_EMAIL` | e-mail institucional de contato |

### 1.3 Dados fiscais da empresa (aparecem na fatura PDF)

O sistema NUNCA inventa dado fiscal. Se uma variavel estiver ausente, a fatura
mostra travessao (em dash). Preencha com os dados REAIS da sua entidade
juridica no pais de venda:

| Variavel | Descricao |
|---|---|
| `NEXT_PUBLIC_COMPANY_LEGAL_NAME` | razao social |
| `NEXT_PUBLIC_COMPANY_DISPLAY_NAME` | nome de exibicao (default "Voltris") |
| `NEXT_PUBLIC_COMPANY_ADDRESS_LINE1` | endereco linha 1 |
| `NEXT_PUBLIC_COMPANY_ADDRESS_LINE2` | endereco linha 2 |
| `NEXT_PUBLIC_COMPANY_CITY` | cidade |
| `NEXT_PUBLIC_COMPANY_REGION` | estado / provincia |
| `NEXT_PUBLIC_COMPANY_POSTAL_CODE` | CEP / postal code |
| `NEXT_PUBLIC_COMPANY_COUNTRY` | ISO 3166-1 alpha-2 (US, DE, JP, BR...) |
| `NEXT_PUBLIC_COMPANY_TAX_ID` | VAT / EIN / GST / CNPJ |
| `NEXT_PUBLIC_COMPANY_TAX_ID_LABEL` | rotulo do tax id (VAT, EIN, GST...) |
| `NEXT_PUBLIC_COMPANY_EMAIL` | e-mail fiscal (default support@voltris.com) |
| `NEXT_PUBLIC_COMPANY_PHONE` | telefone |
| `NEXT_PUBLIC_COMPANY_WEBSITE` | site (default https://voltris.com) |
| `NEXT_PUBLIC_COMPANY_LEGAL_NOTE` | nota legal de rodape da fatura |


---

## 2. Supabase Auth - Send Email Hook

1. Painel Supabase -> **Authentication -> URL Configuration -> Send Email Hook**.
2. Ative o hook e configure:
   - **Hook URL**: `https://SEU_DOMINIO/api/auth/send-email-hook`
   - **Authorization header**: `Bearer <SUPABASE_AUTH_HOOK_SECRET>` (o MESMO
     valor da env var na Vercel).
   - **Maximum request duration**: 10s (default OK).
3. SMTP do Supabase deve apontar para a Resend (para o hook usar o dominio
   verificado):
   - Host: `smtp.resend.com`
   - User: `resend`
   - Password: sua `RESEND_API_KEY`
   - Port: `465` (SSL/TLS)
4. Valide com um GET de config-check (protegido pelo mesmo segredo):
   `curl -H "Authorization: Bearer <SECRET>" https://SEU_DOMINIO/api/auth/send-email-hook`
   -> responde `{ ok: true, service: "voltris-send-email-hook" }`.

Cobertura de idioma dos e-mails de Auth (FASE 3/4/5): os 15 idiomas, com RTL
para arabe. Confirmacao de conta (kind=confirmation) e recuperacao de senha
(kind=recovery) usam `profiles.preferred_locale` / header Accept-Language /
fallback `en`.

---

## 3. Stripe - Webhook

1. Painel Stripe -> **Developers -> Webhooks -> Add endpoint**.
2. Endpoint URL: `https://SEU_DOMINIO/api/webhook/stripe`.
3. Versao da API: use a corrente (a rota idempotente por `event.id`).
4. Eventos assinados (marque TODOS abaixo):
   - `checkout.session.completed` (dispara emissao de licenca + e-mail de compra)
   - `invoice.paid` (renovacao -> e-mail de renovacao + fatura)
   - `invoice.payment_failed` (past due -> e-mail de cobranca pendente)
   - `customer.subscription.deleted` (cancelamento -> revogacao + e-mail)
   - `charge.refunded` (reembolso -> e-mail de reembolso)
5. Copie o **Signing secret** (`whsec_...`) para `STRIPE_WEBHOOK_SECRET` na
   Vercel.

Idempotencia das chaves de e-mail de cobranca (deterministicas por FATO):
`purchase:<payment_id>`, `renewal:<stripe_invoice_id>`,
`past-due:<stripe_invoice_id>`, `cancel:<subscription_id>`,
`refund:<payment_id>`. Reenvios do Stripe -> duplicata no outbox -> 1 envio.

---

## 4. Outbox de e-mail (tabela + worker)

O envio de e-mail transacional (compra/renovacao/cobranca/cancelamento/reembolso)
passa por uma tabela `email_outbox` com reserva atomica + backoff exponencial
com jitter.

1. **Tabela** (ja esta em `supabase/migrations`; confirme que a de `email_outbox`
   foi aplicada no projeto internacional):
   - colunas minimas: id, to, subject, html, text, idempotency_key (unique),
     status, attempts, next_attempt_at, last_error, created_at.
2. **Worker**: ha uma rota/cron que consome a fila. Configure um Vercel Cron ou
   GitHub Action agendada para acionar o worker a cada 1-5 min.
3. `RESEND_API_KEY` + `RESEND_FROM_EMAIL` devem estar presentes para o worker.
4. Resend entrega; falha transitoria -> retry; falha 4xx -> marca nao repetivel.

---

## 5. Rate limit do Send Email Hook (FASE 15)

Na memoria, por IP, janela fixa 60s: POST 20/min, GET 10/min. Estouro -> HTTP
429 + `Retry-After`. Limitacao honesta em serverless: cada instancia conta
sozinha (teto real ~= N x limite); ja barra forca bruta e loops de script.
Nao requer configuracao de env var.

---

## 6. Teste de fumaca pos-deploy (checklist manual)

- [ ] Criar conta -> recebe e-mail de confirmacao no idioma do navegador.
- [ ] Recuperar senha -> e-mail de recovery no idioma do perfil.
- [ ] Checkout em moeda local -> licenca emitida + e-mail de compra com link
      de download da fatura.
- [ ] `/api/invoices/<id>/download` -> baixa PDF no idioma do perfil (ou
      `?lang=` forcado); IDOR: outro usuario NAO baixa fatura alheia (403).
- [ ] Renovacao automatica -> e-mail de renovacao + nova fatura.
- [ ] Pagamento falho -> e-mail de cobranca pendente (past due).
- [ ] Cancelamento -> revogacao + e-mail de cancelamento.
- [ ] Reembolso -> e-mail de reembolso.
- [ ] Arabe -> e-mails renderizam `dir="rtl"` corretamente.
