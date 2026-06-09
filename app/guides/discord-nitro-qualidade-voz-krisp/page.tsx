import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'discord-nitro-qualidade-voz-krisp',
    title: "Discord (2026): Voice Quality & Streaming Optimization",
    description: "Does your mic cut out or game sound leak into Discord? Learn how to configure Echo Cancellation (Krisp), high Bitrate, and correct Hardware Acceleration.",
    category: 'software',
    difficulty: 'Beginner',
    time: '15 min'
};

const title = "Discord Tuning (2026): Crystal Clear Voice & No Lag";
const description = "Discord is heavy. It's basically a Chrome browser running all the time. Let's optimize it so it doesn't steal FPS from your game.";

const keywords = [
    'discord hardware acceleration on or off',
    'krisp noise suppression discord settings',
    'discord stream lag fix 60fps',
    'voice activity sensitivity cutting out',
    'discord overlay fps drop',
    'high packet priority discord',
    'quality of service high packet priority',
    'voltris optimizer electron',
    'discord not detecting game'
];

export const metadata: Metadata = createGuideMetadata('discord-nitro-qualidade-voz-krisp', title, description, keywords);

export default function DiscordGuide() {
    const summaryTable = [
        { label: "Hardware Accel", value: "OFF (If weak GPU)" },
        { label: "Hardware Accel", value: "ON (If using Live)" },
        { label: "Krisp", value: "ON (Noise)" },
        { label: "Echo Cancellation", value: "ON" },
        { label: "Overlay", value: "OFF (FPS)" },
        { label: "Quality of Service", value: "High Packet On" },
        { label: "Input Sensitivity", value: "Manual (-60dB)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Heavy Electron",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Discord uses Electron (Chromium) technology. It consumes 300MB to 1GB of RAM. "Hardware Acceleration" uses your GPU to render GIFs and Emojis.
        </p>
      `
        },
        {
            title: "Chapter 1: Hardware Acceleration (The Dilemma)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Advanced > Hardware Acceleration</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>TURN OFF</strong> if you play with GPU at 99% (GPU bottleneck). Discord will stop using the GPU to draw the interface, freeing up resources for the game.
                    <br/>- <strong>TURN ON</strong> if you Stream (Go Live). Without acceleration, your live stream will lag at 5 frames per second because the CPU can't handle the encoding.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Voice & Video (Krisp)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Krisp (Noise Suppression):</strong> The best technology of the decade. Activate it. It removes dog barks, mechanical keyboards, and fans using AI.
            - <strong>Echo Cancellation:</strong> Turn on if you use speakers. Turn off if you use a Headset, as it slightly distorts the voice.
        </p>
      `
        },
        {
            title: "Chapter 3: Overlay (In-Game Interface)",
            content: `
        <p class="mb-4 text-gray-300">
            The Overlay (those avatars that appear in the corner of the game) causes:
            <br/>1. FPS drop.
            <br/>2. Conflict with Anti-Cheat.
            <br/>3. Mouse getting stuck on screen bug.
            <br/>Recommendation: <strong>DISABLE</strong> the Overlay in Competitive Games (Settings > Game Overlay). Leave it on only for MMOs/Casuals.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Input Sensitivity",
            content: `
        <p class="mb-4 text-gray-300">
            Never use "Automatically determine input sensitivity". Discord cuts off the beginning of your sentences.
            <br/>Uncheck the option.
            <br/>Speak normally and adjust the yellow bar to be slightly to the left of your voice volume.
            <br/>This way, it only opens the mic when you speak up, but doesn't cut off syllables.
        </p>
      `
        },
        {
            title: "Chapter 5: Quality of Service (QoS)",
            content: `
        <p class="mb-4 text-gray-300">
            In Voice & Video > "Enable Quality of Service High Packet Priority".
            <br/>This tells your router: "Discord voice is urgent".
            <br/>It HELPS a lot to avoid robotic voice when someone is downloading something on the network. Leave it <strong>ON</strong>.
            <br/>(Note: Some old routers bug with this, if the voice gets bad, turn it off).
        </p>
      `
        },
        {
            title: "Chapter 6: Attenuation (Ducking)",
            content: `
        <p class="mb-4 text-gray-300">
            The setting that lowers the game volume when someone speaks.
            <br/>This is terrible for shooters (you can't hear footsteps when the team speaks).
            <br/>Set Attenuation to <strong>0%</strong>.
        </p>
      `
        },
        {
            title: "Chapter 7: Discord Cache (Junk)",
            content: `
        <p class="mb-4 text-gray-300">
            Discord stores a cache of all the images your friends send. The folder can reach 10GB.
            <br/>Location: <code>%appdata%/discord/Cache</code>.
            <br/>You can safely delete everything inside to free up space on the SSD.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Streamer Mode (Privacy)",
            content: `
            <p class="mb-4 text-gray-300">
                If you're going to stream, activate Streamer Mode.
                <br/>It hides your email, Discord tags, and server invites on screen to prevent leaks.
            </p>
            `
        },
        {
            title: "Chapter 9: AV1 Streaming",
            content: `
            <p class="mb-4 text-gray-300">
                For those with an RTX 4000, Discord now supports streaming in AV1. The quality is incredible at 60fps, even with low bitrate. Your friends need compatible hardware to watch (decode).
            </p>
            `
        },
        {
            title: "Chapter 10: Server Boost (Audio 384kbps)",
            content: `
            <p class="mb-4 text-gray-300">
                Standard audio quality is 64kbps (poor).
                <br/>Servers with Level 2 or 3 unlock 128kbps and 256kbps. For music or podcasts, the difference is massive. For normal voice, 64kbps is enough.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Discord closes on its own in-game?",
            answer: "Usually, it's a lack of RAM. Windows kills Discord to keep the game open. Close Chrome tabs."
        },
        {
            question: "Robotic voice?",
            answer: "Packet Loss on your internet or you are connected to the wrong voice server (Region). Try changing the Voice Region of the channel to 'Brazil' or 'US East'."
        },
        {
            question: "Black screen on screen sharing?",
            answer: "Disable the option 'Use our latest technology to capture your screen' in Voice & Video settings."
        }
    ];

    const externalReferences = [
        { name: "Discord Krisp Info", url: "https://support.discord.com/hc/en-us/articles/360040843691-Krisp-FAQ" },
        { name: "Discord PT-BR Twitter", url: "https://twitter.com/discord_br" }
    ];

    const relatedGuides = [
        {
            href: "/guias/obs-studio-gravacao-replay-buffer-av1",
            title: "OBS Studio",
            description: "To separate audio."
        },
        {
            href: "/guias/bufferbloat-qos-sqm-roteador-ping",
            title: "Bufferbloat",
            description: "Cause of robotic voice."
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
