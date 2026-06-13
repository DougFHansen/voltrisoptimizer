import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'euro-truck-simulator-2-otimizacao-aa-promods',
    title: "Euro Truck Simulator 2 (2026): Optimization, Anti-Aliasing, and ProMods",
    description: "ETS2 is lightweight, but the native aliasing is notoriously poor. Learn how to use Snowymoon TAA or NPI for a smooth image and optimize for ProMods and TruckersMP.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "ETS2 / ATS (2026): Smooth Visuals and Convoy Optimization";
const description = "The Prism3D engine is aging. Native Anti-Aliasing (SMAA) is often ineffective and creates blur. We solve this with modern TAA injection.";

const keywords = [
    'ets2 snowymoon taa installation guide 2026',
    'truckersmp lag fix kirkenes calais duisburg',
    'promods ets2 performance optimization guide',
    'euro truck simulator 2 nvidia profile inspector aa setup',
    'best graphics settings for ets2 1.50 plus',
    'mirror distance ets2 fps drop fix',
    'rendering scale 400 percent vs taa',
    'voltris optimizer scs software engine',
    'ats american truck simulator fps boost'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('euro-truck-simulator-2-otimizacao-aa-promods', title, description, keywords, locale);
}

export default function ETS2Guide() {
    const summaryTable = [
        { label: "Anti-Aliasing", value: "Snowymoon TAA (Plugin)" },
        { label: "Scaling (With TAA)", value: "100%" },
        { label: "Scaling (No TAA)", value: "400%" },
        { label: "Mirrors", value: "Medium (Heavy Tax)" },
        { label: "Vegetation", value: "High (Essentials)" },
        { label: "Traffic Density", value: "1.0 (Standard)" },
        { label: "TruckersMP", value: "Disable Player Tags" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Scaling Dilemma",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Natively, to eliminate the aliasing (jagged edges) on power lines and truck grilles, users often push \"Scaling\" to 400%. This effectively renders the game at 4K or 8K internally, which crushes FPS on mid-range hardware. 
        </p>
      `
        },
        {
            title: "Chapter 1: Snowymoon TAA (The Ultimate Fix)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Modernizing the Engine</h4>
                <p class="text-gray-400 text-xs text-justify">
                    The modder Snowymoon created a plugin that injects high-quality TAA (Temporal Anti-Aliasing) into the game loop.
                    <br/>1. Download the <code>dxgi.dll</code> from the official Snowymoon repository.
                    <br/>2. Place it in the game's <code>bin\\win_x64</code> directory.
                    <br/>3. In-game, set Scaling to 100% and DISABLE native SMAA.
                    <br/>Result: A perfectly smooth image with zero shimmering and doubled performance compared to 400% supersampling.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Optimizing Mirrors",
            content: `
        <p class="mb-4 text-gray-300">
            Mirrors essentially force the game to re-render the entire world multiple times.
            <br/>- <strong>Mirror Quality:</strong> Medium (High processes redundant HD reflections).
            <br/>- <strong>Mirror Resolution:</strong> Medium.
            <br/>- <strong>Mirror Distance:</strong> Medium. Seeing traffic 1km behind is unnecessary and creates significant CPU/GPU overhead.
        </p>
      `
        },
        {
            title: "Chapter 3: Environmental Light and Shadows",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Vegetation Detail:</strong> High (Since this is the majority of your visual field).
            - <strong>Grass Density:</strong> Low/Medium. High density on roadsides is a performance killer.
            - <strong>Shadow Quality:</strong> Medium (The soft shadows from the TAA plugin compensate for lower resolution).
            - <strong>Light Visibility Ranges:</strong> Medium.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: TruckersMP (Multiplayer Stability)",
            content: `
        <p class="mb-4 text-gray-300">
            When navigating crowded hubs like Kirkenes or the Calais-Duisburg road:
            <br/>- Open TruckersMP settings (Tab > Cog icon):
            <br/>- Disable <strong>\"Load Cabin Accessories\"</strong> for other players.
            <br/>- Disable <strong>\"Player Tags\"</strong> (Floating names).
            <br/>- Reduce \"Draw Distance\" for other trucks.
            <br/>This is the only way to maintain playable frame rates when 100+ trucks are on screen simultaneously.
        </p>
      `
        },
        {
            title: "Chapter 5: ProMods (The Massive Map Expansion)",
            content: `
        <p class="mb-4 text-gray-300">
            ProMods adds extreme detail to cities. If you experience stuttering when crossing borders:
            <br/>Use the launch parameter <code>-mm_pool_size 4000</code> or higher (roughly half your total RAM). This allocates more system memory for the map cache.
            <br/>Ensure you generate the ProMods \"Def File\" with \"Draw Distance\" set to standard instead of High if you have a mid-range PC.
        </p>
      `
        },
        {
            title: "Chapter 6: Developer Console Commands",
            content: `
        <p class="mb-4 text-gray-300">
            Enable the console by editing <code>config.cfg</code> (set <code>g_developer</code> and <code>g_console</code> to 1).
            <br/>Useful commands:
            <br/><code>warp 0.8</code> (Slightly slows game time for more realistic physics/weight feel).
            <br/><code>g_traffic 0</code> (Instantly clears AI traffic if performance becomes too heavy).
        </p>
      `
        },
        {
            title: "Chapter 7: Force Feedback (FFB) Tuning",
            content: `
        <p class="mb-4 text-gray-300">
            FFB physics shifted significantly in version 1.42 and beyond.
            <br/>Set \"High Speed Centering Force\" to a low value.
            <br/>Increase \"Engine Resonance\" to feel the characteristic diesel vibrations through your steering wheel.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Online Radio and Resource Usage",
            content: `
            <p class="mb-4 text-gray-300">
                Streaming online radio in-game consumes CPU cycles.
                <br/>If your CPU is at its limit (95%+), you will hear audio crackling. Use external Spotify or local MP3 files to minimize the processing load.
            </p>
            `
        },
        {
            title: "Chapter 9: Official Convoy Mode",
            content: `
            <p class="mb-4 text-gray-300">
                This mode is far more optimized than TruckersMP but limited to 8-10 players.
                <br/>AI traffic is synchronized. If the host has a weak CPU, traffic will appear to lag for everyone. Always designate the player with the best processor as the session host.
            </p>
            `
        },
        {
            title: "Chapter 10: Head Tracking for Immersion",
            content: `
            <p class="mb-4 text-gray-300">
                If you don't use VR, try a webcam with <strong>OpenTrack</strong> (Neuralnet tracker).
                <br/>The ability to check mirrors by physically turning your head increases immersion and prevents intersection accidents. CPU cost is minimal (2-3%).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does the TAA Mod cause bans on TruckersMP?",
            answer: "No. It is fully permitted and widely used by the veteran community to fix the game's shimmering issues."
        },
        {
            question: "Why does my game take 10 minutes to load?",
            answer: "The first time you launch after a driver update or map install, the game reconstructs its Navigation Cache (Nav Cache). Be patient; subsequent loads will be much faster (especially on an SSD)."
        },
        {
            question: "How do I run the game in VR?",
            answer: "Add `-openvr` to your Steam launch options and ensure you are on the 'oculus' beta branch in the Steam game properties. Be aware: VR is highly taxing in ETS2."
        }
    ];

    const externalReferences = [
        { name: "SnowyMoon TAA GitHub Repository", url: "https://github.com/snowymoon/EuroTruckSimulator2-TAA" },
        { name: "ProMods Official Site", url: "https://promods.net/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-ultrawide-jogos-competitivos",
            title: "Ultrawide Guide",
            description: "The ideal setup for truck cabin immersion."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Speed",
            description: "Fixing long map loading and texture streaming."
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
