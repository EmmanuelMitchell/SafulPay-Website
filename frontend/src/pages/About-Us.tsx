import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const teamMembers = [
  {
    name: "Adams Olikewe",
    role: "Chief Executive Officer",
    image: "/team/adams.jpg",
  },
  {
    name: "Maxwell Adebayo",
    role: "CTO",
    image: "/team/maxwell.jpg",
  },
  {
    name: "Thomas Massaquoi",
    role: "COO",
    image: "/team/thomas.jpg",
  },
  {
    name: "Chrislin Johnson",
    role: "Chief Marketing Officer",
    image: "/team/chrislin.jpg",
  },
  {
    name: "Ogbebor Lawel",
    role: "Technical Director",
    image: "/team/ogbebor.jpg",
  },
  {
    name: "Adaora Judith",
    role: "Business Analyst",
    image: "/team/adaora.jpg",
  },
  {
    name: "Simeon Olamilekan",
    role: "Head of Operations",
    image: "/team/simeon.jpg",
  },
]

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 240 }).map((_, i) => (
                <img key={i} src="/logo-pattern.svg" alt="" className="w-8 h-8" />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 pt-16 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-[56px] font-bold mb-16">
                About <span className="text-[#126100]">SafulPay</span>
              </h1>

              <h2 className="text-[32px] font-bold mb-2">Empowering Financial Freedom</h2>
              <h2 className="text-[32px] font-bold mb-8">with Innovation</h2>

              <div className="flex justify-center items-center gap-3 mb-8 text-[15px] font-medium">
                <span className="text-[#126100]">User-friendly</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#FF7B7B]">Security</span>
                <span className="text-gray-400">•</span>
                <span className="text-[#FFD700]">Privacy</span>
              </div>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                At SafulPay, we believe in transforming the way people manage, move, and interact with their money. Our
                mission is to make financial services secure, accessible, and user-friendly for everyone, no matter
                where they are.
              </p>

              <p className="text-gray-600 mb-16 text-lg leading-relaxed">
                Our team is dedicated to breaking barriers in financial services through innovation. By blending
                transparency with top-tier security (including encryption and fraud detection), SafulPay delivers a
                financial experience you can trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-[40px] font-bold mb-4">
                Meet Our Team of <span className="text-[#126100]">Experts</span>
              </h2>
              <p className="text-xl font-medium mb-6">Innovators Driving Financial Transformation</p>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                At SafulPay, our team is comprised of dedicated professionals who have built their careers in fintech,
                banking, and customer service. We bring together diverse expertise to deliver an exceptional financial
                experience.
              </p>
            </motion.div>

            {/* Team Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-black py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h2 className="text-[#126100] text-3xl font-bold mb-4">Download SafulPay Today</h2>
                <h3 className="text-white text-xl font-semibold mb-6">Secure, Fast, and Easy Financial Management</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Experience the future of financial management with SafulPay. We're revolutionizing how you handle your
                  money with a platform that's secure, intuitive, and designed for everyone.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
                    <img src="/google-play.svg" alt="Google Play" className="w-6 h-6 mr-3" />
                    <div>
                      <p className="text-xs text-gray-600">GET IT ON</p>
                      <p className="text-sm font-medium">Google Play</p>
                    </div>
                  </button>
                  <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
                    <img src="/app-store.svg" alt="App Store" className="w-6 h-6 mr-3" />
                    <div>
                      <p className="text-xs text-gray-600">Download on the</p>
                      <p className="text-sm font-medium">App Store</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="/app-preview.png" alt="SafulPay App" className="max-w-[300px] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-[#126100] py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-white text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-green-100 mb-8">Subscribe to our newsletter for the latest updates and features.</p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-900 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

