import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'valorant-reduzir-input-lag',
    title: "Valorant (2026): Extreme FPS and Zero Latency Guide",
    description: "Want to climb the ranks? Start by optimizing your PC. Learn how to configure Raw Input Buffer, Nvidia Reflex, Multithreaded Rendering, and tweaks in GameUserSettings.ini.",
    category: 'games',
    difficulty: 'Advanced',
    time: '55 min'
};

const title = "Valorant Optimization (2026): Minimum Input Lag and Maximum FPS";
const description = "Valorant is a CPU-bound game. If your CPU stutters, you miss your shot. This guide adjusts Windows and the game to ensure your reaction time is the only limit.";

const keywords = [
    'valorant fps boost 2026 config',
    'input lag valorant nvidia reflex on boost',
    'raw input buffer valorant on or off',
    'multithreaded rendering valorant what is it',
    'configure hrtf sound valorant',
    'stretched resolution valorant',
    'vanguard high cpu usage fix',
    'gameusersettings.ini valorant tweak',
    'network buffering minimum moderate',
    'voltris optimizer valorant priority'
];

export const metadata: Metadata = createGuideMetadata('valorant-reduzir-input-lag', title, description, keywords);

export default function ValorantGuide() {
    const summaryTable = [
        { label: "Reflex", value: "On + Boost" },
        { label: "Raw Input", value: "On (Mouse 8KHz)" },
        { label: "Multithread", value: "On (If 6+ cores)" },
        { label: "Material", value: "Low" },
        { label: "UI", value: "Low" },
        { label: "Vignette", value: "Off" },
        { label: "Anti-Aliasing", value: "MSAA 2x/4x" }
    ];

    const contentSections = [
        {
            title: "Introduction: CPU Bound",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Valorant runs even on a toaster, but running at 60 FPS vs 300 FPS makes an enormous difference in "Peeker's Advantage". Since the game relies heavily on a single CPU core (Single Thread), any background Windows process can cause a micro-stutter.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we won't just tweak the menu. We'll edit the <code>.ini</code> file and configure Windows to give total priority to the <code>VALORANT-Win64-Shipping.exe</code> process.
        </p>
        
        <div class="bg-[#0A0A0F] border border-red-500/30 p-5 rounded-xl my-6">
            <h4 class="text-red-400 font-bold mb-2">Vanguard and Performance</h4>
            <p class="text-gray-300 text-sm">
                Riot's anti-cheat (Vanguard/vgc.exe) runs at the Kernel level (Ring 0). It is aggressive. Sometimes it conflicts with RGB drivers (iCUE, Razer Synapse) or third-party antivirus (Avast/Kaspersky).
                <br/><strong>Voltris Tip:</strong> If your Valorant stutters, uninstall RGB software and use only Windows Defender. Voltris Optimizer has a "Riot Compatible" mode that disables conflicting services without turning off security.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Video Settings (General)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#FF4655] font-bold mb-1">Nvidia Reflex Low Latency</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">On + Boost</span></p>
                <p class="text-gray-400 text-xs">Keeps the GPU at max clock and eliminates the render queue. Essential.</p>
            </div>
            
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#FF4655] font-bold mb-1">Multithreaded Rendering</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">On</span></p>
                <p class="text-gray-400 text-xs">Enable if your CPU has 6 or more cores and 12 threads. If you have an old i3 or dual-core, disable it, as it can cause stutters.</p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Graphics (Quality vs Clarity)",
            content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Material, Texture, UI Quality</td>
                    <td class="py-2 text-yellow-400">Low</td>
                    <td class="py-2">Less detail = Enemies stand out more.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Vignette</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Darkens screen edges. Terrible for visibility.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">VSync</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Pure latency. Never enable it.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Anti-Aliasing</td>
                    <td class="py-2 text-emerald-400">MSAA 4x</td>
                    <td class="py-2">Without AA, fences and wires flicker. MSAA 2x or 4x is lightweight and clears the view. Avoid FXAA (blurry).</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Anisotropic Filtering</td>
                    <td class="py-2">4x or 8x</td>
                    <td class="py-2">Improves floor textures at oblique angles. Low cost.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Bloom/Distortion/Shadows</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Visual clutter. Disable everything.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Raw Input Buffer (The Revolution)",
            content: `
        <p class="mb-4 text-gray-300">
            In "General" settings > "Mouse".
            <br/><strong>Raw Input Buffer:</strong> <span class="text-emerald-400 font-bold">ON</span>.
            <br/>This makes the game read mouse data directly from the hardware API, bypassing Windows.
            <br/><em>Why?</em> If you have a 1000Hz mouse (gamer standard) or 4000Hz/8000Hz (High Polling), Windows can stutter processing that much movement. Raw Input fixes this. Even with a simple mouse, the aiming feel becomes more "raw" and direct.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Stretched Resolution (The Myth)",
            content: `
        <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
            <h4 class="text-orange-400 font-bold mb-4 text-xl">Difference from CS2</h4>
            <p class="text-gray-300 mb-4">
                In CS2, using 4:3 stretched makes models fatter. <strong>In Valorant, it does NOT.</strong>
                <br/>Riot blocked this. If you set 1280x960, only the HUD (interface, map, health) gets stretched. Character models remain the same width (fixed FOV of 103 horizontal).
            </p>
            <p class="text-white text-sm font-bold">So why do pros use it?</p>
            <ul class="list-disc list-inside text-gray-300 text-sm">
                <li>Crosshair becomes larger and more visible.</li>
                <li>Fewer pixels for the GPU to render = More FPS (good for weak PCs).</li>
                <li>Habit from CS.</li>
            </ul>
        </div>
      `
        },
        {
            title: "Chapter 5: GameUserSettings.ini (Tweak)",
            content: `
        <p class="mb-4 text-gray-300">
            To force graphic settings below Low.
            <br/>File at: <code>%localappdata%\\VALORANT\\Saved\\Config\\(YourID)\\Windows\\GameUserSettings.ini</code>.
        </p>
        <div class="bg-black/50 p-4 rounded font-mono text-xs text-gray-300 overflow-x-auto">
            [ScalabilityGroups]<br/>
            sg.ResolutionQuality=100.000000<br/>
            sg.ViewDistanceQuality=0<br/>
            sg.AntiAliasingQuality=0<br/>
            sg.ShadowQuality=0<br/>
            sg.PostProcessQuality=0<br/>
            sg.TextureQuality=0<br/>
            sg.EffectsQuality=0<br/>
            sg.FoliageQuality=0<br/>
            sg.ShadingQuality=0
        </div>
        <p class="mt-2 text-xs text-gray-400">
            Set the file as "Read Only" after editing so the game doesn't overwrite it.
        </p>
      `
        },
        {
            title: "Chapter 6: Network Optimization (Network Buffering)",
            content: `
        <p class="mb-4 text-gray-300">
            In General > Network:
            <br/><strong>Network Buffering:</strong>
            <br/>- <strong class="text-emerald-400">Minimum:</strong> For low ping (0-30ms) and stable connection. Lowest possible delay.
            <br/>- <strong>Moderate:</strong> For unstable or high ping (60ms+). Adds a slight delay to smooth enemy movement and prevent teleporting.
            <br/>Never use "Maximum".
        </p>
      `
        },
        {
            title: "Chapter 7: HRTF (3D Audio)",
            content: `
        <p class="mb-4 text-gray-300">
            In Audio > Speaker Configuration: <strong>Stereo</strong>.
            <br/>Below, enable <strong>HRTF (Head-Related Transfer Function)</strong>.
            <br/>HRTF simulates 3D sound in stereo headphones. It is essential for knowing if footsteps come from above (Heaven) or below (Hell) on maps like Haven.
            <br/><em>Note:</em> Disable any virtual "7.1 Surround" from your headset (Razer/Logitech). Keep the sound pure and let the game's HRTF do the work.
        </p>
      `
        },
        {
            title: "Chapter 8: Process Priority (Regedit)",
            content: `
        <p class="mb-4 text-gray-300">
            We can tell Windows to always give "High" priority to Valorant via the registry.
            <br/>Key: <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Image File Execution Options\\VALORANT-Win64-Shipping.exe\\PerfOptions</code>
            <br/>DWORD Value: <code>CpuPriorityClass</code> = 3 (High).
            <br/><strong>Voltris Optimizer</strong> applies this with one click.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 9: Stats (What to monitor?)",
            content: `
            <p class="mb-4 text-gray-300">
                Enable in Video > Statistics:
                <br/>- <strong>Client FPS:</strong> Text Only.
                <br/>- <strong>Network RTT (Ping):</strong> Text Only.
                <br/>- <strong>Packet Loss:</strong> Graph (To see spikes).
                <br/>- <strong>Render Time (CPU/GPU):</strong> Useful to know the bottleneck. If CPU Time > GPU Time, you are CPU Bound.
            </p>
            `
        },
        {
            title: "Chapter 10: SSD Optimization (Loading)",
            content: `
            <p class="mb-4 text-gray-300">
                Install Valorant on an SSD. If someone takes too long to load in the agent selection, everyone waits.
                <br/>Also, assets loaded from an HDD during the game (new skins) can cause stutters.
                <br/>Check our <a href="/guides/otimizacao-ssd-windows-11" class="text-blue-400 underline">SSD Optimization Guide</a> to ensure maximum speed.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Should I limit FPS in the menu?",
            answer: "Yes! Limit to 30 FPS or 60 FPS in the menu. This lets your GPU cool down between matches. There's no reason to render the menu at 500 FPS wasting energy."
        },
        {
            question: "Nvidia Low Latency in the Control Panel or in-game?",
            answer: "In-game (Reflex). If the game has Reflex, the Nvidia panel option is automatically ignored. Keep Reflex On + Boost inside Valorant."
        },
        {
            question: "Maps load but textures take a long time?",
            answer: "This is slow texture streaming. Common with HDDs or low VRAM. Reduce texture quality to Low and close browsers in the background to free up VRAM."
        }
    ];

    const externalReferences = [
        { name: "Riot Support - Specs & Performance", url: "https://support-valorant.riotgames.com/hc/en-us/articles/360044136134-Minimum-Recommended-PC-Specs" },
        { name: "Battle(non)sense (Input Lag Analysis)", url: "https://www.youtube.com/user/xFPxAUTh0rT" },
        { name: "Voltris Optimizer (Riot Compatible Mode)", url: "/voltrisoptimizer" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Guide",
            description: "Tune the control panel to complement the game."
        },
        {
            href: "/guides/mouse-dpi-polling-rate-ideal",
            title: "Mouse Guide",
            description: "800 DPI vs 1600 DPI in Valorant."
        },
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Guide",
            description: "DyAc is perfect for Valorant."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="55 min"
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



