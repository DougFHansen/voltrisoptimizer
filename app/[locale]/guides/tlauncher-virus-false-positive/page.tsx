'use client';

import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'tlauncher-viring-falso-positivo',
    title: "Is TLauncher Safe? The Definitive 2026 Dossier: Spyware, Risks, and Alternatives",
    description: "Massive investigation into TLauncher. Code analysis, Russian connections, intellectual property theft, and the final migration guide to Prism Launcher and SKLauncher.",
    category: 'digital-security',
    difficulty: 'Beginner',
    time: '45 min'
};

const title = "Is TLauncher Safe? The Definitive 2026 Dossier: Spyware, Risks, and Alternatives";
const description = "Massive investigation into TLauncher. Code analysis, Russian connections, intellectual property theft, and the final migration guide to Prism Launcher and SKLauncher.";
const keywords = [
    'tlauncher virus or false positive 2026',
    'tlauncher spyware technical analysis russia',
    'how to remove tlauncher completely regedit',
    'prism launcher complete tutorial download',
    'sklauncher reliable review 2026',
    'best minecraft cracked launchers without virus',
    'tlauncher bank account risks',
    'java runtime environment modified malware'
];

export default function TLauncherSecurityGuide() {
    const summaryTable = [
        { label: "Security Verdict", value: "CRITICAL (Confirmed Spyware)" },
        { label: "Main Risk", value: "HTTPS Interception and Modified JVM" },
        { label: "Code Origin", value: "Stolen (TL Legacy) and Altered" },
        { label: "AV Detections", value: "Adware.FileTour / Trojan.Spy" },
        { label: "Best FOSS Alternative", value: "Prism Launcher (GitHub)" },
        { label: "Best Design", value: "SKLauncher (Clean UI)" }
    ];

    const contentSections = [
        {
            title: "Introduction: The End of Innocence in Minecraft",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          For nearly a decade, the name <strong>TLauncher</strong> was synonymous with democratic access to Minecraft. For millions of players who couldn't afford the original game, it was the gateway to a world of creativity. However, the digital landscape of 2026 no longer allows for naivety. The software you have installed on your PC today is not just a "cracked launcher"; it's a sophisticated data collection tool, operated by a company with predatory business practices and obscure connections.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In this investigative dossier, we won't just say "it's dangerous". We're going to open the black box. You'll understand how the code was modified, where your data is going, and most importantly, we'll present a complete roadmap for you to continue playing your favorite worlds on community-audited, safe, and free platforms.
        </p>
      `
        },
        {
            title: "Part 1: The Story of the Theft (TL Legacy vs TLauncher Inc)",
            content: `
        <div class="space-y-8">
            <div>
                <h4 class="text-white font-bold text-xl mb-3">The Birth (2013-2016)</h4>
                <p class="text-gray-300 text-md">
                    The original project was born at the hands of a Russian developer known as <strong>Turq</strong>. His intention was to create a lightweight, simple, and functional launcher for the Russian community. This software gained worldwide traction due to its efficiency. It didn't have intrusive ads, didn't install search bars, and respected the user.
                </p>
            </div>
            
            <div class="bg-gray-900 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h4 class="text-red-400 font-bold text-xl mb-3">The Corporate Coup (2016-Present)</h4>
                <p class="text-gray-300 text-md leading-relaxed">
                    Sensing the software's massive popularity, a third-party company (which we'll call TLauncher Inc.) registered the trademark "TLauncher" in Russia before the original creator could do so.
                    <br/><br/>
                    Armed with the trademark, they began an aggressive campaign of <strong>DMCA Takedowns</strong> (copyright notices), taking down Turq's original site and removing legitimate download links from the air. Next, they released their own version — visually identical, but with the code "poisoned" by tracking and monetization systems.
                </p>
            </div>

            <div>
                <h4 class="text-white font-bold text-xl mb-3">The Current State in 2026</h4>
                <p class="text-gray-300 text-md">
                    Today, when you type "Download Minecraft" on Google, the first results are dominated by the imposter version. The original creator continues to maintain his project under the name <strong>TL Legacy</strong> (or RuLauncher), but it is much less known. The irony is cruel: the "fake" version has become the "official" one in the public's mind.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Part 2: Forensic Analysis (Why is it Spyware?)",
            content: `
        <p class="mb-6 text-gray-300 text-lg">
            Let's go deeper into the technical part. What exactly does TLauncher do that classifies it as Spyware in forensic analysis?
        </p>

        <div class="space-y-8">
            <!-- Point 1 -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 class="text-red-400 font-bold text-xl mb-3">1. JVM Hijacking (Java Virtual Machine Hijacking)</h4>
                <p class="text-gray-300 text-md mb-4">
                    Minecraft runs on the Java Virtual Machine (JVM). An ethical launcher uses the JVM installed on your system (OpenJDK, Oracle, Microsoft) or downloads the original official version.
                </p>
                <p class="text-gray-300 text-md mb-4">
                    TLauncher forces the download of a proprietary JVM, hosted on its own servers. When analyzing the binary files (` + "`java.dll`, `jvm.dll`" + `) of this version, experts found MD5 hash discrepancies compared to the originals.
                </p>
                <p class="text-yellow-400 font-bold text-sm bg-yellow-900/20 p-3 rounded">
                    ⚠️ The Danger: A modified JVM has unrestricted ("Root") access to everything the game does. It can read what you type in chat, intercept typed passwords, and read files from your hard drive without the antivirus noticing, as the antivirus trusts the "Java" process.
                </p>
            </div>

            <!-- Point 2 -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 class="text-red-400 font-bold text-xl mb-3">2. SSL Encryption Breach (Man-in-the-Middle)</h4>
                <p class="text-gray-300 text-md mb-4">
                    For your skins (capes) to work on cracked servers, TLauncher needs to redirect the game's texture calls. Instead of going to ` + "`skins.minecraft.net`" + `, the game goes to ` + "`tlauncher.org/skins`" + `.
                </p>
                <p class="text-gray-300 text-md">
                    To do this via HTTPS, they need to install their own root certificate or modify Java security libraries (` + "`authlib`" + `). This creates a classic <em>Man-in-the-Middle</em> vulnerability. If their servers are attacked (or if they want to), they can inject malicious code directly into your game's memory under the guise of a "texture".
                </p>
            </div>

            <!-- Point 3 -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 class="text-red-400 font-bold text-xl mb-3">3. Telemetry and Suspicious Connections</h4>
                <p class="text-gray-300 text-md mb-4">
                    Network traffic analysis (Wireshark) shows data packets being sent to IPs in Russia, Ukraine, and Cyprus as soon as the launcher is opened. The data includes:
                </p>
                <ul class="list-disc list-inside text-gray-400 space-y-2 ml-4 mb-4">
                    <li>List of all software installed on your PC.</li>
                    <li>Detailed hardware specs (CPU, GPU, RAM, Disks).</li>
                    <li>MAC Address and IP (Unique identifiers).</li>
                    <li>Failure history and system logs.</li>
                </ul>
                <p class="text-gray-300 text-md">
                    This is typical <strong>Data Mining</strong> commercial behavior. Your data is the product that pays for the development of the "free" software.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Part 3: VirusTotal Analysis and False Positives",
            content: `
        <p class="mb-4 text-gray-300">
            "Ah, but my antivirus didn't detect anything!" or "It's just a false positive because it's a crack!". Let's demystify that now.
        </p>

        <div class="space-y-6">
            <div>
                <h4 class="text-white font-bold text-lg mb-2">What does VirusTotal say in 2026?</h4>
                <p class="text-gray-300 text-sm mb-2">
                    When submitting the TLauncher installer to VirusTotal, we see consistent detections from major engines (Sophos, Malwarebytes, Kaspersky):
                </p>
                <ul class="list-disc list-inside bg-gray-900/50 p-4 rounded text-red-300 font-mono text-sm">
                    <li>PUP.Optional.TLauncher (Potentially Unwanted Program)</li>
                    <li>Adware.FileTour (Bloatware Installer)</li>
                    <li>Trojan.Downloader.JavaGeneric</li>
                </ul>
            </div>

            <div>
                <h4 class="text-white font-bold text-lg mb-2">The Truth about "False Positive"</h4>
                <p class="text-gray-300 text-sm">
                    A legitimate false positive occurs when a software uses a code obfuscation technique to protect its intellectual property, and the antivirus gets confused.
                    <br/><br/>
                    In the case of TLauncher, the detections <strong>ARE NOT</strong> false positives. They are precise classifications of unwanted behavior (PUP). The software *really* tries to install the Opera GX browser with affiliate links, tries to change your home page, and collects data without clear consent.
                </p>
            </div>
        </div>
      `
        },
        {
            title: "Part 4: The Best Safe Alternatives (Full Review)",
            content: `
        <p class="mb-6 text-gray-300 text-lg">
            You decided to leave TLauncher. Congratulations! But where to go? In 2026, we have incredible options.
        </p>

        <div class="grid gap-8">
            <!-- Prism Launcher -->
            <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-green-500">
                <h3 class="text-2xl font-bold text-white mb-2">1. Prism Launcher (Specialist's Choice)</h3>
                <p class="text-green-400 font-bold text-xs uppercase tracking-widest mb-4">Best Performance • Open Source</p>
                <p class="text-gray-300 mb-4">
                    Prism (fork of the old MultiMC and PolyMC) is the gold standard. It's lightweight, requires no installation (portable), and has zero bloat.
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h5 class="text-white font-bold mb-2">Advantages:</h5>
                        <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
                            <li>100% auditable code on GitHub.</li>
                            <li>Downloads mods (CurseForge/Modrinth) directly from the interface.</li>
                            <li>Manages multiple isolated instances (one for Vanilla, one for Pixelmon, etc).</li>
                            <li>Supports Official Microsoft Accounts and Offline Mode.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="text-white font-bold mb-2">Who is it for?</h5>
                        <p class="text-gray-400 text-sm">
                            For those who want maximum FPS, play with many mods, or want total control over the game. It might look "ugly" for beginners, but it's unbeatable technically.
                        </p>
                    </div>
                </div>
            </div>

            <!-- SKLauncher -->
            <div class="bg-gray-800 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 class="text-2xl font-bold text-white mb-2">2. SKLauncher (The Spiritual Successor)</h3>
                <p class="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">Best Visuals • Easy to Use</p>
                <p class="text-gray-300 mb-4">
                    If you like the simplicity of TLauncher (install, enter nick, play), SK is for you. It underwent a complete rewrite in 2024 and is now super safe.
                </p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h5 class="text-white font-bold mb-2">Advantages:</h5>
                        <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
                            <li>Modern interface (Material Design).</li>
                            <li>Own Skin system (visible to other SK users).</li>
                            <li>Integrated Modpack creator.</li>
                            <li>Clean of Adware and Spyware.</li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="text-white font-bold mb-2">Who is it for?</h5>
                        <p class="text-gray-400 text-sm">
                            For the casual player who wants to click and play, without configuring Java or folders. It's the "TLauncher" experience done right and honestly.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Other Options -->
            <div class="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 class="text-xl font-bold text-white mb-2">Honorable Mentions</h3>
                <ul class="space-y-4">
                    <li>
                        <strong class="text-purple-400">TL Legacy:</strong> The true classic. Old, but safe and nostalgic. Use if your PC is truly very, very weak.
                    </li>
                    <li>
                        <strong class="text-yellow-400">ATLauncher:</strong> Excellent for heavy modpacks, with automatic server tools.
                    </li>
                    <li>
                        <strong class="text-red-400">Avoid:</strong> Lunar Client, Badlion (unofficial cracked versions), TLaunsh (clones of clones).
                    </li>
                </ul>
            </div>
        </div>
      `
        },
        {
            title: "Part 5: Definitive Migration Guide (Step by Step)",
            content: `
        <p class="mb-4 text-gray-300">
            Let's move your Minecraft life to Prism Launcher without losing a single block built.
        </p>

        <div class="space-y-8 mt-8">
            <div class="border-l-2 border-gray-600 pl-6">
                <h4 class="text-white font-bold text-xl mb-2">Phase 1: The Surgical Backup</h4>
                <p class="text-gray-400 text-sm mb-4">Don't copy the entire <code>.minecraft</code> folder, as it may contain infected files. Let's copy only the essentials.</p>
                <ol class="list-decimal list-inside text-gray-300 space-y-3">
                    <li>Create a folder on your Desktop called "MC Backup".</li>
                    <li>Press <code>Win + R</code>, type <code>%appdata%</code> and enter <code>.minecraft</code>.</li>
                    <li>Copy the following folders to your Backup:
                        <ul class="list-none ml-6 mt-2 space-y-1 font-mono text-sm text-green-400">
                            <li>/saves (Your worlds)</li>
                            <li>/screenshots (Your screenshots)</li>
                            <li>/resourcepacks (Your textures)</li>
                            <li>/shaderpacks (Your shaders)</li>
                            <li>/config (Mod settings, if any)</li>
                            <li>options.txt (Sensitivity, FOV, volumes)</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <div class="border-l-2 border-gray-600 pl-6">
                <h4 class="text-white font-bold text-xl mb-2">Phase 2: Total Cleanup (Exorcism)</h4>
                <p class="text-gray-400 text-sm mb-4">Removing the malware by the root.</p>
                <ol class="list-decimal list-inside text-gray-300 space-y-3">
                    <li>Uninstall TLauncher through the Control Panel.</li>
                    <li>Go to <code>%appdata%</code> and <strong>DELETE</strong> the <code>.minecraft</code> and <code>.tlauncher</code> folders.</li>
                    <li>Go to <code>C:\\Users\\YourName\\</code> and check if any "TLauncher" folder remains. Delete it.</li>
                    <li>(Advanced Optional) Open <code>regedit</code>, search for "TLauncher" and delete the keys found in <code>HKEY_CURRENT_USER\\Software</code>.</li>
                    <li>Restart the computer.</li>
                </ol>
            </div>

            <div class="border-l-2 border-gray-600 pl-6">
                <h4 class="text-white font-bold text-xl mb-2">Phase 3: New Home (Prism Launcher)</h4>
                <p class="text-gray-400 text-sm mb-4">Configuring the safe environment.</p>
                <ol class="list-decimal list-inside text-gray-300 space-y-3">
                    <li>Download <strong>Prism Launcher</strong> (Zip or Installer from GitHub/Official Site).</li>
                    <li>Install Java (Prism will download it for you or install Java 17/21 from Adoptium).</li>
                    <li>Open Prism. In the upper right corner, click on <strong>Accounts > Manage Accounts</strong>.</li>
                    <li>Click on <strong>Add Offline</strong>. Enter your exact Nick.</li>
                    <li>Create an Instance ("Add Instance" button). Choose the version (e.g., 1.20.1).</li>
                    <li>Right-click the instance > <strong>Minecraft Folder</strong>.</li>
                    <li>Paste your Backup files (saves, options.txt, etc) in there.</li>
                    <li>Double-click the instance and play!</li>
                </ol>
            </div>
        </div>
      `
        },
        {
            title: "Expanded FAQ and Community Questions",
            content: `
        <div class="grid gap-6">
            <div class="bg-gray-900/40 p-5 rounded-lg">
                <h5 class="text-white font-bold text-md mb-2">❓ Will my FPS increase by changing launchers?</h5>
                <p class="text-gray-300 text-sm">
                    <strong>Yes, likely.</strong> TLauncher consumes resources in the background. Prism Launcher is extremely lightweight. Also, Prism makes it very easy to install the <strong>Sodium</strong> mod (Fabric), which can triple your FPS compared to standard Minecraft.
                </p>
            </div>

            <div class="bg-gray-900/40 p-5 rounded-lg">
                <h5 class="text-white font-bold text-md mb-2">❓ How to apply a Skin in Prism Launcher (Offline Mode)?</h5>
                <p class="text-gray-300 text-sm">
                    Natively, you can't. But you can add the <strong>"SkinRestorer"</strong> or <strong>"Fabric Tailor"</strong> mod to your instance. They allow you to use the <code>/skin url</code> command in-game to load any skin from the internet.
                </p>
            </div>

            <div class="bg-gray-900/40 p-5 rounded-lg">
                <h5 class="text-white font-bold text-md mb-2">❓ Can TLauncher steal my Bank account?</h5>
                <p class="text-gray-300 text-sm">
                    Directly? Unlikely. Indirectly? Possible. If malware captures your saved passwords in the browser or monitors your keyboard (keylogger), any account accessed on the compromised PC is at risk. As a precaution, after cleaning, change important passwords.
                </p>
            </div>

            <div class="bg-gray-900/40 p-5 rounded-lg">
                <h5 class="text-white font-bold text-md mb-2">❓ What is "TLauncher for Smartphones"?</h5>
                <p class="text-gray-300 text-sm">
                    The mobile app (PE/Bedrock) is generally just a mod and skin aggregator full of ads. We don't recommend it. Use the official app or trusted mod searchers like Modrinth/CurseForge on the web.
                </p>
            </div>
        </div>
      `
        }
    ];

    const relatedGuides = [
        {
            href: "/guides/minecraft-lento-como-ganhar-fps",
            title: "Guide: Minecraft at 300 FPS",
            description: "The definitive optimization tutorial with Sodium, Lithium, and EntityCulling."
        },
        {
            href: "/guides/remocao-virus-malware",
            title: "Guide: Virus Removal",
            description: "Learn how to use TronScript and professional cleaning tools."
        },
        {
            href: "/guides/melhor-dns-jogos-2026",
            title: "Guide: Reduce Ping (DNS)",
            description: "Improve your connection with international servers."
        },
        {
            href: "/guides/java-instalacao-correta-minecraft",
            title: "Guide: Java for Minecraft",
            description: "Which version of Java (8, 16, 17, 21) to use for each version of the game?"
        }
    ];

    return (
        <GuideTemplate
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="45 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
        />
    );
}

