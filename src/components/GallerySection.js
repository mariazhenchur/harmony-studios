import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import studio1 from '../img/studio1.jpg'; 
import studio2 from '../img/studio2.jpg'; 
import studio3 from '../img/studio3.jpg'; 
import studio4 from '../img/studio4.jpg'; 


const studioImages = [
    studio1,
    studio2,
    studio3,
    studio4
];

function GallerySection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? studioImages.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === studioImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <div id="gallery" className="max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Studio Gallery</h2>
            <div className="relative">
                <div className="overflow-hidden rounded-xl aspect-[2/1]">
                    {studioImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                }`}
                            style={{ display: index === currentSlide ? 'block' : 'none' }}
                        >
                            <img
                                src={image}
                                alt={`Studio ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                    <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                    <FiChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {studioImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GallerySection;


