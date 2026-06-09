import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'atalhos-produtividade-windows',
  title: "Windows Shortcuts: The Complete Productivity Manual 2026",
  description: "Master Windows 11 with 60+ of the most useful keyboard shortcuts for productivity. Learn to manage windows, virtual desktops, hidden tools, and more.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '60 min'
};

const title = "Windows Shortcuts: The Complete Productivity Manual 2026";
const description = "Master Windows 11 with 60+ of the most useful keyboard shortcuts for productivity. Learn to manage windows, virtual desktops, hidden tools, and secret shortcuts that will triple your speed within the system in 2026.";
const keywords = [
  'best windows 11 productivity shortcuts 2026',
  'how to use windows snap layout shortcuts',
  'windows keyboard shortcuts to open task manager',
  'switch between virtual desktops shortcut',
  'shortcut command to take a screenshot windows',
  'windows developer tools shortcuts',
  'secret windows 11 explorer shortcuts',
  'win tab switch windows shortcut windows'
];

export const metadata: Metadata = createGuideMetadata('atalhos-produtividade-windows', title, description, keywords);

export default function WindowsShortcutsGuide() {
  const summaryTable = [
    { label: "Switch Window", value: "Alt + Tab (standard) or Win + Tab (advanced)" },
    { label: "Open Explorer", value: "Win + E" },
    { label: "Lock PC", value: "Win + L" },
    { label: "Screenshot", value: "Win + Shift + S (Snip & Sketch)" },
    { label: "Virtual Desktop", value: "Ctrl + Win + D" },
    { label: "Switch Desktops", value: "Ctrl + Win + Arrows" },
    { label: "Task Manager", value: "Ctrl + Shift + Esc" },
    { label: "Show Desktop", value: "Win + D" }
  ];

  const contentSections = [
    {
      title: "Why Use Windows Shortcuts? The Difference Between a Common User and a Power User",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Using keyboard shortcuts in Windows is like having a superpower to navigate the system. Every time you take your hand off the keyboard to use the mouse, you lose <strong>2-3 seconds</strong> of productivity. In an 8-hour workday, this adds up to <strong>dozens of minutes lost</strong> just on unnecessary movements. In 2026, mastering Windows shortcuts is essential for developers, designers, traders, gamers, and anyone who wants to <strong>triple their navigation speed</strong>.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Productivity Statistics</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Users who master keyboard shortcuts are <strong>40-60% faster</strong> in daily Windows tasks.</li>
          <li>Microsoft researchers proved that switching between keyboard and mouse <strong>reduces focus by 15%</strong>.</li>
          <li>IT professionals, developers, and designers use <strong>90% keyboard / 10% mouse</strong>.</li>
        </ul>
      `
    },
    {
      title: "Basic Shortcuts: The Start of Your Productivity Journey",
      content: `
        <p class="mb-4 text-gray-300">
          These are the fundamental shortcuts YOU MUST master before any others. They work on ANY version of Windows (7, 8, 10, 11).
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔄 Basic Navigation Shortcuts</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
              <th class="p-3 text-left">Practical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win</code></td>
              <td class="p-3">Opens Start menu</td>
              <td class="p-3">Press and release to open the menu</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + D</code></td>
              <td class="p-3">Show desktop (minimizes everything)</td>
              <td class="p-3">Quickly return to the desktop</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + L</code></td>
              <td class="p-3">Lock computer</td>
              <td class="p-3">Safely leave your PC quickly</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + E</code></td>
              <td class="p-3">Open File Explorer</td>
              <td class="p-3">Quick access to the file system</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + R</code></td>
              <td class="p-3">Run dialog</td>
              <td class="p-3">Type commands like 'cmd', 'mspaint', 'notepad'</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + I</code></td>
              <td class="p-3">Open Settings</td>
              <td class="p-3">Replacement for the Control Panel</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mt-6">
          <h4 class="text-blue-400 font-bold mb-2">💡 PRO Tip: Win + R is your Command Portal!</h4>
          <p class="text-sm text-gray-300">
            Use <code>Win + R</code> to quickly open any program or tool. Examples: <code>cmd</code> (Command Prompt), <code>mspaint</code> (Paint), <code>notepad</code> (Notepad), <code>calc</code> (Calculator), <code>msconfig</code> (System Configuration).
          </p>
        </div>
      `
    },
    {
      title: "Window Organization: Snap Layouts and Smart Management",
      content: `
        <p class="mb-4 text-gray-300">
          Stop resizing windows manually! Windows 11 introduced Snap Layouts, allowing you to organize windows automatically with keyboard shortcuts.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📏 Window Organization Shortcuts (Windows 11)</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
              <th class="p-3 text-left">Resulting Layout</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Left/Right Arrows</code></td>
              <td class="p-3">"Snaps" window to half the screen</td>
              <td class="p-3">Window occupies 50% of the screen (left or right)</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + Up/Down Arrows</code></td>
              <td class="p-3">Maximize/minimize or vertical resize</td>
              <td class="p-3">Win+Up = maximize, Win+Down = restore or minimize</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Z</code></td>
              <td class="p-3">Open Snap Layouts menu</td>
              <td class="p-3">Choose from 2, 3, or 4-window layouts</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + Arrow + Up</code></td>
              <td class="p-3">Maximize window in Snap mode</td>
              <td class="p-3">Window occupies 100% of the screen (fullscreen mode)</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Arrow + Down</code></td>
              <td class="p-3">Minimize window</td>
              <td class="p-3">Sends window to the taskbar</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ Practical Example: Working with 2 Apps</h4>
          <p class="text-sm text-gray-300">
            Imagine you want Excel on the left half and a browser on the right half:
          </p>
          <ul class="list-disc list-inside text-xs text-gray-300 ml-6 mt-2 space-y-1">
            <li>Open Excel → Press <code>Win + Left Arrow</code> → Excel takes left half</li>
            <li>Open browser → Press <code>Win + Right Arrow</code> → Browser takes right half</li>
            <li>No mouse needed! All via keyboard!</li>
          </ul>
        </div>
      `
    },
    {
      title: "Window Switching: Changing Apps Quickly",
      content: `
        <h4 class="text-white font-bold mb-3">🔄 Switch Between Open Windows</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Alt + Tab</code> - Shows thumbnails of open windows (classic mode)</li>
          <li><code>Win + Tab</code> - Opens Task View with full-size previews of windows</li>
          <li><code>Win + T</code> - Cycle through taskbar icons (Windows 11)</li>
          <li><code>Win + 1 to 9</code> - Open/Focus the app at that position on the taskbar</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎯 Advanced Switching Shortcuts</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Alt + \`</code> (grave accent)</td>
              <td class="p-3">Switch between windows of the same app (e.g., Chrome windows)</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + Alt + Tab</code></td>
              <td class="p-3">Keep Task Switcher open while navigating</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Shift + Left/Right Arrows</code></td>
              <td class="p-3">Move window to an adjacent monitor</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Virtual Desktops: Multiplying Your Workspace",
      content: `
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mb-6">
          <h4 class="text-amber-400 font-bold mb-2">✨ Powerful Windows 11 Feature</h4>
          <p class="text-sm text-gray-300">
            Virtual Desktops let you create multiple \"desktops\" to organize different tasks. Example: Desktop 1 for work, Desktop 2 for communications (Slack, Teams, Discord), Desktop 3 for entertainment.
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">📱 Manage Virtual Desktops</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + Win + D</code></td>
              <td class="p-3">Create new virtual desktop</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + Win + F4</code></td>
              <td class="p-3">Close current virtual desktop</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + Win + Left/Right Arrows</code></td>
              <td class="p-3">Switch between virtual desktops</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + Tab</code></td>
              <td class="p-3">View all open virtual desktops</td>
            </tr>
          </tbody>
        </table>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎯 Tips for Effective Desktop Usage</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Create an area for each project or task type</li>
          <li>Move windows between areas with <code>Win + Tab</code> → Right-click window → \"Move to desktop\"</li>
          <li>Use custom names for desktops (Right-click desktop in Win+Tab → Rename)</li>
          <li>Set fast shortcuts for each specific area (Win + Ctrl + 1, 2, 3...)</li>
        </ul>
      `
    },
    {
      title: "System Tools: Quick Access to Important Utilities",
      content: `
        <h4 class="text-white font-bold mb-3">🛠️ System Tools Shortcuts</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Tool</th>
              <th class="p-3 text-left">Practical Use</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + Shift + Esc</code></td>
              <td class="p-3">Task Manager</td>
              <td class="p-3">Direct access without passing through Ctrl+Alt+Del</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + X</code></td>
              <td class="p-3">Quick Link Menu</td>
              <td class="p-3">Terminal, Device Manager, PowerShell</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Pause</code></td>
              <td class="p-3">System Properties</td>
              <td class="p-3">View PC info and advanced settings</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + R</code> → <code>msconfig</code></td>
              <td class="p-3">System Configuration</td>
              <td class="p-3">Configure startup and system services</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + R</code> → <code>dxdiag</code></td>
              <td class="p-3">DirectX Diagnostic Tool</td>
              <td class="p-3">Hardware info (GPU, CPU, RAM)</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + R</code> → <code>perfmon</code></td>
              <td class="p-3">Performance Monitor</td>
              <td class="p-3">Real-time CPU, RAM, and Disk usage</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Screenshots and Annotations: Documenting Everything Quickly",
      content: `
        <h4 class="text-white font-bold mb-3">📸 Screenshot Shortcuts</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
              <th class="p-3 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + Shift + S</code></td>
              <td class="p-3">Snip & Sketch (custom capture)</td>
              <td class="p-3">Select area, window, or entire screen</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + Print Screen</code></td>
              <td class="p-3">Capture entire screen</td>
              <td class="p-3">Image saved in 'Screenshots' folder</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Alt + Print Screen</code></td>
              <td class="p-3">Capture active window</td>
              <td class="p-3">Saves to clipboard</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + G</code></td>
              <td class="p-3">Xbox Game Bar</td>
              <td class="p-3">Record video and take game screenshots</td>
            </tr>
          </tbody>
        </table>
        
        <h4 class="text-white font-bold mb-3 mt-6">✏️ Quick Annotation Shortcuts</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Win + Shift + N</code> - Open Sticky Notes (if installed)</li>
          <li><code>Win + V</code> - Open Clipboard History</li>
          <li><code>Win + . (period)</code> - Open Emoji and Symbol Picker</li>
          <li><code>Win + ; (semicolon)</code> - Open Emoji Picker (same as Win+.)</li>
        </ul>
      `
    },
    {
      title: "Advanced Shortcuts: For Professionals and Developers",
      content: `
        <h4 class="text-white font-bold mb-3">🔐 Security and Admin Shortcuts</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + U</code></td>
              <td class="p-3">Ease of Access Center</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + Ctrl + Shift + B</code></td>
              <td class="p-3">Quickly restart video drivers</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Win + H</code></td>
              <td class="p-3">Share current content (Windows 11)</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Win + K</code></td>
              <td class="p-3">Connect to devices (Bluetooth, Cast)</td>
            </tr>
          </tbody>
        </table>
        
        <h4 class="text-white font-bold mb-3 mt-6">💻 Developer Tools</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Win + R</code> → <code>cmd</code> - Command Prompt</li>
          <li><code>Win + R</code> → <code>powershell</code> - PowerShell</li>
          <li><code>Win + R</code> → <code>devmgmt.msc</code> - Device Manager</li>
          <li><code>Win + R</code> → <code>services.msc</code> - Windows Services</li>
          <li><code>Win + R</code> → <code>regedit</code> - Registry Editor</li>
          <li><code>Win + X</code> → Terminal (Admin) - Quick elevated terminal access</li>
        </ul>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Shortcuts for Programmers and Developers",
      content: `
        <h4 class="text-white font-bold mb-3">💻 Specialized Shortcuts for Programmers</h4>
        <p class="mb-4 text-gray-300">
          Developers can significantly increase productivity with shortcuts for common coding tasks:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Shortcut/Command</th>
                <th class="p-3 text-left">Description</th>
                <th class="p-3 text-left">Application</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3"><code>Win + R</code> → <code>cmd</code></td>
                <td class="p-3">Command Prompt as Administrator</td>
                <td class="p-3">OS Command Execution</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><code>Win + R</code> → <code>powershell</code></td>
                <td class="p-3">PowerShell as Administrator</td>
                <td class="p-3">Scripts and advanced automation</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><code>Win + R</code> → <code>wt</code></td>
                <td class="p-3">Windows Terminal</td>
                <td class="p-3">Modern terminal environment</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><code>Win + R</code> → <code>code</code></td>
                <td class="p-3">Visual Studio Code</td>
                <td class="p-3">Popular code editor</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><code>Win + R</code> → <code>devenv</code></td>
                <td class="p-3">Visual Studio IDE</td>
                <td class="p-3">Full development IDE</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><code>Win + R</code> → <code>git-bash</code></td>
                <td class="p-3">Git Bash</td>
                <td class="p-3">Git terminal for version control</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Shortcuts for Dev Environments</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-purple-900/10 p-4 rounded-lg border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">Dev Tools</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li><code>Win + R</code> → <code>vscode</code> → open VS Code</li>
              <li><code>Win + R</code> → <code>idea</code> → open IntelliJ</li>
              <li><code>Win + R</code> → <code>notepad++</code> → open Notepad++</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-4 rounded-lg border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-2">Execution Environments</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li><code>Win + R</code> → <code>node</code> → Node.js REPL</li>
              <li><code>Win + R</code> → <code>python</code> → Python REPL</li>
              <li><code>Win + R</code> → <code>docker</code> → Docker CLI</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "Shortcuts for Designers and Content Creators",
      content: `
        <h4 class="text-white font-bold mb-3">🎨 Shortcuts for Creative Professionals</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Shortcut/Command</th>
                <th class="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3"><code>Win + R</code> → <code>photoshop</code></td>
                <td class="p-3">Adobe Photoshop</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><code>Win + R</code> → <code>premiere</code></td>
                <td class="p-3">Adobe Premiere Pro</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><code>Win + R</code> → <code>blender</code></td>
                <td class="p-3">Blender 3D</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 class="text-white font-bold mb-3 mt-6">📸 Capture and Editing Tools</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-2">Screenshots</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li><code>Win + Shift + S</code> → Snip & Sketch</li>
              <li><code>Win + Print Screen</code> → Full screen</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-4 rounded-lg border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-2">Recording</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li><code>Win + Alt + R</code> → Start/stop recording</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-4 rounded-lg border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">Editing</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li><code>Win + R</code> → <code>mspaint</code> → Paint</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Windows Shortcuts Architecture: System Components and Integration",
      content: `
        <h4 class="text-white font-bold mb-3">⚙️ System Components Involved</h4>
        <p class="mb-4 text-gray-300">
          Keyboard shortcuts in Windows are managed by several system components working together to intercept and process input events.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="bg-blue-900/10 p-4 rounded-lg border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-2">Input Processing Stack</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• Raw Input API</li>
              <li>• HID Manager</li>
              <li>• Message Queue</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-4 rounded-lg border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">Hook Architecture</h5>
            <ul class="text-sm text-gray-300 space-y-1">
              <li>• WH_KEYBOARD_LL Hook</li>
              <li>• Global Hotkey Registration</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Do these Windows shortcuts work in all versions?",
      answer: "Basic shortcuts like Win+E (Explorer), Win+L (Lock), Alt+Tab, and Win+R (Run) have worked since Windows 7. Specific Windows 11 shortcuts like Win+Z (Snap Layouts) do not work on earlier versions."
    },
    {
      question: "How can I learn shortcuts quickly?",
      answer: "Start with the 5 most used. Practice daily for 1-2 weeks until they become habit. Then add 2-3 more each week."
    },
    {
      question: "Are there shortcuts to control volume and brightness?",
      answer: "Yes! Use Function keys (F1-F12) combined with Fn on laptops. On Windows 10/11, Win+A opens the Action Center for quick volume/brightness control."
    },
    {
      question: "Win+Tab vs Alt+Tab - What's the difference?",
      answer: "Alt+Tab shows thumbnails of windows. Win+Tab opens Task View with larger previews and virtual desktops."
    },
    {
      question: "How do I move windows between monitors?",
      answer: "Use Win+Shift+Left/Right Arrows to move the active window between connected monitors."
    }
  ];

  const externalReferences = [
    { name: "Official Windows Shortcuts", url: "https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9746-c5bba2a4028b" },
    { name: "PowerToys - Custom Shortcuts", url: "https://github.com/microsoft/PowerToys" }
  ];

  const relatedGuides = [
    {
      href: "/guides/atalhos-navegador-produtividade",
      title: "Browser Shortcuts",
      description: "Combine with Windows shortcuts."
    },
    {
      href: "/guides/otimizacao-performance",
      title: "System Optimization",
      description: "Make your system more responsive."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="60 min"
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

