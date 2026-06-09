import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'limpeza-disco-profunda-arquivos-temporarios',
    title: "Deep Disk Cleanup: Free Up 20GB+ on Windows (2026)",
    description: "Is your 'C: Drive' full? Windows hides gigabytes of junk in folders like WinSxS, SoftwareDistribution, and Temp. Learn how to deep clean without formatting.",
    category: 'windows-general',
    difficulty: 'Beginner',
    time: '20 min'
};

const title = "How to Free Up Space on Windows 11: Deep and Safe Cleaning (2026)";
const description = "Stop deleting your photos. The space villain is Windows itself. Learn how to use Storage Sense, cleanmgr, and CMD to recover lost gigabytes.";

const keywords = [
    'how to free up space disk c windows 11',
    'advanced disk cleanup cmd',
    'winsxs folder too big how to reduce',
    'delete temporary files %temp%',
    'softwaredistribution can I delete',
    'storage sense configure',
    'hiberfil.sys disable save space',
    'wiztree vs windirstat which is better'
];

export const metadata: Metadata = createGuideMetadata('limpeza-disco-profunda-arquivos-temporarios', title, description, keywords);

export default function DiskCleanupGuide() {
    const summaryTable = [
        { label: "Basic Tool", value: "Disk Cleanup (Cleanmgr)" },
        { label: "Visual Tool", value: "WizTree (Better than WinDirStat)" },
        { label: "Critical Folder", value: "WinSxS (Use DISM command)" },
        { label: "Average Gain", value: "10GB to 40GB" },
        { label: "Risk", value: "Low (If following guide)" },
        { label: "Frequency", value: "Monthly" }
    ];

    const contentSections = [
        {
            title: "Where does the space go?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          You uninstall games, delete videos, but the HD keeps filling up. Windows accumulates: copies of old updates (Windows.old), hibernation files (hiberfil.sys), virtual memory (pagefile.sys), and error logs.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🧹</span> Smart Cleanup
            </h4>
            <p class="text-gray-300 mb-4">
                Why do this manually every month? <strong>Voltris Optimizer</strong> monitors your temporary folders and browser caches (Chrome/Edge), automatically cleaning useless junk at every startup, keeping your SSD always fast and free.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Voltris Automatic Cleanup
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: The Hidden Option in 'Disk Cleanup'",
            content: `
        <p class="mb-4 text-gray-300">
            The native Windows tool is great, but many people use it incorrectly.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Press Win, type <strong>"Disk Cleanup"</strong> and open it.</li>
            <li>Choose drive C:.</li>
            <li>When it opens, DON'T click OK yet. Click the <strong>"Clean up system files"</strong> button with the shield icon.</li>
            <li>It will scan again. Now, the real gigabytes will appear.</li>
            <li>Check:
                <ul class="ml-6 mt-2 text-sm text-[#31A8FF] list-none space-y-1">
                    <li>[x] Windows Update Cleanup (Can be 5GB+)</li>
                    <li>[x] Delivery Optimization Files</li>
                    <li>[x] Previous Windows installations (Can be 20GB+)</li>
                    <li>[x] Recycle Bin</li>
                </ul>
            </li>
            <li>Click OK and Delete Files.</li>
        </ol>
      `
        },
        {
            title: "Step 2: Disable Hibernation (Save 6GB+)",
            content: `
        <p class="mb-4 text-gray-300">
            If you use an SSD, the computer boots in 10 seconds. Hibernation (which saves RAM to the HD to boot fast) is useless and takes up space equal to your RAM.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Open Command Prompt (CMD) as Administrator.</li>
            <li>Type: <code>powercfg.exe /hibernate off</code></li>
            <li>Done. The <code>hiberfil.sys</code> file (which is huge and hidden) will instantly disappear from the C: root.</li>
        </ul>
      `
        },
        {
            title: "Step 3: Visualize what is taking up space (WizTree)",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes the culprit is a game folder you forgot. File Explorer is bad at showing this.
        </p>
        <p class="mb-4 text-gray-300">
             Download <strong>WizTree</strong> (it's 50x faster than WinDirStat). It shows a colored map of squares. Large squares are large files. Delete what you don't need (Be careful not to delete files from the Windows folder).
        </p>
        <div class="mt-4 p-4 border border-yellow-500/20 bg-yellow-900/10 rounded-lg">
             <p class="text-yellow-200 text-sm"><strong>Tip:</strong> Search for <code>installer</code> in the LoL or Nvidia folder. Sometimes they keep old installers of 500MB each.</p>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "SoftwareDistribution Folder (Update Fix)",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Download Junk</h4>
                <p class="text-gray-300 mb-4">
                    When Windows downloads an update, it stores it in <code>C:\\Windows\\SoftwareDistribution\\Download</code>. After installing, this should be deleted, but it isn't always.
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Stop the Windows Update service (Win+R > services.msc > Windows Update > Stop).</li>
                    <li>Go to the folder mentioned above and delete EVERYTHING inside the Download folder.</li>
                    <li>Start the service again.</li>
                    <li>This also fixes stuck update errors.</li>
                </ol>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Storage Sense (Automatic)",
            content: `
            <p class="mb-4 text-gray-300">
                Windows 10/11 has a native "janitor."
            </p>
            <p class="text-gray-300 text-sm">
                Go to <strong>Settings > System > Storage</strong>. Enable "Storage Sense." Configure it to run "Every week" and delete files from the Recycle Bin older than 14 days.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I delete the WinSxS folder?",
            answer: "NEVER delete this folder manually via Explorer. It contains essential system backup files (DLLs). If you delete it, Windows dies. To safely reduce its size, use the command: <code>dism.exe /online /Cleanup-Image /StartComponentCleanup</code> in an Admin CMD."
        },
        {
            question: "Is CCleaner good?",
            answer: "We no longer recommend CCleaner in 2026. Windows already does everything it did, but more safely. Aggressive registry cleaning tools can cause blue screens. Use native tools or software focused on safe optimization like Voltris Optimizer."
        },
        {
            question: "Does deleting the Prefetch folder slow down the PC?",
            answer: "On the first boot, yes. The Prefetch folder helps Windows open programs faster. If you delete it, it will have to 'relearn' your habits. Only delete it if you are facing issues with a specific program."
        }
    ];

    const externalReferences = [
        { name: "Microsoft - Disk Cleanup Guide", url: "https://support.microsoft.com/en-us/windows/disk-cleanup-in-windows-10-8a96ff42-5751-39ad-23d6-434b4d5b9a68" },
        { name: "WizTree Download", url: "https://diskanalyzer.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/pasta-windows-winsxs-gigante-como-limpar",
            title: "WinSxS Guide",
            description: "Deeper dive into cleaning the most complex Windows folder."
        },
        {
            href: "/guides/debloating-windows-11",
            title: "Debloat",
            description: "Remove apps that take up useless space."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD Optimization",
            description: "Maintain performance after cleaning."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

