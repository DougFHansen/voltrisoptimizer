import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hard-reset-celular-formatar',
  title: "How to Hard Reset Your Phone: Samsung, Motorola, and Xiaomi (2026)",
  description: "Forgot your phone password or is it freezing? Learn how to perform a complete Hard Reset via physical buttons (Recovery Mode) safely.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "How to Hard Reset Your Phone: Samsung, Motorola, and Xiaomi (2026)";
const description = "Forgot your phone password or is it freezing? Learn how to perform a complete Hard Reset via physical buttons (Recovery Mode) safely.";
const keywords = [
    'how to hard reset samsung phone tutorial 2026',
    'format motorola via buttons step by step',
    'reset xiaomi recovery mode 2026',
    'does hard reset delete everything from phone yes',
    'how to remove google account after hard reset warning'
];

export const metadata: Metadata = createGuideMetadata('hard-reset-celular-formatar', title, description, keywords);

export default function HardResetGuide() {
    const summaryTable = [
        { label: "What is deleted", value: "Photos, Contacts, Apps and Passwords" },
        { label: "Minimum Battery", value: "60% (Recommended)" },
        { label: "Vital Warning", value: "Remember your Google Account email/password" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "What is a Hard Reset?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          A **Hard Reset** is a forced formatting that clears the phone's operating system through a \"hidden\" menu (Recovery Mode). It is the definitive solution for when the phone won't turn on, is in an infinite loop (blinking logo), or when you've forgotten the screen pattern/password.
        </p>
      `
        },
        {
            title: "1. Preparation (FRP Lock)",
            content: `
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h4 class="text-red-400 font-bold mb-2">Watch out for the Google Account!</h4>
            <p class="text-sm text-gray-300">
                If you format your phone without removing the Google account first (in settings), the system will enter FRP (Factory Reset Protection) lock. After powering on, it will require the email and password that were on it before for security. If you don't know this data, the phone will be unusable. 
                <br/><strong>Recommendation:</strong> If the phone turns on, go to Settings > Accounts > Remove Google/Samsung/Xiaomi accounts before formatting.
            </p>
        </div>
      `
        },
        {
            title: "2. General Step-by-Step (Buttons)",
            content: `
        <p class="mb-4 text-gray-300">The process varies slightly between brands:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Turn off the phone completely.</li>
            <li>Hold <strong>Power Button + Volume Up</strong> (Samsung/Xiaomi) or <strong>Volume Down</strong> (Motorola) for 10 seconds.</li>
            <li>When the robot or a text menu appears, release the buttons.</li>
            <li>Use the volume keys to navigate to <strong>'Wipe Data/Factory Reset'</strong>.</li>
            <li>Press Power to select. Choose 'Yes' or 'Factory Data Reset'.</li>
            <li>After finishing, select <strong>'Reboot System Now'</strong>.</li>
        </ol>
      `
        },
        {
            title: "3. What to do if the Hard Reset fails?",
            content: `
        <p class="mb-4 text-gray-300">
            If the phone remains stuck on the logo even after the reset, the problem might be **Corrupted Firmware**. 
            <br/>In this case, you will need to use specific computer software (Odin for Samsung, MiFlash for Xiaomi, or RSA for Motorola) to reinstall the entire system from scratch via USB cable.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/backup-dados",
            title: "Backup Guide",
            description: "How to save your photos before resetting."
        },
        {
            href: "/guides/autenticacao-dois-fatores",
            title: "Account Security",
            description: "Don't lose access to your 2FA after the reset."
        },
        {
            href: "/guides/calibrar-bateria-notebook",
            title: "Battery Care",
            description: "Keep your phone always charged."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

