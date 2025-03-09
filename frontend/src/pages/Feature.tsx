
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
export default function FeaturePage() {
  return (
  <>
  <Navbar />
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-sm p-8 relative overflow-hidden">
          {/* Features Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-12">Features You Will Get</h1>
            <div className="flex justify-center space-x-4 mb-8">
              <span className="text-green-700 text-xl font-medium">User-friendly</span>
              <span className="text-gray-400">-</span>
              <span className="text-red-400 text-xl font-medium">Security</span>
              <span className="text-gray-400">-</span>
              <span className="text-yellow-500 text-xl font-medium">Privacy</span>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                SafulPay provides a fast and secure way to manage your money, ensuring your transactions
                are always smooth. You can easily handle multiple wallets, pay bills, and top up services with
                just a few taps. Our transparent fees keep you informed, so there are no surprises. Whether
                you're sending money locally or across borders, SafulPay makes it simple and reliable. Plus,
                our 24/7 support is always available to assist whenever you need help.
              </p>
            </div>
          </div>
          {/* Wallet Demo Section */}
          <div className="flex justify-center items-center mt-16">
            <div className="flex gap-8 items-center">
              {/* Left side - User icon with connection */}
              <div className="relative">
                <div className="bg-green-600 w-16 h-16 rounded-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              {/* Middle - Wallet UI */}
              <div className="bg-green-600 rounded-lg p-6 text-white shadow-lg w-64">
                <h3 className="text-xl mb-6">Primary Wallet</h3>
                <div className="mb-2 text-sm">Wallet Balance</div>
                <div className="text-2xl font-bold flex items-center">
                  SLE 23,000.87
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {/* Right side - Card UI */}
              <div className="bg-gray-100 rounded-2xl p-10 relative">
                <div className="bg-white rounded-lg shadow-md p-4 w-40 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
      </>
  );
}
