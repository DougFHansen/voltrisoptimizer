import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'o-que-sao-ai-agents-guia-completo',
    title: "What are AI Agents? Ultimate Guide to Autonomous Agents and CrewAI (2026)",
    description: "Complete dossier on the Agentic Internet revolution. Learn the cognitive architecture of agents, practical CrewAI tutorial with Python, and how to create digital workers that think.",
    category: 'ai',
    difficulty: 'Intermediate',
    time: '45 min'
};

const title = "What are AI Agents? Ultimate Guide to Autonomous Agents and CrewAI (2026)";
const description = "Complete dossier on the Agentic Internet revolution. Learn the cognitive architecture of agents, practical CrewAI tutorial with Python, and how to create digital workers that think.";
const keywords = [
    'ai agents python tutorial complete 2026',
    'crewai step by step autonomous agent',
    'langchain vs crewai vs autogen which is best',
    'how to create autonomous ai team',
    'cognitive architecture agents memory rag',
    'autonomous sales agents ai',
    'gpt-4 api cost for agents'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('o-que-sao-ai-agents-guia-completo', title, description, keywords, locale);
}

export default function AIAgentsGuide() {
    const summaryTable = [
        { label: "Base Technology", value: "LLMs (GPT-4o, Claude 3.5)" },
        { label: "Lead Framework", value: "CrewAI (Orchestration)" },
        { label: "Main Use", value: "Entire Process Automation" },
        { label: "Average Cost", value: "$0.10 - $2.00 per execution" },
        { label: "Technical Level", value: "Intermediate Python" }
    ];

    const contentSections = [
        {
            title: "Introduction: Welcome to the Agentic Internet",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Until 2024, we lived in the era of "Chatbots". You asked ChatGPT a question (` + "`Prompt`" + `), and it gave you an answer (` + "`Completion`" + `). It was a passive interaction.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, we enter the <strong>Agentic</strong> era. An <strong>AI Agent</strong> doesn't wait for you to ask. It receives a broad goal (e.g., "Find prospects on LinkedIn and send personalized emails") and works alone for hours. It navigates the web, reasons whether it found the right person, uses tools (CRM, Gmail), and corrects its own errors.
        </p>
        <div class="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h4 class="text-purple-400 font-bold text-xl mb-2">The Technical Definition</h4>
            <p class="text-gray-300 text-lg">
                <em>"An Agent is a system that uses an LLM as a brain to perceive the environment, reason about how to achieve a goal, and execute actions using tools."</em>
            </p>
        </div>
      `
        },
        {
            title: "Chapter 1: Anatomy of an Agent (Cognitive Architecture)",
            content: `
        <p class="mb-6 text-gray-300 text-lg">
            To build an agent, you don't write "ifs" and "elses". You design a mind. Andrew Ng and Andrej Karpathy define modern architecture in 4 pillars:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div class="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all">
                <div class="text-4xl mb-4">🧠</div>
                <h4 class="text-blue-400 font-bold text-xl mb-2">1. The Brain (Core LLM)</h4>
                <p class="text-gray-400">
                    The language model (GPT-4o, Claude 3.5 Sonnet). It doesn't store data; it processes logic. It decides "What to do next?".
                    <br/><strong class="text-white">2026 Tip:</strong> Claude 3.5 Sonnet is currently the best "reasoner" for agents, surpassing GPT-4o in following complex instructions.
                </p>
            </div>
            
            <div class="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all">
                <div class="text-4xl mb-4">🛠️</div>
                <h4 class="text-green-400 font-bold text-xl mb-2">2. Tools (Tool Use)</h4>
                <p class="text-gray-400">
                    Without tools, an agent is just a brain in a jar. Tools connect it to the world:
                    <ul class="list-disc list-inside mt-2 text-sm">
                        <li><strong>Google Search (Serper):</strong> To read the current internet.</li>
                        <li><strong>Python Repl:</strong> To perform calculations (LLMs are bad at math).</li>
                        <li><strong>Gmail/Slack API:</strong> To communicate.</li>
                    </ul>
                </p>
            </div>

            <div class="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all">
                <div class="text-4xl mb-4">💾</div>
                <h4 class="text-yellow-400 font-bold text-xl mb-2">3. Memory (RAG + Context)</h4>
                <p class="text-gray-400">
                    <strong>Short Term:</strong> The current conversation history.
                    <br/><strong>Long Term:</strong> Vector databases (Pinecone, ChromaDB) where the agent stores information to access weeks later.
                </p>
            </div>

            <div class="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all">
                <div class="text-4xl mb-4">🗺️</div>
                <h4 class="text-red-400 font-bold text-xl mb-2">4. Planning (ReAct)</h4>
                <p class="text-gray-400">
                    The ability to break a large task ("Get rich") into executable subtasks. The agent performs critical thinking: <em>"I tried X and it failed, so now I will try Y."</em>
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Battle of the Frameworks (CrewAI vs LangChain)",
            content: `
        <p class="mb-6 text-gray-300">
            You don't need to code everything from scratch. There are frameworks that facilitate orchestration.
        </p>

        <div class="overflow-x-auto mb-8">
            <table class="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700 rounded-lg">
                <thead class="bg-gray-900 text-white uppercase tracking-wider">
                    <tr>
                        <th class="p-4 border border-gray-700">Framework</th>
                        <th class="p-4 border border-gray-700">Philosophy</th>
                        <th class="p-4 border border-gray-700">Learning Curve</th>
                        <th class="p-4 border border-gray-700">Verdict 2026</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-orange-400">CrewAI</td>
                        <td class="p-4 border border-gray-700">Focused on "Teams" and "Roleplay". You define roles (Analyst, Writer) and they talk to each other.</td>
                        <td class="p-4 border border-gray-700">⭐⭐ (Easy)</td>
                        <td class="p-4 border border-gray-700 text-green-400 font-bold">The Default Choice</td>
                    </tr>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-blue-400">LangChain / LangGraph</td>
                        <td class="p-4 border border-gray-700">Low level. Graph-by-graph control. Extremely flexible, but verbose.</td>
                        <td class="p-4 border border-gray-700">⭐⭐⭐⭐⭐ (Hard)</td>
                        <td class="p-4 border border-gray-700 text-gray-400">For Senior Engineers</td>
                    </tr>
                    <tr class="hover:bg-gray-800/50 transition-colors">
                        <td class="p-4 border border-gray-700 font-bold text-purple-400">Microsoft AutoGen</td>
                        <td class="p-4 border border-gray-700">Conversational agents focused on code generation.</td>
                        <td class="p-4 border border-gray-700">⭐⭐⭐ (Medium)</td>
                        <td class="p-4 border border-gray-700 text-gray-400">For Dev Tools</td>
                    </tr>
                </tbody>
            </table>
        </div>
      `
        },
        {
            title: "Chapter 3: Practical Tutorial - Your Automated News Agency",
            content: `
        <p class="mb-4 text-gray-300">
            Let's get hands-on. We'll use <strong>Python</strong> and <strong>CrewAI</strong> to create a company that works while you sleep.
            <br/>Our company will have two digital employees:
        </p>
        <ul class="list-disc list-inside text-gray-300 mb-6 ml-4">
            <li><strong>Agent 1 (Journalist):</strong> Scours the internet for news on a theme.</li>
            <li><strong>Agent 2 (Chief Editor):</strong> Turns technical data into a viral LinkedIn post.</li>
        </ul>

        <div class="bg-[#1e1e1e] border border-gray-700 p-6 rounded-xl font-mono text-sm overflow-x-auto shadow-2xl">
            <div class="flex items-center gap-2 mb-4 text-gray-500 border-b border-gray-700 pb-2">
                <span class="w-3 h-3 rounded-full bg-red-500"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-full bg-green-500"></span>
                <span class="ml-2">main.py</span>
            </div>
<pre><code class="language-python text-gray-300">
import os
from crewai import Agent, Task, Crew, Process
from langchain_community.tools import DuckDuckGoSearchRun

# 0. Configuration (You need an OpenAI or Anthropic key)
os.environ["OPENAI_API_KEY"] = "sk-..."

# 1. Tools
# We give agents the ability to search on Google
search_tool = DuckDuckGoSearchRun()

# 2. Defining the Agents (The Employees)
researcher = Agent(
    role='Senior Tech Analyst',
    goal='Discover the latest and most impactful AI trends',
    backstory="""You are a veteran analyst with a nose for news that 
    will change the market. You ignore hype and focus on facts.""",
    verbose=True, # Shows the agent's thinking in the terminal
    allow_delegation=False,
    tools=[search_tool] # He can use Google!
)

writer = Agent(
    role='LinkedIn Content Strategist',
    goal='Write posts that go viral based on technical facts',
    backstory="""You transform complex subjects into engaging 
    narratives. You use formatting, emojis, and mental triggers.""",
    verbose=True,
    allow_delegation=True
)

# 3. Defining the Tasks (The Work)
research_task = Task(
    description="""Search for the top 3 news stories about 'AI Agents' 
    in the last 24 hours. Identify companies, launches, and controversies.""",
    agent=researcher,
    expected_output="A 3-paragraph technical summary with sources."
)

writing_task = Task(
    description="""Based on the analyst's research, write a LinkedIn post. 
    The post should have a strong hook, 3 bullet points, and 
    a call to action (CTA) at the end.""",
    agent=writer,
    expected_output="A Markdown-formatted text ready to publish."
)

# 4. Forming the Team and Running
tech_news_crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential, # One works after the other
    verbose=2
)

print("### Starting Agent Morning Meeting ###")
result = tech_news_crew.kickoff()

print("######################")
print("## FINAL POST GENERATED ##")
print("######################")
print(result)
</code></pre>
        </div>
        
        <div class="mt-6 p-6 bg-blue-900/10 border border-blue-500/30 rounded-xl">
            <h4 class="text-blue-400 font-bold text-lg mb-2">What happens when you run this?</h4>
            <ol class="list-decimal list-inside text-gray-300 space-y-2">
                <li>The script starts. The <strong>Researcher</strong> accesses DuckDuckGo.</li>
                <li>It reads several sites (the LLM reads and summarizes). If it doesn't find anything good, it repeats the search with other terms (autonomy!).</li>
                <li>Once satisfied, it passes the report to the <strong>Writer</strong>.</li>
                <li>The Writer reads, critiques, and writes the post in the requested style.</li>
                <li>The final result appears on your screen. You just saved 2 hours of work.</li>
            </ol>
        </div>
      `
        },
        {
            title: "Chapter 4: Real-World Costs and Challenges",
            content: `
        <p class="mb-4 text-gray-300">
            It's not all smooth sailing. Running agents requires a budget and constant supervision.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800 p-5 rounded-lg border-l-4 border-red-500">
                <h5 class="text-red-400 font-bold mb-2">💸 The Cost of \"Infinite Loops\"</h5>
                <p class="text-sm text-gray-300">
                    Agents can get stuck in infinite logic loops (\"I tried to search, failed. I tried again, failed...\"). If you're using GPT-4o, this can burn through $10 in minutes.
                    <br/><strong>Solution:</strong> Utilize cheaper models (GPT-4o-mini or Llama 3) for simple tasks and always configure a \"max_iterations\" limit.
                </p>
            </div>
            <div class="bg-gray-800 p-5 rounded-lg border-l-4 border-yellow-500">
                <h5 class="text-yellow-400 font-bold mb-2">🐌 Latency</h5>
                <p class="text-sm text-gray-300">
                    Unlike instantaneous chat interactions, an agent may take 2 to 5 minutes to complete a complex research task. They are designed for background work (\"Fire and Forget\") rather than real-time conversations.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Conclusion: The Future of Work",
            content: `
        <p class="text-gray-300 text-lg leading-relaxed">
            The AI Agents revolution is not about replacing humans, but about <strong>superpowers</strong>. Imagine having 10 tireless digital interns working for you. One reads news, another organizes your CRM, another answers basic emails.
        </p>
        <p class="mt-4 text-gray-300 text-lg leading-relaxed">
            Those who master frameworks like CrewAI now (2026) will be the "Agent Architects" of the future, one of the best-paid professions of the decade. Start small, test, fail cheap, and scale your agents.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-programar-com-ia-vibe-coding",
            title: "Vibe Coding",
            description: "Use IA to write your agents' code 10x faster."
        },
        {
            href: "/guides/rodar-llm-local-pc-ollama",
            title: "Free Agents (Local)",
            description: "How to run your agent's brain (Llama 3) on your own PC for zero cost."
        },
        {
            href: "/guides/melhores-navegadores-custo-beneficio",
            title: "Browser Use",
            description: "Tools for agents to navigate the web (MultiOn, Selenium)."
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
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

