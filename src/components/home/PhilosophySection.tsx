import { Shield, Lock, BarChart, BookOpen, CheckCircle2 } from "lucide-react";

export function PhilosophySection() {
    return (
        <section className="py-24 md:py-32 bg-slate-950 overflow-hidden relative">
            {/* Background Noise/Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-copper-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-800/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content Side */}
                    <div className="flex-1 w-full order-2 lg:order-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-500/10 text-copper-400 font-bold text-xs uppercase tracking-wider mb-6 border border-copper-500/20">
                            Our Philosophy
                        </div>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
                            Logic Over Luck. <br />
                            <span className="text-gradient-copper">Process Over Profits.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-400 leading-relaxed mb-10">
                            <p>
                                The financial markets are not a casino. They are a highly efficient mechanism for transferring wealth from the <strong className="text-white font-semibold">impatient to the patient</strong>.
                            </p>
                            <p>
                                This platform was built to strip away the noise of "get rich quick" schemes and focus on the <strong className="text-white font-semibold">raw mechanics of price delivery</strong>. We believe trading mastery comes from understanding <strong className="text-white font-semibold">why</strong> price moves, not just guessing where it will go.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <PhilosophyCard
                                icon={Shield}
                                title="Capital Preservation"
                                desc="Risk management is the only holy grail."
                            />
                            <PhilosophyCard
                                icon={Lock}
                                title="Institutional Mindset"
                                desc="Think like a bank, trade like a pro."
                            />
                            <PhilosophyCard
                                icon={BarChart}
                                title="Data Driven"
                                desc="Backtested strategies, not gut feelings."
                            />
                            <PhilosophyCard
                                icon={BookOpen}
                                title="Continuous Learning"
                                desc="The market evolves. So must you."
                            />
                        </div>
                    </div>

                    {/* Visual Side - Abstract/Trust */}
                    <div className="flex-1 w-full relative order-1 lg:order-2">
                        <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-sm p-8 flex flex-col justify-between shadow-2xl shadow-black/50 border border-white/10">

                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">System Status</div>
                                    <div className="text-white font-bold text-xl">Operational</div>
                                </div>
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            </div>

                            {/* Center Graphic */}
                            <div className="flex-1 flex items-center justify-center py-8">
                                <div className="relative w-48 h-48">
                                    {/* Rings */}
                                    <div className="absolute inset-0 rounded-full border border-white/5" />
                                    <div className="absolute inset-4 rounded-full border border-white/10 border-dashed animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-8 rounded-full border border-copper-500/20" />

                                    {/* Core */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-white mb-1">100%</div>
                                            <div className="text-[10px] text-copper-500 uppercase tracking-widest font-bold">Transparency</div>
                                        </div>
                                    </div>

                                    {/* Orbiting Elements */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-slate-950 px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400">Logic</div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 bg-slate-950 px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400">Patience</div>
                                    <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 bg-slate-950 px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400">Discipline</div>
                                    <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 bg-slate-950 px-2 py-1 rounded border border-white/10 text-[10px] text-slate-400">Risk</div>
                                </div>
                            </div>

                            {/* Footer List */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-copper-500" />
                                    <span>No hidden signals or groups</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-copper-500" />
                                    <span>Pure educational content</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-copper-500" />
                                    <span>Institutional methodology</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Background Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-copper-500/5 rounded-full blur-3xl opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhilosophyCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group border border-white/5 hover:border-white/10">
            <div className="p-3 bg-slate-900 rounded-xl text-slate-400 shadow-sm group-hover:bg-copper-500 group-hover:text-white transition-colors duration-300 border border-white/5">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-copper-400 transition-colors">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
