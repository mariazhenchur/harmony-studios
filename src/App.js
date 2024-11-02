import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FloatingElements from './components/FloatingElements';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const studioImages = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519508234439-4f23643125c1?w=800&h=400&fit=crop",
    "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=800&h=400&fit=crop"
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % studioImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % studioImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + studioImages.length) % studioImages.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <Navigation />
      <HeroSection isVisible={isVisible} />
      <FloatingElements />
      <ServicesSection />
      <GallerySection
        studioImages={studioImages}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
