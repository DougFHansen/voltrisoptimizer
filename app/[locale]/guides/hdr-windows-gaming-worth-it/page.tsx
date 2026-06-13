import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hdr-windows-vale-a-pena-jogos',
  title: "HDR on Windows: Is it worth enabling in Games? (2026)",
  description: "Want more vibrant colors and realistic shadows? Learn how to set up HDR in Windows 11 correctly and find out if your monitor truly supports it.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "HDR on Windows: Is it worth enabling in Games? (2026)";
const description = "Want more vibrant colors and realistic shadows? Learn how to set up HDR in Windows 11 correctly and find out if your monitor truly supports it.";
const keywords = [
    'hdr windows 11 worth it for games 2026',
    'how to configure auto hdr windows 11 tutorial',
    'monitor with hdr 400 vs hdr 600 difference',
    'fix washed colors when enabling hdr in windows',
    'best games to test hdr on gaming pc'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hdr-windows-vale-a-pena-jogos', title, description, keywords, locale);
}

export default function HDRGuide() {
    const summaryTable = [
        { label: "Minimum Hardware", value: "Monitor with VESA DisplayHDR certification" },
        { label: "System Check", value: "Windows 11 (Mandatory for Auto HDR)" },
        { label: "Common Issue", value: "'Washed' or grayish image" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "What is HDR?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **HDR (High Dynamic Range)** is not about having more colors, but about the contrast between the brightest and darkest spot on the screen. In 2026, with the advancement of photorealistic games, HDR is what allows a sunset in the game to "dazzle" your eyes realistically, while you can still see details in a dark cave. Without HDR, everything looks flat and lifeless.
        </p>
      `
        },
        {
            title: "1. The HDR 400 Trap",
            content: `
        <p class="mb-4 text-gray-300">Not every monitor that claims to have HDR offers a good experience:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>HDR 400:</strong> It's the basic level. Most of the time, it just increases the screen's total brightness, leaving colors washed out.</li>
            <li><strong>HDR 600 onwards:</strong> Already requires <i>Local Dimming</i> (brightness control by zones). Here the experience begins to be incredible.</li>
            <li><strong>HDR OLED:</strong> The best of 2026. Since each pixel turns off individually, the contrast is infinite.</li>
        </ul >
      `
        },
        {
            title: "2. How to set up 'Auto HDR' in Windows 11",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">AI Magic:</h4>
            <p class="text-sm text-gray-300">
                If you play older titles that don't have native HDR, Windows 11 can "inject" HDR into them via artificial intelligence. <br/><br/>
                Go to <strong>Settings > System > Display > HDR</strong> and enable <strong>'Auto HDR'</strong>. The result is surprising in games like Skyrim, GTA V and other classics, giving them a visual afterlife in 2026.
            </p>
        </div>
      `
        },
        {
            title: "3. Solution for 'Washed' brightness",
            content: `
        <p class="mb-4 text-gray-300">
            If enabling HDR makes your desktop look gray, download the official <strong>Windows HDR Calibration</strong> app from the Microsoft Store. 
            <br/><br/>It will create a personalized profile for your monitor, teaching Windows exactly where your pixels stop shining and where they reach maximum brightness. This fixes the dead color problem and ensures HDR works as it should.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/calibrar-cores-monitor",
            title: "Calibrate Monitor",
            description: "Extra visual fidelity tips."
        },
        {
            href: "/guides/guia-compra-monitores",
            title: "Choose Monitor",
            description: "Look for panels with good HDR."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Performance",
            description: "Ensure your card supports HDR processing."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

