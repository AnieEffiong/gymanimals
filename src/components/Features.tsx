import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Wind, Layers } from 'lucide-react';

const features = [
    {
        id: 'feature-1-v8x2k1l9',
        icon: <Zap className="w-8 h-8 text-indigo-500" />,
        title: 'Atomic Compression',
        description: 'Proprietary fabric blend that enhances blood flow and muscle recovery without restricting movement.'
    },
    {
        id: 'feature-2-k3m1p9x2',
        icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
        title: 'Lifetime Durability',
        description: 'Quad-stitched seams and abrasion-resistant technology tested in the most extreme training environments.'
    },
    {
        id: 'feature-3-p8l2m4x1',
        icon: <Wind className="w-8 h-8 text-indigo-500" />,
        title: 'Aero-Cool Mesh',
        description: 'Precision-engineered ventilation zones that map your body temperature to provide cooling where it matters most.'
    },
    {
        id: 'feature-4-v9k2p1l4',
        icon: <Layers className="w-8 h-8 text-indigo-500" />,
        title: 'Feather-Weight Fit',
        description: 'So light you will forget it is there. Our ultra-thin fibers provide total opacity with zero bulk.'
    }
];

export default function Features() {
    return (
        <section id="features-section-x9w4b6l2" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="features-header-z7v2l1p9" className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-zinc-900 mb-6">Engineering Excellence</h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg">We don't just make gym wear. We engineer high-performance tools for athletes who demand the absolute best.</p>
                </div>

                <div id="features-grid-l4p8v2m9" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            id={feature.id}
                            className="flex flex-col items-start"
                        >
                            <div className="p-4 rounded-2xl bg-zinc-50 mb-6">
                                {feature.icon}
                            </div>
                            <h3 id={`${feature.id}-title`} className="font-display text-xl font-thin uppercase text-zinc-900 mb-3">{feature.title}</h3>
                            <p id={`${feature.id}-desc`} className="text-zinc-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}