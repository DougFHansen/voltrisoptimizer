import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'valorant-reduzir-input-lag-fps-boost-config',
    title: "Valorant (2026): FPS Boost and Zero Input Lag Guide",
    description: "Optimize Valorant to run smoothly. Nvidia Reflex settings, Windows tweaks, CPU priority, and how to fix FPS drops.",
    category: 'optimization',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Valorant Radiant: Extreme Optimization";
const description = "In Valorant, high FPS reduces input lag even if your monitor is 60Hz. Learn how to remove all Windows overhead to focus 100% of the CPU on Vanguard and the game.";

const keywords = [
    'valorant fps boost pack low end pc',
    'input lag valorant nvidia reflex on boost',
    'raw input buffer valorant on or off',
    'multithreaded rendering valorant',
    'stretched resolution valorant 4:3 aim',
    'packet loss fix valorant network',
    'voltris optimizer fps',
    'van 9003 error fix secure boot'
];

export const metadata: Metadata = createGuideMetadata('valorant-reduzir-input-lag-fps-boost-config', title, description, keywords);

export default function ValorantGuide() {
    const summaryTable = [
        { label: "Multithreaded", value: "ON" },
        { label: "Reflex", value: "On + Boost" },
        { label: "Raw Input Buffer", value: "ON (8KHz Mice)" },
        { label: "HRTF", value: "ON (3D Audio)" },
        { label: "Resolution", value: "Native (4:3 only stretches HUD)" },
        { label: "Limit FPS", value: "OFF (In-game)" },
        { label: "Material", value: "Low (Clarity)" }
    ];

    const contentSections = [
        {
            title: "Introduction: CPU Bound",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Valorant uses almost no GPU. It devours CPU.
          <br/>Closing Chrome, Discord (Overlay), and background apps is essential. Optimizing Windows yields more results in Valorant than in any other game.
        </p>
      `
        },
        {
            title: "Chapter 1: Graphic Settings (Video)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Quality</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Multithreaded Rendering:</strong> ON. (Without this your FPS is cut in half.)
                    - <strong>Material Quality:</strong> Low.
                    - <strong>Texture Quality:</strong> Low/Medium.
                    - <strong>Detail Quality:</strong> Low. (Removes grass and decals that distract.)
                    - <strong>UI Quality:</strong> Low.
                    - <strong>Vignette:</strong> OFF.
                    - <strong>VSync:</strong> OFF.
                    - <strong>Anti-Aliasing:</strong> MSAA 2x or 4x. (None is too jagged, FXAA blurs.) 2x is ideal.
                    - <strong>Anisotropic Filtering:</strong> 2x or 4x.
                    - <strong>Improve Clarity:</strong> ON (Increases agent contrast).
                    - <strong>Experimental Sharpening:</strong> OFF.
                    - <strong>Bloom/Distortion/Shadows:</strong> OFF.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Nvidia Reflex and FPS",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Nvidia Reflex Low Latency:</strong> On + Boost.
            <br/>This forces your GPU to wait for the CPU, keeping the render queue empty. Minimum input lag.
            - <strong>Limit FPS Always:</strong> OFF.
            <br/>More FPS means lower frametime, even if your monitor doesn't show it. Leave it uncapped (or cap at 300+ if your PC overheats).
        </p>
      `
        },
        {
            title: "Chapter 3: Raw Input Buffer",
            content: `
        <p class="mb-4 text-gray-300">
            In Controls > Mouse.
            <br/>Enable <strong>Raw Input Buffer</strong> if you have a mouse with a high Polling Rate (1000Hz, 4000Hz, 8000Hz).
            <br/>This makes the game process mouse data in a separate thread. If your mouse is standard (125Hz-500Hz), it makes no difference, but you can leave it on.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Stretched Resolution (4:3)?",
            content: `
            <p class="mb-4 text-gray-300">
                Unlike CS2, in Valorant <strong>4:3 does NOT stretch the character models</strong> (Hitbox doesn't change).
                <br/>Only the interface (HUD) and crosshair stretch. The FOV stays locked at 103 horizontal.
                <br/>Some use it out of CS habit or to gain FPS (fewer pixels), but it gives no aiming advantage.
            </p>
            `
        },
        {
            title: "Chapter 5: Network Optimization (Packet Loss)",
            content: `
        <p class="mb-4 text-gray-300">
            General > Network Buffering: <strong>Minimum</strong>.
            <br/>If you have packet loss (characters teleporting), switch to Moderate, but this increases peeker advantage lag. Always try Minimum and fix your internet (Ethernet cable).
        </p>
      `
        },
        {
            title: "Chapter 6: VAN 9003 Error (Modern Systems)",
            content: `
        <p class="mb-4 text-gray-300">
            Windows 11 requires TPM 2.0 and Secure Boot enabled in the BIOS for Vanguard to run.
            <br/>Enter your PC's BIOS, find "Secure Boot" and change from "Other OS" to "Windows UEFI". Enable TPM (fTPM or PTT).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 7: Process Priority",
            content: `
            <p class="mb-4 text-gray-300">
                Use Task Manager > Details > <code>VALORANT-Win64-Shipping.exe</code> > Set Priority > High.
                <br/>Don't use "Real Time" (it locks the mouse). "High" helps avoid drops when Windows decides to update in the background.
            </p>
            `
        },
        {
            title: "Chapter 8: HRTF Audio",
            content: `
            <p class="mb-4 text-gray-300">
                Audio > Speaker Configuration: Stereo.
                <br/>Enable <strong>HRTF</strong>.
                <br/>This simulates 3D sound. At first it feels strange, but it's the only way to know if footsteps come from above or below on Haven/Split.
            </p>
            `
        },
        {
            title: "Chapter 9: Crosshair",
            content: `
            <p class="mb-4 text-gray-300">
                Copy from a Pro. (e.g., TenZ or Aspas).
                <br/>Generally: Cyan, 1-4-2-2 (Inner Lines), no Outline, no Center Dot. A small crosshair blocks less of your view.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Alt-Tab freezes the PC?",
            answer: "This is common on Windows 11 with 'Hardware-accelerated GPU scheduling' and fullscreen mode. Try using 'Windowed Fullscreen' if it's very annoying, but Fullscreen gives less input lag."
        },
        {
            question: "Vanguard closes by itself?",
            answer: "Check if the 'vgc' service is set to Automatic in services.msc. Uninstall RGB software (iCue, Armoury Crate) that conflicts with the anti-cheat."
        }
    ];

    const externalReferences = [
        { name: "Valorant Pro Crosshairs", url: "https://www.vcrdb.net/" },
        { name: "Riot Support - VAN Errors", url: "https://support-valorant.riotgames.com/hc/en-us" }
    ];

    const relatedGuides = [
        {
            href: "/guides/cs2-melhores-comandos-console-fps",
            title: "CS2",
            description: "Similar FPS optimization."
        },
        {
            href: "/guides/mouse-otimizacao-windows-precisao",
            title: "Mouse",
            description: "Fine tuning."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
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



