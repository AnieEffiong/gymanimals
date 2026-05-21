import { motion } from 'framer-motion';

const products = [
    {
        id: 'product-1-v8x2k1l9',
        name: 'Lion\u0027s Roar Compression Leggings',
        category: 'Women / Performance',
        img: 'https://images.unsplash.com/photo-1706029831374-e236f69cbe8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmxhY2slMjBneW0lMjBsZWdnaW5ncyUyMHdpdGglMjBzdWJ0bGUlMjBnbG93LWluLXRoZS1kYXJrJTIwbGlvbiUyMGVtYmxlbXxlbnwwfDB8fHwxNzc5MTQ0NDE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$85',
        description: 'Engineered for raw power, these leggings feature a subtle, glow-in-the-dark 3D lion emblem, symbolizing unrivaled strength and fearless drive.'
    },
    {
        id: 'product-2-k3m1p9x2',
        name: 'Eagle\u0027s Flight Performance Vest',
        category: 'Men / Outerwear',
        img: 'https://images.unsplash.com/photo-1628259749203-0c2e34bcdc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxzbGVlayUyMGJsYWNrJTIwcGVyZm9ybWFuY2UlMjB2ZXN0JTIwd2l0aCUyMHN1YnRsZSUyMGdsb3ctaW4tdGhlLWRhcmslMjBlYWdsZSUyMGVtYmxlbXxlbnwwfDB8fHwxNzc5MTQ0NDE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$120',
        description: 'Designed for focused precision, this performance vest boasts a glow-in-the-dark 3D eagle stamp, reflecting clear vision and unmatched accuracy.'
    },
    {
        id: 'product-3-p8l2m4x1',
        name: 'Elephant\u0027s Resolve Training Tee',
        category: 'Unisex / Base Layer',
        img: 'https://images.unsplash.com/photo-1623491298221-a0d7db8806d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JleSUyMHRyYWluaW5nJTIwdC1zaGlydCUyMHdpdGglMjBzdWJ0bGUlMjBnbG93LWluLXRoZS1kYXJrJTIwZWxlcGhhbnQlMjBlbWJsZW18ZW58MHwwfHx8MTc3OTE0NDQxOHww&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$65',
        description: 'Built for enduring resilience, this training tee features a glow-in-the-dark 3D elephant emblem, symbolizing steadfast determination and unwavering spirit.'
    },
    {
        id: 'product-4-w1e2r3t4',
        name: 'Wolf\u0027s Instinct Performance Shorts',
        category: 'Men / Bottoms',
        img: 'https://images.unsplash.com/photo-1661291458207-b03ab10aadd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4ODY5NjV8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlcmZvcm1hbmNlJTIwc2hvcnRzJTIwd2l0aCUyMHN1YnRsZSUyMGdsb3ctaW4tdGhlLWRhcmslMjB3b2xmJTIwZW1ibGVtfGVufDB8MHx8fDE3NzkxNDQ0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        price: '$70',
        description: 'Driven by instinct, these performance shorts carry a glow-in-the-dark 3D wolf stamp, empowering your relentless pursuit of greatness.'
    }
];

export default function Products() {
    return (
        <section id="collection-section-n7r2m1p4" className="py-24 md:py-32 bg-zinc-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="products-header-z7v2l1p9" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-zinc-900 mb-4">DOPAMINE by GYM ANIMALS</h2>
                        <p className="text-zinc-500 text-lg max-w-xl">Timeless designs, future-proof materials. Our core range is built to be the foundation of your athletic lifestyle.</p>
                    </div>
                    <button className="text-zinc-900 font-sans text-sm tracking-widest uppercase border-b border-zinc-900 pb-1 hover:opacity-60 transition-opacity">
                        View All Items
                    </button>
                </div>

                <div id="products-grid-l4p8v2m9" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            id={product.id}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-4/5 overflow-hidden rounded-2xl mb-6">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-white/90 backdrop-blur text-zinc-900 px-4 py-1 text-xs uppercase tracking-widest font-sans font-medium">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-indigo-600 text-xs font-sans uppercase tracking-widest mb-1">{product.category}</p>
                                    <h3 className="font-display text-xl font-thin uppercase text-zinc-900">{product.name}</h3>
                                    <p id={`${product.id}-desc`} className="text-zinc-600 text-sm mt-2 leading-relaxed">{product.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}