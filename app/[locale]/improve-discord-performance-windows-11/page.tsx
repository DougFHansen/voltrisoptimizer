import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Improve Discord Performance on Windows 11 (2026)`,
        description: `Is your Discord slow or freezing during streams? Learn the best Discord settings on Windows 11 to reduce CPU usage and gain more FPS in your games.`,
        keywords: ['how to speed up discord windows 11', 'discord lagging on stream fix', 'increase fps with discord open', 'voltris discord optimizer', 'improve discord performance low end pc', 'configure discord performance mode'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/improve-discord-performance-windows-11`,
            languages: {
                'en': `/en/improve-discord-performance-windows-11`,
                'es': `/es/improve-discord-performance-windows-11`,
                'pt-br': `/pt-br/improve-discord-performance-windows-11`,
                'de': `/de/improve-discord-performance-windows-11`,
                'fr': `/fr/improve-discord-performance-windows-11`,
                'it': `/it/improve-discord-performance-windows-11`,
                'ja': `/ja/improve-discord-performance-windows-11`,
                'ko': `/ko/improve-discord-performance-windows-11`,
                'ar': `/ar/improve-discord-performance-windows-11`
            }
        }
    };
}

export default function DiscordPerformance() {
    const title = 'How to Improve Discord Performance in Windows 11 (2026)';
    const description = 'Is your Discord slow or freezing during streams? Learn the best settings for Discord on Windows 11, how to reduce CPU consumption, and gain more FPS in your games.';
    const keywords = ['how to speed up discord windows 11', 'discord lag in stream fix', 'increase fps with discord open', 'voltris discord optimizer', 'improve discord performance weak pc', 'configure discord performance mode'];

    const summaryTable = [
        { label: "Biggest Bottleneck", value: "Inadequate Hardware Acceleration" },
        { label: "Major Benefit", value: "10-15 FPS Gains with Discord Open" },
        { label: "Key Technique", value: "Hardware Acceleration & Overlay Tweak" },
        { label: "Expected Result", value: "Ultra Fluid Navigation and Streams" }
    ];

    const contentSections = [
        {
            title: "Why is Discord slowing down your Windows 11?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          **Discord** is built on a platform called Electron, which makes it basically a camouflaged browser. This consumes large batches of RAM and GPU processing constantly, competing with your favorite game.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            If you feel stuttering when streaming your screen or if your voice is robotic, the problem may be in how Windows manages the social app's priority. Calibrating **Graphic Acceleration** usage is the first step.
        </p>
        
        <div class="bg-indigo-500/10 border border-indigo-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-indigo-400 font-black mb-2 flex items-center gap-2">HGS On vs Off: The Invisible Conflict</h4>
            <p class="text-gray-300 text-sm">
                Windows 11 GPU Scheduling can get confused when Discord uses hardware acceleration. If your screen stream is lagging for viewers, turning off <b>Hardware Acceleration</b> in Discord will force the CPU to handle the interface, leaving the GPU 100% free for the game.
            </p>
        </div>
      `
        },
        {
            title: "Removing the Overlay (The Biggest FPS Killer)",
            content: `
        <p class="mb-4 text-gray-300">
            Discord's **Game Overlay** is a visual layer injected on top of your game. In competitive games like Valorant or CS:GO, this can introduce **Input Lag** to the mouse and reduce frame rate performance.
            <br/><br/>
            We always suggest disabling the systemic overlay in <b>User Settings > Game Overlay</b> to ensure engine purity and better performance in Windows.
        </p>
      `
        },
        {
            title: "Professional Optimization with Voltris Optimizer: Discord DNA",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** handles your Discord resource management through the <code>Community App Guard</code> tool.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Real-Time RAM Squeezer:** Clears the cache trash that Discord link and video previews leave in RAM.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **App High Priority:** Ensures your microphone's audio bus has priority over Windows Update.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Deep Cleanup:** Removes Gigabytes of temporary files and old logs from <code>AppData/Roaming/Discord</code> folders.</li>
        </ul
      `
        }
    ];

    const faqItems = [
        {
            question: "By clearing Discord's cache, do I delete my messages?",
            answer: "No. Your conversations are in the Discord cloud. Clearing the cache only removes images and videos you've already seen that are weighing down the software's local loading."
        },
        {
            question: "Does Voltris fix lag when streaming to my friends?",
            answer: "Certainly. By optimizing the network and Windows GPU scheduling, your stream will have a more stable bitrate and zero frame loss."
        }
    ];

    const relatedGuides = [
        { href: "/melhorar-performance-obs-studio-windows", title: "OBS Performance", description: "Also improve your recording performance." },
        { href: "/desativar-aplicativos-segundo-plano-windows-11", title: "Background Apps", description: "Also optimize other processes running alongside Discord." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="10 min"
            difficultyLevel="Beginner"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Professional GPU hardware acceleration setup",
                "Professional game overlay impact management",
                "Absolute cleaning of Discord database caches and logs",
                "Network optimization and absolute audio priority in Windows 11",
                "Blocking unnecessary app telemetry requests"
            ]}
        />
    );
}
