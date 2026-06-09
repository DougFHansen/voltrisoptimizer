import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'substituicao-ssd',
  title: "How to Install an SSD and Clone Windows (2026 Guide)",
  description: "Replacing your HDD with an SSD or upgrading your NVMe? Learn how to physically install and clone your Windows without losing any files in 2026.",
  category: 'hardware',
  difficulty: 'Intermediate',
  time: '40 min'
};

const title = "How to Install an SSD and Clone Windows (2026 Guide)";
const description = "Replacing your HDD with an SSD or upgrading your NVMe? Learn how to physically install and clone your Windows without losing any files in 2026.";
const keywords = [
  'how to install ssd on pc and laptop 2026',
  'clone windows from hdd to ssd free tutorial',
  'how to install nvme m.2 ssd step by step guide',
  'migrate system to new ssd without formatting 2026',
  'install sata ssd on old laptop tutorial'
];

export const metadata: Metadata = createGuideMetadata('substituicao-ssd', title, description, keywords);

export default function SSDInstallationGuide() {
  const summaryTable = [
    { label: "Formats", value: "2.5\" SATA or M.2 NVMe" },
    { label: "Cloning Software", value: "Macrium Reflect / Clonezilla" },
    { label: "Advantage", value: "No need to reinstall everything" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "The Biggest Upgrade You Can Make",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, replacing an old HDD with an SSD is like turning a horse carriage into a jet. The speed difference in Windows 11 is staggering. If you already have an SSD and are just upgrading to a larger one (e.g., from 240GB to 1TB), the good news is that you **do not need to format**. You can clone exactly what you have today to the new drive in just a few minutes.
        </p>
      `
    },
    {
      title: "1. Physical Installation: SATA vs M.2",
      content: `
        <p class="mb-4 text-gray-300">How to fit the component in the right place:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>SATA SSD (2.5"):</strong> Uses two cables (one power cable from the PSU and one data cable connected to the motherboard). Ideal for old laptops or secondary drives.</li>
            <li><strong>NVMe M.2 (The "stick"):</strong> Plugs directly into a slot on the motherboard and is secured by a small screw. In 2026, ensure the slot supports your drive's speed (Gen3, Gen4, or Gen5).</li>
            <li><strong>Warning:</strong> Always unplug the PC from the wall and, for laptops, disconnect the battery before touching any internal component.</li>
        </ul >
      `
    },
    {
      title: "2. How to Clone Windows (Without Formatting)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Process with Macrium Reflect:</h4>
            <p class="text-sm text-gray-300">
                1. Connect the new SSD to the PC (use a USB-to-SATA adapter for laptops). <br/>
                2. Open the cloning software and select the old disk as the **Source** and the new one as the **Destination**. <br/>
                3. Click 'Copy Partitions'. If the new SSD is larger, extend the 'C:' partition to fill the entire space. <br/>
                4. Once finished, shut down the PC, remove the old disk, and install the new one. Windows will boot identically, but much faster.
            </p>
        </div>
      `
    },
    {
      title: "3. First Boot and Adjustments",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Starting the new drive:</strong> 
            <br/><br/>If the PC continues to boot from the old disk after installation, enter the BIOS and change the **Boot Priority** to the new SSD. Once in Windows, verify that the TRIM command is active. If the new SSD doesn't appear in 'This PC', you'll need to go to 'Disk Management', right-click the black space, and choose 'New Simple Volume' to assign it a drive letter (D:, E:, etc.).
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/otimizacao-ssd-windows-11",
      title: "Optimize SSD",
      description: "Performance adjustments after installation."
    },
    {
      href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
      title: "Check Health",
      description: "Test if your new SSD arrived in perfect condition."
    },
    {
      href: "/guides/formataçao-windows",
      title: "Clean Formatting",
      description: "Prefer starting from scratch? Follow this guide."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="40 min"
      difficultyLevel="Medium"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}


