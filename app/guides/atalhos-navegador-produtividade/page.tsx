import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'atalhos-navegador-produtividade',
  title: "Browser Shortcuts: The Complete Productivity Manual 2026",
  description: "Do you still use the mouse to close tabs? Learn the 50+ essential keyboard shortcuts for Chrome, Edge, Brave, and Firefox that will TRIPLE your productivity and save hours of your day.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '35 min'
};

const title = "Browser Shortcuts: The Complete Productivity Manual 2026";
const description = "Do you still use the mouse to close tabs? Learn the 50+ essential keyboard shortcuts for Chrome, Edge, Brave, and Firefox that will TRIPLE your productivity and save hours of your day in 2026. Ultimate guide with secret shortcuts!";
const keywords = [
  'best browser shortcuts chrome 2026',
  'how to reopen closed tab keyboard shortcut',
  'productivity shortcuts edge and brave browser',
  'switch between browser tabs shortcut windows',
  'clear browser cache quick shortcut',
  'secret chrome developer shortcuts tutorial',
  'navigation without mouse chrome edge firefox',
  'ctrl shift t reopen tab chrome edge'
];

export const metadata: Metadata = createGuideMetadata('atalhos-navegador-produtividade', title, description, keywords);

export default function BrowserShortcutsGuide() {
  const summaryTable = [
    { label: "Reopen Last Tab", value: "Ctrl + Shift + T (Lifesaver!)" },
    { label: "New Tab", value: "Ctrl + T" },
    { label: "New Incognito Window", value: "Ctrl + Shift + N" },
    { label: "Close Current Tab", value: "Ctrl + W" },
    { label: "Jump to URL Bar", value: "Ctrl + L" },
    { label: "Search in Page", value: "Ctrl + F" },
    { label: "Switch Tabs", value: "Ctrl + Tab (next) / Ctrl + Shift + Tab (previous)" },
    { label: "Quick Cache Clear", value: "Ctrl + Shift + Delete" }
  ];

  const contentSections = [
    {
      title: "Why Use Browser Shortcuts? The Difference Between a Common User and a Power User",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Every time you take your hand off the keyboard to look for the 'X' icon to close a tab with the mouse, you lose about <strong>2-3 seconds</strong>. Summing this up over a workday/study day (let's assume 50 times/day), you waste <strong>100-150 seconds = 2.5 MINUTES</strong>. In a year, this equates to <strong>15 HOURS LOST</strong> just closing tabs! In 2026, mastering browser shortcuts is what separates a common user from a <strong>Power User</strong>.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Productivity Statistics</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>Users who master keyboard shortcuts are <strong>30-40% faster</strong> in web navigation tasks.</li>
          <li>Stanford University researchers (2024) proved that switching between keyboard and mouse <strong>reduces concentration by 15%</strong>.</li>
          <li>Professional developers, designers, and traders use 90% keyboard / 10% mouse.</li>
        </ul>
      `
    },
    {
      title: "Essential Shortcuts: Tab Management (The Basics You MUST Know)",
      content: `
        <p class="mb-4 text-gray-300">
          Stop getting lost among dozens of open tabs. These shortcuts work in <strong>ALL</strong> Chromium-based browsers (Chrome, Edge, Brave, Opera, Vivaldi).
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">📌 Open, Close, and Reopen Tabs</h4>
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
              <td class="p-3"><code>Ctrl + T</code></td>
              <td class="p-3">Opens a new tab</td>
              <td class="p-3">Instant, without clicking anything</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + W</code></td>
              <td class="p-3">Closes current tab</td>
              <td class="p-3">Clean up tabs quickly</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + Shift + T</code></td>
              <td class="p-3"><strong>Reopens last closed tab</strong></td>
              <td class="p-3 text-emerald-400">👉 THE LIFESAVER! Closed it by accident? Reopen it instantly!</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + Shift + W</code></td>
              <td class="p-3">Closes the ENTIRE window (all tabs)</td>
              <td class="p-3">Close everything at once</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + N</code></td>
              <td class="p-3">Opens a new browser WINDOW</td>
              <td class="p-3">Useful for separating work/personal tasks</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + Shift + N</code></td>
              <td class="p-3">Opens an INCOGNITO window</td>
              <td class="p-3">Instant private browsing</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + Shift + A</code></td>
              <td class="p-3">Search Open Tabs</td>
              <td class="p-3">Find that lost tab among 50 others!</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mt-6">
          <h4 class="text-blue-400 font-bold mb-2">💡 PRO Tip: Ctrl + Shift + T Multiple Times!</h4>
          <p class="text-sm text-gray-300">
            Did you know you can press <code>Ctrl + Shift + T</code> REPEATEDLY to reopen several closed tabs? Chrome/Edge keeps the last <strong>25 closed tabs</strong> from the current session. Accidentally closed 5 tabs? Press it 5 times and they ALL come back!
          </p>
        </div>
      `
    },
    {
      title: "Ninja Navigation: Switch and Jump Between Tabs Without a Mouse",
      content: `
        <h4 class="text-white font-bold mb-3">📱 Navigate Between Tabs (Sequential)</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Ctrl + Tab</code> - Go to NEXT tab (to the right)</li>
          <li><code>Ctrl + Shift + Tab</code> - Back to PREVIOUS tab (to the left)</li>
          <li><code>Ctrl + Page Down</code> - Same as Ctrl + Tab (alternative)</li>
          <li><code>Ctrl + Page Up</code> - Same as Ctrl + Shift + Tab (alternative)</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎯 Jump Directly to a Specific Tab (Ninja Mode)</h4>
        <p class="text-gray-300 mb-3">
          YOU DON'T NEED TO CLICK THE TABS! Use numeric shortcuts:
        </p>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + 1</code></td>
              <td class="p-3">Jump to the FIRST tab</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Ctrl + 2 to 8</code></td>
              <td class="p-3">Jump to the tab at that position (2nd, 3rd, 4th..., 8th)</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Ctrl + 9</code></td>
              <td class="p-3">Jump to the LAST tab (regardless of how many you have)</td>
            </tr>
          </tbody>
        </table>
        
        <div class="bg-emerald-900/10 p-5 rounded-xl border border-emerald-500/20 mt-6">
          <h4 class="text-emerald-400 font-bold mb-2">✅ Practical Example</h4>
          <p class="text-sm text-gray-300">
            Imagine you have 20 tabs open. The first tab is your email, and the last is YouTube. To jump between them INSTANTLY:
          </p>
          <ul class="list-disc list-inside text-xs text-gray-300 ml-6 mt-2 space-y-1">
            <li><code>Ctrl + 1</code> → Email (first tab)</li>
            <li><code>Ctrl + 9</code> → YouTube (last tab)</li>
            <li>Without clicking anything! Zero mouse movement!</li>
          </ul>
        </div>
      `
    },
    {
      title: "Address Bar (URL) and Search Shortcuts",
      content: `
        <h4 class="text-white font-bold mb-3">🔎 Master the Address Bar (Omnibox)</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Ctrl + L</code> or <code>Alt + D</code> or <code>F6</code> - Selects the ENTIRE URL in the address bar. Type and press Enter to navigate.</li>
          <li><code>Ctrl + K</code> - Same effect as Ctrl + L, but focuses on SEARCH (in Chrome/Edge, it's the same thing).</li>
          <li><code>Ctrl + Enter</code> - AUTOMATICALLY adds <strong>www.</strong> before and <strong>.com</strong> after what you typed.
            <ul class="list-disc ml-8 mt-2 text-sm">
              <li>Example: Type "google", press Ctrl + Enter → Goes to www.google.com</li>
            </ul>
          </li>
          <li><code>Shift + Enter</code> - Opens the search result in a NEW TAB.</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔍 Search WITHIN the Current Page</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><code>Ctrl + F</code> - Opens the search box ("Find on page")</li>
          <li><code>Enter</code> or <code>Ctrl + G</code> - Next occurrence</li>
          <li><code>Shift + Enter</code> or <code>Ctrl + Shift + G</code> - Previous occurrence</li>
          <li><code>Esc</code> - Closes the search box</li>
        </ul>
      `
    },
    {
      title: "Page Scrolling Shortcuts (Vertical Navigation)",
      content: `
        <h4 class="text-white font-bold mb-3">📤 Scroll Page Without Mouse (Quick Reading)</h4>
        <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
          <thead class="bg-gray-800">
            <tr>
              <th class="p-3 text-left">Shortcut</th>
              <th class="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Spacebar</code></td>
              <td class="p-3">Scrolls DOWN one full page</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>Shift + Spacebar</code></td>
              <td class="p-3">Scrolls UP one full page</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Home</code></td>
              <td class="p-3">Returns to the TOP of the page</td>
            </tr>
            <tr class="border-t border-gray-700 bg-gray-800/30">
              <td class="p-3"><code>End</code></td>
              <td class="p-3">Jumps to the BOTTOM of the page</td>
            </tr>
            <tr class="border-t border-gray-700">
              <td class="p-3"><code>Arrow Keys ↑ ↓</code></td>
              <td class="p-3">Smooth scrolling line by line</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      title: "Page Reload (Refresh) Shortcuts",
      content: `
        <h4 class="text-white font-bold mb-3">🔄 Refresh Page (Types of Refresh)</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Ctrl + R</code> or <code>F5</code> - NORMAL reload (uses cache if available)</li>
          <li><code>Ctrl + Shift + R</code> or <code>Ctrl + F5</code> or <code>Shift + F5</code> - <strong>Reload CLEARING CACHE</strong> (Hard Refresh)
            <ul class="list-disc ml-8 mt-2 text-sm">
              <li>💡 Use this when the site seems 'stuck' or shows an old version after an update</li>
            </ul>
          </li>
          <li><code>Esc</code> - STOPS loading the page (if it's taking too long)</li>
        </ul>
      `
    },
    {
      title: "Express Cleanup: Cache, Cookies, and History",
      content: `
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mb-6">
          <h4 class="text-amber-400 font-bold mb-2">⚡ Most Useful Privacy Shortcut</h4>
          <p class="text-sm text-gray-300">
            <code>Ctrl + Shift + Delete</code> - Directly opens the \"Clear browsing data\" window. Saves 5-7 clicks through settings menus!
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3">🧹 What You Can Quickly Clean</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>Browsing history</strong> - All sites you've visited</li>
          <li><strong>Cookies and site data</strong> - Saved logins, preferences</li>
          <li><strong>Cached images and files</strong> - Speeds up reloading of repeated sites</li>
          <li><strong>Saved passwords</strong> (be careful!)</li>
          <li><strong>Form data/autofill</strong></li>
        </ul>
        
        <p class="text-gray-300 text-sm mt-6">
          <strong>Tip:</strong> After opening with Ctrl + Shift + Delete, select \"All time\" and check only \"Cached images and files\" to clean up without losing logins.
        </p>
      `
    },
    {
      title: "Advanced Shortcuts: Zoom, Downloads, and Developer Tools",
      content: `
        <h4 class="text-white font-bold mb-3">🔍 Page Zoom</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Ctrl + '+'</code> or <code>Ctrl + '='</code> - Increase page zoom</li>
          <li><code>Ctrl + '-'</code> - Decrease page zoom</li>
          <li><code>Ctrl + 0</code> - Reset zoom to 100% (default)</li>
          <li><code>F11</code> - Full screen (hides toolbars)</li>
          <li><code>Ctrl + Shift + B</code> - Show/Hide Bookmarks Bar</li>
          <li><code>Esc</code> - Exit full screen mode or focus out of an element</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">📥 Downloads and History</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>Ctrl + J</code> - Opens the downloads window</li>
          <li><code>Ctrl + H</code> - Opens browsing history (visited pages)</li>
          <li><code>Ctrl + Shift + T</code> - Reopens recently closed tabs (tab history)</li>
        </ul>
        
        <h4 class="text-white font-bold mb-3 mt-6">🛠️ Developer Tools (DevTools)</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><code>F12</code> or <code>Ctrl + Shift + I</code> - Opens developer tools</li>
          <li><code>Ctrl + Shift + C</code> - Opens tools in inspection mode (selects element)</li>
          <li><code>Ctrl + R</code> - Reloads page (within DevTools)</li>
          <li><code>Ctrl + Shift + R</code> - Reloads clearing cache (within DevTools)</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Internal Architecture of Browser Shortcuts and Input Processing",
      content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              Behind every keyboard shortcut lies a complex chain of processing involving the operating system, the browser, and the rendering engines. Understanding this architecture helps clarify why certain shortcuts work consistently across different Chromium-based browsers.
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">Shortcuts Processing Pipeline</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h5 class="text-blue-400 font-bold mb-3">1. Input Capture</h5>
                <p class="text-gray-300 text-sm mb-3">Detection of key combinations:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Keyboard sends scan codes to the OS</li>
                  <li>OS converts them to virtual key codes</li>
                  <li>Browser registers key pressed events</li>
                  <li>Check for modifiers (Ctrl, Shift, Alt)</li>
                </ul>
              </div>
              <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h5 class="text-purple-400 font-bold mb-3">2. Event Dispatch</h5>
                <p class="text-gray-300 text-sm mb-3">Distributing the event to the correct handler:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Verification against the list of known shortcuts</li>
                  <li>Prevention of default events (default prevention)</li>
                  <li>Triggering of specific actions</li>
                  <li>Update of the user interface</li>
                </ul>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Shortcut Mapping Structure</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-xs text-gray-300 border border-gray-700 rounded-lg overflow-hidden">
                <thead class="bg-gray-800">
                  <tr>
                    <th class="p-2 text-left">Shortcut</th>
                    <th class="p-2 text-left">KeyCode</th>
                    <th class="p-2 text-left">Modifiers</th>
                    <th class="p-2 text-left">Action</th>
                    <th class="p-2 text-left">Context</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-700">
                    <td class="p-2">Ctrl + T</td>
                    <td class="p-2">84 (T)</td>
                    <td class="p-2">Ctrl</td>
                    <td class="p-2">New tab</td>
                    <td class="p-2">Browser Window</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-2">Ctrl + W</td>
                    <td class="p-2">87 (W)</td>
                    <td class="p-2">Ctrl</td>
                    <td class="p-2">Close tab</td>
                    <td class="p-2">Tab Context</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-2">Ctrl + L</td>
                    <td class="p-2">76 (L)</td>
                    <td class="p-2">Ctrl</td>
                    <td class="p-2">Focus URL</td>
                    <td class="p-2">Address Bar</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-2">Ctrl + F</td>
                    <td class="p-2">70 (F)</td>
                    <td class="p-2">Ctrl</td>
                    <td class="p-2">Search page</td>
                    <td class="p-2">Find Bar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Priority and Conflict System</h4>
            <p class="mb-4 text-gray-300">
              The browser implements a hierarchical priority system to resolve shortcut conflicts:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Browser Level:</strong> Browser shortcuts have priority over web pages</li>
              <li><strong>Extension Level:</strong> Extensions can intercept shortcuts before the browser</li>
              <li><strong>Page Level:</strong> Web pages can define their own shortcuts</li>
              <li><strong>OS Level:</strong> Operating system shortcuts can interfere</li>
            </ul>
            `
    },
    {
      title: "Advanced Navigation and Automation Techniques",
      content: `
            <p class="mb-6 text-gray-300 leading-relaxed">
              In addition to basic shortcuts, there are advanced techniques that can radically transform your web productivity. These techniques combine keyboard shortcuts with specific browser features to create highly efficient workflows.
            </p>
            
            <h4 class="text-white font-bold mb-3 mt-6">Advanced Navigation Workflows</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div class="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-5 rounded-xl border border-cyan-500/30">
                <h5 class="text-cyan-400 font-bold mb-3">Research Workflow</h5>
                <p class="text-gray-300 text-sm mb-3">For researchers and students:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>Ctrl + T → Type term → Enter (new search)</li>
                  <li>Ctrl + Shift + T → Reopen relevant results</li>
                  <li>Ctrl + Click → Open in background tab</li>
                  <li>Ctrl + Shift + V → Paste without formatting</li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-5 rounded-xl border border-emerald-500/30">
                <h5 class="text-emerald-400 font-bold mb-3">Development Workflow</h5>
                <p class="text-gray-300 text-sm mb-3">For developers and testers:</p>
                <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
                  <li>F12 → Ctrl + Shift + C → Inspect element</li>
                  <li>Ctrl + Shift + R → Hard refresh with clear cache</li>
                  <li>Ctrl + Shift + I → Open DevTools</li>
                  <li>Ctrl + [ / ] → Navigate DevTools history</li>
                </ul>
              </div>
            </div>
            
            <h4 class="text-white font-bold mb-3 mt-6">Keyboard-Only Navigation Techniques</h4>
            <p class="mb-4 text-gray-300">
              For advanced users who wish to minimize mouse usage:
            </p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
                <thead class="bg-gray-800">
                  <tr>
                    <th class="p-3 text-left">Technique</th>
                    <th class="p-3 text-left">Combination</th>
                    <th class="p-3 text-left">Description</th>
                    <th class="p-3 text-left">Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-700">
                    <td class="p-3">Vimium/Firefox Keys</td>
                    <td class="p-3">f + [letters]</td>
                    <td class="p-3">Click links via keyboard</td>
                    <td class="p-3">Mouse-free navigation</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-3">Quick Tab Switching</td>
                    <td class="p-3">Ctrl + Tab (continuous)</td>
                    <td class="p-3">Navigate tabs quickly</td>
                    <td class="p-3">Efficient multitasking</td>
                  </tr>
                  <tr class="border-t border-gray-700">
                    <td class="p-3">History Navigation</td>
                    <td class="p-3">Alt + ← / →</td>
                    <td class="p-3">Back/forward in history</td>
                    <td class="p-3">Linear navigation</td>
                  </tr>
                  <tr class="border-t border-gray-700 bg-gray-800/30">
                    <td class="p-3">Focus Management</td>
                    <td class="p-3">Tab / Shift + Tab</td>
                    <td class="p-3">Navigate between elements</td>
                    <td class="p-3">Accessibility</td>
                  </tr>
                </tbody>
              </table>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "History and Evolution of Browser Shortcuts",
      content: `
        <p class="mb-4 text-gray-300">The evolution of browser shortcuts has followed the development of the web from the first graphical browsers to today's powerful modern engines. Each shortcut was meticulously designed to optimize user experience and increase productivity.</p>
        
        <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/30 my-6">
          <h4 class="text-xl font-bold text-purple-300 mb-4">Timeline of Shortcuts Evolution</h4>
          
          <div class="space-y-4">
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">1990</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">WorldWideWeb</h5>
                <p class="text-gray-300 text-sm">First browser with basic shortcuts like Ctrl+L to go to the address bar.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">1993</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">Mosaic</h5>
                <p class="text-gray-300 text-sm">Introduced shortcuts for page navigation and reloading.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">1994</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">Netscape Navigator</h5>
                <p class="text-gray-300 text-sm">Standardized many of the shortcuts we use today, like Ctrl+T for new tab.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">1995</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">Internet Explorer</h5>
                <p class="text-gray-300 text-sm">Expanded the set of shortcuts to include more interface functions.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">2008</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">Google Chrome</h5>
                <p class="text-gray-300 text-sm">Revolutionized tab management with more sophisticated shortcuts and extension integration.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white font-bold text-sm">2026</span>
              </div>
              <div class="flex-1">
                <h5 class="font-bold text-white">Modern Browsers</h5>
                <p class="text-gray-300 text-sm">Adaptive and customizable shortcuts based on user behavior.</p>
              </div>
            </div>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">Consistency Patterns</h4>
        <p class="mb-4 text-gray-300">Despite the evolution, many shortcuts remained consistent across browsers:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h5 class="font-bold text-green-400 mb-2">Ctrl+T</h5>
            <p class="text-sm text-gray-300">Consistent since Netscape Navigator for opening a new tab.</p>
          </div>
          
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h5 class="font-bold text-green-400 mb-2">Ctrl+W</h5>
            <p class="text-sm text-gray-300">Universal standard for closing the current tab since the 90s.</p>
          </div>
          
          <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
            <h5 class="font-bold text-green-400 mb-2">Ctrl+L</h5>
            <p class="text-sm text-gray-300">Address bar focus, maintained for over 30 years.</p>
          </div>
        </div>
      `
    },
    {
      title: "Ergonomics and Efficiency Analysis of Shortcuts",
      content: `
        <p class="mb-4 text-gray-300">The choice of key combinations for shortcuts is not random. Each combination was carefully designed to maximize efficiency and minimize the user's physical effort.</p>
        
        <h4 class="text-white font-bold mb-3 mt-6">Shortcut Design Principles</h4>
        <p class="mb-4 text-gray-300">There are several core principles that guide the creation of efficient shortcuts:</p>
        
        <div class="space-y-4">
          <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h5 class="font-bold text-red-400 mb-2">Memorability</h5>
            <p class="text-gray-300 text-sm">The keys used generally associate with the function:</p>
            <ul class="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
              <li>T (Tab) for opening a new tab: Ctrl+T</li>
              <li>W (Window/Close) for closing a tab: Ctrl+W</li>
              <li>L (Location) for going to the address bar: Ctrl+L</li>
              <li>F (Find) for searching within the page: Ctrl+F</li>
            </ul>
          </div>
          
          <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h5 class="font-bold text-red-400 mb-2">Physical Accessibility</h5>
            <p class="text-gray-300 text-sm">Combinations are designed to be reached easily:</p>
            <ul class="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
              <li>Modifiers (Ctrl, Alt, Shift) are easy-to-press keys</li>
              <li>Primary letters are usually in the central position of the keyboard</li>
              <li>Avoids combinations that require extreme hand movements</li>
            </ul>
          </div>
          
          <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h5 class="font-bold text-red-400 mb-2">Cross-App Consistency</h5>
            <p class="text-gray-300 text-sm">Maintains similar patterns across different software:</p>
            <ul class="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
              <li>Ctrl+C to copy in all applications</li>
              <li>Ctrl+V to paste in all applications</li>
              <li>Ctrl+Z to undo in all applications</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">Shortcuts Efficiency Metrics</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Shortcut</th>
                <th class="p-3 text-left">Execution Time</th>
                <th class="p-3 text-left">Required Movement</th>
                <th class="p-3 text-left">Average Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Ctrl+T</strong></td>
                <td class="p-3">~0.5s</td>
                <td class="p-3">Minimum (hands in default position)</td>
                <td class="p-3 text-emerald-400">+3s vs button click (+600%)</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Ctrl+W</strong></td>
                <td class="p-3">~0.5s</td>
                <td class="p-3">Minimum (hands in default position)</td>
                <td class="p-3 text-emerald-400">+2.5s vs closing tab with X (+500%)</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3"><strong>Ctrl+L</strong></td>
                <td class="p-3">~0.4s</td>
                <td class="p-3">Minimum (hands in default position)</td>
                <td class="p-3 text-emerald-400">+2s vs address bar click (+500%)</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3"><strong>Ctrl+Shift+T</strong></td>
                <td class="p-3">~0.6s</td>
                <td class="p-3">Minimum (hands in default position)</td>
                <td class="p-3 text-emerald-400">+4s vs navigation history (+660%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Are shortcuts the same in all browsers?",
      answer: "Most are identical in browsers based on Chromium (Chrome, Edge, Brave, Opera, Vivaldi). Some specific shortcuts may vary in Firefox or Safari, but the basics (Ctrl+T, Ctrl+W, Ctrl+L) are universal."
    },
    {
      question: "Can I customize browser shortcuts?",
      answer: "Native support for customization is limited. However, you can use extensions like 'Shortkeys' or 'Vimium' to create completely personalized shortcuts and even simulate mouse clicks via the keyboard."
    },
    {
      question: "I use a Mac. What changes?",
      answer: "Basically, replace <strong>Ctrl</strong> with <strong>Command (⌘)</strong>. For example, Ctrl+T becomes ⌘+T. The exception is the DevTools (F12) which on Mac is usually ⌘+Option+I."
    }
  ];

  const externalReferences = [
    { name: "Official Chrome Shortcuts List", url: "https://support.google.com/chrome/answer/157179" },
    { name: "Vimium - Navigate with Keyboard", url: "https://vimium.github.io/" }
  ];

  const relatedGuides = [
    {
      href: "/guias/atalhos-produtividade-windows",
      title: "Windows Shortcuts",
      description: "Shortcuts for the OS itself."
    },
    {
      href: "/guias/otimizacao-chrome-memoria-ram",
      title: "Chrome Optimization",
      description: "Make your browser faster."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="35 min"
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
