import Link from "next/link";

interface StrategyListItemProps {
    title: string;
    href: string;
}

export function StrategyListItem({ title, href }: StrategyListItemProps) {
    return (
        <Link
            href={href}
            className="text-slate-900 hover:text-[#B85C38] transition-colors duration-300 font-sans text-base flex items-start gap-3 py-2"
        >
            <span className="text-[#B85C38] mt-1.5">•</span>
            <span>{title}</span>
        </Link>
    );
}
