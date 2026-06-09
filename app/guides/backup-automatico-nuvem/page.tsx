import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'backup-automatico-nuvem',
  title: "Automatic Cloud Backup: The Ultimate Windows Guide (2026)",
  description: "Your hard drive will fail. The only question is when. Learn how to set up Google Drive, OneDrive, and iCloud to save your files in real-time and never lose anything again.",
  category: 'software',
  difficulty: 'Beginner',
  time: '35 min'
};

const title = "Automatic Cloud Backup: The Ultimate Windows Guide (2026)";
const description = "Your hard drive will fail. The only question is when. Learn how to set up Google Drive, OneDrive, and iCloud to save your files in real-time and never lose anything again.";

const keywords = [
  'automatic cloud backup windows 11 tutorial 2026',
  'configure onedrive backup pc folders guide',
  'google drive for desktop how to use tutorial 2026',
  'icloud on windows how to sync photos',
  'best free backup cloud 2026',
  'onedrive files on demand save space',
  'recover previous version of file'
];

export const metadata: Metadata = createGuideMetadata('backup-automatico-nuvem', title, description, keywords);

export default function CloudBackupGuide() {
  const summaryTable = [
    { label: "Best Integration", value: "OneDrive (Native)" },
    { label: "Best Price", value: "Google One (Drive)" },
    { label: "Best for iPhone", value: "iCloud for Windows" },
    { label: "Security", value: "Encryption in Transit" },
    { label: "Key Feature", value: "Version History (Ctrl+Z for life)" },
    { label: "Value for Money", value: "Microsoft 365 (1TB + Office)" }
  ];

  const contentSections = [
    {
      title: "The End of the Flash Drive (And Why You Need the Cloud)",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, saving files locally is like playing Russian roulette. SSDs die suddenly. Laptops get stolen. Ransomwares encrypt everything. <strong>Real-Time Cloud Backup</strong> is the only guarantee that if your PC explodes right now, you won't lose even the last sentence you typed.
        </p>
        
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 mb-6">
          <h4 class="text-blue-400 font-bold mb-2">☁️ Sync vs Backup</h4>
          <p class="text-sm text-gray-300">
            Many get confused. 
            <br/><strong>Backup (Cold):</strong> A static copy kept in a drawer (External HD). If you delete the original, the copy stays there.
            <br/><strong>Sync (Cloud):</strong> A mirror of your PC. If you change a file on the PC, it changes in the cloud. If you delete it on the PC, it's deleted in the cloud (usually goes to the cloud's trash bin).
            <br/>The cloud is focused on <em>productivity and continuity</em>.
          </p>
        </div>
      `
    },
    {
      title: "Option 1: OneDrive (The Logical Choice for Windows)",
      content: `
        <p class="mb-4 text-gray-300">
          OneDrive comes built-in with Windows 10/11. It's the most "invisible" and efficient solution.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-4">Enabling "PC Folder Backup"</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Look for the <strong>blue/gray cloud</strong> icon near the clock (or in Start Menu > OneDrive).</li>
            <li>Sign in with your Microsoft account (Hotmail/Outlook).</li>
            <li>Click the gear > Settings > <strong>Sync and backup</strong>.</li>
            <li>Click <strong>Manage backup</strong>.</li>
            <li>Toggle the switches for: <strong>Documents, Pictures, and Desktop</strong>.</li>
            <li>Click Save changes.</li>
        </ol>
        <p class="mt-3 text-sm text-green-400">
            <strong>Magic Done:</strong> Now, everything you save to your Desktop automatically goes to the cloud. If you format the PC, just log into OneDrive and your icons reappear.
        </p>
 
        <h4 class="text-white font-bold mb-3 mt-6">Files On-Demand</h4>
        <p class="mb-2 text-gray-300 text-sm">
            This is OneDrive's biggest trump card. It shows your 1TB of files in Explorer, but <strong>DOES NOT take up disk space</strong>.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Cloud Icon ☁️:</strong> The file is online only. If you click it, it downloads instantly.</li>
            <li><strong>Green Checkmark ✅:</strong> The file is downloaded and takes up space.</li>
            <li><strong>How to free up space:</strong> Right-click any folder > "Free up space". Windows deletes the local copy and leaves it only in the cloud.</li>
        </ul>
      `
    },
    {
      title: "Option 2: Google Drive for Desktop",
      content: `
        <p class="mb-4 text-gray-300">
          If you use Android or Gmail, Google Drive is more natural. But beware: it doesn't integrate as deeply as OneDrive.
        </p>
        <div class="space-y-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h5 class="font-bold text-white mb-2">Installation and Setup</h5>
                <ol class="list-decimal list-inside text-sm text-gray-300 space-y-2">
                    <li>Download "Google Drive for Desktop" (formerly Backup and Sync).</li>
                    <li>In preferences, choose "My Computer".</li>
                    <li>Click "Add folder" and manually select Documents/Pictures.</li>
                    <li>Choose "Sync with Google Drive".</li>
                </ol>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h5 class="font-bold text-white mb-2">Google Photos</h5>
                <p class="text-sm text-gray-300">
                    You can configure it to upload ONLY photos/videos to Google Photos (with compression or original quality), without taking up Drive space with documents.
                </p>
            </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Saving Feature: Version History (Shadow Copy)",
      content: `
        <h4 class="text-white font-bold mb-3">Saving the Corrupted Thesis</h4>
        <p class="mb-4 text-gray-300">
            Saved over the wrong file? Deleted an important paragraph and closed Word?
            <br/>The cloud keeps the last 25-100 versions of each file.
        </p>
        
        <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-2">How to Use (OneDrive/Drive)</h5>
            <ol class="list-decimal list-inside text-sm text-gray-300 space-y-2">
                <li>Go to the file's folder in File Explorer.</li>
                <li>Right-click the file > <strong>Version History</strong> (OneDrive) or "See previous versions" (Drive Web).</li>
                <li>A list of dates and times will appear.</li>
                <li>Select a version from 1 hour ago and click "Restore".</li>
            </ol>
        </div>
      `
    },
    {
      title: "3-2-1 Hybrid Strategy",
      content: `
        <p class="mb-4 text-gray-300">
          The cloud is great, but if your account is banned or hacked, you lose everything. Don't rely solely on it.
          <br/>Use the cloud as your <strong>off-site copy</strong> (the "1" in the 3-2-1 rule).
          <br/>Also maintain an External HD at home with weekly backups (using Veeam or Macrium Reflect).
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "What NOT to Put in the Cloud",
      content: `
        <h4 class="text-white font-bold mb-3">Avoid Syncing:</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Temporary Files or Cache:</strong> (E.g., <code>node_modules</code> folder, Adobe Premiere cache). They contain thousands of small files that stall synchronization.</li>
            <li><strong>Open Databases:</strong> (Outlook .PST files, running Virtual Machines). They change every second, and the cloud tries to re-upload the giant file for every byte changed.</li>
            <li><strong>Installed Games:</strong> Steam/Epic already save game data to their own cloud. Don't put the installation folder (100GB+) on OneDrive.</li>
        </ul>
      `
    }
  ];

  const faqItems = [
    {
      question: "Does OneDrive slow down the PC?",
      answer: "Generally no. It pauses synchronization if you're gaming (Game Mode) or on a metered network. But if you paste 50GB of photos at once, it will use CPU to process (hash) and upload bandwidth."
    },
    {
      question: "Does Ransomware affect the cloud?",
      answer: "Yes! If a virus encrypts your local file, OneDrive syncs the encrypted version to the cloud. HOWEVER, OneDrive has a 'Restore your OneDrive' function that lets you roll back the entire account to yesterday's state, reversing the attack."
    },
    {
      question: "5GB Free is too little. What's the best plan?",
      answer: "Microsoft 365 Personal (R$ 20-30/month) gives 1TB + Office. Google One 100GB (R$ 7/month) is the cheapest to start. iCloud+ 50GB (R$ 4/month) is essential for iPhone users."
    }
  ];

  const externalReferences = [
    { name: "Download OneDrive", url: "https://www.microsoft.com/en-us/microsoft-365/onedrive/download" },
    { name: "Google Drive for Desktop", url: "https://www.google.com/drive/download/" },
    { name: "iCloud for Windows", url: "https://apps.microsoft.com/store/detail/icloud/9PKTQ5699M62" }
  ];

  const relatedGuides = [
    {
      href: "/guides/backup-dados",
      title: "Complete Backup Guide",
      description: "Understand the professional 3-2-1 strategy."
    },
    {
      href: "/guides/protecao-ransomware",
      title: "Ransomware Protection",
      description: "How to avoid data kidnapping."
    },
    {
      href: "/guides/recuperacao-dados-hd-corrompido",
      title: "Data Recovery",
      description: "What to do if backup fails."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="35 min"
      difficultyLevel="Beginner"
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

