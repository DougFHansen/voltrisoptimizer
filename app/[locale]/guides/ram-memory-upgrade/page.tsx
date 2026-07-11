import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'upgrade-memoria-ram',
  title: "RAM Memory Upgrade: Compatibility Guide (2026)",
  description: "Want to add more RAM to your PC or Laptop? Learn how to choose the right frequency, DDR4 vs DDR5, and how to activate Dual Channel in 2026.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "RAM Memory Upgrade: Compatibility Guide (2026)";
const description = "Want to add more RAM to your PC or Laptop? Learn how to choose the right frequency, DDR4 vs DDR5, and how to activate Dual Channel in 2026.";
const keywords = [
  'how to choose ram for pc 2026 guide',
  'laptop ram upgrade ddr4 ddr5 tutorial',
  'what is dual channel ram tutorial 2026',
  'ram compatibility frequency guide 2026',
  'how to install ram in pc step by step'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('upgrade-memoria-ram', title, description, keywords, locale);
}

export default function RAMUpgradeGuide() {
  const summaryTable = [
    { label: "Current Standard", value: "DDR5 (New PCs) / DDR4 (Old/Budget PCs)" },
    { label: "Dual Channel", value: "Always use 2 identical sticks (e.g., 2x16GB)" },
    { label: "Frequency", value: "Check your Motherboard's limit" },
    { label: "Difficulty", value: "Medium (Requires opening the case)" }
  ];

  const contentSections = [
    {
      title: "How much RAM do I need in 2026?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, the **16GB of RAM** that used to be ideal has become the absolute minimum for those who game or work. With Windows 11 and browsers consuming more and more, the new recommended standard for a stutter-free experience is **32GB**. However, it's not enough to just buy any memory; speed and latency (CL) define whether your upgrade will be a success or a waste of money.
        </p>
      `
    },
    {
      title: "1. DDR4 vs DDR5: They are not compatible!",
      content: `
        <p class="mb-4 text-gray-300">The most common mistake in 2026 is buying the wrong standard:</p>
        <p class="text-sm text-gray-300">
            DDR5 sticks do not fit in DDR4 slots and vice versa. <br/><br/>
            - <strong>DDR4:</strong> Present in PCs up to 2022/2023. Common frequencies: 3200MHz. <br/>
            - <strong>DDR5:</strong> The standard for modern PCs in 2026. Frequencies starting at 4800MHz and reaching 8000MHz+. <br/>
            - <strong>Tip:</strong> Download the <strong>CPU-Z</strong> software, go to the 'Memory' tab and check your current memory 'Type' before buying the new one.
        </p>
      `
    },
    {
      title: "2. The Dual Channel Rule",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Double Your Memory Bandwidth:</h4>
            <p class="text-sm text-gray-300">
                Never use only one 16GB stick if you have two slots. Installing two 8GB sticks (Total 16GB) activates <strong>Dual Channel</strong>, which doubles the communication speed between the CPU and RAM. In 2026, gaming in Single Channel (only one stick) can cause drops of up to 30% in your minimum FPS, leading to constant stutters in competitive games.
            </p>
        </div>
      `
    },
    {
      title: "3. Mixing Brands and Speeds",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Can I mix them?</strong> 
            <br/><br/>Yes, but the PC will always run at the speed of the **slowest** memory stick. If you have a 3600MHz stick and add another at 2400MHz, both will operate at 2400MHz. The ideal in 2026 is to buy complete kits (2x8GB or 2x16GB) from the same brand and batch to ensure 100% stability and activate the XMP/EXPO profile without blue screen errors.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/limpar-memoria-ram-windows",
      title: "Clean RAM",
      description: "Optimize usage before buying more."
    },
    {
      href: "/guides/tela-azul-memory-management-fix",
      title: "Memory Error",
      description: "Diagnose faulty sticks."
    },
    {
      href: "/guides/como-escolher-processador-2026",
      title: "Choose CPU",
      description: "See which processors support DDR5."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="20 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}


