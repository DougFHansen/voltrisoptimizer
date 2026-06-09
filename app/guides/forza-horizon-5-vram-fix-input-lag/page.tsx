import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'forza-horizon-5-vram-fix-input-lag',
    title: "Forza Horizon 5 (2026): VRAM Fix, Missing Textures, and Steering Wheel",
    description: "Do ground textures disappear after an hour of playing? Learn how to fix VRAM leakage, configure steering wheel Force Feedback, and optimize Ray Tracing.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Forza Horizon 5 Tuning (2026): Graphics and Steering Wheel";
const description = "FH5 is the king of arcades but suffers from 'Texture Streaming' on 8GB VRAM cards. Let's adjust the settings to avoid the invisible map bug.";

const keywords = [
    'forza horizon 5 textures disappearing fix pc',
    'fh5 vram usage warning disable',
    'volante g29 force feedback fraco forza',
    'ray tracing forza horizon 5 gameplay',
    'environmental texture quality extreme bug',
    'input lag steering wheel forza horizon 5',
    'tessellation quality performance fh5',
    'dlss vs dlaa forza 5',
    'voltris optimizer playground games',
    'fix crash at initial logo forza'
];

export const metadata: Metadata = createGuideMetadata('forza-horizon-5-vram-fix-input-lag', title, description, keywords);

export default function ForzaGuide() {
    const summaryTable = [
        { label: "Environment Textures", value: "High (NOT Extreme)" },
        { label: "Geometry", value: "High" },
        { label: "Shadows", value: "High" },
        { label: "Ray Tracing", value: "Car Only / Off" },
        { label: "MSAA", value: "2x" },
        { label: "Resolution Scaling", value: "DLSS Quality" },
        { label: "Steering Wheel", value: "Inverted FFB (Sometimes)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The (Extreme) Texture Bug",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The "Extreme" environmental texture preset requires more than 10GB of VRAM. If you have an RTX 3070/4060 (8GB), the game runs smoothly initially, but after 30 minutes, the ground becomes transparent.
        </p>
      `
        },
        {
            title: "Chapter 1: Environment Texture Quality (Critical)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Keep it on HIGH or ULTRA</h4>
                <p class="text-gray-400 text-xs text-justify">
                    NEVER set it to Extreme unless you have 12GB+ of VRAM (RTX 3080 Ti, 4070, RX 6700 XT).
                    <br/>The visual difference is minimal when driving at 200km/h, but High ensures textures load instantly.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Ray Tracing (Audio and Visual)",
            content: `
        <p class="mb-4 text-gray-300">
            Forza now features in-game Ray Tracing (previously only in the garage).
            <br/>- <strong>Car Reflections:</strong> Looks beautiful but is heavy. Use it only if you have spare GPU power.
            <br/>- <strong>Audio Ray Tracing:</strong> Use it! The CPU calculates how the engine sound bounces off tunnel walls and canyons. Incredible and lightweight on modern CPUs.
        </p>
      `
        },
        {
            title: "Chapter 3: Steering Wheel Input Lag (G29/G920)",
            content: `
        <p class="mb-4 text-gray-300">
            Does the car feel like it's "floating"?
            <br/>In Advanced Controller Settings:
            <br/>- <strong>Vibration:</strong> OFF.
            <br/>- <strong>Center Spring Scale:</strong> 0 or Low. This is artificial force that interferes with real physical Force Feedback.
            <br/>- <strong>Deadzone:</strong> Inside 0, Outside 100.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DLSS, FSR, and TAA",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>TAA (Native):</strong> Blurry in motion. Best to avoid.
            - <strong>MSAA 2x:</strong> Classic and sharp, but results in aliasing on tree foliage.
            - <strong>DLSS Quality:</strong> The best modern option. Removes aliasing on foliage better than MSAA and increases FPS.
            - <strong>DLAA:</strong> Use if you have GPU power to spare. It's DLSS running at native resolution (no upscaling) for maximum image quality.
        </p>
      `
        },
        {
            title: "Chapter 5: Tessellation and Deformation",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Environment Geometry:</strong> High.
            - <strong>Deformable Terrain Quality:</strong> High/Ultra.
            <br/>This affects tire tracks in mud and sand. It's part of the game's charm, so try to keep it high.
        </p>
      `
        },
        {
            title: "Chapter 6: SSAO (Sombreamento)",
            content: `
        <p class="mb-4 text-gray-300">
            Use <strong>High</strong>.
            <br/>SSAO adds depth to wheels and bumpers. On Low, the car looks like it's not touching the ground (floating).
        </p>
      `
        },
        {
            title: "Chapter 7: Night Shadows",
            content: `
        <p class="mb-4 text-gray-300">
            Usually, "Night Shadows" can be turned off.
            <br/>You rarely notice shadows cast by other cars' headlights during fast night races. Turning it off can significantly boost FPS during night High/Ultra settings.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Online Mode (Convoy Lag)",
            content: `
            <p class="mb-4 text-gray-300">
                If friends' cars are "jumping" or disappearing:
                <br/>This is often a Teredo IPsec problem in Windows.
                <br/>Go to Settings > Gaming > Xbox Networking and click "Fix it". Alternatively, use Voltris Optimizer to reset the Teredo service.
            </p>
            `
        },
        {
            title: "Chapter 9: FPS Cap (Stability)",
            content: `
            <p class="mb-4 text-gray-300">
                For racing games, framepacing > frame rate.
                <br/>It's better to play locked at a solid 72 FPS than to oscillate between 90 and 110. The sensation of speed feels more consistent.
            </p>
            `
        },
        {
            title: "Chapter 10: HDD Loading",
            content: `
            <p class="mb-4 text-gray-300">
                If you drive at 300km/h with the game on an HDD, it will likely pause and show "Low streaming bandwidth".
                <br/>Install it on an SSD.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does the game crash at the initial logo?",
            answer: "This is usually a conflict with overlays (Afterburner, Discord) or antivirus software. Add an exclusion and close your overlays."
        },
        {
            question: "Logitech wheel not vibrating?",
            answer: "Requires Logitech G Hub to be open BEFORE launching the game. If opened after, the game may not catch the driver correctly."
        },
        {
            question: "Does it work with 8GB of RAM?",
            answer: "Yes, it is very well optimized, but be sure to close your browser."
        }
    ];

    const externalReferences = [
        { name: "Forza Support (Known Issues)", url: "https://support.forzamotorsport.net/" },
        { name: "Logitech G Hub", url: "https://www.logitechg.com/en-us/innovation/g-hub.html" }
    ];

    const relatedGuides = [
        {
            href: "/guias/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Avoids streaming bandwidth errors."
        },
        {
            href: "/guias/controle-ps4-ps5-overclock-ds4windows",
            title: "Controller (Gamepad)",
            description: "For those without a steering wheel."
        },
        {
            href: "/guias/hdr-windows-11-calibracao-jogos",
            title: "HDR",
            description: "Forza has near-perfect native HDR."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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
