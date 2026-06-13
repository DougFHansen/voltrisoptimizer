'use client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mb-4 rounded-lg shadow-md overflow-hidden ${isOpen ? 'active' : ''}`}>
      <button className={`w-full border-none p-5 text-lg font-semibold text-white text-left cursor-pointer flex justify-between items-center transition-colors duration-300 ease-in-out ${isOpen ? 'bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2e]' : 'bg-[#1c1c1e] hover:bg-[#2a2a2e]'}`} onClick={toggleOpen}>
        <span>{question}</span>
        {/* Replace SVG with react-icons if used */}
        <FiChevronDown className={`w-6 h-6 transition-transform duration-300 ease-in-out text-[#8B31FF] ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {/* The actual height transition will be handled by CSS classes */}
      <div className={`overflow-hidden transition-[max-height] duration-400 ease-out ${isOpen ? 'max-h-[1000px] py-5 px-5' : 'max-h-0 py-0 px-5'}`}
        style={{ background: isOpen ? 'linear-gradient(135deg, #1c1c1e 0%, #2a2a2e 100%)' : undefined }}>
        <p className="text-[#E2E8F0] text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqData = [
    {
      question: 'How does the purchase process work?',
      answer: 'Our purchase process is simple and intuitive. First, browse our products and choose the desired service. Then, after choosing the service, you will be redirected to the Dashboard (you need to create an account or be logged in). After payment confirmation via WhatsApp, your order will be processed.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods, including credit cards (Visa, MasterCard, Elo, Amex), bank slips, and PIX. You can choose the option you prefer at checkout.'
    },
    {
      question: 'How will the service work?',
      answer: 'The process is simple and efficient: first, you choose the desired service and make the purchase. After logging into your account, you will be able to view your request on the dashboard and click the "WhatsApp Support" button. To perform the service, we will use remote access tools like AnyDesk or TeamViewer, which allow our technicians to securely access your computer to execute the requested service.'
    },
    {
      question: 'What is the delivery time?',
      answer: "It depends on the chosen service, the condition of the machine itself, and the customer's availability to perform the service. We cannot guarantee a fixed deadline, but we will do our best to perform the service as quickly as possible."
    },
    {
      question: 'Can I exchange or return a product?',
      answer: 'Yes, our exchange and return policy follows the Consumer Protection Code. You have up to 7 calendar days after receipt to request a return for proven technical reasons on our part.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 text-center" id="doubts">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="group transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2e] p-6 rounded-2xl border border-[#FF4B6B]/10 flex items-start gap-4 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(139,49,255,0.1)] hover:border-[#FF4B6B]/30 focus:outline-none"
              >
                <FiChevronDown className={`w-6 h-6 transition-transform duration-300 ease-in-out text-[#31A8FF] mt-1 ${activeIndex === index ? 'rotate-180' : ''}`} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-[#FF4B6B] group-hover:via-[#8B31FF] group-hover:to-[#31A8FF] group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-300">{faq.question}</h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-[#e2e8f0]">{faq.answer}</p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/faq"
            className="inline-flex items-center px-6 py-2 rounded-lg bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-white font-semibold hover:shadow-[0_0_20px_rgba(139,49,255,0.3)] transition-all duration-300 ease-out hover:scale-105"
          >
            See more questions
          </a>
        </div>
      </div>
    </section>
  );
} 