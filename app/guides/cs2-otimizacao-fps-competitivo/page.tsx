import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cs2-otimizacao-fps-competitivo',
    title: "Counter-Strike 2 (CS2) 2026: The Ultimate Optimization and FPS Guide",
    description: "The CS2 optimization bible. Console commands, autoexec, launch options that actually work, sound settings for footsteps, and Nvidia Reflex.",
    category: 'games',
    difficulty: 'Advanced',
    time: '60 min'
};

const title = "CS2 Optimization Bible (2026): FPS, Visibility, and Latency";
const description = "Source 2 changed everything. CS:GO launch options no longer work. Learn how to configure the game from scratch to gain a real competitive advantage.";

const keywords = [
    'cs2 fps boost 2026 autoexec',
    'best launch options cs2 steam',
    'cl_interp cs2 rate command',
    'nvidia reflex on or boost cs2',
    'configure cs2 sound hear footsteps far',
    'increase cs2 visibility contrast',
    'stretched resolution 4:3 cs2 nvidia',
    'disable fullscreen optimization cs2',
    'bind jumpthrow cs2 manual',
    'how to see fps cs2 command'
];

export const metadata: Metadata = createGuideMetadata('cs2-otimizacao-fps-competitivo', title, description, keywords);

export default function CS2Guide() {
    const summaryTable = [
        { label: "Launch Options", value: "-nojoy -softparticlesdefaultoff" },
        { label: "Reflex", value: "Enabled + Boost" },
        { label: "Shadows", value: "High (Visibility)" },
        { label: "Model/Texture", value: "Low (Performance)" },
        { label: "FSR", value: "Disabled (Blur)" },
        { label: "Audio", value: "Loudness Eq. ON" },
        { label: "Resolution", value: "1280x960 (4:3)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Source 2 vs Hardware",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          CS2 is much heavier on the GPU than CS:GO. Old launch options like <code>-high</code>, <code>-threads</code>, or <code>-d3d9ex</code> <strong>DO NOT WORK</strong> or cause instability in Source 2. Stop using 2018 configs.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we will focus on what Valve has technically confirmed affects subtick and rendering latency.
        </p>
      `
        },
        {
            title: "Chapter 1: Launch Options (Cleanup)",
            content: `
        <div class="bg-[#0A0A0F] p-5 rounded-xl border border-white/5">
            <h4 class="text-[#31A8FF] font-bold mb-2">Recommended Commands (Safe)</h4>
            <code class="block bg-black/50 p-3 rounded text-green-400 font-mono text-sm mb-3">
                -nojoy -softparticlesdefaultoff -console
            </code>
            <ul class="list-disc list-inside text-gray-400 text-sm space-y-2">
                <li><strong>-nojoy:</strong> Disables Joystick support, freeing up a small amount of RAM and CPU cycles.</li>
                <li><strong>-softparticlesdefaultoff:</strong> Disables soft rendering of distant particles (smoke), gaining FPS without visual loss.</li>
                <li><strong>-console:</strong> Opens the console upon startup.</li>
            </ul>
            <div className="mt-4 bg-red-900/20 border-l-4 border-red-500 p-3">
                <p class="text-red-200 text-xs font-bold">DO NOT USE:</p>
                <p class="text-gray-400 text-xs">-high (Causes instability in Windows 11), -threads (Source 2 manager is better than manual), -freq (The game already takes the desktop Hz).</p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Video Settings (Competitive)",
            content: `
        <p class="mb-4 text-gray-300">
            The secret here is not to set everything to Low. Some options need to be on High so you can see the enemy.
        </p>
        <table class="w-full text-sm text-left text-gray-400 mb-6">
             <thead class="text-xs text-uppercase bg-gray-800 text-white">
                <tr><th class="px-4 py-2">Option</th><th class="px-4 py-2">Ideal Value</th><th class="px-4 py-2">Reason</th></tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Boost Player Contrast</td>
                    <td class="px-4 py-2 text-emerald-400">Enabled</td>
                    <td class="px-4 py-2">Essential for seeing enemies in dark corners.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Model/Texture/Shader</td>
                    <td class="px-4 py-2 text-yellow-400">Low</td>
                    <td class="px-4 py-2">Less visual noise, more FPS.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Global Shadow Quality</td>
                    <td class="px-4 py-2 text-emerald-400">High</td>
                    <td class="px-4 py-2"><strong>CRITICAL.</strong> On Low, you don't see the enemy shadow before they appear around the corner.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Multisampling (MSAA)</td>
                    <td class="px-4 py-2">CMAA2 or 4x</td>
                    <td class="px-4 py-2">Without AA, lines shake and hinder long-distance vision.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Ambient Occlusion</td>
                    <td class="px-4 py-2 text-red-400">Disabled</td>
                    <td class="px-4 py-2">Consumes 15% of FPS to create pretty shadows. Useless in competitive play.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="px-4 py-2 font-bold">Nvidia Reflex</td>
                    <td class="px-4 py-2 text-emerald-400">Enabled + Boost</td>
                    <td class="px-4 py-2">Reduces latency while keeping GPU clock high.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Autoexec.cfg (Network Optimization)",
            content: `
        <p class="mb-4 text-gray-300">
            Create an <code>autoexec.cfg</code> file in the <code>game\\csgo\\cfg</code> folder.
        </p>
        <div class="bg-black/50 p-4 rounded-xl border border-gray-700 font-mono text-xs text-gray-300 overflow-x-auto">
            // Network (Maximized for 2026)<br/>
            rate "786432" // (Maximum allowed, essential for 128tick/subtick)<br/>
            cl_updaterate "128"<br/>
            cl_interp_ratio "1"<br/>
            cl_interp "0.015625"<br/><br/>
            
            // FPS and HUD<br/>
            fps_max "400" // (Or 0 for unlimited, but 400 is stable)<br/>
            cl_showfps "0"<br/>
            cq_netgraph "1" // (New CS2 netgraph, shows packet loss)<br/><br/>
            
            // Radar (To see the entire map)<br/>
            cl_radar_scale "0.3"<br/>
            cl_radar_always_centered "0"<br/><br/>
            
            // Jumpthrow (Now native, but good to ensure)<br/>
            alias "+jumpaction" "+jump;"<br/>
            alias "+throwaction" "-attack; -attack2"<br/>
            alias "-jumpaction" "-jump"<br/>
            bind "c" "+jumpaction;+throwaction;"
        </div>
        <p class="mt-4 text-gray-400 text-sm">
            Add <code>+exec autoexec.cfg</code> in launch options to ensure it loads.
        </p>
      `
        },
        {
            title: "Chapter 4: Audio (Hear Footsteps Far)",
            content: `
        <p class="mb-4 text-gray-300">
            CS2 sound is different. To hear distant footsteps (Low Frequencies) and reduce AK-47 noise (High Frequencies):
        </p>
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>In Windows: Sound Control Panel > Device > Properties > Enhancements.</li>
            <li>Enable <strong>"Loudness Equalization"</strong>.</li>
            <li>In-game: Audio Profile > <strong>"Crisp"</strong>.</li>
            <li>L/R Isolation: <strong>50-70%</strong> (100% separates too much and confuses the center).</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 5: Stretched Resolution 4:3",
            content: `
        <p class="mb-4 text-gray-300">
            The pros' choice.
            <br/><strong>Advantage:</strong> Enemy models get "fatter," easier to hit. Fewer pixels to render = More FPS.
            <br/><strong>Disadvantage:</strong> Lower field of view (FOV), enemies move faster on screen.
        </p>
        <div class="bg-gray-800 p-4 rounded text-sm text-gray-300">
            <strong>How to Configure:</strong>
            <br/>1. Nvidia Panel > Adjust desktop size and position.
            <br/>2. Scaling: <strong>Full-screen</strong>.
            <br/>3. Game: Video > Resolution > <strong>1280x960</strong> (Best quality/performance) or 1024x768 (Potato PC).
        </div>
      `
        },
        {
            title: "Chapter 6: Fullscreen Optimization (Windows Bug)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows tries to optimize games by applying a hybrid overlay. In CS2, this can cause input lag.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Go to <code>steamapps\\common\\Counter-Strike Global Offensive\\game\\bin\\win64\\cs2.exe</code></li>
            <li>Right click > Properties > Compatibility.</li>
            <li>Check <strong>"Disable fullscreen optimizations"</strong>.</li>
            <li>If you have slow Alt+Tab issues, uncheck. But for pure FPS, check it.</li>
        </ul>
      `
        },
        {
            title: "Chapter 7: Cache Cleaning (DirectX)",
            content: `
        <p class="mb-4 text-gray-300">
            If your CS2 has micro-stutters every time you see an enemy:
            <br/>DirectX shader cache may be corrupted.
            <br/>1. Use Windows Disk Cleanup.
            <br/>2. Check "DirectX Shader Cache."
            <br/>3. Execute.
            <br/>Next time you open the game, it will take a bit longer to load the map, recreating a clean cache.
        </p>
      `
        },
        {
            title: "Chapter 8: Telemetry and Packet Loss",
            content: `
        <p class="mb-4 text-gray-300">
            In game settings > Game > Telemetry.
            <br/>Set "Show under poor conditions" to <strong>Always</strong> or configure to show FPS and Ping.
            <br/>This replaces the old <code>net_graph 1</code>. Keep an eye on the top right corner. If red squares appear, it's packet loss from your internet, not the PC's fault.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 9: Essential Workshop Maps",
            content: `
            <p class="mb-4 text-gray-300">
                Optimize your training. Subscribe to the Steam workshop:
                <br/>- <strong>CS2_AIM</strong>: To warm up your aim.
                <br/>- <strong>Recoil Master</strong>: To learn AK/M4 spray patterns.
                <br/>- <strong>Benchmark Map</strong>: To test if your settings actually increased average FPS.
            </p>
            `
        },
        {
            title: "Chapter 10: Voltris Optimizer in CS2",
            content: `
            <p class="mb-4 text-gray-300">
                **Voltris Optimizer** detects CS2 and automatically applies:
                <br/>- "High" CPU priority (safely).
                <br/>- Core Parking deactivation (to use all cores).
                <br/>- "Bitsum Highest Performance" Power Plan while running the game.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Clear Decals (r_cleardecals) still work?",
            answer: "No. The `r_cleardecals` command was removed in CS2. Blood now disappears over time or is washed away by water. There is no longer an instant clear blood bind."
        },
        {
            question: "60Hz vs 144Hz vs 240Hz in CS2?",
            answer: "In CS2, smoothness is even more noticeable. 60Hz is competitively unplayable. 144Hz is the mandatory minimum. 240Hz+ gives an advantage in 'Subtick,' as the server registers your shot with more temporal precision."
        },
        {
            question: "V-Sync in CS2?",
            answer: "NEVER. ABSOLUTELY NOT. V-Sync adds about 15ms to 30ms of input lag. In CS, 1ms defines life or death. Always leave V-Sync OFF."
        }
    ];

    const externalReferences = [
        { name: "ProSettings.net (Pro Players Configs)", url: "https://prosettings.net/lists/cs2/" },
        { name: "Valve Developer Community (Console Commands)", url: "https://developer.valvesoftware.com/wiki/Counter-Strike_2" },
        { name: "Steam Workshop CS2", url: "https://steamcommunity.com/app/730/workshop/" }
    ];

    const relatedGuides = [
        {
            href: "/guias/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Panel",
            description: "Configure 4:3 Stretched here."
        },
        {
            href: "/guias/mouse-dpi-polling-rate-ideal",
            title: "Mouse Guide",
            description: "Ideal DPI (400 vs 800) for CS2."
        },
        {
            href: "/guias/reduzir-ping-regedit-cmd-jogos",
            title: "Reduce Ping",
            description: "Optimization of routes and network."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            externalReferences={externalReferences}
        />
    );
}
