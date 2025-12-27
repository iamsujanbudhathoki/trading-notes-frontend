"use client";

import Link from "next/link";
import Image from "next/image";
import { CandlestickChart, Repeat, Calendar, BrainCircuit, ArrowRight, TrendingUp, BarChart3, Layers, BookOpen } from "lucide-react";

const categories = [
    {
        title: "Smart Money Concepts",
        description: "Institutional order flow notes. Understanding liquidity pools and market manipulation logic.",
        icon: BrainCircuit,
        href: "/learn/smart-money-concepts",
        count: "24 Articles",
        className: "md:col-span-2 md:row-span-2 bg-slate-900 text-white border border-slate-800",
        image: "/structure_mapping.avif"
    },
    {
        title: "Price Action",
        description: "Raw price analysis. Reading the tape without lagging indicators.",
        icon: TrendingUp,
        href: "/learn/price-action",
        count: "15 Articles",
        className: "md:col-span-1 bg-white border border-slate-200 hover:border-slate-300"
    },
    {
        title: "Chart Patterns",
        description: "Classical reversal and continuation structures explained.",
        icon: Layers,
        href: "/learn/chart-patterns",
        count: "12 Articles",
        className: "md:col-span-1 bg-white border border-slate-200 hover:border-slate-300"
    },
    {
        title: "Indicators",
        description: "Technical notes on using RSI, MACD, and Moving Averages.",
        icon: BarChart3,
        href: "/learn/indicators",
        count: "10 Articles",
        className: "md:col-span-1 bg-white border border-slate-200 hover:border-slate-300"
    },
    {
        title: "Psychology",
        description: "Mental models for risk management and emotional control.",
        icon: BrainCircuit,
        href: "/learn/psychology",
        count: "8 Articles",
        className: "md:col-span-1 bg-white border border-slate-200 hover:border-slate-300"
    }
];

export function BrowseCategoriesSection() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
                            The Knowledge Archive
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            A structured collection of written notes, diagrams, and case studies.
                            No fluff. Just the information you need.
                        </p>
                    </div>
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-slate-700 transition-colors group whitespace-nowrap"
                    >
                        Browse All Notes
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {categories.map((category, idx) => {
                        const Icon = category.icon;
                        const isDark = category.className.includes("bg-slate-900");

                        return (
                            <Link
                                key={category.title}
                                href={category.href}
                                className={`
                                    relative group p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                                    flex flex-col justify-between overflow-hidden
                                    ${category.className}
                                    ${!isDark ? 'hover:shadow-slate-200/50' : 'hover:shadow-slate-900/20'}
                                `}
                            >
                                {/* Background Image for Featured Cards */}
                                {'image' in category && category.image && (
                                    <>
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
                                    </>
                                )}

                                <div className="relative z-10">
                                    <div className={`
                                        w-10 h-10 rounded-lg flex items-center justify-center mb-6
                                        ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-900'}
                                    `}>
                                        <Icon className="w-5 h-5" />
                                    </div>

                                    <h3 className={`font-serif font-bold text-2xl mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {category.title}
                                    </h3>
                                    <p className={`font-medium leading-relaxed text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        {category.description}
                                    </p>
                                </div>

                                <div className={`
                                    relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-4
                                    ${isDark ? 'text-slate-500 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}
                                    transition-colors duration-300
                                `}>
                                    <BookOpen className="w-3 h-3" />
                                    <span>{category.count}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
