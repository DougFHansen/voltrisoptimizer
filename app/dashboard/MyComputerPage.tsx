'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@/utils/supabase/client';
import VoltrisIcon, { type VoltrisIconName } from '@/components/dashboard/VoltrisIcon';
import VoltrisIconTile, { DASHBOARD_ACCENT } from '@/components/dashboard/VoltrisIconTile';
import { toast } from 'react-hot-toast';
import { useDashboard } from '@/app/context/DashboardContext';
import Link from 'next/link';

interface DeviceData {
  id: string;
  pc_name: string;
  os: string;
  cpu: string;
  gpu: string;
  ram: string;
  installation_date: string;
  last_active: string;
  last_heartbeat: string;
  is_online: boolean;
  is_optimized: boolean;
  is_licensed: boolean;
  license_key: string;
}

// i18n note: the dashboard is translated by the DOM SiteTextTranslator, keyed on
// ENGLISH source text. All prose below is therefore authored in English; the
// remote command codes (quick_optimize, gamer_activate, ...) are protocol values
// and are never translated.

// Action Button Component for Remote Commands — Sleek Executive Version
const RemoteAction = ({
  icon,
  label,
  color,
  onClick,
  loading
}: {
  icon: VoltrisIconName;
  label: string;
  color: 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky';
  onClick: () => void;
  loading?: boolean;
}) => {
  const colorStyles: Record<string, string> = {
    indigo: 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-[#8B31FF]/10 hover:border-[#8B31FF]/40 hover:text-white',
    rose: 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-[#EF4444]/10 hover:border-[#EF4444]/40 hover:text-white',
    amber: 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-[#F59E0B]/10 hover:border-[#F59E0B]/40 hover:text-white',
    emerald: 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-[#00FF94]/10 hover:border-[#00FF94]/40 hover:text-white',
    sky: 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-[#38BDF8]/10 hover:border-[#38BDF8]/40 hover:text-white',
  };

  const iconColors: Record<string, string> = {
    indigo: 'text-indigo-400 group-hover:text-[#8B31FF]',
    rose: 'text-rose-400 group-hover:text-[#EF4444]',
    amber: 'text-amber-400 group-hover:text-[#F59E0B]',
    emerald: 'text-emerald-400 group-hover:text-[#00FF94]',
    sky: 'text-sky-400 group-hover:text-[#38BDF8]',
  };

  const activeColor = colorStyles[color] || colorStyles.indigo;
  const iconColor = iconColors[color] || iconColors.indigo;

  return (
    <button
      type="button"
      disabled={loading}
      onClick={onClick}
      title={label}
      className={`
        flex items-center justify-between px-2.5 h-[34px] rounded-lg border text-xs font-medium transition-all duration-150 group text-left w-full
        ${activeColor}
        ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer active:scale-[0.98] shadow-sm'}
      `}
    >
      <div className="flex items-center gap-2 min-w-0">
        <VoltrisIcon
          name={icon}
          size={13}
          className={`shrink-0 ${iconColor} transition-colors ${loading ? 'animate-spin' : ''}`}
        />
        <span className="truncate text-[11px] font-medium text-slate-200 group-hover:text-white select-none">
          {label}
        </span>
      </div>
      {loading ? (
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-slate-700/60 group-hover:bg-current opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
      )}
    </button>
  );
};

export default function MyComputerPage({ userId }: { userId: string }) {
  const { transparencyMode } = useDashboard();
  const [devices, setDevices] = useState<DeviceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [commandLoading, setCommandLoading] = useState<string | null>(null);
  const [showUnlinkModal, setShowUnlinkModal] = useState<string | null>(null);
  const [confirmPowerModal, setConfirmPowerModal] = useState<{
    deviceId: string;
    command: 'shutdown' | 'restart_link';
    title: string;
    description: string;
  } | null>(null);
  const supabase = useMemo(() => createClient(), []);

  const fetchDevices = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    try {
      const { data, error } = await supabase
        .from('installations')
        .select('*')
        .eq('user_id', userId)
        .order('last_heartbeat', { ascending: false });

      if (error) throw error;

      const now = new Date();
      const processedData = (data || []).map(device => {
        const lastHeartbeat = new Date(device.last_heartbeat || device.last_active);
        const diffMinutes = (now.getTime() - lastHeartbeat.getTime()) / (1000 * 60);

        return {
          ...device,
          is_online: diffMinutes < 15,
          pc_name: device.pc_name || `PC-${device.id.substring(0, 4).toUpperCase()}`,
          cpu: device.cpu_name,
          gpu: device.gpu_name,
          ram: device.ram_gb_total ? `${device.ram_gb_total} GB` : undefined,
          os: device.os_name
        };
      });

      setDevices(processedData);
    } catch (error) {
      console.error('Error fetching devices:', error);
    } finally {
      setLoading(false);
    }
  }, [userId, supabase]);

  useEffect(() => {
    if (!userId) return;

    // Initial fetch on mount — a single request.
    fetchDevices();

    // Real-time: Supabase Realtime pushes changes over WebSocket.
    // There is no polling — the callback only fires when the database changes.
    const channel = supabase
      .channel(`installations:${userId}`)
      .on('postgres_changes' as any, { event: '*', table: 'installations', filter: `user_id=eq.${userId}` }, fetchDevices)
      .subscribe();

    return () => {
      channel.unsubscribe();
      supabase.removeChannel(channel);
    };
  }, [fetchDevices, supabase, userId]);

  const handleRemoteCommand = async (deviceId: string, command: string) => {
    setCommandLoading(`${deviceId}-${command}`);

    try {
      const response = await fetch('/api/v1/commands/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          installation_id: deviceId,
          command_type: command,
          payload: { source: 'dashboard', timestamp: new Date().toISOString() }
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to send command');
      }

      toast.success(`Command '${command}' sent successfully!`, {
        icon: '⚡',
        style: {
          background: 'rgba(15, 23, 42, 0.95)',
          color: '#fff',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          backdropFilter: 'blur(10px)',
          borderRadius: '0.75rem',
          fontSize: '0.8125rem'
        }
      });
    } catch (err: any) {
      toast.error(`Failed: ${err.message || 'Unknown error'}`);
    } finally {
      setCommandLoading(null);
    }
  };

  const handleUnlink = async (id: string) => {
    const loadingId = toast.loading('Unlinking hardware...');
    try {
      const response = await fetch('/api/v1/install/unlink', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ installation_id: id })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const reason = data?.error || `HTTP ${response.status}`;
        const corr = data?.correlation_id ? ` (id: ${data.correlation_id})` : '';
        console.error('[UNLINK] Failed:', response.status, data);
        throw new Error(`${reason}${corr}`);
      }

      if (data?.verified !== true && data?.already_unlinked !== true) {
        throw new Error('The server did not confirm the unlink.');
      }

      toast.success('Device unlinked successfully.', { id: loadingId, icon: '🗑️' });
      fetchDevices();
      setShowUnlinkModal(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'unknown error';
      console.error('[UNLINK] Error:', err);
      toast.error(`Unlink failed: ${message}`, { id: loadingId, duration: 8000 });
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-400">
        <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-indigo-500 animate-spin" />
        <p className="text-xs font-medium text-slate-400">Syncing computer telemetry...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3.5">
            <VoltrisIconTile icon="system" tone="gradient" size={10} />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">My Computer</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time hardware telemetry and remote command management.
          </p>
        </div>

        <Link
          href="/voltrisoptimizer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-95 shrink-0"
        >
          <VoltrisIcon name="download" size={16} />
          <span>Download Voltris Optimizer</span>
        </Link>
      </div>

      {devices.length === 0 ? (
        <div className={`p-10 sm:p-14 rounded-2xl border border-slate-800 text-center flex flex-col items-center gap-4 ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/40'}`}>
          <VoltrisIconTile icon="display" accent={DASHBOARD_ACCENT.brand} size={14} />
          <div className="space-y-1.5 max-w-md">
            <h3 className="text-base font-semibold text-white">No computer connected</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open Voltris Optimizer on your machine to automatically sync hardware information with your panel.
            </p>
          </div>
          <Link
            href="/voltrisoptimizer"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-950 font-semibold text-xs rounded-xl hover:bg-slate-100 transition-all shadow-md active:scale-95"
          >
            <VoltrisIcon name="download" size={16} />
            <span>Get Voltris Optimizer</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {devices.map((device) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-300
                ${transparencyMode ? 'voltris-glass' : 'bg-slate-900/60 border-slate-800 shadow-xl'}
                hover:border-slate-700
              `}
            >
              <div className="relative z-10 flex flex-col xl:flex-row">

                {/* Visual Identity / Host Info */}
                <div className="p-6 xl:w-72 flex flex-col items-center justify-between text-center border-b xl:border-b-0 xl:border-r border-slate-800/80 bg-slate-950/40 shrink-0">
                  <div className="flex flex-col items-center w-full">
                    {/* Monitor Icon Box */}
                    <div className="relative mb-4 mt-1">
                      <div className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center border transition-all ${
                        device.is_online
                          ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400 shadow-lg shadow-indigo-500/10'
                          : 'bg-slate-800/60 border-slate-700 text-slate-500'
                      }`}>
                        <VoltrisIcon name="display" size={36} />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center ${
                        device.is_online ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-400'
                      }`}>
                        {device.is_online ? <VoltrisIcon name="bolt" size={14} /> : <VoltrisIcon name="power" size={14} />}
                      </div>
                    </div>

                    {/* PC Name & Status */}
                    <h3 className="text-base font-bold text-white tracking-tight truncate max-w-full px-2" title={device.pc_name}>
                      {device.pc_name}
                    </h3>

                    <div className="mt-2.5 flex flex-col items-center gap-1.5 w-full">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
                        device.is_online
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${device.is_online ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                        {device.is_online ? 'Connected' : 'Offline'}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        Last signal: {new Date(device.last_heartbeat || device.last_active).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowUnlinkModal(device.id)}
                    className="mt-6 flex items-center justify-center gap-2 px-3.5 py-2 w-full rounded-xl border border-rose-500/20 bg-rose-500/5 text-rose-400 hover:bg-rose-500/15 hover:border-rose-500/30 text-xs font-medium transition-all active:scale-95"
                  >
                    <VoltrisIcon name="trash" size={14} />
                    <span>Unlink Device</span>
                  </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0">

                  {/* Real-time Status Ribbons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/80 border-b border-slate-800/80">
                    {([
                      { label: 'Network Status', value: device.is_online ? 'Online' : 'Awaiting', icon: 'activity', color: device.is_online ? 'text-emerald-400' : 'text-slate-500' },
                      { label: 'Optimization', value: device.is_optimized ? 'Optimized' : 'Default', icon: 'bolt', color: device.is_optimized ? 'text-indigo-400' : 'text-slate-400' },
                      { label: 'Security', value: 'Monitoring', icon: 'security', color: 'text-emerald-400' },
                      { label: 'License', value: device.is_licensed ? 'Active' : 'Pending', icon: 'check', color: device.is_licensed ? 'text-indigo-400' : 'text-amber-400' },
                    ] as const).map((stat, i) => (
                      <div key={i} className="px-4 py-3 sm:px-5 sm:py-4 flex flex-col gap-1 bg-slate-950/50">
                        <div className="flex items-center justify-between text-slate-500">
                          <span className="text-[10px] font-medium uppercase tracking-wider">{stat.label}</span>
                          <VoltrisIcon name={stat.icon} size={14} className="opacity-60" />
                        </div>
                        <span className={`text-xs font-semibold ${stat.color}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hardware Specification Architecture */}
                  <div className="p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950/30">
                    <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 flex items-start gap-3">
                      <VoltrisIconTile icon="system" accent={DASHBOARD_ACCENT.brand} size={8} bordered={false} />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-0.5">Processor</span>
                        <span className="block text-xs font-semibold text-slate-200 truncate" title={device.cpu || 'Not detected'}>
                          {device.cpu || 'Not detected'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 flex items-start gap-3">
                      <VoltrisIconTile icon="activity" accent={DASHBOARD_ACCENT.brand} size={8} bordered={false} />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-0.5">RAM Memory</span>
                        <span className="block text-xs font-semibold text-slate-200 truncate">
                          {device.ram || 'Not detected'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 flex items-start gap-3">
                      <VoltrisIconTile icon="display" accent={DASHBOARD_ACCENT.success} size={8} bordered={false} />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-0.5">Graphics Card</span>
                        <span className="block text-xs font-semibold text-slate-200 truncate" title={device.gpu || 'Default hardware'}>
                          {device.gpu || 'Default hardware'}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/40 flex items-start gap-3">
                      <VoltrisIconTile icon="disk" accent={DASHBOARD_ACCENT.warning} size={8} bordered={false} />
                      <div className="min-w-0">
                        <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500 mb-0.5">System</span>
                        <span className="block text-xs font-semibold text-slate-200 truncate" title={device.os || 'Windows'}>
                          {device.os || 'Windows'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Remote Command Terminal */}
                  <div className="border-t border-slate-800/80 bg-slate-950/50 p-4 sm:p-5 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                            Real-Time Remote Actions
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Send instant maintenance instructions and routines to the connected computer
                        </p>
                      </div>

                      {/* Header Quick Power Action */}
                      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                        <button
                          type="button"
                          disabled={commandLoading === `${device.id}-shutdown`}
                          onClick={() => setConfirmPowerModal({
                            deviceId: device.id,
                            command: 'shutdown',
                            title: 'Shut Down Computer',
                            description: 'A shutdown command will be sent to the connected computer. The machine will be safely powered off in 10 seconds.'
                          })}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-medium transition-all active:scale-95 shadow-sm group"
                          title="Shut Down Computer Remotely"
                        >
                          <VoltrisIcon name="power" size={13} className="text-rose-400 group-hover:scale-110 transition-transform" />
                          <span>Shut Down PC</span>
                        </button>
                      </div>
                    </div>

                    {/* Symmetrical 4-Module Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                      {/* 1. Performance & Gamer */}
                      <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between space-y-2.5">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-800/50">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
                              Performance & Gamer
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase">4 actions</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-1.5">
                          <RemoteAction icon="bolt" label="Optimize" color="indigo" onClick={() => handleRemoteCommand(device.id, 'quick_optimize')} loading={commandLoading === `${device.id}-quick_optimize`} />
                          <RemoteAction icon="cleanup" label="Quick Cleanup" color="indigo" onClick={() => handleRemoteCommand(device.id, 'quick_cleanup')} loading={commandLoading === `${device.id}-quick_cleanup`} />
                          <RemoteAction icon="gamer" label="Activate Gamer" color="indigo" onClick={() => handleRemoteCommand(device.id, 'gamer_activate')} loading={commandLoading === `${device.id}-gamer_activate`} />
                          <RemoteAction icon="boltOff" label="Deactivate Gamer" color="rose" onClick={() => handleRemoteCommand(device.id, 'gamer_deactivate')} loading={commandLoading === `${device.id}-gamer_deactivate`} />
                        </div>
                      </div>

                      {/* 2. Disk & Repair */}
                      <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between space-y-2.5">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-800/50">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                              Disk & Repair
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase">4 actions</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-1.5">
                          <RemoteAction icon="search" label="Analyze Disk" color="emerald" onClick={() => handleRemoteCommand(device.id, 'cleanup_analyze')} loading={commandLoading === `${device.id}-cleanup_analyze`} />
                          <RemoteAction icon="trash" label="Clean All" color="emerald" onClick={() => handleRemoteCommand(device.id, 'cleanup_execute')} loading={commandLoading === `${device.id}-cleanup_execute`} />
                          <RemoteAction icon="repair" label="DISM + SFC" color="amber" onClick={() => handleRemoteCommand(device.id, 'repair_dism_sfc')} loading={commandLoading === `${device.id}-repair_dism_sfc`} />
                          <RemoteAction icon="disk" label="Clean Windows" color="amber" onClick={() => handleRemoteCommand(device.id, 'repair_disk_cleanup')} loading={commandLoading === `${device.id}-repair_disk_cleanup`} />
                        </div>
                      </div>

                      {/* 3. Network & Connection */}
                      <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between space-y-2.5">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-800/50">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">
                              Network & Connection
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase">4 actions</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-1.5">
                          <RemoteAction icon="network" label="Optimize Network" color="sky" onClick={() => handleRemoteCommand(device.id, 'network_optimize')} loading={commandLoading === `${device.id}-network_optimize`} />
                          <RemoteAction icon="processing" label="Flush DNS" color="sky" onClick={() => handleRemoteCommand(device.id, 'network_flush_dns')} loading={commandLoading === `${device.id}-network_flush_dns`} />
                          <RemoteAction icon="settings" label="Reset Winsock" color="sky" onClick={() => handleRemoteCommand(device.id, 'network_reset_winsock')} loading={commandLoading === `${device.id}-network_reset_winsock`} />
                          <RemoteAction icon="terminal" label="Reset TCP/IP" color="sky" onClick={() => handleRemoteCommand(device.id, 'network_reset_tcp')} loading={commandLoading === `${device.id}-network_reset_tcp`} />
                        </div>
                      </div>

                      {/* 4. Security & System */}
                      <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-900/40 flex flex-col justify-between space-y-2.5">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-800/50">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
                              Security & System
                            </span>
                          </div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase">4 actions</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-1.5">
                          <RemoteAction icon="security" label="Quick Scan" color="rose" onClick={() => handleRemoteCommand(device.id, 'shield_quick_scan')} loading={commandLoading === `${device.id}-shield_quick_scan`} />
                          <RemoteAction icon="security" label="Full Scan" color="rose" onClick={() => handleRemoteCommand(device.id, 'shield_full_scan')} loading={commandLoading === `${device.id}-shield_full_scan`} />
                          <RemoteAction icon="alertCircle" label="Adware Scan" color="rose" onClick={() => handleRemoteCommand(device.id, 'shield_adware_scan')} loading={commandLoading === `${device.id}-shield_adware_scan`} />
                          <RemoteAction icon="processing" label="Restart PC" color="amber" onClick={() => setConfirmPowerModal({
                            deviceId: device.id,
                            command: 'restart_link',
                            title: 'Restart Computer',
                            description: 'A remote restart command will be sent to the computer. The machine will be safely restarted in 10 seconds.'
                          })} loading={commandLoading === `${device.id}-restart_link`} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showUnlinkModal && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setShowUnlinkModal(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-md p-6 rounded-2xl border border-slate-800 shadow-2xl text-center flex flex-col items-center ${
                transparencyMode ? 'voltris-glass' : 'bg-slate-900'
              }`}
            >
              <VoltrisIconTile icon="alertCircle" accent={DASHBOARD_ACCENT.danger} size={12} className="mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Unlink Device</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs">
                Are you sure you want to unlink this device? Voltris Optimizer will stop receiving commands and updates until it is linked again.
              </p>
              <div className="flex w-full gap-3">
                <button
                  type="button"
                  onClick={() => setShowUnlinkModal(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-medium text-xs hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleUnlink(showUnlinkModal)}
                  className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-lg shadow-rose-600/20 transition-all active:scale-95"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </div>
        )}
        {confirmPowerModal && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              onClick={() => setConfirmPowerModal(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative w-full max-w-md p-6 rounded-2xl border border-slate-800 shadow-2xl text-center flex flex-col items-center ${
                transparencyMode ? 'voltris-glass' : 'bg-slate-900'
              }`}
            >
              <VoltrisIconTile
                icon={confirmPowerModal.command === 'shutdown' ? 'power' : 'processing'}
                accent={confirmPowerModal.command === 'shutdown' ? DASHBOARD_ACCENT.danger : DASHBOARD_ACCENT.warning}
                size={12}
                className="mb-4"
              />
              <h3 className="text-lg font-bold text-white mb-2">{confirmPowerModal.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-xs">
                {confirmPowerModal.description}
              </p>
              <div className="flex w-full gap-3">
                <button
                  type="button"
                  onClick={() => setConfirmPowerModal(null)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-medium text-xs hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const { deviceId, command } = confirmPowerModal;
                    setConfirmPowerModal(null);
                    handleRemoteCommand(deviceId, command);
                  }}
                  className={`flex-1 py-2.5 rounded-xl text-white font-semibold text-xs shadow-lg transition-all active:scale-95 ${
                    confirmPowerModal.command === 'shutdown'
                      ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-600/20'
                      : 'bg-amber-600 hover:bg-amber-500 shadow-amber-600/20'
                  }`}
                >
                  Confirm Action
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
