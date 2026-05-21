import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { label: 'Collection', id: 'collection-section-n7r2m1p4' },
        { label: 'Personality', id: 'personality-selector-section-x9w4b6l2' },
        { label: 'Our Story', id: 'about-section-z3k8v5m9' },
        { label: 'Reviews', id: 'testimonials-section-q4t7j1w3' }
    ];

    const navbarBg = scrolled
        ? 'bg-black/90 backdrop-blur-md shadow-xl py-4 border-b border-white/10'
        : 'bg-transparent py-6';

    const textColor = 'text-white';

    return (
        <nav
            id="navbar-main-v8x2k1l9"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg} https://images.unsplash.com/photo-1749055486759-e0be46c0087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxuYXZiYXIlMjBiZ3xlbnwwfDB8fHwxNzc5MTQyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div
                    data-role="logo"
                    id="nav-logo-container-k3m1p9x2"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollTo('hero-section-a7k2m9x1')}
                >
                    <Dumbbell className={`w-8 h-8 ${textColor}`} />

                    <span
                        id="nav-logo-text-p8l2m4x1"
                        className={`font-display uppercase tracking-tight font-thin text-2xl ${textColor} drop-shadow-sm`}
                    >
                        GYM ANIMALS
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            id={`nav-link-${link.label.toLowerCase()}-v9k2p1l4`}
                            onClick={() => scrollTo(link.id)}
                            className={`font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity ${textColor} drop-shadow-sm`}
                        >
                            {link.label}
                        </button>
                    ))}

                    <button
                        id="nav-cta-btn-q9x2m4p1"
                        onClick={() => scrollTo('collection-section-n7r2m1p4')}
                        className={`px-8 py-2 rounded-full font-sans text-sm tracking-widest uppercase transition-all shadow-md ${
                            scrolled
                                ? 'bg-white text-black hover:bg-zinc-200'
                                : 'bg-white text-black hover:bg-zinc-100'
                        }`}
                    >
                        SHOP NOW
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle-v7k2m4l1"
                    className={`lg:hidden https://images.unsplash.com/photo-1597306957805-4cca0752eb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHx0ZXh0JTIwY29sb3J8ZW58MHwwfHx8MTc3ODk2NzgwMHww&ixlib=rb-4.1.0&q=80&w=1080 drop-shadow-sm`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className={textColor} /> : <Menu className={textColor} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    id="mobile-menu-overlay-x3m1p9v2"
                    className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            id={`mobile-nav-link-${link.label.toLowerCase()}-m3p1v9x2`}
                            onClick={() => scrollTo(link.id)}
                            className="font-display uppercase text-3xl font-thin text-zinc-900 drop-shadow-sm"
                        >
                            {link.label}
                        </button>
                    ))}

                    <button
                        id="mobile-nav-cta-z7v2l1p9"
                        onClick={() => scrollTo('collection-section-n7r2m1p4')}
                        className="mt-4 px-12 py-4 bg-indigo-600 rounded-full font-sans tracking-widest uppercase text-white"
                    >
                        SHOP NOW
                    </button>
                </div>
            )}
        </nav>
    );
}