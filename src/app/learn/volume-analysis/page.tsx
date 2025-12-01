import Link from "next/link";
import { PlayCircle, Clock, BookOpen, ArrowLeft, BarChart2 } from "lucide-react";

const curriculum = [
    {
        section: "Volume Basics",
        lessons: [
            { title: "Understanding Volume", duration: "10 min" },
            { title: "Volume vs Price", duration: "12 min" },
            { title: "Volume Profiles", duration: "15 min" },
            { title: "Time & Sales", duration: "14 min" }
        ]
    },
    {
        section: "Order Flow",
        lessons: [
            { title: "Bid vs Ask", duration: "12 min" },
            { title: "Delta Analysis", duration: "14 min" },
            { title: "Footprint Charts", duration: "18 min" },
            { title: "Absorption", duration: "15 min" }
        ]
    },
    {
        section: "Volume Indicators",
        lessons: [
            { title: "VWAP Strategies", duration: "16 min" },
            { title: "On-Balance Volume (OBV)", duration: "12 min" },
            { title: "Volume Profile Visible Range", duration: "14 min" }
        ]
    }
];

export default function VolumeAnalysisPage() {
    const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);

    return (
        <div className="w-full min-h-screen bg-slate-50">
            {/* UNIQUE HERO: Volume Histogram Style */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                {/* Background Bars */}
                <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-between opacity-10 px-4">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-4 bg-amber-500 rounded-t"
                            style={{ height: `${Math.random() * 100}%` }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 text-amber-200/80 hover:text-amber-200 transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Methodologies
                    </Link>

                    <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <BarChart2 className="w-8 h-8 text-amber-500" />
                                <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Market Depth</span>
                            </div>
                            <h1 className="font-sans font-bold text-4xl md:text-6xl mb-6">
                                Volume Analysis
                            </h1>
                            <p className="text-xl text-slate-300 max-w-xl">
                                Look beneath the price. Understand the fuel that drives market moves through order flow and volume profiling.
                            </p>
                        </div>

                        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 w-full md:w-64">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-slate-400 text-sm">Volume</span>
                                <span className="text-amber-500 font-bold">High</span>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 w-3/4"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 w-1/2"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 w-5/6"></div>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-center">
                                <span className="text-white font-bold">{totalLessons} Lessons</span>
                                <span className="text-xs text-slate-400">Intermediate</span>
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
                                        href={`/learn/volume-analysis/${sectionIndex + 1}/${lessonIndex + 1}`}
                                        className="group block px-6 py-4 hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-amber-500 transition-colors duration-200">
                                                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors duration-200" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-sans font-medium text-slate-900 group-hover:text-amber-500 transition-colors duration-200">
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
