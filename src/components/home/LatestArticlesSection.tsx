import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { articles } from "@/lib/articles";

export function LatestArticlesSection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-2 tracking-tight">
                        Latest Insights
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        Deep dives into trading strategies and market analysis
                    </p>
                </div>
                <Link
                    href="/articles"
                    className="hidden md:flex text-sm font-bold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-[#B85C38] hover:border-[#B85C38] transition-all duration-300"
                >
                    View Archive
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link
                        key={article.title}
                        href={`/articles/${article.slug}`}
                        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-slate-900 shadow-sm">
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-3">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime}
                                </div>
                            </div>

                            <h3 className="font-sans font-bold text-xl text-slate-900 mb-3 group-hover:text-[#B85C38] transition-colors duration-300 line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                                {article.description}
                            </p>

                            <div className="flex items-center text-[#B85C38] text-sm font-bold group-hover:gap-2 transition-all duration-300">
                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link
                    href="/articles"
                    className="text-[#B85C38] font-sans font-semibold hover:gap-2 transition-all duration-300 inline-flex items-center"
                >
                    View Archive →
                </Link>
            </div>
        </section>
    );
}
