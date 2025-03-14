
// export default function HowItWorks ()  {
 
//   return (
//     <>
   
//     <section id="how-it-works" className="py-20 bg-black" >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-white mb-4">How Does It Work?</h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Using SafulPay is simple and straightforward. Follow these three easy steps to get started with secure and
//             convenient mobile money management.
//           </p>
//         </div>  

//         <h2 className="text-white text-center p-4">Follow Some Simple Steps for Using SafulPay</h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {/* Step 1 */}
//           <div className="relative">
//             <div className="bg-[#126100]/10 rounded-lg p-8 text-center relative">
//               <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">1</span>
//               </div>
//                 {/* <span className="text-red-500">Logo</span> */}
//                 <div className="flex justify-center p-2">


//                 <img src="/logo/arrow-down-from-arc .png" alt="" />
//                 </div>
//               <h3 className="text-xl font-semibold text-white mb-4">Download & Register</h3>
//               <p className="text-gray-400">
//                 Get SafulPay from your app store and create your account with just a few simple steps.
//               </p>
//               {/* Connecting Line */}
//               <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#126100]/30 -translate-y-1/2"></div>
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className="relative">
//             <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
//               <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">2</span>
//               </div>
//               <div className="flex justify-center p-2">

//               <img src="/logo/admin-alt.png" alt="" className="" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">Add Your Funds</h3>
//               <p className="text-gray-400">
//                 Link your bank account or add money through various payment methods securely.
//               </p>
//               {/* Connecting Line */}
//               <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#126100]/30 -translate-y-1/2"></div>
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div>
//             <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
//               <div className="w-16 h-16 bg-[#126100] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-2xl font-bold text-white">3</span>
//               </div>
//               <div className="flex justify-center p-2">


//               <img src="/logo/Vector.png" alt="" />
//               </div>
//               <h3 className="text-xl font-semibold text-white mb-4">Start Transacting</h3>
//               <p className="text-gray-400">Begin sending money, paying bills, and managing your finances with ease.</p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </section>
//               </>
//   )
// }


export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="max-w-[1400px] mx-auto py-20 bg-black rounded-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-['Outfit'] text-white mb-4">How Does It Work?</h2>
            <p className="text-gray-400 font-['Outfit'] max-w-2xl mx-auto">
              Using SafulPay is simple and straightforward. Follow these three easy steps to get started with secure and
              convenient mobile money management.
            </p>
          </div>

          <h2 className="text-white text-center p-4 font-['Outfit']">
            Follow Some Simple Steps for Using SafulPay
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-18 max-w-5xl mx-auto relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[#126100]/10 rounded-lg p-8 text-center relative">
                {/* <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div> */}
                <div className="w-16 h-16 bg-gray-100/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <span className="text-2xl font-bold text-white">1</span>
                </div>

                <div className="flex justify-center p-2">
                  <img src="/logo/arrow-down-from-arc .png" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Download & Register</h3>
                <p className="text-gray-400">
                  Get SafulPay from your app store and create your account with just a few simple steps.
                </p>
              </div>
            </div>

            {/* Icon Between Step 1 & Step 2 */}
            <div className="hidden md:flex absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <img src="/logo/Line 138.png" alt="Arrow Icon" className="h-10 w-20" />
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gray-100/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="flex justify-center p-2">
                  <img src="/logo/admin-alt.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Add Your Funds</h3>
                <p className="text-gray-400">
                  Link your bank account or add money through various payment methods securely.
                </p>
              </div>
            </div>

            {/* Icon Between Step 2 & Step 3 */}
            <div className="hidden md:flex absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src="/logo/Line13.png" alt="Arrow Icon" className="h-10 w-20" />
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-[#126100]/10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gray-100/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="flex justify-center p-2">
                  <img src="/logo/Vector.png" alt="" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Start Transacting</h3>
                <p className="text-gray-400">
                  Begin sending money, paying bills, and managing your finances with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


