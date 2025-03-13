// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"

// interface NavbarProps {
//   scrollToSection?: (id: string) => void;
//   toggleSection?: (section: string) => void;
//   isHomePage?: boolean;
// }

// const Navbar = ({ scrollToSection, toggleSection, isHomePage = false }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   // const location = useLocation()

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isMenuOpen])

//   const handleNavigation = (section: string) => {
//     if (scrollToSection) {
//       scrollToSection(section)
//     } else if (toggleSection) {
//       toggleSection(section)
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <>
//       {/* Desktop Navigation - Only for non-home pages */}
//       {!isHomePage && (
//         <nav className="fixed top-0 left-0 text-[Outfit] right-0 z-50 bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               {/* Logo */}
//               <Link to="/" className="flex items-center">
//                 <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//                 <span className="ml-2 text-xl font-semibold text-[#126100]">SafulPay</span>
//               </Link>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-8">
//                 <Link to="/" className="text-gray-600 hover:text-[#126100] text-[15px]">
//                   Close App
//                 </Link>
//                 <button
//                   onClick={() => handleNavigation("how-it-works")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   How It Works
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("testimony")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Testimony
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("faqs")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   FAQs
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("contact-us")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Contact Us
//                 </button>

                
//                 <Link
//                   to="/about-us" className="text-gray-600 hover:text-[#126100] text-[15px]"
                  
//                 >
//                   About Us
//                 </Link>
//               </div>

//               {/* Download Button & Mobile Menu Trigger */}
//               <div className="flex items-center">
//                 <Link
//                   to="/download"
//                   className="hidden md:block bg-[#126100] hover:bg-[#0d4800] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors duration-200"
//                 >
//                   Download App
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#126100] hover:bg-gray-50 focus:outline-none"
//                   aria-expanded={isMenuOpen}
//                   aria-label="Toggle menu"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Mobile Menu Button - Only for home page */}
//       {isHomePage && (
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="fixed top-4 right-4 z-50 p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//           </svg>
//         </button>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         />

//         {/* Menu Content */}
//         <div className="relative w-[280px] h-full bg-[#126100] flex flex-col">
//           {/* Logo */}
//           <div className="p-6">
//             <div className="flex items-center">
//               <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//               <span className="ml-2 text-xl font-semibold text-white">SafulPay</span>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 px-6 py-8">
//             <Link
//               to="/"
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Close App
//             </Link>
            
//             <button
//               onClick={() => handleNavigation("how-it-works")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               How It Works
//             </button>
//             <button
//               onClick={() => handleNavigation("testimony")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Testimony
//             </button>
//             <button
//               onClick={() => handleNavigation("faqs")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               FAQs
//             </button>
//             <button
//               onClick={() => handleNavigation("contact-us")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Contact Us
//             </button>
//           </nav>

//           {/* Download Button & Footer Links */}
//           <div className="p-6 space-y-6">
//             <Link
//               to="/download"
//               className="block w-full bg-white hover:bg-gray-100 text-[#126100] text-center text-[15px] font-medium px-6 py-3 rounded-md transition-colors duration-200"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Download App
//             </Link>

//             <div className="flex justify-between text-[13px] text-green-100">
//               <Link
//                 to="/privacy"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/terms"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Terms & Conditions
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar


// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"

// interface NavbarProps {
//   scrollToSection?: (id: string) => void
//   toggleSection?: (section: string) => void
//   isHomePage?: boolean
// }

// const Navbar = ({ scrollToSection, toggleSection, isHomePage = false }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   // const location = useLocation()

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isMenuOpen])

//   const handleNavigation = (section: string) => {
//     if (scrollToSection) {
//       scrollToSection(section)
//     } else if (toggleSection) {
//       toggleSection(section)
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <>
//       {/* Desktop Navigation - Only for non-home pages */}
//       {!isHomePage && (
//         <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               {/* Logo */}
//               <Link to="/" className="flex items-center">
//                 <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//                 <span className="ml-2 text-xl font-semibold text-[#126100]">SafulPay</span>
//               </Link>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-8">
//                 <button
//                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Close App
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("how-it-works")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   How It Works
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("testimony")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Testimony
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("faqs")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   FAQs
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("contact-us")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Contact Us
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("features-section")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Features
//                 </button>
//               </div>

//               {/* Download Button & Mobile Menu Trigger */}
//               <div className="flex items-center">
//                 <Link
//                   to="/download"
//                   className="hidden md:block bg-[#126100] hover:bg-[#0d4800] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors duration-200"
//                 >
//                   Download App
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#126100] hover:bg-gray-50 focus:outline-none"
//                   aria-expanded={isMenuOpen}
//                   aria-label="Toggle menu"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Mobile Menu Button - Only for home page */}
//       {isHomePage && (
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="fixed top-4 right-4 z-50 p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//           </svg>
//         </button>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         />

//         {/* Menu Content */}
//         <div className="relative w-[280px] h-full bg-[#126100] flex flex-col">
//           {/* Logo */}
//           <div className="p-6">
//             <div className="flex items-center">
//               <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//               <span className="ml-2 text-xl font-semibold text-white">SafulPay</span>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 px-6 py-8">
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false)
//                 window.scrollTo({ top: 0, behavior: "smooth" })
//               }}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Close App
//             </button>

//             <button
//               onClick={() => handleNavigation("how-it-works")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               How It Works
//             </button>
//             <button
//               onClick={() => handleNavigation("testimony")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Testimony
//             </button>
//             <button
//               onClick={() => handleNavigation("faqs")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               FAQs
//             </button>
//             <button
//               onClick={() => handleNavigation("contact-us")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Contact Us
//             </button>
//             <button
//               onClick={() => handleNavigation("features-section")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Features
//             </button>
//           </nav>

//           {/* Download Button & Footer Links */}
//           <div className="p-6 space-y-6">
//             <Link
//               to="/download"
//               className="block w-full bg-white hover:bg-gray-100 text-[#126100] text-center text-[15px] font-medium px-6 py-3 rounded-md transition-colors duration-200"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Download App
//             </Link>

//             <div className="flex justify-between text-[13px] text-green-100">
//               <Link
//                 to="/privacy"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/terms"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Terms & Conditions
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar


// "use client"

// import { useState, useEffect } from "react"
// import { Link, useLocation } from "react-router-dom"

// interface NavbarProps {
//   scrollToSection?: (id: string) => void
//   toggleSection?: (section: string) => void
//   isHomePage?: boolean
// }

// const Navbar = ({ scrollToSection, toggleSection, isHomePage = false }: NavbarProps) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const location = useLocation()

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "unset"
//     }
//     return () => {
//       document.body.style.overflow = "unset"
//     }
//   }, [isMenuOpen])

//   const handleNavigation = (section: string) => {
//     if (scrollToSection) {
//       scrollToSection(section)
//     } else if (toggleSection) {
//       toggleSection(section)
//     }
//     setIsMenuOpen(false)
//   }

//   return (
//     <>
//       {/* Desktop Navigation - Only for non-home pages */}
//       {!isHomePage && (
//         <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//               {/* Logo */}
//               <Link to="/" className="flex items-center">
//                 <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//                 <span className="ml-2 text-xl font-semibold text-[#126100]">SafulPay</span>
//               </Link>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-8">
//                 <button
//                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Close App
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("features-section")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("how-it-works")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   How It Works
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("testimony")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Testimony
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("faqs")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   FAQs
//                 </button>
//                 <button
//                   onClick={() => handleNavigation("contact-us")}
//                   className="text-gray-600 hover:text-[#126100] text-[15px]"
//                 >
//                   Contact Us
//                 </button>
//                 <Link
//                   to="/about-us"
//                   className={`${location.pathname === "/about-us" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-[#126100]"} text-[15px]`}
//                 >
//                   About Us
//                 </Link>
//               </div>

//               {/* Download Button & Mobile Menu Trigger */}
//               <div className="flex items-center">
//                 <Link
//                   to="/download"
//                   className="hidden md:block bg-[#126100] hover:bg-[#0d4800] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors duration-200"
//                 >
//                   Download App
//                 </Link>

//                 {/* Mobile Menu Button */}
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#126100] hover:bg-gray-50 focus:outline-none"
//                   aria-expanded={isMenuOpen}
//                   aria-label="Toggle menu"
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       )}

//       {/* Mobile Menu Button - Only for home page */}
//       {isHomePage && (
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="fixed top-4 right-4 z-50 p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
//           aria-expanded={isMenuOpen}
//           aria-label="Toggle menu"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
//           </svg>
//         </button>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Overlay */}
//         <div
//           className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
//             isMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         />

//         {/* Menu Content */}
//         <div className="relative w-[280px] h-full bg-[#126100] flex flex-col">
//           {/* Logo */}
//           <div className="p-6">
//             <div className="flex items-center">
//               <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
//               <span className="ml-2 text-xl font-semibold text-white">SafulPay</span>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="flex-1 px-6 py-8">
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false)
//                 window.scrollTo({ top: 0, behavior: "smooth" })
//               }}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Close App
//             </button>

//             <button
//               onClick={() => handleNavigation("how-it-works")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               How It Works
//             </button>
//             <button
//               onClick={() => handleNavigation("testimony")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Testimony
//             </button>
//             <button
//               onClick={() => handleNavigation("faqs")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               FAQs
//             </button>
//             <button
//               onClick={() => handleNavigation("contact-us")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Contact Us
//             </button>
//             <button
//               onClick={() => handleNavigation("features-section")}
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//             >
//               Features
//             </button>
//             <Link
//               to="/about-us"
//               className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About Us
//             </Link>
//           </nav>

//           {/* Download Button & Footer Links */}
//           <div className="p-6 space-y-6">
//             <Link
//               to="/download"
//               className="block w-full bg-white hover:bg-gray-100 text-[#126100] text-center text-[15px] font-medium px-6 py-3 rounded-md transition-colors duration-200"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Download App
//             </Link>

//             <div className="flex justify-between text-[13px] text-green-100">
//               <Link
//                 to="/privacy"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 to="/terms"
//                 className="hover:text-white transition-colors duration-200"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Terms & Conditions
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar



"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

interface NavbarProps {
  scrollToSection?: (id: string) => void
  toggleSection?: (section: string) => void
  isHomePage?: boolean
}

const Navbar = ({ scrollToSection, toggleSection, isHomePage = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const handleNavigation = (section: string) => {
    if (scrollToSection) {
      scrollToSection(section)
    } else if (toggleSection) {
      toggleSection(section)
    }
    setIsMenuOpen(false)
  }

  const handleCloseApp = () => {
    // Always navigate to home page when "Close App" is clicked
    navigate("/")
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation - Only for non-home pages */}
      {!isHomePage && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
                <span className="ml-2 text-xl font-semibold text-[#126100]">SafulPay</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={handleCloseApp} className="text-gray-600 hover:text-[#126100] text-[15px]">
                  Close App
                </button>
                <button
                  onClick={() => handleNavigation("features-section")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Features
                </button>
                <button
                  onClick={() => handleNavigation("how-it-works")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  How It Works
                </button>
                <button
                  onClick={() => handleNavigation("testimony")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Testimony
                </button>
                <button
                  onClick={() => handleNavigation("faqs")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  FAQs
                </button>
                <button
                  onClick={() => handleNavigation("contact-us")}
                  className="text-gray-600 hover:text-[#126100] text-[15px]"
                >
                  Contact Us
                </button>
                <Link
                  to="/about-us"
                  className={`${location.pathname === "/about-us" ? "text-gray-900 font-medium" : "text-gray-600 hover:text-[#126100]"} text-[15px]`}
                >
                  About Us
                </Link>
              </div>

              {/* Download Button & Mobile Menu Trigger */}
              <div className="flex items-center">
                <Link
                  to="/download"
                  className="hidden md:block bg-[#126100] hover:bg-[#0d4800] text-white text-[15px] font-medium px-6 py-2.5 rounded-md transition-colors duration-200"
                >
                  Download App
                </Link>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-md text-gray-600 hover:text-[#126100] hover:bg-gray-50 focus:outline-none"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Button - Only for home page */}
      {isHomePage && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fixed top-4 right-4 z-50 p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative w-[280px] h-full bg-[#126100] flex flex-col">
          {/* Logo */}
          <div className="p-6">
            <div className="flex items-center">
              <img src="/icon.png" alt="SafulPay Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-white">SafulPay</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <button
              onClick={handleCloseApp}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              Close App
            </button>

            <button
              onClick={() => handleNavigation("how-it-works")}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavigation("testimony")}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              Testimony
            </button>
            <button
              onClick={() => handleNavigation("faqs")}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              FAQs
            </button>
            <button
              onClick={() => handleNavigation("contact-us")}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNavigation("features-section")}
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
            >
              Features
            </button>
            <Link
              to="/about-us"
              className="block w-full text-left py-3 text-[17px] text-green-100 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </nav>

          {/* Download Button & Footer Links */}
          <div className="p-6 space-y-6">
            <Link
              to="/download"
              className="block w-full bg-white hover:bg-gray-100 text-[#126100] text-center text-[15px] font-medium px-6 py-3 rounded-md transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Download App
            </Link>

            <div className="flex justify-between text-[13px] text-green-100">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

