import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'minecraft-optifine-vs-sodium-fabric',
  title: "Sodium vs OptiFine: Which is Best for Minecraft in 2026?",
  description: "Are you still using OptiFine? Discover why Sodium has become the performance standard for Minecraft and compare Shader features between both platforms.",
  category: 'games-fix',
  difficulty: 'Intermediate',
  time: '20 min'
};

const title = "Sodium vs OptiFine: Which is Best for Minecraft in 2026?";
const description = "Are you still using OptiFine? Discover why Sodium has become the performance standard for Minecraft and compare technical Shader features between both platforms.";
const keywords = [
    'sodium vs optifine comparison 2026 minecraft',
    'which gives more fps optifine or sodium fabric',
    'best performance mod for minecraft shaders',
    'iris shader vs optifine shaders tutorial 2026',
    'minecraft performance ultimate guide low end mods'
];

export const metadata: Metadata = createGuideMetadata('minecraft-optifine-vs-sodium-fabric', title, description, keywords);

export default function SodiumVsOptiFineGuide() {
    const summaryTable = [
        { label: "OptiFine", value: "Easy to install / All-in-one / Closed Source" },
        { label: "Sodium", value: "Extreme Performance / Modular / Open Source" },
        { label: "Platform", value: "OptiFine (Forge/Native) | Sodium (Fabric/Quilt)" },
        { label: "Difficulty", value: "Intermediate" }
    ];

    const contentSections = [
        {
            title: "The End of a Reign?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **OptiFine** dominated Minecraft for over a decade. It was the one-stop solution for everything: performance, shaders, capes, and zoom. However, by 2026, it has become something of a \"black box\" that is difficult to update. **Sodium** emerged to solve this, focusing exclusively on modern rendering and memory efficiency, making the game far more fluid on both modern and legacy hardware.
        </p>
      `
        },
        {
            title: "1. Performance: The Decisive Factor",
            content: `
        <p class="mb-4 text-gray-300">In real-world tests for 2026, Sodium wins in almost every scenario:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Sodium:</strong> Drastically reduces processing time for each chunk. FPS tends to be higher and, more importantly, more stable (fewer sudden drops).</li>
            <li><strong>OptiFine:</strong> Offers a \"Fast Render\" mode that can cause visual bugs with other mods. The FPS gains are generally lower compared to Sodium in newer game versions (1.18+).</li>
        </ul >
      `
        },
        {
            title: "2. Shaders and Functionality",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">The Modularity of Fabric:</h4>
            <p class="text-sm text-gray-300">
                A common past criticism of Sodium was its lack of integrated features like Shaders. Today, in 2026, this is solved by the Fabric ecosystem: <br/><br/>
                - For <strong>Shaders</strong>, use the <strong>Iris</strong> mod. <br/>
                - For <strong>Zoom</strong>, use <strong>Logical Zoom</strong> or similar. <br/>
                - For <strong>Connected Textures</strong>, use <strong>Continuity</strong>. <br/>
                While Sodium alone doesn't do everything, the Sodium + Auxiliary Mods combo is more powerful than OptiFine on its own.
            </p>
        </div>
      `
        },
        {
            title: "3. Final Verdict",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Use OptiFine if:</strong> You want something extremely simple to install, don't play with many other mods, or if you are using a very old version of the game (pre-1.12).
            <br/><br/>
            <strong>Use Sodium if:</strong> You play modern versions (1.20+) and are looking for the maximum FPS possible. In 2026, the Fabric/Sodium ecosystem is where innovation happens and where you'll find the most fluid gaming experience.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/minecraft-aumentar-fps-fabric-sodium",
            title: "Install Sodium",
            description: "Step-by-step installation guide."
        },
        {
            href: "/guides/minecraft-lag-fix-optifine-fabric",
            title: "Remove Lag",
            description: "Extra tips for optimizing Minecraft."
        },
        {
            href: "/guides/minecraft-alocar-mais-ram",
            title: "Allocate RAM",
            description: "Prepare your hardware for heavy mods."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

