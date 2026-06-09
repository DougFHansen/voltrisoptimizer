import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'red-dead-redemption-2-melhores-configuracoes-rdr2',
  title: "RDR2: Best Graphics and FPS Settings (2026)",
  description: "Want to run Red Dead Redemption 2 with amazing visuals and high FPS? Check out this guide for optimized PC settings in 2026.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "RDR2: Best Graphics and FPS Settings (2026)";
const description = "Want to run Red Dead Redemption 2 with amazing visuals and high FPS? Check out this guide for optimized PC settings in 2026.";
const keywords = [
    'best rdr2 pc settings 2026 guide',
    'red dead redemption 2 pc config fps boost',
    'rdr2 vulkan vs dx12 which is better 2026',
    'how to increase fps in rdr2 low end pc tutorial',
    'rdr2 pc graphics optimization full guide'
];

export const metadata: Metadata = createGuideMetadata('red-dead-redemption-2-melhores-configuracoes-rdr2', title, description, keywords);

export default function RDR2OptimizationGuide() {
    const summaryTable = [
        { label: "Recommended API", value: "Vulkan (More FPS) / DX12 (More stability)" },
        { label: "Key Setting", value: "Textures (Always Ultra)" },
        { label: "Hardware Check", value: "Requires 8GB VRAM for Ultra" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "A Masterpiece That Still Strains the PC",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Even years after its release, **Red Dead Redemption 2** remains one of the most beautiful and demanding games in 2026. The secret to running the game well isn't just setting everything to "Medium," but understanding which graphical options consume 50% of your performance and which don't change the visuals much. This guide focuses on the perfect balance between fidelity and fluidity.
        </p>
      `
        },
        {
            title: "1. Vulkan vs DirectX 12 in 2026",
            content: `
        <p class="mb-4 text-gray-300">The choice of API defines the foundation of your performance:</p>
        <p class="text-sm text-gray-300">
            - <strong>Vulkan:</strong> Usually delivers 5 to 10 more FPS and has smoother frametimes on most modern NVIDIA and AMD GPUs. It's the recommendation for 2026. <br/><br/>
            - <strong>DirectX 12:</strong> Use only if you're experiencing random crashes on Vulkan or if you're using Intel Arc cards, which tend to prefer DX12.
        </p>
      `
        },
        {
            title: "2. Settings That \"Kill\" the FPS",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Surgical Optimization:</h4>
            <p class="text-sm text-gray-300">
                To gain up to 40% more performance without losing visuals, change these items: <br/><br/>
                - <strong>Water Reflection/Refraction Quality:</strong> Low or Medium. Water reflections in RDR2 are too heavy for how little they appear. <br/>
                - <strong>Volumetric Lighting:</strong> Medium. This setting controls light between clouds and fog; on Ultra, it destroys any GPU. <br/>
                - <strong>Shadow Quality:</strong> High (Do not use Ultra). <br/>
                - <strong>Tree Quality:</strong> Medium. RDR2 has thousands of trees; processing them individually at max settings causes FPS drops.
            </p>
        </div>
      `
        },
        {
            title: "3. The Only Item That Must Be on ULTRA",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Texture Quality:</strong> 
            <br/><br/>In RDR2, the visual difference between 'High' and 'Ultra' textures is massive. Setting textures to High makes the game look blurry, like an old console. In 2026, **always leave textures on Ultra**, even if you need to lower everything else. If your graphics card has at least 4GB or 6GB of VRAM, it will handle Ultra if other options are optimized.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Essential to avoid texture bugs in RDR2."
        },
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "RivaTuner (RTSS)",
            description: "Stabilize your riding frametimes."
        },
        {
            href: "/guides/hdr-windows-vale-a-pena-jogos",
            title: "HDR on Windows 11",
            description: "Make the RDR2 sunsets truly shine."
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

