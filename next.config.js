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
      { source: '/politica-privacidade', destination: '/pt-br/privacy-policy', permanent: true },
      { source: '/termos-uso', destination: '/pt-br/terms-of-use', permanent: true },
      { source: '/politica-reembolso', destination: '/pt-br/refund-policy', permanent: true },
      { source: '/reembolso-cancelamento', destination: '/pt-br/refund-policy', permanent: true },
      { source: '/lgpd', destination: '/pt-br/lgpd', permanent: true },
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
      { source: '/guides/ssd-vs-hdd-which-is-better', destination: '/guides/ssd-vs-hdd-guide', permanent: true },
      { source: '/guides/hdd-vs-ssd-whats-the-difference', destination: '/guides/ssd-vs-hdd-guide', permanent: true },
      { source: '/guides/nvme-vs-sata-upgrade-worth-it', destination: '/guides/nvme-vs-sata-ssd-for-gaming', permanent: true },
      { source: '/guides/nvme-vs-sata-ssd-for-gaming', destination: '/guides/ssd-vs-hdd-guide', permanent: true },

      // Grupo: DNS para Jogos (3 duplicatas → 1 canônico)
      { source: '/guides/best-gaming-dns-google-vs-cloudflare', destination: '/guides/best-dns-for-gaming-2026', permanent: true },
      { source: '/guides/dns-mais-rapido-para-jogos-benchmark', destination: '/guides/best-dns-for-gaming-2026', permanent: true },

      // Grupo: Debloat Windows 11 (2 duplicatas → 1 canônico)
      { source: '/guides/debloating-windows-11', destination: '/guides/debloat-windows-11-powershell-optimization', permanent: true },

      // Grupo: Overwatch 2 (2 duplicatas → 1 canônico)
      { source: '/guides/overwatch-2-best-fps-settings', destination: '/guides/overwatch-2-fps-input-lag-optimization', permanent: true },

      // Grupo: RDR2 (2 duplicatas → 1 canônico)
      { source: '/guides/red-dead-redemption-2-best-settings', destination: '/guides/red-dead-redemption-2-best-settings-rdr2', permanent: true },

      // Grupo: Euro Truck Simulator 2 (2 duplicatas → 1 canônico)
      { source: '/guides/euro-truck-simulator-2-optimization', destination: '/guides/euro-truck-simulator-2-promods-aa-optimization', permanent: true },

      // Grupo: Rocket League (2 duplicatas → 1 canônico)
      { source: '/guides/rocket-league-best-camera-settings', destination: '/guides/rocket-league-camera-settings-bakkesmod', permanent: true },

      // Grupo: Manutencao preventiva (2 duplicatas → 1 canônico)
      { source: '/guides/preventive-maintenance', destination: '/guides/computer-preventive-maintenance', permanent: true },

      // Grupo: Roblox FPS Unlocker (3 duplicatas → 1 canônico)
      { source: '/guides/roblox-fps-unlocker-guide', destination: '/guides/roblox-fps-unlocker-bloxstrap-guide', permanent: true },
      { source: '/guides/roblox-fps-unlocker-tutorial', destination: '/guides/roblox-fps-unlocker-bloxstrap-guide', permanent: true },

      // Grupo: Elden Ring (3 duplicatas → 1 canônico)
      { source: '/guides/eld-ring-stuttering-fix-dx12', destination: '/guides/elden-ring-fps-unlock-stutter-fix', permanent: true },
      { source: '/guides/elden-ring-fps-unlock-widescreen-fix-stutter', destination: '/guides/elden-ring-fps-unlock-stutter-fix', permanent: true },

      // Grupo: OBS Studio streaming (3 duplicatas → 1 canônico)
      { source: '/guides/obs-studio-best-streaming-settings', destination: '/guides/obs-studio-best-streaming-settings-2026', permanent: true },
      { source: '/guides/obs-studio-twitch-youtube-streaming-guide', destination: '/guides/obs-studio-best-streaming-settings-2026', permanent: true },

      // Grupo: Cadeiras (2 duplicatas → 1 canônico)
      { source: '/guides/cadeira-gamer-ergonomia-postura-aim', destination: '/guides/gaming-chair-vs-office-chair-ergonomics', permanent: true },

      // Grupo: Teclados mecânicos (2 duplicatas → 1 canônico)
      { source: '/guides/mechanical-keyboards-switches-guide', destination: '/guides/mechanical-keyboards-guide', permanent: true },

      // Grupo: Water cooler vs air cooler (2 duplicatas → 1 canônico)
      { source: '/guides/water-cooler-vs-air-cooler-comparison', destination: '/guides/water-cooler-vs-air-cooler-which-to-choose', permanent: true },

      // Grupo: Periféricos gamer (2 duplicatas → 1 canônico)
      { source: '/guides/gaming-peripherals-worth-it', destination: '/guides/gaming-peripherals-worth-it-brands', permanent: true },

      // Grupo: Bluestacks (3 duplicatas → 1 canônico)
      { source: '/guides/bluestacks-ldplayer-otimizacao-free-fire-120fps', destination: '/guides/bluestacks-optimization-free-fire-pubg', permanent: true },
      { source: '/guides/bluestacks-vs-ldplayer-which-is-lighter', destination: '/guides/bluestacks-optimization-free-fire-pubg', permanent: true },

      // Grupo: VPN para jogos (2 duplicatas → 1 canônico)
      { source: '/guides/vpn-worth-it-for-gaming', destination: '/guides/gaming-vpn-exitlag-noping-worth-it', permanent: true },

      // Grupo: HDR (2 duplicatas → 1 canônico)
      { source: '/guides/hdr-windows-gaming-worth-it', destination: '/guides/hdr-windows-11-gaming-calibration', permanent: true },

      // Grupo: Monitor sync (2 duplicatas → 1 canônico)
      { source: '/guides/vsync-gsync-freesync-explained', destination: '/guides/gsync-freesync-correct-setup', permanent: true },

      // Grupo: Reduzir ping (3 duplicatas → 1 canônico)
      { source: '/guides/reduce-ping-online-games', destination: '/guides/reduce-ping-regedit-cmd-gaming', permanent: true },
      { source: '/guides/reduce-ping-exitlag-noping-dns', destination: '/guides/reduce-ping-regedit-cmd-gaming', permanent: true },

      // Grupo: Backup (2 duplicatas → 1 canônico)
      { source: '/guides/data-backup', destination: '/guides/backup-automatico-nuvem', permanent: true },

      // Grupo: The Witcher 3 (2 duplicatas → 1 canônico)
      { source: '/guides/the-witcher-3-next-gen-performance', destination: '/guides/the-witcher-3-next-gen-ray-tracing-optimization', permanent: true },

      // Grupo: Valorant VAN (2 duplicatas → 1 canônico)
      { source: '/guides/valorant-van-9003-secure-boot-fix', destination: '/guides/valorant-van-9003-tpm-secure-boot-fix', permanent: true },

      // Grupo: GTA IV (2 duplicatas → 1 canônico)
      { source: '/guides/gta-iv-complete-edition-lag-fix', destination: '/guides/gta-iv-windows-10-11-fix', permanent: true },

      // Grupo: Discord otimizar (2 duplicatas → 1 canônico)
      { source: '/guides/discord-otimizar-para-jogos', destination: '/guides/discord-otimizacao-overlay-lag', permanent: true },

      // Grupo: formatação windows (2 duplicatas → 1 canônico)
      { source: '/guides/windows-formatting', destination: '/guides/clean-install-windows-11-rufus-gpt', permanent: true },

      // ============================================================
      // MASS REDIRECTS: PORTUGUESE GUIDES -> ENGLISH GUIDES
      // ============================================================
      { source: '/guides/7-dicas-otimizar-pc-jogos', destination: '/guides/7-tips-optimize-pc-gaming', permanent: true },
      { source: '/guides/8gb-vs-16gb-ram-jogos', destination: '/guides/8gb-vs-16gb-ram-gaming', permanent: true },
      { source: '/guides/adrenaline-amd-melhores-configuracoes', destination: '/guides/adrenaline-amd-best-settings', permanent: true },
      { source: '/guides/agendador-tarefas-otimizacao', destination: '/guides/task-scheduler-optimization', permanent: true },
      { source: '/guides/air-cooler-vs-water-cooler-pc-gamer', destination: '/guides/air-cooler-vs-water-cooler-gaming-pc', permanent: true },
      { source: '/guides/ajuste-resolucao-csgo-valorant', destination: '/guides/resolution-adjustment-cs2-valorant', permanent: true },
      { source: '/guides/alan-wake-2-otimizacao-path-tracing', destination: '/guides/alan-wake-2-path-tracing-optimization', permanent: true },
      { source: '/guides/alocar-mais-memoria-ram-jogos', destination: '/guides/allocate-more-ram-gaming', permanent: true },
      { source: '/guides/antivirus-vs-desempenho-jogos', destination: '/guides/antivirus-vs-gaming-performance', permanent: true },
      { source: '/guides/apex-legends-otimizacao-config-pro', destination: '/guides/apex-legends-pro-config-optimization', permanent: true },
      { source: '/guides/aprimoramento-ponteiro-mouse-desativar', destination: '/guides/disable-enhance-pointer-precision', permanent: true },
      { source: '/guides/arquitetura-redes', destination: '/guides/network-architecture', permanent: true },
      { source: '/guides/assassin-s-creed-mirage-stutter-fix', destination: '/guides/assassins-creed-mirage-stutter-fix', permanent: true },
      { source: '/guides/assassins-creed-valhalla-stuttering-fix', destination: '/guides/assassins-creed-valhalla-stutter-fix', permanent: true },
      { source: '/guides/atualizacao-bios', destination: '/guides/bios-update', permanent: true },
      { source: '/guides/atualizacao-bios-placa-mae-riscos-beneficios', destination: '/guides/motherboard-bios-update-risks-benefits', permanent: true },
      { source: '/guides/atualizacao-hardware', destination: '/guides/hardware-upgrade', permanent: true },
      { source: '/guides/atualizacao-software', destination: '/guides/software-update', permanent: true },
      { source: '/guides/audacity-vs-reaper-edicao-audio', destination: '/guides/audacity-vs-reaper-audio-editing', permanent: true },
      { source: '/guides/aumentar-fps-csgo', destination: '/guides/increase-fps-cs2', permanent: true },
      { source: '/guides/aumentar-fps-fivem-gta-rp', destination: '/guides/increase-fps-fivem-gta-rp', permanent: true },
      { source: '/guides/aumentar-hz-monitor-overclock', destination: '/guides/overclock-monitor-hz', permanent: true },
      { source: '/guides/autocad-lento-aceleracao-hardware', destination: '/guides/autocad-slow-hardware-acceleration', permanent: true },
      { source: '/guides/backup-dados', destination: '/guides/data-backup', permanent: true },
      { source: '/guides/backup-na-nuvem-vs-hd-externo', destination: '/guides/cloud-backup-vs-external-hdd', permanent: true },
      { source: '/guides/baldur-s-gate-3-vulcan-vs-dx11', destination: '/guides/baldurs-gate-3-vulkan-vs-dx11', permanent: true },
      { source: '/guides/baldurs-gate-3-otimizacao-act-3', destination: '/guides/baldurs-gate-3-act-3-optimization', permanent: true },
      { source: '/guides/bateria-viciada-notebook-mito-verdade', destination: '/guides/laptop-battery-degradation-myth-truth', permanent: true },
      { source: '/guides/bf2042-100-cpu-fix', destination: '/guides/battlefield-2042-100-cpu-fix', permanent: true },
      { source: '/guides/bluestacks-otimizacao-free-fire-pubg', destination: '/guides/bluestacks-optimization-free-fire-pubg', permanent: true },
      { source: '/guides/bluestacks-vs-ldplayer-qual-mais-leve', destination: '/guides/bluestacks-vs-ldplayer-which-is-lighter', permanent: true },
      { source: '/guides/bottleneck-gargalo-cpu-gpu-como-identificar', destination: '/guides/bottleneck-cpu-gpu-how-to-identify', permanent: true },
      { source: '/guides/brave-vs-chrome-desempenho', destination: '/guides/brave-vs-chrome-performance', permanent: true },
      { source: '/guides/cadeira-gamer-vs-escritorio-ergonomia', destination: '/guides/gaming-chair-vs-office-chair-ergonomics', permanent: true },
      { source: '/guides/call-of-duty-warzone-2-otimizacao-fps', destination: '/guides/call-of-duty-warzone-2-fps-optimization', permanent: true },
      { source: '/guides/capcut-pc-otimizacao-renderizacao', destination: '/guides/capcut-pc-render-optimization', permanent: true },
      { source: '/guides/choppy-audio-windows-11-fix', destination: '/guides/choppy-audio-windows-11-fix', permanent: true },
      { source: '/guides/chrome-vs-edge-vs-firefox-ram', destination: '/guides/chrome-vs-edge-vs-firefox-ram-usage', permanent: true },
      { source: '/guides/cities-skylines-2-otimizacao-fps-mods', destination: '/guides/cities-skylines-2-fps-optimization-mods', permanent: true },
      { source: '/guides/como-ativar-xmp-docp-bios', destination: '/guides/how-to-enable-xmp-docp-bios', permanent: true },
      { source: '/guides/como-atualizar-drivers-corretamente', destination: '/guides/how-to-update-drivers-correctly', permanent: true },
      { source: '/guides/como-aumentar-fps-roblox-pc-fraco', destination: '/guides/how-to-increase-fps-roblox-low-end-pc', permanent: true },
      { source: '/guides/como-baixar-videos-youtube-4k', destination: '/guides/how-to-download-youtube-videos-4k', permanent: true },
      { source: '/guides/como-descobrir-temperatura-pc', destination: '/guides/how-to-check-pc-temperature', permanent: true },
      { source: '/guides/como-escolher-placa-de-video', destination: '/guides/how-to-choose-graphics-card', permanent: true },
      { source: '/guides/como-escolher-processador-jogos', destination: '/guides/how-to-choose-cpu-gaming', permanent: true },
      { source: '/guides/como-instalar-ssd-m2-nvme', destination: '/guides/how-to-install-m2-nvme-ssd', permanent: true },
      { source: '/guides/como-limpar-cache-dns-windows', destination: '/guides/how-to-clear-dns-cache-windows', permanent: true },
      { source: '/guides/como-limpar-pc-por-dentro', destination: '/guides/how-to-clean-pc-internally', permanent: true },
      { source: '/guides/como-medir-fps-jogos-msi-afterburner', destination: '/guides/how-to-measure-fps-gaming-msi-afterburner', permanent: true },
      { source: '/guides/como-montar-pc-gamer-2026', destination: '/guides/how-to-build-gaming-pc-2026', permanent: true },
      { source: '/guides/como-recuperar-arquivos-deletados-lixeira', destination: '/guides/how-to-recover-deleted-files-recycle-bin', permanent: true },
      { source: '/guides/como-saber-se-pc-tem-virus', destination: '/guides/how-to-know-if-pc-has-virus', permanent: true },
      { source: '/guides/como-tirar-print-windows-11', destination: '/guides/how-to-take-screenshot-windows-11', permanent: true },
      { source: '/guides/computador-reiniciando-sozinho-jogos', destination: '/guides/pc-restarting-randomly-gaming', permanent: true },
      { source: '/guides/configuracao-backup', destination: '/guides/backup-configuration', permanent: true },
      { source: '/guides/configuracao-email', destination: '/guides/email-configuration', permanent: true },
      { source: '/guides/configurar-roteador-wifi-5ghz', destination: '/guides/how-to-configure-5ghz-wifi-router', permanent: true },
      { source: '/guides/configurar-windows-11-para-jogos', destination: '/guides/configure-windows-11-for-gaming', permanent: true },
      { source: '/guides/controle-ps5-no-pc-ds4windows', destination: '/guides/ps5-controller-on-pc-ds4windows', permanent: true },
      { source: '/guides/controle-xbox-nao-conecta-pc-bluetooth', destination: '/guides/xbox-controller-not-connecting-pc-bluetooth', permanent: true },
      { source: '/guides/correcao-erros', destination: '/guides/error-correction', permanent: true },
      { source: '/guides/cpu-100-por-cento-windows-11-fix', destination: '/guides/cpu-100-percent-windows-11-fix', permanent: true },
      { source: '/guides/cpu-z-gpu-z-hwmonitor-como-usar', destination: '/guides/cpuz-gpuz-hwmonitor-how-to-use', permanent: true },
      { source: '/guides/crashes-jogos-fechando-sozinhos', destination: '/guides/game-crashes-closing-randomly-fix', permanent: true },
      { source: '/guides/cs2-otimizacao-fps-stuttering-fix', destination: '/guides/cs2-fps-optimization-stuttering-fix', permanent: true },
      { source: '/guides/cyberpunk-2077-otimizacao-path-tracing', destination: '/guides/cyberpunk-2077-path-tracing-optimization', permanent: true },
      { source: '/guides/davinci-resolve-lento-otimizacao-playback', destination: '/guides/davinci-resolve-slow-playback-optimization', permanent: true },
      { source: '/guides/debloat-windows-11-otimizacao-powershell', destination: '/guides/debloat-windows-11-powershell-optimization', permanent: true },
      { source: '/guides/desativar-aplicativos-segundo-plano-windows', destination: '/guides/disable-background-apps-windows', permanent: true },
      { source: '/guides/desativar-cortana-windows-11', destination: '/guides/disable-cortana-windows-11', permanent: true },
      { source: '/guides/desativar-servicos-inuteis-windows-11', destination: '/guides/disable-useless-services-windows-11', permanent: true },
      { source: '/guides/desativar-telemetria-windows-11', destination: '/guides/disable-telemetry-windows-11', permanent: true },
      { source: '/guides/desempenho-ssd-nvme-vs-sata-jogos', destination: '/guides/nvme-vs-sata-ssd-gaming-performance', permanent: true },
      { source: '/guides/desenvolvimento-sistemas', destination: '/guides/systems-development', permanent: true },
      { source: '/guides/diagnostico-hardware', destination: '/guides/hardware-diagnostics', permanent: true },
      { source: '/guides/diferenca-entre-ram-vram', destination: '/guides/difference-between-ram-and-vram', permanent: true },
      { source: '/guides/directx-11-vs-12-qual-melhor-jogos', destination: '/guides/directx-11-vs-12-gaming-performance', permanent: true },
      { source: '/guides/discord-consumindo-muita-cpu-fix', destination: '/guides/discord-high-cpu-usage-fix', permanent: true },
      { source: '/guides/disco-100-por-cento-windows-11-solucao', destination: '/guides/100-disk-usage-windows-11-fix', permanent: true },
      { source: '/guides/dlss-vs-fsr-vs-xess-comparativo', destination: '/guides/dlss-vs-fsr-vs-xess-comparison', permanent: true },
      { source: '/guides/dota-2-vulkan-vs-dx11-otimizacao', destination: '/guides/dota-2-vulkan-vs-dx11-optimization', permanent: true },
      { source: '/guides/dr-fone-vs-tenorshare-recuperacao-dados', destination: '/guides/drfone-vs-tenorshare-data-recovery', permanent: true },
      { source: '/guides/elden-ring-fps-unlock-stutter-fix', destination: '/guides/elden-ring-fps-unlock-stutter-fix', permanent: true },
      { source: '/guides/emulador-nintendo-switch-yuzu-ryujinx', destination: '/guides/nintendo-switch-emulator-yuzu-ryujinx', permanent: true },
      { source: '/guides/erro-0xc00007b-jogos-solucao', destination: '/guides/error-0xc00007b-games-fix', permanent: true },
      { source: '/guides/erro-tela-azul-bsod-como-resolver', destination: '/guides/blue-screen-bsod-how-to-fix', permanent: true },
      { source: '/guides/escape-from-tarkov-otimizacao-ram-stutter', destination: '/guides/escape-from-tarkov-ram-stutter-optimization', permanent: true },
      { source: '/guides/euro-truck-simulator-2-otimizacao', destination: '/guides/euro-truck-simulator-2-optimization', permanent: true },
      { source: '/guides/euro-truck-simulator-2-otimizacao-aa-promods', destination: '/guides/euro-truck-simulator-2-promods-aa-optimization', permanent: true },
      { source: '/guides/excluir-conta-instagram-definitivamente', destination: '/guides/how-to-delete-instagram-account-permanently', permanent: true },
      { source: '/guides/exitlag-vale-a-pena-ou-enganacao', destination: '/guides/exitlag-worth-it-or-scam', permanent: true },
      { source: '/guides/extensoes-produtividade-chrome', destination: '/guides/best-chrome-productivity-extensions', permanent: true },
      { source: '/guides/fans-fluxo-de-ar-pc-gamer', destination: '/guides/pc-case-airflow-fans-setup', permanent: true },
      { source: '/guides/firewall-configuracao', destination: '/guides/firewall-configuration', permanent: true },
      { source: '/guides/formatacao-limpa-windows-11-rufus-gpt', destination: '/guides/clean-install-windows-11-rufus-gpt', permanent: true },
      { source: '/guides/formatacao-windows', destination: '/guides/windows-formatting', permanent: true },
      { source: '/guides/formatfactory-vs-handbrake-converter-video', destination: '/guides/formatfactory-vs-handbrake-video-converter', permanent: true },
      { source: '/guides/fortnite-modo-performance-pc-fraco', destination: '/guides/fortnite-performance-mode-low-end-pc', permanent: true },
      { source: '/guides/fortnite-texturas-nao-carregam-streaming', destination: '/guides/fortnite-textures-not-loading-fix', permanent: true },
      { source: '/guides/forza-horizon-5-vram-fix-input-lag', destination: '/guides/forza-horizon-5-vram-input-lag-fix', permanent: true },
      { source: '/guides/free-fire-pc-fraco-smartgaga', destination: '/guides/free-fire-low-end-pc-smartgaga', permanent: true },
      { source: '/guides/g-sync-freesync-configuracao-correta', destination: '/guides/gsync-freesync-correct-setup', permanent: true },
      { source: '/guides/gabinete-gamer-airflow-importancia', destination: '/guides/gaming-case-airflow-importance', permanent: true },
      { source: '/guides/genshin-impact-fps-unlocker-pc', destination: '/guides/genshin-impact-fps-unlocker-pc', permanent: true },
      { source: '/guides/genshin-impact-stuttering-fix-pc', destination: '/guides/genshin-impact-stutter-fix-pc', permanent: true },
      { source: '/guides/geometry-dash-4gb-patch-lag', destination: '/guides/geometry-dash-4gb-patch-lag-fix', permanent: true },
      { source: '/guides/gestao-pacotes', destination: '/guides/package-management', permanent: true },
      { source: '/guides/gestao-servicos', destination: '/guides/services-management', permanent: true },
      { source: '/guides/god-mode-windows-11-ativar', destination: '/guides/enable-god-mode-windows-11', permanent: true },
      { source: '/guides/god-of-war-pc-memory-leak-fix', destination: '/guides/god-of-war-pc-memory-leak-fix', permanent: true },
      { source: '/guides/google-chrome-consumo-ram-fix', destination: '/guides/google-chrome-high-ram-usage-fix', permanent: true },
      { source: '/guides/google-play-games-pc-beta-vale-a-pena', destination: '/guides/google-play-games-pc-beta-worth-it', permanent: true },
      { source: '/guides/gravação-tela-windows-nativa-dicas', destination: '/guides/native-windows-screen-recording-tips', permanent: true },
      { source: '/guides/gta-iv-complete-edition-lag-fix', destination: '/guides/gta-iv-complete-edition-lag-fix', permanent: true },
      { source: '/guides/gta-iv-fix-windows-10-11', destination: '/guides/gta-iv-windows-10-11-fix', permanent: true },
      { source: '/guides/gta-san-andreas-correcao-grafica', destination: '/guides/gta-san-andreas-graphics-fix', permanent: true },
      { source: '/guides/gta-v-err-gfx-d3d-init-crash', destination: '/guides/gta-v-err-gfx-d3d-init-crash-fix', permanent: true },
      { source: '/guides/gta-v-fix-texturas-sumindo', destination: '/guides/gta-v-disappearing-textures-fix', permanent: true },
      { source: '/guides/gta-v-otimizar-fps-pc-fraco', destination: '/guides/gta-v-fps-optimization-low-end-pc', permanent: true },
      { source: '/guides/guia-compra-monitores', destination: '/guides/monitor-buying-guide', permanent: true },
      { source: '/guides/guia-montagem-pc', destination: '/guides/pc-building-guide', permanent: true },
      { source: '/guides/hard-reset-celular-formatar', destination: '/guides/hard-reset-format-smartphone', permanent: true },
      { source: '/guides/hard-reset-fones-bluetooth-fix', destination: '/guides/hard-reset-bluetooth-headphones-fix', permanent: true },
      { source: '/guides/hdmi-2.1-vs-displayport-1.4-diferencas', destination: '/guides/hdmi-21-vs-displayport-14-differences', permanent: true },
      { source: '/guides/hdr-windows-11-calibracao-jogos', destination: '/guides/hdr-windows-11-gaming-calibration', permanent: true },
      { source: '/guides/hdr-windows-vale-a-pena-jogos', destination: '/guides/hdr-windows-gaming-worth-it', permanent: true },
      { source: '/guides/hds-vs-ssd-qual-a-diferenca', destination: '/guides/hdd-vs-ssd-whats-the-difference', permanent: true },
      { source: '/guides/headset-7.1-real-vs-virtual-vale-a-pena', destination: '/guides/real-vs-virtual-71-headset-gaming', permanent: true },
      { source: '/guides/hibernacao-vs-suspensao-qual-o-melhor', destination: '/guides/hibernation-vs-sleep-mode-windows', permanent: true },
      { source: '/guides/hogwarts-legacy-stutter-fix-ram', destination: '/guides/hogwarts-legacy-stutter-fix-ram', permanent: true },
      { source: '/guides/hollow-knight-stuttering-fix-mod', destination: '/guides/hollow-knight-stutter-fix-mod', permanent: true },
      { source: '/guides/hyper-v-desempenho-jogos', destination: '/guides/hyper-v-impact-gaming-performance', permanent: true },
      { source: '/guides/identificacao-phishing', destination: '/guides/phishing-identification', permanent: true },
      { source: '/guides/importancia-pasta-termica-pc', destination: '/guides/thermal-paste-importance-pc', permanent: true },
      { source: '/guides/instalacao-drivers', destination: '/guides/driver-installation', permanent: true },
      { source: '/guides/instalacao-limpa-drivers-nvidia-amd', destination: '/guides/clean-driver-install-nvidia-amd', permanent: true },
      { source: '/guides/instalacao-windows-11', destination: '/guides/windows-11-installation', permanent: true },
      { source: '/guides/instalar-apps-android-windows-11', destination: '/guides/install-android-apps-windows-11', permanent: true },
      { source: '/guides/instalar-impressora-wifi', destination: '/guides/install-wifi-printer', permanent: true },
      { source: '/guides/is-valorant-dying-state-of-game', destination: '/guides/is-valorant-dying-state-of-game', permanent: true },
      { source: '/guides/jogos-android-no-pc-melhores-emuladores', destination: '/guides/best-android-emulators-for-pc', permanent: true },
      { source: '/guides/ldplayer-emulador-leve-pc-fraco', destination: '/guides/ldplayer-lightweight-emulator-low-end-pc', permanent: true },
      { source: '/guides/league-of-legends-fps-drop-fix', destination: '/guides/league-of-legends-fps-drop-fix', permanent: true },
      { source: '/guides/league-of-legends-tela-preta-carregamento', destination: '/guides/league-of-legends-black-screen-loading-fix', permanent: true },
      { source: '/guides/lethal-company-fps-boost-mods', destination: '/guides/lethal-company-fps-boost-mods', permanent: true },
      { source: '/guides/limitar-fps-rivatuner-nvidia', destination: '/guides/limit-fps-rivatuner-nvidia', permanent: true },
      { source: '/guides/limpar-cache-navegador-chrome-edge', destination: '/guides/clear-browser-cache-chrome-edge', permanent: true },
      { source: '/guides/limpar-memoria-ram-windows', destination: '/guides/clear-ram-memory-windows', permanent: true },
      { source: '/guides/limpeza-computador', destination: '/guides/computer-cleaning', permanent: true },
      { source: '/guides/limpeza-disco-profunda-arquivos-temporarios', destination: '/guides/deep-disk-cleanup-temp-files', permanent: true },
      { source: '/guides/limpeza-fisica-pc-gamer', destination: '/guides/physical-cleaning-gaming-pc', permanent: true },
      { source: '/guides/limpeza-navegadores', destination: '/guides/browser-cleaning', permanent: true },
      { source: '/guides/limpeza-perifericos-mousepad-teclado', destination: '/guides/cleaning-peripherals-mousepad-keyboard', permanent: true },
      { source: '/guides/lineage-2-otimizar-pvp-fps', destination: '/guides/lineage-2-pvp-fps-optimization', permanent: true },
      { source: '/guides/linux-gaming-bazzite-nobara-steam-deck-pc', destination: '/guides/linux-gaming-bazzite-nobara-steam-deck', permanent: true },
      { source: '/guides/lossless-scaling-frame-generation-fsr-guia', destination: '/guides/lossless-scaling-frame-generation-fsr-guide', permanent: true },
      { source: '/guides/manutencao-preventiva', destination: '/guides/preventive-maintenance', permanent: true },
      { source: '/guides/manutencao-preventiva-computador', destination: '/guides/computer-preventive-maintenance', permanent: true },
      { source: '/guides/melhor-dns-jogos-2026', destination: '/guides/best-dns-for-gaming-2026', permanent: true },
      { source: '/guides/melhor-dns-para-jogos-google-vs-cloudflare', destination: '/guides/best-gaming-dns-google-vs-cloudflare', permanent: true },
      { source: '/guides/melhores-drivers-nvidia-antigos', destination: '/guides/best-older-nvidia-drivers-performance', permanent: true },
      { source: '/guides/melhores-navegadores-custo-beneficio', destination: '/guides/best-browsers-performance', permanent: true },
      { source: '/guides/memoria-virtual-pagefile-ssd-otimizacao', destination: '/guides/virtual-memory-pagefile-ssd-optimization', permanent: true },
      { source: '/guides/micro-stuttering-em-jogos-causas', destination: '/guides/micro-stuttering-in-games-causes', permanent: true },
      { source: '/guides/microsoft-flight-simulator-otimizacao-cache-lod', destination: '/guides/msfs-2020-cache-lod-optimization', permanent: true },
      { source: '/guides/minecraft-alocar-mais-ram', destination: '/guides/allocate-more-ram-minecraft', permanent: true },
      { source: '/guides/minecraft-aumentar-fps-fabric-sodium', destination: '/guides/increase-minecraft-fps-fabric-sodium', permanent: true },
      { source: '/guides/minecraft-lag-fix-optifine-fabric', destination: '/guides/minecraft-lag-fix-optifine-fabric', permanent: true },
      { source: '/guides/minecraft-lento-como-ganhar-fps', destination: '/guides/slow-minecraft-how-to-boost-fps', permanent: true },
      { source: '/guides/minecraft-optifine-vs-sodium-fabric', destination: '/guides/minecraft-optifine-vs-sodium-fabric', permanent: true },
      { source: '/guides/minecraft-shaders-iris-sodium-otimizacao-fps', destination: '/guides/minecraft-shaders-iris-sodium-fps-optimization', permanent: true },
      { source: '/guides/modo-de-jogo-windows-atikvar-ou-nao', destination: '/guides/windows-game-mode-on-or-off', permanent: true },
      { source: '/guides/monitor-240hz-360hz-vale-a-pena-ghosting', destination: '/guides/240hz-360hz-monitors-worth-it-ghosting', permanent: true },
      { source: '/guides/monitor-hz-configuracao-correta', destination: '/guides/correct-monitor-refresh-rate-setup', permanent: true },
      { source: '/guides/monitor-ips-vs-va-vs-tn-jogos', destination: '/guides/ips-vs-va-vs-tn-monitor-gaming', permanent: true },
      { source: '/guides/monitor-ultrawide-jogos-competitivos', destination: '/guides/ultrawide-monitor-competitive-gaming', permanent: true },
      { source: '/guides/monitoramento-sistema', destination: '/guides/system-monitoring', permanent: true },
      { source: '/guides/monitorar-temperatura-pc', destination: '/guides/monitor-pc-temperature', permanent: true },
      { source: '/guides/montagem-pc-gamer-erros-comuns', destination: '/guides/building-gaming-pc-common-mistakes', permanent: true },
      { source: '/guides/mouse-acceleration-raw-accel-guia', destination: '/guides/mouse-acceleration-raw-accel-guide', permanent: true },
      { source: '/guides/mouse-clique-duplo-falhando-fix', destination: '/guides/mouse-double-click-failing-fix', permanent: true },
      { source: '/guides/mouse-dpi-polling-rate-ideal', destination: '/guides/ideal-mouse-dpi-polling-rate', permanent: true },
      { source: '/guides/mouse-otimizacao-windows-precisao', destination: '/guides/mouse-precision-optimization-windows', permanent: true },
      { source: '/guides/mousepad-speed-vs-control', destination: '/guides/speed-vs-control-mousepad-gaming', permanent: true },
      { source: '/guides/msi-afterburner-overclock-undervolt-guia', destination: '/guides/msi-afterburner-overclock-undervolt-guide', permanent: true },
      { source: '/guides/mu-online-reduzir-lag-muvoltris', destination: '/guides/mu-online-reduce-lag-guide', permanent: true },
      { source: '/guides/notebook-gamer-bateria-otimizacao', destination: '/guides/gaming-laptop-battery-optimization', permanent: true },
      { source: '/guides/notion-vs-obsidian-produtividade', destination: '/guides/notion-vs-obsidian-productivity', permanent: true },
      { source: '/guides/nvidia-painel-controle-melhores-configuracoes', destination: '/guides/nvidia-control-panel-best-settings', permanent: true },
      { source: '/guides/nvidia-refelx-on-vs-boost-diferenca', destination: '/guides/nvidia-reflex-on-vs-boost-difference', permanent: true },
      { source: '/guides/nvme-vs-sata-vale-a-pena-upgrade', destination: '/guides/nvme-vs-sata-upgrade-worth-it', permanent: true },
      { source: '/guides/o-que-sao-ai-agents-guia-completo', destination: '/guides/what-are-ai-agents-complete-guide', permanent: true },
      { source: '/guides/obs-studio-gravacao-replay-buffer-av1', destination: '/guides/obs-studio-recording-replay-buffer-av1', permanent: true },
      { source: '/guides/obs-studio-melhores-configuracoes-stream', destination: '/guides/obs-studio-best-streaming-settings', permanent: true },
      { source: '/guides/obs-studio-melhores-configuracoes-stream-2026', destination: '/guides/obs-studio-best-streaming-settings-2026', permanent: true },
      { source: '/guides/obs-studio-streaming-twitch-youtube-guia-completo', destination: '/guides/obs-studio-twitch-youtube-streaming-guide', permanent: true },
      { source: '/guides/onde-baixar-planilhas-excel-gratis', destination: '/guides/where-to-download-free-excel-templates', permanent: true },
      { source: '/guides/otimizacao-jogos-pc', destination: '/guides/pc-gaming-optimization', permanent: true },
      { source: '/guides/otimizacao-performance', destination: '/guides/performance-optimization', permanent: true },
      { source: '/guides/otimizacao-registro', destination: '/guides/registry-optimization', permanent: true },
      { source: '/guides/otimizacao-ssd-windows-11', destination: '/guides/windows-11-ssd-optimization', permanent: true },
      { source: '/guides/otimizacoes-para-notebook-gamer', destination: '/guides/gaming-laptop-optimizations', permanent: true },
      { source: '/guides/overclock-gpu-msi-afterburner', destination: '/guides/gpu-overclock-msi-afterburner', permanent: true },
      { source: '/guides/overclock-processador', destination: '/guides/cpu-overclocking', permanent: true },
      { source: '/guides/overwatch-2-melhores-configuracoes-fps', destination: '/guides/overwatch-2-best-fps-settings', permanent: true },
      { source: '/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering', destination: '/guides/overwatch-2-fps-input-lag-optimization', permanent: true },
      { source: '/guides/palworld-otimizacao-server-dlss', destination: '/guides/palworld-server-dlss-optimization', permanent: true },
      { source: '/guides/pasta-windows-winsxs-gigante-como-limpar', destination: '/guides/huge-windows-winsxs-folder-how-to-clean', permanent: true },
      { source: '/guides/pc-gamer-barato-custo-beneficio-2026', destination: '/guides/budget-gaming-pc-build-2026', permanent: true },
      { source: '/guides/pc-lento-formatar-vs-limpar', destination: '/guides/slow-pc-format-vs-clean', permanent: true },
      { source: '/guides/pc-liga-sem-video-diagnostico', destination: '/guides/pc-turns-on-no-display-fix', permanent: true },
      { source: '/guides/pcsx2-otimizacao-4k-widescreen-texturas-guia', destination: '/guides/pcsx2-4k-widescreen-textures-optimization', permanent: true },
      { source: '/guides/perda-de-pacote-packet-loss-fix', destination: '/guides/packet-loss-fix-gaming', permanent: true },
      { source: '/guides/performance-monitor-v2', destination: '/guides/performance-monitor-v2', permanent: true },
      { source: '/guides/perifericos-gamer-vale-a-pena', destination: '/guides/gaming-peripherals-worth-it', permanent: true },
      { source: '/guides/perifericos-gamer-vale-a-pena-marcas', destination: '/guides/gaming-peripherals-worth-it-brands', permanent: true },
      { source: '/guides/pesquisar-arquivos-windows-mais-rapido', destination: '/guides/search-windows-files-faster', permanent: true },
      { source: '/guides/phasmophobia-reconhecimento-voz-vr', destination: '/guides/phasmophobia-voice-recognition-vr-fix', permanent: true },
      { source: '/guides/playnite-launchbox-frontend-organizacao-biblioteca', destination: '/guides/playnite-launchbox-game-library-frontend', permanent: true },
      { source: '/guides/pobreza-digital-pc-fraco-produtividade', destination: '/guides/digital-poverty-low-end-pc-productivity', permanent: true },
      { source: '/guides/pos-instalacao-windows-11', destination: '/guides/post-installation-windows-11', permanent: true },
      { source: '/guides/privacidade-windows-telemetria', destination: '/guides/windows-privacy-telemetry', permanent: true },
      { source: '/guides/problemas-conexao-wifi-causa-solucao', destination: '/guides/wifi-connection-problems-fix', permanent: true },
      { source: '/guides/problemas-mouse-gamer-sensor', destination: '/guides/gaming-mouse-sensor-issues-fix', permanent: true },
      { source: '/guides/processadores-2026-analise', destination: '/guides/2026-processors-analysis', permanent: true },
      { source: '/guides/programas-essenciais-windows', destination: '/guides/essential-windows-programs', permanent: true },
      { source: '/guides/project-zomboid-fps-boost', destination: '/guides/project-zomboid-fps-boost', permanent: true },
      { source: '/guides/protecao-dados-privacidade', destination: '/guides/data-protection-privacy', permanent: true },
      { source: '/guides/protecao-ransomware', destination: '/guides/ransomware-protection', permanent: true },
      { source: '/guides/pubg-steam-fix-stuttering-travadas', destination: '/guides/pubg-steam-stuttering-fix', permanent: true },
      { source: '/guides/qual-melhor-windows-para-jogos', destination: '/guides/best-windows-version-for-gaming', permanent: true },
      { source: '/guides/rainbow-six-siege-vulkan-fps-configuracao-competitiva', destination: '/guides/rainbow-six-siege-vulkan-competitive-settings', permanent: true },
      { source: '/guides/re-size-bar-ativar-pc-gamer', destination: '/guides/enable-re-size-bar-gaming-pc', permanent: true },
      { source: '/guides/recuperacao-dados', destination: '/guides/data-recovery', permanent: true },
      { source: '/guides/recuperacao-dados-hd-corrompido', destination: '/guides/corrupted-hdd-data-recovery', permanent: true },
      { source: '/guides/recuperacao-sistema', destination: '/guides/system-recovery', permanent: true },
      { source: '/guides/red-dead-redemption-2-melhores-configuracoes', destination: '/guides/red-dead-redemption-2-best-settings', permanent: true },
      { source: '/guides/red-dead-redemption-2-melhores-configuracoes-rdr2', destination: '/guides/red-dead-redemption-2-best-settings-rdr2', permanent: true },
      { source: '/guides/rede-corporativa', destination: '/guides/corporate-network', permanent: true },
      { source: '/guides/rede-domestica', destination: '/guides/home-network', permanent: true },
      { source: '/guides/reduzir-ping-exitlag-noping-dns', destination: '/guides/reduce-ping-exitlag-noping-dns', permanent: true },
      { source: '/guides/reduzir-ping-jogos-online', destination: '/guides/reduce-ping-online-games', permanent: true },
      { source: '/guides/reduzir-ping-regedit-cmd-jogos', destination: '/guides/reduce-ping-regedit-cmd-gaming', permanent: true },
      { source: '/guides/remocao-virus-malware', destination: '/guides/virus-malware-removal', permanent: true },
      { source: '/guides/remover-bloatware-windows-powershell', destination: '/guides/remove-windows-bloatware-powershell', permanent: true },
      { source: '/guides/reshade-guia-instalacao-ray-tracing-rtgi-filtros', destination: '/guides/reshade-installation-guide-rtgi-filters', permanent: true },
      { source: '/guides/resolver-erros-windows', destination: '/guides/resolve-windows-errors', permanent: true },
      { source: '/guides/retroarch-guia-completo-cores-shaders-crt', destination: '/guides/retroarch-complete-guide-shaders-crt', permanent: true },
      { source: '/guides/roblox-fix-erro-conexao', destination: '/guides/roblox-connection-error-fix', permanent: true },
      { source: '/guides/roblox-fps-unlocker-bloat-fix-bloxstrap', destination: '/guides/roblox-fps-unlocker-bloxstrap-guide', permanent: true },
      { source: '/guides/roblox-fps-unlocker-guia', destination: '/guides/roblox-fps-unlocker-guide', permanent: true },
      { source: '/guides/roblox-fps-unlocker-tutorial', destination: '/guides/roblox-fps-unlocker-tutorial', permanent: true },
      { source: '/guides/roblox-tela-branca-travada-fix', destination: '/guides/roblox-white-screen-freeze-fix', permanent: true },
      { source: '/guides/rocket-league-camera-settings-bakkesmod-air-roll', destination: '/guides/rocket-league-camera-settings-bakkesmod', permanent: true },
      { source: '/guides/rocket-league-melhores-configuracoes-camera', destination: '/guides/rocket-league-best-camera-settings', permanent: true },
      { source: '/guides/rodar-llm-local-pc-ollama', destination: '/guides/run-local-llm-pc-ollama', permanent: true },
      { source: '/guides/rog-ally-legion-go-otimizacao-windows-tdp-guia', destination: '/guides/rog-ally-legion-go-windows-tdp-optimization', permanent: true },
      { source: '/guides/rpcs3-otimizacao-configuracao-60fps-patches-guia', destination: '/guides/rpcs3-60fps-patches-optimization-guide', permanent: true },
      { source: '/guides/rtx-4060-vale-a-pena-2026', destination: '/guides/rtx-4060-worth-it-2026', permanent: true },
      { source: '/guides/rust-otimizacao-fps-pvp-visibility', destination: '/guides/rust-fps-pvp-visibility-optimization', permanent: true },
      { source: '/guides/saude-bateria-notebook', destination: '/guides/laptop-battery-health', permanent: true },
      { source: '/guides/segundo-monitor-vertical-configurar', destination: '/guides/setup-second-vertical-monitor', permanent: true },
      { source: '/guides/seguranca-digital', destination: '/guides/digital-security', permanent: true },
      { source: '/guides/seguranca-senhas-gerenciadores', destination: '/guides/password-security-managers', permanent: true },
      { source: '/guides/seguranca-wifi-avancada', destination: '/guides/advanced-wifi-security', permanent: true },
      { source: '/guides/smart-delivery-xbox-pc-como-funciona', destination: '/guides/how-xbox-smart-delivery-works-pc', permanent: true },
      { source: '/guides/solucao-problemas-audio', destination: '/guides/audio-troubleshooting', permanent: true },
      { source: '/guides/solucao-problemas-bluetooth', destination: '/guides/bluetooth-troubleshooting', permanent: true },
      { source: '/guides/som-espacial-windows-configurar', destination: '/guides/configure-windows-spatial-sound', permanent: true },
      { source: '/guides/ssd-nvme-vs-sata-jogos', destination: '/guides/nvme-vs-sata-ssd-for-gaming', permanent: true },
      { source: '/guides/ssd-vs-hd-qual-melhor', destination: '/guides/ssd-vs-hdd-which-is-better', permanent: true },
      { source: '/guides/ssd-vs-hdd-guia', destination: '/guides/ssd-vs-hdd-guide', permanent: true },
      { source: '/guides/stardew-valley-mods-lag-fix', destination: '/guides/stardew-valley-mods-lag-fix', permanent: true },
      { source: '/guides/starfield-otimizacao-dlss-mods', destination: '/guides/starfield-dlss-mods-optimization', permanent: true },
      { source: '/guides/steam-deck-otimizacao-cryoutilities-protonge-guia', destination: '/guides/steam-deck-cryoutilities-protonge-optimization', permanent: true },
      { source: '/guides/steam-launch-options-comandos-fps-boost', destination: '/guides/steam-launch-options-fps-boost', permanent: true },
      { source: '/guides/steam-slow-download-fix', destination: '/guides/steam-slow-download-fix', permanent: true },
      { source: '/guides/steam-tarda-baixar-lento-fix', destination: '/guides/steam-download-slow-fix', permanent: true },
      { source: '/guides/streamlabs-vs-obs-qual-usar', destination: '/guides/streamlabs-vs-obs-which-to-use', permanent: true },
      { source: '/guides/substituicao-ssd', destination: '/guides/ssd-replacement', permanent: true },
      { source: '/guides/sync-vertical-g-sync-free-sync-explicacao', destination: '/guides/vsync-gsync-freesync-explained', permanent: true },
      { source: '/guides/taxa-amostragem-audio-44khz-192khz-bug', destination: '/guides/audio-sample-rate-44khz-192khz-bug', permanent: true },
      { source: '/guides/team-fortress-2-mastercomfig-fps-competitivo', destination: '/guides/team-fortress-2-mastercomfig-competitive-fps', permanent: true },
      { source: '/guides/teclado-desconfigurado-abnt2-ansi', destination: '/guides/keyboard-layout-fix-abnt2-ansi', permanent: true },
      { source: '/guides/teclado-mecanico-rapid-trigger-snap-tap', destination: '/guides/mechanical-keyboard-rapid-trigger-snap-tap', permanent: true },
      { source: '/guides/teclado-mecanico-vs-membrana-qual-o-melhor', destination: '/guides/mechanical-vs-membrane-keyboard', permanent: true },
      { source: '/guides/teclado-notebook-parou-fix', destination: '/guides/laptop-keyboard-stopped-working-fix', permanent: true },
      { source: '/guides/teclados-mecanicos-guia', destination: '/guides/mechanical-keyboards-guide', permanent: true },
      { source: '/guides/teclados-mecanicos-switches-guia', destination: '/guides/mechanical-keyboards-switches-guide', permanent: true },
      { source: '/guides/tela-azul-memory-management-fix', destination: '/guides/bsod-memory-management-fix', permanent: true },
      { source: '/guides/termperatura-pc-fan-control-curva', destination: '/guides/pc-temperature-fan-control-curve', permanent: true },
      { source: '/guides/terraria-tmodloader-64bit-fix', destination: '/guides/terraria-tmodloader-64bit-fix', permanent: true },
      { source: '/guides/terraria-tmodloader-calamity-fps-fix', destination: '/guides/terraria-tmodloader-calamity-fps-fix', permanent: true },
      { source: '/guides/testar-fonte-pc-multimetro', destination: '/guides/test-pc-power-supply-multimeter', permanent: true },
      { source: '/guides/teste-velocidade-internet', destination: '/guides/internet-speed-test', permanent: true },
      { source: '/guides/the-witcher-3-next-gen-otimizacao-ray-tracing', destination: '/guides/the-witcher-3-next-gen-ray-tracing-optimization', permanent: true },
      { source: '/guides/the-witcher-3-next-gen-performance', destination: '/guides/the-witcher-3-next-gen-performance', permanent: true },
      { source: '/guides/tlauncher-viring-falso-positivo', destination: '/guides/tlauncher-virus-false-positive', permanent: true },
      { source: '/guides/troubleshooting-internet', destination: '/guides/internet-troubleshooting', permanent: true },
      { source: '/guides/tutorial-discord-instalar-configurar', destination: '/guides/discord-install-configure-tutorial', permanent: true },
      { source: '/guides/undervolt-cpu-notebook', destination: '/guides/laptop-cpu-undervolt', permanent: true },
      { source: '/guides/unpark-cpu-cores-performance-jogos', destination: '/guides/unpark-cpu-cores-gaming-performance', permanent: true },
      { source: '/guides/upgrade-memoria-ram', destination: '/guides/ram-memory-upgrade', permanent: true },
      { source: '/guides/upgrade-pc-antigo-vale-a-pena', destination: '/guides/upgrade-old-pc-worth-it', permanent: true },
      { source: '/guides/usb-nao-reconhecido-reset-drivers', destination: '/guides/usb-not-recognized-reset-drivers', permanent: true },
      { source: '/guides/valorant-fix-van-9003-secure-boot', destination: '/guides/valorant-van-9003-secure-boot-fix', permanent: true },
      { source: '/guides/valorant-reduzir-input-lag', destination: '/guides/valorant-reduce-input-lag', permanent: true },
      { source: '/guides/valorant-reduzir-input-lag-fps-boost-config', destination: '/guides/valorant-reduce-input-lag-fps-boost', permanent: true },
      { source: '/guides/valorant-van-9003-secure-boot-tpm-fix', destination: '/guides/valorant-van-9003-tpm-secure-boot-fix', permanent: true },
      { source: '/guides/vbs-memory-integrity-performance', destination: '/guides/vbs-memory-integrity-performance', permanent: true },
      { source: '/guides/vcruntime140-dll-nao-encontrado', destination: '/guides/vcruntime140-dll-not-found-fix', permanent: true },
      { source: '/guides/verificar-saude-hd-ssd-crystaldiskinfo', destination: '/guides/check-hdd-ssd-health-crystaldiskinfo', permanent: true },
      { source: '/guides/virtualizacao-vmware', destination: '/guides/vmware-virtualization', permanent: true },
      { source: '/guides/vita3k-emulador-ps-vita-configuracao-android-pc', destination: '/guides/vita3k-ps-vita-emulator-setup-android-pc', permanent: true },
      { source: '/guides/vlc-media-player-vs-potplayer', destination: '/guides/vlc-media-player-vs-potplayer', permanent: true },
      { source: '/guides/vpn-configuracao', destination: '/guides/vpn-configuration', permanent: true },
      { source: '/guides/vpn-jogos-exitlag-noping-vale-a-pena', destination: '/guides/gaming-vpn-exitlag-noping-worth-it', permanent: true },
      { source: '/guides/vpn-vale-a-pena-jogos', destination: '/guides/vpn-worth-it-for-gaming', permanent: true },
      { source: '/guides/water-cooler-vs-air-cooler', destination: '/guides/water-cooler-vs-air-cooler-comparison', permanent: true },
      { source: '/guides/water-cooler-vs-air-cooler-qual-escolher', destination: '/guides/water-cooler-vs-air-cooler-which-to-choose', permanent: true },
      { source: '/guides/webcam-piscando-tela-preta-fix', destination: '/guides/webcam-flickering-black-screen-fix', permanent: true },
      { source: '/guides/wifi-desconectando-sozinho-windows', destination: '/guides/wifi-disconnecting-randomly-windows-fix', permanent: true },
      { source: '/guides/windows-defender-otimizacao-jogos', destination: '/guides/windows-defender-gaming-optimization', permanent: true },
      { source: '/guides/windows-sandbox-testar-virus', destination: '/guides/windows-sandbox-test-viruses', permanent: true },
      { source: '/guides/windows-update-corrigir-erros', destination: '/guides/windows-update-fix-errors', permanent: true },
      { source: '/guides/winrar-vs-7zip-qual-melhor', destination: '/guides/winrar-vs-7zip-which-is-better', permanent: true },
      { source: '/guides/xbox-app-nao-baixa-jogos-gamepass', destination: '/guides/xbox-app-not-downloading-gamepass-games', permanent: true },
      { source: '/guides/xbox-game-bar-desativar-fps-drop', destination: '/guides/disable-xbox-game-bar-fps-drop-fix', permanent: true },
      { source: '/guides/xbox-game-pass-pc-vale-a-pena', destination: '/guides/xbox-game-pass-pc-worth-it', permanent: true },
      { source: '/guides/xenia-emulador-xbox-360-red-dead-redemption-60fps', destination: '/guides/xenia-xbox-360-emulator-rdr1-60fps', permanent: true },
      { source: '/guides/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia', destination: '/guides/yuzu-ryujinx-zelda-mario-60fps-optimization', permanent: true },
      { source: '/guides/z-index-css-explicacao', destination: '/guides/css-z-index-explained', permanent: true },
      { source: '/guides/zonas-mortas-analogico-controle-fix', destination: '/guides/controller-analog-deadzones-fix', permanent: true },

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
