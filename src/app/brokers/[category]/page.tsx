import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, Shield, TrendingUp, DollarSign } from "lucide-react";
import { getBrokersByType } from "@/lib/brokers";
import { notFound } from "next/navigation";

// Map category slugs to display titles
const categoryTitles: Record<string, string> = {
    'forex': 'Top Forex Brokers',
    'crypto': 'Best Crypto Exchanges',
    'prop-firms': 'Best Prop Trading Firms',
    'binary-options': 'Binary Options Brokers',
    'stocks': 'Top Stock Brokers'
};

const categoryDescriptions: Record<string, string> = {
    'forex': 'Compare the best forex brokers with low spreads, fast execution, and top-tier regulation.',
    'crypto': 'Find the most secure and feature-rich cryptocurrency exchanges for trading Bitcoin and altcoins.',
    'prop-firms': 'Get funded by top proprietary trading firms. Compare challenges, profit splits, and rules.',
    'binary-options': 'Discover reliable binary options platforms for short-term trading opportunities.',
    'stocks': 'Invest in global stock markets with the best brokers for low commissions and powerful tools.'
};

export default async function BrokerCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = await params;
    const { category } = resolvedParams;
    const brokers = getBrokersByType(category);
    const title = categoryTitles[category];
    const description = categoryDescriptions[category];

    if (!title) {
        notFound();
    }

    return (
        <div className="w-full min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        {description}
                    </p>
                </div>
            </section>

            {/* Brokers List */}
            <section className="max-w-5xl mx-auto px-6 py-16 -mt-10 relative z-10">
                <div className="space-y-6">
                    {brokers.length > 0 ? (
                        brokers.map((broker, index) => (
                            <div key={broker.slug} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300">
                                <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                                    {/* Logo & Rating */}
                                    <div className="flex items-center gap-4 w-full lg:w-auto lg:min-w-[200px]">
                                        <div className="relative w-32 h-12 flex-shrink-0">
                                            <Image
                                                src={broker.logo}
                                                alt={broker.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-bold text-sm text-slate-900">{broker.rating}</span>
                                        </div>
                                    </div>

                                    {/* Key Specs */}
                                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Min Deposit</div>
                                            <div className="font-semibold text-slate-900 text-sm">{broker.minDeposit}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Leverage</div>
                                            <div className="font-semibold text-slate-900 text-sm">{broker.leverage}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Spreads</div>
                                            <div className="font-semibold text-slate-900 text-sm truncate">{broker.spreads}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Regulation</div>
                                            <div className="font-semibold text-slate-900 text-sm truncate">{broker.regulation[0]}</div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="w-full lg:w-auto flex-shrink-0">
                                        <a
                                            href={broker.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full lg:w-auto px-6 py-2.5 bg-[#B85C38] hover:bg-[#a04e2f] text-white font-bold text-sm rounded-lg transition-colors"
                                        >
                                            Visit Site
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No brokers found</h3>
                            <p className="text-slate-500">We are currently reviewing brokers for this category. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
