import { Link } from "react-router-dom"

type FooterProps = {
  className?: string
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "FAQs", path: "/faqs" },
    { name: "Download", path: "/download" },
  ]

  const contactLinks = [
    { name: "Contact Us", path: "/contact-us" },
    { name: "About Us", path: "/about-us" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: "/social/facebook.svg", url: "#facebook" },
    { name: "Twitter", icon: "/social/twitter.svg", url: "#twitter" },
    { name: "Instagram", icon: "/social/instagram.svg", url: "#instagram" },
    { name: "TikTok", icon: "/social/tiktok.svg", url: "#tiktok" },
  ]

  return (
    <footer className={`bg-[#1A1A1A] text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo-white.svg" alt="SafulPay" className="h-8 mr-2" />
              <span className="text-[#126100] text-xl font-bold">SafulPay</span>
            </div>
            <h3 className="text-lg font-semibold mb-4">
              Banking Just Got Better With <span className="text-[#126100]">SafulPay</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md">
              SafulPay simplifies how you manage and move your money, offering a secure, fast, and user-friendly
              platform for all your financial needs. From handling transactions to managing bills to navigating the
              costs and receiving payments, we've got you covered. Our commitment to transparency, security, and
              convenience makes SafulPay the ideal choice for modern financial management.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#google-play"
                className="bg-white rounded-md py-2 px-4 flex items-center hover:bg-gray-100 transition-colors"
              >
                <img src="/google-play.svg" alt="Google Play" className="h-5 mr-2" />
                <span className="text-black text-sm">Google Play</span>
              </a>
              <a
                href="#app-store"
                className="bg-white rounded-md py-2 px-4 flex items-center hover:bg-gray-100 transition-colors"
              >
                <img src="/app-store.svg" alt="App Store" className="h-5 mr-2" />
                <span className="text-black text-sm">App Store</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {contactLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          {/* Social Media and Bank Logo */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <img src={social.icon || "/placeholder.svg"} alt={social.name} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center">
              <img src="/bank-logo.svg" alt="Bank Logo" className="h-10 mr-3" />
              <p className="text-gray-400 text-sm">
                Licensed and Regulated by
                <br />
                the Bank of Sierra Leone
              </p>
            </div>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-500">
            <p>
              Copyright © {currentYear}, All Rights Reserved By <span className="text-[#126100]">SafulPay</span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

