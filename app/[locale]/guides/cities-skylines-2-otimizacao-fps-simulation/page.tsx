import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'cities-skylines-2-otimizacao-fps-simulation',
    title: "Cities: Skylines II (2026): Settings for Stable 30 FPS",
    description: "CS2 is notoriously heavy. Learn how to disable volumetrics, reduce citizen teeth simulation, and use DLSS to make giant cities playable.",
    category: 'games',
    difficulty: 'Advanced',
    time: '30 min'
};

const title = "Cities: Skylines II (2026): Optimizing the Chaos";
const description = "At launch, the game rendered the teeth of every citizen. In 2026, it improved, but it still requires surgical tweaks to avoid stuttering at 10 FPS.";

const keywords = [
    'cities skylines 2 fps boost guide 2026',
    'cs2 simulation speed slow fix',
    'volumetric quality settings cities skylines 2',
    'level of detail distance cs2',
    'dlss cities skylines 2 mod',
    'traffic simulation heavy cpu usage',
    'depth of field disable cs2',
    'voltris optimizer colossal order',
    'large cities crashing cs2 fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('cities-skylines-2-otimizacao-fps-simulation', title, description, keywords, locale);
}

export default function CS2Guide() {
    const summaryTable = [
        { label: "Volumetrics", value: "Disabled (High Gain)" },
        { label: "DOF", value: "Disabled (Tilt Shift)" },
        { label: "Shadows", value: "Medium" },
        { label: "LOD", value: "Low / Medium" },
        { label: "VSync", value: "Off" },
        { label: "Resolution", value: "DLSS Quality" },
        { label: "Target FPS", value: "30 (Acceptable)" }
    ];

    const contentSections = [
        {
            title: "Introduction: 30 FPS is the New 60",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In City Builders, you don't need 144 FPS. The focus is simulation speed. If the game runs at 30 FPS but time passes quickly (3x Speed), that's great. If it runs at 60 FPS but time is in slow motion, your CPU is bottlenecked.
        </p>
      `
        },
        {
            title: "Chapter 1: Volumetrics Quality (The Villain)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Turn Off Immediately</h4>
                <p class="text-gray-400 text-xs text-justify">
                    Volumetric quality (clouds, smoke) is absurdly heavy in this game.
                    <br/>Go to Graphics > Advanced:
                    <br/>- <strong>Volumetrics Quality Settings:</strong> Disabled or Very Low.
                    <br/>Visually it changes little (the sky looks less "fluffy"), but the FPS gain is almost 40%.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Depth of Field (Tilt Shift)",
            content: `
        <p class="mb-4 text-gray-300">
            The "miniature" effect (blurred background) consumes GPU.
            <br/>- <strong>Depth of Field Mode:</strong> Disabled.
            <br/>Besides gaining performance, you see your city with total clarity, which is better for planning roads.
        </p>
      `
        },
        {
            title: "Chapter 3: Level of Detail (LOD)",
            content: `
        <p class="mb-4 text-gray-300">
            The game renders windows and furniture inside buildings.
            <br/>- <strong>Level of Detail Distance:</strong> Low.
            <br/>This makes high-quality models (with teeth and furniture) only appear when you zoom in very close. From afar, it uses simplified models.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: DLSS and TAA",
            content: `
        <p class="mb-4 text-gray-300">
            Use <strong>DLSS Quality</strong> if you have Nvidia.
            <br/>If not, use TAA.
            <br/>Dynamic resolution scaling should be avoided as it causes blurring when you move the camera. Prefer fixed DLSS.
        </p>
      `
        },
        {
            title: "Chapter 5: Traffic Simulation",
            content: `
        <p class="mb-4 text-gray-300">
            Traffic is calculated by the CPU.
            <br/>In cities with 100k inhabitants, traffic can slow down the simulation ("Simulation Speed" drops).
            <br/>There is no graphics setting for this. The solution is to improve your road design (Road Hierarchy) to have fewer stopped cars calculating alternate routes.
        </p>
      `
        },
        {
            title: "Chapter 6: Shadows and Global Illumination",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Global Illumination:</strong> Low.
            - <strong>Reflections:</strong> Low.
            <br/>The water is beautiful, but heavy. Reflections of buildings on the water consume VRAM.
        </p>
      `
        },
        {
            title: "Chapter 7: Performance Mods",
            content: `
        <p class="mb-4 text-gray-300">
            Use the official mod manager (Paradox Mods).
            <br/>Look for mods that remove unnecessary "props" (trash cans, park benches) en masse. Fewer objects = Fewer polygons.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: 100k Inhabitants (Olympus)",
            content: `
            <p class="mb-4 text-gray-300">
                After passing 100,000 inhabitants, the game will get slow. It is inevitable even on Threadripper CPUs. Accept 1x speed and enjoy the scenery.
            </p>
            `
        },
        {
            title: "Chapter 9: Autosave Interval",
            content: `
            <p class="mb-4 text-gray-300">
                Autosave causes a 2-second stutter.
                <br/>Increase the interval to every 15 or 30 minutes instead of 5, so you don't interrupt your flow.
            </p>
            `
        },
        {
            title: "Chapter 10: V-Sync Off",
            content: `
            <p class="mb-4 text-gray-300">
                If you have 30-40 FPS, V-Sync causes mouse input lag. Leave it off or use G-Sync/FreeSync to smooth the camera.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "GPU at 100% in the menu?",
            answer: "The main menu renders a 3D city in real time. It is normal. Don't panic."
        },
        {
            question: "Crash to Desktop?",
            answer: "Lack of virtual memory. CS2 uses a lot of RAM. If it exceeds your 16GB/32GB, it closes. Increase your Windows Pagefile."
        },
        {
            question: "Which CPU to buy?",
            answer: "More cores are better. Ryzen 9 7950X or i9 14900K are kings here. 3D Cache (X3D) helps a lot with simulation."
        }
    ];

    const externalReferences = [
        { name: "Paradox Mods CS2", url: "https://mods.paradoxplaza.com/games/cities_skylines_2" },
        { name: "CO Word of the Week (Dev Diary)", url: "https://www.paradoxinteractive.com/games/cities-skylines-ii/news" }
    ];

    const relatedGuides = [
        {
            href: "/guides/bios-otimizacao-xmp-tpm",
            title: "BIOS",
            description: "XMP is crucial for simulation."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "SSD",
            description: "Pagefile (Virtual Memory)."
        },
        {
            href: "/guides/notebook-gamer-bateria-otimizacao",
            title: "Laptop",
            description: "It will run very hot."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="30 min"
            difficultyLevel="Advanced"
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
