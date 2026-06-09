import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'como-programar-com-ia-vibe-coding',
    title: "Vibe Coding: The Future of Programming with Intent and AI (2026 Dossier)",
    description: "Forget the syntax battle. Learn the 'Vibe Coding' philosophy, master Cursor IDE with Claude 3.5 Sonnet, and build real products by focusing 100% on logic and design.",
    category: 'ai',
    difficulty: 'Beginner',
    time: '35 min'
};

const title = "Vibe Coding: The Future of Programming with Intent and AI (2026 Dossier)";
const description = "Forget the syntax battle. Learn the 'Vibe Coding' philosophy, master Cursor IDE with Claude 3.5 Sonnet, and build real products by focusing 100% on logic and design.";
const keywords = [
    'vibe coding andrej karpathy explanation',
    'cursor ide complete tutorial 2026',
    'claude 3.5 sonnet vs gpt-4o for programming',
    'how to install cursorrules nextjs',
    'programming without knowing python syntax',
    'security of ai generated code',
    'devin vs cursor composer review'
];

export const metadata: Metadata = createGuideMetadata('como-programar-com-ia-vibe-coding', title, description, keywords);

export default function VibeCodingGuide() {
    const summaryTable = [
        { label: "Core Tool", value: "Cursor (VS Code Fork)" },
        { label: "Brain Model", value: "Claude 3.5 Sonnet (Anthropic)" },
        { label: "Philosophy", value: "Code Manager" },
        { label: "Productivity", value: "10x on MVP Projects" },
        { label: "Risk", value: "Silent Hallucination" }
    ];

    const contentSections = [
        {
            title: "What is Vibe Coding? (Andrej Karpathy's Definition)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2024, Andrej Karpathy (former AI Director at Tesla and OpenAI) tweeted something that changed the industry: <em>"I don't write code anymore. I just describe the 'Vibe' (the intent), review the diff, and accept."</em>
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          <strong>Vibe Coding</strong> isn't about 'not knowing how to program'. It's about <strong>elevating the level of abstraction</strong>. Instead of worrying if it's ` + "`float: left`" + ` or ` + "`flex-direction: row`" + `, you focus on system architecture, security, and user experience. AI is your tireless 'Junior Developer' typing the boring syntax for you.
        </p>
        <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-purple-500 my-8">
            <h4 class="text-purple-400 font-bold mb-2">The New Skill: Code Review</h4>
            <p class="text-gray-300 text-sm">
                Before, your value was measured by how many lines you wrote. Now, it's measured by how well you <strong>read and critique</strong> AI code. If you accept everything Claude suggests, your app will break. The Vibe Coder is an Editor-in-Chief.
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Cursor IDE (The Secret Weapon)",
            content: `
        <p class="mb-6 text-gray-300">
            Forget standard VS Code with slow plugins. <strong>Cursor</strong> is a fork (an improved copy) of VS Code that integrates AI at the editor's kernel level.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div class="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-blue-500 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">🎹</span>
                    <h4 class="text-blue-400 font-bold text-xl">Ctrl + K (Edit Inline)</h4>
                </div>
                <p class="text-gray-400 text-sm">
                    Select a buggy code block and press Ctrl+K. Type: "Fix the typing error here". The AI reads the context, fixes it, and shows the 'Diff' (Before vs After) instantly.
                </p>
            </div>

            <div class="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-green-500 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">💬</span>
                    <h4 class="text-green-400 font-bold text-xl">Ctrl + L (Global Chat)</h4>
                </div>
                <p class="text-gray-400 text-sm">
                    A side chat that 'sees' all open files. You can ask: "Where is the login function?" or "Explain how this React component works".
                </p>
            </div>

            <div class="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-purple-500 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">🎼</span>
                    <h4 class="text-purple-400 font-bold text-xl">Composer (Ctrl + I)</h4>
                </div>
                <p class="text-gray-400 text-sm">
                    The 'Killer Feature' of 2026. Composer allows editing <strong>multiple files at the same time</strong>. You say: "Change the button color to blue on all pages and update the global theme file". It opens 5 files, edits them all, and asks for your approval.
                </p>
            </div>

            <div class="bg-gray-900 border border-gray-700 p-6 rounded-xl hover:border-yellow-500 transition-colors">
                <div class="flex items-center gap-3 mb-4">
                    <span class="text-2xl">👀</span>
                    <h4 class="text-yellow-400 font-bold text-xl">Tab (Copilot++)</h4>
                </div>
                <p class="text-gray-400 text-sm">
                    It's not just completing the line. Cursor predicts <strong>where you're going to click</strong> and what you'll write in the next 3 lines. It's almost telepathic.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: The Brain (Claude 3.5 Sonnet vs GPT-4o)",
            content: `
        <p class="mb-6 text-gray-300">
            The tool is Cursor, but the one 'thinking' is the Language Model (LLM). In 2026, the battle is clear:
        </p>

        <div class="overflow-x-auto mb-8">
            <table class="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700 rounded-lg">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="p-3 border border-gray-700">Model</th>
                        <th class="p-3 border border-gray-700">Strength</th>
                        <th class="p-3 border border-gray-700">Weakness</th>
                        <th class="p-3 border border-gray-700">Dev Verdict</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-3 border border-gray-700 font-bold text-orange-400">Claude 3.5 Sonnet</td>
                        <td class="p-3 border border-gray-700">Logical Reasoning, Architecture, Less Hallucination, Huge Context.</td>
                        <td class="p-3 border border-gray-700">Slightly slower than Haiku.</td>
                        <td class="p-3 border border-gray-700 text-green-400 font-bold">👑 THE CODE KING</td>
                    </tr>
                    <tr class="bg-gray-900/50">
                        <td class="p-3 border border-gray-700 font-bold text-blue-400">GPT-4o</td>
                        <td class="p-3 border border-gray-700">Fluid conversation, Multimodal (sees UI images).</td>
                        <td class="p-3 border border-gray-700">Tends to be 'lazy' (omits parts of code).</td>
                        <td class="p-3 border border-gray-700">Good for Frontend/Design</td>
                    </tr>
                    <tr>
                        <td class="p-3 border border-gray-700 font-bold text-red-400">DeepSeek Coder V3</td>
                        <td class="p-3 border border-gray-700">Extremely cheap, Open Source, Specialized in Python/C++.</td>
                        <td class="p-3 border border-gray-700">Less 'creative' in abstract solutions.</td>
                        <td class="p-3 border border-gray-700">Great Value</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "Chapter 3: Configuring .cursorrules (The Rules of the Game)",
            content: `
        <p class="mb-4 text-gray-300">
            Did you know you can 'train' Cursor to code exactly as you like? Just create a file called <code>.cursorrules</code> at the root of your project. The AI reads this file before answering anything.
        </p>

        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-xs overflow-x-auto shadow-2xl relative group">
            <button class="absolute top-4 right-4 bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-white text-xs transition-colors opacity-0 group-hover:opacity-100">Copy</button>
            <p class="text-gray-500 mb-2"># .cursorrules (Next.js Expert Example)</p>
<pre class="text-gray-300">
Role: Senior Next.js 15 & TypeScript Developer sent from the future (2026).

Behavior:
- Be concise. Don't explain basic concepts. Just give the code.
- Always use "const" over "let".
- Prefer Functional Components with React Hooks.
- Use Tailwind CSS for styling (mobile-first approach).
- Zod for validation.
- Lucide React for icons.

Tech Stack:
- Framework: Next.js 15 (App Router)
- UI: Shadcn/UI + Tailwind
- State: Zustand
- DB: Supabase / Prisma

Coding Rules:
1. NEVER use 'any' type. Define interfaces in a 'types' folder.
2. Structure: Keep components small (< 200 lines). Break huge files.
3. Errors: Wrap risky code in try/catch blocks.
4. Comments: Document complex logic only. Code should be self-documenting.

Safety:
- Do not expose API Keys in client components.
- Validate all inputs on server actions.
</pre>
        </div>
        <p class="text-gray-400 text-sm mt-4">
            With this file, the AI stops giving you generic solutions and starts acting like a Senior hired for your specific project.
        </p>
      `
        },
        {
            title: "Chapter 4: Security and Ethics (The Dark Side)",
            content: `
        <p class="mb-4 text-gray-300">
            'If AI wrote it, who owns it?' and 'Is this code safe?'. Critical questions for 2026.
        </p>
        
        <div class="space-y-4">
            <div class="bg-red-900/10 p-5 rounded-lg border-l-4 border-red-500">
                <h5 class="text-red-400 font-bold mb-2">🚨 Dependency Hallucination (Typosquatting)</h5>
                <p class="text-sm text-gray-300">
                    Sometimes, AI might suggest installing a package that <em>seems</em> real (e.g., ` + "`npm install fast-json-react`" + `) but doesn't exist or is a virus.
                    <br/><strong>Golden Rule:</strong> Never install a suggested package without first checking if it has GitHub stars and NPM downloads.
                </p>
            </div>
            
            <div class="bg-yellow-900/10 p-5 rounded-lg border-l-4 border-yellow-500">
                <h5 class="text-yellow-400 font-bold mb-2">🔐 Secret Leakage</h5>
                <p class="text-sm text-gray-300">
                    If you use the AI chat and paste your API keys (AWS_KEY, OPENAI_KEY), this data might be used to train the model (depending on privacy settings).
                    <br/><strong>Solution:</strong> Use 'Privacy Mode' in Cursor (Business tier) or remove secrets before pasting code.
                </p>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/o-que-sao-ai-agents-guia-completo",
            title: "AI Agents",
            description: "Take your programming to the next level by creating autonomous agents."
        },
        {
            href: "/guias/atalhos-navegador-produtividade",
            title: "Real Productivity",
            description: "How to use Arc browser to research docs 2x faster."
        },
        {
            href: "/guias/debloat-windows-11-otimizacao-powershell",
            title: "Fast PC",
            description: "Prepare your Windows to run compilers and Docker without freezing."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="35 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
