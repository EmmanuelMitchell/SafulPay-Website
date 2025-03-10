
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";

// const scrollToSection = (id: string) => {
//   const element = document.getElementById(id)
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" })
//   }
// }
// export default function FeaturePage() {
//   return (
//   <>
//   <Navbar scrollToSection={scrollToSection} />
//     <motion.div
//       initial={{ y: "100vh", opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="min-h-screen bg-white"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden">
//           {/* Features Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-5xl font-bold text-gray-900 mb-12">Features You Will Get</h1>
//             <div className="flex justify-center space-x-4 mb-8">
//               <span className="text-green-700 text-xl font-medium">User-friendly</span>
//               <span className="text-gray-400">-</span>
//               <span className="text-red-400 text-xl font-medium">Security</span>
//               <span className="text-gray-400">-</span>
//               <span className="text-yellow-500 text-xl font-medium">Privacy</span>
//             </div>
//             <div className="max-w-3xl mx-auto">
//               <p className="text-gray-700 text-lg leading-relaxed text-center">
//                 SafulPay provides a fast and secure way to manage your money, ensuring your transactions
//                 are always smooth. You can easily handle multiple wallets, pay bills, and top up services with
//                 just a few taps. Our transparent fees keep you informed, so there are no surprises. Whether
//                 you're sending money locally or across borders, SafulPay makes it simple and reliable. Plus,
//                 our 24/7 support is always available to assist whenever you need help.
//               </p>
//             </div>
//           </div>
//           {/* Wallet Demo Section */}
//           <div className="flex justify-center items-center mt-16">
//             <div className="flex gap-8 items-center">
//               {/* Left side - User icon with connection */}
//               <div className="relative">
//                 <div className="bg-green-600 w-16 h-16 rounded-md flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//               </div>
//               {/* Middle - Wallet UI */}
//               <div className="bg-green-600 rounded-lg p-6 text-white shadow-lg w-64">
//                 <h3 className="text-xl mb-6">Primary Wallet</h3>
//                 <div className="mb-2 text-sm">Wallet Balance</div>
//                 <div className="text-2xl font-bold flex items-center">
//                   SLE 23,000.87
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
//                     <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                     <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               {/* Right side - Card UI */}
//               <div className="bg-gray-100 rounded-2xl p-10 relative">
//                 <div className="bg-white rounded-lg shadow-md p-4 w-40 h-16 flex items-center justify-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//       </>
//   );
// }


import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks"
import Testimony from "../components/Testimony"
import FAQs from "../components/FAQs"
import ContactUs from "../components/ContactUs"

export default function Features() {

  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null) // Hide if already showing
    } else {
      setActiveSection(section) // Show the clicked section
    }
  }

  return (
    <>
      {/* Navbar - Visible on all screen sizes */}
      <Navbar toggleSection={toggleSection} />
      
      <motion.div
        className="min-h-screen bg-white pt-16" // Added pt-16 to account for navbar
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5,
        }}
      >
        {/* Main Content */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="grid grid-cols-10 gap-4">
              {Array.from({ length: 200 }).map((_, i) => (
                <div key={i} className="w-6 h-6">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <main className="relative z-10 px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-[52px] font-bold text-center mb-8 leading-tight font-[Outfit]">Features You Will Get</h1>

              <div className="flex justify-center items-center gap-3 mb-12 text-xl font-[Outfit]">
                <span className="text-[#126100] font-medium">User-friendly</span>
                <span className="text-gray-400">-</span>
                <span className="text-[#FF7B7B] font-medium">Security</span>
                <span className="text-gray-400">-</span>
                <span className="text-[#FFD700] font-medium">Privacy</span>
              </div>

              <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-lg font-[Outfit]">
                SafulPay provides a fast and secure way to manage your money, ensuring your transactions are always
                smooth. You can easily handle multiple wallets, pay bills, and top up services with just a few taps. Our
                transparent fees keep you informed, so there are no surprises. Whether you're sending money locally or
                across borders, SafulPay makes it simple and reliable. Plus, our 24/7 support is always available to
                assist whenever you need help.
              </p>

              {/* Feature Illustration */}
              <div className="flex justify-center items-center gap-12">
                <div className="relative">
                  {/* User Icon */}
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-[#126100] rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="w-[2px] h-8 bg-[#126100] mx-auto mt-2"></div>
                  </div>

                  {/* Wallet Card */}
                  <div className="w-[400px] h-[200px] bg-[#126100] rounded-lg p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-cover"></div>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-white text-xl mb-12 font-[Outfit]">Primary Wallet</h3>
                      <div className="mt-auto">
                        <p className="text-white/80 text-sm mb-1 font-[Outfit]">Wallet Balance</p>
                        <div className="flex items-center justify-between">
                          <span className="text-white text-2xl font-semibold font-[Outfit]">SLE 23,000.87</span>
                          <button className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Conditionally render sections based on activeSection */}
        {activeSection === "how-it-works" && <HowItWorks />}
        {activeSection === "testimony" && <Testimony />}
        {activeSection === "faqs" && <FAQs />}
        {activeSection === "contact-us" && <ContactUs />}
      </motion.div>
    </>
  )
}

