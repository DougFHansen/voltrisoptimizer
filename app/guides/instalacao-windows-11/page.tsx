import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'instalacao-windows-11',
  title: "How to Install Windows 11 from Scratch: Complete Formatting Tutorial (2026)",
  description: "Learn how to create a Bootable USB with Rufus, bypass TPM 2.0 requirements (if needed), and perform a clean, optimized installation of Windows 11.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '60 min'
};

const title = "Clean Windows 11 Installation: Step-by-Step Guide with Initial Optimization (2026)";
const description = "Formatting is the best way to regain performance. Detailed guide from backup, creating installation media to initial setup without a Microsoft account.";

const keywords = [
  'how to format pc windows 11 usb drive',
  'install windows 11 unsupported pc rufus',
  'create bootable usb windows 11 media creation tool',
  'install windows 11 without microsoft account',
  'format ssd nvme gpt uefi',
  'windows 11 iso official download',
  'drivers after formatting which to download',
  'backup files before formatting'
];

export const metadata: Metadata = createGuideMetadata('instalacao-windows-11', title, description, keywords);

export default function InstallWindowsGuide() {
  const summaryTable = [
    { label: "Tool", value: "Rufus or Media Creation Tool" },
    { label: "USB Drive", value: "Minimum 8GB" },
    { label: "BIOS Mode", value: "UEFI (Do not use Legacy)" },
    { label: "Partition", value: "GPT (Required for Win11)" },
    { label: "Internet", value: "Disconnect during installation" },
    { label: "TPM", value: "Rufus can remove requirement" }
  ];

  const contentSections = [
    {
      title: "Why Perform a Clean Installation?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Upgrading from Windows 10 to 11 via Windows Update usually brings "junk" from the old system: obsolete drivers, broken registry entries, and temporary files. A <strong>Clean Installation</strong> wipes everything and installs the system fresh, ensuring maximum speed and stability.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">📦</span> Automatic Post-Installation
            </h4>
            <p class="text-gray-300 mb-4">
                The nightmare of formatting is reinstalling drivers and configuring everything again. <strong>Voltris Optimizer</strong> acts like a supercharged "Ninite": it installs your Visual C++, DirectX, browsers, and optimizes the newly installed Windows in a single click.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Prepare Post-Installation
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "Step 1: Creating the USB Drive (Rufus)",
      content: `
        <p class="mb-4 text-gray-300">
            We recommend Rufus over the official Microsoft tool because it allows for useful customizations.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Download the Windows 11 ISO from the official Microsoft website.</li>
            <li>Download and open Rufus.</li>
            <li>Select your USB Drive under "Device".</li>
            <li>Select the ISO you downloaded.</li>
            <li><strong>Partition Scheme:</strong> GPT.</li>
            <li><strong>Target System:</strong> UEFI (non-CSM).</li>
            <li>Click Start. A window will open asking about "Hacks".
                <ul class="ml-6 mt-2 text-sm text-[#31A8FF] list-none space-y-1">
                    <li>[x] Remove 4GB RAM and Secure Boot requirements (Check if your PC is old).</li>
                    <li>[x] Remove Microsoft Online Account requirement (Essential for privacy).</li>
                    <li>[x] Disable data collection (Privacy questions).</li>
                </ul>
            </li>
            <li>Wait for it to finish.</li>
        </ol>
      `
    },
    {
      title: "Step 2: BIOS and Boot",
      content: `
        <p class="mb-4 text-gray-300">
            With the USB Drive ready, restart the PC.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>When turning it on, keep pressing the BOOT MENU key (Usually F8, F11, F12, or Delete, depending on the motherboard).</li>
            <li>Select the USB Drive (e.g., "UEFI: SanDisk").</li>
            <li>The Windows installer will start.</li>
        </ul>
      `
    },
    {
      title: "Step 3: Partitioning",
      content: `
        <p class="mb-4 text-gray-300">
            On the "Where do you want to install Windows?" screen:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>If you want to erase everything (Clean Install): Delete ALL partitions on Disk 0 until only "Unallocated Space" remains.</li>
            <li>Select the unallocated space and click Next. Windows will create the recovery and system partitions automatically.</li>
            <li><strong>Tip:</strong> If you have more than one HD/SSD, be careful not to erase the wrong disk (Backup/Games). Identify it by size (GB).</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Installing Without a Microsoft Account (OOBE Bypass)",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">The "I don't have internet" Trick</h4>
                <p class="text-gray-300 mb-4">
                    If you didn't use Rufus to remove the online account requirement, Windows 11 forces you to connect to the internet.
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>On the "Let's connect you to a network" screen, press <strong>Shift + F10</strong>.</li>
                    <li>CMD will open. Type: <code>OOBE\\BYPASSNRO</code> and hit Enter.</li>
                    <li>The PC will restart.</li>
                    <li>Now an "I don't have internet" button will appear. Click it and proceed with a Local Account.</li>
                </ol>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "Essential Post-Formatting Drivers",
      content: `
            <div class="space-y-4">
               <div class="bg-gray-800 p-4 rounded-lg">
                    <h5 class="text-blue-400 font-bold mb-2">1. Windows Update</h5>
                    <p class="text-gray-300 text-sm">
                        Run Windows Update until there's nothing left. It installs 90% of drivers (Chipset, Audio, Network).
                    </p>
               </div>
               <div class="bg-gray-800 p-4 rounded-lg">
                    <h5 class="text-green-400 font-bold mb-2">2. Graphics Driver (GPU)</h5>
                    <p class="text-gray-300 text-sm">
                        Download manually from the Nvidia/AMD website. The Windows Update driver is a generic and outdated version.
                    </p>
               </div>
            </div>
            `
    }
  ];

  const faqItems = [
    {
      question: "Will I lose my original Windows license?",
      answer: "No. If your PC already came with Windows 10/11 or you bought and activated it, the license is tied to the motherboard (Digital License). When you format and connect to the internet, Windows will activate itself. Choose 'I don't have a product key' during installation."
    },
    {
      question: "GPT or MBR?",
      answer: "For Windows 11, use <strong>GPT</strong>. The MBR standard is old (Legacy BIOS) and does not support Secure Boot or disks larger than 2TB. Only use MBR if your PC is very old (pre-2012)."
    },
    {
      question: "Does formatting damage the SSD?",
      answer: "No. Modern formatting is simply a data write. SSDs have a lifespan of hundreds of terabytes. Formatting once a year doesn't even tickle its lifespan."
    }
  ];

  const externalReferences = [
    { name: "Microsoft - Download Windows 11 ISO", url: "https://www.microsoft.com/software-download/windows11" },
    { name: "Rufus - Create Bootable USB", url: "https://rufus.ie/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/debloating-windows-11",
      title: "What to do after installing?",
      description: "Learn how to remove the junk that comes with the default installation."
    },
    {
      href: "/guides/otimizacao-ssd-windows-11",
      title: "Optimize SSD",
      description: "Essential settings for your new NVMe."
    },
    {
      href: "/guides/instalacao-limpa-drivers-nvidia-amd",
      title: "Install Drivers Correctly",
      description: "Avoid conflicts by installing GPU drivers the right way."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="60 min"
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

