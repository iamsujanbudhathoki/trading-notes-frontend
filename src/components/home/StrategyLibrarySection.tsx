import Link from "next/link";

const popularStrategies = [
    { title: "Order Block + Fair Value Gap Strategy", href: "/strategies/order-block-fvg" },
    { title: "Liquidity Grab Reversal", href: "/strategies/liquidity-grab" },
    { title: "Supply & Demand Zones", href: "/strategies/supply-demand" },
    { title: "Trend Following with Smart Money", href: "/strategies/trend-following-smc" },
    { title: "Break & Retest Strategy", href: "/strategies/break-retest" }
];

export function StrategyLibrarySection() {
    return (
        <section className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900">
                    Trading Strategies
                </h2>
                <Link
                    href="/strategies"
                    className="text-[#B85C38] font-sans font-semibold hover:gap-2 transition-all duration-300 flex items-center"
                >
                    View all strategies →
                </Link>
            </div>

            <div className="space-y-4">
                {popularStrategies.map((strategy) => (
                    <Link
                        key={strategy.title}
                        href={strategy.href}
                        className="flex items-center gap-3 text-slate-900 hover:text-[#B85C38] transition-colors duration-300 group"
                    >
                        <span className="text-[#B85C38] text-xl">→</span>
                        <span className="font-sans text-lg">{strategy.title}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
