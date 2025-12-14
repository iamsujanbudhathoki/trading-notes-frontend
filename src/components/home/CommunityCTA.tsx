"use client";

import Link from "next/link";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";

export function CommunityCTA() {
    return (
        <section className="relative py-24 overflow-hidden bg-slate-900">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-copper-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-400 text-sm font-medium mb-8">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Join the Inner Circle</span>
                </div>

                <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
                    Stop Trading Alone. <br />
                    Start Trading with <span className="text-copper-500">Edge.</span>
                </h2>

                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Get our weekly market outlook, exclusive educational content, and psychological tips delivered straight to your inbox. No spam, just alpha.
                </p>

                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 transition-all"
                        />
                    </div>
                    <button className="px-8 py-4 bg-copper-600 text-white font-bold rounded-xl hover:bg-copper-500 transition-all shadow-lg shadow-copper-900/20 flex items-center justify-center gap-2 group">
                        Subscribe Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <p className="text-sm text-slate-600">
                    Join 50,000+ traders. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
