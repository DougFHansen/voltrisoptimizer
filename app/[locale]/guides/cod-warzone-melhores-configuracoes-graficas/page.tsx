import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cod-warzone-melhores-configuracoes-graficas',
    title: "Call of Duty: Warzone & MW3 (2026) - The Definitive FPS Guide",
    description: "Warzone stuttering? Learn how to configure Spot Cache Ultra, fix VRAM usage, choose between DLSS or FidelityFX CAS and tweak Aim Assist like a Pro.",
    category: 'games',
    difficulty: 'Advanced',
    time: '60 min'
};

const title = "Warzone Optimization Bible (2026): Visibility and Stable FPS";
const description = "COD is poorly optimized by nature. But with the right tweaks in the config file and shader cache, it's possible to run smoothly. Complete guide for PC.";

const keywords = [
    'warzone fps boost 2026 season',
    'best graphics settings warzone low end pc',
    'dlss vs fidelityfx cas warzone visibility',
    'spot cache ultra or high warzone',
    'vram scale target warzone stuttering',
    'aim assist type black ops vs default',
    'configure audio footsteps warzone loudness eq',
    'texture streaming on demand disable',
    'fix dev error warzone directx',
    'weapon motion blur disable'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('cod-warzone-melhores-configuracoes-graficas', title, description, keywords, locale);
}

export default function WarzoneGuide() {
    const summaryTable = [
        { label: "Upscaling", value: "FidelityFX CAS (Sharpness)" },
        { label: "Texture Res", value: "Low/Normal" },
        { label: "Spot Cache", value: "Ultra (Crucial)" },
        { label: "VRAM Target", value: "60-70% (Avoids Stutter)" },
        { label: "On-Demand", value: "DISABLED" },
        { label: "Reflex", value: "On + Boost" },
        { label: "Aim Assist", value: "Black Ops / Dynamic" }
    ];

    const contentSections = [
        {
            title: "Introduction: The VRAM Devourer",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The Warzone graphics engine (IW Engine) has a serious memory management problem. If you leave the settings at default, it will try to use 90% of your VRAM. When a new effect appears (explosion), the VRAM maxes out and the game stutters for 1 second.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            The secret to smoothness in Warzone is not having an RTX 4090, but rather preventing the game from choking on its own memory.
        </p>
      `
        },
        {
            title: "Chapter 1: Display & Quality (Upscaling)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-orange-500 font-bold mb-1">Upscaling / Sharpening</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">FidelityFX CAS</span></p>
                <p class="text-gray-400 text-xs">
                    Only use DLSS or FSR if your FPS is unplayable (below 60). DLSS blurs the image in distant motion. <strong>FidelityFX CAS</strong> does not increase FPS, but applies a sharpness filter that makes enemies "pop" on the screen. Adjust the strength to 50-70%.
                </p>
            </div>
            
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-orange-500 font-bold mb-1">VRAM Scale Target</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">60% to 70%</span></p>
                <p class="text-gray-400 text-xs">
                    NEVER leave it at 90%. The game needs margin for Windows and Discord. If you allocate 90% to the game, any background notification causes freezing. Lowering to 70% resolves 90% of crashes.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Textures and Details",
            content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Texture Resolution</td>
                    <td class="py-2 text-yellow-400">Low/Normal</td>
                    <td class="py-2">High consumes too much VRAM without competitive visual gain.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Texture Filter Anisotropic</td>
                    <td class="py-2 text-emerald-400">High</td>
                    <td class="py-2">Makes the ground sharp from a distance. Zero cost.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Particle Quality Level</td>
                    <td class="py-2 text-yellow-400">Low</td>
                    <td class="py-2">Explosions on High cause sudden FPS drops.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Shader Quality</td>
                    <td class="py-2 text-yellow-400">Medium</td>
                    <td class="py-2">Low makes surfaces look awful, High is heavy. Medium is the balance.</td>
                </tr>
                 <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Tessellation</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Useless for competitive play.</td>
                </tr>
            </tbody>
        </table>
      `
        },
        {
            title: "Chapter 3: Shadow & Lighting (The Key)",
            content: `
         <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Spot Cache:</strong> <span class="text-emerald-400 font-bold">ULTRA</span>. This is the most important setting. On Ultra, the game saves shadows on your hard drive (SSD). On Low, it tries to recalculate all the time. Setting it to Ultra ELIMINATES stutters.</li>
            <li><strong>Particle Lighting:</strong> Low.</li>
            <li><strong>Ambient Occlusion:</strong> Off. (Enemies in dark corners become impossible to see with this on).</li>
            <li><strong>Screen Space Reflections:</strong> Off. (Reflections in water puddles distract and eat FPS).</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Post Processing Effects (Turn EVERYTHING OFF)",
            content: `
        <p class="mb-4 text-gray-300">
            Visibility must be clean. Cinematic effects only get in the way.
        </p>
        <div class="bg-gray-800 p-4 rounded text-sm text-red-300">
            <strong>TURN OFF IMMEDIATAMENTE:</strong>
            <br/>- Weapon Motion Blur
            <br/>- World Motion Blur
            <br/>- Film Grain (Set to 0.00)
            <br/>- Depth of Field
        </div>
        <p class="mt-2 text-gray-300 text-sm">
            With these turned off, you can see enemies while turning the camera quickly.
        </p>
      `
        },
        {
            title: "Chapter 5: On-Demand Texture Streaming",
            content: `
        <p class="mb-4 text-gray-300">
            This option downloads high-quality textures from the internet WHILE you play.
            <br/><strong>Recommendation: <span class="text-red-400">OFF</span>.</strong>
            <br/>This causes internet lag (Packet Burst) and disk usage. Only turn it on if you have 1Gbps fiber optic and don't mind constant downloads.
        </p>
      `
        },
        {
            title: "Chapter 6: Controller Settings (Aim Assist)",
            content: `
        <p class="mb-4 text-gray-300">
            If you play on controller (the COD meta):
        </p>
        <ul class="list-disc list-inside text-gray-300 text-sm space-y-2">
            <li><strong>Aim Assist Type:</strong> Default or Black Ops (The community debates, but Black Ops seems to have a stickier "rotational aim assist" up close).</li>
            <li><strong>Aim Response Curve Type:</strong> Dynamic (Accelerates aiming when you push the stick all the way, allowing quick flicks and fine precision in the middle).</li>
            <li><strong>Deadzone Inputs:</strong> Adjust the "Left Stick Min" to the lowest possible without drifting (e.g. 0.03). The lower it is, the faster your character starts running.</li>
        </ul>
      `
        },
        {
            title: "Chapter 7: Audio (Loudness Equalization)",
            content: `
        <p class="mb-4 text-gray-300">
            Warzone audio is notoriously bad. Footsteps are muffled by airstrikes.
            <br/>Use Windows' <strong>Loudness Equalization</strong> (see our Audio guide) or use the <strong>"Headphone Bass Boost"</strong> or <strong>"Home Theater"</strong> audio mix in-game.
            <br/><em>Tip:</em> Lower "Music Volume" and "Dialogue Volume" to 20%, keep "Effects Volume" at 100%.
        </p>
      `
        },
        {
            title: "Chapter 8: Config File (options.3.cod22.cst)",
            content: `
        <p class="mb-4 text-gray-300">
            In <code>Documents\\Call of Duty\\players</code>.
            <br/>Edit the line <code>RendererWorkerCount</code>.
            <br/>Set the value equal to the number of <strong>Physical Cores</strong> on your CPU (not Threads).
            <br/>Ex: Ryzen 5600 (6 Cores / 12 Threads) -> Put 6.
            <br/>This fixes 99% of micro-stuttering problems on AMD and Intel CPUs.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 9: Telemetry and Network",
            content: `
            <p class="mb-4 text-gray-300">
                Turn on Telemetry to monitor "Packet Burst" and "Extrapolation".
                <br/>If you see orange "Packet Burst" frequently:
                <br/>1. Turn off "On-Demand Texture Streaming".
                <br/>2. Close Discord/Chrome (Warzone hates sharing bandwidth).
                <br/>3. Use an Ethernet cable (Wi-Fi is forbidden in Warzone).
            </p>
            `
        },
        {
            title: "Chapter 10: Scan and Repair (Loop Fix)",
            content: `
            <p class="mb-4 text-gray-300">
                If the game keeps asking to "Scan and Repair" and never fixes:
                <br/>1. Go to Battle.net settings > Game Settings.
                <br/>2. Add command line arguments: <code>-d3d11</code> (Forces DX11, more stable on older GPUs).
                <br/>3. If it doesn't work, delete the "players" folder in Documents (it will reset your configs, but resolves the crash).
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Field of View (FOV) affect FPS?",
            answer: "Yes, slightly. A 120 FOV shows more objects on the screen to render. If you have a very weak PC, try lowering the FOV to 100 or 105. But competitively, 120 is ideal for information."
        },
        {
            question: "Nvidia Reflex On or Boost?",
            answer: "In Warzone, 'On + Boost' can cause instability on some weak CPUs (bottleneck). Start with 'On'. If your CPU is strong (i7/Ryzen 7), use 'On + Boost'."
        },
        {
            question: "Does the game look blurry from afar?",
            answer: "That's forced TAA Anti-Aliasing. The only cure is to use 'FidelityFX CAS' in the Upscaling slot and increase the strength to 50-70%. This restores edge sharpness."
        }
    ];

    const externalReferences = [
        { name: "JGOD (Warzone Science)", url: "https://www.youtube.com/c/JGODGaming" },
        { name: "ArtIsWar (Audio Tuning)", url: "https://www.youtube.com/c/ArtIsWar" },
        { name: "Official Trello Bugs (Raven Software)", url: "https://trello.com/b/Z5x135qw/warzone-trello-board" }
    ];

    const relatedGuides = [
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "Nvidia Guide",
            description: "Unlimited Cache is crucial for COD."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Guide",
            description: "The game is 200GB, needs a fast SSD."
        },
        {
            href: "/guides/reduzir-ping-regedit-cmd-jogos",
            title: "Network",
            description: "Avoid Packet Burst."
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
            externalReferences={externalReferences}
        />
    );
}
