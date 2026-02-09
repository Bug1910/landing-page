import { motion } from 'motion/react';
import bluePhone from 'figma:asset/951fe984d183f6e91b0bb636039ccb8448042b35.png';
import purplePhone from 'figma:asset/b43a088ff4f5399842e2f92d8567ae84d05abf85.png';
import blackPhone from 'figma:asset/522103a8bf219c47efd5c1c6f7ed899abca4b9cc.png';
import whitePhone from 'figma:asset/d6c08e0f24cdf40e35e274b624118c2546e348f9.png';
import redPhone from 'figma:asset/df08e81555980ed61db375bb8b027c49ee5b0757.png';

interface ColorSelectorProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const colors = [
  { id: 'blue', name: '藍色', image: bluePhone, color: '#9BB5CE' },
  { id: 'purple', name: '紫色', image: purplePhone, color: '#E1D7E8' },
  { id: 'black', name: '午夜黑', image: blackPhone, color: '#424245' },
  { id: 'white', name: '星光白', image: whitePhone, color: '#F5F5F0' },
  { id: 'red', name: '紅色', image: redPhone, color: '#FA2C3C' },
];

export function ColorSelector({ selectedColor, onColorChange }: ColorSelectorProps) {
  const currentColor = colors.find((c) => c.id === selectedColor) || colors[0];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            精選五種絕美色彩
          </h2>
          <p className="text-xl text-gray-600">
            選擇最能展現你個性的顏色
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <motion.div
            key={currentColor.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md"
          >
            <img
              src={currentColor.image}
              alt={currentColor.name}
              className="w-full h-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => onColorChange(color.id)}
              className="group flex flex-col items-center gap-2"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 transition-all ${
                  selectedColor === color.id
                    ? 'border-gray-900 scale-110'
                    : 'border-gray-300 hover:border-gray-500'
                }`}
                style={{ backgroundColor: color.color }}
              />
              <span
                className={`text-sm transition-colors ${
                  selectedColor === color.id
                    ? 'text-gray-900'
                    : 'text-gray-500 group-hover:text-gray-700'
                }`}
              >
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
