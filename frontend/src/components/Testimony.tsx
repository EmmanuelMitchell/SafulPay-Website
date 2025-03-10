const Testimony = () => {
    return (
      <section id="testimony" className="md:hidden py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#126100] rounded-full flex items-center justify-center text-white">SA</div>
                <div className="ml-4">
                  <h3 className="font-semibold">Sarah Amara</h3>
                  <p className="text-sm text-gray-500">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SafulPay has transformed how I manage my business finances. The ability to track transactions in
                real-time and make instant payments has saved me countless hours."
              </p>
            </div>
  
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#126100] rounded-full flex items-center justify-center text-white">JK</div>
                <div className="ml-4">
                  <h3 className="font-semibold">John Kamara</h3>
                  <p className="text-sm text-gray-500">Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a student, managing my finances was always a challenge until I found SafulPay. The app is intuitive,
                and I can easily track my spending."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimony
  
  