import Link from "next/link";
import { PlayCircle, Clock, BookOpen, ArrowLeft } from "lucide-react";

const curriculum = [
    {
        section: "Foundation",
        lessons: [
            { title: "What is Price Action?", duration: "8 min" },
            { title: "Reading Candlesticks", duration: "12 min" },
            { title: "Support & Resistance Basics", duration: "15 min" },
            { title: "Trend Lines & Channels", duration: "14 min" }
        ]
    },
    {
        section: "Candlestick Patterns",
        lessons: [
            { title: "Single Candlestick Patterns", duration: "10 min" },
            { title: "Doji & Spinning Tops", duration: "8 min" },
            { title: "Hammer & Shooting Star", duration: "10 min" },
            { title: "Engulfing Patterns", duration: "12 min" },
            { title: "Pin Bars & Rejection Candles", duration: "14 min" }
        ]
    },
    {
        section: "Chart Patterns",
        lessons: [
            { title: "Head & Shoulders", duration: "15 min" },
            { title: "Double Tops & Bottoms", duration: "12 min" },
            { title: "Triangles (Ascending, Descending, Symmetrical)", duration: "18 min" },
            { title: "Flags & Pennants", duration: "14 min" },
            { title: "Wedges (Rising & Falling)", duration: "12 min" }
        ]
    },
    {
        section: "Support & Resistance",
        lessons: [
            { title: "Identifying Key Levels", duration: "12 min" },
            { title: "Dynamic Support & Resistance", duration: "14 min" },
            { title: "Role Reversal", duration: "10 min" },
            { title: "Confluence Zones", duration: "16 min" }
        ]
    },
    {
        section: "Price Action Setups",
        lessons: [
            { title: "Breakout & Retest", duration: "18 min" },
            { title: "False Breakouts", duration: "14 min" },
            { title: "Range Trading", duration: "16 min" },
            { title: "Trend Following Setups", duration: "20 min" },
            { title: "Reversal Setups", duration: "18 min" }
        ]
    },
    {
        section: "Multi-Timeframe Analysis",
        lessons: [
            { title: "Top-Down Analysis", duration: "15 min" },
            { title: "Aligning Timeframes", duration: "14 min" },
            { title: "Entry Timing", duration: "16 min" }
        ]
    }
];

export default function PriceActionPage() {
    const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            {/* UNIQUE HERO: Horizontal stats bar */}
            <section className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-300 mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Methodologies
                    </Link>

                    <div className="grid md:grid-cols-3 gap-8 items-end">
                        <div className="md:col-span-2">
                            <h1 className="font-sans font-bold text-4xl md:text-5xl mb-3">
                                Price Action Trading
                            </h1>
                            <p className="text-xl text-purple-100">
                                Trade without indicators using pure chart reading
                            </p>
                        </div>
                        <div className="flex md:justify-end gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                                <div className="text-3xl font-bold">{totalLessons}</div>
                                <div className="text-sm text-purple-200">Lessons</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center">
                                <div className="text-3xl font-bold">6</div>
                                <div className="text-sm text-purple-200">Sections</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="max-w-5xl mx-auto px-6 py-12">
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
                                        href={`/learn/price-action/${sectionIndex + 1}/${lessonIndex + 1}`}
                                        className="group block px-6 py-4 hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-[#8B5CF6] transition-colors duration-200">
                                                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-[#8B5CF6] transition-colors duration-200" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-sans font-medium text-slate-900 group-hover:text-[#8B5CF6] transition-colors duration-200">
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
                <div className="mt-12 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl p-8 text-center text-white">
                    <h2 className="font-sans font-bold text-2xl mb-4">
                        Ready to Start?
                    </h2>
                    <p className="text-purple-100 mb-6">
                        Begin with the foundation and master price action step by step
                    </p>
                    <Link
                        href="/learn/price-action/1/1"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#8B5CF6] font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                    >
                        <PlayCircle className="w-5 h-5" />
                        Start First Lesson
                    </Link>
                </div>
            </section>
        </div>
    );
}
