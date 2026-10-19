import type { VoltrisIconName } from './VoltrisIcon';

/**
 * Single source of truth for the user dashboard tabs.
 *
 * Each entry mirrors an item of the desktop app navigation
 * (D:\APLICATIVO VOLTRIS\UI\MainWindow.xaml:536-711): same icon geometry and
 * same color accent as the inline `Fill` the app renders at runtime.
 *
 * Labels are the English source-of-truth text; the runtime DOM translator
 * (SiteTextTranslator, provided by ClientLocaleI18n) localizes them per locale.
 * The `appSource` column records which desktop sidebar item the color came from,
 * so the mapping stays auditable and does not look arbitrary.
 */

export interface DashboardTab {
  /** Label shown in the navigation (English source-of-truth). */
  label: string;
  /** Stable identifier. */
  value: string;
  /** Icon geometry (24x24, fill only). */
  icon: VoltrisIconName;
  /** Icon accent — fill + glow. */
  color: string;
  /** Destination route. */
  path: string;
  /** Virtual tab via query string (used on the app's real routes). */
  query?: { tab: string };
  /** Corresponding item in the desktop app sidebar. */
  appSource: string;
}

export const DASHBOARD_TABS: DashboardTab[] = [
  {
    label: 'Overview',
    value: 'overview',
    icon: 'home',
    color: '#31A8FF',
    path: '/dashboard',
    query: { tab: 'overview' },
    appSource: 'NavDashboard',
  },
  {
    label: 'My Licenses',
    value: 'licenses',
    icon: 'license',
    color: '#8B31FF',
    path: '/dashboard',
    query: { tab: 'licenses' },
    appSource: 'NavShield',
  },
  {
    label: 'Orders',
    value: 'orders',
    icon: 'orders',
    color: '#00D4FF',
    path: '/dashboard',
    query: { tab: 'orders' },
    appSource: 'NetworkIcon / InfoColor',
  },
  {
    label: 'My Computer',
    value: 'pc',
    icon: 'system',
    color: '#6366F1',
    path: '/dashboard',
    query: { tab: 'pc' },
    appSource: 'NavDiagnostics',
  },
  {
    label: 'Security',
    value: 'security',
    icon: 'security',
    color: '#EF4444',
    path: '/dashboard',
    query: { tab: 'security' },
    appSource: 'NavSecurity',
  },
  {
    label: 'New Orders',
    value: 'new-order',
    icon: 'bolt',
    color: '#FB923C',
    path: '/dashboard/new-order',
    appSource: 'NavRepair',
  },
  {
    label: 'Companies',
    value: 'companies',
    icon: 'streamHub',
    color: '#9146FF',
    path: '/dashboard/companies',
    appSource: 'NavStreamHub',
  },
  {
    label: 'My Profile',
    value: 'profile',
    icon: 'person',
    color: '#EC4899',
    path: '/dashboard/profile',
    appSource: 'DashboardView.xaml:2764',
  },
  {
    label: 'Support',
    value: 'tickets',
    icon: 'support',
    color: '#F59E0B',
    path: '/dashboard/tickets',
    appSource: 'NavPersonalize / NavShortcuts',
  },
  // ── Tabs that existed as a page but had no navigation entry ──
  {
    label: 'Notifications',
    value: 'notifications',
    icon: 'bell',
    color: '#10B981',
    path: '/dashboard/notifications',
    appSource: 'NavRecovery',
  },
  {
    label: 'Devices',
    value: 'devices',
    icon: 'deviceInfo',
    color: '#06B6D4',
    path: '/dashboard/companies/devices',
    appSource: 'NavDrivers / NavDisplay',
  },
  {
    label: 'Gamer',
    value: 'gamer',
    icon: 'gamer',
    color: '#FF6B35',
    path: '/dashboard/gamer',
    appSource: 'NavGamer',
  },
];

/**
 * Resolves whether a tab is active. Preserves exactly the logic already used by
 * the Sidebar: virtual tabs match by query string on the `/dashboard` route, and
 * the others match by route prefix.
 */
export function isDashboardTabActive(
  tab: DashboardTab,
  pathname: string,
  searchParams: URLSearchParams | null
): boolean {
  if (tab.path === '/dashboard') {
    const current = searchParams?.get('tab');
    if (tab.query?.tab === 'overview') {
      return pathname === '/dashboard' && (!current || current === 'overview');
    }
    return pathname === '/dashboard' && current === tab.query?.tab;
  }
  return pathname.startsWith(tab.path);
}
