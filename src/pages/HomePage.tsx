import Hero from '../components/Hero';
import PersonalitySelector from '../components/PersonalitySelector';
import Products from '../components/Products';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function HomePage() {
    return (
        <main id="home-page-container-v2k4m1p9">
            <Hero />
            <div className="bg-zinc-950 py-12 border-y border-white/5 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-12 text-zinc-700 font-display uppercase tracking-[0.5em] text-sm">
                            Unleash the Beast • Performance First • Luxury Fit • No Excuses •
                        </span>
                    ))}
                </div>
            </div>
            <PersonalitySelector />
            <Products />
            <About />
            <Testimonials />
            <Contact />
        </main>
    );
}