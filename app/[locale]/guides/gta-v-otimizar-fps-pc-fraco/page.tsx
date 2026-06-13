import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'gta-v-otimizar-fps-pc-fraco',
  title: "GTA V and FiveM (2026): The Ultimate FPS Guide for Low-End and High-End PCs",
  description: "Learn how to optimize GTA V and FiveM. Master hidden shadow settings, clear FiveM cache, tweak XML files, and manage population density for maximum performance.",
  category: 'games',
  difficulty: 'Intermediate',
  time: '45 min'
};

const title = "GTA V & FiveM Optimization (2026): FPS, Textures, and Heavy Cities";
const description = "Running base GTA V is easy. Running FiveM in a city with 500 mods and 300 players is a different story. This guide focuses on stability for smooth Roleplay.";

const keywords = [
  'gta v fps boost fivem 2026',
  'how to clear fivem cache completely',
  'best graphical settings fivem pvp',
  'gta v textures not loading fix',
  'extended texture budget fivem green bar',
  'gta v shadows too demanding',
  'population density gta v cpu',
  'commandline.txt gta v commands',
  'fivem citizenfx.ini optimization',
  'nbp citizen gta 5 graphics'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('gta-v-otimizar-fps-pc-fraco', title, description, keywords, locale);
}

export default function GTAGuide() {
  const summaryTable = [
    { label: "Textures", value: "Normal/High" },
    { label: "Shadows", value: "Sharp" },
    { label: "Grass", value: "Normal (FPS Killer)" },
    { label: "Reflection MSAA", value: "Off" },
    { label: "Post FX", value: "Normal" },
    { label: "FiveM", value: "Clean Cache" },
    { label: "V-Sync", value: "Half (If low-end)" }
  ];

  const contentSections = [
    {
      title: "Introduction: FiveM vs. GTA Online",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          FiveM is a resource-intensive platform. It loads custom assets (cars, clothes) that haven't been optimized by Rockstar. Consequently, a PC that runs GTA V on Ultra might struggle significantly in FiveM.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            In this guide, we will focus on configurations that handle the excessive polygons of unoptimized mods, helping to save your VRAM.
        </p>
      `
    },
    {
      title: "Chapter 1: Critical Graphics Settings",
      content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Grass Quality</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Normal</span></p>
                <p class="text-gray-400 text-xs">Ultra grass is the biggest FPS hog in rural areas like Sandy Shores. Set this to Normal to gain up to 20 FPS instantly.</p>
            </div>
            
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Post FX</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Normal</span></p>
                <p class="text-gray-400 text-xs">This controls Bloom, Motion Blur, and HDR. At Ultra, it is very demanding. At Normal, the game looks cleaner and runs much faster.</p>
            </div>
 
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Extended Texture Budget (The Bar)</h4>
                <p class="text-white font-mono text-sm mb-2">Recommended: <span class="text-emerald-400">Half of VRAM</span></p>
                <p class="text-gray-400 text-xs">Found in the advanced graphics menu. Increase this until the VRAM usage bar turns green or yellow. If it turns red, you may experience textures failing to load (invisible city assets).</p>
            </div>
        </div>
      `
    },
    {
      title: "Chapter 2: Shadows and Reflections",
      content: `
        <table class="w-full text-sm text-left text-gray-400">
            <tbody>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Shadow Quality</td>
                    <td class="py-2 text-yellow-400">Normal/High</td>
                    <td class="py-2">Very High uses expensive \"PCSS\" or \"NVIDIA Shadows.\" Use \"Sharp\" instead.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Reflection MSAA</td>
                    <td class="py-2 text-red-400">Off</td>
                    <td class="py-2">Antialiasing for reflections is largely unnoticeable and very taxing on performance.</td>
                </tr>
                <tr class="border-b border-gray-700">
                    <td class="py-2 font-bold">Water Quality</td>
                    <td class="py-2 text-emerald-400">High</td>
                    <td class="py-2">Normal makes water look poor; High is well-optimized. Very High simulates complex wave physics which is very demanding.</td>
                </tr>
            </tbody>
        </table>
      `
    },
    {
      title: "Chapter 3: FiveM - Clearing the Cache",
      content: `
        <p class="mb-4 text-gray-300">
            Perform this if you see flickering cars, bugged textures, or if the game crashes when joining a server.
        </p>
        <ol class="list-decimal list-inside text-gray-300 text-sm space-y-2">
            <li>Close FiveM completely.</li>
            <li>Navigate to: <code>AppData\\Local\\FiveM\\FiveM.app\\data</code>.</li>
            <li>Delete the <code>cache</code>, <code>server-cache</code>, and <code>server-cache-priv</code> folders.</li>
            <li><strong>DO NOT DELETE</strong> the <code>game-storage</code> folder (these are the base GTA files, 50GB+).</li>
            <li>Restart FiveM.</li>
        </ol>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Chapter 4: Population Density and Variety (CPU)",
      content: `
        <p class="mb-4 text-gray-300">
            GTA V relies heavily on the CPU to calculate NPC and traffic AI.
            <br/>- <strong>Population Density:</strong> 50% or lower.
            <br/>- <strong>Population Variety:</strong> 0% (Low). This forces the game to load fewer distinct car models into RAM, reducing stutter.
            <br/>- <strong>Distance Scaling:</strong> 100%. (Avoid reducing this or buildings will pop-in right in front of you).
        </p>
      `
    },
    {
      title: "Chapter 5: Tessellation and DirectX",
      content: `
        <p class="mb-4 text-gray-300">
            - <strong>DirectX Version:</strong> Use DX11. DX10/10.1 are legacy versions and prone to visual bugs.
            - <strong>Tessellation:</strong> Normal or Off. This only adds relief to trees and rocks; in RP cities, its impact is negligible.
        </p>
      `
    },
    {
      title: "Chapter 6: commandline.txt",
      content: `
        <p class="mb-4 text-gray-300">
            Create a <code>commandline.txt</code> file in your root GTA V folder with:
        </p>
        <code class="block bg-black/50 p-3 rounded text-green-400 font-mono text-sm">
            -ignoreDifferentVideoCard
            -disableHyperthreading
            -high
        </code>
        <p class="mt-2 text-xs text-gray-400">
            Note: <code>-disableHyperthreading</code> can help with older Intel CPUs (4th to 9th gen i5/i7). Do not use this on modern Ryzen processors.
        </p>
      `
    },
    {
      title: "Chapter 7: GTA settings.xml (Fine Tuning)",
      content: `
        <p class="mb-4 text-gray-300">
            Located in: <code>Documents\\Rockstar Games\\GTA V\\settings.xml</code>.
            <br/>You can disable shadows entirely by changing <code>ShadowQuality value="0"</code> (the in-game menu only goes down to 1).
            <br/>This provides a massive FPS boost, though the game will lack visual depth. Use this only on \"potato\" PCs.
        </p>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "Chapter 8: Optimized RP Cities",
      content: `
            <p class="mb-4 text-gray-300">
                Many Roleplay servers utilize \"FPS Boost\" features that remove non-essential props (trash, utility poles, fog).
                <br/>If your FPS is low, look for servers offering a \"Potato Mode\" or use the /fps command within the game if available.
            </p>
            `
    },
    {
      title: "Chapter 9: PVP Graphics Mods",
      content: `
            <p class="mb-4 text-gray-300">
                For competitive PVP, seeing through bushes and removing smoke effects is a priority.
                <br/>Consider graphics mods like <strong>NVE (Low Version)</strong> or <strong>CitizenFX Vision</strong> which clear the atmosphere and remove distance fog, drastically improving enemy visibility.
            </p>
            `
    },
    {
      title: "Chapter 10: FPS Limit (Engine Stability)",
      content: `
            <p class="mb-4 text-gray-300">
                The GTA V engine (RAGE) begins to experience physics bugs above 188 FPS.
                <br/>Cars might behave erratically or fly into the air.
                <br/>If you have a high-end PC, cap your FPS between 160-180 to avoid these issues during Roleplay.
            </p>
            `
    }
  ];

  const faqItems = [
    {
      question: "Why is FiveM using 100% of my CPU?",
      answer: "This is common in heavy servers due to unoptimized Lua scripts. The best solution is to close all background applications (Chrome, Discord Overlay) and set the FiveM process priority to 'High' in Task Manager."
    },
    {
      question: "Why are my textures disappearing (Invisible City)?",
      answer: "This is typically a loading bottleneck where your CPU or hard drive cannot send textures to the GPU fast enough. Solution: Install the game on an SSD (mandatory) and set 'Texture Quality' to Normal while increasing the 'Extended Texture Budget'."
    },
    {
      question: "Should I enable V-Sync in GTA V?",
      answer: "No, in-game V-Sync is poorly implemented and introduces high input lag. Keep it off in-game and enable it through your NVIDIA or AMD Control Panel if necessary."
    }
  ];

  const externalReferences = [
    { name: "FiveM Forum (Technical Support)", url: "https://forum.cfx.re/" },
    { name: "GTA V Mods (Graphics)", url: "https://www.gta5-mods.com/" },
    { name: "NaturalVision Evolved", url: "https://www.razedmods.com/gta-v" }
  ];

  const relatedGuides = [
    {
      href: "/guides/otimizacao-ssd-windows-11",
      title: "SSD Setup",
      description: "Essential for preventing assets from failing to load."
    },
    {
      href: "/guides/nvidia-painel-controle-melhores-configuracoes",
      title: "NVIDIA Guide",
      description: "Configure V-Sync and Shader Cache correctly."
    },
    {
      href: "/guides/como-escolher-fonte-pc-gamer",
      title: "Hardware Tips",
      description: "GTA V can be a significant draw on GPU power."
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
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
      faqItems={faqItems}
      externalReferences={externalReferences}
    />
  );
}


