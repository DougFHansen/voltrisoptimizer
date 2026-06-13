import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'overwatch-2-melhores-configuracoes-fps',
    title: "Overwatch 2 (2026): Competitive FPS and Visibility Guide",
    description: "Eliminate Input Lag in OW2. Master Dynamic Render Scale, High Precision Mouse Input, and simulation settings optimized for Tracer and Genji mains.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '40 min'
};

const title = "Overwatch 2 Competitive Specs (2026): Input Lag and Render Scale";
const description = "Overwatch 2 is extremely fast-paced and chaotic. Any frame drops directly interfere with your tracking. Learn how to configure the game for maximum stability during intense team fights.";

const keywords = [
    'overwatch 2 fps boost 2026 settings',
    'dynamic render scale overwatch 2 on or off',
    'high precision mouse input ow2 guide',
    'nvidia reflex overwatch 2 boost mode',
    'overwatch 2 low shadow settings',
    'disable triple buffering overwatch 2',
    'reduce buffering overwatch 2 fix',
    'ow2 network simulation netgraph',
    'best overwatch 2 crosshair colors',
    'voltris optimizer overwatch profile'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('overwatch-2-melhores-configuracoes-fps', title, description, keywords, locale);
}

export default function OverwatchGuide() {
    const summaryTable = [
        { label: "Render Scale", value: "Custom (75% or 100%)" },
        { label: "Dynamic Render", value: "Off" },
        { label: "Frame Rate", value: "Custom (Cap at 300+)" },
        { label: "Buffering", value: "Reduce Buffering ON" },
        { label: "NVIDIA Reflex", value: "On + Boost" },
        { label: "Model Detail", value: "Low" },
        { label: "High Precision Input", value: "On" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Optimized Engine",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Overwatch 2 engine is one of the most well-optimized in the industry, scaling effectively across varied hardware. However, default configurations like \"Dynamic Render Scale\" can ruin your muscle memory by shifting resolution during combat.
        </p>
      `
        },
        {
            title: "Chapter 1: Essential Video Settings",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-orange-500 font-bold mb-1">Render Scale</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Custom (100%)</span></p>
                <p class="text-gray-400 text-xs">
                    Avoid using \"Automatic.\" The game will scale image quality dynamically, which can be distracting. Lock it at 100%, or drop to a fixed 75% if you require more FPS for a high-refresh monitor.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-orange-500 font-bold mb-1">Dynamic Render Scale</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-red-400">Off</span></p>
                <p class="text-gray-400 text-xs">
                   This causes fluctuations in input lag. Keep it disabled for a consistent aiming feel.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-orange-500 font-bold mb-1">NVIDIA Reflex</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">On + Boost</span></p>
                <p class="text-gray-400 text-xs">
                    Crucial for reducing total system latency. \"Boost\" mode keeps the GPU active to minimize response times.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Advanced Graphics and Visibility",
            content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Texture Quality</td>
                    <td class="py-2 text-yellow-400">Medium/High</td>
                    <td class="py-2">Textures have minimal FPS impact if you have 4GB+ VRAM. High helps in identifying specific hero skins quickly.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Texture Filtering</td>
                    <td class="py-2">8x - 16x</td>
                    <td class="py-2">Very low performance cost; keeps the ground sharp for better orientation.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Local Fog Detail</td>
                    <td class="py-2 text-red-400">Low</td>
                    <td class="py-2">Fog adds visual pollution. Low effectively removes it to maintain target clarity.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Dynamic Reflections</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Reflections are extremely taxing on FPS. Disable for competitive play.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Shadow Detail</td>
                    <td class="py-2 text-red-400">Off/Low</td>
                    <td class="py-2">Dynamic shadows are heavy. Most pros use Off to maximize raw framerate.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Model Detail</td>
                    <td class="py-2 text-yellow-400">Low</td>
                    <td class="py-2">At Low, certain non-essential bushes and map props disappear, providing a clear visual advantage.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Mouse and Gameplay Input",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Options > Gameplay:
            <br/><strong>High Precision Mouse Input:</strong> <span class="text-emerald-400 font-bold">ON</span>.
            <br/>This allows the game to process mouse movement data between rendered frames (Sub-frame input). Your shots will register based on your exact mouse position regardless of the visual frame update. This is mandatory for hitscan heroes like Widowmaker and Cassidy.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: The Reduce Buffering Trick",
            content: `
        <p class="mb-4 text-gray-300">
            This option forces the game to avoid pre-rendering extra frames to reduce lag.
            <br/><strong>Set to ON</strong>.
            <br/><em>Known Bug:</em> If you Alt-Tab, your FPS may drop. If this occurs, toggle \"Reduce Buffering\" OFF and back ON to flush the buffer and restore performance.
        </p>
      `
        },
        {
            title: "Chapter 5: Native Dolby Atmos Support",
            content: `
        <p class="mb-4 text-gray-300">
            Overwatch 2 features high-quality native support for Dolby Atmos for Headphones.
            <br/>If using stereo headphones, enable this in the Sound options.
            <br/>It is significantly superior to Windows Sonic, allowing you to track a flying Pharah or a flanking Sombra with surgical precision.
        </p>
      `
        },
        {
            title: "Chapter 6: FPS Capping and Simulation Time",
            content: `
        <p class="mb-4 text-gray-300">
            Press Ctrl+Shift+N in-game to access the NetGraph.
            <br/>Observe the \"SIM\" (Simulation Time) value. Lower is better (e.g., 3ms).
            <br/>To reduce SIM, you must increase your FPS.
            <br/>Limit your FPS using a \"Custom\" value your hardware can maintain consistently. Fluctuating FPS (e.g., jumping between 150 and 300) creates variable input lag, which is detrimental compared to a constant, stable framerate.
        </p>
      `
        },
        {
            title: "Chapter 7: Managing Visual Pollution",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Effects Detail:</strong> Low.
            - <strong>Lighting Quality:</strong> Low.
            <br/>Lowering these settings drastically reduces the blinding brightness of hero abilities (like Moira's Ultimate or Hanzo's Dragons), allowing you to see targets clearly during the chaos of a fight.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Menu and Lobby Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                Overwatch renders the main menu (including 3D heroes) at maximum quality, which can needlessly heat up your GPU.
                <br/>Restrict your Menu FPS Limit to 30 or 60 to save power and reduce heat between matches.
            </p>
            `
        },
        {
            title: "Chapter 9: Do Skins Provide an Advantage?",
            content: `
            <p class="mb-4 text-gray-300">
                Some skins can subtlely alter weapon sound effects or optic models.
                <br/>For example, Hanzo's \"Okami\" skin historically featured a quieter voice line for his ultimate (though it has since been nerfed, it remains subtle).
                <br/>Generally, skins with smaller weapon models that occupy less screen real estate are preferred by competitive players.
            </p>
            `
        },
        {
            title: "Chapter 10: Voltris Optimizer for OW2",
            content: `
            <p class="mb-4 text-gray-300">
                The <strong>Voltris Optimizer</strong> can be configured to elevate the priority of the <code>Overwatch.exe</code> process, ensuring Windows background tasks (like Windows Update) don't steal CPU cycles during intense Overtime situations.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Should I use 'Display-Based' or 'Custom' FPS capping?",
            answer: "Always use Custom. While 'Display-Based + 10 FPS' is acceptable, setting a stable Custom limit (like 300 or 400) is superior for minimizing total input lag, provided your hardware can sustain it."
        },
        {
            question: "Is FSR 1.0 or 2.2 better for Overwatch?",
            answer: "Overwatch 2 supports FSR natively. Use FSR 1.0 if you strictly need spatial upscaling for performance. FSR 2.2 can introduce ghosting artifacts during rapid turns. Native 100% Render Scale remains best for overall visibility."
        },
        {
            question: "Should I ever set Render Scale above 100%?",
            answer: "No, unless you are specifically taking high-resolution screenshots. For gameplay, it only increases input lag and serves no competitive purpose."
        }
    ];

    const externalReferences = [
        { name: "KarQ (Advanced Overwatch Tips)", url: "https://www.youtube.com/user/KarQGames" },
        { name: "Overwatch League Technical Specs", url: "https://liquipedia.net/overwatch/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Setup",
            description: "240Hz+ is recommended for the best OW2 experience."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Network Latency",
            description: "Avoid rubber-banding when playing high-mobility heroes like Tracer."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Control Panel",
            description: "Optimal 'Ultra' Latency mode settings."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
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


