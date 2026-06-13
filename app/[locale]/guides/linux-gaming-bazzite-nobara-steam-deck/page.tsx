import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'linux-gaming-bazzite-nobara-steam-deck-pc',
    title: "Linux Gaming (2026): Bazzite and Nobara (Transform your PC into a Console)",
    description: "Tired of Windows? Linux gaming has evolved. Learn how to install Bazzite (SteamOS Clone) or Nobara to bring a console-like experience to your PC.",
    category: 'linux',
    difficulty: 'Advanced',
    time: '50 min'
};

const title = "Goodbye Windows? The Bazzite and Nobara Gaming Guide";
const description = "Valve's Proton allows you to run 99% of Windows games on Linux with higher FPS and zero bloatware. Transform your old rig into a giant Steam Deck.";

const keywords = [
    'bazzite vs nobara best linux gaming distro 2026',
    'how to install bazzite dual boot with windows 11',
    'do games with anticheat work on linux guide',
    'wayland vs x11 gaming on nvidia linux',
    'bazzite deck edition handheld pc optimization',
    'heroic games launcher setup epic gog linux',
    'voltris optimizer linux alternative',
    'protondb compatibility check tutorial'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('linux-gaming-bazzite-nobara-steam-deck-pc', title, description, keywords, locale);
}

export default function LinuxGuide() {
    const summaryTable = [
        { label: "Distro (Handheld)", value: "Bazzite (Fedora Atomic)" },
        { label: "Distro (Desktop)", value: "Nobara (Fedora Mod)" },
        { label: "User Interface", value: "KDE Plasma / GNOME" },
        { label: "Compatibility", value: "Proton (Steam Play Engine)" },
        { label: "Drivers", value: "Mesa (AMD) / Proprietary (NVIDIA)" },
        { label: "App Store", value: "Steam / Heroic / Lutris" },
        { label: "Anti-cheat", value: "Some titles remain incompatible" }
    ];

    const contentSections = [
        {
            title: "Introduction: The Year of the Linux Desktop?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          It has finally arrived. Thanks to the success of the Steam Deck, Linux now runs titles like Cyberpunk 2077 and Elden Ring better than Windows on certain hardware configurations. Specialized distros like <strong>Bazzite</strong> come pre-configured: just install, log into Steam, and play. No terminal knowledge required.
        </p>
      `
        },
        {
            title: "Chapter 1: Choosing Your Distribution",
            content: `
        <div class="space-y-4">
            <div class="bg-[#0A0A0F] p-4 rounded-xl border border-white/5">
                <h4 class="text-[#31A8FF] font-bold mb-1">Optimized for Gaming</h4>
                <p class="text-gray-400 text-xs text-justify">
                    - <strong>Bazzite:</strong> Provides an experience IDENTICAL to the Steam Deck. Boots directly into Steam Big Picture (Game Mode). As an immutable OS, it won't break during system updates. Perfect for a living room PC connected to a TV.
                    - <strong>Nobara:</strong> Maintained by GloriousEggroll (creator of Proton-GE). Features custom-tuned kernels, OBS patches, and pre-integrated NVIDIA drivers. Ideal for typical Desktop use (work + gaming).
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Chapter 2: Installation Guide (Bazzite)",
            content: `
        <p class="mb-4 text-gray-300">
            1. Download the ISO from the Universal Blue website. Select your GPU vendor (NVIDIA/AMD) and desired desktop environment (KDE is the Steam Deck standard).
            2. Flash the ISO to a USB drive using <strong>Ventoy</strong> or <strong>balenaEtcher</strong> (Rufus can occasionally fail with Linux ISOs).
            3. Boot from the USB drive.
            4. The installer is fully graphical. Select your SSD and use the automatic partitioning.
            5. First boot: The system will automatically download the necessary drivers and codecs.
        </p>
      `
        },
        {
            title: "Chapter 3: The Proton Compatibility Layer",
            content: `
        <p class="mb-4 text-gray-300">
            Within Steam > Settings > Compatibility:
            <br/>Enable <strong>"Enable Steam Play for all other titles."</strong>
            <br/>What works? Nearly everything.
            <br/>What DOESN'T work?
            <br/>- Valorant (Requires Kernel Anti-cheat VGK).
            <br/>- Call of Duty Warzone (Ricochet Anti-cheat).
            <br/>- Fortnite (EAC/BattlEye for Linux disabled by Epic).
            <br/>- League of Legends (Requires Vanguard).
            <br/>If these 4 titles are your main games, stay on Windows or use a Dual Boot setup.
            <br/>CS2, Dota 2, and Apex Legends run NATIVELY or via Proton perfectly.
        </p>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Chapter 4: Epic Games & GOG (Heroic)",
            content: `
        <p class="mb-4 text-gray-300">
            While there is no official Epic Games Launcher for Linux:
            <br/>Use the <strong>Heroic Games Launcher</strong> (available via Flatpak).
            <br/>It allows you to log into Epic, GOG, and Amazon Games, downloading and running your library using Steam's Proton or Wine-GE.
            <br/>The interface is sleek, customizable, and lightweight.
        </p>
      `
        },
        {
            title: "Chapter 5: Drivers (NVIDIA vs. AMD)",
            content: `
        <p class="mb-4 text-gray-300">
            - <strong>AMD:</strong> Drivers are open-source and built directly into the Linux Kernel (MESA). This offers the smoothest \"plug and play\" experience.
            - <strong>NVIDIA:</strong> Historically challenging, but with driver version 555+ (Beta/Stable), Wayland and HDR support are excellent.
            <br/>On Bazzite/Nobara, download the \"NVIDIA\" specific ISO to have everything pre-installed. Do NOT attempt to install <code>.run</code> drivers manually from NVIDIA's site; you will likely break the system.
        </p>
      `
        },
        {
            title: "Chapter 6: Gamescope (HDR and Upscaling)",
            content: `
        <p class="mb-4 text-gray-300">
            <strong>Gamescope</strong> is Valve's sophisticated micro-compositor.
            <br/>It allows you to force FSR upscaling on any game, limit FPS with perfect frame pacing, and force HDR output even if the game doesn't natively support it (Auto-HDR).
            <br/>On Bazzite (Game Mode), these features are easily accessible in the \"...\" Quick Access Menu.
        </p>
      `
        },
        {
            title: "Chapter 7: Masterful Emulation (EmuDeck)",
            content: `
        <p class="mb-4 text-gray-300">
            Download the <strong>EmuDeck</strong> script.
            <br/>It automatically installs RetroArch, PCSX2, and other emulators, configures them for optimal settings, and populates your Steam Library with game covers.
            <br/>It is by far the most streamlined way to handle emulation on Linux.
        </p>
      `
        }
    ];

    const additionalContentSections = [
        {
            title: "Chapter 8: Modern File Systems (BTRFS)",
            content: `
            <p class="mb-4 text-gray-300">
                Linux typically utilizes BTRFS rather than NTFS.
                <br/>Bazzite uses BTRFS with built-in deduplication and transparent compression. Your game files often consume significantly less storage space on Linux than they do on Windows!
            </p>
            `
        },
        {
            title: "Chapter 9: Installing Apps via Flatpak",
            content: `
            <p class="mb-4 text-gray-300">
                Looking for Discord, Spotify, or Chrome?
                <br/>Open the \"Discover\" (KDE) or \"Software\" (GNOME) app stores.
                <br/>Applications are installed via Flatpak (Sandboxed). This is secure, clean, and prevents background clutter from affecting the base operating system.
            </p>
            `
        },
        {
            title: "Chapter 10: Is the Terminal Necessary?",
            content: `
            <p class="mb-4 text-gray-300">
                You will rarely need to touch the terminal (Konsole).
                <br/>Bazzite includes the <code>ujust</code> command utility, which provides a menu of shortcuts for common tasks like installing NVIDIA drivers or specialist software.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Will I lose FPS on Linux?",
            answer: "In most cases, no. Titles using the Vulkan API (Doom, RDR2) often perform better. For older DX11 titles, the DXVK translation layer works wonders with minimal overhead."
        },
        {
            question: "Can I access games on my Windows NTFS drive?",
            answer: "You can mount the drive, but Steam on Linux typically struggles to run games via Proton from an NTFS partition due to file permission issues. For the best experience, format a dedicated SSD volume to BTRFS."
        }
    ];

    const externalReferences = [
        { name: "ProtonDB (Check Compatibility)", url: "https://www.protondb.com/" },
        { name: "Bazzite Gaming OS Homepage", url: "https://bazzite.gg/" }
    ];

    const relatedGuides = [
        {
            href: "/guides/steam-deck-otimizacao-cryoutilities-protonge-guia",
            title: "Steam Deck Hub",
            description: "Advanced performance tweaks for handhelds."
        },
        {
            href: "/guides/formatacao-limpa-windows-11-rufus-gpt",
            title: "Windows Setup",
            description: "Optimizing the classic Windows experience."
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="50 min"
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


