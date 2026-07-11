import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 're-size-bar-ativar-pc-gamer',
  title: "How to Enable Re-Size BAR to Gain FPS in PC Gaming (2026)",
  description: "Want more performance on your RTX or RX? Learn how to enable Resizable BAR in BIOS and Windows to remove your GPU bottleneck in 2026.",
  category: 'windows-general',
  difficulty: 'Advanced',
  time: '20 min'
};

const title = "How to Enable Re-Size BAR to Gain FPS in PC Gaming (2026)";
const description = "Want more performance on your RTX or RX? Learn how to enable Resizable BAR in BIOS and Windows to remove your GPU bottleneck in 2026.";
const keywords = [
    'how to enable re-size bar nvidia amd 2026 tutorial',
    'resizable bar worth it for gaming guide',
    'gain fps with re-size bar step by step tutorial',
    'enable above 4g decoding bios tutorial 2026',
    'check if resizable bar is active windows 11 guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('re-size-bar-ativar-pc-gamer', title, description, keywords, locale);
}

export default function ResizableBarGuide() {
    const summaryTable = [
        { label: "What it does", value: "Gives CPU full access to GPU memory (VRAM)" },
        { label: "FPS Gains", value: "5% to 12% (In modern games)" },
        { label: "Hardware Requirement", value: "RTX 30+ / RX 6000+ / Ryzen 3000+ or Intel 10th Gen+ CPUs" },
        { label: "Difficulty", value: "Advanced" }
    ];

    const contentSections = [
        {
            title: "What is Resizable BAR?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Traditionally, your processor (CPU) could only access small blocks (256MB) of your graphics card memory at a time. **Resizable BAR (Re-Size BAR)** breaks this limit, allowing the CPU to see and manage the entire graphics card VRAM simultaneously. In 2026, with games using 12GB or more of textures, this feature is essential to avoid stuttering and increase minimum frame rates.
        </p>
      `
        },
        {
            title: "1. Requirements for Activation in 2026",
            content: `
        <p class="mb-4 text-gray-300">Not every PC supports it; you need:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>GPU:</strong> NVIDIA GeForce RTX 30 Series or higher / AMD Radeon RX 6000 or higher.</li>
            <li><strong>Processor:</strong> AMD Ryzen 3000 (Zen 2) or Intel 10th Generation or higher.</li>
            <li><strong>BIOS:</strong> Must be in **UEFI** mode (CSM mode must be disabled).</li>
        </ul >
      `
        },
        {
            title: "2. Step-by-Step in BIOS",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Motherboard Configuration:</h4>
            <p class="text-sm text-gray-300">
                1. Restart the PC and enter the BIOS (usually Del or F2 key). <br/>
                2. Go to advanced PCI or IO settings. <br/>
                3. Enable the <strong>Above 4G Decoding</strong> option. <br/>
                4. Enable the <strong>Re-Size BAR Support</strong> option (may appear as Smart Access Memory on AMD boards). <br/>
                5. Save and restart. Windows 11 will now have full access to the graphics card.
            </p>
        </div>
      `
        },
        {
            title: "3. How to verify if it worked?",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Final check in Windows:</strong> 
            <br/><br/>Open the <strong>NVIDIA Control Panel</strong>, click 'System Information' in the bottom left corner. In the list of details, look for 'Resizable BAR'. If it says 'Yes', you have successfully completed the process. For AMD users, the <strong>Adrenalin</strong> software will show 'Smart Access Memory: Enabled' in the Performance tab.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "You need the latest drivers for BAR support."
        },
        {
            href: "/guides/atualizar-bios-seguro",
            title: "Update BIOS",
            description: "If the option doesn't appear, your BIOS might be outdated."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Combine with HAGS for maximum performance."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


