import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'escape-from-tarkov-otimizacao-fps-ram',
    title: "Escape from Tarkov (2026): Optimization, RAM Cleaner, and PostFX Guide",
    description: "Tarkov is virtually unplayable with 16GB of RAM without proper tweaks. Learn about the Auto RAM Cleaner, PostFX for better visibility in dark areas, and Nvidia Reflex.",
    category: 'games',
    difficulty: 'Very Advanced',
    time: '40 min'
};

const title = "Escape from Tarkov: FPS Guide (2026) - Streets of Tarkov";
const description = "The Streets of Tarkov map practically requires 32GB of RAM to run smoothly. If you only have 16GB, this guide is for you. Maximize your settings and spot enemies in shadows with PostFX.";

const keywords = [
    'escape from tarkov fps boost streets of tarkov 2026',
    'auto ram cleaner tarkov does it work',
    'tarkov postfx settings visibility night',
    'nvidia reflex on or boost tarkov',
    'process lasso tarkov physical cores',
    'mip streaming tarkov settings',
    'binaural audio fps drop fix',
    'tarkov memory leak fix 16gb ram',
    'best fov tarkov pvp',
    'voltris optimizer unity engine'
];

export const metadata: Metadata = createGuideMetadata('escape-from-tarkov-otimizacao-fps-ram', title, description, keywords);

export default function TarkovGuide() {
    const summaryTable = [
        { label: "RAM Cleaner", value: "ON (Game Settings)" },
        { label: "Textures", value: "Medium (for 16GB RAM)" },
        { label: "Shadows", value: "Low" },
        { label: "LOD Quality", value: "2.5 (Standard)" },
        { label: "Visibility", value: "1000 or 1500" },
        { label: "HBAO/SSR", value: "Off (Always)" },
        { label: "Nvidia Reflex", value: "On + Boost" }
    ];

    const contentSections = [
        {
            title: "Introduction: Unity and the Optimization Struggle",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Tarkov is notoriously CPU and RAM heavy rather than GPU intensive. On maps like Lighthouse and Streets, memory leaks are frequent, often causing performance to degrade after just a few raids.
        </p>
      `
        },
        {
            title: "Chapter 1: Graphic Settings for High FPS",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Texture Quality</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>High:</strong> Only if you have 32GB of RAM and at least 10GB of VRAM.
                    <br/>- <strong>Medium:</strong> The sweet spot for systems with 16GB of RAM.
                    <br/>- <strong>Low:</strong> Looks poor, but necessary if your VRAM is limited to 4GB.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Object LOD Quality</h4>
                <p class="text-gray-400 text-xs">
                    Keep this at 2.5.
                    <br/>Lowering it to 2.0 causes noticeable pop-in, while 4.0 will significantly tank your FPS.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Auto RAM Cleaner & Physical Cores",
            content: `
        <p class="mb-4 text-gray-300">
            Within the "Game" tab in settings:
            <br/>- <strong>Auto RAM Cleaner:</strong> ENABLE. This forces Unity's Garbage Collector to run more frequently, freeing up "trapped" RAM. Essential for long play sessions.
            <br/>- <strong>Use only physical cores:</strong>
            <br/>Intel Users: <span class="text-emerald-400">ENABLE</span> (Unity often struggles with Hyper-Threading).
            <br/>Ryzen Users: <span class="text-red-400">DISABLE</span> (AMD's SMT generally works well with Tarkov's architecture).
        </p>
      `
        },
        {
            title: "Chapter 3: PostFX (The Competitive Eye)",
            content: `
        <p class="mb-4 text-gray-300">
            Use PostFX to brighten deep shadows.
            <br/>- <strong>Brightness:</strong> 20-30.
            <br/>- <strong>Saturation:</strong> 30-50 (Makes PMCs pop against the drab environment).
            <br/>- <strong>Clarity:</strong> 60-80 (Sharpens edges).
            <br/>- <strong>Luma Sharpen:</strong> 50.
            <br/>- <strong>Color Grading:</strong> "Montreal" or "Cognac" for subtle enhancement, or "None."
            <br/><em>Note:</em> Expect a loss of about 5 FPS, but the visibility gain in shadows is well worth it.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Binaural Audio (Steam Audio)",
            content: `
        <p class="mb-4 text-gray-300">
            Binaural Audio provides much better vertical sound cues (knowing if an opponent is above or below you).
            <br/>While it previously caused massive FPS drops, <strong>in 2026</strong>, Oculus Audio is better optimized. We recommend ENABLED for the tactical advantage, unless your CPU is significantly outdated (e.g., i5 7th gen).
        </p>
      `
        },
        {
            title: "Chapter 5: Nvidia Reflex + Boost",
            content: `
        <p class="mb-4 text-gray-300">
            Set this to <strong>On + Boost</strong>.
            <br/>Since Tarkov is predominantly CPU-bound, Boost mode keeps your GPU clocks high even while waiting on CPU cycles, resulting in more consistent frametimes.
        </p>
      `
        },
        {
            title: "Chapter 6: MIP Streaming",
            content: `
        <p class="mb-4 text-gray-300">
            Found in Settings > Graphics.
            <br/>This dynamically streams textures during game play.
            <br/><strong>ONLY ENABLE IF:</strong> You have a slow HDD and very limited VRAM.
            <br/>If you have an NVMe SSD and plenty of VRAM, keep this DISABLED to avoid network-related stuttering.
        </p>
      `
        },
        {
            title: "Chapter 7: Virtual Memory (Page File)",
            content: `
        <p class="mb-4 text-gray-300">
            Tarkov will crash if it runs out of virtual memory.
            <br/>In Windows settings, manually set your Page File size to <strong>30GB</strong> (both Initial and Maximum size) on your SSD.
            <br/>Avoid "System Managed," as Windows is often too slow to expand the file during an active raid.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Process Lasso (Advanced)",
            content: `
            <p class="mb-4 text-gray-300">
                For power users: Use Process Lasso to disable SMT/Hyper-Threading specifically for <code>EscapeFromTarkov.exe</code> and set the "I/O Priority" to High.
                <br/>This can yield an extra 5-10 FPS on the Streets map.
            </p>
            `
        },
        {
            title: "Chapter 9: Field of View (FOV)",
            content: `
            <p class="mb-4 text-gray-300">
                A high FOV (75) gives you better peripheral vision, but makes distant enemies appear much smaller.
                <br/>A lower FOV (59-63) provides a "natural zoom," making targets easier to spot at the cost of side vision.
                <br/>High FOV also requires more rendering, which can lower FPS. We suggest 63-65 for weaker PCs.
            </p>
            `
        },
        {
            title: "Chapter 10: Server Selection",
            content: `
            <p class="mb-4 text-gray-300">
                In the game launcher, manually select servers with a ping under 80ms.
                <br/>Do not use "Auto Selection," as it may place you in a high-packet loss server simply because it has less traffic.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is Streets of Tarkov unplayable for you?",
            answer: "Enable 'Low Texture Resolution for Streets' in the graphics settings. This specific map is notoriously poorly optimized."
        },
        {
            question: "Should you use DLSS in Tarkov?",
            answer: "It exists, but at 1080p, it often makes holographic sights blurry and causes 'ghosting' (trails). It's really only recommended for 1440p or higher. At 1080p, FSR 2.2 Quality or no upscaling is usually better."
        },
        {
            question: "Does the game run better as a Scav?",
            answer: "Often yes, because the raid is already in progress, assets are already cached, and there are typically fewer live AI entities remaining on the map."
        }
    ];

    const externalReferences = [
        { name: "Tarkov Wiki (Ballistics)", url: "https://escapefromtarkov.fandom.com/wiki/Ballistics" },
        { name: "MapGenie (Interative Maps)", url: "https://mapgenie.io/tarkov" }
    ];

    const relatedGuides = [
        {
            href: "/guias/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Load into raids faster."
        },
        {
            href: "/guias/reduzir-ping-exitlag-noping-dns",
            title: "Ping Reduction",
            description: "Maximize your Peeker's Advantage."
        },
        {
            href: "/guias/monitor-hz-configuracao-correta",
            title: "Monitor Settings",
            description: "Higher refresh rates help your aim."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
            difficultyLevel="Very Advanced"
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
