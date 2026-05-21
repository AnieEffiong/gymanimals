import { motion } from 'framer-motion';
import { Crown, Feather, Shield, Cat } from 'lucide-react';
import React, { useState } from 'react';

interface Personality {
    id: string;
    icon: React.ReactNode;
    name: string;
    trait: string;
    shortDescription: string;
    story: string;
    img: string;
}

const animalPersonalities: Personality[] = [
    {
        id: 'personality-lion-v8x2k1l9',
        icon: <Crown className="w-8 h-8 text-indigo-500" />,
        name: 'The Lion',
        trait: 'Unrivaled Strength',
        shortDescription: 'Embody raw power and fearless drive.',
        story: 'You embody the raw, untamed power of the lion. Your roar commands respect, and your presence dominates. Choose gear that reflects your fearless drive and unwavering strength. Conquer every challenge with the heart of a king.',
        img: 'https://images.unsplash.com/photo-1671038003907-dcb7673fd8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxkcmFtYXRpYyUyMGxpb24lMjBwb3J0cmFpdCUyQyUyMHBvd2VyZnVsJTJDJTIwcmVnYWwlMkMlMjBkYXJrJTIwbHV4dXJ5JTIwZ3ltJTIwYWVzdGhldGljfGVufDB8MHx8fDE3NzkxNjQ2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'personality-wolf-v9k2p1l4',
        icon: <Shield className="w-8 h-8 text-indigo-500" />,
        name: 'The Wolf',
        trait: 'Instinctive Drive',
        shortDescription: 'Driven by instinct and unyielding loyalty to goals.',
        story: 'The wolf within you thrives on instinct and an unyielding pack mentality. You are driven by a primal urge to achieve, pushing boundaries with fierce loyalty to your goals. Embrace gear that enhances your natural instincts and empowers your relentless pursuit of greatness.',
        img: 'https://images.unsplash.com/photo-1684003941243-a5a233f47cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxmaWVyY2UlMjB3b2xmJTIwcG9ydHJhaXQlMkMlMjBpbnN0aW5jdGl2ZSUyQyUyMGRldGVybWluZWQlMkMlMjBkYXJrJTIwbHV4dXJ5JTIwZ3ltJTIwYWVzdGhldGljfGVufDB8MHx8fDE3NzkxNjQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'personality-eagle-k3m1p9x2',
        icon: <Feather className="w-8 h-8 text-indigo-500" />,
        name: 'The Eagle',
        trait: 'Focused Precision',
        shortDescription: 'Possess clear vision and precise focus.',
        story: 'Like the eagle, you possess unparalleled vision and precision. You soar above obstacles, seeing your goals with clarity and striking with unmatched accuracy. Select apparel that supports your agility and sharp focus, allowing you to reach new heights.',
        img: 'https://images.unsplash.com/photo-1528753053312-73f5af145136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxtYWplc3RpYyUyMGVhZ2xlJTIwc29hcmluZyUyQyUyMGZvY3VzZWQlMkMlMjBwcmVjaXNlJTJDJTIwZGFyayUyMGx1eHVyeSUyMGd5bSUyMGFlc3RoZXRpY3xlbnwwfDB8fHwxNzc5MTY0Njc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
        id: 'personality-panther-p8l2m4x1',
        icon: <Cat className="w-8 h-8 text-indigo-500" />,
        name: 'The Panther',
        trait: 'Silent Agility',
        shortDescription: 'Embrace stealth, speed, and fluid power.',
        story: 'You move with the silent grace and explosive power of the panther. Your agility is unmatched, your focus absolute, and your presence commands attention. Choose gear that enhances your natural fluidity and supports your swift, decisive actions. Unleash your inner predator.',
        img: 'https://images.unsplash.com/photo-1620016827489-85e28147578b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxzbGVlayUyMHBhbnRoZXIlMjBpbiUyMG1vdGlvbiUyQyUyMGFnaWxlJTJDJTIwcG93ZXJmdWwlMkMlMjBkYXJrJTIwbHV4dXJ5JTIwZ3ltJTIwYWVzdGhldGljfGVufDB8MHx8fDE3NzkxNjQ2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
];

export default function PersonalitySelector() {
    const [selectedPersonalityId, setSelectedPersonalityId] = useState<string | null>(null);

    const selectedPersonality = animalPersonalities.find(p => p.id === selectedPersonalityId);

    return (
        <section id="personality-selector-section-x9w4b6l2" className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow delay-500"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div id="personality-selector-header-z7v2l1p9" className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-white mb-6">Discover Your Inner Beast</h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto text-lg">Select the animal spirit that resonates with your drive and unlock gear designed for your unique journey.</p>
                </div>

                <div id="personalities-grid-l4p8v2m9" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {animalPersonalities.map((personality, index) => (
                        <motion.div
                            key={personality.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            id={personality.id}
                            className={`group relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent
                ${selectedPersonalityId === personality.id ? 'bg-zinc-800 ring-2 ring-indigo-600 shadow-lg' : 'bg-zinc-900 hover:border-indigo-600/50'}`}
                            onClick={() => setSelectedPersonalityId(personality.id)}
                            whileHover={{
                                scale: 1.03,
                                y: -5,
                                boxShadow: "0 0 30px rgba(99, 102, 241, 0.4), 0 0 15px rgba(99, 102, 241, 0.2)",
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Subtle background gradient on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%)' }}></div>

                            <motion.div
                                className="p-4 rounded-full bg-zinc-800 shadow-md mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 relative z-10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {personality.icon}
                            </motion.div>
                            <h3 id={`${personality.id}-name`} className="font-display text-xl font-thin uppercase text-white mb-2">{personality.name}</h3>
                            <p id={`${personality.id}-trait`} className="text-indigo-400 text-sm font-sans uppercase tracking-widest mb-3">{personality.trait}</p>
                            <p id={`${personality.id}-short-desc`} className="text-zinc-400 text-sm leading-relaxed">
                                {personality.shortDescription}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {selectedPersonality && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        id="selected-personality-story-m1p9x2v7"
                        className="mt-20 p-10 bg-zinc-950 text-white rounded-3xl shadow-xl text-center max-w-3xl mx-auto flex flex-col items-center border border-indigo-600/50"
                    >
                        <motion.img
                            key={selectedPersonality.img} // Key change forces re-animation on image change
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            src={selectedPersonality.img}
                            alt={selectedPersonality.name}
                            className="w-32 h-32 object-cover rounded-full mb-8 border-4 border-indigo-600 shadow-lg"
                        />
                        <h3 className="font-display text-3xl md:text-4xl font-thin uppercase mb-4 text-white">
                            You are <span className="italic bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">{selectedPersonality.name.replace('The ', '')}</span>
                        </h3>
                        <p className="text-lg leading-relaxed text-zinc-400 mb-8">{selectedPersonality.story}</p>
                        <button
                            id="explore-gear-cta-k2l9m4v1"
                            onClick={() => document.getElementById('collection-section-n7r2m1p4')?.scrollIntoView({ behavior: 'smooth' })}
                            className="mt-4 inline-flex items-center justify-center px-8 py-3 rounded-full font-sans text-sm tracking-widest uppercase bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 hover:-translate-y-1"
                        >
                            Explore Your Gear
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}