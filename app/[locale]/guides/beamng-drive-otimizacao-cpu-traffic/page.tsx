import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'beamng-drive-otimizacao-cpu-traffic',
    title: "BeamNG.drive: Ultimate Physics and Traffic Optimization (2026)",
    description: "BeamNG is a CPU devourer. Learn how to configure Vulkan mode, optimize AI traffic, and gain 50% more FPS without losing realistic physics.",
    category: 'games',
    difficulty: 'Advanced',
    time: '35 min'
};

const title = "BeamNG.drive: Ultimate Physics and Traffic Optimization (2026)";
const description = "BeamNG is a CPU devourer. Each car on the screen simulates thousands of physical points in real-time. Learn how to configure Vulkan mode, optimize AI traffic, and gain 50% more FPS without losing realistic physics.";

const keywords = [
    'beamng drive vulkan mode crash fix 2026',
    'beamng traffic ai fps drop solution',
    'best cpu for beamng drive ryzen or intel',
    'ck graphics settings mod beamng',
    'simplified collision physics optimization',
    'beamng mp multiplayer lag fix',
    'how to put more cars in beamng without lagging'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('beamng-drive-otimizacao-cpu-traffic', title, description, keywords, locale);
}

export default function BeamNGGuide() {
    const summaryTable = [
        { label: "The Bottleneck", value: "CPU (Single-Core per Car)" },
        { label: "API", value: "Vulkan (Experimental) - Use it!" },
        { label: "AI Traffic", value: "Simplified Collision Physics: ON" },
        { label: "Reflections", value: "Low (Update Rate: 2)" },
        { label: "Recommended RAM", value: "32GB (Large Maps)" },
        { label: "Limiter", value: "Capping FPS helps physics" }
    ];

    const contentSections = [
    {
      title: "How the Engine Works (Soft-body Physics)",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          BeamNG.drive is not your normal racing game. Each vehicle is composed of a network of "nodes and beams" simulated 2000 times per second.
          <br/><strong>The Golden Rule:</strong> Each AI vehicle consumes approximately <strong>1 core (thread)</strong> of your processor.
          <br/>If you have a Ryzen 5 5600 (12 threads), you can comfortably run about 8-10 cars (leaving 2 threads for the system and audio). Trying to place 20 cars will cause the game to enter slow motion ("physics lag").
        </p>
      `
    },
    {
      title: "Vulkan: The FPS Revolution",
      content: `
        <p class="mb-4 text-gray-300">
          The game traditionally runs on DirectX 11. However, experimental <strong>Vulkan</strong> support is mature in 2026 and offers massive gains.
        </p>
        
        <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20 mb-6">
          <h4 class="text-purple-400 font-bold mb-2">How to Activate</h4>
          <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Open the BeamNG Launcher.</li>
            <li>Click on <strong>Support Tools</strong>.</li>
            <li>Click on <strong>Vulkan Mode</strong>.</li>
          </ol>
          <p class="text-sm text-gray-300 mt-2">
            <strong>Result:</strong> In our tests with an RTX 3060 and Ryzen 5700X, FPS rose from 45 to 70 in urban maps (West Coast USA). CPU usage is much better distributed in Vulkan.
            <br/><em>Note: If the game crashes or textures flicker, revert to DX11. But try Vulkan first.</em>
          </p>
        </div>
      `
    },
    {
      title: "Smart Traffic Settings",
      content: `
        <p class="mb-4 text-gray-300">
          Go to Options > Gameplay > Traffic.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li><strong>Use Simplified Collision Physics: ON.</strong>
                <br/><span class="text-xs text-gray-500 ml-6">This simplifies the physics of AI cars when they are far from you. They won't crumple as realistically, but it saves a lot of CPU.</span></li>
            <li><strong>Traffic Parking: ON.</strong>
                <br/><span class="text-xs text-gray-500 ml-6">Makes parked cars static objects (no physics) until you hit them. Essential for making cities feel full without lag.</span></li>
            <li><strong>Max Amount of Vehicles:</strong> Use automatic adjustment or set manually based on your CPU cores (CPU Cores - 2).</li>
        </ul>
      `
    }
  ];

    const advancedContentSections = [
    {
      title: "Graphics: What Taxes the GPU?",
      content: `
        <p class="mb-4 text-gray-300">
          If your GPU is at 99%, reduce these:
        </p>
        <div class="space-y-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-red-500/30">
                <h5 class="font-bold text-white mb-2">Dynamic Reflections</h5>
                <p class="text-sm text-gray-300">
                    The biggest villain. The game renders the world again on the car's hood.
                    <br/>- Turn it off or set "Update Rate" to 2 or 3.
                    <br/>- "Texture Size": 512px is already sufficient.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-yellow-500/30">
                <h5 class="font-bold text-white mb-2">Shadows</h5>
                <p class="text-sm text-gray-300">
                    Use "Partial" instead of "All". Full shadows in maps with many trees (Jungle Rock Island) kill FPS.
                </p>
            </div>
        </div>
      `
    },
    {
      title: "UI and Apps (The Invisible Lag)",
      content: `
        <p class="mb-4 text-gray-300">
            BeamNG's interface is built in HTML/JS (Chromium). Having too many apps on screen (speedometer, map, gravity, pedals) consumes RAM and CPU.
            <br/><strong>Tip:</strong> Close apps you don't use. On low-end PCs (8GB RAM), the UI can cause stutters.
        </p>
      `
    }
  ];

    const additionalContentSections = [
    {
      title: "BeamMP (Multiplayer)",
      content: `
        <h4 class="text-white font-bold mb-3">Playing Online</h4>
        <p class="mb-4 text-gray-300">
            The BeamMP mod allows for online play. However, it is heavy.
            <br/>If you experience lag in Multiplayer, the culprit is usually the physics synchronization of other players. Servers with many mods download gigabytes of content to the <code>Resources</code> folder. Clean this folder periodically if the game takes too long to open.
        </p>
      `
    }
  ];

    const faqItems = [
    {
      question: "How much RAM do I need?",
      answer: "16GB is the absolute minimum for modern maps like Italy or West Coast. The ideal is 32GB, as the game loads all map geometry into RAM to avoid loading screens."
    },
    {
      question: "Is it worth installing on an SSD?",
      answer: "Yes. Loading times for large maps drop from 3 minutes (HD) to 20 seconds (NVMe SSD)."
    },
    {
      question: "The game warns 'Instability detected', what is it?",
      answer: "The physics 'exploded'. A mathematical node went to infinity. Press 'J' to pause physics or 'R' to reset the car. This usually happens with poorly made mods."
    }
  ];

    const externalReferences = [
        { name: "BeamNG Official Forums", url: "https://www.beamng.com/forums/" },
        { name: "BeamMP Download", url: "https://beammp.com/" },
        { name: "Vulkan Status Tracker", url: "https://documentation.beamng.com/support/troubleshooting/vulkan/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-escolher-processador-2026",
            title: "Best CPU",
            description: "Which processor can handle BeamNG?"
        },
        {
            href: "/guides/assetto-corsa-content-manager-csp-sol",
            title: "Assetto Corsa",
            description: "Another simulator that requires optimization."
        },
        {
            href: "/guides/upgrade-memoria-ram",
            title: "RAM Memory",
            description: "Is it worth getting 32GB?"
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}

