import Link from "next/link";

const brokerCategories = [
    {
        title: "Forex Brokers",
        description: "Compare spreads, leverage, and platforms",
        brokers: ["IC Markets", "Pepperstone", "OANDA"],
        href: "/brokers/forex"
    },
    {
        title: "Crypto Exchanges",
        description: "Find the best platforms for crypto trading",
        brokers: ["Binance", "Coinbase", "Kraken"],
        href: "/brokers/crypto"
    },
    {
        title: "Prop Firms",
        description: "Get funded and trade with firm capital",
        brokers: ["FTMO", "The5ers", "MyForexFunds"],
        href: "/brokers/prop-firms"
    }
];

export function BrokerGuidesSection() {
    return (
        <section className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-2">
                        Broker Reviews
                    </h2>
                    <p className="text-slate-600 text-lg font-sans">
                        Find the right broker for your trading style
                    </p>
                </div>
                <Link
                    href="/brokers"
                    className="hidden md:flex text-[#B85C38] font-sans font-semibold hover:gap-2 transition-all duration-300 items-center"
                >
                    View all →
                </Link>
            </div>

            {/* Featured Guide */}
            <Link href="/brokers/how-to-choose" className="group block mb-10">
                <div className="p-8 md:p-10 bg-white border-2 border-[#B85C38] rounded-xl hover:shadow-soft-lg transition-all duration-300">
                    <span className="text-[#B85C38] font-sans font-semibold text-sm uppercase tracking-wide mb-3 block">
                        ⭐ Featured Guide
                    </span>
                    <h3 className="font-sans font-bold text-2xl md:text-3xl text-slate-900 mb-3 group-hover:text-[#B85C38] transition-colors duration-300">
                        How to Choose the Right Broker
                    </h3>
                    <p className="text-slate-600 text-lg mb-4">
                        Complete comparison guide covering fees, platforms, regulation, and features
                    </p>
                    <div className="text-[#B85C38] font-sans font-semibold flex items-center group-hover:gap-2 transition-all duration-300">
                        Read complete guide →
                    </div>
                </div>
            </Link>

            {/* Broker Categories */}
            <div className="grid md:grid-cols-3 gap-6">
                {brokerCategories.map((category) => (
                    <Link key={category.title} href={category.href} className="group">
                        <div className="p-6 bg-white border border-cream-dark rounded-xl hover:shadow-soft-lg transition-all duration-300">
                            <h3 className="font-sans font-bold text-xl text-slate-900 mb-2 group-hover:text-[#B85C38] transition-colors duration-300">
                                {category.title}
                            </h3>
                            <p className="text-slate-600 text-sm mb-4">
                                {category.description}
                            </p>
                            <div className="space-y-2 mb-4">
                                {category.brokers.map((broker) => (
                                    <div key={broker} className="text-slate-500 text-sm flex items-center gap-2">
                                        <span className="w-1 h-1 bg-[#B85C38] rounded-full"></span>
                                        {broker}
                                    </div>
                                ))}
                            </div>
                            <div className="text-[#B85C38] font-sans font-semibold text-sm flex items-center group-hover:gap-2 transition-all duration-300">
                                View reviews →
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link
                    href="/brokers"
                    className="text-[#B85C38] font-sans font-semibold hover:gap-2 transition-all duration-300 inline-flex items-center"
                >
                    View all broker reviews →
                </Link>
            </div>
        </section>
    );
}
