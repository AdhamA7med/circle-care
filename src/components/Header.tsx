
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
      <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-2.5 sm:py-3 lg:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 medical-gradient rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="sm:w-5 sm:h-5 lg:w-6 lg:h-6">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M12 8L12.5 10.5L15 11L12.5 11.5L12 14L11.5 11.5L9 11L11.5 10.5L12 8Z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-800">CircleCare</h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">الخدمات الطبية والتمريضية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6 space-x-reverse">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                عن CircleCare
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-sm xl:text-base"
              >
                تواصل معنا
              </button>
            </nav>

            {/* Contact Info - Hidden on mobile, visible on desktop */}
            <div className="hidden xl:flex items-center space-x-3 space-x-reverse">
              <div className="text-right">
                <p className="text-xs text-gray-600">اتصل الآن</p>
                <p className="text-sm font-bold text-blue-600">01001160130</p>
              </div>
              <Phone className="w-6 h-6 text-blue-600" />
            </div>

            {/* Mobile Contact Info */}
            <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse lg:hidden">
              <a 
                href="tel:+201001160130"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="p-1.5 sm:p-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
                >
                  الرئيسية
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
                >
                  خدماتنا
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
                >
                  عن CircleCare
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
                >
                  آراء العملاء
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-right text-gray-700 hover:text-blue-600 font-medium py-1.5 sm:py-2 transition-colors text-sm sm:text-base"
                >
                  تواصل معنا
                </button>
              </div>
              <div className="pt-3 sm:pt-4 border-t border-gray-200 mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-600 mb-2">للتواصل والحجز</p>
                <div className="flex flex-col space-y-2">
                  <a href="tel:+201001160130" className="text-sm sm:text-base font-bold text-blue-600 flex items-center">
                    📞 01001160130
                  </a>
                  <a href="https://wa.me/201019274930" className="text-sm sm:text-base font-bold text-green-600 flex items-center">
                    📱 01019274930
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
