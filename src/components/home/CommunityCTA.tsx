"use client";

import Link from "next/link";
import { ArrowRight, Mail, BookOpen, PenTool } from "lucide-react";

export function CommunityCTA() {
    return (
        <section id="newsletter" className="relative py-24 overflow-hidden bg-slate-900">
            {/* Background Effects - Subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-8">
                    <PenTool className="w-3 h-3" />
                    <span>Sunday Newsletter</span>
                </div>

                <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                    The Weekly Entry.
                </h2>

                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    One email, every Sunday. Detailed market analysis, psychological notes, and a review of the week's key setups.
                    Written by a trader, for traders.
                </p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-all"
                        />
                    </div>
                    <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all shadow-lg flex items-center justify-center gap-2 group">
                        Read the Entry
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="text-sm text-slate-600">
                    No spam. Just charts and logic. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
}
