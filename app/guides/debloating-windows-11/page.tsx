import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'debloating-windows-11',
    title: "Debloating Windows 11: Remove Junk and Gain Performance (2026)",
    description: "Windows 11 comes full of bloatware (TikTok, OneDrive, Xbox) that consumes RAM. Learn how to use PowerShell to clean your system and make it as light as Windows 7.",
    category: 'windows-general',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "The Ultimate Windows 11 Debloat Guide: Safe Scripts and Manual Methods (2026)";
const description = "Did your new PC already come slow? It's the fault of the 50 pre-installed Microsoft apps. Discover how to remove Telemetry, Cortana, and useless apps without breaking the system.";

const keywords = [
    'debloat windows 11 powershell script 2026',
    'how to remove onedrive permanently',
    'uninstall native windows 11 apps',
    'optimize windows 11 for games debloater',
    'remove cortana and edge via cmd',
    'chris titus tech winutil guide',
    'windows 11 lite how to do it',
    'reduce background processes windows'
];

export const metadata: Metadata = createGuideMetadata('debloating-windows-11', title, description, keywords);

export default function DebloatGuide() {
    const summaryTable = [
        { label: "Tool", value: "PowerShell (Admin)" },
        { label: "Risk", value: "Medium (Create a Restore Point)" },
        { label: "Gain", value: "-1.5GB of RAM used" },
        { label: "Target", value: "UWP Apps (Store) and Telemetry" },
        { label: "Reversible", value: "Yes (Reinstall via Store)" },
        { label: "Security", value: "Open Source Scripts" }
    ];

    const contentSections = [
        {
            title: "What is Bloatware and why remove it?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          "Bloatware" (Swollen Software) are apps that come pre-installed in Windows 11 that you never asked for and probably will never use. Examples: Disney+, Clipchamp, News, Weather, OneDrive, and the Cortana assistant.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          They don't just take up disk space; they run background processes to fetch notifications and updates, consuming CPU and RAM that should go toward your games or work.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🚀</span> Safe 1-Click Debloat
            </h4>
            <p class="text-gray-300 mb-4">
                Messing with PowerShell can be scary. <strong>Voltris Optimizer</strong> has a "Smart Debloat" module that identifies what is safe to remove and what is vital for the system, cleaning your PC without breaking the Store or Windows Update.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe" className="px-8 py-3 bg-[#31A8FF] text-white font-bold rounded-xl hover:bg-[#2b93df] transition-all shadow-[0_0_30px_rgba(49,168,255,0.4)] flex items-center justify-center gap-2">
                    Download Voltris Optimizer (x64)
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-y-[2px] transition-transform duration-300">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </a>
                <a href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe" className="px-8 py-3 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center text-xs">
                    x86 Version
                </a>
            </div>
        </div>
      `
        },
        {
            title: "Method 1: PowerShell (Manual and Safe)",
            content: `
        <p class="mb-4 text-gray-300">
            We will use the <code>Remove-AppxPackage</code> command to uninstall apps that don't have an "Uninstall" button in settings.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm">
            <li>Right-click the Start Button > Terminal (Admin) or PowerShell (Admin).</li>
            <li>To remove <strong>Xbox Game Bar</strong> (if you don't use it):<br/>
                <code class="text-[#31A8FF]">Get-AppxPackage Microsoft.XboxGamingOverlay | Remove-AppxPackage</code>
            </li>
            <li>To remove <strong>Cortana</strong>:<br/>
                <code class="text-[#31A8FF]">Get-AppxPackage -allusers Microsoft.549981C3F5F10 | Remove-AppxPackage</code>
            </li>
            <li>To remove <strong>Phone Link</strong>:<br/>
                <code class="text-[#31A8FF]">Get-AppxPackage Microsoft.YourPhone | Remove-AppxPackage</code>
            </li>
             <li>To remove <strong>Maps</strong>:<br/>
                <code class="text-[#31A8FF]">Get-AppxPackage *windowsmaps* | Remove-AppxPackage</code>
            </li>
        </ol>
      `
        },
        {
            title: "Method 2: Automated Scripts (WinUtil)",
            content: `
        <p class="mb-4 text-gray-300">
            The community has created amazing tools. Chris Titus Tech's (CTT) script is the gold standard in 2026.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Open PowerShell as Admin.</li>
            <li>Type: <code>iwr -useb https://christitus.com/win | iex</code></li>
            <li>A graphical window will open. Go to the <strong>"Tweaks"</strong> tab.</li>
            <li>Select "Desktop" (if it's a desktop PC) or "Laptop".</li>
            <li>Click <strong>"Run Tweaks"</strong>.</li>
            <li>This will disable Telemetry, Wi-Fi Sense, Activity History, and remove temporary bloatware.</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Forcefully Removing OneDrive",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-orange-400 font-bold mb-4 text-xl">⚠️ Beware of your Files</h4>
                <p class="text-gray-300 mb-4">
                    Before removing OneDrive, make sure your Desktop and Documents folders are saved locally. OneDrive often "hijacks" these folders.
                </p>
            </div>
            <p class="text-gray-300 mb-4 text-sm">
                In CMD (Command Prompt) as Admin, execute:
            </p>
            <div class="bg-[#0A0A0F] p-4 rounded-lg border border-white/10 font-mono text-sm space-y-2">
                <p class="text-gray-300">taskkill /f /im OneDrive.exe</p>
                <p class="text-gray-300">%SystemRoot%\\System32\\OneDriveSetup.exe /uninstall</p>
                <p class="text-gray-300">%SystemRoot%\\SysWOW64\\OneDriveSetup.exe /uninstall</p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Consequences of Debloating",
            content: `
            <div class="space-y-4">
               <div class="bg-gray-800 p-4 rounded-lg">
                    <h5 class="text-green-400 font-bold mb-2">Benefits</h5>
                    <p class="text-gray-300 text-sm">
                        Fewer processes (from 180 to 110), faster boot, more responsive menus, and more free RAM for heavy games.
                    </p>
               </div>
               <div class="bg-gray-800 p-4 rounded-lg">
                    <h5 class="text-red-400 font-bold mb-2">Side Effects</h5>
                    <p class="text-gray-300 text-sm">
                        Windows Search may become limited (no web results). Widgets may stop working. The Microsoft Store still works, but automatic updates may be paused.
                    </p>
               </div>
            </div>
            `
        }
    ];

    const faqItems = [
        {
            question: "Can I reinstall the Calculator if I accidentally delete it?",
            answer: "Yes. Open the Microsoft Store, search for 'Windows Calculator', and install it. All native apps are in the store."
        },
        {
            question: "Does debloating increase FPS?",
            answer: "Directly, very little (1-3 FPS). Indirectly, it prevents FPS drops (Stuttering) caused by background processes that wake up the CPU during gameplay. On PCs with 8GB of RAM or less, the difference is massive."
        },
        {
            question: "Does this break Windows Update?",
            answer: "The methods listed here (PowerShell) DO NOT break Windows Update. Aggressive 'Windows Lite' scripts (modified ISOs) do, but this guide focuses on keeping the original system stable."
        }
    ];

    const externalReferences = [
        { name: "Chris Titus Tech WinUtil GitHub", url: "https://github.com/ChrisTitusTech/winutil" },
        { name: "Microsoft Docs - Remove-AppxPackage", url: "https://learn.microsoft.com/en-us/powershell/module/appx/remove-appxpackage" }
    ];

    const relatedGuides = [
        {
            href: "/guias/otimizacao-processos-segundo-plano",
            title: "Background Processes",
            description: "How to identify what's eating your CPU."
        },
        {
            href: "/guias/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "The perfect pair for a clean system."
        },
        {
            href: "/guias/privacidade-windows-telemetria",
            title: "Disable Telemetry",
            description: "Stop Windows from sending data to Microsoft."
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
            advancedContentSections={advancedContentSections}
            additionalContentSections={additionalContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            externalReferences={externalReferences}
        />
    );
}
