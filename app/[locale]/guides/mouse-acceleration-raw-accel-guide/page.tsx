import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'mouse-acceleration-raw-accel-guia',
    title: "Raw Accel (2026): The Professional Guide to Customized Mouse Acceleration",
    description: "Mouse acceleration is no longer the villain. Learn how to use Raw Accel for pixel-perfect precision on micro-adjustments and insane speed for flicks. Used by Valorant/Apex pros.",
    category: 'peripherals',
    difficulty: 'Expert',
    time: '60 min'
};

const title = "Raw Accel Guide (2026): Professional Mouse Acceleration";
const description = "For years, the advice was simple: 'Turn off mouse acceleration.' They were right about Windows Acceleration (Enhance Pointer Precision), which is unpredictable. But Raw Accel's controlled linear acceleration is the secret weapon of many Top Fraggers.";

const keywords = [
    'raw accel download valorant settings 2026',
    'how to configure raw accel curve cs2',
    'good vs bad mouse acceleration explained',
    'raw accel vanguard ban risk 2026',
    'motivity curve vs linear curve raw accel',
    'sens multiplier cap raw accel settings',
    'mouse acceleration fps pro player settings',
    'ideal dpi for raw accel setup',
    'reduce mouse driver input lag voltris',
    'raw input buffer windows settings'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('mouse-acceleration-raw-accel-guia', title, description, keywords, locale);
}

export default function RawAccelGuide() {
    const summaryTable = [
        { label: "Driver", value: "Raw Accel (Kernel-Level)" },
        { label: "Curve Type", value: "Linear / Natural / Motivity" },
        { label: "Base Sens", value: "Low (For Precision)" },
        { label: "Max Sens", value: "High (For Flicks)" },
        { label: "Input Lag", value: "Zero (Bypasses OS Scaling)" },
        { label: "Anti-Cheat", value: "Safe & Digitally Signed" },
        { label: "Recommended DPI", value: "1600 or 3200" }
    ];

    const contentSections = [
        {
            title: "Introduction: Shifting the Paradigm",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In Windows, the \"Enhance Pointer Precision\" option is terrible because its curve is inconsistent and speed-dependent in a way that hurts muscle memory. <strong>Raw Accel</strong> is a kernel-level driver that intercepts mouse input before Windows processes it, applying a perfectly consistent mathematical curve that you design.
        </p>
         <div class="bg-[#0A0A0F] border border-blue-500/30 p-5 rounded-xl my-6">
            <h4 class="text-blue-400 font-bold mb-2">The Core Theory</h4>
            <p class="text-gray-300 text-sm">
                Imagine having an ultra-low base sensitivity (e.g., 50cm/360) for long-range headshots (precision) and, instantly, when you move your hand rapidly, your sensitivity doubles or triples so you can perform a 180-degree turn (flick) without moving your entire arm across the desk. It's the best of both worlds.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Safe Installation",
            content: `
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Download Raw Accel from the official GitHub account (a1xd).</li>
            <li>Extract the folder and run <code>installer.exe</code> as Administrator.</li>
            <li>Restart your PC (Mandatory for the driver to load).</li>
            <li>Open <code>rawaccel.exe</code>.</li>
            <li><strong>Pro Tip:</strong> Check \"Start with Windows\" once your settings are finalized. If you create a broken curve that makes your mouse unusable, restart in Safe Mode to uninstall.</li>
        </ol>
      `
        },
        {
            title: "Chapter 2: Picking Your Curve (Linear vs. Natural)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Linear (Most Common)</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Your sensitivity increases in a straight line relative to your hand speed. It is the easiest to learn and remains highly predictable throughout the movement.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Natural / Motivity</h4>
                <p class="text-gray-400 text-xs">
                    This curve is S-shaped. It starts slow for micro-aiming, ramps up in the middle for tracking, and plateaus at the end. It feels more \"organic\" to some users.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Jump (Instant Shift)</h4>
                <p class="text-gray-400 text-xs">
                    Sensitivity remains at base level until a threshold is met, then instantly jumps to a higher value. Generally avoided for competitive play due to its inconsistency.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 3: Configuring Your First Stable Curve",
            content: `
        <p class="mb-4 text-gray-300">
            1. <strong>Sens Multiplier:</strong> Set this to 1 (or adjust for your DPI change). Example: If you moved from 800 DPI to 1600 DPI, set this to 0.5 to keep your desktop feel consistent.
            <br/>2. <strong>Acceleration:</strong> Start very low. 0.05 is a good baseline.
            <br/>3. <strong>Cap Type:</strong> Output.
            <br/>4. <strong>Cap Output:</strong> 1.5 or 2.0. This ensures your sensitivity never exceeds 2x your base, preventing you from spinning like a Beyblade if you sneeze or make a sudden jerk.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: The Importance of High DPI (1600+)",
            content: `
        <p class="mb-4 text-gray-300">
            For Raw Accel's mathematical curves to operate smoothly, the driver needs as much raw data (polling points) as possible.
            <br/>Switch your mouse to 1600 DPI or higher.
            <br/>Use the \"Sens Multiplier\" to scale your speed back down to your original preference (e.g., 1600 DPI with a 0.5 multiplier feels exactly like 800 DPI). 
            <br/>This provides a higher \"resolution\" for the acceleration engine, resulting in ultra-smooth, jitter-free motion.
        </p>
      `
        },
        {
            title: "Chapter 5: Offset (The Precision Zone)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Offset</strong> is a value representing a hand speed threshold below which NO acceleration is applied.
            <br/>Example: Offset 15.
            <br/>Slow movements (micro-adjusting for a headshot) remain 100% consistent with zero acceleration.
            <br/>Once your movement exceeds the threshold (flicking to a target), the acceleration engages. 
            <br/>This is the ideal setup for tactical shooters like Valorant and CS2.
        </p>
      `
        },
        {
            title: "Chapter 6: Anisotropy (X vs. Y Scaling)",
            content: `
        <p class="mb-4 text-gray-300">
            You can configure different acceleration values for the horizontal and vertical axes.
            <br/>In games like Apex Legends, you might want aggressive horizontal acceleration for fast 180-degree turns but low or zero vertical acceleration to keep your recoil control consistent and predictable.
        </p>
      `
        },
        {
            title: "Chapter 7: Anti-Cheat Safety",
            content: `
        <p class="mb-4 text-gray-300">
            Raw Accel is digitally signed and officially whitelisted/approved by major anti-cheats like Riot Vanguard (Valorant) and Valve Anti-Cheat (VAC).
            <br/>It is a legitimate mouse driver modification, not a memory-injection cheat. It is 100% safe to use in professional competitive environments.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Training Your Muscle Memory",
            content: `
            <p class="mb-4 text-gray-300">
                Expect an adjustment period of 1 to 2 weeks.
                <br/>Train in KovaaK's or AimLab.
                <br/>Tracking scenarios will likely feel easier immediately. Static clicking/flicking scenarios might feel strange at first—don't give up on the first day.
            </p>
            `
        },
        {
            title: "Chapter 9: The Visual Graph Monitor",
            content: `
            <p class="mb-4 text-gray-300">
                Pay close attention to the real-time graph in the application window. The yellow line tracks your movements.
                <br/>Perform standard in-game aiming motions and see where they land on the curve. Adjust your settings so that acceleration only kicks in AFTER your typical micro-adjustment speed.
            </p>
            `
        },
        {
            title: "Chapter 10: Clean Uninstallation",
            content: `
            <p class="mb-4 text-gray-300">
                If you decide it's not for you:
                <br/>Run <code>installer.exe</code> again and select \"Uninstall.\" Restart your computer immediately.
                <br/>Simply closing the app or deleting the files will NOT remove the driver—it will remain active in the background until uninstalled via the executable.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is Raw Accel good for MOBA games like LoL or Dota?",
            answer: "Essentially, yes! It allows you to flick to the edge of the screen to move the camera quickly without needing a permanent high DPI that might compromise your clicking precision on minions."
        },
        {
            question: "Does it work with any mouse brand?",
            answer: "Yes. Whether you use a Logitech, Razer, Zowie, or a generic office mouse, Raw Accel is brand-agnostic because it operates at the Windows OS driver level."
        },
        {
            question: "Do I need to keep the program open while gaming?",
            answer: "Strictly speaking, no. The driver loads at system boot. The GUI is only for editing and visualizing. However, keeping it in your system tray to verify it's running is considered best practice."
        }
    ];

    const externalReferences = [
        { name: "Raw Accel GitHub Repository", url: "https://github.com/a1xd/rawaccel" },
        { name: "Voltaic Aim Community (Aim Support)", url: "https://discord.gg/voltaic" }
    ];

    const relatedGuides = [
        {
            href: "/guides/mouse-otimizacao-windows-precisao",
            title: "Mouse Optimization",
            description: "Mastering 1:1 precision and polling rates."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Display HZ Setup",
            description: "Visual fluidness to match your tracking."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Valorant Lag Fix",
            description: "Reducing overall system latency for better aim."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Expert"
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

