const Testimony = () => {
  return (
    <section id="testimony" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Don't just take our word for it.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about their experience with SafulPay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial Cards */}
          <div className="bg-gray-50 rounded-lg p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#126100] rounded-full flex items-center justify-center text-white font-semibold">
                SA
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Sarah Amara</h3>
                <p className="text-sm text-gray-500">Business Owner</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              "SafulPay has transformed how I manage my business finances. The real-time transaction tracking and
              instant payments have saved me countless hours."
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#126100] rounded-full flex items-center justify-center text-white font-semibold">
                JK
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">John Kamara</h3>
                <p className="text-sm text-gray-500">Student</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              "The app is intuitive and perfect for students like me. Low transaction fees and excellent customer
              support make it my go-to financial app."
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 relative">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#126100] rounded-full flex items-center justify-center text-white font-semibold">
                AM
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Aminata Mansaray</h3>
                <p className="text-sm text-gray-500">Market Vendor</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600">
              SafulPay has made my market business so much easier. No more cash handling worries, and my customers love
              the convenience."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimony

