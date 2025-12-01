import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Activity, GitBranch, Layers } from "lucide-react";

const topics = [
    {
        title: "Structure Mapping",
        description: "Learn to identify market structure shifts and track institutional moves across timeframes.",
        icon: GitBranch,
        href: "/learn/structure-mapping",
        image: "/structure_mapping.avif"
    },
    {
        title: "CHOCH & BOS",
        description: "Master Change of Character and Break of Structure - the foundation of SMC trading.",
        icon: Activity,
        href: "/learn/choch-bos",
        image: "/choch.avif"
    },
    {
        title: "ICT vs SMC",
        description: "Understand the differences and similarities between ICT concepts and Smart Money methodology.",
        icon: Layers,
        href: "/learn/ict-vs-smc",
        image: "https://www.writofinance.com/wp-content/uploads/2024/09/AUDUSD2.png.webp"
    },
    {
        title: "Order Flow",
        description: "Track institutional order flow and understand the logic behind every price move.",
        icon: TrendingUp,
        href: "/learn/order-flow",
        image: "/order_flow.webp"
    }
];

export function SMCICTSection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        SMC & ICT Trading
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Master institutional concepts and trading like the big players.
                    </p>
                </div>
                <Link href="/learn/smc-ict" className="text-[#B85C38] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    View All Topics <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <Link
                        key={topic.title}
                        href={topic.href}
                        className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        {/* Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={topic.image}
                                alt={topic.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            {/* Icon Overlay */}
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#B85C38]">
                                <topic.icon className="w-5 h-5" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="font-sans font-bold text-lg text-slate-900 mb-2 group-hover:text-[#B85C38] transition-colors">
                                {topic.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                {topic.description}
                            </p>
                            <div className="flex items-center text-[#B85C38] text-sm font-bold gap-2 group-hover:gap-3 transition-all">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
