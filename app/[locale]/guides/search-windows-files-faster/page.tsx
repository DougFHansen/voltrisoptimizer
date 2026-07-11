import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pesquisar-arquivos-windows-mais-rapido',
  title: "How to Search Files in Windows Faster (2026)",
  description: "Is Windows 11 search slow? Learn how to use Everything and optimize indexing to find any file instantly in 2026.",
  category: 'software',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "How to Search Files in Windows Faster (2026)";
const description = "Is Windows 11 search slow? Learn how to use Everything and optimize indexing to find any file instantly in 2026.";
const keywords = [
    'search files windows fast tutorial 2026',
    'windows 11 search alternative everything guide',
    'how to optimize windows 11 file indexing',
    'find files by extension cmd windows tutorial',
    'windows search not working how to fix 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('pesquisar-arquivos-windows-mais-rapido', title, description, keywords, locale);
}

export default function FileSearchGuide() {
    const summaryTable = [
        { label: "Recommended Tool", value: "Everything (voidtools)" },
        { label: "Everything Speed", value: "Instant (Milliseconds)" },
        { label: "Native Search", value: "Slow (Consumes CPU and SSD)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why is Windows Search So Bad?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In Windows 11, the search bar isn't just for finding your files; it tries to search the internet (Bing), load ads, and news, all at the same time. In 2026, this makes the simple task of finding a PDF a slow and annoying process. Fortunately, there are ways to bypass this heavy system and have professional search capabilities.
        </p>
      `
        },
        {
            title: "1. Everything: The Gold Standard of Search",
            content: `
        <p class="mb-4 text-gray-300">If you deal with many files, <strong>Everything</strong> is a must-have:</p>
        <p class="text-sm text-gray-300">
            Unlike Windows, Everything reads the Master File Table (MFT) of your SSD in seconds. This allows you to type just 'report' and see all files with that name appear **instantly**. <br/><br/>
            <strong>Pro Tip:</strong> You can use powerful filters like <code>*.jpg</code> to see only images, or <code>size:>500mb</code> to find giant files that are stealing space.
        </p>
      `
        },
        {
            title: "2. Optimizing Native Search",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Turning Off the Junk:</h4>
            <p class="text-sm text-gray-300">
                1. Go to Settings > Privacy & Security > Search Permissions. <br/>
                2. Disable 'Microsoft Cloud Search' and 'Search History'. <br/>
                3. Go to 'Searching Windows' and change from 'Classic' to 'Enhanced' if you want to search all folders, or keep 'Classic' if you don't want your SSD to be constantly read by background indexers.
            </p>
        </div>
      `
        },
        {
            title: "3. PowerToys Run: Mac-Style Search",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Premium Experience:</strong> 
            <br/><br/>If you like fast productivity, install <strong>Microsoft PowerToys</strong>. With it, you press <code>Alt + Space</code> and an elegant search bar appears in the center of the screen. It is much faster than the Start Menu and allows you to perform calculations, convert currencies, and open programs without taking your hands off the keyboard.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Windows Shortcuts",
            description: "Navigate through the system at high speed."
        },
        {
            href: "/guides/limpeza-disco-profunda-arquivos-temporarios",
            title: "Disk Cleanup",
            description: "Remove files that get in the way of searching."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Ensure indexing doesn't degrade your hardware."
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


