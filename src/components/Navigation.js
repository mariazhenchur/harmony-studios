import { Music } from 'lucide-react';

export default function Navigation() {
    return (
        <nav className="fixed w-full p-6 backdrop-blur-sm bg-black/30 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Music className="w-8 h-8 text-purple-400" />
                    <span className="text-2xl font-bold">Harmony Studios</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
                    <a href="#gallery" className="hover:text-purple-400 transition-colors">Gallery</a>
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    );
}
