import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, ArrowRight, TrendingUp, Shield, DollarSign, Globe, Trophy } from "lucide-react";
import { brokers } from "@/lib/brokers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Broker Reviews | Forex, Crypto, Prop Firms & Stock Brokers",
    description: "Unbiased reviews of top trading brokers: Forex (IC Markets, Pepperstone), Crypto (Binance, Bybit), Prop Firms (FTMO), and more. Compare spreads, regulation, and features.",
    keywords: ["broker reviews", "forex brokers", "crypto exchanges", "prop firms", "IC Markets", "Pepperstone", "FTMO", "broker comparison"],
    openGraph: {
        title: "Broker Reviews | TRADENOTES",
        description: "Honest, detailed reviews of top trading brokers across all markets.",
        type: "website",
    },
};

const categories = [
    { title: "Forex Brokers", href: "/brokers/forex", icon: Globe, color: "#3B82F6", desc: "Top FX brokers for spreads & speed" },
    { title: "Crypto Exchanges", href: "/brokers/crypto", icon: TrendingUp, color: "#F59E0B", desc: "Best platforms for digital assets" },
    { title: "Prop Firms", href: "/brokers/prop-firms", icon: Trophy, color: "#10B981", desc: "Get funded up to $200k+" },
    { title: "Binary Options", href: "/brokers/binary-options", icon: DollarSign, color: "#EC4899", desc: "Short-term trading platforms" },
    { title: "Stock Brokers", href: "/brokers/stocks", icon: Shield, color: "#6366F1", desc: "Invest in global equities" },
];

export default function BrokersPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-6xl text-white mb-6">
                        Broker Reviews & Ratings
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Unbiased reviews of the world's top trading platforms. We test spreads, execution speed, withdrawals, and support so you don't have to.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10 mb-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <Link
                                key={cat.title}
                                href={cat.href}
                                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: `${cat.color}15` }}>
                                    <Icon className="w-6 h-6" style={{ color: cat.color }} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-1 group-hover:text-[#B85C38] transition-colors">{cat.title}</h3>
                                <p className="text-xs text-slate-500">{cat.desc}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* All Brokers List */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-sans font-bold text-2xl text-slate-900">All Broker Reviews</h2>
                    <div className="text-sm text-slate-500">{brokers.length} brokers reviewed</div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {brokers.map((broker) => (
                        <div key={broker.slug} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 flex items-center p-4 gap-4">
                            <div className="relative w-20 h-10 flex-shrink-0">
                                <Image
                                    src={broker.logo}
                                    alt={broker.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-slate-900 truncate">{broker.name}</h3>
                                    <div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded text-xs border border-slate-100">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="font-bold text-slate-700">{broker.rating}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-slate-500">
                                    <span>{broker.minDeposit} min</span>
                                    <span>•</span>
                                    <span>{broker.leverage}</span>
                                </div>
                            </div>

                            <a
                                href={broker.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 p-2 bg-slate-50 hover:bg-[#B85C38] text-slate-400 hover:text-white rounded-lg transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
