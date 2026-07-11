import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'geometry-dash-4gb-patch-lag',
  title: "Geometry Dash: How to Use the 4GB Patch to End Lag",
  description: "Is your Geometry Dash stuttering on levels with thousands of objects? Learn how to apply the 4GB patch to allow the game to use more RAM and run smoothly without crashing.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '10 min'
};

const title = "Geometry Dash: How to Use the 4GB Patch to End Lag";
const description = "Is your Geometry Dash stuttering on levels with thousands of objects? Learn how to apply the 4GB patch to allow the game to use more RAM and run smoothly without crashing.";
const keywords = [
    'how to install 4gb patch geometry dash 2026',
    'geometry dash lag fix pc 2026 tutorial',
    'geometry dash crashing on heavy levels how to solve',
    'increase ram geometry dash 2.2 patch',
    'megahack geometry dash 4gb patch built-in'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('geometry-dash-4gb-patch-lag', title, description, keywords, locale);
}

export default function GeometryDashPatchGuide() {
    const summaryTable = [
        { label: "Application", value: "GeometryDash.exe" },
        { label: "What it Does", value: "Allows using 4GB of RAM (up from 2GB)" },
        { label: "Requirement", value: "64-bit Windows" },
        { label: "Difficulty", value: "Beginner" }
    ];

    const contentSections = [
        {
            title: "Why Does Geometry Dash Lag Even on Powerful PCs?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Geometry Dash is a 32-bit application. By default, Windows limits these types of programs to a maximum of **2GB of RAM**. In modern community-created levels (\"Extreme Demons\") that feature thousands of objects and complex effects, the game hits this limit quickly, leading to crashes or slow-motion gameplay.
        </p>
      `
        },
        {
            title: "1. How to Apply the 4GB Patch",
            content: `
        <p class="mb-4 text-gray-300">The 4GB Patch is a tiny tool that toggles a \"flag\" within the game's executable file.</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Download the <strong>4GB Patch</strong> (from trusted sites like NTCore).</li>
            <li>Run the program and select the <code>GeometryDash.exe</code> file in your Steam folder. <br/> (Usually located at: <code>C:/Program Files (x86)/Steam/steamapps/common/Geometry Dash</code>)</li>
            <li>The program will display \"Executable successfully patched!\".</li>
            <li>That's it! Now the game can utilize up to 4GB of RAM, double the standard amount.</li>
        </ol>
      `
        },
        {
            title: "2. Mega Hack and FPS Bypass",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Modern Alternative:</h4>
            <p class="text-sm text-gray-300">
                If you use <strong>Mega Hack</strong> (v7 or v8), the 4GB patch is already built-in and applied automatically. Additionally, use 'FPS Bypass' to play at 144Hz or 240Hz even if your monitor is 60Hz, which drastically reduces input lag for more precise jumps.
            </p>
        </div>
      `
        },
        {
            title: "3. Tip: Smooth Fix and LDM",
            content: `
        <p class="mb-4 text-gray-300">
            Inside the game, always enable <strong>LDM (Low Detail Mode)</strong> on levels that offer the option. Disable 'Smooth Fix' in the video settings, as it can cause the game to run in slow motion if your PC cannot maintain a stable FPS, which ruins the music rhythm.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/otimizacao-performance",
            title: "Optimize PC",
            description: "Improve overall Windows performance."
        },
        {
            href: "/guides/roblox-fps-unlocker-tutorial",
            title: "FPS Unlocker",
            description: "Similar tips for Roblox."
        },
        {
            href: "/guides/atualizacao-drivers-video",
            title: "Video Drivers",
            description: "Ensure your GPU supports the new 2.2 effects."
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

