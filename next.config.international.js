/** @type {import('next').Config} */
const nextConfig = {
  // Configurações internacionais críticas
  i18n: {
    locales: ['en-US', 'en-GB', 'pt-BR', 'de-DE'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'voltris.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'voltris.co.uk', 
        defaultLocale: 'en-GB',
      },
      {
        domain: 'voltris.com.br',
        defaultLocale: 'pt-BR',
      },
      {
        domain: 'voltris.de',
        defaultLocale: 'de-DE',
      }
    ]
  },

  // Performance global otimizada
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'lucide-react',
      'react-icons',
      'framer-motion',
      '@heroicons/react',
    ],
    // Fontes internacionais
    fontLoaders: [
      { 
        loader: '@next/font/google', 
        options: { 
          subsets: ['latin', 'latin-ext', 'cyrillic', 'arabic', 'devanagari'],
          display: 'swap',
          preload: true
        } 
      },
    ],
    // Build otimizado para global
    serverMinification: true,
    serverSourceMaps: false,
    // Imagens avançadas
    images: {
      allowFutureImage: true,
      formats: ['image/avif', 'image/webp', 'image/heic'],
      deviceSizes: [320, 420, 640, 768, 1024, 1280, 1600, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
      minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ANO para performance global
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  },

  // CDN e Cache global
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Cache headers para performance global
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, s-maxage=86400, stale-while-revalidate=86400',
          },
          // CDN headers
          {
            key: 'Edge-Cache-Tag',
            value: 'voltris-global',
          },
          {
            key: 'Edge-Cache-Time',
            value: '86400',
          },
          // Performance headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Preload-Fonts',
            value: 'true',
          },
          // Internacional headers
          {
            key: 'X-Global-Content',
            value: 'true',
          },
          {
            key: 'X-Region-Support',
            value: 'americas,europe,asia,africa,oceania',
          }
        ],
      },
      // Headers específicos para recursos estáticos
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable, s-maxage=31536000',
          },
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
      // Headers para fontes
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          }
        ],
      }
    ];
  },

  // Redirecionamentos internacionais avançados
  async redirects() {
    return [
      // Canonicalização WWW global
      { 
        source: '/:path*', 
        has: [{ type: 'host', value: 'voltrisoptimizer.com' }], 
        destination: 'https://www.voltrisoptimizer.com/:path*', 
        permanent: true 
      },
      // Redirecionamentos regionais
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'cf-ipcountry', value: 'BR' },
          { type: 'host', value: 'voltrisoptimizer.com' }
        ],
        destination: 'https://www.voltris.com.br/:path*',
        permanent: false
      },
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'cf-ipcountry', value: 'GB' },
          { type: 'host', value: 'voltrisoptimizer.com' }
        ],
        destination: 'https://www.voltris.co.uk/:path*',
        permanent: false
      },
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'cf-ipcountry', value: 'DE' },
          { type: 'host', value: 'voltrisoptimizer.com' }
        ],
        destination: 'https://www.voltris.de/:path*',
        permanent: false
      },
      // Redirecionamentos de conteúdo existentes
      { source: '/todos-os-servicos/criacao-de-sites/plano-profissional', destination: '/criar-site', permanent: true },
      { source: '/todos-os-servicos/criacao-de-sites/plano-empresarial', destination: '/criar-site', permanent: true },
      { source: '/todos-os-servicos/otimizacao-de-windows/otimizacao-para-jogos', destination: '/otimizacao-pc', permanent: true },
      { source: '/todos-os-servicos/otimizacao-de-windows/otimizacao-para-trabalho', destination: '/otimizacao-pc', permanent: true },
      { source: '/todos-os-servicos/manutencao-preventiva/check-up-completo', destination: '/tecnico-informatica', permanent: true },
      { source: '/servicos/otimizacao-pc', destination: '/otimizacao-pc', permanent: true },
      { source: '/servicos/tecnico-informatica', destination: '/tecnico-informatica', permanent: true },
      { source: '/servicos/criar-site', destination: '/criar-site', permanent: true },
      { source: '/servicos/formatar-windows', destination: '/formatar-windows', permanent: true },
      { source: '/servicos/erros-jogos', destination: '/erros-jogos', permanent: true },
      { source: '/servicos/suporte-tecnico-remoto', destination: '/suporte-tecnico-remoto', permanent: true },
      { source: '/servicos/adquirir-licenca', destination: '/adquirir-licenca', permanent: true },
      { source: '/servicos/exterior', destination: '/exterior', permanent: true },
      { source: '/guides/como-diminuir-input-lag-teclado-mouse', destination: '/guides/reduzir-input-lag-teclado-mouse', permanent: true },
      { source: '/guides/pc-gamer-barato-custo-beneficio-2026', destination: '/guides/pc-gamer-barato-custo-beneficio', permanent: true },
      { source: '/guides/reduzir-input-lag-teclado-mouse', destination: '/guides/reduzir-input-lag', permanent: true },
      { source: '/guides/reduzir-ping-regedit-cmd-jogos', destination: '/guides/reduzir-ping', permanent: true },
      { source: '/guides/como-otimizar-obs-studio-2026', destination: '/guides/otimizacao-obs-studio', permanent: true },
      { source: '/guides/obs-studio-melhores-configuracoes-stream-2026', destination: '/guides/configuracoes-obs-studio', permanent: true },
      { source: '/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering', destination: '/guides/overwatch-2-otimizacao', permanent: true },
      { source: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', destination: '/guides/roblox-otimizacao', permanent: true },
      { source: '/guides/csgo-fps-boost-2026', destination: '/guides/csgo-otimizacao', permanent: true },
      { source: '/guides/valorant-van-9003-secure-boot-tpm-fix', destination: '/guides/valorant-van-9003', permanent: true },
      { source: '/guides/gta-v-otimizacao-fps-guia-completo', destination: '/guides/gta-v-otimizacao', permanent: true },
      { source: '/guides/ssd-vs-hdd-guia', destination: '/guides/ssd-vs-hdd', permanent: true },
      { source: '/guides/debloat-windows-11-otimizacao-powershell', destination: '/guides/debloat-windows-11', permanent: true },
      { source: '/guides/formatacao-limpa-windows-11-rufus-gpt', destination: '/guides/formatar-windows-11', permanent: true },
      { source: '/guides/upgrade-pc-antigo-vale-a-pena', destination: '/guides/upgrade-pc', permanent: true },
      { source: '/guides/g-sync-freesync-configuracao-correta', destination: '/guides/g-sync-freesync', permanent: true },
      { source: '/guides/overclock-gpu-msi-afterburner', destination: '/guides/overclock-gpu', permanent: true },
      { source: '/guides/overclock-processador', destination: '/guides/overclock-cpu', permanent: true },
      { source: '/guides/pc-gamer-barato-custo-beneficio-2026', destination: '/guides/pc-gamer-barato', permanent: true },
      { source: '/guides/como-diminuir-input-lag-teclado-mouse', destination: '/guides/reduzir-input-lag', permanent: true },
      { source: '/guides/como-otimizar-obs-studio-2026', destination: '/guides/otimizar-obs-studio', permanent: true },
      { source: '/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering', destination: '/guides/overwatch-2-otimizacao', permanent: true },
      { source: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', destination: '/guides/roblox-fps-unlocker', permanent: true },
      { source: '/guides/csgo-fps-boost-2026', destination: '/guides/csgo-fps-boost', permanent: true },
      { source: '/guides/valorant-van-9003-secure-boot-tpm-fix', destination: '/guides/valorant-van-9003', permanent: true },
      { source: '/guides/gta-v-otimizacao-fps-guia-completo', destination: '/guides/gta-v-otimizacao', permanent: true },
      { source: '/guides/ssd-vs-hdd-guia', destination: '/guides/ssd-vs-hdd', permanent: true },
      { source: '/guides/debloat-windows-11-otimizacao-powershell', destination: '/guides/debloat-windows-11', permanent: true },
      { source: '/guides/formatacao-limpa-windows-11-rufus-gpt', destination: '/guides/formatar-windows-11', permanent: true },
      { source: '/guides/upgrade-pc-antigo-vale-a-pena', destination: '/guides/upgrade-pc', permanent: true },
      { source: '/guides/g-sync-freesync-configuracao-correta', destination: '/guides/g-sync-freesync', permanent: true },
      { source: '/guides/overclock-gpu-msi-afterburner', destination: '/guides/overclock-gpu', permanent: true },
      { source: '/guides/overclock-processador', destination: '/guides/overclock-cpu', permanent: true },
      { source: '/guides/pc-gamer-barato-custo-beneficio-2026', destination: '/guides/pc-gamer-barato', permanent: true },
      { source: '/guides/como-diminuir-input-lag-teclado-mouse', destination: '/guides/reduzir-input-lag', permanent: true },
      { source: '/guides/como-otimizar-obs-studio-2026', destination: '/guides/otimizar-obs-studio', permanent: true },
      { source: '/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering', destination: '/guides/overwatch-2-otimizacao', permanent: true },
      { source: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', destination: '/guides/roblox-fps-unlocker', permanent: true },
      { source: '/guides/csgo-fps-boost-2026', destination: '/guides/csgo-fps-boost', permanent: true },
      { source: '/guides/valorant-van-9003-secure-boot-tpm-fix', destination: '/guides/valorant-van-9003', permanent: true },
      { source: '/guides/gta-v-otimizacao-fps-guia-completo', destination: '/guides/gta-v-otimizacao', permanent: true },
      { source: '/guides/ssd-vs-hdd-guia', destination: '/guides/ssd-vs-hdd', permanent: true },
      { source: '/guides/debloat-windows-11-otimizacao-powershell', destination: '/guides/debloat-windows-11', permanent: true },
      { source: '/guides/formatacao-limpa-windows-11-rufus-gpt', destination: '/guides/formatar-windows-11', permanent: true },
      { source: '/guides/upgrade-pc-antigo-vale-a-pena', destination: '/guides/upgrade-pc', permanent: true },
      { source: '/guides/g-sync-freesync-configuracao-correta', destination: '/guides/g-sync-freesync', permanent: true },
      { source: '/guides/overclock-gpu-msi-afterburner', destination: '/guides/overclock-gpu', permanent: true },
      { source: '/guides/overclock-processador', destination: '/guides/overclock-cpu', permanent: true },
    ];
  },

  // Rewrites para SEO internacional
  async rewrites() {
    return [
      // Rewrite para conteúdo regionalizado
      {
        source: '/en/:path*',
        destination: '/:path*?lang=en-us&region=us'
      },
      {
        source: '/br/:path*',
        destination: '/:path*?lang=pt-br&region=br'
      },
      {
        source: '/uk/:path*',
        destination: '/:path*?lang=en-gb&region=uk'
      },
      {
        source: '/de/:path*',
        destination: '/:path*?lang=de-de&region=de'
      }
    ];
  },

  // Configurações de imagem para performance global
  images: {
    formats: ['image/avif', 'image/webp', 'image/heic'],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1600, 1920, 2560],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 ANO
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
      // CDNs regionais
      {
        protocol: 'https',
        hostname: 'cdn.voltris.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.voltris.com',
      }
    ],
  },

  // Configurações de build para global
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverExternalPackages: ['sharp'],

  // Configurações de output para deploy global
  output: 'standalone',
  trailingSlash: false,
  poweredByHeader: false,
  
  // Configurações de compressão
  compress: true,
  
  // Configurações de SWC para performance
  swcMinify: true,
  
  // Configurações de experimentos
  experimental: {
    ...nextConfig.experimental,
    // Otimizações de bundle para global
    optimizePackageImports: [
      'lucide-react',
      'react-icons', 
      'framer-motion',
      '@heroicons/react',
      'next/image',
      'next/link'
    ],
    // Server components para performance
    serverComponentsExternalPackages: ['sharp'],
    // Incremental builds
    incrementalCacheHandlerPath: './cache-handler.js',
    // ISR para conteúdo estático
    isrMemoryCacheSize: 50,
  }
};

module.exports = nextConfig;
