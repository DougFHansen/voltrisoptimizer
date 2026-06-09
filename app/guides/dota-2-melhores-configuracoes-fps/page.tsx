import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'dota-2-melhores-configuracoes-fps',
    title: "Dota 2 (2026): FPS Guide, Vulkan vs. DX11, and Console Commands",
    description: "Optimize Dota 2 for intense teamfights. Learn network console commands, how to choose the correct graphics API, FidelityFX Super Resolution settings, and more.",
    category: 'games',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "Dota 2 Optimization (2026): Vulkan, Networking, and Stability";
const description = "Dota 2 is complex. Illusions, particle effects, and Enigma's Black Hole can crush your FPS. Learn how to configure the game to prioritize visual clarity and rapid response.";

const keywords = [
    'dota 2 fps boost 2026 console commands',
    'dota 2 vulkan vs dx11 performance',
    'compute shaders dota 2 on or off',
    'fidelityfx super resolution dota 2 worth it',
    'how to increase fps dota 2 low end pc',
    'rate 200000 console dota 2',
    'disable dota 2 menu background novid',
    'dota 2 stuttering in teamfights',
    'voltris optimizer dota 2 high priority'
];

export const metadata: Metadata = createGuideMetadata('dota-2-melhores-configuracoes-fps', title, description, keywords);

export default function DotaGuide() {
    const summaryTable = [
        { label: "API", value: "DX11 (Nvidia) / Vulkan (AMD)" },
        { label: "Render Quality", value: "100% (No Upscale)" },
        { label: "Shadows", value: "Medium" },
        { label: "Effects", value: "Low" },
        { label: "Compute Shaders", value: "On (With decent GPU)" },
        { label: "V-Sync", value: "Off" },
        { label: "Network", value: "High-End Network" }
    ];

    const contentSections = [
        {
            title: "Introduction: Source 2 and APIs",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Dota 2 was the first game to transition to the Source 2 engine. This modern engine supports multiple APIs (DX11, Vulkan, OpenGL). Choosing the right one can significantly boost your FPS depending on your hardware.
        </p>
      `
        },
        {
            title: "Chapter 1: Selecting Your Graphics API (DLC)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">How to Install APIs</h4>
                <p class="text-white font-mono text-sm mb-2">Steam > Dota 2 > Properties > DLC</p>
                <p class="text-gray-400 text-xs">Check "Vulkan Support". Uncheck OpenGL (which is now obsolete).</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Launch Options (-vulkan vs. -dx11)</h4>
                <ul class="list-disc list-inside text-gray-300 text-xs mt-2">
                    <li><strong>-dx11:</strong> The standard and most stable option for Nvidia GPUs (GTX/RTX series).</li>
                    <li><strong>-vulkan:</strong> Recommended for AMD GPUs (RX Series) or Linux users. It can also help with CPU overhead on weaker processors. Give it a test!</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Advanced Video Settings",
            content: `
        <p class="mb-4 text-gray-300">
            Use "Advanced Settings" instead of the basic quality slider for finer control.
        </p>
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Game Screen Render Quality</td>
                    <td class="py-2 text-emerald-400">100%</td>
                    <td class="py-2">Setting this below 100% will make the game look blurry. Keep it at 100% and lower other settings first.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Shadow Quality</td>
                    <td class="py-2 text-yellow-400">Medium/High</td>
                    <td class="py-2">Shadows are useful for spotting flying units. Avoid disabling them entirely.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Effect Quality</td>
                    <td class="py-2 text-yellow-400">Low</td>
                    <td class="py-2">This is essential for reducing visual clutter during teamfights.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Graphic Options (Toggles)",
            content: `
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Additive Light Pass:</strong> On (Crucial for proper map lighting).</li>
            <li><strong>World Lighting:</strong> On.</li>
            <li><strong>Ambient Occlusion:</strong> <span class="text-red-400">Off</span> (Resource-heavy and unnecessary).</li>
            <li><strong>Normal Maps:</strong> On (Adds depth to textures).</li>
            <li><strong>Ground Parallax:</strong> Off (Adds 3D-like depth to the ground, mostly unnoticeable).</li>
            <li><strong>Anti-Aliasing:</strong> On (Dota 2 looks very jagged without it).</li>
            <li><strong>Compute Shaders:</strong> <span class="text-emerald-400">On</span> (If you have a modern GPU, this uses it to offload particle performance from the CPU).</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: FidelityFX Super Resolution (FSR)",
            content: `
        <p class="mb-4 text-gray-300">
            If your PC struggle to run the game natively:
            <br/>Enable FSR in the video menu and reduce the "Game Screen Render Quality" slightly (to 99% or lower).
            <br/>FSR will then upscale the image, maintaining sharpness (though it may appear over-sharpened) while providing a significant FPS boost on integrated GPUs.
        </p>
      `
        },
        {
            title: "Chapter 5: Console Commands & Launch Options",
            content: `
        <p class="mb-4 text-gray-300">
            Add these to your Steam launch options:
            <br/><code>-novid -high -map dota -console</code>
            <br/>-novid: Skips the Valve intro.
            <br/>-map dota: Pre-loads the map on startup (increases initial load time but prevents freezes during match loading).
            <br/>In the Console (in-game):
            <br/><code>fps_max 0</code> (or set to your monitor's refresh rate).
            <br/><code>engine_no_focus_sleep 0</code> (Prevents FPS from dropping when Alt+Tabbing, great for dual-monitor setups).
        </p>
      `
        },
        {
            title: "Chapter 6: Network Quality",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Options > Advanced > Network.
            <br/>Set "Network Quality" to <strong>High-End Network</strong>.
            <br/>This increases packet transmission rates, reducing input lag. Only use "Low-End" if you have a poor or unstable connection (like mobile data) to avoid packet loss.
            <br/>Console Command: <code>cl_interp_ratio 1</code> (Forces minimal interpolation).
        </p>
      `
        },
        {
            title: "Chapter 7: Disable Menu Backgrounds",
            content: `
        <p class="mb-4 text-gray-300">
            The main menu often has heavy animations (like new hero releases or Arcanas) that consume resources.
            <br/>Use this launch option: <code>+map_enable_background_maps 0</code>.
            <br/>This results in a static black background, keeping the GPU cool and the menu responsive.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Audio Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                Enable <strong>"Streamlined Push To Talk"</strong> in the audio settings.
                <br/>This prevents the half-second game freeze that often occurs when pressing the voice key due to engine overhead.
            </p>
            `
        },
        {
            title: "Chapter 9: Minimap and Visibility",
            content: `
            <p class="mb-4 text-gray-300">
                Consider using simple icons (Arrows/X) on the minimap instead of hero portraits for faster information processing.
                <br/>Increase the minimap size to "Extra Large" in the interface options for better map awareness.
            </p>
            `
        },
        {
            title: "Chapter 10: Pre-caching (Prewarm)",
            content: `
            <p class="mb-4 text-gray-300">
                The <code>-prewarm</code> launch option is enabled by default in modern versions of Dota 2.
                <br/>It loads essential assets before you reach the main menu. If the game takes a moment to open, let it work—it's preventing stutters during your match.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does your game stutter when buying items?",
            answer: "This is usually a disk I/O issue. Ensure Dota 2 is installed on an SSD. On older HDDs, the 'gold' sound effect can actually cause a brief freeze."
        },
        {
            question: "Is the dashboard (menu) feeling sluggish?",
            answer: "Refer to Chapter 7 to disable menu backgrounds, or consider manually removing video files from the game's /videos/panorama folder."
        },
        {
            question: "Experiencing high packet loss?",
            answer: "Check your server region. You can also try forcing a specific relay cluster using the command `sdr SDRClient_ForceRelayCluster gru` (to force the São Paulo route)."
        }
    ];

    const externalReferences = [
        { name: "Dota 2 Dev Forums (Performance)", url: "https://dev.dota2.com/" },
        { name: "Liquipedia Dota 2 Settings", url: "https://liquipedia.net/dota2/Game_Settings" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Setup",
            description: "Power management for Dota."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "Why an SSD is crucial for Dota."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Ping Fixes",
            description: "Optimizing network routes."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
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
