
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
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            خدماتنا الطبية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية والتمريضية المنزلية 
            بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 medical-shadow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full ml-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="mt-8 text-center">
                <a 
                  href="https://wa.me/201019274930"
                  className="inline-block medical-gradient text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform duration-300"
                >
                  احجز الآن
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 medical-shadow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              محتاج استشارة طبية؟
            </h3>
            <p className="text-gray-600 mb-6">
              تواصل معنا الآن للحصول على استشارة مجانية وحجز موعد مناسب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/201019274930"
                className="medical-gradient text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300"
              >
                واتساب: 01019274930
              </a>
              <a 
                href="tel:+201001160130"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
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
