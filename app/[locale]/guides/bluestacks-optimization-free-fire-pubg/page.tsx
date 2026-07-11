import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'bluestacks-otimizacao-free-fire-pubg',
    title: "Free Fire and PUBG Mobile: The Perfect BlueStacks Configuration (2026)",
    description: "Want to get easy headshots? Learn how to configure Y Sensitivity, Smart Controls, and lock in 90 FPS to dominate the emulator lobby.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Free Fire and PUBG: Competitive Optimization (2026)";
const description = "Playing on an emulator gives an advantage, but only if configured correctly. If your aim shakes or the game freezes in the 'bubble', you will lose. This is the pro player's guide.";

const keywords = [
    'y sensitivity free fire blueStacks 5 emulator',
    'pubg mobile 90 fps emulator config',
    'smart controls failing bluestacks',
    'best mouse dpi for free fire emulator',
    'how to stretch resolution free fire emulator',
    'custom hud emulator layout'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('bluestacks-otimizacao-free-fire-pubg', title, description, keywords, locale);
}

export default function GameConfigGuide() {
    const summaryTable = [
        { label: "Game", value: "Free Fire / PUBG Mobile" },
        { label: "Target FPS", value: "90 (Smooth)" },
        { label: "Graphics", value: "Smooth / High FPS" },
        { label: "Y Sensitivity", value: "Higher than X (Easy headshots)" },
        { label: "Mouse DPI", value: "800 or 1000 (Pro Standard)" },
        { label: "Mode", value: "Shooting Mode (F1)" }
    ];

    const contentSections = [
        {
            title: "In-Game Configuration (The Secret)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          It doesn't matter if you have a NASA PC if you set your graphics to Ultra. Professional players use <strong>Smooth</strong> settings to see enemies better (without shadows and grass) and get maximum FPS.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-orange-900/10 p-4 rounded-lg border border-orange-500/20">
                <h4 class="text-orange-400 font-bold mb-2">Free Fire Max</h4>
                <ul class="list-disc ml-4 text-sm text-gray-300">
                    <li><strong>Graphics:</strong> Smooth.</li>
                    <li><strong>High FPS:</strong> HIGH (This unlocks 60/90fps).</li>
                    <li><strong>Shadow:</strong> Off.</li>
                    <li><strong>Minimap:</strong> Rotating.</li>
                </ul>
            </div>
            <div class="bg-yellow-900/10 p-4 rounded-lg border border-yellow-500/20">
                <h4 class="text-yellow-400 font-bold mb-2">PUBG Mobile</h4>
                <ul class="list-disc ml-4 text-sm text-gray-300">
                    <li><strong>Graphics:</strong> Smooth.</li>
                    <li><strong>Frame Rate:</strong> 90 fps (If available) or Extreme.</li>
                    <li><strong>Style:</strong> Colorful (Helps spot enemies in grass).</li>
                    <li><strong>Anti-aliasing:</strong> Off.</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "Aim Mechanics: X and Y Sensitivity",
            content: `
        <p class="mb-4 text-gray-300">
          In BlueStacks, open the Controls Editor (Keyboard on side) > Right-click the "Aim" icon (F1).
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li><strong>X Sensitivity (Horizontal):</strong> Keep between 1.0 and 1.5. You want to turn fast but with control.</li>
            <li><strong>Y Sensitivity (Vertical):</strong> This is the secret to easy headshots. Keep it between <strong>1.8 and 2.5</strong>.
                <br/><span class="text-xs text-green-400 ml-6">Why? Moving the crosshair up to the head requires less physical mouse movement, making the aim "stick" to the head more easily.</span></li>
            <li><strong>Tweaks:</strong> Use <code>16450</code> or <code>21058</code> (BlueStacks mouse adjustment hex values that reduce acceleration and 360-spin bugs).</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Stretch Resolution",
            content: `
        <h4 class="text-white font-bold mb-3">Larger Hitbox = More Kills</h4>
        <p class="mb-4 text-gray-300">
            Many pros use square resolutions (e.g., 1280x1024) stretched to fill a 16:9 monitor.
            <br/>This makes characters appear "fatter", making it easier to land hits.
            <br/><strong>How to do it:</strong>
            <br/>1. In the NVIDIA/AMD Control Panel, create a custom resolution (e.g., 1440x1080).
            <br/>2. In BlueStacks > Display > Custom Resolution > 1440x1080.
            <br/>3. The game will look odd in the menu, but in-game it's pure advantage.
        </p>
      `
        },
        {
            title: "Smart Controls",
            content: `
        <p class="mb-4 text-gray-400">
            BlueStacks uses AI to know if you're in the map, looting, or shooting.
            <br/>Sometimes it bugs after a game update.
            <br/><strong>Solution:</strong> If the glue wall or loot key stops working, open the controls editor > "Update Controls" (cloud icon). The BS team updates profiles within hours of accurate game updates.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Mouse DPI Tips",
            content: `
        <h4 class="text-white font-bold mb-3">800 vs 1600 DPI</h4>
        <p class="mb-4 text-gray-300">
            Emulators suffer from "Pixel Skipping" if DPI is too low with high in-game sensitivity.
            <br/>Recommendation: Use <strong>1000 DPI</strong> on the mouse and adjust the sensitivity within the emulator to be comfortable. Avoid extreme DPI settings (400 or 4000).
        </p>
      `
        }
    ];

    const faqItems = [
        {
            question: "The game crashed on its own.",
            answer: "Usually, it's due to lack of allocated RAM. Allocate 4GB in the emulator. If it continues, change the graphics renderer from OpenGL to DirectX or vice versa."
        },
        {
            question: "Can I get banned for 'Use of Third-Party Software'?",
            answer: "Never use 'No Recoil' macros or scripts that alter game files. BlueStacks itself is allowed, but cheating scripts result in bans. Use only native keymapping functions."
        },
        {
            question: "Which key to use for Suspend (Release Mouse)?",
            answer: "Most use <strong>X</strong>, <strong>F1</strong>, or <strong>Ctrl</strong>. Choose one that doesn't interfere with your movement (WASD). Suspend the mouse every 5 seconds to reset the sensor and avoid the analog stick stick bug."
        }
    ];

    const externalReferences = [
        { name: "BlueStacks X and Y Config", url: "https://support.bluestacks.com/hc/en-us/articles/360058920952-How-to-adjust-mouse-sensitivity-on-BlueStacks-5" },
        { name: "Mouse DPI Analyzer", url: "https://www.mouse-sensitivity.com/dpianalyzer/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/bluestacks-ldplayer-otimizacao-free-fire-120fps",
            title: "Optimize BlueStacks",
            description: "Start here if it's lagging."
        },
        {
            href: "/guides/reduzir-input-lag-teclado-mouse",
            title: "Input Lag",
            description: "Reduce click delay."
        },
        {
            href: "/guides/network-throttling-index-ping-jogos",
            title: "Low Ping",
            description: "How to improve connection."
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
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}
