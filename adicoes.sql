-- =============================================================================
-- adicoes.sql — VOLTRIS INTERNACIONAL
-- Incrementos de schema necessários para a PARIDADE com o VOLTRIS Brasil.
--
-- Escopo desta entrega (FASE 7 — Notificações / painel administrativo):
--   Habilita a atualização (marcar como lida) das notificações, que hoje NÃO
--   possui política de UPDATE, nem para o usuário dono nem para o administrador.
--   Sem ela, RLS nega o UPDATE por padrão e o "Mark as read" (painel admin e
--   sino do usuário) falha silenciosamente.
--
-- A leitura já está coberta por políticas existentes e NÃO são recriadas aqui:
--   - "Users can view their own notifications"   (SELECT  auth.uid() = user_id)
--   - "Admin can view all notifications"          (SELECT  public.check_is_admin())
--   - "Admins can view all profiles"              (SELECT  public.check_is_admin())
--
-- SEGURANÇA:
--   * 100% aditivo e IDEMPOTENTE (DROP POLICY IF EXISTS + CREATE POLICY). Pode
--     ser executado mais de uma vez sem efeito colateral.
--   * Não Apaga dados. Não ALTERA colunas. Não Desabilita RLS em nenhuma tabela.
--   * Depende apenas de objetos já existentes: public.notifications,
--     public.profiles, public.check_is_admin() (SECURITY DEFINER).
--   * REVISÃO: aplique manualmente no projeto Supabase INTERNACIONAL. NÃO afeta
--     o banco do VOLTRIS Brasil (instâncias separadas).
-- =============================================================================

-- Garante RLS ligado em notifications (já deve estar; idempotente).
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- 1) O usuário pode marcar as PRÓPRIAS notificações como lidas/não lidas.
--    (necessário para o sino: markAsRead / markAllAsRead.)
DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
CREATE POLICY "Users can update their own notifications"
    ON public.notifications FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- 2) O administrador pode marcar QUALQUER notificação como lida no painel
--    (app/[locale]/restricted-area-admin/notifications/AdminNotificationsTab).
--    check_is_admin() é SECURITY DEFINER e evita recursão de RLS sobre profiles.
DROP POLICY IF EXISTS "Admin can update all notifications" ON public.notifications;
CREATE POLICY "Admin can update all notifications"
    ON public.notifications FOR UPDATE
    USING (public.check_is_admin())
    WITH CHECK (public.check_is_admin());

-- =============================================================================
-- FIM das adições da FASE 7.
-- Validação pós-aplicação (SQL de conferência, somente leitura):
--   SELECT policyname, cmd FROM pg_policies WHERE tablename = 'notifications' ORDER BY cmd, policyname;
-- Esperado incluir: SELECT own+admin, INSERT own, UPDATE own+admin.
-- =============================================================================
