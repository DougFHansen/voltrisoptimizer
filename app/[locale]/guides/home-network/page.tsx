import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'rede-domestica',
  title: "Complete Home Network Setup Guide",
  description: "Configure routers, Wi-Fi extenders, VLANs, and residential network security. Optimization for coverage and performance.",
  category: 'network-security',
  difficulty: 'Intermediate',
  time: '80 minutes'
};

const title = "Complete Home Network Setup Guide";
const description = "Configure routers, Wi-Fi extenders, VLANs, and residential network security. Optimization for coverage and performance.";
const keywords = ["home network", "router", "wi-fi", "extender", "vlan", "network security"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return createGuideMetadata('rede-domestica', title, description, keywords, locale);
}

export default function RededomesticaGuide() {
  const contentSections = [
    {
      title: "Planning and Structuring Your Home Network",
      content: `
        <p class="mb-4">A well-planned home network allows all your connected devices to share the internet, print remotely, access files, and stream content efficiently. Success depends on thorough initial planning and proper equipment selection.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-[#171313] p-4 rounded-lg border border-[#31A8FF]/30">
            <h3 class="text-white font-semibold mb-2">Essential Components</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>📡 Dual-band Wi-Fi Router (2.4GHz and 5GHz)</li>
              <li>🔌 Modem compatible with your ISP</li>
              <li>📱 Smartphones, tablets, and computers</li>
              <li>📺 Smart TVs and streaming devices</li>
            </ul>
          </div>
          <div class="bg-[#171313] p-4 rounded-lg border border-[#FF4B6B]/30">
            <h3 class="text-white font-semibold mb-2">Initial Considerations</h3>
            <ul class="text-gray-300 text-sm space-y-1">
              <li>🏠 Total residence area in square meters or feet</li>
              <li>📶 Number of walls and obstacles</li>
              <li>💻 Number of simultaneous devices</li>
              <li>⏱️ Estimated setup time: 60-90 minutes</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 my-6">
          <h3 class="text-orange-400 font-semibold mb-2">📋 Initial Checklist</h3>
          <p class="text-gray-300 text-sm">Before starting, ensure you have: ISP login/password, router model, a list of devices to connect, and a home map indicating signal dead zones.</p>
        </div>
      `,
      subsections: []
    },
    {
      title: "Router Configuration - Step-by-Step",
      content: `
        <p class="mb-4">Follow this comprehensive tutorial to configure your home Wi-Fi router with security and signal optimization from the very first access.</p>
      `,
      subsections: [
        {
          subtitle: "Step 1: Physical Connection",
          content: `
            <ol class="space-y-2 text-gray-300 list-decimal list-inside ml-4">
              <li><strong>Connect the modem:</strong> Plug the ISP cable into the router's WAN port.</li>
              <li><strong>Power:</strong> Connect the router's power adapter and wait 2 minutes.</li>
              <li><strong>Access:</strong> Connect a computer via Ethernet cable to a LAN port.</li>
              <li><strong>IP Address:</strong> Open a browser and access 192.168.1.1 or 192.168.0.1.</li>
              <li><strong>Default Login:</strong> Usually \"admin\" for both user and password (check the manual).</li>
            </ol>
          `
        },
        {
          subtitle: "Step 2: Basic Internet Settings",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li><strong>Connection Type:</strong> Select PPPoE, DHCP, or Static IP as specified by your ISP.</li>
              <li><strong>PPPoE Credentials:</strong> Enter the login and password provided by your provider.</li>
              <li><strong>Clone MAC Address:</strong> Enable this if your ISP binds service to a specific computer's MAC address.</li>
              <li><strong>Test Connection:</strong> Click \"Connect\" and verify a green status.</li>
              <li><strong>DNS:</strong> Configure public DNS (8.8.8.8 and 8.8.4.4) for better performance.</li>
            </ul>
          `
        },
        {
          subtitle: "Step 3: Wi-Fi Setup and Security",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li><strong>2.4GHz Network:</strong> Choose a clear Name (SSID) + strong WPA2/WPA3 password (12+ characters).</li>
              <li><strong>5GHz Network:</strong> Same name with a \"_5G\" suffix for easy identification.</li>
              <li><strong>2.4GHz Channel:</strong> Use channels 1, 6, or 11 (least congested).</li>
              <li><strong>5GHz Channel:</strong> Set to auto or select the least utilized channel.</li>
              <li><strong>Security:</strong> Disable WPS and enable WPA2/WPA3 Personal only.</li>
            </ul>
          `
        },
        {
          subtitle: "Step 4: Advanced Optimization",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li><strong>QoS (Quality of Service):</strong> Prioritize streaming and gaming over downloads.</li>
              <li><strong>Guest Network:</strong> Create a separate network for visitors to protect your main devices.</li>
              <li><strong>Parental Controls:</strong> Block inappropriate sites and set time limits.</li>
              <li><strong>Firmware:</strong> Check for and update to the latest stable firmware version.</li>
              <li><strong>Scheduling:</strong> Set a weekly reboot schedule to maintain peak performance.</li>
            </ul>
          `
        }
      ]
    },
    {
      title: "Equipment and Signal Extension",
      content: `
        <p class="mb-4">Choose the right equipment for your home and solve Wi-Fi coverage issues with effective solutions.</p>
      `,
      subsections: [
        {
          subtitle: "Recommended Routers by Price Range",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-[#171313] p-3 rounded border border-[#31A8FF]/20">
                <h4 class="text-white font-semibold mb-2">Entry Level ($40-$80)</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>TP-Link Archer A7 or AX1800</li>
                  <li>Dual-band AC1200 Wi-Fi</li>
                  <li>4 adjustable external antennas</li>
                  <li>Ideal for homes up to 100m² (1,000 sq ft)</li>
                </ul>
              </div>
              <div class="bg-[#171313] p-3 rounded border border-[#8B31FF]/20">
                <h4 class="text-white font-semibold mb-2">Mid Range ($80-$150)</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>ASUS RT-AX58U or AX6000</li>
                  <li>Wi-Fi 6 AX3000 dual-band</li>
                  <li>Gigabit ports + USB 3.0</li>
                  <li>Coverage up to 150m² (1,600 sq ft)</li>
                </ul>
              </div>
              <div class="bg-[#171313] p-3 rounded border border-[#FF4B6B]/20">
                <h4 class="text-white font-semibold mb-2">Premium ($150+)</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>Netgear Nighthawk AX12</li>
                  <li>Wi-Fi 6 tri-band AX6000</li>
                  <li>Dedicated processor</li>
                  <li>Coverage up to 250m² (2,700 sq ft) + MU-MIMO</li>
                </ul>
              </div>
            </div>
          `
        },
        {
          subtitle: "Signal Extension Solutions",
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-[#171313] p-3 rounded border border-green-500/30">
                <h4 class="text-green-400 font-semibold mb-2">Mesh Wi-Fi Systems</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>Coordinated multi-point system</li>
                  <li>Main router + 1-2 mesh nodes</li>
                  <li>Same SSID throughout the entire home</li>
                  <li>Automatic channel optimization</li>
                </ul>
              </div>
              <div class="bg-[#171313] p-3 rounded border border-blue-500/30">
                <h4 class="text-blue-400 font-semibold mb-2">Traditional Extenders</h4>
                <ul class="text-gray-300 text-xs space-y-1">
                  <li>Simple extension of existing signal</li>
                  <li>Separate SSID (_EXT)</li>
                  <li>Often results in 50% speed loss</li>
                  <li>Cost-effective for small dead zones</li>
                </ul>
              </div>
            </div>
          `
        }
      ]
    },
    {
      title: "Common Network Problems and Solutions",
      content: `
        <p class="mb-4">Diagnose and solve frequent Wi-Fi and wired home network issues.</p>
      `,
      subsections: [
        {
          subtitle: "Connectivity Issues",
          content: `
            <div class="space-y-4">
              <div class="bg-[#171313] p-4 rounded-lg border border-red-500/30">
                <h4 class="text-red-400 font-semibold mb-2">❌ No Internet on Any Device</h4>
                <p class="text-gray-300 text-sm mb-2">Diagnosis and Solution:</p>
                <ul class="text-gray-300 text-xs space-y-1 ml-4">
                  <li>Check if the modem is synced (status lights)</li>
                  <li>Restart both modem and router (leave off for 30 seconds)</li>
                  <li>Test connection with a direct cable from modem to PC</li>
                  <li>Verify PPPoE credentials in the router panel</li>
                </ul>
              </div>
              
              <div class="bg-[#171313] p-4 rounded-lg border border-yellow-500/30">
                <h4 class="text-yellow-400 font-semibold mb-2">⚠️ Slow or Unstable Internet</h4>
                <p class="text-gray-300 text-sm mb-2">Possible Causes:</p>
                <ul class="text-gray-300 text-xs space-y-1 ml-4 mb-2">
                  <li>Interference from microwaves, baby monitors, or neighbors</li>
                  <li>Congested Wi-Fi channel (use a Wi-Fi Analyzer app)</li>
                  <li>Older devices limiting the overall network speed</li>
                  <li>ISP issues in your regional area</li>
                </ul>
                <p class="text-gray-300 text-sm">Solution: Change the Wi-Fi channel, update firmware, and reposition the router strategically.</p>
              </div>
            </div>
          `
        },
        {
          subtitle: "Wi-Fi Signal Problems",
          content: `
            <div class="space-y-4">
              <div class="bg-[#171313] p-4 rounded-lg border border-purple-500/30">
                <h4 class="text-purple-400 font-semibold mb-2">📶 Weak Signal in Certain Rooms</h4>
                <p class="text-gray-300 text-sm mb-2">Escalated Solutions:</p>
                <ul class="text-gray-300 text-xs space-y-1 ml-4">
                  <li><strong>Immediate:</strong> Reposition the router to a central, elevated location.</li>
                  <li><strong>Short-term:</strong> Install a Wi-Fi repeater at the halfway point.</li>
                  <li><strong>Medium-term:</strong> Implement a Mesh Wi-Fi system with 2-3 nodes.</li>
                  <li><strong>Alternative:</strong> Use Ethernet cables for fixed devices.</li>
                </ul>
              </div>
              
              <div class="bg-[#171313] p-4 rounded-lg border border-blue-500/30">
                <h4 class="text-blue-400 font-semibold mb-2">📱 Devices Constantly Disconnecting</h4>
                <p class="text-gray-300 text-sm mb-2">Common Causes:</p>
                <ul class="text-gray-300 text-xs space-y-1 ml-4 mb-2">
                  <li>Idle timeout set too short in the router</li>
                  <li>Client list is full (connection limit reached)</li>
                  <li>Outdated firmware</li>
                  <li>Device driver issues</li>
                </ul>
                <p class="text-gray-300 text-sm">Solution: Increase timeout in the panel, update firmware, restart router.</p>
              </div>
            </div>
          `
        },
        {
          subtitle: "Preventive Maintenance Tips",
          content: `
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4">
              <li>Update router firmware quarterly</li>
              <li>Restart the router monthly to clear cache</li>
              <li>Monitor connected devices to identify intruders</li>
              <li>Backup settings before making major changes</li>
              <li>Document the physical network layout and equipment placement</li>
            </ul>
          `
        }
      ]
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/seguranca-digital",
      title: "Digital Security Guide",
      description: "Comprehensive protection against cyber threats."
    },
    {
      href: "/guides/otimizacao-performance",
      title: "Performance Optimization",
      description: "Maximize your system's performance."
    },
    {
      href: "/guides/manutencao-preventiva",
      title: "Preventive Maintenance",
      description: "Complete strategies for system care."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="80 minutes"
      difficultyLevel="Intermediate"
      contentSections={contentSections}
      relatedGuides={relatedGuides}
    />
  );
}
