import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'problemas-conexao-wifi-causa-solucao',
  title: "Wi-Fi Problems: How to Resolve Drops and Weak Signal (2026)",
  description: "Does your Wi-Fi keep dropping or is the speed slow? Learn how to configure your router and Windows 11 for a stable Wi-Fi connection in 2026.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Wi-Fi Problems: How to Resolve Drops and Weak Signal (2026)";
const description = "Does your Wi-Fi keep dropping or is the speed slow? Learn how to configure your router and Windows 11 for a stable Wi-Fi connection in 2026.";
const keywords = [
    'wifi dropping on windows 11 how to fix 2026',
    'weak wifi signal laptop tutorial 2026',
    'improve wifi speed 5ghz vs 2.4ghz guide',
    'reset wifi network driver windows tutorial',
    'saturated wifi channel how to change tutorial 2026'
];

export const metadata: Metadata = createGuideMetadata('problemas-conexao-wifi-causa-solucao', title, description, keywords);

export default function WiFiSolutionsGuide() {
    const summaryTable = [
        { label: "2.4GHz Band", value: "Better Range / Lower Speed" },
        { label: "5GHz / 6GHz Band", value: "Lower Range / Very High Speed" },
        { label: "Hardware Check", value: "Poorly positioned antennas" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Wi-Fi: Invisible and Unstable",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with the increase in smart devices (light bulbs, TVs, fridges), the air in our homes is crowded with radio waves. The biggest problem with Wi-Fi is not a lack of technology, but **interference**. If your gaming laptop or work PC is suffering from signal drops, the culprit is probably not the device itself, but rather channel "congestion" around you.
        </p>
      `
        },
        {
            title: "1. 2.4GHz vs 5GHz: Choose the Right Battle",
            content: `
        <p class="mb-4 text-gray-300">Understand where to connect each device:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>2.4GHz:</strong> Use only for low-speed devices or if there are many walls between you and the router. It's a slow frequency, but it penetrates concrete easily.</li>
            <li><strong>5GHz / 6GHz (Wi-Fi 6E/7):</strong> Mandatory for 2026 laptops. The speed is comparable to a cable, but any thick wall will cut the signal in half. Try to keep the router in the same room or use Mesh systems.</li>
        </ul >
      `
        },
        {
            title: "2. Power Management in Windows 11",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">PC "sleeping" on the network:</h4>
            <p class="text-sm text-gray-300">
                A common cause of Wi-Fi drops is Windows trying to save battery. <br/><br/>
                1. Go to Device Manager. <br/>
                2. Expand 'Network Adapters' and right-click your Wi-Fi device. <br/>
                3. Go to 'Power Management' and <strong>UNCHECK</strong> the box: 'Allow the computer to turn off this device to save power'. This prevents the Wi-Fi from dropping after a few minutes of inactivity.
            </p>
        </div>
      `
        },
        {
            title: "3. Clearing the Network Stack (Flush)",
            content: `
        <p class="mb-4 text-gray-300">
            If reaching the Wi-Fi works but the internet won't load anything:
            <br/><br/>Open CMD as administrator and run these three commands in order:
            <br/>1. <code>netsh winsock reset</code>
            <br/>2. <code>netsh int ip reset</code>
            <br/>3. <code>ipconfig /flushdns</code>
            <br/>This clears all old network "paths" that might be corrupted after a Windows 11 update in 2026.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/configuracao-roteador-wifi",
            title: "Configure Router",
            description: "Learn how to change the Wi-Fi channel."
        },
        {
            href: "/guides/troubleshooting-internet",
            title: "Internet Troubleshooting",
            description: "Extra tips for ISP issues."
        },
        {
            href: "/guides/perda-de-pacote-packet-loss-fix",
            title: "Packet Loss",
            description: "How to resolve Wi-Fi lag."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

