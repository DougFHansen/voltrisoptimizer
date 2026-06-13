import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'taxa-amostragem-audio-44khz-192khz-bug',
    title: "Audio Sample Rate (2026): 44.1kHz vs 48kHz vs 192kHz",
    description: "Setting your audio to 'Studio Quality' (192kHz) can mute your PC or cause game audio glitches. Learn the correct sample rate for gamers.",
    category: 'audio',
    difficulty: 'Beginner',
    time: '10 min'
};

const title = "Windows Sound Settings (2026): 48kHz is the Standard";
const description = "Did you buy a 32-bit 384kHz DAC and set it to the max? Congratulations, you're likely wasting CPU power and causing glitches in Discord.";

const keywords = [
    'best sample rate for games 24bit 48000hz',
    'flickering windows 11 audio fix',
    'discord robotic sound sample rate mismatch',
    '44.1khz vs 48khz games latency',
    'windows default audio format studio quality',
    'obs audio out of sync sample rate',
    'crackling audio fix realtek',
    'voltris optimizer sound',
    'voicemeeter banana sample rate'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('taxa-amostragem-audio-44khz-192khz-bug', title, description, keywords, locale);
}

export default function SampleRateGuide() {
    const summaryTable = [
        { label: "Default", value: "24-bit / 48000 Hz" },
        { label: "CD Quality", value: "16-bit / 44100 Hz" },
        { label: "Studio", value: "24-bit / 96000 Hz+" },
        { label: "Recommended", value: "48kHz (Gaming)" },
        { label: "Glitch", value: "Crackling Audio (Mismatch)" },
        { label: "CPU Usage", value: "High at 192kHz" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Quality Myth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Most game and movie audio files are mastered at 48kHz. Music (Spotify/CDs) is typically 44.1kHz. If you force Windows to run at 192kHz, the system must perform "Resampling" in real-time, which can introduce artifacts and latency.
        </p>
      `
        },
        {
            title: "Chapter 1: The Ideal Configuration (48kHz)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Realtek / Windows Panel</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Go to Sound > Device Properties > Advanced.
                    <br/>Default Format: <strong>24-bit, 48000 Hz (Studio Quality)</strong>.
                    <br/>- Why not 44100Hz? Because modern videos and games use 48k.
                    <br/>- Why not 96000Hz? Because no game uses audio at that fidelity. It's a waste of CPU resources.
                    <br/>- Why 24-bit? Because it provides more dynamic range (headroom) without the background hiss often found in 16-bit audio.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Sample Rate Mismatch (The 'Robot Sound' Glitch)",
            content: `
        <p class="mb-4 text-gray-300">
            If your microphone is set to 48kHz and your headphones are set to 44.1kHz, some programs (Discord, OBS, Voicemeeter) may struggle.
            <br/>The sound may stutter, speed up (high-pitched), or slow down (deeper voice).
            <br/><strong>Golden Rule:</strong> Set EVERYTHING (Input and Output) to 48000 Hz for perfect synchronization.
        </p>
      `
        },
        {
            title: "Chapter 3: OBS and Audio Sync Issues",
            content: `
        <p class="mb-4 text-gray-300">
            If your stream audio becomes delayed after playing for an hour:
            <br/>Check Settings > Audio in OBS. It should be set to 48kHz.
            <br/>If the Windows device is at 44.1kHz, OBS will attempt to convert it, and over time, it may "lose" samples, accumulating drift.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Latency and Buffering",
            content: `
        <p class="mb-4 text-gray-300">
            Higher sample rates (like 192kHz) theoretically have lower latency as the buffer fills faster.
            <br/>However, this increases CPU load. If the CPU stutters, you will hear "pops" or "clicks" in the audio (DPC Latency Spike).
            <br/>48kHz is the sweet spot for low latency and stability.
        </p>
      `
        },
        {
            title: "Chapter 5: Exclusive Mode",
            content: `
        <p class="mb-4 text-gray-300">
            In properties, find the checkboxes for "Allow applications to take exclusive control of this device".
            <br/>- <strong>Games:</strong> Keep this enabled. Some games (like CS2) rely on it for minimum latency.
            <br/>- <strong>DAWs (Music Production):</strong> If you open FL Studio with an ASIO driver, it will mute YouTube/Discord. This is normal for exclusive mode.
        </p>
      `
        },
        {
            title: "Chapter 6: Spatial Sound (Windows Sonic)",
            content: `
        <p class="mb-4 text-gray-300">
            Right-click the sound icon > Spatial sound.
            <br/>Windows Sonic for Headphones (Free).
            <br/>It attempts to simulate 7.1. It works well for movies, but in competitive games, it can distort precise directionality (front/back). Keep it off for games like CS/Valorant.
        </p>
      `
        },
        {
            title: "Chapter 7: Realtek vs. Microsoft High Definition Driver",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes motherboard manufacturers' Realtek drivers are bloated with tools (Nahimic, Sonic Studio) that cause lag.
            <br/>Uninstalling these and using the generic Microsoft "High Definition Audio Device" driver often improves quality and removes undesired effects.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: External USB DACs",
            content: `
            <p class="mb-4 text-gray-300">
                If you use an external DAC (Focusrite, Fiio), install the manufacturer's ASIO drivers.
                <br/>However, in Windows (WDM settings), stick to 48kHz. Save 192kHz for listening to Lossless FLAC files in a dedicated music player (like Foobar2000 in WASAPI mode).
            </p>
            `
        },
        {
            title: "Chapter 9: HDMI Audio (GPU)",
            content: `
            <p class="mb-4 text-gray-300">
                Audio coming through your monitor (via HDMI/DisplayPort) is processed by the graphics card.
                <br/>It also needs to be configured to 48kHz in the Sound Panel.
            </p>
            `
        },
        {
            title: "Chapter 10: Restarting Audio",
            content: `
            <p class="mb-4 text-gray-300">
                If your sound cuts out:
                <br/>Open Services.msc and restart the "Windows Audio" service. It's much faster than restarting your entire PC.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I hear the difference between 48kHz and 192kHz?",
            answer: "Scientifically, the human ear typically hears up to 20kHz. 44.1kHz covers this (Nyquist Theorem). 192kHz is intended for mixing and avoiding mathematical errors in plugins, not for final listening. You likely won't hear any difference."
        },
        {
            question: "Is Discord audio cutting out?",
            answer: "Disable 'Noise Reduction' in the Realtek driver. Let Discord's Krisp handle the noise suppression."
        }
    ];

    const externalReferences = [
        { name: "Audio Sample Rate Explained", url: "https://www.soundguys.com/sample-rates-explained-134/" },
        { name: "ASIO4ALL", url: "https://www.asio4all.org/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/equalizer-apo-peace-aumentar-passos-fps",
            title: "Equalizer",
            description: "Improve your sound."
        },
        {
            href: "/guides/obs-studio-gravacao-replay-buffer-av1",
            title: "OBS",
            description: "Audio syncing."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
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

