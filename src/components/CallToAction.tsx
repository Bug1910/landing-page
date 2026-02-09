import { useState } from 'react';
import { ShoppingCart, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function CallToAction() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Purchase CTA */}
        <div className="bg-white rounded-3xl p-12 mb-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6">
                準備好提升您的
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  音響體驗了嗎？
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                探索 CAROL 全系列專業音響產品，找到最適合您的解決方案。
                我們提供完整的售前諮詢與售後服務，讓您購買無憂。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>全台灣免費配送</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>2年原廠保固</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>30天滿意保證</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>專業技術支援團隊</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                <h3 className="text-2xl mb-4">線上選購</h3>
                <p className="text-gray-600 mb-6">
                  立即瀏覽我們的線上商店，享受便利的購物體驗
                </p>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  前往線上商店
                </Button>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border-2 border-purple-200">
                <h3 className="text-2xl mb-4">尋找經銷商</h3>
                <p className="text-gray-600 mb-6">
                  找到離您最近的授權經銷商，親身體驗產品
                </p>
                <Button size="lg" variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  查詢經銷據點
                </Button>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border-2 border-amber-200">
                <h3 className="text-2xl mb-4">專業諮詢</h3>
                <p className="text-gray-600 mb-6">
                  聯絡我們的專業團隊，獲得客製化解決方案
                </p>
                <Button size="lg" variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Mail className="w-5 h-5 mr-2" />
                  立即諮詢
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl mb-4">
            訂閱電子報
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            第一時間獲得最新產品資訊、優惠活動及專業音響技術文章
          </p>

          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="請輸入您的電子郵件地址"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 text-lg bg-white/95 border-0 text-gray-900 placeholder:text-gray-500"
              />
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-white text-blue-600 hover:bg-gray-100"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    已訂閱
                  </>
                ) : (
                  <>
                    訂閱
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
            {isSubscribed && (
              <p className="mt-4 text-green-200 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                感謝您的訂閱！我們將定期發送最新資訊給您。
              </p>
            )}
          </form>

          <p className="mt-6 text-sm opacity-75">
            我們重視您的隱私，絕不會將您的資訊分享給第三方
          </p>
        </div>
      </div>
    </section>
  );
}
