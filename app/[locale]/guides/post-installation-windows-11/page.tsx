import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pos-instalacao-windows-11',
  title: "Post-Installation Setup: What to Install on Windows 11 in 2026",
  description: "Just formatted your PC? Check out the definitive list of essential drivers and programs that cannot be missing from your Windows 11 in 2026.",
  category: 'software',
  difficulty: 'Beginner',
  time: '45 min'
};

const title = "Post-Installation Setup: What to Install on Windows 11 in 2026";
const description = "Just formatted your PC? Check out the definitive list of essential drivers and programs that cannot be missing from your Windows 11 in 2026.";
const keywords = [
    'windows 11 post installation what to install 2026',
    'essential programs for freshly formatted pc 2026',
    'correct order to install windows 11 drivers tutorial',
    'initial windows 11 settings for performance 2026',
    'post formatting checklist gaming pc guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('pos-instalacao-windows-11', title, description, keywords, locale);
}

export default function PostInstallationGuide() {
    const summaryTable = [
        { label: "Priority #1", value: "Chipset and GPU Drivers" },
        { label: "Browsing", value: "Brave or Edge (Avoid Bloatware)" },
        { label: "Security", value: "Updated Windows Defender" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "The Danger of a \"Fresh\" Computer",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many users think that once the Windows 11 installation is finished, the work is done. In fact, the first 30 minutes after the first boot are crucial. This is when you define whether your system will be stable and fast or if it will start accumulating DLL errors and driver instabilities. Follow this chronological order for a perfect setup in 2026.
        </p>
      `
        },
        {
            title: "1. The Correct Order of Drivers",
            content: `
        <p class="mb-4 text-gray-300">Don't rely solely on Windows Update. Install manually in this order:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li><strong>Motherboard Chipset:</strong> Defines how the processor communicates with the rest of the PC.</li>
            <li><strong>Network (LAN/Wi-Fi):</strong> Ensures that downloading other drivers doesn't fail.</li>
            <li><strong>Audio Drivers:</strong> To enable features like spatial audio.</li>
            <li><strong>Graphics Card (GPU):</strong> The latest official NVIDIA or AMD driver.</li>
        </ol>
      `
        },
        {
            title: "2. The Essential Programs Checklist",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">2026 Survival Kit:</h4>
            <p class="text-sm text-gray-300">
                - <strong>Archiver:</strong> NanaZip (Better than WinRAR for Windows 11). <br/>
                - <strong>Player:</strong> VLC or PotPlayer (Universal codec support). <br/>
                - <strong>Runtimes:</strong> Visual C++ All-in-One (Avoids missing DLL errors). <br/>
                - <strong>Browser:</strong> Brave (For privacy) or Edge (Best integration and low resource usage).
            </p>
        </div>
      `
        },
        {
            title: "3. Immediate Privacy Tweaks",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Windows 11 is Intrusive:</strong> 
            <br/><br/>Before anything else, go to Settings > Privacy & Security. Disable all <strong>Diagnostics & Feedback</strong> and <strong>Advertising ID</strong> options. Also, disable 'Background Apps' that you don't use. This ensures that your newly formatted PC doesn't start sending unnecessary data to Microsoft, freeing up internet bandwidth and processing power.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "How to perform a clean installation."
        },
        {
            href: "/guides/corrigir-dll-faltando-vcredist-directx",
            title: "Fix DLLs",
            description: "Install the necessary runtimes for games."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize System",
            description: "Performance tweaks after setup."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

