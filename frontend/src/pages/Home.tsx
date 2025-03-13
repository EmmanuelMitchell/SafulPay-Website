// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"
// import Navbar from "../components/Navbar"
// import HowItWorks from "../components/HowItWorks"
// import Testimony from "../components/Testimony"
// import FAQs from "../components/FAQs"
// import ContactUs from "../components/ContactUs"
// import Features from "../components/Features"
// import Footer from "../components/Footer"

// export default function Home() {
//   const navigate = useNavigate()
//   const [isHovering, setIsHovering] = useState<boolean>(false)
//   const [redirectTimer, setRedirectTimer] = useState<number | null>(null)

//   useEffect(() => {
//     return () => {
//       if (redirectTimer !== null) clearTimeout(redirectTimer)
//     }
//   }, [redirectTimer])

//   const handleMouseEnter = () => {
//     setIsHovering(true)
//     const timer: number = window.setTimeout(() => {
//       navigate("/features")
//     }, 800)
//     setRedirectTimer(timer)
//   }

//   const handleMouseLeave = () => {
//     setIsHovering(false)
//     if (redirectTimer !== null) {
//       clearTimeout(redirectTimer)
//       setRedirectTimer(null)
//     }
//   }

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <>
//       {/* Mobile Navbar - Only visible on mobile */}
//       <div className="md:hidden">
//         <Navbar scrollToSection={scrollToSection} isHomePage={true} />
//       </div>

//       {/* Hero Section with Fixed Height */}
//       <div className="h-screen font-['Outfit'] flex flex-col bg-black overflow-hidden relative">
//         {/* Desktop Navigation - Only visible on desktop */}
//         <header className="container mx-auto px-4 pt-6 pb-4 flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="w-10 h-10 mr-2 rounded-md flex items-center justify-center">
//               <img src="/icon.png" alt="SafulPay Logo" className="h-8" />
//             </div>
//             <span className="text-[#406B37] text-2xl font-[Outfit]">SafulPay</span>
//           </div>

//           {/* Center Open App button on desktop */}
//           <div className="hidden md:flex items-center justify-center flex-grow">
//             <button
//               className={`text-gray-300 font-[Outfit] hover:text-white relative ${isHovering ? "text-white" : ""}`}
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => navigate("/features")}
//             >
//               Open App
//               {isHovering && (
//                 <div
//                   className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
//                   style={{
//                     animation: "progressBar 0.8s linear",
//                     animationFillMode: "forwards",
//                   }}
//                 />
//               )}
//             </button>
//           </div>

//           <div className="hidden md:block">
//             <button className="bg-[#126100] hover:bg-green-800 text-white rounded-full px-6 py-2">Download App</button>
//           </div>
//         </header>

//         <motion.div
//           initial={{ y: "100vh", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex-grow flex flex-col"
//         >
//           {/* Hero Section */}
//           <section className="container mx-auto px-4 text-center mt-4">
//             <h1 className="text-5xl md:text-7xl font-[Outfit] text-white mb-4">
//               Banking Just Got Better
//               <br />
//               With <span className="text-[#126100]">SafulPay</span>
//             </h1>
//             <p className="text-gray-300 max-w-3xl font-[Outfit] mx-auto text-lg md:text-xl mb-6">
//               Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their
//               finances with ease.
//             </p>
//           </section>
//           <div className="mt-8 text-center">
//            <div className="flex justify-center space-x-4">
//              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
//                <img src="google.jpg" alt="Google Play" className="w-6 h-6 mr-2" />
//                <span className="text-black">Google Play</span>
//              </button>

//              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
//                <img src="apple.jpg" alt="App Store" className="w-6 h-6 mr-2" />
//                <span className="text-black">App Store</span>
//              </button>
//            </div>
//          </div>


//           {/* Main Content with Banner and Phone */}
//           <div className="relative flex-grow flex flex-col items-center justify-center">
//             {/* Green Banner/Rope */}
//             <div className="absolute w-full transform rotate-[8.29deg] bg-[#126100] h-20 z-10 flex items-center justify-center">
//               <div className="flex items-center space-x-8 text-white animate-sliding-banner">
//                 <div className="flex items-center">
//                   <div className="bg-red-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">RIA</div>
//                   <span>RIA Money</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-yellow-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">WU</div>
//                   <span>Western Union</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-white rounded-full w-8 h-8 mr-2 flex items-center justify-center text-black">
//                     MG
//                   </div>
//                   <span>Money Gram</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-orange-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">OM</div>
//                   <span>Orange Money</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="bg-red-600 rounded-full w-8 h-8 mr-2 flex items-center justify-center">V</div>
//                   <span>VISA & Master Card</span>
//                 </div>
//               </div>
//             </div>

//             {/* Phone Mockup */}
//             <div className="max-w-xs mx-auto mt-8 z-20">
//               <img
//                 src="/phone-mock.png"
//                 alt="SafulPay App"
//                 className="w-full h-auto object-contain"
//                 style={{ maxHeight: "60vh" }}
//               />
//             </div>
//           </div>

          
//           <div className="bg-gray-100 rounded-t-3xl py-5 text-center mt-auto">
//             {/* <p className="text-gray-600">&copy; {currentYear} SafulPay. All rights reserved.</p> */}
//           </div>
//         </motion.div>
//       </div>

     
//       <div className="">
//         <Features />
//         <HowItWorks />
//         <Testimony />
//         <FAQs />
//         {/* ContactUs is now part of the dark footer section */}
//         <div className="bg-[#1A1A1A] mt-30 ">
//           <ContactUs />
//           <Footer />
//         </div>
//       </div>
//     </>
//   )
// }



import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks"
import Testimony from "../components/Testimony"
import FAQs from "../components/FAQs"
import ContactUs from "../components/ContactUs"
import Features from "../components/Features"
import Footer from "../components/Footer"

export default function Home() {
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [redirectTimer, setRedirectTimer] = useState<number | null>(null)
  const [showSectionNav, setShowSectionNav] = useState<boolean>(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const currentYear = new Date().getFullYear()

  // Handle scroll to show/hide section navbar
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight
        setShowSectionNav(window.scrollY > heroHeight - 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (redirectTimer !== null) clearTimeout(redirectTimer)
    }
  }, [redirectTimer])

  const handleMouseEnter = () => {
    setIsHovering(true)
    const timer: number = window.setTimeout(() => {
      if (featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: "smooth" })
      }
    }, 800)
    setRedirectTimer(timer)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer)
      setRedirectTimer(null)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile Navbar - Only visible on mobile */}
      <div className="md:hidden">
        <Navbar scrollToSection={scrollToSection} isHomePage={true} />
      </div>

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
                <button onClick={scrollToTop} className="text-gray-600 hover:text-[#126100] text-[15px]">
                  Close App
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
                <button
                  onClick={() => (window.location.href = "/about-us")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  About Us
                </button>
              </div>

              <button className="bg-[#126100] hover:bg-green-800 text-white rounded-md px-4 py-2 text-sm">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Fixed Height */}
      <div ref={heroRef} className="h-screen flex flex-col bg-black overflow-hidden relative">
        {/* Desktop Navigation - Only visible on desktop */}
        <header className="container mx-auto px-4 pt-6 pb-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 mr-2 rounded-md flex items-center justify-center">
              <img src="/icon.png" alt="SafulPay Logo" className="h-8" />
            </div>
            <span className="text-[#406B37] text-2xl font-[Outfit]">SafulPay</span>
          </div>

          {/* Center Open App button on desktop */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <button
              className={`text-gray-300 font-[Outfit] hover:text-white relative ${isHovering ? "text-white" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Open App
              {isHovering && (
                <div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"
                  style={{
                    animation: "progressBar 0.8s linear",
                    animationFillMode: "forwards",
                  }}
                />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <button className="bg-[#126100] hover:bg-green-800 text-white rounded-full px-6 py-2">Download App</button>
          </div>
        </header>

        <motion.div
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-grow flex flex-col"
        >
          {/* Hero Section */}
          <section className="container mx-auto px-4 text-center mt-4">
            <h1 className="text-5xl md:text-7xl font-[Outfit] text-white mb-4">
              Banking Just Got Better
              <br />
              With <span className="text-[#126100]">SafulPay</span>
            </h1>
            <p className="text-gray-300 max-w-3xl font-[Outfit] mx-auto text-lg md:text-xl mb-6">
              Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their
              finances with ease.
            </p>
          </section>

          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-4">
              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
                <img src="google.jpg" alt="Google Play" className="w-6 h-6 mr-2" />
                <span className="text-black">Google Play</span>
              </button>

              <button className="bg-white rounded-lg py-3 px-6 flex items-center">
                <img src="apple.jpg" alt="App Store" className="w-6 h-6 mr-2" />
                <span className="text-black">App Store</span>
              </button>
            </div>
          </div>

          {/* Main Content with Banner and Phone */}
          <div className="relative flex-grow flex flex-col items-center justify-center">
            {/* Green Banner/Rope */}
            <div className="absolute w-full transform rotate-[8.29deg] bg-[#126100] h-20 z-10 flex items-center justify-center">
              <div className="flex items-center space-x-8 text-white animate-sliding-banner">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">RIA</div>
                  <span>RIA Money</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">WU</div>
                  <span>Western Union</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white rounded-full w-8 h-8 mr-2 flex items-center justify-center text-black">
                    MG
                  </div>
                  <span>Money Gram</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center">OM</div>
                  <span>Orange Money</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 rounded-full w-8 h-8 mr-2 flex items-center justify-center">V</div>
                  <span>VISA & Master Card</span>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="max-w-xs mx-auto mt-8 z-20">
              <img
                src="/phone-mock.png"
                alt="SafulPay App"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "60vh" }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 rounded-t-3xl py-5 text-center mt-auto">
            <p className="text-gray-600">&copy; {currentYear} SafulPay. All rights reserved.</p>
          </div>
        </motion.div>
      </div>

      {/* All Sections */}
      <div className="bg-white">
        <div id="features-section" ref={featuresRef}>
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimony">
          <Testimony />
        </div>
        <div id="faqs">
          <FAQs />
        </div>
        <div id="contact-us" className="bg-[#1A1A1A] mt-10">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  )
}

