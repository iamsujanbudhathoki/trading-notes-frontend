import { Card } from "./Card";
import Link from "next/link";

interface BrokerCardProps {
    name: string;
    description: string;
    href: string;
}

export function BrokerCard({ name, description, href }: BrokerCardProps) {
    return (
        <Link href={href} className="group">
            <Card className="h-full p-8 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 relative overflow-hidden border border-slate-100 group-hover:border-emerald-500/30">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex items-center text-emerald-600 font-bold text-sm mt-auto group-hover:gap-2 transition-all duration-300 uppercase tracking-wider">
                    Read Review →
                </div>
            </Card>
        </Link>
    );
}
