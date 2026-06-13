import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'hyper-v-desempenho-jogos',
  title: "Hyper-V: Enable or Disable for Better Gaming Performance?",
  description: "Find out if Hyper-V (VBS) is stealing your frames! Learn how Windows virtualization works and when to disable it to gain FPS in 2026...",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '15 min'
};

const title = "Hyper-V: Enable or Disable for Better Gaming Performance?";
const description = "Find out if Hyper-V (VBS) is stealing your frames! Learn how Windows virtualization works and when to disable it to gain FPS in 2026.";
const keywords = [
    'hyper-v reduces fps in games windows 11 2026',
    'how to disable hyper-v for valorant and cs2',
    'what is virtualization-based security vbs windows',
    'gain gaming performance by disabling hyper-v tutorial',
    'hyper-v and android emulator conflicts 2026 fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hyper-v-desempenho-jogos', title, description, keywords, locale);
}

export default function HyperVPerformanceGuide() {
    const summaryTable = [
        { label: "What is it", value: "Microsoft Virtualization Technology" },
        { label: "FPS Impact", value: "Can reduce by 5% to 25% in older games" },
        { label: "Mandatory Use", value: "WSL2, Docker, and Core Isolation (VBS)" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "The Cost of Security in Windows 11",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In Windows 11, Microsoft enabled features like <strong>VBS (Virtualization-Based Security)</strong> by default. It uses the Hyper-V engine to create a security "bubble" around your system. While this makes your PC nearly immune to certain types of persistent malware, it creates an extra layer of processing that can "steal" CPU from your games. In 2026, with many-core CPUs, the impact is smaller, but on entry-level processors, the FPS difference is noticeable.
        </p>
      `
        },
        {
            title: "1. How to know if Hyper-V is active?",
            content: `
        <p class="mb-4 text-gray-300">Don't rely just on the features menu. Check the actual status:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for <strong>'System Information'</strong> (msinfo32) in Start.</li>
            <li>Scroll to the bottom of the list in the 'System Summary' tab.</li>
            <li>Look for <strong>'Virtualization-based security'</strong>. If it says 'Running', Hyper-V is active and impacting your system.</li>
        </ol>
      `
        },
        {
            title: "2. When SHOULD you keep it active?",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Do not turn off if:</h4>
            <p class="text-sm text-gray-300">
                - You use <strong>Google Play Games for PC</strong>. <br/>
                - You are a developer and use <strong>Docker</strong> or <strong>WSL2</strong>. <br/>
                - You prioritize absolute security over a few extra frames. <br/>
                Disabling Hyper-V will leave your PC more vulnerable to "Kernel Level" attacks.
            </p>
        </div>
      `
        },
        {
            title: "3. How to safely disable it",
            content: `
        <p class="mb-4 text-gray-300">
            If you decided that FPS is more important:
            <br/>1. Go to 'Turn Windows features on or off'.
            <br/>2. Uncheck <strong>'Hyper-V'</strong>, 'Virtual Machine Platform', and 'Windows Hypervisor Platform'.
            <br/>3. Restart the PC.
            <br/><strong>Extra Tip:</strong> To disable only the security part (VBS) without removing the engine, go to <strong>Windows Security > Device Security > Core isolation details</strong> and turn off 'Memory Integrity'.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/vbs-memory-integrity-performance",
            title: "Memory Integrity",
            description: "Deep dive into this feature."
        },
        {
            href: "/guides/atualizar-bios-seguro",
            title: "BIOS Virtualization",
            description: "How to turn off support in the motherboard."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize Windows",
            description: "Extra performance tips for Windows 11."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}



