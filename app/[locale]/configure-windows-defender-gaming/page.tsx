import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: ``,
        description: ``,
        keywords: [],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/configure-windows-defender-gaming`,
            languages: {
                'en': `/en/configure-windows-defender-gaming`,
                'es': `/es/configure-windows-defender-gaming`,
                'pt-br': `/pt-br/configure-windows-defender-gaming`,
                'de': `/de/configure-windows-defender-gaming`,
                'fr': `/fr/configure-windows-defender-gaming`,
                'it': `/it/configure-windows-defender-gaming`,
                'ja': `/ja/configure-windows-defender-gaming`,
                'ko': `/ko/configure-windows-defender-gaming`,
                'ar': `/ar/configure-windows-defender-gaming`
            }
        }
    };
}

export default function ConfigurarWindowsDefenderJogos() {
    const title = 'Voltris Optimizer Guide';
    const description = 'In-depth guide by Voltris Optimizer';
    const keywords = ['voltris optimizer', 'windows optimization'];

    const summaryTable = [
        { label: "Lightweight Antivirus", value: "Windows Defender" },
        { label: "FPS Impact", value: "Low (Optimized)" },
        { label: "Protection", value: "Continuous (Antimalware)" },
        { label: "Solution", value: "Voltris Shield Integration" }
    ];

    const contentSections = [
        {
            title: "Is Windows Defender enough for Gamers?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, software like Norton, McAfee, and Avast have become extremely heavy "bloatware". Windows Defender is already one of the best antiviruses in the world, but its default behavior is aggressive towards game files (<code>.exe</code>, <code>.dll</code>), which causes **micro-stuttering.**
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            If you simply disable your antivirus entirely, your PC remains vulnerable. The best approach is **Selective Optimization:** maintaining protection, but preventing the scanner from reading your games while you are playing.
        </p>
      `
        },
        {
            title: "How to manually create exclusions",
            content: `
        <p class="mb-4 text-gray-300">
            To prevent Defender from scanning files in real-time in the middle of a match:
            <br/>Go to <code>Settings > Virus & threat protection > Virus & threat protection settings > Manage settings > Add or remove exclusions</code>.
            <br/>Add your game's directory (Ex: SteamLibrary, Riot Games).
        </p>
      `
        },
        {
            title: "The Voltris Shield Revolution (Security Hardened)",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            In **Voltris Optimizer**, we developed the **Voltris Shield**. It is not a new antivirus, but an orchestration layer over Windows Defender that guarantees maximum performance and ironclad security.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Scan Throttling:** Lowers the CPU priority of the <code>MsMpEng.exe</code> process during detected games.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Auto-Trust Logic:** Automatically identifies major market releases and securely adds exclusions.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Malware Guard:** Intelligently protects against ransomware in critical documents and photos folders.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Can I disable Defender permanently?",
            answer: "We do not recommend it. Windows 10/11 relies on certain security integrations to function correctly. Voltris Optimizer allows you to temporarily disable real-time protection with one click for benchmarking sessions, but always with a focus on security."
        },
        {
            question: "Does Voltris Shield replace an antivirus?",
            answer: "It utilizes the Windows Defender engine, which eliminates the need to install any third-party antivirus. In fact, it removes the negative impact that external programs usually bring to a Gaming PC."
        }
    ];

    const relatedGuides = [
        { href: "/guides/antivirus-para-jogos-windows-defender-exclusao", title: "Classic Guide", description: "The old manual exclusions guide." },
        { href: "/seguranca-digital", title: "Digital Security", description: "Security tips for passwords and browsing." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Technical"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "The truth about Windows Defender 'CPU usage'",
                "How to create exclusions to prevent game freezing",
                "Risks of using free and heavy antiviruses",
                "What is Ransomware Protection (Controlled Folder Access)",
                "The Voltris advantage: Invisible Kernel Protection"
            ]}
        />
    );
}
