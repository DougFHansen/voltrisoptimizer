'use client';

import Link from 'next/link';
import { 
  Wrench, 
  Zap, 
  Download, 
  Monitor, 
  ArrowRight, 
  CheckCircle2,
  Star
} from 'lucide-react';



export default function ServiceIntegrationPage() {
  const integrationBenefits = [
    {
      title: "Formatting + Optimization",
      description: "Combine a clean Windows installation with advanced optimizations for peak performance from the start",
      benefits: [
        "Completely clean operating system",
        "Optimized settings out of the box",
        "FPS boost in games starting from the first use",
        "Optimized performance from the start"
      ]
    },
    {
      title: "Formatting + Assistance",
      description: "Identify and resolve hardware problems before formatting to ensure stability",
      benefits: [
        "Complete hardware diagnosis",
        "Defective parts replacement",
        "Clean installation on healthy hardware",
        "Longer system lifespan"
      ]
    },
    {
      title: "Optimization + Software",
      description: "Maximize optimization results with our continuous optimization software",
      benefits: [
        "Manual + automatic optimizations",
        "Remote control for custom tweaks",
        "Constant profile updates",
        "Sustainable long-term results"
      ]
    },
    {
      title: "Assistance + Optimization",
      description: "Resolve hardware problems and optimize software for ideal performance",
      benefits: [
        "Hardware problems resolved",
        "Optimized operating system",
        "Integral performance improvement",
        "Warranty for both services"
      ]
    }
  ];

  const successStories = [
    {
      title: "Professional Gamer",
      story: "After combining formatting, optimization, and Voltris Optimizer software, average FPS increased by 45% and input lag reduced by 35%",
      services: ["Formatting", "Optimization", "Software"]
    },
    {
      title: "Design Studio",
      story: "By combining technical assistance (cleaning and upgrade) with optimization, productivity increased by 60%",
      services: ["Assistance", "Optimization"]
    },
    {
      title: "Accounting Firm",
      story: "With combined formatting and optimization, they solved slowness issues and increased security by 90%",
      services: ["Formatting", "Optimization"]
    }
  ];

  const serviceFlow = [
    {
      step: 1,
      title: "Initial Assessment",
      description: "We diagnose your PC to identify specific needs"
    },
    {
      step: 2,
      title: "Customized Plan",
      description: "We create a plan with the ideal services for your case"
    },
    {
      step: 3,
      title: "Integrated Execution",
      description: "We apply the services cooperatively for maximum results"
    },
    {
      step: 4,
      title: "Optimized Result",
      description: "Your PC with peak performance and guaranteed stability"
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
              <span className="text-blue-500">Integration of</span><br />
              Technical Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              How our formatting, optimization, and technical assistance services work together 
              to maximize your PC's performance. Integrated solutions for complete results.
            </p>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Benefits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Why combining our services produces the best outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 mb-6">{benefit.description}</p>
                
                <ul className="space-y-3">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-20 bg-gray-900 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrated Service Flow</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How we work systematically to achieve prime results
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {serviceFlow.map((step, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results using integrated services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4">{story.title}</h3>
                <p className="text-gray-400 mb-4">{story.story}</p>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Combined services:</p>
                  <div className="flex flex-wrap gap-2">
                    {story.services.map((service, idx) => (
                      <span key={idx} className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#31A8FF]/20 via-[#8B31FF]/20 to-[#FF4B6B]/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want maximum results?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Integrate our services and push your PC to its true potential
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/combined-services"
              className="bg-gradient-to-r from-[#31A8FF] to-[#8B31FF] hover:from-[#8B31FF] hover:to-[#FF4B6B] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
            >
              View Integrated Packages
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact" 
              className="bg-gradient-to-r from-[#6B7280] to-[#4B5563] hover:from-[#4B5563] hover:to-[#374151] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
            >
              Request Assessment
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}