import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'hdr-windows-11-calibracao-jogos',
    title: "HDR on Windows 11 (2026): Calibration and True Color Guide",
    description: "Does HDR make your games look washed-out and gray? The problem isn't Windows—it's your settings. Learn how to use the HDR Calibration App and set up Auto-HDR for legacy titles.",
    category: 'windows',
    difficulty: 'Intermediate',
    time: '25 min'
};

const title = "HDR Gaming (2026): Vivid Colors and Realism";
const description = "Correctly configured HDR is more visually impactful than Ray Tracing. But if you're using a cheap 'HDR400' monitor or haven't calibrated it, it looks terrible. Let's fix that.";

const keywords = [
    'fix washed out colors windows 11 hdr',
    'windows hdr calibration app tutorial 2026',
    'enable auto hdr for old sdr games',
    'is hdr400 worth it for gaming',
    'hdr on or off for competitive gaming',
    'prevent oled burn-in hdr gaming',
    'how to set nits brightness hdr windows',
    'nvidia rtx hdr video setup guide',
    'voltris optimizer color profile settings',
    'dolby vision windows gaming support'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('hdr-windows-11-calibracao-jogos', title, description, keywords, locale);
}

export default function HDRGuide() {
    const summaryTable = [
        { label: "Status", value: "ON (For OLED/Mini-LED)" },
        { label: "Status", value: "OFF (For Budget IPS)" },
        { label: "Calibration", value: "Official MS App" },
        { label: "Auto HDR", value: "ON (For SDR Games)" },
        { label: "Luminance", value: "400 to 1000+ Nits" },
        { label: "SDR Brightness", value: "Adjust Slider" },
        { label: "Bit Depth", value: "10-bit (NVIDIA)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The 'Washed-out' HDR Myth",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Many gamers enable HDR and complain: \"It looks gray and lacks contrast.\" This typically happens because Windows is sending a 1000-Nit signal to a monitor that can only handle 300 Nits. The monitor then \"clips\" the whites and loses shadow detail. Calibration is the essential key.
        </p>
      `
        },
        {
            title: "Chapter 1: Real HDR vs. Marketing HDR",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">DisplayHDR 400 (Entry Level)</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Found on most budget \"Gamer\" IPS monitors. It can technically receive an HDR signal but lacks the peak brightness and Local Dimming zones required for true high dynamic range.
                    <br/><strong>Verdict:</strong> Usually better to keep <span class="text-red-400">OFF</span>. SDR with accurate colors is superior to poor-quality simulated HDR.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">HDR 600 / 1000 / True Black (OLED)</h4>
                <p class="text-gray-400 text-xs">
                    Found on OLED panels (Samsung G8, Alienware) or high-end Mini-LED displays. This is where HDR truly shines (literally). Keep it <span class="text-emerald-400">ON</span>.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Windows HDR Calibration App Engine",
            content: `
        <p class="mb-4 text-gray-300">
            Download the <strong>\"Windows HDR Calibration\"</strong> app from the Microsoft Store (Free).
            <br/>Run the utility and follow these steps:
            <br/>1. Adjust the black level until you can no longer see the test patterns.
            <br/>2. Adjust the peak white levels until the patterns disappear (Clipping threshold).
            <br/>This creates a custom color profile that tells Windows EXACTLY what your monitor's physical limits are (e.g., 450 nits), preventing the \"washed-out\" image effect.
        </p>
      `
        },
        {
            title: "Chapter 3: The Magic of Auto HDR",
            content: `
        <p class="mb-4 text-gray-300">
            Navigate to Settings > System > Display > HDR.
            <br/>Enable <strong>\"Auto HDR.\"</strong>
            <br/>This uses AI processing to inject high dynamic range into legacy DirectX 11/12 titles (like Skyrim, GTA V, and Rocket League).
            <br/>It works surprisingly well, providing brilliance to particle effects and explosions without altering the developer's original artistic intent.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Configuring 10-bit Color (NVIDIA)",
            content: `
        <p class="mb-4 text-gray-300">
            HDR requires 10-bit color depth to prevent \"Color Banding\" (visible gradients in the sky).
            <br/>In NVIDIA Control Panel > Change Resolution:
            <br/>Under \"Output color depth,\" change from 8 bpc to <strong>10 bpc</strong>.
            <br/>If the option is missing, you may need to lower your refresh rate (Hz) or upgrade to a higher-quality DisplayPort 1.4/HDMI 2.1 cable.
        </p>
      `
        },
        {
            title: "Chapter 5: SDR Content Brightness Slider",
            content: `
        <p class="mb-4 text-gray-300">
            When HDR is active in Windows, your standard desktop apps (Chrome, Discord) might appear too dark or overly bright.
            <br/>In Settings > HDR, use the <strong>\"SDR content brightness\"</strong> slider.
            <br/>Adjust this until reading text feels comfortable. Note: This setting does NOT affect brightness within native HDR games.
        </p>
      `
        },
        {
            title: "Chapter 6: RTX Video HDR (AI Upscaling)",
            content: `
        <p class="mb-4 text-gray-300">
            If you own an RTX 30/40 series GPU:
            <br/>In NVIDIA Control Panel > Adjust video image settings.
            <br/>Enable <strong>RTX Video HDR</strong>.
            <br/>This transforms standard YouTube and Netflix videos (SDR) into HDR using AI. It's incredible for enhancing anime and older films.
        </p>
      `
        },
        {
            title: "Chapter 7: The Win+Alt+B Shortcut",
            content: `
        <p class="mb-4 text-gray-300">
            HDR can occasionally glitch when exiting a game, leaving the desktop looking overexposed.
            <br/>Use the shortcut <strong>Windows + Alt + B</strong>.
            <br/>This restarts the video driver layer and toggles HDR on/off instantly without needing to navigate through system menus.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Handling Broken Native HDR",
            content: `
            <p class="mb-4 text-gray-300">
                Some games (e.g., Red Dead Redemption 2, Cyberpunk 2077 at launch) have notoriously poor native HDR implementations.
                <br/>In these cases, Windows Auto HDR can actually look better than the \"Native\" implementation. Try disabling HDR in the game menu while keeping it enabled in Windows to compare.
            </p>
            `
        },
        {
            title: "Chapter 9: HDMI 2.1 vs DisplayPort 1.4",
            content: `
            <p class="mb-4 text-gray-300">
                For 4K 120Hz at 10-bit HDR, you need massive bandwidth.
                <br/>Use certified <strong>HDMI 2.1</strong> (Ultra High Speed) cables. Older HDMI cables will result in screen flickering or will limit your refresh rate to 60Hz.
            </p>
            `
        },
        {
            title: "Chapter 10: Capturing Screenshots in HDR",
            content: `
            <p class="mb-4 text-gray-300">
                Standard screenshots often look blown-out when HDR is active.
                <br/>Use the <strong>Xbox Game Bar (Win+G)</strong> to take screenshots in JXR (HDR) or PNG (Auto-tone-mapped to SDR) format. While standard Print Screen has improved in Windows 11, Game Bar remains the most reliable method for high-fidelity captures.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does HDR decrease my FPS?",
            answer: "Marginally (around 1-2%). The heavy processing is usually handled by the monitor's dedicated hardware. Microsoft Auto HDR consumes a small amount of GPU resource, but it's negligible on modern cards."
        },
        {
            question: "Should I use HDR in competitive shooters like CS2?",
            answer: "We generally don't recommend it. HDR adds intense brightness (flashbangs will actually blind you physically) and can make it harder to spot enemies in dark shadows. Most pro players prefer SDR with high digital vibrance."
        },
        {
            question: "Why does my monitor flicker when entering a game?",
            answer: "This is normal. It is the monitor switching its physical backlight profile from SDR to HDR mode. Using the Win+Alt+B shortcut can help manage these transitions more smoothly."
        }
    ];

    const externalReferences = [
        { name: "Windows HDR Calibration App (Microsoft Store)", url: "https://apps.microsoft.com/store/detail/windows-hdr-calibration/9N7F2SM5D1LR" },
        { name: "Official DisplayHDR Testing Site", url: "https://displayhdr.org/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Setup",
            description: "Ensuring correct colors and refresh rates."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Guide",
            description: "Step-by-step 10-bit color tutorial."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Windows 11 Master",
            description: "The base system required for Auto HDR."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
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

