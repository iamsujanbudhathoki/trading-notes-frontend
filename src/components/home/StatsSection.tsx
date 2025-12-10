"use client";

import { Users, TrendingUp, BookOpen, Award } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
    {
        icon: Users,
        value: 50000,
        label: "Active Learners",
        suffix: "+"
    },
    {
        icon: BookOpen,
        value: 200,
        label: "Free Lessons",
        suffix: "+"
    },
    {
        icon: TrendingUp,
        value: 95,
        label: "Success Rate",
        suffix: "%"
    },
    {
        icon: Award,
        value: 10,
        label: "Years Experience",
        suffix: "+"
    }
];

export function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative -mt-8 z-10 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 text-center hover:bg-cream/50 transition-colors duration-300 group"
                                >
                                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-[#B85C38]/10 text-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-white transition-all duration-300">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div className={`text-3xl md:text-4xl font-bold text-slate-900 mb-1 font-serif transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                        {isVisible ? stat.value.toLocaleString() : 0}{stat.suffix}
                                    </div>
                                    <div className="text-sm text-slate-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
