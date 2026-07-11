"use client";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    FiMonitor, FiShield, FiGlobe, FiCpu, FiHardDrive,
    FiDatabase, FiPackage, FiPrinter, FiLayout, FiActivity,
    FiCheck, FiZap, FiUserCheck, FiClock, FiStar, FiArrowRight, FiMail
} from 'react-icons/fi';
import AnimatedSection from '@/components/AnimatedSection';
import TechFloatingElements from '@/components/TechFloatingElements';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const services = [
    {
        id: "criacao-site",
        title: "Professional SEO-Optimized Web Creation",
        description: "We develop modern, fast, and responsive websites with a focus on performance, SEO, and conversion. Ideal for businesses seeking a professional digital presence, fast loading, and better Google rankings.",
        icon: FiLayout,
        color: "from-blue-500 to-cyan-500",
        price: "From $199.90",
        buttonText: "Quote Project",
        redirect: "/all-services/website-creation",
        highlight: true
    },
    {
        id: "suporte-windows",
        title: "Remote Windows Technical Support",
        description: "Full diagnosis, error correction, and removal of Windows slowness or failures. Remote assistance to solve system problems quickly and safely.",
        icon: FiMonitor,
        color: "from-indigo-500 to-purple-500",
        price: "From $69.90",
        buttonText: "View Plans",
        redirect: "/all-services/windows-support",
        highlight: true
    },
    {
        id: "otimizacao",
        title: "Remote Gaming PC Optimization",
        description: "Specialized service in gaming computer optimization, increasing FPS, reducing input lag, and improving overall system performance for games.",
        icon: FiCpu,
        color: "from-purple-500 to-pink-500",
        price: "From $15.90",
        buttonText: "Optimize Now",
        redirect: "/pc-optimization"
    },
    {
        id: "formatacao",
        title: "Remote PC Formatting & Windows Installation",
        description: "Clean computer formatting with secure backup, Windows installation, updated drivers, and ideal settings for performance and stability.",
        icon: FiHardDrive,
        color: "from-emerald-500 to-teal-500",
        price: "From $19.90",
        buttonText: "Schedule",
        redirect: "/services?service=format-windows"
    },
    {
        id: "recuperacao",
        title: "Professional Data Recovery",
        description: "Recovery of lost, deleted, or corrupted files using advanced data analysis and restoration techniques.",
        icon: FiDatabase,
        color: "from-orange-500 to-red-500",
        price: "Upon Quote",
        buttonText: "Analysis",
        redirect: "/services?service=recovery"
    },
    {
        id: "remocao_virus",
        title: "Digital Security, Antivirus & Malware Removal",
        description: "Deep scan for virus, malware, spyware, and rootkit removal, ensuring total computer security and protection.",
        icon: FiShield,
        color: "from-red-500 to-rose-500",
        price: "From $7.90",
        buttonText: "Clean PC",
        redirect: "/services?service=virus-removal"
    },
    {
        id: "instalacao-programas",
        title: "Essential Software & Program Installation",
        description: "Correct installation of essential programs, professional tools, and software necessary for daily computer use.",
        icon: FiPackage,
        color: "from-cyan-500 to-blue-500",
        price: "From $5.90",
        buttonText: "View Packs",
        redirect: "/all-services/software-installation"
    },
    {
        id: "instalacao_impressora",
        title: "Printer & Peripheral Configuration",
        description: "Remote configuration of printers, scanners, and connected devices, ensuring correct operation without errors.",
        icon: FiPrinter,
        color: "from-gray-500 to-slate-500",
        price: "From $9.90",
        buttonText: "Configure",
        redirect: "/services?service=printer"
    },
    {
        id: "correcao_windows",
        title: "Error Correction & Computer Troubleshooting",
        description: "Quick resolution of system errors, blue screens, program failures, and specific day-to-day problems.",
        icon: FiActivity,
        color: "from-amber-500 to-orange-500",
        price: "From $9.90",
        buttonText: "Resolve",
        redirect: "/services?service=windows-correction"
    },
    {
        id: "tecnico_local",
        title: "IT & Remote IT Specialist Technician",
        description: "Advanced assistance for hardware, infrastructure, networks, and complex technical solutions with specialized remote support.",
        icon: FiUserCheck,
        color: "from-indigo-600 to-blue-600",
        price: "Upon Quote",
        buttonText: "View Details",
        redirect: "/it-technician"
    }
];

export default function ServicosClient() {
    const router = useRouter();

    const handleHireService = async (serviceId: string, redirectUrl?: string) => {
        const { data: { session } } = await supabase.auth.getSession();
        if (redirectUrl) {
            router.push(redirectUrl);
            return;
        }
        if (!session) {
            router.push(`/login?redirect=/services?open=${serviceId}`);
        } else {
            router.push(`/services?open=${serviceId}`);
        }
    };

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
                                <span className="flex h-2 w-2 rounded-full bg-[#00FF94] shadow-[0_0_8px_#00FF94] animate-pulse"></span>
                                <span className="text-xs sm:text-sm font-medium text-white tracking-wide">Cutting-Edge Technology</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                                Technical Support<br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text animate-gradient-x">
                                    Remote IT Services Global
                                </span>
                            </h1>

                            <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-6 tracking-wide">
                                PC Formatting, Computer Optimization, Windows Support & Professional Digital Solutions
                            </h2>

                            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                We offer professional remote technical support services for IT, serving clients who need to solve computer problems quickly, securely, and online. We work with PC formatting, performance optimization, error correction, digital security, program installation, and advanced technology solutions, all with specialized remote service.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => document.getElementById('servicos-lista')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2"
                                >
                                    <FiMonitor className="w-5 h-5" /> Explore Services
                                </button>
                                <a
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                                >
                                    <FiMail className="w-5 h-5" /> Talk to a Specialist
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Catalog Section */}
                <section id="servicos-lista" className="py-24 px-4 bg-[#0A0A0F] relative z-10 w-full">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <AnimatedSection key={service.id} delay={index * 0.05}>
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.01 }}
                                        className="group relative h-full bg-[#121218] rounded-3xl p-1 overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-[#31A8FF]/10"
                                    >
                                        {/* Gradient Border on Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl`}></div>
                                        <div className="absolute inset-0 bg-[#121218] m-[1px] rounded-[23px] z-0"></div>

                                        {/* Card Content */}
                                        <div className="relative z-10 p-7 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] shadow-lg`}>
                                                    <div className="w-full h-full bg-[#16161E] rounded-[15px] flex items-center justify-center">
                                                        <service.icon className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                                {service.highlight && (
                                                    <span className="bg-white/5 border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">{service.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="border-t border-white/5 pt-6 mt-auto">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-white font-semibold">{service.price}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleHireService(service.id, service.redirect.startsWith('/services?open=') ? undefined : service.redirect)}
                                                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black"
                                                >
                                                    {service.buttonText}
                                                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 px-4 border-t border-white/5 bg-[#050510] relative overflow-hidden w-full">
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why choose our remote technical support?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#31A8FF]/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#31A8FF]/10 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <FiShield className="w-10 h-10 text-[#31A8FF] mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">Locked-in Warranty</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    If we don't fix the problem, you don't pay. Transparent service, secure and without fine print.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#8B31FF]/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B31FF]/10 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <FiZap className="w-10 h-10 text-[#8B31FF] mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">Extreme Speed</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Service started in minutes, with agile remote technical support to resolve problems quickly.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#121218] p-8 rounded-3xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B6B]/10 rounded-full blur-[60px] -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50"></div>
                                <FiUserCheck className="w-10 h-10 text-[#FF4B6B] mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3">Real Specialists</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    No robots. You speak directly with certified technicians and experts in computing and technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
