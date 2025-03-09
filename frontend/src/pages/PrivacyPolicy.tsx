import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className="min-h-screen bg-gray-100 pt-20"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Link to="/" className="flex items-center gap-2 text-green-600 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us, including but not limited to:
                name, email address, phone number, and financial information necessary for transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-600">
                Your information is used to provide and improve our services, process transactions,
                and communicate with you about your account and our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information
                from unauthorized access, alteration, or disclosure.
              </p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;