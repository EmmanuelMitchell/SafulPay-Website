
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import HowItWorks from "../components/HowItWorks"
import Testimony from "../components/Testimony"
import FAQs from "../components/FAQs"
import ContactUs from "../components/ContactUs"

export default function Home() {
  const navigate = useNavigate()
  const [isHovering, setIsHovering] = useState<boolean>(false)
  const [redirectTimer, setRedirectTimer] = useState<number | null>(null)
  // const currentYear = new Date().getFullYear()

  useEffect(() => {
    return () => {
      if (redirectTimer !== null) clearTimeout(redirectTimer)
    }
  }, [redirectTimer])

  const handleMouseEnter = () => {
    setIsHovering(true)
    const timer: number = window.setTimeout(() => {
      navigate("/features")
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

  return (
    <>
      {/* Mobile Navbar - Only visible on mobile */}
      <div className="md:hidden">
        <Navbar scrollToSection={scrollToSection} isHomePage={true} />
      </div>

      {/* Hero Section with Fixed Height */}
      <div className="h-screen flex flex-col bg-black overflow-hidden relative">
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
              onClick={() => navigate("/features")}
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
            {/* <p className="text-gray-600">&copy; {currentYear} SafulPay. All rights reserved.</p> */}
          </div>
        </motion.div>
      </div>

      {/* Scrollable Sections - Only visible on mobile */}
      <div className="md:hidden">
        <HowItWorks />
        <Testimony />
        <FAQs />
        <ContactUs />
      </div>
    </>
  )
}

