-- ==========================================
-- GERAR LICENÇA MANUALMENTE (SEM STRIPE)
-- Execute este SQL diretamente no Supabase SQL Editor
-- ==========================================

-- Exemplo 1: Gerar licença Standard por 1 mês
SELECT public.generate_complete_license_v3(
    p_payment_id := NULL,                    -- Manual = sem pagamento
    p_user_id := NULL,                        -- Sem usuário específico
    p_email := 'teste@voltris.com',          -- Email para teste
    p_plan_type := 'standard',                 -- Tipo: trial, standard, pro, enterprise
    p_billing_period := 'month'                 -- Período: month, year
);

-- Exemplo 2: Gerar licença Pro por 1 ano
SELECT public.generate_complete_license_v3(
    p_payment_id := NULL,
    p_user_id := NULL,
    p_email := 'pro@voltris.com',
    p_plan_type := 'pro',
    p_billing_period := 'year'
);

-- Exemplo 3: Gerar licença Enterprise por 1 mês
SELECT public.generate_complete_license_v3(
    p_payment_id := NULL,
    p_user_id := NULL,
    p_email := 'enterprise@voltris.com',
    p_plan_type := 'enterprise',
    p_billing_period := 'month'
);

-- Exemplo 4: Gerar Trial por 15 dias
SELECT public.generate_complete_license_v3(
    p_payment_id := NULL,
    p_user_id := NULL,
    p_email := 'trial@voltris.com',
    p_plan_type := 'trial',
    p_billing_period := 'month'  -- Trial ignora período, usa 15 dias fixos
);

-- ==========================================
-- VERIFICAR LICENÇAS GERADAS
-- ==========================================

-- Listar todas as licenças manuais (payment_id IS NULL)
SELECT 
    id,
    license_key,
    email,
    license_type,
    license_display_name,
    max_devices,
    expires_at,
    is_active,
    created_at
FROM public.licenses 
WHERE payment_id IS NULL 
ORDER BY created_at DESC;

-- Verificar licenças por email específico
SELECT 
    license_key,
    license_type,
    license_display_name,
    expires_at,
    created_at
FROM public.licenses 
WHERE email = 'teste@voltris.com'  -- Troque pelo email desejado
ORDER BY created_at DESC;

-- ==========================================
-- LIMPAR LICENÇAS DE TESTE (OPCIONAL)
-- ==========================================

-- Remover licenças de teste (CUIDADO!)
-- DELETE FROM public.licenses 
-- WHERE email LIKE '%@voltris.com' AND payment_id IS NULL;

SELECT 'Use os exemplos acima para gerar licenças manualmente!' as message;
