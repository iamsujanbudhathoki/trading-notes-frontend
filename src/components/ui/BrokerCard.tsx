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
            <Card className="h-full p-8 hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B85C38] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-l-xl" />
                <h3 className="font-sans font-bold text-xl text-slate-900 mb-3 group-hover:text-[#B85C38] transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex items-center text-[#B85C38] font-sans font-semibold text-sm mt-auto group-hover:gap-2 transition-all duration-300">
                    Read Review →
                </div>
            </Card>
        </Link>
    );
}
