import Link from "next/link";
import { PlayCircle, Clock, BookOpen, ArrowLeft, TrendingUp, Activity, BarChart2 } from "lucide-react";

const curriculum = [
    {
        section: "Reversal Patterns",
        lessons: [
            { title: "Head & Shoulders", duration: "16 min" },
            { title: "Inverse Head & Shoulders", duration: "14 min" },
            { title: "Double Top", duration: "12 min" },
            { title: "Double Bottom", duration: "12 min" },
            { title: "Triple Top & Bottom", duration: "14 min" }
        ]
    },
    {
        section: "Continuation Patterns",
        lessons: [
            { title: "Flags (Bullish & Bearish)", duration: "14 min" },
            { title: "Pennants", duration: "12 min" },
            { title: "Rectangles", duration: "10 min" },
            { title: "Cup & Handle", duration: "14 min" }
        ]
    },
    {
        section: "Triangle Patterns",
        lessons: [
            { title: "Ascending Triangle", duration: "12 min" },
            { title: "Descending Triangle", duration: "12 min" },
            { title: "Symmetrical Triangle", duration: "14 min" }
        ]
    },
    {
        section: "Wedge Patterns",
        lessons: [
            { title: "Rising Wedge", duration: "12 min" },
            { title: "Falling Wedge", duration: "12 min" },
            { title: "Broadening Wedge", duration: "14 min" }
        ]
    },
    {
        section: "Pattern Recognition",
        lessons: [
            { title: "Identifying Patterns Early", duration: "16 min" },
            { title: "False Patterns & Traps", duration: "14 min" },
            { title: "Pattern Confirmation", duration: "12 min" }
        ]
    },
    {
        section: "Trading Patterns",
        lessons: [
            { title: "Entry & Exit Strategies", duration: "18 min" },
            { title: "Risk Management for Patterns", duration: "15 min" },
            { title: "Combining with Indicators", duration: "14 min" }
        ]
    }
];

export default function ChartPatternsPage() {
    return (
        <div className="min-h-screen bg-cream">
            {/* Unique Hero Section: Pattern Gallery Aesthetic */}
            <div className="relative bg-emerald-900 text-white overflow-hidden">
                {/* Radial Grid Background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <Link href="/learn" className="inline-flex items-center text-emerald-300 hover:text-white mb-8 transition-colors">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Methodologies
                            </Link>
                            <h1 className="font-sans font-bold text-4xl md:text-6xl mb-6 leading-tight">
                                Chart <span className="text-emerald-400">Patterns</span>
                            </h1>
                            <p className="text-lg text-emerald-100 mb-8 max-w-xl leading-relaxed">
                                Master the visual language of the markets. Learn to identify high-probability formations, anticipate breakouts, and time your entries with precision.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <Activity className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium">Reversal & Continuation</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium">Breakout Strategies</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Cards / Gallery */}
                        <div className="flex-1 relative h-[400px] w-full hidden md:block">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-emerald-800 rounded-2xl shadow-2xl border border-emerald-700 rotate-[-6deg] z-10 flex flex-col items-center justify-center p-6">
                                <div className="w-full h-32 border-2 border-emerald-600 border-dashed rounded-lg mb-4 flex items-center justify-center">
                                    <div className="w-16 h-16 border-t-4 border-r-4 border-emerald-400 rounded-tr-3xl"></div>
                                </div>
                                <div className="text-emerald-200 font-mono text-sm">Bullish Flag</div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-emerald-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-emerald-700 rotate-[6deg] z-20 flex flex-col items-center justify-center p-6">
                                <div className="w-full h-32 border-2 border-emerald-500 border-dashed rounded-lg mb-4 flex items-center justify-center relative">
                                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-emerald-500 rounded-full"></div>
                                    <div className="absolute top-4 right-4 w-4 h-4 bg-emerald-500 rounded-full"></div>
                                    <div className="w-full h-full border-b-2 border-emerald-500/30 transform -skew-y-12"></div>
                                </div>
                                <div className="text-emerald-300 font-mono text-lg font-bold">Head & Shoulders</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curriculum Content */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="space-y-8">
                    {curriculum.map((section, index) => (
                        <div key={section.section} className="bg-white rounded-2xl shadow-soft overflow-hidden border border-cream-dark">
                            <div className="bg-slate-50 px-6 py-4 border-b border-cream-dark flex items-center justify-between">
                                <h2 className="font-sans font-bold text-lg text-slate-900 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {section.section}
                                </h2>
                            </div>
                            <div className="divide-y divide-cream-dark">
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <Link
                                        key={lesson.title}
                                        href={`/learn/chart-patterns/${index + 1}/${lessonIndex + 1}`}
                                        className="group block px-6 py-4 hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-emerald-500 transition-colors duration-200">
                                                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors duration-200" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-sans font-medium text-slate-900 group-hover:text-emerald-600 transition-colors duration-200">
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

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-8 text-center text-white shadow-lg">
                    <h2 className="font-sans font-bold text-2xl mb-4">
                        Ready to Spot the Next Breakout?
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Start your journey into pattern recognition and add a powerful visual edge to your trading arsenal.
                    </p>
                    <Link
                        href="/learn/chart-patterns/1/1"
                        className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-700 font-sans font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <PlayCircle className="w-5 h-5" />
                        Start First Lesson
                    </Link>
                </div>
            </section>
        </div>
    );
}
