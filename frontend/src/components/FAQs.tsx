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
    {
      question: "What payment methods are supported?",
      answer:
        "SafulPay supports various payment methods including bank transfers, mobile money, credit/debit cards, and more. You can view all available options in the app.",
    },
  ]

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">FAQs: Get Answers to Common Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to frequently asked questions about SafulPay's services and features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white rounded-lg px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg mt-px">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs

