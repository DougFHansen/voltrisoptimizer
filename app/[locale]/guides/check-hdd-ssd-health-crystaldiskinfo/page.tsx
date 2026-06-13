import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'verificar-saude-hd-ssd-crystaldiskinfo',
  title: "How to Check HDD and SSD Health: CrystalDiskInfo (2026)",
  description: "Is your PC freezing or are files disappearing? Learn how to use CrystalDiskInfo to predict failures in your HDD or SSD in 2026.",
  category: 'hardware',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "How to Check HDD and SSD Health: CrystalDiskInfo (2026)";
const description = "Is your PC freezing or are files disappearing? Learn how to use CrystalDiskInfo to predict failures in your HDD or SSD in 2026.";
const keywords = [
    'how to use crystaldiskinfo 2026 tutorial guide',
    'check ssd health windows 11 tutorial 2026',
    'signs hdd is dying tutorial guide',
    'ideal nvme ssd temperature 2026 tutorial',
    'how to read smart data hdd and ssd guide 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('verificar-saude-hd-ssd-crystaldiskinfo', title, description, keywords, locale);
}

export default function DiskHealthGuide() {
    const summaryTable = [
        { label: "Status 'Healthy'", value: "Everything is fine with your disk" },
        { label: "Status 'Caution'", value: "Back up IMMEDIATELY" },
        { label: "Critical Parameter", value: "Reallocated Sectors Count" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "The silence before the disaster",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike a fan that makes noise when it breaks, an SSD or HDD dies in silence. In 2026, with the increase in NVMe Gen 5 speeds, heat has become the biggest villain of lifespan. **CrystalDiskInfo** is the industry-standard tool for reading S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) data from your hardware, allowing you to know exactly how much "life" your disk still has before losing your photos and documents.
        </p>
      `
        },
        {
            title: "1. Downloading and Understanding Colors",
            content: `
        <p class="mb-4 text-gray-300">When you open CrystalDiskInfo, look at the status color:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Blue/Green:</strong> Good health. No critical errors detected.</li>
            <li><strong>Yellow (Caution):</strong> There are damaged or worn sectors. The disk can fail at any time. If you see this color, move your important files to the cloud or another HDD right now.</li>
            <li><strong>Red (Critical):</strong> The disk is already failing. Windows may freeze with constant blue screens.</li>
        </ul >
      `
        },
        {
            title: "2. Checking Wear (SSD TBW)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Your SSD's Mileage:</h4>
            <p class="text-sm text-gray-300">
                On SSDs, look for <strong>'Total Host Writes'</strong>. <br/><br/>
                This shows how many Terabytes of data have already been written to the drive since it left the factory. Every SSD has a write limit (TBW). If your SSD has a 100TB limit and you've already written 90TB, it will start to slow down or switch to 'Read Only' mode to protect itself. In 2026, monitor this if you work with video editing or constant torrents.
            </p>
        </div>
      `
        },
        {
            title: "3. The Importance of Temperature",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>The danger of heat:</strong> 
            <br/><br/>NVMe SSDs of 2026 operate at high temperatures but should not exceed 70°C for long. If CrystalDiskInfo shows the status in red because of temperature, your SSD will enter 'Thermal Throttling' and become slower than an old HDD. Consider buying a heatsink if temperatures are constantly above 65°C.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/ssd-vs-hd-qual-melhor",
            title: "SSD vs HDD",
            description: "Differences in technology and durability."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize SSD",
            description: "Tips to increase lifespan."
        },
        {
            href: "/guides/recuperacao-dados",
            title: "Data Recovery",
            description: "What to do if the disk has already failed."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


