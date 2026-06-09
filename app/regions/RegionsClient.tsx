"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    RocketLaunchIcon,
    BoltIcon,
    MapPinIcon,
    CheckBadgeIcon,
    GlobeAltIcon,
    ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import { Gamepad2, Wrench, Shield, Cpu } from 'lucide-react';
import TechFloatingElements from '@/components/TechFloatingElements';

interface RegionsClientProps {
    cityName: string;
    countryName: string;
    continentName: string;
}

export default function RegionsClient({ cityName, countryName, continentName }: RegionsClientProps) {
    const idx = (cityName.length) % 3;

    const heroTitles = [
        <h1 key="0" className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1] px-2">
            Remote IT <span className="inline-block py-1 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text italic">Services in {cityName}</span>
        </h1>,
        <h1 key="1" className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1] px-2">
            Professional PC <span className="inline-block py-1 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text italic">Optimization for {cityName}</span>
        </h1>,
        <h1 key="2" className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1] px-2">
            Premium IT <span className="inline-block py-1 bg-gradient-to-r from-[#8B31FF] via-[#31A8FF] to-[#FF4B6B] text-transparent bg-clip-text italic">Support in {cityName}</span>
        </h1>
    ];

    const heroDescriptions = [
        <p key="0" className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Computer maintenance, gaming PC optimization, and elite remote technical support. The best technology service for clients in <strong>{cityName}</strong>, {countryName}, available worldwide.
        </p>,
        <p key="1" className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Unleash the highest performance for your computer in <strong>{cityName}</strong>. 100% remote service for Windows formatting, virus removal, and FPS boost.
        </p>,
        <p key="2" className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Hardware and software diagnosis specialists providing online solutions directly to <strong>{cityName}</strong> through our secure remote infrastructure.
        </p>
    ];

    const localH2 = [
        <h2 key="0" className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            The Remote Support That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] to-[#8B31FF]">{cityName}</span> Trusts
        </h2>,
        <h2 key="1" className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Exclusive Online Service For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B31FF] to-[#FF4B6B]">{cityName}</span>
        </h2>,
        <h2 key="2" className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Cutting-Edge Remote Tech in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#31A8FF]">{cityName}</span>
        </h2>
    ];

    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30 pt-20">

                {/* Background Effects */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

                {/* Hero Section */}
                <section className="min-h-[90dvh] flex flex-col items-center justify-center relative z-10">
                    <TechFloatingElements />

                    <div className="container mx-auto px-4 text-center flex-grow flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-5xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                                <GlobeAltIcon className="w-4 h-4 text-[#31A8FF]" />
                                <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">Global Remote Support: {cityName}, {countryName}</span>
                            </div>

                            {heroTitles[idx]}
                            {heroDescriptions[idx]}

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    href="/services"
                                    className="px-10 py-5 rounded-2xl bg-white text-black font-extrabold text-xl hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                                >
                                    <BoltIcon className="w-6 h-6" /> Explore Services
                                </Link>
                                <a
                                    href={`https://wa.me/5511996716235?text=Hello! I am looking for remote IT support in ${cityName}.`}
                                    target="_blank"
                                    className="px-10 py-5 rounded-2xl bg-transparent border border-[#31A8FF] text-white font-extrabold text-xl hover:bg-[#31A8FF]/10 transition-all flex items-center justify-center gap-3"
                                >
                                    <ChatBubbleLeftRightIcon className="w-6 h-6" /> Contact via WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Remote Relevance Section */}
                <section className="py-24 px-4 bg-[#0A0A0F]/80 backdrop-blur-xl border-y border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {localH2[idx]}
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                We serve clients globally, bringing our expertise directly to <strong>{cityName}</strong> through highly secure remote connections. 
                                No physical visits required. We provide immediate assistance, saving you the hassle of commuting to a local repair shop.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Worldwide Availability", desc: "Access top-tier support from anywhere." },
                                    { title: "No Physical Commute", desc: "100% remote online assistance." },
                                    { title: "Performance Focus", desc: "Noticeable speed boosts guaranteed." },
                                    { title: "Secure Connections", desc: "Encrypted remote access protocols." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#31A8FF]/30 transition-all">
                                        <CheckBadgeIcon className="w-6 h-6 text-[#00FF94] shrink-0" />
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#31A8FF]/20 to-[#FF4B6B]/20 blur-[100px] opacity-30 animate-pulse"></div>
                            <div className="relative p-10 rounded-[40px] border border-white/10 bg-[#0D0D15]/80 backdrop-blur-2xl overflow-hidden group">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-slate-500 font-mono ml-2">remote_tunnel_{cityName.toLowerCase().replace(/\s+/g, '_')}.sh</span>
                                </div>
                                <div className="space-y-4 font-mono text-sm text-slate-400">
                                    <div className="flex items-center gap-2 transition-colors duration-300 group-hover:text-white"><span className="text-[#31A8FF]">&gt;</span> <span>Establishing secure connection to {cityName}...</span></div>
                                    <div className="flex items-center gap-2 transition-colors duration-300 group-hover:text-white"><span className="text-[#31A8FF]">&gt;</span> <span>Routing through {continentName} nodes.</span></div>
                                    <div className="flex items-center gap-2 text-green-400"><span className="text-green-400">✓</span> <span>Connection Secured. Latency: 42ms</span></div>
                                    <div className="flex items-center gap-2 text-[#31A8FF]"><span className="text-[#31A8FF]">&gt;</span> <span>Ready for system diagnostics.</span></div>
                                </div>
                                <div className="mt-8 h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="h-full bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Showcase */}
                <section className="py-24 px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Remote Services for {cityName}</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto font-light">Comprehensive digital solutions designed for performance and security, delivered globally.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "System Maintenance",
                                    icon: <Wrench className="w-8 h-8" />,
                                    desc: "We diagnose and resolve critical Windows errors and crashes completely online.",
                                    color: "from-blue-500 to-cyan-500"
                                },
                                {
                                    title: "Gaming Optimization",
                                    icon: <Gamepad2 className="w-8 h-8" />,
                                    desc: "Advanced tweaks to maximize FPS and reduce input lag for competitive gamers everywhere.",
                                    color: "from-purple-500 to-pink-500"
                                },
                                {
                                    title: "Malware Removal",
                                    icon: <Shield className="w-8 h-8" />,
                                    desc: "Deep system scans and virus removal to protect your digital identity and data.",
                                    color: "from-orange-500 to-red-500"
                                }
                            ].map((svc, i) => (
                                <div key={i} className="group relative p-8 rounded-[32px] bg-[#121218] border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col h-full overflow-hidden">
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 text-white inline-block w-fit group-hover:bg-white group-hover:text-black transition-all">
                                        {svc.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400">{svc.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-light flex-grow">{svc.desc}</p>
                                    <Link href="/services" className="mt-8 py-3 rounded-xl border border-white/10 text-white font-bold text-center hover:bg-white hover:text-black transition-all">Learn More</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-4 bg-[#05050A] border-t border-white/5 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                            <p className="text-slate-400 font-light">Common questions from our clients in {cityName}.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    q: `Can I receive support in ${cityName} remotely?`,
                                    a: "Yes, absolutely! We provide 100% remote services, meaning you don't need to leave your home or office. We connect to your system securely over the internet."
                                },
                                {
                                    q: "How does remote optimization work?",
                                    a: "You simply download a secure, temporary remote access client. Once connected, our experts perform diagnostics, tune your system, and fix issues while you watch."
                                },
                                {
                                    q: "Is remote PC repair secure?",
                                    a: "Yes. Our connections use enterprise-grade encryption. We only access your computer with your explicit permission, and you can end the session at any time."
                                },
                                {
                                    q: "Do you support clients internationally?",
                                    a: "Yes, our services are available worldwide. Regardless of your location, as long as you have a stable internet connection, we can assist you."
                                }
                            ].map((faq, i) => (
                                <details key={i} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer text-white font-bold">
                                        {faq.q}
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-slate-400 font-light leading-relaxed">
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-4 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative rounded-[4rem] overflow-hidden p-8 md:p-20 text-center bg-gradient-to-r from-[#1a1a2e] to-[#0F111A] border border-white/10 group"
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-[#31A8FF]/10 via-[#8B31FF]/10 to-[#FF4B6B]/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                    Ready to Optimize Your PC?<br className="hidden md:block" />
                                    <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Anywhere in the World</span>
                                </h2>
                                <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                    Don't waste time looking for a local repair shop. We solve everything via safe remote access. The best technical support for <strong>{cityName}</strong> is just one click away.
                                </p>
                                <Link
                                    href="/contact"
                                    className="bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] inline-block"
                                >
                                    Get Started Now
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
