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
            className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-6"
            onClick={onClose}
        >
            {/* Dark blur background */}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

            {/* Search card */}
            <div
                className="relative w-full max-w-[700px] bg-white rounded-xl shadow-soft-lg p-8 animate-in fade-in slide-in-from-top-4 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 hover:bg-cream rounded-lg transition-colors duration-300"
                    aria-label="Close search"
                >
                    <X className="w-5 h-5 text-slate-600" />
                </button>

                {/* Search input */}
                <div className="flex items-center gap-4 mb-6">
                    <Search className="w-6 h-6 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search guides, tools, strategies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex-1 text-2xl font-sans text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                        autoFocus
                    />
                </div>

                {/* Results */}
                {query && (
                    <div className="border-t border-cream-dark pt-6 space-y-4">
                        <p className="text-sm text-slate-500 font-sans">
                            Searching for "{query}"...
                        </p>
                        {/* Add actual search results here */}
                        <div className="text-slate-600 font-sans">
                            No results found. Try searching for "Smart Money", "Order Block", or "Risk Calculator"
                        </div>
                    </div>
                )}

                {/* Quick links when empty */}
                {!query && (
                    <div className="border-t border-cream-dark pt-6">
                        <p className="text-sm text-slate-500 font-sans mb-4">Popular searches:</p>
                        <div className="flex flex-wrap gap-2">
                            {["Smart Money Concepts", "Order Blocks", "Risk Calculator", "Fair Value Gap"].map((term) => (
                                <button
                                    key={term}
                                    onClick={() => setQuery(term)}
                                    className="px-4 py-2 bg-cream hover:bg-[#B85C38] hover:text-white rounded-lg text-sm font-sans transition-all duration-300"
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
