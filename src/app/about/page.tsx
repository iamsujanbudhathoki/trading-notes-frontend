import { Metadata } from "next";

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
        <div className="w-full min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                    About TRADENOTES
                </h1>

                <div className="space-y-8">
                    <p className="text-base text-slate-600 mb-8 border-l-4 border-[#B85C38] pl-5">
                        We're on a mission to make technical analysis education accessible, structured, and modern.
                    </p>

                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Our Mission</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            To teach modern technical analysis methodologies (ICT/SMC, Price Action, Indicators, and more) through structured curricula and independent articles. We believe in quality education over quantity, focusing on deep understanding rather than surface-level content.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">What Makes Us Different</h2>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Methodology-Focused:</strong> We teach technical analysis methods, not just "trade Forex" or "trade Crypto"</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Structured Learning:</strong> Playlist-style curricula with progressive difficulty</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Modern Approach:</strong> ICT/SMC, contemporary price action, and cutting-edge TA</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Free Forever:</strong> Quality education shouldn't be behind a paywall</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Our Values</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-serif font-semibold text-sm text-slate-900 mb-1">Education First</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">We prioritize teaching over selling. No upsells, no hidden courses, just pure education.</p>
                            </div>
                            <div>
                                <h3 className="font-serif font-semibold text-sm text-slate-900 mb-1">Transparency</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">Clear, honest content. We don't promise overnight riches or guaranteed profits.</p>
                            </div>
                            <div>
                                <h3 className="font-serif font-semibold text-sm text-slate-900 mb-1">Community</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">Building a community of serious traders who want to learn and grow together.</p>
                            </div>
                            <div>
                                <h3 className="font-serif font-semibold text-sm text-slate-900 mb-1">Quality</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">Comprehensive, well-structured content that respects your time and intelligence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
