import Link from "next/link";
import { Users, MessageSquare, Globe, ArrowRight, Shield, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trading Communities | Join TradingView, Reddit & Discord Groups",
    description: "Connect with fellow traders on TradingView, Reddit r/Forex, BabyPips, and Discord. Share strategies, learn from experienced traders, and grow together.",
    keywords: ["trading community", "TradingView", "Reddit forex", "BabyPips", "Discord trading", "forex forum", "trading chat"],
    openGraph: {
        title: "Trading Communities | TRADENOTES",
        description: "Join the best trading communities and accelerate your learning.",
        type: "website",
    },
};

const communities = [
    {
        name: "TradingView Community",
        description: "The largest social network for traders and investors. Share ideas, scripts, and strategies.",
        members: "50M+",
        platform: "Web & App",
        type: "Analysis & Social",
        link: "https://www.tradingview.com/community/",
        icon: Globe,
        color: "#2962FF"
    },
    {
        name: "Reddit r/Forex",
        description: "A community for discussing the foreign exchange market, news, and trading strategies.",
        members: "350k+",
        platform: "Reddit",
        type: "Discussion",
        link: "https://www.reddit.com/r/Forex/",
        icon: MessageSquare,
        color: "#FF4500"
    },
    {
        name: "BabyPips Forums",
        description: "The best place for beginners to ask questions and learn from experienced forex traders.",
        members: "1M+",
        platform: "Web",
        type: "Education & Support",
        link: "https://forums.babypips.com/",
        icon: BookOpen,
        color: "#4CAF50"
    },
    {
        name: "Discord Trading Hubs",
        description: "Join verified Discord servers for real-time voice chat and trade signals.",
        members: "Various",
        platform: "Discord",
        type: "Live Chat",
        link: "https://discord.com/servers/tags/trading",
        icon: Users,
        color: "#5865F2"
    }
];

export default function CommunityPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            {/* Hero */}
            <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/20 to-transparent blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-6">
                        Trading <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-copper-600">Communities</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Connect with fellow traders, share ideas, and accelerate your learning curve by joining these top communities.
                    </p>
                </div>
            </section>

            {/* Communities Grid */}
            <section className="max-w-5xl mx-auto px-6 py-16 -mt-12 relative z-20">
                <div className="grid gap-6">
                    {communities.map((community) => {
                        const Icon = community.icon;
                        return (
                            <a
                                key={community.name}
                                href={community.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl p-8 shadow-lg shadow-slate-900/5 border border-slate-100 hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${community.color}15` }}>
                                    <Icon className="w-8 h-8" style={{ color: community.color }} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="font-serif font-bold text-2xl text-slate-900 group-hover:text-copper-600 transition-colors">
                                            {community.name}
                                        </h2>
                                        <span className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-100">
                                            {community.platform}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        {community.description}
                                    </p>
                                    <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-copper-500" />
                                            {community.members} Members
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-copper-500" />
                                            {community.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-copper-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all self-start md:self-center mt-4 md:mt-0">
                                    Join Now
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
