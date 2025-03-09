import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-green-900 text-white pt-16"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Banking Just Got Better
          <br />
          With <span className="text-green-400">SafulPay</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl mb-12 max-w-2xl mx-auto"
        >
          Our mission is to provide seamless and secure mobile money solutions,
          empowering users to manage their finances with ease.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <Link
            to="/app"
            className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105"
          >
            Open App
          </Link>
          <a
            href="#features"
            className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-900 transition-all transform hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;