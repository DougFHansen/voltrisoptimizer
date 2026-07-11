import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
    id: 'limpar-memoria-ram-windows',
    title: "How to Clear RAM and Reduce Standby List (2026)",
    description: "Games stuttering after a few hours? It might be the Standby List getting full. Learn how to use ISLC to clear RAM cache automatically without closing any games.",
    category: 'software',
    difficulty: 'Intermediate',
    time: '15 min'
};

const title = "RAM Management Guide: How to Fix Low Memory and Stuttering (ISLC)";
const description = "Having 16GB of RAM isn't enough if Windows consumes 8GB of it as cache. Discover how to manage virtual memory and the Standby List bug in Windows 10/11.";

const keywords = [
    'clear standby list windows 11 islc',
    'Intelligent Standby List Cleaner tutorial',
    'games stuttering low ram fix',
    'reduce windows 11 ram usage',
    'virtual memory paging file pagefile guide',
    'how to use sysinternals rammap',
    'chrome consuming too much ram fix',
    'game memory leak fix 2026'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('limpar-memoria-ram-windows', title, description, keywords, locale);
}

export default function RAMGuide() {
    const summaryTable = [
        { label: "Problem", value: "Standby List Cache" },
        { label: "Symptom", value: "Game stutters after 1 hour" },
        { label: "Tool", value: "ISLC (Wagnardsoft)" },
        { label: "Paging File", value: "Keep 'System Managed'" },
        { label: "Chrome", value: "Use 'Memory Saver'" },
        { label: "Cleaning", value: "Automatic via Software" }
    ];

    const contentSections = [
        {
            title: "The Standby List Bug",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Windows has an aggressive memory management system: it keeps files from closed programs in RAM ("Standby") in case you want to open them again. The theory is good. In practice, when a game requests free RAM, Windows sometimes takes too long to release this standby memory, causing a momentary stutter.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🧠</span> Voltris Smart RAM
            </h4>
            <p class="text-gray-300 mb-4">
                "RAM Cleaner" programs from 2010 are mostly fake. <strong>Voltris Optimizer</strong> uses the same technology as ISLC, silently monitoring the Standby List. If it grows too large during a game, Voltris flushes it instantly without touching your active game data, preventing stutters.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Manage RAM
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
        },
        {
            title: "Solution: ISLC (Intelligent Standby List Cleaner)",
            content: `
        <p class="mb-4 text-gray-300">
            A free tool created by the same developer of DDU.
        </p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3 ml-4 bg-[#0A0A0F] p-4 rounded-xl border border-white/5 font-mono text-sm">
            <li>Download <strong>ISLC</strong>.</li>
            <li>Check "Start ISLC Minimized" and "Launch ISLC on user logon".</li>
            <li>Suggested configuration:
                <ul class="ml-6 mt-2 text-[#31A8FF] list-disc">
                    <li>The list size is at least: <strong>1024 MB</strong>.</li>
                    <li>Free memory is lower than: <strong>2048 MB</strong> (if you have 8GB) or <strong>4096 MB</strong> (if you have 16GB).</li>
                </ul>
            </li>
            <li>Click <strong>Start</strong>.</li>
            <li>Now, whenever free memory drops below the limit and the cache is full, it cleans itself. This eliminates stuttering in open-world games like Warzone and Fortnite.</li>
        </ol>
      `
        },
        {
            title: "Browsers: The RAM Thief",
            content: `
        <p class="mb-4 text-gray-300">
            Do you play with Chrome/Edge open while listening to music?
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Go to Browser Settings > Performance.</li>
            <li>Enable <strong>"Memory Saver"</strong>.</li>
            <li>This freezes inactive tabs, freeing up to 2GB of RAM for your game.</li>
        </ul>
      `
        }
    ];

    const advancedContentSections = [
        {
            title: "Paging File (Pagefile): Is Disabling It Good?",
            content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">DON'T DISABLE IT!</h4>
                <p class="text-gray-300 mb-4">
                    An old myth suggests disabling virtual memory if you have plenty of RAM. WRONG. Some games and Windows itself REQUIRE the pagefile to allocate memory addresses, even if they don't actually use it. If disabled, games like Cyberpunk 2077 might crash on startup.
                </p>
                <p class="text-gray-300 text-sm">
                    <strong>Recommendation:</strong> Leave it as "System Managed" on your fastest SSD. Don't put it on a mechanical HD, as it causes slowdowns.
                </p>
            </div>
            `
        }
    ];

    const additionalContentSections = [
        {
            title: "Diagnosis with RAMMap",
            content: `
            <p class="mb-4 text-gray-300">
                Want to see exactly what's in the Standby List? Download <strong>RAMMap</strong> from Microsoft Sysinternals. It graphically shows each cached file. It's great for discovering which program is leaking memory.
            </p>
            `
        }
    ];

    const faqItems = [
        {
            question: "Do I need 32GB of RAM for gaming?",
            answer: "In 2026, 16GB is the recommended minimum. 32GB is ideal for peace of mind while gaming with Discord and Chrome open. With 8GB, using ISLC and de-bloating Windows is MANDATORY."
        },
        {
            question: "Can I use a USB Drive as RAM (ReadyBoost)?",
            answer: "No. ReadyBoost was useful in the Windows Vista era with slow HDDs. Today, any USB drive is much slower than RAM, and using it on an SSD actually worsens performance."
        },
        {
            question: "Does clearing RAM close my games?",
            answer: "Clearing the Standby List does NOT touch active data. Your open programs continue running perfectly. It only deletes data from programs you've ALREADY CLOSED."
        }
    ];

    const externalReferences = [
        { name: "ISLC Download (Wagnardsoft)", url: "https://www.wagnardsoft.com/forums/viewtopic.php?t=1256" },
        { name: "RAMMap (Microsoft)", url: "https://learn.microsoft.com/en-us/sysinternals/downloads/rammap" }
    ];

    const relatedGuides = [
        {
            href: "/guides/debloating-windows-11",
            title: "Reduce Consumption",
            description: "Fewer processes = More free RAM."
        },
        {
            href: "/guides/otimizacao-processos-segundo-plano",
            title: "Useless Processes",
            description: "Identify what's eating your memory."
        },
        {
            href: "/guides/otimizacao-ssd-windows-11",
            title: "Pagefile on SSD",
            description: "Ideal virtual memory setup."
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


