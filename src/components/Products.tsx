import { motion } from "framer-motion";

export default function Products() {
    return (
        <section
            id="collection-section-n7r2m1p4"
            className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-8xl uppercase text-white font-thin"
                >
                    Coming Soon
                </motion.h2>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="h-0.5 bg-indigo-500 mx-auto my-8"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    The tribe is preparing something powerful.
                    Premium Gym Animals apparel will be released soon.
                </motion.p>

                <motion.div
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="mt-10 uppercase tracking-[0.4em] text-indigo-400 text-sm"
                >
                    Stay Ready
                </motion.div>
            </div>
        </section>
    );
}