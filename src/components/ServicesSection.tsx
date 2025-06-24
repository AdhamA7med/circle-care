
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: "💉",
      title: "الحقن والمحاليل",
      description: "حقن وريدي، عضلي، تحت الجلد، وتركيب محاليل وحديد وريدي بأيدي متخصصة",
      features: ["حقن آمنة ومعقمة", "تركيب محاليل", "حقن الحديد الوريدي"]
    },
    {
      icon: "🩹",
      title: "العناية بالجروح",
      description: "تغيير الجروح ومتابعة ما بعد العمليات الجراحية بعناية فائقة",
      features: ["تنظيف وتطهير الجروح", "تغيير الضمادات", "متابعة الشفاء"]
    },
    {
      icon: "🩺",
      title: "المتابعة الطبية",
      description: "قياس الضغط والسكر والعلامات الحيوية مع تقارير دورية مفصلة",
      features: ["قياس الضغط", "فحص السكر", "متابعة العلامات الحيوية"]
    },
    {
      icon: "🏥",
      title: "القساطر الطبية",
      description: "تغيير وتركيب القساطر البولية بطريقة آمنة ومعقمة",
      features: ["تركيب القساطر", "تغيير دوري", "عناية طبية متخصصة"]
    },
    {
      icon: "👵",
      title: "رعاية كبار السن",
      description: "خدمة جليس متخصص في رعاية كبار السن بصبر واهتمام كامل",
      features: ["رعاية يومية", "مساعدة في الأنشطة", "متابعة صحية"]
    },
    {
      icon: "🧘",
      title: "العلاج الطبيعي",
      description: "جلسات علاج طبيعي منزلي مصممة حسب حالة كل مريض",
      features: ["جلسات تأهيل", "تمارين علاجية", "متابعة التحسن"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
            خدماتنا الطبية
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            نقدم مجموعة شاملة من الخدمات الطبية والتمريضية المنزلية 
            بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 medical-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4 text-center">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-center">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm lg:text-base text-gray-700">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full ml-2 sm:ml-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="text-center">
                <a 
                  href="https://wa.me/201019274930"
                  className="inline-block medical-gradient text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg font-bold text-xs sm:text-sm lg:text-base hover:scale-105 transition-transform duration-300"
                >
                  احجز الآن
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 medical-shadow max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              محتاج استشارة طبية؟
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-5 lg:mb-6">
              تواصل معنا الآن للحصول على استشارة مجانية وحجز موعد مناسب
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://wa.me/201019274930"
                className="medical-gradient text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold text-xs sm:text-sm lg:text-base hover:scale-105 transition-transform duration-300"
              >
                واتساب: 01019274930
              </a>
              <a 
                href="tel:+201001160130"
                className="border-2 border-blue-600 text-blue-600 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold text-xs sm:text-sm lg:text-base hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                اتصال: 01001160130
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
