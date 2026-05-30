import SiteJourneyForm from './SiteJourneyForm';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact-section-c8v3m1l5" className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

                    {/* Info Side */}
                    <div id="contact-info-panel-v7k2m1p4" className="lg:w-2/5 bg-zinc-900 p-12 text-white">
                        <h2 className="font-display text-4xl font-thin uppercase mb-8 text-white">Get in <span className="italic text-indigo-400">Touch</span></h2>
                        <p className="text-zinc-400 mb-12">Want to stock our collection or have questions about your order? Our team is ready to assist you.</p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="p-3 bg-zinc-800 rounded-xl">
                                    <Mail className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest">Email Us</p>
                                    <a
                                        href="mailto:pdox202@gmail.com"
                                        className="text-white hover:opacity-70 transition-opacity"
                                    >
                                        pdox202@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="p-3 bg-zinc-800 rounded-xl">
                                    <Phone className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest">WhatsApp</p>
                                    <a
                                        href="https://wa.me/+2349019573482"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:opacity-70 transition-opacity"
                                    >
                                        +234-901-957-3482
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="p-3 bg-zinc-800 rounded-xl">
                                    <MapPin className="w-6 h-6 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 uppercase tracking-widest">HQ Location</p>
                                    <a
                                        href="https://maps.google.com/?q=Lagos,Nigeria"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:opacity-70 transition-opacity"
                                    >
                                        Lagos, Nigeria
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t border-zinc-800">
                            <p className="text-xs text-zinc-500 uppercase tracking-[0.3em] mb-4">Follow the Tribe</p>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/gym.animalss/" target="_blank" rel="noopener noreferrer" id="social-instagram-link-j9x2k4m1" className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center justify-center">
                                    <Instagram className="w-4 h-4 text-white" />
                                </a>
                                <a
                                    href="https://chat.whatsapp.com/HYyFgOsM5mC1qkyq4S77Bh?mode=gi_t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    id="social-whatsapp-group-link-j9x2k4m1"
                                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center justify-center"
                                >
                                    <FaWhatsapp className="w-4 h-4 text-white" />
                                </a>
                                <div className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"></div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div id="contact-form-panel-x3m9k1l5" className="lg:w-3/5 p-12">
                        <SiteJourneyForm>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 rounded-xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-6 py-4 rounded-xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 mb-8">
                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell us how we can help your training..."
                                    className="w-full px-6 py-4 rounded-xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:border-indigo-500 transition-colors"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-sans uppercase tracking-widest shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
                            >
                                Send Message
                            </button>
                        </SiteJourneyForm>
                    </div>

                </div>
            </div>
        </section>
    );
}