import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiGlobe, FiUsers, FiClock, FiShield, FiDatabase, FiMonitor, FiCloud, FiBarChart2, FiPhone, FiMail, FiTrendingUp, FiPackage, FiCheckCircle, FiAward, FiLock } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Optimized SEO Metadata
export const metadata: Metadata = {
  title: "Premium IT Services for Expatriates and International Users | VOLTRIS",
  description: "Global technology company specializing in remote technical support for expatriates. PC formatting, system optimization, digital security, and international IT consulting with multi-language support.",
  keywords: [
    "remote pc formatting",
    "pc optimization for expatriates",
    "online it company international",
    "international remote tech support",
    "long distance computer maintenance",
    "remote formatting for users abroad",
    "windows optimization for expats",
    "tech support for international users",
    "global technology company",
    "online computer technician for expats",
    "it services for digital nomads",
    "specialized remote support",
    "system setup for remote work",
    "pc optimization for international gaming"
  ],
  authors: [{ name: "VOLTRIS" }],
  creator: "VOLTRIS",
  publisher: "VOLTRIS",
  metadataBase: new URL('https://www.voltrisoptimizer.com/international'),
  alternates: {
    canonical: '/international/services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.voltrisoptimizer.com/international/services',
    siteName: 'VOLTRIS Global',
    title: 'Premium IT Services for Users Abroad',
    description: 'Specialized IT support tailored for users living abroad. Remote PC formatting, system optimization, digital security, and 24/7 technical support.',
    images: [
      {
        url: '/images/services-international-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium IT Services for Expatriates and International Users - VOLTRIS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium IT Services for Expatriates and International Users',
    description: 'Specialized company in remote technical support for expatriates. High-quality support with international standards.',
    images: ['/images/services-international-twitter.jpg'],
    creator: '@voltris',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Optimized services with rich and semantic content
const optimizedServices = [
  {
    id: "formatacao",
    title: "International Remote Formatting",
    description: "Complete formatting of your computer with installation of essential programs, drivers, and optimized settings for use abroad. 100% remote process with a full backup of all your important data included.",
    icon: <FiDatabase className="text-5xl text-purple-400" />,
    features: [
      "Basic Formatting - System + Essential Drivers",
      "Standard Formatting - System + Drivers + Basic Programs",
      "Advanced Formatting - Full System + Office + Specialized Software",
      "Setup for international remote work",
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
    price: "€99.90 / $109.90",
    currency: "EUR/USD",
    estimatedTime: "2-4 hours"
  },
  {
    id: "otimizacao-pc",
    title: "PC Performance Optimization",
    description: "Complete optimization of your computer for maximum performance, especially useful for gamers and professionals demanding high speed. Detailed analysis and precise adjustments to significantly improve system responsiveness.",
    icon: <FiTrendingUp className="text-5xl text-blue-400" />,
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
    price: "€79.90 / $87.90",
    currency: "EUR/USD",
    estimatedTime: "1-2 hours"
  },
  {
    id: "suporte-tecnico",
    title: "Specialized Online Tech Support",
    description: "Specialized technical support in English and Portuguese for users worldwide. 24/7 support with flexible hours according to your time zone. Precise remote diagnostics and effective solutions for all technical issues.",
    icon: <FiUsers className="text-5xl text-green-400" />,
    features: [
      "Full remote diagnostic",
      "Technical troubleshooting",
      "Support for Windows, Mac, and Linux",
      "Software configuration",
      "Personalized technical guidance",
      "English and Portuguese support"
    ],
    benefits: [
      "Specialized support in your language",
      "Flexible hours according to your time zone",
      "Fast and effective solutions",
      "24/7 availability",
      "Certified professionals",
      "Competitive international pricing"
    ],
    price: "€29.90 / $32.90",
    currency: "EUR/USD",
    estimatedTime: "30-60 minutes"
  },
  {
    id: "configuracao-sistema",
    title: "System Setup for Work and Gaming",
    description: "Professional configuration of your operating system for maximum performance in remote work and gaming. Precise adjustments to optimize resources, improve stability, and increase productivity.",
    icon: <FiMonitor className="text-5xl text-yellow-400" />,
    features: [
      "Configuration for remote work",
      "Optimization for online games",
      "System performance fine-tuning",
      "Multi-monitor setup",
      "Hardware resource optimization",
      "Custom usage profile personalization"
    ],
    benefits: [
      "Maximum multitasking performance",
      "Optimized gaming experience",
      "Improved system stability",
      "Reduced power consumption",
      "Faster startup times",
      "Custom interface for your needs"
    ],
    price: "€59.90 / $65.90",
    currency: "EUR/USD",
    estimatedTime: "1-2 hours"
  }
];

export default function InternationalServicesOptimized() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171313] via-[#171313] to-[#171313] header-spacing">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30">
            <FiGlobe className="text-purple-400 text-xl" />
            <span className="text-purple-300 font-medium">International Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Premium IT Services</span> for Expatriates and Global Users
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            VOLTRIS is an international technology company specializing in offering high-quality remote technical support solutions. 
            With dedicated support in multiple languages, we solve PC formatting issues, system optimization, digital security, and more, 
            adapting our services to the specific needs of individuals and companies living and working globally.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiAward className="text-purple-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">International Quality</h3>
              <p className="text-gray-400 text-sm">Global enterprise standards combined with personalized multi-language support</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiLock className="text-green-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Guaranteed Security</h3>
              <p className="text-gray-400 text-sm">Encrypted connections and strict data privacy protocols in every session</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiClock className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">24/7 Global Support</h3>
              <p className="text-gray-400 text-sm">Continuous support with hours adapted to your local time zone worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Specialized Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {optimizedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FiCheckCircle className="text-green-400" />
                          {"What's included:"}
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-purple-400 mt-1">•</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <FiAward className="text-yellow-400" />
                          Key Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-green-400 mt-1">✓</span>
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-700">
                      <div>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                          {service.price}
                        </span>
                        <p className="text-sm text-gray-400">{service.currency}</p>
                        <p className="text-xs text-gray-500 mt-1">Estimated time: {service.estimatedTime}</p>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link
                          href={`/international/services/${service.id}`}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg text-sm"
                        >
                          Learn More
                        </Link>

                        <Link
                          href="/international/contact"
                          className="border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 text-sm"
                        >
                          Hire Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose International Remote Support?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiUsers className="text-purple-400" />
                  Certified Professionals
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Our team consists of internationally certified IT technicians with experience in multicultural environments and deep knowledge of global technology challenges.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiGlobe className="text-blue-400" />
                  Global Infrastructure
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We use international standard remote access tools and platforms, with globally distributed servers to ensure stable and secure connections regardless of your location.
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <FiShield className="text-green-400" />
                  Security and Privacy
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We maintain rigorous digital security standards, with end-to-end encryption on all connections and clear data privacy policies, ensuring your information remains protected.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Our Competitive Advantage
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Specialized Multi-language Support</h4>
                    <p className="text-gray-400 text-sm">We communicate clearly and naturally, avoiding language barriers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Cultural Understanding</h4>
                    <p className="text-gray-400 text-sm">We understand the specific needs and setups of expatriates worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Competitive International Pricing</h4>
                    <p className="text-gray-400 text-sm">Superior cost-benefit ratio compared to local computer shops abroad</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Flexible Time Adaptation</h4>
                    <p className="text-gray-400 text-sm">We adapt our service schedule to your local time zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Is it worth formatting a PC remotely?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Yes, remote formatting offers several benefits: you save time and money by avoiding travel, 
                receive specialized support in your language, have guaranteed backup of your important data, 
                and the process is performed by experienced professionals who understand international technical environments. 
                Additionally, post-formatting configuration is optimized specifically for your country of residence.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                How does long-distance PC optimization work?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We use secure, encrypted remote access tools to connect to your computer. 
                We perform a complete system analysis, identify unnecessary processes, clean temporary files, 
                optimize the Windows registry, adjust performance settings, and configure system resources to maximize efficiency. 
                The entire process is monitored in real-time with your authorization and approval.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Can I trust an online IT company?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Trust in online IT services depends on the company&apos;s credibility. VOLTRIS has years of experience 
                in the market, an internationally certified team, uses enterprise-standard remote access tools with end-to-end encryption, 
                and maintains a transparent data privacy policy. Moreover, we offer a satisfaction guarantee and post-service support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Premium Technological Experience?
          </h2>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            Our specialized team is prepared to offer high-quality technological solutions, 
            specifically adapted to the needs of international users and expatriates. 
            With exclusive support and international standards of excellence, we transform your technological challenges into efficient and reliable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/international/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiPhone className="text-xl" />
              Get in Touch
            </Link>

            <Link
              href="/international/quote"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiBarChart2 className="text-xl" />
              Request a Personalized Quote
            </Link>
          </div>
          
          <div className="text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <FiMail className="text-purple-400" />
              contact@voltrisoptimizer.com
            </p>
            <p className="mt-2">
              Specialized international support in multiple languages • 24/7 Technical Support
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}