import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Risk Disclaimer",
    description: "Important risk warnings and disclaimers about trading financial markets and using TRADENOTES educational content.",
};

export default function DisclaimerPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                <h1 className="font-sans font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                    Risk Disclaimer
                </h1>

                <p className="text-sm text-slate-500 mb-12">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-8">
                    <p className="text-red-900 font-bold text-lg mb-2">⚠️ Important Risk Warning</p>
                    <p className="text-red-800 leading-relaxed">
                        Trading financial markets involves substantial risk of loss and is not suitable for all investors. You could lose some or all of your invested capital. Please read this entire disclaimer carefully before using any information from this website.
                    </p>
                </div>

                <div className="space-y-8">
                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Not Financial Advice</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            The content provided on TRADENOTES is for educational and informational purposes only and should not be construed as financial, investment, trading, or any other type of advice. I am not a licensed financial advisor, broker, or investment professional. All content represents my personal opinions and educational research only.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Trading Risks</h2>
                        <p className="text-sm text-slate-700 leading-relaxed mb-3">
                            Trading in financial markets carries a high level of risk and may not be suitable for all investors. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Leverage Risk:</strong> Trading with leverage can amplify both gains and losses</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Market Risk:</strong> Market conditions can change rapidly and unpredictably</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Volatility Risk:</strong> Price movements can be extreme and sudden</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span><strong className="text-slate-900">Liquidity Risk:</strong> You may not be able to exit positions when desired</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">No Guaranteed Results</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Past performance is not indicative of future results. Any trading results, statistics, or performance metrics shown on this website are for educational purposes only and do not guarantee that you will achieve similar results. Individual results will vary based on many factors including market conditions, capital, risk management, and trading skill.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Hypothetical Performance</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            Any hypothetical performance results or backtested data have inherent limitations. Unlike actual performance records, simulated results do not represent actual trading and may not reflect the impact of market factors such as liquidity and slippage. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Personal Responsibility</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            You are solely responsible for your own trading and investment decisions. Before making any trading decisions, you should:
                        </p>
                        <ul className="space-y-2 text-sm text-slate-700 mt-3">
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Seek advice from a licensed financial advisor</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Conduct your own research and due diligence</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Only trade with capital you can afford to lose</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#B85C38] font-bold mt-1">•</span>
                                <span>Understand the risks involved in your chosen markets</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Affiliate Relationships</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            TRADENOTES may contain affiliate links to brokers, tools, or services. If you click on these links and make a purchase or sign up, I may receive a commission at no additional cost to you. This does not influence my educational content or recommendations, which are based on my honest assessment and research.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Regulatory Disclaimer</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            TRADENOTES is not registered with any financial regulatory authority. The content provided does not constitute an offer to sell or a solicitation to buy any securities or financial instruments. Trading regulations vary by jurisdiction, and it is your responsibility to ensure compliance with applicable laws in your country.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Accuracy of Information</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            While I strive to provide accurate and up-to-date information, I make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information, products, services, or related graphics contained on the website. Any reliance you place on such information is strictly at your own risk.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl p-6 border border-slate-200">
                        <h2 className="font-serif font-bold text-lg text-slate-900 mb-3">Acknowledgment</h2>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            By using TRADENOTES, you acknowledge that you have read, understood, and agree to this Risk Disclaimer. You accept full responsibility for any trading or investment decisions you make and agree that TRADENOTES and its operators will not be held liable for any losses or damages resulting from your use of the information provided.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
