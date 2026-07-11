import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'the-witcher-3-next-gen-performance',
  title: "The Witcher 3 Next Gen: PC Performance Guide (2026)",
  description: "Want to run The Witcher 3 with Ray Tracing and stable FPS? Learn the best settings for the Next Gen version and how to avoid stuttering in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '25 min'
};

const title = "The Witcher 3 Next Gen: PC Performance Guide (2026)";
const description = "Want to run The Witcher 3 with Ray Tracing and stable FPS? Learn the best settings for the Next Gen version and how to avoid stuttering in 2026.";
const keywords = [
    'the witcher 3 next gen performance guide 2026',
    'how to increase fps the witcher 3 next gen tutorial',
    'the witcher 3 dx12 stuttering fix guide 2026',
    'best graphics settings the witcher 3 pc tutorial',
    'the witcher 3 next gen low end pc optimization guide 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('the-witcher-3-next-gen-performance', title, description, keywords, locale);
}

export default function Witcher3PerformanceGuide() {
    const summaryTable = [
        { label: "Recommended API", value: "DirectX 12 (For Ray Tracing/DLSS) / DX11 (Low-end PC)" },
        { label: "Golden Setting", value: "Grass Density (Medium) / Shadows (High)" },
        { label: "Technology", value: "DLSS 3 / FSR 3 / XeSS" },
        { label: "Difficulty", value: "Medium" }
    ];

    const contentSections = [
        {
            title: "The Next Gen Challenge",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **The Witcher 3 Next Gen** transformed a 2015 game into an extremely demanding title by 2026 standards. With the addition of **Global Illumination** via Ray Tracing and new 4K assets, the game now demands much more from the processor and graphics card. If you feel the game is "heavy" even on powerful hardware, the secret lies in the correct balance between DirectX 12 and Upscaling technologies.
        </p>
      `
        },
        {
            title: "1. Ray Tracing: Is it worth it?",
            content: `
        <p class="mb-4 text-gray-300">In 2026, Ray Tracing in Witcher 3 is a performance eater:</p>
        <ul class="list-disc list-inside text-gray-300 space-y-3">
            <li><strong>RT Global Illumination:</strong> Makes colors much more realistic, but cuts your FPS in half.</li>
            <li><strong>RT Reflections and Shadows:</strong> Disable this first. The visual gain is small compared to the performance cost.</li>
            <li><strong>Tip:</strong> If you don't have an RTX 4070 or higher, keep RT off and focus on 'Ultra+' settings for the rest of the graphics.</li>
        </ul >
      `
        },
        {
            title: "2. Optimizing high-impact settings",
            content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Maximum visual gain:</h4>
            <p class="text-sm text-gray-300">
                - <strong>Grass Density (Foliage Density):</strong> At Ultra+, this kills your PC in Beauclair. Set it to Medium or High. <br/>
                - <strong>Vegetation Visibility:</strong> High (Ensures trees don't pop-in out of nowhere). <br/>
                - <strong>Post-Processing:</strong> Disable 'Motion Blur' and 'Chromatic Aberration' for a sharper image. <br/>
                - <strong>Nvidia HairWorks:</strong> Disable entirely, unless you want to see Geralt's hair follicles in 4K at a cost of 20 FPS.
            </p>
        </div>
      `
        },
        {
            title: "3. Fixing Stuttering in DX12",
            content: `
        <p class="mb-4 text-gray-300">
            Many players complain of constant micro-stutters in the DirectX 12 version. 
            <br/><br/><strong>2026 Tip:</strong> Make sure the **Shader Cache** in your graphics card driver is set to 'Unlimited'. Also, use <strong>DLSS Frame Generation</strong> (if available) or <strong>FSR 3.0</strong>. These frame generation technologies are essential for maintaining stable frametime on the crowded streets of Novigrad.
        </p>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/red-dead-redemption-2-melhores-configuracoes-rdr2",
            title: "Optimize RDR2",
            description: "Performance tips for another AAA epic."
        },
        {
            href: "/guides/hdr-windows-vale-a-pena-jogos",
            title: "HDR Witcher 3",
            description: "Improve the sunset colors in Velen."
        },
        {
            href: "/guides/como-usar-ddu-driver-uninstaller",
            title: "Video Drivers",
            description: "Essential cleanup for DX12 to run smoothly."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="25 min"
            difficultyLevel="Medium"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

