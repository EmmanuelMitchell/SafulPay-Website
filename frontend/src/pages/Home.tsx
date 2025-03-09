import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [redirectTimer, setRedirectTimer] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    return () => {
      if (redirectTimer !== null) clearTimeout(redirectTimer);
    };
  }, [redirectTimer]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    const timer: number = window.setTimeout(() => {
      navigate("/features");
    }, 800);
    setRedirectTimer(timer);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
      setRedirectTimer(null);
    }
  };

  return (
    <>
    <div  className="h-screen flex flex-col bg-black overflow-hidden">

    {/* Navigation */}
      <header className="container mx-auto px-4 pt-6 pb-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 mr-2 rounded-md flex items-center justify-center">
            <img src="icon.png" alt="SafulPay Logo" className="h-8" />
          </div>
          <span className="text-[#406B37] text-2xl font-[Outfit]">SafulPay</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button
            className={`text-gray-300 font-[Outfit] hover:text-white relative ${isHovering ? "text-white" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate("/features")}
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
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
     
    >
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center mt-4">
        <h1 className="text-5xl md:text-7xl font-[Outfit] text-white mb-4">
          Banking Just Got Better<br />With <span className="text-[#126100]">SafulPay</span>
        </h1>
        <p className="text-gray-300 max-w-3xl font-[Outfit] mx-auto text-lg md:text-xl mb-6">
          Our mission is to provide seamless and secure mobile money solutions, empowering users to manage their finances with ease.
        </p>
      </section>

            {/* Main Content with Banner and Phone */}
        <div className="relative flex-grow">
          {/* Moving Vertical Banner */}
          <div className="bg-[#126100] transform rotate-12 w-[120%] h-20 absolute left-[-10%] top-8 z-10 overflow-hidden">
            <div className="animate-sliding-banner flex items-center h-full transform -rotate-6 px-4">/            <div className="flex items-center mx-8">
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
//                <span className="text-white font-medium whitespace-nowrap">Orange Money</span>
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
            </div>         </div>

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
      {/* Footer */}
      <footer className="bg-gray-100 rounded-t-3xl py-5 text-center absolute bottom-0 left-0 right-0 z-0 max-w-7xl mx-auto">
        <p className="text-gray-600">&copy; {currentYear} SafulPay. All rights reserved.</p>
      </footer>
    </motion.div>
    </div>
      </>
  );
}
