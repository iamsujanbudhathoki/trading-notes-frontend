import Link from "next/link";
import { ArrowRight, BookOpen, PenTool, StickyNote } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
            {/* Subtle Paper Texture Effect */}
            <div className="absolute inset-0 bg-[#fafafa] opacity-50" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge - Personal & Authentic */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-serif italic mb-8 shadow-sm">
                    <PenTool className="w-3 h-3 text-slate-400" />
                    <span>Documenting the journey to profitability</span>
                </div>

                {/* Typography - The "Diary" Concept */}
                <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
                    Snippets from the<br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-slate-900">Diary of a Trader.</span>
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-100 -z-0 -rotate-1" />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                    No video courses. No hype. Just structured, written notes on
                    <span className="font-bold text-slate-800"> Price Action</span>,
                    <span className="font-bold text-slate-800"> Market Logic</span>, and
                    <span className="font-bold text-slate-800"> Psychology</span>.
                    <br className="hidden md:block" />
                    Built for the retail trader who wants to read, think, and understand.
                </p>

                {/* Actions - Focused on Reading */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <Link
                        href="/learn"
                        className="min-w-[200px] px-8 py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 hover:-translate-y-0.5"
                    >
                        Start Reading
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="/articles"
                        className="min-w-[200px] px-8 py-3.5 bg-white text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                        <BookOpen className="w-4 h-4 text-slate-400" />
                        Explore Archive
                    </Link>
                </div>

                {/* Heroic Visual - The "Digital Journal" */}
                <div className="relative w-full max-w-4xl mx-auto perspective-1000">
                    <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden p-8 md:p-12 text-left transform rotate-x-2 transition-transform duration-700 hover:rotate-0">
                        {/* Window Controls */}
                        <div className="flex items-center gap-2 mb-8 border-b border-slate-100 pb-4">
                            <div className="w-3 h-3 rounded-full bg-slate-200" />
                            <div className="w-3 h-3 rounded-full bg-slate-200" />
                            <div className="w-3 h-3 rounded-full bg-slate-200" />
                            <div className="ml-4 text-xs text-slate-400 font-mono">journal_entry_042.md</div>
                        </div>

                        {/* Note Content */}
                        <div className="space-y-6 font-serif">
                            <div className="flex items-center gap-3 text-sm text-slate-400 font-sans mb-2">
                                <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-bold text-xs uppercase tracking-wider">Psychology</span>
                                <span>•</span>
                                <span>Daily Market Note</span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Why I sat on my hands today.
                            </h3>

                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    The setup was there. <span className="bg-emerald-100 px-1">Liquidity was swept</span> on the 15m chart, and we had a displacement back into the range.
                                    Technically, it was a valid long.
                                </p>
                                <p>
                                    But the 4H narrative was bearish. We were reacting off a higher timeframe supply zone.
                                    Taking a long here would be <span className="border-b-2 border-emerald-200 text-slate-800 font-medium">fighting the tide</span>.
                                </p>
                                <p className="text-slate-800 font-medium italic border-l-4 border-slate-900 pl-4 py-1 my-4">
                                    "Patience is not the ability to wait, but the ability to keep a good attitude while waiting."
                                </p>
                                <p>
                                    I chose to preserve capital. No trade is better than a bad trade.
                                    <span className="text-emerald-600 font-bold"> Capital preservation {'>'} Chasing pips.</span>
                                </p>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-12 right-12 hidden md:block opacity-20 rotate-12">
                            <StickyNote className="w-24 h-24 text-slate-900" />
                        </div>
                    </div>

                    {/* Decorative Backdrop */}
                    <div className="absolute -inset-4 bg-slate-900/5 rounded-[2rem] -z-10 blur-xl" />
                </div>
            </div>
        </section>
    );
}
