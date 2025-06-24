
import React from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="medical-gradient py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in text-center lg:text-right order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
              CircleCare
              <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-1 sm:mt-2">
                الخدمات الطبية والتمريضية
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 lg:mb-6 text-blue-100">
              الرعاية الطبية مش بس خدمة، دي أمان واهتمام
            </p>
            
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              خدمات طبية وتمريضية متخصصة في منزلك بأعلى معايير الجودة والاحترافية. 
              فريق طبي مؤهل ومعدات حديثة لضمان أفضل رعاية صحية لك ولعائلتك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <button 
                onClick={scrollToServices}
                className="bg-white text-blue-600 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-all duration-300 medical-shadow hover:scale-105"
              >
                اكتشف خدماتنا
              </button>
              
              <a 
                href="tel:+201001160130"
                className="border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                اتصل الآن
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6 xl:p-8 medical-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="خدمات طبية متخصصة" 
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-80 object-cover rounded-lg sm:rounded-xl lg:rounded-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-6 -right-2 sm:-right-3 lg:-right-6 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 xl:p-6 medical-shadow animate-pulse-soft">
                <div className="text-center">
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1 lg:mb-2">24/7</div>
                  <div className="text-gray-600 text-xs sm:text-sm">خدمة متواصلة</div>
                </div>
              </div>
              
              <div className="absolute -top-2 sm:-top-3 lg:-top-6 -left-2 sm:-left-3 lg:-left-6 bg-green-500 text-white rounded-lg sm:rounded-xl lg:rounded-2xl p-1.5 sm:p-2 lg:p-3 xl:p-4 medical-shadow animate-pulse-soft">
                <div className="text-center">
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 sm:mb-1">100%</div>
                  <div className="text-xs">احترافية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
