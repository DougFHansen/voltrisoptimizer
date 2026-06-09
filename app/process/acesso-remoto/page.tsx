import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RemoteAccessProcessPage() {
  return (
    <>
      <div className="min-h-screen bg-[#171313] text-white">
        <Header />
        <main className="pt-32 sm:pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text relative inline-block">
                Secure Remote Access
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF4B6B] to-[#31A8FF]"></div>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8">
                Understand how we perform remote assistance with total security
                and transparency for our clients.
              </p>
            </div>

            {/* Security Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Security</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Encrypted connection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Single access per session
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Full client control
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#8B31FF] to-[#31A8FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Tools</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    AnyDesk Premium
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    TeamViewer Business
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Support via chat
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#31A8FF] to-[#FF4B6B]">
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
                    Real-time viewing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Optional recording
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Detailed report
                  </li>
                </ul>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                How Does Remote Access Work?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">1</div>
                  <h3 className="font-semibold mb-3 mt-2">Installation</h3>
                  <p className="text-gray-300 text-sm">
                    You will receive a link to download the remote access software of your preference.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#8B31FF] flex items-center justify-center text-lg font-bold">2</div>
                  <h3 className="font-semibold mb-3 mt-2">Connection</h3>
                  <p className="text-gray-300 text-sm">
                    Our technician will send a unique and exclusive access code for your session.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#31A8FF] flex items-center justify-center text-lg font-bold">3</div>
                  <h3 className="font-semibold mb-3 mt-2">Execution</h3>
                  <p className="text-gray-300 text-sm">
                    The service is performed with your monitoring and supervision in real-time.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">4</div>
                  <h3 className="font-semibold mb-3 mt-2">Finalization</h3>
                  <p className="text-gray-300 text-sm">
                    Upon completion, you receive a detailed report of all actions performed.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Measures */}
            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                Security Measures
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">End-to-end encryption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">No storage of sensitive data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">GDPR Compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Client Control</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Session termination at any time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Real-time view of all actions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">Approval required for important actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF] rounded-lg font-medium text-white hover:opacity-90 transition-opacity duration-300"
              >
                Request Remote Assistance
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
} 