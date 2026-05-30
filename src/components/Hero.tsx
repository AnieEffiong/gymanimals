import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="hero-section-a7k2m9x1"
            className="relative min-h-[max(100svh,720px)] flex items-center justify-center overflow-hidden bg-zinc-950"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1670349191471-98a4aa998f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGhpZ2gtY29udHJhc3QlMjBneW0lMjBhdGhsZXRlJTIwdHJhaW5pbmclMjBvdmVyaGVhZCUyMGxpZ2h0fGVufDB8MHx8fDE3Nzc3NzQxNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Scrim */}
            <div id="hero-scrim-v9k2p1l4" className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    id="hero-content-container-l4p8v2m9"
                >
                    <h1
                        id="hero-headline-q3k9m4v1"
                        className="font-display text-white text-5xl md:text-8xl font-thin tracking-tight uppercase leading-none"
                    >
                        Unleash the
                        <span
                            id="hero-accent-span-m7x2v1k9"
                            className="inline-block pr-[0.15em] italic bg-linear-to-r from-indigo-400 via-white to-indigo-400 bg-clip-text text-transparent"
                        >
                            Inner Beast
                        </span>
                    </h1>

                    <p
                        id="hero-subheadline-v3m9k1p4"
                        className="mt-8 text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto font-sans tracking-wide leading-relaxed"
                    >
                        Empowering the Fitness Community through high-performance merchandise, engaging challenges, and impactful initiatives. Unleash your inner beast and join the movement.
                    </p>

                    <div id="hero-cta-group-x8m2p4v1" className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            id="hero-primary-cta-k2l9m4v1"
                            onClick={() => document.getElementById('collection-section-n7r2m1p4')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative bg-white text-zinc-900 px-10 py-4 rounded-full font-sans text-sm tracking-widest uppercase overflow-hidden transition-all hover:pr-14"
                        >
                            <span className="relative z-10">Explore Collection</span>
                            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
                        </button>
                        <button
                            id="hero-secondary-cta-p3m1v9x4"
                            onClick={() => document.getElementById('about-section-z3k8v5m9')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 rounded-full font-sans text-sm tracking-widest uppercase border border-white/30 text-white hover:bg-white/10 transition-all"
                        >
                            Our Philosophy
                        </button>
                    </div>
                </motion.div>
            </div>

            <div
                id="hero-scroll-indicator-m9v4x2l1"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white">Scroll</span>
                <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
            </div>
        </section>
    );
}