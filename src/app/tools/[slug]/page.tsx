import Link from "next/link";
import { ArrowLeft, Calculator, Calendar, BookOpen, TrendingUp, PieChart, Bell, Target, BarChart3, Briefcase, Zap, Clock, Percent, Activity } from "lucide-react";
import { notFound } from "next/navigation";
import { PositionSizeCalculator } from "@/components/tools/PositionSizeCalculator";

const toolsData: Record<string, any> = {
    "position-size-calculator": {
        title: "Position Size Calculator",
        icon: Calculator,
        description: "Calculate the perfect lot size for your risk management. Essential for every trade.",
        features: ["Multiple currency pairs", "Account currency selection", "Risk percentage or fixed amount"]
    },
    "trading-journal": {
        title: "Trading Journal",
        icon: BookOpen,
        description: "Track your trades, analyze your performance, and identify your strengths and weaknesses.",
        features: ["Trade logging", "Performance analytics", "Strategy tagging"]
    },
    "economic-calendar": {
        title: "Economic Calendar",
        icon: Calendar,
        description: "Stay ahead of high-impact news events. Never get caught off guard by NFP or FOMC again.",
        features: ["Real-time updates", "Impact filtering", "Custom alerts"]
    },
    "risk-calculator": {
        title: "Risk of Ruin Calculator",
        icon: TrendingUp,
        description: "Understand the mathematical probability of blowing your account based on your win rate and risk.",
        features: ["Win rate simulation", "Risk per trade analysis", "Drawdown probability"]
    },
    "profit-loss-calculator": {
        title: "Profit/Loss Calculator",
        icon: PieChart,
        description: "Estimate potential profits and losses for your trades before you enter them.",
        features: ["Pip value calculation", "Swap fees inclusion", "Commission estimation"]
    },
    "pip-calculator": {
        title: "Pip Calculator",
        icon: Target,
        description: "Calculate the value of a pip for various currency pairs and lot sizes.",
        features: ["Standard, mini, micro lots", "Real-time exchange rates", "Multi-currency support"]
    },
    "trade-alerts": {
        title: "Trade Alerts",
        icon: Bell,
        description: "Set up custom alerts for price levels, indicator signals, and economic events.",
        features: ["Price level alerts", "Indicator crossovers", "Email & push notifications"]
    },
    "performance-analytics": {
        title: "Performance Analytics",
        icon: BarChart3,
        description: "Deep dive into your trading history to find patterns and improve your edge.",
        features: ["Win/loss ratio", "Profit factor", "Equity curve analysis"]
    },
    "portfolio-tracker": {
        title: "Portfolio Tracker",
        icon: Briefcase,
        description: "Manage your diverse investment portfolio across forex, crypto, and stocks.",
        features: ["Asset allocation", "Real-time valuation", "Performance attribution"]
    },
    "backtesting": {
        title: "Backtesting Tool",
        icon: Zap,
        description: "Test your strategies against historical data to verify their profitability.",
        features: ["Historical data replay", "Strategy optimization", "Detailed reports"]
    },
    "session-hours": {
        title: "FX Session Hours",
        icon: Clock,
        description: "See which major markets are open right now and when sessions overlap.",
        features: ["Market open/close times", "Session overlaps", "Countdown timers"]
    },
    "interest-rate": {
        title: "Interest Rate Calculator",
        icon: Percent,
        description: "Calculate carry trade potential and swap costs based on central bank rates.",
        features: ["Central bank rates", "Swap calculation", "Carry trade analysis"]
    },
    "heatmap": {
        title: "FX Heatmap",
        icon: Activity,
        description: "Visualize currency strength and weakness in real-time across the market.",
        features: ["Currency strength meter", "Volatility heatmap", "Correlation matrix"]
    }
};


export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const tool = toolsData[slug];

    if (!tool) {
        notFound();
    }

    const Icon = tool.icon;

    return (
        <div className="w-full min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 py-20">
            <div className="max-w-4xl w-full">
                {/* Back Link */}
                <Link
                    href="/tools"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Tools
                </Link>

                {/* Tool Header */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-[#B85C38]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-[#B85C38]" />
                    </div>
                    <h1 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        {tool.title}
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {tool.description}
                    </p>
                </div>

                {/* Tool Content */}
                {slug === "position-size-calculator" ? (
                    <PositionSizeCalculator />
                ) : (
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 text-center">
                        <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left max-w-lg mx-auto">
                            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wide">Key Features</h3>
                            <ul className="space-y-3">
                                {tool.features.map((feature: string) => (
                                    <li key={feature} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#B85C38]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full max-w-md py-4 bg-slate-200 text-slate-500 font-bold rounded-xl cursor-not-allowed">
                            Coming Soon
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
