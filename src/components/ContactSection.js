import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
    return (
        <div id="contact" className="max-w-7xl mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="w-6 h-6 text-purple-400" />
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p className="text-gray-300">info@harmonystudios.com</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhone className="w-6 h-6 text-purple-400" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-gray-300">(555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />
                        <div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-gray-300">123 Music Avenue, Los Angeles, CA 90028</p>
                        </div>
                    </div>
                </div>
                <form className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-400 focus:outline-none transition-colors"
                        />
                    </div>
                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;
