import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SchedulingProcessPage() {
  return (
    <>
      <div className="min-h-screen bg-[#171313] text-white">
        <Header />
        <main className="pt-32 sm:pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text relative inline-block">
                Scheduling Process
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FF4B6B] to-[#31A8FF]"></div>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-8">
                Understand how our scheduling process works and how we
                guarantee the best time slot for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#FF4B6B] to-[#8B31FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Flexibility</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Flexible time slots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Online scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Free rescheduling
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#8B31FF] to-[#31A8FF]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Confirmation</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Email confirmation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    WhatsApp reminder
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Detailed instructions
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-[#31A8FF] to-[#FF4B6B]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Preparation</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FF4B6B]"></div>
                    Pre-service checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B31FF]"></div>
                    Technical requirements
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#31A8FF]"></div>
                    Required documentation
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                How Does Scheduling Work?
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">1</div>
                  <h3 className="font-semibold mb-3 mt-2">Choose</h3>
                  <p className="text-gray-300 text-sm">
                    Select the desired service and choose your preferred date and time.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#8B31FF] flex items-center justify-center text-lg font-bold">2</div>
                  <h3 className="font-semibold mb-3 mt-2">Confirmation</h3>
                  <p className="text-gray-300 text-sm">
                    Our team will confirm availability and send you a confirmation.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#31A8FF] flex items-center justify-center text-lg font-bold">3</div>
                  <h3 className="font-semibold mb-3 mt-2">Preparation</h3>
                  <p className="text-gray-300 text-sm">
                    You will receive a checklist with all necessary requirements.
                  </p>
                </div>
                <div className="p-6 bg-gray-700/50 rounded-lg relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FF4B6B] flex items-center justify-center text-lg font-bold">4</div>
                  <h3 className="font-semibold mb-3 mt-2">Reminder</h3>
                  <p className="text-gray-300 text-sm">
                    The day before, we will send a reminder with all the information.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#FF4B6B] via-[#8B31FF] to-[#31A8FF] text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">About Scheduling</h3>
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-medium mb-2">How can I reschedule?</h4>
                      <p className="text-gray-300 text-sm">
                        You can reschedule through our website or WhatsApp up to 24 hours before the scheduled time, at no additional cost.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-2">What is the minimum scheduling notice?</h4>
                      <p className="text-gray-300 text-sm">
                        The minimum notice is 4 hours in advance, subject to our team's availability.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-2">Can I choose the technician?</h4>
                      <p className="text-gray-300 text-sm">
                        Yes, you can request a specific technician, subject to the professional's availability.
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">About the Service</h3>
                  <ul className="space-y-6">
                    <li>
                      <h4 className="font-medium mb-2">What is the average service duration?</h4>
                      <p className="text-gray-300 text-sm">
                        Duration varies by service, but we provide an estimate at the time of scheduling.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-2">What if the service takes longer than expected?</h4>
                      <p className="text-gray-300 text-sm">
                        If the service exceeds the estimated time, you will be consulted about continuing.
                      </p>
                    </li>
                    <li>
                      <h4 className="font-medium mb-2">Do you serve outside business hours?</h4>
                      <p className="text-gray-300 text-sm">
                        Yes, we offer 24/7 service, with differentiated rates for special hours.
                      </p>
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
                Schedule a Service
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}