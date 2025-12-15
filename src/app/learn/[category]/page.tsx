"use client";

import Link from "next/link";
import { PlayCircle, Clock, BookOpen, ArrowLeft, CheckCircle2 } from "lucide-react";
import { use } from "react";
import { notFound } from "next/navigation";
import { getCurriculum, categoryMetadata } from "@/lib/curriculum";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = use(params);
    const { category } = resolvedParams;

    const curriculum = getCurriculum(category);
    const metadata = categoryMetadata[category];

    if (!curriculum || !metadata) {
        notFound();
    }

    const totalLessons = curriculum.reduce((acc, section) => acc + section.lessons.length, 0);
    const totalDuration = "8-12 weeks"; // This could also be dynamic if needed

    // Dynamic styles based on category color
    const accentColor = metadata.color;

    return (
        <div className="w-full min-h-screen">
            {/* UNIQUE HERO: Side-by-side split with progress tracker */}
            <section className="relative bg-slate-950 text-white overflow-hidden">
                {/* Dynamic Background Gradient */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(to bottom right, ${accentColor}, transparent, ${accentColor})` }}
                />

                {/* Decorative elements */}
                <div
                    className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl"
                    style={{ backgroundColor: accentColor }}
                />
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
                            <div
                                className="inline-block px-4 py-2 bg-white/5 border rounded-full mb-4 backdrop-blur-sm"
                                style={{ borderColor: `${accentColor}40` }}
                            >
                                <span className="font-sans font-semibold text-sm" style={{ color: accentColor }}>
                                    Comprehensive Course
                                </span>
                            </div>
                            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-4 leading-tight">
                                {metadata.title}
                            </h1>
                            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                                {metadata.description}
                            </p>

                            {/* Tags - could be dynamic later */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/5">Beginner Friendly</span>
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/5">Structured Learning</span>
                                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg text-sm border border-white/5">Practical Examples</span>
                            </div>

                            <Link
                                href="#curriculum"
                                className="inline-flex items-center gap-2 text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-1"
                                style={{ backgroundColor: accentColor, boxShadow: `0 10px 25px -5px ${accentColor}40` }}
                            >
                                <PlayCircle className="w-5 h-5" />
                                Start Learning
                            </Link>
                        </div>

                        {/* Right: Progress Tracker */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                            <h3 className="font-serif font-bold text-lg mb-6">Course Overview</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Total Lessons</span>
                                    <span className="font-sans font-bold text-2xl" style={{ color: accentColor }}>{totalLessons}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Est. Duration</span>
                                    <span className="font-sans font-bold">{totalDuration}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-slate-300">Difficulty</span>
                                    <span
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold"
                                        style={{ color: accentColor }}
                                    >
                                        Beginner to Advanced
                                    </span>
                                </div>
                                <div className="pt-6 mt-2 border-t border-white/10 space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        <span>Structured curriculum path</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        <span>Real-world chart examples</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                                        <span>Self-paced learning</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section id="curriculum" className="max-w-5xl mx-auto px-6 py-16 bg-white">
                <div className="space-y-6">
                    {curriculum.map((section, sectionIndex) => (
                        <div key={section.section} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                                <span
                                    className="flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {sectionIndex + 1}
                                </span>
                                <h2 className="font-serif font-bold text-lg text-slate-900">
                                    {section.section}
                                </h2>
                            </div>
                            <div className="divide-y divide-slate-100">
                                {section.lessons.map((lesson, lessonIndex) => (
                                    <Link
                                        key={lesson.title}
                                        href={`/learn/${category}/${lesson.slug}`}
                                        className="group block px-6 py-4 hover:bg-slate-50 transition-colors duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-transparent group-hover:text-white transition-all duration-200"
                                                style={{ '--hover-color': accentColor } as React.CSSProperties}
                                            >
                                                <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-current transition-colors duration-200"
                                                    style={{ color: 'inherit' }}
                                                />
                                                <style jsx>{`
                                                    .group:hover .w-8 {
                                                        background-color: ${accentColor};
                                                        border-color: ${accentColor};
                                                    }
                                                    .group:hover .w-4 {
                                                        color: white !important;
                                                    }
                                                `}</style>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-sans font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
                                                    {lesson.title}
                                                </h3>
                                            </div>
                                            <span className="text-sm text-slate-400 flex items-center gap-1.5 font-medium">
                                                <Clock className="w-3.5 h-3.5" />
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
