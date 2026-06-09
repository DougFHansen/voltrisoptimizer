import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'steam-slow-download-fix',
    title: "Steam (2026): Faster Downloads, Cache Cleaning, and Optimization",
    description: "Slow download on Steam? Learn how to change the server region, clear the download cache, and disable Overlay and Shader Pre-Caching to gain FPS.",
    category: 'software',
    difficulty: 'Easy',
    time: '20 min'
};

const title = "Steam Turbo (2026): Maximizing Download and FPS";
const description = "Steam is the largest gaming platform, but its default settings can limit your download speed and cause stuttering in DX12 games.";

const keywords = [
    'steam slow download 2026 fix',
    'how to clear steam download cache',
    'change steam download region',
    'shader pre-caching steam disable or enable',
    'steam overlay fps drop turn off',
    'big picture mode lagging pc',
    'steam launch options performance',
    'steam webhelper consuming cpu',
    'low bandwidth mode steam library',
    'voltris optimizer steam'
];

export const metadata: Metadata = createGuideMetadata('steam-slow-download-fix', title, description, keywords);

export default function SteamGuide() {
    const summaryTable = [
        { label: "Download Region", value: "Closest (Test)" },
        { label: "Shader Cache", value: "Enable (DX12)" },
        { label: "Overlay", value: "OFF (Competitive)" },
        { label: "Interface", value: "Low Bandwidth" },
        { label: "Remote Play", value: "OFF" },
        { label: "Broadcasting", value: "Disabled" },
        { label: "WebHelper", value: "No-Browser (Mode)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Optimizing the Client",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Steam client has updated and become heavier (now using Chromium in the library). Additionally, slow downloads and infinite "Shader Pre-Caching" are common issues. Let's solve them.
        </p>
      `
        },
        {
            title: "Chapter 1: Speeding Up Downloads",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Download Region</h4>
                <p class="text-white font-mono text-sm mb-2">Settings > Downloads > Region</p>
                <p class="text-gray-400 text-xs">
                    Change to the closest server (e.g., US - New York). If it's slow, TRY ANOTHER ONE (e.g., US - Miami or even UK - London). Sometimes the local route is congested, and a different server downloads faster.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Clear Download Cache</h4>
                <p class="text-white font-mono text-sm mb-2">Settings > Downloads > Clear Cache</p>
                <p class="text-gray-400 text-xs">
                    If the download stops and starts ( "disk write error" or fluctuating speed), clear the cache. This resets the connection to the content servers and removes corrupted temporary files. (You will have to log in again).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Steam Overlay and FPS",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > In-Game > "Enable the Steam Overlay while in-game".
            <br/><strong>Recommendation:</strong> Turn it off for competitive games (CS2, Apex). The overlay consumes VRAM and causes input lag.
            <br/>If you need the Steam Chat, use shift+tab, but know it costs FPS.
        </p>
      `
        },
        {
            title: "Chapter 3: Shader Pre-Caching (The Controversy)",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > Downloads > Shader Pre-Caching.
            <br/>- <strong>Enable? YES.</strong>
            <br/>This allows Steam to download pre-compiled shaders for your GPU before the game opens. This <strong>ELIMINATES</strong> stutters the first time you play DX12/Vulkan games (Elden Ring, CS2, Apex).
            <br/>- <strong>Disadvantage:</strong> It takes up disk space and uses internet. But it's worth it for the fluidity.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Lightweight Library (Low Performance Mode)",
            content: `
        <p class="mb-4 text-gray-300">
            Settings > Library.
            <br/>- <strong>Low bandwidth mode:</strong> Enable.
            <br/>- <strong>Low performance mode:</strong> Enable.
            <br/>This disables library animations, autoplay videos, and transitions, saving around 200-400MB of RAM while Steam is open in the background.
        </p>
      `
        },
        {
            title: "Chapter 5: Steam Broadcasting and Remote Play",
            content: `
        <p class="mb-4 text-gray-300">
            Many don't know, but Steam stays ready to broadcast your game.
            <br/>- Settings > Remote Play > Disable "Enable Remote Play".
            <br/>- Settings > Broadcasting > "Privacy setting" -> Disabled.
            <br/>This prevents the encoding service from being loaded into memory.
        </p>
      `
        },
        {
            title: "Chapter 6: Friends & Chat (Voice)",
            content: `
        <p class="mb-4 text-gray-300">
            Open Friends List (Chat) > Gear icon.
            <br/>- Voice: Disable "Gain Control" and "Echo Cancellation" if you already use this in your microphone software or Discord. Steam's audio processing is poor.
            <br/>- Enable "Don't sign into friends when Steam starts" if you want to focus.
        </p>
      `
        },
        {
            title: "Chapter 7: Launch Options (Global Commands)",
            content: `
        <p class="mb-4 text-gray-300">
            You can create a Steam shortcut on your desktop with the argument:
            <br/><code>-no-browser +open steam://open/minigameslist</code>
            <br/>This opens Steam in an ultra-minimalistic mode, without the store, without the web browser, using only 50MB of RAM. Perfect for very low-end PCs (4GB RAM) that just want to open the game.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Verify Integrity",
            content: `
            <p class="mb-4 text-gray-300">
                If a specific game is crashing:
                <br/>Library > Right-Click on the game > Properties > Installed Files > "Verify integrity of game files".
                <br/>This fixes corrupted textures without having to download the entire game again. Common in PUBG/Apex updates.
            </p>
            `
        },
        {
            title: "Chapter 9: Moving Games (SSD)",
            content: `
            <p class="mb-4 text-gray-300">
                Bought a new SSD?
                <br/>Settings > Storage.
                <br/>Add the new drive. Select the games on the old drive and click "Move". Steam transfers everything correctly. Move your competitive games to the SSD.
            </p>
            `
        },
        {
            title: "Chapter 10: Notifications",
            content: `
            <p class="mb-4 text-gray-300">
                Disable "When a friend joins a game" and "When a friend comes online".
                <br/>These pop-ups cause micro-stutters in some fullscreen games.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Steam WebHelper (steamwebhelper.exe) using CPU?",
            answer: "It's the internal browser (Store/Library). Enable 'Low performance mode' in the Library and turn off hardware acceleration in Interface settings to reduce usage. Or use the '-no-browser' mode."
        },
        {
            question: "Slow download at the end (99%)?",
            answer: "This is Steam unpacking and installing files. Disk usage spikes and the download stops. It's normal. An NVMe SSD accelerates this step drastically."
        },
        {
            question: "Controller not working?",
            answer: "Go to Settings > Controller. Enable 'Steam Input' for PlayStation/Xbox. This creates a virtual driver that makes any controller work in any game (even old ones)."
        }
    ];

    const externalReferences = [
        { name: "Steam Status (Servers)", url: "https://steamstat.us/" },
        { name: "SteamDB (Database)", url: "https://steamdb.info/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Write to disk faster."
        },
        {
            href: "/guides/internet-lenta-jogos-lag",
            title: "Network",
            description: "Optimize downloads."
        },
        {
            href: "/guides/como-escolher-controle-pc",
            title: "Controller",
            description: "Steam Input explained."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

