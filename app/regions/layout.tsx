import ClientLocaleI18n from "@/components/ClientLocaleI18n";

/**
 * /regions is a middleware "bypass" route (no [locale] segment), so the
 * localized layout's i18n context/DOM translator never runs for it and the page
 * was stuck in English. Wrap the tree in the cookie-driven locale provider so
 * both inline t() calls (RegionsClient) and static DOM text follow the user's
 * chosen language like the rest of the site.
 */
export default function RegionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLocaleI18n>{children}</ClientLocaleI18n>;
}
