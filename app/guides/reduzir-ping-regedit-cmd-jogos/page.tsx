import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'reduzir-ping-regedit-cmd-jogos',
    title: "Reduce Ping and Lag in Online Games: The Network Engineering Guide (2026)",
    description: "Learn how to eliminate Bufferbloat, configure Regedit for TCP No-Delay, and choose the perfect DNS for Valorant, CS2, and LoL.",
    category: 'optimization',
    difficulty: 'Advanced',
    time: '35 min'
};

const title = "Reduce Ping and Lag in Online Games: The Network Engineering Guide (2026)";
const description = "Learn how to eliminate Bufferbloat, configure Regedit for TCP No-Delay, and choose the perfect DNS for Valorant, CS2, and LoL.";
const keywords = [
    'reduce ping online games regedit 2026',
    'bufferbloat test waveform how to solve',
    'best dns for games 2026',
    'disable nagle algorithm windows 11',
    'configure network card for performance'
];

export const metadata: Metadata = createGuideMetadata('reduzir-ping-regedit-cmd-jogos', title, description, keywords);

export default function NetworkGuide() {
    const summaryTable = [
        { label: "Main Enemy", value: "Bufferbloat (Queueing Delay)" },
        { label: "Ideal Hardware", value: "CAT6 Ethernet Cable" },
        { label: "Key Setting", value: "SQM (Router)" },
        { label: "Windows Tweak", value: "TCP No-Delay" },
        { label: "Time Required", value: "35 min" }
    ];

    const contentSections = [
        {
            title: "The Speed vs Latency Myth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Having 500 Mega internet doesn't guarantee low ping. Speed is the width of the road; Latency (Ping) is the speed of the car. If the road is crowded (Bufferbloat), your Ferrari will go at 10km/h. This guide focuses on <strong>Latency</strong>.
        </p>
      `
        },
        {
            title: "Step 1: Diagnosing Bufferbloat",
            content: `
        <p class="mb-4 text-gray-300">
            Bufferbloat happens when your router tries to send too much data and creates a queue. This causes those "teleports" in the game when someone starts watching Netflix in the living room.
        </p>
        <div class="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h4 class="text-white font-bold mb-2">The Ultimate Test</h4>
            <p class="text-gray-400 text-sm">
                Go to <strong>waveform.com/tools/bufferbloat</strong> and run the test. If you get a grade of "C", "D" or "F", you have a serious latency issue under load. The goal is an "A+" grade.
            </p>
        </div>
      `
        },
        {
            title: "Step 2: Registry Optimization (TCP No-Delay)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows, by default, "holds" small data packets to send them together (Nagle's Algorithm). This is great for downloads, but terrible for games where every millisecond counts. Let's turn this off.
        </p>

        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-xs overflow-x-auto">
            <p class="text-gray-500 mb-2">Registry Editor (Regedit)</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-2">
                <li>Open Regedit and navigate to: <br/><span class="text-blue-300">HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces</span></li>
                <li>You will see several folders with random letters. Look for the one that has your IP (e.g., 192.168.x.x) listed on the right.</li>
                <li>In that folder, right-click > New > DWORD (32-bit).</li>
                <li>Name it <strong>TcpAckFrequency</strong> and change the value to <strong>1</strong>.</li>
                <li>Create another DWORD called <strong>TCPNoDelay</strong> and change the value to <strong>1</strong>.</li>
                <li>Restart your PC.</li>
            </ol>
        </div>
      `
        },
        {
            title: "Step 3: DNS Benchmarking (Stop guessing)",
            content: `
        <p class="mb-4 text-gray-300">
            Don't use Google DNS (8.8.8.8) just because "everyone uses it". Depending on your route, Cloudflare (1.1.1.1) or even OpenDNS might be faster.
        </p>
        <p class="text-gray-300">
            Download the <strong>GRC DNS Benchmark</strong> tool. It tests 50 real DNS servers from your home and tells you which responds fastest. Configure the winner on your IPv4 network adapter.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/configuracao-roteador-wifi",
            title: "Configure Router",
            description: "Learn how to activate QoS and UPnP."
        },
        {
            href: "/guides/wifi-desconectando-sozinho-windows",
            title: "Wi-Fi Dropping",
            description: "Solutions for wireless instability."
        },
        {
            href: "/guides/debloat-windows-11-otimizacao-powershell",
            title: "Debloat Windows",
            description: "Fewer processes = Less network usage."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            showVoltrisOptimizerCTA={true}
        />
    );
}

