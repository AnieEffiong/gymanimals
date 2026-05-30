import { motion } from 'framer-motion';

export default function About() {
    return (
        <section
            id="about-section-z3k8v5m9"
            className="relative py-24 md:py-32 bg-zinc-900 overflow-hidden"
        >
            <div className="w-full px-6 md:px-12 lg:px-16">

                <motion.div
                    id="about-text-content-x3m9k1l5"
                    className="w-full"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-white mb-8">
                        Forge Your{" "}
                        <span className="italic bg-linear-to-r from-indigo-400 to-indigo-200 bg-clip-text text-transparent">
                            Legacy
                        </span>
                    </h2>

                    <div className="text-zinc-400 text-lg leading-relaxed">
                        <p className="text-white mb-6">
                            GYM ANIMALS was born from a vision to transcend the ordinary. We saw fitness not just as a routine, but as a profound journey of self-discovery, a path to unleash the primal power within. Our brand is where the raw intensity of athleticism meets the refined elegance of luxury.
                        </p>

                        <p className="text-white mb-6">
                            Every garment is a testament to this philosophy, meticulously crafted and rigorously tested. We blend cutting-edge materials with ergonomic design, ensuring each piece acts as an extension of your will, empowering you to push beyond perceived limits and redefine what's possible.
                        </p>

                        <p className="text-white italic font-display">
                            This is more than apparel; it's an invitation to connect with your deepest instincts, to embrace the strength, agility, and resilience of the animal spirit. It's about transforming not just your body, but your entire being, forging a legacy that echoes with every powerful stride.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}