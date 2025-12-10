"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link
                href="/"
                className="flex items-center gap-1 text-slate-500 hover:text-[#B85C38] transition-colors"
            >
                <Home className="w-4 h-4" />
                <span>Home</span>
            </Link>

            {items.map((item, index) => {
                const isLast = index === items.length - 1;

                return (
                    <div key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        {item.href && !isLast ? (
                            <Link
                                href={item.href}
                                className="text-slate-500 hover:text-[#B85C38] transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-slate-900 font-medium">
                                {item.label}
                            </span>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}
