import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    return () => {
      if (redirectTimer) clearTimeout(redirectTimer);
    };
  }, [redirectTimer]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const timer : number = setTimeout(() => {
      navigate("/safulpay");
    }, 800);
    setRedirectTimer(timer);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (redirectTimer) {
      clearTimeout(redirectTimer);
      setRedirectTimer(null);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">
      {/* Navigation */}
      <header className="container mx-auto px-4 pt-6 pb-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-2 bg- rounded-md flex items-center justify-center">
          <img src="icon.png" alt="SafulPay Logo" className="h-8" />
          </div>
          <span className="text-[#406B37] text-2xl font-[Outfit]">SafulPay</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button
            className={`text-gray-300 font-[outfit] hover:text-white relative ${isHovering ? "text-white" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/safulpay")}
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
        </nav>
        <button className="bg-[#126100] hover:bg-green-800 text-white rounded-full px-6 py-2">
          Download App
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mt-4">
        <h1 className="text-5xl md:text-7xl font-[Outfit] text-white mb-4">
          Banking Just Got Better<br />With <span className="text-[#126100]">SafulPay</span>
        </h1>
        <p className="text-gray-300 max-w-3xl font-[Outfit] mx-auto text-lg md:text-xl mb-6">
          Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <button className="bg-white rounded-full py-3 px-6 flex items-center">
            <div className="w-5 h-5 mr-2 flex items-center justify-center">
              <img src="google.jpg" className="h-8" alt="google-image" />
              {/* <svg viewBox="0 0 24 24" fill="#5F6368" className="w-5 h-5">
                <path d="M3,20.5C3,21.3 3.8,22 4.5,22H6V10H3V20.5M16.5,3.5A2.5,2.5 0 0,1 19,6A2.5,2.5 0 0,1 16.5,8.5A2.5,2.5 0 0,1 14,6A2.5,2.5 0 0,1 16.5,3.5M19,22V10H12V22H19Z" />
              </svg> */}
            </div>
            <div className="text-left">
              <div className="text-xs">Available on the</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </button>
          <button className="bg-white rounded-full py-3 px-6 flex items-center">
            <div className="w-6 h-6 mr-2 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="#000" className="w-5 h-5">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-xs">Available on the</div>
              <div className="font-semibold">Apple Store</div>
            </div>
          </button>
        </div>
      </section>

      {/* Main Content with Banner and Phone */}
      <div className="relative flex-grow">
        {/* Moving Vertical Banner */}
        <div className="bg-[#126100] transform rotate-12 w-[120%] h-20 absolute left-[-10%] top-8 z-10 overflow-hidden">
          <div className="animate-sliding-banner flex items-center h-full transform -rotate-6 px-4">
            <div className="flex items-center mx-8">
              <div className="bg-red-500 rounded-full w-8 h-6 mr-2 flex items-center justify-center text-white text-xs font-bold">RIA</div>
              <span className="text-white font-medium whitespace-nowrap">RIA Money</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-yellow-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">WU</div>
              <span className="text-white font-medium whitespace-nowrap">Western Union</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-white rounded-full w-8 h-8 mr-2 flex items-center justify-center text-gray-800 text-xs font-bold">MG</div>
              <span className="text-white font-medium whitespace-nowrap">Money Gram</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-orange-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">OM</div>
              <span className="text-white font-medium whitespace-nowrap">Orange Money</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-red-600 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">V</div>
              <span className="text-white font-medium whitespace-nowrap">VISA & Master Card</span>
            </div>
            {/* Duplicate items for infinite scroll effect */}
            <div className="flex items-center mx-8">
              <div className="bg-red-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">RIA</div>
              <span className="text-white font-medium whitespace-nowrap">RIA Money</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-yellow-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">WU</div>
              <span className="text-white font-medium whitespace-nowrap">Western Union</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-white rounded-full w-8 h-8 mr-2 flex items-center justify-center text-gray-800 text-xs font-bold">MG</div>
              <span className="text-white font-medium whitespace-nowrap">Money Gram</span>
            </div>
            <div className="flex items-center mx-8">
              <div className="bg-orange-500 rounded-full w-8 h-8 mr-2 flex items-center justify-center text-white text-xs font-bold">OM</div>
              <span className="text-white font-medium whitespace-nowrap">Orange Money</span>
            </div>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center mt-4 mb-32 relative z-20">
          <div className="relative w-64 h-[500px] bg-black rounded-[40px] border-4 border-gray-700 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black flex justify-center">
              <div className="w-32 h-5 bg-black rounded-b-xl flex items-center justify-center">
                <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 bg-white h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                <img src="icon.png" alt=""  className="h-10"/>
                </div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-gray-400"></div>
                   
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-gray-400"></div>
                  </div>
                </div>
              </div>

              <div className="text-left mt-6">
                <p className="text-gray-800 text-lg">Good Morning,</p>
                <p className="text-gray-800 text-lg">User !</p>
              </div>

              <div className="bg-[#126100] rounded-lg p-4 text-white mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">SLE 23,000.87</span>
                  <span className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 border-2 border-white rounded-full"></span>
                  </span>
                </div>
                <p className="text-sm mt-1">Total Wallet Balance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Positioned to overlay the bottom half of the phone */}
      <footer className="bg-gray-100 rounded-t-3xl py-5 text-center absolute bottom-0 left-0 right-0  z-0 max-w-7xl mx-auto">
        <p className="text-gray-600">&copy; {currentYear} SafulPay. All rights reserved.</p>
      </footer>
    </div>
  );
}