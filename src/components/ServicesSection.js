import { Mic2, Play, Radio } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        { icon: <Mic2 className="w-8 h-8" />, title: "Recording", desc: "Professional vocal and instrument recording" },
        { icon: <Play className="w-8 h-8" />, title: "Production", desc: "Full music production and arrangement" },
        { icon: <Radio className="w-8 h-8" />, title: "Mixing", desc: "Expert mixing and mastering" },
    ];

    return (
        <div id="services" className="max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
                    >
                        <div className="text-purple-400 mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-400">{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
