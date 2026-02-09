import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Award, Zap, Volume2, ShoppingCart, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface ProductShowcaseProps {
  selectedProduct: number;
  onProductChange: (index: number) => void;
}

const products = [
  {
    id: 'ps1',
    name: 'PS-1',
    fullName: 'PS-1 旗艦級動圈式麥克風',
    tagline: '專業級音質，經典不敗',
    description: 'CAROL 的指標性經典產品，長期在國際舞台（如 NAMM Show）獲得好評。採用專利阻尼技術，能有效消除觸摸雜音，其音質被公認為可媲美市場領導品牌（如 Shure SM58），但價格更具競爭力。',
    image: 'https://images.unsplash.com/photo-1745848413076-cdf1fa5d4d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWNyb3Bob25lJTIwc3R1ZGlvfGVufDF8fHx8MTc3MDY0Mzc0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-600 to-blue-800',
    price: 4980,
    features: [
      { icon: Award, title: '專利阻尼技術', description: '有效消除觸摸雜音（Handling Noise）' },
      { icon: Volume2, title: '頂級音質', description: '媲美 Shure SM58 的專業表現' },
      { icon: Check, title: 'NAMM Show 認證', description: '國際專業音響展獲獎產品' },
      { icon: Zap, title: '高性價比', description: '專業品質，更具競爭力的價格' },
    ],
  },
  {
    id: 'btm210',
    name: 'BTM-210',
    fullName: 'BTM-210 藍牙無線收發模組',
    tagline: '一秒變無線，隨心所欲',
    description: '在台灣教學、導覽及小型會議市場極受歡迎。能將任何有線麥克風「一秒變無線」。體積小、配對快，且延遲極低，曾獲得「台灣精品獎」肯定。',
    image: 'https://images.unsplash.com/photo-1760088348190-023af514df23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGJsdWV0b290aCUyMGF1ZGlvJTIwZGV2aWNlfGVufDF8fHx8MTc3MDY1MjI3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-cyan-600 to-blue-600',
    price: 3280,
    features: [
      { icon: Zap, title: '一秒變無線', description: '將任何有線麥克風瞬間升級為無線' },
      { icon: Award, title: '台灣精品獎', description: '獲得官方品質認證' },
      { icon: Check, title: '極低延遲', description: '確保音訊同步，無延遲困擾' },
      { icon: Volume2, title: '輕巧便攜', description: '體積小、配對快速、操作簡單' },
    ],
  },
  {
    id: 'clm101',
    name: 'CLM-101',
    fullName: 'CLM-101 經典復古麥克風',
    tagline: '復古美學，現代科技',
    description: '外型極具辨識度，是演藝表演、攝影棚及主題餐廳的熱門選擇。擁有 50 年代的復古金屬外殼，內部搭載現代的高品質收音單體，兼具美學與專業收音品質。',
    image: 'https://images.unsplash.com/photo-1765672175920-3b1669389a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcmV0cm8lMjBtaWNyb3Bob25lfGVufDF8fHx8MTc3MDY1MjI3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-amber-600 to-orange-600',
    price: 6800,
    features: [
      { icon: Award, title: '50年代復古設計', description: '經典金屬外殼，極具辨識度' },
      { icon: Volume2, title: '現代收音技術', description: '搭載高品質現代收音單體' },
      { icon: Check, title: '多場景適用', description: '表演、攝影棚、主題餐廳首選' },
      { icon: Zap, title: '美學與功能兼具', description: '既是藝術品，也是專業工具' },
    ],
  },
];

export function ProductShowcase({ selectedProduct, onProductChange }: ProductShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const currentProduct = products[selectedProduct];

  // 為每個產品生成隨機折扣（5%, 10%, 15%, 20%, 25%）
  const discounts = useMemo(() => {
    const possibleDiscounts = [5, 10, 15, 20, 25];
    return products.map(() => {
      return possibleDiscounts[Math.floor(Math.random() * possibleDiscounts.length)];
    });
  }, []);

  const currentDiscount = discounts[selectedProduct];
  const discountedPrice = Math.round(currentProduct.price * (1 - currentDiscount / 100));
  const savedAmount = currentProduct.price - discountedPrice;

  return (
    <section id="products" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            熱銷產品系列
          </h2>
          <p className="text-xl text-gray-600">
            三款經典產品，滿足您的專業需求
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => {
                onProductChange(index);
                setActiveFeature(null);
              }}
              className={`px-8 py-4 rounded-xl transition-all ${
                selectedProduct === index
                  ? `bg-gradient-to-r ${product.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className="font-bold text-lg">{product.name}</div>
              <div className="text-sm opacity-90">{product.tagline}</div>
            </button>
          ))}
        </div>

        {/* Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className={`relative bg-gradient-to-br ${currentProduct.color} p-12 flex items-center justify-center`}>
                {/* Discount Badge */}
                <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg z-10">
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span className="font-bold">限時 {currentDiscount}% OFF</span>
                  </div>
                </div>
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <ImageWithFallback
                    src={currentProduct.image}
                    alt={currentProduct.fullName}
                    className="w-full h-auto max-w-md rounded-lg shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="p-12">
                <h3 className="text-3xl md:text-4xl mb-4">
                  {currentProduct.fullName}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Pricing */}
                <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-600 line-through mb-1">
                        原價 NT$ {currentProduct.price.toLocaleString()}
                      </div>
                      <div className="text-3xl font-bold text-green-700">
                        NT$ {discountedPrice.toLocaleString()}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">省下</div>
                      <div className="text-2xl font-bold text-red-600">
                        NT$ {savedAmount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className={`w-full bg-gradient-to-r ${currentProduct.color} text-lg shadow-lg hover:shadow-xl transition-all`}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    立即購買 - 享 {currentDiscount}% 折扣
                  </Button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl mb-4">產品特點</h4>
                  <div className="grid gap-3">
                    {currentProduct.features.map((feature, index) => {
                      const Icon = feature.icon;
                      const isActive = activeFeature === index;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                            isActive
                              ? `border-blue-600 bg-blue-50 shadow-md`
                              : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                          }`}
                          onMouseEnter={() => setActiveFeature(index)}
                          onMouseLeave={() => setActiveFeature(null)}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 rounded-lg ${
                              isActive ? 'bg-blue-600' : 'bg-gray-200'
                            }`}>
                              <Icon className={`w-5 h-5 ${
                                isActive ? 'text-white' : 'text-gray-600'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 mb-1">
                                {feature.title}
                              </div>
                              <AnimatePresence>
                                {isActive && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-sm text-gray-600"
                                  >
                                    {feature.description}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <Button size="lg" variant="outline" className="w-full md:w-auto">
                  了解更多詳情
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}