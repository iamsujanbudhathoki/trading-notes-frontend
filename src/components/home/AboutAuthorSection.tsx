import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutAuthorSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Side */}
                    <div className="flex-1 w-full relative">
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                            <Image
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                                alt="Trading Mentor"
                                fill
                                className="object-cover"
                            />
                            {/* Signature Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
                                <p className="text-white font-serif italic text-2xl">"Trade what you see, not what you think."</p>
                            </div>
                        </div>
                        {/* Decorative Pattern */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-[#B85C38]/5 rounded-3xl" />
                    </div>

                    {/* Content Side */}
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B85C38]/10 text-[#B85C38] font-bold text-xs uppercase tracking-wider mb-6">
                            About The Author
                        </div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-6">
                            Hi, I'm [Name]. I help traders find their edge.
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                I started my trading journey 8 years ago, just like many of you—confused by indicators and losing money to the "market makers."
                            </p>
                            <p>
                                After years of studying institutional order flow and price action, I cracked the code. I realized that trading isn't about predicting the future; it's about reacting to the present with high probability.
                            </p>
                            <p>
                                I built this platform to share everything I've learned, completely free. No paid signals, no "secret" indicators. Just pure, honest trading education.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "8+ Years Experience",
                                "Funded Trader",
                                "Price Action Purist",
                                "10k+ Students Mentored"
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#B85C38] flex-shrink-0" />
                                    <span className="font-medium text-slate-900">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 text-[#B85C38] font-bold hover:gap-3 transition-all"
                        >
                            Read My Full Story
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
