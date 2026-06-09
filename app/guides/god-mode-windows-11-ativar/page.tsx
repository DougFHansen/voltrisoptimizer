import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'god-mode-windows-11-ativar',
  title: "God Mode in Windows 11: How to Enable the Secret Panel",
  description: "Want access to all Windows settings in a single folder? Learn how to enable the famous 'God Mode' in Windows 11 and 10.",
  category: 'software',
  difficulty: 'Beginner',
  time: '5 min'
};

const title = "God Mode in Windows 11: How to Enable the Secret Panel";
const description = "Want access to all Windows settings in a single folder? Learn how to enable the famous 'God Mode' in Windows 11 and 10.";
const keywords = [
    'how to enable god mode windows 11 tutorial 2026',
    'windows 10 god mode how it works',
    'secret shortcut windows 11 settings',
    'hidden control panel windows 2026',
    'secret windows 11 tips and tricks'
];

export const metadata: Metadata = createGuideMetadata('god-mode-windows-11-ativar', title, description, keywords);

export default function GodModeGuide() {
    const summaryTable = [
        { label: "What is it", value: "Access to 200+ settings in one folder" },
        { label: "Folder Name", value: "GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}" },
        { label: "Safety", value: "Fully Safe (Native Feature)" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "What is God Mode?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **God Mode** isn't a hack, but rather a \"master shortcut\" that Microsoft created for developers. It gathers more than 200 settings into a single folder that are normally scattered between the new Settings menu and the old Control Panel, making life much easier for those who love customizing their system.
        </p>
      `
        },
        {
            title: "Step-by-Step: How to Enable It",
            content: `
        <p class="mb-4 text-gray-300">It's very simple and requires no installations:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to your Desktop.</li>
            <li>Right-click on an empty space > <strong>New > Folder</strong>.</li>
            <li>Rename the folder with the following code exactly as it is (copy and paste): <br/>
                <code class="bg-gray-800 p-2 rounded text-blue-400 block mt-2 text-xs">GodMode.{ED7BA470-8E54-465E-825C-99712043E01C}</code>
            </li>
            <li>Press Enter. The folder icon will change to the Control Panel icon.</li>
        </ol>
      `
        },
        {
            title: "What Can You Find Inside?",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Useful Categories:</h4>
            <p class="text-sm text-gray-300">
                Once opened, you'll see everything organized: <br/>
                - Administrative Tools. <br/>
                - Backup and Restore settings. <br/>
                - Advanced Power and Sleep options. <br/>
                - Credential and Password management. <br/>
                - Mouse, Keyboard, and Sound adjustments.
            </p>
        </div>
      `
        },
        {
            title: "Tip: Use Configuration Search",
            content: `
        <p class="mb-4 text-gray-300">
            Since the list is massive, use the search bar in the upper right corner of the God Mode folder. Type something like \"Partition\" or \"Color,\" and it will instantly filter for the exact tool you need, without you having to navigate through 10 different Windows 11 menus.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Windows Shortcuts",
            description: "More ways to navigate the system quickly."
        },
        {
            href: "/guides/debloating-windows-11",
            title: "Debloat Windows",
            description: "Clean up useless apps that God Mode displays."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Post-Installation",
            description: "Set up your PC with the best tools."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="5 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

