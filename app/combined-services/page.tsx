'use client';

import Link from 'next/link';
import { 
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

export default function CombinedServicesPage() {
  const packages = [
    {
      name: "Basic",
      price: "$45",
      services: [
        "Windows Formatting",
        "Essential programs installation",
        "Basic system optimization",
        "Initial settings"
      ],
      description: "Ideal for those who need a solid foundation"
    },
    {
      name: "Premium",
      price: "$70",
      services: [
        "Complete Windows Formatting",
        "All programs installation",
        "Advanced system optimization",
        "Customized settings",
        "Voltris Optimizer installation"
      ],
      description: "For maximum performance in games and productivity",
      featured: true
    },
    {
      name: "Pro Gaming",
      price: "$85",
      services: [
        "Gamer Windows Formatting",
        "Gaming Optimization",
        "Guaranteed FPS boost",
        "Streaming setups",
        "Voltris Optimizer Pro installation"
      ],
      description: "The complete package for gamers and streamers"
    },
    {
      name: "Business",
      price: "$110",
      services: [
        "Corporate Windows Formatting",
        "Security Optimization",
        "Enterprise network configuration",
        "Group policies",
        "Voltris Optimizer Business installation"
      ],
      description: "For businesses that need performance and security"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Combined Warranty",
      description: "All services with extended warranty"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "Save Time",
      description: "The same technician does all the services"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Integrated Support",
      description: "Single point of support for all contracted services"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-cyan-500" />,
      title: "Progressive Discount",
      description: "The more services you add, the bigger the discount"
    }
  ];

  const testimonials = [
    {
      name: "Lucas Ferreira",
      role: "Business Owner",
      text: "I hired the business package and the productivity of my employees increased significantly. Highly recommended!",
      rating: 5
    },
    {
      name: "Juliana Silva",
      role: "Professional Gamer",
      text: "The Pro Gaming package transformed my setup. Now I play with 200+ FPS in all games!",
      rating: 5
    },
    {
      name: "Roberto Santos",
      role: "Freelancer",
      text: "I got the Premium package and my computer is back to working like new. Excellent job!",
      rating: 5
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
              <span className="text-blue-500">Service Packages</span><br />
              Combined Technical
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Save time and money with our combined packages of formatting, optimization, and technical assistance.
              The best performance at the lowest cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/combined-services/quote" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              Request Package
            </Link>
            <Link 
              href="/servicos" 
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              View Individual Services
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Combined Packages</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the package that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-gray-800 rounded-2xl p-8 border ${
                  pkg.featured ? 'border-blue-500 relative' : 'border-gray-700'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-blue-500 mb-4">{pkg.price}</div>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const message = `Hello, I would like to hire the ${encodeURIComponent(pkg.name)} package`;
                    window.open(`https://wa.me/5511996716235?text=${message}`, '_blank');
                  }}
                  className={`block w-full py-3 px-6 rounded-lg text-center font-bold transition-all ${
                    pkg.featured 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  Hire Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Included Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Each package combines the best services for your PC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Wrench className="w-12 h-12 text-blue-500" />
                <h3 className="text-2xl font-bold">Technical Assistance</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Full diagnosis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Hardware repair</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Network configuration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Preventive maintenance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Monitor className="w-12 h-12 text-green-500" />
                <h3 className="text-2xl font-bold">PC Optimization</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>FPS boost in games</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>System optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Input lag reduction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Advanced settings</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Download className="w-12 h-12 text-purple-500" />
                <h3 className="text-2xl font-bold">Windows Formatting</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Clean Windows install</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Updated drivers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Required programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Data backup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results with combined packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#31A8FF]/20 via-[#8B31FF]/20 to-[#FF4B6B]/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your PC?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Choose one of our combined packages and save time and money
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/combined-services/quote" 
              className="bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] hover:from-[#8B31FF] hover:to-[#FF4B6B] text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              Request Package Now
            </Link>
            <Link 
              href="https://wa.me/5511996716235" 
              className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#13803B] text-white font-bold py-4 px-8 rounded-xl text-center transition-all"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}