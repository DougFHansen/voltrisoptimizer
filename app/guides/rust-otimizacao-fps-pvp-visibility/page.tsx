import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rust-otimizacao-fps-pvp-visibility',
    title: "Rust (2026): Console Commands, FPS, and PvP Visibility",
    description: "Rust is unforgiving. If you stutter during PvP, you lose your loot. Learn about gc.buffer (RAM cleanup), console commands for better visibility, and optimal audio settings.",
    category: 'games',
    difficulty: 'Advanced',
    time: '25 min'
};

const title = "Rust Optimization (2026): Zero Stutter PvP";
const description = "Low FPS isn't Rust's only problem; it's the stutters (freezes) during gunfights. Let's configure Garbage Collection and graphics settings to eliminate them.";

const keywords = [
    'rust fps boost commands console',
    'gc.buffer rust command ram fix',
    'best rust pvp graphics settings',
    'see in the dark rust nvidia filter',
    'rust stuttering gunfight fix',
    'is dlss worth it in rust',
    'max tree meshes rust performance',
    'fps limit rust menu',
    'voltris optimizer facepunch',
    'rust slow loading ssd'
];

export const metadata: Metadata = createGuideMetadata('rust-otimizacao-fps-pvp-visibility', title, description, keywords);

export default function RustGuide() {
    const summaryTable = [
        { label: "Console", value: "F1 (Commands)" },
        { label: "GC Buffer", value: "2048 or 4096" },
        { label: "Graphics", value: "3 or 4" },
        { label: "Shadows", value: "1 (Minimum)" },
        { label: "Draw Distance", value: "1500 (Players)" },
        { label: "DLSS", value: "Quality" },
        { label: "Water", value: "0 (Reflections)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Danger of Garbage Collection",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Rust (built on Unity) accumulates "garbage" in your RAM. When the memory limit is reached, the game freezes for about a second to perform a cleanup. This almost always happens in the middle of a gunfight. The solution is to increase the buffer size.
        </p>
      `
        },
        {
            title: "Chapter 1: Essential Console Commands",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Press F1 and enter:</h4>
                <p class="text-gray-400 text-xs text-justify">
                    <code>gc.buffer 2048</code> (If you have 16GB RAM) or <code>4096</code> (If you have 32GB).
                    <br/>This increases the time between memory cleanups. Instead of stuttering every 5 minutes, it may only happen once an hour (likely when you're safely in your base).
                    <br/><code>global.censor 1</code> (Hides nudity, slightly fewer polygons).
                    <br/><code>perf 1</code> (Shows FPS).
                </p>
            </div>
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Save on Launch</h4>
                <p class="text-gray-400 text-xs">
                    To avoid re-typing these: type <code>writecfg</code> after entering your commands. The game will save them to your configuration file.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: PvP Graphics Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Graphics Quality:</strong> 3 or 4. (0 looks terrible and prevents you from spotting enemies through distant gaps).
            - <strong>Water Quality:</strong> 0. You don't need beautiful water; you only need to see enemies swimming in it.
            - <strong>Shadow Quality:</strong> 1. Provides just enough depth for indoor visibility.
            - <strong>Draw Distance:</strong> 1500. Players stop rendering past this distance anyway, so 2500 is just a waste of resources.
        </p>
      `
        },
        {
            title: "Chapter 3: Mesh Quality (Trees and Bases)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Tree Meshes:</strong> 50-100. (Maximum settings make forests too dense to spot hidden players. Minimum settings turn trees into ugly "2D sprites").
            - <strong>Particle Quality:</strong> Low. Reduces lag during C4 explosions while raiding.
            - <strong>Object Quality:</strong> 100. Crucial for clearly seeing door skins and traps.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DLSS and Visibility",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>DLSS:</strong> In Rust, DLSS can sometimes cause blurring during fast movement. Many pro players prefer keeping DLSS OFF and using TSS AA or SMAA instead. If you use it, try "DLSS Quality."
            - <strong>Nvidia Reflex:</strong> On + Boost. Always keep this enabled.
        </p>
      `
        },
        {
            title: "Chapter 5: Audio Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Speaker Mode:</strong> Stereo. (7.1 virtual surround often distorts your sense of direction).
            - Increase footstep volume (via equalizer) and decrease ambient sounds like wind. Rust has notoriously loud and distracting wind noise.
        </p>
      `
        },
        {
            title: "Chapter 6: Experimental Features",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Optimized Loading:</strong> Partial.
            - <strong>Occlusion Culling:</strong> ON. (Prevents rendering objects hidden behind walls). <strong>Crucial</strong> for FPS when inside massive bases. If disabled, your PC renders every piece of loot inside your neighbors' boxes.
        </p>
      `
        },
        {
            title: "Chapter 7: Steam Launch Options",
            content: `
        <p class="mb-4 text-gray-300">
            Right-click Rust > Properties > Launch Options:
            <br/><code>-high -maxMem=16384 -malloc=system -force-feature-level-11-0</code>
            <br/>(Adjust maxMem to your RAM in MB). This forces High priority, DX11, and proper Windows memory allocation.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Seeing in the Dark (Nvidia Filters)",
            content: `
            <p class="mb-4 text-gray-300">
                Nights in Rust are designed as "True Black" (pixel 0,0,0) specifically to stop gamma hacking.
                <br/>Nvidia Filters no longer work for seeing in total darkness. Use nighttime to craft in your base or use Night Vision Goggles. Don't try to cheat it; you'll likely just end up with a blurry grey screen.
            </p>
            `
        },
        {
            title: "Chapter 9: NVMe SSD (Asset Warmup Loading)",
            content: `
            <p class="mb-4 text-gray-300">
                The "Asset Warmup" stage can take 5 minutes on an HDD, compared to just 30 seconds on an SSD.
                <br/>If your game crashes mid-raid, returning quickly is a matter of life or death. Install Rust on the fastest SSD available.
            </p>
            `
        },
        {
            title: "Chapter 10: Skins (Download)",
            content: `
            <p class="mb-4 text-gray-300">
                Type <code>graphics.itemskins 0</code> in the console if you have slow internet.
                <br/>This stops the Steam Workshop from downloading skins during gameplay, saving bandwidth and reducing stutters when a player with new skins appears near you.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "How much RAM is needed to run Rust smoothly?",
            answer: "10GB is the absolute minimum. 16GB is the standard, but 32GB is recommended for a completely stutter-free experience."
        },
        {
            question: "Official vs. Modded Servers?",
            answer: "Modded servers (3x, 5x) often have more complex bases and plugins, which put more stress on your CPU. Official servers are 'cleaner' but require more grinding. To test your FPS accurately, join a 'UKN Aim Train' server."
        },
        {
            question: "Is your Unity game randomly crashing?",
            answer: "This is often caused by unstable RAM overclocking (XMP). Rust is extremely sensitive to RAM errors. Try lowering your RAM frequency slightly."
        }
    ];

    const externalReferences = [
        { name: "RustLabs (Item Stats)", url: "https://rustlabs.com/" },
        { name: "BattleMetrics (Server Browser)", url: "https://www.battlemetrics.com/servers/rust" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Asset Warmup loading speed."
        },
        {
            href: "/guides/bios-otimizacao-xmp-tpm",
            title: "BIOS Optimization",
            description: "Stable RAM settings."
        },
        {
            href: "/guides/windows-defender-otimizacao-jogos",
            title: "Defender Settings",
            description: "Steam folder exclusion."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

