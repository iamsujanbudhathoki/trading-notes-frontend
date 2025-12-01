import { FileText, CheckSquare, BookOpen, Users, BarChart } from "lucide-react";
import Link from "next/link";

const resources = [
    {
        icon: FileText,
        title: "Trading Plan Template (PDF)",
        href: "/resources/trading-plan-template"
    },
    {
        icon: CheckSquare,
        title: "Risk Management Checklist",
        href: "/resources/risk-management-checklist"
    },
    {
        icon: BookOpen,
        title: "Recommended Books",
        href: "/resources/recommended-books"
    },
    {
        icon: Users,
        title: "Trading Communities",
        href: "/resources/communities"
    },
    {
        icon: BarChart,
        title: "Chart Setup Guides",
        href: "/resources/chart-setup"
    }
];

export function ResourcesSection() {
    return (
        <section className="max-w-6xl mx-auto px-6">
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-12">
                Resources
            </h2>

            <div className="space-y-4">
                {resources.map((resource) => {
                    const Icon = resource.icon;
                    return (
                        <Link
                            key={resource.title}
                            href={resource.href}
                            className="flex items-center gap-3 text-slate-900 hover:text-[#B85C38] transition-colors duration-300 group"
                        >
                            <span className="text-[#B85C38]">-</span>
                            <span className="font-sans text-lg">{resource.title}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
