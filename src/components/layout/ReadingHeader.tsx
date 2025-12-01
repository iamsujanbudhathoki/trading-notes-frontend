"use client";

import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

export function ReadingHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-slate-900/90 backdrop-blur-sm py-4 border-b border-white/10"
            }`}>
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between relative z-10">
                {/* Left: App Title */}
                <div className={`transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                    <div className="font-serif font-bold text-lg tracking-tight">TRADENOTES</div>
                </div>

                {/* Right: Minimal Actions */}
                <div className="flex items-center gap-2">
                    {/* Actions removed as requested */}
                </div>
            </div>
        </header>
    );
}
