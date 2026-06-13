import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'mu-online-reduzir-lag-muvoltris',
  title: "Mu Online: How to Remove Lag and Increase FPS in 2026",
  description: "Suffering from stutters in Mu Online? Learn how to optimize Mu's classic engine to run smoothly in invasions and castles, even on weak PCs.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Mu Online: How to Remove Lag and Increase FPS in 2026";
const description = "Suffering from stutters in Mu Online? Learn how to optimize Mu's classic engine to run smoothly in invasions and castles, even on weak PCs.";
const keywords = [
    'how to remove lag mu online 2026 tutorial',
    'mu online fps boost low end pc guide',
    'reduce skill lag mu online tutorial',
    'configure main.exe mu online performance 2026',
    'mu online stuttering on windows 11 fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('mu-online-reduzir-lag-muvoltris', title, description, keywords, locale);
}

export default function MuOnlineFixGuide() {
    const summaryTable = [
        { label: "Graphics Engine", value: "Old OpenGL (Single Core)" },
        { label: "Solution #1", value: "Disable Dynamic Effects (F9/F10)" },
        { label: "Network Check", value: "Prioritize wired connection (Ethernet)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The challenge of running a classic in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Mu Online** is a game that was born in an era where video cards weren't even mandatory. Because of this, its graphics engine is extremely dependent on a single processor core. In 2026, with high-resolution monitors, Mu can experience "stutters" even on high-end PCs if the system isn't configured to handle old video instructions.
        </p>
      `
        },
        {
            title: "1. In-Game Optimization: Performance Shortcuts",
            content: `
        <p class="mb-4 text-gray-300">Most modern Mu servers have native optimization commands:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>F9 / O Key:</strong> Usually disables glow effects on wings and items (+11/+15). In a crowded Lorencia, this triples your FPS.</li>
            <li><strong>Disable Sound:</strong> It might seem silly, but Mu Online's audio driver is very old and can cause micro-stutters every time a skill plays a sound.</li>
            <li><strong>Anti-Aliasing Adjustment:</strong> In the launcher, try to keep Antialiasing at 0 or 2x. Anything more just blurs the image in Mu's graphics engine.</li>
        </ul >
      `
        },
        {
            title: "2. Compatibility in Windows 11",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Technical adjustment:</h4>
            <p class="text-sm text-gray-300">
                1. Right-click on the <code>main.exe</code> of your Mu Online. <br/>
                2. Go to Properties > Compatibility. <br/>
                3. Check <strong>'Disable fullscreen optimizations'</strong>. <br/>
                4. Click on 'Change high DPI settings' and check the 'Override high DPI scaling' option. <br/>
                This prevents Windows from trying to "stretch" the game, which causes input latency and heavy mouse feel.
            </p>
        </div>
      `
        },
        {
            title: "3. Latency and Connectivity",
            content: `
        <p class="mb-4 text-gray-300">
            Lag in Mu is often network-related, not FPS-related. 
            <br/><br/><strong>Tip:</strong> If your skills take too long to activate, change your <strong>DNS</strong> to Google or Cloudflare. Avoid playing on Wi-Fi; Mu Online doesn't handle small packet loss well, which causes the "teleportation" (desync) effect where you snap back to where you were seconds ago.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "General tips for competitive games."
        },
        {
            href: "/guides/melhor-dns-jogos-2026",
            title: "Best DNS",
            description: "Choose the ideal server for Mu."
        },
        {
            href: "/guides/lineage-2-otimizar-pvp-fps",
            title: "Optimize MMORPG",
            description: "Tips for other classics."
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

