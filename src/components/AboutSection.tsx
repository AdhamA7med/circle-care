
import React from 'react';

const AboutSection = () => {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "فريق طبي متخصص",
      description: "طاقم تمريض عالي الكفاءة تحت إشراف نخبة من الاستشاريين"
    },
    {
      icon: "🏠",
      title: "خدمة منزلية",
      description: "نوفر عليك تعب المستشفيات والزحمة - الخدمة تصل لباب البيت"
    },
    {
      icon: "⏰",
      title: "متاح 24/7",
      description: "خدمة متواصلة في أي وقت تحتاجها، في حالات الطوارئ والمتابعة الدورية"
    },
    {
      icon: "🔒",
      title: "أمان وثقة",
      description: "أعلى معايير السلامة والتعقيم مع ضمان الخصوصية التامة"
    }
  ];

  const coverage = [
    "6 أكتوبر",
    "الشيخ زايد", 
    "حدائق أكتوبر",
    "حدائق الأهرام"
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
              عن CircleCare
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              في CircleCare، الرعاية الطبية مش بس خدمة، دي أمان واهتمام. 
              نحن نؤمن بأن كل شخص يستحق رعاية صحية متميزة في راحة منزله.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 space-x-reverse">
                  <div className="text-2xl sm:text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-blue-800 mb-2 sm:mb-3">رسالتنا</h3>
              <p className="text-blue-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                تقديم أفضل خدمات الرعاية الصحية المنزلية بأعلى معايير الجودة والاحترافية، 
                مع الاهتمام بالجانب الإنساني والنفسي لمرضانا وذويهم.
              </p>
            </div>

            {/* Coverage Areas */}
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4">مناطق الخدمة</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3 space-x-reverse">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-xs sm:text-sm lg:text-base">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=500&fit=crop" 
                alt="فريق CircleCare الطبي" 
                className="w-full h-48 sm:h-64 md:h-72 lg:h-96 object-cover rounded-xl sm:rounded-2xl medical-shadow"
              />
              
              {/* Stats Cards */}
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-8 -right-3 sm:-right-4 lg:-right-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 medical-shadow">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-1 sm:mb-2">500+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">عميل راضي</div>
                </div>
              </div>
              
              <div className="absolute -top-3 sm:-top-4 lg:-top-8 -left-3 sm:-left-4 lg:-left-8 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 medical-shadow">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">5+</div>
                  <div className="text-gray-600 text-xs sm:text-sm">سنوات خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8 lg:mb-12">قيمنا الأساسية</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 medical-gradient rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-white">❤️</span>
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3">الرحمة والعطف</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">نتعامل مع كل مريض بقلب مفتوح ونفهم معاناته</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 medical-gradient rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-white">⚡</span>
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3">السرعة والدقة</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">استجابة سريعة وتنفيذ دقيق لجميع الخدمات الطبية</p>
            </div>
            
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 medical-gradient rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl text-white">🌟</span>
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3">التميز والجودة</h4>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">نسعى دائماً لتقديم أفضل مستوى من الخدمات الطبية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
