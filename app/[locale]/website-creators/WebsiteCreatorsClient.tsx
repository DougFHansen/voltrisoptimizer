"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Globe, Target, Code, Palette, Zap, Award, CheckCircle } from 'lucide-react';
import TechFloatingElements from '@/components/TechFloatingElements';

const team = [
    {
        name: "Frontend Developers",
        description: "Specialists in React, Next.js, and TypeScript",
        icon: <Code className="w-8 h-8 text-[#31A8FF]" />
    },
    {
        name: "UI/UX Designers",
        description: "Creation of modern and intuitive interfaces",
        icon: <Palette className="w-8 h-8 text-[#8B31FF]" />
    },
    {
        name: "SEO Specialists",
        description: "Search engine optimization",
        icon: <Target className="w-8 h-8 text-[#00FF94]" />
    },
    {
        name: "Performance Analysts",
        description: "Fast and optimized websites",
        icon: <Zap className="w-8 h-8 text-[#FF4B6B]" />
    }
];

const services = [
    {
        title: "Institutional Websites",
        description: "Professional websites for companies",
        price: "Starting at R$ 997.90",
        icon: <MonitorSmartphone className="w-6 h-6 text-white" />,
        color: "from-[#31A8FF] to-[#00CCFF]"
    },
    {
        title: "E-commerce",
        description: "Complete online stores",
        price: "Starting at R$ 2,997.90",
        icon: <Globe className="w-6 h-6 text-white" />,
        color: "from-[#8B31FF] to-[#9D4EDD]"
    },
    {
        title: "Landing Pages",
        description: "Optimized conversion pages",
        price: "Starting at R$ 497.90",
        icon: <Target className="w-6 h-6 text-white" />,
        color: "from-[#FF4B6B] to-[#FF0055]"
    },
    {
        title: "Professional Blogs",
        description: "SEO-optimized blogs",
        price: "Starting at R$ 797.90",
        icon: <Code className="w-6 h-6 text-white" />,
        color: "from-[#00FF94] to-[#00CC88]"
    }
];

const expertise = [
    "React.js and Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WordPress",
    "Advanced SEO",
    "Web Performance",
    "Responsive Design",
    "E-commerce"
];

const benefits = [
    "Experienced team",
    "Projects delivered on time",
    "Post-launch support",
    "Clean and organized code",
    "Complete documentation",
    "Client training"
];

export default function WebsiteCreatorsClient() {
    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30">

                {/* Background Effects (Global) */}
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
                <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#31A8FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>
                <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-[#8B31FF]/5 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow max-w-full pointer-events-none z-0"></div>

                {/* Hero Section */}
                <section className="min-h-[100dvh] flex flex-col items-center justify-center relative z-10 w-full">
                    <TechFloatingElements />

                    <div className="container mx-auto px-4 text-center flex-grow flex flex-col items-center justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-5xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:border-[#31A8FF]/30 transition-all cursor-default">
                                <span className="flex h-2 w-2 rounded-full bg-[#31A8FF] shadow-[0_0_8px_#31A8FF] animate-pulse"></span>
                                <span className="text-xs sm:text-sm font-medium text-white tracking-wide">Premium Web Development</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Professional <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text animate-gradient-x">Website Creators</span>
                            </h1>

                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                Specialized team in transforming ideas into high-impact digital experiences.
                                Fast, beautiful, and conversion-focused websites.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/all-services/website-creation"
                                    className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                                >
                                    <MonitorSmartphone className="w-5 h-5" /> Start Project
                                </Link>
                                <Link
                                    href="/about"
                                    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <Award className="w-5 h-5" /> Meet the Team
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-white transition-colors"
                        onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-[#31A8FF] to-transparent"></div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-24 px-4 bg-[#0A0A0F] relative z-10 w-full border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { val: "5+", label: "Years of XP" },
                                { val: "100+", label: "Projects" },
                                { val: "100%", label: "Satisfaction" },
                                { val: "24/7", label: "Support" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center group p-6 rounded-2xl hover:bg-white/5 transition-all">
                                    <div className="text-4xl font-bold bg-gradient-to-br from-[#31A8FF] to-[#8B31FF] text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
                                    <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
                            <p className="text-slate-400">Specialists united to deliver the best.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div key={index} className="bg-[#121218] rounded-3xl p-8 text-center border border-white/5 hover:border-[#31A8FF]/30 transition-all group">
                                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <div className="p-4 rounded-2xl bg-white/5">
                                            {member.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{member.name}</h3>
                                    <p className="text-slate-400 text-sm">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="servicos" className="py-24 px-4 bg-[#0A0A0F] relative z-10 border-t border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Creation Services</h2>
                            <p className="text-slate-400">Complete solutions for your digital presence.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-[#121218] backdrop-blur-sm p-1 rounded-3xl border border-white/5 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-[#31A8FF]/10"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                                    <div className="relative h-full bg-[#121218] rounded-[22px] p-8 flex flex-col">

                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] shadow-lg mb-6`}>
                                            <div className="w-full h-full bg-[#16161E] rounded-[15px] flex items-center justify-center">
                                                {service.icon}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                        <div className="text-lg font-bold text-[#31A8FF] mb-6">{service.price}</div>
                                        <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expertise & Benefits */}
                <section className="py-24 px-4 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">Our Specialties</h2>
                                <div className="flex flex-wrap gap-4">
                                    {expertise.map((tech, index) => (
                                        <span key={index} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8">Why choose us?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-[#00FF94] mt-1 flex-shrink-0" />
                                            <span className="text-slate-300">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 px-4 bg-[#0A0A0F] border-t border-white/5 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to boost your business?
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Our team is ready to transform your idea into a professional and efficient website that generates real results.
                        </p>
                        <Link
                            href="/all-services/website-creation"
                            className="inline-flex px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                        >
                            Start Project
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
