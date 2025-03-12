
// const Features = () => {
//     return (
//       <div className="font-sans">
//         {/* Features You Will Get Section */}
//         <section className="bg-white py-16 px-4 text-center">
//           <h2 className="text-3xl font-bold mb-2">Features You Will Get</h2>
//           <p className="text-gray-600 mb-12 max-w-xl mx-auto">
//             Stay updated, connected, and secure with our powerful features designed to enhance your experience.
//           </p>
  
//           <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
//             <img src="animation.png" alt="" />
//           </div>
//         </section>
  
//         {/* Explore Even More Powerful Features Section */}
//         <section className="bg-[#126100] py-16 px-4 text-white relative overflow-hidden">
//           <div className="p-10 relative z-10">
//             <h2 className="text-3xl font-bold mb-4 text-center">Explore Even More Powerful Features</h2>
//             <p className="text-center text-white/80 max-w-2xl mx-auto">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, suscipit!
//             </p>
//           </div>
  
//           <div className="flex justify-center max-w-5xl mx-auto relative z-10 mb-16">
//             {/* Single feature image */}
//             <img src="features.png" alt="Feature showcase" className="rounded-lg max-w-full shadow-xl" />
//           </div>
  
        
//         </section>
  
//         {/* Additional image section */}
//         <div className="w-full">
//           <img src="rope.png" alt="Rope illustration" className="w-full" />
//         </div>
  
//         {/* Your Security Is Our Priority Section */}
//         <section className="bg-white py-16 px-4">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-3xl font-bold mb-4 text-center">Your Security Is Our Priority</h2>
//             <p className="text-gray-600 mb-12 text-center max-w-xl mx-auto">
//               We employ the latest encryption technology and security practices to ensure your data remains protected at
//               all times.
//             </p>
  
//             <div className="flex flex-wrap justify-between items-center">
//               {/* Security features to the left of the phone */}
//               <div className="w-full md:w-1/4 space-y-8 order-2 md:order-1">
//                 <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
//                   <div className="bg-green-100 p-2 rounded-lg shadow-sm">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#126100]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Data Encryption</h3>
//                     <p className="text-gray-600 text-sm">Your data is encrypted using industry-standard protocols.</p>
//                   </div>
//                 </div>
  
//                 <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
//                   <div className="bg-green-100 p-2 rounded-lg shadow-sm">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#126100]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Secure Authentication</h3>
//                     <p className="text-gray-600 text-sm">Multiple layers of authentication to protect your account.</p>
//                   </div>
//                 </div>
//               </div>
  
//               {/* Phone in the middle */}
//               <div className="w-full md:w-2/4 px-4 py-8 order-1 md:order-2">
//                 <div className="relative transform hover:scale-105 transition-transform duration-500">
//                   <img
//                     src="phone.png"
//                     alt="Smartphone showing login screen"
//                     className="mx-auto rounded-3xl shadow-xl border border-gray-200"
//                   />
//                   <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#126100]/10 to-transparent opacity-50"></div>
//                 </div>
//               </div>
  
//               {/* Security features to the right of the phone */}
//               <div className="w-full md:w-1/4 space-y-8 order-3">
//                 <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
//                   <div className="bg-green-100 p-2 rounded-lg shadow-sm">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#126100]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Regular Audits</h3>
//                     <p className="text-gray-600 text-sm">
//                       We conduct regular security audits to identify and address potential vulnerabilities.
//                     </p>
//                   </div>
//                 </div>
  
//                 <div className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-300">
//                   <div className="bg-green-100 p-2 rounded-lg shadow-sm">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 text-[#126100]"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Automatic Updates</h3>
//                     <p className="text-gray-600 text-sm">
//                       Our system is constantly updated to protect against the latest security threats.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     )
//   }
  
//   export default Features
  
const Features = () => {
    return (
      <div className="font-['Outfit']">
        {/* Features You Will Get Section */}
        <section className="bg-white py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-3">Features You Will Get</h2>
          <p className="text-gray-600 mb-14 max-w-xl mx-auto">
            Stay updated, connected, and secure with our powerful features designed to enhance your experience.
          </p>
  
          <div className="flex justify-center items-center gap-8 max-w-4xl mx-auto">
            <img src="animation.png" alt="" />
          </div>
        </section>
  
        {/* Explore Even More Powerful Features Section */}
        <section className="bg-[#126100] py-1 px-6 text-white relative overflow-hidden">
          <div className="p-12 relative z-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Explore Even More Powerful Features</h2>
            <p className="text-center text-white/80 max-w-2xl mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, suscipit!
            </p>
          </div>
  
          <div className="flex justify-center max-w-5xl mx-auto relative z-10">
            {/* Single feature image */}
            <img src="features.png" alt="Feature showcase" className="rounded-lg max-w-full shadow-xl" />
          </div>
        </section>
  
        {/* Additional image section */}
        <div className="w-full">
          <img src="rope.png" alt="Rope illustration" className="w-full" />
        </div>
  
        {/* Your Security Is Our Priority Section */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-5 text-center">Your Security Is Our Priority</h2>
            <p className="text-gray-600 mb-14 text-center max-w-xl mx-auto">
              We employ the latest encryption technology and security practices to ensure your data remains protected at
              all times.
            </p>
  
            <div className="flex flex-wrap justify-between items-center">
              {/* Security features to the left of the phone */}
              <div className="w-full md:w-1/4 space-y-10 order-2 md:order-1">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    <svg
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Data Encryption</h3>
                    <p className="text-gray-600 text-sm">Your data is encrypted using industry-standard protocols.</p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    <svg
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
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Secure Authentication</h3>
                    <p className="text-gray-600 text-sm">Multiple layers of authentication to protect your account.</p>
                  </div>
                </div>
              </div>
  
              {/* Phone in the middle */}
              <div className="w-full md:w-2/4 px-6 py-6 order-1 md:order-2">
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="phone.png"
                    alt="Smartphone"
                    className="mx-auto rounded-3xl shadow "
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#126100]/10 to-transparent opacity-50"></div>
                </div>
              </div>
  
              {/* Security features to the right of the phone */}
              <div className="w-full md:w-1/4 space-y-10 order-3">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    <svg
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
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Regular Audits</h3>
                    <p className="text-gray-600 text-sm">
                      We conduct regular security audits to identify and address potential vulnerabilities.
                    </p>
                  </div>
                </div>
  
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-green-100 p-3 rounded-lg shadow-sm">
                    <svg
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Automatic Updates</h3>
                    <p className="text-gray-600 text-sm">
                      Our system is constantly updated to protect against the latest security threats.
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