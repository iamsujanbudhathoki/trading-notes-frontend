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
        <div className="w-full min-h-screen bg-slate-50">
            {/* Header */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">
                        Trading Tools
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Essential calculators and utilities to enhance your trading edge.
                    </p>
                </div>
            </section>

            {/* Tools Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {tools.map((tool) => {
                        const Icon = tool.icon;
                        return (
                            <Link
                                key={tool.title}
                                href={tool.href}
                                className="group bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-[#B85C38] transition-all duration-300 flex flex-col items-center text-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-lg bg-slate-50 group-hover:bg-[#B85C38]/10 flex items-center justify-center transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-[#B85C38] transition-colors duration-300" />
                                </div>
                                <span className="font-sans font-bold text-sm text-slate-900 group-hover:text-[#B85C38] transition-colors duration-300">
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
