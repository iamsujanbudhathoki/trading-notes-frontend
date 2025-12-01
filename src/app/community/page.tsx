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
        <div className="w-full min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">
                        Trading Communities
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Connect with fellow traders, share ideas, and accelerate your learning curve by joining these top communities.
                    </p>
                </div>
            </section>

            {/* Communities Grid */}
            <section className="max-w-5xl mx-auto px-6 py-16 -mt-10 relative z-10">
                <div className="grid gap-6">
                    {communities.map((community) => {
                        const Icon = community.icon;
                        return (
                            <a
                                key={community.name}
                                href={community.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6"
                            >
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${community.color}15` }}>
                                    <Icon className="w-8 h-8" style={{ color: community.color }} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="font-sans font-bold text-xl text-slate-900 group-hover:text-[#B85C38] transition-colors">
                                            {community.name}
                                        </h2>
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                                            {community.platform}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 mb-3">
                                        {community.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {community.members} Members
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Shield className="w-4 h-4" />
                                            {community.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[#B85C38] font-bold text-sm group-hover:gap-3 transition-all">
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
