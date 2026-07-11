import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'mouse-dpi-polling-rate-ideal',
    title: "Mouse Guide 2026: The Science of Perfect Aim (DPI, Polling Rate, and Sensors)",
    description: "Understand technically what eDPI, Pixel Skipping, Sensor Jitter, and 8000Hz Polling Rate are. Comprehensive guide to eliminating acceleration and configuring your mouse for eSports.",
    category: 'peripherals',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Mouse Engineering: DPI, Hz, and the Quest for Perfect Aim (2026)";
const description = "Did you know that 400 DPI technically has more input lag than 1600 DPI? In this guide, we'll debunk old CS 1.6 legends and apply modern sensor science to adjust your aim.";

const keywords = [
    'best mouse dpi competitive fps',
    '800 dpi vs 1600 dpi latency test',
    'polling rate 4000hz 8000hz worth it',
    'mouse acceleration curve windows 11 disable',
    'raw input buffer valorant on or off',
    'how to clean optical mouse sensor',
    'glass skates vs ptfe feet',
    'ideal lift off distance lod',
    'edpi calculator valorant cs2'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('mouse-dpi-polling-rate-ideal', title, description, keywords, locale);
}

export default function MouseGuide() {
    const summaryTable = [
        { label: "Ideal DPI", value: "1600 (Low Latency)" },
        { label: "Polling Rate", value: "1000Hz (Safe) / 4000Hz (High-End)" },
        { label: "Windows Sens", value: "6/11 (Neutral)" },
        { label: "Acceleration", value: "Disabled (Always)" },
        { label: "LOD (Lift-Off)", value: "Low" },
        { label: "Raw Input", value: "On in-game" },
        { label: "Angle Snapping", value: "Off" }
    ];

    const contentSections = [
        {
            title: "The Myth of 400 DPI vs. the Reality of 1600 DPI",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          For years, players copied pros who used 400 DPI. The truth is many pros use 400 DPI out of <strong>habit</strong>, not because it's better. Tests with LDAT (Latency Display Analysis Tool) have proven that higher DPIs have lower input latency.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The explanation: At 400 DPI, the sensor divides your movement into 400 "steps" per inch. At 1600 DPI, it's 1600 steps. If you start moving the mouse slowly, the 1600 DPI sensor detects the initial movement <strong>before</strong> the 400 DPI one, sending the signal to the PC milliseconds faster.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🎯</span> Mouse Optimization Script
            </h4>
            <p class="text-gray-300 mb-4">
                Windows has a legacy acceleration curve in the registry that can interfere even with the option unchecked in old games. <strong>Voltris Optimizer</strong> applies the famous "MarkC Mouse Fix" directly to the registry, ensuring a perfect 1:1 linear curve at the system level.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Fix Mouse Curve
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: Windows and Acceleration (The Villain)",
            content: `
        <p class="mb-4 text-gray-300">
            Default Windows settings are made for office work, not gaming. It tries to "help" you by accelerating the cursor. In games, this destroys your muscle memory.
        </p>
        <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm space-y-2">
            <p class="text-white font-bold">Mandatory Configuration:</p>
            <ol class="list-decimal list-inside text-gray-400">
                <li>Control Panel > Mouse > Pointer Options.</li>
                <li><strong>Pointer Speed:</strong> Exactly at the 6th notch (Middle).<br/>
                    <span class="text-xs text-gray-500 ml-4">This is the 1.0 multiplier. If you set it to 7, Windows starts skipping pixels and interpolating. At 5, it throws data away. Always use 6/11.</span>
                </li>
                <li><strong>Enhance pointer precision:</strong> <span class="text-red-400 font-bold">UNCHECKED</span>.<br/>
                    <span class="text-xs text-gray-500 ml-4">This is acceleration. If on, the distance the crosshair moves depends on your hand speed, not the physical distance on the mousepad. Impossible to have consistency this way.</span>
                </li>
            </ol>
        </div>
      `
        },
        {
            title: "Step 2: Understanding Polling Rate (Hz)",
            content: `
        <p class="mb-4 text-gray-300">
            Polling rate is how many times per second the mouse tells the PC: "I am here."
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-center text-gray-300 border border-white/10 rounded-lg">
                <thead class="bg-white/5">
                    <tr>
                        <th class="p-3">Hz</th>
                        <th class="p-3">Interval (Delay)</th>
                        <th class="p-3">CPU Usage</th>
                        <th class="p-3">Verdict</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-white/5">
                        <td class="p-3">125Hz</td>
                        <td class="p-3">8ms</td>
                        <td class="p-3">Low</td>
                        <td class="p-3 text-red-500">Trash (Office)</td>
                    </tr>
                    <tr class="border-t border-white/5 bg-white/5">
                        <td class="p-3 text-[#31A8FF] font-bold">1000Hz</td>
                        <td class="p-3">1ms</td>
                        <td class="p-3">Normal</td>
                        <td class="p-3 text-emerald-400">Gold Standard</td>
                    </tr>
                    <tr class="border-t border-white/5">
                        <td class="p-3">4000Hz</td>
                        <td class="p-3">0.25ms</td>
                        <td class="p-3">High</td>
                        <td class="p-3 text-yellow-400">Good (Requires strong CPU)</td>
                    </tr>
                    <tr class="border-t border-white/5">
                        <td class="p-3">8000Hz</td>
                        <td class="p-3">0.125ms</td>
                        <td class="p-3">Extreme</td>
                        <td class="p-3 text-gray-400">Overkill (Often crashes games)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="mt-4 text-gray-300 text-sm">
            <strong>Warning:</strong> Using 4000Hz or 8000Hz consumes MANY CPU interrupt resources. If you don't have a latest-gen i7/Ryzen 7, using 4000Hz could LOWER your FPS. Start with 1000Hz.
        </p>
      `
        },
        {
            title: "Step 3: Pixel Skipping and eDPI",
            content: `
        <p class="mb-4 text-gray-300">
            Imagine your monitor is a grid of pixels. If mouse DPI is too low and in-game sensitivity is too high, the game software needs to "multiply" each point read by the mouse.
        </p>
        <p class="mb-4 text-gray-300 bg-red-900/20 p-3 rounded border border-red-500/20">
            <strong>Bad Scenario:</strong> 400 DPI with 3.0 Sensitivity in CS2.<br/>
            For every 1 point the mouse moves, the crosshair moves 3 pixels on screen. You lost the ability to aim at the 2 intermediate pixels. This is Pixel Skipping.
        </p>
        <p class="text-gray-300 bg-emerald-900/20 p-3 rounded border border-emerald-500/20">
            <strong>Good Scenario:</strong> 1600 DPI with 0.75 Sensitivity in CS2.<br/>
            Aim speed (eDPI) is the same (1200 total), but granularity is 4x higher. Movement is smooth and you can aim at any pixel.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Sensor Settings: LOD, Ripple, and Angle Snapping",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Advanced Mouse Software Options</h4>
                <p class="text-gray-300 mb-6">
                    Logitech (G Hub), Razer (Synapse), and Zowie mice have internal sensor settings. Understand what each does:
                </p>

                <div class="space-y-4">
                    <div>
                        <h5 class="text-[#31A8FF] font-bold">LOD (Lift-Off Distance)</h5>
                        <p class="text-gray-400 text-sm">
                            Defines at what height the mouse stops tracking when you lift it off the pad.
                            <br/><strong>Recommendation:</strong> As <strong>LOW</strong> as possible. If left high, the crosshair shakes when you reposition the mouse. Sensitive to dust on the pad.
                        </p>
                    </div>
                     <div>
                        <h5 class="text-[#31A8FF] font-bold">Angle Snapping (Movement Prediction)</h5>
                        <p class="text-gray-400 text-sm">
                            The sensor tries to "correct" your imperfect human straight line into an artificial straight line.
                            <br/><strong>Recommendation:</strong> <span class="text-red-400 font-bold">OFF</span>. This prevents necessary micro-diagonal adjustments to correct recoil. Never use this in FPS.
                        </p>
                    </div>
                     <div>
                        <h5 class="text-[#31A8FF] font-bold">Ripple Control / Smoothing</h5>
                        <p class="text-gray-400 text-sm">
                            Smooths shaky movements at high DPIs (>2000). Adds latency.
                            <br/><strong>Recommendation:</strong> Off. We want the Raw input, even if it's slightly shaky.
                        </p>
                    </div>
                </div>
            </div>
            `
        },
        {
            title: "Raw Input Buffer: New Technology",
            content: `
            <p class="mb-4 text-gray-300">
                New games like Valorant have added an option called <strong>"Raw Input Buffer"</strong>.
            </p>
            <p class="text-gray-300">
                This is essential if you use 4000Hz or 8000Hz mice. Without this option on, the game engine can get overloaded processing 8000 updates per second on the main thread, causing FPS drops. The Buffer processes input on another thread.
                <br/><strong>If you use 1000Hz:</strong> It makes little difference, but you can leave it on.
            </p>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Surface: Glass vs Cloth Mousepad",
            content: `
            <p class="mb-4 text-gray-300">
                The surface affects how the sensor reads.
                <br/><strong>Cloth:</strong> Standard. Safe. Offers friction to stop the crosshair (Stopping Power). Great for TacFPS (Val/CS).
                <br/><strong>Glass (SkyPAD):</strong> Zero friction. The mouse flies. Great for Tracking (Apex/Overwatch), but hard to control for precise clicks.
            </p>
            <p class="text-gray-300 text-sm italic">
                Caution: Glass mousepads eat mouse feet (skates) quickly, and any grain of dust makes a scratching sound.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is Wireless Mouse slower?",
            answer: "Not anymore. Technologies like Logitech Lightspeed and Razer HyperSpeed have latency equal to or lower than wired (due to USB port optimization). However, avoid Bluetooth at all costs; Bluetooth has horrible variable delay. Always use the included 2.4GHz USB dongle."
        },
        {
            question: "Does changing mouse feet (skates) improve aim?",
            answer: "It improves comfort. 100% virgin PTFE feet (white) slide smoother than standard black Teflon. This makes micro-adjusting easier as it overcomes initial static friction."
        },
        {
            question: "What is Jitter?",
            answer: "It's when the cursor shakes on its own or makes erratic movements. Usually caused by dust in the sensor lens or too high DPI (10,000+) on irregular surfaces."
        }
    ];

    const externalReferences = [
        { name: "Mouse Sensitivity Converter (Aiming.pro)", url: "https://aiming.pro/mouse-sensitivity-calculator" },
        { name: "Rtings Mouse Reviews (Latency)", url: "https://www.rtings.com/mouse" },
        { name: "Sensor Specs (Pixart)", url: "https://www.pixart.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Guide",
            description: "High Refresh Rate is a must for a good mouse."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Low Latency Mode",
            description: "Ensure the PC processes mouse clicks fast."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Valorant Input Lag",
            description: "Specific guide to optimize aim in Valorant."
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

