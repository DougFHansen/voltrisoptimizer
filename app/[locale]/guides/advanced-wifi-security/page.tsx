import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'seguranca-wifi-avancada',
  title: "Wi-Fi Security: How to Protect Your Home Network from Intruders",
  description: "Is your Wi-Fi secure? Learn to configure WPA3, disable WPS, hide the SSID, and create a guest network to isolate IoT devices.",
  category: 'network-security',
  difficulty: 'Beginner',
  time: '10-15 min'
};

const title = "Wi-Fi Security: How to Protect Your Home Network from Intruders";
const description = "Is your Wi-Fi secure? Learn to configure WPA3, disable WPS, hide the SSID, and create a guest network to isolate IoT devices.";
const keywords = ["wifi security","wpa2 vs wpa3","secure router configuration","disable wps","guest network"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('seguranca-wifi-avancada', title, description, keywords, locale);
}

export default function GuidePage() {
  const contentSections = [

    {
      title: "Critical Router Settings",
      content: `
        <p class="mb-4 text-gray-300">Access your router (usually 192.168.0.1 or 192.168.1.1) and check:</p>
          <div class="space-y-4">
            <div class="border-l-4 border-red-500 pl-4">
              <h4 class="text-white font-bold">Disable WPS (Wi-Fi Protected Setup)</h4>
              <p class="text-gray-400 text-sm">WPS is a massive security flaw. It allows intruders to discover your password in minutes via PIN brute force.</p>
            </div>
            <div class="border-l-4 border-green-500 pl-4">
              <h4 class="text-white font-bold">Use WPA3 or WPA2-AES</h4>
              <p class="text-gray-400 text-sm">Never use WEP or WPA-TKIP (they are obsolete and insecure). If your router supports WPA3, enable it.</p>
            </div>
          </div>
      `,
      subsections: []
    },

    {
      title: "Guest Network and IoT",
      content: `
        <p class="mb-4 text-gray-300">Smart devices (bulbs, Alexa, fridges) often have weak security. If a hacker breaks into your smart bulb, can they access your PC?</p>
          <p class="text-gray-300">Yes, if they are on the same network. <strong>The Solution:</strong></p>
          <ul class="list-disc list-inside text-gray-400">
            <li>Create a <strong>Guest Network</strong> on the router.</li>
            <li>Connect all visitors and IoT devices to this network.</li>
            <li>Most routers isolate the guest network from the main network ("AP Isolation").</li>
          </ul>
      `,
      subsections: []
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/otimizacao-performance",
      title: "Performance Optimization",
      description: "Tips to make your PC faster."
    },
    {
      href: "/guides/rede-domestica",
      title: "Home Networks",
      description: "Improve your WiFi connection."
    },
    {
      href: "/guides/manutencao-preventiva",
      title: "Preventive Maintenance",
      description: "Essential hardware care tips."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="10-15 min"
      difficultyLevel="Beginner"
      contentSections={contentSections}
      relatedGuides={relatedGuides}
    />
  );
}

