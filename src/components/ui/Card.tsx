import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white border border-slate-100 rounded-2xl shadow-sm p-6 md:p-12 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
