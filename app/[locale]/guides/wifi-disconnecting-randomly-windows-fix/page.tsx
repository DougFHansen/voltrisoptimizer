import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'wifi-desconectando-sozinho-windows',
  title: "Wi-Fi Disconnecting Randomly in Windows 11: How to fix (2026)",
  description: "Does your Wi-Fi drop all the time or disconnect when gaming? Learn how to configure the network adapter for maximum stability in Windows 11 in 2026.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Wi-Fi Disconnecting Randomly in Windows 11: How to fix (2026)";
const description = "Does your Wi-Fi drop all the time or disconnect when gaming? Learn how to configure the network adapter for maximum stability in Windows 11 in 2026.";
const keywords = [
    'wifi disconnecting randomly windows 11 how to fix 2026',
    'wifi network dropping all the time laptop tutorial guide',
    'disable power saving mode wifi windows 11 tutorial',
    'stabilize wifi for online games guide 2026',
    'reset wifi driver windows 11 step by step tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('wifi-desconectando-sozinho-windows', title, description, keywords, locale);
}

export default function WiFiFixGuide() {
    const summaryTable = [
        { label: "Main Cause", value: "Adapter Power Management" },
        { label: "Quick Fix", value: "Reset TCP/IP Stack in CMD" },
        { label: "Hardware Check", value: "Check Laptop Antennas" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The mystery of dropping signals",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          There's nothing more frustrating than being in an important match or meeting and having the Wi-Fi disconnect for no apparent reason. In 2026, with Wi-Fi 6E and Wi-Fi 7 becoming popular, Windows 11 tries to save battery by turning off the signal when it thinks you aren't actively using it. In addition, channel conflicts between neighbors can constantly drop your connection in Windows 11.
        </p>
      `
        },
        {
            title: "1. Disabling Adapter Power Saving",
            content: `
        <p class="mb-4 text-gray-300">This is tweak #1 for stability:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Press Win+X and go to <strong>Device Manager</strong>.</li>
            <li>Expand 'Network adapters' and double-click your Wi-Fi card (e.g. Intel Wi-Fi 6E).</li>
            <li>Go to the <strong>Power Management</strong> tab.</li>
            <li>Uncheck the <strong>'Allow the computer to turn off this device to save power'</strong> box.</li>
            <li>If the tab doesn't appear, you'll need to change the Windows power plan to 'High Performance'.</li>
        </ol>
      `
        },
        {
            title: "2. Resetting the Network Stack (TCP/IP)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Recovery Commands:</h4>
            <p class="text-sm text-gray-300">
                If the Wi-Fi disconnects and the network icon locks up, use these commands in CMD (Admin) to clear 2026 errors: <br/><br/>
                - <code>netsh winsock reset</code> <br/>
                - <code>netsh int ip reset</code> <br/>
                - <code>ipconfig /flushdns</code> <br/>
                These commands force Windows to forget corrupted network settings and fetch a clean new IP address from the router.
            </p>
        </div>
      `
        },
        {
            title: "3. Interference and 5GHz/6GHz Channels",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>2026 Tip:</strong> If you live in an apartment, the 2.4GHz signal is saturated. 
            <br/><br/>Try to force your PC to use only the <strong>5GHz or 6GHz</strong> frequency. In Device Manager, in the advanced properties of your Wi-Fi card, look for 'Preferred Band' and select 'Prefer 5GHz'. This prevents Windows from switching between bands, which is the cause of 50% of sudden drops during use.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/problemas-conexao-wifi-causa-solucao",
            title: "General Wi-Fi Guide",
            description: "Tips for weak signal and range."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Lower Ping",
            description: "Improve your wireless network response."
        },
        {
            href: "/guides/troubleshooting-internet",
            title: "Network Diagnostics",
            description: "What to do if nothing works."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

