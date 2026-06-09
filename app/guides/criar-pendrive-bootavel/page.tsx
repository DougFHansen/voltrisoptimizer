import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'criar-pendrive-bootavel',
  title: "How to Create a Windows 11 Bootable USB Drive (2026)",
  description: "Need to format your PC? Learn how to create an official Windows 11 bootable USB using Microsoft's tool or Rufus in 2026.",
  category: 'windows-general',
  difficulty: 'Intermediate',
  time: '30 min'
};

const title = "How to Create a Windows 11 Bootable USB Drive (2026)";
const description = "Need to format your PC? Learn how to create an official Windows 11 bootable USB using Microsoft's tool or Rufus in 2026.";
const keywords = [
  'how to create windows 11 bootable usb 2026',
  'create official windows 11 installation media guide',
  'how to use rufus to create bootable usb tutorial',
  'windows 11 bootable usb mbr vs gpt explanation',
  'format pc with bootable usb step by step 2026'
];

export const metadata: Metadata = createGuideMetadata('criar-pendrive-bootavel', title, description, keywords);

export default function BootableUSBGuide() {
  const summaryTable = [
    { label: "Minimum Capacity", value: "8GB or more" },
    { label: "Required Format", value: "GPT (For UEFI) / MBR (For Legacy/Old)" },
    { label: "Official Tool", value: "Media Creation Tool (Microsoft)" },
    { label: "Difficulty", value: "Intermediate" }
  ];

  const contentSections = [
    {
      title: "The first step to formatting",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          In 2026, you no longer need DVDs to install Windows. A bootable USB drive is the fastest and safest way to do a clean install of Windows 11. You put all the installation files on it in a way that the computer can read the "boot" instructions as soon as it's turned on, even before reading today's HDD or SSD.
        </p>
      `
    },
    {
      title: "1. Official Method: Media Creation Tool",
      content: `
        <p class="mb-4 text-gray-300">This is Microsoft's safest and easiest method:</p>
        <ol class="list-decimal list-inside text-gray-300 space-y-3">
            <li>Go to the official website: <strong>microsoft.com/software-download/windows11</strong>.</li>
            <li>Download the 'Create Windows 11 installation media' tool.</li>
            <li>Connect your USB drive (Warning: all files on it will be erased!).</li>
            <li>Select 'USB flash drive' and follow the instructions. The tool will download the latest ISO and prepare the USB drive on its own.</li>
        </ol>
      `
    },
    {
      title: "2. Advanced Method: RUFUS (Bypass TPM 2.0)",
      content: `
        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h4 class="text-white font-bold mb-2">For Older or Custom PCs:</h4>
            <p class="text-sm text-gray-300">
                If your PC doesn't officially support TPM 2.0 or has older hardware, **Rufus** is the best choice. <br/><br/>
                When creating the USB drive with it, you can check options to **remove the 4GB RAM, TPM, and Secure Boot requirements**. This allows you to install Windows 11 on almost any PC in 2026, and also lets you create a local account without needing internet or a Microsoft email.
            </p>
        </div>
      `
    },
    {
      title: "3. Difference between MBR and GPT",
      content: `
        <p class="mb-4 text-gray-300">
            <strong>Don't make a mistake at boot:</strong> 
            <br/><br/>- <strong>GPT (UEFI):</strong> The standard for all modern PCs. If your PC was bought after 2015, use GPT. <br/>
            - <strong>MBR (BIOS):</strong> Only use this if you're installing on a very old computer that doesn't have the modern/blue BIOS menu. <br/><br/>
            Choosing the wrong option in Rufus will cause the USB drive to not be recognized by the computer when turning it on.
        </p>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "4. Technical Foundations of Booting and Partitioning",
      content: `
        <h4 class="text-white font-bold mb-3">🔬 Boot Architecture and Partitioning Systems</h4>
        <p class="mb-4 text-gray-300">
          The boot process involves multiple technical stages and different partitioning systems:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">Partitioning Systems</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• MBR (Master Boot Record)</li>
              <li>• GPT (GUID Partition Table)</li>
              <li>• EFI System Partition (ESP)</li>
              <li>• Microsoft Reserved Partition (MSR)</li>
              <li>• Boot Configuration Data (BCD)</li>
            </ul>
          </div>
          <div class="bg-purple-900/10 p-5 rounded-xl border border-purple-500/20">
            <h5 class="text-purple-400 font-bold mb-3">Boot Process</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Power-On Self-Test (POST)</li>
              <li>• Firmware Initialization</li>
              <li>• Boot Manager Execution</li>
              <li>• Loader Chain Process</li>
              <li>• OS Kernel Loading</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">⚙️ Technical Comparison MBR vs GPT</h4>
        <p class="mb-4 text-gray-300">
          The technical differences between partitioning systems are fundamental to understanding compatibility:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Feature</th>
                <th class="p-3 text-left">MBR (Legacy)</th>
                <th class="p-3 text-left">GPT (UEFI)</th>
                <th class="p-3 text-left">Importance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Partition Limit</td>
                <td class="p-3">4 primary partitions</td>
                <td class="p-3">128 partitions (default)</td>
                <td class="p-3">Critical</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Disk Limit</td>
                <td class="p-3">2TB (maximum)</td>
                <td class="p-3">9.4 ZB (theoretical)</td>
                <td class="p-3">Critical</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Checksum</td>
                <td class="p-3">No (unprotected)</td>
                <td class="p-3">Yes (self correcting)</td>
                <td class="p-3">Essential</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Security</td>
                <td class="p-3">Basic</td>
                <td class="p-3">Secure Boot</td>
                <td class="p-3">High</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Compatibility</td>
                <td class="p-3">Old PCs (pre-2012)</td>
                <td class="p-3">Modern PCs (post-2012)</td>
                <td class="p-3">Essential</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    {
      title: "5. Technical Processes of Creating a Bootable USB",
      content: `
        <h4 class="text-white font-bold mb-3">🔧 Bootable Image Architecture</h4>
        <p class="mb-4 text-gray-300">
          Creating bootable USBs involves manipulating complex structures of the file system and boot sectors:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-green-500 pl-4 py-2 bg-green-900/10">
            <h5 class="text-green-400 font-bold mb-2">Structure of an ISO Image</h5>
            <p class="text-gray-300 text-sm">
              Technical components found in Windows ISO images:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Boot Sector (MBR or GPT)</li>
              <li>• El Torito Boot Catalog</li>
              <li>• Boot Manager (bootmgr.efi)</li>
              <li>• Boot Configuration Data (BCD)</li>
              <li>• Windows PE (Preinstallation Environment)</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4 py-2 bg-blue-900/10">
            <h5 class="text-blue-400 font-bold mb-2">Image Writing Process</h5>
            <p class="text-gray-300 text-sm">
              Technical steps involved in writing images to devices:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Checking available space</li>
              <li>• Formatting with FAT32 (UEFI) or NTFS (Legacy)</li>
              <li>• Copying boot files</li>
              <li>• Updating the boot sector</li>
              <li>• Configuring partition flags</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔬 Low-Level Tools</h4>
        <p class="mb-4 text-gray-300">
          Tools that operate directly with disk sectors and structures:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-cyan-400 font-bold mb-2">Low-Level Tools</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• dd (Linux/Unix)</li>
              <li>• diskpart (Windows)</li>
              <li>• Win32DiskImager</li>
              <li>• Etcher (cross-platform)</li>
            </ul>
          </div>
          <div class="bg-gray-800 p-4 rounded-lg">
            <h5 class="text-purple-400 font-bold mb-2">Technical Parameters</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Block size (sector size)</li>
              <li>• Partition alignment</li>
              <li>• Partition Type (07, 0C, EF)</li>
              <li>• Boot flags</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "6. Advanced Creation and Customization Techniques",
      content: `
        <h4 class="text-white font-bold mb-3">🛠️ Advanced Bootable USB Customization</h4>
        <p class="mb-4 text-gray-300">
          Advanced techniques to create USB drives with personalized features:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">Multiboot USB</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• GRUB4DOS</li>
              <li>• YUMI (Yet Another Multiboot USB)</li>
              <li>• Ventoy (plug-and-play)</li>
              <li>• EasyBCD</li>
              <li>• Custom ISO creation</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">Driver Preinstallation</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Driver injection</li>
              <li>• Windows PE customization</li>
              <li>• WinPE add-ons</li>
              <li>• Third-party driver packs</li>
              <li>• OEM driver integration</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Installation Scripts</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Unattended installation</li>
              <li>• Answer files (autounattend.xml)</li>
              <li>• PowerShell scripts</li>
              <li>• Batch automation</li>
              <li>• Custom deployment tools</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📊 Compatibility and Recommendations Table</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Scenario</th>
                <th class="p-3 text-left">Recommended Tool</th>
                <th class="p-3 text-left">Ideal Setup</th>
                <th class="p-3 text-left">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">Standard Windows install</td>
                <td class="p-3">Media Creation Tool</td>
                <td class="p-3">UEFI + GPT</td>
                <td class="p-3">Easy</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Old hardware</td>
                <td class="p-3">Rufus</td>
                <td class="p-3">Legacy + MBR</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Install without TPM</td>
                <td class="p-3">Rufus + Registry mods</td>
                <td class="p-3">UEFI + GPT (without TPM)</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Multiboot USB</td>
                <td class="p-3">Ventoy or YUMI</td>
                <td class="p-3">FAT32 + MBR</td>
                <td class="p-3">Hard</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Automated install</td>
                <td class="p-3">WinPE + Scripts</td>
                <td class="p-3">Custom</td>
                <td class="p-3">Expert</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const additionalContentSections = [
    {
      title: "7. Deep Analysis of Creation Tools",
      content: `
        <h4 class="text-white font-bold mb-3">🔍 Technical Tool Comparison</h4>
        <p class="mb-4 text-gray-300">
          Detailed analysis of the main tools for creating bootable USB drives:
        </p>
        <div class="space-y-6">
          <div class="border-l-4 border-purple-500 pl-4 py-2 bg-purple-900/10">
            <h5 class="text-purple-400 font-bold mb-2">Media Creation Tool</h5>
            <p class="text-gray-300 text-sm">
              Official Microsoft tool for creating installation media:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Offers official and updated ISO</li>
              <li>• Direct integration with Windows Update</li>
              <li>• Automatic integrity check</li>
              <li>• Support limited to personalizations</li>
              <li>• Mandatory hardware requirements</li>
            </ul>
          </div>
          <div class="border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-900/10">
            <h5 class="text-cyan-400 font-bold mb-2">Rufus</h5>
            <p class="text-gray-300 text-sm">
              Open-source tool with advanced features:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• Support for various image formats</li>
              <li>• Advanced partitioning options</li>
              <li>• Compatibility mode for old hardware</li>
              <li>• Optimization for different use cases</li>
              <li>• Bypass of Windows 11 requirements</li>
            </ul>
          </div>
          <div class="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-900/10">
            <h5 class="text-yellow-400 font-bold mb-2">Professional Alternatives</h5>
            <p class="text-gray-300 text-sm">
              Other tools used by professionals:
            </p>
            <ul class="text-sm text-gray-300 space-y-1 mt-2">
              <li>• WinToUSB (bootable copies of HDD)</li>
              <li>• YUMI (multiboot USB)</li>
              <li>• Ventoy (plug-and-play ISO boot)</li>
              <li>• UNetbootin (Linux distributions)</li>
              <li>• BalenaEtcher (universal flasher)</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      title: "8. Hardware and Performance Technical Considerations",
      content: `
        <h4 class="text-white font-bold mb-3">⚡ Impact of Hardware on Installation Performance</h4>
        <p class="mb-4 text-gray-300">
          The performance of the USB drive and hardware significantly affects the installation process:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20">
            <h5 class="text-blue-400 font-bold mb-3">USB Specs</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Speed class (Class 10, UHS-I, UHS-II)</li>
              <li>• Read/write speed</li>
              <li>• USB Interface (2.0, 3.0, 3.1, 3.2)</li>
              <li>• Real vs advertised capacity</li>
              <li>• Controller and NAND Flash quality</li>
            </ul>
          </div>
          <div class="bg-green-900/10 p-5 rounded-xl border border-green-500/20">
            <h5 class="text-green-400 font-bold mb-3">Performance Factors</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• File system cluster size</li>
              <li>• Partition alignment (4K, 1MB)</li>
              <li>• Writing block size</li>
              <li>• Write buffer</li>
              <li>• Write verification</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">🔧 Performance Optimization</h4>
        <p class="mb-4 text-gray-300">
          Technical tips to maximize speed and reliability:
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-3 ml-4">
          <li><strong>USB choice:</strong> Use A1 or A2 class USBs for better read performance</li>
          <li><strong>File system:</strong> FAT32 for UEFI compatibility, NTFS for larger sizes</li>
          <li><strong>USB Port:</strong> Use USB 3.0 or higher ports for faster writing</li>
          <li><strong>Defragmentation:</strong> Defragment the USB drive before writing for better performance</li>
          <li><strong>Direct writing:</strong> Avoid intermediate copies, burn directly from the ISO</li>
        </ul>
      `
    },
    {
      title: "9. Advanced Troubleshooting",
      content: `
        <h4 class="text-white font-bold mb-3">🔍 Diagnostic and Solving Complex Problems</h4>
        <p class="mb-4 text-gray-300">
          Advanced techniques to resolve common and uncommon issues:
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
          <div class="bg-indigo-900/10 p-5 rounded-xl border border-indigo-500/20">
            <h5 class="text-indigo-400 font-bold mb-3">Boot Problems</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Check partition flags</li>
              <li>• Correct boot sector</li>
              <li>• UEFI firmware update</li>
              <li>• Boot mode configuration</li>
              <li>• Hardware verification</li>
            </ul>
          </div>
          <div class="bg-cyan-900/10 p-5 rounded-xl border border-cyan-500/20">
            <h5 class="text-cyan-400 font-bold mb-3">Write Errors</h5>
            <ul class="text-sm text-gray-300 space-y-2">
              <li>• Write protection</li>
              <li>• Insufficient space</li>
              <li>• Bad sectors</li>
              <li>• Permission problems</li>
              <li>• Data corruption</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-white font-bold mb-3 mt-6">📋 Troubleshooting Checklist</h4>
        <p class="mb-4 text-gray-300">
          Systematic procedures to resolve problems:
        </p>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-gray-300 border border-gray-700 rounded-lg">
            <thead class="bg-gray-800">
              <tr>
                <th class="p-3 text-left">Problem</th>
                <th class="p-3 text-left">Probable Cause</th>
                <th class="p-3 text-left">Fix</th>
                <th class="p-3 text-left">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-700">
                <td class="p-3">USB does not show up in boot</td>
                <td class="p-3">Wrong UEFI/LEGACY configuration</td>
                <td class="p-3">Check boot mode in BIOS</td>
                <td class="p-3">Easy</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Checksum error</td>
                <td class="p-3">Corrupted ISO or defective USB</td>
                <td class="p-3">Check ISO integrity and use another USB</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Interrupted boot</td>
                <td class="p-3">Partition not marked as active</td>
                <td class="p-3">Mark partition as active with diskpart</td>
                <td class="p-3">Medium</td>
              </tr>
              <tr class="border-t border-gray-700 bg-gray-800/30">
                <td class="p-3">Hardware error</td>
                <td class="p-3">Defective sectors on the USB</td>
                <td class="p-3">Format with bad blocks check</td>
                <td class="p-3">Hard</td>
              </tr>
              <tr class="border-t border-gray-700">
                <td class="p-3">Requirements not met</td>
                <td class="p-3">TPM 2.0 or Secure Boot disabled</td>
                <td class="p-3">Modify BCD or use Rufus with bypass</td>
                <td class="p-3">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    }
  ];

  const relatedGuides = [
    {
      href: "/guias/formatacao-windows",
      title: "Formatting Guide",
      description: "What to do after creating the USB drive."
    },
    {
      href: "/guias/atualizar-bios-seguro",
      title: "Configure Boot",
      description: "How to make the PC read the USB drive first."
    },
    {
      href: "/guias/pos-instalacao-windows-11",
      title: "Post-Install Checklist",
      description: "Next steps after Windows opens."
    }
  ];

  const allContentSections = [...contentSections, ...additionalContentSections];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="30 min"
      difficultyLevel="Intermediate"
      contentSections={allContentSections}
      advancedContentSections={advancedContentSections}
      summaryTable={summaryTable}
      relatedGuides={relatedGuides}
    />
  );
}
