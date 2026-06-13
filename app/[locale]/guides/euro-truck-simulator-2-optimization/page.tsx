import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'euro-truck-simulator-2-otimizacao',
  title: "Euro Truck Simulator 2: Best FPS Settings (2026)",
  description: "Is ETS2 stuttering in big cities? Learn how to optimize Euro Truck Simulator 2 to run smoothly on your PC in 2026.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Euro Truck Simulator 2: Best FPS Settings (2026)";
const description = "Is ETS2 stuttering in big cities? Learn how to optimize Euro Truck Simulator 2 to run smoothly on your PC in 2026.";
const keywords = [
    'best euro truck simulator 2 settings 2026',
    'how to increase ets2 fps weak pc tutorial 2026',
    'ets2 lag fix big cities windows 11 guide',
    'configure realistic ets2 graphics with performance',
    'ets2 optimization mods 2026 gamer tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('euro-truck-simulator-2-otimizacao', title, description, keywords, locale);
}

export default function ETS2OptimizationGuide() {
    const summaryTable = [
        { label: "Upscaling", value: "FSR 2.0 (In-game Native)" },
        { label: "Main Performance Killer", value: "Scaling above 200%" },
        { label: "2026 Highlight", value: "Improved shaders and lighting" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "Driving Smoothly in 2026 Europe",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Euro Truck Simulator 2 (ETS2)** is a game that heavily relies on a single processor core. Even with powerful graphics cards in 2026, you may notice FPS drops when entering detailed cities like Berlin or Paris due to traffic and lights. The secret to running smoothly is balancing visual quality with real-time shadow and reflection processing.
        </p>
      `
        },
        {
            title: "1. The Scaling Secret",
            content: `
        <p class="mb-4 text-gray-300">This is the most GPU-intensive setting in the game:</p>
        <p class="text-sm text-gray-300">
            Many players set scaling to 400% to remove aliasing. However, this causes the game to render in 4K, even if you have a 1080p monitor. <br/><br/>
            <strong>2026 Tip:</strong> Set it to 100% or 125% and use **FSR (FidelityFX Super Resolution)** in the graphics settings. This will provide the same sharpness without the extreme performance hit of super-sampling, ensuring stable frames even in heavy capital cities.
        </p>
      `
        },
        {
            title: "2. Shadows and Mirrors: Careful!",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Save the Processor:</h4>
            <p class="text-sm text-gray-300">
                ETS2 mirrors are "mini-screens" that re-render the game. <br/><br/>
                - <strong>Mirror Distance:</strong> Set to Medium. <br/>
                - <strong>Mirror Resolution:</strong> Set to Low or Medium. <br/>
                - <strong>Shadow Quality:</strong> Use Medium; 'Ultra' shadows are the main reason for low FPS in truck-filled company yards.
            </p>
        </div>
      `
        },
        {
            title: "3. Optimization via Launch Options",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Maximize Engine Usage:</strong> 
            <br/><br/>On Steam, right-click ETS2 > Properties > General. In Launch Options, enter: <br/><br/>
            <code>-mm_max_resource_size 100 -mm_max_tmp_buffers_size 1000 -mm_pool_size 4000</code> <br/><br/>
            This command allows the game to use more memory for model caching, reducing micro-stutters that occur when new AI trucks appear in front of you on the highway.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize System",
            description: "Prepare Windows for heavy simulation."
        },
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Free Up RAM",
            description: "Vital tip for those using many map mods."
        },
        {
            href: "/guides/configuracao-roteador-wifi",
            title: "Stable Convoy",
            description: "Avoid lag in TruckersMP multiplayer mode."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
