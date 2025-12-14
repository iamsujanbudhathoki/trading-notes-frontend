import { Mail, MessageCircle, Twitter, Send, HelpCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/20 to-transparent blur-3xl" />

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-serif font-bold text-4xl md:text-6xl mb-6 leading-tight">
                        Get in <span className="text-copper-400">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Have questions, suggestions, or feedback? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 -mt-12 relative z-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Email Card */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-copper-50 flex items-center justify-center text-copper-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h2 className="font-serif font-bold text-2xl text-slate-900 mb-4">Email Us</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            For general inquiries, feedback, or partnership opportunities:
                        </p>
                        <a
                            href="mailto:hello@tradingacademy.com"
                            className="text-copper-600 font-bold hover:text-copper-700 transition-colors inline-flex items-center gap-2"
                        >
                            hello@tradingacademy.com
                            <span className="block w-full h-px bg-copper-600/30 group-hover:bg-copper-600 transition-colors" />
                        </a>
                    </div>

                    {/* Community Card */}
                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h2 className="font-serif font-bold text-2xl text-slate-900 mb-4">Join Our Community</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Connect with other traders and get real-time updates:
                        </p>
                        <div className="space-y-4">
                            <a
                                href="https://discord.gg/trading"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-600 hover:text-copper-600 font-medium transition-colors p-3 rounded-lg hover:bg-slate-50"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Discord Community
                            </a>
                            <a
                                href="https://twitter.com/tradingacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-600 hover:text-copper-600 font-medium transition-colors p-3 rounded-lg hover:bg-slate-50"
                            >
                                <Twitter className="w-5 h-5" />
                                Twitter/X
                            </a>
                            <a
                                href="https://t.me/tradingacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-600 hover:text-copper-600 font-medium transition-colors p-3 rounded-lg hover:bg-slate-50"
                            >
                                <Send className="w-5 h-5" />
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12 bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-900/5">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600">
                            <HelpCircle className="w-6 h-6" />
                        </div>
                        <h2 className="font-serif font-bold text-2xl text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-8">
                        <div className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">Is everything really free?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Yes! All our educational content is completely free and will remain so. We believe quality trading education should be accessible to everyone.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">Can I suggest new content?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Absolutely! We're always looking to improve and expand our content. Email us your suggestions.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">Do you offer one-on-one coaching?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Currently, we focus on providing comprehensive self-paced learning materials. However, our community channels are great places to ask questions and learn from others.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
