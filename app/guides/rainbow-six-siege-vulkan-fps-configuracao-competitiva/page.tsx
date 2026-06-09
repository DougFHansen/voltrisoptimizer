import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rainbow-six-siege-vulkan-fps-configuracao-competitiva',
    title: "Rainbow Six Siege (2026): Competitive Setup and Vulkan Guide",
    description: "The ultimate Rainbow Six Siege guide. Compare Vulkan vs DX11, master NVIDIA Reflex, and perfect your T-AA Sharpness to spot enemies through distant pixels.",
    category: 'optimization',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "R6 Siege Pro Settings: Visibility and FPS";
const description = "In Rainbow Six Siege, every pixel matters. Learn how to configure Vulkan for maximum stability, adjust T-AA for perfect clarity, and calibrate your FOV and Aspect Ratio like the pros.";

const keywords = [
    'rainbow six siege vulkan vs dx11 performance',
    'best r6 siege graphics settings 2026',
    't-aa sharpness render scaling settings',
    'nvidia reflex low latency r6',
    'aspect ratio 4:3 vs 16:9 r6',
    'raw input mouse multiplier r6',
    'voltris optimizer fps boost r6',
    'r6 audio night mode vs hi-fi'
];

export const metadata: Metadata = createGuideMetadata('rainbow-six-siege-vulkan-fps-configuracao-competitiva', title, description, keywords);

export default function R6Guide() {
    const summaryTable = [
        { label: "API", value: "Vulkan (Less stuttering)" },
        { label: "Anti-Aliasing", value: "T-AA (Required)" },
        { label: "Render Scale", value: "85% - 100%" },
        { label: "Sharpness", value: "50% - 100%" },
        { label: "NVIDIA Reflex", value: "On + Boost" },
        { label: "Aspect Ratio", value: "4:3 (Stretched) / 16:10" },
        { label: "Audio Profile", value: "Night Mode (Dynamic Range)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Vulkan vs. DX11",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Rainbow Six Siege offers two launch APIs.
          <br/><strong>Vulkan:</strong> Features superior VRAM and CPU management, leading to fewer FPS drops. It also supports NVIDIA Reflex. HIGHLY RECOMMENDED.
          <br/><strong>DX11:</strong> Can feel less stable in terms of framerate, though some players prefer the specific mouse "feel." In 2026, Vulkan is superior in 90% of scenarios.
        </p>
      `
        },
        {
            title: "Chapter 1: Graphics for Clean Vision",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Visual Quality Settings</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Texture Quality:</strong> Medium. High textures consume significant VRAM without providing a competitive advantage.
                    - <strong>Texture Filtering:</strong> Anisotropic 16x.
                    - <strong>LOD Quality:</strong> Ultra/High. Crucial for rendering enemy heads through distant gaps and frestas.
                    - <strong>Shading Quality:</strong> Low. Makes operators more visible by removing distracting highlights.
                    - <strong>Shadow Quality:</strong> Medium. Essential for spotting dynamic enemy shadows before they peek.
                    - <strong>Reflection Quality:</strong> Low.
                    - <strong>Lens Effects / Zoom-in Depth of Field:</strong> OFF. Both introduce visual clutter that hinders performance.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Anti-Aliasing (The Competitive Secret)",
            content: `
        <p class="mb-4 text-gray-300">
            While most competitive players disable AA in FPS games, doing so in Siege results in shimmering pixels that are distracting at long angles.
            <br/>Most pro players now use <strong>T-AA</strong>.
            <br/>- <strong>Render Scale:</strong> Ideally 100%. If you need more FPS, lower it to 85% or 90%.
            <br/>- <strong>T-AA Sharpness:</strong> Increase to 50% - 100%. This reclaims the clarity lost to T-AA's native blur.
            <br/>The Result: A clean, stable, and sharp image.
        </p>
      `
        },
        {
            title: "Chapter 3: Aspect Ratio and FOV",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>4:3:</strong> Makes models appear wide or \"fat,\" theoretically making them easier to headshot. It reduces peripheral vision but is the favorite for entry-fraggers.
            - <strong>16:10:</strong> A solid middle ground.
            - <strong>16:9:</strong> The standard aspect ratio for best peripheral awareness.
            - <strong>FOV:</strong> 90 (Maximum). A classic pro combination is 4:3 with 90 FOV.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Audio Optimization (Night Mode)",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Audio > Dynamic Range.
            <br/>Select <strong>Night Mode</strong>.
            <br/>This setting compresses the audio range: loud sounds (explosions) are lowered, while quiet sounds (footsteps) are raised.
            <br/>In Hi-Fi mode, a nearby grenade might deafen you to a flanker's footsteps. Night Mode ensures you hear both.
        </p>
      `
        },
        {
            title: "Chapter 5: NVIDIA Reflex (Latency Reduction)",
            content: `
        <p class="mb-4 text-gray-300">
            Only available when using the Vulkan API.
            <br/>Enable <strong>On + Boost</strong>.
            <br/>This maintains high clock speeds and minimizes the pre-rendered frame queue, significantly reducing input lag.
        </p>
      `
        },
        {
            title: "Chapter 6: Raw Input",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Controls > Raw Input - Mouse / Keyboard and set it to <strong>ON</strong>.
            <br/>This reads mouse data directly from the driver, bypassing Windows mouse acceleration entirely.
        </p>
      `
        },
        {
            title: "Chapter 7: Mouse Multiplier Fine-Tuning",
            content: `
        <p class="mb-4 text-gray-300">
            If you find a sensitivity of 4 too slow and 5 too fast, you can edit your <code>GameSettings.ini</code> file (found in Documents/My Games/Rainbow Six).
            <br/>Changing <code>MouseSensitivityMultiplierUnit=0.02</code> to <code>0.002</code> allows for much more precise decimal adjustments to your sensitivity.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Using the Benchmark Tool",
            content: `
            <p class="mb-4 text-gray-300">
                Siege features an excellent built-in benchmark.
                <br/>Run it after every major setting change. Pay attention to the \"Minimum FPS\" (1% lows)—the game should ideally stay above your monitor's refresh rate even during explosions.
            </p>
            `
        },
        {
            title: "Chapter 9: Optic Color for Accessibility",
            content: `
            <p class="mb-4 text-gray-300">
                Check the Accessibility menu.
                <br/>Change your Optic Color to a high-contrast hue. Violet, Neon Green, or Turquoise are popular choices, as the default red can often blend into blood spatters or red carpets.
            </p>
            `
        },
        {
            title: "Chapter 10: Forcing the Data Center",
            content: `
            <p class="mb-4 text-gray-300">
                If the game connects you to the wrong region:
                <br/>Edit your <code>GameSettings.ini</code> file.
                <br/>Locate <code>DataCenterHint=default</code> and change it to your preferred region, such as <code>playfab/brazilsouth</code> or <code>playfab/useast</code>.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is DLSS worth using in Siege?",
            answer: "For competitive play, generally no. DLSS can introduce ghosting and a slight blur during fast movement that can obscure enemies during \"pixel peeks.\" Use T-AA with a slightly lower Render Scale if you need more FPS."
        },
        {
            question: "Why does the audio sound muffled?",
            answer: "Siege simulates real sound propagation (sound travels through holes rather than just through walls). Creating \"Sound Holes\" in walls with melee or bullets can significantly improve your situational awareness."
        }
    ];

    const externalReferences = [
        { name: "R6Fix (Report Bugs)", url: "https://r6fix.ubi.com/" },
        { name: "ProSettings R6 List", url: "https://prosettings.net/rainbow-6-siege-pro-settings-gear-list/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/overwatch-2-otimizacao-fps-input-lag-reduce-buffering",
            title: "Overwatch 2",
            description: "Competitive FPS optimization."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Valorant Guide",
            description: "Latency and FPS fixes."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
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

