import { cn } from "@/lib/utils";
import { BookOpen, AlertTriangle, Lightbulb } from "lucide-react";

type CalloutType = "concept" | "warning" | "tip";

interface CalloutProps {
    type: CalloutType;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const styles = {
    concept: {
        container: "border-l-emerald-500 bg-emerald-50",
        icon: BookOpen,
        iconColor: "text-emerald-600",
    },
    warning: {
        container: "border-l-amber-500 bg-amber-50",
        icon: AlertTriangle,
        iconColor: "text-amber-600",
    },
    tip: {
        container: "border-l-slate-500 bg-slate-50",
        icon: Lightbulb,
        iconColor: "text-slate-600",
    },
};

export function Callout({ type, title, children, className }: CalloutProps) {
    const style = styles[type];
    const Icon = style.icon;

    return (
        <div
            className={cn(
                "border-l-4 p-6 my-8 rounded-r-xl shadow-sm",
                style.container,
                className
            )}
        >
            <div className="flex items-center gap-3 mb-3">
                <Icon className={cn("w-5 h-5", style.iconColor)} />
                <h3 className={cn("font-serif font-bold text-lg", style.iconColor)}>
                    {title}
                </h3>
            </div>
            <div className="text-slate-700 leading-relaxed text-sm">
                {children}
            </div>
        </div>
    );
}
