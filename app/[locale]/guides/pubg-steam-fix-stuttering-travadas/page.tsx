import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pubg-steam-fix-stuttering-travadas',
  title: "PUBG on Steam: How to Fix Stuttering and Freezes (2026)",
  description: "Does your PUBG freeze during a firefight? Learn the best graphics and system settings to run PUBG smoothly on Steam in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "PUBG on Steam: How to Fix Stuttering and Freezes (2026)";
const description = "Does your PUBG freeze during a firefight? Learn the best graphics and system settings to run PUBG smoothly on Steam in 2026.";
const keywords = [
    'pubg steam fix stuttering 2026 tutorial',
    'how to increase fps pubg low end pc 2026',
    'pubg freezing when aiming how to solve guide',
    'best graphics settings pubg 2026 competitive',
    'pubg dx11 vs dx11 enhanced vs dx12 which is better'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('pubg-steam-fix-stuttering-travadas', title, description, keywords, locale);
}

export default function PUBGStutterFixGuide() {
    const summaryTable = [
        { label: "DirectX Version", value: "DirectX 11 Enhanced (Recommended)" },
        { label: "Key Setting", value: "Render Scale (100% or less)" },
        { label: "Hardware Check", value: "SSD is mandatory for cities" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Chronic PUBG Problem",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Even in 2026, **PUBG: Battlegrounds** continues to be an extremely heavy game for the processor (CPU) due to its open map and complex physics. The famous "stuttering" (those millisecond freezes) mainly occurs when the game tries to load new textures of buildings or when many players meet in the same place (Hot Drops). Optimizing PUBG requires balancing the load between the processor and the graphics card.
        </p>
      `
        },
        {
            title: "1. The Choice of DirectX (The FPS Secret)",
            content: `
        <p class="mb-4 text-gray-300">Within the graphics settings of PUBG, you will find 3 options:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>DirectX 11:</strong> Stable, but does not use all the power of modern cards.</li>
            <li><strong>DirectX 11 Enhanced:</strong> The best choice in 2026. Offers the best balance of FPS and frametime stability.</li>
            <li><strong>DirectX 12:</strong> Promises more frames, but often causes terrible 'stutter' (freezes) on many GPUs during shader compilation.</li>
        </ul >
      `
        },
        {
            title: "2. Settings to Gain an Advantage",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Competitive Preset 2026:</h4>
            <p class="text-sm text-gray-300">
                - <strong>Anti-Aliasing:</strong> Ultra (Helps see enemies from afar without jagged edges). <br/>
                - <strong>View Distance:</strong> Ultra (Essential for rendering distant cars and players). <br/>
                - <strong>Textures:</strong> Medium/High (Depends on your VRAM). <br/>
                - <strong>Post-Processing/Shadows/Foliage:</strong> Very Low (Removes useless shadows and grass that hides the enemy). <br/>
                - <strong>V-Sync/Motion Blur:</strong> Always DISABLED to avoid input lag.
            </p>
        </div>
      `
        },
        {
            title: "3. Fixing Freezes via Windows",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Disabling Fullscreen Optimizations:</strong> 
            <br/><br/>Go to the game folder, right-click on the executable <code>TslGame.exe</code> > Properties > Compatibility. Check the box <strong>'Disable fullscreen optimizations'</strong> and click on 'Change high DPI settings' and check the last box. This forces Windows to give full priority to the PUBG process, drastically reducing aiming freezes.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "Stabilize Frametime",
            description: "Use RivaTuner for smooth gameplay."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "Reduce Ping",
            description: "Improve connection on PUBG servers."
        },
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "Driver Cleanup",
            description: "If your FPS dropped after a driver update."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

