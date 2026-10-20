'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { FiSearch, FiRefreshCw, FiInbox, FiX } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

/**
 * Admin "Emails" tab for the international panel.
 *
 * It surfaces the transactional email outbox so an operator can see, per
 * message, whether it was accepted for sending vs actually delivered/opened.
 * It never talks to Supabase directly: `email_outbox` has no authenticated
 * read policy by design (it holds other users' email bodies), so this view
 * goes through /api/admin/emails, which gates a privileged server-only read
 * behind an admin session check. No Brazilian currency/locale is used; the
 * data is international and dates render in the en-US source format.
 */
interface OutboxEmail {
  id: string;
  template_type: string;
  recipient_email: string;
  subject: string;
  status: string;
  delivery_status: string | null;
  attempts: number;
  locale: string | null;
  last_error: string | null;
  created_at: string;
  sent_at: string | null;
  delivered_at: string | null;
  opened_at: string | null;
}

const STATUS_OPTIONS = ['all', 'pending', 'processing', 'sent', 'delivered', 'failed'];

function statusTone(status: string): string {
  switch (status) {
    case 'sent':
    case 'delivered':
      return 'bg-green-500/10 text-green-400 border-green-500/30';
    case 'failed':
      return 'bg-red-500/10 text-red-400 border-red-500/30';
    case 'processing':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    default:
      return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
  }
}

function formatDate(value: string | null): string {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function AdminEmailsTab() {
  const [emails, setEmails] = useState<OutboxEmail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<OutboxEmail | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/emails', { cache: 'no-store' });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'Request failed');
      setEmails(json.emails || []);
    } catch (e: any) {
      setError(e?.message || 'Could not load emails');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const requeue = useCallback(
    async (id: string) => {
      try {
        const res = await fetch('/api/admin/emails', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'requeue', id }),
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message || 'Request failed');
        toast.success('Re-queued for sending');
        load();
      } catch (e: any) {
        toast.error(e?.message || 'Could not re-queue');
      }
    },
    [load]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return emails.filter((em) => {
      if (statusFilter !== 'all' && em.status !== statusFilter) return false;
      if (!q) return true;
      return (
        em.recipient_email?.toLowerCase().includes(q) ||
        em.subject?.toLowerCase().includes(q) ||
        em.template_type?.toLowerCase().includes(q)
      );
    });
  }, [emails, statusFilter, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#FF4B6B] to-[#8B31FF] rounded-xl p-3 shadow-lg">
            <FiInbox className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Email Outbox</h2>
            <p className="text-gray-400 text-sm">Delivery log for all transactional emails</p>
          </div>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B31FF]/20 text-white border border-[#8B31FF]/30 hover:bg-[#8B31FF]/30 transition-colors"
        >
          <FiRefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search recipient or subject…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#1E1E1E]/40 border border-gray-800/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#8B31FF] transition-colors"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[#1E1E1E]/40 border border-gray-800/30 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-[#8B31FF] transition-colors"
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt === 'all' ? 'All statuses' : opt}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border border-gray-800/30">
        <table className="w-full text-sm">
          <thead className="bg-[#1E1E1E]/60 text-gray-400">
            <tr>
              <th className="text-left px-4 py-3 font-medium">Recipient</th>
              <th className="text-left px-4 py-3 font-medium">Subject</th>
              <th className="text-left px-4 py-3 font-medium">Template</th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
              <th className="text-left px-4 py-3 font-medium">Attempts</th>
              <th className="text-left px-4 py-3 font-medium">Created</th>
              <th className="text-right px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                  Loading emails…
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-400">
                  No emails found
                </td>
              </tr>
            ) : (
              filtered.map((em) => (
                <tr key={em.id} className="border-t border-gray-800/30 hover:bg-[#1E1E1E]/30 transition-colors">
                  <td className="px-4 py-3 text-white max-w-[220px] truncate">{em.recipient_email}</td>
                  <td className="px-4 py-3 text-gray-300 max-w-[260px] truncate">{em.subject}</td>
                  <td className="px-4 py-3 text-gray-400">{em.template_type}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusTone(em.status)}`}>
                      {em.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{em.attempts}</td>
                  <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{formatDate(em.created_at)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setSelected(em)}
                        className="px-3 py-1 rounded-lg text-gray-300 hover:text-white hover:bg-[#8B31FF]/20 transition-colors"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => requeue(em.id)}
                        className="px-3 py-1 rounded-lg text-[#31A8FF] hover:bg-[#31A8FF]/20 transition-colors"
                      >
                        Re-queue
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1E1E1E] rounded-2xl p-6 max-w-xl w-full max-h-[80vh] overflow-y-auto border border-gray-800/40">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-white">Email details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white">
                <FiX className="w-6 h-6" />
              </button>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Recipient</dt>
                <dd className="text-white text-right break-all">{selected.recipient_email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Subject</dt>
                <dd className="text-white text-right break-all">{selected.subject}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Template</dt>
                <dd className="text-white">{selected.template_type}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Status</dt>
                <dd>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusTone(selected.status)}`}>
                    {selected.status}
                  </span>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Delivery</dt>
                <dd className="text-white">{selected.delivery_status || '—'}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Attempts</dt>
                <dd className="text-white">{selected.attempts}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Sent</dt>
                <dd className="text-white">{formatDate(selected.sent_at)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Delivered</dt>
                <dd className="text-white">{formatDate(selected.delivered_at)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-400">Opened</dt>
                <dd className="text-white">{formatDate(selected.opened_at)}</dd>
              </div>
              {selected.last_error && (
                <div>
                  <dt className="text-gray-400 mb-1">Last error</dt>
                  <dd className="text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg p-3 break-all whitespace-pre-wrap">
                    {selected.last_error}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
}
