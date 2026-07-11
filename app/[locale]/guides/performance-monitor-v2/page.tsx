import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'performance-monitor-v2',
  title: "How to Measure Your PC Performance: Benchmark Guide 2026",
  description: "Is your PC performing as it should? Learn how to use Cinebench, 3DMark, and UserBenchmark to compare your results with other users and detect bottlenecks.",
  category: 'peripherals',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "How to Measure Your PC Performance: Benchmark Guide 2026";
const description = "Is your PC performing as it should? Learn how to use Cinebench, 3DMark, and UserBenchmark to compare your results with other users and detect bottlenecks.";
const keywords = [
    'how to benchmark gaming pc',
    'test graphics card performance 2026',
    'cinebench r23 tutorial english',
    'measure pc processor speed',
    'compare pc with other users'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('performance-monitor-v2', title, description, keywords, locale);
}

export default function BenchmarkGuide() {
    const summaryTable = [
        { label: "CPU Test", value: "Cinebench R23 / 2024" },
        { label: "GPU Test", value: "3DMark / Superposition" },
        { label: "General Test", value: "PCMark 10" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "Why Run a Benchmark?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Running a benchmark isn't just about seeing "numbers go up." It's a diagnostic tool. If you have an i7 processor and it scores lower than an i3 in the test, something is wrong: it could be overheating, a poorly installed driver, or even a virus mining in the background.
        </p>
      `
        },
        {
            title: "Cinebench: The Processor Test",
            content: `
        <p class="mb-4 text-gray-300">Cinebench makes your processor render an ultra-complex 3D image. It's the best test to know if your cooler is handling the heat.</p>
        <div class="bg-gray-800 p-5 rounded-xl border border-gray-700">
            <h4 class="text-white font-bold mb-2">How to read the result:</h4>
            <ul class="list-disc list-inside text-gray-300 text-sm space-y-2">
                <li><strong>Single Core:</strong> Important for older games and web browsing.</li>
                <li><strong>Multi Core:</strong> Important for streaming, video editing, and modern games (like Cyberpunk).</li>
                <li>Compare your "Score" with sites like CPU-Monkey to know if your mark is average.</li>
            </ul>
        </div>
      `
        },
        {
            title: "3DMark: The Graphics Card Test",
            content: `
        <p class="mb-4 text-gray-300">
            3DMark (Time Spy or Steel Nomad) tests your GPU's capability in DirectX 12. 
        </p>
        <p class="text-gray-300 bg-blue-900/10 p-4 rounded border-l-4 border-blue-500">
            Tip: If your PC crashes or bluescreens during the benchmark, it's a clear sign that your power supply is weak or your graphics card has an unstable overclock. The benchmark is the "blood test" for your hardware.
        </p>
      `
        },
        {
            title: "UserBenchmark: The Quick Test",
            content: `
        <p class="mb-4 text-gray-300">
            Although controversial among enthusiasts, <strong>UserBenchmark</strong> is excellent for beginners because it tests everything (RAM, SSD, GPU, CPU) in 2 minutes and shows you a "percentile" chart. If you are below the 50th percentile, your PC needs urgent optimization.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/diagnostico-hardware",
            title: "Full Diagnosis",
            description: "What to do after detecting an error in the benchmark."
        },
        {
            href: "/guides/monitorar-temperatura-pc",
            title: "Monitor Heat",
            description: "Monitor temps while the benchmark is running."
        },
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize PC",
            description: "Techniques to boost your test scores."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}


