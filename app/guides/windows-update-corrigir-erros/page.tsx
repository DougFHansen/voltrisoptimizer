import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'windows-update-corrigir-erros',
    title: "How to Fix Windows Update Errors: Complete Reset Script (2026)",
    description: "Is Windows Update stuck at 0% or gave error 0x80070002? Learn how to restart wuauserv, bits and cryptsvc services and clear the corrupted download cache.",
    category: 'windows-errors',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Windows Update Stuck or with Error? Definitive Repair Guide (2026)";
const description = "If your PC doesn't update, you are vulnerable. Discover how to force the update, clear the SoftwareDistribution folder, and use DISM to fix the update.";

const keywords = [
    'windows update error 0x80070002 resolve',
    'windows 11 update stuck downloading 0%',
    'how to restart windows update service cmd',
    'delete softwaredistribution folder access denied',
    'windows update troubleshooter',
    'dism restorehealth windows update fix',
    'wuauclt detectnow command what is it for',
    'error 0x800f081f windows 11'
];

export const metadata: Metadata = createGuideMetadata('windows-update-corrigir-erros', title, description, keywords);

export default function WindowsUpdateGuide() {
    const summaryTable = [
        { label: "Tool", value: "CMD (Admin)" },
        { label: "Target Folder", value: "C:\\Windows\\SoftwareDistribution" },
        { label: "Main Service", value: "wuauserv" },
        { label: "Complexity", value: "Medium (Command Line)" },
        { label: "Risk", value: "Low" },
        { label: "Time", value: "15 min" }
    ];

    const contentSections = [
        {
            title: "Why does Windows Update get stuck?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows Update is a complex system that relies on several services (BITS, Cryptographic, Installer) working in harmony. If the internet drops during a download or if the PC shuts down in the middle of the installation, the files in the cache folder (SoftwareDistribution) become corrupted. The system tries to read this broken file, fails, and enters an infinite loop.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🔧</span> Voltris Automatic Repair
            </h4>
            <p class="text-gray-300 mb-4">
                Executing service stop commands manually is boring. <strong>Voltris Optimizer</strong> has a "Fix Windows Update" button that stops the services, clears the cache, resets the registry DLLs, and restarts everything for you in 5 seconds.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Fix Updates with Voltris
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Method 1: Native Troubleshooter",
            content: `
        <p class="mb-4 text-gray-300">
            Before jumping into complex codes, try the basics that work in 30% of cases.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Go to <strong>Settings > System > Troubleshoot</strong>.</li>
            <li>Click on <strong>Other troubleshooters</strong>.</li>
            <li>Next to <strong>Windows Update</strong>, click <strong>Run</strong>.</li>
            <li>Windows will attempt to restart the services automatically.</li>
        </ol>
      `
        },
        {
            title: "Method 2: The Manual Reset (CMD) - 99% Effectiveness",
            content: `
        <p class="mb-4 text-gray-300">
            If the above method didn't work, let's perform system "surgery". We need to stop the services to release the download folder.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-xs">
            <li>Open <strong>CMD as Administrator</strong>.</li>
            <li>Type the commands below, ONE BY ONE, waiting for each to finish:</li>
            <div class="mt-4 space-y-2 text-[#31A8FF]">
                <p>net stop wuauserv</p>
                <p>net stop cryptSvc</p>
                <p>net stop bits</p>
                <p>net stop msiserver</p>
            </div>
            <p class="py-2 text-gray-500">Now let's rename the corrupted folders (Windows will create new ones automatically):</p>
            <div class="space-y-2 text-[#31A8FF]">
                <p>ren C:\\Windows\\SoftwareDistribution SoftwareDistribution.old</p>
                <p>ren C:\\Windows\\System32\\catroot2 Catroot2.old</p>
            </div>
            <p class="py-2 text-gray-500">Now we restart the services:</p>
            <div class="space-y-2 text-[#31A8FF]">
                <p>net start wuauserv</p>
                <p>net start cryptSvc</p>
                <p>net start bits</p>
                <p>net start msiserver</p>
            </div>
            <li>Close the CMD and try updating again. It may take a while as it will download everything from scratch.</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Error 0x800f081f or Missing System Files",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-red-400 font-bold mb-4 text-xl">Damaged Windows Image</h4>
                <p class="text-gray-300 mb-4">
                    If Windows Update fails because core files are missing from Windows itself, we need to use DISM to download original copies from Microsoft.
                </p>
                <p class="text-gray-300 text-sm font-mono bg-black p-2 rounded">
                    dism /online /cleanup-image /restorehealth
                </p>
                <p class="text-gray-300 text-sm mt-2">
                    This command takes about 15-20 minutes and looks like it's stuck at 62.3%, but it's normal. Wait for it to finish.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Download Update Manually (Catalog)",
            content: `
            <p class="mb-4 text-gray-300">
                If only ONE specific update (e.g., KB5034441) is failing and the others work, you can install it manually.
            </p>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>Note the code (Ex: KB123456).</li>
                <li>Go to the <strong>Microsoft Update Catalog</strong> site.</li>
                <li>Search for the code.</li>
                <li>Download the .msu file corresponding to your version (x64 Windows 11).</li>
                <li>Run the file to install offline.</li>
            </ol>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I stay without updating Windows?",
            answer: "Not recommended. Besides new features, updates fix critical security flaws (viruses and hackers). If a specific update is breaking your PC, you can pause for 7 days, but do not disable it forever."
        },
        {
            question: "Error 0x80070002 persists, what to do?",
            answer: "This is usually caused by incorrect time/date or a corrupted boot partition. Check if the Windows clock is correct. If it is, you might need to use the 'chkdsk /f' command to repair the disk."
        },
        {
            question: "Does Windows Update make the PC slow?",
            answer: "During download and installation, yes (uses a lot of disk and CPU). That's why you should set up 'Active Hours' in the settings so it won't install while you are working or gaming."
        }
    ];

    const externalReferences = [
        { name: "Microsoft Update Catalog", url: "https://www.catalog.update.microsoft.com/" },
        { name: "Script Reset Windows Update (Microsoft)", url: "https://learn.microsoft.com/en-us/troubleshoot/windows-client/deployment/additional-resources-for-windows-update" }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-resolver-tela-azul",
            title: "Repair System",
            description: "SFC and DISM commands explained."
        },
        {
            href: "/guides/limpeza-disco-profunda-arquivos-temporarios",
            title: "Clean Disk",
            description: "How to delete the Windows.old folder."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Improve update installation speed."
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

