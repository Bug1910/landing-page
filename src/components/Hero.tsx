import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
          iPhone 15
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-4">
          全新設計。超強實力。
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          動態島、4800萬像素主相機、USB-C，一切都為你而來
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            立即購買
          </Button>
          <Button size="lg" variant="outline">
            了解更多
          </Button>
        </div>
      </div>
    </section>
  );
}
