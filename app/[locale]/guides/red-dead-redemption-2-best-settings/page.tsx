import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'red-dead-redemption-2-melhores-configuracoes',
    title: "Red Dead Redemption 2 (2026): Optimized Settings (Hardware Unboxed)",
    description: "RDR2 is visually stunning, but the 'Ultra' preset is an FPS killer. Use these optimized settings (based on Hardware Unboxed analysis) to gain up to 40% performance with near-identical visuals.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '30 min'
};

const title = "RDR2 Optimized Settings (2026): Ultra Visuals, High FPS";
const description = "Rockstar included 'Ultra' settings that even an RTX 4090 struggles with (such as extreme MSAA and Water Physics). The secret lies in knowing which settings to lower for maximum impact.";

const keywords = [
    'rdr2 best graphics settings mid range pc',
    'red dead redemption 2 hardware unboxed settings 2026',
    'rdr2 blurry fix taa sharpening',
    'water physics quality rdr2 fps boost',
    'tree tessellation rdr2 performance',
    'dlss vs fsr 2.0 rdr2 quality',
    'volumetric raymarch resolution rdr2',
    'err_gfx_state crash fix rdr2',
    'voltris optimizer rockstar games',
    'vulkan vs dx12 rdr2 benchmark'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('red-dead-redemption-2-melhores-configuracoes', title, description, keywords, locale);
}

export default function RDR2Guide() {
    const summaryTable = [
        { label: "Textures", value: "Ultra (Always)" },
        { label: "Lighting", value: "Medium" },
        { label: "Water Physics", value: "50% (Slider Mid)" },
        { label: "Shadows", value: "High" },
        { label: "Tree Tessellation", value: "OFF" },
        { label: "TAA", value: "Medium + Sharpening" },
        { label: "API", value: "Vulkan (General)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Most Beautiful Game of the Decade",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          RDR2 features dozens of graphical options. Some consume over 20 FPS while offering almost no visual improvement. This guide applies a \"Turbocharged Console Settings\" approach to maximize your hardware.
        </p>
      `
        },
        {
            title: "Chapter 1: Textures and Anisotropy (Do Not Lower)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Texture Quality: Ultra</h4>
                <p class="text-gray-400 text-xs text-justify">
                    The visual gap between 'High' and 'Ultra' textures is massive. Designs that look sharp on Ultra can appear blurry on High.
                    <br/><strong>Always keep this on Ultra</strong>, even on 4GB or 6GB VRAM cards. The performance impact is zero as long as you have enough VRAM for the buffer.
                </p>
            </div>
             <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Anisotropic Filtering: x16</h4>
                <p class="text-gray-400 text-xs">
                    This costs only 1 or 2 FPS and ensures that ground and wall textures remain sharp at a distance. Never lower this setting.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: The FPS Killers (Water and Trees)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Water Physics Quality:</strong> Set this to <strong>Half (Slider in the middle)</strong>.
            <br/>Maximizing this setting forces an extremely demanding simulation of water displacement that drains CPU and GPU power for a virtually imperceptible visual gain.
            <br/>- <strong>Tree Tessellation:</strong> OFF.
            <br/>This adds 3D relief to tree trunks. In heavily forested areas, this can drop your FPS by nearly half. The game looks beautiful without it.
            <br/>- <strong>Reflection Quality:</strong> Medium. Ultra renders reflections in mirrors and windows that you rarely interact with.
        </p>
      `
        },
        {
            title: "Chapter 3: Lighting and Shadows",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Global Illumination:</strong> High.
            - <strong>Shadow Quality:</strong> High. Interestingly, Ultra shadows can often look too \"sharp\" and artificial; High provides a smoother, more realistic blend.
            - <strong>Far Shadow Quality:</strong> Medium.
            - <strong>Volumetric Quality (Clouds/Fog):</strong> Medium. Ultra is incredibly taxing on both GPU and CPU.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: TAA (Anti-Aliasing) and Motion Blur",
            content: `
        <p class="mb-4 text-gray-300">
            The TAA implementation in RDR2 is notorious for being overly blurry.
            <br/>- TAA: Medium.
            <br/>- FXAA: OFF.
            <br/>- MSAA: OFF (Extremely demanding).
            <br/>- <strong>TAA Sharpening:</strong> Increase the slider to 50% or 70%. This effectively removes the movement blur without introducing aliasing or \"shimmering\" artifacts.
        </p>
      `
        },
        {
            title: "Chapter 5: Vulkan vs. DirectX 12",
            content: `
        <p class="mb-4 text-gray-300">
            Expand the \"Advanced Graphics\" section to find this option.
            <br/>- <strong>Vulkan:</strong> Generally provides a smoother experience with fewer micro-stutters, especially on AMD hardware.
            <br/>- <strong>DX12:</strong> May yield a slightly higher maximum FPS but is prone to more frequent frame-time fluctuations.
            <br/>Recommendation: Start with <strong>Vulkan</strong>. If you experience the common \"ERR_GFX_STATE\" crash, switch to DX12.
        </p>
      `
        },
        {
            title: "Chapter 6: DLSS and FSR Upscaling",
            content: `
        <p class="mb-4 text-gray-300">
            If playing at 1440p or 4K:
            <br/>Enable <strong>DLSS Quality</strong>.
            <br/>Rockstar's DLSS implementation is excellent and handles shimmering on horse manes and distant trees better than native TAA.
            <br/>For 1080p, we recommend trying native resolution first, as DLSS at lower resolutions can lose fine detail.
        </p>
      `
        },
        {
            title: "Chapter 7: Geometry and Grass LOD",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Geometry Level of Detail:</strong> 5/5 (Full bar). Lowering this causes noticeable pop-in of rocks and debris.
            - <strong>Grass Level of Detail:</strong> 4/10. Grass Rendering is heavy. 4 is the universal \"sweet spot\" for performance and density.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Fixing the ERR_GFX_STATE Crash",
            content: `
            <p class="mb-4 text-gray-300">
                If the game closes abruptly:
                <br/>Navigate to <code>Documents\\Rockstar Games\\Red Dead Redemption 2\\Settings</code>.
                <br/>Delete all files starting with <code>sga_</code> (these are Vulkan cache files). The game will rebuild them cleanly on next launch.
                <br/>Optionally, add <code>-ignorepipelinecache</code> to your Steam/Epic launch arguments.
            </p>
            `
        },
        {
            title: "Chapter 9: Red Dead Online Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                In Online mode, consistent framerate is more important than visual fidelity.
                <br/>Consider lowering Volumetric Lighting to 'Low' to ensure a locked 60 FPS during intense gunfights in areas like Saint Denis.
            </p>
            `
        },
        {
            title: "Chapter 10: HDR Configuration",
            content: `
            <p class="mb-4 text-gray-300">
                The \"Cinematic HDR\" mode is generally superior to \"Game HDR.\"
                <br/>Increase the \"Paper White\" setting to ensure text is legible. RDR2 features one of the best HDR implementations for night scenes and campfire lighting.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Is 60 FPS possible on Ultra settings?",
            answer: "Only on high-end hardware like an RTX 4070 Ti or better at 1440p. RDR2 at true 'Ultra' (everything maxed) is a benchmark monster. Use our optimized settings for 95% of the visual quality at double the FPS."
        },
        {
            question: "Does Borderless Windowed mode cause lag?",
            answer: "In RDR2, yes. The game runs significantly better and with correct HDR mapping in Exclusive Fullscreen mode."
        },
        {
            question: "Should I use Triple Buffering?",
            answer: "If you have V-Sync disabled, keep Triple Buffering off to reduce input latency."
        }
    ];

    const externalReferences = [
        { name: "Hardware Unboxed Optimization Guide", url: "https://www.youtube.com/watch?v=385eG1IEZMU" },
        { name: "PCGamingWiki RDR2", url: "https://www.pcgamingwiki.com/wiki/Red_Dead_Redemption_2" }
    ];

    const relatedGuides = [
        {
            href: "/guides/hdr-windows-11-calibracao-jogos",
            title: "HDR Calibration",
            description: "Essential for the best RDR2 experience."
        },
        {
            href: "/guides/nvidia-painel-controle-melhores-configuracoes",
            title: "NVIDIA Settings",
            description: "Apply extra sharpening via the driver."
        },
        {
            href: "/guides/monitor-ultrawide-jogos-competitivos",
            title: "Ultrawide Support",
            description: "RDR2 supports 21:9 natively."
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

