"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  DocumentTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  CloudArrowDownIcon,
  CheckCircleIcon,
  StarIcon,
  ComputerDesktopIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

const officePlans = [
  {
    id: "office-365",
    title: "Office 365",
    description: "Complete installation of the world's most powerful productivity suite.",
    icon: <DocumentTextIcon className="w-8 h-8" />,
    price: "$29.90",
    features: [
      "Full Office 365 Installation",
      "Word, Excel, PowerPoint",
      "Corporate Outlook",
      "1TB OneDrive Cloud",
      "Teams & Skype for Business",
      "Automatic Updates",
      "30-Day Technical Support"
    ],
    plan_type: "Office 365"
  }
];

export default function InstalacaoOfficePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const benefits = [
    {
      title: '24/7 Remote Setup',
      description: 'Technical implementation via secure remote access, no travel required.',
      icon: <ClockIcon className="w-6 h-6 text-[#FF4B6B]" />,
      bg: "bg-[#FF4B6B]/10"
    },
    {
      title: 'Total Security',
      description: 'Validated installation protocols, free from malware.',
      icon: <ShieldCheckIcon className="w-6 h-6 text-[#8B31FF]" />,
      bg: "bg-[#8B31FF]/10"
    },
    {
      title: 'Performance',
      description: 'Post-installation optimization for maximum startup speed.',
      icon: <DocumentTextIcon className="w-6 h-6 text-[#31A8FF]" />,
      bg: "bg-[#31A8FF]/10"
    },
    {
      title: 'Cloud Ready',
      description: 'Initial OneDrive configuration to protect your data.',
      icon: <CloudArrowDownIcon className="w-6 h-6 text-[#00FF94]" />,
      bg: "bg-[#00FF94]/10"
    }
  ];

  const faqs = [
    {
      question: 'How does remote installation work?',
      answer: "We use encrypted remote access software (AnyDesk/TeamViewer). You authorize the access and follow the entire process in real-time on your screen."
    },
    {
      question: 'Is the license included?',
      answer: 'We perform the technical installation and configuration service. The software license must be purchased separately or linked to your Microsoft account.'
    },
    {
      question: 'Does it work on Mac or only Windows?',
      answer: 'We perform the installation in both Windows and macOS environments, ensuring the best performance on both systems.'
    },
    {
      question: 'Is it safe?',
      answer: 'Absolutely. Our connection is point-to-point, and we do not access any personal files; we only perform the installation of the contracted software.'
    }
  ];

  const handleContratarAgora = async (plan: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    let priceNumber = plan.price;
    if (typeof priceNumber === 'string') {
      priceNumber = Number(priceNumber.replace(/[^\d,\.]/g, '').replace(',', '.'));
    }
    if (!priceNumber || isNaN(priceNumber)) priceNumber = 0;
    const orderData = {
      planName: plan.title,
      planPrice: priceNumber,
      planFeatures: plan.features || [],
      planDescription: plan.description || '',
      plan_type: plan.plan_type || plan.title,
      service_name: `Office Installation: ${plan.title}`,
      service_description: plan.features ? plan.features.join(' | ') : plan.description,
      final_price: priceNumber,
      total: priceNumber,
      items: [
        {
          service_name: `Office Installation: ${plan.title}`,
          service_description: plan.features ? plan.features.join(' | ') : plan.description,
          price: priceNumber
        }
      ]
    };
    sessionStorage.setItem('pendingOrderData', JSON.stringify(orderData));
    if (!session) {
      window.location.href = `/login?redirect=/dashboard&pendingOrder=true`;
      return;
    }
    window.location.href = '/dashboard?pendingOrder=true';
  };

  return (
    <>
      <Header />
      <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#FF4B6B]/30">

        {/* Background Effects */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
        <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-[#FF4B6B]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
        <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B31FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-20 z-10 block">

          <div className="max-w-6xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4B6B] animate-pulse"></span>
              <span className="text-xs font-bold text-[#FF4B6B] tracking-widest uppercase">Professional Setup</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight leading-tight"
            >
              Microsoft <span className="bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">Office</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10"
            >
              Transform your productivity with professional installation of the most complete suite on the market. Word, Excel, PowerPoint, and more ready for use.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-32"
            >
              <button
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
              >
                Start Installation
              </button>
            </motion.div>


            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF4B6B] to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0A0A0F]/50 p-8 rounded-3xl backdrop-blur-md border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planos" className="py-24 px-4 relative z-10 bg-[#0A0A0F]/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#FF4B6B] mb-4 uppercase">Complete Package</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">Premium Installation</h3>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {officePlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="group relative bg-[#0A0A0F] border border-[#FF4B6B]/30 p-8 md:p-12 rounded-[2.5rem] overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF4B6B]/10 blur-[100px] rounded-full pointer-events-none"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4B6B] to-[#8B31FF] flex items-center justify-center text-white">
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                      </div>
                      <p className="text-slate-400 mb-8 max-w-lg">{plan.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircleIcon className="w-5 h-5 text-[#FF4B6B]" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6 min-w-[200px] border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-8">
                      <div className="text-center md:text-right">
                        <span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">One-Time Payment</span>
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                      </div>
                      <button
                        onClick={() => handleContratarAgora(plan)}
                        className="w-full py-4 px-8 bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(255,75,107,0.4)] transition-all hover:scale-105"
                      >
                        Hire Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#1D1919]/50 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-[3rem] overflow-hidden p-12 text-center bg-gradient-to-b from-[#1a1a2e] to-[#0A0A0F] border border-white/10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need to install other software?</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  We install any professional software. Autodesk, Adobe, Corel, and much more.
                </p>
                <Link href="/all-services/software-installation">
                  <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all">
                    View Other Programs
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 
