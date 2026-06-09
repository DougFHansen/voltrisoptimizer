import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'remover-bloatware-windows-powershell',
    title: "Remove Windows 11 Bloatware with PowerShell (2026)",
    description: "Tired of useless apps in Windows? Learn how to use PowerShell scripts to remove bloatware and make your system much lighter and faster in 2026.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Remove Windows 11 Bloatware with PowerShell (2026)";
const description = "Tired of useless apps in Windows? Learn how to use PowerShell scripts to remove bloatware and make your system much lighter and faster in 2026.";
const keywords = [
    'remove windows 11 bloatware powershell script 2026',
    'script to clean windows 11 useless apps tutorial guide',
    'win11debloat powershell full guide 2026',
    'remove cortana and edge windows 11 powershell command',
    'optimize windows 11 for games by removing junk 2026'
];

export const metadata: Metadata = createGuideMetadata('remover-bloatware-windows-powershell', title, description, keywords);

export default function BloatwareRemovalGuide() {
    const summaryTable = [
        { label: "Tool", value: "PowerShell (Admin)" },
        { label: "What it removes", value: "Native Apps, Telemetry, Widgets" },
        { label: "Risk", value: "Moderate (Create a Restore Point)" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "What is Bloatware and Why Remove It?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows 11 in 2026 comes "stuffed" with applications that 99% of users never open: Card games, news tools, Microsoft chat tools, and constant telemetry. This digital "junk" (Bloatware) consumes RAM and CPU cycles in the background. Using PowerShell allows you to remove these items deeply, something that the standard Control Panel does not allow.
        </p>
      `
        },
        {
            title: "1. Preparation: Restore Point",
            content: `
        <div class="bg-yellow-900/10 p-5 rounded-xl border border-yellow-500/30 mb-6">
            <p class="text-yellow-400 font-bold mb-2">Safety first!</p>
            <p class="text-sm text-gray-300">
                Since we will be modifying system files, it is **mandatory** to create a restore point. Search for 'Create a restore point' in Windows and click 'Create'. If something stops working (like the Microsoft Store), you can easily go back in time.
            </p>
        </div>
      `
        },
        {
            title: "2. The Recommended Script in 2026",
            content: `
        <p class="mb-4 text-gray-300">The safest and most up-to-date method is <strong>Win11Debloat</strong> or Chris Titus's script:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Right-click the Start button and choose <strong>Terminal (Admin)</strong> or PowerShell.</li>
            <li>Paste the following command (C. Titus's Script): <code>irm christitus.com/win | iex</code></li>
            <li>A graphical interface will open. Go to the <strong>Tweaks</strong> tab.</li>
            <li>Select 'Desktop' to apply the recommended optimizations.</li>
            <li>Click 'Run Tweaks' and watch PowerShell remove hundreds of useless processes.</li>
        </ol>
      `
        },
        {
            title: "3. What Happens After Debloat?",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Immediate results:</strong> 
            <br/><br/>After restarting, you will notice that idle RAM usage will drop from 4GB-5GB to something close to 2GB-2.5GB. The Start menu will become instantaneous and you will no longer see news or intrusive ads. In games, this translates to fewer lag spikes (stuttering) caused by background services trying to update while you play.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/criar-ponto-restauracao-windows",
            title: "Restore Point",
            description: "Learn how to create a system safeguard."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Extreme Performance",
            description: "Next steps after removing bloatware."
        },
        {
            href: "/guides/privacidade-windows-telemetria",
            title: "Telemetry Guide",
            description: "Understand what the script is disabling."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            showVoltrisOptimizerCTA={true}
        />
    );
}

