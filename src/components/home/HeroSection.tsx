import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full pt-32 pb-0 lg:pt-48 bg-white overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] opacity-60" />
                <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px] opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper-500 animate-pulse" />
                    Live Market Notes
                </div>

                {/* Typography - Centered & Bold */}
                <h1 className="font-sans font-extrabold text-6xl md:text-8xl lg:text-9xl text-slate-900 tracking-tighter mb-8 max-w-5xl mx-auto animate-fade-in-up leading-[0.9]" style={{ animationDelay: '100ms' }}>
                    The Trader's <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-500">
                        Diary.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium animate-fade-in-up tracking-tight" style={{ animationDelay: '200ms' }}>
                    Unfiltered analysis. Real execution. <br className="hidden md:block" />
                    The honest path to institutional profitability.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <Link
                        href="/articles"
                        className="min-w-[200px] px-8 py-4 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl shadow-slate-900/20 hover:scale-105 active:scale-95"
                    >
                        Read Latest Entry
                    </Link>
                    <Link
                        href="/learn"
                        className="min-w-[200px] px-8 py-4 bg-white text-slate-900 font-semibold border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                    >
                        Explore Topics
                    </Link>
                </div>

                {/* Heroic Image - Centered & Immersive */}
                <div className="relative w-full max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-t-3xl bg-slate-50 border-t border-x border-slate-200 shadow-2xl shadow-slate-200/50">
                        <Image
                            src="/hero-chart-relatable.png"
                            alt="Institutional Trading Chart"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        {/* Gradient Overlay to blend bottom */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
