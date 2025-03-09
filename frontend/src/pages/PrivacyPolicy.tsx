import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navbar />

      {/* Header */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#262626] rounded-2xl p-8">
          <Link to="/" className="inline-flex items-center text-white mb-4 hover:text-gray-200 transition-colors">
            <ArrowLeft className="mr-2" size={20} />
            <span>Back</span>
          </Link>
          <h1 className="text-[#126100] text-3xl md:text-4xl font-bold">PRIVACY POLICY</h1>
          <p className="text-gray-400 mt-2">Last Updated: November 2023</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl pb-16">
        {sections.map((section, index) => (
          <section key={index} className="mb-12">
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
