import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'debloat-windows-11-otimizacao-powershell',
    title: "Ultimate Windows 11 Debloat Guide: Remove Bloatware and Zero Processes (2026)",
    description: "Is your Windows 11 consuming 4GB of RAM at idle? Learn how to remove useless apps (Candy Crush, Xbox, Weather) with PowerShell and reduce CPU usage by 30%.",
    category: 'optimization',
    difficulty: 'Advanced',
    time: '45 min'
};

const title = "Ultimate Windows 11 Debloat Guide: Remove Bloatware and Zero Processes (2026)";
const description = "Is your Windows 11 consuming 4GB of RAM at idle? Learn how to remove useless apps (Candy Crush, Xbox, Weather) with PowerShell and reduce CPU usage by 30%.";
const keywords = [
    'debloat windows 11 powershell script 2026',
    'how to increase fps by removing windows processes',
    'safe windows 11 services to disable list',
    'chris titus tech tool vs voltris optimizer',
    'remove windows 11 telemetry cmd'
];

export const metadata: Metadata = createGuideMetadata('debloat-windows-11-otimizacao-powershell', title, description, keywords);

export default function DebloatGuide() {
    const summaryTable = [
        { label: "Risk", value: "Medium (Create Restore Point)" },
        { label: "Tool", value: "PowerShell (Admin)" },
        { label: "RAM Gain", value: "Up to 1.5 GB" },
        { label: "CPU Gain", value: "5-10% (Fewer Processes)" },
        { label: "Time Required", value: "30-45 min" }
    ];

    const contentSections = [
        {
            title: "The Problem: Your PC isn't yours",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When you install Windows 11 today, it comes with over 70 pre-installed applications. From 'Disney+' to 'Clipchamp', and telemetry trackers ('DiagTrack'). This isn't just annoying; these apps run in the background, consuming your CPU cycles and allocating RAM that should be going to your game.
        </p>
        <div class="bg-yellow-900/10 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
             <h4 class="text-yellow-400 font-bold mb-2">⚠️ Security Warning</h4>
             <p class="text-gray-300 text-sm">
                Before you start, create a Restore Point. Press the Windows key, type 'Create a restore point', and save the current PC state. If you remove something wrong (like the Store), you can go back.
             </p>
        </div>
      `
        },
        {
            title: "Method 1: Manual Cleaning (The Basics)",
            content: `
        <p class="mb-4 text-gray-300">
            Before using complex scripts, let's remove the visible trash.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 bg-gray-900 p-6 rounded-xl border border-gray-700">
            <li>Go to <strong>Settings > Apps > Installed Apps</strong>.</li>
            <li>Search and uninstall without mercy:
                <ul class="list-disc ml-8 mt-2 text-sm text-gray-400 space-y-1">
                    <li>Everything 'Solitaire', 'Candy Crush', 'TikTok'.</li>
                    <li>'News', 'Weather' (if you don't use it), 'Tips'.</li>
                    <li>'Cortana' (it's dead, but the file is still there).</li>
                    <li>'OneDrive' (if you don't use it, it's one of the biggest performance villains).</li>
                </ul>
            </li>
        </ol>
      `
        },
        {
            title: "Method 2: Surgical PowerShell (Advanced)",
            content: `
        <p class="mb-4 text-gray-300">
            Many apps don't have an 'Uninstall' button. For those, we use PowerShell as Administrator.
        </p>

        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-xs overflow-x-auto">
            <p class="text-gray-500 mb-2"># Press Win+X > Terminal (Admin) and paste one by one:</p>

            <div class="space-y-4">
                <div>
                    <p class="text-green-400 font-bold"># Remove Xbox Game Bar (If not used)</p>
                    <p class="text-blue-300">Get-AppxPackage *xbox* | Remove-AppxPackage</p>
                </div>
                <div>
                    <p class="text-green-400 font-bold"># Remove 'Phone Link' (yourphone)</p>
                    <p class="text-blue-300">Get-AppxPackage *yourphone* | Remove-AppxPackage</p>
                </div>
                <div>
                    <p class="text-green-400 font-bold"># Remove Maps</p>
                    <p class="text-blue-300">Get-AppxPackage *maps* | Remove-AppxPackage</p>
                </div>
                <div>
                    <p class="text-green-400 font-bold"># Remove All 'Built-in' Apps (Extreme Caution!)</p>
                    <p class="text-red-400 opacity-50"># Get-AppxPackage -AllUsers | Remove-AppxPackage (Do not run without knowing what fits!)</p>
                </div>
            </div>
        </div>
      `
        },
        {
            title: "Method 3: Disabling Useless Services (Services.msc)",
            content: `
        <p class="mb-4 text-gray-300">
            Services are programs that run invisibly. Disabling the right ones frees up a lot of RAM.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Connected User Experiences and Telemetry (DiagTrack):</strong> The Windows spy. Disable it.</li>
            <li><strong>SysMain (formerly Superfetch):</strong> If you use an SSD, it can cause unnecessary writes. On HDDs, leave it on.</li>
            <li><strong>Windows Search:</strong> If you never search for files via the start menu, disabling this recovers heavy disk usage.</li>
            <li><strong>Print Spooler:</strong> No printer? Disable it.</li>
        </ul>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Complement the Debloat with a fast drive."
        },
        {
            href: "/guias/como-escolher-memoria-ram",
            title: "RAM Guide",
            description: "8GB is not enough? See if you need an upgrade."
        },
        {
            href: "/guias/remocao-virus-malware",
            title: "Remove Virus",
            description: "Sometimes slowness is not bloatware, it's malware."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            showVoltrisOptimizerCTA={false}
        >
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#121218] to-[#050510] border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#31A8FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.01 19 1.74-4.63a2 2 0 0 1 2.5-1.12l4.63 1.74" /></svg>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Automatic Optimization with Voltris Optimizer</h3>
                            <p className="text-slate-400 mb-6 max-w-2xl">
                                <strong>Voltris Optimizer</strong> applies all the fixes from this guide (and 200 others) with a single click. Optimize Processes, Network, Input Lag, and FPS instantly.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe" className="px-8 py-4 bg-[#31A8FF] text-white font-bold rounded-xl hover:bg-[#2b93df] transition-all shadow-[0_0_30px_rgba(49,168,255,0.4)] flex items-center justify-center gap-2">
                                    Download Now (x64)
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-[2px] transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                </a>
                                <a href="https://github.com/DougFHansen/Download-Voltris-Optimizer/releases/download/v1.0.1.5/VoltrisOptimizerInstaller.exe" className="px-8 py-4 bg-white/5 text-white border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center text-xs">
                                    For x86 systems
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GuideTemplate>
    );
}
