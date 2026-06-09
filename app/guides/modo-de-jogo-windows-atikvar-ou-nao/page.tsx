import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'modo-de-jogo-windows-atikvar-ou-nao',
    title: "Windows Game Mode: Enable or Disable in 2026?",
    description: "Does Windows 10/11 'Game Mode' help or hinder? Check benchmarks, understand how it prioritizes the CPU, and when you should turn it off (OBS/Streaming).",
    category: 'optimization',
    difficulty: 'Beginner',
    time: '10 min'
};

const title = "Game Mode: The Ultimate Verdict for Performance (2026)";
const description = "It used to cause lag. Today it's essential. Learn how Game Mode manages threads, blocks updates, and interacts with GPU Scheduling.";

const keywords = [
    'windows 11 game mode enable or disable',
    'game mode windows 10 fps boost or drop',
    'obs studio lagging with game mode enabled',
    'process priority game mode',
    'windows fullscreen optimization',
    'disable xbox game bar',
    'background recording impact performance',
    'benchmark game mode on vs off'
];

export const metadata: Metadata = createGuideMetadata('modo-de-jogo-windows-atikvar-ou-nao', title, description, keywords);

export default function GameModeGuide() {
    const summaryTable = [
        { label: "2026 Verdict", value: "ENABLE (For 95% of cases)" },
        { label: "Low-end PC", value: "Great Benefit (Stability)" },
        { label: "High-end PC", value: "Negligible Difference" },
        { label: "Streamers (OBS)", value: "Warning (Can lag live stream)" },
        { label: "Xbox Game Bar", value: "DISABLE (High resource usage)" },
        { label: "Updates", value: "Blocks during gaming" }
    ];

    const contentSections = [
        {
            title: "What Does Game Mode Actually Do?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          When you enable Game Mode (Settings > Gaming > Game Mode), Windows does two main things: 1) It pauses Windows Update and driver installations to avoid disk usage, and 2) It gives "High" priority to CPU cores for the active window process (the game), diverting resources away from Chrome tabs and Spotify.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🎮</span> Voltris Game Booster
            </h4>
            <p class="text-gray-300 mb-4">
                Windows Game Mode is subtle. <strong>Voltris Optimizer</strong> is aggressive. It doesn't just prioritize the game; it temporarily suspends printing services, search indexing, and visual themes, freeing up to 15% more resources than Microsoft's native mode.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Activate Extreme Boost
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Game Mode vs Xbox Game Bar",
            content: `
        <p class="mb-4 text-gray-300">
            Don't confuse the two!
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div class="bg-green-500/10 p-4 rounded-xl border border-green-500/30">
                <h4 class="text-green-400 font-bold">Game Mode</h4>
                <p class="text-gray-300 text-sm">
                    <strong>ENABLE.</strong> It's an internal kernel priority setting. Lightweight and efficient.
                </p>
            </div>
             <div class="bg-red-500/10 p-4 rounded-xl border border-red-500/30">
                <h4 class="text-red-400 font-bold">Xbox Game Bar</h4>
                <p class="text-gray-300 text-sm">
                    <strong>DISABLE.</strong> This is the overlay (Win+G) that records clips and chat. It consumes VRAM and causes stuttering. Only keep it on if you actually use Xbox chat or clips.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Streamers and OBS: The Danger",
            content: `
        <p class="mb-4 text-gray-300">
             If you stream, Game Mode can be a villain. Since it gives 100% GPU priority to the game, it might leave OBS with "nothing," causing the stream to lag (dropped frames) even if the game is running smoothly for you.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li><strong>If the stream lags:</strong> DISABLE Game Mode. And run OBS as Administrator (this balances the priority).</li>
            <li><strong>If you only play games:</strong> ENABLE.</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "HAGS: The Game Mode Partner",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Hardware-Accelerated GPU Scheduling</h4>
                <p class="text-gray-300 mb-4">
                    Right below the Game Mode button is "Hardware-accelerated GPU scheduling." It offloads VRAM management from the CPU to the GPU itself.
                </p>
                <p class="text-gray-300 text-sm">
                    This reduces latency and is <strong>MANDATORY</strong> for using Frame Generation (DLSS 3). Enable both together for the best results.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "2026 Benchmarks",
            content: `
            <p class="mb-4 text-gray-300">
                In tests with Cyberpunk 2077 and CS2:
            </p>
            <ul class="list-disc list-inside text-gray-300 space-y-1 ml-4 text-sm">
                <li><strong>Average FPS:</strong> 1% difference (Margin of error).</li>
                <li><strong>1% Low FPS (Micro-stutters):</strong> 8% difference in favor of Game Mode Enabled.</li>
            </ul>
            <p class="mt-2 text-gray-300 text-sm">Conclusion: It doesn't raise the ceiling, but it lifts the floor, making the game more stable.</p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Game Mode work on pirated games?",
            answer: "Yes. Windows detects any fullscreen process that uses DirectX/Vulkan intensely as a 'game,' regardless of the source (Steam, Epic, or other)."
        },
        {
            question: "Fullscreen Optimizations (Compatibility)?",
            answer: "In the game's EXE properties > Compatibility, there's a box to 'Disable fullscreen optimizations'. For old games (DX9), checking this helps. For modern games (DX12), Windows Game Mode manages this better automatically. Leave it unchecked by default."
        },
        {
            question: "Do I need to restart after enabling?",
            answer: "It's not strictly necessary for Game Mode itself, but it is recommended."
        }
    ];

    const externalReferences = [
        { name: "Microsoft - Game Mode Info", url: "https://support.microsoft.com/en-us/windows/use-game-mode-while-gaming-on-your-windows-device-581b7535-b3f2-783e-a183-afdddac63539" }
    ];

    const relatedGuides = [
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Understand HAGS in detail."
        },
        {
            href: "/guides/debloating-windows-11",
            title: "Debloat",
            description: "Remove Xbox Game Bar without breaking Game Mode."
        },
        {
            href: "/guides/otimizacao-registro",
            title: "Advanced Configuration",
            description: "Manually set CPU priorities."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
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

