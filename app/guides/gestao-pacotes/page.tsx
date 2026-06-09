import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'gestao-pacotes',
  title: "Package Management in Windows: How to Use Winget (Step-by-Step)",
  description: "Tired of visiting 10 different sites to download software? Learn how to use Winget, Microsoft's official package manager, to install and update everything via the terminal.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Package Management in Windows: How to Use Winget (Step-by-Step)";
const description = "Tired of visiting 10 different sites to download software? Learn how to use Winget, Microsoft's official package manager, to install and update everything via the terminal.";
const keywords = [
  'how to use winget windows 11 tutorial 2026',
  'install programs via windows terminal winget',
  'update all apps at once winget upgrade',
  'windows package manager how it works',
  'winget vs chocolatey 2026 comparison'
];

export const metadata: Metadata = createGuideMetadata('gestao-pacotes', title, description, keywords);

export default function PackageManagementGuide() {
  const summaryTable = [
    { label: "Tool", value: "Winget (Native to Windows)" },
    { label: "Install Command", value: "winget install [name]" },
    { label: "Update All", value: "winget upgrade --all" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "What is a Package Manager?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Instead of opening Chrome, searching for \"NVIDIA drivers,\" entering the site, downloading the .exe, and clicking \"Next\" 10 times, you can simply type a single command. **Winget** is essentially the Microsoft Store in command-line form. It is safe, fast, and automates the installation of over 4,000 popular programs.
        </p>
      `
    },
    {
      title: "1. Basic Winget Commands",
      content: `
        <p class="mb-4 text-gray-300">Open PowerShell or CMD and try these commands:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><code>winget search [name]</code>: Searches if a program is available (e.g., <code>winget search discord</code>).</li>
            <li><code>winget install [name]</code>: Downloads and installs the program silently.</li>
            <li><code>winget list</code>: Shows all programs currently installed on your PC.</li>
            <li><code>winget uninstall [name]</code>: Removes a program cleanly.</li>
        </ul>
      `
    },
    {
      title: "2. The Magic Command: Update All",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Perfect Routine:</h4>
            <p class="text-sm text-gray-300">
                Once a week, open your terminal and type: <br/>
                <code>winget upgrade --all</code> <br/><br/>
                Windows will check all your programs (Chrome, Spotify, Steam, Drivers) and update them all automatically to the safest version, without you having to open them one by one.
            </p>
        </div>
      `
    },
    {
      title: "3. Winget.run: The Web Interface",
      content: `
        <p class="mb-4 text-gray-300">
            If you don't like memorizing names, visit <strong>winget.run</strong>. There, you can select all the programs you want (just like filling a shopping cart) and the site will generate a single command for you to paste into your terminal. This is the fastest way to set up a freshly formatted PC.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/pos-instalacao-windows-11",
      title: "Post-Installation",
      description: "Use winget to set up your new environment."
    },
    {
      href: "/guides/remover-bloatware-windows-powershell",
      title: "Remove Bloatware",
      description: "Winget can also help clean up your system."
    },
    {
      href: "/guides/automacao-tarefas",
      title: "Automations",
      description: "Schedule app updates via winget."
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
