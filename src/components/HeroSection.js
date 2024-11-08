import { ChevronRight } from 'lucide-react';

export default function HeroSection({ isVisible }) {
    return (
        <div className="relative h-screen flex items-center justify-center px-4">
            <div
                className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Where Music Comes to Life
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                    Professional recording, mixing, and production services in a state-of-the-art facility
                </p>
                <a
                    href="#contact"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center mx-auto"
                    style={{ display: 'inline-flex', textDecoration: 'none', minWidth: '200px' }} 
                >
                    <span>Book a Session</span>
                    <ChevronRight className="ml-2" />
                </a>
            </div>
        </div>
    );
}
