import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'valorant-fix-van-9003-secure-boot',
  title: "Valorant VAN 9003: How to Enable Secure Boot and TPM (2026)",
  description: "Is your Valorant not opening because of the VAN 9003 error? Learn how to enable Secure Boot and TPM 2.0 in the BIOS to play on Windows 11 in 2026.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '25 min'
};

const title = "Valorant VAN 9003: How to Enable Secure Boot and TPM (2026)";
const description = "Is your Valorant not opening because of the VAN 9003 error? Learn how to enable Secure Boot and TPM 2.0 in the BIOS to play on Windows 11 in 2026.";
const keywords = [
    'valorant error van 9003 how to fix 2026',
    'enable secure boot valorant windows 11 tutorial',
    'vanguard van 9003 secure boot fix guide 2026',
    'how to enter bios to enable secure boot tutorial',
    'error van 9003 valorant windows 11 tpm 2.0 guide'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('valorant-fix-van-9003-secure-boot', title, description, keywords, locale);
}

export default function ValorantSecureBootGuide() {
    const summaryTable = [
        { label: "Error", value: "VAN 9003 (Vanguard requirement on Win 11)" },
        { label: "Requirement #1", value: "Secure Boot: Enabled" },
        { label: "Requirement #2", value: "TPM 2.0 / PTT / fTPM: Enabled" },
        { label: "BIOS Mode", value: "UEFI (CSM must be disabled)" }
    ];

    const contentSections = [
        {
            title: "Why does the VAN 9003 Error happen?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, Riot's anti-cheat system, **Vanguard**, requires Windows 11 to be running with all its security layers active to prevent hardware-level cheats. If your BIOS is configured in legacy mode or if **Secure Boot** is off, Valorant simply refuses to start. Resolving this requires a visit to your computer's BIOS, but it's a permanent fix.
        </p>
      `
        },
        {
            title: "1. Checking the current state in Windows",
            content: `
        <p class="mb-4 text-gray-300">Before touching the BIOS, see what's missing:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Press Win+R and type <code>msinfo32</code>.</li>
            <li>Look for 'Secure Boot State'. If it shows 'Off', you need to enable Secure Boot.</li>
            <li>Look for 'BIOS Mode'. If it shows 'Legacy', you will need to convert your disk to GPT before enabling Secure Boot.</li>
        </ol>
      `
        },
        {
            title: "2. Enabling Secure Boot in the BIOS",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Inside the BIOS (General Steps):</h4>
            <p class="text-sm text-gray-300">
                1. Restart the PC and repeatedly press the <strong>DEL or F2</strong> key. <br/>
                2. Go to the <strong>Boot</strong> or <strong>Security</strong> tab. <br/>
                3. Disable <strong>CSM Support</strong> (This is required to enable Secure Boot). <br/>
                4. Change 'Secure Boot' to <strong>Enabled</strong>. If it says 'Not Active', change the mode from 'Standard' to 'Custom' and then back to 'Standard' (This resets the security keys). <br/>
                5. Save and Restart (F10).
            </p>
        </div>
      `
        },
        {
            title: "3. TPM 2.0 (fTPM / PTT)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Don't forget the TPM:</strong> In addition to Secure Boot, TPM must be active. 
            <br/><br/>In 2026, modern processors have TPM built in. Look in the BIOS for <strong>fTPM (AMD)</strong> or <strong>Intel Platform Trust Technology (PTT)</strong> and make sure it is enabled. Without this, even with Secure Boot on, Vanguard may present the VAN 9001 or 9003 error.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/valorant-van-9003-secure-boot-tpm-fix",
            title: "TPM 2.0 Detailed",
            description: "More details about enabling security settings."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Windows 11 Setup",
            description: "Make sure your system is optimized."
        },
        {
            href: "/guides/como-resolver-tela-azul",
            title: "Boot Error",
            description: "What to do if the PC won't start after enabling Secure Boot."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}



