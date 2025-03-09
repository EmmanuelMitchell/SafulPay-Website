import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          {/* <img src={logo} alt="SafulPay Logo" className="h-8" /> */}
          <img src="icon.png" alt="SafulPay Logo" className="h-8" />
          <span className="ml-2 text-xl font-semibold text-green-700">SafulPay</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-800 hover:text-green-600 transition duration-300">
          Close App
        </Link>
        <Link to="/features" className="text-gray-800 hover:text-green-600 transition duration-300">
          Features
        </Link>
        <Link to="/how-it-works" className="text-gray-800 hover:text-green-600 transition duration-300">
          How It Works
        </Link>
        <Link to="/testimony" className="text-gray-800 hover:text-green-600 transition duration-300">
          Testimony
        </Link>
        <Link to="/faqs" className="text-gray-800 hover:text-green-600 transition duration-300">
          FAQs
        </Link>
        <Link to="/contact-us" className="text-gray-800 hover:text-green-600 transition duration-300">
          Contact Us
        </Link>
        <Link to="/about-us" className="text-gray-800 hover:text-green-600 transition duration-300">
          About Us
        </Link>
      </div>
      
      <div>
        <Link 
          to="/download" 
          className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Download App
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;