
import type React from "react"
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "/user.jpg",
    quote:
      "SafulPay has transformed how I manage my business finances. The real-time tracking and instant payments have saved me countless hours.",
    position: { top: "10%", left: "20%" },
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelancer",
    image: "/Test.png",
    quote:
      "The app is incredibly intuitive and the customer support is outstanding. I can't imagine running my freelance business without it.",
    position: { top: "30%", right: "15%" },
  },
  {
    id: 3,
    name: "Aminata Kamara",
    role: "Market Vendor",
    image: "/Testimo.png",
    quote:
      "SafulPay makes it so easy to handle payments. My customers love the convenience, and I love the security it provides.",
    position: { bottom: "25%", left: "25%" },
  },
  {
    id: 4,
    name: "David Williams",
    role: "Student",
    image: "/Testi.png",
    quote:
      "The low fees and user-friendly interface make SafulPay perfect for students. Managing my finances has never been easier.",
    position: { bottom: "20%", right: "20%" },
  },
]

const Testimony = () => {
  return (
    <div id="testimony" className="bg-white">
      {/* Testimonials Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Don't just take our word for it.</h2>

          {/* Testimonials Container */}
          <div className="relative h-[600px]">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[500px] h-[500px] border border-gray-200 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="icon.png" alt="Decorative cactus" className="w-12 h-12 text-[#126100]" />
              </div>
            </div>

            {/* Testimonial Cards and Avatars */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="absolute" style={testimonial.position as React.CSSProperties}>
                {/* Avatar */}
                <div className="relative group">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#126100] cursor-pointer transform transition-transform duration-300 hover:scale-110">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Testimonial Card - Shows on hover */}
                  <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-xl shadow-lg p-6 w-72 transform -translate-x-1/2 -translate-y-full -mt-4">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 text-sm leading-relaxed">"{testimonial.quote}"</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-[#406B37] mb-4">Download SafulPay Today</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Secure, Fast and Easy Financial Management. Get started with SafulPay and experience seamless
              transactions, real-time tracking, and top-notch security.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
                <img src="/google.jpg" alt="Google Play" className="w-6 h-6 mr-2" />
                <span className="text-black">Google Play</span>
              </button>
              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
                <img src="/apple.jpg" alt="App Store" className="w-6 h-6 mr-2" />
                <span className="text-black">App Store</span>
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/iPhone13.png"
              alt="SafulPay App"
              className="max-w-xs transform rotate-12 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimony

