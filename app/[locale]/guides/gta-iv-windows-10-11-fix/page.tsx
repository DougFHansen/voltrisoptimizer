import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'gta-iv-fix-windows-10-11',
  title: "GTA IV Fix: How to Run Smoothly on Windows 10 and 11 (2026)",
  description: "GTA IV for PC is famous for being poorly optimized. Learn how to install DXVK, FusionFix and fix lag and camera errors on modern Windows.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "GTA IV Fix: How to Run Smoothly on Windows 10 and 11 (2026)";
const description = "GTA IV for PC is famous for being poorly optimized. Learn how to install DXVK, FusionFix and fix lag and camera errors on modern Windows.";
const keywords = [
    'gta iv fix windows 11 2026',
    'gta iv lag fix low end pc',
    'dxvk gta iv tutorial',
    'fusionfix gta iv how to install',
    'gta iv shaky camera fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('gta-iv-fix-windows-10-11', title, description, keywords, locale);
}

export default function GTAIVFixGuide() {
    const summaryTable = [
        { label: "Problem", value: "Poor DirectX 9 optimization" },
        { label: "Key Solution", value: "DXVK (Vulkan)" },
        { label: "Essential Mod", value: "FusionFix" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "Why does GTA IV run so poorly on PC?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Released in 2008, GTA IV was made for DirectX 9. Windows 10 and 11 don't handle the game's old draw calls well, causing it to lag even on an RTX 4090. Additionally, the game has conflicts with processors that have many cores.
        </p>
      `
        },
        {
            title: "The Miracle of DXVK (Vulkan)",
            content: `
        <p class="mb-4 text-gray-300">This is the SINGLE step that will triple your FPS. It translates the game from DX9 to Vulkan.</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Download <strong>DXVK</strong> from the official GitHub.</li>
            <li>Extract the <code>d3d9.dll</code> and <code>dxgi.dll</code> files from the x32 folder.</li>
            <li>Paste these files into the main game folder (where <code>GTAIV.exe</code> is located).</li>
            <li>Open the game. You'll notice that GPU usage will go up and the FPS will become much more stable.</li>
        </ol>
      `
        },
        {
            title: "GTA IV FusionFix: The Mandatory Mod",
            content: `
        <p class="mb-4 text-gray-300">
            FusionFix fixes errors that Rockstar never fixed, like aspect ratio and flickering shadows.
        </p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <ul class="text-sm text-gray-300 space-y-2">
                <li>Fixes the problem of streetlights disappearing at a distance.</li>
                <li>Allows you to skip boring intros automatically.</li>
                <li>Fixes the crosshair bug in 4K resolutions.</li>
                <li>Just download the .zip file and drop the content into the game folder.</li>
            </ul>
        </div>
      `
        },
        {
            title: "Fixing the Memory Error (VRAM)",
            content: `
        <p class="mb-4 text-gray-300">
            If the game says you don't have enough video memory (even if you have 8GB), create a text file called <code>commandline.txt</code> in the game folder and paste this inside:
        </p>
        <code class="text-yellow-400 bg-black/30 p-2 rounded block"> -availablevidmem 4096 -nomemrestrict -norestrictions</code>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-performance",
            title: "Windows for Gaming",
            description: "Improve system response before opening GTA."
        },
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "Driver Cleanup",
            description: "Avoid DirectX conflicts with old drivers."
        },
        {
            href: "/guides/reduzir-ping-jogos-online",
            title: "GTA Online Lag",
            description: "Specific tips for multiplayer mode."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

