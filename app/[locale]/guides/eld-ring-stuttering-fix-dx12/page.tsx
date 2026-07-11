import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'eld-ring-stuttering-fix-dx12',
  title: "Elden Ring: How to Fix Stuttering and Lag (DX12 Fix 2026)",
  description: "Suffering from stuttering in the Lands Between? Learn how to fix Elden Ring stuttering on DirectX 12 and gain stability in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Elden Ring: How to Fix Stuttering and Lag (DX12 Fix 2026)";
const description = "Suffering from stuttering in the Lands Between? Learn how to fix Elden Ring stuttering on DirectX 12 and gain stability in 2026.";
const keywords = [
    'elden ring stuttering fix 2026 windows 11',
    'how to increase fps elden ring low end pc tutorial',
    'fix elden ring lag dx12 complete guide',
    'best elden ring performance settings 2026',
    'elden ring pc lag fix nvidia amd tutorial 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('eld-ring-stuttering-fix-dx12', title, description, keywords, locale);
}

export default function EldenRingFixGuide() {
    const summaryTable = [
        { label: "Main Cause", value: "Real-time Shader Compilation" },
        { label: "Key Optimization", value: "Unlimited Shader Cache (NVIDIA)" },
        { label: "Vital Step", value: "Disable Ray Tracing (If GPU is mid-range)" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The technical challenge of Elden Ring in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Even years after its launch, **Elden Ring** still presents stuttering (micro-stuttering) issues on Windows 11. This happens mainly due to how the game manages DirectX 12, compiling shaders while you run through the map. In 2026, with the Shadow of the Erdtree DLC demanding even more from hardware, configuring shader cache and power management is essential for a fluid experience.
        </p>
      `
        },
        {
            title: "1. Unlimited Shader Cache (NVIDIA)",
            content: `
        <p class="mb-4 text-gray-300">This is the most important adjustment to stop FPS spikes:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open the NVIDIA Control Panel.</li>
            <li>Go to 'Manage 3D settings'.</li>
            <li>Search for <strong>'Shader Cache Size'</strong>.</li>
            <li>Change from 'Default' to <strong>'Unlimited'</strong> or 10GB.</li>
            <li>This prevents the game from deleting old shaders, drastically reducing stuttering in areas you've already visited.</li>
        </ol>
      `
        },
        {
            title: "2. Disabling Hidden Ray Tracing",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Attention to the Menu:</h4>
            <p class="text-sm text-gray-300">
                Often, after an update, Elden Ring enables **Ray Tracing** automatically. Even on 'Low', Ray Tracing consumes nearly 40% of your GPU performance without offering a drastic visual change in the game's artistic style. Make sure it is DISABLED in the graphic settings to maintain a constant 60 FPS.
            </p>
        </div>
      `
        },
        {
            title: "3. Power Priority and Windows 11",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Maximum Stability in 2026:</strong> 
            <br/><br/>On Windows 11, go to Settings > System > Display > Graphics. Add the Elden Ring executable (eldenring.exe) and set it to **'High Performance'**. Additionally, in Power Options, use the 'Maximum Performance' plan. This ensures your processor's clock doesn't drop during boss fights, where any millisecond of lag can be fatal.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Essential for DX12 fluidity."
        },
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "Limit FPS",
            description: "Maintain perfect frame pacing."
        },
        {
            href: "/guides/rtx-4060-vale-a-pena-2026",
            title: "RTX Performance",
            description: "See how modern cards run the game."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
