"use client";

import { AlertTriangle, RefreshCcw, BrainCircuit } from "lucide-react";

const struggles = [
    {
        title: "Strategy Hopping",
        description: "Trying a new indicator every week, hoping for a 'holy grail' that doesn't exist.",
        icon: RefreshCcw
    },
    {
        title: "Revenge Trading",
        description: "Taking impulsive trades to 'make back' a loss, only to dig a deeper hole.",
        icon: AlertTriangle
    },
    {
        title: "Analysis Paralysis",
        description: "Staring at charts for hours, marking every level, but freezing when it's time to execute.",
        icon: BrainCircuit
    }
];

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
                        Sound Familiar?
                    </h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        Most traders fail not because they lack intelligence, but because they lack structure.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {struggles.map((struggle, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6">
                                <struggle.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 mb-3">
                                {struggle.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed">
                                {struggle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
