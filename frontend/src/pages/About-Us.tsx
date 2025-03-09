import React from 'react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/placeholder.svg"
            alt="SafulPay Logo"
            className="w-10 h-10 mr-2"
          />
          <span className="text-green-500 text-2xl font-semibold">SafulPay</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            Close App
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            How It Works
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            Testimony
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            FAQs
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">
            Contact Us
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            About Us
          </a>
        </div>

        <button className="bg-green-700 hover:bg-green-800 text-white rounded-md px-4 py-2 text-sm">
          Download App
        </button>
      </header>

      {/* About Header */}
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-10 gap-4">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-6 h-6">
                <img src="/placeholder.svg" alt="" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <h1 className="text-5xl font-bold text-center mb-16">
            About <span className="text-green-600">SafulPay</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2">Empowering Financial Freedom</h2>
            <h2 className="text-2xl font-bold text-center mb-6">with Innovation</h2>

            <div className="flex justify-center items-center gap-2 text-sm font-medium mb-6">
              <span className="text-green-600">User-friendly</span>
              <span className="text-gray-400">•</span>
              <span className="text-red-400">Security</span>
              <span className="text-gray-400">•</span>
              <span className="text-yellow-500">Privacy</span>
            </div>

            <p className="text-gray-700 mb-4 text-center">
              At SafulPay, we believe in transforming the way people manage, move, and interact with their money. Our
              mission is to make financial services secure, accessible, and user-friendly for everyone, no matter where
              they are. With SafulPay, you can send money, pay bills, shop online, buy airtime, access virtual cards,
              gift cards, and more, ensuring every transaction is seamless and safe.
            </p>

            <p className="text-gray-700 mb-16 text-center">
              Our team is dedicated to breaking barriers in financial services through innovation. By blending
              transparency with top-tier security (including encryption and fraud detection), SafulPay delivers a
              financial experience you can trust. Whether you're sending money, paying bills, or making gift cards, we
              put you in control of your financial world.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-2">Meet Our Team of</h2>
        <h2 className="text-4xl font-bold text-center mb-6">
          <span className="text-green-600">Experts</span>
        </h2>

        <p className="text-center font-medium mb-8">Innovators Driving Financial Transformation</p>

        <p className="text-gray-700 text-sm max-w-3xl mx-auto text-center mb-12">
          At SafulPay, our team is comprised of dedicated professionals who have built their careers in fintech,
          banking, and customer service. We bring together diverse expertise to deliver an exceptional financial
          experience. The SAFULPAY team has a shared vision: to make financial services accessible to everyone. We are
          united by our values of integrity, innovation, and customer-centricity. Together, we are creating a seamless
          path for individuals and businesses to navigate the digital financial landscape with transparency and
          confidence in Africa.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
          {/* Team Member 1 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Adams Olikewe"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Adams Olikewe</h3>
            <p className="text-sm text-gray-600">Chief Executive Officer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Maxwell Adebayo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Maxwell Adebayo</h3>
            <p className="text-sm text-gray-600">CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Thomas Massaquoi"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Thomas Massaquoi</h3>
            <p className="text-sm text-gray-600">COO</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Chrislin Johnson"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Chrislin Johnson</h3>
            <p className="text-sm text-gray-600">Chief Marketing Officer</p>
          </div>

          {/* Team Member 5 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Ogbebor Lawel"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Ogbebor Lawel</h3>
            <p className="text-sm text-gray-600">Technical Director</p>
          </div>

          {/* Team Member 6 */}
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Adaora Judith"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Adaora Judith</h3>
            <p className="text-sm text-gray-600">Business Analyst</p>
          </div>
        </div>

        {/* Team Member 7 (Centered) */}
        <div className="max-w-xs mx-auto mb-20">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                alt="Simeon Olamilekan"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold">Simeon Olamilekan</h3>
            <p className="text-sm text-gray-600">Head of Operations</p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-black rounded-lg mx-4 md:mx-12 mb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-green-500 text-2xl font-bold mb-4">Download SafulPay Today</h2>
              <h3 className="text-white font-semibold mb-4">Secure, Fast, and Easy Financial Management</h3>
              <p className="text-gray-400 text-sm mb-6">
                Experience the future of financial management with SafulPay. We're revolutionizing how you handle your
                money with a platform that's secure, intuitive, and designed for everyone. Join thousands of users in
                creating a SafulPay bridge to your financial freedom today!
              </p>
              <div className="flex space-x-2">
                <button className="bg-gray-800 rounded-md py-2 px-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Google Play"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="text-left text-white text-xs">
                    <div>Google Play</div>
                  </div>
                </button>

                <button className="bg-gray-800 rounded-md py-2 px-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Apple Store"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="text-left text-white text-xs">
                    <div>Apple Store</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="w-64">
              <img
                src="/placeholder.svg"
                alt="SafulPay App"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container mx-auto px-4 py-8 mb-12">
        <div className="bg-white rounded-lg p-8 max-w-md mx-auto shadow-md">
          <div className="flex justify-center mb-4">
            <img src="/placeholder.svg" alt="SafulPay Logo" className="w-10 h-10" />
          </div>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md">Send</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg"
                  alt="SafulPay Logo"
                  className="w-10 h-10 mr-2"
                />
                <span className="text-green-500 text-2xl font-semibold">SafulPay</span>
              </div>

              <p className="text-gray-400 mb-4">
                Banking Just Got Better With <span className="text-green-500">SafulPay</span>
              </p>

              <p className="text-gray-400 text-sm max-w-md mb-6">
                SafulPay simplifies how you manage and move your money, offering a secure, fast, and user-friendly
                platform for all your financial needs. From handling transactions to managing bills to navigating the
                costs and receiving payments, we've got you covered. Our commitment to transparency, security, and
                convenience makes SafulPay the ideal choice for modern financial management.
              </p>

              <div className="flex space-x-2 mb-6">
                <button className="bg-white rounded-md py-2 px-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Google Play"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="text-left text-black text-xs">
                    <div>Google Play</div>
                  </div>
                </button>

                <button className="bg-white rounded-md py-2 px-4 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Apple Store"
                    className="w-5 h-5 mr-2"
                  />
                  <div className="text-left text-black text-xs">
                    <div>Apple Store</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Download
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-white font-semibold mb-2">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-facebook"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tiktok"
                    >
                      <path d="M9 12a4 4 0 1 0 0 8a4 4 0 0 0 0-8z" />
                      <path d="M15 8a4 4 0 0 0 4 4V8h-4Z" />
                      <path d="M15 2v14.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 0-5" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  src="/placeholder.svg"
                  alt="Bank Logo"
                  className="w-10 h-10 mr-2"
                />
                <span className="text-gray-400 text-sm">
                  Licensed and Regulated by
                  <br />
                  the Bank of Sierra Leone
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
              <p>
                Copyright © 2024, All Rights Reserved By <span className="text-green-500">SafulPay</span>
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}