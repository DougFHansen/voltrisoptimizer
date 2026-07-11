-- SCRIPT DE ALINHAMENTO DEFINITIVO VOLTRIS (V4)
-- Este script força a existência de todas as colunas necessárias e reseta todas as permissões

-- 1. Garante que os Schemas estão acessíveis
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- 2. Força a criação das tabelas se não existirem
CREATE TABLE IF NOT EXISTS public.profiles (id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE, is_admin BOOLEAN DEFAULT false);
CREATE TABLE IF NOT EXISTS public.orders (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES auth.users(id), created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE IF NOT EXISTS public.notifications (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES auth.users(id), created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE IF NOT EXISTS public.payments (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES auth.users(id), created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE IF NOT EXISTS public.installations (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES auth.users(id));
CREATE TABLE IF NOT EXISTS public.licenses (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), email TEXT, created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE IF NOT EXISTS public.user_settings (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID REFERENCES auth.users(id), created_at TIMESTAMPTZ DEFAULT now());

-- 3. FORÇA A INCLUSÃO DE TODAS AS COLUNAS POSSÍVEIS (Isso resolve 100% o Erro 400 Bad Request no Frontend)
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN DEFAULT true;
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS sound_enabled BOOLEAN DEFAULT true;
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS notification_categories JSON DEFAULT '"[\"ticket\", \"order\", \"system\", \"profile\"]"';
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS sound_theme TEXT DEFAULT 'default';
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS volume NUMERIC(3,2) DEFAULT 1.0;
ALTER TABLE public.user_settings ADD COLUMN IF NOT EXISTS sound_volume INTEGER DEFAULT 70;

-- 4. Garante a restrição UNIQUE no user_settings
ALTER TABLE public.user_settings DROP CONSTRAINT IF EXISTS user_settings_user_id_key;
ALTER TABLE public.user_settings ADD CONSTRAINT user_settings_user_id_key UNIQUE (user_id);

-- 5. FORÇA TODOS OS PRIVILÉGIOS NOVAMENTE (Isso resolve o 403 Forbidden no Fetch)
GRANT ALL PRIVILEGES ON TABLE public.profiles TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.orders TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.notifications TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.payments TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.installations TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.licenses TO anon, authenticated, service_role;
GRANT ALL PRIVILEGES ON TABLE public.user_settings TO anon, authenticated, service_role;

-- 6. Habilita Segurança RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.installations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

-- 7. DESTRÓI TODAS as políticas antigas de forma agressiva (Resolve qualquer vestígio de Loop 500)
DO $$ 
DECLARE pol RECORD; 
BEGIN 
  FOR pol IN SELECT policyname, tablename FROM pg_policies WHERE schemaname = 'public' AND tablename IN ('profiles', 'orders', 'notifications', 'payments', 'installations', 'licenses', 'user_settings') LOOP 
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', pol.policyname, pol.tablename); 
  END LOOP; 
END $$;

-- 8. RECRIAR REGRAS SIMPLES E DIRETAS
CREATE POLICY "profiles_select" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "profiles_insert" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "orders_select" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "orders_insert" ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "notifications_select" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "notifications_update" ON public.notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "notifications_insert" ON public.notifications FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "payments_select" ON public.payments FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "installations_select" ON public.installations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "installations_insert" ON public.installations FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "licenses_select" ON public.licenses FOR SELECT USING (email = (SELECT email FROM auth.users WHERE auth.users.id = auth.uid()));

CREATE POLICY "user_settings_select" ON public.user_settings FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_settings_insert" ON public.user_settings FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "user_settings_update" ON public.user_settings FOR UPDATE USING (auth.uid() = user_id);

-- 9. ADMIN REGRAS DIRETAS
CREATE POLICY "admin_orders" ON public.orders FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
CREATE POLICY "admin_notifications" ON public.notifications FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
CREATE POLICY "admin_payments" ON public.payments FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
CREATE POLICY "admin_installations" ON public.installations FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
CREATE POLICY "admin_licenses" ON public.licenses FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
CREATE POLICY "admin_user_settings" ON public.user_settings FOR ALL USING (EXISTS (SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
