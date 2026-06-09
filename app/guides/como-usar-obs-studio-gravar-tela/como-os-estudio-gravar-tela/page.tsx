import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

const title = "How to use OBS Studio for Screen Recording: 2026 Guide";
const description = "Want to start recording your games or tutorials? Learn how to configure OBS Studio to get the best quality without lag on Windows 11 in 2026.";
const keywords = [
    'how to configure obs studio for screen recording 2026',
    'best obs studio settings for low end pc tutorial',
    'record game screen and audio obs studio complete guide',
    'configure bitrate and encoder obs studio tutorial 2026',
    'how to record gameplay without lag obs studio guide'
];

export const metadata: Metadata = createGuideMetadata('como-usar-obs-studio-gravar-tela', title, description, keywords);

export default function OBSStudioGuide() {
    const summaryTable = [
        { label: "Software", value: "OBS Studio (Open Broadcaster Software)" },
        { label: "Ideal Use", value: "Recording Games, Tutorials, and Streams" },
        { label: "Encoder", value: "NVENC (NVIDIA) / AMF (AMD) / AV1 (2026)" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "Why is OBS Studio the industry standard?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Unlike native Windows recording (Win+G), **OBS Studio** offers total control over what you record. You can separate the Microphone audio from the Game audio, add your Webcam with color filters and, most importantly, choose how your hardware should process the video. In 2026, it is the indispensable tool for any content creator.
        </p>
      `
        },
        {
            title: "1. Sources and Scenes (The Logic of OBS)",
            content: `
        <p class="mb-4 text-gray-300">Understand how to set up your image:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>Scene:</strong> It is the "stage". You can have one scene for the game and another for when you are just talking.</li>
            <li><strong>Sources:</strong> They are the actors. Click the '+' in Sources and choose <strong>'Game Capture'</strong> to record the game, or <strong>'Display Capture'</strong> to record everything you do on Windows.</li>
            <li><strong>Tip:</strong> Always run OBS as Administrator so it has priority over the game and does not cause frame drops during recording.</li>
        </ul >
      `
        },
        {
            title: "2. The Secret to Lag-Free Quality (Encoder)",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">2026 Output Configuration:</h4>
            <p class="text-sm text-gray-300">
                Go to Settings > Output > Recording Tab. <br/><br/>
                - <strong>Video Encoder:</strong> If you have an NVIDIA GPU, use <strong>NVIDIA NVENC H.264 (or AV1)</strong>. This makes the graphics card record the video, leaving your processor free for the game. <br/>
                - <strong>Bitrate:</strong> For 1080p 60fps, use between <strong>12,000 and 20,000 Kbps</strong> for a crystal-clear image.
            </p>
        </div>
      `
        },
        {
            title: "3. File Format (Never record in .mp4!)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Expert Tip:</strong> 
            <br/><br/>Change the recording format to <strong>.mkv</strong> or <strong>.flv</strong>. Why? If your PC crashes or the power goes out in the middle of a recording, the .mp4 file will be corrupted and you will lose everything. With .mkv, the video is saved in real-time and you will have the file safe until the exact second of the crash. Later, just go to the 'File' menu in OBS and click 'Remux Recordings' to transform it into .mp4 for editing.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guias/grava%C3%A7%C3%A3o-tela-windows-nativa-dicas",
            title: "Saving Time",
            description: "Recording tips without installing anything."
        },
        {
            href: "/guias/aceleracao-hardware-gpu-agendamento",
            title: "GPU Scheduling",
            description: "Improve recording synchronization."
        },
        {
            href: "/guias/aumentar-volume-microfone-windows",
            title: "Quality Audio",
            description: "Adjust the sound of your voice in OBS."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}
