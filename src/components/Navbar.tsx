import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Menu, X, Home, User, Briefcase, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl font-bold text-primary">AP</span>
            </div>
            <span className="text-xl font-bold">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => `navlink flex items-center space-x-2 ${isActive ? 'navlink-active' : ''}`}>
              <Home size={18} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `navlink flex items-center space-x-2 ${isActive ? 'navlink-active' : ''}`}>
              <User size={18} />
              <span>About</span>
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `navlink flex items-center space-x-2 ${isActive ? 'navlink-active' : ''}`}>
              <Briefcase size={18} />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => `navlink flex items-center space-x-2 ${isActive ? 'navlink-active' : ''}`}>
              <FileText size={18} />
              <span>Resume</span>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `navlink flex items-center space-x-2 ${isActive ? 'navlink-active' : ''}`}>
              <Mail size={18} />
              <span>Contact</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text hover:text-primary transition-colors z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          {windowWidth < 768 && (
            <motion.div
              className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-8 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? '0%' : '100%' }}
              transition={{ duration: 0.3 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) => `navlink flex items-center space-x-3 text-2xl ${isActive ? 'navlink-active' : ''}`}
                onClick={closeMenu}
              >
                <Home size={24} />
                <span>Home</span>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `navlink flex items-center space-x-3 text-2xl ${isActive ? 'navlink-active' : ''}`}
                onClick={closeMenu}
              >
                <User size={24} />
                <span>About</span>
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => `navlink flex items-center space-x-3 text-2xl ${isActive ? 'navlink-active' : ''}`}
                onClick={closeMenu}
              >
                <Briefcase size={24} />
                <span>Projects</span>
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) => `navlink flex items-center space-x-3 text-2xl ${isActive ? 'navlink-active' : ''}`}
                onClick={closeMenu}
              >
                <FileText size={24} />
                <span>Resume</span>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `navlink flex items-center space-x-3 text-2xl ${isActive ? 'navlink-active' : ''}`}
                onClick={closeMenu}
              >
                <Mail size={24} />
                <span>Contact</span>
              </NavLink>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;