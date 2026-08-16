import { Metadata } from 'next';
import { regionsData } from '@/app/regions/data';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getLocalizedAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: 'Global Service Areas | VOLTRIS',
        description: 'Find Voltris Optimizer services and technical support in your region.',
        ...getLocalizedAlternates('/regions', locale)
    };
}

export default async function RegionsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    
    return (
        <div className="min-h-screen bg-gray-900 text-white selection:bg-[#8B31FF] selection:text-white flex flex-col font-sans">
            <Header />
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                        Global Service Areas
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Select your country and city to find dedicated services and support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regionsData.map((country) => (
                        <div key={country.slug} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                            <h2 className="text-2xl font-bold mb-4 text-[#8B31FF]">{country.name}</h2>
                            <ul className="space-y-2">
                                {country.cities.map((city) => (
                                    <li key={city.slug}>
                                        <Link 
                                            href={`/${locale}/regions/${country.slug}/${city.slug}`}
                                            className="text-gray-300 hover:text-white hover:underline transition-colors"
                                        >
                                            {city.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
