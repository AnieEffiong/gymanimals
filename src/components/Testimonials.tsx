import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 'testimonial-1-v9k2p1l4',
        name: 'Zammy',
        content: 'Gym Animals has been a total gamechanger for me. Joining this community, I finally understood that my mental health journey is not just about fighting alone, it is about finding strength with others. Every workout, every session, I feel more powerful, and I know I can overcome anything.',
        rating: 5
    },
    {
        id: 'testimonial-2-z3m1p9x2',
        name: 'Ipaye',
        content: 'What I love about Gym Animals is how it merges physical strength with mental resilience. The belief that we can push past depression gave me a fresh perspective. I do not just lift weights, I lift my spirit, surrounded by a team that truly cares.',
        rating: 5
    },
    {
        id: 'testimonial-3-q8l2v4x1',
        name: 'Edimoya',
        content: 'Gym Animals is not just a gym group, it is a family. Here, I have learnt that the narrative of depression does not define me. I have grown stronger inside and out, and everyday I step in, I feel unstoppable.'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials-section-q4t7j1w3" className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="testimonials-header-l4p8v2m9" className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-thin uppercase text-zinc-900">Reviews</h2>
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
                                {/* <p className="text-indigo-600 text-sm font-sans uppercase tracking-widest">{t.role}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}