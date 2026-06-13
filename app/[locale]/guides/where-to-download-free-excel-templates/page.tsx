import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'onde-baixar-planilhas-excel-gratis',
  title: "Where to Download Free Excel Spreadsheets: Financial Control and Management",
  description: "Looking for ready-made Excel templates to get organized? We list the best sites to download free spreadsheets for expenses, inventory, and schedules in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Where to Download Free Excel Spreadsheets: Financial Control and Management";
const description = "Looking for ready-made Excel templates to get organized? We list the best sites to download free spreadsheets for expenses, inventory, and schedules in 2026.";
const keywords = [
    'free excel spreadsheets download 2026',
    'free financial spreadsheet templates',
    'free excel inventory control spreadsheet',
    'where to download official microsoft excel templates',
    'excel study schedule spreadsheet'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('onde-baixar-planilhas-excel-gratis', title, description, keywords, locale);
}

export default function ExcelSheetsGuide() {
    const summaryTable = [
        { label: "Best Source", value: "Microsoft Create (Official)" },
        { label: "Formats", value: ".xlsx / .xltx" },
        { label: "Categories", value: "Finance, Projects, Personal" },
        { label: "Warning", value: "Avoid unknown Macros (.xlsm)" }
    ];

    const contentSections = [
        {
            title: "Why Use Ready-Made Templates?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Building a spreadsheet from scratch requires time and advanced formula knowledge. Professional templates already come with automated charts and conditional formatting, allowing you to just enter your data and get immediate results.
        </p>
      `
        },
        {
            title: "The 3 Best Sources in 2026",
            content: `
        <div class="space-y-6">
            <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500">
                <h4 class="text-white font-bold text-xl">1. Microsoft Create (create.microsoft.com)</h4>
                <p class="text-gray-300 mt-2">This is the official source. You'll find calendar templates, budget planners, and health trackers made by Microsoft's own designers. <strong>Advantage:</strong> They are 100% safe and clean.</p>
            </div>
            <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 class="text-white font-bold text-xl">2. Vertex42</h4>
                <p class="text-gray-300 mt-2">The gold standard for complex spreadsheets. Ideal for engineering, project management (Gantt charts), and debt amortization. The site looks old, but the content is world-class.</p>
            </div>
             <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-orange-500">
                <h4 class="text-white font-bold text-xl">3. Google Sheets Gallery</h4>
                <p class="text-gray-300 mt-2">If you don't have Excel installed and use Google Sheets, the "Template Gallery" menu within the app itself solves 90% of basic personal needs.</p>
            </div>
        </div>
      `
        },
        {
            title: "Security Warning: The Danger of Macros",
            content: `
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <p class="text-red-400 font-bold mb-2">Beware of .xlsm files</p>
            <p class="text-sm text-gray-300">
                Excel files can contain "Macros" (small programs). Hackers use these to steal data from your PC. Never enable editing or content on a spreadsheet downloaded from suspicious sites if it asks for permission to run macros.
            </p>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Windows Shortcuts",
            description: "Navigate faster between work windows."
        },
        {
            href: "/guides/backup-dados",
            title: "Data Backup",
            description: "Don't lose your important spreadsheets."
        },
        {
            href: "/guides/extensoes-produtividade-chrome",
            title: "Useful Extensions",
            description: "Tools that help with digital organization."
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

