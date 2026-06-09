import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'amd-adrenalin-configuracao-competitiva',
    title: "AMD Radeon Software 2026: The Ultimate Optimization and Undervolt Guide",
    description: "Own an RX 6000 or 7000? Discover how to configure Radeon Anti-Lag 2, Radeon Super Resolution (RSR), perform a safe Undervolt, and fix Shader Cache stutters.",
    category: 'optimization',
    difficulty: 'Advanced',
    time: '50 min'
};

const title = "AMD Adrenalin Edition (2026): Extracting the Maximum from your Radeon";
const description = "AMD's software is more modern than Nvidia's, but full of traps. Learn to turn off features that cause lag and enable hidden gems like Radeon Chill and Anti-Lag 2.";

const keywords = [
    'amd adrenalin best competitive settings 2026',
    'radeon anti-lag 2 cs2 enable input lag',
    'radeon super resolution vs fsr difference',
    'amd shader cache stuttering fix regedit',
    'undervolt rx 6600 rx 7600 safe',
    'amd noise suppression audio',
    'freesync premium pro configuration',
    'radeon chill vs frame rate target control',
    'driver only install vs full install',
    'voltris optimizer amd fix'
];

export const metadata: Metadata = createGuideMetadata('amd-adrenalin-configuracao-competitiva', title, description, keywords);

export default function AmdGuide() {
    const summaryTable = [
        { label: "Software", value: "Adrenalin 24.x+" },
        { label: "Anti-Lag", value: "On (Level 2 in CS2)" },
        { label: "RSR", value: "Depends (See guide)" },
        { label: "Tessellation", value: "Override (x8 or x16)" },
        { label: "Texture Filtering", value: "Performance" },
        { label: "FreeSync", value: "Enabled" },
        { label: "Surface Format", value: "Disabled" },
        { label: "Voltris", value: "Recommended" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Radeon Philosophy",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike the Nvidia panel which is understated, AMD Adrenalin is a complete gaming hub. This is both good and bad. Good because we have built-in Overclocking tools (WattMan). Bad because it comes stuffed with features like "Radeon Boost" that promise performance but dynamically destroy image quality.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          In this extensive guide, we're cleaning house. We'll disable the visual "bloatware" and focus purely on frame latency and clock stability. If you suffer from <strong>"Driver Timeout" (Black screen that resets)</strong>, this guide is also the solution.
        </p>

        <div class="bg-[#0A0A0F] border border-red-500/30 p-5 rounded-xl my-6">
            <h4 class="text-red-400 font-bold mb-2">Installation: Minimal vs Full</h4>
            <p class="text-gray-300 text-sm mb-4">
                When installing the driver, AMD asks: "Full Install", "Minimal", or "Driver Only".
                <br/><strong>Voltris Recommendation:</strong> Use <strong class="text-white">Full Install</strong> if you want to Undervolt and use Anti-Lag. Use <strong>Driver Only</strong> if you have a very weak PC and want zero background processes (but you lose the control panel). The "Minimal" middle ground is not worth it.
            </p>
        </div>
      `
        },
        {
            title: "Gaming Tab: Global Settings",
            content: `
        <p class="mb-4 text-gray-300">
            Go to <strong>Gaming > Global Graphics</strong>. Ignore the "eSports" or "Gaming" presets. We'll customize.
        </p>
        
        <div class="space-y-6">
            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#FF4B6B] font-bold mb-2">Radeon Anti-Lag & Anti-Lag 2</h4>
                <p class="text-gray-400 text-sm mb-3">
                    <strong>What it does:</strong> Synchronizes CPU with GPU, similar to Nvidia Low Latency.
                </p>
                <p class="text-white font-mono text-sm border-l-2 border-[#FF4B6B] pl-3">
                    Recommendation: <strong>ON</strong>.
                </p>
                <p class="text-gray-400 text-xs mt-2">
                    In supported games (like CS2), Anti-Lag 2 appears. It is superior as it integrates with the game. Always keep it on to reduce input lag by up to 30%.
                </p>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#FF4B6B] font-bold mb-2">Radeon Boost</h4>
                <p class="text-gray-400 text-sm mb-3">
                    <strong>What it does:</strong> Dynamically reduces resolution when you move the mouse fast.
                </p>
                <p class="text-white font-mono text-sm border-l-2 border-[#FF4B6B] pl-3">
                    Recommendation: <strong>OFF</strong>.
                </p>
                <p class="text-gray-400 text-xs mt-2">
                    This causes a horrible feeling of inconsistency. Your aim feels "light" and then "heavy" because the framerate fluctuates. Never use this in competitive games.
                </p>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#FF4B6B] font-bold mb-2">Radeon Image Sharpening (RIS)</h4>
                <p class="text-gray-400 text-sm mb-3">
                    <strong>What it does:</strong> Post-processing sharpening filter.
                </p>
                <p class="text-white font-mono text-sm border-l-2 border-[#FF4B6B] pl-3">
                    Recommendation: <strong>On (10% to 20%)</strong>.
                </p>
                <p class="text-gray-400 text-xs mt-2">
                    Unlike Nvidia, AMD's filter has almost zero performance cost (CAS). It helps remove the blur from TAA antialiasing in games like Warzone. Don't go over 20% or the image gets grainy.
                </p>
            </div>

            <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
                <h4 class="text-[#FF4B6B] font-bold mb-2">Radeon Chill</h4>
                <p class="text-gray-400 text-sm mb-3">
                    <strong>What it does:</strong> Dynamic FPS limiter to save energy.
                </p>
                <p class="text-white font-mono text-sm border-l-2 border-[#FF4B6B] pl-3">
                    Recommendation: <strong>Off</strong> (For Maximum Performance).
                </p>
                <p class="text-gray-400 text-xs mt-2">
                    However, if you just want to lock your FPS, use "Frame Rate Target Control" in the Advanced tab, or Chill by setting Min and Max to the same value (e.g., 144). Chill is very efficient for gaming notebooks to avoid overheating.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Advanced Tab: Where Performance Lives",
            content: `
        <p class="mb-4 text-gray-300">
            Scroll down and open the "Advanced" section. This is where we gain free FPS.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Frame Rate Target Control:</strong> Disabled (Use in-game limiter or RivaTuner).</li>
            <li><strong>Anti-Aliasing:</strong> Use Application Settings.</li>
            <li><strong>Anti-Aliasing Method:</strong> Multisampling (Others, like Supersampling, kill FPS).</li>
            <li><strong>Morphological Anti-Aliasing:</strong> <span class="text-red-400 font-bold">OFF</span>. This blurs the entire screen, including text. Never use.</li>
            <li><strong>Anisotropic Filtering:</strong> Disabled (Let the game control).</li>
            <li><strong>Texture Filtering Quality:</strong> <span class="text-emerald-400 font-bold">Performance</span>. The visual difference to "High" is zero, but you gain stability.</li>
            <li><strong>Surface Format Optimization:</strong> <span class="text-emerald-400 font-bold">Enabled</span>. Allows the driver to change old texture formats to faster new ones.</li>
            <li><strong>Tessellation Mode:</strong> <span class="text-yellow-400 font-bold">Override application settings</span>.
                <br/><span class="text-sm text-gray-400 ml-6">Set <strong>Maximum Tessellation Level</strong> to <strong>8x or 16x</strong>. Default is 64x. The visual difference is imperceptible, but in games like The Witcher 3 or Crysis, lowering from 64x to 8x doubles the FPS.</span>
            </li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "RSR (Radeon Super Resolution): The DLSS for Everyone",
            content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
            <h4 class="text-[#FF4B6B] font-bold mb-4 text-xl">How to use RSR correctly</h4>
            <p class="text-gray-300 mb-4">
                RSR is a spatial upscaler that works at the driver level. It takes a 720p or 900p image and stretches it to 1080p with sharpness.
            </p>
            <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
                <li>Enable RSR in the AMD panel.</li>
                <li>Enter the game.</li>
                <li>Change the game resolution to a LOWER one than your monitor's (e.g., 1600x900 on a 1080p monitor) and set it to Exclusive Full Screen.</li>
                <li>The driver automatically detects and applies the upscale.</li>
            </ol>
            <p class="mt-3 text-sm text-yellow-400">
                <strong>Attention:</strong> If the game has native FSR (FidelityFX Super Resolution) in the options, USE FSR. Native FSR is better than driver-level RSR because FSR processes the image before the HUD (interface), while RSR applies the filter to the whole screen, which can make text and the minimap look ugly.
            </p>
        </div>
      `
        },
        {
            title: "Performance Tuning (Undervolt & Overclock)",
            content: `
        <p class="mb-4 text-gray-300">
            Tab <strong>Performance > Tuning</strong>. Accept the liability warning.
            <br/>AMD cards (RDNA2/3) come with very high voltage from the factory. Undervolting actually INCREASES performance because the card generates less heat and maintains higher clocks.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-[#0A0A0F] p-4 border border-white/5 rounded-lg">
                <h5 class="text-white font-bold">Safe Step-by-Step</h5>
                <ol class="list-decimal list-inside text-gray-400 text-xs mt-2 space-y-1">
                    <li>Enable "Custom" in Tuning Control.</li>
                    <li>Enable "Voltage / Frequency".</li>
                    <li>Reduce voltage (mV) in steps of -25mV.</li>
                    <li>Example RX 6600: Default 1150mV -> Safe 1100mV.</li>
                    <li>Run a benchmark (TimeSpy or game). If it doesn't crash, lower another 10mV.</li>
                </ol>
            </div>
            <div class="bg-[#0A0A0F] p-4 border border-white/5 rounded-lg">
                <h5 class="text-white font-bold">Fan Curve</h5>
                <p class="text-gray-400 text-xs mt-2">
                    Disable "Zero RPM" if you want lower temperatures at idle.
                    <br/>Adjust the curve to hit 100% fan only if it exceeds 75°C. AMD cards can handle up to 95°C (Junction Temp) easily, no need to be afraid of heat.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Stutter Fix: Shader Cache Reset",
            content: `
        <p class="mb-4 text-gray-300">
            AMD cards suffer more from shader cache corruption than Nvidia. If your game (Fortnite/Warzone) starts stuttering out of nowhere after an update:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li>Go to <strong>Gaming > Graphics</strong>.</li>
            <li>Scroll to the bottom and click on <strong>Reset Shader Cache</strong>.</li>
            <li>Restart your PC.</li>
            <li>Open the game. The first match will stutter a bit (recompiling), but then it will be smooth.</li>
            <li><strong class="text-[#FF4B6B]">Voltris Tip:</strong> Our optimizer does this automatically and also adjusts the Windows registry key (DXCache) to prevent the cache from getting fragmented.</li>
        </ol>
      `
        },
        {
            title: "FreeSync Premium Pro",
            content: `
        <p class="mb-4 text-gray-300">
            In the <strong>Display</strong> tab. Check if FreeSync is "Enabled".
            <br/>If you play competitively (CS2), some purists prefer it off. But AMD's modern FreeSync adds less than 1ms of latency. The visual smoothness of not having tearing helps a lot with target tracking in games like Apex Legends.
            <br/><strong>Ideal Configuration:</strong> FreeSync ON in Driver + V-Sync OFF in Game + FPS Cap (Hz - 3).
        </p>
      `
        },
        {
            title: "Recording Clips: Radeon ReLive",
            content: `
        <p class="mb-4 text-gray-300">
            In <strong>Record & Stream</strong>. AMD's codec (AMF/VCE) has improved significantly.
            <br/>To record without losing FPS:
            <br/>- Use <strong>HEVC (H.265)</strong> codec if you're just recording to edit and post on YouTube (smaller file size and better quality).
            <br/>- Use <strong>AVC (H.264)</strong> if you're streaming on Twitch (Twitch doesn't support H.265 well yet).
            <br/>- Recording Bitrate: 30 Mb/s for 1080p60 is sufficient.
            <br/>- Disable "Instant Replay" (the replay buffer) if you have little RAM (8GB), as it reserves RAM for the buffer.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Error Diagnosis (Driver Timeout)",
            content: `
            <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20">
                <h4 class="text-red-400 font-bold mb-3 text-xl">The "AMD Driver Timeout" Curse</h4>
                <p class="text-gray-300 mb-4">
                    If your screen freezes and the software warns that the driver has crashed. Common causes:
                </p>
                <ul class="list-disc list-inside text-gray-300 text-sm space-y-2">
                    <li><strong>MPO (Multi-Plane Overlay):</strong> Just like with Nvidia, Windows MPO bugs AMD drivers. Voltris Optimizer disables this.</li>
                    <li><strong>Unstable RAM:</strong> The AMD driver is very sensitive to bad RAM. If XMP is unstable, the video driver is the first to go. Try disabling Bios XMP.</li>
                    <li><strong>Windows Update:</strong> Windows loves to replace the official AMD driver with an old "Basic Display Adapter" version. Use Microsoft's "Show/Hide Updates" tool to block video driver updates or use DDU with the "Prevent Windows Update" option checked.</li>
                </ul>
            </div>
            `
        },
        {
            title: "Appendix: 10-Bit Color and Pixel Format",
            content: `
            <p class="mb-4 text-gray-300">
                In the <strong>Display</strong> tab, check "Pixel Format".
                <br/>It should be <strong>RGB 4:4:4 Pixel Format PC Standard (Full RGB)</strong>.
                <br/>If your monitor supports it, enable <strong>10-bit Color Depth</strong>. AMD has excellent 10-bit support (better color gradients) in OpenGL and DirectX, superior to Nvidia in professional applications.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is AMD Noise Suppression worth it?",
            answer: "It's good, but consumes a bit of GPU processing using 'AI Accelerators' (on 7000 series) or Shaders (on 6000 series). If you have a strong CPU, prefer using Discord's Krisp. If you need noise suppression for local recording (OBS), AMD's is excellent."
        },
        {
            question: "Should I use 'Enhanced Sync'?",
            answer: "Be careful. Enhanced Sync allows unlimited FPS without tearing, but can cause micro-stutters (frame skips). For competitive play, normal FreeSync is more consistent. Only use Enhanced Sync if you have a 60Hz monitor and want to play at 200 FPS without screen tearing."
        },
        {
            question: "Is the 'Pro' driver (blue) better than Adrenalin (red)?",
            answer: "For gaming, no. The Pro driver is certified for CAD/SolidWorks and updates rarely. Adrenalin receives game optimizations ('Game Ready') every month. Stick with the red (Adrenalin)."
        }
    ];

    const externalReferences = [
        { name: "AMD Anti-Lag 2 Technical Docs", url: "https://gpuopen.com/technologies/anti-lag-2/" },
        { name: "Ancient Gameplays (AMD specialist channel)", url: "https://www.youtube.com/@AncientGameplays" },
        { name: "MorePowerTool (Advanced AMD BIOS Tweak)", url: "https://www.igorslab.de/en/red-bios-editor-and-morepowertool-adjust-and-optimize-your-vbios-and-more-stable-overclocking-navi-unlimited/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "DDU Guide",
            description: "Crucial for those who migrated from Nvidia to AMD."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "Fast texture loading."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Setup",
            description: "Configure FreeSync on the monitor."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="50 min"
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

