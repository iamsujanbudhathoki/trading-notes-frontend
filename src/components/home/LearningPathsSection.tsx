import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, TrendingUp, BrainCircuit } from "lucide-react";

export function LearningPathsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-slate-500 text-lg max-w-xl">
                        Curated curriculums designed for your experience level. From foundational mechanics to advanced institutional concepts.
                    </p>
                </div>
                <Link href="/learn" className="text-copper-600 font-bold flex items-center gap-2 hover:gap-3 transition-all hover:text-copper-700">
                    View Full Curriculum <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <LevelCard
                    level="Level 1"
                    title="The Foundation"
                    description="Essential concepts for complete beginners. Market structure, candles, and basic terminology."
                    icon={BookOpen}
                    href="/learn/foundation"
                    color="slate"
                    bgImage="/fundamental.webp"
                    badge="Start Here"
                />
                <LevelCard
                    level="Level 2"
                    title="Smart Money Concepts"
                    description="The core strategy. Learn about Order Blocks, Liquidity, and how institutions trade."
                    icon={TrendingUp}
                    href="/learn/smart-money-concepts"
                    color="copper"
                    featured={true}
                    bgImage="/ictlogo.jpg"
                />
                <LevelCard
                    level="Level 3"
                    title="Psychology & Edge"
                    description="Master your mind. Advanced risk management is the only holy grail in trading."
                    icon={BrainCircuit}
                    href="/learn/psychology"
                    color="indigo"
                    bgImage="/risk-management.jpg"
                />
            </div>
        </section>
    );
}

function LevelCard({ level, title, description, icon: Icon, href, color, bgImage, featured = false, badge }: any) {
    const colorClasses = {
        slate: 'from-slate-700 to-slate-900',
        copper: 'from-copper-500 to-copper-700',
        indigo: 'from-indigo-600 to-slate-900'
    };

    return (
        <Link
            href={href}
            className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-300 hover:-translate-y-2"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg border border-white/10`}>
                    <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4 flex gap-2">
                    {badge && (
                        <span className="px-3 py-1.5 bg-copper-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg animate-pulse">
                            {badge}
                        </span>
                    )}
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/20">
                        {level}
                    </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif font-bold text-2xl text-white mb-2 group-hover:text-copper-400 transition-colors">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {description}
                </p>

                <div className="flex items-center text-copper-600 font-bold text-sm gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                    Start Learning <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
