'use client';

import Link from 'next/link';
import { 
  MapPin, 
  Wrench, 
  Zap, 
  Monitor, 
  Download, 
  CheckCircle2, 
  Star, 
  Clock, 
  Shield, 
  Users 
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export default function TechServicesSPPage() {
  const services = [
    {
      icon: <Download className="w-8 h-8 text-blue-500" />,
      title: "Windows Formatting",
      description: "Clean installation, updated drivers, and optimized settings",
      cities: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo", "Santo André"],
      startingPrice: "$25"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "PC Optimization",
      description: "Increase game FPS, system speed and performance",
      cities: ["São Paulo", "Osasco", "Santos", "Ribeirão Preto", "Sorocaba"],
      startingPrice: "$30"
    },
    {
      icon: <Wrench className="w-8 h-8 text-purple-500" />,
      title: "Technical Assistance",
      description: "Hardware and software repair, and preventive maintenance",
      cities: ["São Paulo", "São Caetano", "Mauá", "Diadema", "Barueri"],
      startingPrice: "$20"
    },
    {
      icon: <Monitor className="w-8 h-8 text-cyan-500" />,
      title: "Voltris Optimizer Software",
      description: "Automatic optimization with our SaaS software",
      cities: ["Statewide", "Online", "Remote", "Service", "Support"],
      startingPrice: "$5/month"
    }
  ];

  const cities = [
    "São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André",
    "Osasco", "Sorocaba", "Ribeirão Preto", "Santos", "Mauá", "São José dos Campos",
    "Carapicuíba", "São Caetano do Sul", "Diadema", "Itaquaquecetuba", "Piracicaba",
    "Indaiatuba", "Barueri", "Suzano", "Mogi das Cruzes"
  ];

  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Local Service",
      description: "Technicians throughout Greater São Paulo"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Flexible Scheduling",
      description: "Times that match your schedule"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Certified Technicians",
      description: "Qualified and experienced professionals"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-cyan-500" />,
      title: "Quality Guarantee",
      description: "All services come with a warranty"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="absolute inset-0 bg-[url('/background-grid.svg')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-blue-500">Tech Services</span><br />
              in São Paulo
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Windows formatting, PC optimization, technical assistance, and optimization software. 
              Local service in Greater São Paulo with certified technicians and guaranteed results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              Request Service
            </Link>
            <Link 
              href="https://wa.me/5511996716235" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Schedule in SP
            </Link>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-center">We serve all of Greater São Paulo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {cities.slice(0, 15).map((city, index) => (
                <div key={index} className="text-center py-2 px-3 bg-gray-700 rounded-lg">
                  <MapPin className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                  <span className="text-sm">{city}</span>
                </div>
              ))}
            </div>
            <p className="text-center mt-4 text-gray-400">
              And {cities.length - 15} more cities in São Paulo state
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services in SP</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized in diverse technical needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">Service areas:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.cities.map((city, idx) => (
                          <span key={idx} className="bg-gray-700 text-blue-400 text-xs px-3 py-1 rounded-full">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-lg font-bold text-blue-500">Starting at {service.startingPrice}</p>
                    
                    <Link
                      href={`/services-sp/${service.title.toLowerCase().replace(/ /g, '-')}`}
                      className="inline-block mt-4 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose us in SP?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exclusive benefits of our local service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coverage Area</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We serve the entire metropolitan area and countryside of SP
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg transition-all">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#31A8FF]/20 via-[#8B31FF]/20 to-[#FF4B6B]/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need technical services in SP?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us now and schedule your appointment in your city
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] hover:from-[#8B31FF] hover:to-[#FF4B6B] text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              Request Service
            </Link>
            <Link 
              href="tel:+5511996716235" 
              className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#13803B] text-white font-bold py-4 px-8 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              +55 (11) 99671-6235
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}