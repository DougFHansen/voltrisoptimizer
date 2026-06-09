import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'pobreza-digital-pc-fraco-produtividade',
  title: "Digital Poverty: How to be Productive with a Low-End PC in 2026",
  description: "You don't need the most expensive PC to study or work. Learn extreme optimization techniques and lightweight software to overcome digital poverty in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Digital Poverty: How to be Productive with a Low-End PC in 2026";
const description = "You don't need the most expensive PC to study or work. Learn extreme optimization techniques and lightweight software to overcome digital poverty in 2026.";
const keywords = [
    'be productive with low end pc 2026 tutorial',
    'how to study with old and slow laptop guide',
    'lightweight software for low end pc productivity 2026',
    'digital poverty how to overcome with technology tutorial',
    'extreme windows 11 optimization low end pc work'
];

export const metadata: Metadata = createGuideMetadata('pobreza-digital-pc-fraco-produtividade', title, description, keywords);

export default function DigitalPovertyGuide() {
    const summaryTable = [
        { label: "Focus", value: "Efficiency over aesthetics" },
        { label: "Browser", value: "Brave or Edge (Efficiency Mode)" },
        { label: "System", value: "Windows 11 Lite or Linux (Optional)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "What is Digital Poverty?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, inequality is not just financial, but also about access to fast information. Having a PC that freezes when opening a PDF or a lecture video puts you at a disadvantage. However, hardware does not define your potential. With the right configuration, a 2018 laptop can be as productive as a 2026 one for study and work tasks. The secret is knowing what to **remove** so the PC focuses only on what matters.
        </p>
      `
        },
        {
            title: "1. Choose Lightweight Tools (Alternative software)",
            content: `
        <p class="mb-4 text-gray-300">Stop using heavy programs if your PC has low RAM:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Instead of Word:</strong> Use Google Docs (Online) or <strong>AbiWord</strong> (Extra lightweight).</li>
            <li><strong>Instead of Adobe Reader:</strong> Use <strong>SumatraPDF</strong>. It opens instantly and use almost 0 RAM.</li>
            <li><strong>Instead of Chrome:</strong> Use <strong>Brave</strong> with aggressive ad-blocking. Fewer ads = less processing.</li>
        </ul >
      `
        },
        {
            title: "2. The Power of the Web (SaaS)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Cloud Processing:</h4>
            <p class="text-sm text-gray-300">
                If your PC is too weak to edit videos or photos, use tools that run on other companies' servers. <br/><br/>
                - <strong>Canva:</strong> For design without needing Photoshop. <br/>
                - <strong>CapCut Web:</strong> For video editing directly in the browser. <br/>
                - <strong>Google Colab:</strong> If you study programming, use Google servers to run your code for free.
            </p>
        </div>
      `
        },
        {
            title: "3. Windows Visual Optimization",
            content: `
        <p class="mb-4 text-gray-300">
            Windows 11 spends a lot of power making windows look beautiful and transparent. 
            <br/><br/><strong>Tip:</strong> Search for 'Adjust the appearance and performance of Windows'. Select <strong>'Adjust for best performance'</strong>. Fonts will look slightly simpler and windows won't have animations, but your click response will be immediate. Feel the speed, not the looks.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpar-memoria-ram-windows",
            title: "Clear RAM",
            description: "Essential for users with 4GB or less."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "The biggest performance upgrade possible."
        },
        {
            href: "/guides/melhores-navegadores-custo-beneficio",
            title: "Browsers",
            description: "Choose the one that stutters less on your PC."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

