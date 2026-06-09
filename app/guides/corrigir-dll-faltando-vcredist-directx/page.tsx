import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'corrigir-dll-faltando-vcredist-directx',
  title: "How to Fix Missing DLLs: VCRedist and DirectX (2026 Guide)",
  description: "Your game won't open because of a missing .dll? Learn how to correctly install Visual C++ Redistributable and DirectX to run any game in 2026.",
  category: 'windows-errors',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "How to Fix Missing DLLs: VCRedist and DirectX (2026 Guide)";
const description = "Your game won't open because of a missing .dll? Learn how to correctly install Visual C++ Redistributable and DirectX to run any game in 2026.";
const keywords = [
    'how to fix missing dll error windows 11 2026',
    'install vcredist all in one full tutorial',
    'msvcp140.dll and vcruntime140.dll error how to fix guide',
    'download full directx 12 and directx 11 2026',
    'solve application was unable to start correctly 0xc00007b'
];

export const metadata: Metadata = createGuideMetadata('corrigir-dll-faltando-vcredist-directx', title, description, keywords);

export default function DLLFixGuide() {
    const summaryTable = [
        { label: "What they are", value: "Essential code libraries (Runtimes)" },
        { label: "Culprit #1", value: "Visual C++ Redistributable (VCRedist)" },
        { label: "Culprit #2", value: "DirectX End-User Runtimes" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why do these errors occur?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many games in 2026 are developed using tools that rely on Microsoft libraries. If you recently formatted your PC, or Windows Update didn't install everything it should have, when you try to open the game you will see errors like **"MSVCP140.dll not found"**. Never download individual DLLs from strange websites! The correct solution is to install the official Microsoft package that contains hundreds of these libraries.
        </p>
      `
        },
        {
             title: "1. Visual C++: The \"All in One\" (The Magic Solution)",
            content: `
        <p class="mb-4 text-gray-300">Instead of downloading them one by one, install the full package:</p>
        <p class="text-sm text-gray-300">
            The best way to resolve 99% of DLL errors in 2026 is the <strong>Visual C++ Redistributable Runtimes All-in-One</strong> installer. It installs all versions from 2005 to 2026 at once, for both 32-bit (x86) and 64-bit (x64) systems. <br/><br/>
            <strong>Tip:</strong> Even if your Windows is 64-bit, you **must** install the x86 versions too, because many games use these older libraries to run audio or DRM subsystems.
        </p>
      `
        },
        {
            title: "2. DirectX: The engine of games",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">DirectX End-User Web Installer:</h4>
            <p class="text-sm text-gray-300">
                Although Windows 11 already comes with DirectX 12, it does not have the <strong>DirectX 9, 10, and 11</strong> components that many classic games use. <br/><br/>
                Go to the official Microsoft website and download the 'DirectX End-User Runtime Web Installer'. It will scan your system folders and download only what is missing, fixing errors like d3dx9_43.dll.
            </p>
        </div>
      `
        },
        {
            title: "3. Error 0xc00007b",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>The Compatibility Villain:</strong> 
            <br/><br/>If you get the error **"The application was unable to start correctly (0xc00007b)"**, it means there is a mix of 32-bit DLLs in 64-bit folders. The ultimate solution is to uninstall all 'Visual C++' versions via the Control Panel and run the All-in-One installer mentioned in step 1. This will clean the registry and put each file in its proper place.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "4. Technical Foundations of Dynamic Libraries",
            content: `
        <h4 class="text-white font-bold mb-3">🔬 Architecture of DLL Libraries and Runtimes</h4>
        <p class="mb-4 text-gray-300">
            DLLs (Dynamic Link Libraries) are fundamental components of the Windows architecture that allow code sharing among multiple programs:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Types of Libraries</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• C/C++ Runtime (CRT) Libraries</li>
                    <li>• .NET Framework Libraries</li>
                    <li>• DirectX and Direct3D Components</li>
                    <li>• Audio and Video Libraries</li>
                    <li>• COM and ActiveX Components</li>
                </ul>
            </div>
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">Architectures and Versions</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• x86 (32-bit) and x64 (64-bit)</li>
                    <li>• Visual Studio Versions (2005-2022)</li>
                    <li>• Static vs Dynamic Compilation</li>
                    <li>• ABI (Application Binary Interface)</li>
                    <li>• Versioning and Side-by-side</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Dependency Resolution Process</h4>
        <p class="mb-4 text-gray-300">
            Windows uses a complex process to locate and load DLLs:
        </p>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Stage</th>
                        <th class="p-3 text-left">Description</th>
                        <th class="p-3 text-left">Search Method</th>
                        <th class="p-3 text-left">Importance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">1. Executable Folder</td>
                        <td class="p-3">Search in the program folder</td>
                        <td class="p-3">Local directory</td>
                        <td class="p-3">Critical</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">2. Windows Folder</td>
                        <td class="p-3">Search in System32/SysWOW64</td>
                        <td class="p-3">Operating system</td>
                        <td class="p-3">Essential</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">3. PATH Environment</td>
                        <td class="p-3">Search in PATH directories</td>
                        <td class="p-3">Environment variables</td>
                        <td class="p-3">Important</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">4. Manifest</td>
                        <td class="p-3">Search for declared dependencies</td>
                        <td class="p-3">Side-by-side assemblies</td>
                        <td class="p-3">Critical</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">5. Fusion Log</td>
                        <td class="p-3">Records loading failures</td>
                        <td class="p-3">Event tracing</td>
                        <td class="p-3">Diagnostic</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "5. Deep Analysis of DLL Errors",
            content: `
        <h4 class="text-white font-bold mb-3">🔍 Technical Diagnosis of DLL Problems</h4>
        <p class="mb-4 text-gray-300">
            Accurate identification of the root cause of DLL errors is essential for effective solutions:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
                <h5 class="text-green-400 font-bold mb-2">Common Errors and Meanings</h5>
                <p class="text-gray-300 text-sm">
                    Technical understanding of the most frequent error codes:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• HRESULT 0x8007007E (DLL_NOT_FOUND)</li>
                    <li>• Error 0xC00007B (MISMATCH_ARCHITECTURE)</li>
                    <li>• STATUS_DLL_INIT_FAILED</li>
                    <li>• Entry Point Not Found</li>
                    <li>• Dependency Walker reports</li>
                </ul>
            </div>
            <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
                <h5 class="text-blue-400 font-bold mb-2">Diagnostic Tools</h5>
                <p class="text-gray-300 text-sm">
                    Advanced tools for dependency analysis:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Dependency Walker</li>
                    <li>• Process Monitor (ProcMon)</li>
                    <li>• Process Explorer</li>
                    <li>• Fusion Log Viewer</li>
                    <li>• Visual Studio Debugger</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Advanced Troubleshooting Techniques</h4>
        <p class="mb-4 text-gray-300">
            Systematic methods for resolving complex DLL issues:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-cyan-400 font-bold mb-2">Process Analysis</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Real-time monitoring</li>
                    <li>• System call analysis</li>
                    <li>• Open handles verification</li>
                    <li>• Inspection of loaded modules</li>
                </ul>
            </div>
            <div class="bg-gray-800 p-4 rounded-lg">
                <h5 class="text-purple-400 font-bold mb-2">System Repair</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• SFC /scannow</li>
                    <li>• DISM /Online /Cleanup-Image</li>
                    <li>• System integrity verification</li>
                    <li>• Restoration of critical components</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "6. Runtimes and Packages Management",
            content: `
        <h4 class="text-white font-bold mb-3">📦 Advanced Redistributable Package Management</h4>
        <p class="mb-4 text-gray-300">
            Efficient management of redistributable packages is crucial for system stability:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Visual C++ Versions</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• VS 2005 (v8.0) - Support ended</li>
                    <li>• VS 2008 (v9.0) - Support ended</li>
                    <li>• VS 2010 (v10.0) - Support ended</li>
                    <li>• VS 2012-2022 (v11.0-v14.x)</li>
                    <li>• VC++ 2019/2022 (Universal C Runtime)</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">DirectX Components</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• DirectX 9.0c (latest version)</li>
                    <li>• DirectX 10 (integrated in Vista/7)</li>
                    <li>• DirectX 11 (Windows 7+)</li>
                    <li>• DirectX 12 (Windows 10+)</li>
                    <li>• DirectX 12 Ultimate (Windows 10 20H1+)</li>
                </ul>
            </div>
            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h5 class="text-green-400 font-bold mb-3">Other Common Libraries</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• .NET Framework (1.1-4.8.1)</li>
                    <li>• Visual Basic/C# Runtimes</li>
                    <li>• MSXML and MSMQ</li>
                    <li>• Windows SDK Components</li>
                    <li>• OpenXR and Vulkan Runtimes</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Compatibility and Requirements Table</h4>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Component</th>
                        <th class="p-3 text-left">Version</th>
                        <th class="p-3 text-left">Architecture</th>
                        <th class="p-3 text-left">Minimum Requirement</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">MSVCP140.dll</td>
                        <td class="p-3">v14.29+ (VS 2019/2022)</td>
                        <td class="p-3">x86/x64</td>
                        <td class="p-3">Windows 7+</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">VCRUNTIME140.dll</td>
                        <td class="p-3">v14.29+ (VS 2019/2022)</td>
                        <td class="p-3">x86/x64</td>
                        <td class="p-3">Windows 7+</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">D3D11.DLL</td>
                        <td class="p-3">DX 11 (Win8+)</td>
                        <td class="p-3">x86/x64</td>
                        <td class="p-3">Windows 7+</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">DXGI.DLL</td>
                        <td class="p-3">DX 11 (Win8+)</td>
                        <td class="p-3">x86/x64</td>
                        <td class="p-3">Windows 7+</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">API-MS-WIN-CRT*</td>
                        <td class="p-3">UCRT (Win10+)</td>
                        <td class="p-3">x86/x64</td>
                        <td class="p-3">Windows 10+</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "7. Advanced Diagnostic Tools",
            content: `
        <h4 class="text-white font-bold mb-3">🔍 Professional Utilities for DLL Analysis</h4>
        <p class="mb-4 text-gray-300">
            Specialized tools for diagnosing complex dependency issues:
        </p>
        <div class="space-y-6">
            <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10">
                <h5 class="text-purple-400 font-bold mb-2">Dependency Walker and Alternatives</h5>
                <p class="text-gray-300 text-sm">
                    Tools for module and DLL dependency analysis:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Dependency Walker (classic, but discontinued)</li>
                    <li>• Dependencies (modern successor)</li>
                    <li>• PE Explorer</li>
                    <li>• Resource Hacker</li>
                    <li>• DLL Export Viewer</li>
                </ul>
            </div>
            <div class="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-900/10">
                <h5 class="text-cyan-400 font-bold mb-2">Real-Time Monitoring</h5>
                <p class="text-gray-300 text-sm">
                    Tools to observe system behavior at runtime:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• Process Monitor (Sysinternals)</li>
                    <li>• API Monitor</li>
                    <li>• File Monitor</li>
                    <li>• Registry Monitor</li>
                    <li>• Handle Monitor</li>
                </ul>
            </div>
            <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/10">
                <h5 class="text-yellow-400 font-bold mb-2">Manifest and Assembly Analysis</h5>
                <p class="text-gray-300 text-sm">
                    Tools to inspect client-side manifests and assemblies:
                </p>
                <ul class="text-sm text-gray-300 space-y-1 mt-2">
                    <li>• FXCop</li>
                    <li>• GAC Util (gacutil.exe)</li>
                    <li>• Assembly Binding Log Viewer</li>
                    <li>• MT.exe (Manifest Tool)</li>
                    <li>• ILDASM (IL Disassembler)</li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "8. Advanced Repair Procedures",
            content: `
        <h4 class="text-white font-bold mb-3">🔧 Deep System Repair Techniques</h4>
        <p class="mb-4 text-gray-300">
            When standard methods fail, advanced procedures can resolve persistent problems:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">Operating System Repair</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• SFC /scannow (System File Checker)</li>
                    <li>• DISM /Online /Cleanup-Image /RestoreHealth</li>
                    <li>• SFC /scannow after DISM</li>
                    <li>• WinSxS integrity check</li>
                    <li>• System component restoration</li>
                </ul>
            </div>
            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h5 class="text-green-400 font-bold mb-3">Runtimes Cleanup and Reinstallation</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Full uninstall of VCRedist</li>
                    <li>• Manual registry cleanup</li>
                    <li>• Side-by-side components removal</li>
                    <li>• Restart Windows Modules Installer</li>
                    <li>• Reinstallation in chronological order</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🧪 Testing and Validation Procedures</h4>
        <p class="mb-4 text-gray-300">
            After the fix, it's important to validate system integrity:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Test critical applications:</strong> Run the programs that were failing to confirm resolution</li>
            <li><strong>Event analysis:</strong> Check Event Viewer for DLL related errors</li>
            <li><strong>Performance check:</strong> Monitor CPU and memory usage after the fix</li>
            <li><strong>Integrity validation:</strong> Run SFC /scannow again to confirm system health</li>
            <li><strong>Boot test:</strong> Check if the system boots properly after changes</li>
        </ul>
      `
        },
        {
            title: "9. Prevention and Best Practices",
            content: `
        <h4 class="text-white font-bold mb-3">🛡️ DLL Problem Prevention Strategies</h4>
        <p class="mb-4 text-gray-300">
            Preventive measures to avoid recurring issues with DLLs:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
            <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
                <h5 class="text-indigo-400 font-bold mb-3">Proactive Maintenance</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Regular Windows Updates</li>
                    <li>• Keeping runtimes updated</li>
                    <li>• Backup of critical DLLs</li>
                    <li>• Health monitoring</li>
                    <li>• Setting documentation</li>
                </ul>
            </div>
            <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
                <h5 class="text-cyan-400 font-bold mb-3">Installation Best Practices</h5>
                <ul class="text-sm text-gray-300 space-y-2">
                    <li>• Installation of complete packages</li>
                    <li>• Correct installation sequence</li>
                    <li>• Compatibility checking</li>
                    <li>• Using official sources</li>
                    <li>• Post-installation testing</li>
                </ul>
            </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📋 Prevention Checklist</h4>
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                    <tr>
                        <th class="p-3 text-left">Practice</th>
                        <th class="p-3 text-left">Description</th>
                        <th class="p-3 text-left">Frequency</th>
                        <th class="p-3 text-left">Priority</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Windows Update</td>
                        <td class="p-3">Keep operating system up to date</td>
                        <td class="p-3">Monthly</td>
                        <td class="p-3">High</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Runtimes Checking</td>
                        <td class="p-3">Confirm integrity of redistributable packages</td>
                        <td class="p-3">Quarterly</td>
                        <td class="p-3">Medium</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">System Backup</td>
                        <td class="p-3">Keep restore points up to date</td>
                        <td class="p-3">Monthly</td>
                        <td class="p-3">High</td>
                    </tr>
                    <tr class="border-t border-gray-700 bg-gray-800/30">
                        <td class="p-3">Application Monitoring</td>
                        <td class="p-3">Look out for recurrent DLL errors</td>
                        <td class="p-3">Continuous</td>
                        <td class="p-3">Medium</td>
                    </tr>
                    <tr class="border-t border-gray-700">
                        <td class="p-3">Installation Audit</td>
                        <td class="p-3">Verify proper application installation</td>
                        <td class="p-3">After installations</td>
                        <td class="p-3">Low</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/erro-0xc00007b-aplicativo-nao-inicializou",
            title: "Error 0xc00007b",
            description: "Deep guide focused only on this error."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Combine with DirectX for maximum performance."
        },
        {
            href: "/guides/pos-instalacao-windows-11",
            title: "Windows Checklist",
            description: "Everything you should install on a fresh Windows."
        }
    ];

    const allContentSections = [...contentSections, ...additionalContentSections];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={allContentSections}
            advancedContentSections={advancedContentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

