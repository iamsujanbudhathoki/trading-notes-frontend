import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { Article } from "@/lib/articles";

interface RelatedArticlesProps {
    currentSlug: string;
    articles: Article[];
}

export function RelatedArticles({ currentSlug, articles }: RelatedArticlesProps) {
    // Filter out current article and course articles, get 3 related
    const relatedArticles = articles
        .filter(article => article.slug !== currentSlug && !article.isPartOfCourse)
        .slice(0, 3);

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <section className="w-full bg-slate-50/50 py-20 px-6 border-t border-slate-200">
            {/* Content wrapper matching article page max-width */}
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-14 text-center">
                    <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-4">
                        Related Articles
                    </h2>
                    <p className="text-base text-slate-500 max-w-2xl mx-auto">
                        Continue your learning journey with these handpicked articles
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {relatedArticles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/articles/${article.slug}`}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#B85C38] shadow-md hover:shadow-2xl hover:shadow-[#B85C38]/20 transition-all duration-500 cursor-pointer h-full transform hover:-translate-y-2"
                        >
                            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute top-5 left-5">
                                    <span className="px-3.5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-slate-900 shadow-lg">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-7 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-4">
                                    <Clock className="w-4 h-4" />
                                    <span>{article.readTime}</span>
                                </div>

                                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4 group-hover:text-[#B85C38] transition-colors line-clamp-2 leading-tight">
                                    {article.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6 flex-1">
                                    {article.description}
                                </p>

                                <div className="flex items-center text-[#B85C38] text-sm font-bold uppercase tracking-wider gap-2 group-hover:gap-4 transition-all mt-auto pt-6 border-t border-slate-100">
                                    <span>Read Article</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
