import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { regionsData } from './data';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import TechFloatingElements from '@/components/TechFloatingElements';

export const metadata: Metadata = {
    title: 'Global Remote IT Support Coverage | VOLTRIS',
    description: 'We provide elite remote IT support, PC optimization, and virus removal to major cities around the globe. See our full coverage.',
    keywords: ['global IT support', 'remote pc repair', 'international tech support'],
    alternates: {
        canonical: 'https://www.voltrisoptimizer.com/regions'
    }
};

export default function RegionsIndexPage() {
    return (
        <>
            <Header />
            <main className="bg-[#050510] min-h-screen relative overflow-x-hidden font-sans selection:bg-[#31A8FF]/30 pt-24 pb-24">
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none z-50"></div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#31A8FF]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0"></div>

                <TechFloatingElements />

                <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <GlobeAltIcon className="w-4 h-4 text-[#31A8FF]" />
                            <span className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase">Worldwide Availability</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#31A8FF] via-[#8B31FF] to-[#FF4B6B]">Coverage</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            No matter where you are, our certified experts provide 100% remote computer optimization, maintenance, and repair services via secure connections using Anydesk or Teamviewer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regionsData.map((country) => (
                            <div key={country.slug} className="p-8 rounded-[32px] bg-[#121218] border border-white/5 hover:border-white/20 transition-all duration-300">
                                <h2 className="text-2xl font-bold text-white mb-2">{country.name}</h2>
                                <p className="text-[#31A8FF] text-sm mb-6 uppercase tracking-wider font-bold">{country.continent}</p>
                                <ul className="space-y-3">
                                    {country.cities.map((city) => (
                                        <li key={city.slug}>
                                            <Link 
                                                href={`/regions/${country.slug}/${city.slug}`}
                                                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#8B31FF] transition-colors"></span>
                                                Remote Support in {city.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
