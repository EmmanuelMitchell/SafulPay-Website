const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How Does It Work?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Using SafulPay is simple and straightforward. Follow these three easy steps to get started with secure and
            convenient mobile money management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-[#126100]/10 rounded-lg p-8 text-center relative">
              <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Download & Register</h3>
              <p className="text-gray-400">
                Get SafulPay from your app store and create your account with just a few simple steps.
              </p>
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#126100]/30 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Add Your Funds</h3>
              <p className="text-gray-400">
                Link your bank account or add money through various payment methods securely.
              </p>
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#126100]/30 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Start Transacting</h3>
              <p className="text-gray-400">Begin sending money, paying bills, and managing your finances with ease.</p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#126100] mb-4">Download SafulPay Today</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Secure, fast, and convenient financial management at your fingertips. Join thousands of users enjoying the
            SafulPay experience.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white rounded-lg py-3 px-6 flex items-center">
              <img src="google.jpg" alt="Google Play" className="w-6 h-6 mr-2" />
              <span className="text-black">Google Play</span>
            </button>
            <button className="bg-white rounded-lg py-3 px-6 flex items-center">
              <img src="/app-store.png" alt="App Store" className="w-6 h-6 mr-2" />
              <span className="text-black">App Store</span>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default HowItWorks

