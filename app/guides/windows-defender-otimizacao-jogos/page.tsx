import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'windows-defender-otimizacao-jogos',
    title: "Windows Defender (2026): Optimization for Gaming Without Disabling",
    description: "Is Antimalware Service Executable using 100% of your Disk? Learn how to configure folder exclusions, limit CPU usage of the scan, and avoid stutters while playing.",
    category: 'windows',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "Windows Defender Gaming (2026): Security Without Lag";
const description = "Disabling Defender is dangerous. The secret is to configure it to ignore your trusted games, preventing it from scanning every texture file while you play.";

const keywords = [
    'antimalware service executable high cpu fix',
    'windows defender using high disk games',
    'add game folder exclusion defender',
    'mpcmdrun limit cpu usage scan',
    'disable real-time protection windows 11 games',
    'defender scheduled task idle',
    'disable defender tamper protection',
    'core isolation fps drop',
    'voltris optimizer defender mode',
    'msmpeng.exe high memory usage'
];

export const metadata: Metadata = createGuideMetadata('windows-defender-otimizacao-jogos', title, description, keywords);

export default function DefenderGuide() {
    const summaryTable = [
        { label: "Exclusions", value: "Game Folders (Steam)" },
        { label: "Real Time", value: "On (With exclusions)" },
        { label: "CPU Limit", value: "10% and 20% (PowerShell)" },
        { label: "Tamper Prot", value: "On" },
        { label: "Core Isolation", value: "Off (If old CPU)" },
        { label: "Cloud Protection", value: "On" },
        { label: "Sample Submit", value: "Off (Privacy)" }
    ];

    const contentSections = [
        {
            title: "Introduction: MsMpEng.exe",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The <strong>Antimalware Service Executable</strong> (MsMpEng.exe) process is the engine of Defender. It checks files in real-time. The problem: when you open a 100GB game, it tries to check thousands of .dll files and textures, causing extreme disk and CPU usage.
        </p>
      `
        },
        {
            title: "Chapter 1: Configuring Exclusions (The Secret)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step by Step</h4>
                <p class="text-white font-mono text-sm mb-2">Windows Security > Virus & threat protection > Manage settings > Exclusions.</p>
                <p class="text-gray-400 text-xs">
                    Add a "Folder". Select the folder where your games are installed (e.g., <code>C:\\SteamLibrary</code> or <code>D:\\Games</code>).
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Why do this?</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Steam and Epic Games verify game integrity. It's redundant for Defender to check it as well. By excluding the "Games" folder, Defender stops scanning each texture file read by the game, eliminating disk lag without leaving your system vulnerable (viruses usually go to the Downloads or Windows folders, not into the game folder).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Limiting CPU usage (PowerShell)",
            content: `
        <p class="mb-4 text-gray-300">
            You can tell Defender never to use more than X% of your CPU during a scan.
            <br/>Open PowerShell as Admin and type:
        </p>
        <code class="block bg-black/50 p-3 rounded text-green-400 font-mono text-sm mb-3">
            Set-MpPreference -ScanAvgCPULoadFactor 20
        </code>
        <p class="text-gray-300 text-sm">
            This limits usage to 20%. The scan will take longer, but your PC won't freeze while it's happening. The default is 50%.
        </p>
      `
        },
        {
            title: "Chapter 3: Core Isolation (Memory Integrity)",
            content: `
        <p class="mb-4 text-gray-300">
            Device Security > Core Isolation > Memory Integrity.
            <br/>- <strong>New CPUs (12th Gen+):</strong> Can leave it on (Minimal impact).
            <br/>- <strong>Old CPUs (i7 7700 or lower):</strong> <span class="text-emerald-400 font-bold">TURN IT OFF</span>.
            <br/>This feature uses virtualization to protect RAM. On old CPUs, this causes a 10-15% loss of FPS in games.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Task Scheduling",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes Defender decides to perform a "Full Scan" in the middle of your match.
            <br/>Go to Task Scheduler > Microsoft > Windows > Windows Defender.
            <br/>In "Windows Defender Scheduled Scan" properties > Conditions.
            <br/>Check: <strong>"Start the task only if the computer is idle"</strong> for 10 minutes.
            <br/>Check: "Stop if the computer ceases to be idle".
            <br/>This ensures that the scan stops as soon as you move the mouse.
        </p>
      `
        },
        {
            title: "Chapter 5: Automatic Sample Submission",
            content: `
        <p class="mb-4 text-gray-300">
            In Defender settings: "Automatic sample submission".
            <br/>Recommendation: <strong>Disabled</strong>.
            <br/>This sends suspicious files (like cracks or game mods) to Microsoft for analysis. In addition to privacy, this uses upload bandwidth.
        </p>
      `
        },
        {
            title: "Chapter 6: Tamper Protection",
            content: `
        <p class="mb-4 text-gray-300">
            Keep "Tamper Protection" <strong>ON</strong>.
            <br/>It prevents viruses from disabling Defender. Do not disable this unless you know very well what you're doing (e.g., installing another Antivirus).
        </p>
      `
        },
        {
            title: "Chapter 7: Process Exclusions",
            content: `
        <p class="mb-4 text-gray-300">
            In addition to folders, you can exclude .exe processes.
            <br/>Add your game process (e.g., <code>cs2.exe</code>).
            <br/>This prevents Defender from monitoring the executable's behavior in real-time, reducing CPU overhead.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Game Mode",
            content: `
            <p class="mb-4 text-gray-300">
                Windows 10/11 "Game Mode" theoretically prevents Windows Update and Defender from performing installations during games.
                <br/>But manual exclusion configuration (Chapter 1) is much more effective and guaranteed. Use both.
            </p>
            `
        },
        {
            title: "Chapter 9: Defender vs Free Antivirus",
            content: `
            <p class="mb-4 text-gray-300">
                Nowadays, Defender is as good as Avast/AVG and much lighter.
                <br/>Third-party antiviruses install "Web Shields", fake "Game Boosters", and sales pop-ups that worsen performance.
                <br/>Stick with optimized Defender + common sense.
            </p>
            `
        },
        {
            title: "Chapter 10: The 100% Disk Usage Bug",
            content: `
            <p class="mb-4 text-gray-300">
                If even with all this MsMpEng.exe uses 100% of the disk:
                <br/>You may have a very large corrupted file (ISO or ZIP) that it's stuck trying to read. Exclude the Downloads folder from scans or delete old large files.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I disable Defender permanently?",
            answer: "You can (via Regedit/DControl), but we don't recommend it. Without an antivirus, one wrong click downloads Ransomware that encrypts all your files. The FPS gain from completely turning it off vs. configuring exclusions is 1-2 FPS. It's not worth the risk."
        },
        {
            question: "Core Isolation missing?",
            answer: "If you don't see this option, perhaps Virtualization (VT-x / SVM) is turned off in the BIOS. For games, this is good (fewer virtualization layers)."
        },
        {
            question: "Does SmartScreen interfere with games?",
            answer: "SmartScreen checks apps when opening them. It may cause a delay in game launching but doesn't affect FPS during the match."
        }
    ];

    const externalReferences = [
        { name: "Microsoft Docs (Defender Performance)", url: "https://docs.microsoft.com/en-us/microsoft-365/security/defender-endpoint/configure-extension-file-exclusions-microsoft-defender-antivirus" },
        { name: "AV-Test (Defender Ranking)", url: "https://www.av-test.org/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Helps with fast scanning."
        },
        {
            href: "/guides/instalacao-windows-11",
            title: "Clean Windows",
            description: "Fewer processes."
        },
        {
            href: "/guides/google-chrome-consumo-ram-fix",
            title: "Chrome",
            description: "Avoid viruses."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}

