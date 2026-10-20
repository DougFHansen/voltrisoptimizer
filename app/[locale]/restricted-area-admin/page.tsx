'use client';

import { useAuth } from '@/app/hooks/useAuth';
import AuthGuard from '@/components/AuthGuard';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import VoltrisIcon, { VoltrisIconName } from '@/components/dashboard/VoltrisIcon';
import { useNotificationContext } from '@/components/notifications/NotificationContext';
import AdminOrdersTab from './orders/AdminOrdersTab';
import AdminTicketsTab from './tickets/AdminTicketsTab';
import AdminNewsletterTab from './newsletter/AdminNewsletterTab';
import AdminUsersTab from './users/AdminUsersTab';
import AdminNotificationsTab from './notifications/AdminNotificationsTab';
import AdminOverviewTab from './overview/AdminOverviewTab';
import AdminEmailsTab from './emails/AdminEmailsTab';
import NotificationTester from '../../components/NotificationTester';
import LanguageSelector from '@/components/LanguageSelector';

/**
 * ADMIN PANEL — same visual system as the user dashboard.
 *
 * The panel and the dashboard are the SAME interface at two access levels
 * (mirrors the reference layout): the sidebar uses the dashboard's menu
 * system (`.vtab` + colored `VoltrisIcon` glyphs), the same profile card and
 * the same collapse rail. The previous horizontal tab bar was replaced so
 * administrators get the same navigation muscle memory in both areas.
 */

const tabs: { label: string; value: string; icon: VoltrisIconName; color: string }[] = [
    { label: 'Overview',      value: 'overview',      icon: 'home',       color: '#31A8FF' },
    { label: 'Orders',        value: 'orders',        icon: 'package',    color: '#9146FF' },
    { label: 'Tickets',       value: 'tickets',       icon: 'support',    color: '#EC4899' },
    { label: 'Emails', value: 'emails', icon: 'send', color: '#6366F1' },
    { label: 'Newsletter',    value: 'newsletter',    icon: 'mail',       color: '#10B981' },
    { label: 'Users',         value: 'users',         icon: 'person',     color: '#8B31FF' },
    { label: 'Notifications', value: 'notifications', icon: 'bell',       color: '#31A8FF' },
];

export default function AdminDashboard() {
    const { user, loading, error } = useAuth();
    const { unreadCount } = useNotificationContext();

    // Deep link: /restricted-area-admin?tab=orders opens that tab directly.
    // This keeps a single admin entry point (no duplicate standalone pages)
    // and matches the consolidated navigation targeted by notification
    // action URLs.
    useEffect(() => {
        const requested = new URLSearchParams(window.location.search).get('tab');
        if (requested && tabs.some((t) => t.value === requested)) {
            setActiveTab(requested);
        }
    }, []);

    const [activeTab, setActiveTab] = useState('overview');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0f] text-white">
                <div className="text-center space-y-4">
                    <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Checking access…</p>
                </div>
            </div>
        );
    }

    const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
        <div className={`h-full flex flex-col ${!isMobile && sidebarCollapsed ? 'items-center px-3' : 'px-5'} py-6 relative`}>
            {/* Admin badge */}
            <div className={`flex items-center gap-2.5 mb-8 ${!isMobile && sidebarCollapsed ? 'justify-center' : ''}`}>
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-[#FF4B6B]/20 to-[#8B31FF]/20 border border-[#8B31FF]/30 flex items-center justify-center">
                    <VoltrisIcon name="activity" size={20} className="text-indigo-300" />
                </div>
                {(!sidebarCollapsed || isMobile) && (
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-xs tracking-wider uppercase text-white">Voltris</span>
                        <span className="text-[10px] font-medium text-indigo-400 uppercase tracking-widest leading-tight mt-0.5">Admin</span>
                    </div>
                )}
            </div>

            {/* Collapse Toggle */}
            {!isMobile && (
                <button
                    onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    aria-label="Collapse menu"
                    className="absolute -right-3 top-8 w-6 h-6 rounded-full bg-slate-900 hover:bg-indigo-600 border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-white transition-all z-50"
                >
                    <VoltrisIcon name="chevronRight" size={12} className={sidebarCollapsed ? '' : 'rotate-180'} />
                </button>
            )}

            {/* Admin Profile */}
            <div className={`mb-6 ${!isMobile && sidebarCollapsed ? 'w-10 mx-auto' : 'w-full'}`}>
                <div className={`flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 ${!isMobile && sidebarCollapsed ? 'justify-center' : ''}`}>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/70 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-indigo-300">{user?.email?.[0]?.toUpperCase() || 'A'}</span>
                    </div>
                    {(!sidebarCollapsed || isMobile) && (
                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-slate-200 truncate">System Admin</p>
                            <p className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">Top level</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Nav — same menu system as the dashboard (.vtab + colored icon) */}
            <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar relative z-10">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.value;
                    const isRail = !isMobile && sidebarCollapsed;
                    return (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() => { setActiveTab(tab.value); setMobileMenuOpen(false); }}
                            aria-current={isActive ? 'page' : undefined}
                            title={isRail ? tab.label : ''}
                            style={{ '--vtab-color': tab.color } as React.CSSProperties}
                            className={`vtab w-full text-left border-0 bg-transparent ${isRail ? 'vtab--rail p-3' : 'px-3.5 py-2.5'}`}
                        >
                            <VoltrisIcon name={tab.icon} className="vtab__ico" />
                            {!isRail && <span className="vtab__label truncate">{tab.label}</span>}
                            {!isRail && tab.value === 'notifications' && unreadCount > 0 && (
                                <span className="relative z-10 ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-[10px] font-bold text-white">
                                    {unreadCount > 99 ? '99+' : unreadCount}
                                </span>
                            )}
                        </button>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="pt-4 mt-4 border-t border-white/5 flex-shrink-0 space-y-1">
                <Link
                    href="/dashboard"
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all ${!isMobile && sidebarCollapsed ? 'justify-center' : ''}`}
                >
                    <VoltrisIcon name="orders" size={16} className="text-amber-500" />
                    {(!sidebarCollapsed || isMobile) && <span className="text-xs font-semibold">User Panel</span>}
                </Link>
            </div>
        </div>
    );

    const currentTab = tabs.find((t) => t.value === activeTab);

    return (
        <AuthGuard requireAdmin={true}>
            <div className="flex min-h-full w-full font-sans text-white selection:bg-[#8B31FF]/30">

                {/* Desktop Sidebar */}
                <aside
                    className={`hidden lg:flex flex-col self-stretch transition-all duration-500 ease-in-out border-r border-white/5 z-40 flex-shrink-0 ${sidebarCollapsed ? 'w-24' : 'w-72 xl:w-80'} bg-[#12121A]`}
                >
                    <SidebarContent />
                </aside>

                {/* Mobile Drawer */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 z-[150] lg:hidden">
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                                className="absolute top-0 left-0 h-full w-[85%] max-w-sm bg-[#0a0a0f] border-r border-white/5 shadow-2xl"
                            >
                                <SidebarContent isMobile />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Main Area */}
                <div className="flex flex-1 flex-col min-w-0">

                    {/* Top Header */}
                    <header className="px-1 sm:px-4 py-3 flex items-center justify-between border-b border-slate-800/80 z-30 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open menu"
                                className="lg:hidden p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition"
                            >
                                <VoltrisIcon name="menu" size={16} />
                            </button>
                            <div>
                                <h2 className="text-sm font-bold text-white leading-none">Operations Center</h2>
                                <p className="text-[10px] text-slate-500 font-medium mt-0.5 uppercase tracking-widest">
                                    {currentTab?.label}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <LanguageSelector />
                        </div>
                    </header>

                    {/* Content */}
                    <div className="flex-1 px-1 sm:px-4 py-5 relative z-10">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ type: 'spring', damping: 22, stiffness: 120, duration: 0.3 }}
                            className="max-w-[1400px] mx-auto w-full pb-10"
                        >
                            {error && (
                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3 mb-5 flex items-center gap-3">
                                    <VoltrisIcon name="warning" size={16} className="text-amber-400 flex-shrink-0" />
                                    <p className="text-amber-300/90 text-xs">{error}</p>
                                </div>
                            )}

                            {activeTab === 'overview' && <AdminOverviewTab />}
                            {activeTab === 'orders' && <AdminOrdersTab />}
                            {activeTab === 'tickets' && <AdminTicketsTab />}
                            {activeTab === 'emails' && <AdminEmailsTab />}
                            {activeTab === 'newsletter' && <AdminNewsletterTab />}
                            {activeTab === 'users' && <AdminUsersTab />}
                            {activeTab === 'notifications' && <AdminNotificationsTab />}
                        </motion.div>

                        {/* Push Notification Tester - Admin Only */}
                        <div className="max-w-[1400px] mx-auto w-full mt-6 p-6 bg-gradient-to-r from-[#1E1E1E]/80 to-[#2A2A2A]/80 rounded-xl border border-[#8B31FF]/20">
                            <NotificationTester />
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}
