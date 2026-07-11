import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'automacao-tarefas',
  title: "Automation in Windows 11: Power Automate & Scripts (2026)",
  description: "Tired of repetitive tasks? Learn to use Power Automate Desktop, Task Scheduler, Batch, and PowerShell to create a PC that works on its own.",
  category: 'productivity',
  difficulty: 'Intermediate',
  time: '45 min'
};

const title = "Automation in Windows 11: Power Automate & Scripts (2026)";
const description = "Tired of repetitive tasks? Learn to use Power Automate Desktop, Task Scheduler, Batch, and PowerShell to create a PC that works on its own. Guide with practical script examples.";

const keywords = [
  'power automate desktop tutorial english 2026',
  'automate windows temporary file cleanup',
  'task scheduler automatically turn off pc',
  'powershell script automatic backup',
  'automatically move files from downloads folder',
  'open programs on windows startup with delay',
  'batch file basic tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('automacao-tarefas', title, description, keywords, locale);
}

export default function AutomationGuide() {
  const summaryTable = [
    { label: "Visual Tool", value: "Power Automate Desktop (Free)" },
    { label: "Native", value: "Task Scheduler" },
    { label: "Scripts", value: "PowerShell (.ps1) / Batch (.bat)" },
    { label: "Complexity", value: "Low (PAD) to High (PowerShell)" },
    { label: "Main Use", value: "Organize, Clean, Backup" },
    { label: "Risk", value: "Careful with 'Delete' in loops" }
  ];

  const contentSections = [
    {
      title: "The Power of Productive Laziness",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Bill Gates said: <em>"I will always choose a lazy person to do a difficult job, because they will find an easy way to do it."</em>. Windows 11 automation has evolved. In the past, you needed to be a programmer. Today, with <strong>Power Automate</strong>, you create visual robots that click, type, and organize files for you.
        </p>
        
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-white font-bold mb-2">🚀 What Can You Do?</h4>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Move all .pdf files from the Downloads folder to Documents/Invoices.</li>
            <li>Rename 500 photos at once with date and location.</li>
            <li>Open your work setup (Chrome, Slack, Spotify) with one click and position the windows.</li>
            <li>Empty the Recycle Bin automatically every Friday.</li>
          </ul>
        </div>
      `
    },
    {
      title: "Tool 1: Power Automate Desktop (The Future)",
      content: `
        <p class="mb-4 text-gray-300">
          <strong>Power Automate</strong> comes pre-installed on Windows 11. It's "Low Code" - you drag logical blocks.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-4">Practical Example: Downloads Organizer</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Open Power Automate and click "New Flow". Name it "Organize Downloads".</li>
            <li>On the left, search for the action <strong>"Get files in folder"</strong>. Drag it to the center.
                <br/><span class="text-xs text-gray-500 ml-6">Folder: C:\\Users\\YourUser\\Downloads | Filter: *.pdf</span></li>
            <li>Search for the <strong>"For Each"</strong> action. The flow will create a loop for each file found.</li>
            <li>Inside the loop, drag the <strong>"Move file"</strong> action.
                <br/><span class="text-xs text-gray-500 ml-6">File: %CurrentItem% | Destination: C:\\Users\\YourUser\\Documents\\PDFs</span></li>
            <li>Save and click Run (Play). Watch the magic happen.</li>
        </ol>
        <p class="mt-3 text-sm text-yellow-400">
            Tip: You can create a desktop shortcut to run this flow without opening the app.
        </p>
      `
    },
    {
      title: "Tool 2: Task Scheduler (The Classic)",
      content: `
        <p class="mb-4 text-gray-300">
          For things that should run ON THEIR OWN (without you clicking), we use <code>taskschd.msc</code>.
        </p>
        <div class="space-y-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h5 class="font-bold text-white mb-2">Automatic Shutdown</h5>
                <p class="text-sm text-gray-300">
                    Useful for those who leave the PC downloading games and go to sleep.
                    <br/>1. Create Basic Task > Name: "Sleep PC".
                    <br/>2. Trigger: Daily at 02:00.
                    <br/>3. Action: Start a Program. 
                    <br/>4. Program: <code>shutdown</code> | Arguments: <code>/s /f /t 60</code> (Forced shutdown in 60s).
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h5 class="font-bold text-white mb-2">Restart Video Driver on Boot</h5>
                <p class="text-sm text-gray-300">
                    If your driver bugs at startup, create a task to run a restart script.
                </p>
            </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Tool 3: PowerShell Scripts (.ps1)",
      content: `
        <h4 class="text-white font-bold mb-3">Unlimited Power (with moderation)</h4>
        <p class="mb-4 text-gray-300">
          PowerShell accesses the heart of Windows. Create a text file, paste the code, and save it as <code>cleanup.ps1</code>.
        </p>
        
        <div class="bg-[#1E1E1E] p-4 rounded-lg font-mono text-xs text-green-400 border border-green-900 overflow-x-auto">
            <p># Quick Cache Cleanup Script</p>
            <p>Write-Host "Cleaning Temp..."</p>
            <p>Remove-Item -Path "C:\\Windows\\Temp\\*" -Recurse -Force -ErrorAction SilentlyContinue</p>
            <p>Remove-Item -Path "$env:LOCALAPPDATA\\Temp\\*" -Recurse -Force -ErrorAction SilentlyContinue</p>
            <p>Write-Host "Cleaning DNS Cache..."</p>
            <p>Clear-DnsClientCache</p>
            <p>Write-Host "Done!"</p>
            <p>Start-Sleep -Seconds 3</p>
        </div>
        
        <p class="mt-4 text-gray-300 text-sm">
            To run: Right-click > "Run with PowerShell".
            <br/><strong>Note:</strong> You may need to open PowerShell as Admin and type <code>Set-ExecutionPolicy RemoteSigned</code> once to enable scripts.
        </p>
      `
    },
    {
      title: "Autohotkey (AHK): The Secret Weapon of Gamers",
      content: `
        <p class="mb-4 text-gray-300">
          <a href="https://www.autohotkey.com/" class="text-blue-400 hover:underline">AutoHotkey</a> is a scripting language focused on keyboard macros.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Create global shortcuts (e.g., F1 opens Spotify).</li>
            <li>Text expansion (e.g., Typing "mymail" becomes "first.last@company.com").</li>
            <li>Remap keys (Make CapsLock work as Backspace).</li>
        </ul>
        <div class="bg-[#1E1E1E] p-4 rounded-lg font-mono text-xs text-yellow-400 border border-yellow-900 mt-2">
            <p>; AHK Example: Volume Control with Mouse on taskbar</p>
            <p>#IfMouseIsOverTaskbar</p>
            <p>WheelUp::Volume_Up</p>
            <p>WheelDown::Volume_Down</p>
        </div>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Idea Gallery",
      content: `
        <h4 class="text-white font-bold mb-3">Copy these ideas:</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-pink-400 font-bold mb-2">Focus Mode</h5>
                <p class="text-sm text-gray-300">
                    Create a flow that: Closes Steam/Discord, Turns on "Do Not Disturb" in Windows, and opens Word/VS Code.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg">
                <h5 class="text-cyan-400 font-bold mb-2">Save Backups</h5>
                <p class="text-sm text-gray-300">
                    Script that copies the game save folder (AppData) and sends it to Google Drive every hour.
                </p>
            </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Does Power Automate slow down the PC?",
      answer: "No. It only consumes resources when the flow is running. When idle, it's insignificant."
    },
    {
      question: "Is it safe to download scripts from the internet?",
      answer: "NEVER run a .bat or .ps1 file that you don't understand. They can delete your Windows. Always open with Notepad first to read the code."
    },
    {
      question: "What is the difference between Power Automate 'Desktop' and 'Cloud'?",
      answer: "Desktop (PAD) runs on your machine and controls your local apps. Cloud (Flow) is for businesses, runs on the Microsoft cloud, and integrates with Office 365, SharePoint, etc."
    }
  ];

  const externalReferences = [
    { name: "Power Automate Desktop (Microsoft Store)", url: "https://apps.microsoft.com/store/detail/power-automate/9VF4JDR1L8B0" },
    { name: "AutoHotkey Download", url: "https://www.autohotkey.com/" },
    { name: "PowerShell Gallery", url: "https://www.powershellgallery.com/" },
    { name: "Task Scheduler Documentation", url: "https://learn.microsoft.com/en-us/windows/win32/taskschd/task-scheduler-start-page" }
  ];

  const relatedGuides = [
    {
      href: "/guides/backup-dados",
      title: "Backup Strategy",
      description: "Automate your backups securely."
    },
    {
      href: "/guides/debloat-windows-11-otimizacao-powershell",
      title: "Debloat Windows",
      description: "Scripts to clean up Windows."
    },
    {
      href: "/guides/atalhos-produtividade-windows",
      title: "Keyboard Shortcuts",
      description: "Complement your automation with shortcuts."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="45 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}
