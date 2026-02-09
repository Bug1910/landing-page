import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductShowcase } from './components/ProductShowcase';
import { CompanyInfo } from './components/CompanyInfo';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductShowcase selectedProduct={selectedProduct} onProductChange={setSelectedProduct} />
      <CompanyInfo />
      <CallToAction />
      <Footer />
    </div>
  );
}