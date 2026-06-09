'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FaUndoAlt, FaCalendarCheck, FaBan, FaHandHoldingUsd, FaFileContract, FaCheckCircle,
  FaExclamationCircle, FaShieldAlt, FaEnvelope, FaClock, FaHistory, FaGavel
} from 'react-icons/fa';

export default function ReembolsoCancelamento() {
  const lastUpdate = new Date().toLocaleDateString('en-US');

  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-[#050510] min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#31A8FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#8B31FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] flex items-center justify-center shadow-[0_0_40px_rgba(49,168,255,0.3)]">
              <FaUndoAlt className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
              Refund and <br /><span className="text-[#31A8FF]">Cancellation Policy</span>
            </h1>
            <p className="text-slate-400 font-medium bg-white/5 border border-white/10 rounded-full px-6 py-2 inline-block">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="grid gap-8">
            {/* Introduction */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">Voltris Commitment</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our refund and cancellation policy was developed to ensure your total satisfaction and transparency, in compliance with the <strong>Consumer Protection Code (CDC - Brazil)</strong> and best practices in the software market.
              </p>
            </section>

            {/* About Products and Services */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaFileContract className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">About Products and Services</h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  <strong>VOLTRIS</strong> sells software licenses for the <strong>Voltris Optimizer</strong> app, a digital Windows systems optimization tool focused on improving performance, reducing latency, and increasing computational productivity.
                </p>
                <p>
                  We also offer specialized remote technical support services for hardware and software diagnosis and optimization. All our products are delivered 100% digitally, via email and direct download from our official website.
                </p>
              </div>
            </section>

            {/* Right of Withdrawal */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 border-l-4 border-l-emerald-500 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-500 group-hover:scale-110 transition-transform">
                  <FaCalendarCheck className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">1. Right of Withdrawal</h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  According to Article 49 of the Consumer Protection Code (Brazil), for purchases made over the internet, the consumer has <strong>7 (seven) calendar days</strong>, from the date of receiving the product or signing up for the service, to withdraw from the purchase.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
                  <p className="flex items-center gap-3 text-white font-bold"><FaCheckCircle className="text-emerald-500" /> 100% refund of the amount paid.</p>
                  <p className="flex items-center gap-3 text-white font-bold"><FaCheckCircle className="text-emerald-500" /> No justification required.</p>
                  <p className="flex items-center gap-3 text-white font-bold"><FaCheckCircle className="text-emerald-500" /> Immediate license cancellation.</p>
                </div>
              </div>
            </section>

            {/* Software Refund Conditions */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                   <FaFileContract className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">2. Additional Software Rules</h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>As we sell digital goods (activation licenses), refunds after the 7-day period are analyzed on a case-by-case basis, following these guidelines:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <FaBan className="text-[#FF4B6B] mt-1 shrink-0" />
                    <div>
                      <strong className="text-white block">License Already Activated</strong>
                      <span className="text-sm text-slate-400">After the initial 7 days, if the license has already been activated and linked to hardware, the refund cannot be processed unless there is a proven technical failure in the product.</span>
                    </div>
                  </li>
                  <li className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <FaExclamationCircle className="text-[#31A8FF] mt-1 shrink-0" />
                    <div>
                      <strong className="text-white block">Technical Errors</strong>
                      <span className="text-sm text-slate-400">If the software presents serious incompatibility that prevents use and our technical support cannot resolve it within 48 business hours, a refund may be requested at any time.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Refund Process */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaHandHoldingUsd className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">3. Process and Deadlines</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#0A0A10] border border-white/5">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2"><FaEnvelope className="text-[#31A8FF]" /> How to request</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Send an email to <strong>contact@voltrisoptimizer.com</strong> with the title "Refund Request" providing your purchase email or order number.</p>
                </div>
                <div className="p-6 rounded-2xl bg-[#0A0A10] border border-white/5">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2"><FaClock className="text-[#8B31FF]" /> Refund Deadline</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">Once approved, the credit card refund may take from 1 to 2 bills depending on your bank. Pix (Brazilian fast payment) is refunded within 24h.</p>
                </div>
              </div>
            </section>

            {/* Plan Cancellation */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaBan className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">4. Plan Cancellation</h2>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>For recurring plans (subscriptions), you can cancel the renewal at any time through your dashboard:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3"><FaHistory className="text-[#8B31FF]" /> Access remains active until the end of the paid period.</li>
                  <li className="flex items-center gap-3"><FaBan className="text-[#FF4B6B]" /> There are no penalties for canceling renewal.</li>
                  <li className="flex items-center gap-3"><FaGavel className="text-[#31A8FF]" /> We reserve the right to cancel licenses in cases of proven fraud.</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
