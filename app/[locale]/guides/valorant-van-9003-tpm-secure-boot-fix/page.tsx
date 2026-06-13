import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'valorant-van-9003-secure-boot-tpm-fix',
    title: "Valorant Error VAN 9003 / VAN 1067: Definitive Solution (TPM 2.0 and Secure Boot) (2026)",
    description: "Can't open Valorant on Windows 11? Vanguard requires TPM 2.0 and Secure Boot. Learn how to enable them in the BIOS (Gigabyte, Asus, MSI) and convert your disk from MBR to GPT without formatting.",
    category: 'games-fix',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "How to Fix Error VAN 9003 and VAN 1067 in Valorant: BIOS and TPM 2.0 Guide";
const description = "Windows 11 requires maximum security to run Valorant. Discover how to enable Secure Boot, resolve 'BIOS Legacy' errors, and convert MBR to GPT.";

const keywords = [
    'valorant van 9003 fix windows 11',
    'error van 1067 valorant secure boot',
    'how to enable secure boot bios gigabyte asus msi',
    'enable tpm 2.0 for valorant',
    'convert mbr to gpt without formatting mbr2gpt',
    'vanguard requires secure boot enabled',
    'pc health check valorant',
    'bios uefi mode valorant'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('valorant-van-9003-secure-boot-tpm-fix', title, description, keywords, locale);
}

export default function Van9003Guide() {
    const summaryTable = [
        { label: "Error", value: "VAN 9003 / VAN 1067" },
        { label: "Cause", value: "Secure Boot or TPM Disabled" },
        { label: "Requirement", value: "UEFI BIOS Mode (not Legacy)" },
        { label: "Disk", value: "GPT Table (not MBR)" },
        { label: "Risk", value: "Medium (BIOS modification)" },
        { label: "Solution", value: "Enable in BIOS" }
    ];

    const contentSections = [
        {
            title: "Why does this happen?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Vanguard (Riot's Anti-Cheat) on Windows 11 requires the computer to prove it is "trusted" through hardware. To do this, it forces the use of <strong>TPM 2.0</strong> (Trusted Platform Module) and <strong>Secure Boot</strong>. If one of these is turned off, the game won't open.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🔒</span> Voltris Automatic Checker
            </h4>
            <p class="text-gray-300 mb-4">
                Entering the BIOS can be scary. <strong>Voltris Optimizer</strong> has a "Valorant Prep" tool that checks if your TPM is active, if the disk is GPT, and tells you exactly what to change in the BIOS before you restart your PC.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Check Requirements
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Step 1: Check if your disk is GPT or MBR",
            content: `
        <p class="mb-4 text-gray-300">
            Secure Boot ONLY works on GPT disks. If your Windows was installed in legacy mode (MBR), enabling Secure Boot will cause the PC to stop booting.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Right-click the Start Menu > Disk Management.</li>
            <li>Right-click "Disk 0" (where Windows is) > Properties.</li>
            <li>Go to the <strong>Volumes</strong> tab.</li>
            <li>Check "Partition style":
                <ul class="ml-6 mt-2 text-sm text-[#31A8FF] list-none space-y-1">
                    <li>If it's <strong>GUID (GPT)</strong>: Great, skip to Step 3.</li>
                    <li>If it's <strong>MBR</strong>: STOP. You need to convert to GPT.</li>
                </ul>
            </li>
        </ol>
      `
        },
        {
            title: "Step 2: Convert MBR to GPT (Without Formatting)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows 10/11 has a native tool for this.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 font-mono text-sm">
            <li>Hold Shift and click Restart.</li>
            <li>Go to Troubleshoot > Advanced Options > Command Prompt.</li>
            <li>Log in to your account.</li>
            <li>Type: <code>mbr2gpt /validate</code> (Should say "Validation completed successfully").</li>
            <li>Type: <code>mbr2gpt /convert</code>.</li>
            <li>When finished, restart and IMMEDIATELY enter the BIOS.</li>
        </ul>
      `
        },
        {
            title: "Step 3: Configuring the BIOS (Secure Boot + TPM)",
            content: `
        <p class="mb-4 text-gray-300">
            Each brand is different, but the names are similar.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li>Restart the PC while pressing <strong>Del</strong> or <strong>F2</strong> to enter the BIOS.</li>
            <li>Disable <strong>CSM Support</strong> (Compatibility Support Module). Secure Boot only appears if CSM is OFF.</li>
            <li>Look for <strong>Secure Boot</strong>. Change to <strong>Enabled</strong>.
                <ul class="ml-6 mt-1 text-sm text-yellow-500">
                    <li>⚠️ If you get the error "System is in Setup Mode", look for "Key Management" or "Restore Factory Keys" and execute it. The Secure Boot Mode should be "User", not "Setup".</li>
                </ul>
            </li>
            <li>Look for <strong>TPM</strong>:
                <ul class="ml-6 mt-1 text-sm text-gray-400">
                    <li>Intel: It's called <strong>IPTT</strong> or <strong>Intel Platform Trust Technology</strong>.</li>
                    <li>AMD: It's called <strong>fTPM</strong> or <strong>Firmware TPM</strong>.</li>
                </ul>
            </li>
            <li>Enable.</li>
            <li>Save and Exit (F10).</li>
        </ol>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Error: 'This build of Vanguard requires compliance...'",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-red-400 font-bold mb-4 text-xl">VBS and Core Isolation</h4>
                <p class="text-gray-300 mb-4">
                    Sometimes it's not the BIOS, it's Windows. Vanguard needs certain security services to be running.
                </p>
                <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Search Windows for <code>msinfo32</code>.</li>
                    <li>See "Virtualization-based security". It must be "Running".</li>
                    <li>If it's not, search Windows for "Core Isolation" and enable "Memory Integrity". (Warning: This may slightly decrease FPS, but is required by Valorant in some cases).</li>
                </ol>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Windows 10 vs Windows 11 in Valorant",
            content: `
            <p class="mb-4 text-gray-300">
                If nothing works, know that this strict TPM + Secure Boot requirement is exclusive to <strong>Windows 11</strong>. On Windows 10, Valorant runs without TPM and without Secure Boot (in most cases). The "nuclear" solution is to go back to Windows 10.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "My PC doesn't have a TPM chip, now what?",
            answer: "Almost all modern processors (Intel 8th gen+, AMD Ryzen 2000+) have a TPM built into the processor (fTPM/PTT). You don't need to buy a physical chip, just enable it in the BIOS. If your PC is very old (e.g., Intel 4th gen), you cannot play Valorant on Windows 11; you will have to install Windows 10."
        },
        {
            question: "Does enabling Secure Boot break the PC?",
            answer: "No. It's a security feature that prevents boot viruses (Rootkits). It doesn't make the PC slower."
        },
        {
            question: "Did the mbr2gpt command lose my files?",
            answer: "The command is safe and non-destructive, but making a backup is always recommended. If the power fails during conversion, the disk may be corrupted."
        }
    ];

    const externalReferences = [
        { name: "Support Riot - VAN9003", url: "https://support-valorant.riotgames.com/hc/en-us/articles/10088435639571-Troubleshooting-the-VAN9001-or-VAN-9003-Error-on-Windows-11" },
        { name: "Microsoft - MBR2GPT Guide", url: "https://learn.microsoft.com/en-us/windows/deployment/mbr-to-gpt" }
    ];

    const relatedGuides = [
        {
            href: "/guides/atualizar-bios-seguro",
            title: "Update BIOS",
            description: "Required if the Secure Boot option does not appear."
        },
        {
            href: "/guides/instalacao-windows-11",
            title: "Format Windows",
            description: "How to install in UEFI/GPT mode from the start."
        },
        {
            href: "/guides/valorant-reduzir-input-lag",
            title: "Optimize Valorant",
            description: "After opening the game, how to gain FPS."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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

