import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rodar-llm-local-pc-ollama',
    title: "How to Run Llama 3 and DeepSeek Locally on PC: Hardware Guide (2026)",
    description: "Turn your PC into a private AI hub. Complete dossier on VRAM (Quantization), Ollama, LM Studio, and Offline RAG for confidential documents.",
    category: 'artificial-intelligence',
    difficulty: 'Advanced',
    time: '40 min'
};

const title = "How to Run Llama 3 and DeepSeek Locally on PC: Hardware Guide (2026)";
const description = "Turn your PC into a private AI hub. Complete dossier on VRAM (Quantization), Ollama, LM Studio, and Offline RAG for confidential documents.";
const keywords = [
    'cheap graphics card for ai 2026',
    'how much vram to run llama 3 70b',
    'ollama windows wsl2 tutorial complete',
    'lm studio vs ollama which is better',
    'how to install deepseek r1 locally',
    'local ai privacy vs chatgpt',
    'q4_k_m quantization explained'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('rodar-llm-local-pc-ollama', title, description, keywords, locale);
}

export default function LocalLLMGuide() {
    const summaryTable = [
        { label: "Critical Hardware", value: "VRAM (Video Memory)" },
        { label: "Software #1", value: "Ollama (Command Line)" },
        { label: "Software #2", value: "LM Studio (Chat Interface)" },
        { label: "Monthly Cost", value: "$0.00 (Electricity only)" },
        { label: "Privacy", value: "Offline (Air-Gapped)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The End of AI Subscriptions",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Are you paying $20/month for ChatGPT Plus? Stop.
          <br/><br/>
          In 2026, open-weight models like <strong>Llama 3 (Meta)</strong> and <strong>DeepSeek (China)</strong> have reached or surpassed GPT-4 in reasoning. The best part? You can run them on your own <em>gaming</em> PC, without internet, without censorship, and without monthly fees.
        </p>
        <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500 my-8">
            <h4 class="text-green-400 font-bold text-xl mb-2">Why Run Locally?</h4>
            <ul class="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li><strong>Absolute Privacy:</strong> Your medical documents or company code never leave your SSD.</li>
                <li><strong>No Censorship:</strong> You control the moral alignment of the model.</li>
                <li><strong>Zero Latency:</strong> Instant responses, without waiting in server queues.</li>
            </ul>
        </div>
      `
        },
        {
            title: "Chapter 1: Hardware - The Mathematics of VRAM",
            content: `
        <p class="mb-6 text-gray-300 text-lg">
            To run AI, you don't need a powerful CPU. You need <strong>VRAM (Video Card Memory)</strong>. The entire model needs to fit in VRAM to be fast.
        </p>
        
        <h4 class="text-white font-bold text-xl mb-4">Real Requirements Table (2026)</h4>
        <div class="overflow-x-auto mb-8">
            <table class="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700 rounded-lg">
                <thead class="bg-gray-900 text-white uppercase tracking-wider">
                    <tr>
                        <th class="p-4 border border-gray-700">Model (Size)</th>
                        <th class="p-4 border border-gray-700">Min. VRAM (Q4)</th>
                        <th class="p-4 border border-gray-700">Ideal GPU (Cost/Benefit)</th>
                        <th class="p-4 border border-gray-700">Recommended Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-blue-400">Llama 3 8B (Small)</td>
                        <td class="p-4 border border-gray-700">6 GB</td>
                        <td class="p-4 border border-gray-700">RTX 3060 / 4060 (8GB)</td>
                        <td class="p-4 border border-gray-700 text-gray-400">Fast chat, Summaries, Emails.</td>
                    </tr>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-purple-400">Llama 3 70B (Medium)</td>
                        <td class="p-4 border border-gray-700">24 GB (Bottleneck!)</td>
                        <td class="p-4 border border-gray-700">RTX 3090 / 4090 (24GB)</td>
                        <td class="p-4 border border-gray-700 text-gray-400">Complex reasoning, Programming, Math.</td>
                    </tr>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-red-400">DeepSeek R1 128B (Monster)</td>
                        <td class="p-4 border border-gray-700">48-64 GB</td>
                        <td class="p-4 border border-gray-700 text-yellow-400">Mac Studio M2 Ultra (Unified RAM)</td>
                        <td class="p-4 border border-gray-700 text-gray-400">Scientific Research, GPT-5 Level.</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <p class="text-gray-400 text-sm italic mb-8">
            * <strong>Q4 (4-bit Quantization):</strong> A compression technique that reduces model size by 70% with minimal (almost imperceptible) intelligence loss. Most people run in Q4 or Q5.
        </p>
      `
        },
        {
            title: "Chapter 2: Ollama (The Elegant Solution)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Ollama</strong> (ollama.com) is the "Docker for AI". It encapsulates all complexity into a simple command.
        </p>

        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-2xl space-y-4">
            <div>
                <p class="text-gray-500 mb-1"># 1. Install (Windows/Linux/Mac)</p>
                <p class="text-green-400">https://ollama.com/download</p>
            </div>
            <div>
                <p class="text-gray-500 mb-1"># 2. Download and Run Llama 3 (8 Billion Parameters)</p>
                <p class="text-green-400">ollama run llama3</p>
            </div>
            <div>
                <p class="text-gray-500 mb-1"># 3. Run a Programming Model (Code)</p>
                <p class="text-green-400">ollama run deepseek-coder-v2</p>
            </div>
            <div>
                <p class="text-gray-500 mb-1"># 4. Create a Customized Character (Modelfile)</p>
                <p class="text-white">Create a file named 'MarioFile' with:</p>
                <pre class="text-blue-300 pl-4 py-2">
FROM llama3
SYSTEM "You are Mario Bros. Answer everything with an Italian accent and end with 'Wahoo!'."
                </pre>
                <p class="text-green-400">ollama create Mario -f MarioFile</p>
                <p class="text-green-400">ollama run Mario</p>
            </div>
        </div>

        <div class="mt-6 flex gap-4">
            <div class="bg-blue-900/20 p-4 rounded text-sm text-blue-200 border border-blue-500/30 w-full">
                <strong>Advantage:</strong> Runs as a background service on port <code>11434</code>. You can connect external apps (Obsidian, VS Code) to it via local API.
            </div>
        </div>
      `
        },
        {
            title: "Chapter 3: Local RAG (Talk to Your PDFs)",
            content: `
        <p class="mb-4 text-gray-300">
            The Holy Grail of productivity: Asking questions about your own documents (PDFs, Contracts, Notes) without uploading anything to the cloud.
        </p>
        
        <h4 class="text-white font-bold text-lg mb-2">Tool: AnythingLLM (Desktop)</h4>
        <ol class="list-decimal list-inside text-gray-300 space-y-4 bg-gray-900 border border-gray-700 p-6 rounded-xl">
            <li>
                <strong>Install:</strong> Download <a href="https://useanything.com/" class="text-blue-400 hover:underline">AnythingLLM Desktop</a>. It's an all-in-one app (vectors, interface, model).
            </li>
            <li>
                <strong>Configure:</strong> On the home screen, it will detect if you have Ollama installed. Select "Ollama" as the Inference provider.
            </li>
            <li>
                <strong>Ingest Documents:</strong> Drag your "2024 Contracts" folder to the upload area. The app will "vectorize" (turn text into numbers) everything locally.
            </li>
            <li>
                <strong>Ask:</strong> "What was the total value of January's contracts?"
            </li>
            <li>
                <strong>Magic:</strong> The model will read relevant snippets from your PDFs and answer accurately. Nothing left your PC.
            </li>
        </ol>
      `
        },
        {
            title: "Chapter 4: Mac vs PC (The Chip War)",
            content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-green-900/20 to-green-900/0 border border-green-500/30 p-6 rounded-xl">
                <h4 class="text-green-400 font-bold text-xl mb-2">PC (NVIDIA)</h4>
                <p class="text-gray-300 text-sm">
                    <strong>Pros:</strong> Cheaper for small models. CUDA is the industry standard.
                    <br/><strong>Cons:</strong> VRAM memory is limited. An RTX 4090 has 24GB and costs $2,000. Running 70B models requires two cards (SLI/NVLink), which is complex.
                </p>
            </div>

            <div class="bg-gradient-to-br from-gray-200/10 to-gray-200/0 border border-gray-500/30 p-6 rounded-xl">
                <h4 class="text-white font-bold text-xl mb-2">Mac (Apple Silicon)</h4>
                <p class="text-gray-300 text-sm">
                    <strong>Pros:</strong> Unified Memory! A Mac Studio with 192GB of RAM can allocate 140GB to VRAM. This allows running giant models (Llama 3 400B) that would otherwise need 8 RTX 4090 cards.
                    <br/><strong>Cons:</strong> Inference (Tokens/s) is slower than NVIDIA. Extremely high initial cost.
                </p>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-escolher-placa-de-video",
            title: "GPU Guide",
            description: "Technical analysis of the best budget (RTX 3060 vs 4060) cards for AI."
        },
        {
            href: "/guides/o-que-sao-ai-agents-guia-completo",
            title: "AI Agents",
            description: "Use your local Llama 3 to power autonomous agents without paying for APIs."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Fast SSD",
            description: "Loading 20GB models requires a fast NVMe. See how to optimize."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="40 min"
            difficultyLevel="Advanced"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

