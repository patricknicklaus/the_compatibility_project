import React, { useState, useEffect } from 'react';
import playstore_processed from '../assets/playstore_processed.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-pink-300 shadow-lg' : 'bg-transparent'}`}>
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={playstore_processed} 
                alt="Company Logo" 
                className={`w-auto rounded-xl transition duration-300 ${scrolled ? 'h-10 bg-white shadow-lg ' : 'h-16 bg-transparent'}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`${scrolled ? 'text-white' : 'text-pink-500'} hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              About
            </a>
            <a href="/what" className={`${scrolled ? 'text-white' : 'text-pink-500'} hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              What
            </a>
            <a href="/why" className={`${scrolled ? 'text-white' : 'text-pink-500'} hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              Why
            </a>
            <a href="/contact" className={`${scrolled ? 'text-white' : 'text-pink-500'} hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="outline-none mobile-menu-button"
            >
              <svg 
                className="w-6 h-6 text-white" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 transition-all duration-300`}>
        <div className="flex flex-col space-y-4 px-4 py-4 items-center">
          <a href="/about" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            About
          </a>
          <a href="/what" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            What
          </a>
          <a href="/why" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            Why
          </a>
          <a href="/contact" className="px-2 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors duration-300 font-medium text-center">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;