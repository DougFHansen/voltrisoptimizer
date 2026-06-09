import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'retroarch-guia-completo-cores-shaders-crt',
    title: "RetroArch (2026): The Ultimate Guide to Cores and CRT Shaders",
    description: "Configure RetroArch from scratch. Learn how to download the best Cores, set up CRT Shaders (Scanlines) for a retro look, and use Run-Ahead for near-zero latency.",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '35 min'
};

const title = "RetroArch: Every Console in One Place";
const description = "RetroArch isn't a standalone emulator; it's a frontend (interface) that loads emulators called 'Cores'. it is the most organized and powerful way to play SNES, Genesis, GBA, and Arcades.";

const keywords = [
    'best retroarch cores snes genesis gba',
    'configure crt shaders royale kurozumi',
    'run-ahead latency reduction retroarch',
    'retroarch achievements login',
    'map 8bitdo controller retroarch',
    'playlist thumbnails boxart download',
    'voltris optimizer retro',
    'mesen vs snes9x core'
];

export const metadata: Metadata = createGuideMetadata('retroarch-guia-completo-cores-shaders-crt', title, description, keywords);

export default function RetroArchGuide() {
    const summaryTable = [
        { label: "Video Driver", value: "Vulkan / Glcore" },
        { label: "Menu Driver", value: "Ozone (Default) / XMB" },
        { label: "SNES Core", value: "Snes9x (Light) / Mesen-S (Precise)" },
        { label: "GBA Core", value: "mGBA" },
        { label: "PS1 Core", value: "SwanStation" },
        { label: "Latency", value: "Run-Ahead ON" },
        { label: "Shaders", value: "CRT-Geom / CRT-Royale" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Concept of 'Cores'",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Instead of downloading a separate .exe for each console, you download \"Cores\" (DLLs) within RetroArch.
          <br/>The advantage: All consoles share the same controller, video, and shader configurations.
        </p>
      `
        },
        {
            title: "Chapter 1: Downloading the Best Cores",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Online Updater > Core Downloader</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Don't just download any core. Some are outdated. Use these recommended ones:
                    <br/>- <strong>Nintendo - SNES:</strong> Snes9x (Current).
                    <br/>- <strong>Sega - MS/GG/MD/CD:</strong> Genesis Plus GX.
                    <br/>- <strong>Nintendo - Game Boy Advance:</strong> mGBA.
                    <br/>- <strong>Arcade:</strong> FBNeo (FinalBurn Neo) for general games or MAME (Current) for complex ones.
                    <br/>- <strong>Sony - PlayStation:</strong> SwanStation (Better upscaling than Beetle).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Setting Up Game Playlists",
            content: `
        <p class="mb-4 text-gray-300">
            1. Go to the \"Import Content\" tab > Scan Directory.
            <br/>2. Select your ROMs folder.
            <br/>3. RetroArch will scan and create organized playlists with console icons in the sidebar.
            <br/>4. Go to Online Updater > Playlist Thumbnails Updater to automatically download cover art (Boxart).
        </p>
      `
        },
        {
            title: "Chapter 3: CRT Shaders (Scanlines)",
            content: `
        <p class="mb-4 text-gray-300">
            Modern Pixel Art looks flat on LCD screens. These games were designed for the glow and scanlines of CRT TVs.
            <br/>With a game running: Quick Menu > Shaders > Load.
            <br/>Navigate to <code>shaders_slang/crt</code>.
            <br/>- <strong>crt-geom:</strong> Simple, simulates screen curvature. Beautiful and lightweight.
            <br/>- <strong>crt-royale:</strong> The most advanced and resource-heavy. Looks like a real Trinitron TV.
            <br/>- <strong>zfast-crt:</strong> Ideal for mobile devices or very weak PCs.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Latency (Run-Ahead)",
            content: `
        <p class="mb-4 text-gray-300">
            \"Run-Ahead\" removes the natural input lag of the emulator by calculating future frames and rolling back.
            <br/>Settings > Latency > Run-Ahead to Reduce Latency: ON.
            <br/>Number of Frames: 1 (Safe) or 2 (Aggressive).
            <br/>This makes Mario jump the INSTANT you press the button—potentially faster than on a real SNES console. Requires significant CPU power.
        </p>
      `
        },
        {
            title: "Chapter 5: Netplay (Playing Online)",
            content: `
        <p class="mb-4 text-gray-300">
            RetroArch features built-in, easy netplay.
            <br/>Host: Netplay > Host Session.
            <br/>Client: Netplay > Refresh Room List.
            <br/>Both players must have the EXACT same ROM (identical CRC file). We recommend using \"No-Intro\" sets.
        </p>
      `
        },
        {
            title: "Chapter 6: RetroAchievements",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > Achievements.
            <br/>Log in to your account.
            <br/>Enable \"Hardcore Mode\" to disable Save States (required for earning official ranking points).
            <br/>When you launch a game, you will see a \"Login Successful\" notification along with the trophy list.
        </p>
      `
        },
        {
            title: "Chapter 7: BIOS Files",
            content: `
        <p class="mb-4 text-gray-300">
            CD-based cores (PS1, Sega CD, Saturn) require BIOS files in the RetroArch <code>system</code> folder.
            <br/>Without a BIOS, the game will close automatically.
            <br/>RetroArch doesn't always specify which BIOS is missing; verify Core documentation at <code>docs.libretro.com</code>.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Menu Driver (Interface)",
            content: `
            <p class="mb-4 text-gray-300">
                If you don't like the default gray interface (Ozone):
                <br/>Settings > Drivers > Menu.
                <br/>Change it to <strong>XMB</strong> (resembles PS3) or <strong>RGUI</strong> (retro pixelated look). Restart to apply changes.
            </p>
            `
        },
        {
            title: "Chapter 9: AI Service (Real-time Translation)",
            content: `
            <p class="mb-4 text-gray-300">
                RetroArch can translate Japanese games in real-time using Google Translate.
                <br/>This requires an API Key but allows you to play RPGs never released in the West with on-screen subtitle overlays.
            </p>
            `
        },
        {
            title: "Chapter 10: Hotkeys",
            content: `
            <p class="mb-4 text-gray-300">
                Configure Settings > Input > Hotkeys.
                <br/>\"Menu Toggle Controller Combo\": For example, hold Start + Select for 2s to open the in-game menu. Essential when playing from a couch.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Steam vs Standalone version?",
            answer: "The Steam version is great; it updates automatically and offers Cloud Saves. However, it has fewer Cores available for direct download due to licensing. The version from the official website is complete."
        },
        {
            question: "Controller not working?",
            answer: "RetroArch configures XInput (Xbox) controllers automatically. If using a generic controller, go to Settings > Input > Port 1 Controls and map it manually."
        }
    ];

    const externalReferences = [
        { name: "RetroArch Official", url: "https://www.retroarch.com/" },
        { name: "Libretro Docs", url: "https://docs.libretro.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/pcsx2-otimizacao-4k-widescreen-texturas-guia",
            title: "PCSX2",
            description: "Better to use Standalone for PS2."
        },
        {
            href: "/guides/dolphin-emulador-wii-gamecube-ubershaders-guia",
            title: "Dolphin",
            description: "Better to use Standalone for Wii/GameCube."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
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

