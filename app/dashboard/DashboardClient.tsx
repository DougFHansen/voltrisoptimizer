'use client';

import { useState, useEffect, useCallback, useMemo, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import VoltrisIcon, { type VoltrisIconName } from '@/components/dashboard/VoltrisIcon';
import VoltrisIconTile, { DASHBOARD_ACCENT } from '@/components/dashboard/VoltrisIconTile';

import type { Order } from '@/types/order';
import { createClient } from '@/utils/supabase/client';
import { useAuth } from '@/app/hooks/useAuth';
import AuthGuard from '@/components/AuthGuard';
import MyComputerPage from './MyComputerPage';
import SecurityPage from './SecurityPage';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { useDashboard } from '@/app/context/DashboardContext';
import { notifyPageView } from '@/utils/notifications';
import {
  resolveLicenseProduct,
  isPlanType,
  SERVICE_CATALOG,
  LICENSE_PLANS,
  type PlanType,
  type BillingPeriod,
} from '@/lib/license-catalog';

// ============================================================================
// License states (mission §6) — canonical, resolved on the SERVER.
//
// The visual mapping below only renders the state the backend already decided
// (/api/v1/license/me -> resolveLicenseState over licenses + payments +
// subscriptions). The browser never re-derives anything.
//
// NOTE ON i18n: the dashboard is translated by the DOM SiteTextTranslator, whose
// dictionary is keyed on ENGLISH source text. That is why every prose string in
// this file is written in English (the source of truth) — not t(), and not the
// Portuguese the BR site uses. Unknown strings simply stay English.
// ============================================================================
interface LicenseStateVisual {
  icon: VoltrisIconName;
  accent: string;
  chip: string;
  /** English label rendered from the stable state code (server label is PT). */
  label: string;
  hint: string;
}

const LICENSE_STATE_STYLE: Record<string, LicenseStateVisual> = {
  ATIVA: {
    icon: 'check',
    accent: DASHBOARD_ACCENT.success,
    chip: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    label: 'Active',
    hint: 'Access is unlocked for the whole paid period.',
  },
  CANCELAMENTO_AGENDADO: {
    icon: 'clock',
    accent: DASHBOARD_ACCENT.info,
    chip: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    label: 'Cancellation scheduled',
    hint: 'Auto-renewal is off, but access stays valid until the expiration date — a scheduled cancellation is not an immediate expiry.',
  },
  FALHA_NO_PAGAMENTO: {
    icon: 'alertTriangle',
    accent: DASHBOARD_ACCENT.warning,
    chip: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    label: 'Payment failed',
    hint: 'The recurring charge failed. You keep access for the period already paid; update your card in the Stripe Portal so renewal is not lost.',
  },
  PAGAMENTO_PENDENTE: {
    icon: 'processing',
    accent: DASHBOARD_ACCENT.warning,
    chip: 'bg-amber-500/10 text-amber-300 border-amber-500/25',
    label: 'Payment pending',
    hint: 'Payment not confirmed by Stripe yet. Access is only unlocked after confirmation — nothing is granted early.',
  },
  EXPIRADA: {
    icon: 'alertCircle',
    accent: DASHBOARD_ACCENT.brandPink,
    chip: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    label: 'Expired',
    hint: 'The paid period ended. Renew to reactivate PRO on the same computer, without reinstalling the app.',
  },
  REVOGADA: {
    icon: 'lock',
    accent: DASHBOARD_ACCENT.danger,
    chip: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    label: 'Revoked',
    hint: 'License revoked (refund, chargeback or support decision). Your data was not deleted — contact us to understand the case.',
  },
};

const STATE_STYLE_FALLBACK: Omit<LicenseStateVisual, 'label'> & { label: string } = {
  icon: 'info',
  accent: DASHBOARD_ACCENT.brandBlue,
  chip: 'bg-slate-500/10 text-slate-300 border-slate-600/40',
  label: '',
  hint: '',
};

const SUBSCRIPTION_STATUS_LABEL: Record<string, string> = {
  ACTIVE: 'Active',
  CANCEL_SCHEDULED: 'Cancellation scheduled',
  CANCELED: 'Canceled',
  PAST_DUE: 'Past due',
  TRIALING: 'Trial period',
  INCOMPLETE: 'Incomplete signup',
  INCOMPLETE_EXPIRED: 'Expired signup',
  UNPAID: 'Unpaid',
  PAUSED: 'Paused',
};

const PAYMENT_STATUS_LABEL: Record<string, string> = {
  approved: 'Approved',
  paid: 'Paid',
  pending: 'Pending',
  processing: 'Processing',
  open: 'Awaiting',
  unpaid: 'Unpaid',
  failed: 'Declined',
  payment_failed: 'Declined',
  declined: 'Declined',
  past_due: 'Past due',
  refunded: 'Refunded',
  charged_back: 'Chargeback',
  canceled: 'Canceled',
};

// Polling with a limit + honest timeout (mission §6): instead of an eternal
// setInterval, re-query every 15 s for at most 40 attempts (~10 min) while a
// payment is pending, then stop on its own with a clear message.
const LICENSE_POLL_INTERVAL_MS = 15_000;
const LICENSE_POLL_MAX_ATTEMPTS = 40;

/** Product name always comes from the backend catalog, never loose client text. */
function productLabel(planType?: string | null, billingPeriod?: string | null): string {
  const period: BillingPeriod = (billingPeriod ?? '').toLowerCase().startsWith('y') ? 'year' : 'month';
  if (isPlanType(planType)) {
    // name is currency-agnostic in the catalog, so default usd is enough for the label.
    const product = resolveLicenseProduct(planType, period);
    if (product) return product.name;
  }
  const service = SERVICE_CATALOG[(planType ?? '').toLowerCase()];
  if (service) return service.name;
  const plan = LICENSE_PLANS[planType as PlanType];
  return plan ? plan.displayName : (planType || 'Product');
}

/**
 * The license key is the activation secret: shown masked and only revealed under
 * explicit action (screenshot and sharing were real risks).
 */
function maskLicenseKey(key?: string | null): string {
  if (!key) return '— — — —';
  const parts = key.split('-');
  if (parts.length < 3) return `${key.slice(0, 3)}${'•'.repeat(Math.max(6, key.length - 3))}`;
  const tail = parts[parts.length - 1];
  const hiddenTail = tail.length > 4 ? `${'•'.repeat(tail.length - 4)}${tail.slice(-4)}` : tail;
  return `${parts.slice(0, 2).join('-')}-${'•'.repeat(Math.max(3, parts[2].length))}-${'•'.repeat(6)}-${hiddenTail}`;
}

// Intl defaults: the dashboard is used across many locales, so dates/times use
// the browser default locale (rendered client-side only, no SSR/hydration risk)
// and money is formatted per the row's actual currency.
const fmtDate = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleDateString() : '—';

const fmtDateTime = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

const fmtTime = (iso?: string | null) =>
  iso ? new Date(iso).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) : '—';

const fmtMoney = (amount?: number | null, currency?: string | null) => {
  const cur = (currency || 'usd').toUpperCase();
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: cur }).format(amount ?? 0);
  } catch {
    return `${cur} ${Number(amount ?? 0).toFixed(2)}`;
  }
};

/** Renewal period label from the stable code (server label is PT). */
const periodLabelEn = (p?: string | null) => ((p ?? '').toLowerCase().startsWith('y') ? 'Annual' : 'Monthly');

const InfoCell = ({ label, value, tone = 'text-slate-200' }: { label: string; value: ReactNode; tone?: string }) => (
  <div className="flex flex-col gap-0.5 min-w-0">
    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
    <span className={`text-xs font-semibold ${tone} truncate`}>{value}</span>
  </div>
);

// Statistic card — executive style, brand tile accent (INTL blue/purple theme).
const StatCard = ({ title, value, icon, delay, description }: {
  title: string;
  value: number;
  icon: VoltrisIconName;
  delay: number;
  description?: string;
}) => {
  const { transparencyMode } = useDashboard();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={`relative group p-5 sm:p-6 rounded-2xl border transition-all duration-200
        ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/50 border-slate-800/80 shadow-sm'}
        hover:border-slate-700
      `}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</span>
        <VoltrisIconTile icon={icon} accent={DASHBOARD_ACCENT.brand} size={9} />
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{value}</h3>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Active</span>
        </div>
      </div>
      {description && (
        <p className="text-[11px] font-medium text-slate-500 mt-2">{description}</p>
      )}
    </motion.div>
  );
};

export default function DashboardClient() {
  return (
    <Suspense fallback={
      <div className="h-full w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-20 h-20 border-t-4 border-l-4 border-b-4 border-transparent border-r-4 border-r-[#31A8FF] rounded-full animate-spin"></div>
          <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs animate-pulse">Starting Terminal...</p>
        </div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const { user, profile, loading } = useAuth();
  const { transparencyMode } = useDashboard();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || (searchParams.get('checkout_success') === 'true' ? 'licenses' : 'overview');

  const [orders, setOrders] = useState<Order[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [licenses, setLicenses] = useState<any[]>([]);
  const [pendingPurchases, setPendingPurchases] = useState<any[]>([]);
  const [hasPending, setHasPending] = useState(false);
  const [serverTime, setServerTime] = useState<string | null>(null);
  const [revealedKeys, setRevealedKeys] = useState<Record<string, boolean>>({});
  const [isPolling, setIsPolling] = useState(false);
  const [pollAttempt, setPollAttempt] = useState(0);
  const [installationsCount, setInstallationsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  const fetchData = useCallback(async (showLoading = true) => {
    if (!user) return;
    try {
      if (showLoading) setIsLoading(true);

      const [ordersRes, licensesJson, installationsRes, paymentsRes] = await Promise.all([
        supabase.from('orders').select('*').eq('user_id', user.id).order('created_at', { ascending: false }),
        // Licenses come from the canonical route (service_role + session filter).
        // The old direct query used `.eq('email', ...)` and non-canonical columns
        // (license_type/is_active/devices_in_use/id) that do not exist in
        // public.licenses — the panel was left empty/broken.
        fetch('/api/v1/license/me', { credentials: 'same-origin' })
          .then(async (r) => (r.ok ? r.json() : { error: `HTTP ${r.status}` })),
        supabase.from('installations').select('id', { count: 'exact', head: true }).eq('user_id', user.id),
        supabase.from('payments').select('*').eq('user_id', user.id).order('created_at', { ascending: false })
      ]);

      if (ordersRes.error) throw ordersRes.error;
      setOrders(ordersRes.data || []);
      setPayments(paymentsRes.data || []);

      if (licensesJson?.error) {
        console.error('Error fetching licenses:', licensesJson.error);
        setLicenses([]);
        setPendingPurchases([]);
        setHasPending(false);
      } else {
        // Canonical route contract: licenses[] already carry state/stateLabel/
        // hasAccess resolved on the server, plus pendingPurchases/hasPending/
        // server_time.
        setLicenses(licensesJson?.licenses || []);
        setPendingPurchases(licensesJson?.pendingPurchases || []);
        setHasPending(licensesJson?.hasPending === true);
        setServerTime(licensesJson?.server_time ?? null);
      }

      setInstallationsCount(installationsRes.count || 0);

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error updating dashboard');
    } finally {
      if (showLoading) setIsLoading(false);
    }
  }, [user?.id, user?.email, supabase]);

  const handleManageBilling = async () => {
    const toastId = toast.loading('Connecting to Stripe...');
    try {
      const response = await fetch('/api/stripe/portal', { method: 'POST' });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Could not open portal');
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleRequestRefund = async () => {
    if (!window.confirm("Warning: the refund will cancel your subscription immediately and disable your access. The amount is returned only if the purchase was made within the last 7 days. Do you want to proceed?")) {
      return;
    }

    const toastId = toast.loading('Processing refund with Stripe...');
    try {
      const response = await fetch('/api/stripe/refund', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Refund completed successfully!', { id: toastId });
        fetchData(false);
      } else {
        throw new Error(data.error || 'Error processing refund');
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleConfirmCancel = async () => {
    setIsCancelling(true);
    const toastId = toast.loading('Processing cancellation...');
    try {
      const response = await fetch('/api/stripe/cancel', { method: 'POST' });
      const data = await response.json();

      if (response.ok) {
        toast.success('Subscription canceled! You still have access until the end of the current period.', { id: toastId });
        setIsCancelModalOpen(false);
        fetchData(false);
      } else {
        throw new Error(data.error || 'Error canceling');
      }
    } catch (error: any) {
      toast.error(error.message, { id: toastId });
    } finally {
      setIsCancelling(false);
    }
  };

  // Load data only on mount and when the user ID actually changes.
  const userIdRef = useRef<string | undefined>(undefined);
  useEffect(() => {
    // If auth finished loading and we have no user, stop the local loading so
    // AuthGuard can run the redirect.
    if (!loading && !user) {
      setIsLoading(false);
      return;
    }

    if (!user?.id) return;

    // Only fetch when the ID changed (avoids refetch on token refresh that
    // recreates the user object).
    if (userIdRef.current === user.id) return;
    userIdRef.current = user.id;
    fetchData();
  }, [user?.id, loading, fetchData]);

  // Notify the licenses-tab page view in the dashboard.
  useEffect(() => {
    if (activeTab === 'licenses') {
      notifyPageView("Licenses Tab (Internal Dashboard)");
    }
  }, [activeTab]);

  useEffect(() => {
    const success = searchParams.get('checkout_success');
    if (success !== 'true' || loading) return;

    const type = searchParams.get('type');
    const successMsg = type === 'service' ? 'Service purchased successfully!' : 'Order confirmed! Processing your license...';
    const successIcon = type === 'service' ? '🛠️' : '💎';

    toast.success(successMsg, {
      duration: 6000,
      position: 'top-center',
      icon: successIcon,
      style: {
        background: 'rgba(10, 10, 15, 0.9)',
        color: '#fff',
        border: '1px solid rgba(49, 168, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '1rem',
        fontWeight: 'bold'
      },
    });

    fetchData(false);
    const timer = setTimeout(() => fetchData(false), 5000);
    return () => clearTimeout(timer);
  }, [searchParams, loading, fetchData]);

  // LIMITED polling of a pending payment (mission §6): previously the panel only
  // refreshed on F5, so whoever paid through checkout kept staring at a "no
  // license" screen forever. Here it re-queries on its own, with an attempt cap.
  useEffect(() => {
    if (!user?.id || !hasPending) {
      setIsPolling(false);
      setPollAttempt(0);
      return;
    }

    setIsPolling(true);
    setPollAttempt(0);

    let attempts = 0;
    const id = setInterval(() => {
      attempts += 1;
      if (attempts > LICENSE_POLL_MAX_ATTEMPTS) {
        clearInterval(id);
        setIsPolling(false);
        toast('Payment has not been confirmed by Stripe yet. Once approved, the key appears here — use "Check now" to avoid waiting.', {
          icon: '⏳',
          id: 'voltris-poll-limit',
          duration: 9000,
        });
        return;
      }
      setPollAttempt(attempts);
      void fetchData(false);
    }, LICENSE_POLL_INTERVAL_MS);

    return () => clearInterval(id);
  }, [user?.id, hasPending, fetchData]);

  // Safe copy: the key goes to the clipboard under explicit action. If the
  // browser blocks it (non-secure context), reveal the key instead of failing
  // silently.
  const handleCopyKey = async (key: string) => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable');
      await navigator.clipboard.writeText(key);
      toast.success('Key copied. It grants access to your plan — treat it like a password.');
    } catch {
      setRevealedKeys((prev) => ({ ...prev, [key]: true }));
      toast.error('Your browser blocked automatic copying. The key was revealed below — copy it manually.', { duration: 8000 });
    }
  };

  const toggleRevealKey = (key: string) =>
    setRevealedKeys((prev) => ({ ...prev, [key]: !prev[key] }));

  const stats = {
    totalOrders: orders.length + payments.length,
    // "Active" = real access according to the server (includes scheduled
    // cancellation and billing failure within the already-paid period). Pure
    // isActive does not reflect this.
    activeLicenses: licenses.filter(l => l.hasAccess ?? l.isActive).length,
    computers: installationsCount
  };

  const hardwareIDProtection = stats.activeLicenses > 0;

  return (
    <AuthGuard>
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 border-r-4 border-[#31A8FF] rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-20 h-20 border-t-4 border-[#8B31FF] rounded-full animate-spin-slow"></div>
            </div>
            <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px] animate-pulse">Syncing with Supabase Cloud...</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full max-w-full h-full min-h-0">
          {/* Dashboard Header - Executive Style */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800/80">
            <div className="space-y-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Control Panel
                </h2>

                {/* Hardware ID Protection Status Badge */}
                <div className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium border transition-colors
                 ${hardwareIDProtection
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-400'}
               `}>
                  <div className={`w-1.5 h-1.5 rounded-full ${hardwareIDProtection ? 'bg-emerald-400' : 'bg-rose-400'}`}></div>
                  <span>
                    HID Protection: {hardwareIDProtection ? 'Active' : 'Offline'}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-xs font-normal">
                Welcome back, <span className="text-slate-200 font-medium">{profile?.full_name || user?.email?.split('@')[0] || 'User'}</span>
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href="/"
                className="px-3 py-2 rounded-xl border border-slate-800 bg-slate-800 hover:bg-slate-700 hover:border-slate-700 transition-all text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <VoltrisIcon name="arrowLeft" size={14} className="text-slate-400" />
                <span>Back to Site</span>
              </Link>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsRefreshing(true);
                  fetchData(false)
                    .then(() => toast.success('Data updated!'))
                    .finally(() => setIsRefreshing(false));
                }}
                className={`p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all ${isRefreshing ? 'opacity-50' : ''}`}
                title="Refresh data"
              >
                <VoltrisIcon name="processing" size={16} className={isRefreshing ? 'animate-spin' : ''} />
              </motion.button>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-md shadow-indigo-600/20 transition-colors"
                >
                  <VoltrisIcon name="plus" size={16} />
                  <span>New Order</span>
                </motion.button>
              </Link>
            </div>
          </header>

          {/* Tab Content Rendering */}
          <div className="flex-1 min-h-0 relative">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                  <StatCard title="Services Acquired" value={stats.totalOrders} icon="package" delay={0.05} description="Total orders and services" />
                  <StatCard title="Active Licenses" value={stats.activeLicenses} icon="success" delay={0.1} description="Ready for immediate use" />
                  <StatCard title="Linked Computers" value={stats.computers} icon="display" delay={0.15} description="Machines with active uplink" />

                  {/* Action Cards Grid */}
                  <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">

                    {/* App Download Card */}
                    <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/40 border-slate-800/80'} flex flex-col justify-between gap-6`}>
                      <div className="space-y-3">
                        <VoltrisIconTile icon="download" accent={DASHBOARD_ACCENT.brandBlue} size={10} />
                        <h3 className="text-lg font-bold text-white tracking-tight">Voltris Optimizer Desktop</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Download the app to apply low-latency optimizations, hardware telemetry and remote command management.
                        </p>
                      </div>
                      <div className="pt-2">
                        <Link href="/voltrisoptimizer" className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-950 font-semibold text-xs rounded-xl transition-all shadow-sm">
                          <VoltrisIcon name="download" size={16} />
                          <span>Download Voltris Optimizer</span>
                        </Link>
                      </div>
                    </div>

                    {/* Billing Hub Card */}
                    <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/40 border-slate-800/80'} flex flex-col justify-between gap-6`}>
                      <div className="space-y-3">
                        <VoltrisIconTile icon="creditCard" accent={DASHBOARD_ACCENT.brand} size={10} />
                        <h3 className="text-lg font-bold text-white tracking-tight">Billing & Subscription</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          Manage your payment methods, access Stripe invoices, cancel auto-renewals or request the guarantee refund.
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={handleManageBilling}
                          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-800 text-slate-200 font-medium text-xs rounded-xl transition-all flex items-center gap-2"
                        >
                          <VoltrisIcon name="externalLink" size={14} /> Stripe Portal
                        </button>
                        <button
                          onClick={() => setIsCancelModalOpen(true)}
                          className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-800 text-slate-300 font-medium text-xs rounded-xl transition-all"
                        >
                          Cancel Renewal
                        </button>
                        <button
                          onClick={handleRequestRefund}
                          className="px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/15 border border-rose-500/20 text-rose-400 font-medium text-xs rounded-xl transition-all"
                        >
                          Refund (7 Days)
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}

              {activeTab === 'licenses' && (
                <motion.div
                  key="licenses"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Warning & Billing Actions Banner */}
                  <div className="flex flex-col gap-4 p-5 sm:p-6 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <VoltrisIconTile icon="alertTriangle" accent={DASHBOARD_ACCENT.warning} size={10} />
                      <div className="flex-1 text-center sm:text-left">
                        <h4 className="font-semibold text-slate-200 text-sm">License & Billing Management</h4>
                        <p className="text-slate-400 text-xs mt-0.5">Manage your plan, cancel renewal or request a refund within 7 days.</p>
                      </div>
                      <button
                        onClick={() => fetchData(true)}
                        className="px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-medium text-xs rounded-xl transition-all shadow-sm"
                      >
                        Sync Now
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-amber-500/15">
                      <button
                        onClick={() => setIsCancelModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-800 text-slate-300 font-medium text-xs rounded-xl transition-all"
                      >
                        <VoltrisIcon name="close" size={14} /> Cancel Auto-Renewal
                      </button>
                      <button
                        onClick={handleRequestRefund}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500/10 hover:bg-rose-500/15 border border-rose-500/20 text-rose-400 font-medium text-xs rounded-xl transition-all"
                      >
                        <VoltrisIcon name="processing" size={14} /> Request Refund (7 Days)
                      </button>
                    </div>
                  </div>

                  {/* Purchases awaiting Stripe confirmation. The license is not
                      released yet (mission §6): this block comes from
                      /api/v1/license/me -> pendingPurchases, not a guess. */}
                  {pendingPurchases.length > 0 && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/[0.06] border border-amber-500/25 flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <VoltrisIconTile icon="processing" accent={DASHBOARD_ACCENT.warning} size={10} />
                          <div>
                            <h4 className="text-sm font-semibold text-amber-200">
                              {pendingPurchases.length === 1
                                ? 'Payment awaiting confirmation'
                                : `${pendingPurchases.length} payments awaiting confirmation`}
                            </h4>
                            <p className="text-xs text-slate-400 mt-0.5">
                              {isPolling
                                ? `Querying Stripe automatically — attempt ${pollAttempt} of ${LICENSE_POLL_MAX_ATTEMPTS}.`
                                : 'The activation key appears here as soon as the payment is approved.'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => fetchData(true)}
                          className="px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-200 text-xs font-medium transition-all"
                        >
                          Check now
                        </button>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {pendingPurchases.map((p) => (
                          <li key={p.payment_id} className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-slate-950/50 border border-slate-800/80">
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-semibold text-slate-200 truncate">{productLabel(p.type, p.billingPeriod)}</span>
                              <span className="text-[10px] text-slate-500">Created {fmtDateTime(p.createdAt)}</span>
                            </div>
                            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                              {PAYMENT_STATUS_LABEL[String(p.status ?? '').toLowerCase()] ?? String(p.status ?? '—')}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {licenses.length > 0 ? (
                      licenses.map((lic, i) => {
                        const stateStyle = LICENSE_STATE_STYLE[lic.state] ?? STATE_STYLE_FALLBACK;
                        const revealed = revealedKeys[String(lic.license_key)] === true;
                        const maxDevices = lic.maxDevices ?? 1;
                        const devicesFull = (lic.devicesInUse ?? 0) >= maxDevices && maxDevices < 9999;
                        return (
                          <motion.div
                            key={lic.license_key}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`group relative p-6 rounded-2xl border transition-all duration-200 ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/50 border-slate-800/80 shadow-sm'} hover:border-slate-700`}
                          >
                            <div className="relative z-10 flex flex-col gap-5">
                              {/* Card Top: canonical state resolved on the server */}
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  <VoltrisIconTile icon={stateStyle.icon} accent={stateStyle.accent} size={10} />
                                  <div className="flex flex-col">
                                    <h4 className="text-base font-bold text-white tracking-tight">{productLabel(lic.type, lic.billingPeriod)}</h4>
                                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wider w-fit mt-0.5 border ${stateStyle.chip}`}>
                                      {stateStyle.label || '—'}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end">
                                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                    {lic.hasAccess ? 'Access until' : 'Validity'}
                                  </span>
                                  <span className="text-xs font-semibold text-slate-200 mt-0.5">{fmtDate(lic.expiresAt)}</span>
                                  {typeof lic.daysLeft === 'number' && lic.hasAccess && (
                                    <span className={`text-[10px] font-semibold mt-0.5 ${lic.expiringSoon ? 'text-amber-400' : 'text-slate-500'}`}>
                                      {lic.daysLeft > 0 ? `${lic.daysLeft} day${lic.daysLeft === 1 ? '' : 's'} left` : 'expires today'}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Why this state? (no jargon, no placebo) */}
                              {stateStyle.hint && (
                                <p className="text-[11px] leading-relaxed text-slate-400 -mt-1">{stateStyle.hint}</p>
                              )}

                              {/* Key Section: masked by default */}
                              <div className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/80 flex flex-col gap-1.5">
                                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Activation Key</span>
                                <div className="flex items-center justify-between gap-3">
                                  <code className="flex-1 font-mono text-xs font-semibold text-white tracking-wide truncate select-all">
                                    {revealed ? lic.license_key : maskLicenseKey(lic.license_key)}
                                  </code>
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      onClick={() => toggleRevealKey(lic.license_key)}
                                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-800"
                                      title={revealed ? 'Hide key' : 'Reveal key'}
                                    >
                                      <VoltrisIcon name={revealed ? 'lock' : 'key'} size={14} />
                                    </button>
                                    <button
                                      onClick={() => handleCopyKey(lic.license_key)}
                                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-800"
                                      title="Copy Key"
                                    >
                                      <VoltrisIcon name="copy" size={14} />
                                    </button>
                                    <Link href={`/dashboard?tab=pc`} className="p-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all border border-indigo-500/25" title="View in My Computer">
                                      <VoltrisIcon name="externalLink" size={14} />
                                    </Link>
                                  </div>
                                </div>
                              </div>

                              {/* Real details: plan, period, activation, devices, subscription */}
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <InfoCell label="Plan" value={productLabel(lic.type, lic.billingPeriod)} />
                                <InfoCell label="Period" value={periodLabelEn(lic.billingPeriod)} />
                                <InfoCell
                                  label="Devices"
                                  value={`${lic.devicesInUse ?? 0}/${maxDevices >= 9999 ? 'unlimited' : maxDevices}`}
                                  tone={devicesFull ? 'text-amber-400' : 'text-white'}
                                />
                                <InfoCell
                                  label="Activated on"
                                  value={lic.activatedAt ? fmtDateTime(lic.activatedAt) : 'not activated yet'}
                                  tone={lic.activatedAt ? 'text-slate-200' : 'text-slate-500'}
                                />
                                <InfoCell
                                  label="Payment"
                                  value={
                                    lic.paymentStatus
                                      ? PAYMENT_STATUS_LABEL[String(lic.paymentStatus).toLowerCase()] ?? String(lic.paymentStatus)
                                      : 'no record'
                                  }
                                  tone={
                                    lic.paymentStatus === 'approved' || lic.paymentStatus === 'paid'
                                      ? 'text-emerald-400'
                                      : lic.paymentStatus === 'failed' || lic.paymentStatus === 'unpaid' || lic.paymentStatus === 'refunded' || lic.paymentStatus === 'chargeback'
                                        ? 'text-rose-400'
                                        : 'text-amber-400'
                                  }
                                />
                                <InfoCell
                                  label="Subscription"
                                  value={SUBSCRIPTION_STATUS_LABEL[String(lic.subscriptionStatus ?? '').toUpperCase()] ?? 'no subscription'}
                                />
                                <InfoCell
                                  label={lic.nextBillingAt ? 'Renews on' : lic.canceledAt ? 'Canceled on' : 'Renewal'}
                                  value={lic.nextBillingAt ? fmtDate(lic.nextBillingAt) : lic.canceledAt ? fmtDate(lic.canceledAt) : 'off'}
                                />
                              </div>

                              {/* Footer: real sync + state-specific actions */}
                              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-4 text-xs">
                                <div className="flex items-center gap-2 text-slate-500">
                                  <VoltrisIcon name="clock" size={12} />
                                  <span>
                                    {isPolling
                                      ? 'Checking payment with Stripe…'
                                      : `Data synced at ${fmtTime(serverTime)}`}
                                  </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2">
                                  {(lic.state === 'EXPIRADA' || lic.state === 'PAGAMENTO_PENDENTE') && (
                                    <Link href="/buy-license" className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] transition-colors">
                                      Renew access
                                    </Link>
                                  )}
                                  {lic.hasAccess && lic.subscriptionStatus && lic.subscriptionStatus !== 'CANCELED' && (
                                    <button
                                      onClick={handleManageBilling}
                                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-800 text-slate-300 font-medium text-[11px] transition-all"
                                    >
                                      Manage in Stripe Portal
                                    </button>
                                  )}
                                  <Link href="/voltrisoptimizer" className="px-3 py-1.5 rounded-lg text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors">
                                    Download App <VoltrisIcon name="download" size={12} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })
                    ) : (
                      <div className={`col-span-1 xl:col-span-2 p-12 sm:p-16 rounded-2xl text-center border border-slate-800/80 flex flex-col items-center gap-4 ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/30'}`}>
                        <VoltrisIconTile icon="security" accent={DASHBOARD_ACCENT.brand} size={14} />
                        <div className="space-y-1.5 max-w-md">
                          <h3 className="text-lg font-bold text-white tracking-tight">No active license</h3>
                          <p className="text-slate-400 text-xs leading-relaxed">You do not have active licenses linked to this e-mail yet. Get a license to unlock Optimizer PRO.</p>
                        </div>
                        <Link href="/buy-license" className="mt-2">
                          <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20">
                            Explore PRO Plans
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className={`p-6 sm:p-7 rounded-2xl border ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/50 border-slate-800/80 shadow-sm'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <VoltrisIconTile icon="package" accent={DASHBOARD_ACCENT.brand} size={10} />
                        <div>
                          <h2 className="text-lg font-bold text-white tracking-tight">Order History</h2>
                          <p className="text-slate-400 text-xs mt-0.5">Track all your contracted services and licenses</p>
                        </div>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-slate-800/80">
                            <th className="pb-3 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Item / Service</th>
                            <th className="pb-3 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden sm:table-cell">Date</th>
                            <th className="pb-3 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Amount</th>
                            <th className="pb-3 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          {/* Merge of Orders and Payments */}
                          {[
                            ...orders.map(o => ({ ...o, display_type: 'SERVICE_LEGACY', display_name: o.service_name, display_plan: o.plan_type, amount: o.total || o.final_price, currency: (o as any).currency ?? 'usd' })),
                            ...payments.map(p => {
                              const isService = ['formatacao', 'otimizacao', 'correcao', 'impressora', 'virus', 'recuperacao'].some(key => p.plan_type?.includes(key));
                              return {
                                ...p,
                                display_type: isService ? 'SERVICE' : 'LICENSE',
                                display_name: isService ? productLabel(p.plan_type, p.billing_period) : productLabel(p.plan_type, p.billing_period),
                                display_plan: isService ? 'Professional Service' : 'Priority Support',
                                amount: p.amount,
                                currency: p.currency ?? 'usd',
                              };
                            })
                          ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).length > 0 ? (
                            [
                              ...orders.map(o => ({ ...o, display_type: 'SERVICE_LEGACY', display_name: o.service_name, display_plan: o.plan_type, amount: o.total || o.final_price, currency: (o as any).currency ?? 'usd' })),
                              ...payments.map(p => {
                                const isService = ['formatacao', 'otimizacao', 'correcao', 'impressora', 'virus', 'recuperacao'].some(key => p.plan_type?.includes(key));
                                return {
                                  ...p,
                                  display_type: isService ? 'SERVICE' : 'LICENSE',
                                  display_name: productLabel(p.plan_type, p.billing_period),
                                  display_plan: isService ? 'Professional Service' : 'Priority Support',
                                  amount: p.amount,
                                  currency: p.currency ?? 'usd',
                                };
                              })
                            ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((item, idx) => (
                              <tr key={item.id + idx} className="group hover:bg-slate-900/60 transition-colors">
                                <td className="py-4 px-3">
                                  <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-white tracking-tight">{item.display_name}</span>
                                    <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                                      {item.display_type === 'LICENSE' ? (
                                        <span className="text-indigo-400">Digital Product</span>
                                      ) : item.display_type === 'SERVICE' ? (
                                        <span className="text-blue-400">Specialized Service</span>
                                      ) : (
                                        item.display_plan || 'Custom'
                                      )}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4 px-3 hidden sm:table-cell">
                                  <span className="text-xs font-medium text-slate-400">
                                    {new Date(item.created_at).toLocaleDateString()}
                                  </span>
                                </td>
                                <td className="py-4 px-3">
                                  <span className="text-xs font-semibold text-slate-200">
                                    {fmtMoney(item.amount, item.currency)}
                                  </span>
                                </td>
                                <td className="py-4 px-3">
                                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-medium
                                  ${(['completed', 'approved', 'paid', 'active', 'succeeded'].includes(String(item.status).trim().toLowerCase())) ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                                      (['cancelled', 'rejected', 'declined', 'canceled', 'refunded'].includes(String(item.status).trim().toLowerCase())) ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                                        'bg-amber-500/10 border-amber-500/20 text-amber-400'}
                                `}>
                                    <div className={`w-1.5 h-1.5 rounded-full ${(['completed', 'approved', 'paid', 'active', 'succeeded'].includes(String(item.status).trim().toLowerCase())) ? 'bg-emerald-400' : (['cancelled', 'rejected', 'declined', 'canceled', 'refunded'].includes(String(item.status).trim().toLowerCase())) ? 'bg-rose-400' : 'bg-amber-400'}`}></div>
                                    <span>
                                      {(['completed', 'approved', 'paid', 'active', 'succeeded'].includes(String(item.status).trim().toLowerCase())) ? 'Approved' :
                                        (['cancelled', 'rejected', 'declined', 'canceled', 'refunded'].includes(String(item.status).trim().toLowerCase())) ? 'Canceled' :
                                          'Pending'}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan={4} className="py-12 text-center">
                                <p className="text-slate-500 text-xs">No orders or payments recorded so far.</p>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'pc' && (
                <motion.div
                  key="pc"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-full"
                >
                  <MyComputerPage userId={user?.id || ''} />
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div
                  key="security"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-full"
                >
                  <SecurityPage />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* --- PROFESSIONAL CANCELLATION MODAL --- */}
      <AnimatePresence>
        {isCancelModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCancelModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-md bg-slate-900/30 rounded-2xl p-7 shadow-2xl border border-slate-800 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <VoltrisIconTile icon="alertTriangle" accent={DASHBOARD_ACCENT.danger} size={12} className="mb-5" />

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  Cancel Subscription?
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  On confirmation, your auto-renewal will stop. You will keep access to PRO features until the end of the current billing cycle.
                </p>

                <div className="flex flex-col gap-2.5 w-full">
                  <button
                    onClick={handleConfirmCancel}
                    disabled={isCancelling}
                    className="w-full py-2.5 bg-rose-500 hover:bg-rose-600 disabled:opacity-50 text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                  >
                    {isCancelling ? 'Processing...' : 'Confirm Cancellation'}
                  </button>
                  <button
                    onClick={() => setIsCancelModalOpen(false)}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-800 text-slate-300 font-medium text-xs rounded-xl transition-all"
                  >
                    Keep my subscription
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AuthGuard>
  );
}
