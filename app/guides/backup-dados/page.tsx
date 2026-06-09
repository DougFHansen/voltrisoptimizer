import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'backup-dados',
  title: "3-2-1 Backup Strategy: The Ultimate Data Protection Guide (2026)",
  description: "Don't wait until you lose everything to learn. Master the 3-2-1 Rule, learn to create System Images with Veeam/Hasleo, and protect yourself against Ransomware and hardware failures.",
  category: 'security',
  difficulty: 'Intermediate',
  time: '50 min'
};

const title = "3-2-1 Backup Strategy: The Ultimate Data Protection Guide (2026)";
const description = "Your computer contains your life: photos, work, projects. A lightning strike or a wrong click can erase everything forever. Learn the professional backup strategy that banks use, adapted for you.";

const keywords = [
  'how to do full backup pc windows 11 2026',
  'backup rule 3-2-1 simple explanation',
  'best free backup software 2026',
  'hasleo backup suite vs macrium reflect free',
  'veeam agent for windows tutorial',
  'system image vs file backup difference',
  'ransomware protection offline backup'
];

export const metadata: Metadata = createGuideMetadata('backup-dados', title, description, keywords);

export default function DataBackupGuide() {
  const summaryTable = [
    { label: "The Golden Rule", value: "3-2-1 (3 Copies, 2 Locations, 1 Offsite)" },
    { label: "Best Free Software", value: "Hasleo Backup Suite / Veeam Agent" },
    { label: "Recommended Type", value: "Full System Image" },
    { label: "Physical Media", value: "External USB HD (Disconnected)" },
    { label: "Cloud (Offsite)", value: "OneDrive / Backblaze" },
    { label: "Frequency", value: "Weekly (Incremental)" }
  ];

  const contentSections = [
    {
      title: "What is the 3-2-1 Rule? (The Industry Standard)",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Don't reinvent the wheel. The 3-2-1 rule is the global data security standard because it covers all possible failures (theft, fire, virus, mechanical failure).
        </p>
        
        <div class="space-y-4">
            <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
                <h3 class="text-blue-400 font-bold mb-2">3 Copies of Data</h3>
                <p class="text-sm text-gray-300">
                    You need to have the original file + 2 copies. If you only have one copy, it's not a backup, it's hope.
                </p>
            </div>
            
            <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
                <h3 class="text-purple-400 font-bold mb-2">2 Different Media</h3>
                <p class="text-sm text-gray-300">
                    It doesn't help to have 3 copies on the same HD. If the HD fails, they all die.
                    <br/>Media 1: Internal PC SSD (Original).
                    <br/>Media 2: External USB HD or NAS (Local Copy).
                </p>
            </div>

            <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
                <h3 class="text-green-400 font-bold mb-2">1 Off-site Copy (Outside Home)</h3>
                <p class="text-sm text-gray-300">
                    If your house catches fire or thieves take both your PC and External HD, would you lose everything?
                    <br/>An Off-site copy (usually Cloud) saves you from local physical disasters.
                </p>
            </div>
        </div>
      `
    },
    {
      title: "System Image vs File Backup",
      content: `
        <p class="mb-4 text-gray-300">
          <strong>File Backup:</strong> Copies only "My Documents", photos, and spreadsheets. If Windows breaks, you reinstall Windows from scratch, reinstall all programs, configure everything again, and then copy the files. (Tedious).
          <br/><br/>
          <strong>System Image (Block Level Backup):</strong> Copies the ENTIRE DISK, bit by bit. It saves Windows, installed programs, drivers, wallpaper, shortcuts... If the HD fails, you buy a new one, restore the image, and the PC returns EXACTLY as it was in 30 minutes. <strong>This is the professional choice.</strong>
        </p>
      `
    },
    {
      title: "Recommended Free Tools (2026)",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-teal-500/30">
                <h3 class="font-bold text-white mb-2">Hasleo Backup Suite (Free)</h3>
                <p class="text-sm text-gray-300">
                    The spiritual successor to Macrium Reflect Free (which was discontinued). Clean interface, supports incremental and differential backup, disk cloning, and creation of emergency boot drives (WinPE). Completely free and ad-free.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-green-500/30">
                <h3 class="font-bold text-white mb-2">Veeam Agent for Windows (Free)</h3>
                <p class="text-sm text-gray-300">
                    Enterprise standard. Robust, extremely reliable, but with a more complex interface. If you want the software that protects bank servers, use Veeam.
                </p>
            </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "The 'Cold Storage' Protocol (Against Ransomware)",
      content: `
        <h4 class="text-white font-bold mb-3">A Virus cannot attack what is not connected</h4>
        <p class="mb-4 text-gray-300">
            Modern ransomwares infect your PC and look for any connected drive (flash drive, external HD, network) to encrypt them too.
            <br/><strong>The Defense:</strong> Perform the backup to the External HD. When finished, EJECT and DISCONNECT the USB cable. Put the HD in a drawer. If a virus hits your PC tomorrow, the HD in the drawer is safe. This is "Cold Storage".
        </p>
      `
    },
    {
      title: "Restoration Test Routine (Drill)",
      content: `
        <p class="mb-4 text-gray-300 text-lg font-bold text-red-400">
            A backup that has never been tested DOES NOT EXIST.
        </p>
        <p class="text-gray-300">
            Many backup files get corrupted over time without warning.
            <br/><strong>Every 3 to 6 months:</strong>
            <br/>1. Try to open the backup image file.
            <br/>2. Try to extract a random file from within it.
            <br/>3. If possible, use a Virtual Machine to try and restore the full image and see if the system boots.
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Disk Cloning: SSD/HD Upgrade",
      content: `
        <h4 class="text-white font-bold mb-3">When to use 'Clone' instead of 'Backup'?</h4>
        <p class="mb-4 text-gray-300">
            When you've bought a new, larger NVMe SSD and want to transfer everything from the old SSD to it.
            <br/>Use the "System Clone" or "Disk Clone" feature of Hasleo/Macrium.
            <br/>It copies everything in real-time. Then, turn off the PC, swap the old SSD for the new one, and you're done. Windows won't even notice it moved house.
        </p>
      `
    }
  ];

  const faqItems = [
    {
      question: "What size External HD should I buy?",
      answer: "The rule is: At least 2x the size of your internal disk. If you have a 1TB SSD, buy a 2TB or 4TB External HD. This allows you to keep several historical versions (e.g., today's backup, last week's, and last month's)."
    },
    {
      question: "Does OneDrive count as a System Image backup?",
      answer: "No. OneDrive/Google Drive save individual FILES. They don't save Windows, installed programs, and system settings. If Windows breaks with a blue screen, the cloud won't fix it."
    },
    {
      question: "HD or SSD for External Backup?",
      answer: "Mechanical HDDs are cheaper and better for long-term archiving (years unplugged), as SSDs can lose charge in their cells if left without power for many years. For daily backups, SSDs are faster but much more expensive per TB."
    }
  ];

  const externalReferences = [
    { name: "Hasleo Backup Suite Free (Download)", url: "https://www.easyuefi.com/backup-software/backup-suite-free.html" },
    { name: "Veeam Agent for Windows Free", url: "https://www.veeam.com/agent-for-windows-community-edition.html" },
    { name: "Rescuezilla (Open Source Clone)", url: "https://rescuezilla.com/" }
  ];

  const relatedGuides = [
    {
      href: "/guias/backup-automatico-nuvem",
      title: "Cloud Backup",
      description: "Complement your local backup with the cloud."
    },
    {
      href: "/guias/protecao-ransomware",
      title: "Ransomware Security",
      description: "How to avoid being encrypted."
    },
    {
      href: "/guias/verificar-saude-hd-ssd-crystaldiskinfo",
      title: "Disk Health",
      description: "Monitor if your HD is dying."
    },
    {
      href: "/guias/recuperacao-dados-hd-corrompido",
      title: "Disaster Recovery",
      description: "Try to save data without a backup."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="50 min"
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
