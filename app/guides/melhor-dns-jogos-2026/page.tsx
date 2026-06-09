import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'melhor-dns-jogos-2026',
    title: "Best DNS for Gaming in 2026: Cloudflare vs Google vs ISP",
    description: "Reduce resolution time and improve connection stability. We tested Cloudflare (1.1.1.1), Google (8.8.8.8), and OpenDNS to find out which offers the lowest latency and highest security.",
    category: 'network-security',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Which is the Best DNS for Gaming? Comparative Guide and Setup (2026)";
const description = "DNS isn't magic, but a bad server can disconnect you from LoL or Valorant. Learn how to choose and configure the fastest DNS for your region.";

const keywords = [
    'best dns for gaming 2026 guide',
    'dns cloudflare 1.1.1.1 vs google 8.8.8.8',
    'reduce ping by changing dns truth or myth',
    'how to configure dns windows 11 ipv4',
    'secure dns against gaming ddos',
    'opendns gaming settings',
    'is quad9 dns worth it',
    'dns benchmark speed test'
];

export const metadata: Metadata = createGuideMetadata('melhor-dns-jogos-2026', title, description, keywords);

export default function DNSGuide() {
    const summaryTable = [
        { label: "Overall Winner", value: "Cloudflare (1.1.1.1)" },
        { label: "Best Stability", value: "Google (8.8.8.8)" },
        { label: "Myth", value: "DNS doesn't lower Ping (during match)" },
        { label: "Reality", value: "DNS resolves Login/Lobby" },
        { label: "Configuration", value: "IPv4 in Network Properties" },
        { label: "Alternative", value: "Quad9 (Security)" }
    ];

    const contentSections = [
        {
            title: "Does DNS Lower Ping? The Definitive Truth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          There is a huge myth that changing your DNS will lower your ping from 50ms to 20ms inside the game. <strong>This is false.</strong> The DNS (Domain Name System) is the internet's phonebook; it converts "riotgames.com" into an IP number.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          Once the game connects to the match via the server's IP, the DNS is no longer used. HOWEVER, a bad DNS (usually the default from your ISP) causes delays in opening the game, "Failed to connect to chat" errors, login failures, and drops in the Lobby. Therefore, using a premium DNS is essential.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🌐</span> Auto-DNS in Voltris Optimizer
            </h4>
            <p class="text-gray-300 mb-4">
                Don't know which DNS is fastest in your city? <strong>Voltris Optimizer</strong> performs a real-time ping test for major servers (Cloudflare, Google, Level3) and automatically applies the fastest one to your network adapter with one click.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Optimize DNS Now
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "The Major Players: 2026 Comparison",
            content: `
        <p class="mb-4 text-gray-300">
            Which one should you choose?
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-[#0A0A0F] p-6 rounded-xl border border-orange-500/20">
                <h4 class="text-orange-400 font-bold mb-2 flex items-center gap-2">Cloudflare (1.1.1.1)</h4>
                <p class="text-gray-400 text-sm mb-4">
                    Focused on privacy and raw speed. Usually the fastest in the world (14ms average global response).
                </p>
                <ul class="text-xs text-gray-500 font-mono space-y-1">
                    <li>Primary: 1.1.1.1</li>
                    <li>Secondary: 1.0.0.1</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-6 rounded-xl border border-blue-500/20">
                <h4 class="text-blue-400 font-bold mb-2 flex items-center gap-2">Google (8.8.8.8)</h4>
                <p class="text-gray-400 text-sm mb-4">
                    The most reliable. It never goes down. If Cloudflare fails, Google is the best backup option. Slightly slower, but extremely robust.
                </p>
                <ul class="text-xs text-gray-500 font-mono space-y-1">
                    <li>Primary: 8.8.8.8</li>
                    <li>Secondary: 8.8.4.4</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "How to Configure DNS in Windows 11 (Step-by-Step)",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Press <strong>Win + R</strong> to open Run.</li>
            <li>Type <code>ncpa.cpl</code> and press Enter. (This opens Network Connections directly).</li>
            <li>Right-click your adapter (Ethernet or Wi-Fi) > <strong>Properties</strong>.</li>
            <li>In the list, look for <strong>Internet Protocol Version 4 (TCP/IPv4)</strong>. Double-click it.</li>
            <li>At the bottom, check <strong>"Use the following DNS server addresses"</strong>.</li>
            <li>Type the numbers (e.g., 1.1.1.1 and 1.0.0.1).</li>
            <li>Click OK, and OK again.</li>
            <li>Open CMD (Prompt) and type <code>ipconfig /flushdns</code> to clear the old cache.</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "DNS Over HTTPS (DoH): The Future",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-purple-400 font-bold mb-4 text-xl">🔒 Browsing Encryption</h4>
                <p class="text-gray-300 mb-4">
                    Normal DNS sends your requests in plain text (your provider knows which sites you access). DoH encrypts this.
                </p>
                <p class="text-gray-300 text-sm">
                    In Windows 11, you can enable this natively: Settings > Network & Internet > Ethernet > DNS server assignment > Edit > Select "Encrypted (DNS over HTTPS)" in the template. It improves privacy but adds a few milliseconds of latency. For competitive gaming, prefer the standard mode (unencrypted) for speed.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "DNS Benchmark Tool",
            content: `
            <p class="mb-4 text-gray-300">
                Don't trust blindly. Download free software like <strong>DNS Jumper</strong> or <strong>DNS Benchmark (Gibson Research)</strong>. They test 50 DNS servers from YOUR home and show you which is fastest for your specific route. Sometimes, OpenDNS (208.67.222.222) beats Google in your region.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can changing DNS lead to a ban?",
            answer: "Never. DNS is a basic network setting. No game bans for that."
        },
        {
            question: "Can I use different DNS on my PC and Router?",
            answer: "Yes, and it is recommended. Configure DNS directly in Windows on your PC for best results. If you configure it on the Router, all household devices will use it, which is good, but Windows settings take priority over the router."
        },
        {
            question: "Does IPv6 need a new DNS?",
            answer: "Yes. If you use IPv6, Cloudflare is: 2606:4700:4700::1111."
        }
    ];

    const externalReferences = [
        { name: "Cloudflare 1.1.1.1", url: "https://1.1.1.1/" },
        { name: "Google Public DNS", url: "https://developers.google.com/speed/public-dns" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-limpar-cache-dns-ip-flushdns",
            title: "Network CMD Commands",
            description: "Learn how to use ipconfig, release, renew, and flushdns."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Reduce Ping",
            description: "Registry optimizations that actually work."
        },
        {
            href: "/guides/configuracao-roteador-wifi",
            title: "Configure Router",
            description: "DMZ, UPnP, and Port Forwarding explained."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}


