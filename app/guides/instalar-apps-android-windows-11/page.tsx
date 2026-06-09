import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'instalar-apps-android-windows-11',
  title: "How to run Android Apps on Windows 11 (Without Emulator)",
  description: "Want to use Instagram, TikTok or mobile games directly on Windows 11? Learn how to set up the Windows Subsystem for Android (WSA) and the Amazon Appstore.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '25 min'
};

const title = "How to run Android Apps on Windows 11 (Without Emulator)";
const description = "Want to use Instagram, TikTok or mobile games directly on Windows 11? Learn how to set up the Windows Subsystem for Android (WSA) and the Amazon Appstore.";
const keywords = [
    'how to install android apps on windows 11 tutorial 2026',
    'install apk on windows 11 android subsystem',
    'windows subsystem for android wsa how to enable',
    'run mobile games on pc without bluestacks',
    'amazon appstore windows 11 download'
];

export const metadata: Metadata = createGuideMetadata('instalar-apps-android-windows-11', title, description, keywords);

export default function AndroidOnWindowsGuide() {
    const summaryTable = [
        { label: "Feature", value: "WSA (Windows Subsystem for Android)" },
        { label: "RAM Requirement", value: "8GB (Recommended 16GB)" },
        { label: "Virtualization", value: "Must be ACTIVE in BIOS" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "What is WSA?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike emulators like BlueStacks that create a "computer within a computer", **WSA** integrates Android directly into the core of Windows 11. This means mobile apps appear in your Start Menu, can be pinned to the taskbar, and work with native Windows notifications, in a much lighter and faster way.
        </p>
      `
        },
        {
            title: "1. Requirements and Activation",
            content: `
        <p class="mb-4 text-gray-300">Before starting, your PC needs to be ready:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Virtualization must be enabled in the BIOS (SVM for AMD or VT-x for Intel).</li>
            <li>Go to 'Turn Windows features on or off' and check <strong>'Virtual Machine Platform'</strong>.</li>
            <li>Restart the computer.</li>
            <li>Open the Microsoft Store and search for <strong>'Amazon Appstore'</strong>. When you install this app, the Android Subsystem will be installed automatically.</li>
        </ol>
      `
        },
        {
            title: "2. Installing any APK (Sideload)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Advanced Tip:</h4>
            <p class="text-sm text-gray-300">
                The Amazon Appstore has few apps. To install any application (like WhatsApp or a specific game), use third-party tools like <strong>'WSA Pacman'</strong> or <strong>'WSATools'</strong> available in the Microsoft Store. They allow you to simply double-click on an .APK file and it will be installed on Windows just like a regular program.
            </p>
        </div>
      `
        },
        {
            title: "3. Memory Management",
            content: `
        <p class="mb-4 text-gray-300">
            Android on Windows consumes a lot of RAM. 
            <br/>Open 'Windows Subsystem for Android Settings' and, under <strong>System Resources</strong>, change to 'As Needed'. This makes Windows close Android mode when you are not using any mobile apps, freeing memory for your PC games.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/windows-sandbox-testar-virus",
            title: "Windows Sandbox",
            description: "Another way to run apps in isolation."
        },
        {
            href: "/guides/bluestacks-vs-ldplayer-qual-mais-leve",
            title: "Classic Emulators",
            description: "If WSA doesn't work on your PC."
        },
        {
            href: "/guides/atualizar-bios-seguro",
            title: "Enable Virtualization",
            description: "Guide to entering the BIOS."
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

