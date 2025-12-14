import Link from "next/link";
import Image from "next/image";
import { Brain, TrendingUp, BarChart3, Target, Zap, Activity, Layers, LineChart, BookOpen, ArrowRight, Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trading Courses | Learn SMC, Price Action & Technical Analysis",
    description: "Free structured courses on Smart Money Concepts, Price Action, Indicators, Chart Patterns, and more. Master institutional trading methodologies step-by-step.",
    keywords: ["trading courses", "SMC course", "price action course", "technical analysis", "trading education", "ICT methodology"],
    openGraph: {
        title: "Free Trading Courses | TRADENOTES",
        description: "Structured curricula on Smart Money Concepts, Price Action, and Technical Analysis. Learn to trade like institutions.",
        type: "website",
    },
};

const featuredMethodology = {
    title: "Smart Money Concepts (ICT)",
    description: "Master institutional trading methodology. Learn order blocks, liquidity, market structure, and how banks move the market.",
    image: "/ict_image.jpg",
    lessons: 50,
    href: "/learn/smart-money-concepts",
    badge: "Most Popular"
};

const methodologies = [
    {
        icon: TrendingUp,
        title: "Price Action Trading",
        subtitle: "Pure Chart Reading",
        description: "Trade without indicators using support, resistance, and candlestick patterns.",
        lessons: 35,
        href: "/learn/price-action",
        color: "#8B5CF6",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
    },
    {
        icon: BarChart3,
        title: "Indicator-Based Analysis",
        subtitle: "Technical Indicators",
        description: "Master RSI, MACD, Moving Averages, Bollinger Bands, and more.",
        lessons: 28,
        href: "/learn/indicators",
        color: "#3B82F6",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
    },
    {
        icon: Layers,
        title: "Chart Patterns",
        subtitle: "Pattern Recognition",
        description: "Identify and trade head & shoulders, triangles, flags, and more.",
        lessons: 22,
        href: "/learn/chart-patterns",
        color: "#10B981",
        image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&h=400&fit=crop"
    },
    {
        icon: Activity,
        title: "Volume Analysis",
        subtitle: "Volume & Orderflow",
        description: "Understand volume profiles, accumulation, distribution, and orderflow.",
        lessons: 18,
        href: "/learn/volume-analysis",
        color: "#F59E0B",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop"
    }
];

const additionalMethodologies = [
    {
        icon: Target,
        title: "Support & Resistance",
        description: "Master horizontal levels, trend lines, and dynamic S/R",
        lessons: 15,
        href: "/learn/support-resistance",
        color: "#EF4444",
        image: "https://images.unsplash.com/photo-1642790551116-18e150f248e8?w=400&h=300&fit=crop"
    },
    {
        icon: Zap,
        title: "Candlestick Patterns",
        description: "Learn doji, engulfing, hammers, and reversal patterns",
        lessons: 20,
        href: "/learn/candlestick-patterns",
        color: "#6366F1",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
        icon: LineChart,
        title: "Market Structure",
        description: "Identify trends, reversals, and market phases",
        lessons: 16,
        href: "/learn/market-structure",
        color: "#EC4899",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop"
    },
    {
        icon: Brain,
        title: "Wyckoff Method",
        description: "Accumulation, distribution, and market cycles",
        lessons: 12,
        href: "/learn/wyckoff",
        color: "#14B8A6",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop"
    }
];

export default function LearnPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative bg-slate-950 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-copper-500/20 via-slate-900 to-slate-900" />
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/10 to-transparent" />
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                            Technical Analysis
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-copper-600">Methodologies</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Master modern TA through structured curricula. From ICT/SMC to Price Action and beyond.
                        </p>
                        <div className="flex items-center justify-center gap-8 text-sm text-slate-400 uppercase tracking-wider font-medium">
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-copper-500" />
                                <span>200+ Lessons</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-copper-500" />
                                <span>9 Methodologies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured: ICT/SMC */}
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 -mt-20 relative z-20">
                <Link href={featuredMethodology.href} className="group block">
                    <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-900/10 hover:shadow-slate-900/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="relative h-64 md:h-auto min-h-[320px]">
                                <Image
                                    src={featuredMethodology.image}
                                    alt={featuredMethodology.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
                                <div className="absolute top-6 left-6">
                                    <span className="px-4 py-2 bg-copper-500 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-copper-500/20">
                                        <Star className="w-3 h-3 fill-current" />
                                        {featuredMethodology.badge}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                                <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4 group-hover:text-copper-600 transition-colors duration-300">
                                    {featuredMethodology.title}
                                </h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {featuredMethodology.description}
                                </p>
                                <div className="flex items-center gap-6 mb-8 border-t border-slate-100 pt-6">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-wider">
                                        <BookOpen className="w-4 h-4 text-copper-500" />
                                        <span>{featuredMethodology.lessons} lessons</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 text-copper-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all duration-300">
                                    Start Learning
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Main Methodologies */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                <h2 className="font-serif font-bold text-3xl text-slate-900 mb-8">
                    Core Methodologies
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {methodologies.map((method) => {
                        const Icon = method.icon;
                        return (
                            <Link key={method.title} href={method.href} className="group">
                                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative h-56">
                                        <Image
                                            src={method.image}
                                            alt={method.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="font-serif font-bold text-2xl text-white mb-2">
                                                {method.title}
                                            </h3>
                                            <p className="text-sm text-white/80 font-medium uppercase tracking-wider">{method.lessons} lessons</p>
                                        </div>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col">
                                        <p className="text-xs text-copper-600 font-bold uppercase tracking-wider mb-3">{method.subtitle}</p>
                                        <p className="text-slate-600 mb-6 leading-relaxed flex-1">{method.description}</p>
                                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all duration-300 text-slate-900 group-hover:text-copper-600">
                                            Start Learning
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Additional Methodologies */}
            <section className="bg-slate-50 py-20 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="font-serif font-bold text-3xl text-slate-900 mb-10">
                        Additional Methodologies
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalMethodologies.map((method) => {
                            const Icon = method.icon;
                            return (
                                <Link key={method.title} href={method.href} className="group">
                                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                        <div className="relative h-40">
                                            <Image
                                                src={method.image}
                                                alt={method.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                                            <div
                                                className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/20 shadow-sm"
                                            >
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-copper-600 transition-colors">
                                                {method.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">{method.description}</p>
                                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{method.lessons} lessons</div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
