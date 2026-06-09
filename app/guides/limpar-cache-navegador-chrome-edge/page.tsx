import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'limpar-cache-navegador-chrome-edge',
  title: "How to Clear Browser Cache (Chrome, Edge and Firefox)",
  description: "Are your websites taking too long to load or showing errors? Learn how to clear the cache and cookies from your browser to browse faster.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '5 min'
};

const title = "How to Clear Browser Cache (Chrome, Edge and Firefox)";
const description = "Are your websites taking too long to load or showing errors? Learn how to clear the cache and cookies from your browser to browse faster.";
const keywords = [
    'how to clear chrome cache pc tutorial 2026',
    'delete cookies and cache microsoft edge windows 11',
    'clear firefox browsing data step by step',
    'keyboard shortcut clear browser cache windows',
    'browser slow how to fix cache cleanup'
];

export const metadata: Metadata = createGuideMetadata('limpar-cache-navegador-chrome-edge', title, description, keywords);

export default function BrowserCacheGuide() {
    const summaryTable = [
        { label: "Universal Shortcut", value: "Ctrl + Shift + Del" },
        { label: "What to clear", value: "Cached images and files" },
        { label: "Caution", value: "Clearing Cookies will log you out of accounts" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why clear the Cache?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The **Cache** is like a "short-term memory" for your browser. It stores website logos and images so you don't have to re-download everything each time you open a page. The problem is that these files can become old (corrupted), making sites like Facebook, YouTube, or Gmail freeze or open with visual errors.
        </p>
      `
        },
        {
            title: "1. The Magic Shortcut (Universal Shortcut)",
            content: `
        <p class="mb-4 text-gray-300">No matter if you use Chrome, Edge, Brave or Firefox, the command is the same:</p>
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 text-center">
            <kbd class="px-3 py-2 bg-gray-800 rounded border border-gray-600 text-white font-bold">Ctrl</kbd> + 
            <kbd class="px-3 py-2 bg-gray-800 rounded border border-gray-600 text-white font-bold">Shift</kbd> + 
            <kbd class="px-3 py-2 bg-gray-800 rounded border border-gray-600 text-white font-bold">Del</kbd>
        </div>
        <p class="mt-4 text-sm text-gray-300">
            Pressing these three keys together will instantly open the 'Clear browsing data' window.
        </p>
      `
        },
        {
            title: "2. What to check when clearing?",
            content: `
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Time range:</strong> We recommend 'All time'.</li>
            <li><strong>Cached images and files:</strong> CHECK (This clears visual clutter).</li>
            <li><strong>Cookies and other site data:</strong> OPTIONAL (Remember: if you check this, you will need to re-enter your password on all sites).</li>
            <li><strong>Browsing history:</strong> Only check if you want to hide the sites you visited. It doesn't affect speed.</li>
        </ul>
      `
        },
        {
            title: "3. Hard Reload",
            content: `
        <p class="mb-4 text-gray-300">
            If only ONE specific site is showing errors, you don't need to clear the entire cache. 
            <br/>With the site open, hold the <strong>Ctrl</strong> key and click the <strong>Reload (Refresh)</strong> button. Or press <strong>Ctrl + F5</strong>. This forces the browser to ignore the cache and download everything fresh just for that site.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atalhos-navegador-produtividade",
            title: "Browser Shortcuts",
            description: "Learn to browse like a pro."
        },
        {
            href: "/guides/como-limpar-cache-dns-ip-flushdns",
            title: "Flush DNS",
            description: "If the site still won't open, the issue might be DNS."
        },
        {
            href: "/guides/limpeza-disco-profunda-arquivos-temporarios",
            title: "Disk Cleanup",
            description: "Clear temporary files from all of Windows."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="5 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


