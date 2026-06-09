import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'mouse-otimizacao-windows-precisao',
    title: "Mouse Optimization (2026): Acceleration, Polling Rate, and MarkC Fix",
    description: "Does your mouse feel floaty or miss targets? It might be Windows Mouse Acceleration. Complete guide to removing acceleration and tuning DPI/Hz for eSports.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "1:1 Mouse Precision (2026): Zero Acceleration Guide";
const description = "To develop consistent muscle memory, your cursor movement must be identical to your physical hand movement regardless of speed (1:1 tracking). Standard Windows settings interfere with this by default.";

const keywords = [
    'enhance pointer precision on or off competitive gaming',
    'markc mouse fix windows 11 download guide',
    '1000hz vs 4000hz polling rate cpu usage impact',
    'windows mouse acceleration fix guide 2026',
    'best dpi for valorant and cs2 pros',
    'raw input mouse settings explained',
    'voltris optimizer input lag reduction',
    'logitech g hub competitive mouse setup'
];

export const metadata: Metadata = createGuideMetadata('mouse-otimizacao-windows-precisao', title, description, keywords);

export default function MouseGuide() {
    const summaryTable = [
        { label: "Enhance Precision", value: "DISABLE (OFF)" },
        { label: "Pointer Speed", value: "6/11 (Middle Notch)" },
        { label: "Polling Rate", value: "1000Hz (Stable Gold Standard)" },
        { label: "DPI Range", value: "400 / 800 / 1600" },
        { label: "Raw Input", value: "ON (In-Game Settings)" },
        { label: "MarkC Fix", value: "Apply via Registry" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Enemy (EPP)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          \"Enhance Pointer Precision\" (EPP) is a misleading name. In reality, it is a form of software acceleration. If you move your mouse quickly, the cursor travels further than if you moved the same physical distance slowly. This prevents your brain from accurately memorizing the physical distance required for precise flick shots.
        </p>
      `
        },
        {
            title: "Chapter 1: Critical Windows Configuration",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Control Panel > Mouse</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Open the \"Pointer Options\" tab.
                    <br/>2. <strong>UNCHECK</strong> \"Enhance pointer precision.\"
                    <br/>3. Ensure the speed slider is set exactly to <strong>6 out of 11</strong> (the middle notch).
                    <br/>If you change this to 5/11 or 7/11, Windows begins skipping pixels or interpolating data, destroying 1:1 sensor precision. Always adjust your final speed using your mouse's DPI settings or in-game sensitivity instead.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: MarkC Mouse Fix (Registry)",
            content: `
        <p class="mb-4 text-gray-300">
            Some legacy titles (and certain newer games in Windowed mode) still apply a hardcoded acceleration curve even when EPP is disabled in Windows.
            <br/>The <strong>MarkC Mouse Fix</strong> is a registry modification (.reg) that permanently removes the Windows acceleration curve, forcing a perfectly linear (1:1) input response.
            <br/>Ensure you apply the version corresponding to your display's scaling percentage (e.g., 100%, 125%, 150%).
        </p>
      `
        },
        {
            title: "Chapter 3: Polling Rate (Hz): 1000 vs. 4000 vs. 8000",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>1000Hz (1ms):</strong> The industry gold standard. Stable and light on CPU usage.
            - <strong>4000Hz/8000Hz:</strong> Provides a noticeably smoother cursor movement, but at the cost of EXTREME CPU utilization. On older or mid-range CPUs, high polling rates can cause in-game stuttering during rapid mouse movements.
            <br/>Recommendation: Stick to 1000Hz for maximum consistency unless you possess a top-tier modern processor (e.g., i9-14900K).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DPI (Dots Per Inch) Realities",
            content: `
        <p class="mb-4 text-gray-300">
            Myth: \"Higher DPI is always more precise.\"
            <br/>Fact: While higher DPI can reduce sensor input latency slightly, it also amplifies hand tremors (jitter).
            <br/>- <strong>400/800 DPI:</strong> The classic pro standard for games like CS2 and Valorant. Offers high stability for sweeping movements.
            <br/>- <strong>1600 DPI:</strong> The modern \"Sweet Spot.\" Lower latency than 800 DPI but still highly controllable with lower in-game sensitivity.
            <br/>- <strong>3200+ DPI:</strong> Generally unnecessary and may introduce unwanted sensor noise into your aiming.
        </p>
      `
        },
        {
            title: "Chapter 5: Raw Input Engine",
            content: `
        <p class="mb-4 text-gray-300">
            Always enable <strong>Raw Input</strong> (or same-named settings like \"Raw Mouse Input\") in your game options.
            <br/>This tells the game to read data directly from the mouse driver, bypassing Windows OS settings (like the 6/11 notch and EPP). It is the most reliable way to ensure aiming precision.
        </p>
      `
        },
        {
            title: "Chapter 6: Sensor and Surface Maintenance",
            content: `
        <p class="mb-4 text-gray-300">
            A single hair strand or dust particle on the sensor lens can cause your crosshair to spin toward the sky or freeze entirely.
            <br/>Regularly clean the sensor area with compressed air. Use a dry cotton swab if necessary.
            <br/>Periodically wash your mousepad. A build-up of skin oils and humidity changes the friction (glide) of the surface, negatively impacting your muscle memory over time.
        </p>
      `
        },
        {
            title: "Chapter 7: Upgrading Mouse Feet (Skates)",
            content: `
        <p class="mb-4 text-gray-300">
            Standard PTFE (Teflon) feet eventually wear out. If your mouse feels like it's dragging or scratching the pad, replace them with high-quality aftermarket skates (e.g., Tiger Arc, Corepad). A smooth, consistent glide is essential for micro-adjustments.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: USB Power Management",
            content: `
            <p class="mb-4 text-gray-300">
                Windows often disables inactive USB ports to save power.
                <br/>Go to Device Manager > Universal Serial Bus controllers > USB Root Hub > Power Management.
                <br/>Uncheck \"Allow the computer to turn off this device to save power.\" This prevents your mouse sensor from \"sleeping\" or disconnecting for critical milliseconds.
            </p>
            `
        },
        {
            title: "Chapter 9: Angle Snapping and Prediction",
            content: `
            <p class="mb-4 text-gray-300">
                In your mouse software (Logitech G Hub, Razer Synapse), ensure <strong>Angle Snapping</strong> is set to OFF.
                <br/>This feature attempts to force your movements into straight horizontal or vertical lines. In gaming, this effectively prevents you from making the organic diagonal micro-adjustments needed for headshots.
            </p>
            `
        },
        {
            title: "Chapter 10: Understanding eDPI",
            content: `
            <p class="mb-4 text-gray-300">
                To accurately compare sensitivity with other players, use eDPI:
                <br/>eDPI = Mouse DPI × In-game Sensitivity.
                <br/>Example: 800 DPI × 1.5 Sensitivity = 1200 eDPI.
                <br/>Use online eDPI converters when switching between games (e.g., from CS2 to Valorant) to maintain a consistent physical feel for your aim.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do wireless mice still have input lag?",
            answer: "In 2026, premium wireless mice (e.g., Logitech Superlight, Razer Viper V3) have latencies equal to or even lower than many wired alternatives. Modern 2.4GHz wireless protocols have virtually eliminated the lag gap."
        },
        {
            question: "Should I choose a Speed or Control mousepad?",
            answer: "Control pads (higher friction) are generally better for tactical shooters (Valorant/CS) where stopping power is needed for precise shots. Speed pads (low friction) are better for high-tracking games (Overwatch/Apex) where targets move rapidly."
        }
    ];

    const externalReferences = [
        { name: "MarkC Mouse Fix Official Info", url: "https://donewmouseaccel.blogspot.com/2010/03/markc-windows-7-mouse-acceleration-fix.html" },
        { name: "Advanced Mouse Sensitivity Converter", url: "https://www.mouse-sensitivity.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/mouse-acceleration-raw-accel-guia",
            title: "Raw Accel Setup",
            description: "Implementing customizable mouse acceleration."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Valorant Optimization",
            description: "Combining mouse precision with game performance."
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

