"use client"

import { useState } from "react"

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I create a SafulPay account?",
      answer:
        "Download the SafulPay app from your app store, click on 'Sign Up', and follow the simple registration process. You'll need to provide basic information and verify your identity.",
    },
    {
      question: "What are the transaction fees?",
      answer:
        "SafulPay offers competitive transaction fees that vary based on the type of transaction. You can view all fees in the app before confirming any transaction.",
    },
    {
      question: "Is SafulPay secure?",
      answer:
        "Yes, SafulPay uses bank-level encryption and security measures to protect your data and transactions. We also offer two-factor authentication for added security.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team 24/7 through the app, email at support@safulpay.com, or call our hotline at +232 77 123456.",
    },
  ]

  return (
    <section id="faqs" className="py-16 bg-gray-50 sm:block">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs

