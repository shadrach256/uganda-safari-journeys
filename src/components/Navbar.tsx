
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={`font-serif text-2xl font-bold ${isScrolled ? 'text-safari-green' : 'text-white'}`}>
            Uganda Safari Journeys
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className={`font-medium transition-colors ${isScrolled ? 'text-safari-dark hover:text-safari-green' : 'text-white hover:text-safari-beige'}`}>
            Home
          </a>
          <a href="#about" className={`font-medium transition-colors ${isScrolled ? 'text-safari-dark hover:text-safari-green' : 'text-white hover:text-safari-beige'}`}>
            About
          </a>
          <a href="#safaris" className={`font-medium transition-colors ${isScrolled ? 'text-safari-dark hover:text-safari-green' : 'text-white hover:text-safari-beige'}`}>
            Safaris
          </a>
          <a href="#testimonials" className={`font-medium transition-colors ${isScrolled ? 'text-safari-dark hover:text-safari-green' : 'text-white hover:text-safari-beige'}`}>
            Testimonials
          </a>
          <Button 
            className="bg-safari-green hover:bg-safari-brown text-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke={isScrolled ? "currentColor" : "white"} 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="font-medium text-safari-dark hover:text-safari-green" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="font-medium text-safari-dark hover:text-safari-green" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#safaris" className="font-medium text-safari-dark hover:text-safari-green" onClick={() => setIsMobileMenuOpen(false)}>
              Safaris
            </a>
            <a href="#testimonials" className="font-medium text-safari-dark hover:text-safari-green" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <Button 
              className="bg-safari-green hover:bg-safari-brown text-white w-full"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
