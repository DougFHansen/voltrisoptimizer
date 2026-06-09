import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'discord-otimizacao-overlay-lag',
    title: "Discord (2026): Optimization, Overlay, and CPU Usage Reduction",
    description: "Is Discord consuming 20% of your CPU? Learn how to correctly disable Hardware Acceleration, configure the Overlay to prevent in-game lag, and improve audio quality.",
    category: 'software',
    difficulty: 'Easy',
    time: '20 min'
};

const title = "Discord Lite (2026): Zero Lag in Games";
const description = "Discord is essential but resource-heavy. It's essentially a Chrome browser running in the background. Let's put it on a diet so your in-game FPS doesn't suffer.";

const keywords = [
    'discord consuming high cpu fix',
    'disable discord overlay boost fps',
    'discord hardware acceleration on or off',
    'discord stream lagging black screen',
    'how to configure krisp discord',
    'enable discord developer mode',
    'reduce discord ram usage',
    'discord notifications interrupting game',
    'automatic discord streamer mode',
    'audiodg.exe high priority discord'
];

export const metadata: Metadata = createGuideMetadata('discord-otimizacao-overlay-lag', title, description, keywords);

export default function DiscordGuide() {
    const summaryTable = [
        { label: "Hardware Accel", value: "OFF (If weak GPU)" },
        { label: "Overlay", value: "OFF (Recommended)" },
        { label: "Noise Suppress", value: "Krisp (CPU) or Standard" },
        { label: "Quality", value: "64kbps (Default)" },
        { label: "Echo Cancel", value: "On" },
        { label: "Advanced Voice", value: "Off (If lagging)" },
        { label: "GIFs", value: "Autoplay Off" }
    ];

    const contentSections = [
        {
            title: "Introduction: Electron Bloat",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Discord utilizes the Electron framework. This means it loads an entire \"Chromium\" instance just to display the chat. On PCs with weak CPUs (older i3/i5 models), this creates a resource competition with your game.
        </p>
      `
        },
        {
            title: "Chapter 1: Hardware Acceleration (The Dilemma)",
            content: `
        <div class="space-y-4">
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Hardware Acceleration (GPU)</h4>
                <p class="text-gray-400 text-xs">
                    User Settings > Advanced > Hardware Acceleration.
                </p>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="bg-red-900/20 p-2 rounded">
                        <p class="text-red-300 text-xs font-bold">TURN OFF IF:</p>
                        <p class="text-gray-400 text-xs">You have a weak GPU (GTX 1050, Integrated) and your game is using 100% of it. Discord will lag voice/stream if GPU resources are exhausted.</p>
                    </div>
                    <div class="bg-emerald-900/20 p-2 rounded">
                        <p class="text-emerald-300 text-xs font-bold">TURN ON IF:</p>
                        <p class="text-gray-400 text-xs">You have a weak CPU but a strong GPU (RTX 3060+). This offloads processing from the CPU to the GPU.</p>
                    </div>
                </div>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Overlay (The FPS Enemy)",
            content: `
        <p class="mb-4 text-gray-300">
            The Discord overlay (\"Who is talking\") injects code into your game's DirectX process.
            <br/>This can cause a loss of 5 to 15 FPS and is the #1 cause of crashes in games like CS2 and Destiny 2.
            <br/><strong>Recommendation:</strong> Disable the In-Game Overlay in global settings. If absolutely necessary, enable it only for specific games in the \"Registered Games\" tab.
        </p>
      `
        },
        {
            title: "Chapter 3: Voice Quality and Krisp",
            content: `
        <p class="mb-4 text-gray-300">
            User Settings > Voice & Video.
            <br/>- <strong>Noise Suppression:</strong> Use <strong>Krisp</strong>. It is the best AI technology on the market. Warning: it consumes CPU. If your CPU hits 100% during gameplay, your voice may cut out (sound robotic). If this happens, switch to \"Standard\".
            <br/>- <strong>Echo Cancellation:</strong> On.
            <br/>- <strong>Automatic Gain Control:</strong> On (Prevents your volume from being too low).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Reducing Animations (CPU)",
            content: `
        <p class="mb-4 text-gray-300">
            User Settings > Accessibility.
            <br/>- <strong>Enable Reduced Motion:</strong> On.
            <br/>- <strong>Automatically play GIFs:</strong> Off.
            <br/>- <strong>Stickers:</strong> Never animate.
            <br/>A server filled with animated GIFs and stickers consumes significant CPU power to render animations. Turning this off makes Discord \"static\" and lightweight.
        </p>
      `
        },
        {
            title: "Chapter 5: Stream and Go Live",
            content: `
        <p class="mb-4 text-gray-300">
            User Settings > Voice & Video (Under Screen Share).
            <br/>- <strong>Use our latest technology to capture screen:</strong> On.
            <br/>- <strong>Use an experimental method to capture audio:</strong> On.
            <br/>If your stream to friends is lagging (slideshow effect), the culprit might be the \"OpenH264 Video Codec\". Try toggling Hardware Acceleration (OpenH264) to test compatibility.
        </p>
      `
        },
        {
            title: "Chapter 6: Window Management",
            content: `
        <p class="mb-4 text-gray-300">
            Minimize Discord to the System Tray when gaming.
            <br/>Don't leave it open on a second monitor if you aren't actively reading it.
            <br/>When minimized, Electron \"freezes\" visual rendering, releasing resources.
        </p>
      `
        },
        {
            title: "Chapter 7: Discord Cache Cleanup",
            content: `
        <p class="mb-4 text-gray-300">
            Discord accumulates images (memes) in its cache indefinitely, which can reach up to 10GB.
            <br/>Close Discord.
            <br/>Navigate to <code>%appdata%\\discord\\Cache</code>, <code>Code Cache</code>, and <code>GPUCache</code>.
            <br/>Delete everything inside these folders. Discord will open clean and fast.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Streamer Mode",
            content: `
            <p class="mb-4 text-gray-300">
                Enable \"Automatically Enable Streamer Mode\".
                <br/>This hides your email and discriminator (#Tag) when OBS or a game is open, preventing accidental data leaks during a stream.
            </p>
            `
        },
        {
            title: "Chapter 9: Developer Mode (ID Retrieval)",
            content: `
            <p class="mb-4 text-gray-300">
                User Settings > Advanced > Developer Mode.
                <br/>Enable this. It allows you to right-click any user/server and \"Copy ID.\" This is essential for moderators and for reporting issues.
            </p>
            `
        },
        {
            title: "Chapter 10: Notifications",
            content: `
            <p class="mb-4 text-gray-300">
                Disable \"Enable Desktop Notifications\".
                <br/>Receiving a Windows pop-up during a critical gaming moment can minimize your game or freeze the screen. Use only notification sounds, without the visual banner.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Discord is not detecting my game?",
            answer: "Go to 'Registered Games' and click 'Add it!'. Point to the game's executable. Sometimes, running Discord as Administrator is necessary to detect games running as admin."
        },
        {
            question: "Robotic voice (Voice Lag)?",
            answer: "This is usually caused by low upload bandwidth or 100% CPU usage. In Task Manager, go to Details, find `audiodg.exe` (Windows Audio process), right-click > Set Priority > High. This ensures audio is processed before game data."
        },
        {
            question: "Is BetterDiscord allowed?",
            answer: "It is against the Terms of Service (ToS). While Discord doesn't actively ban BetterDiscord/Vencord users unless they use malicious plugins, it is technically prohibited. Use the official client for maximum security."
        }
    ];

    const externalReferences = [
        { name: "Discord Status", url: "https://discordstatus.com/" },
        { name: "Krisp AI Noise Cancelling", url: "https://krisp.ai/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/obs-studio-melhores-configuracoes-stream",
            title: "OBS Studio",
            description: "Capture Discord audio separately."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Network",
            description: "Discord uses UDP, just like games."
        },
        {
            href: "/guides/mic-chiando-ruido-estatico-fix",
            title: "Microphone",
            description: "Improve quality before it reaches Discord."
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
