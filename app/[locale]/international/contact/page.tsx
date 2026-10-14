"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { FiPhone, FiMail, FiMessageSquare, FiGlobe, FiClock, FiMapPin, FiUsers, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function InternationalContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    service: '',
    message: ''
  });

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Netherlands',
    'Belgium',
    'Switzerland',
    'Austria',
    'Portugal',
    'Japan',
    'Australia',
    'New Zealand',
    'Other country'
  ];

  const services = [
    'Remote Technical Support',
    'Website Creation',
    'Data Migration',
    'Network Configuration',
    'Cloud Support',
    'IT Consulting',
    'Other service'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `*NEW CONTACT - VOLTRIS GLOBAL*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Country:* ${formData.country}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `*Service of Interest:* ${formData.service || 'Not specified'}\n\n` +
      `*Message:*\n${formData.message || 'No message'}\n\n` +
      `*Sent at:* ${new Date().toLocaleString('en-US')}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511996716235?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      country: '',
      phone: '',
      service: '',
      message: ''
    });
    
    alert('Message sent! You will be redirected to WhatsApp.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#171313] via-[#171313] to-[#171313] header-spacing">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-purple-500/30">
                <FiGlobe className="text-purple-400 text-xl" />
                <span className="text-purple-300 font-medium">International Contact</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contact Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">From Anywhere in the World</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are here to help users living abroad. 
                Our team speaks multiple languages and understands the unique challenges 
                of people living outside their home country.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiClock className="text-purple-400 text-xl" />
                  <div>
                    <h3 className="text-white font-semibold">24/7 Availability</h3>
                    <p className="text-gray-400">Flexible hours according to your time zone</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiUsers className="text-blue-400 text-xl" />
                  <div>
                    <h3 className="text-white font-semibold">Bilingual Team</h3>
                    <p className="text-gray-400">Professionals fluent in English and Portuguese</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiGlobe className="text-green-400 text-xl" />
                  <div>
                    <h3 className="text-white font-semibold">Global Presence</h3>
                    <p className="text-gray-400">We serve clients in over 30 countries</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-gray-300 mb-2 font-medium">
                      Country of Residence *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select your country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-300 mb-2 font-medium">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Describe Your Need
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us what you need help with..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <FiSend className="text-xl" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Other Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Get in Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We are available across multiple channels for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center hover:border-purple-500/30 transition-all duration-300"
            >
              <FiPhone className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Phone / WhatsApp</h3>
              <p className="text-gray-400 mb-4">
                Direct support with our team
              </p>
              <div className="text-purple-300 font-medium">
                +55 11 99671-6235
              </div>
              <p className="text-sm text-gray-500 mt-2">
                WhatsApp available 24/7
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <FiMail className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-400 mb-4">
                For quotes and formal requests
              </p>
              <div className="text-blue-300 font-medium">
                contact@voltrisoptimizer.com
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Response within 2 hours
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 text-center hover:border-green-500/30 transition-all duration-300"
            >
              <FiMessageSquare className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Online Chat</h3>
              <p className="text-gray-400 mb-4">
                Immediate support through chat
              </p>
              <Link 
                href="#" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
              >
                Start Chat
              </Link>
              <p className="text-sm text-gray-500 mt-3">
                Available 24/7
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries We Serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Present in</span> Over 30 Countries
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We serve users living and working around the entire world
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              '🇺🇸 USA', '🇨🇦 Canada', '🇬🇧 UK', '🇩🇪 Germany',
              '🇫🇷 France', '🇪🇸 Spain', '🇮🇹 Italy', '🇳🇱 Netherlands',
              '🇧🇪 Belgium', '🇨🇭 Switzerland', '🇦🇹 Austria', '🇵🇹 Portugal',
              '🇯🇵 Japan', '🇦🇺 Australia', '🇳🇿 New Zealand', '🇦🇷 Argentina',
              '🇨🇱 Chile', '🇺🇾 Uruguay', '🇲🇽 Mexico', '🇨🇴 Colombia',
              '🇵🇪 Peru', '🇻🇪 Venezuela', '🇪🇨 Ecuador', '🇧🇴 Bolivia',
              '🇵🇾 Paraguay', '🇨🇷 Costa Rica', '🇵🇦 Panama', '🇬🇹 Guatemala',
              '🇭🇳 Honduras', '🇸🇻 El Salvador', '🇳🇮 Nicaragua', '🇧🇿 Belize'
            ].map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 text-center border border-gray-700 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{country.split(' ')[0]}</div>
                <div className="text-sm text-gray-300">{country.split(' ').slice(1).join(' ')}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}