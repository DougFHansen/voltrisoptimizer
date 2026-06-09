import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'windows-sandbox-testar-virus',
  title: "Windows Sandbox: How to safely test suspicious files (2026)",
  description: "Want to open a file but are afraid of viruses? Learn how to enable and use Windows Sandbox, the isolated area of Windows 11 for testing in 2026.",
  category: 'software',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Windows Sandbox: How to safely test suspicious files (2026)";
const description = "Want to open a file but are afraid of viruses? Learn how to enable and use Windows Sandbox, the isolated area of Windows 11 for testing in 2026.";
const keywords = [
    'windows sandbox how to enable 2026 tutorial',
    'test virus safely windows 11 guide',
    'how to use windows sandbox tutorial step by step 2026',
    'windows sandbox vs virtual machine which is better for testing',
    'enable sandbox windows 11 pro tutorial 2026'
];

export const metadata: Metadata = createGuideMetadata('windows-sandbox-testar-virus', title, description, keywords);

export default function SandboxGuide() {
    const summaryTable = [
        { label: "Requirement #1", value: "Windows 10/11 Pro or Enterprise" },
        { label: "Requirement #2", value: "Virtualization enabled in BIOS" },
        { label: "Advantage", value: "Upon closing, everything is deleted (Zero risk)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "What is Windows Sandbox?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, downloading files from the internet is a minefield. **Windows Sandbox** is like an "isolation room" for your computer. It is a temporary Windows 11 environment where you can download, install, and run any suspicious program without it having access to your real files, photos, or passwords. When you close the Sandbox, everything that happened inside it is permanently deleted, as if it never existed.
        </p>
      `
        },
        {
            title: "1. How to enable Sandbox (Step by Step)",
            content: `
        <p class="mb-4 text-gray-300">The feature comes disabled by default in Windows 11:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for 'Turn Windows features on or off' in the Start menu.</li>
            <li>Scroll down the list until you find <strong>'Windows Sandbox'</strong>.</li>
            <li>Check the box and click OK. Windows will ask to restart the PC.</li>
            <li><strong>Warning:</strong> If the option is grayed out (blocked), you need to enable 'Virtualization' in your BIOS first.</li>
        </ol>
      `
        },
        {
            title: "2. Testing files in practice",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Workflow in 2026:</h4>
            <p class="text-sm text-gray-300">
                1. Search for 'Windows Sandbox' in Start and open as Administrator. <br/>
                2. On your real Windows, right-click the suspicious file and select 'Copy'. <br/>
                3. Inside the Sandbox window, right-click on the desktop and select 'Paste'. <br/>
                4. Run the file freely. You can browse dangerous sites or run dubious installers. If the file is a virus, it will be trapped inside the Sandbox and won't be able to get out to infect your real PC.
            </p>
        </div>
      `
        },
        {
            title: "3. Difference between Sandbox and Virtual Machine",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Why use Sandbox?</strong> 
            <br/><br/>Unlike a regular Virtual Machine (VM) that requires Gigabytes of space and slow installation, the Sandbox is lightweight and disposable. It uses your Windows 11's own kernel to run, being extremely fast. In 2026, it is the favorite tool of security researchers and users seeking total privacy when testing new tools and scripts.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/virtualizacao-vmware",
            title: "Use VMWare",
            description: "For tests that need to be saved."
        },
        {
            href: "/guides/remocao-virus-malware",
            title: "Remove Virus",
            description: "What to do if the virus is out of control."
        },
        {
            href: "/guides/identificacao-phishing",
            title: "Avoid Phishing",
            description: "Learn to identify dangerous files."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

