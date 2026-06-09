import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'gravação-tela-windows-nativa-dicas',
    title: "How to Record Windows Screen: Ultimate Creation and Editing Guide (2026)",
    description: "No installation needed! Learn to record 4K gameplay, meetings, and tutorials using only native Windows 11 tools. Includes Clipchamp editing and bitrate settings.",
    category: 'content-creation',
    difficulty: 'Beginner',
    time: '20 min'
};

const title = "How to Record Windows Screen: Ultimate Creation and Editing Guide (2026)";
const description = "No installation needed! Learn to record 4K gameplay, meetings, and tutorials using only native Windows 11 tools. Includes Clipchamp editing and bitrate settings.";
const keywords = [
    'record windows 11 screen with internal audio and microphone',
    'xbox game bar not recording black screen games',
    'screen capture tool without watermark',
    'clipchamp free editor cut video quickly',
    'configure replay buffer windows 11 clips',
    'best recording bitrate youtube 1080p 60fps',
    'obs studio vs game bar performance'
];

export const metadata: Metadata = createGuideMetadata('gravação-tela-windows-nativa-dicas', title, description, keywords);

export default function NativeRecordingGuide() {
    const summaryTable = [
        { label: "Gamer Method (Clips)", value: "Win + Alt + R (Game Bar)" },
        { label: "Work Method (Meetings)", value: "Win + Shift + S (Snipping Tool)" },
        { label: "Maximum Quality", value: "4K 60FPS (HDR)" },
        { label: "Default Format", value: "MP4 (H.264)" },
        { label: "Free Editing", value: "Clipchamp (Native)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Portable Studio in Your Windows",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, you no longer need to download heavy, ad-ridden software (like Bandicam or FRAPS) to record your screen. Windows 11's native tools have evolved to professional levels. <strong>Xbox Game Bar</strong> now utilizes GPU hardware acceleration (NVENC/AMF) to record without FPS drops, and the <strong>Snipping Tool</strong> allows for precise area selection for quick tutorials.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In this expanded guide, we go beyond the \"Record\" button. We'll show you how to configure audio to avoid distortion, how to make quick edits without re-encoding, and how to use the \"Replay\" feature to save those epic moments that just happened.
        </p>
      `
        },
        {
            title: "Chapter 1: Xbox Game Bar (The Gaming Hub)",
            content: `
        <div class="space-y-6">
            <h4 class="text-white font-bold text-xl mb-3">Essential Keyboard Commands</h4>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                    <strong class="text-green-400 block mb-1">Win + Alt + R</strong>
                    <span class="text-gray-300 text-sm">Start/Stop instant recording (No menus).</span>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong class="text-blue-400 block mb-1">Win + Alt + G</strong>
                    <span class="text-gray-300 text-sm">Save the last 30 seconds (Replay Clip).</span>
                </div>
                <div class="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                    <strong class="text-purple-400 block mb-1">Win + G</strong>
                    <span class="text-gray-300 text-sm">Open the Panel (Overlay) to adjust volume levels.</span>
                </div>
            </div>

            <h4 class="text-white font-bold text-xl mt-6 mb-3">Configuring the \"Replay Buffer\" (Record the Past)</h4>
            <p class="text-gray-300 text-md">
                The most powerful feature of the Game Bar is recording what ALREADY happened. This consumes a bit of RAM but ensures you never miss an epic moment.
            </p>
            <ol class="list-decimal list-inside text-gray-300 space-y-2 bg-gray-900/40 p-5 rounded-lg">
                <li>Go to <strong>Settings > Gaming > Captures</strong>.</li>
                <li>Enable the <strong>\"Record what happened\"</strong> option.</li>
                <li>Set the time to \"30 seconds\" or \"1 minute\" (Going beyond this may cause in-game lag).</li>
                <li>Now, whenever something cool happens, press <code>Win + Alt + G</code> and the video will be saved in your Videos folder.</li>
            </ol>
        </div>
      `
        },
        {
            title: "Chapter 2: Snipping Tool (Tutorials and Meetings)",
            content: `
        <p class="text-gray-300 mb-4">
            Xbox Game Bar does not record the Desktop or File Explorer for security reasons. For that (and for recording specific browser windows), we use the evolved Snipping Tool.
        </p>

        <ol class="list-decimal list-inside text-gray-300 space-y-4 bg-gray-900 border border-gray-700 p-6 rounded-xl">
            <li>
                <strong>Master Shortcut:</strong> Press <code>Win + Shift + S</code>.
            </li>
            <li>
                <strong>Change Mode:</strong> At the top of the screen, click the <strong>Video Camera</strong> icon.
            </li>
            <li>
                <strong>Select Area:</strong> Drag your mouse to draw a square over the area you wish to record.
            </li>
            <li>
                <strong>Audio:</strong> Before starting, click the Microphone icon at the top to ensure your voice is captured. To record PC audio as well, enable the System Sound icon.
            </li>
            <li>
                <strong>Finish:</strong> Click the red square or the notification to stop. The video will open for preview.
            </li>
        </ol>
      `
        },
        {
            title: "Chapter 3: Quality Settings (Bitrate and FPS)",
            content: `
        <p class="text-gray-300 mb-4">
            Windows comes pre-configured for \"Space Saving,\" which often makes videos look pixelated or locked at 30fps. Let's change that to YouTube quality (1080p60).
        </p>

        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-gray-300 border-collapse border border-gray-700 rounded-lg">
                <thead class="bg-gray-800 text-white">
                    <tr>
                        <th class="p-3 border border-gray-700">Setting</th>
                        <th class="p-3 border border-gray-700 text-red-400">Default (Poor)</th>
                        <th class="p-3 border border-gray-700 text-green-400">Recommended (YouTube)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-900/50">
                        <td class="p-3 border border-gray-700 font-bold">Frame Rate</td>
                        <td class="p-3 border border-gray-700">30 fps</td>
                        <td class="p-3 border border-gray-700"><strong>60 fps</strong> (Full Fluidity)</td>
                    </tr>
                    <tr>
                        <td class="p-3 border border-gray-700 font-bold">Video Quality</td>
                        <td class="p-3 border border-gray-700">Standard</td>
                        <td class="p-3 border border-gray-700"><strong>High</strong> (Bitrate ~15Mbps)</td>
                    </tr>
                    <tr class="bg-gray-900/50">
                        <td class="p-3 border border-gray-700 font-bold">Audio Quality</td>
                        <td class="p-3 border border-gray-700">128 kbps</td>
                        <td class="p-3 border border-gray-700"><strong>192 kbps</strong> (Crystal Clear Voice)</td>
                    </tr>
                    <tr>
                        <td class="p-3 border border-gray-700 font-bold">Mouse Cursor</td>
                        <td class="p-3 border border-gray-700">On</td>
                        <td class="p-3 border border-gray-700">Off (For cinematic games)</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="text-xs text-gray-400 mt-2">
            Access these options in: <strong>Settings > Gaming > Captures</strong>.
        </p>
      `
        },
        {
            title: "Chapter 4: Quick Editing (Clipchamp and Photos)",
            content: `
        <p class="text-gray-300 mb-4 h-full">
            You recorded 1 hour of gameplay but only want the final 5 minutes. You don't need Adobe Premiere.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mt-6">
            <div>
                <h4 class="text-white font-bold text-lg mb-2">Method 1: Photos App (Lossless Trim)</h4>
                <p class="text-gray-400 text-sm mb-2">
                    Open the video in the default Windows player. Press <strong>Ctrl + E</strong> (Edit).
                    <br/><br/>
                    Drag the white handles on the timeline to mark the start and end. Click \"Save a copy.\"
                    <br/><strong class="text-green-400">Advantage:</strong> It's instantaneous. The video isn't re-encoded, meaning zero quality loss.
                </p>
            </div>
            
            <div>
                <h4 class="text-white font-bold text-lg mb-2">Method 2: Clipchamp (Full Editing)</h4>
                <p class="text-gray-400 text-sm mb-2">
                    The official Windows 11 editor. Drag your video there.
                    <br/><br/>
                    Add text, background music (free library available), transitions, and even automatic AI captions. When exporting, choose 1080p (Free).
                    <br/><strong class="text-blue-400">Advantage:</strong> Full creative tools.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Troubleshooting (FAQ)",
            content: `
        <div class="space-y-6 bg-gray-800/20 p-6 rounded-xl">
            <div>
                <h4 class="font-bold text-white text-lg">Black Screen in Games (DirectX 12)</h4>
                <p class="text-gray-300 text-sm mt-1">
                    Some games (like CS2 or Valorant) in \"Exclusive Fullscreen\" mode block Game Bar rendering. 
                    <br/><strong>Solution:</strong> Change the game's video mode to \"Borderless Windowed.\" The performance hit nowadays is negligible and it allows for error-free recording.
                </p>
            </div>
            <div>
                <h4 class="font-bold text-white text-lg">Microphone Audio Low or Muted</h4>
                <p class="text-gray-300 text-sm mt-1">
                    Open the Game Bar (Win+G). In the \"Audio\" widget, go to the \"Voice\" tab. Ensure the correct microphone is selected (Windows sometimes defaults to a webcam). Increase the volume there.
                </p>
            </div>
            <div>
                <h4 class="font-bold text-white text-lg">Video Stuttering Heavily</h4>
                <p class="text-gray-300 text-sm mt-1">
                    If you're recording to the same HDD where the game is installed, the drive may struggle to read the game and write video simultaneously.
                    <br/><strong>Solution:</strong> Move the Captures folder to a second HDD or SSD.
                </p>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/como-usar-obs-studio-gravar-tela",
            title: "Advanced Tutorial: OBS Studio",
            description: "When native tools aren't enough: Streamlabs, Scenes, and Sources."
        },
        {
            href: "/guides/atalhos-produtividade-windows",
            title: "Secret Shortcuts",
            description: "Master your keyboard to work 10x faster."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Optimize Disk",
            description: "Ensure your SSD is at maximum speed for recording."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
