import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'programas-essenciais-windows',
  title: "Essential Post-Formatting Kit: The 10 Mandatory Programs (2026)",
  description: "Just formatted your PC? Don't install junk. Download Ninite and install 7-Zip, VLC, Discord, Steam, and PowerToys all at once, virus-free.",
  category: 'software',
  difficulty: 'Beginner',
  time: '15 min'
};

const title = "Essential Software for Windows 11: The Definitive List (2026)";
const description = "Replace bad Windows programs. Use 7-Zip instead of WinRAR, VLC instead of Media Player, and ShareX instead of Snipping Tool.";

const keywords = [
  'essential programs after formatting 2026',
  'winrar vs 7zip which is better',
  'lightweight adobe reader alternative',
  'vlc media player codecs',
  'powertoys windows 11 tutorial',
  'ninite installer safe',
  'sharex vs lightshot screenshot',
  'notepad vs notepad++'
];

export const metadata: Metadata = createGuideMetadata('programas-essenciais-windows', title, description, keywords);

export default function SoftwareGuide() {
  const summaryTable = [
    { label: "Installer", value: "Ninite (Automatic)" },
    { label: "Archiver", value: "7-Zip (Open Source)" },
    { label: "Video", value: "VLC or MPC-BE" },
    { label: "PrintScreen", value: "ShareX (Powerful)" },
    { label: "Productivity", value: "MS PowerToys" },
    { label: "Gaming", value: "Steam / Epic / Discord" }
  ];

  const contentSections = [
    {
      title: "The Ninite Rule",
      content: `
        <p class="mb-6 text-gray-300 leading-relaxed text-lg">
          Never download programs from sites like "Softonic" or other generic download portals. They often bundle installers with adware. The secret of IT technicians is <strong>Ninite.com</strong>.
        </p>
        <p class="mb-6 text-gray-300 leading-relaxed">
          You visit the site, check the boxes for what you want (Chrome, Discord, VLC, 7-Zip), download ONE installer, and it installs everything automatically, silently, while rejecting all "Baidu Antivirus" or Toolbars offers.
        </p>

        <div class="bg-blue-900/10 p-5 rounded-xl border border-blue-500/20 my-8">
            <h4 class="text-[#31A8FF] font-bold mb-3 flex items-center gap-2">
                <span class="text-xl">🛠️</span> Voltris Toolbox
            </h4>
            <p class="text-gray-300 mb-4">
                Ninite is great, but <strong>Voltris Optimizer</strong> already includes the essential runtimes for games (DirectX, Visual C++ 2005-2022, .NET Framework) that Ninite doesn't install. Run "Game Essentials" in Voltris once after formatting, and you'll never face a missing DLL error.
            </p>
            <a href="/voltrisoptimizer" class="group relative inline-flex px-8 py-3 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-white font-bold text-base rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(139,49,255,0.4)] items-center justify-center gap-2">
                Install Runtimes
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </div>
      `
    },
    {
      title: "1. Archiver: 7-Zip",
      content: `
        <p class="mb-4 text-gray-300">
            Throw WinRAR away. It keeps asking for a license. <strong>7-Zip</strong> is free, open source, lightweight, and extracts .rar and .zip files faster.
        </p>
      `
    },
    {
      title: "2. Video Player: VLC Media Player",
      content: `
        <p class="mb-4 text-gray-300">
            Windows' native "Movies & TV" doesn't handle subtitles well or support weird mkv formats. VLC plays EVERYTHING. It's the Swiss Army knife of videos. For something more modern-looking, try <strong>PotPlayer</strong>.
        </p>
      `
    },
    {
      title: "3. Screen Capture: ShareX",
      content: `
        <p class="mb-4 text-gray-300">
            The best screenshot software in the world. Free on Steam or its official website.
        </p>
        <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Takes a screenshot and automatically uploads it to Imgur (generates a link).</li>
            <li>Records screen GIFs or lightweight MP4 videos.</li>
            <li>Includes an editor, color picker, ruler, and OCR (extracting text from images).</li>
        </ul>
      `
    }
  ];

  const advancedContentSections = [
    {
      title: "Microsoft PowerToys: Superpowers",
      content: `
            <div class="bg-gray-800/50 p-6 rounded-xl border border-gray-700 mb-8">
                <h4 class="text-white font-bold mb-4 text-xl">Official Microsoft Tools</h4>
                <p class="text-gray-300 mb-4">
                    Download it from the Microsoft Store. It adds features that should have come with Windows:
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm">
                    <li><strong>FancyZones:</strong> Create complex layouts to split windows on ultrawide monitors.</li>
                    <li><strong>Color Picker:</strong> Win+Shift+C to grab any pixel's color on the screen.</li>
                    <li><strong>PowerRename:</strong> Rename 1000 files at once.</li>
                    <li><strong>Image Resizer:</strong> Resize photos with a simple right-click.</li>
                </ul>
            </div>
            `
    }
  ];

  const additionalContentSections = [
    {
      title: "Antivirus?",
      content: `
            <p class="mb-4 text-gray-300">
                You <strong>DO NOT</strong> need Avast, AVG, or Norton in 2026.
            </p>
            <p class="text-gray-300 text-sm">
                Native <strong>Windows Defender</strong> is already excellent and lightweight. Third-party antivirus today often acts like bloatware, installing VPNs and sales popups. Stick with Defender and use common sense (don't download unknown executables). If you need a second opinion, download <strong>Malwarebytes Free</strong> for an occasional manual scan.
            </p>
            `
    }
  ];

  const faqItems = [
    {
      question: "PDF Reader?",
      answer: "The browser itself (Edge/Chrome) opens PDFs remarkably well. If you need to edit or sign, Adobe Reader is heavy. Try SumatraPDF (extremely lightweight) or Foxit Reader."
    },
    {
      question: "Is uTorrent still worth it?",
      answer: "NEVER. uTorrent became an ad billboard and has even bundled hidden bitcoin miners. Use <strong>Qbittorrent</strong>. It looks similar but without ads, it's open source, and faster."
    }
  ];

  const externalReferences = [
    { name: "Ninite", url: "https://ninite.com/" },
    { name: "Microsoft PowerToys GitHub", url: "https://github.com/microsoft/PowerToys" }
  ];

  const relatedGuides = [
    {
      href: "/guides/winrar-vs-7zip-qual-melhor",
      title: "Archiver Battle",
      description: "Why 7-Zip wins."
    },
    {
      href: "/guides/vlc-media-player-vs-potplayer",
      title: "Best Players",
      description: "Codec comparison."
    },
    {
      href: "/guides/instalacao-windows-11",
      title: "Clean Installation",
      description: "The step before this guide."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="15 min"
      difficultyLevel="Beginner"
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

