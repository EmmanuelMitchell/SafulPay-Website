import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Features() {
  const handleCloseApp = () => {
    // Navigate to home page - using standard navigation instead of Next.js router
    window.location.href = "/"
  }

  return (
    <motion.div
      className="min-h-screen bg-white"
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
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
          {/* Replaced Next/Image with standard img tag */}
          <img
            src="/placeholder.svg"
            alt="SafulPay Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-[#4CAF50] text-xl font-medium">SafulPay</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <button onClick={handleCloseApp} className="text-gray-600 hover:text-gray-900 text-[15px] cursor-pointer">
            Close App
          </button>
          {/* Replaced Next/Link with standard a tags */}
          <a href="/features" className="text-gray-900 font-medium text-[15px]">
            Features
          </a>
          <a href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-[15px]">
            How It Works
          </a>
          <a href="/testimony" className="text-gray-600 hover:text-gray-900 text-[15px]">
            Testimony
          </a>
          <a href="/faqs" className="text-gray-600 hover:text-gray-900 text-[15px]">
            FAQs
          </a>
          <a href="/contact-us" className="text-gray-600 hover:text-gray-900 text-[15px]">
            Contact Us
          </a>
          <a href="/about-us" className="text-gray-600 hover:text-gray-900 text-[15px]">
            About Us
          </a>
        </div>

        <button className="bg-[#8D9B8E] hover:bg-[#7A877B] text-white rounded-md px-5 py-2 text-[15px] font-medium">
          Download App
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-10 gap-4">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-6 h-6">
                {/* Replaced Next/Image with standard img tag */}
                <img src="/placeholder.svg" alt="" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        <main className="relative z-10 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-[52px] font-bold text-center mb-8 leading-tight">Features You Will Get</h1>

            <div className="flex justify-center items-center gap-3 mb-12 text-xl">
              <span className="text-[#4CAF50] font-medium">User-friendly</span>
              <span className="text-gray-400">-</span>
              <span className="text-[#FF7B7B] font-medium">Security</span>
              <span className="text-gray-400">-</span>
              <span className="text-[#FFD700] font-medium">Privacy</span>
            </div>

            <p className="text-gray-600 text-center max-w-4xl mx-auto mb-16 leading-relaxed text-lg">
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
                  <div className="w-16 h-16 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="w-[2px] h-8 bg-[#4CAF50] mx-auto mt-2"></div>
                </div>

                {/* Wallet Card */}
                <div className="w-[400px] h-[200px] bg-[#4CAF50] rounded-lg p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[url('/placeholder.svg')] bg-cover"></div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-white text-xl mb-12">Primary Wallet</h3>
                    <div className="mt-auto">
                      <p className="text-white/80 text-sm mb-1">Wallet Balance</p>
                      <div className="flex items-center justify-between">
                        <span className="text-white text-2xl font-semibold">SLE 23,000.87</span>
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

              {/* Secondary Card */}
              <div className="w-[300px] h-[100px] bg-gray-50 rounded-full flex items-center justify-center">
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  )
}