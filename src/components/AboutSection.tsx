
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              عن CircleCare
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              في CircleCare، الرعاية الطبية مش بس خدمة، دي أمان واهتمام. 
              نحن نؤمن بأن كل شخص يستحق رعاية صحية متميزة في راحة منزله.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">رسالتنا</h3>
              <p className="text-blue-700 leading-relaxed">
                تقديم أفضل خدمات الرعاية الصحية المنزلية بأعلى معايير الجودة والاحترافية، 
                مع الاهتمام بالجانب الإنساني والنفسي لمرضانا وذويهم.
              </p>
            </div>

            {/* Coverage Areas */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">مناطق الخدمة</h3>
              <div className="grid grid-cols-2 gap-3">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=500&fit=crop" 
                alt="فريق CircleCare الطبي" 
                className="w-full h-96 object-cover rounded-2xl medical-shadow"
              />
              
              {/* Stats Cards */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 medical-shadow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">عميل راضي</div>
                </div>
              </div>
              
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 medical-shadow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600 text-sm">سنوات خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">قيمنا الأساسية</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 medical-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">❤️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">الرحمة والعطف</h4>
              <p className="text-gray-600">نتعامل مع كل مريض بقلب مفتوح ونفهم معاناته</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 medical-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">السرعة والدقة</h4>
              <p className="text-gray-600">استجابة سريعة وتنفيذ دقيق لجميع الخدمات الطبية</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 medical-gradient rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl text-white">🌟</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">التميز والجودة</h4>
              <p className="text-gray-600">نسعى دائماً لتقديم أفضل مستوى من الخدمات الطبية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
