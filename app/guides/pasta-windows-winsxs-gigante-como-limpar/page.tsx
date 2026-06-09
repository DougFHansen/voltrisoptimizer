import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pasta-windows-winsxs-gigante-como-limpar',
  title: "Giant WinSxS Folder: How to Clean it and Gain Space in Windows 11",
  description: "Is your Windows folder taking up too much space? Learn what the WinSxS folder is and the safe way to decrease its size without breaking the system in 2026.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Giant WinSxS Folder: How to Clean it and Gain Space in Windows 11";
const description = "Is your Windows folder taking up too much space? Learn what the WinSxS folder is and the safe way to decrease its size without breaking the system in 2026.";
const keywords = [
    'how to clean winsxs folder windows 11 tutorial 2026',
    'windows folder too big how to decrease size',
    'dism command to clean winsxs step by step 2026',
    'can i delete winsxs files manually tutorial',
    'free up hdd space windows 11 winsxs folder guide'
];

export const metadata: Metadata = createGuideMetadata('pasta-windows-winsxs-gigante-como-limpar', title, description, keywords);

export default function WinSxSCleanGuide() {
    const summaryTable = [
        { label: "What it is", value: "Storage for old components and drivers" },
        { label: "Risk", value: "NEVER delete files manually in this folder" },
        { label: "Official Command", value: "DISM.exe /Online /Cleanup-Image" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "What is the WinSxS folder?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **WinSxS** (Windows Side-by-Side) folder is necessary for system stability. It stores copies of vital Windows files, old drivers, and files from past updates. In 2026, with the accumulation of Windows 11 patches, it's not uncommon for this folder to exceed 20GB or 30GB. Windows keeps this data in case you need to 'uninstall' an update or recover a corrupted file.
        </p>
      `
        },
        {
            title: "1. The Danger of Manual Deletion",
            content: `
        <p class="mb-4 text-gray-300">Critical Warning:</p>
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <p class="text-sm text-gray-300">
                If you enter the <code>C:/Windows/WinSxS</code> folder and delete any file manually, your Windows <strong>will no longer boot</strong> or will stop receiving updates forever. Many files inside are 'hard links' to the system. If you delete them, you delete parts of the heart of Windows. Use only the official tools below.
            </p>
        </div>
      `
        },
        {
            title: "2. Deep Cleaning via DISM (The Right Way)",
            content: `
        <p class="mb-4 text-gray-300">Force Windows to delete old versions that are no longer necessary:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for <strong>CMD</strong> and open it as Administrator.</li>
            <li>Type the command: <code>Dism.exe /online /Cleanup-Image /StartComponentCleanup</code>.</li>
            <li>This command removes past versions of components that have already been updated.</li>
            <li><strong>ResetBase:</strong> If you are sure you don't want to go back to older update versions, use: <code>Dism.exe /online /Cleanup-Image /StartComponentCleanup /ResetBase</code>. This will reduce the folder size to the minimum possible.</li>
        </ol>
      `
        },
        {
            title: "3. Using Built-in Disk Cleanup",
            content: `
        <p class="mb-4 text-gray-300">
            Many people forget to clean system files in the default tool:
            <br/><br/><strong>Tip:</strong> Search for 'Disk Cleanup' in Start. Click on <strong>'Clean up system files'</strong>. Check the box <strong>'Windows Update Cleanup'</strong>. This instructs the system to safely empty WinSxS after major 2026 patches.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpeza-disco-profunda-arquivos-temporarios",
            title: "Deep Cleanup",
            description: "Extra tips for freeing up space on C:."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Keep your disk fast after cleanup."
        },
        {
            href: "/guides/debloating-windows-11",
            title: "Debloating Windows",
            description: "Remove unnecessary things from the system."
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


