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
        container: "border-l-green-700 bg-green-50",
        icon: BookOpen,
        iconColor: "text-green-700",
    },
    warning: {
        container: "border-l-amber-500 bg-amber-50", // Using amber-500 for border as per brief (implied)
        icon: AlertTriangle,
        iconColor: "text-amber-600",
    },
    tip: {
        container: "border-l-slate-500 bg-blue-gray-50",
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
                "border-l-4 p-6 my-8 rounded-r-lg",
                style.container,
                className
            )}
        >
            <div className="flex items-center gap-3 mb-2">
                <Icon className={cn("w-5 h-5", style.iconColor)} />
                <h3 className={cn("font-sans font-semibold text-lg", style.iconColor)}>
                    {title}
                </h3>
            </div>
            <div className="text-slate-900 leading-relaxed">
                {children}
            </div>
        </div>
    );
}
