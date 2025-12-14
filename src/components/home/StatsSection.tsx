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
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className={`text-3xl md:text-5xl font-bold text-slate-900 mb-2 font-sans tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                {isVisible ? stat.value.toLocaleString() : 0}{stat.suffix}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
