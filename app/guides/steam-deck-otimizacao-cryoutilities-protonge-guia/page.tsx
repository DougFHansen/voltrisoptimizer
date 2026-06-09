import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'steam-deck-otimizacao-cryoutilities-protonge-guia',
    title: "Steam Deck (2026): Extreme Optimization with CryoUtilities and ProtonGE",
    description: "Make your Steam Deck run demanding (AAA) games better. Guide for CryoUtilities 2.0, increasing VRAM to 4GB in BIOS, and installing ProtonGE.",
    category: 'emulation',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "Steam Deck Turbo (2026): The Ultimate Guide";
const description = "The Steam Deck comes factory-configured for 'compatibility'. For 'performance', we need to tweak where Valve doesn't: Swap File and VRAM.";

const keywords = [
    'improve performance steam deck cryoutilities 2.0',
    'increase vram bios steam deck 4gb',
    'how to install protonge protonup-qt',
    'decky loader plugins powertools',
    'steam deck crashing heavy games',
    'swap file resize steam deck',
    'voltris optimizer handheld',
    'fsr 3.0 steam deck settings'
];

export const metadata: Metadata = createGuideMetadata('steam-deck-otimizacao-cryoutilities-protonge-guia', title, description, keywords);

export default function SteamDeckGuide() {
    const summaryTable = [
        { label: "Tool", value: "CryoUtilities 2.0" },
        { label: "VRAM (BIOS)", value: "4GB (UMA Frame Buffer)" },
        { label: "Swap File", value: "16GB (On SSD)" },
        { label: "Swappiness", value: "1 (Aggressive)" },
        { label: "Proton", value: "GE-Proton (Latest)" },
        { label: "Plugin", value: "Decky Loader" },
        { label: "Refresh Rate", value: "40Hz / 40FPS (Battery)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Optimizing the Hardware",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Steam Deck has 16GB of shared RAM between the CPU and GPU. The default settings reserve only 1GB for video. In modern games (The Last of Us, Hogwarts Legacy), this causes horrible stutters. Let's fix that.
        </p>
      `
        },
        {
            title: "Chapter 1: Increasing VRAM (UMA Buffer)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">In the BIOS</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Turn off the Steam Deck completely.
                    <br/>2. Hold <strong>Volume +</strong> and press the <strong>Power</strong> button. Release Power when you hear the sound, but keep holding Volume +.
                    <br/>3. Go to <strong>Setup Utility</strong> > <strong>Advanced</strong>.
                    <br/>4. Change <strong>UMA Frame Buffer Size</strong> from 1G to <strong>4G</strong>.
                    <br/>This ensures that demanding games always have 4GB of dedicated video memory, preventing sudden frame drops.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: CryoUtilities 2.0 (The Savior)",
            content: `
        <p class="mb-4 text-gray-300">
            This tool (created by CryoByte33) optimizes Linux memory management.
            <br/>1. Enter Desktop Mode.
            <br/>2. Download the CryoUtilities installer from GitHub.
            <br/>3. Run it and click on <strong>"Recommended Settings"</strong>.
            <br/>What does it do? It creates a giant 16GB Swap File on the SSD and changes the Swappiness to 1. This prevents the game from crashing due to lack of RAM.
        </p>
      `
        },
        {
            title: "Chapter 3: Proton GE (Glorious Eggroll)",
            content: `
        <p class="mb-4 text-gray-300">
            Valve's official version of Proton is good, but <strong>Proton GE</strong> is better. It includes fixes for videos that don't play, newer FSR, and specific patches for new games.
            <br/>1. In Desktop Mode, open the "Discover" store.
            <br/>2. Install <strong>ProtonUp-Qt</strong>.
            <br/>3. Open the app and click "Add Version". Download the latest GE-Proton.
            <br/>4. In Gaming Mode, go to the game's properties > Compatibility > Force the use of > GE-Proton.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Decky Loader & PowerTools",
            content: `
        <p class="mb-4 text-gray-300">
            Decky Loader is the community plugin store.
            <br/>Install it (via terminal in Desktop Mode with a video tutorial).
            <br/>Download the <strong>PowerTools</strong> plugin.
            <br/>With it, you can disable CPU SMT (Simultaneous Multi-Threading).
            <br/>In emulators (Yuzu/Switch), turning off SMT (leaving only 4 physical cores) increases FPS drastically.
        </p>
      `
        },
        {
            title: "Chapter 5: FSR and 40Hz Mode",
            content: `
        <p class="mb-4 text-gray-300">
            The golden rule for battery life: 40FPS feels like 60FPS but consumes power like 30FPS.
            <br/>In the "..." (Performance) menu:
            <br/>- Change the refresh rate to 40Hz.
            <br/>- Lock the FPS at 40.
            <br/>- Enable FSR (FidelityFX Super Resolution) with Sharpness 2 if running the game at a lower resolution (e.g., 540p) for upscaling.
        </p>
      `
        },
        {
            title: "Chapter 6: Shader Cache (Storage)",
            content: `
        <p class="mb-4 text-gray-300">
            The Steam Deck downloads pre-compiled shaders. If you have the 64GB model, this fills up the drive quickly.
            <br/>Use the <strong>"ZShaderCacheMover"</strong> tool or symbolic links to move the <code>shadercache</code> folder to the MicroSD card (if it's a fast A2 card).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Windows on the Deck (Dual Boot)",
            content: `
            <p class="mb-4 text-gray-300">
                Is it worth installing Windows?
                <br/>Only if you play <strong>Call of Duty, Fortnite, Destiny 2, or FIFA/FC</strong> (games with Anti-Cheats incompatible with Linux).
                <br/>For everything else, SteamOS is more optimized and the "console" experience is better.
            </p>
            `
        },
        {
            title: "Chapter 8: Streaming (Moonlight)",
            content: `
            <p class="mb-4 text-gray-300">
                If you have a powerful Gaming PC at home:
                <br/>Don't run Cyberpunk locally on the Deck. Run it on the PC and stream it to the Deck using <strong>Moonlight</strong> (Sunshine on the PC).
                <br/>Battery lasts 6 hours, Ultra graphics, zero heat in your hands.
            </p>
            `
        },
        {
            title: "Chapter 9: SSD Upgrade",
            content: `
            <p class="mb-4 text-gray-300">
                Swapping the 2230 SSD is easy. Use reliable brands (Sabrent, Corsair). Generic SSDs from AliExpress tend to get hot and consume more battery.
            </p>
            `
        },
        {
            title: "Chapter 10: Skins and Protection",
            content: `
            <p class="mb-4 text-gray-300">
                The Deck gets hot in the back. Don't cover the air vents with cheap adhesive skins. Use cases that respect the airflow.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does CryoUtilities damage the Deck?",
            answer: "No. It is completely safe and reversible (Stock Settings button). Thousands of people use it."
        },
        {
            question: "Does 4GB VRAM make a difference in indie games?",
            answer: "No. In lightweight games (Hades, Stardew Valley), 1GB vs 4GB is the same. The difference only shows in AAA games that use many textures."
        }
    ];

    const externalReferences = [
        { name: "CryoUtilities GitHub", url: "https://github.com/CryoByte33/steam-deck-utilities" },
        { name: "ProtonUp-Qt (Discover)", url: "https://davidotek.github.io/protonup-qt/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Switch Emulation",
            description: "Performance on the Deck."
        },
        {
            href: "/guides/rog-ally-legion-go-otimizacao-windows-tdp-guia",
            title: "ROG Ally",
            description: "Comparison."
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

