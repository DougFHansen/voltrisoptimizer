import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContractProcessPage() {
  return (
    <>
      <div className="min-h-screen bg-[#171313] text-white">
        <Header />
        <main className="pt-32 sm:pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text relative inline-block">
                Service Agreement
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF4B6B] to-[#31A8FF]"></div>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8">
                Understand how our service agreement protects you and ensures
                transparency throughout the entire process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Security</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Clear terms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Defined guarantees
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Legal protection
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#8B31FF] to-[#31A8FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Transparency</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Itemized pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Defined deadlines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Clear scope
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#31A8FF] to-[#FF4B6B]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Privacy</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Protected data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Confidentiality
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    GDPR compliant
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                How Does the Process Work?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">1</div>
                  <h3 className="font-semibold mb-3 mt-2">Delivery</h3>
                  <p className="text-gray-300 text-sm">
                    You receive the contract by email and WhatsApp after confirming the service.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#8B31FF] flex items-center justify-center text-lg font-bold">2</div>
                  <h3 className="font-semibold mb-3 mt-2">Review</h3>
                  <p className="text-gray-300 text-sm">
                    Time to read and carefully review all the terms.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#31A8FF] flex items-center justify-center text-lg font-bold">3</div>
                  <h3 className="font-semibold mb-3 mt-2">Acceptance</h3>
                  <p className="text-gray-300 text-sm">
                    Secure digital confirmation through our platform.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">4</div>
                  <h3 className="font-semibold mb-3 mt-2">Archiving</h3>
                  <p className="text-gray-300 text-sm">
                    Digital copy permanently available in your account.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                What Does Our Agreement Include?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Terms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Service Description</h4>
                        <p className="text-gray-300 text-sm">Complete breakdown of the scope of work to be performed</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Deadlines & Pricing</h4>
                        <p className="text-gray-300 text-sm">Detailed timeline and agreed pricing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Warranties</h4>
                        <p className="text-gray-300 text-sm">Warranty terms and post-service support</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Protections</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Confidentiality</h4>
                        <p className="text-gray-300 text-sm">Protection of sensitive data and information</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Responsibilities</h4>
                        <p className="text-gray-300 text-sm">Clear definition of each party's obligations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <h4 className="font-medium">Cancellation Policy</h4>
                        <p className="text-gray-300 text-sm">Conditions and deadlines for changes or cancellations</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] rounded-lg font-medium text-white hover:opacity-90 transition-opacity duration-300"
              >
                Request a Service
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}