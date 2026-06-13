import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'roblox-fps-unlocker-tutorial',
  title: "Roblox FPS Unlocker: How to play above 60 FPS (2026)",
  description: "Tired of playing Roblox locked at 60 FPS? Learn how to use the FPS Unlocker and the new native Roblox features to get more fluidity in 2026.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Roblox FPS Unlocker: How to play above 60 FPS (2026)";
const description = "Tired of playing Roblox locked at 60 FPS? Learn how to use the FPS Unlocker and the new native Roblox features to get more fluidity in 2026.";
const keywords = [
    'roblox fps unlocker 2026 tutorial how to use',
    'how to increase fps in roblox pc 2026 guide',
    'roblox fps unlocker ban tutorial safety',
    'increase frame limit roblox windows 11 tutorial',
    'roblox smooth 144hz 240hz how to setup 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('roblox-fps-unlocker-tutorial', title, description, keywords, locale);
}

export default function RobloxFPSUnlockerGuide() {
    const summaryTable = [
        { label: "Native Limit", value: "60 FPS (Default)" },
        { label: "FPS Unlocker", value: "Allows up to 360 FPS or more" },
        { label: "Ban Check", value: "100% Safe (Approved by Roblox)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The 60 FPS ceiling in Roblox",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          For years, Roblox capped all players at 60 FPS, regardless of how powerful the PC or how fast the monitor was. In 2026, with 144Hz and 240Hz monitors becoming the standard, playing at 60 FPS feels "slow". The **Roblox FPS Unlocker** is the ultimate tool that removes this limit, allowing the game to utilize the full potential of your graphics card.
        </p>
      `
        },
        {
            title: "1. The Native 2026 Feature",
            content: `
        <p class="mb-4 text-gray-300">Before downloading programs, see if the option is already available for you:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open Roblox and join any place.</li>
            <li>Press <strong>Esc</strong> to open the settings menu.</li>
            <li>Go to the <strong>Settings</strong> tab and look for 'Frame Rate Limit'.</li>
            <li>In 2026, Roblox started rolling out native options of 60, 144, 240, or Unlimited. If this option appears, select the value matching your monitor and you are done!</li>
        </ol>
      `
        },
        {
            title: "2. Using RBXFPSUnlocker (External)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For those who don't have the native option:</h4>
            <p class="text-sm text-gray-300">
                1. Download the official <strong>rbxfpsunlocker</strong> on GitHub. <br/>
                2. Extract the .exe file and run it. <br/>
                3. It will appear as a small icon near the Windows clock. <br/>
                4. Right-click it, go to 'FPS Cap' and select <strong>None</strong> to unlock everything. <br/>
                <strong>Attention:</strong> It will not get you banned. The creator of Roblox himself confirmed in official conferences that the use of unlockers is allowed.
            </p>
        </div>
      `
        },
        {
            title: "3. Gameplay Benefits",
            content: `
        <p class="mb-4 text-gray-300">
            Why unlock your FPS? 
            <br/><br/>In Roblox, especially in fighting or parkour games (Obby), high FPS reduces **Input Lag**. This means that when you press the spacebar to jump, the character reacts faster. If you feel that your jump in Roblox fails or is delayed, playing above 100 FPS will solve the problem instantly, giving you a real competitive advantage.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/roblox-fix-erro-conexao",
            title: "Connection Errors",
            description: "Solve problems that prevent you from joining."
        },
        {
            href: "/guides/monitor-ips-vs-va-vs-tn-jogos",
            title: "Monitor Hertz",
            description: "Understand why high FPS needs a good monitor."
        },
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "Limit FPS",
            description: "Stabilize your frames if your FPS fluctuates too much."
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

