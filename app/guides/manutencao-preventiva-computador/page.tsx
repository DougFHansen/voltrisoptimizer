import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'manutencao-preventiva-computador',
  title: "Preventive Computer Maintenance: How to Avoid Future Expenses",
  description: "Learn the ideal preventive maintenance routine for your PC or Laptop. Find out what to do each month to ensure your computer lasts 10 years or more...",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Preventive Computer Maintenance: How to Avoid Future Expenses";
const description = "Learn the ideal preventive maintenance routine for your PC or Laptop. Find out what to do each month to ensure your computer lasts 10 years or more.";
const keywords = [
    'preventive computer maintenance step by step 2026',
    'monthly gaming pc maintenance checklist',
    'how to make your pc last longer tutorial',
    'software and hardware preventive maintenance 2026',
    'periodic windows 11 cleaning and optimization'
];

export const metadata: Metadata = createGuideMetadata('manutencao-preventiva-computador', title, description, keywords);

export default function PreventiveMaintenanceGuide() {
    const summaryTable = [
        { label: "Hardware", value: "Physical cleaning every 6 months" },
        { label: "Software", value: "Monthly disk cleanup" },
        { label: "Security", value: "Weekly backups" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "What is Preventive Maintenance?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Most people only take their PC to a repair shop when it stops turning on. **Preventive Maintenance** is a set of small actions you take <strong>before</strong> a problem occurs. It's much cheaper to spend 15 minutes a month cleaning your system than to pay for a new motherboard that fried due to overheating.
        </p>
      `
        },
        {
            title: "1. Software Routine (Monthly)",
            content: `
        <p class="mb-4 text-gray-300">Keep your PC's brain clean:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Check Drivers:</strong> Use Winget or official websites to check for stability updates.</li>
            <li><strong>File Cleanup:</strong> Run <code>cleanmgr</code> to remove old Windows updates and temporary files.</li>
            <li><strong>Integrity Check:</strong> Open PowerShell as Admin and type <code>sfc /scannow</code> to let Windows auto-correct boot files.</li>
            <li><strong>Uninstall Junk:</strong> Go to 'Installed Apps' and remove everything you haven't used in the last 30 days.</li>
        </ul >
      `
        },
        {
            title: "2. Hardware Routine (Every 6 Months)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Physical Checklist:</h4>
            <p class="text-sm text-gray-300">
                1. Check if all fans are spinning without a "grinding" noise. <br/>
                2. Use compressed air to clean air filters. <br/>
                3. Ensure all cables are firmly seated (especially GPU power cables). <br/>
                4. Check for bulging capacitors on the motherboard or signs of rust/oxidation.
            </p>
        </div>
      `
        },
        {
            title: "3. Your Data \"Insurance\"",
            content: `
        <p class="mb-4 text-gray-300">
            You can always buy new hardware, but your data (photos, documents, game saves) is unique. The ultimate maintenance is having a backup. 
            <br/>Set up <strong>OneDrive</strong> or <strong>Google Drive</strong> to sync your 'Documents' and 'Pictures' folders. That way, if your SSD dies tomorrow, you only face a financial loss, not an emotional one.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limpeza-fisica-pc-gamer",
            title: "Physical Cleaning",
            description: "Learn how to truly clean your hardware."
        },
        {
            href: "/guides/backup-dados",
            title: "Backup Guide",
            description: "Strategies to never lose anything."
        },
        {
            href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo",
            title: "Disk Health",
            description: "How to predict the death of an HDD or SSD."
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

