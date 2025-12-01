import { Calculator, TrendingUp, DollarSign, BookOpen, Clock, Percent, Calendar, Activity } from "lucide-react";
import Link from "next/link";

const tools = [
    {
        icon: Calculator,
        title: "Position Size",
        description: "Calculate risk per trade.",
        href: "/tools/position-size-calculator",
        ctaText: "Calculate"
    },
    {
        icon: TrendingUp,
        title: "Risk/Reward",
        description: "Analyze R:R ratio.",
        href: "/tools/risk-calculator",
        ctaText: "Analyze"
    },
    {
        icon: DollarSign,
        title: "Pip Value",
        description: "Value per pip.",
        href: "/tools/pip-calculator",
        ctaText: "Check"
    },
    {
        icon: Calendar,
        title: "Economic Calendar",
        description: "Track market events.",
        href: "/tools/economic-calendar",
        ctaText: "View"
    },
    {
        icon: Clock,
        title: "Market Sessions",
        description: "Global trading hours.",
        href: "/tools/session-hours",
        ctaText: "Check Hours"
    },
    {
        icon: Percent,
        title: "Interest Rates",
        description: "Central bank rates.",
        href: "/tools/interest-rate",
        ctaText: "View Rates"
    },
    {
        icon: Activity,
        title: "Currency Heatmap",
        description: "Live strength meter.",
        href: "/tools/heatmap",
        ctaText: "View Map"
    },
    {
        icon: BookOpen,
        title: "Trade Journal",
        description: "Log your performance.",
        href: "/tools/trading-journal",
        ctaText: "Open Journal"
    }
];

export function TradingToolsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="font-sans font-bold text-3xl text-slate-900 mb-2 tracking-tight">
                        Trader's Toolbox
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        Essential utilities for your daily session
                    </p>
                </div>
                <Link
                    href="/tools"
                    className="hidden md:flex text-sm font-bold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#B85C38] hover:border-[#B85C38] transition-all duration-300"
                >
                    View All Tools
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                        <Link key={tool.title} href={tool.href} className="group">
                            <div className="h-full p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-12 h-12 mb-4 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#B85C38] group-hover:text-white group-hover:border-[#B85C38] transition-all duration-300 shadow-sm">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="font-sans font-bold text-base text-slate-900 mb-1">
                                    {tool.title}
                                </h3>
                                <p className="text-slate-500 text-xs font-medium mb-4 line-clamp-2">
                                    {tool.description}
                                </p>

                                <div className="mt-auto text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#B85C38] transition-colors duration-300">
                                    {tool.ctaText}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
