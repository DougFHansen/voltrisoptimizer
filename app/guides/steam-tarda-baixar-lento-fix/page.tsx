import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'steam-tarda-baixar-lento-fix',
  title: "Slow Download on Steam? How to Maximize your Connection Speed (2026)",
  description: "Is your internet 500Mbps but Steam downloads at 2MB/s? The problem might be the 'Download Region' or corrupted cache. See how to fix it.",
  category: 'games-fix',
  difficulty: 'Beginner',
  time: '5 min'
};

const title = "Slow Download on Steam? How to Maximize your Connection Speed (2026)";
const description = "Is your internet 500Mbps but Steam downloads at 2MB/s? The problem might be the 'Download Region' or corrupted cache. See how to fix it.";
const keywords = ['steam slow download', 'increase steam download speed', 'clear steam cache', 'change steam download region', 'steam bandwidth limit', 'steam download drops to 0'];

export const metadata: Metadata = createGuideMetadata('steam-tarda-baixar-lento-fix', title, description, keywords);

export default function SteamLagGuide() {
    const summaryTable = [
        { label: "Problem", value: "Busy Server" },
        { label: "Solution 1", value: "Change Region" },
        { label: "Solution 2", value: "Clear Cache" },
        { label: "Tip", value: "Remove Limit" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why is Steam limiting my download?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
          Steam doesn't just download "simple" files. It downloads compressed and encrypted chunks that your processor needs to decompress in real-time. If your download stops and disk usage spikes, it's your processor struggling, not the internet.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
           But if disk usage is low and speed is slow, the server in your city might be congested.
        </p>
      `,
            subsections: []
        },
        {
            title: "Trick 1: Change Download Region",
            content: `
        <p class="mb-4 text-gray-300">
            If you live in London and everyone in London is downloading GTA VI at the same time, the "UK - London" server gets slow. Change to a less busy server.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 mb-6">
            <li>Open Steam > Settings.</li>
            <li>Go to the <strong>Downloads</strong> tab.</li>
            <li>In "Download Region", change to a different region or even a neighboring country.
                <br/>- Sometimes regions in the US or Europe route better even if they are further away.
            </li>
            <li>Restart Steam and test.</li>
        </ol>
      `,
            subsections: []
        },
        {
            title: "Trick 2: Clear Download Cache",
            content: `
        <p class="mb-4 text-gray-300">
            Sometimes a partial file stalls the entire queue.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2">
            <li>Still in the <strong>Downloads</strong> tab.</li>
            <li>Click the <strong>"Clear Download Cache"</strong> button.</li>
            <li>Steam will restart and ask for your login again. This usually unlocks downloads that keep dropping to 0 bytes/s.</li>
        </ul>
      `
        },
        {
            title: "Trick 3: Disable 'Throttle downloads while streaming'",
            content: `
        <p class="text-gray-300">
            Ensure the "Throttle downloads while streaming" box is unchecked. Sometimes Windows thinks you are streaming something and caps the speed.
        </p>
      `
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="5 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
        />
    );
}
