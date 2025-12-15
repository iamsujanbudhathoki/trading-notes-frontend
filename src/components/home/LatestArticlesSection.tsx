import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, PenTool } from "lucide-react";
import { articles } from "@/lib/articles";

export function LatestArticlesSection() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                        <PenTool className="w-3 h-3" />
                        <span>The Notebook</span>
                    </div>
                    <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-3 tracking-tight">
                        Recent Journal Entries
                    </h2>
                    <p className="text-slate-500 text-lg font-medium">
                        Observations, trade reviews, and market logic.
                    </p>
                </div>
                <Link
                    href="/articles"
                    className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-slate-600 transition-colors duration-300 group"
                >
                    View Full Archive
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link
                        key={article.title}
                        href={`/articles/${article.slug}`}
                        className="group flex flex-col bg-[#fdfdfd] rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-500 relative"
                    >
                        {/* Paper Texture Overlay */}
                        <div className="absolute inset-0 bg-[#fafafa] opacity-50 pointer-events-none" />

                        {/* Image Container */}
                        <div className="relative h-56 w-full overflow-hidden border-b border-slate-100">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                            />
                            <div className="absolute top-3 left-3">
                                <span className="px-2 py-1 rounded bg-white/90 backdrop-blur-sm text-slate-900 text-[10px] font-bold uppercase tracking-wider border border-slate-200 shadow-sm">
                                    {article.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col relative z-10">
                            <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium mb-3 uppercase tracking-widest font-mono border-b border-slate-100 pb-3 border-dashed">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    {article.date}
                                </div>
                                <div className="w-px h-3 bg-slate-200" />
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-3 h-3" />
                                    {article.readTime}
                                </div>
                            </div>

                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2 group-hover:text-copper-700 transition-colors duration-300 leading-snug">
                                {article.title}
                            </h3>

                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                                {article.description}
                            </p>

                            <div className="flex items-center text-slate-900 text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all duration-300">
                                Read Entry <ArrowRight className="w-3 h-3 ml-1 text-copper-500" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link
                    href="/articles"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors"
                >
                    View Archive
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
