import { Camera, Zap, Battery, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: '先進雙鏡頭系統',
    description: '4800萬像素主相機，拍出驚人細節。2倍光學變焦品質，讓你更靠近精彩瞬間。',
  },
  {
    icon: Zap,
    title: 'A16 仿生晶片',
    description: '超快速效能，流暢處理各種任務。先進的機器學習功能，讓你的手機更聰明。',
  },
  {
    icon: Battery,
    title: '全天候電池續航',
    description: '一整天的使用時間，讓你盡情探索。支援快速充電和 MagSafe 無線充電。',
  },
  {
    icon: Smartphone,
    title: '動態島',
    description: '全新互動方式，將通知和即時動態完美融入螢幕。讓你隨時掌握重要資訊。',
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            強大功能，盡在掌握
          </h2>
          <p className="text-xl text-gray-600">
            每個細節都經過精心設計
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
