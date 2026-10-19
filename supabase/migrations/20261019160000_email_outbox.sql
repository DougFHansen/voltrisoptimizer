-- ============================================================================
-- 20261019160000_email_outbox.sql  (VOLTRIS INTERNACIONAL — FASE 14)
--
-- OUTBOX TRANSACIONAL DE E-MAIL (Resend). Porta da migração equivalente do
-- VOLTRIS Brasil, adaptada ao INTL (coluna `locale` a mais, para auditoria do
-- idioma resolvido por mensagem — requisito da missão de registrar o idioma).
--
-- Auditado em 2026-10-19 contra o schema INTL (completo.idempotente.sql): NÃO
-- existe nenhuma tabela de fila/outbox (verificado `email_outbox`, `email_queue`,
-- `emails`, `email_log`). `services/emailService.ts` (morto) era o único "envio"
-- e não é chamado por ninguém. Esta tabela é ADITIVA, não destrutiva.
--
-- DECISÕES:
--   - A tabela é a FONTE DA VERDADE do envio (memória serverless morre em cold
--     start, então tentativas/retry/id da mensagem moram aqui).
--   - `idempotency_key` ÚNICO: impede e-mail duplicado quando a Stripe reenvia
--     o webhook.
--   - RLS ligado SEM policy para anon/authenticated (guarda corpo de e-mail e
--     endereço alheios). Acesso só via service_role (backend) após checar
--     profiles.is_admin. Isso atende "não entregar documentos/e-mails alheios".
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.email_outbox (
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    template_type       text NOT NULL,

    -- Determinística a partir do FATO de negócio, nunca relógio/aleatório.
    -- MESMA chave enviada como header Idempotency-Key da Resend.
    idempotency_key     text NOT NULL,

    recipient_email     text NOT NULL,
    user_id             uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    payment_id          uuid REFERENCES public.payments(id) ON DELETE SET NULL,
    license_key         text,
    subscription_id     text,

    -- Idioma RESOLVIDO para esta mensagem (fase i18n). Somente auditoria; o
    -- conteúdo já vai renderizado abaixo.
    locale              text,

    -- Conteúdo JÁ RENDERIZADO (recuperação/auditoria; retry não re-renderiza).
    subject             text NOT NULL,
    html_body           text NOT NULL,
    text_body           text,

    attachment_name     text,
    attachment_content  text,
    attachment_size     integer,

    status              text NOT NULL DEFAULT 'pending',
    provider_message_id text,

    attempts            integer NOT NULL DEFAULT 0,
    available_at        timestamptz NOT NULL DEFAULT NOW(),
    last_error          text,
    last_error_kind     text,
    sent_at             timestamptz,

    -- ENTREGA separada de `status` (missão: "aceito" != "entregue").
    delivery_status     text,
    delivered_at        timestamptz,
    opened_at           timestamptz,
    delivery_flag       text,
    delivery_flag_at    timestamptz,

    meta                jsonb,

    created_at          timestamptz NOT NULL DEFAULT NOW(),
    updated_at          timestamptz NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------------------
-- 1. IDEMPOTÊNCIA — índice ÚNICO (não parcial): qualquer repetição é rejeitada.
-- ---------------------------------------------------------------------------
CREATE UNIQUE INDEX IF NOT EXISTS uniq_email_outbox_idempotency_key
    ON public.email_outbox (idempotency_key);

-- ---------------------------------------------------------------------------
-- 2. ÍNDICES DE OPERAÇÃO
-- ---------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_email_outbox_ready
    ON public.email_outbox (available_at)
    WHERE status IN ('pending', 'processing');

CREATE INDEX IF NOT EXISTS idx_email_outbox_status
    ON public.email_outbox (status, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_email_outbox_user
    ON public.email_outbox (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_email_outbox_provider_id
    ON public.email_outbox (provider_message_id)
    WHERE provider_message_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_email_outbox_delivery_flag
    ON public.email_outbox (delivery_flag_at DESC)
    WHERE delivery_flag IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_email_outbox_template_failed
    ON public.email_outbox (template_type, created_at DESC)
    WHERE status = 'failed';

-- ---------------------------------------------------------------------------
-- 3. updated_at automático
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at_email_outbox()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at := NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_email_outbox_updated_at ON public.email_outbox;
CREATE TRIGGER tr_email_outbox_updated_at
    BEFORE UPDATE ON public.email_outbox
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at_email_outbox();

-- ---------------------------------------------------------------------------
-- 4. SEGURANÇA — RLS ligado; NENHUMA policy para anon/authenticated. Só
--    service_role enxerga a tabela (o navegador jamais lê este histórico).
-- ---------------------------------------------------------------------------
ALTER TABLE public.email_outbox ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON public.email_outbox FROM PUBLIC, anon, authenticated;
GRANT ALL ON public.email_outbox TO service_role;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'email_outbox' AND policyname = 'service role only email_outbox'
    ) THEN
        CREATE POLICY "service role only email_outbox"
            ON public.email_outbox FOR ALL TO service_role
            USING (true) WITH CHECK (true);
    END IF;
END $$;

-- ---------------------------------------------------------------------------
-- 5. View de diagnóstico (somente leitura)
-- ---------------------------------------------------------------------------
CREATE OR REPLACE VIEW public.email_outbox_health
WITH (security_invoker = true) AS
SELECT
    status,
    count(*)::int AS total,
    min(created_at)   AS oldest_created_at,
    min(available_at) AS next_available_at,
    count(*) FILTER (WHERE last_error_kind = 'RATE_LIMIT')::int AS rate_limited,
    count(*) FILTER (WHERE last_error_kind IN ('CONFIG', 'AUTH', 'SENDER'))::int AS config_errors
FROM public.email_outbox
GROUP BY status;

NOTIFY pgrst, 'reload schema';
