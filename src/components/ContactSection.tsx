
import React from 'react';
import { Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 medical-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              تواصل معنا
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              نحن هنا لخدمتك على مدار الساعة. تواصل معنا الآن للحصول على أفضل رعاية صحية
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">أرقام التواصل</h4>
                    <p className="text-blue-100">01001160130 - للاتصال المباشر</p>
                    <p className="text-blue-100">01019274930 - واتساب</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.426"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">واتساب</h4>
                    <p className="text-blue-100">للحجز والاستفسارات السريعة</p>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">مناطق الخدمة</h4>
                    <ul className="text-blue-100 space-y-1">
                      <li>• 6 أكتوبر</li>
                      <li>• الشيخ زايد</li>
                      <li>• حدائق أكتوبر</li>
                      <li>• حدائق الأهرام</li>
                    </ul>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">ساعات العمل</h4>
                    <p className="text-blue-100">متاح 24 ساعة / 7 أيام الأسبوع</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 medical-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">تواصل سريع</h3>
                
                <div className="space-y-4">
                  <a 
                    href="tel:+201001160130"
                    className="block w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                  >
                    📞 اتصال مباشر: 01001160130
                  </a>
                  
                  <a 
                    href="https://wa.me/201019274930"
                    className="block w-full bg-green-500 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors duration-300 text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 واتساب: 01019274930
                  </a>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-red-800 mb-3">⚠️ حالات الطوارئ</h4>
                <p className="text-red-700 mb-4">
                  في حالات الطوارئ الطبية، اتصل بنا فوراً على أرقام التواصل أعلاه
                </p>
                <p className="text-red-600 text-sm">
                  نحن متاحون على مدار الساعة لخدمتك
                </p>
              </div>

              {/* Service Promise */}
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-6">
                <h4 className="text-xl font-bold text-green-800 mb-3">✅ وعدنا لك</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• استجابة سريعة خلال 30 دقيقة</li>
                  <li>• فريق طبي مؤهل ومدرب</li>
                  <li>• أعلى معايير النظافة والسلامة</li>
                  <li>• أسعار تنافسية وشفافة</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                CircleCare - بنهتم... عشان ترتاح
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                خدمة طبية متميزة في راحة منزلك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/201019274930"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  احجز موعد الآن
                </a>
                <a 
                  href="tel:+201001160130"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  استشارة فورية
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
