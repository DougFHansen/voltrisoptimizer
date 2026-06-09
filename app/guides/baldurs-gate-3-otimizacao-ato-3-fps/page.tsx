import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'baldurs-gate-3-otimizacao-ato-3-fps',
    title: "Baldur's Gate 3: Ultimate Act 3 Optimization (2026)",
    description: "Did you reach the Lower City and your FPS dropped by half? Learn how to optimize your CPU, configure DLSS/FSR correctly, and use essential Mods to stabilize the game.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Baldur's Gate 3: Ultimate Act 3 Optimization (2026)";
const description = "Act 3 of Baldur's Gate 3 is famous for crushing processors. With hundreds of NPCs simulated at once, your GPU is idling while your CPU struggles. Learn the secrets to smooth performance.";

const keywords = [
    'baldurs gate 3 act 3 lagging fix 2026',
    'bg3 lower city fps drop solution',
    'best graphics settings bg3 low end pc',
    'dlss vs fsr 2.2 baldurs gate 3 quality',
    'vulkan vs dx11 which to use nvidia amd',
    'hdd mode slow ssd stuttering',
    'native camera tweaks mod tutorial'
];

export const metadata: Metadata = createGuideMetadata('baldurs-gate-3-otimizacao-ato-3-fps', title, description, keywords);

export default function BG3Guide() {
    const summaryTable = [
        { label: "The Villain", value: "CPU (AI/NPC Bottleneck)" },
        { label: "Recommended API", value: "DX11 (NVIDIA) / Vulkan (AMD)" },
        { label: "DLSS", value: "Quality (For GPU) / Native AA (Visuals)" },
        { label: "HDD Mode", value: "OFF (If you have an SSD)" },
        { label: "Dynamic Crowds", value: "OFF (Massive Gain)" },
        { label: "Essential Mods", value: "Native Camera + WASD" }
    ];

    const contentSections = [
    {
      title: "Why is Act 3 so Demanding?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike Acts 1 (forest) and 2 (shadows), the Lower City in Act 3 features <strong>hundreds of NPCs</strong>, each with its own AI routine, pathfinding, and inventory. This creates a brutal <strong>CPU (Processor)</strong> bottleneck. Lowering resolution or texture quality (which use the GPU) helps VERY LITTLE here. The focus must be on unburdening the processor.
        </p>
      `
    },
    {
      title: "Critical Graphics Settings (Video Settings)",
      content: `
        <p class="mb-4 text-gray-300">
          Go to Options > Video. These are the only ones that truly matter for the CPU:
        </p>
        
        <div class="space-y-4">
            <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20">
                <h4 class="text-red-400 font-bold mb-2">Dynamic Crowds</h4>
                <p class="text-sm text-gray-300">
                    <strong>Recommendation: OFF.</strong>
                    <br/>This gives simple background NPCs complex behavior. Turning it off turns them into "scenery", saving significant CPU time.
                </p>
            </div>
            
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h4 class="text-blue-400 font-bold mb-2">Slow HDD Mode</h4>
                <p class="text-sm text-gray-300">
                    <strong>Recommendation: OFF (If you have an SSD).</strong>
                    <br/>If enabled, the game aggressively compresses textures in RAM, and the CPU has to decompress them on the fly. This causes stuttering on weaker CPUs. Only turn it on if you're actually running on an old mechanical drive (which is not recommended for BG3).
                </p>
            </div>

            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h4 class="text-green-400 font-bold mb-2">Fog Quality</h4>
                <p class="text-sm text-gray-300">
                    <strong>Recommendation: LOW.</strong>
                    <br/>Volumetric fog is rendered in "slices" (raymarching). On Ultra, it taxes both GPU and CPU for lighting calculations. On Low, it's still beautiful and you gain 10-15 FPS.
                </p>
            </div>
        </div>
      `
    },
    {
      title: "DLSS vs FSR: Which to Use?",
      content: `
        <ul class="list-disc list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li><strong>NVIDIA RTX (20/30/40):</strong> Use <strong>DLSS Quality</strong>. It renders at 1440p/1080p and upscales to 4K better than native image (the game's native TAA is quite blurry).</li>
            <li><strong>AMD / Older GTX:</strong> Use <strong>FSR 2.2 Quality</strong>. Do not use FSR 1.0 (it looks terrible).</li>
            <li><strong>DLAA (Deep Learning Anti-Aliasing):</strong> For those with GPU headroom (RTX 4080/4090). It's native image with Nvidia's AI antialiasing. Perfect image, but heavy.</li>
        </ul>
      `
    }
  ];

    const advancedContentSections = [
    {
      title: "API: Vulkan or DirectX 11?",
      content: `
        <p class="mb-4 text-gray-300">
          In the Larian launcher, you get to choose. Here's a quick guide:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-green-500/30">
                <h5 class="font-bold text-white mb-2">DirectX 11 (Default)</h5>
                <p class="text-sm text-gray-300">
                    More stable, fewer crashes, better for NVIDIA cards. However, it has slightly more CPU overhead than Vulkan.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-red-500/30">
                <h5 class="font-bold text-white mb-2">Vulkan</h5>
                <p class="text-sm text-gray-300">
                    Recommended for AMD Radeon and Linux (Steam Deck). It has better CPU multi-threading management (good for Act 3), but might have visual bugs or random crashes ("Device Lost").
                </p>
            </div>
        </div>
      `
    },
    {
      title: "Quality of Life (QoL) Mods",
      content: `
        <h4 class="text-white font-bold mb-3">Play Like an Action RPG</h4>
        <p class="mb-4 text-gray-300">
          The isometric camera is classic, but seeing the world up close is incredible.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Native Camera Tweaks:</strong> Unlocks zoom and tilt. Let's you see the sky and horizon (the game renders everything, you just usually can't see it).</li>
            <li><strong>WASD Character Movement:</strong> Allows you to move with WASD like in Skyrim or The Witcher, instead of clicking your mouse. Total immersion.</li>
        </ul>
        <p class="text-xs text-gray-500 mt-2">Install via BG3 Mod Manager. Requires Script Extender.</p>
      `
    }
  ];

    const additionalContentSections = [
    {
      title: "Launch Commands (Steam)",
      content: `
        <h4 class="text-white font-bold mb-3">Skip the Launcher</h4>
        <p class="mb-4 text-gray-300">
            Larian's launcher stays open in the background consuming RAM.
            <br/>Go to Steam > Right-click the Game > Properties > Launch Options:
            <br/><code class="bg-black p-1 rounded">--skip-launcher</code>
        </p>
      `
    }
  ];

    const faqItems = [
    {
      question: "The game crashes in Act 3, what should I do?",
      answer: "It's usually a lack of VRAM or RAM. Close your browser (Chrome) while playing. If you have 16GB of RAM, increase the Windows paging file to 20GB. Verify game file integrity on Steam."
    },
    {
      question: "Does an SSD make a difference?",
      answer: "Yes, ABSOLUTELY. BG3 loads textures constantly. On a mechanical HD, you'll see blurry textures (pop-in) for seconds and the game will freeze while walking. Installing on an NVMe or SATA SSD is mandatory."
    },
    {
      question: "Is it worth capping the FPS?",
      answer: "Yes. In turn-based games, 60 FPS is perfect. Capping at 60 (or even 45 on Steam Deck) keeps frametimes flat, providing a smooth feel even if the number is low."
    }
  ];

    const externalReferences = [
        { name: "Nexus Mods BG3", url: "https://www.nexusmods.com/baldursgate3" },
        { name: "BG3 Mod Manager", url: "https://github.com/LaughingLeader/BG3ModManager" },
        { name: "Script Extender", url: "https://github.com/Norbyte/bg3se" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Panel",
            description: "Configure driver for maximum performance."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Ensures your SSD is at maximum speed."
        },
        {
            href: "/guides/steam-launch-options-comandos-fps-boost",
            title: "Launch Options",
            description: "Secret Steam codes for performance."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
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

