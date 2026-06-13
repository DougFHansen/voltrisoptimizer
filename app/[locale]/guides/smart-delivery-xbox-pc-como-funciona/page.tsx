import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'smart-delivery-xbox-pc-como-funciona',
  title: "Xbox Smart Delivery: How it works on PC and Console (2026)",
  description: "Understand what Microsoft's Smart Delivery is and how it ensures you always have the best version of the game on your PC or Xbox in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Xbox Smart Delivery: How it works on PC and Console (2026)";
const description = "Understand what Microsoft's Smart Delivery is and how it ensures you always have the best version of the game on your PC or Xbox in 2026.";
const keywords = [
    'xbox smart delivery how it works 2026',
    'play xbox games on pc smart delivery guide',
    'smart delivery xbox series x vs pc tutorial',
    'buy xbox game get pc version guide 2026',
    'microsoft smart delivery benefits 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('smart-delivery-xbox-pc-como-funciona', title, description, keywords, locale);
}

export default function SmartDeliveryGuide() {
    const summaryTable = [
        { label: "What is it", value: "Buy once, play the best version everywhere" },
        { label: "Platforms", value: "Xbox One, Series S/X and Windows 10/11" },
        { label: "Saves", value: "Synced in real-time to the cloud" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The Smart Delivery Philosophy",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, Microsoft consolidated the Xbox ecosystem as a service, not just a console. **Smart Delivery** is the technology that ensures that, if you bought the game *Forza Horizon* for your old Xbox One, you will automatically get the optimized 4K version on your Xbox Series X or the ultra-performance version on your Gaming PC with Windows 11, without paying a penny extra for it.
        </p>
      `
        },
        {
            title: "1. Play Anywhere: From couch to office",
            content: `
        <p class="mb-4 text-gray-300">The biggest benefit for PC users in 2026:</p>
        <p class="text-sm text-gray-300">
            Many titles with Smart Delivery are also part of the **Xbox Play Anywhere** program. This means you can start your *Gears of War* campaign on the living room console and, when someone wants to use the TV, you simply sit at your PC, open the Xbox app and continue from the exact second you left off, with all your progress synchronized.
        </p>
      `
        },
        {
            title: "2. Smart Space Management",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Selective Installation:</h4>
            <p class="text-sm text-gray-300">
                Smart Delivery doesn't just download the game; it downloads the **correct version for your hardware**. <br/><br/>
                If you have a Series S, it will download 1080p/1440p textures to save limited SSD space. If you have a high-end PC, it will pull the 4K texture packs and Ray Tracing. This saves dozens of gigabytes of unnecessary downloads on your Windows 11 in 2026.
            </p>
        </div>
      `
        },
        {
            title: "3. How to spot supported games?",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>On the Microsoft Store:</strong> 
            <br/><br/>Look for the green 'Smart Delivery' badge on the product page. Almost all games from **Xbox Game Studios** and major partners like EA and Ubisoft use this technology. In 2026, it is very rare to find titles exclusive to a single generation in the Xbox ecosystem, making the investment in games much more lasting.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/xbox-game-pass-pc-vale-a-pena",
            title: "Game Pass Review",
            description: "The best way to try Smart Delivery."
        },
        {
            href: "/guides/xbox-app-nao-baixa-jogos-gamepass",
            title: "Fix Xbox App",
            description: "Resolve download errors on Windows 11."
        },
        {
            href: "/guides/ssd-nvme-vs-sata-jogos",
            title: "Optimize Load Times",
            description: "Enjoy the maximum speed of your setup."
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
            relatedGuides={relatedGuides}
        />
    );
}

