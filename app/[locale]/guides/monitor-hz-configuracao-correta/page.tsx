import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'monitor-hz-configuracao-correta',
    title: "Ultimate Monitor Guide 2026: Hz, Overclocking, and Motion Blur Reduction",
    description: "Your 144Hz monitor might be stuck at 60Hz. Learn how to verify your refresh rate, overclock using CRU, configure DyAc/ELMB, and calibrate colors for a competitive edge.",
    category: 'hardware',
    difficulty: 'Intermediate',
    time: '40 min'
};

const title = "Display Engineering (2026): Hz, Strobing, and Zero Latency";
const description = "Buying a 240Hz monitor doesn't make you a pro—configuring it correctly does. Dive into our scientific guide on Motion Clarity, Pixel Response Times, and Overdrive.";

const keywords = [
    'monitor 144hz running at 60hz fix',
    'how to overclock monitor cru custom resolution utility',
    'dyac benq vs elmb asus vs ulmb 2 nvidia',
    'tn vs ips vs oled panel input lag',
    'ufo test ghosting overshoot fix',
    'calibrate monitor colors competitive gaming',
    'displayport 1.4 vs hdmi 2.1 bandwidth',
    'windows 11 hdr washed out colors fix',
    'dual monitor setup different hz lag',
    'gtg vs mprt response time difference'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('monitor-hz-configuracao-correta', title, description, keywords, locale);
}

export default function MonitorGuide() {
    const summaryTable = [
        { label: "Tools", value: "UFO Test / CRU" },
        { label: "Cable", value: "DisplayPort (Always)" },
        { label: "Overdrive", value: "Normal/Fast (Never Extreme)" },
        { label: "Strobing", value: "On (FPS Only)" },
        { label: "Color", value: "Digital Vibrance 70%" },
        { label: "HDR", value: "Off (Competitive)" },
        { label: "Cleaning", value: "Distilled Water Only" }
    ];

    const contentSections = [
        {
            title: "Introduction: Hertz Isn't Everything",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many gamers spend thousands on a 240Hz monitor, plug in an old HDMI cable, and play at 60Hz for years without realizing it. Worse, they enable "Extreme Overdrive" thinking they're gaining performance, but instead create "Inverse Ghosting" artifacts that actually hinder their aim.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we'll calibrate your monitor using professional tools like TestUFO and engineering software like CRU to ensure every pixel transitions accurately and on time.
        </p>
      `
        },
        {
            title: "Chapter 1: The Basics Done Right (Real Hz)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-2">The Golden Checklist</h4>
                <ol class="list-decimal list-inside text-gray-400 text-sm space-y-2">
                    <li>Use the <strong>DisplayPort</strong> cable included in the box (older HDMI standards can limit your refresh rate).</li>
                    <li>In Windows: Settings > System > Display > Advanced Display > <strong>Refresh rate</strong>. Ensure this is set to the maximum available value.</li>
                    <li>On the Monitor (Physical Buttons): Disable "Eco Mode" or "Power Saving," as these can limit brightness and sometimes refresh rate.</li>
                </ol>
                <div class="mt-4 bg-gray-800 p-3 rounded text-center">
                    <p class="text-white text-sm">Test now at: <a href="https://www.testufo.com" target="_blank" class="text-blue-400 underline">testufo.com</a></p>
                    <p class="text-xs text-gray-500">If the site displays "60 fps" on your 144Hz monitor, something is incorrectly configured.</p>
                </div>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Overdrive and Ghosting (Fine Tuning)",
            content: `
        <p class="mb-4 text-gray-300">
            LCD monitors take time for pixels to transition colors (GtG - Gray to Gray). "Overdrive" applies extra voltage to speed this up.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-black/40 p-3 rounded border border-white/10">
                <h5 class="text-white font-bold text-sm">Overdrive: Off</h5>
                <p class="text-gray-400 text-xs">Significant blur (Ghosting). Trails follow moving objects.</p>
            </div>
            <div class="bg-emerald-900/40 p-3 rounded border border-emerald-500">
                <h5 class="text-emerald-400 font-bold text-sm">Overdrive: Normal/Fast</h5>
                <p class="text-gray-300 text-xs"><strong>The Sweet Spot.</strong> Good sharpness without visual artifacts.</p>
            </div>
            <div class="bg-red-900/40 p-3 rounded border border-red-500">
                <h5 class="text-red-400 font-bold text-sm">Overdrive: Extreme</h5>
                <p class="text-gray-300 text-xs text-red-300"><strong>CAUTION.</strong> Causes "Inverse Ghosting" (Corona), where bright trails appear behind objects, hurting FPS accuracy.</p>
            </div>
        </div>
        <p class="mt-4 text-gray-300 text-sm">
            Navigate your monitor's OSD and test options like "Trace Free," "Response Time," or "Overdrive" while watching TestUFO. Choose the one that sharpens the UFO without creating white ghost trails.
        </p>
      `
        },
        {
            title: "Chapter 3: Strobing (DyAc, ELMB, ULMB)",
            content: `
        <p class="mb-4 text-gray-300">
            The secret weapon of pro CS2 players. The monitor strobes its backlight between frames to eliminate persistence of vision blur on your retina.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>BenQ:</strong> DyAc / DyAc+ (Market leading implementation).</li>
            <li><strong>ASUS:</strong> ELMB (Extreme Low Motion Blur).</li>
            <li><strong>Nvidia:</strong> ULMB 2 (Ultra Low Motion Blur).</li>
        </ul>
        <p class="mt-2 text-gray-300 text-sm bg-blue-900/20 p-3 rounded">
            <strong>The Verdict:</strong> ENABLE for competitive shooters like CS, Valorant, and R6. The screen will be slightly dimmer, but motion clarity becomes CRT-level. Disable for single-player games to avoid potential eye strain or headaches from PWM flickering.
        </p>
      `
        },
        {
            title: "Chapter 4: Panel Technologies (TN vs. IPS vs. OLED)",
            content: `
        <p class="mb-4 text-gray-300">
            What is the real difference in 2026?
        </p>
        <table class="w-full text-sm text-left text-gray-400">
            <thead class="text-xs text-gray-200 uppercase bg-gray-800">
                <tr>
                    <th class="px-4 py-2">Panel Type</th>
                    <th class="px-4 py-2">Speed</th>
                    <th class="px-4 py-2">Color Quality</th>
                    <th class="px-4 py-2">Ideal Use</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-900 border-b border-gray-800">
                    <td class="px-4 py-2 font-bold text-yellow-400">TN</td>
                    <td class="px-4 py-2">Ultra Fast</td>
                    <td class="px-4 py-2">Poor (Washed Out)</td>
                    <td class="px-4 py-2">Strictly Pro CS2/Valorant</td>
                </tr>
                <tr class="bg-gray-900 border-b border-gray-800">
                    <td class="px-4 py-2 font-bold text-blue-400">IPS</td>
                    <td class="px-4 py-2">Very Fast</td>
                    <td class="px-4 py-2">Excellent</td>
                    <td class="px-4 py-2">Best All-Rounder</td>
                </tr>
                <tr class="bg-gray-900 border-b border-gray-800">
                    <td class="px-4 py-2 font-bold text-purple-400">OLED</td>
                    <td class="px-4 py-2">Instant (0.03ms)</td>
                    <td class="px-4 py-2">Perfect (HDR)</td>
                    <td class="px-4 py-2">The future (Premium cost)</td>
                </tr>
            </tbody>
        </table>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 5: Monitor Overclocking (CRU)",
            content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
            <h4 class="text-orange-400 font-bold mb-4 text-xl">Custom Resolution Utility (Hacking)</h4>
            <p class="text-gray-300 mb-4">
                You can potentially push a 60Hz monitor to 75Hz, or a 144Hz model to 165Hz. This is generally safe—the monitor will simply display "Out of Range" if it can't handle the frequency.
            </p>
            <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
                <li>Download <strong>CRU (Custom Resolution Utility)</strong>.</li>
                <li>Open it and select your active monitor.</li>
                <li>Under "Detailed Resolutions," click Edit.</li>
                <li>Increase the "Refresh Rate" in 5Hz increments (e.g., 60 -> 65 -> 70).</li>
                <li>Click OK and run the included "restart64.exe" to reload your display driver.</li>
                <li>Go to Windows display settings and attempt to apply the new refresh rate. If the screen goes black, wait 15 seconds for it to revert. If successful, you can try pushing higher.</li>
            </ol>
            <p class="mt-2 text-xs text-gray-500">
                Many 60Hz laptop panels can easily reach 90Hz using this method.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 6: Color Calibration (ICC Profiles)",
            content: `
        <p class="mb-4 text-gray-300">
            Downloading an ICC profile from sites like "Rtings" or "TFTCentral" for your specific model can correct factory temperature tints (too yellow or blue).
            <br/>To install: Search for "Color Management" in Windows > Click Add > Select your .icm file > Set as Default Profile.
        </p>
      `
        },
        {
            title: "Chapter 7: Cables and Bandwidth",
            content: `
        <p class="mb-4 text-gray-300">
            Why prefer DisplayPort?
            <br/>- HDMI 1.4: Maxes out at 144Hz @ 1080p.
            <br/>- HDMI 2.0: Maxes out at 240Hz @ 1080p.
            <br/>- <strong>DisplayPort 1.2/1.4:</strong> Supports official G-Sync (HDMI often only supports FreeSync, which can be less stable on Nvidia cards).
            <br/>Always prioritize the DisplayPort port on your GPU.
        </p>
      `
        },
        {
            title: "Chapter 8: Dual Monitor Setup (The Myth)",
            content: `
        <p class="mb-4 text-gray-300">
            <em>"Does mixing a 144Hz and a 60Hz monitor lag the system?"</em>
            <br/>In the past (older Windows 10 versions), yes—the DWM could throttle the faster monitor to 60Hz if animations were occurring on the slower screen.
            <br/>In <strong>Windows 10 (20H2+) and Windows 11</strong>, this is solved via "Multiplane Overlay." You can mix refresh rates without issue today. Just ensure your games run in "Exclusive Fullscreen" or "Optimized Borderless" mode.
        </p>
      `
        },
        {
            title: "Chapter 9: HDR on Windows",
            content: `
        <p class="mb-4 text-gray-300">
            Unless you own a high-end <strong>OLED</strong> or <strong>Mini-LED</strong> monitor, <strong>DISABLE HDR</strong>.
            <br/>Standard IPS/VA "HDR400" monitors lack the brightness and local dimming zones needed for a good experience. Enabling it often results in washed-out colors and gray blacks. A well-calibrated SDR image is superior to cheap HDR.
        </p>
      `
        },
        {
            title: "Chapter 10: Care and Cleaning",
            content: `
        <p class="mb-4 text-gray-300">
            Never use alcohol, Windex, or similar glass cleaners, as they destroy the monitor's anti-reflective coating forever.
            <br/><strong>The Right Way:</strong> Use a clean microfiber cloth and distilled (or filtered) water. Dampen—don't soak—the cloth and wipe gently, then finish with a dry microfiber cloth.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Voltris Display Tools",
            content: `
            <p class="mb-4 text-gray-300">
                The <strong>Voltris Optimizer</strong> includes a "Monitor Diagnostics" tool that checks for dead pixels, backlight bleed, and color uniformity, while also automatically applying optimized eSports color profiles.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Curved vs. Flat?",
            answer: "Curved panels (1000R/1500R) are great for immersion in story and simulation games, but many FPS pro players prefer flat screens. Curves can slightly distort straight lines (like sniper crosshairs) in your peripheral vision. It's personal preference, but flat remains the tournament standard."
        },
        {
            question: "24-inch vs. 27-inch?",
            answer: "For 1080p, stick to 24/25 inches. 1080p on a 27-inch screen can look pixelated due to low pixel density (PPI). If you want 27 inches, invest in a 1440p (QHD) monitor."
        },
        {
            question: "G-Sync Compatible vs. Native G-Sync?",
            answer: "Native G-Sync has a dedicated physical Nvidia chip inside the monitor, which is more expensive. 'Compatible' uses the VESA Adaptive Sync standard (FreeSync). Today, the performance difference is minimal; 'Compatible' works exceptionally well."
        }
    ];

    const externalReferences = [
        { name: "BlurBusters UFO Test", url: "https://www.testufo.com/" },
        { name: "Rtings Monitor Reviews (ICC Profiles)", url: "https://www.rtings.com/monitor" },
        { name: "Custom Resolution Utility (CRU)", url: "https://www.monitortests.com/forum/Thread-Custom-Resolution-Utility-CRU" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Guide",
            description: "Configure G-Sync in the driver."
        },
        {
            href: "/guides/g-sync-freesync-configuracao-correta",
            title: "G-Sync Deep Dive",
            description: "Understand the math behind synchrony."
        },
        {
            href: "/guides/mouse-dpi-polling-rate-ideal",
            title: "Input Lag",
            description: "The monitor is only half the equation."
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

