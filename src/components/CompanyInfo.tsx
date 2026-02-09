import { MapPin, Award, Globe, Users } from 'lucide-react';

export function CompanyInfo() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            關於 CAROL
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            台灣佳樂電子是全球知名的音響設備製造商，總部位於台中。
            我們致力於為全球專業人士提供高品質、高性價比的音響解決方案。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2">總部台中</h3>
            <p className="text-gray-600">深耕台灣，放眼全球</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2">台灣精品獎</h3>
            <p className="text-gray-600">品質獲得國際肯定</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2">國際市場</h3>
            <p className="text-gray-600">產品銷售全球100+國家</p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-2">專業團隊</h3>
            <p className="text-gray-600">50年音響設備經驗</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl mb-4">
            加入 CAROL 的專業行列
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            無論您是舞台表演者、錄音室工程師，還是音響愛好者，
            CAROL 都能為您提供最適合的專業音響解決方案。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              聯絡我們
            </button>
            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors border-2 border-white/20">
              下載產品目錄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
