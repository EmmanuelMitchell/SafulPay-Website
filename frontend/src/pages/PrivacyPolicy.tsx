// import { Link } from "react-router-dom"
// import { ArrowLeft } from "lucide-react"
// import Footer from "../components/Footer"
// import ContactUs from "../components/ContactUs"

// // Define types for the subsections
// interface Subsection {
//   subtitle: string
//   content: string
//   items?: string[] // `items` is optional here
// }

// // Define types for the sections
// interface Section {
//   title: string
//   content?: string
//   subsections?: Subsection[]
// }

// const sections: Section[] = [
//   {
//     title: "Privacy Statement",
//     content: `Welcome to "SAFULPAY," a fintech product committed to safeguarding your privacy and providing secure financial services. This Privacy Policy aims to explain how we collect, use, disclose, and protect your personal information when you use our services.`,
//   },
//   {
//     title: "Information We Collect",
//     subsections: [
//       {
//         subtitle: "Personal Information",
//         content: "For Personal, Agent, and Merchant Accounts, we may collect the following:",
//         items: [
//           "Full Name",
//           "Contact Information (Email Address, Phone Number)",
//           "Date of Birth",
//           "Identification (National ID, Passport, ID card)",
//           "Residential Address",
//         ],
//       },
//       {
//         subtitle: "Financial Information",
//         content: "For Bank Transfer, Top-up, P2P Payment, and Bill Payment services, we collect:",
//         items: ["Bank Account", "Transaction History"],
//       },
//       {
//         subtitle: "Usage Data",
//         content: 'We may gather information related to your use of "SAFULPAY," including:',
//         items: ["Login Times", "Features Used", "Device Information (e.g., device type, operating system)"],
//       },
//     ],
//   },
//   {
//     title: "How We Use Your Information",
//     subsections: [
//       {
//         subtitle: "Provide Services",
//         content: "We use your information to:",
//         items: [
//           "Facilitate Bank Transfers, P2P Payments, Top-up, Bill Payments",
//           "Customize and enhance your experience with personalized services",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Account Management",
//     content: "We use your information for managing Personal, Agent, and Merchant Accounts.",
//   },
//   {
//     title: "Security and Fraud Prevention",
//     content:
//       "We monitor transactions for:\n- Detection of fraudulent activities\n- Ensuring the security and integrity of your account",
//   },
//   {
//     title: "Customer Support",
//     content: "We use your information to:\n- Address inquiries\n- Respond to inquiries and provide assistance",
//   },
//   {
//     title: "Marketing and Promotions",
//     content:
//       "With your consent, we may send promotional offers, updates, and information about our services. You have the option to opt out of these communications at any time.",
//   },
//   {
//     title: "Information Sharing",
//     subsections: [
//       {
//         subtitle: "Third-Party Service Providers",
//         content:
//           "We may share your information with trusted third-party service providers to assist in delivering our services. These providers are bound by confidentiality and data protection agreements.",
//       },
//     ],
//   },
//   {
//     title: "Data Security",
//     content:
//       "We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
//   },
//   {
//     title: "Data Retention",
//     content:
//       "We retain your information for as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
//   },
//   {
//     title: "Your Rights",
//     content:
//       "You have the right to:\n- Access, correct, or delete your personal information\n- Request a copy of your data",
//   },
//   {
//     title: "Children's Privacy",
//     content: `"SAFULPAY" is not intended for use by individuals under the age of 13.`,
//   },
//   {
//     title: "Changes to this Policy",
//     content:
//       "We may update this Privacy Policy from time to time. We will notify you of any significant changes via the email address you provide.",
//   },
//   {
//     title: "Contact Us",
//     content:
//       "If you have any questions or concerns about this Privacy Policy, please contact us at info@safulpay.com or +232-77-012323 / +232-77052327",
//   },
// ]

// export default function PrivacyPolicy() {
  
//   return (
//     <div className="min-h-screen bg-[#F8F9FA]">

//       {/* Header */}
//       <div className="container mx-auto px-4 pt-20 pb-8">
//         <div className="bg-gradient-to-br from-[#1A1A1A] to-[#262626] rounded-2xl p-8">
//           <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
//             <ArrowLeft className="mr-2" size={20} />
//             <span>Back</span>
//           </Link>
//           <h1 className="text-[#126100] text-3xl md:text-4xl font-bold">PRIVACY POLICY</h1>
//           <p className="text-gray-400 mt-2">Last Updated: November 2023</p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 max-w-4xl pb-16">
//         {sections.map((section, index) => (
//           <section key={index} className="mb-12">
//             <h2 className="text-[#126100] text-xl font-bold mb-4">{section.title}</h2>

//             {section.content && <p className="text-gray-700 text-[15px] leading-relaxed mb-4">{section.content}</p>}

//             {section.subsections?.map((subsection, subIndex) => (
//               <div key={subIndex} className="mb-6">
//                 {subsection.subtitle && <h3 className="text-gray-900 font-medium mb-2">{subsection.subtitle}</h3>}

//                 {subsection.content && (
//                   <p className="text-gray-700 text-[15px] leading-relaxed mb-2">{subsection.content}</p>
//                 )}

//                 {subsection.items && (
//                   <ul className="list-disc pl-5 space-y-1">
//                     {subsection.items.map((item, itemIndex) => (
//                       <li key={itemIndex} className="text-gray-700 text-[15px] leading-relaxed">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}
//           </section>
//         ))}
//       </div>

//       {/* Newsletter */}
//        <div  className="bg-[#1A1A1A] mt-30">

//         <ContactUs />
//       {/* Footer */}
//       <Footer />
//        </div>
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

// Define types for the subsections
interface Subsection {
  subtitle: string
  content: string
  items?: string[] // `items` is optional here
}

// Define types for the sections
interface Section {
  title: string
  content?: string
  subsections?: Subsection[]
}

const sections: Section[] = [
  {
    title: "Privacy Statement",
    content: `Welcome to "SAFULPAY," a fintech product committed to safeguarding your privacy and providing secure financial services. This Privacy Policy aims to explain how we collect, use, disclose, and protect your personal information when you use our services.`,
  },
  {
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Personal Information",
        content: "For Personal, Agent, and Merchant Accounts, we may collect the following:",
        items: [
          "Full Name",
          "Contact Information (Email Address, Phone Number)",
          "Date of Birth",
          "Identification (National ID, Passport, ID card)",
          "Residential Address",
        ],
      },
      {
        subtitle: "Financial Information",
        content: "For Bank Transfer, Top-up, P2P Payment, and Bill Payment services, we collect:",
        items: ["Bank Account", "Transaction History"],
      },
      {
        subtitle: "Usage Data",
        content: 'We may gather information related to your use of "SAFULPAY," including:',
        items: ["Login Times", "Features Used", "Device Information (e.g., device type, operating system)"],
      },
    ],
  },
  {
    title: "How We Use Your Information",
    subsections: [
      {
        subtitle: "Provide Services",
        content: "We use your information to:",
        items: [
          "Facilitate Bank Transfers, P2P Payments, Top-up, Bill Payments",
          "Customize and enhance your experience with personalized services",
        ],
      },
    ],
  },
  {
    title: "Account Management",
    content: "We use your information for managing Personal, Agent, and Merchant Accounts.",
  },
  {
    title: "Security and Fraud Prevention",
    content:
      "We monitor transactions for:\n- Detection of fraudulent activities\n- Ensuring the security and integrity of your account",
  },
  {
    title: "Customer Support",
    content: "We use your information to:\n- Address inquiries\n- Respond to inquiries and provide assistance",
  },
  {
    title: "Marketing and Promotions",
    content:
      "With your consent, we may send promotional offers, updates, and information about our services. You have the option to opt out of these communications at any time.",
  },
  {
    title: "Information Sharing",
    subsections: [
      {
        subtitle: "Third-Party Service Providers",
        content:
          "We may share your information with trusted third-party service providers to assist in delivering our services. These providers are bound by confidentiality and data protection agreements.",
      },
    ],
  },
  {
    title: "Data Security",
    content:
      "We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your information for as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to:\n- Access, correct, or delete your personal information\n- Request a copy of your data",
  },
  {
    title: "Children's Privacy",
    content: `"SAFULPAY" is not intended for use by individuals under the age of 13.`,
  },
  {
    title: "Changes to this Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes via the email address you provide.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy, please contact us at info@safulpay.com or +232-77-012323 / +232-77052327",
  },
]

export default function PrivacyPolicy() {
  const navigate = useNavigate()
  const [showSectionNav, setShowSectionNav] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const privacyHeroRef = useRef<HTMLDivElement>(null)

  // Handle scroll to show/hide section navbar
  useEffect(() => {
    const handleScroll = () => {
      if (privacyHeroRef.current) {
        const heroHeight = privacyHeroRef.current.offsetHeight
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

    // If we're on the privacy page and want to go to another section
    if (id !== "privacy-hero") {
      setActiveSection(id)

      // Scroll to the section after a brief delay to allow state update
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    } else {
      // Scroll to top of privacy page
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
                <button
                  onClick={() => scrollToSection("privacy-hero")}
                  className="text-gray-900 font-medium text-[15px]"
                >
                  Privacy Policy
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
        ref={privacyHeroRef}
        id="privacy-hero"
        className="container mx-auto px-4 pt-20 pb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#262626] rounded-2xl p-8">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span>Back</span>
          </Link>
          <h1 className="text-[#126100] text-3xl md:text-4xl font-bold">PRIVACY POLICY</h1>
          <p className="text-gray-400 mt-2">Last Updated: November 2023</p>
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
              <h2 className="text-[#126100] text-xl font-bold mb-4">{section.title}</h2>

              {section.content && <p className="text-gray-700 text-[15px] leading-relaxed mb-4">{section.content}</p>}

              {section.subsections?.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-6">
                  {subsection.subtitle && <h3 className="text-gray-900 font-medium mb-2">{subsection.subtitle}</h3>}

                  {subsection.content && (
                    <p className="text-gray-700 text-[15px] leading-relaxed mb-2">{subsection.content}</p>
                  )}

                  {subsection.items && (
                    <ul className="list-disc pl-5 space-y-1">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 text-[15px] leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
          className="bg-[#1A1A1A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactUs />
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

