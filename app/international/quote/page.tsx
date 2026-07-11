import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiBarChart2, FiUser, FiMail, FiPhone, FiMessageSquare, FiClock, FiCheckCircle, FiAward, FiGlobe, FiShield, FiTrendingUp } from 'react-icons/fi';

// Optimized SEO Metadata for international quotes
export const metadata: Metadata = {
  title: "Request a Personalized Quote for International IT Services | VOLTRIS",
  description: "Get a personalized quote for international IT services. Specialized support in English and Portuguese for expatriates. Remote formatting, PC optimization, technical support, and more.",
  keywords: [
    "international IT services quote",
    "IT services for expats quote",
    "free remote formatting quote",
    "PC optimization for expatriates price",
    "international technical support quote",
    "global technology company",
    "computing services for expats",
    "personalized international IT quote",
    "IT service prices for travelers",
    "free remote technical consultation"
  ],
  authors: [{ name: "VOLTRIS" }],
  creator: "VOLTRIS",
  publisher: "VOLTRIS",
  metadataBase: new URL('https://www.voltrisoptimizer.com/international'),
  alternates: {
    canonical: '/international/quote',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.voltrisoptimizer.com/international/quote',
    siteName: 'VOLTRIS Global',
    title: 'Request a Personalized Quote for International IT Services',
    description: 'Free and personalized quote for international IT services. Specialized support for expatriates worldwide.',
    images: [
      {
        url: '/images/quote-international-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Request a Quote for International Services - VOLTRIS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personalized Quote for International IT Services',
    description: 'Get a free quote for international IT services with multi-language support.',
    images: ['/images/quote-international-twitter.jpg'],
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

export default function QuoteInternationalPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171313] via-[#171313] to-[#171313] header-spacing">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30">
            <FiBarChart2 className="text-purple-400 text-xl" />
            <span className="text-purple-300 font-medium">Personalized Quote</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Free and Personalized Quote</span> for International Services
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Receive a detailed and personalized quote for the IT services you need. 
            Our team specializing in support for expatriates will analyze your needs 
            and provide a complete proposal with competitive prices and special conditions for international clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiAward className="text-purple-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">No Obligation</h3>
              <p className="text-gray-400 text-sm">Free quote with no requirement to hire</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiClock className="text-blue-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-400 text-sm">Feedback within 24 business hours with a detailed proposal</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <FiShield className="text-green-400 text-3xl mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Warranty</h3>
              <p className="text-gray-400 text-sm">30-day validity with special conditions for expats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Request Your Personalized Quote
            </h2>
            
            <p className="text-gray-400 mb-8">
              Contact us through the channels below to receive a personalized quote:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                <FiMail className="text-purple-400 text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-400 text-sm sm:text-base">quote@voltrisoptimizer.com</p>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                <FiPhone className="text-blue-400 text-2xl mb-3 mx-auto" />
                <h4 className="text-white font-semibold mb-2">WhatsApp</h4>
                <p className="text-gray-400 text-sm sm:text-base">+55 11 99671-6235</p>
              </div>
            </div>
            
            <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 text-left">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-purple-400" />
                Special Conditions for Expats
              </h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Special 15% discount for first-time services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Priority support in convenient time zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Payment in EUR/USD/BRL with flexible conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Extended 60-day hardware/software warranty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Request a Quote with VOLTRIS?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiAward className="text-4xl text-purple-400" />,
                title: "Total Transparency",
                description: "Full breakdown of all services, prices, and conditions before any commitment"
              },
              {
                icon: <FiShield className="text-4xl text-blue-400" />,
                title: "Guaranteed Security",
                description: "Proposals with written guarantee and data protection according to international laws"
              },
              {
                icon: <FiClock className="text-4xl text-green-400" />,
                title: "Immediate Response",
                description: "Analysis and feedback within 24 business hours with a personalized proposal"
              },
              {
                icon: <FiUser className="text-4xl text-yellow-400" />,
                title: "Personalized Service",
                description: "Specialized professionals addressing the unique needs of expatriates"
              },
              {
                icon: <FiGlobe className="text-4xl text-red-400" />,
                title: "International Flexibility",
                description: "Payment in international currencies and adaptation to the particularities of each country"
              },
              {
                icon: <FiTrendingUp className="text-4xl text-indigo-400" />,
                title: "Special Conditions",
                description: "Exclusive discounts and benefits for international clients"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Your Personalized Quote?
          </h2>
          <p className="text-gray-300 text-xl mb-8 leading-relaxed">
            Our specialized team is ready to analyze your needs and provide 
            a complete and competitive proposal, specifically adapted to your 
            situation as an expatriate or international user.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link 
              href="/international/contact" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiPhone className="text-xl" />
              Direct Contact
            </Link>
            
            <Link 
              href="/international/services" 
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <FiBarChart2 className="text-xl" />
              View All Services
            </Link>
          </div>
          
          <div className="text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <FiMail className="text-purple-400" />
              quote@voltrisoptimizer.com
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Specialized support in multiple languages • Feedback within 24 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}