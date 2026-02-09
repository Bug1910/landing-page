import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Award, Globe, TrendingUp } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-600 rounded-full shadow-lg">
              <Award className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">全球知名音響設備製造商</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              <span className="text-gray-900">專業音響</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent font-bold">
                完美音質
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              源自台中，揚名國際。CAROL 致力於為全球專業人士提供高品質音響設備，
              從舞台表演到錄音室，我們的產品始終是您最值得信賴的夥伴。
            </p>
            
            <div className="flex gap-4 flex-wrap mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 shadow-lg">
                探索產品
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-blue-600 border-2 border-blue-600 hover:bg-blue-50 text-lg px-8"
              >
                了解更多
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">年經驗</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">國家銷售</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                <div className="text-xs text-gray-600">台灣精品獎</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1737885197946-6d9d79dade89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdWRpbyUyMHN0dWRpbyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzA2NTMwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Audio Equipment"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-xs text-gray-600">客戶滿意度</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">全球</div>
                    <div className="text-xs text-gray-600">信賴品牌</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
