"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    RocketLaunchIcon,
    ChartBarIcon,
    CloudArrowUpIcon,
    BoltIcon,
    ClockIcon,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    PrinterIcon,
    WrenchScrewdriverIcon,
    CpuChipIcon
} from '@heroicons/react/24/outline';
import TechFloatingElements from '@/components/TechFloatingElements';

const services = [
    {
        id: "formatacao",
        title: "Computer Formatting",
        description: "Clean reinstall of Windows with backup and professional drivers.",
        icon: <BoltIcon className="w-8 h-8" />,
        price: "Starting at $19.90",
        redirect: "/format-windows",
        buttonText: "Format PC"
    },
    {
        id: "otimizacao",
        title: "PC Optimization",
        description: "Maximum performance without the need for formatting.",
        icon: <ChartBarIcon className="w-8 h-8" />,
        price: "Starting at $15.90",
        redirect: "/pc-optimization",
        buttonText: "Optimize PC"
    },
    {
        id: "remocao-virus",
        title: "Virus Removal",
        description: "Deep cleaning and shielding against digital threats.",
        icon: <ShieldCheckIcon className="w-8 h-8" />,
        price: "$7.90",
        redirect: "/services?open=virus_removal",
        buttonText: "Remove Viruses"
    },
    {
        id: "instalacao-programas",
        title: "Software Installation",
        description: "Configuration of Office, Adobe, Games, and more.",
        icon: <RocketLaunchIcon className="w-8 h-8" />,
        price: "Starting at $5.90",
        redirect: "/all-services/instalacao-de-programas",
        buttonText: "See Softwares"
    },
    {
        id: "recuperacao",
        title: "Data Recovery",
        description: "Rescue of lost or deleted files and partitions.",
        icon: <CloudArrowUpIcon className="w-8 h-8" />,
        price: "$20.00",
        redirect: "/services?open=recovery",
        buttonText: "Recover Data"
    },
    {
        id: "impressora",
        title: "Printer Support",
        description: "Driver installation and network configuration.",
        icon: <PrinterIcon className="w-8 h-8" />,
        price: "$9.90",
        redirect: "/services?open=printer_installation",
        buttonText: "Install Now"
    }
];

interface TecnicoClientProps {
    title?: string;
    description?: string;
    badge?: string;
}

export default function ItTechnicianClient({
    title = "IT Technical Support",
    description = "Elite remote technical support. We solve any problem on your Windows without you needing to leave home.",
    badge = "24/7 Remote Support"
}: TecnicoClientProps) {
    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30">

                {/* Background Effects (Global) */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
                <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#31A8FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>
                <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-[#8B31FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 w-full px-4">
                    <TechFloatingElements />

                    <div className="container mx-auto text-center flex-grow flex flex-col items-center justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-5xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-[#31A8FF]/30 transition-all cursor-default">
                                <span className="flex h-2 w-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94] animate-pulse"></span>
                                <span className="text-xs sm:text-sm font-medium text-white tracking-wide">{badge}</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight whitespace-pre-line uppercase italic">
                                {title}
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                                {description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                                >
                                    <WrenchScrewdriverIcon className="w-5 h-5" /> View Services
                                </button>
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <ClockIcon className="w-5 h-5" /> Immediate Support
                                </Link>
                            </div>
                        </motion.div>
                    </div>


                </section>

                {/* Support Grid Section */}
                <section id="servicos" className="py-24 px-4 bg-[#0A0A0F]/50 relative z-10 w-full border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Specialized Solutions</h2>
                            <p className="text-slate-400">100% online service with certified technicians.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="bg-[#121218] p-8 rounded-[32px] border border-white/5 hover:border-[#31A8FF]/30 transition-all group relative overflow-hidden flex flex-col"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/5 rounded-full blur-[60px] -mr-16 -mt-16 group-hover:bg-[#31A8FF]/10 transition-colors"></div>

                                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>

                                    <div className="mt-auto pt-4 flex flex-col gap-4">
                                        <div className="text-[#31A8FF] font-bold text-lg">{service.price}</div>
                                        <Link
                                            href={service.redirect}
                                            className="w-full py-4 rounded-xl text-center font-bold bg-white/5 text-white border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all"
                                        >
                                            {service.buttonText}
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features / Why Remote? Section */}
                <section className="py-24 px-4 relative z-10 w-full overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight uppercase italic">Why choose <span className="text-[#31A8FF]">remote</span> support?</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Total Security", desc: "You watch the entire repair in front of you in real-time." },
                                    { title: "Immediate Speed", desc: "No waiting for technicians to travel or queues in stores." },
                                    { title: "Lower Cost", desc: "Reduced prices since there are no fuel and logistics costs." },
                                    { title: "VOLTRIS Warranty", desc: "Post-service support included in all packages." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF94] flex items-center justify-center mt-1">
                                            <ShieldCheckIcon className="w-4 h-4 text-[#050510]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 uppercase tracking-tighter italic">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#31A8FF]/20 to-[#8B31FF]/20 rounded-[40px] blur-2xl animate-pulse"></div>
                            <div className="relative bg-[#121218] rounded-[40px] border border-white/10 p-10 shadow-2xl overflow-hidden group">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-[#31A8FF]/20 flex items-center justify-center text-[#31A8FF]">
                                        <CpuChipIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white italic uppercase tracking-tighter">Real-Time Diagnosis</h3>
                                </div>
                                <div className="space-y-4 font-mono text-sm text-slate-500">
                                    <div className="flex items-center gap-2"><span className="text-[#00FF94]">&gt;</span> <span>Initializing secure connection...</span></div>
                                    <div className="flex items-center gap-2"><span className="text-[#00FF94]">&gt;</span> <span>Scanning system registers...</span></div>
                                    <div className="flex items-center gap-2"><span className="text-[#31A8FF]">&gt;</span> <span>Drivers: 12 outdated items found.</span></div>
                                    <div className="flex items-center gap-2"><span className="text-[#FF4B6B]">&gt;</span> <span>Error 0x800 identified. Patching...</span></div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 3 }}
                                        className="h-[2px] bg-[#31A8FF] rounded-full mt-4"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common Problems Section - SEO Semantic Block */}
                <section className="py-24 px-4 bg-[#0A0A0F] relative z-10 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase italic tracking-tighter">Proven Technical Expertise</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">Our specialists handle the most complex software and infrastructure cases daily.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Extreme Slowness",
                                    desc: "Is your PC taking forever to turn on or freezing when opening basic programs? We optimize the Windows kernel for peak performance."
                                },
                                {
                                    title: "Blue Screen (BSOD)",
                                    desc: "Critical system errors (PAGE_FAULT, IRQL_NOT_LESS) diagnosed via memory dump analysis."
                                },
                                {
                                    title: "Viruses and Spyware",
                                    desc: "Surgical removal of malwares that steal data or mine cryptocurrencies in the background."
                                },
                                {
                                    title: "Networking & Wi-Fi",
                                    desc: "Connection issues, high ping in games, or misconfigured routers solved remotely."
                                }
                            ].map((prob, i) => (
                                <div key={i} className="bg-[#121218] p-8 rounded-2xl border border-white/5 hover:border-[#31A8FF]/20 transition-all">
                                    <div className="w-2 h-2 rounded-full bg-[#31A8FF] mb-4"></div>
                                    <h3 className="text-xl font-bold text-white mb-3 italic uppercase tracking-tighter">{prob.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                                        {prob.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto relative px-6 py-20 rounded-[48px] border border-white/5 bg-gradient-to-b from-[#121218] to-[#0A0A0F]">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 italic uppercase tracking-tighter">Solve Your Problem Now</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed font-light">Don't leave it for later. Small problems can become critical failures. Talk to a certified technician right now.</p>
                        <Link
                            href="/contact"
                            className="px-12 py-6 rounded-2xl bg-white text-black font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_50px_rgba(255,255,255,0.15)] inline-block uppercase italic"
                        >
                            Talk to a Technician
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
