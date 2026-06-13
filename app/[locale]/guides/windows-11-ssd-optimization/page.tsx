import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'otimizacao-ssd-windows-11',
    title: "Extreme SSD and NVMe Optimization on Windows 11 (2026)",
    description: "Is your SSD slow? Learn how to configure TRIM, Write Caching, and Overprovisioning to reach maximum read/write speeds.",
    category: 'optimization',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Extreme SSD and NVMe Optimization on Windows 11 (2026)";
const description = "Is your SSD slow? Learn how to configure TRIM, Write Caching, and Overprovisioning to reach maximum read/write speeds.";
const keywords = [
    'enable trim ssd windows 11 powershell',
    'how to increase ssd nvme lifespan',
    'overprovisioning samsung magician crucial executive',
    'write caching windows ssd dangerous or good',
    'disable sysmain ssd'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('otimizacao-ssd-windows-11', title, description, keywords, locale);
}

export default function SSDGuide() {
    const summaryTable = [
        { label: "Vital Command", value: "TRIM" },
        { label: "Key Setting", value: "Write Caching (On)" },
        { label: "Advanced Feature", value: "Overprovisioning (10%)" },
        { label: "Myth", value: "Defragment SSD (Never do it!)" }
    ];

    const contentSections = [
        {
            title: "Introduction: SSD is not an HDD",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          SSDs (Solid State Drives) work like giant USB flash drives. They have no moving parts. If you treat an SSD like an old HDD (defragmenting every week), you will <strong>kill it</strong> in months. This guide teaches you how to maintain its health (TBW) and performance at 100%.
        </p>
      `
        },
        {
            title: "Step 1: Checking TRIM (The Automatic Janitor)",
            content: `
        <p class="mb-4 text-gray-300">
            The TRIM command tells the SSD controller which data blocks are no longer in use and can be erased internally. Without TRIM, the SSD becomes very slow over time.
        </p>
        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-xs overflow-x-auto">
            <p class="text-gray-500 mb-2"># Check Status (Admin CMD)</p>
            <p class="text-green-400">fsutil behavior query DisableDeleteNotify</p>
            
            <ul class="mt-4 space-y-2 text-gray-400">
                <li>If it returns <strong>0</strong> = TRIM is <strong>ENABLED</strong> (Good).</li>
                <li>If it returns <strong>1</strong> = TRIM is <strong>DISABLED</strong> (Bad).</li>
            </ul>

            <p class="text-gray-500 mt-4 mb-2"># Enable if it's off</p>
            <p class="text-blue-300">fsutil behavior set DisableDeleteNotify 0</p>
        </div>
      `
        },
        {
            title: "Step 2: Write Caching Policy (Risky vs Fast)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows has a function that uses RAM as a temporary "buffer" before writing to the disk. This greatly accelerates the writing of small files.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 bg-gray-900 p-6 rounded-xl border border-gray-700">
            <li>Open <strong>Device Manager</strong> (Win+X > M).</li>
            <li>Expand "Disk drives" and double-click your SSD/NVMe.</li>
            <li>Go to the <strong>Policies</strong> tab.</li>
            <li>Check <strong>"Enable write caching on the device"</strong> (Usually checked by default).</li>
            <li><strong>Advanced:</strong> There is an option called "Turn off Windows write-cache buffer flushing...". Checking this increases speed SIGNIFICANTLY, but if the power goes out during a file copy, you will lose the file. Only use this if you have a UPS (Battery Backup) or a Laptop with a battery.</li>
        </ol>
      `
        },
        {
            title: "Step 3: Overprovisioning (The Secret to Longevity)",
            content: `
        <p class="mb-4 text-gray-300">
            Filling your SSD to 100% makes it slow, as it needs free space to reorganize data (Garbage Collection).
        </p>
        <p class="text-gray-300">
            <strong>Recommendation:</strong> Always leave <strong>10% to 15%</strong> of the total disk space "Unallocated" in Disk Management. Or use the manufacturer's software (Samsung Magician, Crucial Storage Executive) to configure Overprovisioning automatically.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/debloat-windows-11-otimizacao-powershell",
            title: "Debloat Windows",
            description: "Fewer processes writing logs to the disk."
        },
        {
            href: "/guides/como-escolher-memoria-ram",
            title: "RAM Disk",
            description: "How to use RAM to avoid writing to the SSD."
        },
        {
            href: "/guides/formatacao-limpa-windows-11",
            title: "Clean Install",
            description: "Start from scratch with aligned partitions."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            showVoltrisOptimizerCTA={true}
        />
    );
}

