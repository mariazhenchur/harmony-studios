import React from 'react';

const AboutSection = () => {
    return (
        <div id="about" className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold">About Our Studio</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Founded in 2015, Harmony Studios has been the birthplace of countless musical masterpieces. Our state-of-the-art facility combines vintage warmth with modern precision, creating the perfect environment for artists to explore their creativity.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        With our team of experienced producers and engineers, we've helped artists from various genres achieve their sonic vision. From intimate acoustic sessions to full orchestral recordings, our versatile spaces can accommodate any project.
                    </p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 space-y-4">
                    <h3 className="text-2xl font-semibold mb-4">Studio Features</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>• SSL Console & Premium Outboard Gear</li>
                        <li>• Multiple Recording Rooms</li>
                        <li>• Vintage Microphone Collection</li>
                        <li>• Professional Monitoring System</li>
                        <li>• Comfortable Artist Lounge</li>
                        <li>• 24/7 Available Support</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
