import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white border border-cream-dark rounded-xl shadow-soft p-6 md:p-12 transition-smooth",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
