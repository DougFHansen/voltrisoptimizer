import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'obs-studio-streaming-twitch-youtube-guia-completo',
    title: "OBS Studio (2026): PERFECT Streaming Configuration (Twitch/YouTube)",
    description: "Stream with professional quality. Complete guide to Bitrate, NVENC AV1/H.264 Encoders, microphone filters, and scene management.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "Professional Streaming Setup";
const description = "A pixelated or stuttering stream drives audiences away. Learn how to balance your upload speed with your PC's power to deliver the best possible image, whether on Twitch (6000kbps) or YouTube (4K).";

const keywords = [
    'best obs bitrate twitch 1080p 60fps',
    'nvenc new vs x264 encoder streaming',
    'obs microphone filters noise suppression',
    'obs black screen game capture fix',
    'av1 youtube streaming settings',
    'how to configure scenes and sources obs',
    'voltris optimizer streaming',
    'stream stuttering frame drop fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('obs-studio-streaming-twitch-youtube-guia-completo', title, description, keywords, locale);
}

export default function OBSStreamGuide() {
    const summaryTable = [
        { label: "Encoder", value: "NVIDIA NVENC H.264 (New)" },
        { label: "Rate Control", value: "CBR (Constant Bitrate)" },
        { label: "Bitrate (Twitch)", value: "6000 - 8000 Kbps" },
        { label: "Bitrate (YouTube)", value: "15000 - 30000 Kbps" },
        { label: "Keyframe", value: "2s (Mandatory)" },
        { label: "Profile", value: "High" },
        { label: "Audio", value: "160/320 Kbps AAC" }
    ];

    const contentSections = [
        {
            title: "Introduction: Twitch vs. YouTube",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          - <strong>Twitch:</strong> Effectively limited to ~8000 Kbps. Requires high encoder efficiency; H.264 remains the standard.
          - <strong>YouTube:</strong> Supports 50,000+ Kbps and 4K resolution. Supports modern codecs like AV1 and HEVC (H.265).
          <br/>This guide covers the optimal path for both platforms.
        </p>
      `
        },
        {
            title: "Chapter 1: Output Settings (Streaming)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Video Configuration</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Output Mode: <strong>Advanced</strong>.
                    <br/><strong>Encoder:</strong> NVIDIA NVENC H.264 (If using an NVIDIA GPU) or AMD HW H.264 (For AMD). Avoid using x264 (CPU) unless you have a dedicated streaming PC setup.
                    <br/><strong>Rate Control:</strong> CBR (Always use CBR for live streaming stability).
                    <br/><strong>Bitrate:</strong>
                    <br/>- 1080p 60fps: 6000 Kbps (Minimum) to 8000 Kbps.
                    <br/>- 900p 60fps: 4500 - 6000 Kbps.
                    <br/>- 720p 60fps: 3000 - 4500 Kbps.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Advanced Encoder Configuration",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Keyframe Interval:</strong> 2 s. (Twitch requires this specifically; leaving it at 0/Auto can cause stream disconnects).
            - <strong>Preset:</strong> P7 (Slow/Best Quality) for RTX 30/40 series. P5 for GTX 10/16 series.
            - <strong>Tuning:</strong> High Quality.
            - <strong>Multipass Mode:</strong> Single Pass (Reduces GPU overhead) or Two Pass (Higher visual quality). Use Single Pass if you notice in-game FPS drops.
            - <strong>Look-ahead and Psycho Visual Tuning:</strong> Enable both for high-motion games (FPS titles).
        </p>
      `
        },
        {
            title: "Chapter 3: Audio Essentials",
            content: `
        <p class="mb-4 text-gray-300">
            Visual quality is important, but poor audio will drive viewers away faster.
            <br/>Click the gear icon next to your Microphone > Filters.
            <br/>Optimal Filter Order:
            <br/>1. <strong>Noise Suppression (RNNoise):</strong> Effectively removes background fan/keyboard noise.
            <br/>2. <strong>Compressor:</strong> Levels out your volume. It lowers the peak when you yell and boosts quiet whispers. (Settings: Ratio 4:1, Threshold -18dB).
            <br/>3. <strong>Limiter:</strong> Prevents audio clipping. (Threshold -1dB). Ensure your audio levels never stay in the red zone.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Playing at 1440p/4K, Streaming at 1080p",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to the <strong>Video</strong> tab.
            <br/>- <strong>Base (Canvas) Resolution:</strong> Set to your monitor's native resolution (e.g., 2560x1440).
            <br/>- <strong>Output (Scaled) Resolution:</strong> Set to your intended stream resolution (e.g., 1920x1080).
            <br/>- <strong>Downscale Filter:</strong> Lanczos (36 samples) for the highest sharpness.
            <br/>This configuration ensures your HUD and overlays are correctly scaled for the audience.
        </p>
      `
        },
        {
            title: "Chapter 5: YouTube and the AV1 Codec",
            content: `
        <p class="mb-4 text-gray-300">
            If streaming to YouTube with an RTX 4000 or Radeon RX 7000 GPU:
            <br/>Use the <strong>AV1</strong> encoder.
            <br/>AV1 delivers the quality of a 10,000 Kbps H.264 stream using only 6,000 Kbps. It significantly reduces pixelation during high movement.
            <br/>Note: Twitch does not currently support AV1 (limited beta).
        </p>
      `
        },
        {
            title: "Chapter 6: Scenes and Sources (Proper Capture)",
            content: `
        <p class="mb-4 text-gray-300">
            Always use <strong>Game Capture</strong> whenever possible.
            <br/>Avoid <strong>Display Capture</strong> for gaming.
            <br/>Why?
            <br/>1. Game Capture is more efficient, injecting directly into the graphics API.
            <br/>2. Display Capture risks exposing your desktop, notifications, and private data.
            <br/>Pro Tip: If Game Capture fails, run OBS as Administrator—this often fixes focus issues.
        </p>
      `
        },
        {
            title: "Chapter 7: Monitoring Stream Health (Stats Dock)",
            content: `
        <p class="mb-4 text-gray-300">
            Go to View > Docks > Stats.
            <br/>Monitor these two metrics:
            <br/>- <strong>Frames missed due to rendering lag:</strong> Indicates GPU overload. Lower in-game settings or cap your FPS.
            <br/>- <strong>Dropped frames (Network):</strong> Indicates unstable internet. Lower your bitrate.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Vertical Video Mode (TikTok/Shorts)",
            content: `
            <p class="mb-4 text-gray-300">
                Install the <strong>Aitum Vertical</strong> plugin.
                <br/>It creates a parallel 1080x1920 (9:16) canvas.
                <br/>This allows you to stream horizontally to Twitch and vertically to TikTok simultaneously (requires significant upstream bandwidth).
            </p>
            `
        },
        {
            title: "Chapter 9: On-Screen Chat Overlay",
            content: `
            <p class="mb-4 text-gray-300">
                Use StreamElements or StreamLabs to generate a chat widget.
                <br/>Add it as a \"Browser Source\" in OBS.
                <br/>Apply custom CSS to make the background transparent for a cleaner look.
            </p>
            `
        },
        {
            title: "Chapter 10: VOD Track and Copyright Protection",
            content: `
            <p class="mb-4 text-gray-300">
                On Twitch, you can separate audio for your saved videos.
                <br/>In Output > Streaming, enable \"Twitch VOD Track\" (Secondary track).
                <br/>Assign your music (Spotify) to Track 1, but EXCLUDE it from the VOD track.
                <br/>This ensures your live viewers hear the music, but your saved VOD remains silent in those parts, preventing DMCA strikes.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "What is the minimum recommended upload speed?",
            answer: "For a stable 1080p stream, we recommend at least 10 Mbps of upload (to maintain a steady 6 Mbps bitrate). Always test your speed at speedtest.net."
        },
        {
            question: "Why does my stream look laggy for viewers but fine on my PC?",
            answer: "Either your bitrate is too high for the viewer's connection to handle, or the Twitch ingest server is unstable. Try reducing your bitrate to 4500 Kbps."
        }
    ];

    const externalReferences = [
        { name: "Official OBS Studio Downloads", url: "https://obsproject.com/" },
        { name: "Twitch Broadcast Requirements", url: "https://help.twitch.tv/s/article/broadcast-guidelines" }
    ];

    const relatedGuides = [
        {
            href: "/guides/obs-studio-gravacao-replay-buffer-av1",
            title: "OBS Recording",
            description: "Optimal settings for high-quality clips."
        },
        {
            href: "/guides/discord-nitro-qualidade-voz-krisp",
            title: "Microphone Optimization",
            description: "Advanced audio cleaning tips."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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

