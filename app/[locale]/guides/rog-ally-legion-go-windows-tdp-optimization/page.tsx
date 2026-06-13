import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'rog-ally-legion-go-otimizacao-windows-tdp-guia',
    title: "ROG Ally & Legion Go (2026): Windows Optimization and Battery Life",
    description: "Windows 11 isn't natively designed for 7-inch screens. Learn how to perform a debloat, configure Armoury Crate SE, adjust TDP curves, and use RSR to boost your FPS.",
    category: 'emulation',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "ROG Ally and Windows Handhelds: Performance Guide";
const description = "Unlike the Steam Deck, shared with SteamOS, these devices carry the full weight of Windows. Optimization is mandatory to prevent your battery from draining in under an hour.";

const keywords = [
    'improve rog ally battery life disable core isolation',
    'legion go fps boost drivers',
    'amd rsr vs fsr handheld guide',
    'armoury crate se recommended settings',
    'hibernate windows 11 handheld bug fix',
    'vram 6gb or auto rog ally',
    'voltris optimizer handheld windows',
    'lossless scaling app steam handheld'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('rog-ally-legion-go-otimizacao-windows-tdp-guia', title, description, keywords, locale);
}

export default function RogAllyGuide() {
    const summaryTable = [
        { label: "VRAM Buffer", value: "6GB (Best Balance)" },
        { label: "Core Isolation", value: "OFF (FPS Boost)" },
        { label: "TDP (AAA Games)", value: "25W / 30W" },
        { label: "TDP (Indie Games)", value: "10W / 15W" },
        { label: "Resolution", value: "900p (RSR ON)" },
        { label: "CPU Boost", value: "OFF (Lower Heat)" },
        { label: "Sleep Style", value: "Hibernate (Better than Sleep)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Battle Against Windows Background Tasks",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows running in the background consumes precious battery life and CPU cycles. While ASUS and Lenovo provide proprietary software to help, the secret to true performance lies in a clean Windows installation and manual hardware control.
        </p>
      `
        },
        {
            title: "Chapter 1: VRAM (UMA) Configuration",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Armoury Crate > Settings > Operating Mode</h4>
                <p class="text-gray-400 text-xs text-justify">
                    The default is usually 4GB.
                    <br/>- <strong>6GB:</strong> The ideal balance. It leaves 10GB of RAM for the system/game logic and 6GB dedicated for textures. Handles most AAA titles (Cyberpunk, Starfield).
                    <br/>- <strong>Auto:</strong> Can cause micro-stuttering in games (like Hogwarts Legacy) that aren't optimized to request memory dynamically.
                    <br/>- <strong>8GB:</strong> Risky. It leaves only 8GB for Windows and the game, which frequently leads to out-of-memory crashes.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Debloat and Core Isolation",
            content: `
        <p class="mb-4 text-gray-300">
            1. <strong>Core Isolation (Memory Integrity):</strong> Disable this in Settings > Privacy & Security > Windows Security > Device Security > Core Isolation. This provides a 5-10% FPS boost on Z1 Extreme CPUs.
            2. <strong>Startup Apps:</strong> Disable EVERYTHING (Steam, Epic, EA, Discord) from starting with Windows. Only open what you are currently playing.
            3. Use our \"Windows 11 Debloat\" guide to remove non-essential services like Teams, Widgets, and telemetry.
        </p>
      `
        },
        {
            title: "Chapter 3: CPU Boost (The Heat Villain)",
            content: `
        <p class="mb-4 text-gray-300">
            The Z1 Extreme often attempts to boost to 5.0GHz needlessly, driving temps up to 95°C and causing thermal throttling.
            <br/>Disable \"CPU Boost\" in Windows Power Options (requires a simple registry edit to make the option visible).
            <br/>The Result: Near-identical game performance (since games are GPU-bound) but running at a much cooler 70°C with quieter fans.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: RSR (Radeon Super Resolution)",
            content: `
        <p class="mb-4 text-gray-300">
            The Ally's screen is 1080p, while the Legion Go is 1600p. Running at native resolution is very demanding for a handheld.
            <br/>1. Enable RSR in the AMD Software or the quick command center.
            <br/>2. In the game settings, set the resolution to <strong>720p</strong> (Ally) or <strong>800p</strong> (Legion).
            <br/>3. The driver will upscale the image to full screen with added sharpness.
            <br/>It's extremely effective: 720p performance with visual quality close to native.
        </p>
      `
        },
        {
            title: "Chapter 5: 900p Resolution (The Sweet Spot)",
            content: `
        <p class="mb-4 text-gray-300">
            There is a registry mod available to enable an intermediate <strong>900p</strong> resolution on the ROG Ally.
            <br/>It offers the perfect balance between sharpness and high frame rates. It looks significantly better than 720p and is much easier to drive than 1080p. Highly recommended.
        </p>
      `
        },
        {
            title: "Chapter 6: Manual TDP Profiles",
            content: `
        <p class="mb-4 text-gray-300">
            Avoid using the default Turbo/Performance profiles. Instead, create manual curves:
            <br/>- <strong>18W:</strong> Perfect for AAA games (e.g., Cyberpunk at 40fps).
            <br/>- <strong>25W/30W:</strong> Best reserved for when you are plugged into AC power. On battery, this will last less than an hour.
            <br/>- <strong>12W:</strong> Ideal for Indie titles (Hades, Dead Cells). Battery can last 3-4 hours.
        </p>
      `
        },
        {
            title: "Chapter 7: Hibernate vs. Sleep Mode",
            content: `
        <p class="mb-4 text-gray-300">
            Windows \"Sleep\" is notoriously buggy and can lead to the device waking up inside a backpack, resulting in severe overheating.
            <br/>Change your Power Button action to <strong>Hibernate</strong>.
            <br/>While it takes 10 seconds longer to resume, it preserves battery life perfectly and ensures the device stays off when you want it to.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Lossless Scaling (App)",
            content: `
            <p class="mb-4 text-gray-300">
                Purchase the \"Lossless Scaling\" app on Steam.
                <br/>Its \"Frame Generation\" (LSFG) mode works on any game and any GPU.
                <br/>It effectively turns 30fps into 60fps (via synthetic frames). While it introduces minor ghosting, it is an incredible tool for playing slower-paced RPGs on a handheld.
            </p>
            `
        },
        {
            title: "Chapter 9: Legion Space and Bloatware",
            content: `
            <p class="mb-4 text-gray-300">
                The proprietary Legion Space software can be resource-heavy. Many users prefer to close it and use \"Handheld Companion\" or simply rely on Steam Big Picture mode.
            </p>
            `
        },
        {
            title: "Chapter 10: SD Card Heat Management (Ally-Specific)",
            content: `
            <p class="mb-4 text-gray-300">
                The SD card reader on the original ROG Ally is prone to failure due to its proximity to the hot air exhaust.
                <br/>Increase your manual Fan Curves to keep the device below 75°C to protect the reader hardware, or consider upgrading the internal SSD to 2TB (M.2 2230) and avoiding SD cards entirely.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is it worth Dual Booting with SteamOS (Bazzite)?",
            answer: "Bazzite is an excellent Linux distribution that mimics the Steam Deck experience on the Ally. It is highly recommended if you prioritize gaming and dislike managing Windows, providing instant suspension and a cleaner interface."
        },
        {
            question: "Does AMD Fluid Motion Frames (AFMF) work well?",
            answer: "Yes, it works in recent driver updates. It generates driver-level frames which can aid smoothness, but it tends to disable itself during very fast camera movements. Lossless Scaling is generally more consistent."
        }
    ];

    const externalReferences = [
        { name: "ROG Ally 900p Mod Guide", url: "https://rogallylife.com/2023/08/01/rog-ally-900p-resolution-guide/" },
        { name: "Handheld Companion (GitHub)", url: "https://github.com/Valkirie/HandheldCompanion" }
    ];

    const relatedGuides = [
        {
            href: "/guides/steam-deck-otimizacao-cryoutilities-protonge-guia",
            title: "Steam Deck",
            description: "The Linux-based alternative."
        },
        {
            href: "/guides/debloat-windows-11-otimizacao-powershell",
            title: "Debloat Guide",
            description: "Essential for freeing up system resources."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
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

