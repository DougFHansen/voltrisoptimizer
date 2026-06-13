import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'limitar-fps-rivatuner-nvidia',
  title: "How to Limit FPS with RivaTuner and NVIDIA (Perfect Frametime)",
  description: "Want to eliminate stuttering and achieve smooth visuals? Learn how to limit your FPS using RivaTuner (RTSS) and the NVIDIA Control Panel in 2026.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "How to Limit FPS with RivaTuner and NVIDIA (Perfect Frametime)";
const description = "Want to eliminate stuttering and achieve smooth visuals? Learn how to limit your FPS using RivaTuner (RTSS) and the NVIDIA Control Panel in 2026.";
const keywords = [
    'how to limit fps rivatuner rtss tutorial 2026',
    'best way to limit fps nvidia control panel',
    'fix stuttering by limiting fps guide',
    'limiting fps vs v-sync which is better 2026',
    'how to use rivatuner for stable frametime'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('limitar-fps-rivatuner-nvidia', title, description, keywords, locale);
}

export default function LimitFPSGuide() {
    const summaryTable = [
        { label: "RivaTuner (RTSS)", value: "Best for stable Frametime" },
        { label: "NVIDIA Panel", value: "Lower Input Lag / More convenient" },
        { label: "V-Sync", value: "Avoid for high performance" },
        { label: "Monitor Check", value: "Always limit to monitor Hertz or –3" }
    ];

    const contentSections = [
        {
            title: "Why Limit FPS if my PC is Powerful?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, having a high FPS (e.g., 300 FPS) doesn't always mean the game is fluid. What truly matters for image smoothness is **Frametime** (the time each frame takes to be rendered). If your FPS fluctuates between 200 and 300, you'll feel micro-stutters. Limiting the FPS to a fixed value (e.g., 141) ensures that all frames are delivered at consistent intervals, eliminating stuttering and reducing GPU heat.
        </p>
      `
        },
        {
            title: "1. RivaTuner (RTSS): Millisecond Precision",
            content: `
        <p class="mb-4 text-gray-300">RivaTuner is considered the most precise framerate limiter in the world:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open RivaTuner Statistics Server (it installs alongside MSI Afterburner).</li>
            <li>In the <strong>'Framerate limit'</strong> field, type your desired value (e.g., 141).</li>
            <li>Change <strong>'Framerate limit mode'</strong> to 'Async' (for less lag) or 'Front-edge' (for more precision).</li>
            <li>RTSS ensures that frame delivery is millisecond-perfect, resulting in a perfectly flat frametime graph.</li>
        </ol>
      `
        },
        {
            title: "2. Via NVIDIA Control Panel (Quick & Easy)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Without installing extra software:</h4>
            <p class="text-sm text-gray-300">
                1. Right-click on your desktop > NVIDIA Control Panel. <br/>
                2. Go to 'Manage 3D settings'. <br/>
                3. Look for <strong>'Max Frame Rate'</strong>. <br/>
                4. Set it to 'On' and choose your value. <br/>
                <strong>Tip:</strong> If you use <strong>G-Sync</strong>, limit your FPS to <strong>3 frames below</strong> your monitor's Hertz (e.g., 141 FPS for a 144Hz monitor) to ensure G-Sync remains active.
            </p>
        </div>
      `
        },
        {
            title: "3. RivaTuner vs NVIDIA: Which to Choose?",
            content: `
        <p class="mb-4 text-gray-300">
            - Use <strong>RivaTuner</strong> if you feel the game is \"shaking\" or \"juddering\" even with high FPS. It is superior for overall image stability.
            <br/><br/>
            - Use the <strong>NVIDIA Control Panel</strong> if you play competitively (Valorant, CS2). As of 2026, NVIDIA's limiter has slightly lower input lag than RivaTuner, which can make a difference in reaction-based shots.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/overclock-gpu-msi-afterburner",
            title: "MSI Afterburner",
            description: "How to use the FPS monitor alongside RivaTuner."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "Latency Fix",
            description: "Reduce system input lag."
        },
        {
            href: "/guides/guia-compra-monitores",
            title: "Understand Hertz",
            description: "Learn why limits depend on your monitor."
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


