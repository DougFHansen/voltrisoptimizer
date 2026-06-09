import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'nvidia-refelx-on-vs-boost-diferenca',
  title: "NVIDIA Reflex: What is the Difference Between ON and ON + BOOST? (2026)",
  description: "Want to reduce command lag? Learn how to correctly configure NVIDIA Reflex and know when to use Boost mode in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "NVIDIA Reflex: What is the Difference Between ON and ON + BOOST? (2026)";
const description = "Want to reduce command lag? Learn how to correctly configure NVIDIA Reflex and know when to use Boost mode in 2026.";
const keywords = [
    'nvidia reflex on vs boost difference 2026',
    'how to reduce input lag in games tutorial',
    'is nvidia reflex worth it for valorant and fortnite',
    'what does boost mode do in nvidia reflex guide',
    'gaming pc system latency how to decrease 2026'
];

export const metadata: Metadata = createGuideMetadata('nvidia-refelx-on-vs-boost-diferenca', title, description, keywords);

export default function NvidiaReflexGuide() {
    const summaryTable = [
        { label: "Reflex OFF", value: "Default / Larger render queue" },
        { label: "Reflex ON", value: "CPU-GPU Sync / Lower latency" },
        { label: "Reflex ON + BOOST", value: "Forces maximum GPU clock / Maximum reaction" },
        { label: "Hardware Required", value: "NVIDIA GTX 900 or higher" }
    ];

    const contentSections = [
        {
            title: "What is NVIDIA Reflex?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In competitive games in 2026, winning or losing depends on milliseconds. **NVIDIA Reflex** is a technology that removes the "congestion" between your processor and your graphics card. Without Reflex, the CPU sends frames to a queue and the GPU processes them when it can. With Reflex, the CPU only sends the frame at the exact moment the GPU is ready, eliminating the delay (input lag) between your click and the shot appearing on screen.
        </p>
      `
        },
        {
            title: "1. ON Mode: The Ideal Balance",
            content: `
        <p class="mb-4 text-gray-300">By activating only 'ON', you get the following benefits:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Reduced Latency:</strong> Your commands feel more direct and responsive.</li>
            <li><strong>Stable Temperature:</strong> The graphics card doesn't work harder than necessary, keeping the PC quieter.</li>
            <li><strong>Consistency:</strong> Reduces sudden delay variations, which helps with your aim muscle memory.</li>
        </ul >
      `
        },
        {
            title: "2. ON + BOOST Mode: Extreme Reaction",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For competitive scenarios:</h4>
            <p class="text-sm text-gray-300">
                The <strong>ON + BOOST</strong> mode does something aggressive: it prevents the graphics card from reducing its clock (speed) even when the game load is light (CPU Bound). <br/><br/>
                Imagine you're standing still looking at a wall; the GPU would normally lower its speed to save energy. With Boost, it stays at maximum. This ensures that if an enemy suddenly appears, the GPU response is **instantaneous**, without the small delay needed for it to "wake up" to process the movement.
            </p>
        </div>
      `
        },
        {
            title: "3. Which to Choose in 2026?",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Use ON + BOOST</strong> if you play games like Valorant, CS2, or Warzone professionally and don't mind the fan noise or power consumption.
            <br/><br/>
            - <strong>Use only ON</strong> for adventure games or if you play on a <strong>Gaming Laptop</strong>. Boost mode on laptops can cause unnecessary overheating, which ends up generating FPS drops due to heat (Thermal Throttling), canceling out any latency benefit.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/limitar-fps-rivatuner-nvidia",
            title: "Limit FPS",
            description: "Combine with Reflex for minimum latency."
        },
        {
            href: "/guides/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Another way to reduce latency on Windows 11."
        },
        {
            href: "/guides/mousepad-speed-vs-control",
            title: "Improve Aim",
            description: "Your physical reaction along with the digital one."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

