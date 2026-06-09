import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'minecraft-aumentar-fps-fabric-sodium',
    title: "Minecraft 2026: Increase FPS by 300% with Fabric and Sodium",
    description: "Say goodbye to Optifine. Learn how to install the modern performance combo: Fabric + Sodium + Lithium + Iris Shaders. The ultimate guide for Low-End PCs.",
    category: 'games',
    difficulty: 'Easy',
    time: '30 min'
};

const title = "Minecraft Optimization (2026): The Post-Optifine Era (Sodium & Iris)";
const description = "Optifine is obsolete. New rendering engines (Sodium) use the GPU in a modern way, delivering 500+ FPS where Optifine delivered 60.";

const keywords = [
    'minecraft increase fps low end pc 2026',
    'sodium vs optifine which is better',
    'how to install fabric loader minecraft',
    'iris shaders vs optifine shaders',
    'lithium performance mod server',
    'allocate more ram minecraft tlauncher',
    'minecraft stuttering when generating world',
    'best sodium video settings',
    'nvidium mod rtx 3060 minecraft',
    'ferritecore ram usage fix'
];

export const metadata: Metadata = createGuideMetadata('minecraft-aumentar-fps-fabric-sodium', title, description, keywords);

export default function MinecraftGuide() {
    const summaryTable = [
        { label: "Loader", value: "Fabric (Lightweight)" },
        { label: "Render", value: "Sodium (Mandatory)" },
        { label: "Shaders", value: "Iris (Optional)" },
        { label: "Logic", value: "Lithium (Server-Side)" },
        { label: "RAM", value: "FerriteCore" },
        { label: "Light", value: "Phosphor/Starlight" },
        { label: "Alloc RAM", value: "4GB (Vanilla) / 8GB (Modded)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Why not use Optifine?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Optifine was king for 10 years, but its code is closed and invasive. <strong>Sodium</strong> is open-source and rewrites Minecraft's rendering pipeline using modern OpenGL. The result? While Optifine improves FPS by 50%, Sodium improves it by 300-400% and eliminates lag spikes when Java's Garbage Collector runs.
        </p>
      `
        },
        {
            title: "Chapter 1: The Trinity of Performance (Installation)",
            content: `
        <div class="space-y-4">
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step 1: Fabric Loader</h4>
                <p class="text-gray-400 text-sm">Download and install the Fabric Loader for your game version (e.g., 1.21). It is the lightweight base for mods.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step 2: Essential Mods (.jar)</h4>
                <p class="text-gray-400 text-sm">Place these in your <code>%appdata%\\.minecraft\\mods</code> folder:</p>
                <ul class="list-disc list-inside text-gray-300 text-xs mt-2">
                    <li><strong>Sodium:</strong> The graphics engine.</li>
                    <li><strong>Lithium:</strong> Optimizes game physics and AI (Server-side).</li>
                    <li><strong>Indium:</strong> Rendering compatibility.</li>
                    <li><strong>FerriteCore:</strong> Reduces RAM usage by half.</li>
                </ul>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step 3: Shaders? Use Iris.</h4>
                <p class="text-gray-400 text-sm">Iris Shaders uses Sodium to run shaders (BSL, Complementary) with double the FPS of Optifine.</p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Configuring Sodium (Video)",
            content: `
        <p class="mb-4 text-gray-300">
            Press Shift+P in the menu (if you have Reese's Sodium Options) or go to Video Settings.
        </p>
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Render Distance</td>
                    <td class="py-2">8-12 Chunks</td>
                    <td class="py-2">Anything above 16 limits the CPU, not the GPU.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Simulation Distance</td>
                    <td class="py-2">5 Chunks</td>
                    <td class="py-2">Controls the distance redstone/mobs work. Keep it low for FPS.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">VSync</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Limit FPS manually if needed (e.g., 144), don't use VSync.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Mipmap Levels</td>
                    <td class="py-2">4x</td>
                    <td class="py-2">Makes distant textures smooth. Low cost.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Chunk Builder</td>
                    <td class="py-2 text-emerald-400">Multithreaded</td>
                    <td class="py-2">Uses all cores to load the world.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: RAM Allocation (Java Arguments)",
            content: `
        <p class="mb-4 text-gray-300">
            The myth: "The more RAM, the better." <strong>Wrong.</strong>
            <br/>If you give 16GB to Vanilla Minecraft, Java will become lazy and accumulate junk. When it decides to clean it (GC Dump), your game will freeze for 2 seconds.
            <br/><strong>Ideal Values (Launch Options):</strong>
            <br/>- Vanilla/Sodium: <strong>2GB to 4GB</strong>.
            <br/>- Light Modpacks (50 mods): <strong>4GB to 6GB</strong>.
            <br/>- Heavy Modpacks (All The Mods): <strong>8GB to 10GB</strong>.
            <br/>Never exceed 50% of your PC's total RAM (to leave some for Windows).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Nvidium (RTX Only)",
            content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
            <h4 class="text-green-400 font-bold mb-4 text-xl">Mesh Shaders Rendering</h4>
            <p class="text-gray-300 mb-4">
                If you have an RTX 3000 or 4000 series GPU (e.g., 3060, 4060).
                <br/>Install the <strong>Nvidium</strong> mod alongside Sodium.
                <br/>It uses Mesh Shading technology to render insane distances (32, 64, even 128 Chunks) without losing FPS. It's technological black magic.
                <br/><em>Note:</em> Incompatible with Shaders. You choose: Insane Render Distance (Nvidium) or beautiful lighting (Iris).
            </p>
        </div>
      `
        },
        {
            title: "Chapter 5: Entity Culling (Hidden Entities)",
            content: `
        <p class="mb-4 text-gray-300">
            Standard Minecraft renders pigs and zombies even if they are behind a wall.
            <br/>The <strong>Entity Culling</strong> mod stops drawing what you can't see.
            <br/>This is crucial if you have a mob farm or many chests/item frames at your base. Saves 30-50 FPS in crowded bases.
        </p>
      `
        },
        {
            title: "Chapter 6: Java Runtime (JDK 17/21)",
            content: `
        <p class="mb-4 text-gray-300">
            Make sure to use a modern Java.
            <br/>- Minecraft 1.18+: Requires Java 17.
            <br/>- Minecraft 1.20.5+: Requires Java 21.
            <br/>Use <strong>GraalVM</strong> or <strong>Adoptium Temurin</strong> instead of the standard Oracle Java for a slight improvement in Garbage Collector (G1GC) performance.
        </p>
      `
        },
        {
            title: "Chapter 7: Distant Horizons (LODs)",
            content: `
        <p class="mb-4 text-gray-300">
            Want to see the whole world to the horizon without lag?
            <br/>The <strong>Distant Horizons</strong> mod creates simplified versions (LOD) of distant chunks. You can see mountains 128 chunks away with the overhead of 16 chunks.
            <br/>Works with Iris Shaders (recent versions). It's the future of visual Minecraft.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Servers and Ping",
            content: `
            <p class="mb-4 text-gray-300">
                If FPS is high but blocks snap back when you break them (Rubberbanding).
                <br/>This is server TPS (Ticks Per Second) lag or Ping.
                <br/>Install the <strong>Mod Menu</strong> mod to see Ping in the server list (Tab).
                <br/>There's no way to fix low TPS (the server owner's fault), but using an optimized DNS (Cloudflare) can improve route stability.
            </p>
            `
        },
        {
            title: "Chapter 9: Exclusive Fullscreen",
            content: `
            <p class="mb-4 text-gray-300">
                Minecraft runs in "Borderless Window" by default.
                <br/>Go to Video Settings, change to <strong>Fullscreen</strong>, and set the correct resolution and Hz (e.g., 1920x1080@144).
                <br/>This drastically reduces input lag.
            </p>
            `
        },
        {
            title: "Chapter 10: TLauncher and Piracy (Risks)",
            content: `
            <p class="mb-4 text-gray-300">
                Many alternative launchers contain spyware.
                <br/>We recommend using <strong>Prism Launcher</strong> or <strong>Modrinth App</strong>. They are open-source, manage mods automatically, and support both original and offline accounts (with setup). They are much lighter and safer than TLauncher.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I use performance mods with Forge?",
            answer: "Yes, but the equivalents (Embeddium, Rubidium) are generally ports of Sodium. The Fabric ecosystem updates faster and is lighter. If you can choose, go with Fabric for pure performance."
        },
        {
            question: "Do Shaders slow down the PC?",
            answer: "Yes, Shaders are heavy. 'Complementary Reimagined' on the 'Potato' or 'Low' profile is a good middle ground. If you have integrated GPU (Intel HD), avoid shaders and stick with Sodium."
        },
        {
            question: "VBOs on or off?",
            answer: "Always ON (or let Sodium manage it). Vertex Buffer Objects allow the GPU to store chunk geometry, freeing up a lot of CPU."
        }
    ];

    const externalReferences = [
        { name: "Modrinth (Download safe mods)", url: "https://modrinth.com/" },
        { name: "Sodium (Official Mod)", url: "https://modrinth.com/mod/sodium" },
        { name: "Iris Shaders", url: "https://irisshaders.net/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-escolher-fonte-pc-gamer",
            title: "Hardware",
            description: "Upgrades for your PC."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Load",
            description: "Load chunks faster."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor",
            description: "Take advantage of 500 FPS with high Hz."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Easy"
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

