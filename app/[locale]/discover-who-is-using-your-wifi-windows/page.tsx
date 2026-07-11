import { Metadata } from 'next';
import React from 'react';
import { GuideTemplateClient } from '@/components/GuideTemplateClient';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: `How to Find Out Who Is Using Your Wi-Fi on Windows 11 (2026)`,
        description: `Is your internet slow? Learn how to identify devices connected to your Wi-Fi network using Windows. Complete guide on network security, network commands, and DNS protection.`,
        keywords: ['find out who is using your wifi', 'see devices connected to network windows', 'slow internet wifi intruder', 'voltris network security', 'wifi network security windows 11', 'how to kick someone off wifi'],
        alternates: {
            canonical: `https://www.voltrisoptimizer.com/${locale}/discover-who-is-using-your-wifi-windows`,
            languages: {
                'en': `/en/discover-who-is-using-your-wifi-windows`,
                'es': `/es/discover-who-is-using-your-wifi-windows`,
                'pt-br': `/pt-br/discover-who-is-using-your-wifi-windows`,
                'de': `/de/discover-who-is-using-your-wifi-windows`,
                'fr': `/fr/discover-who-is-using-your-wifi-windows`,
                'it': `/it/discover-who-is-using-your-wifi-windows`,
                'ja': `/ja/discover-who-is-using-your-wifi-windows`,
                'ko': `/ko/discover-who-is-using-your-wifi-windows`,
                'ar': `/ar/discover-who-is-using-your-wifi-windows`
            }
        }
    };
}

export default function WifiSecurity() {
    const title = 'How to Find Out Who Is Using Your Wi-Fi via Windows 11 (2026)';
    const description = 'Is your internet slow? Learn how to identify devices connected to your Wi-Fi network using Windows. Complete guide on network security, network commands, and DNS protection.';
    const keywords = ['find out who is using wifi', 'see devices connected on network windows', 'slow internet wifi intruder', 'voltris network security', 'windows 11 wifi network security', 'how to kick neighbor off wifi'];

    const summaryTable = [
        { label: "Intrusion Symptom", value: "High Ping and Speed Drops" },
        { label: "Major Benefit", value: "Data Protection and Stable Link" },
        { label: "Key Technique", value: "ARP Scan & Network Discovery" },
        { label: "Expected Result", value: "Shielded and Clean Network" }
    ];

    const contentSections = [
        {
            title: "Why strangers on your Wi-Fi make your PC Slow?",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Often you optimize the entire Windows 11, but your ping in games or download speed continues to fluctuate. The reason may be in your router: unknown devices (neighbors' cell phones, third-party smart TVs) consuming your bandwidth.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
            This 'parasite' traffic generates <b>Bufferbloat</b>, which is when your network becomes congested with packet requests, forcing your network card and Windows to work double time to manage routes. Identifying and banning these devices is vital for your global performance.
        </p>
        
        <div class="bg-blue-500/10 border border-blue-500/30 p-6 rounded-2xl my-6">
            <h4 class="text-[#31A8FF] font-black mb-2 flex items-center gap-2">Golden Command: ARP -A</h4>
            <p class="text-gray-300 text-sm">
                Open CMD (Command Prompt) and type <code>arp -a</code>. Windows will list all IP and MAC addresses that are interacting with your local network right now. If there are more devices than you have at home, you have an intruder.
            </p>
        </div>
      `
        },
        {
            title: "Native Windows 11 Network Security",
            content: `
        <p class="mb-4 text-gray-300">
            Windows 11 has a 'Network Discovery' feature that allows you to see connected devices. However, your network profile must be set to <b>Private</b> for the system to scan the environment without the Firewall blocking the view.
            <br/><br/>
            Path: <b>Network and Sharing Center > Advanced sharing settings > Network discovery</b>.
        </p>
      `
        },
        {
            title: "Network Protection with Voltris Optimizer",
            content: `
        <p class="mb-6 text-gray-300 leading-relaxed">
            **Voltris Optimizer** shields your connection through <code>Network Shield and DNS Protection</code>.
        </p>
        <ul class="space-y-4 text-slate-300">
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Net Tweak:** Optimizes your wireless card packets to avoid interference from neighboring networks.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **DNS Protection:** Prevents malicious sites from accessing your router configuration via DNS attacks.</li>
            <li class="flex items-start gap-3"><div class="w-2 h-2 rounded-full bg-[#10b981] mt-1.5 shrink-0"></div> **Background Sync Killer:** Disables Windows processes that 'share' network data with other users on the web automatically.</li>
        </ul>
      `
        }
    ];

    const faqItems = [
        {
            question: "Is changing the Wi-Fi password enough?",
            answer: "Usually yes, but if the intruder has access to your PC via local network (LAN), they can recapture the password. Use Voltris to shield Windows folder sharing and prevent this access."
        },
        {
            question: "Does Voltris kick the neighbor off my Wi-Fi?",
            answer: "Not directly from the router, but it cuts their access to your computer's folders and files, and optimizes your network card so you have bandwidth priority over any other device."
        }
    ];

    const relatedGuides = [
        { href: "/como-escolher-melhor-dns-windows-11", title: "Fast Browsing", description: "Improve your network after protecting your Wi-Fi." },
        { href: "/definitive-privacy-guide-windows-2026", title: "Privacy", description: "Protect your data against network trackers." }
    ];

    return (
        <GuideTemplateClient
            title={title}
            description={description}
            keywords={keywords}
            estimatedTime="12 min"
            difficultyLevel="Intermediate"
            contentSections={contentSections}
            summaryTable={summaryTable}
            relatedGuides={relatedGuides}
            faqItems={faqItems}
            showVoltrisOptimizerCTA={true}
            keyPoints={[
                "Identify intruders via CMD (ARP Scan)",
                "Change naming and recommended WPA3 security",
                "Manage network profiles (Private vs Public)",
                "Optimize wireless network protocols",
                "Block DNS routing vulnerabilities"
            ]}
        />
    );
}
