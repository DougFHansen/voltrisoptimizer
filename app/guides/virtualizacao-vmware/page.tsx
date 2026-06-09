import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'virtualizacao-vmware',
  title: "Virtualization on PC: How to Enable and Use VMWare (2026)",
  description: "Want to run other systems inside your Windows? Learn how to enable virtualization in the BIOS and configure VMWare Workstation in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '25 min'
};

const title = "Virtualization on PC: How to Enable and Use VMWare (2026)";
const description = "Want to run other systems inside your Windows? Learn how to enable virtualization in the BIOS and configure VMWare Workstation in 2026.";
const keywords = [
  'how to enable virtualization in bios 2026 tutorial',
  'vmware workstation player tutorial how to use 2026',
  'enable vt-x intel and amd-v in bios guide',
  'create virtual machine windows 11 tutorial 2026',
  'virtualization disabled how to fix tutorial guide 2026'
];

export const metadata: Metadata = createGuideMetadata('virtualizacao-vmware', title, description, keywords);

export default function VirtualizationGuide() {
  const summaryTable = [
    { label: "Intel Technology", value: "VT-x / Intel Virtualization Technology" },
    { label: "AMD Technology", value: "AMD-V / SVM Mode" },
    { label: "Free Software", value: "VMWare Workstation Player" },
    { label: "Difficulty", value: "Medium" }
  ];

  const contentSections = [
    {
      title: "What is Virtualization?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Virtualization** allows a single physical computer to function as if it were several. In 2026, this is used to test new applications without cluttering the main system, run Linux inside Windows, or even for Android emulators. However, for software like VMWare to have real performance, you first need to "give permission" for the processor to use this feature directly in the BIOS.
        </p>
      `
    },
    {
      title: "1. Enabling in BIOS (VT-x and AMD-V)",
      content: `
        <p class="mb-4 text-gray-300">Without this step, no virtual machine will function correctly:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Restart the PC and enter the BIOS (DEL or F2).</li>
            <li><strong>If Intel:</strong> Look for 'Intel Virtualization Technology' or 'VT-x' and change to <strong>Enabled</strong>.</li>
            <li><strong>If AMD:</strong> Look for 'SVM Mode' or 'Secure Virtual Machine' and change to <strong>Enabled</strong>.</li>
            <li>These options are usually within the 'Advanced' or 'CPU Configuration' menu.</li>
        </ol>
      `
    },
    {
      title: "2. Configuring VMWare in 2026",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Creating your first VM:</h4>
            <p class="text-sm text-gray-300">
                1. Download <strong>VMWare Workstation Player</strong> (free version for personal use). <br/>
                2. Click on 'Create a New Virtual Machine'. <br/>
                3. Select the ISO of the system you want to install (e.g., Windows 11 or Ubuntu). <br/>
                4. <strong>Golden Rule:</strong> Never dedicate more than 50% of your RAM and your processor cores to the virtual machine. If you have 16GB of RAM, give a maximum of 8GB to the VM to prevent your main Windows from freezing.
            </p>
        </div>
      `
    },
    {
      title: "3. Virtualization vs Hyper-V",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Common Conflict:</strong> In 2026, Windows 11 has its own virtualization system called **Hyper-V**. 
            <br/><br/>If you try to run VMWare and it gives a performance error or freezes, check if 'Hyper-V' and 'Windows Sandbox' are enabled in 'Windows Features'. It is often necessary to <strong>disable Hyper-V</strong> so that VMWare has full and direct access to the hardware, ensuring much more fluidity.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/windows-sandbox-testar-virus",
      title: "Windows Sandbox",
      description: "Microsoft's native alternative."
    },
    {
      href: "/guides/hyper-v-desempenho-jogos",
      title: "Hyper-V and Games",
      description: "How virtualization affects FPS."
    },
    {
      href: "/guides/jogos-android-no-pc-melhores-emuladores",
      title: "Android Emulators",
      description: "Use virtualization to play mobile games on PC."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="25 min"
      difficultyLevel="Medium"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}


