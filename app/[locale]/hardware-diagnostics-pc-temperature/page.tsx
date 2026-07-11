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
            canonical: `https://www.voltrisoptimizer.com/${locale}/hardware-diagnostics-pc-temperature`,
            languages: {
                'en': `/en/hardware-diagnostics-pc-temperature`,
                'es': `/es/hardware-diagnostics-pc-temperature`,
                'pt-br': `/pt-br/hardware-diagnostics-pc-temperature`,
                'de': `/de/hardware-diagnostics-pc-temperature`,
                'fr': `/fr/hardware-diagnostics-pc-temperature`,
                'it': `/it/hardware-diagnostics-pc-temperature`,
                'ja': `/ja/hardware-diagnostics-pc-temperature`,
                'ko': `/ko/hardware-diagnostics-pc-temperature`,
                'ar': `/ar/hardware-diagnostics-pc-temperature`
            }
        }
    };
}

export default function DiagnosticoHardwareTemperatura() {
    const title = 'Voltris Optimizer Guide';
    const description = 'In-depth guide by Voltris Optimizer';
    const keywords = ['voltris optimizer', 'windows optimization'];

    const summaryTable = [
        { label: "What to Monitor", value: "CPU, GPU and SSD" },
        { label: "Limit Temperature", value: "85°C (Recommended)" },
        { label: "SSD Health", value: "S.M.A.R.T Metrics" },
        { label: "Solution", value: "Voltris Live Dashboard" }
    ];

    const contentSections = [
        {
            title: "How to know if your PC is overloaded?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Overheating is the number 1 cause of performance loss in games (Power Throttling). If your CPU reaches 95°C, Windows reduces the clock to prevent chip melting. This causes irremediable stutters in FPS.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            Monitoring your components' health (SSD <code>S.M.A.R.T</code>, PSU voltage, usage cycles) is essential to ensure long-term investment.
        </p>
      `
        },
        {
            title: "Classic Tools (HWMonitor, CrystalDiskInfo)",
            content: `
        <p class="mb-4 text-gray-300">
            You can install several isolated tools to monitor your hardware. <code>CrystalDiskInfo</code> is the standard for testing your SSD or HDD health. <code>HWMonitor</code> is the simplest for seeing voltage and temperature peaks.
        </p>
      `
        },
        {
            title: "Voltris Dashboard: Integrated Diagnosis",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            At **Voltris Optimizer**, we unified diagnostic tools into a single modern Dashboard that doesn't cause visual or performance impact.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Real-time Monitoring:** See CPU/GPU usage and temperature without needing to switch windows.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Hardware Scan:** Checks your disk <code>S.M.A.R.T</code> health for bad sectors that cause slowness.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#31A8FF] mt-1.5 shrink-0"></div> **Error Logs:** Analyzes Event Viewer logs to find driver errors before they cause a Blue Screen (BSOD).</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "What is normal GPU temperature under full load?",
            answer: "For modern GPUs, anything between 65°C to 80°C is perfectly normal. If it consistently exceeds 85°C, it's time to clean the PC or reapply thermal paste."
        },
        {
            question: "Can Voltris fix defective parts?",
            answer: "No. No software can fix physically broken hardware. Voltris helps you identify the problem and optimizes the software to decrease stress on the defective part until you can replace it."
        }
    ];

    const relatedGuides = [
        { href: "/guides/monitorar-temperatura-pc", title: "Classic Guide", description: "The old manual monitoring guide." },
        { href: "/guides/verificar-saude-hd-ssd-crystaldiskinfo", title: "SSD Health", description: "Specific tips for storage." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="15 min"
            difficultyLevel="Strategic"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Learn to read temperature data accurately",
                "What is Power Throttling and how it destroys your FPS",
                "How to monitor SSD/NVMe health without heavy programs",
                "Risks of letting the PC operate above 90°C",
                "How Voltris unifies diagnostic tools in one screen"
            ]}
        />
    );
}
