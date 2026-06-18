import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Feather, Shield, Cat } from "lucide-react";

interface AnimalResult {
    key: "lion" | "wolf" | "eagle" | "panther";
    name: string;
    icon: React.ReactNode;
    image: string;
    description: string;
    strengths: string[];
    trainingStyle: string;
    leadershipStyle: string;
    inspiration: string;
}

interface QuestionOption {
    label: string;
    animal: "lion" | "wolf" | "eagle" | "panther";
}

interface Question {
    id: number;
    title: string;
    options: QuestionOption[];
}

const animals: Record<
    "lion" | "wolf" | "eagle" | "panther",
    AnimalResult
> = {
    lion: {
        key: "lion",
        name: "Lion",
        icon: <Crown className="w-8 h-8 text-indigo-400" />,
        image:
            "https://images.unsplash.com/photo-1671038003907-dcb7673fd8d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        description:
            "You thrive through leadership, courage, and an unshakable belief that impossible goals exist to be conquered.",
        strengths: [
            "Confidence",
            "Power",
            "Leadership",
            "Bold Decisions",
        ],
        trainingStyle:
            "Heavy compound movements, explosive strength, and competitive environments.",
        leadershipStyle:
            "You naturally inspire others by acting first rather than speaking first.",
        inspiration:
            "Kings are not crowned by comfort. They earn their throne through relentless discipline.",
    },

    wolf: {
        key: "wolf",
        name: "Wolf",
        icon: <Shield className="w-8 h-8 text-indigo-400" />,
        image:
            "https://images.unsplash.com/photo-1684003941243-a5a233f47cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        description:
            "You trust instinct, strategy, and consistency. Quiet determination fuels your success.",
        strengths: [
            "Loyalty",
            "Discipline",
            "Strategy",
            "Persistence",
        ],
        trainingStyle:
            "Progressive overload, endurance work, and structured routines.",
        leadershipStyle:
            "You lead by protecting and elevating everyone around you.",
        inspiration:
            "The strongest wolves aren't the loudest. They're the ones who never stop moving.",
    },

    eagle: {
        key: "eagle",
        name: "Eagle",
        icon: <Feather className="w-8 h-8 text-indigo-400" />,
        image:
            "https://images.unsplash.com/photo-1528753053312-73f5af145136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        description:
            "You succeed because you see opportunities long before everyone else notices them.",
        strengths: [
            "Vision",
            "Precision",
            "Focus",
            "Wisdom",
        ],
        trainingStyle:
            "Athletic performance, mobility, efficiency, and technical mastery.",
        leadershipStyle:
            "You guide through clarity and foresight.",
        inspiration:
            "Rise high enough and every obstacle becomes part of the landscape below.",
    },

    panther: {
        key: "panther",
        name: "Panther",
        icon: <Cat className="w-8 h-8 text-indigo-400" />,
        image:
            "https://images.unsplash.com/photo-1620016827489-85e28147578b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        description:
            "Calm, elegant, and deadly efficient. You move with purpose and strike with precision.",
        strengths: [
            "Agility",
            "Grace",
            "Patience",
            "Control",
        ],
        trainingStyle:
            "Mobility, functional strength, speed, and explosive movement.",
        leadershipStyle:
            "You influence quietly through mastery instead of attention.",
        inspiration:
            "Silence can be more powerful than noise when confidence speaks for itself.",
    },
};

const questions: Question[] = [
    {
        id: 1,
        title: "What drives you to take action every day?",
        options: [
            {
                label: "Leadership",
                animal: "lion",
            },
            {
                label: "Instinct",
                animal: "wolf",
            },
            {
                label: "Vision",
                animal: "eagle",
            },
            {
                label: "Grace",
                animal: "panther",
            },
        ],
    },

    {
        id: 2,
        title: "How do you overcome obstacles?",
        options: [
            {
                label: "Fearlessly",
                animal: "lion",
            },
            {
                label: "Strategically",
                animal: "wolf",
            },
            {
                label: "Soaring above",
                animal: "eagle",
            },
            {
                label: "Quietly",
                animal: "panther",
            },
        ],
    },

    {
        id: 3,
        title: "What kind of impact do you want to have on others?",
        options: [
            {
                label: "Bold inspiration",
                animal: "lion",
            },
            {
                label: "Loyal protector",
                animal: "wolf",
            },
            {
                label: "Wise guide",
                animal: "eagle",
            },
            {
                label: "Mysterious elegance",
                animal: "panther",
            },
        ],
    },
];

const tieBreaker: Question = {
    id: 4,
    title:
        "When the pressure is highest, what becomes your greatest strength?",
    options: [
        {
            label: "Taking command",
            animal: "lion",
        },
        {
            label: "Standing with your people",
            animal: "wolf",
        },
        {
            label: "Seeing what others miss",
            animal: "eagle",
        },
        {
            label: "Remaining calm and striking precisely",
            animal: "panther",
        },
    ],
};

export default function PersonalitySelector() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [answers, setAnswers] = useState<
        ("lion" | "wolf" | "eagle" | "panther")[]
    >([]);

    const [result, setResult] =
        useState<AnimalResult | null>(null);

    const [showTieBreaker, setShowTieBreaker] =
        useState(false);

    const [showConfirm, setShowConfirm] =
        useState(false);

    const [tiedAnimals, setTiedAnimals] = useState<
        ("lion" | "wolf" | "eagle" | "panther")[]
    >([]);

    useEffect(() => {
        const saved = localStorage.getItem(
            "gymanimals-personality"
        );

        if (saved && animals[saved as keyof typeof animals]) {
            setResult(animals[saved as keyof typeof animals]);
        }
    }, []);

    const calculateWinner = (
        picks: ("lion" | "wolf" | "eagle" | "panther")[]
    ) => {
        const scores = {
            lion: 0,
            wolf: 0,
            eagle: 0,
            panther: 0,
        };

        picks.forEach((pick) => {
            scores[pick]++;
        });

        const highest = Math.max(...Object.values(scores));

        const winners = Object.entries(scores)
            .filter(([, value]) => value === highest)
            .map(([key]) => key);

        return {
            scores,
            winners,
        };
    };

    const handleAnswer = (
        animal: "lion" | "wolf" | "eagle" | "panther"
    ) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = animal;

        setAnswers(updatedAnswers);

        if (currentQuestion < 2) {
            setTimeout(() => {
                setCurrentQuestion((prev) => prev + 1);
            }, 250);
            return;
        }

        const { winners } = calculateWinner(updatedAnswers);

        if (winners.length === 1) {
            const winner =
                animals[winners[0] as keyof typeof animals];

            localStorage.setItem(
                "gymanimals-personality",
                winner.key
            );

            setTimeout(() => {
                setResult(winner);
            }, 300);
        } else {
            setTiedAnimals(
                winners as ("lion" | "wolf" | "eagle" | "panther")[]
            );

            setTimeout(() => {
                setShowTieBreaker(true);
            }, 300);
        }
    };

    const progress = showTieBreaker
        ? 100
        : ((currentQuestion + 1) / 3) * 100;

    return (
        <section
            id="personality-selector-section-x9w4b6l2"
            className="relative py-24 bg-zinc-900 overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl"></div>

                <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {!result && (

                    <>

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="text-center mb-16"
                        >
                            <h2 className="font-display text-5xl font-thin uppercase text-white mb-6">

                                Discover Your Inner Beast

                            </h2>

                            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">

                                Answer a few reflective questions to uncover the
                                animal that defines your mindset and unlock gear
                                built for your journey.

                            </p>

                        </motion.div>

                        <div className="mb-10">

                            <div className="flex justify-between mb-3 text-sm uppercase tracking-widest text-zinc-400">

                                <span>

                                    {showTieBreaker
                                        ? "Tie Breaker"
                                        : `Question ${currentQuestion + 1} of 3`}

                                </span>

                                <span>

                                    {Math.round(progress)}%

                                </span>

                            </div>

                            <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">

                                <motion.div
                                    initial={{
                                        width: 0,
                                    }}
                                    animate={{
                                        width: `${progress}%`,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="h-full bg-indigo-500"
                                />

                            </div>

                        </div>

                        <AnimatePresence mode="wait">

                            {!showTieBreaker && (

                                <motion.div
                                    key={currentQuestion}
                                    initial={{
                                        opacity: 0,
                                        x: 80,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -80,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                    }}
                                    className="bg-zinc-950 rounded-3xl p-10 border border-zinc-800 shadow-2xl"
                                >

                                    <h3 className="text-3xl text-white font-light mb-10 text-center">

                                        {questions[currentQuestion].title}

                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        {questions[currentQuestion].options.map(
                                            (option) => (

                                                <motion.button
                                                    key={option.label}
                                                    whileHover={{
                                                        scale: 1.02,
                                                        y: -4,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.98,
                                                    }}
                                                    onClick={() =>
                                                        handleAnswer(option.animal)
                                                    }
                                                    className="rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all p-8 text-left"
                                                >

                                                    <div className="text-white text-xl mb-2">

                                                        {option.label}

                                                    </div>

                                                    <div className="text-zinc-500 text-sm uppercase tracking-widest">

                                                        Choose this path

                                                    </div>

                                                </motion.button>

                                            )
                                        )}

                                    </div>

                                    <div className="mt-10 flex justify-between">

                                        <button
                                            disabled={currentQuestion === 0}
                                            onClick={() =>
                                                setCurrentQuestion(
                                                    currentQuestion - 1
                                                )
                                            }
                                            className={`px-6 py-3 rounded-full uppercase tracking-widest transition ${currentQuestion === 0
                                                ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                                                : "bg-white text-black hover:bg-zinc-200"
                                                }`}
                                        >

                                            Back

                                        </button>

                                    </div>

                                </motion.div>

                            )}

                            {showTieBreaker && (
                                <motion.div
                                    key="tiebreaker"
                                    initial={{
                                        opacity: 0,
                                        x: 80,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -80,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                    }}
                                    className="bg-zinc-950 rounded-3xl p-10 border border-zinc-800 shadow-2xl"
                                >
                                    <h3 className="text-3xl text-white font-light mb-4 text-center">
                                        Tie Breaker
                                    </h3>

                                    <p className="text-zinc-400 text-center mb-10">
                                        Two instincts within you are equally strong. Which one feels most natural when everything is on the line?
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {tiedAnimals.map((animal) => (
                                            <motion.button
                                                key={animal}
                                                whileHover={{ scale: 1.02, y: -4 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    localStorage.setItem("gymanimals-personality", animal);
                                                    setTimeout(() => {
                                                        setResult(animals[animal]);
                                                    }, 300);
                                                }}
                                                className="rounded-2xl border border-zinc-700 bg-zinc-900 hover:border-indigo-500 hover:bg-indigo-500/10 transition-all p-8 text-center"
                                            >
                                                <div className="flex justify-center mb-6">
                                                    {animals[animal].icon}
                                                </div>

                                                <h3 className="text-2xl text-white uppercase font-display mb-3">
                                                    {animals[animal].name}
                                                </h3>

                                                <p className="text-zinc-400">
                                                    {animals[animal].description}
                                                </p>
                                            </motion.button>
                                        ))}
                                    </div>

                                    <div className="mt-10 flex justify-start">
                                        <button
                                            onClick={() => {
                                                setShowTieBreaker(false);
                                                setCurrentQuestion(2);
                                            }}
                                            className="px-6 py-3 rounded-full bg-white text-black hover:bg-zinc-200 uppercase tracking-widest transition"
                                        >
                                            Back
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}

                {result && (
                    <AnimatePresence>
                        <motion.div
                            key={result.key}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="max-w-4xl mx-auto bg-zinc-950 rounded-3xl border border-indigo-600/20 overflow-hidden shadow-2xl"
                        >
                            <motion.div
                                initial={{
                                    scale: 0.85,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.25,
                                    duration: 0.6,
                                }}
                                className="flex justify-center pt-12"
                            >
                                <img
                                    src={result.image}
                                    alt={result.name}
                                    className="w-44 h-44 rounded-full object-cover border-4 border-indigo-500 shadow-xl"
                                />
                            </motion.div>

                            <div className="px-10 py-12 text-center">
                                <p className="uppercase tracking-[0.4em] text-indigo-400 text-sm mb-4">
                                    Your Result
                                </p>

                                <h2 className="font-display text-5xl font-thin uppercase text-white mb-8">
                                    You are a{" "}
                                    <span className="italic text-indigo-400">
                                        {result.name}
                                    </span>
                                </h2>

                                <p className="text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto">
                                    {result.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                                    <div className="bg-zinc-900 rounded-2xl p-8">
                                        <h3 className="text-white text-xl mb-6 uppercase tracking-widest">
                                            Key Strengths
                                        </h3>

                                        <ul className="space-y-3">
                                            {result.strengths.map((strength) => (
                                                <li
                                                    key={strength}
                                                    className="text-zinc-400 flex items-center gap-3"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>

                                                    {strength}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-zinc-900 rounded-2xl p-8">
                                        <h3 className="text-white text-xl mb-6 uppercase tracking-widest">
                                            Training Style
                                        </h3>

                                        <p className="text-zinc-400 leading-relaxed">
                                            {result.trainingStyle}
                                        </p>

                                        <h3 className="text-white text-xl mt-8 mb-4 uppercase tracking-widest">
                                            Leadership Style
                                        </h3>

                                        <p className="text-zinc-400 leading-relaxed">
                                            {result.leadershipStyle}
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.6,
                                    }}
                                    className="mt-12 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8"
                                >
                                    <p className="italic text-zinc-300 text-lg leading-relaxed">
                                        "{result.inspiration}"
                                    </p>
                                </motion.div>

                                <div className="mt-14 bg-zinc-900 rounded-3xl p-10 border border-zinc-800">

                                    <h3 className="text-3xl font-display font-thin uppercase text-white mb-4">
                                        Recommended For You
                                    </h3>

                                    <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-8">
                                        Your personality reflects the way you train and the way you
                                        live. We've curated gear that complements your natural
                                        strengths so every workout feels like an extension of who
                                        you are.
                                    </p>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.03,
                                        }}
                                        whileTap={{
                                            scale: 0.97,
                                        }}
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "collection-section-n7r2m1p4"
                                                )
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                })
                                        }
                                        className="px-12 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all uppercase tracking-[0.3em] text-white shadow-xl shadow-indigo-500/20"
                                    >
                                        {`Shop Like a ${result.name}`}
                                    </motion.button>

                                </div>

                                <div className="mt-12">

                                    <button
                                        onClick={() => setShowConfirm(true)}
                                        className="text-zinc-400 hover:text-white transition uppercase tracking-[0.3em] text-sm"
                                    >
                                        Retake Quiz
                                    </button>

                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}

                <AnimatePresence>

                    {showConfirm && (

                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
                        >

                            <motion.div
                                initial={{
                                    scale: 0.9,
                                    opacity: 0,
                                }}
                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}
                                exit={{
                                    scale: 0.9,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.25,
                                }}
                                className="bg-zinc-950 border border-zinc-800 rounded-3xl max-w-lg w-full p-10 text-center shadow-2xl"
                            >

                                <h3 className="text-white text-3xl font-display font-thin uppercase mb-6">
                                    Retake Quiz?
                                </h3>

                                <p className="text-zinc-400 leading-relaxed mb-10">
                                    Are you sure you want to retake the quiz?
                                    <br />
                                    Your current animal result will be permanently cleared.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                                    <button
                                        onClick={() => setShowConfirm(false)}
                                        className="px-8 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white uppercase tracking-widest transition"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={() => {
                                            localStorage.removeItem(
                                                "gymanimals-personality"
                                            );

                                            setAnswers([]);

                                            setCurrentQuestion(0);

                                            setShowTieBreaker(false);

                                            setResult(null);

                                            setShowConfirm(false);
                                        }}
                                        className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white uppercase tracking-widest transition"
                                    >
                                        Retake Quiz
                                    </button>

                                </div>

                            </motion.div>

                        </motion.div>

                    )}

                </AnimatePresence>

            </div>

        </section>

    );

}