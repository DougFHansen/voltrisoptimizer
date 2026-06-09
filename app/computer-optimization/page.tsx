import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Computer Optimization | VOLTRIS - Scale Your PC',
  description: 'Professional computer optimization service to increase the speed, performance, and stability of your PC or laptop. Advanced cleaning, configuration, and fine-tuning techniques.',
  keywords: [
    'computer optimization',
    'speed up pc',
    'windows performance',
    'pc optimization',
    'slow computer',
    'system cleaning',
    'increase pc speed',
    'optimize windows',
    'disk defragmentation',
    'registry cleaning',
    'performance tweaks',
    'improve pc performance',
    'system optimization',
    'more performance pc',
    'windows 10 optimization',
    'windows 11 optimization'
  ],
  openGraph: {
    title: 'Professional Computer Optimization | VOLTRIS',
    description: 'Professional computer optimization service to increase the speed, performance, and stability of your PC or laptop.',
    url: 'https://www.voltrisoptimizer.com/otimizacao-computador',
    siteName: 'VOLTRIS',
    images: [
      {
        url: '/otimizacao-computador.jpg',
        width: 1200,
        height: 630,
        alt: 'VOLTRIS Professional Computer Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Computer Optimization | VOLTRIS',
    description: 'Speed up your PC with our professional computer optimization service.',
    images: ['/otimizacao-computador.jpg'],
    creator: '@voltris',
  },
  alternates: {
    canonical: 'https://www.voltrisoptimizer.com/otimizacao-computador',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function OtimizacaoComputadorPage() {
  return (
    <div className="min-h-screen bg-[#050510] font-sans">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[#8B31FF]/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#31A8FF]/10 border border-[#31A8FF]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#31A8FF] animate-pulse"></span>
              <span className="text-sm font-bold text-[#31A8FF] tracking-widest uppercase">Professional Optimization</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Professional Computer</span> <br />
              <span className="text-white">Optimization for Maximum Performance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Advanced optimization techniques to speed up your PC, increase performance, and stability. We eliminate freezes, slowness, and performance bottlenecks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/buy-license"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-white/10 border border-white/10 rounded-lg hover:bg-white hover:text-black hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 backdrop-blur-sm overflow-hidden"
              >
                <span className="mr-2">Acquire Optimization Service</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511996716235?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20computer%20optimization"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-[#050510] transition-all duration-200 bg-[#00FF94] rounded-lg hover:bg-[#00CC76] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00FF94]"
              >
                <svg className="mr-2 text-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.387c-.3-.1-1.7-.8-1.9-1.4-.3-.5-.1-.8.2-1.1.3-.3.6-.7.9-1.1.3-.4.4-.5.6-.5.2 0 .4-.1.5-.4.1-.3 0-.8-.4-1.5-.5-.8-1.4-2.1-2.6-2.1-1.3 0-2.1.8-2.9 1.6-.8.8-1.3 1.3-2.5 1.3-.8 0-1.4-.4-1.9-.9-.5-.5-.7-.7-1.2-1.1 0 0-.4-.3-.6-.8-.2-.5-.6-1.5-.6-2.9 0-1.4.9-2.7 2.1-3.7 1.1-1 2.5-1.6 4.1-1.6 1.7 0 3.1.6 4.2 1.6 1 .9 1.6 2.1 1.6 3.5 0 1.4-.6 2.6-1.6 3.4zm-6.5-3.2c.2 1.1.8 2 1.6 2.6.9.6 2.1.9 3.2.9 1.1 0 2.3-.3 3.2-.9.8-.6 1.4-1.5 1.6-2.6.2-1.1-.1-2.3-.7-3.2-.6-.8-1.5-1.4-2.6-1.6-1.1-.2-2.3.1-3.2.7-.8.6-1.4 1.5-1.6 2.6z" />
                </svg>
                Talk to a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10 bg-[#050510]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Benefits of <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Professional Optimization</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Our technical and deep approach ensures real and lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#31A8FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center mb-6 text-[#31A8FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Speed Increase</h3>
              <p className="text-slate-400">
                We accelerate your computer by up to 40% with advanced system optimization techniques.
              </p>
            </div>

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#8B31FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#8B31FF]/10 flex items-center justify-center mb-6 text-[#8B31FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Stability</h3>
              <p className="text-slate-400">
                We eliminate freezes, errors, and instabilities with precise configurations.
              </p>
            </div>

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#FF4B6B]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center mb-6 text-[#FF4B6B]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">User Experience</h3>
              <p className="text-slate-400">
                Immediate response to commands, fast boot, and fluid navigation.
              </p>
            </div>

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#31A8FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#31A8FF]/10 flex items-center justify-center mb-6 text-[#31A8FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Settings</h3>
              <p className="text-slate-400">
                Deep adjustments to the kernel, TCP/IP network, and resource management.
              </p>
            </div>

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#8B31FF]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#8B31FF]/10 flex items-center justify-center mb-6 text-[#8B31FF]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Preventive Maintenance</h3>
              <p className="text-slate-400">
                Techniques that prevent future slowness and maintain constant performance.
              </p>
            </div>

            <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#FF4B6B]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#FF4B6B]/10 flex items-center justify-center mb-6 text-[#FF4B6B]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Guaranteed Results</h3>
              <p className="text-slate-400">
                Objective measurement of performance gains before and after optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10 bg-[#08080C]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Optimization</span> Process
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Advanced techniques applied with precision for professional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF] font-bold">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Full Diagnosis</h3>
                  <p className="text-slate-400">
                    Detailed analysis of the current hardware, software, and system settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B31FF]/10 flex items-center justify-center text-[#8B31FF] font-bold">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Deep Cleaning</h3>
                  <p className="text-slate-400">
                    Removal of temporary files, cache, invalid records, and unnecessary software.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF4B6B]/10 flex items-center justify-center text-[#FF4B6B] font-bold">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Advanced Settings</h3>
                  <p className="text-slate-400">
                    Deep adjustments to the Windows kernel, TCP/IP network, and resource management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#31A8FF]/10 flex items-center justify-center text-[#31A8FF] font-bold">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Testing and Validation</h3>
                  <p className="text-slate-400">
                    Verifying stability, performance, and objective measurement of the gains achieved.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Specialized Techniques</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                  <span className="text-slate-300">Kernel and CPU Threads Optimization</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                  <span className="text-slate-300">TCP/IP Network Configuration</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                  <span className="text-slate-300">Smart Defragmentation Tweaks</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                  <span className="text-slate-300">System Services Management</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                  <span className="text-slate-300">Power Plan Configuration</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#0F0F16] rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                  <span className="text-slate-300">DPC Latency Adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-[#050510]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B] text-transparent bg-clip-text">Speed Up Your Computer?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to apply advanced optimization techniques to your computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/buy-license"
                className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all"
              >
                Hire Professional Optimization
              </a>
              <a
                href="https://wa.me/5511996716235?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20computer%20optimization"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#00FF94] text-[#050510] font-bold rounded-xl hover:bg-[#00CC76] transition-all"
              >
                Talk to a Specialist
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}