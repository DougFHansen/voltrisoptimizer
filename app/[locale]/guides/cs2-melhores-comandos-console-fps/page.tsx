import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'cs2-melhores-comandos-console-fps',
  title: "CS2: Ultimate Commands List and FPS Optimization Guide (2026)",
  description: "Counter-Strike 2 demands more from your PC. Discover console commands that actually work, configure Sub-Tick, disable telemetry, and optimize the Source 2 engine.",
  category: 'optimization',
  difficulty: 'Advanced',
  time: '30 min'
};

const title = "CS2: The Ultimate Console Commands and Performance Guide (2026)";
const description = "The Source 2 era is here. Forget CS:GO commands. Learn how to configure CS2 for minimum latency and maximum FPS with the new updated cvar list.";

const keywords = [
  'cs2 increase fps console commands',
  'autoexec cs2 2026 download',
  'cs2 stuttering fix 2026',
  'show fps command cs2 net_graph',
  'cl_interp cs2 subtick fix',
  'best cs2 launch options steam',
  'optimize nvidia reflex cs2',
  'input lag cs2 vs csgo'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('cs2-melhores-comandos-console-fps', title, description, keywords, locale);
}

export default function CS2OptimizationGuide() {
  const summaryTable = [
    { label: "Engine", value: "Source 2" },
    { label: "Architecture", value: "Sub-Tick (Server) + 64-bit" },
    { label: "Main Bottleneck", value: "GPU (Different from CS:GO)" },
    { label: "Key Optimization", value: "Clear Shader Cache" },
    { label: "Stats Command", value: "cl_showfps 1 (net_graph is dead)" },
    { label: "Reflex", value: "Mandatory (On + Boost)" }
  ];

  const contentSections = [
    {
      title: "Goodbye Source 1, Hello Source 2: What Changed?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Counter-Strike 2 isn't just a visual update; it's a total rewrite of the physics and network engine. While CS:GO was almost exclusively dependent on the CPU (single-core speed), CS2 utilizes the GPU intensively to render volumetric smokes, sub-surface lighting, and high-resolution PBR textures.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          This means that many old <code>launch options</code> commands (like <code>-high</code>, <code>-threads</code>, <code>-nod3d9ex</code>) are now <strong>useless or harmful</strong>. In 2026, optimizing CS2 requires a clean and modern approach, focused on the Sub-Tick system and Frame Time stability (1% Lows).
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">📡</span> Route and Sub-Tick Optimization
            </h4>
            <p class="text-gray-300 mb-4">
                The CS2 Sub-Tick system sends input packets with precise timestamps. Any network instability (Jitter) makes shots 'disappear'. <strong>Voltris Optimizer</strong> adjusts the Windows TCP/IP protocol and disables 'Nagle's Algorithm' to ensure your packets reach the Valve server without waiting in queue at the network adapter.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Stabilize Ping with Voltris
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "Understanding Sub-Tick: Why do you miss the shot?",
      content: `
        <p class="mb-4 text-gray-300">
            In CS:GO, the server 'read' your actions 64 times per second (or 128 times on Faceit). In CS2, the server knows the <strong>exact</strong> moment between ticks that you clicked.
        </p>
        
        <div class="my-8 bg-[#0F111A] p-6 rounded-xl border border-white/5 flex flex-col items-center">
            <h4 class="text-white font-bold mb-6 text-center">Tickrate (CS:GO) vs Sub-Tick (CS2)</h4>
            <svg viewBox="0 0 800 250" class="w-full h-auto text-gray-300" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(50, 50)">
                    <text x="0" y="-10" fill="#94a3b8" font-size="12" font-weight="bold">CS:GO (Tick Based)</text>
                    <line x1="0" y1="20" x2="700" y2="20" stroke="#475569" stroke-width="2"/>
                    
                    <line x1="100" y1="10" x2="100" y2="30" stroke="#fbbf24" stroke-width="2"/>
                    <text x="100" y="45" text-anchor="middle" fill="#fbbf24" font-size="10">Tick 1</text>
                    
                    <line x1="300" y1="10" x2="300" y2="30" stroke="#fbbf24" stroke-width="2"/>
                    <text x="300" y="45" text-anchor="middle" fill="#fbbf24" font-size="10">Tick 2</text>
                    
                    <line x1="500" y1="10" x2="500" y2="30" stroke="#fbbf24" stroke-width="2"/>
                    <text x="500" y="45" text-anchor="middle" fill="#fbbf24" font-size="10">Tick 3</text>

                    <circle cx="250" cy="20" r="6" fill="#ef4444"/>
                    <text x="250" y="0" text-anchor="middle" fill="#ef4444" font-size="10" font-weight="bold">Your Click</text>
                    
                    <path d="M 250 20 Q 275 10 300 20" fill="none" stroke="#ef4444" stroke-dasharray="4 2"/>
                    <text x="350" y="15" fill="#fbbf24" font-size="10">Delay to Tick 2</text>
                </g>

                <g transform="translate(50, 150)">
                     <text x="0" y="-10" fill="#94a3b8" font-size="12" font-weight="bold">CS2 (Sub-Tick)</text>
                    <line x1="0" y1="20" x2="700" y2="20" stroke="#475569" stroke-width="2"/>
                    
                    <line x1="100" y1="10" x2="100" y2="30" stroke="#31A8FF" stroke-width="2"/>
                    <line x1="300" y1="10" x2="300" y2="30" stroke="#31A8FF" stroke-width="2"/>
                    <line x1="500" y1="10" x2="500" y2="30" stroke="#31A8FF" stroke-width="2"/>

                     <circle cx="250" cy="20" r="6" fill="#10b981"/>
                    <text x="250" y="0" text-anchor="middle" fill="#10b981" font-size="10" font-weight="bold">Your Click</text>

                    <text x="250" y="45" text-anchor="middle" fill="#10b981" font-size="10">Registered Exactly Here</text>
                    <line x1="250" y1="20" x2="250" y2="35" stroke="#10b981" stroke-width="1"/>
                </g>
            </svg>
            <p class="text-xs text-gray-500 mt-4 italic text-center">Figure 1: In CS2, the shot is fired when you click, but the visual animation sometimes lags, causing the 'ghost shot' feeling.</p>
        </div>
      `
    },
    {
      title: "1. Launch Options: What Still Works?",
      content: `
        <p class="mb-4 text-gray-300">
            Clear your old launch options. Most old commands (<code>-tickrate 128</code>, <code>-novid</code>) have been removed or incorporated.
        </p>

        <h4 class="text-white font-bold mb-3 mt-4">The Safe List for 2026:</h4>
        <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm text-[#31A8FF] break-all">
            -nojoy -softparticlesdefaultoff +fps_max 0 +cl_showfps 1 -vulkan
        </div>
        
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
            <li><code>-nojoy</code>: Disables joystick support, freeing up a small amount of RAM.</li>
            <li><code>-softparticlesdefaultoff</code>: Reduces FPS drops near smokes.</li>
            <li><code>+fps_max 0</code>: Removes the 400 FPS limit from the menu.</li>
            <li><code>-vulkan</code> (Optional): Force Vulkan API instead of DirectX 11. <strong>Test this!</strong> On AMD cards and Linux, it gives +20% FPS. On old Nvidia cards, it might be worse.</li>
            <li><strong>Dead Myth:</strong> <code>-high</code> causes audio instability in CS2. Do not use.</li>
        </ul>
      `
    },
    {
      title: "2. Essential Console Commands (Autoexec)",
      content: `
        <p class="mb-4 text-gray-300">
            You should create an <code>autoexec.cfg</code> file in <code>game/csgo/cfg/</code> to load these commands every time you open the game.
        </p>

        <h4 class="text-white font-bold mb-3 mt-4">Network and Performance Commands:</h4>
        <div class="bg-gray-800 p-4 rounded-lg font-mono text-xs text-green-400 space-y-2">
            <p>cl_updaterate 128 // Force maximum update even in sub-tick</p>
            <p>cl_interp 0.015625 // Adjust interpolation for stable connection</p>
            <p>cl_interp_ratio 1 // Reduces packet buffer (Less lag, higher teleport risk)</p>
            <p>r_fullscreen_gamma 2.2 // Correct brightness (may vary with monitor)</p>
            <p>engine_no_focus_sleep 0 // Keep FPS high even with Alt-Tab (useful for streamers)</p>
            <p>r_show_build_info 0 // Remove version text from corner</p>
            <p>fps_max 0 // Release frame limiter</p>
        </div>

        <h4 class="text-white font-bold mb-3 mt-4">Jump Throw Bind (Still necessary?)</h4>
        <p class="text-gray-300 text-sm">
            CS2 now has native jump-throw (the game detects if you jumped and released the grenade at the same time). However, for pixel-perfect precision, aliases are still used by pros:
        </p>
        <div class="bg-gray-800 p-4 rounded-lg font-mono text-xs text-orange-400 mt-2">
            alias "+jumpaction" "+jump;"<br/>
            alias "+throwaction" "-attack; -attack2"<br/>
            alias "-jumpaction" "-jump"<br/>
            bind "v" "+jumpaction;+throwaction;"
        </div>
      `
    },
    {
      title: "3. Video Settings: Optimizing Source 2",
      content: `
        <p class="mb-4 text-gray-300">
            The 'Advanced Video' menu changed everything.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
            <li><strong>Boost Player Contrast:</strong> <span class="text-green-500 font-bold">Enabled</span>. Essential for seeing enemies in dark corners. Costs 2-3 FPS, worth it.</li>
            <li><strong>Vertical Sync:</strong> <span class="text-red-500 font-bold">Disabled</span>. Never enable in CS.</li>
            <li><strong>Multisampling Anti-Aliasing Mode (MSAA):</strong> 2x or 4x. Source 2 gets very jagged without AA. CMAA2 is a lighter alternative.</li>
            <li><strong>Global Shadow Quality:</strong> <span class="text-green-500 font-bold">High/Medium</span>. In CS2, shadows give away positions. On Low, you lose a tactical advantage.</li>
            <li><strong>Model / Texture Detail:</strong> Medium. Doesn't affect FPS much.</li>
            <li><strong>Shader Detail:</strong> Low. Reduces excessive shine on skins and saves GPU.</li>
            <li><strong>Particle Detail:</strong> Low. Essential to avoid freezing during Smoke/HE.</li>
            <li><strong>Ambient Occlusion:</strong> Medium/Disabled. Makes the game look good but costs FPS.</li>
            <li><strong>High Dynamic Range:</strong> Performance.</li>
            <li><strong>FidelityFX Super Resolution (FSR):</strong> Disabled (Quality). Only use FSR if your PC is very weak. In CS2, FSR adds some 'input lag' and blurs distant vision. Prefer running 4:3 stretched (1280x960) over using FSR at 1080p.</li>
            <li><strong>NVIDIA Reflex Low Latency:</strong> <span class="text-green-500 font-bold">Enabled + Boost</span>. Mandatory.</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Shader Cache: The Cause of Stutters",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-purple-400 font-bold mb-4 text-xl">⚠️ Lagging the first time you shoot?</h4>
                <p class="text-gray-300 mb-4">
                    CS2 compiles shaders on demand. The first time you see a new skin or effect, the game might freeze for 0.1s. This improves over time, but driver updates reset this.
                </p>
            </div>

            <h4 class="text-white font-bold mb-3 text-lg">How to rebuild shaders correctly:</h4>
            <p class="text-gray-300 mb-4 text-sm">
                Valve recommends leaving the game running on the main menu for 10-15 minutes after a major update or driver update.
            </p>
            <p class="text-gray-300 mb-4 text-sm font-bold">Advanced Solution (DirectX Shader Cache):</p>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Open Windows Disk Cleanup.</li>
                <li>Select C: > Check <strong>"DirectX Shader Cache"</strong>.</li>
                <li>Run the cleanup.</li>
                <li>Restart PC.</li>
                <li>Enter a DM map with bots and play for 5 minutes. This will recreate a clean, organized cache.</li>
            </ol>
            `
    },
    {
      title: "3D Audio and Equalization",
      content: `
            <p class="mb-4 text-gray-300 leading-relaxed">
                CS2 audio is processed differently. The default <code>snd_mixahead</code> (0.025) sometimes causes 'crackling' sound on weak PCs.
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>If sound fails: Increase to <code>snd_mixahead 0.05</code>.</li>
                <li><strong>EQ Profile:</strong> In game audio settings, use 'Crisp' to highlight steps and reloads, or 'Smooth' if AWP shots are hurting your ears.</li>
                <li><strong>Perspective Correction:</strong> Yes. Helps identify if sound comes from behind or front.</li>
            </ul>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "4:3 Stretched Monitor: Advantage or Habit?",
      content: `
            <div class="space-y-6">
                <div class="flex gap-4">
                    <div class="shrink-0 w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-xl">📐</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">Bigger Hitbox? No.</h4>
                        <p class="text-gray-400 text-sm leading-relaxed mt-1">
                            Playing at 1280x960 (4:3) stretched does NOT increase the enemy hitbox in the game code. But it increases the <strong>visual model</strong> on your screen, making it easier to focus and click the head. Plus, fewer pixels = more FPS.
                        </p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <div class="shrink-0 w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 font-bold text-xl">👀</div>
                    <div>
                        <h4 class="text-white font-bold text-lg">Reduced Peripheral Vision</h4>
                        <p class="text-gray-400 text-sm leading-relaxed mt-1">
                            The cost of 4:3 is losing side vision (reduced FOV). Enemies at the screen edges won't appear. At the pro level, the trade is worth it for extra focus. For casuals, Native 16:9 might be more comfortable.
                        </p>
                    </div>
                </div>
            </div>
            `
    }
  ];

  const faqItems = [
    {
      question: "Does the 'fps_max 0' command increase load time?",
      answer: "Yes, curiously. On some PCs, leaving FPS unlimited makes the loading screen freeze because the CPU tries to render 900+ frames on the loading screen. If your game freezes during load, use `fps_max 400`."
    },
    {
      question: "How do I see my FPS without net_graph?",
      answer: "Valve has removed the classic `net_graph 1`. You should now use the telemetry options in game settings (Game Settings > Telemetry) and enable 'Show FPS and Ping'. Or use the `cl_showfps 1` command (though it is small and unattractive)."
    },
    {
      question: "Does Voltris Optimizer reduce var (variance)?",
      answer: "Yes. High 'var' is usually caused by background processes competing for the CPU with CS2. By isolating the game process and clearing the interrupt queue, Voltris stabilizes frame time, which is the main factor of 'var'."
    }
  ];

  const externalReferences = [
    { name: "Valve Developer Community - CS2 Commands", url: "https://developer.valvesoftware.com/wiki/Counter-Strike_2" },
    { name: "ProSettings.net - CS2 Pro Configs", url: "https://prosettings.net/cs2/" },
    { name: "Reddit r/GlobalOffensive Performance", url: "https://www.reddit.com/r/GlobalOffensive/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/valorant-reduzir-input-lag",
      title: "Input Lag in Valorant",
      description: "Latency tips that also apply to CS2."
    },
    {
      href: "/guides/teclado-mecanico-vs-membrana-qual-o-melhor",
      title: "Keyboards for FPS",
      description: "Are Rapid Trigger and Hall Effect worth it?"
    },
    {
      href: "/guides/monitor-ips-vs-va-vs-tn-jogos",
      title: "Best Panel for CS2",
      description: "Why TN and OLED dominate the competitive scene."
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
