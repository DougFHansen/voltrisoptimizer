/** @type {import('next').Config} */
const nextConfig = {
  // Performance global otimizada
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'framer-motion',
      '@heroicons/react',
    ],
    // Build otimizado para global
    serverMinification: true,
    serverSourceMaps: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['sharp'],
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'vjscxpxvdfhryixksrno.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
      },
    ],
  },
  async redirects() {
    return [
      // ============================================================
      // CANONICALIZAÇÃO WWW - SEO CRÍTICO
      // ============================================================
      { 
        source: '/:path*', 
        has: [{ type: 'host', value: 'voltrisoptimizer.com' }], 
        destination: 'https://www.voltrisoptimizer.com/:path*', 
        permanent: true 
      },
      { 
        source: '/', 
        has: [{ type: 'host', value: 'voltrisoptimizer.com' }], 
        destination: 'https://www.voltrisoptimizer.com/', 
        permanent: true 
      },

      // ============================================================
      // REDIRECTS DE SERVIÇOS (existentes - atualizados para inglês)
      // ============================================================
      { source: '/todos-os-servicos/criacao-de-sites/plano-profissional', destination: '/create-website', permanent: true },
      { source: '/todos-os-servicos/criacao-de-sites/plano-empresarial', destination: '/create-website', permanent: true },
      { source: '/todos-os-servicos/otimizacao-de-windows/otimizacao-para-jogos', destination: '/pc-optimization', permanent: true },
      { source: '/todos-os-servicos/otimizacao-de-windows/otimizacao-para-trabalho', destination: '/pc-optimization', permanent: true },
      { source: '/todos-os-servicos/manutencao-preventiva/check-up-completo', destination: '/it-technician', permanent: true },
      { source: '/servicos/otimizacao-pc', destination: '/pc-optimization', permanent: true },
      { source: '/servicos/tecnico-informatica', destination: '/it-technician', permanent: true },
      { source: '/servicos/criar-site', destination: '/create-website', permanent: true },
      { source: '/vendas', destination: '/restricted-area-admin', permanent: true },
      { source: '/profile', destination: '/perfil', permanent: true },
      { source: '/admin/:path*', destination: '/restricted-area-admin/:path*', permanent: true },
      { source: '/blog/:slug*', destination: '/guides', permanent: true },
      { source: '/blog', destination: '/guides', permanent: true },

      // ============================================================
      // REDIRECTS DE DOMÍNIOS ANTIGOS PARA VOLTRISOPTIMIZER.COM
      // ============================================================
      { source: '/:path*', has: [{ type: 'host', value: 'voltris.com' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.voltris.com' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'voltris.com.br' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.voltris.com.br' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'voltris.co.uk' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.voltris.co.uk' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'voltris.de' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },
      { source: '/:path*', has: [{ type: 'host', value: 'www.voltris.de' }], destination: 'https://www.voltrisoptimizer.com/:path*', permanent: true },

      // ============================================================
      // REDIRECTS DE ROTAS PORTUGUÊS → INGLÊS (301)
      // ============================================================
      { source: '/servicos', destination: '/services', permanent: true },
      { source: '/sobre', destination: '/about', permanent: true },
      { source: '/contato', destination: '/contact', permanent: true },
      { source: '/guias', destination: '/guides', permanent: true },
      { source: '/adquirir-licenca', destination: '/buy-license', permanent: true },
      { source: '/otimizacao-pc', destination: '/pc-optimization', permanent: true },
      { source: '/formatar-windows', destination: '/format-windows', permanent: true },
      { source: '/assistencia-tecnica', destination: '/technical-support', permanent: true },
      { source: '/tecnico-informatica', destination: '/it-technician', permanent: true },
      { source: '/suporte-tecnico-remoto', destination: '/remote-technical-support', permanent: true },
      { source: '/erros-jogos', destination: '/gaming-errors', permanent: true },
      { source: '/manutencao-computador', destination: '/computer-maintenance', permanent: true },
      { source: '/criar-site', destination: '/create-website', permanent: true },
      { source: '/exterior', destination: '/international', permanent: true },
      { source: '/politica-privacidade', destination: '/privacy-policy', permanent: true },
      { source: '/termos-uso', destination: '/terms-of-use', permanent: true },
      { source: '/todos-os-servicos', destination: '/all-services', permanent: true },
      { source: '/servicos-sp', destination: '/services-sp', permanent: true },
      { source: '/servicos-combinados', destination: '/combined-services', permanent: true },
      { source: '/integracao-servicos', destination: '/services-integration', permanent: true },
      { source: '/tecnico-informatica-em/:path*', destination: '/it-technician-in/:path*', permanent: true },
      { source: '/tecnico-informatica-atende-casa', destination: '/it-technician-home-visit', permanent: true },
      { source: '/tecnico-informatica-minha-regiao', destination: '/it-technician-my-region', permanent: true },

      // Redirecionamentos de rotas antigas consolidadas (atualizados para inglês)
      { source: '/suporte-tecnico', destination: '/remote-technical-support', permanent: true },
      { source: '/assistencia', destination: '/technical-support', permanent: true },
      { source: '/otimizacao', destination: '/pc-optimization', permanent: true },
      { source: '/formatacao', destination: '/format-windows', permanent: true },
      { source: '/manutencao', destination: '/computer-maintenance', permanent: true },
      { source: '/tecnico', destination: '/it-technician', permanent: true },
      { source: '/voltris-optimizer', destination: '/voltrisoptimizer', permanent: true },

      // Redirecionamentos de bloqueios foram removidos porque o 308 Redirect causava um loop infinito de Retry no C# HttpClient.

      // ============================================================
      // CONSOLIDAÇÃO DE GUIAS DUPLICADOS — SEO / AdSense Fix
      // Redireciona duplicatas para a URL canônica mais completa.
      // ============================================================

      // Grupo: SSD vs HDD (5 duplicatas → 1 canônico)
      { source: '/guides/ssd-vs-hd-qual-melhor', destination: '/guides/ssd-vs-hdd-guia', permanent: true },
      { source: '/guides/hds-vs-ssd-qual-a-diferenca', destination: '/guides/ssd-vs-hdd-guia', permanent: true },
      { source: '/guides/nvme-vs-sata-vale-a-pena-upgrade', destination: '/guides/ssd-nvme-vs-sata-jogos', permanent: true },
      { source: '/guides/ssd-nvme-vs-sata-jogos', destination: '/guides/ssd-vs-hdd-guia', permanent: true },

      // Grupo: DNS para Jogos (3 duplicatas → 1 canônico)
      { source: '/guides/melhor-dns-para-jogos-google-vs-cloudflare', destination: '/guides/melhor-dns-jogos-2026', permanent: true },
      { source: '/guides/dns-mais-rapido-para-jogos-benchmark', destination: '/guides/melhor-dns-jogos-2026', permanent: true },

      // Grupo: Debloat Windows 11 (2 duplicatas → 1 canônico)
      { source: '/guides/debloating-windows-11', destination: '/guides/debloat-windows-11-otimizacao-powershell', permanent: true },

      // Grupo: Overwatch 2 (2 duplicatas → 1 canônico)
      { source: '/guides/overwatch-2-melhores-configuracoes-fps', destination: '/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering', permanent: true },

      // Grupo: RDR2 (2 duplicatas → 1 canônico)
      { source: '/guides/red-dead-redemption-2-melhores-configuracoes', destination: '/guides/red-dead-redemption-2-melhores-configuracoes-rdr2', permanent: true },

      // Grupo: Euro Truck Simulator 2 (2 duplicatas → 1 canônico)
      { source: '/guides/euro-truck-simulator-2-otimizacao', destination: '/guides/euro-truck-simulator-2-otimizacao-aa-promods', permanent: true },

      // Grupo: Rocket League (2 duplicatas → 1 canônico)
      { source: '/guides/rocket-league-melhores-configuracoes-camera', destination: '/guides/rocket-league-camera-settings-bakkesmod-air-roll', permanent: true },

      // Grupo: Manutencao preventiva (2 duplicatas → 1 canônico)
      { source: '/guides/manutencao-preventiva', destination: '/guides/manutencao-preventiva-computador', permanent: true },

      // Grupo: Roblox FPS Unlocker (3 duplicatas → 1 canônico)
      { source: '/guides/roblox-fps-unlocker-guia', destination: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', permanent: true },
      { source: '/guides/roblox-fps-unlocker-tutorial', destination: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', permanent: true },

      // Grupo: Elden Ring (3 duplicatas → 1 canônico)
      { source: '/guides/eld-ring-stuttering-fix-dx12', destination: '/guides/elden-ring-fps-unlock-stutter-fix', permanent: true },
      { source: '/guides/elden-ring-fps-unlock-widescreen-fix-stutter', destination: '/guides/elden-ring-fps-unlock-stutter-fix', permanent: true },

      // Grupo: OBS Studio streaming (3 duplicatas → 1 canônico)
      { source: '/guides/obs-studio-melhores-configuracoes-stream', destination: '/guides/obs-studio-melhores-configuracoes-stream-2026', permanent: true },
      { source: '/guides/obs-studio-streaming-twitch-youtube-guia-completo', destination: '/guides/obs-studio-melhores-configuracoes-stream-2026', permanent: true },

      // Grupo: Cadeiras (2 duplicatas → 1 canônico)
      { source: '/guides/cadeira-gamer-ergonomia-postura-aim', destination: '/guides/cadeira-gamer-vs-escritorio-ergonomia', permanent: true },

      // Grupo: Teclados mecânicos (2 duplicatas → 1 canônico)
      { source: '/guides/teclados-mecanicos-switches-guia', destination: '/guides/teclados-mecanicos-guia', permanent: true },

      // Grupo: Water cooler vs air cooler (2 duplicatas → 1 canônico)
      { source: '/guides/water-cooler-vs-air-cooler', destination: '/guides/water-cooler-vs-air-cooler-qual-escolher', permanent: true },

      // Grupo: Periféricos gamer (2 duplicatas → 1 canônico)
      { source: '/guides/perifericos-gamer-vale-a-pena', destination: '/guides/perifericos-gamer-vale-a-pena-marcas', permanent: true },

      // Grupo: Bluestacks (3 duplicatas → 1 canônico)
      { source: '/guides/bluestacks-ldplayer-otimizacao-free-fire-120fps', destination: '/guides/bluestacks-otimizacao-free-fire-pubg', permanent: true },
      { source: '/guides/bluestacks-vs-ldplayer-qual-mais-leve', destination: '/guides/bluestacks-otimizacao-free-fire-pubg', permanent: true },

      // Grupo: VPN para jogos (2 duplicatas → 1 canônico)
      { source: '/guides/vpn-vale-a-pena-jogos', destination: '/guides/vpn-jogos-exitlag-noping-vale-a-pena', permanent: true },

      // Grupo: HDR (2 duplicatas → 1 canônico)
      { source: '/guides/hdr-windows-vale-a-pena-jogos', destination: '/guides/hdr-windows-11-calibracao-jogos', permanent: true },

      // Grupo: Monitor sync (2 duplicatas → 1 canônico)
      { source: '/guides/sync-vertical-g-sync-free-sync-explicacao', destination: '/guides/g-sync-freesync-configuracao-correta', permanent: true },

      // Grupo: Reduzir ping (3 duplicatas → 1 canônico)
      { source: '/guides/reduzir-ping-jogos-online', destination: '/guides/reduzir-ping-regedit-cmd-jogos', permanent: true },
      { source: '/guides/reduzir-ping-exitlag-noping-dns', destination: '/guides/reduzir-ping-regedit-cmd-jogos', permanent: true },

      // Grupo: Backup (2 duplicatas → 1 canônico)
      { source: '/guides/backup-dados', destination: '/guides/backup-automatico-nuvem', permanent: true },

      // Grupo: The Witcher 3 (2 duplicatas → 1 canônico)
      { source: '/guides/the-witcher-3-next-gen-performance', destination: '/guides/the-witcher-3-next-gen-otimizacao-ray-tracing', permanent: true },

      // Grupo: Valorant VAN (2 duplicatas → 1 canônico)
      { source: '/guides/valorant-fix-van-9003-secure-boot', destination: '/guides/valorant-van-9003-secure-boot-tpm-fix', permanent: true },

      // Grupo: GTA IV (2 duplicatas → 1 canônico)
      { source: '/guides/gta-iv-complete-edition-lag-fix', destination: '/guides/gta-iv-fix-windows-10-11', permanent: true },

      // Grupo: Discord otimizar (2 duplicatas → 1 canônico)
      { source: '/guides/discord-otimizar-para-jogos', destination: '/guides/discord-otimizacao-overlay-lag', permanent: true },

      // Grupo: formatação windows (2 duplicatas → 1 canônico)
      { source: '/guides/formatacao-windows', destination: '/guides/formatacao-limpa-windows-11-rufus-gpt', permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // ============================================================
        // STATIC MOCK ROUTES FOR DESKTOP APP
        // Ao invés de redirecionar (o que causa HTTP Exception no C# e force Retry Infinito),
        // nós devolvemos um JSON estático (Edge Cache, custo zero de CPU) com 200 OK.
        // O App em C# entende que deu certo e volta a dormir pelo intervalo programado.
        // O beforeFiles garante que o rewrite atue antes do route.ts original ser chamado,
        // economizando milhares de execuções de Vercel Functions por segundo.
        // ============================================================
        { source: '/api/telemetry/:path*', destination: '/api-mock.json' },
        { source: '/api/v1/telemetry/:path*', destination: '/api-mock.json' },
        { source: '/api/v1/sessions/heartbeat', destination: '/api-mock.json' },
        { source: '/api/v1/sessions/start', destination: '/api-mock.json' },
        { source: '/api/admin/sessions/live', destination: '/api-mock.json' },
        { source: '/api/admin/telemetry/:path*', destination: '/api-mock.json' },
        { source: '/api/v1/license/sync', destination: '/api-mock.json' },
        // REMOVIDO: /api/v1/commands/pending — agora é real (comandos remotos do dashboard)
        // REMOVIDO: /api/v1/install/status — agora é real (vinculação de conta)
      ]
    };
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        // SEO Headers para melhorar indexação
        { key: 'X-Robots-Tag', value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://js.stripe.com https://pagead2.googlesyndication.com https://adservice.google.com.br https://adservice.google.com https://static.cloudflareinsights.com https://*.adtrafficquality.google",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com",
            "img-src 'self' data: blob: https: http: https://grainy-gradients.vercel.app",
            "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://www.google-analytics.com https://api.stripe.com https://checkout.stripe.com https://pagead2.googlesyndication.com https://*.adtrafficquality.google https://static.cloudflareinsights.com https://grainy-gradients.vercel.app",
            "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://td.doubleclick.net https://googleads.g.doubleclick.net https://*.adtrafficquality.google https://www.google.com",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join('; '),
        },
      ],
    },
    // Não aplicar CSP em rotas de API (pode quebrar webhooks)
    {
      source: '/api/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
      ],
    },
    // Headers específicos para sitemap
    {
      source: '/sitemap.xml',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400' },
        { key: 'Content-Type', value: 'application/xml; charset=utf-8' },
      ],
    },
    // Headers específicos para robots.txt
    {
      source: '/robots.txt',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
      ],
    },
  ],
};

export default nextConfig;
