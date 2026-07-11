-- =====================================================
-- SCRIPT COMPLETO PARA RESET DO BANCO DE DADOS
-- =====================================================
-- Execute este script para limpar e recriar tudo do zero

-- 1. Remove todas as policies existentes
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;

DROP POLICY IF EXISTS "Everyone can view services" ON public.services;
DROP POLICY IF EXISTS "Admins can manage services" ON public.services;

DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can create their own orders" ON public.orders;
DROP POLICY IF EXISTS "Users can update their own orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON public.orders;
DROP POLICY IF EXISTS "Admins can manage all orders" ON public.orders;

DROP POLICY IF EXISTS "Users can view their own payments" ON public.payments;
DROP POLICY IF EXISTS "Users can create their own payments" ON public.payments;
DROP POLICY IF EXISTS "Admins can view all payments" ON public.payments;
DROP POLICY IF EXISTS "Admins can manage all payments" ON public.payments;

DROP POLICY IF EXISTS "Users can view licenses by email" ON public.licenses;
DROP POLICY IF EXISTS "Service role can manage all licenses" ON public.licenses;

DROP POLICY IF EXISTS "Users can view devices of their licenses" ON public.license_devices;
DROP POLICY IF EXISTS "Service role can manage all devices" ON public.license_devices;

DROP POLICY IF EXISTS "Users can view their own installations" ON public.installations;
DROP POLICY IF EXISTS "Users can create their own installations" ON public.installations;
DROP POLICY IF EXISTS "Admins can view all installations" ON public.installations;
DROP POLICY IF EXISTS "Admins can manage all installations" ON public.installations;

DROP POLICY IF EXISTS "Users can view their own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Users can create their own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Users can update their own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Admins can view all tickets" ON public.tickets;
DROP POLICY IF EXISTS "Admins can manage all tickets" ON public.tickets;

DROP POLICY IF EXISTS "Users can view responses of their tickets" ON public.ticket_responses;
DROP POLICY IF EXISTS "Users can create responses for their tickets" ON public.ticket_responses;
DROP POLICY IF EXISTS "Admins can manage all ticket responses" ON public.ticket_responses;

DROP POLICY IF EXISTS "Company users can view their company" ON public.companies;
DROP POLICY IF EXISTS "Company responsible can manage their company" ON public.companies;
DROP POLICY IF EXISTS "Admins can view all companies" ON public.companies;
DROP POLICY IF EXISTS "Admins can manage all companies" ON public.companies;

DROP POLICY IF EXISTS "Users can view their company memberships" ON public.company_users;
DROP POLICY IF EXISTS "Users can update their own membership" ON public.company_users;
DROP POLICY IF EXISTS "Admins can manage all company users" ON public.company_users;

DROP POLICY IF EXISTS "Company users can view their company devices" ON public.devices;
DROP POLICY IF EXISTS "Admins can view all devices" ON public.devices;
DROP POLICY IF EXISTS "Admins can manage all devices" ON public.devices;

DROP POLICY IF EXISTS "Company users can view commands for their devices" ON public.remote_commands;
DROP POLICY IF EXISTS "Company users can create commands" ON public.remote_commands;
DROP POLICY IF EXISTS "Admins can manage all commands" ON public.remote_commands;

DROP POLICY IF EXISTS "Users can view their own notifications" ON public.notifications;
DROP POLICY IF EXISTS "Users can update their own notifications" ON public.notifications;
DROP POLICY IF EXISTS "Admins can view all notifications" ON public.notifications;
DROP POLICY IF EXISTS "Admins can manage all notifications" ON public.notifications;

DROP POLICY IF EXISTS "Users can view their own settings" ON public.user_settings;
DROP POLICY IF EXISTS "Users can update their own settings" ON public.user_settings;
DROP POLICY IF EXISTS "Users can update settings" ON public.user_settings;
DROP POLICY IF EXISTS "Admins can view all settings" ON public.user_settings;
DROP POLICY IF EXISTS "Admins can manage all settings" ON public.user_settings;

DROP POLICY IF EXISTS "Users can manage their own subscriptions" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Admins can manage all subscriptions" ON public.push_subscriptions;

DROP POLICY IF EXISTS "Users can view their own subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Admins can view all subscriptions" ON public.subscriptions;
DROP POLICY IF EXISTS "Admins can manage all subscriptions" ON public.subscriptions;

-- 2. Adiciona coluna address se não existir
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

-- =====================================================
-- CONCLUÍDO! Agora execute o DATABASE_COMPLETE.sql
-- =====================================================
