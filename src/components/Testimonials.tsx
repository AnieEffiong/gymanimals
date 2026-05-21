import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 'testimonial-1-v9k2p1l4',
        name: 'Marcus Thorne',
        role: 'Competitive Bodybuilder',
        content: 'The durability is unmatched. I have put these through hundreds of heavy squat sessions and they still look and feel like day one. Best investment I have made for my training.',
        rating: 5
    },
    {
        id: 'testimonial-2-z3m1p9x2',
        name: 'Elena Rodriguez',
        role: 'Yoga Instructor',
        content: 'Finally, leggings that are actually squat-proof and stay in place. The fabric feels like a second skin. Elegant enough for brunch, tough enough for the studio.',
        rating: 5
    },
    {
        id: 'testimonial-3-q8l2v4x1',
        name: 'David Chen',
        role: 'Ultra Runner',
        content: 'The compression technology in the socks and base layers changed my recovery game. GYM ANIMALS is the only brand I trust for my long-distance prep.',
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials-section-q4t7j1w3" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="testimonials-header-l4p8v2m9" className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-zinc-900">Trusted by Elites</h2>
                </div>

                <div id="testimonials-grid-v9x2k4l1" className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t) => (
                        <div key={t.id} id={t.id} className="p-8 rounded-2xl bg-zinc-50 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-indigo-500 text-indigo-500" />
                                ))}
                            </div>
                            <p className="text-zinc-700 italic mb-8 grow leading-relaxed">"{t.content}"</p>
                            <div>
                                <h4 className="font-display text-lg uppercase font-thin text-zinc-900">{t.name}</h4>
                                <p className="text-indigo-600 text-sm font-sans uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}