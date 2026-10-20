'use client';

import { useCallback, useEffect, useState, type ComponentType } from 'react';
import { createClient } from '@/utils/supabase/client';
import { motion } from 'framer-motion';
import { FiUsers, FiShoppingBag, FiLifeBuoy, FiBell, FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';

/**
 * OVERVIEW DO PAINEL ADMINISTRATIVO — VOLTRIS INTERNACIONAL (FASE 6).
 *
 * Espelha a "Visão Geral" do VOLTRIS Brasil, mas no idioma de dados do INTL:
 *   * Lê apenas pelo Supabase client com RLS (createClient()), igual às demais
 *     abas do admin internacional (Orders/Users/Tickets/Notifications). A própria
 *     RLS (política "admin can view all" via check_is_admin()) garante que só o
 *     administrador enxerga os totais; nada de rota paralela privilegiada.
 *   * Não mostra receita/moeda. O INTL é multi-moeda (Stripe) e a missão proíbe
 *     aplicar máscara monetária brasileira a dados internacionais. Então aqui só
 *     há contagens reais, sem moeda ou locale brasileiros no display.
 *   * Datas em en-US. Contagens de período usam created_at (existe em profiles,
 *     orders e tickets). Se uma consulta falhar, o card mostra "—" em vez de 0
 *     inventado (transparência: número ausente declarado vale mais que estimativa).
 */

type Period = 'today' | '7d' | '30d' | 'all';

const PERIODS: { value: Period; label: string }[] = [
  { value: 'today', label: 'Today' },
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
  { value: 'all', label: 'All time' },
];

function startOfPeriod(p: Period): string | null {
  const now = new Date();
  if (p === 'all') return null;
  if (p === 'today') {
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
  }
  const days = p === '7d' ? 7 : 30;
  return new Date(now.getTime() - days * 86_400_000).toISOString();
}

interface Stat {
  total: number | null;
  period: number | null;
}

export default function AdminOverviewTab() {
  const supabase = createClient();
  const [period, setPeriod] = useState<Period>('30d');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<Stat>({ total: null, period: null });
  const [orders, setOrders] = useState<Stat>({ total: null, period: null });
  const [tickets, setTickets] = useState<Stat>({ total: null, period: null });
  const [unread, setUnread] = useState<number | null>(null);

  const count = useCallback(
    async (table: string, gte: string | null): Promise<number | null> => {
      let query = supabase.from(table).select('*', { count: 'exact', head: true });
      if (gte) query = query.gte('created_at', gte);
      const { count: n, error: err } = await query;
      if (err) return null;
      return n ?? 0;
    },
    [supabase],
  );

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const gte = startOfPeriod(period);

      const [usersTotal, usersPeriod, ordersTotal, ordersPeriod, ticketsTotal, ticketsPeriod] =
        await Promise.all([
          count('profiles', null),
          gte ? count('profiles', gte) : Promise.resolve(null),
          count('orders', null),
          gte ? count('orders', gte) : Promise.resolve(null),
          count('tickets', null),
          gte ? count('tickets', gte) : Promise.resolve(null),
        ]);

      const { count: unreadCount, error: unreadErr } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true })
        .eq('read', false);

      setUsers({ total: usersTotal, period: usersPeriod });
      setOrders({ total: ordersTotal, period: ordersPeriod });
      setTickets({ total: ticketsTotal, period: ticketsPeriod });
      setUnread(unreadErr ? null : unreadCount ?? 0);

      if (usersTotal === null && ordersTotal === null && ticketsTotal === null) {
        setError('Could not load metrics');
      }
    } catch {
      setError('Could not load metrics');
    } finally {
      setLoading(false);
    }
  }, [count, supabase, period]);

  useEffect(() => {
    load();
  }, [load]);

  const periodLabel = PERIODS.find((p) => p.value === period)?.label ?? '';
  const showPeriod = period !== 'all';

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-2xl border border-[#8B31FF]/20 bg-[#1E1E1E]/60 p-6">
        <h3 className="mb-1 text-base font-bold text-white">Business Overview</h3>
        <p className="text-sm leading-relaxed text-gray-400">
          Real-time metrics pulled straight from the database. Counts respect admin access rules.
        </p>
      </div>

      {/* Period filter */}
      <div className="flex flex-col gap-3 rounded-2xl border border-[#8B31FF]/20 bg-[#1E1E1E]/40 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {PERIODS.map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                period === p.value
                  ? 'bg-[#8B31FF] text-white'
                  : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#333333]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          onClick={load}
          disabled={loading}
          aria-label="Refresh"
          className="flex items-center justify-center gap-2 rounded-xl border border-[#8B31FF]/20 bg-[#1E1E1E]/60 px-3 py-2 text-gray-300 transition hover:bg-[#2A2A2A] disabled:opacity-50"
        >
          <FiRefreshCw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-rose-500/40 bg-rose-500/10 p-4"
        >
          <FiAlertTriangle className="mt-0.5 shrink-0 text-rose-400" size={20} />
          <div className="text-sm">
            <p className="font-semibold text-rose-300">{error}</p>
            <button onClick={load} className="mt-2 text-xs font-semibold text-rose-300 underline">
              Try again
            </button>
          </div>
        </div>
      )}

      {loading && users.total === null && orders.total === null && tickets.total === null ? (
        <div className="flex items-center justify-center gap-3 py-20 text-gray-400">
          <FiRefreshCw className="animate-spin" size={20} />
          <span className="text-sm">Loading metrics…</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Users" value={users.total} periodValue={users.period} showPeriod={showPeriod} periodLabel={periodLabel} icon={FiUsers} tone="text-[#00FF94]" />
          <StatCard label="Orders" value={orders.total} periodValue={orders.period} showPeriod={showPeriod} periodLabel={periodLabel} icon={FiShoppingBag} tone="text-[#31A8FF]" />
          <StatCard label="Tickets" value={tickets.total} periodValue={tickets.period} showPeriod={showPeriod} periodLabel={periodLabel} icon={FiLifeBuoy} tone="text-[#8B31FF]" />
          <StatCard label="Unread notifications" value={unread} periodValue={null} showPeriod={false} periodLabel="" icon={FiBell} tone="text-[#FF4B6B]" />
        </div>
      )}
    </motion.div>
  );
}

function StatCard({
  label,
  value,
  periodValue,
  showPeriod,
  periodLabel,
  icon: Icon,
  tone,
}: {
  label: string;
  value: number | null;
  periodValue: number | null;
  showPeriod: boolean;
  periodLabel: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  tone: string;
}) {
  const display = value === null ? '—' : value.toLocaleString('en-US');
  const periodDisplay = periodValue === null ? '—' : `+${periodValue.toLocaleString('en-US')}`;
  return (
    <div className="rounded-2xl border border-[#8B31FF]/20 bg-[#1E1E1E]/50 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</span>
        <Icon size={16} className={tone} />
      </div>
      <p className={`mt-2 text-2xl font-bold ${tone}`}>{display}</p>
      {showPeriod && (
        <p className="mt-1 text-[11px] text-gray-500">
          <span>{'New in period'}</span>: <span>{periodLabel}</span> <span>{periodDisplay}</span>
        </p>
      )}
    </div>
  );
}
