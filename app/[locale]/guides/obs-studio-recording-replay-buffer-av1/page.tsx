import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'obs-studio-gravacao-replay-buffer-av1',
    title: "OBS Studio (2026): Replay Buffer, AV1 & No-Lag Recording",
    description: "Replace heavy ShadowPlay with optimized OBS Studio. Learn how to use Replay Buffer in RAM and the AV1 codec to clip plays with maximum quality.",
    category: 'software',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "OBS Studio (2026): The Best Clip Configuration";
const description = "GeForce Experience (ShadowPlay) sometimes bugs out or is too heavy. Correctly configured OBS Studio is lighter, has superior quality, and uses modern encoders.";

const keywords = [
    'obs replay buffer vs shadowplay performance',
    'obs av1 recording settings quality',
    'configure obs for low end pc to record games',
    'obs studio black screen game capture fix',
    'best recording bitrate 1080p 60fps',
    'cqp vs cbr obs recording',
    'nvidia nvenc h.264 new vs hevc',
    'voltris optimizer streaming',
    'separate discord audio obs game'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('obs-studio-gravacao-replay-buffer-av1', title, description, keywords, locale);
}

export default function OBSGuide() {
    const summaryTable = [
        { label: "Encoder", value: "Nvidia NVENC AV1 / HEVC" },
        { label: "Rate Control", value: "CQP (Quality)" },
        { label: "CQ Level", value: "20 (Balance)" },
        { label: "Replay Buffer", value: "ON (120s)" },
        { label: "Process Priority", value: "High (No Lag)" },
        { label: "Game Capture", value: "Admin Mode" },
        { label: "Format", value: "MKV (Safety)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Why OBS > ShadowPlay?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          OBS allows you to separate Discord audio from the game, use more efficient encoders (AV1), and customize overlays. With "Replay Buffer," it works exactly like "Instant Replay," saving the last few minutes only when you press a button.
        </p>
      `
        },
        {
            title: "Chapter 1: Encoder Configuration (AV1)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Output > Recording</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Video Encoder:</strong>
                    <br/>- If you have an RTX 4000+: Use <strong>NVIDIA NVENC AV1</strong> (40% more quality at the same size).
                    <br/>- If you have an RTX 2000/3000: Use <strong>NVIDIA NVENC HEVC (H.265)</strong>.
                    <br/>- If you have a GTX 1000: Use <strong>NVIDIA NVENC H.264</strong>.
                    <br/>- <strong>Rate Control:</strong> CQP (Constant Quantization Parameter).
                    <br/>- <strong>CQ Level:</strong> 20 (Lower = More quality and massive file. 15 is almost lossless. 25 is light).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Replay Buffer (The Secret)",
            content: `
        <p class="mb-4 text-gray-300">
            Go to Output > Replay Buffer.
            <br/>Check "Enable Replay Buffer".
            <br/>Set the time (e.g., 120s = 2 minutes).
            <br/>OBS will record constantly to RAM. When you press the save Hotkey, it writes to disk.
            <br/>This avoids SSD wear from constant recording.
        </p>
      `
        },
        {
            title: "Chapter 3: Separate Audio Capture (Beta)",
            content: `
        <p class="mb-4 text-gray-300">
            Use the <strong>"Application Audio Capture" (BETA)</strong> feature in Sources.
            <br/>Add a source for the Game.
            <br/>Add another for Discord.
            <br/>Add another for Spotify.
            <br/>In the Audio Mixer, you can mute Spotify in the recording to avoid YouTube Copyright claims while still hearing it in your headphones.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Process Priority",
            content: `
        <p class="mb-4 text-gray-300">
            If your OBS stutters (recording lags) when the GPU hits 99% usage in-game:
            <br/>Go to Settings > Advanced.
            <br/>Change "Process Priority" to <strong>High</strong>.
            <br/>This ensures Windows reserves a tiny bit of GPU for OBS to encode video before handing the rest back to the game. The game loses 1-2 FPS, but the recording remains smooth.
        </p>
      `
        },
        {
            title: "Chapter 5: File Format (MKV)",
            content: `
        <p class="mb-4 text-gray-300">
            Always record in <strong>MKV</strong> (Matroska).
            <br/>If you record in MP4 and the PC crashes (BSOD/power outage), you lose the entire file (it gets corrupted).
            <br/>With MKV, you save up to the exact second of the power failure.
            <br/>OBS has a "Remux Recordings" function in the File menu to convert MKV to MP4 in seconds afterwards.
        </p>
      `
        },
        {
            title: "Chapter 6: Game Capture",
            content: `
        <p class="mb-4 text-gray-300">
            Always use "Game Capture". It's the most efficient method as it injects directly into the graphics API.
            <br/>"Display Capture" is slow, shows your Windows notifications, and has lower FPS.
            <br/>If Game Capture remains black, run OBS as Administrator.
        </p>
      `
        },
        {
            title: "Chapter 7: Lookahead and Psycho Visual Tuning",
            content: `
        <p class="mb-4 text-gray-300">
            In NVENC settings:
            <br/>- <strong>Lookahead:</strong> OFF (Unless playing a game with low movement).
            <br/>- <strong>Psycho Visual Tuning:</strong> ON. Improves subjective quality in fast movements using CUDA acceleration.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: AV1 Codec (The Future)",
            content: `
            <p class="mb-4 text-gray-300">
                AV1 (available on RTX 4000 and RX 7000 cards) has superior image quality to H.264 at low bitrates.
                <br/>YouTube and Twitch already support AV1. If you can, use it. Your videos will stay clear without those "squares" (artifacts) in fast scenes.
            </p>
            `
        },
        {
            title: "Chapter 9: High-Resolution Screenshots",
            content: `
            <p class="mb-4 text-gray-300">
                You can use OBS to take clean screenshots (without HUD, if you configure the source correctly) and save them as Lossless PNG instantly. Configure the shortcut.
            </p>
            `
        },
        {
            title: "Chapter 10: Virtual Camera",
            content: `
            <p class="mb-4 text-gray-300">
                Use the "Virtual Camera" to send the OBS image (with color filters and overlays) directly into Discord or Zoom as if it were your webcam.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does recording impact FPS?",
            answer: "With NVENC (GPU), very little (3-5%). The card has a dedicated chip just for this. Using x264 (CPU) impacts performance significantly."
        },
        {
            question: "Where are the videos saved?",
            answer: "Settings > Output > Recording Path. Set it to your Videos folder on a secondary HDD to avoid filling up the system SSD."
        },
        {
            question: "Microphone audio is too low?",
            answer: "In the Audio Mixer, click the gear > Advanced Audio Properties. Increase the volume (dB) or add a 'Gain' and 'Compressor' filter to the microphone."
        }
    ];

    const externalReferences = [
        { name: "OBS Studio Download", url: "https://obsproject.com/" },
        { name: "Nvidia NVENC Guide", url: "https://www.nvidia.com/en-us/geforce/guides/broadcasting-guide-ods-quick-start/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/discord-otimizacao-overlay-lag",
            title: "Discord",
            description: "Streaming via Discord."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Drivers for NVENC."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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

