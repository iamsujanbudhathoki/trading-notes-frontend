import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Activity, GitBranch, Layers, Star } from "lucide-react";

const topics = [
    {
        title: "Structure Mapping",
        description: "Learn to identify market structure shifts and track institutional moves across timeframes.",
        icon: GitBranch,
        href: "/learn/structure-mapping",
        image: "/structure_mapping.avif",
        featured: true
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
        image: "/ict-vs-smc.jpg"
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
        <section className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-5xl text-slate-900 mb-4 tracking-tight">
                        Master the Markets.
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl font-normal leading-relaxed">
                        A complete curriculum designed to take you from novice to institutional-grade trader.
                    </p>
                </div>
                <Link href="/learn/smc-ict" className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 transition-all hover:text-copper-600 text-sm uppercase tracking-wider">
                    View All Topics <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                {topics.map((topic, index) => (
                    <Link
                        key={topic.title}
                        href={topic.href}
                        className={`group relative overflow-hidden rounded-3xl bg-slate-900 ${index === 0 ? 'md:col-span-2' : ''}`}
                    >
                        <Image
                            src={topic.image}
                            alt={topic.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                        />
                        {/* Gradient Scrim for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                                    <topic.icon className="w-5 h-5" />
                                </div>
                                {topic.featured && (
                                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/10">
                                        Essential
                                    </span>
                                )}
                            </div>

                            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white mb-3 tracking-tight drop-shadow-sm">
                                {topic.title}
                            </h3>
                            <p className="text-slate-200 text-sm md:text-base line-clamp-2 max-w-lg font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {topic.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
