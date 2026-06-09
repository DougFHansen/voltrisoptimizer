import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'memoria-virtual-pagefile-ssd-otimizacao',
    title: "Virtual Memory (Pagefile): Optimization for Resource-Intensive Games",
    description: "Does your game crash to desktop without an error? It might be a paging file issue. Learn how to correctly configure Virtual Memory on your SSD for maximum stability.",
    category: 'windows',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Virtual Memory (Pagefile): The Ultimate Optimization Guide";
const description = "Many 'optimization' guides suggest disabling the Pagefile. THIS IS A CRITICAL ERROR. Modern titles like Cyberpunk 2077 and Tarkov require it to function without crashing.";

const keywords = [
    'ideal paging file size for 16gb ram gaming',
    'how to increase virtual memory windows 11 games',
    'should pagefile be on ssd or hdd',
    'fix out of memory error windows 11 2026',
    'game crashes to desktop no error fix',
    'system managed vs custom size pagefile',
    'virtual memory commit charge optimization',
    'voltris optimizer ram management',
    'star citizen paging file size requirements'
];

export const metadata: Metadata = createGuideMetadata('memoria-virtual-pagefile-ssd-otimizacao', title, description, keywords);

export default function PagefileGuide() {
    const summaryTable = [
        { label: "Storage Location", value: "SSD (Mandatory)" },
        { label: "Size (16GB RAM)", value: "16GB - 24GB" },
        { label: "Size (32GB RAM)", value: "4GB - 8GB" },
        { label: "Mode", value: "Fixed Size (Min = Max)" },
        { label: "Mechanical HDD", value: "Disable (Too Slow)" }
    ];

    const contentSections = [
        {
            title: "Introduction: What is the Pagefile?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When your physical RAM reaches capacity, Windows moves the least active data to your storage drive. This area of the drive is the Pagefile. If you disable it, the moment your RAM hits 100% usage, your programs will instantly experience a \"Crash to Desktop\" (CTD).
        </p>
      `
        },
        {
            title: "Chapter 1: Configuration Steps",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step Setup</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Search for \"Adjust the appearance and performance of Windows\" in the Start menu.
                    <br/>2. Go to Advanced tab > Virtual Memory > Change.
                    <br/>3. Uncheck \"Automatically manage paging file size for all drives.\"
                    <br/>4. Select your <strong>C: (SSD)</strong> drive.
                    <br/>5. Select \"Custom size.\"
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Fixed Size vs. System Managed",
            content: `
        <p class="mb-4 text-gray-300">
            We strongly recommend using a <strong>Fixed Size</strong> (setting both Initial and Maximum size to the same value).
            <br/>Why? If the size is dynamic (e.g., 1GB to 20GB), Windows consumes CPU cycles constantly resizing the file during gameplay, which can lead to stutters. By fixing the size, the file is created once, remains static, and provides faster access.
        </p>
      `
        },
        {
            title: "Chapter 3: Recommended Values",
            content: `
        <p class="mb-4 text-gray-300">
            Practical rule for Gamers (Values in MB):
            <br/>- <strong>8GB RAM:</strong> Set to 16000 MB (Requires significant paging support).
            <br/>- <strong>16GB RAM:</strong> Set to 16000 MB or 12000 MB. (Essential for Warzone/Tarkov).
            <br/>- <strong>32GB RAM:</strong> Set to 4096 MB or leave as System Managed. (Rarely used, kept for stability).
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: SSD vs. Mechanical HDD",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>NEVER place the Pagefile on a mechanical HDD.</strong>
            <br/>Hard drives are exponentially slower than RAM. If a game needs to read paging data from an HDD, you will experience severe 1-second stutters.
            <br/>Configure the Pagefile ONLY on your fastest SSD (NVMe preferred). Select \"No paging file\" for all secondary mechanical HDDs.
        </p>
      `
        },
        {
            title: "Chapter 5: Committed Memory and System Commit",
            content: `
        <p class="mb-4 text-gray-300">
            Certain simulation titles (Star Citizen, DCS World) will crash if the \"System Commit\" cannot reach 40GB or more.
            <br/>System Commit = Physical RAM + Paging File size.
            <br/>If you have 16GB of RAM, you need a 24GB Pagefile to reach the 40GB total commit charge required by these heavy simulators.
        </p>
      `
        },
        {
            title: "Chapter 6: The Myth of Disabling the Pagefile",
            content: `
        <p class="mb-4 text-gray-300">
            In the past, users were advised to disable paging to \"save SSD lifespan.\" 
            <br/>Modern SSDs can handle petabytes of writes. Disabling paging only introduces system instability. Windows is architected to utilize the pagefile even for low-priority background tasks, regardless of how much RAM you have. Keep it enabled.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Intelligent Standby List Cleaner (ISLC)",
            content: `
            <p class="mb-4 text-gray-300">
                ISLC is a tool that automatically clears the Windows standby list cache. 
                <br/>It is particularly useful if you find that games start smoothly but begin to stutter after an hour of play.
                <br/>Configure it to clear when \"Free Memory\" is lower than 1024MB.
            </p>
            `
        },
        {
            title: "Chapter 8: Paging Faults (BSOD Errors)",
            content: `
            <p class="mb-4 text-gray-300">
                Encountering a \"PAGE_FAULT_IN_NONPAGED_AREA\" Blue Screen?
                <br/>This is typically caused by faulty RAM or unstable overclocking (aggressive XMP/EXPO), not your paging file size configuration. Run MemTest86 to verify hardware stability.
            </p>
            `
        },
        {
            title: "Chapter 9: Disk Space Awareness",
            content: `
            <p class="mb-4 text-gray-300">
                Remember: If you define a 16GB pagefile, you lose 16GB of SSD storage immediately. Always ensure you have sufficient free space; a nearly full SSD can become significantly slower (performance degradation).
            </p>
            `
        },
        {
            title: "Chapter 10: The Required Reboot",
            content: `
            <p class="mb-4 text-gray-300">
                Any changes made to your Virtual Memory settings require a full Windows restart to take effect.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "I have 64GB of RAM. Do I still need a Pagefile?",
            answer: "Yes. Keep it at a minimum of 1GB or set to System Managed. Legacy applications and Windows error loggers often require the existence of a paging file to function correctly."
        },
        {
            question: "Does the Pagefile damage my SSD?",
            answer: "No. Modern SSDs feature high TBW (Terabytes Written) ratings. Typical gaming and system usage won't come close to exhausting this lifespan for many years."
        }
    ];

    const externalReferences = [
        { name: "Microsoft Official Docs (Pagefile)", url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/performance/introduction-to-the-page-file" },
        { name: "Wagnardsoft ISLC Download", url: "https://www.wagnardsoft.com/content/intelligent-standby-list-cleaner-v1000-released" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Maintenance",
            description: "Keeping your storage drive in top health."
        },
        {
            href: "/guides/escape-from-tarkov-otimizacao-fps-ram",
            title: "Tarkov Optimization",
            description: "The game that benefits most from correct paging."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

