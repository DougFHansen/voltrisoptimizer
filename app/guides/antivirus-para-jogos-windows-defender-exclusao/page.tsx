import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'antivirus-para-jogos-windows-defender-exclusao',
    title: "Antivirus for Gamers (2026): Optimized Windows Defender",
    description: "Don't pay for Norton or McAfee. They make your PC slow. Learn how to configure Windows Defender to ignore the 'SteamApps' folder and gain performance.",
    category: 'windows',
    difficulty: 'Beginner',
    time: '10 min'
};

const title = "Gamer Security (2026): Lightweight Defender";
const description = "Third-party antiviruses are bloatware nowadays. Windows Defender is excellent and lightweight, BUT it needs to be configured not to scan your games while you play.";

const keywords = [
    'best antivirus for lightweight gaming pc',
    'temporarily disable windows defender',
    'add steam folder exclusion antivirus',
    'kaspersky free vs bitdefender gaming mode',
    'antimalware service executable high cpu',
    'cheat engine false positive virus',
    'voltris optimizer security',
    'ransomware protection games save'
];

export const metadata: Metadata = createGuideMetadata('antivirus-para-jogos-windows-defender-exclusao', title, description, keywords);

export default function AntivirusGuide() {
    const summaryTable = [
        { label: "Software", value: "Windows Defender (Native)" },
        { label: "Steam Folder", value: "Add Exclusion" },
        { label: "Real-Time Protection", value: "ON (Security)" },
        { label: "Scanning", value: "Schedule for Overnight" },
        { label: "Kaspersky/Norton", value: "Uninstall (Heavy)" },
        { label: "Malwarebytes", value: "Scanner Only (Manual)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The CPU Monster",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Every time a game loads a map, it reads 5,000 files from the disk. The antivirus intercepts each read to check for viruses. This doubles loading times and causes stuttering.
        </p>
      `
        },
        {
            title: "Chapter 1: Configuring Exclusions (The Magic Trick)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Avoiding Useless Scanning</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Original games from Steam/Epic are safe. We don't need to scan them constantly.
                    <br/>1. Start > Windows Security > Virus & threat protection.
                    <br/>2. Manage settings > Exclusions > Add or remove exclusions.
                    <br/>3. Add > Folder.
                    <br/>4. Select: <code>C:/Program Files (x86)/Steam/steamapps</code>.
                    <br/>5. Do the same for Epic Games, Battlenet, etc.
                    <br/>Done. Defender will ignore these folders, drastically speeding up loading times.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: MsMpEng.exe (Antimalware Service Executable)",
            content: `
        <p class="mb-4 text-gray-300">
            If this process is using 30% of your CPU:
            <br/>It's usually scanning itself or a stuck Windows update.
            <br/>Add the Defender file itself to the exclusions (Process > MsMpEng.exe) to stop the loop. (Advanced Registry tip, use with care).
        </p>
      `
        },
        {
            title: "Chapter 3: Other Antiviruses (Bloatware)",
            content: `
        <p class="mb-4 text-gray-300">
            Avast, AVG, McAfee: Uninstall them. Use <strong>Revo Uninstaller</strong> to remove everything.
            <br/>They install browser plugins, fake "Game Boosters," and sales pop-ups.
            <br/>Defender is already Enterprise-level in detection.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Malwarebytes (The Companion)",
            content: `
        <p class="mb-4 text-gray-300">
            Keep <strong>Malwarebytes Free</strong> installed.
            <br/>But go to Settings > Security and DISABLE "Start with Windows".
            <br/>Use it only for manual scans once a month or if you download something suspicious (piracy). Don't leave it running with the game (it eats FPS).
        </p>
      `
        },
        {
            title: "Chapter 5: SmartScreen",
            content: `
        <p class="mb-4 text-gray-300">
            "SmartScreen" blocks unknown apps.
            <br/>For gamers using mods or GitHub tools (like CapFrameX, FanControl), this gets in the way.
            <br/>You can disable "App & browser control" if you know what you are downloading.
        </p>
      `
        },
        {
            title: "Chapter 6: Controlled Folder Access (Ransomware Protection)",
            content: `
        <p class="mb-4 text-gray-300">
            This feature prevents programs from writing to your Documents folder.
            <br/>Many games save progress there. If this is enabled, the game may not save (Corrupted Save Error).
            <br/>If you enable it, remember to manually authorize the game executable.
        </p>
      `
        },
        {
            title: "Chapter 7: Core Isolation (VBS/HVCI)",
            content: `
        <p class="mb-4 text-gray-300">
            Device Security > Core Isolation > Memory Integrity.
            <br/>This uses Virtualization to protect the Kernel.
            <br/><strong>It costs 5% to 10% of FPS</strong> in some games.
            <br/>If you only play and don't access corporate banks on the PC, you can disable it for extra performance.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: False Positives (Trainers/Mods)",
            content: `
            <p class="mb-4 text-gray-300">
                If you use Cheat Engine or WeMod in offline games, AV will detect them as HackTools.
                <br/>They are not viruses, but memory injection tools. You need to allow them on the device.
            </p>
            `
        },
        {
            title: "Chapter 9: AdBlock (The Front Line)",
            content: `
            <p class="mb-4 text-gray-300">
                The best antivirus is not clicking the fake green "Download" button.
                <br/>Use uBlock Origin in Chrome/Edge. it blocks malicious scripts before they download.
            </p>
            `
        },
        {
            title: "Chapter 10: USB Viruses",
            content: `
            <p class="mb-4 text-gray-300">
                Disable "AutoRun" (AutoPlay) for USB drives. It's the most common form of offline infection.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is Defender enough?",
            answer: "Yes, for 99% of home users. It constantly wins security awards (AV-Test) and is integrated into the Kernel."
        },
        {
            question: "Do I need to pay for antivirus?",
            answer: "No. The paid antivirus industry thrives on fear. Invest in a VPN or Password Manager (Bitwarden), not in AV."
        }
    ];

    const externalReferences = [
        { name: "AV-Test Results", url: "https://www.av-test.org/en/antivirus/home-windows/" },
        { name: "Malwarebytes Free", url: "https://www.malwarebytes.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Windows",
            description: "General optimizations."
        },
        {
            href: "/guides/cheat-engine-speedhack-jogos-offline",
            title: "Cheat Engine",
            description: "Dealing with detections."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}
