import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'instalacao-drivers',
  title: "Comprehensive Windows Driver Installation & Update Guide",
  description: "Learn how to install and update Windows 10/11 drivers correctly: Video, Audio, Network. Professional guide to securing hardware stability and fixing device conflicts.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '45 minutes'
};

const title = "Comprehensive Windows Driver Installation & Update Guide";
const description = "Step-by-step masterclass on installing and updating drivers for Windows 10 and 11. Learn to handle graphics cards, audio chipsets, and network controllers safely and effectively.";
const keywords = ['how to install drivers windows 11', 'install drivers step by step', 'update windows drivers manual', 'gpu driver installation guide', 'windows device manager tutorial', 'fix hardware conflicts windows', 'nvidia amd driver install'];

export const metadata: Metadata = createGuideMetadata('instalacao-drivers', title, description, keywords);

export default function InstalacaoDriversGuide() {
  const contentSections = [
    {
      title: "Introduction and Core Concepts",
      content: `
        <p class="mb-4 text-gray-300">Driver installation is the critical process of deploying software that acts as a translator between the Operating System and your physical hardware components. Without optimized drivers, components like GPUs, sound cards, and network adapters will either fail to function or run in a severely handicapped 'generic' mode.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-[#171313] p-4 rounded-lg border border-[#31A8FF]/30">
            <h3 class="text-white font-semibold mb-2">Core Benefits</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>✓ Drastically unlocks hardware performance ceilings</li>
              <li>✓ Enables full feature sets of modern devices</li>
              <li>✓ Resolves deep-level system compatibility issues</li>
              <li>✓ Patches security vulnerabilities in hardware logic</li>
            </ul>
          </div>
          <div class="bg-[#171313] p-4 rounded-lg border border-[#FF4B6B]/30">
            <h3 class="text-white font-semibold mb-2">Service Requirements</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>🔗 Active Internet connection for WHQL downloads</li>
              <li>💻 Full Windows administrative privileges</li>
              <li>⏱️ Estimated time: 30-60 minutes</li>
              <li>📋 Exact Hardware Model ID and OS Architecture (x64)</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 my-6">
          <h3 class="text-blue-400 font-semibold mb-2">💡 Professional Tip</h3>
          <p class="text-gray-300 text-sm">Always prioritize drivers directly from the Silicon Manufacturer (NVIDIA, Intel, Realtek) over the generic 'Microsoft-provided' drivers in Windows Update to ensure maximum performance and stability.</p>
        </div>
      `,
      subsections: [
        {
          subtitle: "When to Perform This Procedure",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li>Immediately after a fresh Windows installation</li>
              <li>When devices show a yellow exclamation mark in Device Manager</li>
              <li>To resolve BSOD (Blue Screen) issues related to 'sys' files</li>
              <li>Upon installing new physical hardware components (GPU/NIC)</li>
            </ul>
          `
        }
      ]
    },
    {
      title: "Step-by-Step Deployment Guide",
      content: `
        <p class="mb-4 text-gray-300">Follow these industrial-standard steps to ensure a clean driver environment.</p>
      `,
      subsections: [
        {
          subtitle: "1. Identification and Staging",
          content: `
            <ol class="space-y-2 text-gray-300 list-decimal list-inside ml-4">
              <li>Identify the exact hardware model using tools like CPU-Z or GPU-Z.</li>
              <li>Navigate to the official support portal of the device manufacturer.</li>
              <li>Download the latest WHQL-certified driver for your specific OS version.</li>
              <li>Verify the file hash if provided to ensure no download corruption.</li>
              <li><strong>Critical:</strong> Generate a System Restore Point before proceeding.</li>
            </ol>
          `
        },
        {
          subtitle: "2. Clean Installation Routine",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li>If possible, use DDU (Display Driver Uninstaller) for graphics card cleanups.</li>
              <li>Execute the new driver installer with 'Run as Administrator'.</li>
              <li>Choose 'Custom' or 'Clean Install' options if the installer provides them.</li>
              <li>Perform a full system reboot even if not prompted by the software.</li>
              <li>Verify the device status in 'Device Manager' (<code class="bg-[#2a2a2e] px-1 rounded">devmgmt.msc</code>).</li>
            </ul>
          `
        }
      ]
    },
    {
      title: "Recommended Tools & Resource Hub",
      content: `
        <p class="mb-4 text-gray-300">Reliable utilities for managing an enterprise or personal driver ecosystem.</p>
      `,
      subsections: [
        {
          subtitle: "Specialized Software",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-[#171313] p-3 rounded border border-[#31A8FF]/20">
                <h4 class="text-white font-semibold mb-2">Standard Tools</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>Windows Device Manager - Native control plane</li>
                  <li>Snappy Driver Installer Origin - Best for offline mass-installs</li>
                  <li>DDU (Display Driver Uninstaller) - Critical for GPU resets</li>
                </ul>
              </div>
              <div class="bg-[#171313] p-3 rounded border border-[#FF4B6B]/20">
                <h4 class="text-white font-semibold mb-2">Advanced Solutions</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>Driver Booster PRO - Automated batch updates</li>
                  <li>Double Driver - High-speed driver backup/restore</li>
                  <li>SDI Full - 20GB+ library for total system technicians</li>
                </ul>
              </div>
            </div>
          `
        }
      ]
    },
    {
      title: "Troubleshooting & Conflict Resolution",
      content: `
        <p class="mb-4 text-gray-300">Resolving logic errors and installation failures.</p>
      `,
      subsections: [
        {
          subtitle: "Common Errors and Fixes",
          content: `
            <div class="bg-[#171313] p-4 rounded-lg border border-[#8B31FF]/30">
              <h4 class="text-white font-semibold mb-2">Error: 'Driver is not compatible with this version of Windows'</h4>
              <p class="text-gray-300 text-sm mb-2">Solution: Architecture mismatch</p>
              <ul class="text-gray-300 text-xs space-y-1 ml-4">
                <li>Check if you are running x86 (32-bit) vs x64 (64-bit) Windows.</li>
                <li>Verify if you have Windows 10 vs Windows 11 drivers selected.</li>
                <li>Check for 'Windows Insider' build incompatibilities.</li>
              </ul>
            </div>
            <div class="bg-[#171313] p-4 rounded-lg border border-[#8B31FF]/30 mt-4">
              <h4 class="text-white font-semibold mb-2">Scenario: Device Manager shows 'Unknown Device'</h4>
              <p class="text-gray-300 text-sm mb-2">Solution: Hardware ID manually lookup</p>
              <ul class="text-gray-300 text-xs space-y-1 ml-4">
                <li>Right-click Device > Properties > Details > Hardware IDs.</li>
                <li>Copy the VEN_ and DEV_ codes and search via PCI-Lookup database.</li>
              </ul>
            </div>
          `
        }
      ]
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/otimizacao-performance",
      title: "System Optimization",
      description: "Push your new drivers to the limit."
    },
    {
      href: "/guides/manutencao-preventiva",
      title: "Preventive Care",
      description: "Keep your driver library up to date."
    }
  ];

  const externalReferences = [
    { name: "Microsoft: Update Windows Drivers", url: "https://support.microsoft.com/en-us/windows/update-drivers-in-windows-ec1f7e91-e0fd-3d26-5a0e-781d42eaf459" },
    { name: "NVIDIA Official Driver Cloud", url: "https://www.nvidia.com/Download/index.aspx" },
    { name: "AMD Support & Drivers", url: "https://www.amd.com/en/support" },
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="45 minutes"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      relatedGuides={relatedGuides}
      externalReferences={externalReferences}
    />
  );
}



