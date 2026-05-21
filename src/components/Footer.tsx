import { Dumbbell } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="footer-main-v7k2m1p4" className="bg-zinc-950 pt-20 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div data-role="logo" className="flex items-center gap-2 mb-6">
                            <Dumbbell className="w-8 h-8 text-indigo-600" />
                            <span className="font-display uppercase tracking-tight font-thin text-2xl text-white">GYM ANIMALS</span>
                        </div>
                        <p className="text-zinc-500 leading-relaxed">
                            Defining the next generation of high-performance athletic wear. Luxury quality, tactical performance.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-display text-sm uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><button onClick={() => document.getElementById('hero-section-a7k2m9x1')?.scrollIntoView({ behavior: 'smooth' })} className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Home</button></li>
                            <li><button onClick={() => document.getElementById('collection-section-n7r2m1p4')?.scrollIntoView({ behavior: 'smooth' })} className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Shop</button></li>
                            <li><button onClick={() => document.getElementById('personality-selector-section-x9w4b6l2')?.scrollIntoView({ behavior: 'smooth' })} className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Personality</button></li>
                            <li><button onClick={() => document.getElementById('about-section-z3k8v5m9')?.scrollIntoView({ behavior: 'smooth' })} className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Philosophy</button></li>
                            <li><button onClick={() => document.getElementById('contact-section-c8v3m1l5')?.scrollIntoView({ behavior: 'smooth' })} className="text-zinc-500 hover:text-white transition-colors text-sm uppercase tracking-widest">Contact</button></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-display text-sm uppercase tracking-widest mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-display text-sm uppercase tracking-widest mb-6">Join the Tribe</h4>
                        <p className="text-zinc-500 text-sm mb-4">Sign up for early access to limited drops.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-zinc-900 border-none px-4 py-2 text-white text-sm focus:ring-1 focus:ring-indigo-600 rounded-l-lg w-full"
                            />
                            <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors">
                                <span className="text-white text-xs uppercase tracking-widest">Join</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs uppercase tracking-widest text-white">
                        &copy; {new Date().getFullYear()} GYM ANIMALS. All Rights Reserved.
                    </p>
                    <a
                        href="https://sitejourney.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-indigo-900/30 text-white text-[10px] uppercase tracking-widest rounded-full hover:bg-indigo-900/50 transition-colors"
                    >
                        Made with SiteJourney.ai
                    </a>
                </div>
            </div>
        </footer>
    );
}