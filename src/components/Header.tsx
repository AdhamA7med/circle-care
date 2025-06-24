
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 medical-gradient rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M12 8L12.5 10.5L15 11L12.5 11.5L12 14L11.5 11.5L9 11L11.5 10.5L12 8Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">CircleCare</h1>
                <p className="text-sm text-gray-600">الخدمات الطبية والتمريضية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                عن CircleCare
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                تواصل معنا
              </button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
              <div className="text-right">
                <p className="text-sm text-gray-600">اتصل الآن</p>
                <p className="text-lg font-bold text-blue-600">01001160130</p>
              </div>
              <Phone className="w-8 h-8 text-blue-600" />
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                عن CircleCare
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                تواصل معنا
              </button>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">اتصل الآن</p>
                <p className="text-lg font-bold text-blue-600">01001160130</p>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
