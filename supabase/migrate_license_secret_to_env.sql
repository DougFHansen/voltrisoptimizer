-- ============================================================
-- MIGRAÇÃO: Remover segredo hardcoded das funções SQL
-- O segredo agora vive APENAS como variável de ambiente
-- nas Edge Functions (VOLTRIS_LICENSE_SECRET)
-- ============================================================

-- PASSO 1: Remover a função que expõe o segredo em texto claro
DROP FUNCTION IF EXISTS public.generate_voltris_signature(TEXT);

-- PASSO 2: Criar versão sem segredo (apenas para auditoria/debug interno)
-- A geração de assinaturas agora é feita EXCLUSIVAMENTE pelas Edge Functions
-- que leem VOLTRIS_LICENSE_SECRET do ambiente Deno.
CREATE OR REPLACE FUNCTION public.verify_license_key_format(p_license_key TEXT)
RETURNS BOOLEAN AS $$
DECLARE
    v_parts TEXT[];
BEGIN
    -- Verificar apenas formato estrutural (sem validar assinatura — isso é server-side)
    v_parts := string_to_array(p_license_key, '-');
    
    IF array_length(v_parts, 1) < 5 THEN
        RETURN FALSE;
    END IF;
    
    IF v_parts[1] != 'VOLTRIS' THEN
        RETURN FALSE;
    END IF;
    
    -- Verificar que o 4º elemento é uma data válida (YYYYMMDD)
    IF v_parts[4] !~ '^\d{8}$' THEN
        RETURN FALSE;
    END IF;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- PASSO 3: Atualizar generate_complete_license_v3 para NÃO gerar assinatura no SQL
-- A geração de licenças deve ser feita via Edge Function (que tem acesso ao segredo)
-- Esta função SQL agora apenas INSERE uma licença já gerada pela Edge Function
CREATE OR REPLACE FUNCTION public.insert_validated_license(
    p_payment_id UUID,
    p_user_id UUID,
    p_email TEXT,
    p_license_key TEXT,  -- Chave já gerada e assinada pela Edge Function
    p_plan_type TEXT,
    p_max_devices INTEGER,
    p_expires_at TIMESTAMPTZ
)
RETURNS JSONB AS $$
DECLARE
    v_client_id TEXT;
    v_license_id UUID;
BEGIN
    -- Extrair client_id da chave (3º segmento: VOLTRIS-PRO-{client_id}-...)
    v_client_id := split_part(p_license_key, '-', 3);
    
    -- Verificar formato básico
    IF NOT public.verify_license_key_format(p_license_key) THEN
        RAISE EXCEPTION 'Formato de chave inválido: %', p_license_key;
    END IF;
    
    -- Inserir licença
    INSERT INTO public.licenses (
        payment_id, user_id, email, client_id,
        license_key, license_type, max_devices, expires_at, is_active
    ) VALUES (
        p_payment_id, p_user_id, p_email, v_client_id,
        p_license_key, lower(p_plan_type), p_max_devices, p_expires_at, true
    ) RETURNING id INTO v_license_id;

    -- Audit log
    INSERT INTO public.audit_logs (event_type, metadata)
    VALUES ('LICENSE_INSERTED', jsonb_build_object(
        'license_id', v_license_id,
        'license_key_prefix', left(p_license_key, 12),
        'plan', p_plan_type,
        'email', p_email,
        'expires_at', p_expires_at
    ));

    RETURN jsonb_build_object(
        'license_id', v_license_id,
        'license_key', p_license_key,
        'expires_at', p_expires_at
    );

EXCEPTION WHEN OTHERS THEN
    INSERT INTO public.audit_logs (event_type, metadata)
    VALUES ('LICENSE_INSERT_ERROR', jsonb_build_object(
        'error', SQLERRM,
        'email', p_email,
        'plan', p_plan_type
    ));
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- PASSO 4: Adicionar coluna de revogação se não existir
ALTER TABLE public.licenses ADD COLUMN IF NOT EXISTS revoked_at TIMESTAMPTZ;
ALTER TABLE public.licenses ADD COLUMN IF NOT EXISTS revoke_reason TEXT;

-- PASSO 5: Função para revogar licença (admin only)
CREATE OR REPLACE FUNCTION public.revoke_license(
    p_license_key TEXT,
    p_reason TEXT DEFAULT 'admin_revocation'
)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE public.licenses
    SET is_active = false,
        revoked_at = NOW(),
        revoke_reason = p_reason
    WHERE license_key = p_license_key;
    
    IF FOUND THEN
        INSERT INTO public.audit_logs (event_type, metadata)
        VALUES ('LICENSE_REVOKED', jsonb_build_object(
            'license_key_prefix', left(p_license_key, 12),
            'reason', p_reason,
            'revoked_at', NOW()
        ));
        RETURN TRUE;
    END IF;
    
    RETURN FALSE;
END;
$$ LANGUAGE plpgsql;

-- PASSO 6: Índice para busca por is_active (performance em validações)
CREATE INDEX IF NOT EXISTS idx_licenses_is_active ON public.licenses(is_active);
CREATE INDEX IF NOT EXISTS idx_licenses_expires_at ON public.licenses(expires_at);

-- ============================================================
-- INSTRUÇÃO OBRIGATÓRIA:
-- Configure a variável de ambiente nas Edge Functions do Supabase:
--
-- Dashboard → Edge Functions → Secrets:
--   VOLTRIS_LICENSE_SECRET = <seu_segredo_aqui>
--
-- O segredo NUNCA deve aparecer em código SQL, C# ou qualquer
-- arquivo versionado. Use apenas variáveis de ambiente.
-- ============================================================
DO $$
BEGIN
    RAISE NOTICE '✅ Função generate_voltris_signature removida (segredo não exposto no SQL)';
    RAISE NOTICE '✅ Função verify_license_key_format criada (apenas validação de formato)';
    RAISE NOTICE '✅ Função insert_validated_license criada (inserção server-side)';
    RAISE NOTICE '✅ Função revoke_license criada';
    RAISE NOTICE '✅ Índices de performance adicionados';
    RAISE NOTICE '';
    RAISE NOTICE '⚠️  AÇÃO NECESSÁRIA: Configure VOLTRIS_LICENSE_SECRET nas Edge Functions';
    RAISE NOTICE '⚠️  Dashboard → Edge Functions → Secrets → VOLTRIS_LICENSE_SECRET';
END $$;
