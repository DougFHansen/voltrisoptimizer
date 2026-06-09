import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'fortnite-modo-performance-pc-fraco',
    title: "Fortnite 2026: The Ultimate Performance Mode (Alpha) Guide",
    description: "Double your FPS. Secrets of 'High Meshes' vs 'Low Meshes', GameUserSettings.ini editing, and how to fix blurry textures in Chapter 7.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '50 min'
};

const title = "Fortnite Performance Mode (2026): The FPS Bible";
const description = "Fortnite's Performance Mode has changed the meta. Learn how to configure 'Meshes' to see through builds, edit the config file for 0 input lag, and remove grass completely.";

const keywords = [
    'fortnite performance mode high or low meshes',
    'gameusersettings.ini fortnite fps boost 2026',
    'how to see through walls fortnite performance',
    'textures not loading fortnite performance mode',
    'fortnite stuttering dx11 or dx12 or performance',
    'nvidia reflex fortnite on boost',
    'view distance fortnite low end pc',
    'reduce input lag fortnite creative',
    'stretched resolution fortnite 2026',
    'voltris optimizer fortnite priority'
];

export const metadata: Metadata = createGuideMetadata('fortnite-modo-performance-pc-fraco', title, description, keywords);

export default function FortniteGuide() {
    const summaryTable = [
        { label: "Rendering", value: "Performance (Alpha)" },
        { label: "Meshes", value: "Low (FPS) / High (Vision)" },
        { label: "View Dist", value: "Medium" },
        { label: "Textures", value: "Low" },
        { label: "Reflex", value: "On + Boost" },
        { label: "Nvidia DLSS", value: "Disabled" },
        { label: "3D Res", value: "100% or 85%" }
    ];

    const contentSections = [
        {
            title: "Introduction: Performance Mode",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Forget DX11 or DX12. If you want to compete, <strong>Performance Mode</strong> is mandatory. It removes heavy lighting effects and grass, giving the game a "Mobile" look but running at a stable 240+ FPS.
        </p>
         <div class="bg-[#0A0A0F] border border-blue-500/30 p-5 rounded-xl my-6">
            <h4 class="text-blue-400 font-bold mb-2">Meshes: The Big Decision</h4>
            <p class="text-gray-300 text-sm">
                <strong>Low Meshes:</strong> Builds look like cardboard or "mobile." Maximum FPS. Lowest input lag.
                <br/><strong>High Meshes:</strong> Builds have breaking animations and you can <strong>SEE THROUGH</strong> newly built wood. This provides a massive tactical advantage (legalized wallhack) but consumes a bit more GPU.
                <br/><em>Recommendation:</em> If your PC can handle it, use <strong>High Meshes</strong>. If it's very weak, use Low.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: In-Game Configuration",
            content: `
        <div class="space-y-4">
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Rendering Mode</h4>
                <p class="text-white font-mono text-sm mb-2">Selection: <span class="text-emerald-400">Performance - Lower Graphical Fidelity</span></p>
                <p class="text-gray-400 text-xs">Restart the game after changing this. It disables most shadow and effect options.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">View Distance</h4>
                <p class="text-white font-mono text-sm mb-2">Selection: <span class="text-emerald-400">Medium or Far</span></p>
                <p class="text-gray-400 text-xs text-justify">Near makes loot (weapons on the ground) appear only when you step on them. Medium is the ideal balance for seeing llamas and loot from afar.</p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Textures</h4>
                <p class="text-white font-mono text-sm mb-2">Selection: <span class="text-emerald-400">Low</span></p>
                <p class="text-gray-400 text-xs text-red-300">
                    Attention: Sometimes setting textures to Medium/High helps stabilize the game and load skins faster (moving the load to the GPU instead of the CPU). Test it out.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: GameUserSettings.ini (Secrets)",
            content: `
        <p class="mb-4 text-gray-300">
            Press <kbd class="bg-gray-700 px-1 rounded">Win+R</kbd>, type <code>%localappdata%\\FortniteGame\\Saved\\Config\\WindowsClient</code>.
            <br/>Edit <code>GameUserSettings.ini</code>. Find and change:
        </p>
        <div class="bg-black/50 p-4 rounded font-mono text-xs text-gray-300 overflow-x-auto">
            bShowGrass=False (Ensures grass is gone)<br/>
            DisplayGamma=2.200000 (Standard and clear)<br/>
            bDisableMouseAcceleration=True (Mandatory)<br/>
            sg.ShadingQuality=0<br/>
            sg.FoliageQuality=0<br/>
            sg.EffectsQuality=0
        </div>
        <p class="mt-2 text-xs text-gray-400">
            Save and mark the file as <strong>Read-Only</strong>.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 3: DirectX 12 Shaders (Stutter Fix)",
            content: `
        <p class="mb-4 text-gray-300">
            If you use Performance Mode and the game stutters a lot in the first match:
            <br/>1. Switch to DX12 in the menu.
            <br/>2. Play 2 matches of Team Rumble.
            <br/>3. This forces the game to compile shaders and save them to cache.
            <br/>4. Switch back to Performance Mode.
            <br/>The DX12 cache is sometimes shared/used as a base, reducing initial stutters in performance mode.
        </p>
      `
        },
        {
            title: "Chapter 4: Epic Games Launch Options",
            content: `
        <p class="mb-4 text-gray-300">
            In Epic Games Launcher > Settings > Fortnite > Additional Command Line Arguments:
        </p>
        <code class="block bg-black/50 p-3 rounded text-green-400 font-mono text-sm mb-3">
            -featureleveles31 -useallavailablecores
        </code>
        <ul class="list-disc list-inside text-gray-400 text-xs space-y-2">
            <li><strong>-featureleveles31:</strong> Forces the use of simpler shaders (mobile style), helping performance mode.</li>
            <li><strong>-NOTEXTURESTREAMING:</strong> Use ONLY if you have plenty of VRAM (8GB+). It makes the game load all textures at once (longer loading times but fewer in-game stutters).</li>
        </ul>
      `
        },
        {
            title: "Chapter 5: Nvidia Reflex & Latency",
            content: `
        <p class="mb-4 text-gray-300">
            In Fortnite, Reflex is king. Set it to <strong>On + Boost</strong>.
            <br/>The game is almost entirely CPU Bound in box fights (endgame). Reflex prevents the GPU from creating a queue, ensuring every edit click is registered instantly.
        </p>
      `
        },
        {
            title: "Chapter 6: Stretched Resolution",
            content: `
        <p class="mb-4 text-gray-300">
            Switching to 1750x1080 or 1680x1050.
            <br/>Advantage: Wider character models, fewer pixels to render (FPS boost).
            <br/>Disadvantage: Loss of horizontal FOV.
            <br/>In Competitive Fortnite, most pros have returned to <strong>1920x1080 (Native)</strong> because peripheral vision is more important for seeing third-parties arriving. Use Stretched only if your PC is very weak.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Pre-Download Assets",
            content: `
            <p class="mb-4 text-gray-300">
                In the Epic Launcher, click the "..." on Fortnite > Options.
                <br/>Check: <strong>"High Resolution Textures"</strong> (NO, uncheck this to save 20GB).
                <br/>Check: <strong>"Pre-download Streamed Assets"</strong>. THIS IS CRUCIAL. If you uncheck it, the game downloads enemy skins DURING the live match, causing network and FPS lag. Download everything beforehand.
            </p>
            `
        },
        {
            title: "Chapter 8: Visual Sound Effects",
            content: `
            <p class="mb-4 text-gray-300">
                Enable <strong>"Visualize Sound Effects"</strong> in the Audio options.
                <br/>This shows on-screen indicators for footsteps, chests, and gunshots.
                <br/><em>Secret:</em> The visual indicator appears BEFORE the sound is audible and shows double the distance. It's an official "hack." Every pro uses it.
            </p>
            `
        },
        {
            title: "Chapter 9: Replay Mode (Disable)",
            content: `
            <p class="mb-4 text-gray-300">
                Go to the last settings tab (Gear) and scroll down to "Replays."
                <br/>Record Replays: <strong>Off</strong>.
                <br/>Recording replays consumes CPU and disk constantly. In scrims and tournaments, turn it off for maximum stability.
            </p>
            `
        },
        {
            title: "Chapter 10: Voltris Optimizer in Fortnite",
            content: `
            <p class="mb-4 text-gray-300">
                <strong>Voltris Optimizer</strong> automatically cleans standby memory every 5 minutes (configurable), which prevents Fortnite's famous "Memory Leak" that makes the game start stuttering after 2 hours of play.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Performance Mode cause blurry textures (Clay models)?",
            answer: "This happens if your HDD is slow or if VRAM is full. Try locking textures at Medium. If it doesn't solve it, switch to DX11, play one match, and return to Performance."
        },
        {
            question: "FPS Cap: 240, 160, 60?",
            answer: "Always cap your FPS. If left unlimited, CPU usage will hit 100% and cause stutters when you move the mouse quickly. Use a stable value (e.g., 160) even if your monitor is 144Hz."
        },
        {
            question: "Full Screen vs Windowed Full Screen?",
            answer: "Always <strong>Exclusive Full Screen</strong>. Windowed full screen adds input lag from Windows DWM. Fortnite needs total priority."
        }
    ];

    const externalReferences = [
        { name: "Jerian (Fortnite Optimization)", url: "https://www.youtube.com/c/itsJerian" },
        { name: "Fortnite Status Twitter", url: "https://twitter.com/FortniteStatus" },
        { name: "Epic Games Server Status", url: "https://status.epicgames.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia",
            description: "Digital Vibrance to see in the storm."
        },
        {
            href: "/guides/mouse-dpi-polling-rate-ideal",
            title: "Mouse",
            description: "Edit builds faster."
        },
        {
            href: "/guides/internet-lenta-jogos-lag",
            title: "Network",
            description: "0 Ping in Creative."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="50 min"
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

