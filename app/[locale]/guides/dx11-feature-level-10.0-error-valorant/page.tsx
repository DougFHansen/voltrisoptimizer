import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'dx11-feature-level-10.0-error-valorant',
  title: "DX11 Feature Level 10.0 Error in Valorant: How to Fix (2026)",
  description: "Is your Valorant not opening with a Feature Level 10.0 error? Learn how to fix DirectX errors and run the game on Windows 11 in 2026.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "DX11 Feature Level 10.0 Error in Valorant: How to Fix (2026)";
const description = "Is your Valorant not opening with a Feature Level 10.0 error? Learn how to fix DirectX errors and run the game on Windows 11 in 2026.";
const keywords = [
    'dx11 feature level 10.0 error valorant how to fix 2026',
    'valorant directx runtime error fix tutorial',
    'update graphics card for feature level 11.0 guide',
    'how to play valorant on old graphics card 2026',
    'fix valorant graphics engine error tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('dx11-feature-level-10.0-error-valorant', title, description, keywords, locale);
}

export default function ValorantDX11Guide() {
    const summaryTable = [
        { label: "Cause #1", value: "GPU doesn't natively support DirectX 11" },
        { label: "Cause #2", value: "Corrupted or generic video driver" },
        { label: "Vital Check", value: "Check support via 'dxdiag'" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "The Dread of Valorant Players in 2026",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The error **"DX11 Feature Level 10.0 is required to run the engine"** in Valorant is brutal. It means the game's graphics engine is asking for an instruction that your hardware or driver cannot deliver. In 2026, with constant updates to Vanguard and the Riot Games engine, very old graphics cards are losing official support, but often the problem is just misconfigured software.
        </p>
      `
        },
        {
            title: "1. Checking Real Support (DXDIAG)",
            content: `
        <p class="mb-4 text-gray-300">Find out if your card can still handle it:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Press <code>Win + R</code>, type <strong>dxdiag</strong> and hit Enter.</li>
            <li>Go to the 'Display' tab.</li>
            <li>On the right, look for <strong>'Feature Levels'</strong>.</li>
            <li>If the list stops at 10.0 or 9.3, your card is unfortunately too weak for modern Valorant. If it lists 11.0 or higher, the error is in the software and we can fix it.</li>
        </ol>
      `
        },
        {
            title: "2. Reinstalling Drivers and Runtimes 2026",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Software Solution:</h4>
            <p class="text-sm text-gray-300">
                1. Use <strong>DDU</strong> to wipe all current drivers (see our guide). <br/>
                2. Download the latest driver directly from the NVIDIA, AMD, or Intel website. <br/>
                3. Download the <strong>DirectX End-User Runtime</strong> from the Microsoft website to replace potentially missing graphics engine DLLs. <br/><br/>
                Often, Windows 11 installs a basic driver that claims to "support DirectX 12" but lacks features from previous versions, causing the error in Valorant.
            </p>
        </div>
      `
        },
        {
            title: "3. The \"Rebranded Cards\" Scam",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Careful in 2026:</strong> 
            <br/><br/>If you bought a very cheap graphics card from international sites, it might be a "Fake GPU." For example, a card modified to look like a GTX 1050, but the actual chip is an old 9600GT. These cards don't physically have Feature Level 11.0. If the error persists after all drivers are cleaned, consider that your hardware may be an insurmountable physical limit.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "DDU Guide",
            description: "Clean your drivers to fix DirectX."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Optimize Valorant",
            description: "Improve performance after opening the game."
        },
        {
            href: "/guides/como-escolher-placa-de-video",
            title: "GPU Upgrade",
            description: "Choose a card that supports Valorant in 2026."
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
