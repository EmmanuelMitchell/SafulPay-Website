import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the SafulPay application, you acknowledge and agree to these terms and conditions.

If you do not agree with any of these terms, you should refrain from using our services. Your use of the SafulPay application constitutes your acceptance of these terms and creates a binding legal agreement between you and SafulPay.`,
  },
  {
    title: "Description of Services",
    content: `SafulPay is a financial application designed to empower users with quality financial services. The specific features and functionalities of SafulPay are comprehensively outlined within the application.

Please note that these features and functionalities may be subject to change, and SafulPay will notify users of any modifications in advance. It is the user's responsibility to stay informed about the services through the application.`,
  },
  {
    title: "User Registration and Responsibilities",
    content: `To use SafulPay, users must create an account and provide accurate information.

Users are responsible for maintaining the confidentiality of their account credentials and are liable for all activities performed under their account. Any activities conducted under a user's account will be deemed their responsibility, and they will be held accountable for any resulting consequences.`,
  },
  {
    title: "Privacy and Data Security",
    content: `SafulPay is committed to protecting user privacy. Our Privacy Policy outlines how we collect, use, and protect user information. By using SafulPay, you consent to the terms of our Privacy Policy. We encourage users to review the Privacy Policy regularly to stay informed about how their data is handled.`,
  },
  {
    title: "Security Measures",
    content: `SafulPay employs industry-standard security measures to protect user data. Users are obligated to adhere to recommended security guidelines to maintain the integrity of their accounts and the overall security of the application.

Any instances of unauthorized access or suspicious activities should be promptly reported to SafulPay, fostering a collaborative effort to uphold the security of the platform.`,
  },
  {
    title: "Payments and Fees",
    content: `Users agree to pay all applicable fees associated with SafulPay services. Payment details, including fees and charges, are outlined within the application.`,
  },
  {
    title: "Reversal",
    content: `SafulPay's reversal policies, essential for transaction reversals, are conveniently accessible within the application.

Users are obligated to comply with these policies when initiating the reversal of transactions or requesting refunds. It is imperative to review and understand the details provided within the application to ensure adherence to SafulPay's established procedures for transaction reversals.`,
  },
  {
    title: "User Conduct",
    content: `Users must comply with all applicable laws and regulations when using SafulPay. Any use of the application for illegal or fraudulent activities is strictly prohibited.`,
  },
  {
    title: "Limitation of Liability",
    content: `SafulPay is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services. Users acknowledge that the use of financial services involves inherent risks.`,
  },
  {
    title: "Termination of Services",
    content: `SafulPay reserves the right to suspend or terminate user accounts for violations of these terms and conditions, fraudulent activities, or other reasons deemed necessary for the security and integrity of the application.`,
  },
  {
    title: "Amendments and Updates",
    content: `SafulPay may update these terms and conditions from time to time. Users will be notified of significant changes, and continued use of SafulPay constitutes acceptance of the modified terms.

By using SafulPay, you affirm that you have read, understood, and agree to be bound by these terms and conditions.`,
  },
]

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Header */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="bg-[#1A1A1A] rounded-2xl p-8">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span>Back</span>
          </Link>
          <h1 className="text-[#126100] text-3xl md:text-4xl font-bold">TERMS & CONDITIONS</h1>
          <p className="text-gray-400 mt-2">Last Updated: November 2023</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-16">
        {sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-[#126100] text-xl font-bold mb-4">{section.title}</h2>
            {section.content.split("\n\n").map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-700 text-[15px] leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 max-w-xl mx-auto shadow-sm">
          <div className="flex justify-center mb-6">
            <img src="/logo.svg" alt="SafulPay Logo" className="h-10" />
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-r-0 border-gray-200 rounded-l-lg focus:outline-none focus:border-[#126100]"
            />
            <button className="bg-[#126100] hover:bg-[#0d4800] text-white px-6 py-3 rounded-r-lg transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

