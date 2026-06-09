import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'formatacao-limpa-windows-11-rufus-gpt',
    title: "Clean Windows 11 Install (2026): Gamer Guide (Rufus/GPT)",
    description: "System feeling sluggish or cluttered? Nothing beats a clean install. Step-by-step guide to creating a bootable USB, partitioning your SSD in GPT, and essential driver setup.",
    category: 'windows',
    difficulty: 'Advanced',
    time: '60 min'
};

const title = "Clean Install of Windows 11 (2026)";
const description = "Upgrading from Windows 10 to 11 via Windows Update often introduces latent bugs. Peak performance is achieved by wiping the drive and starting from scratch—the classic 'Format C:' approach.";

const keywords = [
    'how to format pc windows 11 bootable usb drive guide',
    'rufus gpt vs mbr uefi settings for gaming',
    'bypass tpm 2.0 windows 11 rufus workaround',
    'backing up game saves and files before formatting',
    'essential drivers after fresh windows installation',
    'create local offline account windows 11 bypass microsoft',
    'voltris optimizer clean install optimization',
    'ninite batch install apps 2026'
];

export const metadata: Metadata = createGuideMetadata('formatacao-limpa-windows-11-rufus-gpt', title, description, keywords);

export default function FormatGuide() {
    const summaryTable = [
        { label: "Tool", value: "Rufus + Official ISO" },
        { label: "Partitioning", value: "GPT (UEFI Native)" },
        { label: "File System", value: "NTFS" },
        { label: "Backup Method", value: "External Drive / Cloud" },
        { label: "Connectivity", value: "Disconnected During Setup" },
        { label: "Account Type", value: "Local (Offline/Bypass)" }
    ];

    const contentSections = [
        {
            title: "Introduction: Why a Fresh Start?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Over time, the Windows Registry bloats, legacy driver fragments accumulate, and leftover files from uninstalled programs cause system conflicts. An annual clean install is the most effective \"free upgrade\" you can give your gaming rig.
        </p>
      `
        },
        {
            title: "Chapter 1: Creating the Bootable USB (Rufus)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Step-by-Step Setup</h4>
                <p class="text-gray-400 text-xs text-justify">
                    1. Download the Windows 11 ISO directly from the Microsoft website.
                    <br/>2. Download the latest version of <strong>Rufus</strong>.
                    <br/>3. Plug in a USB Drive of 8GB or larger.
                    <br/>4. Select your ISO in Rufus.
                    <br/>5. Partition Scheme: <strong>GPT</strong> (Modern systems with UEFI). Only use MBR for legacy BIOS systems.
                    <br/>6. Target System: <strong>UEFI (non-CSM)</strong>.
                    <br/>7. Click Start. Rufus will offer customization options: Check \"Remove requirement for TPM 2.0\" and \"Create a local account\" to simplify the OOBE process.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Backup Strategy (Safeguarding Data)",
            content: `
        <p class="mb-4 text-gray-300">
            Ensure you copy the following to an external drive or cloud storage before proceeding:
            <br/>- Documents folder (Check here for game save files!).
            <br/>- Downloads folder.
            <br/>- Desktop files.
            <br/>- Screenshots and Video Clips.
            <br/>Note: Steam games located on a secondary drive (D:) do not need to be re-downloaded; you can simply re-link the library after installation.
        </p>
      `
        },
        {
            title: "Chapter 3: BIOS and Booting",
            content: `
        <p class="mb-4 text-gray-300">
            Restart your PC and tap DEL (or F2) repeatedly to enter the BIOS menu.
            <br/>Navigate to \"Boot Priority\" or \"Boot Menu.\"
            <br/>Set your USB Drive (labeled as UEFI: USB Flash Drive) to the 1st position.
            <br/>Save and Exit (usually F10).
            <br/>The Windows installer environment will now load.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Partitioning (The Critical Step)",
            content: `
        <p class="mb-4 text-gray-300">
            When asked \"Where do you want to install Windows?\":
            <br/>For a 100% clean SSD installation:
            <br/>Delete EVERY partition on Drive 0 (Recovery, System, MSR, Primary) until only one block of \"Unallocated Space\" remains.
            <br/>Select that unallocated space and click Next. Windows will automatically create the required partitions.
            <br/><strong>CAUTION:</strong> Do not delete partitions on secondary drives (e.g., Drive 1) used for backup/storage. Identify your drives by their capacity in GB.
        </p>
      `
        },
        {
            title: "Chapter 5: The Local Account Secret",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Disconnect your ethernet cable</strong> (or don't connect to Wi-Fi) during the initial Setup.
            <br/>When Windows demands an internet connection to continue:
            <br/>1. Press <strong>Shift + F10</strong> to open the Command Prompt.
            <br/>2. Type <code>oobe&#92;bypassnro</code> and hit Enter. The PC will reboot.
            <br/>3. You will now see the \"I don't have internet\" option.
            <br/>4. Choose \"Continue with limited setup\" to create a Local Account (e.g., \"User\"). This avoids forced Microsoft account linkage.
        </p>
      `
        },
        {
            title: "Chapter 6: Driver Installation Order",
            content: `
        <p class="mb-4 text-gray-300">
            Once you reach the desktop, reconnect your internet.
            <br/>1. Run <strong>Windows Update</strong> (Install all updates, reboot as many times as prompted).
            <br/>2. Install your <strong>Chipset Driver</strong> (from AMD or Intel).
            <br/>3. Install your <strong>GPU Driver</strong> (NVIDIA or AMD official sites).
            <br/>Windows handles the majority of peripheral drivers automatically.
        </p>
      `
        },
        {
            title: "Chapter 7: Ninite (Rapid App Deployment)",
            content: `
        <p class="mb-4 text-gray-300">
            Visit <strong>ninite.com</strong>.
            <br/>Select your essentials: Chrome, Discord, Steam, VLC, 7-Zip, qBittorrent.
            <br/>Download the single custom installer. It installs everything automatically in the background without toolbars, bloatware, or clicking \"Next.\"
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Post-Install Debloating",
            content: `
            <p class="mb-4 text-gray-300">
                Even a clean Windows install may include pre-pinned apps like TikTok or Spotify in the Start menu.
                <br/>Right-click and select \"Uninstall\" for anything irrelevant.
                <br/>Follow our dedicated \"Windows Debloat\" guide to strip away remaining OS telemetry and services.
            </p>
            `
        },
        {
            title: "Chapter 9: Restoration Checklist",
            content: `
            <p class="mb-4 text-gray-300">
                Don't forget to re-enable <strong>XMP/EXPO</strong> in the BIOS, set your monitor to its highest <strong>Refresh Rate (Hz)</strong>, and re-tune your mouse settings (Always disable \"Enhance pointer precision\").
            </p>
            `
        },
        {
            title: "Chapter 10: Digital Activation",
            content: `
            <p class="mb-4 text-gray-300">
                If your PC had Windows before, the license is digitally tied to your motherboard hardware ID. The system will typically activate itself automatically as soon as it goes online.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Should I use GPT or MBR?",
            answer: "Always use GPT for modern systems (it's required for UEFI, fast boot, and Secure Boot). MBR is for legacy systems (pre-2015 BIOS)."
        },
        {
            question: "Does formatting void my warranty?",
            answer: "No. Software changes do not nullify hardware warranties. Reinstalling the OS is a standard troubleshooting step."
        }
    ];

    const externalReferences = [
        { name: "Rufus Official Site", url: "https://rufus.ie/" },
        { name: "Official Windows 11 ISO Download", url: "https://www.microsoft.com/software-download/windows11" },
        { name: "Ninite App Batcher", url: "https://ninite.com/" }
    ];

    const relatedGuides = [
        {
            href: "/guias/ddu-limpeza-drivers-video-guia",
            title: "DDU Guide",
            description: "Ensuring perfectly clean GPU drivers."
        },
        {
            href: "/guias/debloat-windows-11-otimizacao",
            title: "Debloat Tools",
            description: "Stripping Windows to its gaming core."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="60 min"
            difficultyLevel="Advanced"
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
