import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'bios-otimizacao-xmp-tpm',
    title: "The Ultimate BIOS (UEFI) Guide 2026: XMP, PBO, and Re-Size BAR",
    description: "Your Gamer PC is running with the handbrake on. Learn how to enter the BIOS and enable RAM XMP, GPU Re-Size BAR, and configure TPM 2.0 for Valorant.",
    category: 'hardware',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "The Ultimate BIOS (UEFI) Guide 2026: Unlock Hidden Performance";
const description = "Many users buy 3200MHz RAM, but it runs at 2133MHz because they forgot to configure the BIOS. This guide teaches you step-by-step how to optimize your ASUS, Gigabyte, MSI, or ASRock motherboard.";

const keywords = [
    'how to enable xmp bios asus gigabyte msi 2026',
    'what is resize bar nvidia amd enable',
    'precision boost overdrive pbo ryzen tutorial',
    'how to enter windows 11 uefi bios',
    'tpm 2.0 secure boot valorant error van9003',
    'virtualization svm vt-x android emulator',
    'quiet bios fan curve'
];

export const metadata: Metadata = createGuideMetadata('bios-otimizacao-xmp-tpm', title, description, keywords);

export default function BiosGuide() {
    const summaryTable = [
        { label: "RAM Speed", value: "XMP / DOCP / EXPO (Enable)" },
        { label: "GPU Boost", value: "Re-Size BAR (Enable)" },
        { label: "CPU Boost", value: "PBO (AMD) / Turbo (Intel)" },
        { label: "Security", value: "Secure Boot + TPM 2.0" },
        { label: "Emulation", value: "SVM / VT-x (Enable)" },
        { label: "Fast Boot", value: "Disable if experiencing bugs" }
    ];

    const contentSections = [
        {
            title: "Step 0: Entering the BIOS (The Portal)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The BIOS (now called UEFI) is your motherboard's operating system.
        </p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-blue-400 font-bold mb-2">How to Access</h4>
          <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Classic Method:</strong> Restart your PC and frantically press the <code>DEL</code> or <code>F2</code> key as soon as the screen turns on.</li>
            <li><strong>Modern Method (If your SSD is too fast):</strong> In Windows, hold the <code>SHIFT</code> key and click Restart.
                <br/>Go to Troubleshoot > Advanced Options > <strong>UEFI Firmware Settings</strong> > Restart.</li>
          </ol>
        </div>
      `
        },
        {
            title: "1. XMP / DOCP / EXPO (RAM Memory)",
            content: `
        <p class="mb-4 text-gray-300">
          This is MANDATORY setting #1.
          <br/>Your RAM comes from the factory running at the slow JEDEC standard (e.g., 2133MHz or 4800MHz DDR5). XMP is the factory-tested safe overclock profile.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li><strong>Intel:</strong> Look for "XMP" (Extreme Memory Profile).</li>
            <li><strong>AMD (ASUS):</strong> Called "DOCP".</li>
            <li><strong>AMD (Others / DDR5):</strong> Called "EXPO".</li>
            <li><strong>Action:</strong> Change from "Disabled" to "Profile 1". Save and restart.</li>
            <li><strong>Benefit:</strong> Up to 20% more FPS in CPU-bound games (Warzone, Valorant).</li>
        </ul>
      `
        },
        {
            title: "2. Re-Size BAR / SAM (Smart Access Memory)",
            content: `
        <p class="mb-4 text-gray-300">
            2020+ technology that allows the processor to access all the video card's VRAM at once, instead of small 256MB chunks.
        </p>
        <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h4 class="text-green-400 font-bold mb-2">How to Enable</h4>
            <p class="text-sm text-gray-300">
                Usually found in the "Advanced" or "PCI Subsystem Settings" tab.
                <br/>1. Enable "Above 4G Decoding".
                <br/>2. Enable "Re-Size BAR Support" for <strong>Auto</strong> or <strong>Enabled</strong>.
                <br/>3. Requirement: RTX 3000+ or Radeon RX 6000+ GPU.
            </p>
        </div>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "3. Virtualization (SVM / VT-x)",
            content: `
        <h4 class="text-white font-bold mb-3">For Emulators and Docker</h4>
        <p class="mb-4 text-gray-300">
            If you play Free Fire on Bluestacks/LDPlayer, or program using Docker/WSL2, you NEED this.
            <br/>Without hardware virtualization, emulators run at 10 FPS with stuttering.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>AMD:</strong> Look for "SVM Mode" (Secure Virtual Machine). Found in CPU Configuration.</li>
            <li><strong>Intel:</strong> Look for "Intel Virtualization Technology" or "VT-x/VT-d".</li>
        </ul>
      `
        },
        {
            title: "4. TPM 2.0 and Secure Boot (Valorant)",
            content: `
        <p class="mb-4 text-gray-300">
            Valorant's Vanguard anti-cheat (and Windows 11) require these security technologies.
        </p>
        <div class="space-y-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-red-500/30">
                <h5 class="font-bold text-white mb-2">Secure Boot</h5>
                <p class="text-sm text-gray-300">
                    Must be in "Windows UEFI Mode". If it's "Other OS", change it.
                    <br/>Note: If you change this and Windows doesn't boot, it's because your Windows was installed in Legacy (old) mode. You will need to convert the disk from MBR to GPT.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-yellow-500/30">
                <h5 class="font-bold text-white mb-2">fTPM / PTT</h5>
                <p class="text-sm text-gray-300">
                    Firmware TPM.
                    <br/>AMD: "AMD fTPM switch".
                    <br/>Intel: "Intel PTT" (Platform Trust Technology).
                </p>
            </div>
        </div>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Fan Curve (Silence or Performance)",
            content: `
        <h4 class="text-white font-bold mb-3">Q-Fan / Smart Fan</h4>
        <p class="mb-4 text-gray-300">
            All modern BIOS have a graphical fan tool.
            <br/>Configure your case fans to be off or at 20% until the CPU hits 50°C. This makes the PC silent while browsing.
            <br/>Set them to ramp up quickly to 100% when it hits 75°C.
        </p>
      `
        }
    ];

    const faqItems = [
        {
            question: "Does updating the BIOS improve performance?",
            answer: "Usually it doesn't improve FPS directly, but it improves RAM stability (allowing higher XMP) and compatibility with new CPUs."
        },
        {
            question: "I reset the BIOS and Windows disappeared!",
            answer: "You probably reset the boot mode. Look for CSM (Compatibility Support Module). If Windows was installed in Legacy, enable CSM. If it was UEFI, disable CSM."
        },
        {
            question: "What is 'Fast Boot'?",
            answer: "Fast Boot skips USB and hardware checks at startup to turn on faster. However, it can prevent you from entering the BIOS (the keyboard doesn't power on in time) and cause bugs with USB peripherals. We recommend leaving it off on High-End Gamer PCs (SSDs are already fast enough)."
        }
    ];

    const externalReferences = [
        { name: "CPU-Z (Verify XMP)", url: "https://www.cpuid.com/softwares/cpu-z.html" },
        { name: "HWMonitor (Verify Temps)", url: "https://www.cpuid.com/softwares/hwmonitor.html" },
        { name: "ASUS BIOS Guide", url: "https://www.asus.com/support/FAQ/1013015/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizar-bios-seguro",
            title: "How to Update BIOS",
            description: "Safe step-by-step for updating."
        },
        {
            href: "/guides/como-escolher-memoria-ram",
            title: "RAM Memory",
            description: "Understand latency and frequency."
        },
        {
            href: "/guides/valorant-van-9003-secure-boot-tpm-fix",
            title: "VAN 9003 Error",
            description: "Solving the TPM error in Valorant."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            faqItems={faqItems}
            externalReferences={externalReferences}
            relatedGuides={relatedGuides}
        />
    );
}


