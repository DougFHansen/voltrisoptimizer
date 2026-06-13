import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'league-of-legends-fps-drop-fix',
    title: "League of Legends (2026): Config, FPS Boost, and Drop Fix",
    description: "LoL stuttering in teamfights? Learn how to use DX9 Legacy mode, configure PersistedSettings.json, disable useless sounds, and optimize the client.",
    category: 'games',
    difficulty: 'Easy',
    time: '35 min'
};

const title = "League of Legends Optimization (2026): Goodbye FPS Drops";
const description = "LoL is lightweight, but 15-year-old spaghetti code causes drops on modern PCs. This guide focuses on stability so your ult never stutters.";

const keywords = [
    'league of legends fps drop fix 2026',
    'lol stuttering teamfight good pc',
    'enable dx9 legacy mode league of legends',
    'low spec mode lol client',
    'close client during game lol',
    'persistedsettings.json fps boost lol',
    'fps limit lol uncap or 144',
    'how to increase fps lol low end notebook',
    'shadows league of legends disable',
    'wait for vertical sync lol turn off'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('league-of-legends-fps-drop-fix', title, description, keywords, locale);
}

export default function LoLGuide() {
    const summaryTable = [
        { label: "Shadows", value: "Disabled" },
        { label: "Character", value: "Medium/High" },
        { label: "Environment", value: "Low" },
        { label: "Effects", value: "Low/Medium" },
        { label: "Client", value: "Close while playing" },
        { label: "DX9 Legacy", value: "On (If stuttering)" },
        { label: "FPS Cap", value: "144/240" }
    ];

    const contentSections = [
        {
            title: "Introduction: Optimizing the Spaghetti Code",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          LoL runs on almost anything, but maintaining a stable 144 FPS in a 5v5 fight with Baron and Elder Dragon on screen is tough even for gaming PCs. The problem usually isn't your GPU, but inefficient CPU and sound processing.
        </p>
      `
        },
        {
            title: "Chapter 1: Client Settings (Launcher)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Enable Low Spec Mode</h4>
                <p class="text-white font-mono text-sm mb-2">Gear Icon > General > Low Spec Mode</p>
                <p class="text-gray-400 text-xs">This disables launcher animations, saving RAM before the game starts.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Close client during matches</h4>
                <p class="text-white font-mono text-sm mb-2">Gear Icon > General > Game Start Options</p>
                <p class="text-gray-400 text-xs">
                    <span class="text-emerald-400 font-bold">ALWAYS ENABLE THIS.</span> The LoL client (based on Chromium) consumes 500MB+ of RAM and CPU in the background. Closing it releases resources for the actual match (Game.exe). The only downside is that it takes about 5 extra seconds to return to the honor screen at the end.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: In-Game Settings",
            content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Shadows</td>
                    <td class="py-2 text-red-400">Disabled</td>
                    <td class="py-2">Shadows in LoL are just black blobs that eat 30% of your FPS. Turn them off.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Character Quality</td>
                    <td class="py-2 text-emerald-400">High</td>
                    <td class="py-2">It's important to see skin details and abilities (hitboxes). It's not very heavy.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Environment Quality</td>
                    <td class="py-2 text-yellow-400">Low/Very Low</td>
                    <td class="py-2">The map (ground) is static. Low removes decorative grass and butterflies that distract.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Effects Quality</td>
                    <td class="py-2 text-yellow-400">Medium</td>
                    <td class="py-2">Low can make skillshots invisible. Medium is safe.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Wait for Vertical Sync</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">V-Sync causes mouse input lag. You will miss last hits and kiting.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Shadows vs Eye Candy",
            content: `
        <p class="mb-4 text-gray-300">
            The "Hide Eye Candy" option removes butterflies, moving water in the river, and small animals.
            <br/><strong>Enable this.</strong> Less visual distraction = More focus on combat and more FPS.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DX9 Legacy Mode",
            content: `
        <p class="mb-4 text-gray-300">
            LoL updated to DX11, but some old GPUs hate it.
            <br/>If your game crashes or the screen flickers:
            <br/>In Client > Settings > Game > Check <strong>"Prefer DX9 Legacy Mode"</strong>.
            <br/>This forces the game to use the old API, which is ultra-stable on older hardware.
        </p>
      `
        },
        {
            title: "Chapter 5: Sounds (The Hidden Villain)",
            content: `
        <p class="mb-4 text-gray-300">
            LoL processes every skill sound separately. In a teamfight, there are dozens of simultaneous sounds.
            <br/>Go to Audio and <strong>Disable Music</strong> (play Spotify instead if you want).
            <br/>Disable ambient sounds.
            <br/>Keep only Sound Effects, Pings, and Voice. This relieves the CPU.
        </p>
      `
        },
        {
            title: "Chapter 6: PersistedSettings.json (FPS Cap)",
            content: `
        <p class="mb-4 text-gray-300">
            Don't edit game.cfg, edit this file in <code>Riot Games\\League of Legends\\Config</code>.
            <br/>Search for "FrameCapType" and define it to a fixed value (e.g., 2).
            <br/><strong>Note:</strong> Inside the game, limit your FPS (144, 240). "Uncapped" makes your character "rubberband" because LoL's server runs at 30 ticks and desyncs if your client is at 900 FPS. Stability > Max Speed.
        </p>
      `
        },
        {
            title: "Chapter 7: Interface and Chat",
            content: `
        <p class="mb-4 text-gray-300">
            Reduce UI (HUD) size to 20-30%.
            <br/>Disable "Show Summoner Names" (Visual clutter).
            <br/>Disable "Enable Smooth Camera" (Makes the camera feel heavy/slow).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Hextech Repair",
            content: `
            <p class="mb-4 text-gray-300">
                If your FPS dropped after a patch:
                <br/>Download the official "Hextech Repair Tool" from Riot.
                <br/>Check "Reinstall Patch" and "Clean Logs." Force a clean repatch. Corrupted patch files are the #1 cause of sudden drops.
            </p>
            `
        },
        {
            title: "Chapter 9: Fullscreen Mode",
            content: `
            <p class="mb-4 text-gray-300">
                Many play in "Borderless Window."
                <br/>Switch to <strong>Fullscreen</strong>.
                <br/>This gives exclusive priority to the GPU and disables Windows composition, drastically reducing mouse input lag. Alt+Tab will be slower, but the game will be smoother.
            </p>
            `
        },
        {
            title: "Chapter 10: Mouse DPI and Kiting",
            content: `
            <p class="mb-4 text-gray-300">
                For ADC/Kiting (Orbwalking):
                <br/>Use high DPI (1600+) and low in-game sensitivity (30-40) to avoid pixel skipping.
                <br/>Disable "Enhance pointer precision" in Windows (Acceleration). Keep your muscle memory consistent.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "My FPS drops to 0 when I open the shop?",
            answer: "This is HDD loading. The shop loads icons. Install LoL on an SSD. If you don't have an SSD, enable Low Spec Mode in the client."
        },
        {
            question: "Is Anti-Aliasing worth it?",
            answer: "No. In LoL, anti-aliasing slightly blurs minion outlines, making last-hitting harder. Most pros play with AA Disabled for maximum sharpness."
        },
        {
            question: "Ping increased out of nowhere?",
            answer: "The client might be downloading skins in the background. Close the client during the match (Chapter 1)."
        }
    ];

    const externalReferences = [
        { name: "Hextech Repair Tool", url: "https://support-leagueoflegends.riotgames.com/hc/en-us/articles/224826367-Automating-Troubleshooting-Hextech-Repair-Tool" },
        { name: "LoL Server Status", url: "https://status.riotgames.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Speed",
            description: "Load matches in 10s."
        },
        {
            href: "/guides/como-escolher-mouse-gamer",
            title: "Mouse",
            description: "Avoid failing double-clicks."
        },
        {
            href: "/guides/internet-lenta-jogos-lag",
            title: "Ping",
            description: "Reduce lag spikes."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
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
