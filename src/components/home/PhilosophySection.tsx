import { Shield, Lock, BarChart, BookOpen } from "lucide-react";

export function PhilosophySection() {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content Side */}
                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B85C38]/10 text-[#B85C38] font-bold text-xs uppercase tracking-wider mb-6">
                            Our Philosophy
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Logic Over Luck. <br />
                            Process Over Profits.
                        </h2>
                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                The financial markets are not a casino. They are a highly efficient mechanism for transferring wealth from the <strong className="text-slate-900">impatient to the patient</strong>.
                            </p>
                            <p>
                                This platform was built to strip away the noise of "get rich quick" schemes and focus on the <strong className="text-slate-900">raw mechanics of price delivery</strong>. We believe trading mastery comes from understanding <strong className="text-slate-900">why</strong> price moves, not just guessing where it will go.
                            </p>
                            <p>
                                Whether you're here to learn Smart Money Concepts, master risk management, or refine your edge—you're in the right place. <strong className="text-[#B85C38]">No signals. No bots. Just pure education.</strong>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl border border-slate-700">
                            {/* Abstract Chart UI */}
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center justify-between text-slate-400 text-xs sm:text-sm">
                                    <span>Market Structure Shift</span>
                                    <span className="text-green-400 font-mono font-bold">CONFIRMED</span>
                                </div>
                                <div className="h-24 sm:h-32 w-full bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700" />
                                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-dashed border-[#B85C38] rounded opacity-50" />
                                    {/* Animated pulse */}
                                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#B85C38] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                                    <div className="h-2 w-1/2 bg-slate-800 rounded-full" />
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8">
                                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
                                <div className="text-slate-400 text-sm sm:text-base">Transparency & Education</div>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="hidden lg:block absolute -z-10 top-10 -right-10 w-full h-full bg-slate-100 rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhilosophyCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 group">
            <div className="p-2 bg-slate-100 rounded-lg text-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-white transition-colors duration-300">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
