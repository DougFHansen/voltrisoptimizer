import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'apex-legends-config-autoexec-fps',
    title: "Apex Legends (2026): Config, Autoexec, and Superglide",
    description: "Optimize Apex Legends to avoid drops at Jumpmaster. Configuration for videocfg.txt, autoexec to remove shadows, and FPS capping for stability.",
    category: 'games',
    difficulty: 'Advanced',
    time: '50 min'
};

const title = "Apex Legends Optimization (2026): Maintaining Constant 144Hz";
const description = "Apex Legends runs on a modified Source Engine. It loves CPU and hates particle effects. Master 'videoconfig.txt' to gain performance.";

const keywords = [
    'apex legends autoexec 2026 fps boost',
    'videoconfig.txt apex legends remove shadows',
    'superglide config fps cap',
    'apex legends dx12 beta worth it',
    'nvidia reflex apex legends',
    'texture streaming budget apex none',
    'adaptive resolution fps target',
    'apex steam launch options',
    'reduce input lag apex legends',
    'spot shadow detail disabled'
];

export const metadata: Metadata = createGuideMetadata('apex-legends-config-autoexec-fps', title, description, keywords);

export default function ApexGuide() {
    const summaryTable = [
        { label: "Texture Stream", value: "None/Very Low" },
        { label: "Model Detail", value: "Low" },
        { label: "Spot Shadow", value: "Disabled (Config)" },
        { label: "Volumetric", value: "Disabled" },
        { label: "Launch Option", value: "-dev -preload" },
        { label: "Reflex", value: "On + Boost" },
        { label: "DX12", value: "Beta (Test)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Source Engine at its Limit",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Apex is resource-heavy. It renders massive maps using the Titanfall 2 engine. Default settings like "Volumetric Lighting" and "Sun Shadows" kill FPS.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we'll modify the <code>videoconfig.txt</code> file to disable shadows that the in-game menu doesn't allow, ensuring visibility and high frames.
        </p>
      `
        },
        {
            title: "Chapter 1: In-Game Settings (The Basics)",
            content: `
        <div class="space-y-4">
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-red-500 font-bold mb-1">Texture Streaming Budget</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">None or Very Low (2GB)</span></p>
                <p class="text-gray-400 text-xs">
                    This reserves VRAM for textures. If you set it to High (6GB) and your GPU has 6GB, the game will stutter when Windows needs VRAM. Leave it at None/Very Low to ensure you never run out of VRAM for the frame buffer. The textures might look ugly, but the game runs smooth.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-red-500 font-bold mb-1">Volumetric Lighting</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Disabled</span></p>
                <p class="text-gray-400 text-xs">Sunlight passing through dust. Beautiful, but it blinds you and eats 20 FPS. Turn it off.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-red-500 font-bold mb-1">Model Detail</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Low</span></p>
                <p class="text-gray-400 text-xs">Reduces the geometric complexity of distant objects. Essential for stability.</p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: videoconfig.txt (Shadow Hack)",
            content: `
        <p class="mb-4 text-gray-300">
            The menu doesn't let you turn everything off. Let's edit the file:
            <br/><code>%userprofile%\\Saved Games\\Respawn\\Apex\\local\\videoconfig.txt</code>
        </p>
        <div class="bg-black/50 p-4 rounded font-mono text-xs text-gray-300 overflow-x-auto">
            "setting.csm_enabled"       "0"   // (Disables sun shadows - Cascaded Shadow Maps)<br/>
            "setting.csm_coverage"      "0"<br/>
            "setting.csm_cascade_res"   "16"  // (Minimum possible)<br/>
            "setting.r_lod_switch_scale" "0.6" // (Reduces rendering distance for small objects)<br/>
            "setting.bnao_enabled"       "0"   // (Disables Ambient Occlusion at low level)
        </div>
        <p class="mt-2 text-xs text-red-400">
            <strong>Important:</strong> After saving, right-click the file > Properties > Check <strong>"Read-only"</strong>. If you don't do this, Apex resets everything upon opening.
        </p>
      `
        },
        {
            title: "Chapter 3: Autoexec and Launch Options",
            content: `
        <p class="mb-4 text-gray-300">
            In Steam/EA App > Game Properties > Launch Options:
        </p>
        <code class="block bg-black/50 p-3 rounded text-green-400 font-mono text-sm mb-3">
            -dev -preload -fullscreen -refresh 144 -forcenovsync
        </code>
        <ul class="list-disc list-inside text-gray-400 text-xs space-y-2">
            <li><strong>-dev:</strong> Removes the (loud) intro animation.</li>
            <li><strong>-preload:</strong> Attempts to pre-load assets into RAM (helps with HDDs, use with caution on systems with low RAM).</li>
            <li><strong>-refresh 144:</strong> Forces the Hz (change it to your monitor's).</li>
        </ul>
        <p class="mt-4 text-gray-300">
            <strong>Autoexec.cfg:</strong> Respawn blocked most cfg commands in 2021. Nowadays, cfgs focus more on binds (Superglide) than graphics.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DX12 Beta",
            content: `
        <p class="mb-4 text-gray-300">
            Apex has launched support for DirectX 12 (Beta).
            <br/>Add <code>-eac_launcher_settings SettingsDX12.json</code> to your launch options.
            <br/><strong>2026 Verdict:</strong> DX12 better utilizes multiple CPU cores. If you have an AMD GPU or RTX 4000 series and suffer from CPU bottlenecking, DX12 can increase your minimum FPS (1% lows) and make the game smoother, even though maximum FPS may not change much. It's worth testing.
        </p>
      `
        },
        {
            title: "Chapter 5: Superglide and FPS Cap",
            content: `
        <p class="mb-4 text-gray-300">
            Superglide is a movement mechanic that depends on FPS. It's easier to hit the timing with lower FPS.
            <br/>Some pros lock their FPS to specific values (e.g., 144 or 180) via RivaTuner or the <code>+fps_max 144</code> command to ensure movement consistency. Don't leave it unlimited if it fluctuates significantly.
        </p>
      `
        },
        {
            title: "Chapter 6: Nvidia Reflex",
            content: `
        <p class="mb-4 text-gray-300">
            As always, <strong>On + Boost</strong>.
            <br/>Apex naturally has high system latency. Reflex is mandatory.
            <br/>If you have AMD, enable <strong>Radeon Anti-Lag</strong> in the driver (there is no option in-game).
        </p>
      `
        },
        {
            title: "Chapter 7: FOV and Performance",
            content: `
        <p class="mb-4 text-gray-300">
            Almost every pro uses a FOV of 104 or 110.
            <br/>High FOV = More peripheral vision, but enemies appear smaller (harder to aim) and FPS drops slightly (it renders more things).
            <br/>If you can't see the enemy well, try lowering the FOV to 104 or 100.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Audio (PC Equalizer)",
            content: `
            <p class="mb-4 text-gray-300">
                Apex's audio is famous for being "broken" (silent footsteps).
                <br/>Don't rely on the game. Use an external equalizer (Equalizer APO) to boost high frequencies (4k-8k Hz) where footsteps and reloads occur.
            </p>
            `
        },
        {
            title: "Chapter 9: Adaptive Resolution (FPS Target)",
            content: `
            <p class="mb-4 text-gray-300">
                Apex has "Adaptive Resolution FPS Target." Set it to 0 (Off).
                <br/>If you turn it on, the game will blur the entire screen whenever the FPS drops, making it impossible to aim. It's better to have FPS drops with a sharp image than to maintain FPS with a pixelated one.
            </p>
            `
        },
        {
            title: "Chapter 10: Temporary File Cleanup",
            content: `
            <p class="mb-4 text-gray-300">
                Each season, Apex accumulates junk.
                <br/>Perform a "Repair" of the game on Steam/EA App after every major update to verify file integrity and remove duplicate assets.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Stretched Resolution in Apex?",
            answer: "It works, but it's complex. Black bars appear unless you create a custom resolution in your GPU panel and use 'Autoexec commands' to force the aspect ratio. Many pros use 1680x1050 (16:10 stretched) for wider character models."
        },
        {
            question: "Bad microphone in Apex?",
            answer: "Apex's Voice Chat has a low-quality codec. Increase the 'Open Mic Threshold' so it doesn't pick up your mechanical keyboard, as the game's noise suppression isn't great."
        },
        {
            question: "DXGI_ERROR_DEVICE_HUNG crash?",
            answer: "This is usually unstable GPU overclocking or a bad driver. Remove any overclocking, roll back the driver to a stable 'Studio' version, or use Debug mode in the Nvidia Panel."
        }
    ];

    const externalReferences = [
        { name: "Apex Legends Status (Server Lag)", url: "https://apexlegendsstatus.com/" },
        { name: "ProSettings Apex", url: "https://prosettings.net/apex-legends/" },
        { name: "Respawn Trello (Bug Tracker)", url: "https://trello.com/b/ZVrHV38P/apex-tracker" }
    ];

    const relatedGuides = [
        {
            href: "/guias/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Guide",
            description: "Adjust VSync here."
        },
        {
            href: "/guias/internet-lenta-jogos-lag",
            title: "Network",
            description: "Apex needs a clean route."
        },
        {
            href: "/guias/como-escolher-mouse-gamer",
            title: "Mouse",
            description: "Tracking is everything in Apex."
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
