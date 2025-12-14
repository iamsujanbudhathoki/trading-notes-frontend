import { LucideIcon } from "lucide-react";
import { Card } from "./Card";
import Link from "next/link";

interface ToolCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
    ctaText: string;
}

export function ToolCard({ icon: Icon, title, description, href, ctaText }: ToolCardProps) {
    return (
        <Link href={href} className="group">
            <Card className="h-full p-8 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 relative overflow-hidden border border-slate-100 group-hover:border-copper-500/30">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-copper-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <Icon className="w-10 h-10 text-copper-500 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-3 group-hover:text-copper-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex items-center text-copper-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all duration-300 uppercase tracking-wider">
                    {ctaText} →
                </div>
            </Card>
        </Link>
    );
}
