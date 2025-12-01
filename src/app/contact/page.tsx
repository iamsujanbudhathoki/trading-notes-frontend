export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                    Get in Touch
                </h1>

                <p className="text-xl text-slate-600 mb-12">
                    Have questions, suggestions, or feedback? We'd love to hear from you.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-8 border border-cream-dark">
                        <h2 className="font-sans font-bold text-xl text-slate-900 mb-4">Email Us</h2>
                        <p className="text-slate-600 mb-4">
                            For general inquiries, feedback, or partnership opportunities:
                        </p>
                        <a
                            href="mailto:hello@tradingacademy.com"
                            className="text-[#B85C38] font-sans font-semibold hover:underline"
                        >
                            hello@tradingacademy.com
                        </a>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-cream-dark">
                        <h2 className="font-sans font-bold text-xl text-slate-900 mb-4">Join Our Community</h2>
                        <p className="text-slate-600 mb-4">
                            Connect with other traders and get real-time updates:
                        </p>
                        <div className="space-y-3">
                            <a
                                href="https://discord.gg/trading"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#B85C38] font-sans font-semibold hover:underline"
                            >
                                Discord Community →
                            </a>
                            <a
                                href="https://twitter.com/tradingacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#B85C38] font-sans font-semibold hover:underline"
                            >
                                Twitter/X →
                            </a>
                            <a
                                href="https://t.me/tradingacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#B85C38] font-sans font-semibold hover:underline"
                            >
                                Telegram →
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-xl p-8 border border-cream-dark">
                    <h2 className="font-sans font-bold text-xl text-slate-900 mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-sans font-semibold text-slate-900 mb-2">Is everything really free?</h3>
                            <p className="text-slate-600">
                                Yes! All our educational content is completely free and will remain so. We believe quality trading education should be accessible to everyone.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-sans font-semibold text-slate-900 mb-2">Can I suggest new content?</h3>
                            <p className="text-slate-600">
                                Absolutely! We're always looking to improve and expand our content. Email us your suggestions.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-sans font-semibold text-slate-900 mb-2">Do you offer one-on-one coaching?</h3>
                            <p className="text-slate-600">
                                Currently, we focus on providing comprehensive self-paced learning materials. However, our community channels are great places to ask questions and learn from others.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
