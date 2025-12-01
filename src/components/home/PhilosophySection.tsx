import { Shield, Lock, BarChart, BookOpen } from "lucide-react";

export function PhilosophySection() {
    return (
        <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Content Side */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B85C38]/10 text-[#B85C38] font-bold text-xs uppercase tracking-wider mb-6">
                            Our Philosophy
                        </div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-6">
                            Logic Over Luck. <br />
                            Process Over Profits.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                The financial markets are not a casino. They are a highly efficient mechanism for transferring wealth from the impatient to the patient.
                            </p>
                            <p>
                                This platform was built to strip away the noise of "get rich quick" schemes and focus on the raw mechanics of price delivery. We believe that true trading mastery comes from understanding <strong>why</strong> price moves, not just guessing where it will go.
                            </p>
                            <p>
                                Whether you are here to learn Smart Money Concepts, master risk management, or simply refine your edge—you are in the right place. No signals. No bots. Just pure education.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
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
                        <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden bg-slate-900 p-8 flex flex-col justify-between shadow-2xl">
                            {/* Abstract Chart UI */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-slate-400 text-sm">
                                    <span>Market Structure Shift</span>
                                    <span className="text-green-400 font-mono">CONFIRMED</span>
                                </div>
                                <div className="h-32 w-full bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-lg relative overflow-hidden">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700" />
                                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-dashed border-[#B85C38] rounded opacity-50" />
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-slate-800 rounded-full" />
                                    <div className="h-2 w-1/2 bg-slate-800 rounded-full" />
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="text-4xl font-bold text-white mb-2">100%</div>
                                <div className="text-slate-400">Transparency & Education</div>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-slate-100 rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PhilosophyCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="p-2 bg-slate-50 rounded-lg text-[#B85C38]">
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
            </div>
        </div>
    );
}
