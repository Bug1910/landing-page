import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              CAROL
            </div>
            <p className="text-gray-400 mb-4">
              台灣佳樂電子股份有限公司
              <br />
              全球知名音響設備製造商
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">產品系列</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">PS-1 動圈式麥克風</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BTM-210 無線模組</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CLM-101 復古麥克風</a></li>
              <li><a href="#" className="hover:text-white transition-colors">所有產品</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">支援服務</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">產品手冊</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技術支援</a></li>
              <li><a href="#" className="hover:text-white transition-colors">保固資訊</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常見問題</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">聯絡我們</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>台中市工業區</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>+886-4-XXXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>info@carol-audio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© 2026 台灣佳樂電子股份有限公司 CAROL. 版權所有。</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">使用條款</a>
            <a href="#" className="hover:text-white transition-colors">網站地圖</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
