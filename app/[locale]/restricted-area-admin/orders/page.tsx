import { redirect } from 'next/navigation';

/**
 * Admin Orders used to live in two parallel interfaces: this standalone
 * page and the consolidated Admin Panel "orders" tab (AdminOrdersTab).
 * Two UIs for the same data is the kind of parallel system we must avoid,
 * and this standalone page additionally hardcoded a Brazilian currency
 * symbol on international order amounts.
 *
 * The route is preserved as a redirect (so any existing notification link
 * keeps working) but the real interface is the single admin entry point at
 * `restricted-area-admin?tab=orders`.
 */
export default async function AdminOrdersRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/restricted-area-admin?tab=orders`);
}
