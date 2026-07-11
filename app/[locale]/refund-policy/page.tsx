'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  FaUndo, FaMoneyBillWave, FaCalendarAlt, FaCheckCircle, FaExclamationTriangle,
  FaCreditCard, FaEnvelope, FaClock, FaFileInvoice, FaShieldAlt, FaHeadset,
  FaPercentage, FaTimesCircle, FaBalanceScale, FaThumbsUp, FaCopy, FaWhatsapp
} from 'react-icons/fa';

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <div className="pt-32 pb-20 bg-[#050510] min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#31A8FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B31FF]/5 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] flex items-center justify-center shadow-[0_0_40px_rgba(139,49,255,0.3)]">
              <FaUndo className="text-4xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Refund & Cancellation Policy
            </h1>
            <p className="text-slate-400 font-medium bg-white/5 border border-white/10 rounded-full px-6 py-2 inline-block">
              Last updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaCalendarAlt className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">1. 7-Day Money-Back Guarantee</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-4">
                We offer a <strong className="text-white">7-day money-back guarantee</strong> for all our services. If you are not satisfied with the results of our work, you can request a full refund within 7 days from the date of purchase.
              </p>
              <div className="bg-gradient-to-r from-[#31A8FF]/10 to-[#8B31FF]/10 border border-[#31A8FF]/20 rounded-2xl p-5">
                <p className="text-slate-300 text-sm flex items-start gap-3">
                  <FaCheckCircle className="text-[#31A8FF] mt-0.5 flex-shrink-0" />
                  No questions asked. No bureaucracy. Just send us a message and we will process your refund promptly.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaMoneyBillWave className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">2. How to Request a Refund</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                To request a refund, simply contact us through one of the channels below:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="mailto:contact@voltristech.com.br" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#31A8FF]/30 transition-all group/card">
                  <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF] group-hover/card:scale-110 transition-transform">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-slate-400 text-sm">contact@voltristech.com.br</p>
                  </div>
                </a>
                <a href="https://wa.me/5511996716235" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366]/30 transition-all group/card">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover/card:scale-110 transition-transform">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <p className="text-slate-400 text-sm">+55 (11) 99671-6235</p>
                  </div>
                </a>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaClock className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">3. Refund Processing Time</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-lg">
                  Once your refund request is approved, the amount will be returned within:
                </p>
                <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-300">
                      <FaCheckCircle className="text-[#31A8FF]" />
                      <span><strong className="text-white">Credit cards:</strong> 5-10 business days (depending on your bank)</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <FaCheckCircle className="text-[#8B31FF]" />
                      <span><strong className="text-white">PIX:</strong> Up to 2 business days</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <FaCheckCircle className="text-[#FF4B6B]" />
                      <span><strong className="text-white">Other payment methods:</strong> Up to 15 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaExclamationTriangle className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">4. Cancellation Policy</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed text-lg">
                  You can cancel your service request at any time. However, please note:
                </p>
                <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300">
                      <FaTimesCircle className="text-[#FF4B6B] mt-1 flex-shrink-0" />
                      <span>If the service has already been initiated, cancellation may not be possible</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <FaTimesCircle className="text-[#FF4B6B] mt-1 flex-shrink-0" />
                      <span>If the technician has already started remote access, the service will be charged</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-300">
                      <FaCheckCircle className="text-[#31A8FF] mt-1 flex-shrink-0" />
                      <span>Scheduled services can be rescheduled without additional cost</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#8B31FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#8B31FF]/10 flex items-center justify-center flex-shrink-0 text-[#8B31FF] group-hover:scale-110 transition-transform">
                  <FaPercentage className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">5. Partial Refunds</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-4">
                In some cases, partial refunds may be applicable:
              </p>
              <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaPercentage className="text-[#8B31FF]" />
                    <span>Service partially completed but not finished</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaPercentage className="text-[#8B31FF]" />
                    <span>Technical issues on client side preventing service completion</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaPercentage className="text-[#8B31FF]" />
                    <span>Service took longer than expected due to unforeseen circumstances</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#FF4B6B]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4B6B]/10 flex items-center justify-center flex-shrink-0 text-[#FF4B6B] group-hover:scale-110 transition-transform">
                  <FaShieldAlt className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">6. Non-Refundable Services</h2>
              </div>
              <div className="bg-gradient-to-r from-[#FF4B6B]/10 to-[#8B31FF]/10 border border-[#FF4B6B]/20 rounded-2xl p-6">
                <p className="text-slate-300 leading-relaxed mb-4">
                  The following services are <strong className="text-white">non-refundable</strong> after completion:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaTimesCircle className="text-[#FF4B6B]" />
                    <span>Services where the issue was resolved but the problem was not as initially described</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaTimesCircle className="text-[#FF4B6B]" />
                    <span>Services cancelled after 24 hours of the scheduled time</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <FaTimesCircle className="text-[#FF4B6B]" />
                    <span>Repeated service requests for the same issue (after 3 attempts)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section className="p-8 rounded-3xl bg-[#121218]/50 backdrop-blur-xl border border-white/5 hover:border-[#31A8FF]/30 transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#31A8FF]/10 flex items-center justify-center flex-shrink-0 text-[#31A8FF] group-hover:scale-110 transition-transform">
                  <FaHeadset className="text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-white m-0">7. Customer Support</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                If you have any questions about our refund or cancellation policy, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <FaEnvelope className="text-[#31A8FF] text-xl" />
                  <span className="text-slate-300 text-sm">contact@voltristech.com.br</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <FaClock className="text-[#8B31FF] text-xl" />
                  <span className="text-slate-300 text-sm">Mon-Fri 7am-7:30pm BRT</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <FaWhatsapp className="text-[#25D366] text-xl" />
                  <span className="text-slate-300 text-sm">+55 (11) 99671-6235</span>
                </div>
              </div>
            </section>

            {/* Info Box */}
            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#31A8FF]/10 via-[#8B31FF]/10 to-[#FF4B6B]/10 border border-white/10">
              <div className="flex items-start gap-4">
                <FaThumbsUp className="text-3xl text-[#31A8FF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-2">Our Commitment</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We stand behind the quality of our services. Our goal is to provide the best remote technical support experience possible. If you are not satisfied, we will work with you to make things right or process your refund quickly and without hassle.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}