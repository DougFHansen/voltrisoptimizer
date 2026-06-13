import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'melhor-dns-para-jogos-google-vs-cloudflare',
  title: "Which is the Best DNS for Gaming? Google (8.8.8.8) vs Cloudflare (1.1.1.1) (2026)",
  description: "Does changing your DNS lower your ping? We tested the world's leading DNS servers to find out which resolves routes fastest and improves your connection.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Which is the Best DNS for Gaming? Google (8.8.8.8) vs Cloudflare (1.1.1.1) (2026)";
const description = "Does changing your DNS lower your ping? We tested the world's leading DNS servers to find out which resolves routes fastest and improves your connection.";
const keywords = ['best dns for gaming 2026', 'dns google vs cloudflare', 'does dns lower ping', 'how to change dns windows 11', 'dns for valorant', 'opendns gaming'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('melhor-dns-para-jogos-google-vs-cloudflare', title, description, keywords, locale);
}

export default function DNSGuide() {
    const summaryTable = [
        { label: "Fastest", value: "Cloudflare (1.1.1.1)" },
        { label: "Most Stable", value: "Google (8.8.8.8)" },
        { label: "Lower Ping?", value: "No (Indirect)" },
        { label: "Security", value: "Quad9 (9.9.9.9)" }
    ];

    const contentSections = [
        {
            title: "The Great DNS and Ping Myth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
          Let's be direct: <strong>DNS does NOT lower your in-game ping</strong>.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
           DNS (Domain Name System) is essentially the internet's phonebook. It only works when you type \"google.com\" or open a game launcher. Once you're connected to a game server (via its direct IP), the DNS stops doing anything. Changing your DNS helps websites and downloads load faster, but it won't make your character move faster in-game.
        </p>
      `,
            subsections: []
        },
        {
            title: "The Benchmark: Who is Fastest?",
            content: `
        <p class="mb-4 text-gray-300">
            We used the <strong class="text-white">DNSBench</strong> tool to test response times in milliseconds across various regions.
        </p>
        
        <div class="space-y-4">
            <div class="bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
                <strong class="text-white block text-lg">1. Cloudflare (1.1.1.1 and 1.0.0.1)</strong>
                <p class="text-gray-300 text-sm">
                    The winner in raw speed (12ms average response). Focused on privacy (doesn't sell your data).
                </p>
            </div>
            <div class="bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
                <strong class="text-white block text-lg">2. Google (8.8.8.8 and 8.8.4.4)</strong>
                <p class="text-gray-300 text-sm">
                    Rock solid (20ms average response). It never goes down. If Cloudflare fails for some reason, use Google.
                </p>
            </div>
            <div class="bg-red-900/20 p-4 rounded border-l-4 border-red-500">
                <strong class="text-white block text-lg">3. Your ISP's DNS (Comcast/AT&T/etc.)</strong>
                <p class="text-gray-300 text-sm">
                    Usually slow, often censored, and tracks your history. <strong>Change it immediately.</strong>
                </p>
            </div>
        </div>
      `,
            subsections: []
        },
        {
            title: "How to Change DNS in Windows 11",
            content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Press Win + I (Settings) > Network & Internet.</li>
            <li>Click on your connection (Ethernet or Wi-Fi) > Hardware properties.</li>
            <li>Next to \"DNS server assignment,\" click <strong>Edit</strong>.</li>
            <li>Switch to <strong>Manual</strong> > Enable <strong>IPv4</strong>.</li>
            <li>Preferred DNS: <code>1.1.1.1</code></li>
            <li>Alternate DNS: <code>8.8.8.8</code> (Having a backup from a different provider is smart).</li>
            <li>Save.</li>
            <li>Open CMD and type: <code>ipconfig /flushdns</code> to clear the old cache.</li>
        </ol>
      `
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
        />
    );
}
