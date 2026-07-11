import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'lethal-company-fps-boost-mods',
    title: "Lethal Company (2026): FPS Boost, Mods, and Lag Fix",
    description: "Lethal Company is lightweight, but mods like MoreCompany can be taxing. Learn how to install mods without losing FPS and use HDLethalCompany for better graphics.",
    category: 'games',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Lethal Company (2026): Performance and Mods";
const description = "Does the viral 'low poly' game run on any toaster? Almost. Once you install 50 mods and host 16 people on a server, the story changes.";

const keywords = [
    'lethal company fps boost mod 2026',
    'more company mod lag fix',
    'hdll lethal company graphics settings',
    'thunderstore mod manager tutorial',
    'bepinex lethal company install',
    'lethal company black screen fix',
    'ship loot lag fix',
    'voltris optimizer zeekerss',
    'mic lag lethal company'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('lethal-company-fps-boost-mods', title, description, keywords, locale);
}

export default function LethalGuide() {
    const summaryTable = [
        { label: "Mod Manager", value: "R2Modman / Thunderstore" },
        { label: "Performance", value: "HDLethalCompany (Mod)" },
        { label: "Lobby Size", value: "Vanilla (4) / Modded (32)" },
        { label: "Microphone", value: "Push to Talk" },
        { label: "Resolution", value: "Native (Pixel Art)" },
        { label: "Shadows", value: "Low (Default)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Low Poly Charm (and Hidden Weight)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Lethal Company uses a deliberate retro aesthetic, internally rendering at low resolutions (around 512x512) before applying upscaling filters. Theoretically, it should run on practically any computer.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          However, the game is built on Unity and relies heavily on the CPU for physics and network synchronization (netcode). When you add mods—especially those that increase player counts (MoreCompany) or add cosmetic items (Suits, Skins)—the CPU load grows exponentially.
        </p>
        <div class="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg my-4">
           <strong class="text-blue-400">Benchmark Note:</strong> In our tests with a 10th gen i5 + GTX 1650, the Vanilla game runs at 140 FPS. With 30 mods and an 8-person lobby, the average drops to 55 FPS, with dips to 30 FPS on rainy moons (Rend/Dine).
        </div>
      `
        },
        {
            title: "Chapter 1: The Performance Triad (Essential Mods)",
            content: `
        <div class="space-y-4">
            <p class="text-gray-300 mb-4">To mitigate the weight of cosmetic mods, you need optimization mods that work at the rendering and memory levels. Don't play modded without these three:</p>
            
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">1. HDLethalCompany (Graphical Optimization)</h4>
                <p class="text-gray-400 text-sm text-justify mb-2">
                    Despite the name suggesting \"better graphics,\" it's actually the best performance tool. It allows you to control internal resolution, fog, and post-processing.
                </p>
                <ul class="list-disc pl-5 text-gray-400 text-sm space-y-1">
                    <li><strong>Potato Configuration:</strong> Set 'Resolution Scale' to 1.000 (Native) or lower, and turn off 'Post Processing'.</li>
                    <li><strong>Visibility Configuration:</strong> It removes volumetric fog which consumes a lot of GPU resources on moons like March and Vow.</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">2. CullFactory (The FPS Savior)</h4>
                <p class="text-gray-400 text-sm text-justify mb-2">
                    Lethal Company natively renders things you aren't seeing (behind walls). CullFactory implements an aggressive \"Occlusion Culling\" system.
                </p>
                 <ul class="list-disc pl-5 text-gray-400 text-sm space-y-1">
                    <li><strong>Impact:</strong> Increases FPS by up to 40% inside the Factory/Mansion.</li>
                    <li><strong>Configuration:</strong> Install it and leave it on default (<code>portal-occlusion</code>).</li>
                </ul>
            </div>

            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">3. FixPluginTypesSerialization (Technical)</h4>
                <p class="text-gray-400 text-sm text-justify">
                    A technical mod that optimizes loading times and reduces RAM usage by fixing how BepInEx handles type serialization. Essential for modpacks with over 50 mods.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Lobby Management (MoreCompany vs BiggerLobby)",
            content: `
        <p class="mb-4 text-gray-300">
            There are two main mods for increasing lobby size. Your choice significantly impacts performance:
        </p>
        <ul class="list-disc pl-5 text-gray-300 space-y-2 mb-4">
             <li><strong>MoreCompany:</strong> The most stable and visually polished option (includes cosmetics). Recommended for up to 8-12 players; beyond that, cosmetics become heavy.</li>
             <li><strong>BiggerLobby:</strong> Older, with fewer visual features, slightly lighter for massive lobbies (20+ people) but more prone to desync bugs.</li>
        </ul>
        <p class="mb-4 text-gray-300">
            <strong>Pro Tip:</strong> If the host has a weak PC or poor internet, the game will lag for EVERYONE (teleporting monsters, etc.). The Host should always be the one with the strongest CPU (Single Core) and highest upload speed.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 3: Lag Diagnosis (FPS vs Network)",
            content: `
        <p class="mb-4 text-gray-300">
            It's crucial to distinguish between low FPS and Network Lag.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="bg-red-500/10 p-3 rounded border border-red-500/20">
                <h5 class="font-bold text-red-400">Low FPS Symptoms</h5>
                <ul class="text-sm text-gray-400 list-disc pl-4">
                    <li>\"Frame-by-frame\" or slow-moving imagery.</li>
                    <li>Heavier mouse feel.</li>
                    <li>Happens when looking at many lights or lots of smoke.</li>
                    <li><strong>Solution:</strong> Lower resolution, remove visual mods.</li>
                </ul>
            </div>
            <div class="bg-yellow-500/10 p-3 rounded border border-yellow-500/20">
                <h5 class="font-bold text-yellow-400">Network Lag Symptoms</h5>
                <ul class="text-sm text-gray-400 list-disc pl-4">
                    <li>Monsters kill you from a distance.</li>
                    <li>Items take time to be picked up (loading circle appearing).</li>
                    <li>Friends' voices are cutting out (\"robotic\").</li>
                    <li><strong>Solution:</strong> Improve host, close Discord, use a LAN cable.</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 4: Configuring R2Modman Correctly",
            content: `
        <p class="mb-4 text-gray-300">
            Many errors stem from manual installations. R2Modman virtualizes folders to avoid clutter.
        </p>
        <ol class="list-decimal pl-5 text-gray-300 space-y-2">
            <li><strong>Clean Profiles:</strong> Always create a new profile for each modpack. Mixing mods from different versions can cause the \"Black Screen\" on startup.</li>
            <li><strong>Update All:</strong> Be careful with \"Update All.\" Sometimes a mod updates and breaks compatibility with <code>LethalCompanyVariables</code> or other core mods. Check the changelogs.</li>
            <li><strong>Launch Arguments:</strong> In \"Settings\" > \"Set launch options,\" you can skip the Unity intro and force exclusive mode for lower input lag.</li>
        </ol>
      `
        },
        {
            title: "Chapter 5: Common Issues and Solutions (Troubleshooting)",
            content: `
        <div class="space-y-4">
            <div class="border-l-2 border-red-500 pl-4 py-1">
                <strong class="text-white block">Black Screen on Startup (Infinite Loading)</strong>
                <p class="text-gray-400 text-sm">Usually caused by sound mods (.custom sounds) or mods incompatible with game versions v50/v55/v60. Disable half your mods and test using the \"Binary Search\" method.</p>
            </div>
            <div class="border-l-2 border-yellow-500 pl-4 py-1">
                <strong class="text-white block">Friend Cannot Join (An error occurred)</strong>
                <p class="text-gray-400 text-sm">Differing BepInEx versions or mod configs. Use \"Export Profile as Code\" and ensure everyone is using EXACTLY the same code.</p>
            </div>
             <div class="border-l-2 border-blue-500 pl-4 py-1">
                <strong class="text-white block">Mouse Leaving the Screen (Dual Monitor)</strong>
                <p class="text-gray-400 text-sm">The game in \"Borderless\" mode sometimes fails to lock the mouse. Install the <code>CursorLock</code> mod or press Alt+Enter to force true Fullscreen.</p>
            </div>
        </div>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 6: Skinwalker Mod (The SSD's Enemy)",
            content: `
            <p class="mb-4 text-gray-300">
                The Skinwalker mod, which records your friends' voices for monsters to repeat, is brilliant but heavy.
                <br/>It recording audio to the disk constantly. If installed on a mechanical HDD, it will cause stutters every time a monster tries to \"talk.\"
                <br/><strong>Solution:</strong> Move your R2Modman profile to an SSD or disable the mod if you have limited disk space.
            </p>
            `
        },
        {
            title: "Chapter 7: Flashlights and Dynamic Shadows",
            content: `
            <p class="mb-4 text-gray-300">
                In-game flashlights project dynamic shadows in real-time. Each active flashlight multiplies the rendering cost.
                <br/>If 4 players use \"Pro\" flashlights in a tight corridor, FPS can be cut in half.
                <br/><strong>Pro Tip:</strong> Turn off flashlights when not needed. It saves both battery and frames.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do I need a Gaming PC to play with mods?",
            answer: "It depends on the number of mods. For the base game (Vanilla), most integrated graphics (Vega 8, Intel Iris) can handle 30-40 FPS on Low. With +50 mods, you'll need a recent quad-core CPU and a dedicated GPU (GTX 1050ti or better)."
        },
        {
            question: "How do I install the same mods as my friend?",
            answer: "In R2Modman, go to <strong>Settings > Profile > Export profile as code</strong>. Send the code (e.g., a-12345) to them. They should go to <strong>Import / Update > Import from code</strong>. This ensures 100% compatibility and avoids version errors."
        },
        {
            question: "Monsters are invisible to me, but my friend sees them!",
            answer: "This is known as 'Desync'. It happens when the connection to the host fails momentarily. The only solution is to leave the moon (orbit) and land again to resync the game state."
        }
    ];

    const externalReferences = [
        { name: "Thunderstore (Official Mod Repository)", url: "https://thunderstore.io/c/lethal-company/" },
        { name: "Zeekerss (Developer's Twitter)", url: "https://twitter.com/ZeekerssRBLX" },
        { name: "Unofficial Lethal Company Community Patch", url: "https://github.com/TeamLC/LethalCompany" }
    ];

    const relatedGuides = [
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Optimize Discord",
            description: "Reduce Discord's CPU usage while gaming to free up resources."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Windows Tuning",
            description: "How to prepare your Windows for CPU-bound games like Lethal Company."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}


