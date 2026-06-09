import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'obs-studio-melhores-configuracoes-stream',
    title: "OBS Studio 2026: Professional Stream and Recording Setup (ZERO LAG)",
    description: "Stream on Twitch and YouTube without sacrificing in-game FPS. Complete guide to NVENC, AV1, Bitrate, Audio Filters, and optimized Overlays.",
    category: 'software',
    difficulty: 'Advanced',
    time: '60 min'
};

const title = "OBS Studio Masterclass (2026): The Art of Optimized Streaming";
const description = "An incorrect OBS configuration can devastate your PC's performance. Learn to separate audio tracks, choose the right encoder, and broadcast with crystal-clear visual quality.";

const keywords = [
    'obs studio best settings low end pc 2026',
    'nvenc new vs x264 best for streaming',
    'ideal bitrate twitch 1080p 60fps',
    'av1 codec youtube obs setup',
    'audio filters obs microphone background static',
    'separate discord audio obs application audio capture',
    'obs stuttering encoder overloaded fix',
    'configure replay buffer for clips',
    'streamlabs overlay slowing down pc',
    'best cbr or vbr for recording'
];

export const metadata: Metadata = createGuideMetadata('obs-studio-melhores-configuracoes-stream', title, description, keywords);

export default function OBSGuide() {
    const summaryTable = [
        { label: "Encoder", value: "NVIDIA NVENC H.264 (New)" },
        { label: "Rate Control", value: "CBR (Stream) / CQP (Recording)" },
        { label: "Bitrate", value: "6000-8000 Kbps" },
        { label: "Preset", value: "P6 - Slower (Best Quality)" },
        { label: "Base Resolution", value: "1920x1080" },
        { label: "Admin Mode", value: "Run as Admin ALWAYS" },
        { label: "Game Mode", value: "Enabled (Windows Settings)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Streaming Bottleneck",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Streaming and gaming on the same PC (Single PC Setup) is a delicate balancing act. If OBS attempts to utilize 100% of your GPU, your game will stutter. If the game uses 100%, your stream will lag (dropped frames).
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we will configure OBS to utilize dedicated hardware chips (NVENC/AMF), offloading the rendering work from your CPU and keeping your gameplay smooth.
        </p>
         <div class="bg-[#0A0A0F] border border-yellow-500/30 p-5 rounded-xl my-6">
            <h4 class="text-yellow-400 font-bold mb-2">Rule #1: Administrator Mode</h4>
            <p class="text-gray-300 text-sm">
                Always, without exception, open OBS as an Administrator.
                <br/>This tells Windows to prioritize GPU resources for OBS scene rendering, even if the game is at 99% usage. Without this, your live broadcast will appear as a "slideshow" to your viewers.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Output Settings (Streaming)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Video Encoder</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">NVIDIA NVENC H.264</span></p>
                <p class="text-gray-400 text-xs text-justify">
                    If you have an NVIDIA GPU, use it. NVENC is a dedicated physical chip that does not impact in-game FPS.
                    <br/>If using AMD hardware: Select <strong>AMD HW H.264</strong>.
                    <br/>Avoid x264 (CPU) encoding unless you have a high-core count CPU (Ryzen 9 or i9) and a dedicated streaming setup.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Rate Control & Bitrate</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">CBR 6000 Kbps (Twitch)</span></p>
                <p class="text-gray-400 text-xs">
                    Twitch officially limits bitrate to 6000 (unofficially 8000). CBR (Constant Bitrate) is mandatory for stream stability.
                    <br/>For YouTube: Aim for 15,000 Kbps or higher (YouTube re-encodes all incoming streams, so higher initial quality is better).
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Preset & Tuning</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">P5 or P6 (High Quality)</span></p>
                <p class="text-gray-400 text-xs">
                    P7 (Max Quality) can introduce rendering lag. P5/P6 offer nearly identical visuals with better performance.
                    <br/>Multipass Mode: Single Pass (Two passes consume GPU resources for negligible live gain).
                    <br/>Look-ahead and Psycho Visual Tuning: ON (Essential for high-motion games).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Local Recording Settings",
            content: `
        <p class="mb-4 text-gray-300">
            Never use your streaming settings for local recording!
            <br/>Navigate to the \"Recording\" tab.
            <br/>- <strong>Format:</strong> MKV (If your PC crashes, you won't lose the footage. Convert to MP4 via OBS > File > Remux afterwards).
            <br/>- <strong>Encoder:</strong> NVIDIA NVENC HEVC (H.265) or AV1 (For RTX 4000 series). Higher quality at smaller file sizes.
            <br/>- <strong>Rate Control:</strong> <span class="text-emerald-400 font-bold">CQP</span>.
            <br/>- <strong>CQ Level:</strong> 18 to 23. (14 is cinematic quality, 23 is balanced, 30 is poor). CQP adjusts bitrate dynamically based on complexity—vastly superior to CBR for recording.
        </p>
      `
        },
        {
            title: "Chapter 3: Audio (Filters and Separation)",
            content: `
        <p class="mb-4 text-gray-300">
            Poor microphone quality can ruin a broadcast. apply these filters in OBS (Gear icon > Filters):
        </p>
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li><strong>Noise Suppression (RNNNoise):</strong> Uses AI to remove background fans and mechanical keyboard clicks. Essential.</li>
            <li><strong>Compressor:</strong> Balances your volume. It lowers peaks to prevent clipping and keeps whispers audible.</li>
            <li><strong>Limiter:</strong> Set to -3dB. Ensures your audio NEVER enters the red clipping zone.</li>
        </ol>
        <p class="mt-4 text-gray-300 text-sm">
            <strong>Application Audio Capture (BETA):</strong> Use this instead of \"Desktop Audio.\" Add individual sources for Discord, Spotify, and your Game. This allows you to listen to music while excluding it from your stream to avoid DMCA strikes.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Video and Canvas Rescale",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Base (Canvas) Resolution:</strong> Your monitor's native resolution (e.g., 1920x1080).
            - <strong>Output (Scaled) Resolution:</strong> The final stream resolution.
            <br/>If your upload is under 10Mbps, consider 1280x720 or 1664x936 (936p is the \"sweet spot\" for streamers—perfectly divisible and easier to encode).
            - <strong>Downscale Filter:</strong> Lanczos (Sharpest result).
            - <strong>FPS:</strong> 60 (Standard) or 30 (For low-end hardware).
        </p>
      `
        },
        {
            title: "Chapter 5: Replay Buffer (Saving Clips)",
            content: `
        <p class="mb-4 text-gray-300">
            There is no need for Shadowplay if OBS is already running.
            <br/>Enable \"Replay Buffer\" in the Output tab. Allocate a duration (e.g., 60s).
            <br/>Configure a Hotkey. When you make a great play, hit the button to save the last 60 seconds of footage—including your microphone and stream overlays—to your disk.
        </p>
      `
        },
        {
            title: "Chapter 6: Web-Based Overlays (Browser Source)",
            content: `
        <p class="mb-4 text-gray-300">
            Browser sources (StreamElements/StreamLabs alerts) are taxing because they are individual Chromium windows.
            <br/>Pro Tip: Double-click the source > check <strong class="text-emerald-400">Shutdown source when not visible</strong>.
            <br/>This stops the source from consuming CPU and RAM when you switch away from that scene.
        </p>
      `
        },
        {
            title: "Chapter 7: Process Priority",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Settings > Advanced > General > Process Priority.
            <br/>Set to <strong>High</strong>.
            <br/>This ensures OBS never stutters, even during intense gameplay. Viewers would rather see a 50 FPS game on a smooth broadcast than a 144 FPS game on a stuttering transmission.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: The AV1 Codec (YouTube Support)",
            content: `
            <p class="mb-4 text-gray-300">
                If you stream to YouTube and own an NVIDIA RTX 4000 or AMD RX 7000 GPU:
                <br/>USE THE AV1 CODEC.
                <br/>It provides 40% better quality than H.264 at the same bitrate. 8000 Kbps in AV1 looks comparable to 14,000 Kbps in older codecs. Note: Twitch does not support this yet.
            </p>
            `
        },
        {
            title: "Chapter 9: Clean Scenes and Collections",
            content: `
            <p class="mb-4 text-gray-300">
                Keep your scenes organized:
                <br/>- \"In-Game\" Scene: Only Game Capture + Camera + Essential Alerts.
                <br/>- \"Just Chatting\" Scene: Large Camera + Chat Widget.
                <br/>Avoid cluttering your gameplay with useless widgets (sub goals, bit counters, etc.); they distract from competitive visibility and waste system resources.
            </p>
            `
        },
        {
            title: "Chapter 10: Game Capture vs. Display Capture",
            content: `
            <p class="mb-4 text-gray-300">
                Always prioritize <strong>Game Capture</strong>.
                <br/>It injects directly into the graphics API and is extremely efficient.
                <br/>Never use \"Display Capture\" for gaming—it is slower, results in screen tearing, and risks accidentally leaking private notifications or desktop data.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "StreamLabs OBS or OBS Studio?",
            answer: "OBS Studio. StreamLabs is a resource-intensive fork filled with bloatware. OBS Studio is lightweight, open-source, and supports powerful plugins like Aitum Vertical for TikTok."
        },
        {
            question: "How do I fix 'Encoder Overloaded'?",
            answer: "Your GPU is being maxed out. 1. Run as Admin. 2. Drop the Preset from P6 to P4 (Faster). 3. Cap your in-game FPS. 4. Reduce your Output Resolution to 720p."
        },
        {
            question: "What if my bitrate is fluctuating (Red squares)?",
            answer: "This indicates upstream internet instability. Enable 'Dynamic Bitrate' in OBS Advanced Network settings; this will automatically lower quality instead of dropping frames, keeping your stream online."
        }
    ];

    const externalReferences = [
        { name: "OBS Project Wiki", url: "https://obsproject.com/wiki/" },
        { name: "EposVox (The OBS Master)", url: "https://www.youtube.com/user/EposVox" },
        { name: "Twitch Inspector (Stream Testing)", url: "https://inspector.twitch.tv/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Drivers Guide",
            description: "Update display drivers for optimal NVENC performance."
        },
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Discord Settings",
            description: "Integrate audio without game lag."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Network Stability",
            description: "Optimize for consistent upload speed."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
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

