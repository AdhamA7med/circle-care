
import React from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="medical-gradient py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              CircleCare
              <span className="block text-2xl lg:text-3xl font-normal mt-2">
                الخدمات الطبية والتمريضية
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-6 text-blue-100">
              الرعاية الطبية مش بس خدمة، دي أمان واهتمام
            </p>
            
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              خدمات طبية وتمريضية متخصصة في منزلك بأعلى معايير الجودة والاحترافية. 
              فريق طبي مؤهل ومعدات حديثة لضمان أفضل رعاية صحية لك ولعائلتك.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToServices}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 medical-shadow hover:scale-105"
              >
                اكتشف خدماتنا
              </button>
              
              <a 
                href="tel:+201001160130"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                اتصل الآن
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 medical-shadow">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="خدمات طبية متخصصة" 
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 medical-shadow animate-pulse-soft">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">خدمة متواصلة</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-green-500 text-white rounded-2xl p-4 medical-shadow animate-pulse-soft">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">100%</div>
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
