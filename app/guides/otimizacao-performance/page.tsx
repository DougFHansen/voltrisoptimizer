import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'otimizacao-performance',
  title: "Performance Optimization: How to Make Your PC Fly in 2026",
  description: "Is your Windows slow? Learn the best system optimization techniques to reduce RAM and CPU usage and get maximum performance in games and work.",
  category: 'optimization',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Performance Optimization: How to Make Your PC Fly in 2026";
const description = "Is your Windows slow? Learn the best system optimization techniques to reduce RAM and CPU usage and get maximum performance in games and work.";
const keywords = [
  'how to optimize windows 11 for performance 2026',
  'improve slow pc performance windows 10 tutorial',
  'system optimization to gain fps 2026',
  'professional windows cleaning and acceleration',
  'make windows 11 faster definitive guide'
];

export const metadata: Metadata = createGuideMetadata('otimizacao-performance', title, description, keywords);

export default function PerformanceOptimizationGuide() {
  const summaryTable = [
    { label: "Check #1", value: "Disable Background Apps" },
    { label: "Check #2", value: "Adjust Visual Effects (Best Performance)" },
    { label: "Check #3", value: "Power Plan (High Performance)" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "What Really Works in Optimization?",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many programs promise to \"accelerate your PC with one click,\" but most are just marketing. Real optimization consists of removing what's not used and ensuring Windows doesn't limit your hardware's power. In 2026, with the heavier Windows 11, these manual adjustments are the difference between a PC that \"drags\" and one that responds instantly.
        </p>
      `
    },
    {
      title: "1. Visual Effects: Less Aesthetics, More Speed",
      content: `
        <p class="mb-4 text-gray-300">Windows transparency and animations consume your GPU cycles. Let's disable them:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Search for <strong>'Adjust the appearance and performance of Windows'</strong>.</li>
            <li>Select 'Adjust for best performance'.</li>
            <li>Check only: <i>'Smooth edges of screen fonts'</i> and <i>'Show thumbnails instead of icons'</i> so it's not too ugly.</li>
            <li>Click Apply. Windows will feel much snappier now.</li>
        </ol>
      `
    },
    {
      title: "2. Startup Management",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">RAM Trick:</h4>
            <p class="text-sm text-gray-300">
                Press <code>Ctrl + Shift + Esc</code> and go to the <strong>Startup Apps</strong> tab. Disable EVERYTHING you don't need that starts with Windows (Spotify, Steam, Overwolf, etc.). This reduces boot time and frees precious RAM for your games.
            </p>
        </div>
      `
    },
    {
      title: "3. The Hidden Power Plan",
      content: `
        <p class="mb-4 text-gray-300">
            Windows usually defaults to 'Balanced' mode to save energy. If you want full power:
            <br/>Go to Control Panel > Hardware and Sound > Power Options. Choose <strong>'High Performance'</strong>. If you have a high-end desktop, you can also enable 'Ultimate Performance' via CMD.
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "4. Advanced Disk and Storage Optimization",
      content: `
        <h4 class="text-white font-bold mb-3">🧠 Windows AI Intelligence</h4>
        <p class="text-gray-300 mb-4">
          Windows 11 uses AI to predict what you'll use and pre-loads it in the background. This consumes RAM and CPU:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li>Open the <strong>Windows Registry</strong> (type 'regedit' in the Start menu).</li>
          <li>Navigate to: <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\System</code></li>
          <li>Create a new DWORD value named <code>EnableActivityFeed</code> and set it to 0.</li>
          <li>Look for <code>HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced</code></li>
          <li>Create a new DWORD value named <code>EnableCdp</code> and set it to 0.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🧹 Deep Disk Cleanup</h4>
        <p class="text-gray-300 mb-4">
          Windows accumulates junk over time. Use Disk Cleanup and advanced commands:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li>Open <strong>Disk Cleanup</strong> as administrator and check all options, including 'Device driver packages'.</li>
          <li>Open Command Prompt as administrator and run:
            <div class="bg-black/30 p-3 rounded mt-2 font-mono text-xs">
              <p><code>dism /online /cleanup-image /spsuperseded</code></p>
              <p><code>sfc /scannow</code></p>
              <p><code>chkdsk C: /f /r</code></p>
            </div>
          </li>
          <li>For SSDs: Ensure TRIM is active and disable scheduled defragmentation:
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>Open 'Defragment and Optimize Drives'</li>
              <li>Click 'Change settings' and uncheck 'Run on a schedule'</li>
              <li>Manually 'Optimize' to trigger the TRIM command</li>
            </ul>
          </li>
        </ol>
      `
    },
    {
      title: "5. Virtual Memory and SysMain Settings",
      content: `
        <h4 class="text-white font-bold mb-3">🧠 RAM Management</h4>
        <p class="text-gray-300 mb-4">
          Virtual memory helps when physical RAM is full. Configure it for ideal performance:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li>Press Win + R, type <code>sysdm.cpl</code> and press Enter.</li>
          <li>Go to 'Advanced' → 'Performance' → 'Settings'.</li>
          <li>In the 'Advanced' tab, click 'Virtual Memory' → 'Change'.</li>
          <li>Uncheck 'Automatically manage paging file size'.</li>
          <li>Select your SSD and choose 'System managed size' or set a custom 4GB-8GB range.</li>
          <li>Click 'Set' and 'OK'. Restart your computer.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚡ SysMain (Superfetch)</h4>
        <p class="text-gray-300 mb-4">
          SysMain preloads apps into RAM. On modern NVMe SSDs, this can sometimes cause unnecessary stuttering:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li>Press Win + R, type <code>services.msc</code> and press Enter.</li>
          <li>Look for <strong>SysMain</strong>.</li>
          <li>Right-click → Properties.</li>
          <li>Change 'Startup type' to 'Disabled'.</li>
          <li>Click 'Stop' and then 'OK'.</li>
        </ol>
      `
    },
    {
      title: "6. Specific Optimizations for Gaming",
      content: `
        <h4 class="text-white font-bold mb-3">🎮 Windows Game Mode</h4>
        <p class="text-gray-300 mb-4">
          Windows 11 has a Game Mode that prioritizes resources for gaming:
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li>Go to Settings > Gaming > <strong>Game Mode</strong>.</li>
          <li>Turn it ON.</li>
          <li>In 'Graphics' settings, enable <strong>Hardware-accelerated GPU scheduling</strong>.</li>
          <li>This reduces CPU overhead and improves frametimes in modern titles.</li>
        </ol>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 GPU Power Settings</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
          <li><strong>NVIDIA:</strong> Open NVIDIA Control Panel → Manage 3D Settings.
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>Set 'Power management mode' to 'Prefer maximum performance'</li>
              <li>Set 'Low Latency Mode' to 'On' or 'Ultra'</li>
            </ul>
          </li>
          <li><strong>AMD:</strong> Open Radeon Software → Performance → Tuning.
            <ul class="list-disc ml-6 mt-2 space-y-1">
              <li>Set the Power Profile to 'Performance'</li>
              <li>Disable 'Power Efficiency' toggles</li>
            </ul>
          </li>
        </ol>
      `
    },
    {
      title: "7. Security Adjustments that Affect Performance",
      content: `
        <h4 class="text-white font-bold mb-3">🛡️ Windows Defender Exclusions</h4>
        <p class="text-gray-300 mb-4">
          The built-in antivirus can slow down game loading. Add exclusions for your game folders:
        </p>
        <p class="text-sm text-gray-300">
          Go to Windows Security > Virus & Threat Protection > Manage settings > <strong>Add or remove exclusions</strong>. Add your Steam/Epic Games folders here. <i>(Warning: Only do this for trusted game directories)</i>.
        </p>
      `
    }
  ];

  const faqItems = [
    {
      question: "Are these optimizations safe? Can I lose data?",
      answer: "<strong>The optimizations described here are safe</strong> and do not involve deleting critical data. They simply modify system settings and disable unnecessary features. <strong>It's recommended to create a System Restore Point</strong> before making significant changes. The adjustments focus on disabling services and features that consume resources without real benefits for most users."
    },
    {
      question: "Do I need to format Windows to apply these optimizations?",
      answer: "<strong>Formatting is not necessary</strong> to apply most optimizations. They can be done on an already installed Windows system. However, <strong>a clean installation of Windows 11</strong> provides the best results, as it avoids pre-installed bloatware and default settings that limit performance."
    },
    {
      question: "How many FPS can I gain with these optimizations?",
      answer: "The FPS gain varies significantly depending on hardware and the game. On average, you can expect <strong>a 5-15% increase</strong> in FPS after applying all optimizations. Heavily CPU-bound games tend to see higher gains. Optimization also improves frame stability, reducing micro-stutters."
    },
    {
      question: "Do these optimizations work on Windows 10 as well?",
      answer: "<strong>Most optimizations work on both Windows 10 and 11</strong>, with minor interface differences. Some specific Windows 11 features (like advanced Game Mode) won't be available on Windows 10, but the fundamental performance adjustments are applicable to both."
    },
    {
      question: "Do I need an SSD for these optimizations?",
      answer: "Optimizations are beneficial for both SSDs and traditional HDDs, but <strong>the impact is much greater on SSDs</strong>. If you still use an HDD, upgrading to an NVMe SSD is the single most effective hardware upgrade you can make for speed."
    },
    {
      question: "How can I revert the settings if something goes wrong?",
      answer: "If something goes wrong, use the <strong>System Restore Point</strong> created before the changes. You can also manually revert specific settings (re-enabling services, turning visual effects back on, etc.). For registry changes, hopefully you backed up the key or can reverse the 0 to 1 value."
    }
  ];

  const externalReferences = [
    { name: "Microsoft Docs - Performance Tuning", url: "https://learn.microsoft.com/en-us/windows/client-management/performance-tuning" },
    { name: "TechPowerUp - Hardware Database", url: "https://www.techpowerup.com/" },
    { name: "PassMark - Performance Test", url: "https://www.passmark.com/products/performancetest/" }
  ];

  const relatedGuides = [
    {
      href: "/guides/debloating-windows-11",
      title: "Debloat Windows",
      description: "Deepen your cleanup with scripts."
    },
    {
      href: "/guides/aceleracao-hardware-gpu-agendamento",
      title: "GPU Scheduling",
      description: "Vital tip for Windows 11 and modern cards."
    },
    {
      href: "/guides/otimizacao-jogos-pc",
      title: "Extreme Gaming Optimization",
      description: "Advanced techniques to maximize FPS and performance."
    }
  ];

  const allContentSections = [
    ...contentSections,
    ...additionalContentSections
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Beginner"
      author="Douglas F. Hansen"
      lastUpdated="March 2026"
      contentSections={allContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      externalReferences={externalReferences}
      showVoltrisOptimizerCTA={true}
      keyPoints={[
        'How Windows visual effects consume GPU and how to disable them',
        'Setting the correct power plan to unlock CPU potential',
        'Controlling startup apps to reduce boot time',
        'Advanced Regedit tweaks to disable background feeds',
        'Deep disk cleanup with DISM and SFC commands',
        'GPU configurations for maximum gaming performance (NVIDIA and AMD)',
      ]}
    />
  );
}

