import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, TrendingUp, BrainCircuit } from "lucide-react";

export function LearningPathsSection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        Choose Your Path
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Curated curriculums designed for your experience level.
                    </p>
                </div>
                <Link href="/learn" className="text-[#B85C38] font-bold flex items-center gap-2 hover:gap-3 transition-all">
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
                    color="blue"
                    bgImage="/fundamental.webp"
                />
                <LevelCard
                    level="Level 2"
                    title="Smart Money Concepts"
                    description="The core strategy. Learn about Order Blocks, Liquidity, and how institutions trade."
                    icon={TrendingUp}
                    href="/learn/smart-money-concepts"
                    color="orange"
                    featured={true}
                    bgImage="/ictlogo.jpg"
                />
                <LevelCard
                    level="Level 3"
                    title="Psychology & Edge"
                    description="Master your mind. Advanced risk management and building a sustainable trading plan."
                    icon={BrainCircuit}
                    href="/learn/psychology"
                    color="purple"
                    bgImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
                />
            </div>
        </section>
    );
}

function LevelCard({ level, title, description, icon: Icon, href, color, bgImage, featured = false }: any) {
    const colorClasses = {
        blue: 'from-blue-500 to-blue-600',
        orange: 'from-[#B85C38] to-orange-500',
        purple: 'from-purple-500 to-purple-600'
    };

    return (
        <Link
            href={href}
            className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                        {level}
                    </span>
                </div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-sans font-bold text-2xl text-white mb-1 group-hover:text-[#B85C38] transition-colors">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <p className="text-slate-600 leading-relaxed mb-4">
                    {description}
                </p>

                <div className="flex items-center text-[#B85C38] font-bold text-sm gap-2 group-hover:gap-3 transition-all">
                    Start Learning <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </Link>
    );
}
