import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'bitlocker-desempenho-jogos-ssd',
  title: "Does BitLocker Kill FPS? The Impact on SSD (2026)",
  description: "Windows 11 encryption protects your data but costs performance. Check benchmarks of NVMe SSDs with BitLocker on vs. off and decide if it's worth it.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Does BitLocker Kill FPS? The Truth About SSDs and Gaming (2026)";
const description = "Windows 11 Pro comes with encryption enabled by default on many PCs. This protects your files from thieves but adds latency to every disk read. Discover the real impact.";

const keywords = [
  'bitlocker decreases fps in games 2026 benchmark',
  'disable bitlocker windows 11 increases ssd performance',
  'bitlocker impact on nvme gen4 gen5 ssd',
  'device encryption windows 11 disable',
  'bitlocker error asks for key when starting pc'
];

export const metadata: Metadata = createGuideMetadata('bitlocker-desempenho-jogos-ssd', title, description, keywords);

export default function BitLockerGuide() {
  const summaryTable = [
    { label: "Security", value: "High (Protects against physical theft)" },
    { label: "Performance", value: "10-20% loss on SSD (Random 4K write)" },
    { label: "Gaming", value: "Low impact on Average FPS, Medium on Loading" },
    { label: "Recommendation (Desktop)", value: "OFF (If gaming only)" },
    { label: "Recommendation (Laptop)", value: "ON (High theft risk)" },
    { label: "Hardware", value: "Requires TPM 2.0" }
  ];

  const contentSections = [
    {
      title: "How Encryption Works (The Invisible Weight)",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          BitLocker "scrambles" every bit saved to your SSD. When a game requests a texture, the CPU must grab the scrambled data, use a mathematical key (AES-XTS) to unscramble it, and only then deliver it to the video card.
          <br/><strong>The Problem:</strong> On ultra-fast SSDs (7,000 MB/s), the CPU can't decrypt as fast as the SSD can read. This creates an artificial bottleneck.
        </p>
        
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/20 mb-6">
          <h4 class="text-red-400 font-bold mb-2">Synthetic Benchmark (CrystalDiskMark)</h4>
          <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Without BitLocker:</strong> 4K Q1T1 Read: 95 MB/s | Latency: 40µs</li>
            <li><strong>With BitLocker (Software):</strong> 4K Q1T1 Read: 75 MB/s | Latency: 65µs</li>
          </ul>
          <p class="text-sm text-gray-300 mt-2">
            Latency increases around <strong>40-60%</strong> in small random operations. Modern games perform thousands of these operations per second.
          </p>
        </div>
      `
    },
    {
      title: "Should You Disable It? (The Verdict)",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div class="bg-gray-800/50 p-4 rounded-lg border border-red-500/30">
                <h5 class="font-bold text-white mb-2">Desktop Gaming PC</h5>
                <p class="text-sm text-gray-300">
                    <strong>Disable it.</strong> The chance of someone specifically breaking into your house to steal your SSD and read your data is low. The system responsiveness (snappiness) gain is worth it.
                </p>
            </div>
            <div class="bg-gray-800/50 p-4 rounded-lg border border-green-500/30">
                <h5 class="font-bold text-white mb-2">Work/Student Laptop</h5>
                <p class="text-sm text-gray-300">
                    <strong>Keep it On.</strong> Laptops are lost or stolen frequently. Without BitLocker, anyone can pull the SSD, plug it into another PC, and read your photos, passwords, and documents. The performance loss is the price of security.
                </p>
            </div>
        </div>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "How to Correctly Disable It",
      content: `
        <p class="mb-4 text-gray-300">
            There are two versions: "Device Encryption" (Windows Home) and "BitLocker" (Pro).
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Open the Start Menu and type <strong>"Manage BitLocker"</strong>.</li>
            <li>If it doesn't appear, type "Device encryption settings".</li>
            <li>Click on <strong>Turn off BitLocker</strong>.</li>
            <li>Windows will start decrypting. This can take anywhere from 10 minutes to 5 hours depending on disk size.
                <br/><strong class="text-yellow-400">Note:</strong> You can continue using your PC while it's working, but it will be slightly slower.
            </li>
        </ol>
      `
    },
    {
      title: "Hardware Encryption (OPAL) - The Best of Both Worlds?",
      content: `
        <h4 class="text-white font-bold mb-3">Samsung/Crucial SSD with Built-in AES</h4>
        <p class="mb-4 text-gray-300">
            Some high-end SSDs (like the Samsung 990 Pro) have a dedicated chip for encryption.
            <br/>In the past, BitLocker could use this chip ("Hardware Encryption") for zero CPU cost.
            <br/>However, Microsoft <strong>removed</strong> default support for this due to security flaws in SSD firmwares. Today, BitLocker forces Software Encryption by default, ignoring the SSD's chip. It's possible to re-enable it via Group Policy, but it's complex and insecure.
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Checking Status via CMD",
      content: `
        <h4 class="text-white font-bold mb-3">Command Line</h4>
        <p class="mb-4 text-gray-300">
            Open CMD as Administrator and type:
            <br/><code class="bg-black p-1 rounded">manage-bde -status</code>
            <br/>
            <br/>Look for:
            <br/><strong>Percentage Encrypted:</strong> 0.0% (Off) or 100.0% (On).
            <br/><strong>Encryption Method:</strong> XTS-AES 128 (Standard Software).
        </p>
      `
    }
  ];

  const faqItems = [
    {
      question: "I lost my BitLocker recovery key!",
      answer: "If you logged in with a Microsoft Account, the key is saved online at account.microsoft.com/devices/recoverykey. If it was a local account and you didn't save the .txt file or print it, your data is lost forever. There is no backdoor."
    },
    {
      question: "Does BitLocker protect against viruses?",
      answer: "No. BitLocker protects against offline physical access. If the PC is on and unlocked (you are logged in), a virus runs with your privileges and accesses files normally."
    },
    {
      question: "Does updating the BIOS ask for the BitLocker key?",
      answer: "Yes! Always suspend BitLocker before updating the BIOS. If you forget, the TPM might reset, and Windows will ask for that giant recovery key on the next boot."
    }
  ];

  const externalReferences = [
    { name: "Find BitLocker Key (Microsoft)", url: "https://account.microsoft.com/devices/recoverykey" },
    { name: "Tom's Hardware SSD Benchmark with BitLocker", url: "https://www.tomshardware.com/news/windows-11-pro-bitlocker-performance-hit" }
  ];

  const relatedGuides = [
    {
      href: "/guias/otimizacao-ssd-windows-11",
      title: "Optimize SSD",
      description: "Other tips for a fast SSD."
    },
    {
      href: "/guias/atualizar-bios-seguro",
      title: "Update BIOS",
      description: "Beware of BitLocker here."
    },
    {
      href: "/guias/debloat-windows-11-otimizacao-powershell",
      title: "Windows Debloat",
      description: "Remove useless services."
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
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}
