'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
const supabase = createClient();
import {
  RocketLaunchIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  BoltIcon,
  ServerIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export default function SuporteWindowsPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleContratarAgora = async (plan: any) => {
    const { data: { session } } = await supabase.auth.getSession();
    let priceNumber = plan.price;
    if (typeof priceNumber === 'string') {
      priceNumber = Number(priceNumber.replace(/[^\d,\.]/g, '').replace(',', '.'));
    }
    if (!priceNumber || isNaN(priceNumber)) priceNumber = 0;
    const orderData = {
      planName: plan.name,
      planPrice: priceNumber,
      planFeatures: plan.features || [],
      planDescription: plan.description || '',
      plan_type: plan.id,
      service_name: `Windows Support: ${plan.name}`,
      service_description: plan.features ? plan.features.join(' | ') : plan.description,
      final_price: priceNumber,
      total: priceNumber,
      items: [
        {
          service_name: `Windows Support: ${plan.name}`,
          service_description: plan.features ? plan.features.join(' | ') : plan.description,
          price: priceNumber
        }
      ]
    };
    sessionStorage.setItem('pendingOrderData', JSON.stringify(orderData));
    if (!session) {
      window.location.href = `/login?redirect=/dashboard?pendingOrder=true`;
      return;
    }
    window.location.href = '/dashboard?pendingOrder=true';
  };

  const benefits = [
    {
      title: 'Priority Support',
      description: 'Technical support with fast response and defined SLA.',
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#FF4B6B]" />,
      bg: 'bg-[#FF4B6B]/10',
      border: 'hover:border-[#FF4B6B]/30'
    },
    {
      title: '24/7 Monitoring',
      description: 'Constant surveillance of system health and security.',
      icon: <ChartBarIcon className="w-8 h-8 text-[#8B31FF]" />,
      bg: 'bg-[#8B31FF]/10',
      border: 'hover:border-[#8B31FF]/30'
    },
    {
      title: 'Automatic Backup',
      description: 'Your critical data protected and encrypted in the cloud.',
      icon: <CloudArrowUpIcon className="w-8 h-8 text-[#31A8FF]" />,
      bg: 'bg-[#31A8FF]/10',
      border: 'hover:border-[#31A8FF]/30'
    },
    {
      title: 'Regular Optimization',
      description: 'Monthly preventive maintenance for maximum performance.',
      icon: <BoltIcon className="w-8 h-8 text-[#00FF94]" />,
      bg: 'bg-[#00FF94]/10',
      border: 'hover:border-[#00FF94]/30'
    }
  ];

  const plans = [
    {
      id: 'basico',
      name: 'Start',
      price: '$69.90',
      period: '/mo',
      icon: <ComputerDesktopIcon className="w-10 h-10 mb-6 text-[#31A8FF]" />,
      description: 'Ideal for home users and personal computers.',
      features: [
        'Remote support (9am - 6pm)',
        'Complete monthly optimization',
        'Virus and malware removal',
        'Basic file backup',
        'Service within 24h',
        'Support for up to 3 PCs'
      ],
      highlights: [
        'Time savings',
        'Extended PC lifespan'
      ],
      color: 'border-[#31A8FF]',
      btnColor: 'bg-[#31A8FF] hover:bg-[#31A8FF]/90'
    },
    {
      id: 'profissional',
      name: 'Business',
      price: '$109.90',
      period: '/mo',
      icon: <ServerIcon className="w-10 h-10 mb-6 text-[#8B31FF]" />,
      description: 'Perfect for freelancers and small businesses.',
      features: [
        'Priority support (8am - 8pm)',
        'Bi-weekly optimization',
        'Advanced malware protection',
        '100GB Cloud Backup',
        'Service within 4h',
        'Support for up to 6 PCs',
        'Monthly reports',
        'Software consulting'
      ],
      highlights: [
        'Productivity boost',
        'Reduced IT costs',
        'Secure data'
      ],
      popular: true,
      color: 'border-[#8B31FF]',
      btnColor: 'bg-gradient-to-r from-[#8B31FF] to-[#31A8FF] hover:shadow-lg hover:shadow-[#8B31FF]/25'
    },
    {
      id: 'empresarial',
      name: 'Enterprise',
      price: '$249.90',
      period: '/mo',
      icon: <ShieldCheckIcon className="w-10 h-10 mb-6 text-[#FF4B6B]" />,
      description: 'Complete solution for corporations and larger teams.',
      features: [
        'Remote & on-site support 24/7',
        'Weekly optimization',
        'Real-time protection',
        'Unlimited Cloud Backup',
        'Service within 1h',
        'Unlimited PCs (Upon Quote)',
        'Server management',
        'Team training'
      ],
      highlights: [
        'Maximum security',
        'Total availability',
        'Scalability'
      ],
      color: 'border-[#FF4B6B]',
      btnColor: 'bg-[#FF4B6B] hover:bg-[#FF4B6B]/90'
    }
  ];

  const faqs = [
    {
      question: 'How does remote support work?',
      answer: "We use enterprise-grade secure tools (AnyDesk/TeamViewer) with end-to-end encryption. You follow everything in real-time."
    },
    {
      question: 'What are the service hours?',
      answer: 'Varies by plan. The Start plan covers business hours, Business is extended, and Enterprise offers 24/7 coverage for emergencies.'
    },
    {
      question: 'Is the backup really safe?',
      answer: 'Absolutely. We use encrypted and redundant servers. Your data is our maximum priority.'
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30">

        {/* Background Effects */}
        <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-0"></div>
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#31A8FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#8B31FF]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 pt-20 z-10 block">

          <div className="max-w-6xl mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse"></span>
              <span className="text-xs font-bold text-white tracking-widest uppercase">Specialized Technical Support</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tight leading-tight"
            >
              Professional <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text animate-gradient-x">
                Windows Support
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12"
            >
              Keep your digital ecosystem secure, updated, and operating at peak performance with our certified team.
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
                View Plans
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
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#31A8FF] to-transparent"></div>
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
                  className={`group p-8 rounded-3xl bg-[#0A0A0F]/50 backdrop-blur-md border border-white/5 ${benefit.border} transition-all duration-300 hover:-translate-y-2`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="planos" className="py-24 px-4 relative z-10 bg-[#0A0A0F]/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#8B31FF] mb-4 uppercase">Investment</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Monthly Support Plans</h3>
              <p className="text-slate-400 max-w-2xl mx-auto">Choose the ideal level of protection and support for you or your company.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative p-8 rounded-[2.5rem] bg-[#0A0A0F] border ${plan.color}/30 hover:${plan.color} transition-all duration-300 h-full flex flex-col ${plan.popular ? 'shadow-[0_0_50px_rgba(139,49,255,0.15)] transform md:-translate-y-8 z-10' : 'border-white/5 hover:border-white/20'}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 left-0 flex justify-center -mt-4">
                      <span className="bg-[#8B31FF] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Recommended</span>
                    </div>
                  )}

                  <div className="mb-8">
                    {plan.icon}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price.split('.')[0]}</span>
                      <span className="text-xl text-slate-500">.{plan.price.split('.')[1]}</span>
                      <span className="text-sm text-slate-500 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                        <CheckIcon className="w-5 h-5 text-[#00FF94] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleContratarAgora(plan)}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${plan.btnColor}`}
                  >
                    Subscribe Now
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#1D1919]/50 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still have questions?</h2>
                <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                  Our team of specialists is ready to analyze your case and recommend the best solution.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/5511996716235', '_blank')}
                  className="px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all hover:scale-105"
                >
                  Talk to Consultant
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
} 
