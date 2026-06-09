import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'vcruntime140-dll-nao-encontrado',
  title: "VCRUNTIME140.dll not found: How to solve (2026)",
  description: "Is your game or program not opening and says VCRUNTIME140.dll or MSVCP140.dll is missing? Learn how to install the official redistributables in 2026.",
  category: 'windows-errors',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "VCRUNTIME140.dll not found: How to solve (2026)";
const description = "Is your game or program not opening and says VCRUNTIME140.dll or MSVCP140.dll is missing? Learn how to install the official redistributables in 2026.";
const keywords = [
    'vcruntime140.dll not found how to solve 2026',
    'missing msvcp140.dll windows 11 tutorial guide',
    'download microsoft visual c++ redistributable 2026 tutorial',
    'how to install missing dll on windows 11 guide 2026',
    'system error dll not found tutorial step by step'
];

export const metadata: Metadata = createGuideMetadata('vcruntime140-dll-nao-encontrado', title, description, keywords);

export default function VCRuntimeFixGuide() {
    const summaryTable = [
        { label: "Cause", value: "Missing Microsoft Visual C++ Redistributable" },
        { label: "Correct Solution", value: "Official Microsoft Installer" },
        { label: "Risk", value: "Never download loose .dll files from unknown sites" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why do DLLs disappear?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **VCRUNTIME140.dll** or **MSVCP140.dll** error happens when a program tries to use Microsoft code libraries that are not installed on your computer. In 2026, many games and editing software require these libraries to convert complex commands into actions on the screen. If the program installer failed to configure these components, Windows simply won't know how to run the application.
        </p>
      `
        },
        {
            title: "1. The Danger of DLL Sites",
            content: `
        <p class="mb-4 text-gray-300"><strong>WARNING:</strong> Many users make the mistake of searching for the DLL on Google and downloading a loose file to paste into the <code>System32</code> folder.</p>
        <p class="text-sm text-gray-300">
            Doing this in 2026 is extremely dangerous for two reasons: <br/>
            1. <strong>Viruses:</strong> These .dll files often carry Trojans. <br/>
            2. <strong>Incompatibility:</strong> A loose DLL may have a different version than the one the program needs, causing even more serious "Entry point not found" errors.
        </p>
      `
        },
        {
            title: "2. The Definitive Solution (Visual C++ AIO)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Install everything at once:</h4>
            <p class="text-sm text-gray-300">
                The smartest way to solve this in 2026 is to download the <strong>Visual C++ Redistributable All-in-One</strong>. <br/><br/>
                It is a single installer that places all versions (2005 to 2026) in both x86 and x64 formats on your Windows. This ensures that not only today's game works, but that no future program will show a DLL error. Just run the <code>install_all.bat</code> file as Administrator and wait for completion.
            </p>
        </div>
      `
        },
        {
            title: "3. Fixing with the SFC command",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>What if I already have it installed?</strong> 
            <br/><br/>If you've already installed the redistributables and the error persists, your DLL may be corrupted. Use the <code>sfc /scannow</code> command in the Command Prompt (Admin). Windows 11 will scan system folders and automatically restore any vital DLLs that have been modified or deleted by mistake.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/corrigir-dll-faltando-vcredist-directx",
            title: "General DLL Guide",
            description: "Solve DirectX and .NET errors."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Post-Installation",
            description: "Essential program pack for Windows."
        },
        {
            href: "/guides/remocao-virus-malware",
            title: "Virus Cleanup",
            description: "Tips if you've downloaded DLLs from suspicious sites."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}



