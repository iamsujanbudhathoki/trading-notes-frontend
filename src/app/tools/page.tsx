import Link from "next/link";
import { Calculator, Calendar, BookOpen, TrendingUp, PieChart, Bell, Target, BarChart3, Briefcase, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Trading Tools | Position Size Calculator & More",
    description: "Essential trading calculators and utilities: Position Size, Risk/Reward, Pip Value, Economic Calendar, and more. Free tools for traders.",
    keywords: ["position size calculator", "trading tools", "risk calculator", "pip calculator", "forex tools", "trading utilities"],
    openGraph: {
        title: "Free Trading Tools | TRADENOTES",
        description: "Professional trading calculators and utilities to enhance your trading edge.",
        type: "website",
    },
};

const tools = [
    { title: "Position Size Calculator", icon: Calculator, href: "/tools/position-size-calculator" },
    { title: "Trading Journal", icon: BookOpen, href: "/tools/trading-journal" },
    { title: "Economic Calendar", icon: Calendar, href: "/tools/economic-calendar" },
    { title: "Risk of Ruin Calculator", icon: TrendingUp, href: "/tools/risk-calculator" },
    { title: "Profit/Loss Calculator", icon: PieChart, href: "/tools/profit-loss-calculator" },
    { title: "Pip Calculator", icon: Target, href: "/tools/pip-calculator" },
    { title: "Trade Alerts", icon: Bell, href: "/tools/trade-alerts" },
    { title: "Performance Analytics", icon: BarChart3, href: "/tools/performance-analytics" },
    { title: "Portfolio Tracker", icon: Briefcase, href: "/tools/portfolio-tracker" },
    { title: "Backtesting Tool", icon: Zap, href: "/tools/backtesting" },
];

export default function ToolsPage() {
    return (
        <div className="w-full min-h-screen bg-cream">
            {/* Header */}
            <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/20 to-transparent blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-6">
                        Trading <span className="text-copper-400">Tools</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Essential calculators and utilities to enhance your trading edge. Precision matters.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 -mt-12 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {tools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group bg-white p-6 rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 hover:shadow-xl hover:border-copper-500/30 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 rounded-xl bg-slate-50 group-hover:bg-copper-500 flex items-center justify-center transition-all duration-300 shadow-sm">
                                    <Icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="font-serif font-bold text-sm text-slate-900 group-hover:text-copper-600 transition-colors duration-300">
                                    {tool.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
