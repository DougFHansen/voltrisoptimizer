'use client';

import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'troubleshooting-internet',
  title: "Slow or Dropping Internet? Troubleshooting Guide 2026",
  description: "Is your internet not working as it should? Learn the step-by-step process to diagnose and resolve connection issues on Windows 11 in 2026.",
  category: 'windows-general',
  difficulty: 'Beginner',
  time: '20 min'
};

const title = "Slow or Dropping Internet? Troubleshooting Guide 2026";
const description = "Is your internet not working as it should? Learn the step-by-step process to diagnose and resolve connection issues on Windows 11 in 2026.";
const keywords = [
  'slow internet what to do 2026 tutorial',
  'how to resolve dropping wifi windows 11 guide 2026',
  'step by step fix pc internet network tutorial',
  'internet connected but not browsing how to resolve 2026',
  'reset windows 11 network settings tutorial'
];

export default function InternetTroubleshootingGuide() {
  const summaryTable = [
    { label: "First Step", value: "Restart Router (30 seconds off)" },
    { label: "Physical Check", value: "CAT6 Ethernet Cable or Higher" },
    { label: "Pro Solution", value: "Windows 11 Network Reset" },
    { label: "Difficulty", value: "Beginner" }
  ];

  const contentSections = [
    {
      title: "The 2026 Diagnosis",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Being disconnected in 2026 is like being in the dark. Often, your internet problem is not the service provider, but rather a configuration error in your Windows 11 or a hardware failure in your own home network. Before calling technical support and waiting for hours on the phone, follow this logical roadmap to identify and resolve the problem yourself.
        </p>
      `
    },
    {
      title: "1. The 'Golden Cable' Rule",
      content: `
        <p class="mb-4 text-gray-300">Is the problem with the Wi-Fi or the signal coming from the street?</p>
        <p class="text-sm text-gray-300">
            The most important test is to connect a computer via **cable** directly to the router. If the internet works perfectly on the cable, but fails on Wi-Fi, the problem is purely your wireless network (interference or saturated channel). If the internet remains slow on the cable, the problem may be in the router, the street cable, or deep Windows settings.
        </p>
      `
    },
    {
      title: "2. Resetting the Windows 11 Network",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">Clearing software errors:</h4>
            <p class="text-sm text-gray-300">
                If your computer says 'Connected, but no internet', Windows may have a stuck network registry. <br/><br/>
                1. Go to Settings > Network & Internet > Advanced network settings. <br/>
                2. Click on <strong>Network reset</strong>. <br/>
                3. Click on 'Reset now'. Windows will uninstall and reinstall all network adapters, clearing any incorrect settings that are preventing browsing.
            </p>
        </div>
      `
    },
    {
      title: "3. The Windows Update Problem",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>2026 Tip:</strong> Windows Update sometimes installs "generic" drivers that cause Wi-Fi instability. 
            <br/><br/>Check the website of your laptop or motherboard manufacturer for the latest network driver (Intel, Realtek, or Killer). Installing the official driver often resolves constant connection drops that a network reset couldn't fix.
        </p>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/como-limpar-cache-dns-ip-flushdns",
      title: "Clear DNS Cache",
      description: "Resolve errors with sites that won't open."
    },
    {
      href: "/guides/problemas-conexao-wifi-causa-solucao",
      title: "Wi-Fi Problems",
      description: "Specific tips for wireless signal."
    },
    {
      href: "/guides/reduzir-ping-jogos-online",
      title: "Reduce Ping",
      description: "Optimize for a faster connection."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="20 min"
      difficultyLevel="Beginner"
      contentSections={contentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}
