// import { motion } from "framer-motion"
// import { Facebook, Twitter } from "lucide-react"
// import Footer from "../components/Footer"
// import ContactUs from "../components/ContactUs"
// import Navbar from "../components/Navbar"

// const teamMembers = [
//   {
//     name: "Adams Olikewe",
//     role: "Chief Executive Officer",
//     image: "/teams/adewale.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Maxwell Adebayo",
//     role: "CTO",
//     image: "/teams/Tolu.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Thomas Massaquoi",
//     role: "COO",
//     image: "/teams/oyinlola.png",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Chrislin Johnson",
//     role: "Chief Marketing Officer",
//     image: "/team/chrislin.jpg",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Ogbebor Lawel",
//     role: "Technical Director",
//     image: "/team/ogbebor.jpg",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Adaora Judith",
//     role: "Business Analyst",
//     image: "/team/adaora.jpg",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
//   {
//     name: "Simeon Olamilekan",
//     role: "Head of Operations",
//     image: "/team/simeon.jpg",
//     social: {
//       facebook: "https://facebook.com",
//       twitter: "https://twitter.com",
//     },
//   },
// ]



// export default function AboutUs() {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }
  
//   return (
//     <div className="min-h-screen bg-white font-['Outfit']">
//      <Navbar  scrollToSection={scrollToSection}/>

//       {/* Main Content */}
//       <motion.div
//           initial={{ y: "100vh", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex-grow flex flex-col"
//         >

//       <main className="pt-16">
//         {/* Hero Section */}
//         <section className="relative">
//           {/* Background Pattern */}
//           <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
//             <div className="grid grid-cols-12 gap-4">
//               {Array.from({ length: 240 }).map((_, i) => (
//                 <img key={i} src="/logo-pattern.svg" alt="" className="w-8 h-8" />
//               ))}
//             </div>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 container mx-auto px-6 pt-16 pb-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-4xl mx-auto text-center"
//             >
//               <h1 className="text-[56px] font-[Outfit] mb-16">
//                 About <span className="text-[#126100]">SafulPay</span>
//               </h1>

//               <h2 className="text-[32px] font-[Outfit] mb-2">Empowering Financial Freedom</h2>
//               <h2 className="text-[32px] font-[Outfit] mb-8">with Innovation</h2>

//               <div className="flex justify-center items-center gap-3 mb-8 text-[15px] font-[Outfit">
//                 <span className="text-[#126100]">User-friendly</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="text-[#FF7B7B]">Security</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="text-[#FFD700]">Privacy</span>
//               </div>

//               <p className="text-gray-600 mb-6 text-lg text-[Outfit] leading-relaxed">
//                 At SafulPay, we believe in transforming the way people manage, move, and interact with their money. Our
//                 mission is to make financial services secure, accessible, and user-friendly for everyone, no matter
//                 where they are.
//               </p>

//               <p className="text-gray-600 mb-16 text-lg leading-relaxed">
//                 Our team is dedicated to breaking barriers in financial services through innovation. By blending
//                 transparency with top-tier security (including encryption and fraud detection), SafulPay delivers a
//                 financial experience you can trust.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="bg-gray-50 py-20">
//           <div className="container mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-[40px] font-[Outfit] mb-4">
//                 Meet Our Team of <span className="text-[#126100]">Experts</span>
//               </h2>
//               <p className="text-xl font-medium mb-6">Innovators Driving Financial Transformation</p>
//               <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
//                 At SafulPay, our team is comprised of dedicated professionals with deep expertise in their respective
//                 fields. We bring together diverse experience to deliver an exceptional financial experience. The
//                 SAFULPAY team has a shared vision: to make financial services accessible to everyone. We are united by
//                 our values of integrity, innovation, and customer-centricity.
//               </p>
//             </motion.div>

//             {/* Team Grid */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
//               >
//               {teamMembers.map((member, index) => (
//                 <motion.div
//                   key={member.name}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//                   className="group relative bg-white rounded-xl overflow-hidden"
//                 >
//                   {/* Image */}
//                   <div className="aspect-square overflow-hidden">
//                     <img
//                       src={member.image || "/placeholder.svg"}
//                       alt={member.name}
//                       className="w-full h-full object-cover grayscale transition-all duration-300"
//                     />
//                     {/* Overlay */}
//                     <div className="absolute inset-0 bg-[#126100]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                       <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
//                       <p className="text-white/80 mb-4">{member.role}</p>
//                       {/* Social Icons */}
//                       <div className="flex gap-3">
//                         <a href={member.social.facebook} className="text-white hover:text-white/80 transition-colors">
//                           <Facebook size={20} />
//                         </a>
//                         <a href={member.social.twitter} className="text-white hover:text-white/80 transition-colors">
//                           <Twitter size={20} />
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* Download Section */}
//         <section className="bg-black py-20">
//           <div className="container mx-auto px-6">
//             <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
//               <div className="md:w-1/2 mb-12 md:mb-0">
//                 <h2 className="text-[#126100] text-3xl font-[Outfit] mb-4">Download SafulPay Today</h2>
//                 <h3 className="text-white text-xl font-[Outfit] mb-6">Secure, Fast, and Easy Financial Management</h3>
//                 <p className="text-gray-400 text-lg text-[Outfit] mb-8 leading-relaxed">
//                   Experience the future of financial management with SafulPay. We're revolutionizing how you handle your
//                   money with a platform that's secure, intuitive, and designed for everyone.
//                 </p>
//                 <div className="flex space-x-4">
//                   <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
//                     <img src="/google.jpg" alt="Google Play" className="w-6 h-6 mr-3" />
//                     <div>
//                       <p className="text-xs text-gray-600">GET IT ON</p>
//                       <p className="text-sm font-medium">Google Play</p>
//                     </div>
//                   </button>
//                   <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
//                     <img src="/apple.jpg" alt="App Store" className="w-6 h-6 mr-3" />
//                     <div>
//                       <p className="text-xs text-gray-600">Download on the</p>
//                       <p className="text-sm font-medium">App Store</p>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//               <div className="md:w-1/2 flex justify-center">
//                 <img src="/iPhone13.png" alt="SafulPay App" className="max-w-[300px] drop-shadow-2xl" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//               </motion.div>

//       <div className="bg-[#1A1A1A] mt-50">
//         <ContactUs />
//         <Footer />
//       </div>
//     </div>
//   )
// }

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Testimony from "../components/Testimony"
import FAQs from "../components/FAQs"

const teamMembers = [
  {
    name: "Adams Olikewe",
    role: "Chief Executive Officer",
    image: "/teams/adewale.png",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Maxwell Adebayo",
    role: "CTO",
    image: "/teams/Tolu.png",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Thomas Massaquoi",
    role: "COO",
    image: "/teams/oyinlola.png",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Chrislin Johnson",
    role: "Chief Marketing Officer",
    image: "/team/chrislin.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Ogbebor Lawel",
    role: "Technical Director",
    image: "/team/ogbebor.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Adaora Judith",
    role: "Business Analyst",
    image: "/team/adaora.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Simeon Olamilekan",
    role: "Head of Operations",
    image: "/team/simeon.jpg",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
]

export default function AboutUs() {
  const [showSectionNav, setShowSectionNav] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const aboutHeroRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Handle scroll to show/hide section navbar
  useEffect(() => {
    const handleScroll = () => {
      if (aboutHeroRef.current) {
        const heroHeight = aboutHeroRef.current.offsetHeight
        setShowSectionNav(window.scrollY > heroHeight - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    // If we're showing a section, hide it first
    if (activeSection) {
      setActiveSection(null)
    }

    // If we're on the about page and want to go to another section
    if (id !== "about-hero") {
      setActiveSection(id)

      // Scroll to the section after a brief delay to allow state update
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      // Scroll to top of about page
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar scrollToSection={scrollToSection} />

      {/* Section Navbar - Appears when scrolled past hero */}
      {showSectionNav && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-semibold text-[#126100]">SafulPay</span>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <button onClick={() => navigate("/")} className="text-gray-600 hover:text-[#126100] text-[15px]">
                  Close App
                </button>
                <button onClick={() => scrollToSection("about-hero")} className="text-gray-900 font-medium text-[15px]">
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("features-section")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("testimony")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Testimony
                </button>
                <button
                  onClick={() => scrollToSection("faqs")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  FAQs
                </button>
                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Contact Us
                </button>
              </div>

              <button className="bg-[#126100] hover:bg-green-800 text-white rounded-md px-4 py-2 text-sm">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section ref={aboutHeroRef} id="about-hero" className="relative">
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
                At SafulPay, our team is comprised of dedicated professionals with deep expertise in their respective
                fields. We bring together diverse experience to deliver an exceptional financial experience. The
                SAFULPAY team has a shared vision: to make financial services accessible to everyone. We are united by
                our values of integrity, innovation, and customer-centricity.
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
                  className="group relative bg-white rounded-xl overflow-hidden"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#126100]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/80 mb-4">{member.role}</p>
                      {/* Social Icons */}
                      <div className="flex gap-3">
                        <a href={member.social.facebook} className="text-white hover:text-white/80 transition-colors">
                          <Facebook size={20} />
                        </a>
                        <a href={member.social.twitter} className="text-white hover:text-white/80 transition-colors">
                          <Twitter size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Download Section */}
        <section className="bg-black py-10 mb-40">
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
                    <img src="/google.jpg" alt="Google Play" className="w-6 h-6 mr-3" />
                    <div>
                      <p className="text-xs text-gray-600">GET IT ON</p>
                      <p className="text-sm font-medium">Google Play</p>
                    </div>
                  </button>
                  <button className="bg-white rounded-lg py-3 px-6 flex items-center hover:bg-gray-100 transition-colors">
                    <img src="/apple.jpg" alt="App Store" className="w-6 h-6 mr-3" />
                    <div>
                      <p className="text-xs text-gray-600">Download on the</p>
                      <p className="text-sm font-medium">App Store</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="/iPhone13.png" alt="SafulPay App" className="max-w-[300px] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-[#1A1A1A]">
        <ContactUs />
        <Footer />
      </div>

      {/* Conditionally render sections based on activeSection */}
      {activeSection === "features-section" && (
        <div id="features-section">
          <Features />
        </div>
      )}
      {activeSection === "how-it-works" && (
        <div id="how-it-works">
          <HowItWorks />
        </div>
      )}
      {activeSection === "testimony" && (
        <div id="testimony">
          <Testimony />
        </div>
      )}
      {activeSection === "faqs" && (
        <div id="faqs">
          <FAQs />
        </div>
      )}
      {activeSection === "contact-us" && (
        <div id="contact-us" className="bg-[#1A1A1A] ">
          <ContactUs />
          <Footer />
        </div>
      )}
    </div>
  )
}


