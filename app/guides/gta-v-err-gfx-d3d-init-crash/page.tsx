import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'gta-v-err-gfx-d3d-init-crash',
  title: "GTA V: ERR_GFX_D3D_INIT Error (How to Fix in 2026)",
  description: "Does your GTA V crash with the message 'ERR_GFX_D3D_INIT'? Learn how to fix this classic error by resetting DirectX and clearing game files.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "GTA V: ERR_GFX_D3D_INIT Error (How to Fix in 2026)";
const description = "Does your GTA V crash with the message 'ERR_GFX_D3D_INIT'? Learn how to fix this classic error by resetting DirectX and clearing game files.";
const keywords = [
    'how to fix err_gfx_d3d_init gta v 2026',
    'gta v crashing on startup directx fix',
    'crash gta v epic games steam err_gfx_d3d_init',
    'reset gta v graphic settings command',
    'gpu startup error gta v windows 11'
];

export const metadata: Metadata = createGuideMetadata('gta-v-err-gfx-d3d-init-crash', title, description, keywords);

export default function GTAVCrashGuide() {
    const summaryTable = [
        { label: "What is it", value: "Communication failure with DirectX API" },
        { label: "Solution #1", value: "Switch DirectX to 10 or 10.1 in Menu" },
        { label: "Solution #2", value: "Reset settings.xml file" },
        { label: "Vital Check", value: "Reinstall DirectX Web Installer" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why Does This Error Occur?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **ERR_GFX_D3D_INIT** error occurs when your graphics card stops responding to the game for even a millisecond. This can be caused by unstable overclocks, corrupted drivers, or, most commonly, a failure in DirectX 11 shader transitions. In 2026, with ultra-fast modern cards, GTA V sometimes \"gets lost\" when attempting to initialize certain graphical routines.
        </p>
      `
        },
        {
            title: "1. Changing the DirectX Version",
            content: `
        <p class="mb-4 text-gray-300">If you can reach the main menu before the crash:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to Settings > Graphics.</li>
            <li>Locate the <strong>'DirectX Version'</strong> option.</li>
            <li>If it's set to 11, change it to <strong>10.1 or 10</strong>.</li>
            <li>Restart the game. This resolves the issue for 80% of players with minimal loss in visual quality.</li>
        </ol>
      `
        },
        {
            title: "2. Resetting Settings Externally",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">If the game won't even open:</h4>
            <p class="text-sm text-gray-300">
                1. Navigate to the folder <code>Documents / Rockstar Games / GTA V</code>. <br/>
                2. Delete the <strong>settings.xml</strong> file. <br/>
                3. When you relaunch the game, it will generate a new file with default settings. <br/>
                <strong>Tip:</strong> If the problem persists, open the settings.xml file with Notepad and change the value of <code>DX_Version value=\"2\"</code> to <code>value=\"0\"</code>.
            </p>
        </div>
      `
        },
        {
            title: "3. The Underclocking Solution",
            content: `
        <p class="mb-4 text-gray-300">
            In some rare cases in 2026, modern graphics cards come with a factory overclock that is too aggressive for the aging GTA V engine. 
            <br/><br/>Try using <strong>MSI Afterburner</strong> to reduce the Core Clock by <strong>-50 MHz</strong>. Surprisingly, this small reduction in clock speed can stabilize D3D communication and prevent the error from triggering.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/gta-v-otimizar-fps-pc-fraco",
            title: "Optimize GTA V",
            description: "Gain more performance in-game."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Fix driver failures for NVIDIA/AMD."
        },
        {
            href: "/guides/como-resolver-tela-azul",
            title: "Blue Screen",
            description: "Resolve severe system issues."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


