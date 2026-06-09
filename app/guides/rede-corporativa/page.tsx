import { Metadata } from 'next';
import { GuideTemplate, createGuideMetadata } from '@/components/GuideTemplate';

export const guideMetadata = {
  id: 'rede-corporativa',
  title: "Corporate Network Configuration Guide",
  description: "Description not available",
  category: 'network-security',
  difficulty: 'Advanced',
  time: '45 minutes'
};

const title = 'Professional Corporate Network Configuration';
const description = 'Implement a secure and efficient corporate network with VLAN segmentation, access control, QoS, and professional monitoring. Solutions for small and medium-sized businesses.';
const keywords = [
  'corporate network',
  'VLAN configuration',
  'network segmentation',
  'network access control',
  'network QoS',
  'enterprise router',
  'managed switch',
  'network firewall',
  'network monitoring',
  'corporate network security',
  'IT infrastructure',
  'network administration'
];

export const metadata: Metadata = createGuideMetadata('rede-corporativa', title, description, keywords);

export default function CorporateNetworkGuide() {
  const contentSections = [
    {
      title: "Corporate Network Fundamentals",
      content: `
        <p class="mb-4">Corporate networks require careful planning to ensure security, performance, and scalability. Unlike home networks, enterprise environments need to handle multiple departments, access levels, and compliance requirements.</p>
        <p class="mb-4">Essential components:</p>
        <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4 mb-4">
          <li>Enterprise routers with advanced features</li>
          <li>Managed switches for segmentation</li>
          <li>Dedicated firewalls for security</li>
          <li>Authentication servers (Active Directory)</li>
          <li>Monitoring and logging systems</li>
        </ul>
        <p>Initial planning determines the entire architecture of the company's IT infrastructure.</p>
      `,
      subsections: []
    },
    {
      title: "Network Planning and Design",
      content: "",
      subsections: [
        {
          subtitle: "Requirements Gathering",
          content: `
            <p>Before any implementation:</p>
            <ol class="space-y-2 text-gray-300 list-decimal list-inside ml-4 mb-4">
              <li>Map all departments and their needs</li>
              <li>Identify devices that need network access</li>
              <li>Determine access levels and permissions</li>
              <li>Plan for future growth (3-5 years)</li>
              <li>Define security and compliance requirements</li>
            </ol>
          `
        },
        {
          subtitle: "VLAN Segmentation",
          content: `
            <p>Organize the network into logical segments:</p>
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4 mb-4">
              <li><strong>Administrative VLAN:</strong> Restricted access for IT</li>
              <li><strong>Financial VLAN:</strong> Sensitive data and strict controls</li>
              <li><strong>Operational VLAN:</strong> Production/operational departments</li>
              <li><strong>Guest VLAN:</strong> Limited access to the internet only</li>
              <li><strong>IoT VLAN:</strong> Smart devices and sensors</li>
            </ul>
          `
        },
        {
          subtitle: "IP Addressing Scheme",
          content: `
            <p>Example of an organized structure:</p>
            <div class="bg-[#171313] p-4 rounded-lg border border-[#31A8FF]/30 mt-4">
              <p class="text-white font-semibold mb-2">🏢 IP Structure:</p>
              <pre class="text-gray-300 text-sm">
10.0.0.0/8 - Main Network
├── 10.10.0.0/24 - Administrative VLAN
├── 10.20.0.0/24 - Financial VLAN  
├── 10.30.0.0/24 - Operational VLAN
├── 10.40.0.0/24 - Guest VLAN
└── 10.50.0.0/24 - IoT VLAN
              </pre>
            </div>
          `
        }
      ]
    },
    {
      title: "Practical Implementation",
      content: "",
      subsections: [
        {
          subtitle: "Main Router Configuration",
          content: `
            <p>Essential steps:</p>
            <ol class="space-y-2 text-gray-300 list-decimal list-inside ml-4 mb-4">
              <li>Configure interfaces for each VLAN</li>
              <li>Implement DHCP for each segment</li>
              <li>Configure routing and NAT rules</li>
              <li>Enable logging for auditing</li>
              <li>Configure SNMP for monitoring</li>
            </ol>
          `
        },
        {
          subtitle: "Managed Switches and Port Security",
          content: `
            <p>Port-level security:</p>
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4 mb-4">
              <li>Port Security with MAC address binding</li>
              <li>Storm control to prevent excessive broadcasts</li>
              <li>BPDU guard to protect STP</li>
              <li>Port isolation for VLANs</li>
              <li>Auto-negotiation disabled on critical ports</li>
            </ul>
          `
        }
      ]
    },
    {
      title: "Security and Access Control",
      content: "",
      subsections: [
        {
          subtitle: "Firewall and Access Rules",
          content: `
            <p>Security policy implementation:</p>
            <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4 mb-4">
              <li>Inbound/outbound rules per VLAN</li>
              <li>Deep Packet Inspection (DPI)</li>
              <li>Intrusion Prevention System (IPS)</li>
              <li>Web content filtering</li>
              <li>Site-to-site VPN for branches</li>
            </ul>
          `
        },
        {
          subtitle: "Centralized Authentication",
          content: `
            <p>Active Directory Integration:</p>
            <ol class="space-y-2 text-gray-300 list-decimal list-inside ml-4 mb-4">
              <li>Install and configure Domain Controller</li>
              <li>Create user groups by department</li>
              <li>Implement Group Policy Objects (GPO)</li>
              <li>Configure Single Sign-On (SSO)</li>
              <li>Enable event auditing</li>
            </ol>
          `
        }
      ]
    },
    {
      title: "Monitoring and Maintenance",
      content: `
        <p>Essential tools for continuous administration:</p>
        <ul class="space-y-2 text-gray-300 list-disc list-inside ml-4 mb-4">
          <li><strong>PRTG Network Monitor:</strong> Comprehensive performance dashboard</li>
          <li><strong>Wireshark:</strong> Real-time packet analysis</li>
          <li><strong>Nagios:</strong> Proactive failure alerts</li>
          <li><strong>SolarWinds:</strong> Complete enterprise suite</li>
          <li><strong>Zabbix:</strong> Robust open-source solution</li>
        </ul>
      `,
      subsections: []
    }
  ];

  const relatedGuides = [
    {
      href: "/guides/rede-domestica",
      title: "Home Network Configuration",
      description: "Set up routers and Wi-Fi extenders for a residential environment."
    },
    {
      href: "/guides/troubleshooting-internet",
      title: "Internet Troubleshooting",
      description: "Solve connectivity and internet speed issues."
    }
  ];

  return (
    <GuideTemplate
      title={title}
      description={description}
      keywords={keywords}
      estimatedTime="45 minutes"
      difficultyLevel="Advanced"
      contentSections={contentSections}
      relatedGuides={relatedGuides}
      author="Voltris Technical Team"
      lastUpdated="January 2026"
    />
  );
}
