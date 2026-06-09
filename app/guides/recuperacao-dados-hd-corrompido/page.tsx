import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'recuperacao-dados-hd-corrompido',
  title: "Data Recovery: How to Save Files from a Corrupted HDD",
  description: "Has your hard drive stopped appearing in Windows or is it asking to format? Learn photo and document recovery techniques using professional tools (without paying anything).",
  category: 'windows',
  difficulty: 'Advanced',
  time: '2 hours'
};

const title = "Data Recovery: How to Save Files from a Corrupted HDD";
const description = "Has your hard drive stopped appearing in Windows or is it asking to format? Learn photo and document recovery techniques using professional tools (without paying anything).";
const keywords = [
    'how to recover files from corrupted hdd 2026',
    'hdd asking to format how to recover files tutorial',
    'best free data recovery program 2026',
    'recover photos from corrupted sd card or flash drive',
    'recuva vs r-studio which is best for data recovery'
];

export const metadata: Metadata = createGuideMetadata('recuperacao-dados-hd-corrompido', title, description, keywords);

export default function DataRecoveryGuide() {
    const summaryTable = [
        { label: "Tool #1", value: "Recuva (Ease of use)" },
        { label: "Tool #2", value: "PhotoRec (Power / Open Source)" },
        { label: "Vital Step", value: "DO NOT write new data to the disk" },
        { label: "Difficulty", value: "Advanced" }
    ];

    const contentSections = [
        {
            title: "The Golden Rule of Recovery",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The biggest mistake when trying to recover data is to continue using the disk. When a file is deleted or the index corrupts, the physical bytes are still there, but marked as "empty". If you install a recovery program <strong>on the same disk</strong> you want to save, you might overwrite your own data and lose it forever.
        </p>
      `
        },
        {
            title: "1. The CHKDSK Command (First Attempt)",
            content: `
        <p class="mb-4 text-gray-300">If the disk appears but won't open, try logical repair:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Open the Command Prompt (CMD) as Administrator.</li>
            <li>Type: <code>chkdsk D: /f</code> (replace D with your drive letter).</li>
            <li>This command tries to fix the HDD's "table of contents". If it works, your files will return without needing extra software.</li>
            <li><strong>Warning:</strong> If the HDD is making metallic noises (clicks), <strong>DO NOT</strong> run this command; take it to a professional immediately.</li>
        </ol>
      `
        },
        {
            title: "2. PhotoRec: The Digital Excavator",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Raw Power:</h4>
            <p class="text-sm text-gray-300">
                <strong>PhotoRec</strong> ignores the file system completely and reads raw data. It doesn't recover file names (they become codes like f12345.jpg), but it recovers content from almost anything: burned flash drives, camera SD cards, and HDDs with I/O errors. It is free and the most effective in its category.
            </p>
        </div>
      `
        },
        {
            title: "3. When to Give Up and Look for a Lab?",
            content: `
        <p class="mb-4 text-gray-300">
            If the disk doesn't spin, isn't recognized in the BIOS, or makes grinding noises, no software in the world will help. The problem is physical (read head or motor). In these cases, opening the HDD at home means destroying it. The dust in the air in your room is like rocks to the internal magnetic disks. Use specialized companies if the data is worth the investment.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
            title: "Disk Health",
            description: "Find out if your hard drive will fail again."
        },
        {
            href: "/guides/backup-dados",
            title: "Backup Guide",
            description: "Never need this guide again."
        },
        {
            href: "/guides/hds-vs-ssd-qual-a-diferenca",
            title: "HDD vs SSD",
            description: "Understand the durability of each technology."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="2 hours"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

