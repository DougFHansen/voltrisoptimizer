'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BookOpen } from 'lucide-react';

export default function GlossarioPage() {

    // Centralized glossary terms.
    const terms = [
        {
            title: "BIOS / UEFI",
            color: "text-[#31A8FF]",
            desc: "The basic system that runs before Windows. This is where we configure the boot order (for formatting) and hardware adjustments like XMP for RAM."
        },
        {
            title: "Drivers",
            color: "text-[#31A8FF]",
            desc: "Programs that teach Windows how to communicate with your hardware (graphics card, sound, Wi-Fi). Outdated drivers are the #1 cause of blue screens and slowness."
        },
        {
            title: "Malware vs Virus",
            color: "text-[#FF4B6B]",
            desc: "Malware is any malicious software. A virus is a specific type that replicates itself. Today, the biggest danger is Ransomware, which hijacks your data and demands a ransom."
        },
        {
            title: "SSD (Solid State Drive)",
            color: "text-[#31FF8B]",
            desc: "Modern storage, 10x faster than old HDDs. If your PC takes more than 1 minute to turn on, the lack of an SSD is likely the culprit."
        },
        {
            title: "FPS / Hz",
            color: "text-[#E11D48]",
            desc: "FPS is how many frames your PC generates per second. Hz is how many frames your monitor can show. For competitive games, the higher, the better."
        },
        {
            title: "Bloatware",
            color: "text-[#FFB800]",
            desc: "Useless programs that come pre-installed on the PC (factory) or that we accidentally install along with other software. They consume RAM and processing for nothing."
        },
        {
            title: "Thermal Throttling",
            color: "text-[#FF4B6B]",
            desc: "When the processor or graphics card gets too hot (usually above 90°C) and intentionally slows down to avoid burning out. Causes sudden stutters in games."
        },
        {
            title: "XMP / DOCP",
            color: "text-[#31A8FF]",
            desc: "Automatic RAM overclocking profile. If you bought 3200MHz memory but didn't activate XMP in the BIOS, it's likely running at 2133MHz (much slower)."
        },
        {
            title: "Ping / Latency",
            color: "text-[#E11D48]",
            desc: "The time it takes for your PC to send data to the game server and receive a response. Measured in milliseconds (ms). High ping causes 'teleporting' and command delay."
        },
        {
            title: "Overclock",
            color: "text-[#8B31FF]",
            desc: "The practice of forcing a component (CPU/GPU) to run at a higher speed than the factory setting. Increases performance (FPS), but also increases heat and power consumption."
        },
        {
            title: "Bottleneck",
            color: "text-[#FFB800]",
            desc: "When one part limits another. Example: Having a super powerful graphics card (RTX 4090) with a weak processor (an old i3). The card stays idle waiting for the processor to work."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050510] font-sans selection:bg-[#31A8FF]/30">
            <Header />

            <main className="pt-24 px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumbs
                        items={[
                            { label: 'Technical Glossary', href: '/glossario' }
                        ]}
                    />

                    <div className="text-center mb-16 mt-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <BookOpen className="w-4 h-4 text-[#31A8FF]" />
                            <span className="text-xs font-bold text-slate-300 tracking-widest uppercase">Tech Dictionary</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Fundamental <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Glossary</span>
                        </h1>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Understand the technical terms we use in our optimization and maintenance guides.
                            Knowledge is the first step to extracting the most from your hardware.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {terms.map((term, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 hover:border-[#31A8FF]/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <h2 className={`${term.color} font-bold text-lg uppercase tracking-wider mb-4 group-hover:scale-105 transition-transform flex items-center gap-2`}>
                                    <span className="w-1.5 h-6 bg-current rounded-full opacity-50"></span>
                                    {term.title}
                                </h2>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {term.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-500 mb-8">
                            Didn't find the term you were looking for?
                        </p>
                        <a
                            href="https://wa.me/5511996716235"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-bold transition-all"
                        >
                            Ask a Specialist
                        </a>
                    </div>


                </div>
            </main>

            <Footer />
        </div>
    );
}
