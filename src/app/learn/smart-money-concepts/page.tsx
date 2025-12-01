import Link from "next/link";
import { PlayCircle, Clock, BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";

const curriculum = [
    {
        section: "Foundation",
        lessons: [
            { title: "What is Smart Money?", duration: "8 min" },
            { title: "Understanding Institutional Orderflow", duration: "12 min" },
            { title: "Market Structure Basics", duration: "10 min" },
            { title: "Higher Highs, Higher Lows, Lower Highs, Lower Lows", duration: "15 min" }
        ]
    },
    {
        section: "Order Blocks",
        lessons: [
            { title: "What are Order Blocks?", duration: "10 min" },
            { title: "Bullish Order Blocks", duration: "12 min" },
            { title: "Bearish Order Blocks", duration: "12 min" },
            { title: "Breaker Blocks Explained", duration: "14 min" },
            { title: "Mitigation Blocks", duration: "10 min" },
            { title: "How to Trade Order Blocks", duration: "18 min" }
        ]
    },
    {
        section: "Fair Value Gaps (FVG)",
        lessons: [
            { title: "Understanding Price Inefficiencies", duration: "10 min" },
            { title: "Bullish Fair Value Gaps", duration: "12 min" },
            { title: "Bearish Fair Value Gaps", duration: "12 min" },
            { title: "FVG Inversions", duration: "15 min" },
            { title: "Rejection Blocks", duration: "10 min" },
            { title: "Trading FVGs Effectively", duration: "20 min" }
        ]
    },
    {
        section: "Liquidity Concepts",
        lessons: [
            { title: "What is Liquidity?", duration: "8 min" },
            { title: "Buy-Side Liquidity (BSL)", duration: "12 min" },
            { title: "Sell-Side Liquidity (SSL)", duration: "12 min" },
            { title: "Liquidity Grabs & Stop Hunts", duration: "15 min" },
            { title: "Liquidity Pools", duration: "10 min" },
            { title: "Trading Liquidity Sweeps", duration: "18 min" }
        ]
    },
    {
        section: "Market Structure",
        lessons: [
            { title: "Break of Structure (BOS)", duration: "12 min" },
            { title: "Change of Character (ChoCH)", duration: "14 min" },
            { title: "Market Structure Shifts (MSS)", duration: "15 min" },
            { title: "Internal vs External Structure", duration: "16 min" },
            { title: "Identifying Trend Reversals", duration: "18 min" }
        ]
    },
    {
        section: "Advanced Concepts",
        lessons: [
            { title: "Premium & Discount Zones", duration: "14 min" },
            { title: "Optimal Trade Entry (OTE)", duration: "16 min" },
            { title: "Institutional Reference Points", duration: "12 min" },
            { title: "Kill Zones & Session Trading", duration: "15 min" },
            { title: "Confluence & Multi-Timeframe Analysis", duration: "20 min" }
        ]
    },
    {
        section: "Putting It All Together",
        lessons: [
            { title: "Complete Trade Setup Checklist", duration: "18 min" },
            { title: "Risk Management for SMC", duration: "15 min" },
            { title: "Common Mistakes to Avoid", duration: "12 min" },
            { title: "Live Trade Examples", duration: "25 min" },
            { title: "Building Your Trading Plan", duration: "20 min" }
        ]
    }
];

export default function SmartMoneyConceptsPage() {
    const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
    const totalDuration = "8-12 weeks";

    return (
        <div className="w-full min-h-screen">
            {/* UNIQUE HERO: Side-by-side split with progress tracker */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-[#B85C38]/20 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#B85C38] opacity-10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Methodologies
                    </Link>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div>
                            <div className="inline-block px-4 py-2 bg-[#B85C38] bg-opacity-20 border border-[#B85C38] rounded-full mb-4">
                                <span className="text-[#B85C38] font-sans font-semibold text-sm">Most Popular</span>
                            </div>
                            <h1 className="font-sans font-bold text-4xl md:text-5xl mb-4 leading-tight">
                                Smart Money Concepts
                            </h1>
                            <p className="text-xl text-slate-300 mb-6">
                                Master institutional trading methodology. Learn how banks and institutions move the market.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm">Order Blocks</span>
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm">Fair Value Gaps</span>
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm">Liquidity</span>
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm">Market Structure</span>
                            </div>
                            <Link
                                href="#curriculum"
                                className="inline-flex items-center gap-2 bg-[#B85C38] hover:bg-[#A04D2F] text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
                            >
                                <PlayCircle className="w-5 h-5" />
                                Start Learning
                            </Link>
                        </div>

                        {/* Right: Progress Tracker */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <h3 className="font-sans font-bold text-lg mb-6">Course Overview</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Total Lessons</span>
                                    <span className="font-sans font-bold text-2xl text-[#B85C38]">{totalLessons}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Duration</span>
                                    <span className="font-sans font-bold">{totalDuration}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Difficulty</span>
                                    <span className="px-3 py-1 bg-[#B85C38] bg-opacity-20 text-[#B85C38] rounded-full text-sm font-semibold">Beginner to Advanced</span>
                                </div>
                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Structured curriculum</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Real-world examples</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Progressive learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className="max-w-5xl mx-auto px-6 py-16 bg-slate-50">
                <div className="space-y-6">
                    {curriculum.map((section, sectionIndex) => (
                        <div key={section.section} className="bg-white rounded-xl border border-cream-dark overflow-hidden">
                            <div className="bg-slate-50 px-6 py-4 border-b border-cream-dark">
                                <h2 className="font-sans font-bold text-lg text-slate-900">
                                    {sectionIndex + 1}. {section.section}
                                </h2>
                            </div>
                            <div className="divide-y divide-cream-dark">
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <Link
                                        key={lesson.title}
                                        href={`/learn/smart-money-concepts/${sectionIndex + 1}/${lessonIndex + 1}`}
                                        className="group block px-6 py-4 hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-[#B85C38] transition-colors duration-200">
                                                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-[#B85C38] transition-colors duration-200" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-sans font-medium text-slate-900 group-hover:text-[#B85C38] transition-colors duration-200">
                                                    {lesson.title}
                                                </h3>
                                            </div>
                                            <span className="text-sm text-slate-500 flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {lesson.duration}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
