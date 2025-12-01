import Link from "next/link";
import Image from "next/image";
import { TrendingUp, BookOpen, Target, Zap, BarChart3, Brain } from "lucide-react";

const strategies = [
    {
        category: "ICT Strategies",
        description: "Institutional trading setups and methodologies",
        strategies: [
            { title: "Liquidity Grab & Reversal", difficulty: "Intermediate", href: "/strategies/liquidity-grab-reversal" },
            { title: "Order Block Retest Strategy", difficulty: "Beginner", href: "/strategies/order-block-retest" },
            { title: "FVG Fill & Rejection", difficulty: "Intermediate", href: "/strategies/fvg-fill-rejection" },
            { title: "Kill Zone Trading", difficulty: "Advanced", href: "/strategies/kill-zone-trading" },
            { title: "Market Structure Shift Entry", difficulty: "Intermediate", href: "/strategies/market-structure-shift" }
        ]
    },
    {
        category: "Price Action Strategies",
        description: "Pure price-based trading approaches",
        strategies: [
            { title: "Support & Resistance Bounce", difficulty: "Beginner", href: "/strategies/support-resistance-bounce" },
            { title: "Breakout & Retest", difficulty: "Beginner", href: "/strategies/breakout-retest" },
            { title: "Engulfing Candle Strategy", difficulty: "Beginner", href: "/strategies/engulfing-candle" },
            { title: "Pin Bar Reversal", difficulty: "Intermediate", href: "/strategies/pin-bar-reversal" },
            { title: "Inside Bar Breakout", difficulty: "Intermediate", href: "/strategies/inside-bar-breakout" }
        ]
    },
    {
        category: "Indicator-Based Strategies",
        description: "Strategies using technical indicators",
        strategies: [
            { title: "Moving Average Crossover", difficulty: "Beginner", href: "/strategies/ma-crossover" },
            { title: "RSI Divergence", difficulty: "Intermediate", href: "/strategies/rsi-divergence" },
            { title: "MACD Momentum", difficulty: "Beginner", href: "/strategies/macd-momentum" },
            { title: "Bollinger Band Squeeze", difficulty: "Intermediate", href: "/strategies/bollinger-squeeze" },
            { title: "Fibonacci Retracement", difficulty: "Intermediate", href: "/strategies/fibonacci-retracement" }
        ]
    },
    {
        category: "Scalping Strategies",
        description: "Quick in-and-out trading for small profits",
        strategies: [
            { title: "1-Minute Scalping", difficulty: "Advanced", href: "/strategies/1-minute-scalping" },
            { title: "Range Scalping", difficulty: "Intermediate", href: "/strategies/range-scalping" },
            { title: "News Spike Scalping", difficulty: "Advanced", href: "/strategies/news-spike-scalping" }
        ]
    }
];

const difficultyColors: Record<string, string> = {
    "Beginner": "#10B981",
    "Intermediate": "#F59E0B",
    "Advanced": "#EF4444"
};

export default function StrategiesPage() {
    return (
        <div className="w-full min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1920&h=600&fit=crop"
                        alt="Trading strategies"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        Trading Strategies
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                        Proven setups and methodologies for every market condition
                    </p>
                    <div className="flex items-center justify-center gap-8 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-[#B85C38]" />
                            <span>20+ Strategies</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#B85C38]" />
                            <span>Step-by-Step Guides</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategies by Category */}
            <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
                <div className="space-y-16">
                    {strategies.map((category) => (
                        <div key={category.category}>
                            <div className="mb-8">
                                <h2 className="font-sans font-bold text-3xl text-slate-900 mb-2">
                                    {category.category}
                                </h2>
                                <p className="text-slate-600 text-lg">
                                    {category.description}
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.strategies.map((strategy) => (
                                    <Link
                                        key={strategy.title}
                                        href={strategy.href}
                                        className="group"
                                    >
                                        <div className="bg-white border border-cream-dark rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                                            <div className="flex items-start justify-between mb-4">
                                                <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-[#B85C38] transition-colors duration-300">
                                                    {strategy.title}
                                                </h3>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className="px-3 py-1 rounded-full text-xs font-sans font-semibold text-white"
                                                    style={{ backgroundColor: difficultyColors[strategy.difficulty] }}
                                                >
                                                    {strategy.difficulty}
                                                </span>
                                                <div className="text-[#B85C38] font-sans font-semibold text-sm flex items-center group-hover:gap-2 transition-all duration-300">
                                                    Learn →
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">
                        New to Trading Strategies?
                    </h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Start with the fundamentals in our learning paths
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/learn/smart-money-concepts"
                            className="inline-flex items-center gap-2 bg-[#B85C38] hover:bg-[#A04D2F] text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
                        >
                            <Brain className="w-5 h-5" />
                            Learn Smart Money Concepts
                        </Link>
                        <Link
                            href="/learn"
                            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                        >
                            <BookOpen className="w-5 h-5" />
                            Browse All Learning Paths
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
