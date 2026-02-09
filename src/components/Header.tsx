import { Menu } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              CAROL
            </div>
            <div className="hidden md:block text-sm text-gray-600">
              台灣佳樂電子
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
              產品
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              關於我們
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              聯絡我們
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              立即選購
            </Button>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
