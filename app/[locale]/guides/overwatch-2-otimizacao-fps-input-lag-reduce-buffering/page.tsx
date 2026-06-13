import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'overwatch-2-otimizacao-fps-input-lag-reduce-buffering',
    title: "Overwatch 2 (2026): Competitive Optimization and 600 FPS Guide",
    description: "The definitive guide to Overwatch 2 performance. Master Render Scale, Reduce Buffering, NVIDIA Reflex, and minimize input lag to the absolute lowest levels.",
    category: 'optimization',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "Overwatch 2 Pro Guide: FPS and Visibility";
const description = "Overwatch is a chaotic game. To rank up and reach Grandmaster, you need visual clarity and instant reactions. Learn the graphical secrets used by OWL professionals.";

const keywords = [
    'overwatch 2 reduce buffering on or off',
    'best graphics settings ow2 competitive',
    'render scale 75 vs 100 visibility',
    'cap fps help input lag overwatch',
    'nvidia reflex on + boost ow2',
    'dolby atmos for headphones worth it ow2',
    'voltris optimizer fps boost',
    'sim delay ow2 netgraph fix'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('overwatch-2-otimizacao-fps-input-lag-reduce-buffering', title, description, keywords, locale);
}

export default function OW2Guide() {
    const summaryTable = [
        { label: "Render Scale", value: "75% (1080p) / Dynamic Off" },
        { label: "Texture Quality", value: "Medium (Best Clarity)" },
        { label: "Buffering", value: "Reduce Buffering ON" },
        { label: "NVIDIA Reflex", value: "On + Boost" },
        { label: "FPS Cap", value: "Display Based / Custom" },
        { label: "Audio Engine", value: "Dolby Atmos or Night Mode" },
        { label: "Field of View", value: "103 (Maximum)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Myth of Graphical Detail",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In high-level Overwatch, beautiful graphics are a distraction. Explosion effects, fog, and complex shadows pollute the screen.
          <br/>Your goal is to achieve a \"clean\" visual state—where enemy red outlines are clearly visible—with the lowest possible mouse delay.
        </p>
      `
        },
        {
            title: "Chapter 1: Essential Video Settings",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Basic Video Options</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Field of View (FOV):</strong> 103. Always max this out for awareness.
                    - <strong>V-Sync:</strong> OFF. Enabling this is a competitive crime due to latency.
                    - <strong>Triple Buffering:</strong> OFF.
                    - <strong>Reduce Buffering:</strong> ON. (Pro Tip: If you Alt-Tab frequently, this setting can become unstable. Toggle it OFF and then ON again to reset the buffer).
                    - <strong>NVIDIA Reflex:</strong> Enabled + Boost. This reduces GPU-bound latency by up to 30%.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Advanced Graphics for Clarity",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Texture Quality:</strong> Medium (High wastes VRAM for no competitive gain, while Low looks distractingly blurry).
            - <strong>Texture Filtering:</strong> High/Ultra 16x (Has near-zero performance cost and keeps ground textures sharp).
            - <strong>Local Fog Detail:</strong> LOW. Effectively removes the thick fog that obscures distant targets.
            - <strong>Dynamic Reflections:</strong> OFF. This single setting can cost up to 30% of your total FPS.
            - <strong>Shadow Detail:</strong> OFF or Medium. OFF yields maximum frames, but Medium helps you spot flying enemies like Pharah via their shadows.
            - <strong>Effects Detail:</strong> LOW. Reduces the visual brightness of ultimates so you aren't blinded during team fights.
            - <strong>Model Detail:</strong> LOW. Removes non-essential bushes and shrubbery from the map that can hide enemies.
        </p>
      `
        },
        {
            title: "Chapter 3: Render Scale and Upscaling",
            content: `
        <p class="mb-4 text-gray-300">
            Never set this to \"Automatic.\" Choose <strong>Custom</strong>.
            <br/>- <strong>100%:</strong> Native image quality. Ideal if your GPU consistently pushes 200+ FPS.
            <br/>- <strong>75%:</strong> Frequently used by pros. It creates a \"visual placebo\" where enemy red outlines appear slightly thicker and provides a massive FPS boost.
            <br/>- <strong>FSR 1.0/2.2:</strong> We recommend avoiding these. They can introduce input lag and shimmering artifacts. Overwatch must remain sharp.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Frame Capping and SIM Delay",
            content: `
        <p class="mb-4 text-gray-300">
            Press Ctrl+Shift+N in-game to view the \"SIM\" (Simulation Delay) value.
            <br/>If your FPS fluctuates wildly (e.g., 300 to 150), your SIM value shifts, making your aim inconsistent and affecting muscle memory.
            <br/>Cap your FPS at a value your PC can maintain consistently (e.g., 200 or 240). A flat, stable FPS line is better for aim than unstable peaks.
        </p>
      `
        },
        {
            title: "Chapter 5: Audio Engine (Dolby vs. Windows)",
            content: `
        <p class="mb-4 text-gray-300">
            Overwatch 2 features high-quality native binaural processing.
            <br/><strong>Option 1:</strong> Enable \"Dolby Atmos for Headphones\" in-game and DISABLE all Windows or third-party spatial sound software.
            <br/><strong>Option 2:</strong> Disable internal Atmos and use your preferred external processing.
            <br/>We recommend Option 1 for the best vertical sound placement (e.g., hearing a Genji double-jumping above you).
        </p>
      `
        },
        {
            title: "Chapter 6: Competitive Gameplay Settings",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Outline Opacity:</strong> 100%. Maximize visibility of enemy silhouettes.
            - <strong>Enemy UI Color:</strong> Default (Red) or Yellow (Deuteranopia setting). Yellow often stands out much more clearly on darker maps.
            - <strong>Waypoints Opacity:</strong> Reduce to 50% so objective icons don't obscure enemy players.
        </p>
      `
        },
        {
            title: "Chapter 7: Mouse Precision",
            content: `
        <p class="mb-4 text-gray-300">
            Overwatch 2 utilizes native Raw Input.
            <br/>Avoid extreme DPI settings (like 16000). Use standard 800 or 1600 DPI and adjust in-game sensitivity.
            <br/>Standard Pro eDPI Range: 3200 to 4800 (e.g., 800 DPI x 5 Sens).
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: High Precision Mouse Input",
            content: `
            <p class="mb-4 text-gray-300">
                A hidden option in the Gameplay tab.
                <br/>Enable \"High Precision Mouse Input.\" 
                <br/>This allows the game to read mouse movements between rendered frames (sub-frame sampling), which is essential for consistent hitscan performance (Widowmaker, Cassidy).
            </p>
            `
        },
        {
            title: "Chapter 9: Fixing 'Render Device Lost' Crashes",
            content: `
            <p class="mb-4 text-gray-300">
                If your game crashes with the \"Render Device Lost\" error:
                <br/>This is typically caused by unstable GPU or RAM overclocks. Overwatch is highly sensitive to memory instability. Disable XMP/DOCP if crashes persist.
            </p>
            `
        },
        {
            title: "Chapter 10: Battle.net Launcher Optimization",
            content: `
            <p class="mb-4 text-gray-300">
                Configure the Battle.net launcher to \"Exit completely when launching a game.\"
                <br/>The launcher is an Electron-based app and can consume valuable CPU cycles in the background.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Why does my game look blurry even at 1080p?",
            answer: "Check if your Render Scale is set to 'Automatic,' which can drop dynamic resolution to 50% during heavy fights. Set it to 'Custom' and '100%' for native clarity."
        },
        {
            question: "What is the best crosshair for Overwatch?",
            answer: "Most pros use a small Green or Cyan 'Dot' (size 4 to 6). It occupies minimal screen space and provides high contrast against almost all environmental backgrounds."
        }
    ];

    const externalReferences = [
        { name: "Overwatch 2 Pro Settings List", url: "https://prosettings.net/lists/overwatch-2/" },
        { name: "Blizzard Support - Render Device Lost Fix", url: "https://us.battle.net/support/en/article/32553" }
    ];

    const relatedGuides = [
        {
            href: "/guides/monitor-hz-configuracao-correta",
            title: "Monitor Refresh Rates",
            description: "Optimize for 240Hz/360Hz displays."
        },
        {
            href: "/guides/mouse-otimizacao-windows-precisao",
            title: "Mouse Latency",
            description: "Further reduce mouse input delay."
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


