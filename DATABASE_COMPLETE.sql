-- =====================================================
-- BANCO DE DADOS COMPLETO - VOLTRIS OPTIMIZER
-- Versão 2.0 - Sistema Completo e Funcional
-- =====================================================
-- Autor: Sistema Voltris
-- Data: 2026-04-03
-- Descrição: Schema completo para todas as funcionalidades do sistema

-- =====================================================
-- PARTE 1: EXTENSÕES E TIPOS ENUM
-- =====================================================

-- 1. ENUM para status de serviço
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'service_status') THEN
        CREATE TYPE service_status AS ENUM ('active', 'inactive', 'maintenance');
    END IF;
END$$;

-- 2. ENUM para status de pedido
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'order_status') THEN
        CREATE TYPE order_status AS ENUM ('pending', 'approved', 'in_progress', 'completed', 'cancelled', 'refunded');
    END IF;
END$$;

-- 3. ENUM para status de pagamento
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'payment_status') THEN
        CREATE TYPE payment_status AS ENUM ('pending', 'approved', 'rejected', 'refunded');
    END IF;
END$$;

-- 4. ENUM para status de licença
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'license_status') THEN
        CREATE TYPE license_status AS ENUM ('active', 'inactive', 'expired', 'suspended');
    END IF;
END$$;

-- 5. ENUM para tipo de licença
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'license_type') THEN
        CREATE TYPE license_type AS ENUM ('basic', 'professional', 'enterprise', 'gamer', 'corporate');
    END IF;
END$$;

-- 6. ENUM para status de ticket
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'ticket_status') THEN
        CREATE TYPE ticket_status AS ENUM ('open', 'in_progress', 'resolved', 'closed');
    END IF;
END$$;

-- 7. ENUM para prioridade de ticket
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'ticket_priority') THEN
        CREATE TYPE ticket_priority AS ENUM ('low', 'medium', 'high', 'urgent');
    END IF;
END$$;

-- 8. ENUM para tipo de comando remoto
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'command_type') THEN
        CREATE TYPE command_type AS ENUM ('optimize', 'restart', 'shutdown', 'cleanup', 'scan', 'update', 'custom');
    END IF;
END$$;

-- 9. ENUM para tipo de dispositivo
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'device_type') THEN
        CREATE TYPE device_type AS ENUM ('desktop', 'laptop', 'server', 'mobile');
    END IF;
END$$;

-- 10. ENUM para plataforma de dispositivo
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'device_platform') THEN
        CREATE TYPE device_platform AS ENUM ('windows', 'linux', 'macos', 'android', 'ios');
    END IF;
END$$;

-- =====================================================
-- PARTE 2: TABELAS PRINCIPAIS
-- =====================================================

-- 1. Tabela de Perfis de Usuário (profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    neighborhood TEXT,
    state TEXT,
    cep TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    is_blocked BOOLEAN DEFAULT FALSE,
    is_deleted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Adiciona coluna address se não existir (para tabelas existentes)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'profiles' 
        AND column_name = 'address'
    ) THEN
        ALTER TABLE public.profiles ADD COLUMN address TEXT;
    END IF;
END$$;

-- 2. Tabela de Serviços (services)
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    duration INTEGER NOT NULL CHECK (duration > 0), -- duração em minutos
    status service_status NOT NULL DEFAULT 'active',
    cover_image_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 3. Tabela de Pedidos (orders)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    status order_status NOT NULL DEFAULT 'pending',
    total_amount NUMERIC(10,2) NOT NULL CHECK (total_amount >= 0),
    payment_method TEXT,
    payment_id TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    completed_at TIMESTAMPTZ,
    cancelled_by UUID REFERENCES auth.users ON DELETE SET NULL,
    cancellation_reason TEXT
);

-- 4. Tabela de Pagamentos (payments)
CREATE TABLE IF NOT EXISTS public.payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
    amount NUMERIC(10,2) NOT NULL CHECK (amount >= 0),
    status payment_status NOT NULL DEFAULT 'pending',
    payment_method TEXT,
    gateway TEXT, -- stripe, pagbank, etc
    gateway_transaction_id TEXT,
    gateway_response JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    approved_at TIMESTAMPTZ
);

-- 5. Tabela de Licenças (licenses)
CREATE TABLE IF NOT EXISTS public.licenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    license_key TEXT UNIQUE NOT NULL,
    license_type license_type NOT NULL,
    license_status license_status NOT NULL DEFAULT 'active',
    expires_at TIMESTAMPTZ,
    max_devices INTEGER DEFAULT 1 CHECK (max_devices > 0),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    subscription_id TEXT, -- ID da assinatura recorrente
    last_verified_at TIMESTAMPTZ
);

-- 6. Tabela de Dispositivos de Licença (license_devices)
CREATE TABLE IF NOT EXISTS public.license_devices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    license_id UUID REFERENCES public.licenses(id) ON DELETE CASCADE,
    device_name TEXT NOT NULL,
    device_id TEXT UNIQUE NOT NULL, -- ID único do dispositivo
    hardware_fingerprint TEXT,
    ip_address INET,
    user_agent TEXT,
    platform device_platform,
    device_type device_type,
    is_active BOOLEAN DEFAULT TRUE,
    first_activated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    last_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. Tabela de Instalações (installations)
CREATE TABLE IF NOT EXISTS public.installations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    license_id UUID REFERENCES public.licenses(id) ON DELETE SET NULL,
    device_name TEXT,
    installation_date TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    status TEXT DEFAULT 'completed',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 8. Tabela de Tickets de Suporte (tickets)
CREATE TABLE IF NOT EXISTS public.tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    status ticket_status NOT NULL DEFAULT 'open',
    priority ticket_priority NOT NULL DEFAULT 'medium',
    category TEXT,
    assigned_to UUID REFERENCES auth.users ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    resolved_at TIMESTAMPTZ,
    resolution_notes TEXT
);

-- 9. Tabela de Respostas de Tickets (ticket_responses)
CREATE TABLE IF NOT EXISTS public.ticket_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    ticket_id UUID REFERENCES public.tickets(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    admin_id UUID REFERENCES auth.users ON DELETE SET NULL,
    message TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT FALSE, -- TRUE para notas internas
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- =====================================================
-- PARTE 3: SISTEMA CORPORATIVO/EMPRESAS
-- =====================================================

-- 10. Tabela de Empresas (companies)
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    cnpj TEXT UNIQUE,
    responsible_user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    is_active BOOLEAN DEFAULT TRUE,
    max_users INTEGER DEFAULT 10 CHECK (max_users > 0),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 11. Tabela de Usuários de Empresas (company_users)
CREATE TABLE IF NOT EXISTS public.company_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'user', -- admin, manager, user
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    UNIQUE(company_id, user_id)
);

-- 12. Tabela de Dispositivos Empresariais (devices)
CREATE TABLE IF NOT EXISTS public.devices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    device_id TEXT UNIQUE NOT NULL,
    platform device_platform,
    device_type device_type,
    ip_address INET,
    last_seen_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    is_online BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 13. Tabela de Comandos Remotos (remote_commands)
CREATE TABLE IF NOT EXISTS public.remote_commands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID REFERENCES public.companies(id) ON DELETE CASCADE,
    device_id UUID REFERENCES public.devices(id) ON DELETE CASCADE,
    command_type command_type NOT NULL,
    command_data JSONB,
    status TEXT NOT NULL DEFAULT 'pending', -- pending, executing, completed, failed
    created_by UUID REFERENCES auth.users ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    executed_at TIMESTAMPTZ,
    completed_at TIMESTAMPTZ,
    error_message TEXT
);

-- =====================================================
-- PARTE 4: SISTEMA DE NOTIFICAÇÕES
-- =====================================================

-- 14. Tabela de Notificações (notifications)
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    title TEXT NOT NULL,
    body TEXT,
    type TEXT, -- info, warning, error, success
    is_read BOOLEAN DEFAULT FALSE,
    action_url TEXT,
    action_text TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    read_at TIMESTAMPTZ
);

-- 15. Tabela de Configurações de Usuário (user_settings)
CREATE TABLE IF NOT EXISTS public.user_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE UNIQUE,
    email_notifications BOOLEAN DEFAULT TRUE,
    push_notifications BOOLEAN DEFAULT TRUE,
    marketing_emails BOOLEAN DEFAULT FALSE,
    language TEXT DEFAULT 'pt-br',
    theme TEXT DEFAULT 'light',
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 16. Tabela de Inscrições Push (push_subscriptions)
CREATE TABLE IF NOT EXISTS public.push_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    endpoint TEXT NOT NULL,
    keys JSONB NOT NULL, -- { p256dh, auth }
    device_type device_type,
    platform device_platform,
    is_active BOOLEAN DEFAULT TRUE,
    last_used TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- =====================================================
-- PARTE 5: SISTEMA DE ASSINATURAS
-- =====================================================

-- 17. Tabela de Assinaturas (subscriptions)
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    email TEXT NOT NULL,
    plan_type license_type NOT NULL,
    status TEXT NOT NULL DEFAULT 'ACTIVE', -- ACTIVE, CANCELED, PAST_DUE
    gateway_subscription_id TEXT, -- ID da assinatura no Stripe/PagBank
    gateway TEXT NOT NULL DEFAULT 'stripe',
    amount NUMERIC(10,2) NOT NULL CHECK (amount >= 0),
    billing_cycle TEXT NOT NULL DEFAULT 'monthly', -- monthly, yearly
    next_billing_date TIMESTAMPTZ,
    canceled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- =====================================================
-- PARTE 6: ÍNDICES E PERFORMANCE
-- =====================================================

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_admin ON public.profiles(is_admin);
CREATE INDEX IF NOT EXISTS idx_profiles_blocked ON public.profiles(is_blocked);
CREATE INDEX IF NOT EXISTS idx_profiles_deleted ON public.profiles(is_deleted);

CREATE INDEX IF NOT EXISTS idx_orders_user ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created ON public.orders(created_at);

CREATE INDEX IF NOT EXISTS idx_payments_user ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_reference ON public.payments(reference_id);

CREATE INDEX IF NOT EXISTS idx_licenses_email ON public.licenses(email);
CREATE INDEX IF NOT EXISTS idx_licenses_key ON public.licenses(license_key);
CREATE INDEX IF NOT EXISTS idx_licenses_type ON public.licenses(license_type);
CREATE INDEX IF NOT EXISTS idx_licenses_status ON public.licenses(license_status);

CREATE INDEX IF NOT EXISTS idx_license_devices_license ON public.license_devices(license_id);
CREATE INDEX IF NOT EXISTS idx_license_devices_device ON public.license_devices(device_id);
CREATE INDEX IF NOT EXISTS idx_license_devices_active ON public.license_devices(is_active);

CREATE INDEX IF NOT EXISTS idx_installations_user ON public.installations(user_id);
CREATE INDEX IF NOT EXISTS idx_installations_license ON public.installations(license_id);

CREATE INDEX IF NOT EXISTS idx_tickets_user ON public.tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON public.tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_priority ON public.tickets(priority);
CREATE INDEX IF NOT EXISTS idx_tickets_assigned ON public.tickets(assigned_to);

CREATE INDEX IF NOT EXISTS idx_ticket_responses_ticket ON public.ticket_responses(ticket_id);
CREATE INDEX IF NOT EXISTS idx_ticket_responses_user ON public.ticket_responses(user_id);

CREATE INDEX IF NOT EXISTS idx_companies_responsible ON public.companies(responsible_user_id);
CREATE INDEX IF NOT EXISTS idx_companies_active ON public.companies(is_active);

CREATE INDEX IF NOT EXISTS idx_company_users_company ON public.company_users(company_id);
CREATE INDEX IF NOT EXISTS idx_company_users_user ON public.company_users(user_id);
CREATE INDEX IF NOT EXISTS idx_company_users_role ON public.company_users(role);

CREATE INDEX IF NOT EXISTS idx_devices_company ON public.devices(company_id);
CREATE INDEX IF NOT EXISTS idx_devices_device ON public.devices(device_id);
CREATE INDEX IF NOT EXISTS idx_devices_online ON public.devices(is_online);

CREATE INDEX IF NOT EXISTS idx_remote_commands_company ON public.remote_commands(company_id);
CREATE INDEX IF NOT EXISTS idx_remote_commands_device ON public.remote_commands(device_id);
CREATE INDEX IF NOT EXISTS idx_remote_commands_status ON public.remote_commands(status);

CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_notifications_created ON public.notifications(created_at);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_user ON public.push_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_active ON public.push_subscriptions(is_active);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON public.subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_email ON public.subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON public.subscriptions(status);

-- =====================================================
-- PARTE 7: TRIGGERS E FUNÇÕES AUTOMÁTICAS
-- =====================================================

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Triggers para updated_at
CREATE OR REPLACE TRIGGER handle_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_services_updated_at
    BEFORE UPDATE ON public.services
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_orders_updated_at
    BEFORE UPDATE ON public.orders
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_payments_updated_at
    BEFORE UPDATE ON public.payments
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_licenses_updated_at
    BEFORE UPDATE ON public.licenses
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_installations_updated_at
    BEFORE UPDATE ON public.installations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_tickets_updated_at
    BEFORE UPDATE ON public.tickets
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_ticket_responses_updated_at
    BEFORE UPDATE ON public.ticket_responses
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_companies_updated_at
    BEFORE UPDATE ON public.companies
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_company_users_updated_at
    BEFORE UPDATE ON public.company_users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_devices_updated_at
    BEFORE UPDATE ON public.devices
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_remote_commands_updated_at
    BEFORE UPDATE ON public.remote_commands
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_notifications_updated_at
    BEFORE UPDATE ON public.notifications
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_user_settings_updated_at
    BEFORE UPDATE ON public.user_settings
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_push_subscriptions_updated_at
    BEFORE UPDATE ON public.push_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE OR REPLACE TRIGGER handle_subscriptions_updated_at
    BEFORE UPDATE ON public.subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, email)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email);
    RETURN NEW;
END;
$$;

-- Trigger para novo usuário
CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- PARTE 8: POLÍTICAS DE SEGURANÇA (RLS)
-- =====================================================

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.licenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.license_devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.installations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.remote_commands ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
CREATE POLICY "Admins can view all profiles" ON public.profiles
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles" ON public.profiles
    FOR UPDATE USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para services (público para leitura)
DROP POLICY IF EXISTS "Everyone can view services" ON public.services;
CREATE POLICY "Everyone can view services" ON public.services
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admins can manage services" ON public.services;
CREATE POLICY "Admins can manage services" ON public.services
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para orders
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
CREATE POLICY "Users can view their own orders" ON public.orders
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;
CREATE POLICY "Users can create their own orders" ON public.orders
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;
CREATE POLICY "Users can update their own orders" ON public.orders
    FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
CREATE POLICY "Admins can view all orders" ON public.orders
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

DROP POLICY IF EXISTS "Admins can manage all orders" ON public.orders;
CREATE POLICY "Admins can manage all orders" ON public.orders
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para payments
DROP POLICY IF EXISTS "Users can view their own payments" ON public.payments;
CREATE POLICY "Users can view their own payments" ON public.payments
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own payments" ON public.payments;
CREATE POLICY "Users can create their own payments" ON public.payments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all payments" ON public.payments;
CREATE POLICY "Admins can view all payments" ON public.payments
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

DROP POLICY IF EXISTS "Admins can manage all payments" ON public.payments;
CREATE POLICY "Admins can manage all payments" ON public.payments
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para licenses
DROP POLICY IF EXISTS "Users can view licenses by email" ON public.licenses;
CREATE POLICY "Users can view licenses by email" ON public.licenses
    FOR SELECT USING (auth.jwt() ->> 'email' = email);

DROP POLICY IF EXISTS "Service role can manage all licenses" ON public.licenses;
CREATE POLICY "Service role can manage all licenses" ON public.licenses
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para license_devices
DROP POLICY IF EXISTS "Users can view devices of their licenses" ON public.license_devices;
CREATE POLICY "Users can view devices of their licenses" ON public.license_devices
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.licenses 
            WHERE licenses.id = license_devices.license_id 
            AND licenses.email = auth.jwt()->>'email'
        )
    );

DROP POLICY IF EXISTS "Service role can manage all devices" ON public.license_devices;
CREATE POLICY "Service role can manage all devices" ON public.license_devices
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para installations
DROP POLICY IF EXISTS "Users can view their own installations" ON public.installations;
CREATE POLICY "Users can view their own installations" ON public.installations
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create their own installations" ON public.installations;
CREATE POLICY "Users can create their own installations" ON public.installations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can view all installations" ON public.installations;
CREATE POLICY "Admins can view all installations" ON public.installations
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

DROP POLICY IF EXISTS "Admins can manage all installations" ON public.installations;
CREATE POLICY "Admins can manage all installations" ON public.installations
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para tickets
CREATE POLICY "Users can view their own tickets" ON public.tickets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own tickets" ON public.tickets
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own tickets" ON public.tickets
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all tickets" ON public.tickets
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all tickets" ON public.tickets
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para ticket_responses
CREATE POLICY "Users can view responses of their tickets" ON public.ticket_responses
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.tickets 
            WHERE tickets.id = ticket_responses.ticket_id 
            AND tickets.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can create responses for their tickets" ON public.ticket_responses
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.tickets 
            WHERE tickets.id = ticket_responses.ticket_id 
            AND tickets.user_id = auth.uid()
        )
    );

CREATE POLICY "Admins can manage all ticket responses" ON public.ticket_responses
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para companies
CREATE POLICY "Company users can view their company" ON public.companies
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.company_users 
            WHERE company_users.company_id = companies.id 
            AND company_users.user_id = auth.uid()
        )
    );

CREATE POLICY "Company responsible can manage their company" ON public.companies
    FOR ALL USING (responsible_user_id = auth.uid());

CREATE POLICY "Admins can view all companies" ON public.companies
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all companies" ON public.companies
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para company_users
CREATE POLICY "Users can view their company memberships" ON public.company_users
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update their own membership" ON public.company_users
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all company users" ON public.company_users
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para devices
CREATE POLICY "Company users can view their company devices" ON public.devices
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.company_users 
            WHERE company_users.company_id = devices.company_id 
            AND company_users.user_id = auth.uid()
        )
    );

CREATE POLICY "Admins can view all devices" ON public.devices
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all devices" ON public.devices
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para remote_commands
CREATE POLICY "Company users can view commands for their devices" ON public.remote_commands
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.company_users 
            WHERE company_users.company_id = remote_commands.company_id 
            AND company_users.user_id = auth.uid()
        )
    );

CREATE POLICY "Company users can create commands" ON public.remote_commands
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.company_users 
            WHERE company_users.company_id = remote_commands.company_id 
            AND company_users.user_id = auth.uid()
        )
    );

CREATE POLICY "Admins can manage all commands" ON public.remote_commands
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para notifications
CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON public.notifications
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all notifications" ON public.notifications
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all notifications" ON public.notifications
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para user_settings
CREATE POLICY "Users can view their own settings" ON public.user_settings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own settings" ON public.user_settings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update settings" ON public.user_settings
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all settings" ON public.user_settings
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all settings" ON public.user_settings
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para push_subscriptions
CREATE POLICY "Users can view their own push subscriptions" ON public.push_subscriptions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own push subscriptions" ON public.push_subscriptions
    FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all push subscriptions" ON public.push_subscriptions
    FOR SELECT USING (auth.jwt() ->> 'is_admin'::text = 'true');

CREATE POLICY "Admins can manage all push subscriptions" ON public.push_subscriptions
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- Políticas para subscriptions
CREATE POLICY "Users can view subscriptions by email" ON public.subscriptions
    FOR SELECT USING (auth.jwt() ->> 'email' = email);

CREATE POLICY "Service role can manage all subscriptions" ON public.subscriptions
    FOR ALL USING (auth.jwt() ->> 'is_admin'::text = 'true');

-- =====================================================
-- PARTE 9: DADOS INICIAIS (SEED DATA)
-- =====================================================

-- Inserir serviços básicos
INSERT INTO public.services (name, description, price, duration, status) VALUES
('Formatação Básica', 'Backup, formatação, instalação de drivers e atualizações.', 99.90, 60, 'active'),
('Formatação Média', 'Inclui "Básica" + antivírus e otimização básica.', 149.90, 90, 'active'),
('Formatação Avançada', 'Inclui "Média" + otimização média de desempenho.', 199.90, 120, 'active'),
('Formatação Corporativa', 'Inclui "Avançada" + Pacote Office (permanente*) e otimização avançada.', 349.90, 180, 'active'),
('Formatação Gamer', 'Inclui "Avançada" + Pacote Office (opcional) e otimização extrema para jogos.', 449.90, 180, 'active'),
('Otimização Básica', 'Drivers, atualizações, correção de erros e otimização básica.', 79.90, 60, 'active'),
('Otimização Média', 'Inclui "Básica" + otimização média de performance.', 99.90, 90, 'active'),
('Otimização Avançada', 'Inclui "Média" + otimização avançada de performance.', 149.90, 120, 'active'),
('Otimização Corporativa', 'Inclui "Avançada" + otimização para ambientes corporativos.', 199.90, 150, 'active'),
('Suporte Técnico Básico', 'Suporte remoto para problemas básicos de software e hardware.', 49.90, 30, 'active'),
('Suporte Técnico Avançado', 'Suporte especializado para problemas complexos e configurações avançadas.', 99.90, 60, 'active'),
('Consultoria de Performance', 'Análise completa do sistema e recomendações de otimização.', 149.90, 90, 'active')
ON CONFLICT (name) DO NOTHING;

-- =====================================================
-- PARTE 10: VIEWS PARA CONSULTAS FACILITADAS
-- =====================================================

-- View para estatísticas do usuário
CREATE OR REPLACE VIEW public.user_stats AS
SELECT 
    u.id as user_id,
    u.email,
    p.full_name,
    COUNT(DISTINCT o.id) as total_orders,
    COUNT(DISTINCT l.id) as total_licenses,
    COUNT(DISTINCT i.id) as total_installations,
    COUNT(DISTINCT t.id) as total_tickets,
    COALESCE(SUM(CASE WHEN o.status = 'completed' THEN o.total_amount ELSE 0 END), 0) as total_spent
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
LEFT JOIN public.orders o ON u.id = o.user_id
LEFT JOIN public.licenses l ON u.email = l.email
LEFT JOIN public.installations i ON u.id = i.user_id
LEFT JOIN public.tickets t ON u.id = t.user_id
GROUP BY u.id, u.email, p.full_name;

-- View para dashboard administrativo
CREATE OR REPLACE VIEW public.admin_dashboard AS
SELECT 
    'users' as metric_type,
    COUNT(*) as total_count,
    COUNT(CASE WHEN p.is_blocked = FALSE::boolean AND p.is_deleted = FALSE::boolean THEN 1 END) as active_count,
    COUNT(CASE WHEN p.is_blocked = TRUE::boolean THEN 1 END) as blocked_count,
    0 as extra_count,
    0 as extra_amount
FROM auth.users u
JOIN public.profiles p ON u.id = p.id

UNION ALL

SELECT 
    'orders' as metric_type,
    COUNT(*) as total_count,
    COUNT(CASE WHEN o.status = 'completed' THEN 1 END) as completed_count,
    COUNT(CASE WHEN o.status = 'pending' THEN 1 END) as pending_count,
    0 as extra_count,
    COALESCE(SUM(o.total_amount), 0) as extra_amount
FROM public.orders o

UNION ALL

SELECT 
    'licenses' as metric_type,
    COUNT(*) as total_count,
    COUNT(CASE WHEN l.license_status = 'active' THEN 1 END) as active_count,
    COUNT(CASE WHEN l.expires_at < NOW() THEN 1 END) as expired_count,
    0 as extra_count,
    0 as extra_amount
FROM public.licenses l

UNION ALL

SELECT 
    'tickets' as metric_type,
    COUNT(*) as total_count,
    COUNT(CASE WHEN t.status = 'open' THEN 1 END) as open_count,
    COUNT(CASE WHEN t.status = 'resolved' THEN 1 END) as resolved_count,
    0 as extra_count,
    0 as extra_amount
FROM public.tickets t;

-- =====================================================
-- FINALIZAÇÃO
-- =====================================================

-- Comentário final
COMMENT ON SCHEMA public IS 'Banco de dados completo do sistema Voltris Optimizer v2.0';

-- Log de criação
DO $$
BEGIN
    INSERT INTO public.notifications (user_id, title, body, type, created_at)
    SELECT 
        id, 
        'Sistema Inicializado', 
        'Banco de dados Voltris v2.0 criado com sucesso', 
        'success',
        NOW()
    FROM auth.users 
    WHERE is_admin = TRUE::boolean
    LIMIT 1;
EXCEPTION WHEN OTHERS THEN
    -- Se não houver usuários admin, ignora
    NULL;
END$$;
