import { Link } from 'react-router-dom';
import { socialLinks } from '../data/social';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-text/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary">
              Aman Parashar 
            </Link>
            <p className="text-sm text-light-text mt-2">
              Building beautiful digital experiences
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ElementType;
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-text hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-text/10 flex flex-col md:flex-row justify-between items-center text-sm text-light-text">
          <p>© {currentYear} Aman Parashar. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/about" className="mr-4 hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link to="/projects" className="mr-4 hover:text-primary transition-colors duration-300">
              Projects
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;