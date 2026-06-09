import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'dolphin-emulador-wii-gamecube-ubershaders-guia',
    title: "Dolphin (2026): The Perfect Setup for Wii and GameCube Emulation",
    description: "Play Super Mario Galaxy and Metroid Prime at 4K resolution without stutters. Comprehensive guide for Ubershaders (Stutter Fix), emulated motion controls, and HD textures.",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Dolphin Emulator: The King of Nintendo Emulation";
const description = "Dolphin is widely considered the most optimized emulator in existence. However, to eliminate those annoying micro-stutters caused by shader compilation, you must correctly configure Ubershaders.";

const keywords = [
    'dolphin emulator stutter fix ubershaders asynchronous guide',
    'how to configure wii remote on dolphin mouse keyboard',
    'super mario galaxy hd texture pack dolphin tutorial',
    'online wii multiplayer dolphin wiimmfi setup',
    'best dolphin backend vulkan vs direct3d 11',
    'gecko codes and cheats for dolphin progress',
    'voltris optimizer nintendo gamecube tweaks',
    'rvz vs iso game compression comparison'
];

export const metadata: Metadata = createGuideMetadata('dolphin-emulador-wii-gamecube-ubershaders-guia', title, description, keywords);

export default function DolphinGuide() {
    const summaryTable = [
        { label: "Rendering Backend", value: "Vulkan (Recommended)" },
        { label: "Shader Compilation", value: "Hybrid Ubershaders" },
        { label: "Compile Shaders", value: "Before Starting (Recommended)" },
        { label: "Internal Resolution", value: "3x Native (1080p) or higher" },
        { label: "Anti-Aliasing", value: "4x MSAA" },
        { label: "Anisotropic Filter", value: "16x" },
        { label: "Control Setup", value: "Emulated Wii Remote" }
    ];

    const contentSections = [
        {
            title: "Introduction: Understanding Ubershaders",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The classic \"stutter\" in emulation occurs when a new visual effect appears and the GPU must compile a specific shader on the fly. Dolphin solves this with \"Ubershaders\"—a massive, generic shader that runs while the specific one compiles in the background, effectively eliminating the pause.
        </p>
      `
        },
        {
            title: "Chapter 1: Graphics Engine (Backend Configuration)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">General Tab Settings</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Backend:</strong> Vulkan is generally the fastest and most stable choice for modern GPUs. Use D3D11 only if Vulkan results in a black screen.
                    - <strong>Shader Compilation:</strong> Set to \"Hybrid Ubershaders\" for the best balance of visual fidelity and stutter prevention.
                    <br/>Enable \"Compile Shaders Before Starting\" if you prioritize zero in-game lag over a slightly longer initial load time (typically 10-20 seconds).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Visual Enhancements (HD Realism)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Internal Resolution:</strong> Set to 3x Native (1080p) or 4x (1440p). Original Wii resolution is only 480p, which looks extremely blurry on modern displays.
            - <strong>Anti-Aliasing:</strong> 4x MSAA provides smooth edges without significant performance loss on modern cards.
            - <strong>Anisotropic Filtering:</strong> 16x (Essential for sharp textures at a distance).
            - <strong>Widescreen Hack:</strong> Enable this to force 16:9 in 4:3-only titles (be aware this may occasionally cause \"Culling\" bugs where objects disappear at the screen edges).
        </p>
      `
        },
        {
            title: "Chapter 3: Emulated Wiimote (Motion without a Remote)",
            content: `
        <p class="mb-4 text-gray-300">
            Controllers > Wii Remotes > Emulated Wii Remote.
            <br/>Click \"Configure\":
            <br/>- <strong>Device:</strong> Select your Mouse/Keyboard or controller.
            <br/>- <strong>Motion Simulation:</strong> In the \"Motion Input\" tab, map the \"Point\" axis to your Mouse Cursor. This allows your mouse to act as the on-screen pointer.
            <br/>- <strong>Shake:</strong> Map a key (e.g., Middle Mouse Button) to simulate the physical \"Shaking\" action (required for Mario's spin attack).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Using a Real Wiimote (DolphinBar)",
            content: `
        <p class="mb-4 text-gray-300">
            For the most authentic experience, we recommend the \"Mayflash DolphinBar.\"
            <br/>It serves as both a native infrared Sensor Bar and a Bluetooth receiver specifically tuned for Wii remotes.
            <br/>In Dolphin, select \"Real Wii Remote,\" and your original hardware will sync perfectly, including speaker and rumble support.
        </p>
      `
        },
        {
            title: "Chapter 5: HD Texture Packs (Custom Graphics)",
            content: `
        <p class="mb-4 text-gray-300">
            Titles like Xenoblade Chronicles and Resident Evil 4 have massive community-made 4K texture packs.
            <br/>1. Download the pack (folders named with game IDs).
            <br/>2. Place them in <code>Documents/Dolphin Emulator/Load/Textures/</code>.
            <br/>3. In Graphics > Advanced, enable \"Load Custom Textures\" and \"Prefetch Custom Textures\" for smooth loading.
        </p>
      `
        },
        {
            title: "Chapter 6: Netplay (Online Multiplayer)",
            content: `
        <p class="mb-4 text-gray-300">
            Tools > Start Netplay.
            <br/>You can play Mario Party, Smash Bros Brawl, or Mario Kart online with friends.
            <br/>Requirement: All players must use the EXACT same Dolphin version and the same game ISO (Verify via MD5/Hash Check).
        </p>
      `
        },
        {
            title: "Chapter 7: 60 FPS Patches",
            content: `
        <p class="mb-4 text-gray-300">
            Many classics (e.g., Super Mario Sunshine) were hard-capped at 30 FPS.
            <br/>Right-click the game > Properties > Gecko Codes.
            <br/>Download the official 60 FPS codes from the Dolphin Wiki. Enable the cheat to enjoy modernized, fluid gameplay.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: RVZ Format (Storage Optimization)",
            content: `
            <p class="mb-4 text-gray-300">
                Wii ISOs are typically 4.7GB, even if the game data is small, due to \"dummy data\" filling.
                <br/>Convert your library to <strong>RVZ</strong> within Dolphin (Right Click > Convert).
                <br/>File sizes often shrink to 1GB-2GB with zero loss in quality (Lossless). This is essential for saving SSD space.
            </p>
            `
        },
        {
            title: "Chapter 9: The GameCube BIOS Experience",
            content: `
            <p class="mb-4 text-gray-300">
                While Dolphin doesn't require a BIOS for GameCube games, you can enable the nostalgic startup animation (the purple rolling cube) by unchecking \"Skip BIOS\" in the configuration menu.
            </p>
            `
        },
        {
            title: "Chapter 10: Dolphin on Android",
            content: `
            <p class="mb-4 text-gray-300">
                Dolphin runs exceptionally well on modern Snapdragon processors. Use the RVZ format to save internal mobile storage and stick to a 1x or 2x internal resolution for thermal stability.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Why is my audio crackling?",
            answer: "If the audio is stuttering, your game is likely not running at 100% full speed (locked 30/60 FPS). This usually means your hardware is struggling—lower the Internal Resolution or disable MSAA."
        },
        {
            question: "Black screen in Zelda: Twilight Princess?",
            answer: "Ensure the 'Hyrule Field Speed Hack' is enabled (standard in newer versions). We recommend using the Beta or Dev branches of Dolphin rather than the outdated 'Stable' version."
        }
    ];

    const externalReferences = [
        { name: "Dolphin Emulator Wiki (Game Compatibility)", url: "https://wiki.dolphin-emu.org/" },
        { name: "HD Texture Projects Forum", url: "https://forums.dolphin-emu.org/Forum-custom-texture-projects" }
    ];

    const relatedGuides = [
        {
            href: "/guides/yuzu-ryujinx-otimizacao-zelda-mario-60fps-guia",
            title: "Switch Emulation",
            description: "Moving to modern Nintendo hardware optimization."
        },
        {
            href: "/guides/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller Overclock",
            description: "Reducing input lag for your gamepad."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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
