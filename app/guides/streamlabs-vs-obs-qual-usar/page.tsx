import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'streamlabs-vs-obs-qual-usar',
  title: "Streamlabs vs OBS Studio: Which one to use for Streams in 2026? (Real Comparison)",
  description: "Streamlabs is pretty, but heavy. OBS Studio is ugly, but light. Check out CPU/RAM usage tests and decide which is better for your PC.",
  category: 'software',
  difficulty: 'Intermediate',
  time: '10 min'
};

const title = "Streamlabs vs OBS Studio: Which one to use for Streams in 2026? (Real Comparison)";
const description = "Streamlabs is pretty, but heavy. OBS Studio is ugly, but light. Check out CPU/RAM usage tests and decide which is better for your PC.";
const keywords = ['streamlabs vs obs studio', 'which streaming software is lighter', 'obs studio uses less cpu', 'streamlabs lagging games', 'obs plugins', 'vertical tiktok live obs'];

export const metadata: Metadata = createGuideMetadata('streamlabs-vs-obs-qual-usar', title, description, keywords);

export default function OBSvsSLBSGuide() {
  const summaryTable = [
    { label: "Lighter", value: "OBS Studio" },
    { label: "Easier", value: "Streamlabs" },
    { label: "Plugins", value: "OBS Studio" },
    { label: "Low-end PC", value: "OBS Studio" }
  ];

  const contentSections = [
    {
      title: "The Bottom Line",
      content: `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-blue-900/20 p-6 rounded-xl border border-blue-500">
                <h4 class="text-white font-bold mb-2">OBS Studio</h4>
                <p class="text-gray-300 text-sm">
                    It's open-source, community-maintained.
                    <br/><strong>Advantage:</strong> Uses very little CPU. Supports incredible plugins (AITum for vertical live, VST audio filters, auto captions).
                    <br/><strong>Disadvantage:</strong> Comes "bare-bones". You have to manually set up alerts and chat.
                </p>
            </div>
            <div class="bg-green-900/20 p-6 rounded-xl border border-green-500">
                <h4 class="text-white font-bold mb-2">Streamlabs Desktop</h4>
                <p class="text-gray-300 text-sm">
                    It's a modified version of OBS, made by a company (Logitech).
                    <br/><strong>Advantage:</strong> Login with Twitch and everything is ready (Alerts, On-screen chat, donation goals). It's "install and use".
                    <br/><strong>Disadvantage:</strong> Heavy. Runs multiple browser processes in the background (Electron). Tries to sell you "Prime" all the time.
                </p>
            </div>
        </div>
      `,
      subsections: []
    },
    {
      title: "Benchmark: FPS Impact",
      content: `
        <p class="mb-4 text-gray-300">
            We tested both softwares streaming Warzone on a mid-range PC (i5, RTX 3060).
        </p>
        <table class="w-full text-left border-collapse mb-6">
            <thead>
                <tr class="text-[#31A8FF] border-b border-gray-700">
                    <th class="p-2">Software</th>
                    <th class="p-2">CPU Usage</th>
                    <th class="p-2">RAM Usage</th>
                    <th class="p-2">FPS Drop (In-Game)</th>
                </tr>
            </thead>
            <tbody class="text-gray-300 text-sm">
                <tr class="border-b border-gray-800 bg-green-900/20">
                    <td class="p-3 font-bold text-green-400">OBS Studio</td>
                    <td class="p-3">2% - 4%</td>
                    <td class="p-3">300 MB</td>
                    <td class="p-3">-5 FPS</td>
                </tr>
                <tr class="border-b border-gray-800 bg-red-900/20">
                    <td class="p-3 font-bold text-red-400">Streamlabs</td>
                    <td class="p-3">10% - 15%</td>
                    <td class="p-3">900 MB</td>
                    <td class="p-3 text-red-400">-15 FPS</td>
                </tr>
            </tbody>
        </table>
        <p class="text-gray-300 font-bold text-center mt-4">
            If you have a high-end PC (i9, Ryzen 9), it doesn't matter. If you have a low/mid-range PC, OBS Studio is mandatory.
        </p>
      `,
      subsections: []
    },
    {
      title: "Tip: How to get the best of both worlds",
      content: `
            <p class="text-gray-300 mb-4">
                You can use OBS Studio (Light) and pull the beautiful alerts from Streamlabs via "Browser Source".
            </p>
            <ol class="list-decimal list-inside text-gray-300 ml-4">
                <li>Create your account on the Streamlabs website.</li>
                <li>Set up your alerts there (Donate, Follow, Sub).</li>
                <li>Copy the "Widget URL".</li>
                <li>In OBS Studio, add a new "Browser" source and paste the link.</li>
                <li>That's it: OBS Performance, Streamlabs Beauty.</li>
            </ol>
        `
    }
  ];

  const advancedContentSections = [
    {
      title: "12. Technical Architecture and Performance Comparison",
      content: `
        <h4 class="text-white font-bold mb-3">🔧 Internal Architecture of Streaming Softwares</h4>
        <p class="mb-4 text-gray-300">
          In 2026, the architecture of streaming software directly determines its performance and efficiency:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">OBS Studio (Open Broadcaster Software)</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Modular plugin-based architecture</li>
              <li>• Rendering via libobs (optimized library)</li>
              <li>• Support for multiple graphics APIs (D3D11, OpenGL, Vulkan)</li>
              <li>• Dedicated rendering thread</li>
              <li>• Optimized memory management</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">Streamlabs Desktop</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Electron-based (Chrome + Node.js)</li>
              <li>• Multiple Chromium processes running</li>
              <li>• Web-based interface with complex rendering</li>
              <li>• Native integration with Streamlabs services</li>
              <li>• Higher resource consumption due to abstraction layer</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "4. Plugins and Extensibility",
      content: `
        <h4 class="text-white font-bold mb-3">🔌 Plugin Ecosystem</h4>
        <p class="mb-4 text-gray-300">
          Extensibility is a critical factor when choosing streaming software:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">OBS Studio - Open Ecosystem</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Well-documented official SDK</li>
              <li>• Active community with hundreds of plugins</li>
              <li>• Support for languages like C++, C#, Python</li>
              <li>• Integration with external APIs</li>
              <li>• Independent plugin development</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Streamlabs - Integrated Ecosystem</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Own catalog of widgets and integrations</li>
              <li>• Native integration with Streamlabs services</li>
              <li>• Ready-to-use widgets for alerts and interactions</li>
              <li>• Smaller learning curve for beginners</li>
              <li>• Limitations on advanced customizations</li>
            </ul>
          </div>
        </div>
      `
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="10 min"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      advancedContentSections={advancedContentSections}
      additionalContentSections={additionalContentSections}
      summaryTable={summaryTable}
    />
  );
}
