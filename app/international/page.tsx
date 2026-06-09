"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from 'react';


import {
  FiMonitor,
  FiSettings,
  FiClock,
  FiBarChart2,
  FiDatabase,
  FiPrinter,
  FiShield,
  FiGlobe,
  FiTrendingUp,
  FiUsers,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCreditCard,
  FiCloud
} from 'react-icons/fi';
import { MonitorSmartphone, Laptop2, ShieldCheck, HardDrive, GaugeCircle, Database, Package, Printer, Globe, Clock } from "lucide-react";
import AnimatedSection from '@/components/AnimatedSection';
import TechFloatingElements from '@/components/TechFloatingElements';
import { FaWhatsapp, FaGlobeAmericas } from 'react-icons/fa';
import { motion } from 'framer-motion';

// International services with same structure but English content
const internationalServices = [
  {
    id: "suporte-remoto-global",
    title: "Global Remote Technical Support",
    description: "Specialized assistance in Portuguese for Brazilians in any country. 24/7 support with flexible hours matching your time zone.",
    iconType: "Globe",
    price: "From €29.90 / $32.90",
    buttonText: "Request Service",
    redirect: "/services?open=technical_support"
  },
  {
    id: "criacao-site-internacional",
    title: "Multilingual Website Creation",
    description: "Professional websites with multiple language support, optimized for international markets and integrated with global payment systems.",
    iconType: "MonitorSmartphone",
    price: "From €297.90 / $327.90",
    buttonText: "Create My Global Site",
    redirect: "/create-website"
  },
  {
    id: "migracao-dados",
    title: "International Data Migration",
    description: "Securely transfer your data between countries, cloud synchronization, and automated backup with global redundancy.",
    iconType: "Database",
    price: "€89.90 / $99.90",
    buttonText: "Migrate Data",
    redirect: "/services?open=data_migration"
  },
  {
    id: "configuracao-redes",
    title: "Global Network Configuration",
    description: "Optimization of international connections, VPN configuration, network security, and connectivity with Brazilian services from abroad.",
    iconType: "FiGlobe",
    price: "€69.90 / $76.90",
    buttonText: "Configure Network",
    redirect: "/services?open=network_configuration"
  },
  {
    id: "suporte-nuvem",
    title: "Cloud Service Support",
    description: "Assistance with Google Workspace, Microsoft 365, AWS, Azure, and other cloud services used by Brazilians abroad.",
    iconType: "FiCloud",
    price: "€49.90 / $54.90",
    buttonText: "Cloud Support",
    redirect: "/services?open=cloud_support"
  },
  {
    id: "consultoria-ti",
    title: "International IT Consulting",
    description: "Strategic technology planning for Brazilians working remotely or owning international businesses.",
    iconType: "FiBarChart2",
    price: "€149.90 / $164.90",
    buttonText: "Consult Specialist",
    redirect: "/services?open=consulting"
  }
];

export default function InternationalHomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to render icons based on type
  const renderIcon = (iconType: string) => {
    const iconProps = {
      size: 56,
      className: "mx-auto drop-shadow-sm"
    };

    switch (iconType) {
      case "MonitorSmartphone":
        return <MonitorSmartphone {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "Laptop2":
        return <Laptop2 {...iconProps} className={`${iconProps.className} text-[#8B31FF]`} />;
      case "ShieldCheck":
        return <ShieldCheck {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "HardDrive":
        return <HardDrive {...iconProps} className={`${iconProps.className} text-[#FF4B6B]`} />;
      case "GaugeCircle":
        return <GaugeCircle {...iconProps} className={`${iconProps.className} text-[#8B31FF]`} />;
      case "Database":
        return <Database {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "Package":
        return <Package {...iconProps} className={`${iconProps.className} text-[#8B31FF]`} />;
      case "Printer":
        return <Printer {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "Globe":
        return <Globe {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "FiGlobe":
        return <FiGlobe {...iconProps} className={`${iconProps.className} text-[#8B31FF]`} />;
      case "FiCloud":
        return <FiCloud {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
      case "FiBarChart2":
        return <FiBarChart2 {...iconProps} className={`${iconProps.className} text-[#8B31FF]`} />;
      default:
        return <Globe {...iconProps} className={`${iconProps.className} text-[#31A8FF]`} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050510] relative overflow-x-hidden pt-16 md:pt-20">
      {/* Global Ambient Background Effects (Noise Overlay on Top) */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>

      {/* Background Gradients (Fixed Behind) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#8B31FF]/30 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#31A8FF]/30 blur-[100px] mix-blend-screen" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technical Support for Brazilians Abroad",
            "provider": {
              "@type": "Organization",
              "name": "VOLTRIS",
              "url": "https://www.voltrisoptimizer.com"
            },
            "serviceType": "Remote Technical Support",
            "areaServed": [
              { "@type": "Country", "name": "United States" },
              { "@type": "Country", "name": "Portugal" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Canada" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "Ireland" },
              { "@type": "Country", "name": "Japan" },
              { "@type": "Place", "name": "Worldwide" }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Brazilian Expatriates",
              "geographicArea": {
                "@type": "Place",
                "name": "Worldwide"
              }
            },
            "offers": {
              "@type": "Offer",
              "price": "32.90",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Premium remote support starting at $32.90"
            }
          })
        }}
      />
      {/* Header - Using existing component */}
      <Header />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <TechFloatingElements />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30">
                <FaGlobeAmericas className="text-purple-400 text-xl" />
                <span className="text-purple-300 font-medium">For Brazilians Abroad</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Technical Support in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Portuguese</span>
                <br />for Brazilians Worldwide
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Specialized service for Brazilians living outside Brazil.
                Remote support in Portuguese, with flexible hours and full understanding
                of your international technological needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <FiPhone className="text-lg" />
                  Contact Us Now
                </Link>

                <Link
                  href="/services"
                  className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3"
                >
                  <FiSettings className="text-lg" />
                  View All Services
                </Link>
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <FiUsers className="text-3xl text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">+1,000</h3>
                <p className="text-gray-400 text-sm">Brazilians Served</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <FiGlobe className="text-3xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">30+ Countries</h3>
                <p className="text-gray-400 text-sm">Global Presence</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <FiClock className="text-3xl text-green-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">24/7</h3>
                <p className="text-gray-400 text-sm">Continuous Support</p>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#171313]/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">International</span> Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Technological solutions adapted specifically for the needs of Brazilians living and working outside Brazil
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className="mb-6">
                    {renderIcon(service.iconType)}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      {service.price}
                    </span>
                    <Link
                      href={service.redirect}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-xl border border-gray-600 transition-all duration-300"
              >
                <FiSettings className="text-lg" />
                View All International Services
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">International Service</span>
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                We understand the particularities of those living outside Brazil and offer truly adapted solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FiCreditCard className="text-4xl text-green-400" />,
                  title: "Payment in BRL (PIX)",
                  description: "Avoid exchange rates and taxes. Pay directly in BRL via PIX, Bank Slip, or Brazilian Card."
                },
                {
                  icon: <FiUsers className="text-4xl text-purple-400" />,
                  title: "Bilingual Team",
                  description: "Fluent Portuguese-speaking professionals experienced with international technological challenges"
                },
                {
                  icon: <FiGlobe className="text-4xl text-blue-400" />,
                  title: "Flexible Hours",
                  description: "Service adapted to your time zones, with 24/7 availability when necessary"
                },
                {
                  icon: <FiShield className="text-4xl text-green-400" />,
                  title: "Global Security",
                  description: "Data protection according to international legislations and Brazilian security standards"
                },
                {
                  icon: <FiClock className="text-4xl text-yellow-400" />,
                  title: "Immediate Response",
                  description: "Average response time of 15 minutes for urgent requests"
                },
                {
                  icon: <FiDatabase className="text-4xl text-red-400" />,
                  title: "International Backup",
                  description: "Secure storage in multiple global regions with guaranteed redundancy"
                },
                {
                  icon: <FiTrendingUp className="text-4xl text-indigo-400" />,
                  title: "Continuous Support",
                  description: "Post-service follow-up and proactive support to avoid future problems"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#171313] to-[#171313]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Solve Your Technological Problems?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Our specialized team is ready to help you, wherever you are in the world
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg"
              >
                <FiPhone className="text-xl" />
                Start Service
              </Link>

              <Link
                href="/contact"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
              >
                <FiBarChart2 className="text-xl" />
                Request Quote
              </Link>
            </div>

            <div className="mt-8 text-gray-400">
              <p className="flex items-center justify-center gap-2">
                <FiMail className="text-purple-400" />
                contact@voltrisoptimizer.com
              </p>
              <p className="mt-2 flex items-center justify-center gap-2">
                <FiPhone className="text-blue-400" />
                +55 11 99671-6235 (WhatsApp available)
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer - Using existing component */}
      <Footer />
    </div>
  );
}