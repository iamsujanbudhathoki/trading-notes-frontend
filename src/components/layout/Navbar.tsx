"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, Menu, X, PenTool, ArrowRight } from "lucide-react";
import { SearchPopup } from "@/components/ui/SearchPopup";

const navigationMenus = {
    curriculum: [
        { label: "Smart Money Concepts", href: "/learn/smart-money-concepts" },
        { label: "Price Action", href: "/learn/price-action" },
        { label: "Chart Patterns", href: "/learn/chart-patterns" },
        { label: "Indicators", href: "/learn/indicators" },
        { label: "Psychology", href: "/learn/psychology" },
        { label: "Full Syllabus", href: "/learn" }
    ],
    tools: [
        { label: "Position Size Calculator", href: "/tools/position-size-calculator" },
        { label: "Risk Calculator", href: "/tools/risk-calculator" },
        { label: "Economic Calendar", href: "/tools/economic-calendar" },
        { label: "Session Hours", href: "/tools/session-hours" },
        { label: "All Tools", href: "/tools" }
    ]
};

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
    return (
        <div className="absolute top-full left-0 mt-2 min-w-[240px] bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform group-hover:translate-y-0 translate-y-2 p-1.5 z-50">
            <div className="flex flex-col gap-0.5">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-4 py-2.5 hover:bg-slate-50 text-slate-600 hover:text-slate-900 rounded-lg text-sm transition-colors duration-200 font-medium whitespace-nowrap flex items-center justify-between group/item"
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
    const [isScrolled, setIsScrolled] = useState(false);

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

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <nav className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200' : 'bg-transparent border-b border-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-slate-900 hover:text-slate-700 transition-colors duration-300 flex-shrink-0 flex items-center gap-2"
                        >
                            TradeNotes
                        </Link>

                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
                            {/* The Archive Link */}
                            <Link
                                href="/articles"
                                className="px-4 py-2 font-medium text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200"
                            >
                                The Archive
                            </Link>

                            {/* Curriculum Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-4 py-2 font-medium text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">
                                    Curriculum
                                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-50" />
                                </button>
                                <DropdownMenu items={navigationMenus.curriculum} />
                            </div>

                            {/* Tools Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1 px-4 py-2 font-medium text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all duration-200">
                                    Tools
                                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-50" />
                                </button>
                                <DropdownMenu items={navigationMenus.tools} />
                            </div>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-slate-400 hover:text-slate-900 transition-colors duration-200"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5" />
                            </button>

                            <Link
                                href="/#newsletter"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-900/10 hover:-translate-y-0.5"
                            >
                                <PenTool className="w-3.5 h-3.5" />
                                Weekly Entry
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-4">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 text-slate-900"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={closeMobileMenu} />
                <div className={`absolute top-0 right-0 w-[300px] h-full bg-white shadow-2xl transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-8">
                            <span className="font-serif font-bold text-xl text-slate-900">TradeNotes</span>
                            <button onClick={closeMobileMenu} className="p-2 text-slate-400 hover:text-slate-900">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Link
                                href="/articles"
                                onClick={closeMobileMenu}
                                className="px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors"
                            >
                                The Archive
                            </Link>

                            {/* Mobile Curriculum Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown('curriculum')}
                                    className="w-full px-4 py-3 flex items-center justify-between text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors"
                                >
                                    Curriculum
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'curriculum' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === 'curriculum' ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-4 pb-2 flex flex-col gap-1">
                                        {navigationMenus.curriculum.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="px-4 py-2.5 text-sm text-slate-500 hover:text-slate-900 border-l border-slate-100 hover:border-slate-300 transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Tools Dropdown */}
                            <div>
                                <button
                                    onClick={() => toggleMobileDropdown('tools')}
                                    className="w-full px-4 py-3 flex items-center justify-between text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors"
                                >
                                    Tools
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === 'tools' ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === 'tools' ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-4 pb-2 flex flex-col gap-1">
                                        {navigationMenus.tools.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobileMenu}
                                                className="px-4 py-2.5 text-sm text-slate-500 hover:text-slate-900 border-l border-slate-100 hover:border-slate-300 transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="my-4 border-t border-slate-100" />

                            <Link
                                href="/#newsletter"
                                onClick={closeMobileMenu}
                                className="w-full px-4 py-3 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                            >
                                <PenTool className="w-4 h-4" />
                                Weekly Entry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
