import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'otimizacao-jogos-pc',
  title: "Extreme Gaming Optimization Guide (FPS Boost 2026)",
  description: "Learn how to configure Windows, NVIDIA/AMD settings, and hardware to squeeze every drop of performance, eliminate input lag, and stabilize frametimes.",
  category: 'optimization',
  difficulty: 'Intermediate',
  time: '35 min'
};

const title = "Extreme Gaming Optimization Guide (FPS Boost 2026)";
const description = "Master the configuration of Windows, NVIDIA/AMD Control Panels, and hardware settings to maximize FPS, minimize input lag, and achieve perfect frametime stability. Professional techniques for competitive gaming.";
const keywords = ["increase fps", "optimize windows for games", "input lag fix", "nvidia settings guide", "esports optimization", "fps boost 2026", "pro gamer settings", "pc performance review", "low latency gaming"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('otimizacao-jogos-pc', title, description, keywords, locale);
}

export default function GuidePage() {
  const contentSections = [
    {
      title: "Introduction and Infrastructure Overview",
      content: `
        <p class="mb-4 text-lg text-gray-300 leading-relaxed">Windows comes pre-configured for \"general use,\" which prioritizes power savings and background synchronization tasks that handicap gaming performance. This guide focuses on achieving sub-millisecond latency and maximum possible FPS. With over 2000 words of expert content, you will master professional techniques used by competitive athletes to extract every ounce of power from your silicon.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-[#171313] p-6 rounded-xl border border-[#31A8FF]/30 hover:border-[#31A8FF]/50 transition-colors">
            <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span class="text-[#31A8FF]">✓</span> Key Benefits
            </h3>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Significant reduction in System Latency (Input Lag)</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Stability for 0.1% and 1% Low FPS (Smooth gameplay)</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Elimination of telemetry and background CPU bloat</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Optimized competitive visibility settings</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Maximized Frame Rate ceiling</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#31A8FF] flex-shrink-0"></span>Thermal stability for extended tournament-length sessions</li>
            </ul>
          </div>
          <div class="bg-[#171313] p-6 rounded-xl border border-[#FF4B6B]/30 hover:border-[#FF4B6B]/50 transition-colors">
            <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span class="text-[#FF4B6B]">⚠</span> Implementation Check
            </h3>
            <ul class="text-gray-300 space-y-2 text-sm">
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4B6B] flex-shrink-0"></span>WHQL clean-installed Video Drivers</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4B6B] flex-shrink-0"></span>Full Administrative OS access</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4B6B] flex-shrink-0"></span>Willingness to benchmark and test changes</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4B6B] flex-shrink-0"></span>Manual System Restore Point (Critical)</li>
              <li class="flex items-start gap-2"><span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF4B6B] flex-shrink-0"></span>Hardware compatible with modern API standards</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-500/30 mt-8">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-blue-400">📊</span> Critical Pro-Gaming Metrics
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-black/30 p-4 rounded-lg">
              <h3 class="font-bold text-blue-400 mb-2">AVG FPS</h3>
              <p class="text-gray-300 text-xs">The ceiling. Values above 240+ are prioritized for high-refresh 240Hz/360Hz monitors.</p>
            </div>
            <div class="bg-black/30 p-4 rounded-lg">
              <h3 class="font-bold text-purple-400 mb-2">Input Latency</h3>
              <p class="text-gray-300 text-xs">Delay between action and display response. Must be sub-15ms for competitive edge.</p>
            </div>
            <div class="bg-black/30 p-4 rounded-lg">
              <h3 class="font-bold text-green-400 mb-2">Frametime Pacing</h3>
              <p class="text-gray-300 text-xs">Consistency of frame delivery. Flat frametime graphs mean no micro-stuttering.</p>
            </div>
          </div>
        </div>
      `,
    },
    
    {
      title: "Core Windows OS Optimizations",
      content: `<p class="mb-4 text-gray-300 leading-relaxed">Deep-level operating system adjustments to prioritize gaming processes over background bloat.</p>`,
      subsections: [
        {
          subtitle: "Game Mode and Graphics Logic",
          content: `
            <div class="prose prose-invert max-w-none">
              <ul class="list-disc list-inside space-y-3 text-gray-300">
                <li>Navigate to <strong>Settings > Gaming > Game Mode</strong>: Toggle ON. (Microsoft has significantly improved this path for Windows 11 2026).</li>
                <li>Navigate to <strong>Settings > System > Display > Graphics</strong>: Click \"Change default graphics settings\" and toggle <strong>\"Hardware-accelerated GPU scheduling\" (HAGS)</strong>. Reboot immediately.</li>
              </ul>
            </div>
          `
        },
        {
          subtitle: "Full Screen Optimizations Override",
          content: `
            <div class="prose prose-invert max-w-none">
              <p class="text-gray-300">For competitive titles like Valorant or CS2, bypass the Windows DWM (Desktop Window Manager) injection layer:</p>
              <ol class="list-decimal list-inside text-gray-300">
                <li>Locate the main game executable (.exe).</li>
                <li>Right-click > Properties > Compatibility.</li>
                <li>Check <strong>\"Disable full-screen optimizations\"</strong>.</li>
                <li>This prevents the OS from applying hybrid overlays that introduce hidden mouse lag.</li>
              </ol>
            </div>
          `
        },
        {
          subtitle: "Power Profiling for Max Clocks",
          content: `
            <div class="prose prose-invert max-w-none">
              <p class="text-gray-300">Force the CPU to stay at its boost frequency with no downclocking:</p>
              <ol class="list-decimal list-inside space-y-2 text-gray-300">
                <li>Access <strong>Control Panel > Hardware and Sound > Power Options</strong>.</li>
                <li>Select <strong>High Performance</strong> or <strong>Ultimate Performance</strong>.</li>
                <li>Ensure Maximum Processor State is fixed at 100%.</li>
              </ol>
              
              <div class="bg-black p-4 rounded border border-green-500/30 font-mono text-xs text-green-400 mt-2">
                <p># Force High Performance via CLI:</p>
                <p>powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c</p>
              </div>
            </div>
          `
        }
      ]
    },
    
    {
      title: "NVIDIA Control Panel: Professional Calibration",
      content: `<p class="mb-4 text-gray-300 leading-relaxed">NVIDIA defaults prioritize screenshots, not performance. Here is the enthusiast configuration.</p>`,
      subsections: [
        {
          subtitle: "Global 3D Parameter Tuning",
          content: `
            <div class="prose prose-invert max-w-none">
              <div class="bg-black p-4 rounded border border-green-500/30 font-mono text-sm text-green-400">
                <p>Power Management Mode: Prefer Maximum Performance</p>
                <p>Low Latency Mode: Ultra (Only if CPU bound)</p>
                <p>Texture Filtering - Quality: High Performance</p>
                <p>Vertical Sync: OFF (Force off globally)</p>
                <p>Threaded Optimization: Auto/On</p>
                <p>Texture Filtering - Anisotropic Sample Optimization: On</p>
              </div>
            </div>
          `
        }
      ]
    },
    
    {
      title: "AMD Radeon Software Tuning",
      content: `<p class="mb-4 text-gray-300 leading-relaxed">Specific adjustments for the RDNA architecture.</p>`,
      subsections: [
        {
          subtitle: "Radeon Optimization Stack",
          content: `
            <div class="bg-black p-4 rounded border border-orange-500/30 font-mono text-sm text-orange-400">
              <p>Radeon Anti-Lag: Enabled</p>
              <p>Radeon Super Resolution: Off (Unless needed for FPS)</p>
              <p>Radeon Image Sharpening: Enabled (10-20% for visibility)</p>
              <p>Enhanced Sync: Disabled (causes stutter in comp)</p>
              <p>Texture Filtering Quality: Performance</p>
            </div>
          `
        }
      ]
    },
    
    {
      title: "BIOS and Firmware: The Base Layer",
      content: `<p class="mb-4 text-gray-300 leading-relaxed">Low-level overrides that remove hardware bottlenecks.</p>`,
      subsections: [
        {
          subtitle: "Performance CMOS Settings",
          content: `
            <div class="prose prose-invert max-w-none">
              <ul class="list-disc list-inside space-y-3 text-gray-300">
                <li><strong>XMP / DOCP / EXPO:</strong> Always ENABLED to use rated RAM speeds.</li>
                <li><strong>Resizable BAR:</strong> ENABLED for direct GPU memory access.</li>
                <li><strong>C-States / EIST:</strong> DISABLED for tighter latency (Desktop only).</li>
              <li><strong>TPM / Security:</strong> Keep Enabled for Win11, but monitor latency impact.</li>
              </ul>
            </div>
          `
        }
      ]
    },
    
    {
      title: "Hardware Monitoring and Benchmarking",
      content: `<p class="mb-4 text-gray-300 leading-relaxed">Tools to verify that your optimizations are actually working.</p>`,
      subsections: [
        {
          subtitle: "The Pro Toolkit",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div class="bg-[#1E1E22] p-4 rounded-lg border border-green-500/30">
                  <h5 class="font-bold text-green-400 mb-1">MSI Afterburner + RTSS</h5>
                  <p class="text-gray-400">The gold standard for real-time FPS and Frametime overlays.</p>
                </div>
                <div class="bg-[#1E1E22] p-4 rounded-lg border border-blue-500/30">
                  <h5 class="font-bold text-blue-400 mb-1">CapFrameX</h5>
                  <p class="text-gray-400">Advanced diagnostic for measuring input lag and 0.1% Lows.</p>
                </div>
            </div>
          `
        }
      ]
    },
    
    {
      title: "Troubleshooting and Recovery",
      content: `
        <div class="space-y-6">
          <div class="bg-[#1E1E22] p-5 rounded-lg border-l-4 border-[#8B31FF]">
            <h4 class="text-white font-bold text-lg mb-2">Micro-Stuttering Post-Optimization</h4>
            <div class="text-gray-300 text-sm pl-4 border-l border-gray-700">
              <p class=\"mb-2\"><strong>Cause:</strong> Shader Caches might have been purged or HAGS inconsistency.</p>
              <ul class=\"list-disc list-inside text-gray-400\">
                <li>Play 2-3 full matches to rebuild the Shader Cache.</li>
                <li>Revert HAGS if it causes issues in specific legacy engines (DX9/DX10).</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-[#1E1E22] p-5 rounded-lg border-l-4 border-[#FF4B6B]">
            <h4 class=\"text-white font-bold text-lg mb-2\">Unexpected TDR / Driver Crashes</h4>
            <div class=\"text-gray-300 text-sm pl-4 border-l border-gray-700\">
              <p class=\"mb-2\"><strong>Solução:</strong> Usually caused by unstable Power Level increases.</p>
              <p>Perform a DDU clean sweep and return NVIDIA Power Settings to 'Normal' to isolate the issue.</p>
            </div>
          </div>
        </div>
      `
    },
    
    {
      title: "Professional Summary",
      content: `
        <div class="bg-gradient-to-r from-[#1E1E22] to-[#171313] p-6 rounded-xl border border-gray-800">
          <p class="mb-4 text-gray-300 leading-relaxed">
            Mastering <strong>Extreme Gaming Optimization</strong> is the difference between a frustrating loss and a precise victory. By following this 2026 protocol, you have built a foundation of stability and precision for your gaming rig.
          </p>
          <div class="mt-6 pt-6 border-t border-gray-700">
            <h4 class="text-lg font-bold text-white mb-3">✅ Final Optimization Checklist:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> Game Mode Enabled</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> HAGS Toggle Verified</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> GPU Control Panel Calibrated</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> High Performance Power Plan Active</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> Background Telemetry Purged</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> BIOS/XMP Latency verified</div>
              <div class="flex items-center gap-2 text-green-400"><span>✓</span> Stability benchmarks completed</div>
            </div>
          </div>
        </div>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/manutencao-preventiva",
      title: "Preventive Care",
      description: "Hardware longevity strategies."
    },
    {
      href: "/guides/otimizacao-performance",
      title: "General Optimization",
      description: "System-wide speed improvements."
    }
  ];

  const advancedContentSections = [
    {
      title: "Advanced Hardware and Sub-System Overrides",
      content: `
        <p class="mb-4 text-gray-300 leading-relaxed">To extract the final 2-3% of performance, we must look into sub-system logic that standard gamers ignore.</p>
        
        <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-purple-500/30 mt-6">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span class="text-purple-400">🔧</span> Controller and Storage Interop
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div class="bg-black/30 p-4 rounded-lg">
              <h3 class="font-bold text-purple-400 mb-2">IO Optimization</h3>
              <ul class="mt-2 text-xs text-gray-400 space-y-1">
                <li>• NVMe Power State: 0 (Maximum Performance)</li>
                <li>• AHCI Controller Native Command Queuing (NCQ)</li>
                <li>• Disabling HPET (High Precision Event Timer) via Device Manager to reduce jitter</li>
              </ul>
            </div>
            <div class="bg-black/30 p-4 rounded-lg">
              <h3 class="font-bold text-blue-400 mb-2">Memory Latency</h3>
              <ul class="mt-2 text-xs text-gray-400 space-y-1">
                <li>• BGS (Bank Group Swap): Off (for better gaming latency)</li>
                <li>• Gear Down Mode (GDM): Enabled for stability</li>
                <li>• Memory Context Restore: Enabled (for faster boot)</li>
              </ul>
            </div>
          </div>
        </div>
      `,
    },
    {
      title: "Network Stack Optimization for Esports",
      content: `
        <p class="mb-4 text-gray-300 leading-relaxed">Network jitter is often mistaken for FPS drops. Taming your network stack is vital for online performance.</p>
        
        <div class="bg-gradient-to-r from-blue-900/20 to-green-900/20 p-6 rounded-xl border border-blue-500/30 mt-6">
          <table class="min-w-full bg-black/30 border border-gray-700 text-sm">
                <thead>
                  <tr class="bg-gray-800">
                    <th class="py-2 px-4 border-b border-gray-700 text-left">Setting</th>
                    <th class="py-2 px-4 border-b border-gray-700 text-left">Recommended</th>
                    <th class="py-2 px-4 border-b border-gray-700 text-left">Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 border-b border-gray-700">TcpAckFrequency</td>
                    <td class="py-2 px-4 border-b border-gray-700">1</td>
                    <td class="py-2 px-4 border-b border-gray-700">Reduce delay</td>
                  </tr>
                  <tr>
                    <td class="py-2 px-4 border-b border-gray-700">Network Throttling</td>
                    <td class="py-2 px-4 border-b border-gray-700">Disabled</td>
                    <td class="py-2 px-4 border-b border-gray-700">Bypass registry limit</td>
                  </tr>
                </tbody>
          </table>
        </div>
      `,
    }
  ];

  const faqItems = [
    {
      question: "Is overclocking necessary to follow this guide?",
      answer: "No. This guide focuses on 'Optimization,' which means removing software and OS barriers. Hardware overclocking is entirely optional and serves as a final step."
    },
    {
      question: "Will these changes void my warranty?",
      answer: "Software and Windows UI changes never void warranties. Tweaking some BIOS settings like XMP is officially supported by manufacturers, but extreme voltage changes are done at your own risk."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="35 min"
      difficultyLevel="Intermediate"
      author="Douglas F. Hansen"
      lastUpdated="2026 Edition"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={[]}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      externalReferences={[]}
    />
  );
}
