

const ContactUs = () => {


  return (
    <>
    <div  className=" pb-8 px-4">
      <div id="contact-us" className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 transform -translate-y-12">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-2">
         
            <img src="icon.png" alt="" className="h-8" />
          
          <span className="text-[#126100] text-xl font-semibold">SafulPay</span>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-[#126100] focus:ring-1 focus:ring-[#126100] outline-none transition-colors duration-200"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-l from-[#848484] to-[#126100] text-white px-6 py-2 rounded-lg hover:bg-[#0d4800] transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default ContactUs


