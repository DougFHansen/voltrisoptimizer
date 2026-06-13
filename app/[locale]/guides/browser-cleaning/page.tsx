import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'limpeza-navegadores',
  title: "How to Clear Browser Cache and Data (Chrome, Edge, Firefox)",
  description: "Is your browser slow or are websites not loading correctly? Learn how to clear cache and cookies without losing your saved passwords.",
  category: 'software',
  difficulty: 'Beginner',
  time: '5 min'
};

const title = "How to Clear Browser Cache and Data (Chrome, Edge, Firefox)";
const description = "Is your browser slow or are websites not loading correctly? Learn how to clear cache and cookies without losing your saved passwords.";
const keywords = [
  'clear chrome cache 2026',
  'how to clear edge cookies',
  'slow browser fix',
  'clear browser history pc',
  'deep clean firefox'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('limpeza-navegadores', title, description, keywords, locale);
}

export default function BrowserCleanGuide() {
  const summaryTable = [
    { label: "Universal Shortcut", value: "Ctrl + Shift + Del" },
    { label: "Frequency", value: "Monthly" },
    { label: "Goal", value: "Speed and Fixing website bugs" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "What is Cache and Why Does it Age?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Cache is your browser's local memory. It stores logos, images, and code from websites you visit frequently so they open faster the next time. 
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          The problem is that websites change versions. If you have the cache for version \"A\" but the website has updated to version \"B,\" the conflict can cause the browser to lag or prevent menus and buttons from loading correctly.
        </p>
      `
    },
    {
      title: "The Magic Shortcut (Ctrl + Shift + Del)",
      content: `
        <p class="mb-4 text-gray-300">This shortcut works in <strong>Chrome, Edge, Brave, and Firefox</strong>.</p>
        <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 class="text-white font-bold mb-4">What to Check:</h4>
            <ul class="space-y-3 text-gray-300">
                <li>✅ <strong>Cached images and files:</strong> You can check this without hesitation.</li>
                <li>✅ <strong>Cookies and other site data:</strong> Check this if you want to log out of all sites (helps resolve login errors).</li>
                <li>❌ <strong>Passwords and other autofill data:</strong> <strong>DO NOT CHECK</strong> unless you have your passwords saved elsewhere.</li>
            </ul>
        </div>
      `
    },
    {
      title: "Extension Cleanup (Browser Bloatware)",
      content: `
        <p class="mb-4 text-gray-300">
            Often, the slowness isn't caused by the cache, but by the 10 extensions you installed and never used again.
        </p>
        <p class="text-gray-300">
            Type <code>chrome://extensions/</code> in the address bar of Chrome or Edge and remove anything suspicious or unnecessary. Free VPN extensions and translators are often the biggest culprits for performance drops.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/atalhos-navegador-produtividade",
      title: "Chrome Shortcuts",
      description: "Browse like a pro."
    },
    {
      href: "/guides/extensoes-produtividade-chrome",
      title: "Best Extensions",
      description: "Which extensions are actually worth keeping."
    },
    {
      href: "/guides/otimizacao-performance",
      title: "Optimize PC",
      description: "Improve Windows response time to assist your browser."
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

