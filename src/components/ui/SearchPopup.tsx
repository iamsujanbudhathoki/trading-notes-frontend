"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
    const [query, setQuery] = useState("");

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 md:pt-32 px-4 sm:px-6"
            onClick={onClose}
        >
            {/* Dark blur background */}
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

            {/* Search card */}
            <div
                className="relative w-full max-w-2xl bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 p-2 hover:bg-cream rounded-lg transition-colors duration-300"
                    aria-label="Close search"
                >
                    <X className="w-5 h-5 text-slate-600" />
                </button>

                {/* Search input */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pr-10 sm:pr-12">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 flex-shrink-0" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 text-lg sm:text-xl md:text-2xl font-sans text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                        autoFocus
                    />
                </div>

                {/* Results */}
                {query && (
                    <div className="border-t border-cream-dark pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                        <p className="text-xs sm:text-sm text-slate-500 font-sans">
                            Searching for "{query}"...
                        </p>
                        {/* Add actual search results here */}
                        <div className="text-sm sm:text-base text-slate-600 font-sans">
                            No results found. Try searching for "Smart Money", "Order Block", or "Risk Calculator"
                        </div>
                    </div>
                )}

                {/* Quick links when empty */}
                {!query && (
                    <div className="border-t border-cream-dark pt-4 sm:pt-6">
                        <p className="text-xs sm:text-sm text-slate-500 font-sans mb-3 sm:mb-4">Popular searches:</p>
                        <div className="flex flex-wrap gap-2">
                            {["Smart Money Concepts", "Order Blocks", "Risk Calculator", "Fair Value Gap"].map((term) => (
                                <button
                                    key={term}
                                    onClick={() => setQuery(term)}
                                    className="px-3 py-2 sm:px-4 bg-cream hover:bg-[#B85C38] hover:text-white rounded-lg text-xs sm:text-sm font-sans font-medium transition-all duration-300"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
