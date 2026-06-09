import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'monitor-240hz-360hz-vale-a-pena-ghosting',
    title: "240Hz/360Hz Monitors (2026): Configuration, Overdrive, and Ghosting",
    description: "Did you buy a high-refresh monitor only for the image to look blurry? Learn how to set the correct Overdrive, enable maximum Hz in Windows, and test for Ghosting (UFO Test).",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Pro Monitor Setup (2026): Zero Ghosting";
const description = "Having 360Hz means nothing if the pixels are slow to change color (Ghosting) or if you have excessive Overshoot (Inverse Ghosting). Calibrate your monitor for total motion clarity.";

const keywords = [
    'monitor 240hz vs 144hz difference worth it',
    'ufo test ghosting fix overdrive settings',
    'elmb sync vs g-sync input lag',
    'dyac+ benq zowie settings valorant',
    'monitor flickering 240hz displayport cable',
    'inverse ghosting corona artifacts',
    'best overdrive normal fast extreme',
    'voltris optimizer display',
    'icc profile color calibration'
];

export const metadata: Metadata = createGuideMetadata('monitor-240hz-360hz-vale-a-pena-ghosting', title, description, keywords);

export default function MonitorGuide() {
    const summaryTable = [
        { label: "Windows Hz", value: "Verify (Advanced Display)" },
        { label: "Overdrive", value: "Normal / Fast (Never Extreme)" },
        { label: "G-Sync", value: "ON (Casual) / OFF (Pro)" },
        { label: "ELMB/DyAc", value: "ON (Motion Clarity)" },
        { label: "Cable", value: "DisplayPort 1.4" },
        { label: "Gamma", value: "2.2" },
        { label: "Digital Vibrance", value: "70% (Colors)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Hertz vs. Pixel Response",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Hertz (Hz) measures how many times the screen refreshes per second. Pixel Response is the speed at which a pixel can change color. If your screen refreshes quickly (360Hz) but the pixels are slow (as seen in cheap IPS panels), you will experience a blurry trail behind moving objects. Overdrive is the setting designed to fix this.
        </p>
      `
        },
        {
            title: "Chapter 1: Configuring Hz in Windows",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Common Mistake</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Nearly 50% of gamers purchase a 240Hz monitor but continue using it at 60Hz for years.
                    <br/>Navigate to Settings > System > Display > Advanced Display.
                    <br/>Ensure the Refresh Rate is set to the maximum possible value.
                    <br/>If the maximum Hz doesn't appear, you might be using an outdated HDMI cable. Always use the <strong>DisplayPort</strong> cable included in the box.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Overdrive (Trace Free / Response Time)",
            content: `
        <p class="mb-4 text-gray-300">
            In your monitor's physical On-Screen Display (OSD) menu:
            <br/>Look for settings labeled \"Overdrive,\" \"Response Time,\" or \"Trace Free.\"
            <br/>Avoid the MAXIMUM setting (Extreme/Fastest). This often causes <strong>Inverse Ghosting</strong> (an ugly, glowing white trail).
            <br/>Typically, the middle setting (\"Fast\" or \"Normal\") provides the best balance.
            <br/>Test various settings at <strong>testufo.com</strong> to see which makes the UFOs appear sharpest.
        </p>
      `
        },
        {
            title: "Chapter 3: DyAc / ELMB (Black Frame Insertion)",
            content: `
        <p class="mb-4 text-gray-300">
            \"Strobing\" technologies (like BenQ Zowie DyAc or Asus ELMB) strobe the backlight between frames.
            <br/>This results in incredibly clear motion, reminiscent of old-school CRT monitors.
            <br/>Trade-off: Screen brightness usually drops by about 50%.
            <br/>For games like CS2 or Valorant, the improved clarity while turning the camera is invaluable.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: G-Sync/FreeSync vs. Input Lag",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>G-Sync On:</strong> Smooth image with no screen tearing. Adds approx. ~1ms of input lag (if configured correctly with a -3 FPS cap).
            - <strong>G-Sync Off:</strong> Provides the absolute minimum raw latency, though screen tearing will occur. Professionals typically prefer OFF.
            <br/>At 360Hz, tearing is virtually invisible, so turning it OFF is often preferred.
            <br/>At 144Hz, you might find G-Sync ON more beneficial.
        </p>
      `
        },
        {
            title: "Chapter 5: Color Calibration (ICC)",
            content: `
        <p class="mb-4 text-gray-300">
            Gaming monitors often come with washed-out colors.
            <br/>Download an ICC profile for your specific model from sites like Rtings or TFTCentral.
            <br/>Apply it in Windows \"Color Management.\"
            <br/>For competitive games, increase <strong>Digital Vibrance</strong> (NVIDIA) or <strong>Saturation</strong> (AMD) to 70-80% to make enemies stand out better.
        </p>
      `
        },
        {
            title: "Chapter 6: Black Equalizer / Shadow Boost",
            content: `
        <p class="mb-4 text-gray-300">
            This function brightens dark areas without overexposing light ones.
            <br/>It's fantastic for spotting campers in dark corners in games like COD or Tarkov.
            <br/>It is poor for movies as it turns blacks into gray. Enable it only for gaming.
        </p>
      `
        },
        {
            title: "Chapter 7: 24.5\" vs. 27\" Monitors",
            content: `
        <p class="mb-4 text-gray-300">
            For competitive 1080p play, 24.5 inches is considered the limit. 1080p on a 27-inch screen can look pixelated (lower PPI), making it harder to track heads at a distance.
            <br/>For 1440p (QHD), 27 inches is the ideal size.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Panel Types (IPS vs. TN vs. OLED)",
            content: `
            <p class="mb-4 text-gray-300">
                - <strong>TN:</strong> Fastest response times, but poor colors and viewing angles. (Old school choice).
                - <strong>IPS:</strong> Beautiful colors and good speeds. (The 2026 standard).
                - <strong>OLED:</strong> Instant speeds (0.03ms) and infinite contrast. It's the best available, but expensive and prone to burn-in with static HUDs.
            </p>
            `
        },
        {
            title: "Chapter 9: Screen Cleaning",
            content: `
            <p class="mb-4 text-gray-300">
                Use only a microfiber cloth slightly dampened with distilled water. NEVER use alcohol or window cleaner, as they can strip the anti-reflective coating.
            </p>
            `
        },
        {
            title: "Chapter 10: CRU (Custom Resolution Utility)",
            content: `
            <p class="mb-4 text-gray-300">
                If your monitor allows it, you can sometimes overclock the refresh rate (e.g., from 144Hz to 165Hz) using CRU. The risk is low, but you must test for stability.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does HDMI support 240Hz?",
            answer: "Only HDMI 2.0 or 2.1. Standard HDMI 1.4 is capped at 120Hz or 144Hz depending on the resolution. DisplayPort is always the safer choice for PC gaming."
        },
        {
            question: "What should I do about a Dead Pixel?",
            answer: "You can try applying light pressure with a soft cloth (massaging the area) or running a flashing-pixel video (Warning: Epilepsy) for about an hour. Sometimes, the pixel can be \"unstuck.\""
        }
    ];

    const externalReferences = [
        { name: "TestUFO (Ghosting Test)", url: "https://www.testufo.com/" },
        { name: "Rtings (ICC Profiles)", url: "https://www.rtings.com/monitor" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Settings",
            description: "G-Sync setup and optimization."
        },
        {
            href: "/guides/hdr-windows-11-calibracao-jogos",
            title: "HDR Calibration",
            description: "Better colors in Windows."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

