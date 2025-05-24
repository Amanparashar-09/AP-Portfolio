import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1 
            className="text-9xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Page Not Found
          </motion.h2>
          <motion.p 
            className="paragraph max-w-md mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/" className="btn-primary">
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;