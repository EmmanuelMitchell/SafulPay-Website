// import { Link } from "react-router-dom"
// import { ArrowLeft } from "lucide-react"
// import Footer from "../components/Footer"
// import ContactUs from "../components/ContactUs"

// const sections = [
//   {
//     title: "Acceptance of Terms",
//     content: `By accessing and using the SafulPay application, you acknowledge and agree to these terms and conditions.

// If you do not agree with any of these terms, you should refrain from using our services. Your use of the SafulPay application constitutes your acceptance of these terms and creates a binding legal agreement between you and SafulPay.`,
//   },
//   {
//     title: "Description of Services",
//     content: `SafulPay is a financial application designed to empower users with quality financial services. The specific features and functionalities of SafulPay are comprehensively outlined within the application.

// Please note that these features and functionalities may be subject to change, and SafulPay will notify users of any modifications in advance. It is the user's responsibility to stay informed about the services through the application.`,
//   },
//   {
//     title: "User Registration and Responsibilities",
//     content: `To use SafulPay, users must create an account and provide accurate information.

// Users are responsible for maintaining the confidentiality of their account credentials and are liable for all activities performed under their account. Any activities conducted under a user's account will be deemed their responsibility, and they will be held accountable for any resulting consequences.`,
//   },
//   {
//     title: "Privacy and Data Security",
//     content: `SafulPay is committed to protecting user privacy. Our Privacy Policy outlines how we collect, use, and protect user information. By using SafulPay, you consent to the terms of our Privacy Policy. We encourage users to review the Privacy Policy regularly to stay informed about how their data is handled.`,
//   },
//   {
//     title: "Security Measures",
//     content: `SafulPay employs industry-standard security measures to protect user data. Users are obligated to adhere to recommended security guidelines to maintain the integrity of their accounts and the overall security of the application.

// Any instances of unauthorized access or suspicious activities should be promptly reported to SafulPay, fostering a collaborative effort to uphold the security of the platform.`,
//   },
//   {
//     title: "Payments and Fees",
//     content: `Users agree to pay all applicable fees associated with SafulPay services. Payment details, including fees and charges, are outlined within the application.`,
//   },
//   {
//     title: "Reversal",
//     content: `SafulPay's reversal policies, essential for transaction reversals, are conveniently accessible within the application.

// Users are obligated to comply with these policies when initiating the reversal of transactions or requesting refunds. It is imperative to review and understand the details provided within the application to ensure adherence to SafulPay's established procedures for transaction reversals.`,
//   },
//   {
//     title: "User Conduct",
//     content: `Users must comply with all applicable laws and regulations when using SafulPay. Any use of the application for illegal or fraudulent activities is strictly prohibited.`,
//   },
//   {
//     title: "Limitation of Liability",
//     content: `SafulPay is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. Users acknowledge that the use of financial services involves inherent risks.`,
//   },
//   {
//     title: "Termination of Services",
//     content: `SafulPay reserves the right to suspend or terminate user accounts for violations of these terms and conditions, fraudulent activities, or other reasons deemed necessary for the security and integrity of the application.`,
//   },
//   {
//     title: "Amendments and Updates",
//     content: `SafulPay may update these terms and conditions from time to time. Users will be notified of significant changes, and continued use of SafulPay constitutes acceptance of the modified terms.

// By using SafulPay, you affirm that you have read, understood, and agree to be bound by these terms and conditions.`,
//   },
// ]

// export default function TermsAndConditions() {
 
//   return (
//     <div className="min-h-screen bg-[#F8F9FA]">
     

//       {/* Header */}
//       <div className="container mx-auto px-4 pt-20 pb-8">
//         <div className="bg-[#1A1A1A] rounded-2xl p-8">
//           <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
//             <ArrowLeft className="mr-2" size={20} />
//             <span>Back</span>
//           </Link>
//           <h1 className="text-[#126100] text-3xl md:text-4xl font-bold">TERMS & CONDITIONS</h1>
//           <p className="text-gray-400 mt-2">Last Updated: November 2023</p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 max-w-4xl pb-16">
//         {sections.map((section, index) => (
//           <section key={index} className="mb-8">
//             <h2 className="text-[#126100] text-xl font-bold mb-4">{section.title}</h2>
//             {section.content.split("\n\n").map((paragraph, pIndex) => (
//               <p key={pIndex} className="text-gray-700 text-[15px] leading-relaxed mb-4">
//                 {paragraph}
//               </p>
//             ))}
//           </section>
//         ))}
//       </div>


//     <div  className="bg-[#1A1A1A] mt-30">

// <ContactUs />
// {/* Footer */}
// <Footer />
// </div>
//     </div>
//   )
// }


import { useState, useEffect, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion" // Add this import
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import Navbar from "../components/Navbar"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import Testimony from "../components/Testimony"
import FAQs from "../components/FAQs"

// Define types for the sections
interface Section {
  title: string
  content: string[]
}

const sections: Section[] = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing and using the SafulPay application, you acknowledge and agree to these terms and conditions.",
      "If you do not agree to any of these terms, you should refrain from using our services. Your use of the SafulPay application constitutes your acceptance of these terms and creates a binding legal agreement between you and SafulPay.",
    ],
  },
  {
    title: "Description of Services",
    content: [
      "SafulPay is a financial application designed to empower users with quality financial services. The specific features and functionalities of SafulPay are comprehensively outlined within the application.",
      "Please note that these features and functionalities may be subject to change, and SafulPay will notify users of any modifications in advance. It is the user's responsibility to stay informed about the services through the application.",
    ],
  },
  {
    title: "User Registration and Responsibilities",
    content: [
      "To use SafulPay, users must create an account and provide accurate information.",
      "Users are responsible for maintaining the confidentiality of their account credentials and are liable for all activities performed under their account. Any activities conducted under a user's account will be deemed their responsibility, and they will be held accountable for any resulting consequences.",
    ],
  },
  {
    title: "Privacy and Data Security",
    content: [
      "SafulPay is committed to protecting user privacy. Our Privacy Policy outlines how we collect, use, and protect user information. By using SafulPay, you consent to the terms of our Privacy Policy. We encourage users to review the Privacy Policy regularly to stay informed about how their data is handled.",
    ],
  },
  {
    title: "Security Measures",
    content: [
      "SafulPay employs industry-standard security measures to protect user data. Users are obligated to adhere to recommended security guidelines to maintain the integrity of their accounts and the overall security of the application.",
      "Any instances of unauthorized access or suspicious activities should be promptly reported to SafulPay, fostering a collaborative effort to uphold the security of the platform.",
    ],
  },
  {
    title: "Payments and Fees",
    content: [
      "Users agree to pay all applicable fees associated with SafulPay services. Payment details, including fees and charges, are outlined within the application.",
    ],
  },
  {
    title: "Reversal",
    content: [
      "SafulPay's reversal policies, essential for transaction reversals, are conveniently accessible within the application.",
      "Users are obligated to comply with these policies when initiating the reversal of transactions or requesting refunds. It is imperative to review and understand the details provided within the application to ensure adherence to SafulPay's established procedures for transaction reversals.",
    ],
  },
  {
    title: "User Conduct",
    content: [
      "Users must comply with all applicable laws and regulations when using SafulPay. Any use of the application for illegal or fraudulent activities is strictly prohibited.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "SafulPay is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. Users acknowledge that the use of financial services involves inherent risks.",
    ],
  },
  {
    title: "Termination of Services",
    content: [
      "SafulPay reserves the right to suspend or terminate user accounts for violations of these terms and conditions, fraudulent activities, or other reasons deemed necessary for the security and integrity of the application.",
    ],
  },
  {
    title: "Amendments and Updates",
    content: [
      "SafulPay may update these terms and conditions from time to time. Users will be notified of significant changes, and continued use of SafulPay constitutes acceptance of the modified terms.",
      "By using SafulPay, you affirm that you have read, understood, and agree to be bound by these terms and conditions.",
    ],
  },
]

export default function TermsAndConditions() {
  const navigate = useNavigate()
  const [showSectionNav, setShowSectionNav] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const termsHeroRef = useRef<HTMLDivElement>(null)

  // Handle scroll to show/hide section navbar
  useEffect(() => {
    const handleScroll = () => {
      if (termsHeroRef.current) {
        const heroHeight = termsHeroRef.current.offsetHeight
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

    // If we're on the terms page and want to go to another section
    if (id !== "terms-hero") {
      setActiveSection(id)

      // Scroll to the section after a brief delay to allow state update
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      // Scroll to top of terms page
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Main Navbar */}
      <Navbar scrollToSection={scrollToSection}/>

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
                <button onClick={() => scrollToSection("terms-hero")} className="text-gray-900 font-medium text-[15px]">
                  Terms & Conditions
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

      {/* Header */}
      <motion.div
        ref={termsHeroRef}
        id="terms-hero"
        className="container mx-auto px-4 pt-20 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#121212] to-[#262626] rounded-4xl p-12 max-w-6xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span className="font-['outfit']">Back</span>
          </Link>
          <h1 className="text-[#126100] text-3xl md:text-4xl font-['outfit']">TERMS & CONDITIONS</h1>
          <p className="text-gray-400 mt-2 font-['outfit']">Last Updated: November 2023</p>
        </div>
      </motion.div>

      {/* Content */}
      {!activeSection && (
        <motion.div
          className="container mx-auto px-4 max-w-4xl pb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
            >
              <h2 className="text-[#126100] text-2xl font-['outfit'] mb-4">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 text-[15px] font-['outfit'] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.section>
          ))}
        </motion.div>
      )}

      {/* Conditionally render sections based on activeSection */}
      {activeSection === "features-section" && (
        <motion.div
          id="features-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
          <Features />
        </motion.div>
      )}
      {activeSection === "how-it-works" && (
        <motion.div
          id="how-it-works"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
          <HowItWorks />
        </motion.div>
      )}
      {activeSection === "testimony" && (
        <motion.div
          id="testimony"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
          <Testimony />
        </motion.div>
      )}
      {activeSection === "faqs" && (
        <motion.div
          id="faqs"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
          <FAQs />
        </motion.div>
      )}
      {activeSection === "contact-us" && (
        <motion.div
          id="contact-us"
          className="bg-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.5 }}
        >
          <ContactUs />
          <Footer />
        </motion.div>
      )}

      {/* Newsletter and Footer - Only show when not displaying other sections */}
      {!activeSection && (
        <motion.div
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div id="contact-us">

          <ContactUs />
          <Footer />
          </div>
        </motion.div>
      )}
    </div>
  )
}


