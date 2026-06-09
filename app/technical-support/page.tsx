'use client';

import Link from 'next/link';
import {
  Wrench,
  Shield,
  Clock,
  CheckCircle2,
  Star,
  MapPin,
  Phone,
  MessageCircle,
  Monitor,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Download,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import JsonLd from '@/components/JsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function TechnicalSupportPage() {
  const services = [
    {
      icon: <HardDrive className="w-8 h-8 text-blue-500" />,
      title: "Hardware Repair",
      description: "Replacement of damaged parts, upgrades, and preventive maintenance",
      includes: ["HD/SSD Replacement", "RAM Upgrade", "Motherboard Repair", "Cooler Replacement"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-500" />,
      title: "Preventive Maintenance",
      description: "Cleaning, lubrication, and adjustments to extend equipment life",
      includes: ["Cooler Cleaning", "Thermal Paste Replacement", "Cable Verification", "Battery Calibration"]
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-500" />,
      title: "Configuration & Installation",
      description: "Installation of operating systems, programs, and advanced settings",
      includes: ["Windows Installation", "Driver Configuration", "Software Installation", "Network Setup"]
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: "Networking & Connectivity",
      description: "Wi-Fi setup, cabling, and resolution of connectivity issues",
      includes: ["Router Configuration", "Wi-Fi Range Extension", "Connection Problems", "Printer Sharing"]
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Certified Technicians",
      description: "Trained and experienced professionals for different brands and models"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Fast Service",
      description: "Diagnosis within 24 hours and repairs performed with agility"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-purple-500" />,
      title: "Quality Guarantee",
      description: "All services come with a warranty against execution defects"
    },
    {
      icon: <MapPin className="w-8 h-8 text-cyan-500" />,
      title: "Local Assistance",
      description: "On-site service or in our specialized laboratories"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Miller",
      role: "Client",
      text: "Excellent service! My laptop had overheating issues and they fixed it quickly. Highly recommend!",
      rating: 5,
      color: "from-[#FF4B6B] to-[#FF8F6B]"
    },
    {
      name: "Mark Johnson",
      role: "Client",
      text: "Needed emergency assistance for my desktop. Super professional team and fair price.",
      rating: 5,
      color: "from-[#8B31FF] to-[#B96BFF]"
    },
    {
      name: "Carla Thompson",
      role: "Client",
      text: "Did preventive maintenance on my computer and it's working like new again. Great job!",
      rating: 5,
      color: "from-[#31A8FF] to-[#6BA8FF]"
    }
  ];

  return (
    <>
      <Header />
      <JsonLd
        type="Service"
        data={{
          name: "IT Technical Support & Remote Maintenance",
          description: "Computer maintenance, hardware repair, and 24/7 remote technical support for hardware and software worldwide.",
          provider: {
            "@type": "Organization",
            "name": "VOLTRIS",
            "url": "https://www.voltrisoptimizer.com"
          },
          serviceType: "Technical Support",
          areaServed: { "@type": "Country", "name": "Worldwide" },
          offers: {
            "@type": "Offer",
            "price": "0.00",
            "priceCurrency": "USD",
            "description": "Free Estimate"
          }
        }}
      />
      <JsonLd
        type="FAQPage"
        data={{
          mainEntity: [
            {
              "@type": "Question",
              "name": "How does remote technical support work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Through secure remote access software, our technicians resolve software issues, viruses, and slowness without you leaving home."
              }
            },
            {
              "@type": "Question",
              "name": "Do you repair laptop hardware?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have an advanced laboratory for motherboard repairs, screen replacements, and general hardware components."
              }
            }
          ]
        }}
      />
      <div className="min-h-screen bg-[#050510] text-white">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4">
          {/* Background Ambience */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#8B31FF]/30 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#31A8FF]/30 blur-[100px] mix-blend-screen" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#31A8FF]/10 via-[#8B31FF]/10 to-[#FF4B6B]/10 border border-[#31A8FF]/30 backdrop-blur-md mb-4">
                  <span className="flex h-2 w-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94]"></span>
                  <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text tracking-wide">Specialized Technical Assistance</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight font-sans mb-6">
                  <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">IT Technical Assistance</span> <br className="hidden lg:block" />
                  <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl text-white/95">Remote and On-site Support Worldwide</span>
                </h1>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Specialized service in computer repair, maintenance, and technical support.
                  Instant remote assistance worldwide and on-site with certified technicians.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="https://wa.me/5511996716235"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-lg hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 backdrop-blur-sm overflow-hidden"
                  >
                    <span className="mr-2">Open Ticket</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="https://wa.me/5511996716235"
                    className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#050510] transition-all duration-200 bg-[#00FF94] rounded-lg hover:bg-[#00CC76] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF94]"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Chat on WhatsApp
                  </Link>
                </div>

                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>Free Estimate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>Original Parts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>3-Month Warranty</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-[#0A0A0F]/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] mb-4">
                        <Wrench className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Technical Assistance</h3>
                      <p className="text-gray-300 text-sm">Computer repair and maintenance</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Clock className="text-[#31A8FF]" size={24} />
                      <div>
                        <p className="font-bold text-white">Support</p>
                        <p className="text-sm text-slate-400">24/7</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="text-[#00FF94]" size={24} />
                      <div>
                        <p className="font-bold text-white">Warranty</p>
                        <p className="text-sm text-slate-400">3 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#050510] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">1,000+</div>
                <p className="text-slate-400">Repairs Done</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#8B31FF] via-[#31A8FF] to-[#FF4B6B] text-transparent bg-clip-text">99%</div>
                <p className="text-slate-400">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#FF4B6B] to-[#8B31FF] text-transparent bg-clip-text">7+</div>
                <p className="text-slate-400">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#FF4B6B] via-[#31A8FF] to-[#8B31FF] text-transparent bg-clip-text">24h</div>
                <p className="text-slate-400">Diagnostic Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#31A8FF] animate-pulse"></span>
                <span className="text-xs font-bold text-[#31A8FF] tracking-widest uppercase">Why choose our assistance?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Exclusive benefits that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">make the difference</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                What sets us apart in the technical support market
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-6">
                      <div className="w-16 h-16 rounded-xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center mx-auto group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg">
                        <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#31A8FF]">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{benefit.title}</h3>
                    <p className="text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-[#050510] px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Services</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Complete solutions for your computer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative bg-[#0A0A0F] border border-white/5 hover:border-[#8B31FF]/30 rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative h-full bg-[#0E0E12] rounded-[20px] p-8 flex flex-col items-start overflow-hidden">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <div className="w-16 h-16 rounded-xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg">
                          <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#31A8FF]">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{service.title}</h3>
                        <p className="text-slate-400 mb-4">{service.description}</p>

                        <ul className="space-y-2">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="text-[#00FF94]" size={16} />
                              <span className="text-sm text-slate-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Works</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A simple and transparent process for your repair
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Scheduling",
                  description: "Contact us and schedule your assistance"
                },
                {
                  step: 2,
                  title: "Diagnosis",
                  description: "We analyze your equipment to identify the problem"
                },
                {
                  step: 3,
                  title: "Estimate",
                  description: "We present the quote with no obligation"
                },
                {
                  step: 4,
                  title: "Repair",
                  description: "We perform the repair with warranty and quality"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#050510] px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                What Our Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Are Saying</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Real stories of satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all"></div>

                  <div className="flex items-center gap-1 mb-6 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-300 mb-8 relative z-10 italic">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{testimonial.name}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-[#050510] px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Services</span>
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Combine with other services for even better results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <Link href="/formatar-windows" className="group relative bg-[#0A0A0F] border border-white/5 hover:border-[#8B31FF]/30 rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative h-full bg-[#0E0E12] rounded-[20px] p-8 flex flex-col items-start overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#31A8FF]">
                      <Download className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">Windows Formatting</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Clean installation and optimized settings
                  </p>
                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[#31A8FF] text-sm font-medium">Learn more</span>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#31A8FF] group-hover:border-[#31A8FF] transition-all duration-300 shadow-md">
                      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/otimizacao-pc" className="group relative bg-[#0A0A0F] border border-white/5 hover:border-[#8B31FF]/30 rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative h-full bg-[#0E0E12] rounded-[20px] p-8 flex flex-col items-start overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#EAB308]">
                      <Zap className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">PC Optimization</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Increase FPS in games and system speed
                  </p>
                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[#31A8FF] text-sm font-medium">Learn more</span>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#31A8FF] group-hover:border-[#31A8FF] transition-all duration-300 shadow-md">
                      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/voltris-optimizer" className="group relative bg-[#0A0A0F] border border-white/5 hover:border-[#8B31FF]/30 rounded-3xl p-1 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative h-full bg-[#0E0E12] rounded-[20px] p-8 flex flex-col items-start overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-[#1A1A22]/50 backdrop-blur-sm border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#31A8FF]/10 group-hover:border-[#31A8FF]/20 transition-all duration-300 shadow-lg">
                    <div className="transform transition-transform duration-300 group-hover:scale-110 text-[#31A8FF]">
                      <Monitor className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">Voltris Optimizer</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Continuous optimization software
                  </p>
                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[#31A8FF] text-sm font-medium">Learn more</span>
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#31A8FF] group-hover:border-[#31A8FF] transition-all duration-300 shadow-md">
                      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need technical assistance?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us now and receive a free diagnosis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/5511996716235"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-lg hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 backdrop-blur-sm overflow-hidden"
              >
                <span className="mr-2">Open Ticket</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:+5511996716235"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#050510] transition-all duration-200 bg-[#00FF94] rounded-lg hover:bg-[#00CC76] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF94]"
              >
                <Phone className="mr-2" size={20} />
                (11) 99671-6235
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}