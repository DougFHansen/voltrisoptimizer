import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'g-sync-freesync-configuracao-correta',
    title: "G-Sync and FreeSync 2026: Technical Analysis of Input Lag and LFC",
    description: "The ultimate guide to VRR. Understand the difference between G-Sync Compatible, Native, and why you MUST enable V-Sync in the control panel (but not in-game).",
    category: 'peripherals',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "Synchronization Engineering: G-Sync, FreeSync, and the Quest for Zero Tearing";
const description = "VRR (Variable Refresh Rate) technology has revolutionized gaming, but 90% of people use it wrong. Let's sync your hardware for perfect fluidity without latency.";

const keywords = [
    'correct g-sync v-sync fps cap setup 2026',
    'freesync flickering screen flashing fix',
    'g-sync vs vsync vs fast sync input lag',
    'g-sync compatible monitor official list',
    'low framerate compensation lfc explained',
    'cap fps rivatuner vs nvidia panel latency',
    'scanline sync rtss tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('g-sync-freesync-configuracao-correta', title, description, keywords, locale);
}

export default function SyncGuide() {
    const summaryTable = [
        { label: "V-Sync (NV Panel)", value: "ON (Always)" },
        { label: "V-Sync (In-Game)", value: "OFF (Always)" },
        { label: "FPS Limit (Cap)", value: "-3 from Max Hz" },
        { label: "Low Latency Mode", value: "Ultra (Helps with Cap)" },
        { label: "Input Lag Added", value: "~1ms (Invisible)" },
        { label: "Visual", value: "Zero Tearing" },
        { label: "Difficulty", value: "Advanced" }
    ];

    const contentSections = [
        {
            title: "The G-Sync Golden Rule (BlurBusters Bible)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          There is a myth that "V-Sync adds lag, so I should turn it off." This is true for fixed 60Hz monitors. But in the world of VRR (G-Sync/FreeSync), the rule changes.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            The BlurBusters website proved with high-speed cameras that G-Sync NEEDS V-Sync enabled in the Control Panel to cover "Frametime Tearing." If you use G-Sync without V-Sync, you will still have tears at the bottom of the screen when frametime varies.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">⚖️</span> Auto-Sync via Voltris
            </h4>
            <p class="text-gray-300 mb-4">
                Configuring the trio (G-Sync + V-Sync + FPS Cap) manually is a lot of work. <strong>Voltris Optimizer</strong> applies an "E-Sports Sync" global profile that automatically configures the FPS limiter based on your monitor and V-Sync driver locks.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Optimize Sync
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: The Holy Setup",
            content: `
        <div class="bg-[#0A0A0F] p-6 rounded-xl border border-white/5 space-y-4">
            <h4 class="text-white font-bold text-xl mb-4 border-b border-white/10 pb-2">Follow EXACTLY in this order:</h4>
            
            <div class="flex items-start gap-4">
                <div class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded">1</div>
                <div>
                    <h5 class="text-[#31A8FF] font-bold">Nvidia Panel > Set Up G-Sync</h5>
                    <p class="text-gray-300 text-sm">Check "Enable for Full screen mode". (Windowed mode can cause stutter in Windows DWM).</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded">2</div>
                <div>
                    <h5 class="text-[#31A8FF] font-bold">Nvidia Panel > Manage 3D Settings</h5>
                    <p class="text-gray-300 text-sm">Vertical Sync: <strong class="text-emerald-400">ON</strong>.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded">3</div>
                <div>
                    <h5 class="text-[#31A8FF] font-bold">IN-GAME</h5>
                    <p class="text-gray-300 text-sm">V-Sync: <strong class="text-rose-400">OFF</strong>.</p>
                    <p class="text-gray-300 text-sm">FPS Limit: <strong class="text-rose-400">OFF</strong> or unlimited.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div class="bg-emerald-500/20 text-emerald-400 font-bold px-3 py-1 rounded">4</div>
                <div>
                    <h5 class="text-[#31A8FF] font-bold">Nvidia Panel > Max Frame Rate</h5>
                    <p class="text-gray-300 text-sm">Cap at <strong>Hz - 3</strong>.</p>
                    <ul class="text-gray-400 text-xs ml-4 list-disc mt-1">
                        <li>144Hz -> 141 FPS</li>
                        <li>165Hz -> 162 FPS</li>
                        <li>240Hz -> 237 FPS</li>
                    </ul>
                </div>
            </div>
        </div>
      `
        },
        {
            title: "Why cap 3 FPS below?",
            content: `
        <p class="mb-4 text-gray-300">
            G-Sync only works <strong>within the range</strong> of the monitor (e.g., 48Hz to 144Hz).
        </p>
        <p class="mb-4 text-gray-300">
            If your game hits 145 FPS, G-Sync <strong>turns off</strong> automatically. At that moment, the V-Sync you turned on in the driver kicks in, causing sudden massive input lag.
            <br/>By capping at 141 FPS, we ensure the game NEVER touches the 144Hz ceiling. This way, G-Sync stays active 100% of the time, and the driver's V-Sync is never truly triggered (it's just a "safety net").
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "LFC (Low Framerate Compensation): The Savior",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-orange-400 font-bold mb-4 text-xl">What happens if my FPS drops a lot?</h4>
                <p class="text-gray-300 mb-4">
                    Suppose your FPS drops to 40 FPS on a 144Hz monitor (whose minimum range is 48Hz). G-Sync should turn off, right?
                </p>
                <p class="text-gray-300 text-sm mb-4">
                    Wrong. That's where <strong>LFC</strong> comes in. The monitor duplicates the Hz to keep up.
                    <br/>GPU: 40 FPS.
                    <br/>Monitor: 80 Hz (Shows each frame 2 times).
                </p>
                <p class="text-gray-300 text-sm italic">
                    This maintains visual fluidity even with poor performance.
                </p>
            </div>
            `
        },
        {
            title: "Brightness Flickering Problem",
            content: `
            <p class="mb-4 text-gray-300">
                Some VA monitors (prone to this) flicker light when LFC kicks in and out (at the 48Hz transition).
            </p>
            <p class="text-gray-300">
                <strong>Solution:</strong> Use the CRU (Custom Resolution Utility) program and increase the minimum FreeSync range to 70Hz or 90Hz. This forces LFC to stay "Always Active" in heavy games, avoiding the transition oscillation.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Verdict: Competitive vs Single Player",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>CS2 / Valorant:</strong> If you have constant 400 FPS, TURN everything OFF (G-Sync Off, V-Sync Off). Let tearing happen. At very high FPS (300+), tearing is micro and barely visible, and latency is the lowest possible.
            </p>
            <p class="text-gray-300">
                <strong>Warzone / Apex / AAA Games:</strong> FPS varies a lot (100-180). Here G-Sync shines. Visual consistency helps you track targets better than having 1ms lower input lag but with a completely torn image.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is Fast Sync (Nvidia) worth it?",
            answer: "Fast Sync is an alternative for those with VERY HIGH FPS (e.g., 300 FPS on a 60Hz screen). It renders everything and only shows the last complete frame. It causes less lag than V-Sync but causes Micro-Stutter (inconsistent frame pacing). In 2026, it's better to cap FPS than use Fast Sync."
        },
        {
            question: "Does G-Sync Compatible (Non-certified) work?",
            answer: "99% of the time, yes. Nvidia has a strict validation list, but the VESA Adaptive Sync protocol is standard. You can force activation in the panel even if it says 'Display not validated'. Just watch out for screen flickering."
        },
        {
            question: "Does HDMI 2.1 replace DisplayPort?",
            answer: "Yes, if both GPU and Monitor are HDMI 2.1 (48Gbps). But it is much more prone to handshake failures and black screens. DisplayPort remains the most robust choice for PC."
        }
    ];

    const externalReferences = [
        { name: "BlurBusters G-Sync 101 (Technical Bible)", url: "https://blurbusters.com/gsync/gsync101-input-lag-tests-and-settings/" },
        { name: "G-Sync Compatible Monitors List", url: "https://www.nvidia.com/en-us/geforce/products/g-sync-monitors/specs/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Hz Guide",
            description: "G-Sync doesn't work if your Hz is wrong in Windows."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Panel",
            description: "Fine-tune settings to go with G-Sync."
        },
        {
            href: "/guides/mouse-dpi-polling-rate-ideal",
            title: "Mouse Lag",
            description: "No use removing video lag if you have mouse lag."
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

