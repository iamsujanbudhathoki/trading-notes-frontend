"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { SearchPopup } from "@/components/ui/SearchPopup";
import { DiscordIcon } from "@/components/icons";

const navigationMenus = {
    learn: [
        { label: "Smart Money Concepts", href: "/learn/smart-money-concepts" },
        { label: "Price Action Trading", href: "/learn/price-action" },
        { label: "Chart Patterns", href: "/learn/chart-patterns" },
        { label: "Market Structure", href: "/learn/market-structure" },
        { label: "Support & Resistance", href: "/learn/support-resistance" },
        { label: "Volume Analysis", href: "/learn/volume-analysis" },
        { label: "Candlestick Patterns", href: "/learn/candlestick-patterns" },
        { label: "All Topics", href: "/learn" }
    ],
    tools: [
        { label: "Position Size Calculator", href: "/tools/position-size-calculator" },
        { label: "Risk Calculator", href: "/tools/risk-calculator" },
        { label: "Pip Value Calculator", href: "/tools/pip-calculator" },
        { label: "Economic Calendar", href: "/tools/economic-calendar" },
        { label: "Session Hours", href: "/tools/session-hours" },
        { label: "FX Heatmap", href: "/tools/heatmap" },
        { label: "All Tools", href: "/tools" }
    ],
    resources: [
        { label: "Broker Reviews", href: "/brokers" },
        { label: "Templates & Checklists", href: "/resources/templates" },
        { label: "Recommended Books", href: "/resources/books" },
        { label: "Chart Setup Guides", href: "/resources/chart-setup" },
        { label: "Trading Community", href: "/community" }
    ]
};

function DropdownMenu({ items }: { items: typeof navigationMenus.learn }) {
    return (
        <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white border border-cream-dark rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 p-2 z-50">
            <div className="flex flex-col">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-3 hover:bg-[#B85C38] hover:bg-opacity-10 text-slate-700 hover:text-slate-900 rounded-lg text-sm transition-all duration-200 font-medium whitespace-nowrap"
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                setActiveMobileDropdown(null);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMobileMenuOpen]);

    const toggleMobileDropdown = (menu: string) => {
        setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
    };

    return (
        <>
            {/* Desktop Navbar - Full width */}
            <nav className="sticky top-0 left-0 right-0 z-50 w-full bg-cream shadow-sm border-b border-cream-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-900 hover:text-[#B85C38] transition-colors duration-300 flex-shrink-0"
                        >
                            TRADENOTES
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                            {/* Articles Link */}
                            <Link
                                href="/articles"
                                className="px-3 xl:px-4 py-2 font-sans font-medium text-sm text-slate-700 hover:text-[#B85C38] hover:bg-cream-dark rounded-lg transition-all duration-300"
                            >
                                Articles
                            </Link>

                            {/* Learn Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 font-sans font-medium text-sm text-slate-700 hover:text-[#B85C38] hover:bg-cream-dark rounded-lg transition-all duration-300">
                                    Learn
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <DropdownMenu items={navigationMenus.learn} />
                            </div>

                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 font-sans font-medium text-sm text-slate-700 hover:text-[#B85C38] hover:bg-cream-dark rounded-lg transition-all duration-300">
                                    Tools
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <DropdownMenu items={navigationMenus.tools} />
                            </div>

                            {/* Resources Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-3 xl:px-4 py-2 font-sans font-medium text-sm text-slate-700 hover:text-[#B85C38] hover:bg-cream-dark rounded-lg transition-all duration-300">
                                    Resources
                                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                <DropdownMenu items={navigationMenus.resources} />
                            </div>

                            {/* Community Link */}
                            <Link
                                href="/community"
                                className="px-3 xl:px-4 py-2 font-sans font-medium text-sm text-slate-700 hover:text-[#B85C38] hover:bg-cream-dark rounded-lg transition-all duration-300"
                            >
                                Community
                            </Link>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                            {/* Join Discord CTA - Desktop */}
                            <Link
                                href="https://discord.gg/trading"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden lg:flex items-center gap-2 px-3 xl:px-4 py-2 bg-[#5865F2] text-white font-medium text-sm rounded-lg hover:bg-[#4752C4] transition-all duration-300 shadow-sm hover:shadow-md"
                                aria-label="Join Discord Community"
                            >
                                <DiscordIcon className="w-4 h-4" />
                                <span>Join Discord</span>
                            </Link>

                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 hover:bg-cream-dark rounded-lg transition-all duration-300 text-slate-700 hover:text-slate-900"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2 hover:bg-cream-dark rounded-lg transition-all duration-300 text-slate-700 hover:text-slate-900"
                                aria-label="Toggle menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Accent line */}
                <div className="h-0.5 bg-gradient-to-r from-[#B85C38] via-[#D4A574] to-[#B85C38]" />
            </nav>

            {/* FULL-SCREEN Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden bg-cream">
                    {/* Header with Logo and Close Button */}
                    <div className="sticky top-0 bg-cream border-b border-cream-dark z-10">
                        <div className="flex items-center justify-between h-16 px-6">
                            <Link
                                href="/"
                                onClick={closeMobileMenu}
                                className="font-sans font-bold text-xl tracking-tight text-slate-900"
                            >
                                TRADENOTES
                            </Link>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 hover:bg-cream-dark rounded-lg transition-all duration-300 text-slate-700 hover:text-slate-900"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="h-0.5 bg-gradient-to-r from-[#B85C38] via-[#D4A574] to-[#B85C38]" />
                    </div>

                    {/* Scrollable Menu Content */}
                    <div className="h-[calc(100vh-65px)] overflow-y-auto">
                        <div className="px-6 py-8 space-y-4">
                            {/* Articles Link */}
                            <Link
                                href="/articles"
                                onClick={closeMobileMenu}
                                className="block px-6 py-4 font-sans font-semibold text-xl text-slate-800 hover:text-white hover:bg-[#B85C38] rounded-xl transition-all duration-300"
                            >
                                Articles
                            </Link>

                            {/* Learn Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => toggleMobileDropdown('learn')}
                                    className="w-full flex items-center justify-between px-6 py-4 font-sans font-semibold text-xl text-slate-800 hover:text-white hover:bg-[#B85C38] rounded-xl transition-all duration-300"
                                >
                                    Learn
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === 'learn' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeMobileDropdown === 'learn' && (
                                    <div className="space-y-1 pl-4 py-2 bg-cream-dark/30 rounded-xl">
                                        {navigationMenus.learn.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="block px-6 py-3 text-base text-slate-700 hover:text-[#B85C38] hover:bg-white/50 rounded-lg transition-all duration-200 font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Tools Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => toggleMobileDropdown('tools')}
                                    className="w-full flex items-center justify-between px-6 py-4 font-sans font-semibold text-xl text-slate-800 hover:text-white hover:bg-[#B85C38] rounded-xl transition-all duration-300"
                                >
                                    Tools
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === 'tools' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeMobileDropdown === 'tools' && (
                                    <div className="space-y-1 pl-4 py-2 bg-cream-dark/30 rounded-xl">
                                        {navigationMenus.tools.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="block px-6 py-3 text-base text-slate-700 hover:text-[#B85C38] hover:bg-white/50 rounded-lg transition-all duration-200 font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Resources Dropdown */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => toggleMobileDropdown('resources')}
                                    className="w-full flex items-center justify-between px-6 py-4 font-sans font-semibold text-xl text-slate-800 hover:text-white hover:bg-[#B85C38] rounded-xl transition-all duration-300"
                                >
                                    Resources
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileDropdown === 'resources' ? 'rotate-180' : ''}`} />
                                </button>
                                {activeMobileDropdown === 'resources' && (
                                    <div className="space-y-1 pl-4 py-2 bg-cream-dark/30 rounded-xl">
                                        {navigationMenus.resources.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="block px-6 py-3 text-base text-slate-700 hover:text-[#B85C38] hover:bg-white/50 rounded-lg transition-all duration-200 font-medium"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Community Link */}
                            <Link
                                href="/community"
                                onClick={closeMobileMenu}
                                className="block px-6 py-4 font-sans font-semibold text-xl text-slate-800 hover:text-white hover:bg-[#B85C38] rounded-xl transition-all duration-300"
                            >
                                Community
                            </Link>

                            {/* Divider */}
                            <div className="h-px bg-cream-dark my-6" />

                            {/* Join Discord CTA */}
                            <Link
                                href="https://discord.gg/trading"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#5865F2] text-white font-semibold text-lg rounded-xl hover:bg-[#4752C4] transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <DiscordIcon className="w-5 h-5" />
                                <span>Join Discord Community</span>
                            </Link>

                            {/* Bottom spacing */}
                            <div className="h-8" />
                        </div>
                    </div>
                </div>
            )}

            {/* Search Popup */}
            <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
