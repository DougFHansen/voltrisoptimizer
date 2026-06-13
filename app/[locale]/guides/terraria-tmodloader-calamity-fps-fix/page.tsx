import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'terraria-tmodloader-calamity-fps-fix',
    title: "Terraria & TModLoader (2026): Lag Fix for Modpacks (Calamity)",
    description: "Does Terraria go in slow motion when there are too many projectiles? Learn how to fix Frame Skip, allocate more RAM for 64-bit TModLoader, and optimize effects.",
    category: 'games',
    difficulty: 'Intermediate',
    time: '20 min'
};

const title = "Terraria 1.4.4 / TModLoader (2026): Mod Optimization";
const description = "The vanilla game is light, but playing Calamity + Thorium + Overhaul, the game engine cries for help. Resolve 'Frame Skip' and play fluently.";

const keywords = [
    'terraria slow motion fix frame skip',
    'tmodloader 64 bit ram usage increase',
    'calamity mod lag boss fight',
    'terraria stuttering high fps fix',
    'lighting mode color retro white terraria',
    'backgrounds off performance',
    'host multiplayer lag terraria',
    'voltris optimizer re-logic',
    'fix terraria screen freezing'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('terraria-tmodloader-calamity-fps-fix', title, description, keywords, locale);
}

export default function TerrariaGuide() {
    const summaryTable = [
        { label: "Frame Skip", value: "ON (Fix Slowmo)" },
        { label: "Lighting", value: "Retro / White" },
        { label: "Background", value: "OFF" },
        { label: "Quality", value: "Low / Auto" },
        { label: "TModLoader", value: "64-bit (Native)" },
        { label: "Bosses", value: "Reducer Mod" },
        { label: "Parallax", value: "0%" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Slow Motion Effect",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Terraria links game time to Frame Rate. If your PC can't reach 60 frames, the game slows down time to compensate (everything feels slugish).
        </p>
      `
        },
        {
            title: "Chapter 1: Frame Skip (The Solution)",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Settings > Video</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Frame Skip:</strong> ON or Subtle.
                    <br/>This forces the game to skip visual frames to maintain the real "game speed".
                    <br/>If you leave it OFF and the FPS drops, it will feel like you're swimming in honey.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Lighting Mode",
            content: `
        <p class="mb-4 text-gray-300">
            "Color" or "Trippy" lighting looks nice but calculates light pixel by pixel.
            <br/>In events like "Pumpkin Moon" with thousands of particles:
            <br/>Change to <strong>Retro</strong> or <strong>White</strong>.
            <br/>The game's visuals will be simpler (uniformly lit blocks), but the FPS gain is massive.
        </p>
      `
        },
        {
            title: "Chapter 3: 64-bit TModLoader",
            content: `
        <p class="mb-4 text-gray-300">
            The original Terraria was 32-bit (limited to 4GB RAM).
            <br/>TModLoader on Steam today is native 64-bit (version 1.4+).
            <br/>This allows using massive modpacks without "Out of Memory" errors. Just make sure you are running the "1.4.4 stable" version on Steam.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Config.json and Performance Mods",
            content: `
        <p class="mb-4 text-gray-300">
            Download the <strong>"Lag Remover"</strong> or <strong>"High FPS Support"</strong> mod in the mod browser.
            <br/>They reduce dust particles and projectile effects that you don't even see in the heat of battle.
            <br/>Edit <code>config.json</code> to disable "Heat Distortion" (desert heat effect) which bugs on some GPUs.
        </p>
      `
        },
        {
            title: "Chapter 5: Backgrounds and Parallax",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>Background:</strong> OFF. Removes the animated background scenery.
            - <strong>Parallax:</strong> 0%. Removes the background depth effect.
            <br/>This relieves the GPU to focus only on the front sprites.
        </p>
      `
        },
        {
            title: "Chapter 6: Calamity Mod Config",
            content: `
        <p class="mb-4 text-gray-300">
            If playing Calamity:
            <br/>Go to Settings > Mod Configuration > Calamity Mod.
            <br/>Enable <strong>"Reduce particle effects"</strong> and disable <strong>"Afterimages"</strong>.
            <br/>Bosses like "Supreme Calamitas" fill the screen with "bullet hell". Without these options, FPS drops to 10.
        </p>
      `
        },
        {
            title: "Chapter 7: Stuttering on 144Hz Monitors",
            content: `
        <p class="mb-4 text-gray-300">
            Terraria can bug out above 60Hz (accelerated animations).
            <br/>Recommendation: Limit FPS to 60 in the Nvidia Control Panel or enable V-Sync in-game for the most stable and glitch-free experience.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Multiplayer Hosting",
            content: `
            <p class="mb-4 text-gray-300">
                If you are the host, do not minimize the game (Alt-Tab).
                <br/>The game may reduce priority and cause lag for your friends. Use "Host & Play" with a password.
            </p>
            `
        },
        {
            title: "Chapter 9: Waves / Events",
            content: `
            <p class="mb-4 text-gray-300">
                In wave events (Old One's Army), the number of enemies is enormous.
                <br/>Use weapons that don't create many persistent projectiles (avoid weapons that fill the screen with particles if you're lagging).
            </p>
            `
        },
        {
            title: "Chapter 10: Maps (Minimap)",
            content: `
            <p class="mb-4 text-gray-300">
                Explored map data stays in RAM.
                <br/>In fully explored "Large" worlds, the save file becomes heavy. It's normal to take longer to save.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Does Terraria run in 4K?",
            answer: "Yes, but the UI becomes tiny. Increase the UI scale in the options to 150% or 200%. The game looks beautiful with maximum zoom out."
        },
        {
            question: "My mods disappeared!",
            answer: "TModLoader updates frequently. Sometimes it disables incompatible mods. Check the 'Manage Mods' menu and re-enable them, or wait for the mod author to update."
        },
        {
            question: "Is the screen waving?",
            answer: "Turn off 'Waves Quality' and 'Heat Distortion' in water shader effects."
        }
    ];

    const externalReferences = [
        { name: "TModLoader Steam", url: "https://store.steampowered.com/app/1281930/tModLoader/" },
        { name: "Calamity Mod Wiki", url: "https://calamitymod.wiki.gg/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/minecraft-aumentar-fps-fabric-sodium",
            title: "Minecraft",
            description: "Another optimizable sandbox."
        },
        {
            href: "/guides/cheat-engine-speedhack-jogos-offline",
            title: "Cheat Engine",
            description: "Skip the night."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="20 min"
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

