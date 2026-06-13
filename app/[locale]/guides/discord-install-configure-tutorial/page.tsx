import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'tutorial-discord-instalar-configurar',
  title: "Discord: Complete Installation and Configuration Guide (2026)",
  description: "Want to start on Discord but don't know how to configure it? Learn how to create servers, adjust audio to prevent echo, and protect your account with security...",
  category: 'software',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Discord: Complete Installation and Configuration Guide (2026)";
const description = "Want to start on Discord but don't know how to configure it? Learn how to create servers, adjust audio to prevent echo, and protect your account with security.";
const keywords = [
    'how to install discord on pc tutorial 2026',
    'configure discord audio without echo and noise',
    'how to create a professional discord server 2026',
    'discord security warnings two-factor authentication',
    'improve stream quality on discord for free'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('tutorial-discord-instalar-configurar', title, description, keywords, locale);
}

export default function DiscordGuide() {
    const summaryTable = [
        { label: "Check #1", value: "Activate Krisp (Noise Suppression)" },
        { label: "Check #2", value: "Configure Push-to-Talk" },
        { label: "Security", value: "2FA (Two-Factor Authentication)" },
        { label: "Difficulty", value: "Easy" }
    ];

    const contentSections = [
        {
            title: "Why is Discord essential for gamers?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, **Discord** is much more than just a voice chat. It's where communities gather, where you stream your games to friends, and where guilds organize. However, a poor configuration can result in crackling audio, account breaches, or lag in your game.
        </p>
      `
        },
        {
            title: "1. The Secret to Perfect Audio",
            content: `
        <p class="mb-4 text-gray-300">Don't let your friends hear your fan noise:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to User Settings > Voice & Video.</li>
            <li>Under <strong>Noise Suppression</strong>, select <strong>Krisp</strong>. It is the best AI technology to remove background noises and keyboard clicks.</li>
            <li>Make sure 'Echo Cancellation' is enabled if you are not using headphones.</li>
            <li><strong>Tip:</strong> Use the 'Automatically determine input sensitivity' mode only if your room is quiet. Otherwise, use 'Push-to-Talk'.</li>
        </ol>
      `
        },
        {
            title: "2. Protecting your Account (Maximum Security)",
            content: `
        <div class="bg-red-900/10 p-5 rounded-xl border border-red-500/30">
            <h4 class="text-red-400 font-bold mb-2">Watch out for Links:</h4>
            <p class="text-sm text-gray-300">
                Discord is a constant target for hackers. <strong>Activate Two-Factor Authentication (2FA)</strong> in Settings > My Account. Never click on links promising "Free Discord Nitro" from strangers; they steal your session (Token) and you lose your account in seconds.
            </p>
        </div>
      `
        },
        {
            title: "3. Game Optimization (Overlay)",
            content: `
        <p class="mb-4 text-gray-300">
            The **Discord Overlay** (that interface that shows who is talking over the game) can cause FPS drops on lower-end PCs. 
            <br/>If you feel the game is "heavy" when you are in a call, go to Settings > Game Overlay and disable the 'Enable in-game overlay' option.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/discord-otimizar-para-jogos",
            title: "Optimize Discord",
            description: "Advanced performance tips for FPS."
        },
        {
            href: "/guides/autenticacao-dois-fatores",
            title: "2FA Guide",
            description: "Understand why you should protect your accounts."
        },
        {
            href: "/guides/aumentar-volume-microfone-windows",
            title: "Windows Microphone",
            description: "Adjust system volume for Discord."
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

