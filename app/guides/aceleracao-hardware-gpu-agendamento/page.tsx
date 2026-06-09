import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'aceleracao-hardware-gpu-agendamento',
  title: "GPU Hardware Scheduling (HAGS): Enable or Not in 2026?",
  description: "Does Hardware-Accelerated GPU Scheduling improve FPS or cause bugs? Understand the vital role it plays for DLSS 3 and Frame Gen, and when it should be left off.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '12 min'
};

const title = "HAGS Guide: What is GPU Scheduling and how it affects your FPS";
const description = "A secret switch in Windows that changes how your graphics card communicates with memory. Essential for RTX 4000 series, but controversial for older cards (GTX 10/16).";

const keywords = [
  'hardware accelerated gpu scheduling on or off',
  'hags on or off valorant cs2',
  'gpu scheduling windows 11 stuttering',
  'dlss 3 frame generation requires hags',
  'obs black screen gpu scheduling fix',
  'hardware accelerated gpu scheduling benchmark',
  'input lag gpu scheduling reduce',
  'nvidia reflex vs hags'
];

export const metadata: Metadata = createGuideMetadata('aceleracao-hardware-gpu-agendamento', title, description, keywords);

export default function HAGSGuide() {
  const summaryTable = [
    { label: "RTX 4000/3000 Cards", value: "ENABLE (Required for DLSS 3)" },
    { label: "GTX 10/16 Cards", value: "TEST (May cause lag)" },
    { label: "OBS Studio", value: "May conflict (Update fixed it)" },
    { label: "Latency", value: "Reduces CPU Latency" },
    { label: "VRAM", value: "More efficient management" },
    { label: "Location", value: "Settings > Display > Graphics" }
  ];

  const contentSections = [
    {
      title: "What is HAGS?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Traditionally, the CPU (Processor) told the GPU what to render and managed the video memory (VRAM). With <strong>Hardware-Accelerated GPU Scheduling</strong> (HAGS), the Graphics Card gains autonomy to manage its own memory. This removes load from the processor.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">📊</span> Voltris Benchmark
            </h4>
            <p class="text-gray-300 mb-4">
                Not sure if your FPS has improved? The human eye can be deceiving. The <strong>Voltris Optimizer</strong> includes an FPS counter with real-time latency graphing (Overlay) so you can test with HAGS ON and OFF and see mathematically which is better for your machine.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Monitor FPS
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "When to ENABLE?",
      content: `
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>If you have RTX 40 Series (4060, 4070...):</strong> MANDATORY. Frame Generation (DLSS 3) does not work without it.</li>
            <li><strong>If your CPU is weak (CPU Bottleneck):</strong> HAGS helps offload the processor, potentially giving 5-10 extra FPS in CPU-bound scenarios.</li>
            <li><strong>Modern Games (Cyberpunk, Alan Wake 2):</strong> Generally benefit.</li>
        </ul>
      `
    },
    {
      title: "When to DISABLE?",
      content: `
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>Older Cards (GTX 1060, 1660):</strong> Many users report micro-stuttering (stutters) with HAGS enabled on these cards. The driver doesn't seem to handle the older Pascal/Turing architecture well.</li>
            <li><strong>Issues with OBS/Discord:</strong> If your stream keeps stuttering or the shared screen on Discord flickers, try turning it off. HAGS prioritizes the game so much that it "forgets" to render the OBS/Discord video. (Recent versions of OBS 29+ fixed this, but it still happens).</li>
            <li><strong>Light Competitive Games (Valorant, CS):</strong> Makes no positive difference, and some pros prefer it off for "mouse feeling" (although technically it should reduce input lag).</li>
        </ul>
      `
    },
    {
      title: "How to Enable/Disable",
      content: `
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
            <li>Go to <strong>Settings > System > Display</strong>.</li>
            <li>Scroll to the bottom and click on <strong>Graphics</strong>.</li>
            <li>Click on "Change default graphics settings."</li>
            <li>Toggle the "Hardware-accelerated GPU scheduling" switch.</li>
            <li><strong>RESTART YOUR PC.</strong> The change will not take effect without a restart.</li>
        </ol>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Relationship with Nvidia Reflex",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-green-400 font-bold mb-4 text-xl">System Latency</h4>
                <p class="text-gray-300 mb-4">
                    HAGS and Nvidia Reflex work in different areas. Reflex cleans the Render Queue to ensure the CPU doesn't send more frames than the GPU can handle. HAGS optimizes how these frames arrive in VRAM.
                </p>
                <p class="text-gray-300 text-sm">
                    <strong>Best Combo:</strong> HAGS Enabled + Reflex On + Boost. This ensures the mathematically lowest possible latency in Windows 11.
                </p>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "The option doesn't appear for me?",
      content: `
            <p class="mb-4 text-gray-300">
                If the option doesn't exist on your Windows:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Your graphics card is too old (pre-GTX 10 series).</li>
                <li>Your video driver is outdated (Update it!).</li>
                <li>Your Windows 10 is an old version (Update to 2004 or newer).</li>
            </ul>
            `
    }
  ];

  const faqItems = [
    {
      question: "Does AMD have HAGS?",
      answer: "Yes, on RX 7000 and 6000 series cards with recent drivers, the option appears in Windows. The effect is similar to Nvidia."
    },
    {
      question: "Blue Screen with HAGS?",
      answer: "Rare, but it happens if the graphics card's VRAM is faulty. HAGS stresses the memory manager more. If you get a blue screen when turning it on, it's an unintentional stress test that revealed a hardware defect."
    }
  ];

  const externalReferences = [
    { name: "Microsoft Dev Blog - HAGS Explained", url: "https://devblogs.microsoft.com/directx/hardware-accelerated-gpu-scheduling/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/modo-de-jogo-windows-atikvar-ou-nao",
      title: "Game Mode",
      description: "Another native Windows setting."
    },
    {
      href: "/guides/otimizacoes-para-notebook-gamer",
      title: "Notebooks",
      description: "HAGS helps a lot in notebooks with power limits."
    },
    {
      href: "/guides/atualizacao-drivers-video",
      title: "Drivers",
      description: "Keep your drivers up to date for HAGS to work."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="12 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      externalReferences={externalReferences}
    />
  );
}
