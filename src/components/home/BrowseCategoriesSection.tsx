"use client";

import Link from "next/link";
import { CandlestickChart, Repeat, Calendar, BrainCircuit, ArrowRight } from "lucide-react";

const categories = [
    {
        title: "Chart Patterns",
        description: "Master classic formations like Head & Shoulders, Wedges, and Flags.",
        icon: CandlestickChart,
        href: "/learn/chart-patterns",
        count: "12 Lessons",
        color: "text-orange-600",
        bg: "bg-orange-50"
    },
    {
        title: "Market Cycles",
        description: "Understand the 4 phases of the market: Accumulation, Markup, Distribution, Markdown.",
        icon: Repeat,
        href: "/learn/market-cycles",
        count: "8 Lessons",
        color: "text-green-600",
        bg: "bg-green-50"
    },
    {
        title: "Seasonality",
        description: "Learn how time of day, week, and year affects asset prices.",
        icon: Calendar,
        href: "/learn/seasonality",
        count: "5 Lessons",
        color: "text-pink-600",
        bg: "bg-pink-50"
    },
    {
        title: "Smart Money (SMC)",
        description: "Trade with the banks. Order Blocks, FVGs, and Liquidity concepts.",
        icon: BrainCircuit,
        href: "/learn/smart-money-concepts",
        count: "24 Lessons",
        color: "text-purple-600",
        bg: "bg-purple-50"
    }
];

export function BrowseCategoriesSection() {
    return (
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 mb-3 tracking-tight">
                        Explore Topics
                    </h2>
                    <p className="text-slate-500 font-normal">
                        Browse our growing library of trading concepts and methodologies.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <Link
                                key={category.title}
                                href={category.href}
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 hover:text-slate-900 transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <Icon className="w-4 h-4" />
                                {category.title}
                            </Link>
                        );
                    })}
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
                    >
                        View All Categories
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
