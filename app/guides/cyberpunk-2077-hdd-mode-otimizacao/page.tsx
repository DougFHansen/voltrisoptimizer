import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'cyberpunk-2077-hdd-mode-otimizacao',
  title: "Cyberpunk 2077: HDD Mode and FPS Optimization in Windows 11 (2026)",
  description: "Suffering from stuttering in Cyberpunk 2077? Learn how to configure HDD Mode, DLSS 3.5, and how to gain frames in Night City in 2026.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '25 min'
};

const title = "Cyberpunk 2077: HDD Mode and FPS Optimization in Windows 11 (2026)";
const description = "Suffering from stuttering in Cyberpunk 2077? Learn how to configure HDD Mode, DLSS 3.5, and how to gain frames in Night City in 2026.";
const keywords = [
    'cyberpunk 2077 low end pc optimization 2026',
    'how to enable hdd mode cyberpunk 2077 guide',
    'best graphics settings cyberpunk phantom liberty 2026',
    'gain fps cyberpunk 2077 nvidia dlss amd fsr tutorial',
    'solve crash cyberpunk 2077 windows 11 complete guide'
];

export const metadata: Metadata = createGuideMetadata('cyberpunk-2077-hdd-mode-otimizacao', title, description, keywords);

export default function CyberpunkOptimizationGuide() {
    const summaryTable = [
        { label: "Upscaling", value: "DLSS 3.5 Path Tracing / FSR 3.0 Frame Gen" },
        { label: "Vital Mode", value: "HDD Mode (Enable if no NVMe Gen4+)" },
        { label: "2026 Highlight", value: "Ray Reconstruction" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "Night City at maximum performance in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Cyberpunk 2077 (Phantom Liberty)** continues to be the supreme "benchmark" for any PC Gamer in 2026. With the introduction of full Path Tracing, even the most powerful graphics cards struggle. However, the biggest bottleneck for most users is the speed at which world data is loaded. Tweaking streaming settings is the key to removing stuttering.
        </p>
      `
        },
        {
             title: "1. The \"HDD Mode\": Not just for old HDDs",
            content: `
        <p class="mb-4 text-gray-300">This tweak can save your gameplay even on common SSDs:</p>
        <p class="text-sm text-gray-300">
            Go to Settings > Gameplay > **Slow HDD Mode**. <br/><br/>
            Even if you have a SATA SSD or an entry-level NVMe, enabling this option makes the game load models and textures further in advance, preventing objects and people from "popping in" out of nowhere while you drive fast through the city. In 2026, with the increased detail of Night City, this option is vital for maintaining a stable frametime.
        </p>
      `
        },
        {
            title: "2. Elite Technologies: DLSS 3.5 and FSR 3",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">FPS Multipliers:</h4>
            <p class="text-sm text-gray-300">
                - <strong>NVIDIA Frame Generation:</strong> Essential for those with an RTX 40 series or higher. Doubles the FPS by generating very high-quality fake frames. <br/>
                - <strong>NVIDIA Ray Reconstruction:</strong> Improves the sharpness of reflections without being as heavy as traditional Ray Tracing. <br/>
                - <strong>AMD FSR 3.0:</strong> Allows users of older cards (NVIDIA and AMD) to have access to Frame Generation via software.
            </p>
        </div>
      `
        },
        {
            title: "3. Surgical Performance Tweaks",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>What really impacts performance:</strong> 
            <br/><br/>If your FPS is low, reduce these three items first: <br/>
            1. <strong>Cascaded Shadows Resolution:</strong> Set to Medium. This has a low visual impact but saves a lot of shadow processing. <br/>
            2. <strong>Crowd Density:</strong> If you don't mind emptier sidewalks, set it to Low to give your processor a break. <br/>
            3. <strong>Screen Space Reflections:</strong> Disable or use on Low if you are not using Ray Tracing.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Mandatory for Frame Generation to work."
        },
        {
            href: "/guias/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Improve read speed for the game."
        },
        {
            href: "/guias/rtx-4060-vale-a-pena-2026",
            title: "RTX 4060 Benchmark",
            description: "See how the card performs in Night City."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
