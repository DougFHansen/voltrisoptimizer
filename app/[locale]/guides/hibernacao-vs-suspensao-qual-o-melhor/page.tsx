import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hibernacao-vs-suspensao-qual-o-melhor',
  title: "Hibernate vs Sleep: Which is best for your PC? (2026)",
  description: "Do you turn off the PC every night or just close the lid? Learn the difference between Hibernate and Sleep and find out which mode preserves your hardware more.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Hibernate vs Sleep: Which is best for your PC? (2026)";
const description = "Do you turn off the PC every night or just close the lid? Learn the difference between Hibernate and Sleep and find out which mode preserves your hardware more.";
const keywords = [
    'difference hibernate vs sleep windows 11 2026',
    'shut down pc or sleep every night which is better',
    'how to disable hibernate windows to save space',
    'sleep mode uses too much energy tutorial',
    'does hibernate damage ssd or hdd guide 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hibernacao-vs-suspensao-qual-o-melhor', title, description, keywords, locale);
}

export default function HibernationGuide() {
    const summaryTable = [
        { label: "Sleep", value: "Fast / Keeps data in RAM / Uses little energy" },
        { label: "Hibernate", value: "Slower / Saves data to disk / Uses zero energy" },
        { label: "Shut Down", value: "Clears memory / Starts system from scratch" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Sleep or Shut Down?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, with Windows 11 and ultra-fast SSDs, the question "should I turn off my PC?" has a technically complex answer. Many people confuse low-power modes, but the wrong choice can make you lose unsaved work or even wear out your SSD unnecessarily. Let's understand what happens under the hood.
        </p>
      `
        },
        {
            title: "1. Sleep: Back in 1 Second",
            content: `
        <p class="mb-4 text-gray-300">When you put the PC to sleep, it enters a low-power state:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>How it works:</strong> Windows keeps open programs in RAM. Since RAM needs power to hold data, the PC continues to consume a tiny spark of electricity.</li>
            <li><strong>Best for:</strong> Short breaks during the day (up to 2 or 3 hours).</li>
            <li><strong>Risk:</strong> If there is a sudden power outage, you lose anything unsaved, since RAM "forgets" everything without power.</li>
        </ul>
      `
        },
        {
            title: "2. Hibernate: Deep Sleep",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Pure silence:</h4>
            <p class="text-sm text-gray-300">
                <strong>Hibernate</strong> takes everything from RAM and writes a giant file to your SSD called <code>hiberfil.sys</code>, then shuts the PC down entirely. <br/><br/>
                - <strong>Pros:</strong> You can unplug the notebook for 1 month and, when you turn it on, it will return exactly where you left off. <br/>
                - <strong>Cons:</strong> Writing 16GB or 32GB of data to the SSD every time you close the lid generates write wear that, over years, may reduce the solid-state drive's lifespan.
            </p>
        </div>
      `
        },
        {
            title: "3. Windows \"Fast Startup\" (Golden Tip)",
            content: `
        <p class="mb-4 text-gray-300">
            Did you know that when you click "Shut Down" in Windows 11, it doesn't actually shut down properly? 
            <br/><br/>By default, Windows uses <strong>Fast Startup</strong>, which is a partial kernel hibernation. This makes the PC boot faster, but can cause strange bugs if you go months without a real "Restart". If your PC is showing random slowdowns, click <strong>Restart</strong> instead of Shut Down; this forces Windows to truly start the system from scratch.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "How to disable hibernate to reclaim space."
        },
        {
            href: "/guides/saude-bateria-notebook",
            title: "Battery Health",
            description: "Save energy the right way."
        },
        {
            href: "/guides/pc-lento-formatar-vs-limpar",
            title: "Windows Slowdown",
            description: "Why Restart is better than Shut Down."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

