import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'atualizacao-drivers-video',
  title: "How to Update Video Drivers (NVIDIA, AMD, and Intel) in 2026: Complete Guide",
  description: "Is your game crashing, lagging, or showing artifacts? Learn the 7 definitive ways to keep your video drivers (NVIDIA, AMD, Intel Arc) updated.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '45 min'
};

const title = "How to Update Video Drivers (NVIDIA, AMD, and Intel) in 2026: Complete Guide";
const description = "Is your game crashing, lagging, or showing artifacts? Learn the 7 definitive ways to keep your video drivers (NVIDIA, AMD, Intel Arc) updated, how to perform a clean installation, and solve common problems in 2026.";
const keywords = [
  'how to update video drivers nvidia amd intel 2026',
  'best nvidia driver for performance tutorial',
  'update amd adrenalin driver step by step',
  'video driver error stopped responding fix',
  'install video driver windows 11 manual or automatic',
  'nvidia game ready vs studio whql driver',
  'how to do clean video driver installation',
  'common nvidia amd driver issues resolution'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('atualizacao-drivers-video', title, description, keywords, locale);
}

export default function VideoDriverGuide() {
  const summaryTable = [
    { label: "NVIDIA", value: "NVIDIA App / GeForce Experience → Game Ready or Studio" },
    { label: "AMD", value: "AMD Software: Adrenalin Edition → WHQL Drivers" },
    { label: "Intel", value: "Intel Arc & Graphics Control Panel" },
    { label: "Ideal Driver", value: "Game Ready (NVIDIA) or WHQL (AMD) for gaming" },
    { label: "Clean Install", value: "Use DDU before switching drivers (recommended)" },
    { label: "Vital Check", value: "Remove old driver before swapping cards" },
    { label: "Frequency", value: "Update every 1-2 months or after major game launches" }
  ];

  const contentSections = [
    {
      title: "Why Update Video Drivers? Critical Importance in 2026",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          The video driver is the <strong>instruction manual</strong> that Windows uses to communicate with your graphics card. Without the correct driver, your expensive GPU is just a piece of metal. In 2026, manufacturers release <strong>'Game Ready' or 'Studio'</strong> updates almost every week, fixing bugs for new game releases and optimizing technologies like <strong>Ray Tracing, DLSS 4.0, FSR 4.0, and AV1 Encoding</strong>.
        </p>
        
        <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/30 my-6">
            <h4 class="text-xl font-bold text-purple-300 mb-4">Driver Architecture and Compatibility</h4>
            
            <h5 class="text-lg font-semibold text-white mt-6 mb-3">Modern Driver Models</h5>
            <p class="text-gray-300 mb-4">
              In 2026, video drivers use efficient architectures that communicate directly with modern APIs:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h6 class="font-bold text-green-400 mb-2">DirectX 12 Ultimate</h6>
                    <ul class="text-sm text-gray-300 space-y-1">
                        <li>• Real-time Ray Tracing support</li>
                        <li>• Variable Rate Shading (VRS)</li>
                        <li>• Mesh Shaders for complex geometry</li>
                        <li>• Sampler Feedback for efficient streaming</li>
                    </ul>
                </div>
                
                <div class="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                    <h6 class="font-bold text-green-400 mb-2">Vulkan 1.3 & OpenGL Next</h6>
                    <ul class="text-sm text-gray-300 space-y-1">
                        <li>• Low-level access for lower overhead</li>
                        <li>• Efficient CPU multi-threading</li>
                        <li>• Cross-platform compatibility</li>
                    </ul>
                </div>
            </div>
            
            <h5 class="text-lg font-semibold text-white mt-6 mb-3">Real Impact of Updated Drivers</h5>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-700 text-sm">
                    <thead>
                        <tr class="bg-gray-800">
                            <th class="border border-gray-700 px-4 py-2 text-left">Scenario</th>
                            <th class="border border-gray-700 px-4 py-2 text-left">Typical Gain</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-gray-800/50">
                            <td class="border border-gray-700 px-4 py-2">New AAA Game</td>
                            <td class="border border-gray-700 px-4 py-2">20-40% FPS</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-700 px-4 py-2">DLSS/FSR Tech</td>
                            <td class="border border-gray-700 px-4 py-2">10-30% FPS</td>
                        </tr>
                        <tr class="bg-gray-800/50">
                            <td class="border border-gray-700 px-4 py-2">Bug Fixes</td>
                            <td class="border border-gray-700 px-4 py-2">Stability</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      `
    },
    {
      title: "Driver Types: Game Ready vs Studio vs WHQL",
      content: `
        <h4 class="text-white font-bold mb-3">🛡️ WHQL Drivers (Windows Hardware Quality Labs)</h4>
        <p class="mb-4 text-gray-300">
          The <strong>most stable and tested</strong> drivers. They have passed Microsoft's rigorous testing and are recommended for <strong>daily use and productivity</strong>.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎮 Game Ready Drivers (NVIDIA) and Official Drivers (AMD)</h4>
        <p class="mb-4 text-gray-300">
          Released with optimizations for <strong>newly launched games</strong>. They are newer than WHQL and might have minor bugs, but offer the best performance for recent titles.
        </p>
        
        <h4 class="text-white font-bold mb-3 mt-6">🎬 Studio Drivers (NVIDIA)</h4>
        <p class="mb-4 text-gray-300">
          Optimized for <strong>content creation</strong> (Blender, Premiere, DaVinci). If you are a designer, editor, or streamer, these offer better stability in creative software.
        </p>
      `
    },
    {
      title: "Where to Download Official Drivers (NEVER use 3rd party sites)",
      content: `
        <div class="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 mb-6">
          <h4 class="text-amber-400 font-bold mb-2">⚠️ NEVER use Driver Booster or 3rd party sites!</h4>
          <p class="text-sm text-gray-300">
            Programs like \"Driver Booster\" or sites like \"driverpack.net\" install generic or outdated drivers that can cause <strong>BSODs, instability, and performance loss</strong>. ALWAYS use official sites.
          </p>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📥 Official Download Links</h4>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li><strong>NVIDIA:</strong> geforce.com/drivers</li>
          <li><strong>AMD:</strong> amd.com/support</li>
          <li><strong>Intel:</strong> intel.com/content/www/us/en/download-center/home.html</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Video Driver Architecture and Hardware Communication",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
          Modern video driver architecture involves multiple layers of abstraction between the OS and the GPU hardware.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">API Layer (User Mode)</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>DirectX 12, Vulkan, OpenGL</li>
              <li>Shader compilation pipeline</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">Hardware Layer (Kernel Mode)</h5>
            <ul class="list-disc list-inside text-gray-300 space-y-1 text-sm">
              <li>GPU scheduling</li>
              <li>Memory management unit (MMU)</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const faqItems = [
    {
      question: "Which driver should I choose: Game Ready, Studio, or WHQL?",
      answer: "For gaming, use Game Ready (NVIDIA) or WHQL (AMD). For content creation, use Studio Drivers (NVIDIA). WHQL are the most stable for general productivity."
    },
    {
      question: "Do I need to use DDU for every update?",
      answer: "NO! Only use DDU if you have persistent issues like crashes or artifacts. For normal updates, the official installer is enough."
    },
    {
      question: "How do I know which graphics card I have?",
      answer: "Press Win+R, type 'dxdiag', and hit Enter. Check the 'Display' tab for the 'Device Name'."
    },
    {
      question: "Can I update drivers via Windows Update?",
      answer: "Yes, but it's NOT recommended. Windows Update often provides simplified (DCH) versions without full control panels. Download directly from the manufacturer."
    }
  ];

  const externalReferences = [
    { name: "Official NVIDIA Drivers", url: "https://www.nvidia.com/drivers/" },
    { name: "Official AMD Drivers", url: "https://www.amd.com/support" },
    { name: "Display Driver Uninstaller (DDU)", url: "https://www.guru3d.com/files-details/display-driver-uninstaller-download.html" }
  ];

  const relatedGuides = [
    {
      href: "/guides/como-usar-ddu-driver-uninstaller",
      title: "DDU Guide",
      description: "How to wipe drivers completely."
    },
    {
      href: "/guides/aceleracao-hardware-gpu-agendamento",
      title: "GPU Scheduling",
      description: "Optimize your GPU for faster rendering."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="45 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={summaryTable}
      faqItems={faqItems}
      externalReferences={externalReferences}
      relatedGuides={relatedGuides}
    />
  );
}
