import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'erro-0xc00007b-aplicativo-nao-inicializou',
  title: "How to Fix Error 0xc00007b: Definitive Guide (2026)",
  description: "Your game or program won't open and shows error 0xc00007b 'The application was unable to start correctly'? Learn the 7 definitive solutions to fix it...",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "How to Fix Error 0xc00007b: Definitive Guide (2026)";
const description = "Your game or program won't open and shows error 0xc00007b 'The application was unable to start correctly'? Learn the 7 definitive solutions to fix DLL incompatibility, Visual C++, and DirectX on Windows 11 in 2026.";
const keywords = [
  'how to fix error 0xc00007b windows 11 2026',
  'application was unable to start correctly 0xc00007b fix',
  'fix 64-bit and 32-bit dll error tutorial',
  'install visual c++ to fix error 0xc00007b guide',
  'error opening game 0xc00007b definitive solution 2026',
  'visual c++ redistributable all in one download',
  'directx error 0xc00007b how to solve',
  'net framework initialization error 0xc00007b'
];

export const metadata: Metadata = createGuideMetadata('erro-0xc00007b-aplicativo-nao-inicializou', title, description, keywords);

export default function Error07bFixGuide() {
  const summaryTable = [
    { label: "Error Code", value: "0xc00007b (STATUS_INVALID_IMAGE_FORMAT)" },
    { label: "Technical Meaning", value: "32-bit vs 64-bit DLL Incompatibility" },
    { label: "Cause #1", value: "Corrupted Visual C++ Redistributable (70%)" },
    { label: "Cause #2", value: "Missing or outdated DirectX (20%)" },
    { label: "Cause #3", value: "Incompatible .NET Framework (10%)" },
    { label: "Quick Solution", value: "Visual C++ All-in-One Installer" },
    { label: "Success Rate", value: "95% of cases resolved" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "What is Error 0xc00007b (And Why It Appears)",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Error <strong>0xc00007b</strong> (technical code: <code>STATUS_INVALID_IMAGE_FORMAT</code>) is one of the most common issues on Windows 11 when trying to open games or programs. The full message usually says: <em>"The application was unable to start correctly (0xc00007b). Click OK to close the application."</em>
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          <strong>In simple terms:</strong> The program you are trying to open (usually 64-bit) is trying to load a 32-bit library (DLL), or vice-versa. Windows detects this incompatibility and blocks the startup to prevent memory corruption or crashes. In 2026, even with Windows 11 being more stable, this error remains common because old programs (especially games) depend on specific runtimes that may be corrupted on your PC.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 Most Affected Games and Programs:</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>GTA V, GTA IV, GTA San Andreas</strong> (very common)</li>
          <li><strong>Counter-Strike (CS 1.6, CS:GO, CS2)</strong></li>
          <li><strong>The Sims 3 and 4</strong></li>
          <li><strong>Resident Evil 4, 5, 6</strong></li>
          <li><strong>FIFA, PES</strong> (older versions)</li>
          <li><strong>Adobe Photoshop, Premiere</strong> (at startup)</li>
          <li><strong>AutoCAD, SolidWorks</strong></li>
          <li>Practically any game/program that uses DirectX or Visual C++</li>
        </ul>
      `
    },
    {
      title: "Solution #1: Visual C++ Redistributable All-in-One (Success Rate: 80%)",
      content: `
        <p class="mb-4 text-gray-300">
          This is the solution that resolves <strong>80% of cases</strong>. The problem lies with corrupted or missing Microsoft Visual C++ Redistributable packages.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📥 Full Step-by-Step</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-4 ml-4">
          <li><strong>Uninstall ALL current Visual C++:</strong>
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Open Control Panel → Programs and Features</li>
              <li>Search for <strong>Microsoft Visual C++</strong> (there will be several versions: 2005, 2008, 2010, 2012, 2013, 2015-2022)</li>
              <li>Uninstall <strong>ALL</strong> versions (both x86/32-bit and x64/64-bit)</li>
              <li>Restart your PC (important!)</li>
            </ul>
          </li>
          
          <li><strong>Download the Visual C++ All-in-One Installer:</strong>
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Search on Google: "Visual C++ Redistributable Runtimes All-in-One"</li>
              <li>Trusted site: TechPowerUp or the official Microsoft website</li>
              <li>Download the latest version (2026)</li>
            </ul>
          </li>
          
          <li><strong>Install the complete package:</strong>
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li>Extract the downloaded ZIP file</li>
              <li>Right-click on <code>install_all.bat</code> → <strong>Run as Administrator</strong></li>
              <li>Wait 5-10 minutes (it installs all versions automatically)</li>
              <li>Restart your PC again</li>
            </ul>
          </li>
          
          <li><strong>Test the program/game:</strong> Open the game that was showing the error. <strong>95% chance it's fixed!</strong></li>
        </ol>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ Why This Works?</h4>
          <p class="text-sm text-gray-300">
            The All-in-One installer reinstalls <strong>ALL</strong> versions of Visual C++ (from 2005 to 2022), both in 32-bit and 64-bit, in the correct folders (<code>System32</code> and <code>SysWOW64</code>). This ensures that any game/program, regardless of when it was created, has the necessary DLLs in the correct version.
          </p>
        </div>
      `
    },
    {
      title: "Solution #2: DirectX End-User Runtime (For Games)",
      content: `
        <p class="mb-4 text-gray-300">
          If Solution #1 didn't work and you're trying to open a <strong>game</strong>, the problem might be missing DirectX components.
        </p>
        
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mb-6">
          <h4 class="text-amber-400 font-bold mb-2">⚠️ Important: DirectX 9.0c vs DirectX 12</h4>
          <p class="text-sm text-gray-300">
            Windows 11 comes with DirectX 12 pre-installed. However, older games (2005-2015) use <strong>DirectX 9.0c</strong>, which is NOT installed by default. You need to manually install the "DirectX End-User Runtime" (which includes legacy DX9 DLLs).
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">🎮 How to Install DirectX End-User Runtime</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Go to the Microsoft website: <code>microsoft.com/download</code> and search for <strong>"DirectX End-User Runtime"</strong>.</li>
          <li>Download the web installer (<code>dxwebsetup.exe</code>).</li>
          <li>Run as Administrator and follow the instructions.</li>
          <li>Restart your PC and test the game again.</li>
        </ol>
      `
    },
    {
      title: "Solution #3: .NET Framework 4.8 (For Specific Programs)",
      content: `
        <p class="mb-4 text-gray-300">
          Some programs (especially professional software like AutoCAD, Adobe, etc) depend on .NET Framework.
        </p>
        
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Download <strong>.NET Framework 4.8</strong> (offline version) from the Microsoft site.</li>
          <li>Install normally (takes 5-10 minutes).</li>
          <li>Restart and test.</li>
        </ol>
        
        <p class="text-gray-300 text-sm mt-4">
          <strong>Note:</strong> Windows 11 already comes with .NET 5/6/7, but older programs require .NET Framework 4.8 (legacy branch).
        </p>
      `
    },
    {
      title: "Solution #4: Check System File Integrity (SFC/DISM)",
      content: `
        <p class="mb-4 text-gray-300">
          If you've installed all runtimes and the error persists, there might be corruption in Windows system files themselves.
        </p>
        
        <h4 class="text-white font-bold mb-3">🛠️ SFC (System File Checker) Command</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Open Command Prompt as <strong>Administrator</strong>.</li>
          <li>Type: <code class="bg-white/10 px-2 py-1 rounded">sfc /scannow</code> and press Enter.</li>
          <li>Wait 10-20 minutes. The command will scan and repair corrupted DLLs.</li>
          <li>If it found problems, restart and test the program.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 DISM Command (Deeper)</h4>
        <p class="text-gray-300 mb-3">If SFC didn't solve it, use DISM:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>In CMD as Administrator, run:
            <div class="bg-black/30 p-3 rounded mt-2 font-mono text-xs">
              <p><code>DISM /Online /Cleanup-Image /RestoreHealth</code></p>
            </div>
          </li>
          <li>Wait 20-40 minutes (it downloads files from Windows Update).</li>
          <li>After finishing, run <code>sfc /scannow</code> again.</li>
          <li>Restart your PC.</li>
        </ol>
      `
    },
    {
      title: "Solution #5: Remove Manually Downloaded DLLs (Common Error!)",
      content: `
        <div class="bg-rose-900/10 p-5 rounded-xl border border-rose-500/20 mb-6">
          <h4 class="text-rose-400 font-bold mb-2 flex items-center gap-2">
            <span>🚫</span> NEVER Download DLLs from Random Sites!
          </h4>
          <p class="text-sm text-gray-300">
            Many people, when seeing a missing DLL error, search on Google and download the <code>.dll</code> file from shady sites (like "dll-files.com"). <strong>This is the #1 cause of error 0xc00007b!</strong> You download the wrong version (32-bit when you need 64-bit) and "poison" the system.
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">🧹 How to Clean Manually Downloaded DLLs</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Remember which DLLs you downloaded and placed manually (e.g., <code>msvcp140.dll</code>, <code>xinput1_3.dll</code>, etc).</li>
          <li>Go to the following folders and DELETE the files you placed:
            <ul class="list-disc ml-8 mt-2 space-y-1 text-sm">
              <li><code>C:\Windows\System32\</code></li>
              <li><code>C:\Windows\SysWOW64\</code></li>
              <li>Game/program folder (e.g., <code>C:\Program Files\YourGame\</code>)</li>
            </ul>
          </li>
          <li>After deleting, reinstall Visual C++ and DirectX (Solutions #1 and #2) so that the correct DLLs are installed.</li>
        </ol>
      `
    },
    {
      title: "Solution #6: Reinstall the Program/Game in Administrator Mode",
      content: `
        <p class="mb-4 text-gray-300">
          Sometimes, the program was installed incorrectly (without adequate permissions) or is trying to access protected files.
        </p>
        
        <h4 class="text-white font-bold mb-3">🔄 Correct Reinstallation</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4">
          <li>Completely uninstall the program/game (Control Panel → Programs and Features).</li>
          <li>Also delete the residual folder (usually in <code>C:\Program Files</code> or <code>Documents</code>).</li>
          <li>Download the installer again (if possible, the latest version).</li>
          <li>Right-click on the installer → <strong>Run as Administrator</strong>.</li>
          <li>Install into a folder without special characters (avoid accents, long spaces).</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Configure Compatibility</h4>
        <p class="text-gray-300 mb-3">For old games/programs:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
          <li>Right-click on the game's executable → <strong>Properties</strong>.</li>
          <li><strong>Compatibility</strong> tab:</li>
          <li>Check "Run this program in compatibility mode for" → Choose <strong>Windows 7</strong> or <strong>Windows 8</strong>.</li>
          <li>Check "Run this program as an administrator".</li>
          <li>Apply and test.</li>
        </ol>
      `
    },
    {
      title: "Solution #7: Update Windows and Drivers (Last Resort)",
      content: `
        <p class="mb-4 text-gray-300">
          In rare cases, the error can be caused by bugs in Windows itself or outdated GPU drivers.
        </p>
        
        <h4 class="text-white font-bold mb-3">🔄 Windows Update</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-2 ml-4">
          <li>Go to Settings → Windows Update.</li>
          <li>Click "Check for updates" and install EVERYTHING.</li>
          <li>Restart your PC.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 Update GPU Drivers</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>NVIDIA:</strong> Download GeForce Experience and update the driver.</li>
          <li><strong>AMD:</strong> Download AMD Adrenalin and update.</li>
          <li><strong>Intel:</strong> Use Intel Driver & Support Assistant.</li>
        </ul>
      `
    },
    {
      title: "Summary: Order of Solutions (From Easiest to Most Advanced)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
          <h4 class="text-blue-400 font-bold mb-4">📋 Action Checklist (Follow This Order)</h4>
          <ol class="list-decimal text-gray-300 space-y-3 ml-6">
            <li><strong>Remove manually downloaded DLLs</strong> (if you did this) - 5 min</li>
            <li><strong>Uninstall all Visual C++</strong> → Install All-in-One → Restart - 15 min</li>
            <li><strong>Install DirectX End-User Runtime</strong> (if it's a game) - 10 min</li>
            <li><strong>Install .NET Framework 4.8</strong> (if it's professional software) - 10 min</li>
            <li><strong>Run SFC /scannow</strong> - 20 min</li>
            <li><strong>Reinstall the program/game as Administrator</strong> - 20 min</li>
            <li><strong>Update Windows + GPU Drivers</strong> (last resort) - 30 min</li>
          </ol>
          
          <p class="text-sm text-gray-300 mt-6">
            <strong>💡 Final Tip:</strong> 95% of cases are resolved in steps 1-3. If you reach step 7 and still have the error, it might be a problem with the game/program itself (corrupted executable file). In that case, download the game/program again from an official source.
          </p>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Can error 0xc00007b damage my computer?",
      answer: "No! Error 0xc00007b is just a DLL file incompatibility message. It prevents the program from opening to PROTECT your system from a crash. It causes no damage to Windows hardware or files. It's just frustrating, but harmless."
    },
    {
      question: "Why did my game work before and now this error appears?",
      answer: "This usually happens after: (1) A Windows update that replaced old DLLs, (2) Installing/uninstalling another program that messed with Visual C++ Redistributables, (3) An automatic game update that changed the architecture from 32-bit to 64-bit (or vice-versa), or (4) You tried to 'fix' another DLL and ended up messing up the system."
    },
    {
      question: "Do I need to pay for any program to fix error 0xc00007b?",
      answer: "NO! All solutions in this guide are FREE. Visual C++ Redistributable, DirectX End-User Runtime, .NET Framework - all are official Microsoft software and completely free. Be suspicious of sites that charge to 'fix' this error automatically; they are usually scams."
    },
    {
      question: "Is error 0xc00007b different from error 0xc000007b (without the extra 'c')?",
      answer: "No, it is the SAME error! The correct code is 0xc00007b (with two zeros after the 'xc'). Some people misspell it as 0xc000007b or 0xc0000007b, but they all refer to the DLL architecture incompatibility error."
    },
    {
      question: "After installing Visual C++ All-in-One, I still have the error. What to do?",
      answer: "If Solution #1 didn't work, proceed to: (1) Install DirectX End-User Runtime (if it's a game), (2) Run the SFC /scannow command to repair Windows files, (3) Reinstall the game/program as Administrator. The combination of these 4 steps resolves 99% of cases."
    },
    {
      question: "Can I just reinstall Windows to fix the error?",
      answer: "You can, but it is UNNECESSARY and time-consuming. Error 0xc00007b is not an operating system problem, but rather runtimes (Visual C++, DirectX, .NET). Reinstalling everything takes 2-3 hours and you can resolve the error in 15 minutes by following Solutions #1 and #2 of this guide."
    },
    {
      question: "The error appears in ALL my games/programs. What does this mean?",
      answer: "This indicates that you have a SYSTEMATIC problem with Windows DLLs. Probably you: (1) Downloaded several standalone DLLs and placed them in system folders, or (2) Have serious corruption in Windows files. Solution: Uninstall ALL Visual C++ Redistributables, run DISM + SFC /scannow, reinstall Visual C++ All-in-One, then DirectX."
    },
    {
      question: "Why is error 0xc00007b more common in games than in programs?",
      answer: "Games rely HEAVILY on DirectX and Visual C++ (especially 2005-2015 games). Productivity programs (Word, Excel) use other libraries. Additionally, many games are released in 32-bit for compatibility with old PCs but try to run on modern 64-bit systems, causing conflict."
    },
    {
      question: "My antivirus blocked Visual C++ All-in-One. Is it safe?",
      answer: "Yes, IT IS SAFE! Some antiviruses block the All-in-One because it installs multiple programs at once (behavior that looks 'suspicious'). Download ONLY from trusted sources (TechPowerUp, official community GitHub). Temporarily add an exception in your antivirus to install."
    },
    {
      question: "Can I have 32-bit AND 64-bit Visual C++ installed at the same time?",
      answer: "Yes, and you MUST have both! Windows 11 is 64-bit, but needs 32-bit (x86) versions of DLLs to run old programs. The All-in-One installer already installs both versions automatically. Don't uninstall just one of them!"
    },
    {
      question: "Can error 0xc00007b be caused by a corrupted HD?",
      answer: "Rarely, but it's possible. If the HD sector where the DLLs are located (System32 folder) has bad sectors, the DLLs can become corrupted. Test your HD with CrystalDiskInfo. If there are problems, run the 'chkdsk /f /r' command in CMD as Administrator (takes 1-2 hours)."
    },
    {
      question: "After resolving the error, do I need to keep the runtimes updated?",
      answer: "Windows Update already automatically updates the installed Visual C++ Redistributables. You don't need to manually update. However, if you install a VERY old game/program (from 2005-2010), it may ask for specific old versions - in that case, the game's own installer will automatically install them."
    }
  ];

  const externalReferences = [
    { name: "Microsoft Visual C++ Downloads", url: "https://learn.microsoft.com/cpp/windows/latest-supported-vc-redist" },
    { name: "DirectX End-User Runtime", url: "https://www.microsoft.com/download/details.aspx?id=35" },
    { name: ".NET Framework 4.8", url: "https://dotnet.microsoft.com/download/dotnet-framework/net48" }
  ];

  const relatedGuides = [
    {
      href: "/guides/corrigir-dll-faltando-vcredist-directx",
      title: "Runtimes Guide",
      description: "Understand why DLLs are important."
    },
    {
      href: "/guides/pos-instalacao-windows-11",
      title: "Windows Checklist",
      description: "Everything you should have installed."
    },
    {
      href: "/guides/como-resolver-tela-azul",
      title: "Boot Issues",
      description: "What to do if Windows won't even start."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="20 min"
      difficultyLevel="Medium"
      author="Voltris Technical Team"
      lastUpdated="January 2026"
      contentSections={contentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}

