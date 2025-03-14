  
const Features = () => {
    return (
      <div className="font-['Outfit']">
        {/* Features You Will Get Section */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Features You Will Get</h2>

          <div className="flex justify-center items-center gap-3 mb-8 text-[15px] font-[Outfit">
                <span className="text-[#126100]">User-friendly</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#FF7B7B]">Security</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#FFD700]">Privacy</span>
              </div>
          <p className="text-gray-600 mb-14 max-w-xl mx-auto">
            Stay updated, connected, and secure with our powerful features designed to enhance your experience.
          </p>
  
          <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
            <img src="animation.png" alt="" />
          </div>
        </section>
  
        {/* Explore Even More Powerful Features Section */}
        <section className="max-w-[1400px] mx-auto rounded-t-[50px] bg-[#126100] py-1 px-6 rounded-b-[50px] text-white relative overflow-hidden ">
          <div className="pt-8 relative z-10">
            <h2 className="text-3xl font-bold font-['Outfit'] mb-5 text-center">Explore Even More Powerful Features</h2>
            <p className="text-center font-['Outfit'] text-white/80 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cum quibusdam non soluta quaerat natus delectus voluptates
               perferendis vero, error eos commodi repellendus neque voluptatum sit iusto atque, 
               suscipit sequi amet sapiente laudantium, dolorum minima harum quod aliquam. Corrupti quis officia provident optio nesciunt. Odit iste cupiditate, dolores error debitis totam!
            </p>
          </div>
  
          <div className="flex justify-center max-w-5xl mx-auto  relative top-25  relative z-0">
            {/* Single feature image */}
            <img src="features.png" alt="Feature showcase" className="rounded-lg max-w-full shadow-xl" />
          </div>
        </section>
  
        {/* Additional image section */}
        <div className="-rotate-18 mt-10 pt-20">
          <img src="rope.png" alt="Rope illustration" className="w-full" />
        </div>
  
        {/* Your Security Is Our Priority Section */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-['Outfit'] mb-5 text-center">Your Security Is Our Priority</h2>
            <p className="text-gray-600 mb-14 font-['Outfit'] text-center max-w-xl mx-auto">
              We employ the latest encryption technology and security practices to ensure your data remains protected at
              all times.
            </p>
  
            <div className="flex flex-wrap justify-between items-center">
              {/* Security features to the left of the phone */}
              <div className="w-full md:w-1/4 space-y-10 order-2 md:order-1">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    
                    <img src="/security-logo/fee.png" alt="" className="" />
                  </div>
                  <div>
                    <h3 className="font-semibold">No Hidden Fees</h3>
                    <p className="text-gray-600 text-sm">YAt SafulPay, transparency is key. 
                      We guarantee no hidden fees, so you always know exactly what you're paying for,
                       with clear and upfront pricing for every transaction.</p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#126100]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg> */}
                      <img src="/security-logo/binary-lock.png" alt="" className="" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Advanced Encryption</h3>
                    <p className="text-gray-600 text-sm">Your personal and financial data is protected with industry-leading encryption technology.
                       Every transaction is securely encrypted to keep your sensitive information safe from unauthorized access..</p>
                  </div>
                </div>
              </div>
  
              {/* Phone in the middle */}
              <div className="w-full md:w-2/4 px-6 py-6 order-1 md:order-2">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="phone.png"
                    alt="Smartphone"
                    className="mx-auto h-[90vh] rounded-3xl shadow "
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#126100]/10 to-transparent opacity-50"></div>
                </div>
              </div>
  
              {/* Security features to the right of the phone */}
              <div className="w-full md:w-1/4 space-y-10 order-3">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                      <img src="/security-logo/shield-check.png" alt="" className="" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Fraud Detection and Monitoring</h3>
                    <p className="text-gray-600 text-sm">
                    We continuously monitor your transactions with cutting-edge fraud detection systems, 
                    instantly flagging any suspicious activity to protect your funds from potential threats.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                   
                      <img src="/security-logo/padlock-check.png" alt="" className="" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Two-Factor Authentication</h3>
                    <p className="text-gray-600 text-sm">
                    SafulPay adds an extra layer of protection with two-factor authentication,
                     ensuring that only you can access your account, even if your password is compromised.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Features