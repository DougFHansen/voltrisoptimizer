$ErrorActionPreference = 'Stop'
$BR   = 'D:\Minhas Coisas\Minhas Coisas\Voltris\VOLTRIS'
$INTL = 'D:\Minhas Coisas\Minhas Coisas\Voltris\VOLTRIS INTERNACIONAL'
$out  = Join-Path $INTL 'completo.sql'

# Ordem cronologica real do schema do BR: arquivos-origem (supabase root) -> services -> migrations (ascendente).
$partA = @(
  'supabase\setup_license_automation.sql',
  'supabase\fix_license_system.sql',
  'supabase\payments-table.sql',
  'supabase\payments-table-minimal.sql',
  'supabase\setup_telemetry.sql',
  'supabase\setup_remote_commands.sql',
  'supabase\setup_subscriptions.sql',
  'supabase\migrate_add_missing_columns.sql',
  'supabase\add_gpu_disk_fields.sql',
  'supabase\add_pc_name_field.sql',
  'supabase\add_license_fields.sql',
  'supabase\add_license_display_name_field.sql',
  'supabase\create_trial_activations_table.sql',
  'supabase\add_link_status_events.sql',
  'supabase\fix_existing_installations.sql',
  'supabase\fix_telemetry_final.sql',
  'supabase\FIX_STRIPE_LICENSE.sql',
  'supabase\FIX_LICENSE_COUNTER_SYNC.sql',
  'supabase\FIX_RLS_LEAK.sql',
  'supabase\FIX_RLS_RECURSION.sql',
  'supabase\migrate_license_secret_to_env.sql',
  'supabase\update_hostnames.sql'
)
$partB = @(
  'services\enterprise-schema.sql',
  'services\telemetry-schema.sql',
  'services\session-schema.sql',
  'services\mock-payment-rpc.sql',
  'services\fix-create-company-rpc.sql',
  'services\fix-rls-permissions.sql'
)

$hdr = @'
-- ============================================================================
-- completo.sql  --  VOLTRIS INTERNACIONAL (novo projeto Supabase proprio)
-- ============================================================================
-- Gerado a partir do schema CANONICO do site BR (fonte da verdade), aplicando
-- os arquivos-migracao na mesma ordem cronologica com que o banco do BR foi
-- construido: arquivos de origem (setup/add/fix) -> services -> migrations
-- em ordem crescente. Assim o projeto internacional converge para o MESMO
-- estado final do BR (auth de contas, Stripe/webhook, emissao/renovacao de
-- licenca, pedidos, device-link / "Meu Computador" / comandos remotos).
--
-- COMO APLICAR (projeto internacional VAZIO):
--   Rode este arquivo inteiro no SQL Editor do novo projeto
--   (https://nooyofqlmnyaxwlbtqfx.supabase.co). Todos os objetos usam guards
--   (IF NOT EXISTS / DO blocks / CREATE OR REPLACE / DROP IF EXISTS), entao o
--   resultado e consistente. As tabelas `auth.users`/`auth` ja existem (Supabase).
--
-- PRE-REQUISITOS (fora do SQL):
--   * Extensao pgcrypto (habilitada por alguns arquivos; tambem garantida no novo
--     projeto). pg_net / vault apenas se algum arquivo usar.
--   * auth.users + trigger handle_new_user (criada aqui) => perfis no cadastro.
-- ============================================================================
-- ============================================================================
'@

$bootstrap = @'
-- ============================================================================
-- BOOTSTRAP: tabelas-base que preexistiam no BR (nunca viraram .sql no repo).
--   orders, data_retention_policies, deploy_registry  = EXATAS (colunas/tipos/
--     checks/indices lidos do banco BR real via information_schema).
--   feature_usage_intelligence, feature_cost_tracking, telemetry_health_metrics,
--   telemetry_access_audit = RECONSTRUIDAS a partir dos INSERT/ALTER das
--     migrations enterprise 20260208_* (essas 4 nem existem no BR; criadas para
--     o script rodar limpo num projeto vazio). Nao sao usadas pelo site/app.
-- ============================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  service_id text,
  service_name text,
  service_description text,
  plan_type text,
  final_price numeric(10,2) NOT NULL,
  payment_method text,
  status text NOT NULL DEFAULT 'pending',
  payment_status text NOT NULL DEFAULT 'pending',
  notes text,
  scheduling_type text DEFAULT 'now',
  appointment_datetime timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  total numeric(10,2) DEFAULT 0,
  items jsonb DEFAULT '[]'::jsonb,
  cancelled_by text,
  CONSTRAINT orders_final_price_check CHECK (final_price >= 0),
  CONSTRAINT orders_payment_status_check CHECK (payment_status = ANY (ARRAY['pending','paid','failed','refunded'])),
  CONSTRAINT orders_scheduling_type_check CHECK (scheduling_type = ANY (ARRAY['now','scheduled'])),
  CONSTRAINT orders_status_check CHECK (status = ANY (ARRAY['pending','scheduled','processing','completed','cancelled','Em processamento','Concluído','Cancelado'])),
  CONSTRAINT orders_cancelled_by_check CHECK (cancelled_by = ANY (ARRAY['client','admin']))
);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_service_id ON public.orders(service_id);
CREATE INDEX IF NOT EXISTS idx_orders_service_name ON public.orders(service_name);
CREATE INDEX IF NOT EXISTS idx_orders_plan_type ON public.orders(plan_type);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON public.orders(payment_status);
CREATE INDEX IF NOT EXISTS idx_orders_scheduling_type ON public.orders(scheduling_type);
CREATE INDEX IF NOT EXISTS idx_orders_appointment_datetime ON public.orders(appointment_datetime);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);

CREATE TABLE IF NOT EXISTS public.data_retention_policies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type character varying(255) NOT NULL UNIQUE,
  retention_days integer NOT NULL,
  auto_delete boolean DEFAULT true,
  last_cleanup_at timestamp with time zone,
  next_cleanup_at timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.deploy_registry (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deploy_version character varying(100) NOT NULL UNIQUE,
  git_commit_hash character varying(100),
  git_branch character varying(255),
  deployed_at timestamp with time zone NOT NULL,
  deployed_by character varying(255),
  release_notes text,
  feature_flags_snapshot jsonb,
  environment character varying(50) DEFAULT 'production',
  build_number character varying(100),
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT valid_environment CHECK (environment::text = ANY (ARRAY['development','staging','production']::text[]))
);
CREATE INDEX IF NOT EXISTS idx_deploy_time ON public.deploy_registry(deployed_at DESC);
CREATE INDEX IF NOT EXISTS idx_deploy_version ON public.deploy_registry(deploy_version);

CREATE TABLE IF NOT EXISTS public.feature_usage_intelligence (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  feature_name text NOT NULL,
  period_start timestamp with time zone,
  period_end timestamp with time zone,
  total_users integer, active_users integer, new_users integer, total_events integer,
  success_rate numeric, avg_duration_ms numeric, abandonment_rate numeric, friction_score numeric,
  user_segments jsonb, insights jsonb, recommendations jsonb,
  company_id uuid,
  created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.feature_cost_tracking (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  feature_name text NOT NULL,
  period_start timestamp with time zone,
  period_end timestamp with time zone,
  compute_cost_usd numeric, storage_cost_usd numeric, bandwidth_cost_usd numeric, ai_api_cost_usd numeric,
  total_users integer, total_events integer, revenue_generated_usd numeric, roi_percentage numeric,
  cost_per_user numeric, cost_per_event numeric,
  company_id uuid,
  created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.telemetry_health_metrics (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  metric_timestamp timestamp with time zone NOT NULL DEFAULT now(),
  events_received integer, events_validated integer, events_rejected integer, events_stored integer,
  rejection_reasons jsonb,
  avg_ingestion_latency_ms numeric, p95_ingestion_latency_ms numeric, p99_ingestion_latency_ms numeric,
  gateway_status text, database_status text
);
CREATE TABLE IF NOT EXISTS public.telemetry_access_audit (
  id bigint GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  access_type text,
  resource_type text,
  resource_id uuid,
  user_id uuid,
  company_id uuid,
  ip_address inet,
  metadata jsonb,
  created_at timestamp with time zone DEFAULT now()
);
'@

$tail = @'
-- ============================================================================
-- POS-BOOTSTRAP: FK de orders -> profiles (so pode existir depois que o
-- create_profiles rodou). Idempotente.
-- ============================================================================
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='orders_user_id_fkey') THEN
    ALTER TABLE public.orders ADD CONSTRAINT orders_user_id_fkey
      FOREIGN KEY (user_id) REFERENCES public.profiles(id) ON DELETE CASCADE;
  END IF;
END $$;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
'@

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add($hdr)
$lines.Add($bootstrap)

function AddFile($rel) {
  $full = Join-Path $BR $rel
  if (-not (Test-Path $full)) { Write-Host "SKIP (nao encontrado): $rel"; return }
  $lines.Add('')
  $lines.Add('-- >>>>>>>>>>>>>>>>>> BEGIN ' + $rel + ' >>>>>>>>>>>>>>>>>>')
  $lines.Add([System.IO.File]::ReadAllText($full).TrimEnd())
  $lines.Add('-- <<<<<<<<<<<<<<<<<< END '   + $rel + ' <<<<<<<<<<<<<<<<<<')
}

foreach ($f in $partA) { AddFile $f }
foreach ($f in $partB) { AddFile $f }

$mig = Get-ChildItem (Join-Path $BR 'supabase\migrations\*.sql') | Sort-Object Name
$lines.Add('')
$lines.Add('-- ============ migrations (ordem crescente) ============')
foreach ($m in $mig) { AddFile ('supabase\migrations\' + $m.Name) }

$ftr = @'

-- ============================================================================
-- POS-APLICACAO / CONFIG NOVA (repetir no projeto internacional):
--   1) Segredo de assinatura: generate_voltris_signature le current_setting
--      ('app.license_secret') com fallback 'VOLTRIS_SECRET_LICENSE_KEY_2025'
--      (IDENTICO ao BR). Mantenha o mesmo valor => chaves validam no app C#.
--      Opcional (recomendado): provisionar no Vault e setar a GUC app.license_secret.
--   2) Service role: emissao/renovacao/unlink usam service_role (JWT). Necessario
--      SUPABASE_SERVICE_ROLE_KEY / SECRET do novo projeto no .env do INTL.
--   3) Stripe: reutilize a MESMA conta Stripe (catalogo multimoeda ja aponta os
--      price ids) OU crie products/prices equivalentes; registre um webhook
--      apontando para o INTL e configure STRIPE_WEBHOOK_SECRET.
--   4) Auth: em Authentication > URL Configuration inclua o dominio internacional
--      no Site URL e Redirect URLs; reautorize Google OAuth; ajuste templates de
--      e-mail (confurmacao/reset) para os idiomas.
--   5) Realtime: habilite as publicacoes das tabelas usadas pelo dashboard
--      (installations, orders, notifications, device_commands).
-- ============================================================================
'@
$lines.Add($ftr)
$lines.Add($tail)

[System.IO.File]::WriteAllText($out, ($lines -join "`r`n"), (New-Object System.Text.UTF8Encoding($false)))
Write-Host ("completo.sql gerado em: {0}" -f $out)
Write-Host ("Linhas totais: {0}" -f ($lines -join "`n").Split("`n").Count)
Write-Host ("Arquivos incluidos: {0}" -f (($partA + $partB + ($mig | ForEach-Object { $_.Name })).Count))
