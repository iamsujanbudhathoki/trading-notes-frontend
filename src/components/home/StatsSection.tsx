"use client";

import { Users, BookOpen, Layers, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
    {
        icon: Users,
        value: 2500,
        label: "Community Members",
        suffix: "+"
    },
    {
        icon: BookOpen,
        value: 150,
        label: "Free Lessons",
        suffix: "+"
    },
    {
        icon: Layers,
        value: 45,
        label: "Core Concepts",
        suffix: "+"
    },
    {
        icon: Clock,
        value: 100,
        label: "Hours of Content",
        suffix: "+"
    }
];

export function StatsSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="py-12 relative z-20 -mt-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200 p-8 md:p-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center group">
                                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-500 mb-3 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors duration-300">
                                    <stat.icon className="w-5 h-5" />
                                </div>
                                <div className={`text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-mono tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    {isVisible ? stat.value.toLocaleString() : 0}{stat.suffix}
                                </div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
