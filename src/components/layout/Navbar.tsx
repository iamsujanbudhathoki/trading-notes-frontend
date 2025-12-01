"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu } from "lucide-react";
import { SearchPopup } from "@/components/ui/SearchPopup";
import { ExnessIcon, DiscordIcon } from "@/components/icons";

const navigationMenus = {
    learn: [
        { label: "Smart Money Concepts (ICT)", href: "/learn/smart-money-concepts" },
        { label: "Price Action Trading", href: "/learn/price-action" },
        { label: "Indicator-Based Analysis", href: "/learn/indicators" },
        { label: "Chart Patterns", href: "/learn/chart-patterns" },
        { label: "Volume Analysis", href: "/learn/volume-analysis" },
        { label: "Support & Resistance", href: "/learn/support-resistance" },
        { label: "Candlestick Patterns", href: "/learn/candlestick-patterns" },
        { label: "Market Structure", href: "/learn/market-structure" },
        { label: "All Methodologies", href: "/learn" }
    ],
    tools: [
        { label: "Position Size Calculator", href: "/tools/position-size-calculator" },
        { label: "Risk Calculator", href: "/tools/risk-calculator" },
        { label: "Pip Value Calculator", href: "/tools/pip-calculator" },
        { label: "FX Economic Calendar", href: "/tools/economic-calendar" },
        { label: "FX Session Hours", href: "/tools/session-hours" },
        { label: "Interest Rate Calculator", href: "/tools/interest-rate" },
        { label: "FX Heatmap", href: "/tools/heatmap" },
        { label: "All Tools", href: "/tools" }
    ],
    brokers: [
        { label: "Forex Brokers", href: "/brokers/forex" },
        { label: "Crypto Exchanges", href: "/brokers/crypto" },
        { label: "Prop Firms", href: "/brokers/prop-firms" },
        { label: "Binary Options", href: "/brokers/binary-options" },
        { label: "Stock Brokers", href: "/brokers/stocks" },
        { label: "All Reviews", href: "/brokers" }
    ],

    resources: [
        { label: "Templates & Checklists", href: "/resources/templates" },
        { label: "Recommended Books", href: "/resources/books" },
        { label: "Trading Communities", href: "/community" },
        { label: "Chart Setup Guides", href: "/resources/chart-setup" }
    ]
};

function DropdownMenu({ items }: { items: typeof navigationMenus.learn }) {
    return (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-cream-dark rounded-xl shadow-soft-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
            <div className="flex flex-col">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 hover:bg-[#B85C38] hover:bg-opacity-10 text-slate-900 rounded-lg text-sm transition-all duration-300"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-cream sticky top-0 z-50">
                <div className="border-b border-cream-dark">
                    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="font-sans font-bold text-xl tracking-tight text-slate-900">
                            TRADENOTES
                        </Link>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {/* Learn Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 font-sans font-medium text-slate-900 hover:text-[#B85C38] transition-colors duration-300">
                                    Learn
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <DropdownMenu items={navigationMenus.learn} />
                            </div>

                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 font-sans font-medium text-slate-900 hover:text-[#B85C38] transition-colors duration-300">
                                    Tools
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <DropdownMenu items={navigationMenus.tools} />
                            </div>

                            {/* Brokers Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 font-sans font-medium text-slate-900 hover:text-[#B85C38] transition-colors duration-300">
                                    Brokers
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <DropdownMenu items={navigationMenus.brokers} />
                            </div>



                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 font-sans font-medium text-slate-900 hover:text-[#B85C38] transition-colors duration-300">
                                    Resources
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                <DropdownMenu items={navigationMenus.resources} />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            {/* Exness Icon Link */}
                            <Link
                                href="https://exness.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex items-center gap-2 p-2 hover:bg-cream-dark rounded-lg transition-all duration-300 text-[#B85C38]"
                                aria-label="Visit Exness"
                            >
                                <ExnessIcon className="w-5 h-5" />
                            </Link>

                            {/* Discord Icon Link */}
                            <Link
                                href="https://discord.gg/trading"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex p-2 hover:bg-cream-dark rounded-lg transition-colors duration-300 text-[#5865F2]"
                                aria-label="Join Discord"
                            >
                                <DiscordIcon className="w-5 h-5" />
                            </Link>

                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 hover:bg-cream-dark rounded-lg transition-colors duration-300 text-slate-900"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button className="md:hidden p-2 hover:bg-cream-dark rounded-lg transition-colors duration-300 text-slate-900">
                                <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Rust accent line */}
                <div className="h-0.5 bg-[#B85C38]" />
            </nav>

            {/* Search Popup */}
            <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
