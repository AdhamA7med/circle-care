
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "أم محمد أحمد",
      location: "6 أكتوبر",
      rating: 5,
      text: "خدمة ممتازة جداً، الممرضة كانت محترفة ومتعاونة. تغيير الجرح تم بعناية فائقة وبدون ألم. أنصح بشدة بـ CircleCare",
      service: "تغيير الجروح"
    },
    {
      name: "محمد السيد",
      location: "الشيخ زايد",
      rating: 5,
      text: "والدي محتاج رعاية خاصة وفريق CircleCare قدم خدمة رائعة. الاهتمام والصبر كان واضح جداً. شكراً لكم",
      service: "رعاية كبار السن"
    },
    {
      name: "د. سارة محمود",
      location: "حدائق أكتوبر",
      rating: 5,
      text: "احترافية عالية في العلاج الطبيعي. الأخصائي كان متمكن وساعدني كتير في التحسن بعد العملية",
      service: "العلاج الطبيعي"
    },
    {
      name: "أحمد علي",
      location: "حدائق الأهرام",
      rating: 5,
      text: "خدمة سريعة ومتاحة في أي وقت. الحقن الوريدي تم بمهارة عالية. فريق محترف ومتخصص",
      service: "الحقن والمحاليل"
    },
    {
      name: "فاطمة حسن",
      location: "6 أكتوبر",
      rating: 5,
      text: "CircleCare وفر علينا تعب المستشفيات. الخدمة المنزلية مريحة جداً والفريق أمين ومحترف",
      service: "المتابعة الطبية"
    },
    {
      name: "عم حسام",
      location: "الشيخ زايد",
      rating: 5,
      text: "تغيير القسطرة تم بأمان كامل وبدون مشاكل. الممرض كان صبور ومتفهم. خدمة ممتازة",
      service: "القساطر الطبية"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={12}
        className={`sm:w-4 sm:h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
            آراء عملائنا
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            نفتخر بثقة عملائنا وشهاداتهم على جودة خدماتنا الطبية المتميزة
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 medical-shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Quote size={20} className="sm:w-8 sm:h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-3 sm:pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 animate-fade-in">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 medical-shadow max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">
              انضم لعملائنا الراضين
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-5 lg:mb-6 text-xs sm:text-sm lg:text-base">
              احجز خدمتك الطبية الآن واحصل على نفس مستوى الرعاية المتميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/201019274930"
                className="medical-gradient text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold hover:scale-105 transition-transform duration-300 text-xs sm:text-sm lg:text-base"
              >
                احجز عبر الواتساب
              </a>
              <a
                href="tel:+201001160130"
                className="border-2 border-blue-600 text-blue-600 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base"
              >
                اتصل بنا الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
