import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'microsoft-flight-simulator-otimizacao-cache-lod',
    title: "Microsoft Flight Simulator (2026): Rolling Cache, LOD & DLSS 3",
    description: "MSFS is the ultimate hardware test. Learn how to configure Rolling Cache on your SSD to prevent stutters in New York and use Frame Generation to double your FPS.",
    category: 'games',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "MSFS 2020/2024 (2026): Photogrammetry Optimization";
const description = "Flying over dense cities requires more than a GPU. It requires internet, SSD, and RAM. Let's configure terrain cache and level of detail (LOD).";

const keywords = [
    'flight simulator 2020 stutter fix new york',
    'msfs rolling cache size recommendation 2026',
    'terrain lod factor performance impact',
    'dlss 3 frame generation flight sim',
    'dx11 vs dx12 msfs crash',
    'off screen terrain pre-caching ultra',
    'glass cockpit refresh rate low fps',
    'voltris optimizer bing maps',
    'traffic density ai settings'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('microsoft-flight-simulator-otimizacao-cache-lod', title, description, keywords, locale);
}

export default function MSFSGuide() {
    const summaryTable = [
        { label: "Rolling Cache", value: "32GB (SSD)" },
        { label: "Terrain LOD", value: "100 (Ground) / 200 (High)" },
        { label: "Object LOD", value: "100" },
        { label: "Traffic", value: "Real-Time Online" },
        { label: "DX Version", value: "DX12 (Frame Gen)" },
        { label: "Glass Cockpit", value: "Low Refresh Rate" },
        { label: "Clouds", value: "High (Ultra is heavy)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The World Simulator",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          MSFS downloads the entire world from the cloud (Azure) as you fly. If your internet fluctuates, the game stutters. The secret is local caching.
        </p>
      `
        },
        {
            title: "Chapter 1: Rolling Cache (The Stutter Fix)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">General Options > Data</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Rolling Cache:</strong> ON.
                    <br/>- <strong>Limit:</strong> Set to <span class="text-emerald-400">32GB or 64GB</span>. (The default 8GB is too small for long flights).
                    <br/>- <strong>Path:</strong> Point to your fastest NVMe SSD. Never put it on an HDD.
                    <br/>This stores the photogrammetry of cities you've visited, avoiding redownloading and eliminating loading stutters.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Terrain LOD Factor",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Terrain Level of Detail (LOD):</strong> The FPS eater.
            - Value 100: Good balance.
            - Value 200: Ultra. Distant buildings look sharp, but FPS drops by half in London/NY.
            - Value 400: Only for screenshots or RTX 5090.
            <br/>Recommendation: Keep it at 100-150.
        </p>
      `
        },
        {
            title: "Chapter 3: DX11 vs DX12 (Frame Gen)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>DX11:</strong> Stable, compatible with old addons. No Frame Generation.
            - <strong>DX12 (Beta/Preview):</strong> Better use of Multi-core CPU. Required to enable <strong>DLSS 3 Frame Generation</strong>.
            - If you have an RTX 4000, use DX12 + Frame Gen. FPS will go from 40 to 80, and as it's a civil simulator, input lag doesn't matter.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Glass Cockpit Refresh Rate",
            content: `
        <p class="mb-4 text-gray-300">
            Modern planes (A320, 787, G1000) have digital screens on the panel.
            <br/>In "Traffic", look for <strong>"Glass Cockpit Refresh Rate"</strong>.
            <br/>Change from High to <strong>Medium</strong> or <strong>Low</strong>.
            <br/>This makes the altimeter numbers update at 30fps/20fps instead of 60fps, saving STACKS of CPU power without affecting piloting.
        </p>
      `
        },
        {
            title: "Chapter 5: AI Traffic and Multiplayer",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Traffic Type:</strong> Real-Time Online. (Uses real flight data, light).
            - <strong>AI Offline Traffic:</strong> Heavy. The PC simulates routes. Disable it.
            - <strong>Ground Aircraft Density:</strong> 50 or less. Many planes parked at the gate kill FPS when landing at Heathrow.
        </p>
      `
        },
        {
            title: "Chapter 6: Off-Screen Terrain Pre-Caching",
            content: `
        <p class="mb-4 text-gray-300">
            Set to <strong>Ultra</strong>.
            <br/>This makes the game load terrain behind you and on the sides. When you turn the camera fast (look out the window), there is no stutter and the terrain is already there. Consumes a lot of RAM (32GB recommended).
        </p>
      `
        },
        {
            title: "Chapter 7: Volumetric Clouds",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Volumetric Clouds:</strong> High.
            <br/>Ultra makes clouds a bit fluffier, but costs 15-20% performance on cloudy days. On High, they are already the best clouds in any game.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Community Folder (Addons)",
            content: `
            <p class="mb-4 text-gray-300">
                Does MSFS take 10 minutes to open?
                <br/>You have too many addons in the Community folder without using them.
                <br/>Use <strong>MSFS Addons Linker</strong> (external) to activate only the scenarios you will fly today.
            </p>
            `
        },
        {
            title: "Chapter 9: Bing Maps Data",
            content: `
            <p class="mb-4 text-gray-300">
                If cities look "generic" and ugly:
                <br/>Check in Data if <strong>"Bing Data World Graphics"</strong> is ON. Sometimes the game turns it off automatically if the internet drops.
            </p>
            `
        },
        {
            title: "Chapter 10: VR Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                For VR (Quest 3/Reverb G2): Use DLSS Performance and OpenXR Toolkit to perform Foveated Rendering (rendering only the center of vision in high quality).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Photogrammetry ON or OFF?",
            answer: "ON if you have good internet (100MB+). OFF if you have slow internet, as the terrain will load with 'pop-in' and look melted. The offline generic terrain is lighter."
        },
        {
            question: "Does it work with 16GB of RAM?",
            answer: "Barely. The game easily uses 20GB+ in large cities. Close Chrome and everything else."
        },
        {
            question: "Joystick disconnects?",
            answer: "Disable power saving for USB ports in Windows Device Manager."
        }
    ];

    const externalReferences = [
        { name: "MSFS Addons Linker", url: "https://flightsim.to/file/1572/msfs-addons-linker" },
        { name: "FlightSim.to (Mods)", url: "https://flightsim.to/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Cache Size."
        },
        {
            href: "/guides/reduzir-ping-exitlag-noping-dns",
            title: "Internet",
            description: "Map downloads."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Frame Gen config."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

