import { Metadata } from "next";
import { BookOpen, Target, Zap, Users, ShieldCheck, Award } from "lucide-react";
import { PhilosophySection } from "@/components/home/PhilosophySection";

export const metadata: Metadata = {
    title: "About Us | Our Mission & Values",
    description: "Learn about TRADENOTES' mission to make technical analysis education accessible, structured, and modern. Free, quality trading education focused on ICT/SMC, Price Action, and more.",
    openGraph: {
        title: "About TRADENOTES | Our Mission & Values",
        description: "Making technical analysis education accessible, structured, and modern. Free forever.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/20 to-transparent blur-3xl" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>Our Story</span>
                    </div>
                    <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 leading-tight">
                        Democratizing <span className="text-emerald-400">Institutional</span> Knowledge
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        We're on a mission to make professional technical analysis education accessible, structured, and modern. No gatekeeping, just pure value.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 -mt-12 relative z-20">
                <div className="grid gap-8">
                    {/* Mission Card */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif font-bold text-2xl text-slate-900">Our Mission</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            To teach modern technical analysis methodologies (ICT/SMC, Price Action, Indicators, and more) through structured curricula and independent articles. We believe in quality education over quantity, focusing on deep understanding rather than surface-level content.
                        </p>
                    </div>

                    {/* Differentiators */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif font-bold text-2xl text-slate-900">What Makes Us Different</h2>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-6">
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 font-serif mb-1">Methodology-Focused</strong>
                                    <span className="text-slate-600 text-sm leading-relaxed">We teach technical analysis methods, not just "trade Forex" or "trade Crypto".</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 font-serif mb-1">Structured Learning</strong>
                                    <span className="text-slate-600 text-sm leading-relaxed">Playlist-style curricula with progressive difficulty for systematic growth.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 font-serif mb-1">Modern Approach</strong>
                                    <span className="text-slate-600 text-sm leading-relaxed">ICT/SMC, contemporary price action, and cutting-edge TA concepts.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                <div>
                                    <strong className="block text-slate-900 font-serif mb-1">Free Forever</strong>
                                    <span className="text-slate-600 text-sm leading-relaxed">Quality education shouldn't be behind a paywall. Knowledge is for everyone.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Values */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                                <Award className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif font-bold text-2xl text-slate-900">Our Values</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <BookOpen className="w-5 h-5 text-emerald-500" />
                                    <h3 className="font-serif font-bold text-lg text-slate-900">Education First</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">We prioritize teaching over selling. No upsells, no hidden courses, just pure education.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    <h3 className="font-serif font-bold text-lg text-slate-900">Transparency</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">Clear, honest content. We don't promise overnight riches or guaranteed profits.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <Users className="w-5 h-5 text-emerald-500" />
                                    <h3 className="font-serif font-bold text-lg text-slate-900">Community</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">Building a community of serious traders who want to learn and grow together.</p>
                            </div>
                            <div className="group">
                                <div className="flex items-center gap-3 mb-3">
                                    <Award className="w-5 h-5 text-emerald-500" />
                                    <h3 className="font-serif font-bold text-lg text-slate-900">Quality</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed text-sm">Comprehensive, well-structured content that respects your time and intelligence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PhilosophySection />
        </div>
    );
}
