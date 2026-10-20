'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { FiBell, FiSearch, FiCheck, FiEye, FiRefreshCw, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// INTL notifications schema (see components/notifications/NotificationContext.tsx):
// columns id, user_id, title, message, type, read, sound, created_at.
// Type enum values are DB keys (never translated); only the visible label is i18n.
type NotifType = 'ticket' | 'order' | 'system' | 'profile' | 'newsletter' | 'comment' | 'ticket_status';

interface NotificationRow {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: NotifType;
  read: boolean;
  created_at: string;
  profiles?: { full_name: string | null; email: string | null } | null;
}

const TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'All' },
  { value: 'order', label: 'Purchases' },
  { value: 'ticket', label: 'Tickets' },
  { value: 'ticket_status', label: 'Ticket status' },
  { value: 'system', label: 'System' },
  { value: 'profile', label: 'Profile' },
  { value: 'newsletter', label: 'Newsletter' },
  { value: 'comment', label: 'Comments' },
];

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString('en-US', {
      day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return '—';
  }
}

const PAGE_SIZE = 25;

export default function AdminNotificationsTab() {
  const [rows, setRows] = useState<NotificationRow[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [typeFilter, setTypeFilter] = useState('');
  const [readFilter, setReadFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [search, setSearch] = useState('');
  const [updating, setUpdating] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    try {
      let query = supabase
        .from('notifications')
        .select('*, profiles:profiles!inner(full_name, email)', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

      if (typeFilter) query = query.eq('type', typeFilter);
      if (readFilter === 'unread') query = query.eq('read', false);
      if (readFilter === 'read') query = query.eq('read', true);
      const term = search.trim();
      if (term) query = query.or(`title.ilike.%${term}%,message.ilike.%${term}%`);

      const { data, error: qErr, count } = await query;
      if (qErr) throw qErr;
      setRows((data as unknown as NotificationRow[]) ?? []);
      if (count !== null) setTotalCount(count);

      // Unread badge: independent count, ignoring the current read filter.
      const { count: uc } = await supabase
        .from('notifications')
        .select('id', { count: 'exact', head: true })
        .eq('read', false);
      setUnreadCount(uc ?? 0);
    } catch (e: any) {
      setError(e?.message || 'Failed to load notifications.');
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, [page, typeFilter, readFilter, search]);

  useEffect(() => {
    const t = setTimeout(() => { void load(); }, search ? 350 : 0);
    return () => clearTimeout(t);
  }, [load, search]);

  const markRead = async (id: string, read: boolean) => {
    setUpdating(id);
    const supabase = createClient();
    const { error: uErr } = await supabase.from('notifications').update({ read }).eq('id', id);
    if (!uErr) {
      setRows((prev) => prev.map((n) => (n.id === id ? { ...n, read } : n)));
      setUnreadCount((prev) => Math.max(0, prev + (read ? -1 : 1)));
    }
    setUpdating(null);
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-[#1E1E1E]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#8B31FF]/20">
          <p className="text-xs text-gray-400 mb-1">Notifications</p>
          <p className="text-3xl font-bold text-white">{totalCount}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-[#1E1E1E]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#FF4B6B]/20">
          <p className="text-xs text-gray-400 mb-1">Unread</p>
          <p className={`text-3xl font-bold ${unreadCount > 0 ? 'text-amber-400' : 'text-white'}`}>{unreadCount}</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-3 lg:items-center">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0); }}
            placeholder="Search notifications…"
            className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-white text-sm focus:border-[#8B31FF] outline-none transition-colors"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => { setTypeFilter(e.target.value); setPage(0); }}
          className="px-3 py-2.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-white text-sm outline-none"
          aria-label="Filter by type"
        >
          {TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <select
          value={readFilter}
          onChange={(e) => { setReadFilter(e.target.value as any); setPage(0); }}
          className="px-3 py-2.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-white text-sm outline-none"
          aria-label="Filter by read status"
        >
          <option value="all">All</option>
          <option value="unread">Unread</option>
          <option value="read">Read</option>
        </select>
        <button onClick={() => void load()} title="Reload" aria-label="Reload"
          className="p-2.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-gray-300 hover:text-white transition-colors">
          <FiRefreshCw size={16} />
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-sm text-red-300" role="alert">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-[#1E1E1E]/80 backdrop-blur-xl rounded-2xl border border-[#8B31FF]/20 overflow-hidden">
        {loading && rows.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-sm">Loading notifications…</div>
        ) : rows.length === 0 ? (
          <div className="p-10 text-center">
            <FiBell size={28} className="mx-auto text-gray-600 mb-3" />
            <p className="text-white font-semibold">No notifications here</p>
            <p className="text-gray-400 text-sm mt-1">Purchases, orders, tickets and refunds will all appear here in real time.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[#8B31FF]/20 text-xs text-gray-400">
                  <th className="px-4 py-3 font-medium">Event</th>
                  <th className="px-4 py-3 font-medium">Recipient</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">When</th>
                  <th className="px-4 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8B31FF]/10">
                {rows.map((n) => (
                  <tr key={n.id} className="hover:bg-[#8B31FF]/5 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-xs font-semibold text-white">{n.title}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-2 max-w-sm">{n.message}</p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-xs text-gray-200 truncate">{n.profiles?.full_name || '—'}</p>
                      <p className="text-[10px] text-gray-500 font-mono">{n.profiles?.email || 'no email'}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 text-[#31A8FF] text-[11px] font-medium">
                        {TYPE_OPTIONS.find((t) => t.value === n.type)?.label || n.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[11px] text-gray-400 whitespace-nowrap">{formatDate(n.created_at)}</td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => void markRead(n.id, !n.read)}
                        disabled={updating === n.id}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium transition disabled:opacity-40 ${
                          n.read ? 'bg-gray-500/10 border-gray-500/20 text-gray-400' : 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                        }`}
                      >
                        {n.read ? <FiCheck size={12} /> : <FiEye size={12} />}
                        {n.read ? 'Read' : 'Mark as read'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {(totalCount > PAGE_SIZE || page > 0) && (
        <div className="flex items-center justify-between gap-3">
          <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-xs font-semibold text-gray-300 hover:bg-[#1E1E1E] disabled:opacity-40 transition">
            <FiChevronLeft size={14} /> Previous
          </button>
          <span className="text-[11px] text-gray-500">
            Page {page + 1} of {Math.max(1, Math.ceil(totalCount / PAGE_SIZE))}
          </span>
          <button onClick={() => setPage((p) => p + 1)} disabled={(page + 1) * PAGE_SIZE >= totalCount}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#171313] border border-[#8B31FF]/20 text-xs font-semibold text-gray-300 hover:bg-[#1E1E1E] disabled:opacity-40 transition">
            Next <FiChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
