import { Metadata } from 'next';
import GamingErrorsClient from './GamingErrorsClient';

export const metadata: Metadata = {
  title: 'Game Error Fixes: VAN9003, GTA V, CS2, Roblox and + | VOLTRIS',
  description: 'Immediate solution for critical errors: VAN9003 (Valorant), GTA V/FiveM crashes, CS2 VAC Errors, Roblox Error 268, and DLL failures. Specialized remote gamer technical support.',
  keywords: [
    'game error fixes', 'VAN9003 fix valorant', 'vanguard secure boot fix',
    'GTA V crash loading fix', 'FiveM handshake error', 'CS2 VAC verification fix',
    'Roblox error 268 fix', 'Minecraft OpenGL 65542 fix', 'Fortnite EAC error',
    'DLL game error', '0xc000007b fix', 'remote gamer support', 'voltris optimizer games'
  ],
  openGraph: {
    title: 'Game Error Fixes - Specialized Gamer Technical Support | VOLTRIS',
    description: 'We resolve VAN9003, GTA crashes, VAC Errors, and Roblox 268 remotely in minutes. Get back to gaming now!',
    url: 'https://www.voltrisoptimizer.com/gaming-errors',
    type: 'website',
    images: [{ url: '/logo-seo-gamer.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fix Valorant, GTA, CS2, and Roblox Errors Now | VOLTRIS',
    images: ['/logo-seo-gamer.png']
  }
};

export default function GamingErrorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Game Error Correction",
            "description": "Remote technical support for correcting errors in popular games (GTA, CS2, etc).",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "serviceType": "Gamer Technical Support",
            "areaServed": { "@type": "Country", "name": "Worldwide" }
          })
        }}
      />
      <GamingErrorsClient />
    </>
  );
}
