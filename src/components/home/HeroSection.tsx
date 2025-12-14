import Link from "next/link";
import { ArrowRight, BarChart2, TrendingUp, Shield, Activity } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 bg-cream">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-copper-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 font-medium text-xs uppercase tracking-wider mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                            <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse-slow" />
                            Institutional Grade Education
                        </div>

                        <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            Stop Gambling. <br />
                            <span className="text-copper-600">Start Trading.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            90% of retail traders fail because they trade patterns without logic. We teach the <span className="text-slate-900 font-semibold">institutional mechanics</span> behind every price delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                            <Link
                                href="/learn"
                                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Start Curriculum
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/articles"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                            >
                                Read Analysis
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-500 text-sm font-semibold uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                            <div className="flex items-center gap-2">
                                <Activity className="w-5 h-5 text-copper-500" />
                                Price Action
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <div className="flex items-center gap-2">
                                <BarChart2 className="w-5 h-5 text-copper-500" />
                                Smart Money
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-copper-500" />
                                Risk Mgmt
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual - Trading Terminal Mockup */}
                    <div className="flex-1 w-full relative animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                        <div className="relative rounded-2xl bg-slate-900 p-2 shadow-2xl shadow-slate-900/20 border border-slate-800">
                            {/* Window Controls */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800/50 rounded-t-xl flex items-center px-4 gap-2 border-b border-slate-700/50">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <div className="ml-4 text-xs text-slate-500 font-mono">TRADENOTES TERMINAL v2.0</div>
                            </div>

                            {/* Terminal Content */}
                            <div className="mt-10 bg-slate-950 rounded-xl overflow-hidden border border-slate-800/50 relative aspect-[4/3]">
                                {/* Grid Lines */}
                                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                                {/* Chart Area */}
                                <div className="absolute inset-0 p-6 flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <div className="text-2xl font-mono font-bold text-white">EUR/USD</div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <span className="text-green-500 font-mono">1.09245</span>
                                                <span className="text-green-500/50 text-xs">+0.45%</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-400 font-mono">1H</div>
                                            <div className="px-3 py-1 rounded bg-copper-500 text-xs text-white font-mono">4H</div>
                                            <div className="px-3 py-1 rounded bg-slate-800 text-xs text-slate-400 font-mono">D</div>
                                        </div>
                                    </div>

                                    {/* Candlesticks Visualization (Abstract) */}
                                    <div className="flex-1 flex items-end justify-between gap-1 px-2 pb-4 relative">
                                        {/* Trend Line */}
                                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 border-t border-dashed border-slate-600" />

                                        {[40, 60, 45, 70, 55, 80, 65, 90, 75, 60, 85, 95, 80, 60, 40].map((h, i) => (
                                            <div key={i} className="w-full h-full flex items-end justify-center group relative">
                                                <div
                                                    className={`w-2 rounded-sm ${i > 10 ? 'bg-green-500' : i % 2 === 0 ? 'bg-slate-700' : 'bg-copper-500'}`}
                                                    style={{ height: `${h}%`, opacity: 0.8 }}
                                                />
                                                {/* Wick */}
                                                <div className={`absolute w-[1px] ${i > 10 ? 'bg-green-500' : i % 2 === 0 ? 'bg-slate-700' : 'bg-copper-500'}`} style={{ height: `${h + 20}%`, bottom: 0, opacity: 0.5 }} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Analysis Box */}
                                <div className="absolute top-1/3 right-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-lg border border-slate-700 shadow-xl max-w-[180px]">
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className="w-4 h-4 text-green-500" />
                                        <span className="text-xs font-bold text-white uppercase">Order Block</span>
                                    </div>
                                    <div className="text-[10px] text-slate-400 leading-relaxed">
                                        Institutional entry detected. Mitigated bearish breaker. Expecting expansion.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-copper-500/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
