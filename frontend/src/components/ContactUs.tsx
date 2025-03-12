// const ContactUs = () => {
//     return (
//       <section id="contact-us" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
//           <div className="max-w-md mx-auto">
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#126100] focus:border-[#126100]"
//                   placeholder="Your name"
//                 />
//               </div>
  
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#126100] focus:border-[#126100]"
//                   placeholder="your@email.com"
//                 />
//               </div>
  
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#126100] focus:border-[#126100]"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>
  
//               <button
//                 type="submit"
//                 className="w-full bg-[#126100] text-white py-2 px-4 rounded-md hover:bg-[#0d4800] transition-colors duration-200"
//               >
//                 Send Message
//               </button>
//             </form>
  
//             <div className="mt-12 space-y-6">
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Email Us</h3>
//                 <p className="text-gray-600">support@safulpay.com</p>
//               </div>
  
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Call Us</h3>
//                 <p className="text-gray-600">+232 77 123456</p>
//               </div>
  
//               <div>
//                 <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
//                 <p className="text-gray-600">123 Main Street, Freetown, Sierra Leone</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
  
//   export default ContactUs
  
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-[#126100] rounded-md flex items-center justify-center mr-2">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[#126100] text-xl font-semibold">SafulPay</span>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter your Local string"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#126100] focus:ring-1 focus:ring-[#126100] outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#126100] text-white px-6 py-2 rounded-lg hover:bg-[#0d4800] transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs

