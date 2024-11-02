import { Music, Mic2, Radio } from 'lucide-react';

export default function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 animate-float-slow">
                <Music className="w-12 h-12 text-purple-400/30" />
            </div>
            <div className="absolute top-1/3 right-1/4 animate-float-medium">
                <Mic2 className="w-16 h-16 text-pink-400/30" />
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
                <Radio className="w-10 h-10 text-blue-400/30" />
            </div>
        </div>
    );
}
