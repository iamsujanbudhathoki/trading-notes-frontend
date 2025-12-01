import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Flame, Target, Zap } from "lucide-react";

const patterns = [
    {
        title: "Candlestick Patterns",
        description: "Master the foundational price action patterns: Hammer, Engulfing, Pin Bar, and more.",
        icon: BarChart3,
        href: "/learn/candlestick-patterns",
        image: "https://www.wikihow.com/images/5/55/Candlestick-Patterns-Cheat-Sheet-Summary.jpg"
    },
    {
        title: "Doji Patterns",
        description: "Understand market indecision and reversal signals through Doji variations.",
        icon: Target,
        href: "/learn/doji-patterns",
        image: "/dojii.jpeg"
    },
    {
        title: "Reversal Patterns",
        description: "Identify trend exhaustion with Morning Star, Evening Star, and Three Soldiers.",
        icon: Zap,
        href: "/learn/reversal-patterns",
        image: "/reversal.jpg"
    },
    {
        title: "Continuation Patterns",
        description: "Spot trend continuation with Rising Three Methods and Falling Three Methods.",
        icon: Flame,
        href: "/learn/continuation-patterns",
        image: "/Types-of-Continuation-Pattern.svg"
    }
];

export function CandlestickPatternsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Candlestick Patterns
                    </h2>
                    <p className="text-slate-500 text-lg">
                        The language of price action - read the market like a pro.
                    </p>
                </div>
                <Link href="/learn/candlesticks" className="text-[#B85C38] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View All Patterns <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {patterns.map((pattern) => (
                    <Link
                        key={pattern.title}
                        href={pattern.href}
                        className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={pattern.image}
                                alt={pattern.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Icon Overlay */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#B85C38]">
                                <pattern.icon className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="font-sans font-bold text-lg text-slate-900 mb-2 group-hover:text-[#B85C38] transition-colors">
                                {pattern.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                {pattern.description}
                            </p>
                            <div className="flex items-center text-[#B85C38] text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
