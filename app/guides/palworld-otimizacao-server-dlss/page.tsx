import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'palworld-otimizacao-server-dlss',
    title: "Palworld (2026): Server Optimization, DLSS Mods, and Massive Base Guide",
    description: "Are large bases with 50+ Pals causing your game to stutter? Learn how to optimize dedicated servers, install free DLSS mods, and tweak Engine.ini for maximum performance.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Palworld FPS Boost (2026): End-Game Performance Guide";
const description = "The game starts smooth, but once you have multiple automated bases, FPS often drops significantly. The issue lies in CPU utilization and network overhead. Here is how to fix it.";

const keywords = [
    'palworld fps drop large base fix',
    'how to install dlss mod palworld free',
    'best palworld dedicated server settings',
    'engine.ini tweaks palworld performance',
    'view distance palworld fps impact',
    'palworld memory leak fix ram',
    'reduce server lag palworld',
    'increase pal limit base without lag',
    'voltris optimizer unreal engine 5',
    'palworld co-op lag fix'
];

export const metadata: Metadata = createGuideMetadata('palworld-otimizacao-server-dlss', title, description, keywords);

export default function PalworldGuide() {
    const summaryTable = [
        { label: "DLSS Mod", value: "PureDark implementation" },
        { label: "View Distance", value: "Medium" },
        { label: "Shadow Quality", value: "Medium" },
        { label: "Effect Quality", value: "Low" },
        { label: "Max Pals", value: "15 (Recommended for Stability)" },
        { label: "Server FPS", value: "60 (Tickrate)" },
        { label: "RAM Health", value: "Auto-Restart Script" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Snowball Effect",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Palworld is built on Unreal Engine 5. Every Pal in your base is an AI entity managed by physics and pathfinding algorithms. When 15+ Pals are simultaneously transporting resources and farming, your CPU quickly becomes the system bottleneck.
        </p>
      `
        },
        {
            title: "Chapter 1: Basic Graphical Settings",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Essential Adjustments</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>View Distance:</strong> Set to Medium. High settings render Pals at extreme distances, which is unnecessary and taxing.
                    <br/>- <strong>Grass Details:</strong> Medium for better performance without losing environmental depth.
                    <br/>- <strong>Shadow Quality:</strong> Medium is the sweet spot for visual fidelity and FPS.
                    <br/>- <strong>Effects Quality:</strong> Low. During base Raids involving fire and explosions, Low settings ensure the framerate remains playable.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Mandatory DLSS implementation",
            content: `
        <p class="mb-4 text-gray-300">
            While the game features native DLSS support in 2026, community mods like \"PureDark\" or specific Engine.ini tweaks often offer superior \"Ultra Performance\" presets.
            <br/>If using native: Stick to DLSS Performance.
            <br/>For AMD users: TSR (Temporal Super Resolution) often yields cleaner results than FSR 1.0 in this specific title.
        </p>
      `
        },
        {
            title: "Chapter 3: Server Optimization and Network Lag",
            content: `
        <p class="mb-4 text-gray-300">
            If you are hosting or renting a dedicated server:
            <br/>Edit your <code>PalWorldSettings.ini</code> file:
            <br/>- <code>DropItemMaxNum=1000</code> (Default is 3000). Excessive items on the ground are a major source of server lag.
            <br/>- <code>PalEggDefaultHatchingTime=1</code> (Significant quality of life improvement).
            <br/>- <strong>Restart the server every 6 hours:</strong> Palworld servers currently suffer from a memory leak. Regular restarts are mandatory to prevent crashes and rubber-banding.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Engine.ini Tweaks for FPS",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to <code>%localappdata%\\Pal\\Saved\\Config\\Windows</code>.
            <br/>Add the following to <code>Engine.ini</code>:
            <br/><code>[SystemSettings]</code>
            <br/><code>r.ToneMapper.Sharpen=1</code> (Improves TAA clarity).
            <br/><code>r.Nanite=0</code> (Disable Nanite for older GPUs to see a massive raw FPS gain).
        </p>
      `
        },
        {
            title: "Chapter 5: Managing Physical Objects",
            content: `
        <p class="mb-4 text-gray-300">
            Avoid letting thousands of wood or stone resources sit on the base floor.
            <br/>Use storage chests. The collision physics calculated for 500+ small rolling items will overwhelm your CPU.
            <br/>Always build flat foundations to prevent items from falling through the world mesh, which triggers infinite falling physics calculations.
        </p>
      `
        },
        {
            title: "Chapter 6: AI Pathfinding Efficiency",
            content: `
        <p class="mb-4 text-gray-300">
            Design your base with wide corridors (at least 3 wall segments wide).
            <br/>When Pals get \"Stuck,\" the AI attempts to recalculate routes hundreds of times per second, causing extreme CPU spikes. Open, flat base designs run significantly better.
        </p>
      `
        },
        {
            title: "Chapter 7: Motion Blur and Camera Shake",
            content: `
        <p class="mb-4 text-gray-300">
            Disable <strong>Screen Shake</strong> in the options menu.
            <br/>When using flying mounts, the camera shake is excessive and can lead to motion sickness for many players.
            <br/>Keep Motion Blur OFF to better spot resources while moving at high speeds.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Raid Boss Performance",
            content: `
            <p class="mb-4 text-gray-300">
                During Raid Boss encounters (like Bellanoir), the game spawns a large number of minions.
                <br/>Temporarily toggle your DLSS to \"Ultra Performance\" for these fights if you experience severe frame drops.
            </p>
            `
        },
        {
            title: "Chapter 9: Steam vs. Xbox Crossplay",
            content: `
            <p class="mb-4 text-gray-300">
                The Xbox Game Pass version (PC) is often one patch behind the Steam release.
                <br/>This can lead to mod incompatibilities. If you intend to use custom performance mods, the Steam version is highly recommended.
            </p>
            `
        },
        {
            title: "Chapter 10: Protection Against Save Corruption",
            content: `
            <p class="mb-4 text-gray-300">
                Palworld is still in development; save corruption remains a risk.
                <br/>Implement an Auto-Backup script for your save folder. Losing 100+ hours of progress is painful—prepare in advance.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "How can I increase the limit beyond 15 Pals?",
            answer: "In World Settings, you can increase this to 20. Mods can push this to 50+, but strictly note that server lag increases exponentially beyond 20 Pals."
        },
        {
            question: "Should I use a Dedicated Server or Local Co-op?",
            answer: "A Dedicated Server is superior for performance. It offloads all world-state processing, allowing your local PC to focus entirely on rendering graphics."
        },
        {
            question: "Why am I getting a black screen or UE5 crash?",
            answer: "Verify your game files via Steam. Ensure your GPU drivers are up to date, as Unreal Engine 5 is highly sensitive to outdated display drivers. Disable any GPU overclocks."
        }
    ];

    const externalReferences = [
        { name: "Palworld Settings Hub", url: "https://hub.palworld.com/" },
        { name: "Palworld Nexus Mods", url: "https://www.nexusmods.com/palworld" }
    ];

    const relatedGuides = [
        {
            href: "/guides/reduzir-ping-exitlag-noping-dns",
            title: "Ping Guide",
            description: "Essential for dedicated server stability."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Setup",
            description: "Optimal DLSS and driver configurations."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Speed up game loading times."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
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

