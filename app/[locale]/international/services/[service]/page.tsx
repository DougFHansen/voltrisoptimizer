"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiClock, FiUsers, FiShield, FiBarChart2, FiPhone, FiMail, FiCheckCircle, FiDatabase, FiTrendingUp, FiMonitor, FiPackage, FiGlobe, FiCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

// International service data
const serviceData = {
  "formatacao": {
    title: "International Remote Formatting",
    description: "Complete formatting of your computer with installation of essential programs, drivers, and optimized settings for use abroad. 100% remote process with full data backup included.",
    icon: <FiDatabase className="text-6xl text-purple-400" />,
    features: [
      "Basic Formatting - System + Essential Drivers",
      "Standard Formatting - System + Drivers + Basic Programs",
      "Advanced Formatting - Full System + Office + Specialized Software",
      "Configuration for international remote work",
      "Regional software installation",
      "Full data backup included"
    ],
    benefits: [
      "Computer like new in any country",
      "Optimized configuration for your country of residence",
      "Regional software installed automatically",
      "Drivers updated for local hardware",
      "Post-formatting support included",
      "100% remote and secure process"
    ],
    process: [
      "Formatting scheduling",
      "Backup of your important data",
      "Complete remote formatting",
      "Operating system installation",
      "Drivers and software configuration",
      "Final testing and delivery"
    ],
    price: "€99.90 / $109.90",
    currency: "EUR/USD",
    estimatedTime: "2-4 hours"
  },
  "otimizacao-pc": {
    title: "PC Performance Optimization",
    description: "Complete optimization of your computer for maximum performance, especially useful for gamers and professionals demanding high speed. Detailed analysis and precise adjustments to significantly improve system responsiveness.",
    icon: <FiTrendingUp className="text-6xl text-blue-400" />,
    features: [
      "Basic Optimization - Cleaning and simple adjustments",
      "Standard Optimization - Cleaning + performance optimization",
      "Advanced Optimization - Deep cleaning + maximum performance",
      "Optimization for gaming and streaming",
      "System resource fine-tuning",
      "Detailed improvement report"
    ],
    benefits: [
      "30-50% increase in performance",
      "Faster and more responsive computer",
      "Fewer crashes and errors",
      "Better gaming experience",
      "Reduced system resource consumption",
      "Extended hardware lifespan"
    ],
    process: [
      "Process rendering and diagnostics",
      "Clearing of temporary files",
      "Windows services optimization",
      "System performance configuration",
      "Final performance testing",
      "System improvements report"
    ],
    price: "€79.90 / $87.90",
    currency: "EUR/USD",
    estimatedTime: "1-2 hours"
  },
  "correcao-erros": {
    title: "Windows / Mac Error Fixing",
    description: "Quick resolution of operating system errors, crashes, boot issues, and other technical problems affecting your daily workflow.",
    icon: <FiShield className="text-6xl text-green-400" />,
    features: [
      "System error fixing",
      "Corrupted file repair",
      "Boot issue resolution",
      "System recovery",
      "Complete remote diagnostics",
      "Resolution guarantee"
    ],
    benefits: [
      "Stable operating system",
      "Elimination of crashes and freezes",
      "Faster boot time",
      "Recovery of lost functionalities",
      "Prevention of future issues",
      "Specialized multilingual support"
    ],
    process: [
      "Remote problem diagnostics",
      "Identification of root cause",
      "Application of necessary fixes",
      "Functional testing",
      "Stability verification",
      "Solution report delivery"
    ],
    price: "€49.90 / $54.90",
    currency: "EUR/USD",
    estimatedTime: "30-60 minutes"
  },
  "remocao-virus": {
    title: "Virus and Malware Removal",
    description: "Complete removal of viruses, malware, spyware, and other malicious programs that compromise the security of your device.",
    icon: <FiShield className="text-6xl text-red-400" />,
    features: [
      "Full system scan",
      "Virus and malware removal",
      "Infected file cleanup",
      "Premium antivirus installation",
      "Continuous protection setup",
      "Threat elimination report"
    ],
    benefits: [
      "Computer 100% free of threats",
      "Protection against future attacks",
      "Restoration of encrypted files",
      "Improved system performance",
      "Strengthened browsing security",
      "Peace of mind in daily use"
    ],
    process: [
      "Full system scan",
      "Isolation of detected threats",
      "Virus and malware removal",
      "Infected file cleanup",
      "Premium protection installation",
      "Final security testing"
    ],
    price: "€39.90 / $43.90",
    currency: "EUR/USD",
    estimatedTime: "1-2 hours"
  },
  "erros-jogos": {
    title: "Game Error Fixing",
    description: "Experts in resolving issues with popular games like GTA, CS2, Cyberpunk, Valorant, League of Legends, and other international titles.",
    icon: <FiMonitor className="text-6xl text-yellow-400" />,
    features: [
      "GTA V/6 fixes - Boot errors and crashes",
      "CS2 fixes - VAC and connectivity issues",
      "Cyberpunk fixes - Bugs and performance problems",
      "Valorant fixes - Vanguard and network issues",
      "League of Legends fixes - Client errors",
      "Support for other popular games"
    ],
    benefits: [
      "Games working 100%",
      "Better performance and FPS",
      "Resolution of online issues",
      "Compatibility with regional systems",
      "Specialized gaming support",
      "Maximized playtime"
    ],
    process: [
      "Diagnostics of specific problem",
      "Identification of conflicts",
      "Application of technical fixes",
      "Testing of game functionality",
      "Optimization of settings",
      "Multiplayer connectivity verification"
    ],
    price: "€49.90 / $54.90",
    currency: "EUR/USD",
    estimatedTime: "30-60 minutes"
  },
  "instalacao-programas": {
    title: "Program and Software Installation",
    description: "Remote installation and configuration of essential programs, specialized software, and productivity tools for international use.",
    icon: <FiPackage className="text-6xl text-indigo-400" />,
    features: [
      "Basic Programs - Essential software installation",
      "Office Suite - Full Microsoft Office installation",
      "Specialized Programs - Industry-specific software",
      "Regional configuration - Adjusted for country of residence",
      "Licensing - Software activation assistance",
      "Basic usage training included"
    ],
    benefits: [
      "All programs installed and configured",
      "Software optimized for your country",
      "Licenses correctly activated",
      "Custom personalized settings",
      "Initial training included",
      "Post-installation support"
    ],
    process: [
      "Needs assessment",
      "Downloading required software",
      "Installation and configuration",
      "License activation",
      "Functionality testing",
      "Basic training"
    ],
    price: "€29.90 / $32.90",
    currency: "EUR/USD",
    estimatedTime: "30-60 minutes"
  },
  "recuperacao-dados": {
    title: "Lost Data Recovery",
    description: "Specialized recovery of files, documents, photos, and important data lost due to formatting, hard drive damage, or accidental deletion.",
    icon: <FiDatabase className="text-6xl text-orange-400" />,
    features: [
      "File Recovery - Accidentally deleted files",
      "HDD Recovery - Hard drives with bad sectors or physical damage",
      "Media Recovery - USB drives and memory cards",
      "System Recovery - Damaged operating systems",
      "Free initial analysis",
      "95%+ success rate"
    ],
    benefits: [
      "Recovery of critical data",
      "Free analysis before service",
      "Over 95% success rate",
      "100% secure process",
      "Guaranteed confidentiality",
      "Support throughout the entire process"
    ],
    process: [
      "Free initial analysis",
      "Damaged media diagnostics",
      "Specialized recovery process",
      "Verification of recovered data",
      "Delivery of recovered files",
      "Detailed report"
    ],
    price: "€99.90 / $109.90",
    currency: "EUR/USD",
    estimatedTime: "2-24 hours"
  },
  "configuracao-redes": {
    title: "Network and Internet Configuration",
    description: "Internet connection optimization, Wi-Fi network configuration, router security, and connectivity to international online services.",
    icon: <FiGlobe className="text-6xl text-teal-400" />,
    features: [
      "Router and Wi-Fi configuration",
      "Internet speed optimization",
      "Advanced network security",
      "VPN setup for secure access",
      "Connectivity to international services",
      "Performance monitoring"
    ],
    benefits: [
      "Faster and more stable internet",
      "Secure and protected Wi-Fi network",
      "Safe access to online services",
      "Better signal coverage and range",
      "Protection against intrusions",
      "Continuous network support"
    ],
    process: [
      "Analysis of current infrastructure",
      "Equipment configuration",
      "Parameter optimization",
      "Security implementation",
      "Connectivity testing",
      "Monitoring setup"
    ],
    price: "€69.90 / $76.90",
    currency: "EUR/USD",
    estimatedTime: "1-2 hours"
  },
  "suporte-nuvem": {
    title: "Cloud Services Support",
    description: "Specialized assistance with Google Workspace, Microsoft 365, Dropbox, iCloud, and other cloud services used internationally.",
    icon: <FiCloud className="text-6xl text-cyan-400" />,
    features: [
      "Google Workspace / Microsoft 365 configuration",
      "Account and permissions management",
      "Data migration to cloud environments",
      "Automated cloud backup",
      "Training on collaborative tools",
      "Multi-platform support"
    ],
    benefits: [
      "Access your data from anywhere",
      "Easy collaboration with your team",
      "Automatic and secure backup",
      "Integration with other services",
      "Savings on local storage",
      "Specialized 24/7 support"
    ],
    process: [
      "Needs assessment",
      "Choosing the ideal platform",
      "Account configuration",
      "Existing data migration",
      "Team training",
      "Backup implementation"
    ],
    price: "€49.90 / $54.90",
    currency: "EUR/USD",
    estimatedTime: "1-3 hours"
  },
  "consultoria": {
    title: "International IT Consulting",
    description: "Strategic technology planning for remote workers and international businesses of all sizes.",
    icon: <FiBarChart2 className="text-6xl text-pink-400" />,
    features: [
      "Technology infrastructure planning",
      "Remote work solutions analysis",
      "International business consulting",
      "Tools and platform selection",
      "Customized team training",
      "Continuous strategic support"
    ],
    benefits: [
      "Optimized technology infrastructure",
      "Solutions tailored to your business",
      "Reduced operational costs",
      "Increased productivity",
      "Specialized multilingual support",
      "Growth planning"
    ],
    process: [
      "Current needs analysis",
      "Infrastructure diagnostic",
      "Strategic plan development",
      "Solution implementation",
      "Team training",
      "Ongoing monitoring"
    ],
    price: "€149.90 / $164.90",
    currency: "EUR/USD",
    estimatedTime: "2-4 hours"
  }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const serviceId = service;

  const serviceObj = serviceData[serviceId as keyof typeof serviceData];

  if (!serviceObj) {
    return (
      <div className="min-h-screen bg-[#050510] relative overflow-x-hidden pt-16 md:pt-20">
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#8B31FF]/30 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#31A8FF]/30 blur-[100px] mix-blend-screen" />
        </div>
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service not found</h1>
          <Link
            href="/international/services"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
          >
            <FiArrowLeft />
            Back to Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-x-hidden pt-16 md:pt-20">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#8B31FF]/30 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#31A8FF]/30 blur-[100px] mix-blend-screen" />
      </div>
      <Header />

      {/* Breadcrumb */}
      <section className="py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-gray-400 text-sm">
            <Link href="/international" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/international/services" className="hover:text-purple-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{serviceObj.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {serviceObj.icon}
                <div>
                  <h1 className="text-4xl font-bold text-white">
                    {serviceObj.title}
                  </h1>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1 text-green-400">
                      <FiCheckCircle className="text-lg" />
                      <span className="text-sm">Available</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-400">
                      <FiClock className="text-lg" />
                      <span className="text-sm">{serviceObj.estimatedTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {serviceObj.description}
              </p>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Investment</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {serviceObj.price}
                  </span>
                  <span className="text-gray-400">{serviceObj.currency}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <FiUsers className="text-purple-400" />
                Service Benefits
              </h3>

              <ul className="space-y-3">
                {serviceObj.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {"What's included"}
              </h2>

              <ul className="space-y-4">
                {serviceObj.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Process
              </h2>

              <div className="space-y-6">
                {serviceObj.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to solve your problem?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our specialized team is ready to serve you with international quality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/international/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiPhone className="text-xl" />
              Request Service
            </Link>

            <Link
              href="/international/services"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiArrowLeft className="text-xl" />
              View Other Services
            </Link>
          </div>

          <div className="text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <FiMail className="text-purple-400" />
              contact@voltrisoptimizer.com
            </p>
            <p className="mt-2">
              Specialized support in English for global users
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}