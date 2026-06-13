// Minimal Root Layout required by Next.js for global not-found.tsx
// This layout does NOT wrap the localized pages, it only wraps the global 404 page.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
