import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart2 } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="flex-1 text-center lg:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-wider mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#B85C38] animate-pulse" />
                            Professional Trading Curriculum
                        </div>

                        <h1 className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-8">
                            Stop Gambling. <br />
                            <span className="text-[#B85C38]">Start Trading.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                            90% of retail traders fail because they trade patterns without logic. I'm here to teach you the institutional mechanics behind every price move.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="/learn"
                                className="w-full sm:w-auto px-8 py-4 bg-[#B85C38] text-white font-bold rounded-xl hover:bg-[#a04e2f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#B85C38]/20 hover:shadow-xl hover:shadow-[#B85C38]/30 hover:-translate-y-1"
                            >
                                Start My Curriculum
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/articles"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Read Articles
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-400 text-sm font-semibold uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <BarChart2 className="w-5 h-5 text-slate-300" />
                                Price Action
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <div>Smart Money</div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                            <div>Psychology</div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                            <Image
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                                alt="Professional Trading Charts and Analytics"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Floating Stat Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Win Rate</span>
                                        <div className="text-2xl font-bold text-slate-900 mt-1">72.4%</div>
                                    </div>
                                    <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">+15.2%</div>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#B85C38] to-orange-500 w-[72%]" />
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-gradient-to-br from-[#B85C38]/10 to-orange-500/5 rounded-3xl blur-xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-gradient-to-tr from-slate-100 to-slate-50 rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
