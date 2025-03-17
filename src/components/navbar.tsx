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
    <nav className={`w-full fixed top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[rgba(255,255,2555,0.54)]' : 'bg-transparent'}`}>
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center md:py-1">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={playstore_processed} 
                alt="Company Logo" 
                className={`w-auto rounded-xl h-8 md:h-16 bg-transparent transition duration-300`}
                // className={`w-auto rounded-xl h-16 bg-transparent transition duration-300  ${scrolled ? 'h-10 bg-white shadow-lg ' : 'h-16 bg-transparent'}`}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* <a href="/#about" className={`${scrolled ? 'text-white' : 'text-pink-500'} hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}> */}

            <a href="/#about" className={`text-pink-500 hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              Mission
            </a>
            <a href="/#whatif" className={`text-pink-500 hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              What if
            </a>
            <a href="/#process" className={`text-pink-500 hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
              Our Process
            </a>
            <a href="/#contact" className={`text-pink-500 hover:text-purple-400 transition-colors duration-300 font-medium text-xl`}>
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
                className="w-6 h-6 text-hotPink" 
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
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-hotPink transition-all duration-300`}>
        <div className="flex flex-col space-y-4 px-4 py-4 items-center">
          <a href="/#about" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            About
          </a>
          <a href="/#whatif" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            What
          </a>
          <a href="/#process" className="text-white hover:text-purple-400 transition-colors duration-300 font-medium">
            Our Process
          </a>
          <a href="/#contact" className="text-white hover:bg-purple-600 transition-colors duration-300 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;