import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'instalacao-limpa-drivers-nvidia-amd',
  title: "Clean Driver Installation: How to Do It the Right Way (2026)",
  description: "Is your video driver crashing or showing low performance? Learn how to perform a clean installation of NVIDIA and AMD drivers without leaving remnants in the system...",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Clean Driver Installation: How to Do It the Right Way (2026)";
const description = "Is your video driver crashing or showing low performance? Learn how to perform a clean installation of NVIDIA and AMD drivers without leaving remnants in the system.";
const keywords = [
    'clean installation nvidia driver windows 11 2026',
    'how to perform clean installation amd adrenalin driver tutorial',
    'video driver crashing how to uninstall and install from scratch',
    'nvidia geforce experience driver installation error fix',
    'video driver performance 2026 professional guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('instalacao-limpa-drivers-nvidia-amd', title, description, keywords, locale);
}

export default function CleanDriverInstallGuide() {
    const summaryTable = [
        { label: "What is it", value: "Total removal of old profiles and files" },
        { label: "NVIDIA Method", value: "check 'Perform a clean installation'" },
        { label: "AMD Method", value: "AMD Cleanup Utility" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why 'Updating' Isn't Always the Best Option?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When you click the "Update" button in GeForce Experience or AMD Adrenalin, the installer tries to overwrite the new files on top of the old ones. In 2026, with complex drivers exceeding 1GB, remnants of overclocking profiles or custom brightness settings from previous versions can cause conflicts, leading to unexplained FPS drops and the notorious "desktop crashes."
        </p>
      `
        },
        {
            title: "1. Native Clean Installation (NVIDIA)",
            content: `
        <p class="mb-4 text-gray-300">If you have an NVIDIA card (RTX or GTX):</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Download the driver manually from the NVIDIA website or use the NVIDIA App.</li>
            <li>Start the installation and choose <strong>'Custom Installation (Advanced)'</strong>.</li>
            <li>Click Next. At the bottom of the component list, check the box <strong>'Perform a clean installation'</strong>.</li>
            <li>This will restore all control panel settings to factory defaults, eliminating bugs from past versions.</li>
        </ol>
      `
        },
        {
            title: "2. The AMD Way (Adrenaline)",
            content: `
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h4 class="text-white font-bold mb-2">AMD Cleanup Utility:</h4>
            <p class="text-sm text-gray-300">
                AMD offers a separate tool called the <strong>AMD Cleanup Utility</strong>. We recommend downloading it whenever you notice that the Adrenaline software isn't opening or the screen colors look strange. It cleans the Windows registry deep down before you run the new installer, being much more effective than the standard uninstaller.
            </p>
        </div>
      `
        },
        {
            title: "3. Warning About Windows Update",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Important:</strong> As soon as you uninstall the old driver, Windows Update will automatically try to download a generic driver behind the scenes. 
            <br/><br/><strong>Tip:</strong> Disconnect from the internet or use the <strong>DDU</strong> program to temporarily disable this function. Otherwise, you'll end up with a "driver salad" (the Windows Update one and the one you downloaded), which leading to even more instability.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "DDU Guide",
            description: "The definitive method for removing drivers."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Official Drivers",
            description: "Where to download the correct 2026 versions."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Performance",
            description: "Adjust after clean installation."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


