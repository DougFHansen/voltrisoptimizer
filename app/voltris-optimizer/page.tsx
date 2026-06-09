'use client';

import Link from 'next/link';
import {
  Zap,
  Shield,
  TrendingUp,
  Download,
  Star,
  CheckCircle2,
  Users,
  Award,
  Clock,
  Play,
  Cpu,
  Activity,
  Wifi,
  Wrench
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notifyDownload } from '@/utils/notifications';

export default function VoltrisOptimizerPage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "FPS Increase",
      description: "Increase up to 25% FPS in games with specific optimizations for each title"
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: "Lag Reduction",
      description: "Eliminate stutter and reduce input lag by up to 40% for competitive gaming"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "CPU Optimization",
      description: "Advanced thread and priority management for better performance"
    },
    {
      icon: <Wifi className="w-8 h-8 text-cyan-500" />,
      title: "Network Optimization",
      description: "Reduce ping and improve connection for online gaming and streaming"
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Professional Gamer",
      text: "My frame rate increased by an average of 30 FPS after using Voltris Optimizer. Highly recommend!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Streamer",
      text: "My stream became much more stable and my PC doesn't crash anymore during long lives.",
      rating: 5
    },
    {
      name: "Michael Davis",
      role: "Business Owner",
      text: "I used it to optimize the company PCs and productivity increased considerably.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      features: [
        "Basic system optimization",
        "Startup acceleration",
        "Temporary file cleanup",
        "Forum support"
      ],
      cta: "Start for Free"
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      features: [
        "All basic optimizations",
        "Gaming FPS increase",
        "Network optimization",
        "Input lag reduction",
        "Priority support",
        "Monthly updates"
      ],
      cta: "Subscribe to Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "/month",
      features: [
        "All Pro features",
        "License for up to 10 PCs",
        "Web-based remote control",
        "Performance reports",
        "Dedicated support",
        "Custom configurations"
      ],
      cta: "Talk to Sales"
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#050510] to-gray-900 text-white pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-[url('/background-grid.svg')] opacity-10"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">PC Optimization Software</span><br />
                  Increase FPS and Performance
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Voltris Optimizer: The first Brazilian SaaS PC optimization software with remote control.
                  Increase FPS in games, optimize Windows and accelerate your computers.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/voltrisoptimizer"
                    onClick={() => notifyDownload('Landing Page CTA - Hero')}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    <Play className="w-5 h-5" />
                    Try for Free
                  </Link>
                  <Link
                    href="/buy-license"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all shadow-lg shadow-blue-500/20"
                  >
                    Subscribe to PRO
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>14 days free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>No card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span>Easy cancellation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-6 border border-gray-700/50 shadow-2xl">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] mb-4">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Voltris Optimizer Dashboard</h3>
                      <p className="text-gray-300 text-sm">Intuitive interface for complete performance control</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center">
                      <TrendingUp className="text-green-500 mb-2" size={24} />
                      <p className="font-bold">+25% FPS</p>
                      <p className="text-xs text-gray-400">Average increase</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Zap className="text-yellow-500 mb-2" size={24} />
                      <p className="font-bold">-40% Lag</p>
                      <p className="text-xs text-gray-400">Average reduction</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Clock className="text-blue-500 mb-2" size={24} />
                      <p className="font-bold">+60%</p>
                      <p className="text-xs text-gray-400">Speed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900/50 to-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">10k+</div>
                <p className="text-gray-400">Downloads</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">98%</div>
                <p className="text-gray-400">Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">100+</div>
                <p className="text-gray-400">Supported Games</p>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">24/7</div>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Why choose Voltris Optimizer?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Exclusive features that make the difference in your PC's performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur rounded-2xl p-6 text-center border border-gray-700/30 hover:border-[#8B31FF]/50 transition-all group">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/50 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Affordable Plans</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Choose the plan that best meets your needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-gray-800/30 backdrop-blur rounded-2xl p-8 border ${plan.popular ? 'border-[#8B31FF] relative shadow-lg shadow-[#8B31FF]/20' : 'border-gray-700/50'
                    } hover:border-[#8B31FF]/70 transition-all group`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#8B31FF] to-[#FF4B6B] text-white px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{plan.name}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text mb-2">{plan.price}</div>
                  <div className="text-gray-400 mb-6">{plan.period}</div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-500" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/voltrisoptimizer"
                    onClick={() => notifyDownload(`Pricing Plan CTA - ${plan.name}`)}
                    className={`block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${plan.popular
                        ? 'bg-gradient-to-r from-[#8B31FF] to-[#FF4B6B] hover:from-[#9B41FF] hover:to-[#FF5B7B] shadow-lg shadow-[#8B31FF]/30'
                        : plan.name === 'Free'
                          ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg shadow-green-500/20'
                          : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 border border-gray-600'
                      }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">What Our Users Say</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real results from those who have already optimized their PC
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur rounded-2xl p-6 border border-gray-700/30 hover:border-[#8B31FF]/50 transition-all group">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic group-hover:text-gray-200 transition-colors">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-900 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Related Services</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Combine with other services for even better results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/formatar-windows" className="bg-gray-800/30 backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:border-[#8B31FF]/50 transition-all group">
                <div className="flex items-start gap-4">
                  <Download className="w-8 h-8 text-blue-500 mt-1 group-hover:text-[#31A8FF] transition-colors" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">Windows Formatting</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Clean installation and optimized settings</p>
                    <span className="text-[#8B31FF] text-sm font-medium group-hover:translate-x-1 transition-transform">Learn more →</span>
                  </div>
                </div>
              </Link>

              <Link href="/otimizacao-pc" className="bg-gray-800/30 backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:border-[#8B31FF]/50 transition-all group">
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-green-500 mt-1 group-hover:text-[#8B31FF] transition-colors" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">PC Optimization</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Increase FPS in games and system speed</p>
                    <span className="text-[#8B31FF] text-sm font-medium group-hover:translate-x-1 transition-transform">Learn more →</span>
                  </div>
                </div>
              </Link>

              <Link href="/assistencia-tecnica" className="bg-gray-800/30 backdrop-blur rounded-2xl p-6 border border-gray-700/50 hover:border-[#8B31FF]/50 transition-all group">
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-purple-500 mt-1 group-hover:text-[#FF4B6B] transition-colors" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#31A8FF] group-hover:via-[#8B31FF] group-hover:to-[#FF4B6B] transition-all">Technical Support</h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Hardware repair and preventive maintenance</p>
                    <span className="text-[#8B31FF] text-sm font-medium group-hover:translate-x-1 transition-transform">Learn more →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#31A8FF]/10 via-[#8B31FF]/10 to-[#FF4B6B]/10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Ready to optimize your PC?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start for free and see results immediately
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/voltrisoptimizer"
                onClick={() => notifyDownload('Landing Page CTA - Bottom')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
              >
                <Download className="w-5 h-5" />
                Download Free Now
              </Link>
              <Link
                href="/demo"
                className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-bold py-4 px-8 rounded-xl text-center transition-all border border-gray-600"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
