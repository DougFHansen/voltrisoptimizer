import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'reduzir-ping-exitlag-noping-dns',
    title: "Reduce Ping and Packet Loss (2026): ExitLag, DNS & Network Settings",
    description: "High ping? Learn how 'GPNs' (ExitLag, NoPing) work, how to choose the best DNS (Cloudflare/Google), and optimize your network adapter.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Ping and Latency (2026): The Ultimate Routing Guide";
const description = "You can't change physics (distance to the server), but you can change the route. Understand how to optimize your connection for competitive gaming.";

const keywords = [
    'is exitlag worth it or a virus',
    'noping vs exitlag ping test',
    'how to reduce ping valorant route',
    'cloudflare warp for games work',
    'best dns for games 2026 gaming',
    'disable nagle algorithm regedit',
    'packet loss check cmd',
    'mtu optimal size ping',
    'network adapter advanced settings',
    'voltris optimizer network'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('reduzir-ping-exitlag-noping-dns', title, description, keywords, locale);
}

export default function PingGuide() {
    const summaryTable = [
        { label: "DNS", value: "1.1.1.1 or 8.8.8.8" },
        { label: "ExitLag", value: "Useful (Poor routes)" },
        { label: "Connection", value: "Ethernet Cable (Always)" },
        { label: "Wi-Fi", value: "Use 5.8GHz (if forced)" },
        { label: "Nagle Alg", value: "Disabled (Regedit)" },
        { label: "MTU", value: "1500 (Default)" },
        { label: "QoS", value: "Disabled (Router)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Physics vs Routing",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Ping is the time it takes for a signal to reach the server and come back. If you live far from the server (e.g., in another region), there is a physical limit — but often the problem is the ISP's routing, which takes unnecessary detours.
        </p>
      `
        },
        {
            title: "Chapter 1: ExitLag/NoPing (GPN)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How does it work?</h4>
                <p class="text-gray-400 text-xs text-justify">
                    They are like a "Waze" for your internet. Instead of your data following the standard ISP route (which may be congested), ExitLag creates a direct tunnel to the game server using private routes.
                    <br/><strong>Is it worth it?</strong> YES, if you have Packet Loss or live far from the server. NO, if you live right next to the server and already have 5ms.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">ExitLag vs Free (Cloudflare Warp)</h4>
                <p class="text-gray-400 text-xs">
                    Cloudflare Warp (1.1.1.1 app) is a free "VPN" that optimizes routes. It's great for resolving international routing issues, but it's not gaming-specific like ExitLag (which uses UDP multipath).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Network Adapter Settings",
            content: `
        <p class="mb-4 text-gray-300">
            Device Manager > Network Adapters > Your Ethernet Adapter > Advanced.
            <br/>- <strong>Energy Efficient Ethernet (Green Ethernet):</strong> DISABLE. (This turns off the card to save power, causing lag spikes).
            <br/>- <strong>Interrupt Moderation:</strong> DISABLE. (Processes packets immediately instead of grouping them. Uses more CPU but lowers latency).
            <br/>- <strong>Flow Control:</strong> DISABLE.
        </p>
      `
        },
        {
            title: "Chapter 3: DNS (Domain Name System)",
            content: `
        <p class="mb-4 text-gray-300">
            DNS doesn't improve Ping during a match, but it improves the speed of finding matches and logging in.
            <br/>Best options:
            <br/>- <strong>Cloudflare:</strong> 1.1.1.1 and 1.0.0.1 (Focus on privacy and speed).
            <br/>- <strong>Google:</strong> 8.8.8.8 and 8.8.4.4 (Reliability).
            <br/>Test which one is faster for you using "DNS Jumper".
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Nagle's Algorithm (TCP NoDelay)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows groups small data packets for efficiency (Nagle's Algorithm). In games, we want to send every click IMMEDIATELY.
            <br/>This requires a Regedit edit (TcpAckFrequency).
            <br/><em>Note:</em> Voltris Optimizer does this automatically, avoiding the risk of registry errors.
        </p>
      `
        },
        {
            title: "Chapter 5: Wi-Fi vs Cable (The Reality)",
            content: `
        <p class="mb-4 text-gray-300">
            Wi-Fi uses radio waves. Waves suffer interference from walls, microwaves, and neighbors. This causes "Jitter" (Ping fluctuating from 20ms to 100ms).
            <br/>To compete, use a <strong>Cat5e or Cat6 Ethernet Cable</strong>. It's cheap and solves 90% of "mysterious lag" issues.
        </p>
      `
        },
        {
            title: "Chapter 6: Bufferbloat Testing",
            content: `
        <p class="mb-4 text-gray-300">
            Visit the <a href="https://www.waveform.com/tools/bufferbloat" target="_blank" class="text-blue-400">Waveform Bufferbloat Test</a> site.
            <br/>If your grade is C or D, it means that when someone in your house watches Netflix, your Ping spikes.
            <br/>Solution: Enable <strong>QoS (Quality of Service)</strong> on your router and limit the maximum download speed to 90% of your total bandwidth, leaving 10% free for game traffic without queues.
        </p>
      `
        },
        {
            title: "Chapter 7: TCP Optimizer",
            content: `
        <p class="mb-4 text-gray-300">
            An old tool but gold.
            <br/>Download TCP Optimizer 4 (SpeedGuide.net).
            <br/>Select your internet speed.
            <br/>Check "Optimal". Click "Apply Changes".
            <br/>It adjusts MTU, RWIN, and dozens of hidden Windows parameters.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Packet Loss",
            content: `
            <p class="mb-4 text-gray-300">
                High ping is bad. Packet Loss is unplayable (you teleport).
                <br/>If you have Packet Loss on a cable: Call your ISP. It's usually a physical problem in the street cabling or a faulty modem.
                <br/>If you have it on Wi-Fi: It's interference. Change the Wi-Fi channel or switch to 5GHz.
            </p>
            `
        },
        {
            title: "Chapter 9: Flush DNS and Reset IP",
            content: `
            <p class="mb-4 text-gray-300">
                Strange internet behavior?
                <br/>Open CMD as Admin:
                <br/><code>ipconfig /flushdns</code>
                <br/><code>netsh int ip reset</code>
                <br/><code>netsh winsock reset</code>
                <br/>Restart your PC. This clears corrupted network caches.
            </p>
            `
        },
        {
            title: "Chapter 10: Server Picker",
            content: `
            <p class="mb-4 text-gray-300">
                In games like CS2, you can limit the maximum acceptable ping in the settings.
                <br/>Set it to "50". This way, the game will never put you in far-away servers, avoiding language barriers and high latency.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can ExitLag get me banned?",
            answer: "No. It is allowed in 99% of games. Just be careful if the game has region locking (e.g., Lost Ark KR), as using a VPN to bypass region locks can lead to a ban, but for reducing ping it's safe."
        },
        {
            question: "Is Cat8 cable better than Cat6?",
            answer: "For home use (<10Gbps) and short distances, it's the same. Don't spend extra money on 'Gamer' Cat8. A good pure copper Cat6 is perfect."
        },
        {
            question: "Does enabling IPv6 help?",
            answer: "IPv6 is the future and avoids Double NAT, but some older games bug out with it. In 2026, most support it well. Ideally, leave it enabled."
        }
    ];

    const externalReferences = [
        { name: "TCP Optimizer Download", url: "https://www.speedguide.net/downloads.php" },
        { name: "Cloudflare Warp", url: "https://1.1.1.1/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/steam-slow-download-fix",
            title: "Steam Download",
            description: "Optimize bandwidth usage."
        },
        {
            href: "/guides/windows-defender-otimizacao-jogos",
            title: "Defender",
            description: "Firewall can block games."
        },
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Discord",
            description: "Prioritize voice on the network."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
            difficultyLevel="Intermediate"
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

