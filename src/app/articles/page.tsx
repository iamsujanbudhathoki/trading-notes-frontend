"use client";

import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { ArrowRight, Calendar, Clock, Search, TrendingUp, BookOpen, X } from "lucide-react";
import { useState, useMemo } from "react";

export default function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories from articles
    const categories = ["All", ...new Set(articles.map(article => article.category))];

    // Filter articles
    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    // Determine if we are in "filter mode" (search or category active)
    const isFilterActive = searchQuery !== "" || selectedCategory !== "All";

    // If filter is active, show all matching results in grid.
    // If not, show featured + rest.
    const featuredArticle = articles[0];
    const regularArticles = articles.slice(1);

    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}
            <section className="relative bg-slate-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-copper-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-800/20 to-transparent blur-3xl" />

                <div className="relative max-w-[1400px] mx-auto px-6 py-24 lg:py-32">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-500/10 border border-copper-500/20 text-copper-500 text-sm font-medium mb-6">
                            <BookOpen className="w-4 h-4" />
                            <span>Trading Knowledge Hub</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 to-copper-600">Markets</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                            Deep dive into Smart Money Concepts, institutional trading strategies, and the psychology of profitable trading.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className={`max-w-[1400px] mx-auto px-6 py-16 relative z-10 ${!isFilterActive && featuredArticle ? '-mt-20' : 'mt-0'}`}>

                {/* Featured Article - Only show when NOT filtering */}
                {!isFilterActive && featuredArticle && (
                    <div className="mb-20">
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 border border-slate-100">
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 text-sm font-bold text-copper-600 mb-4 uppercase tracking-wider">
                                        <span className="w-2 h-2 rounded-full bg-copper-500" />
                                        Featured Article
                                    </div>
                                    <Link href={`/articles/${featuredArticle.slug}`}>
                                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-copper-600 transition-colors">
                                            {featuredArticle.title}
                                        </h2>
                                    </Link>
                                    <p className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed">
                                        {featuredArticle.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-wider">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{featuredArticle.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>{featuredArticle.readTime}</span>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/articles/${featuredArticle.slug}`}
                                            className="inline-flex items-center gap-2 text-copper-600 font-bold hover:gap-3 transition-all"
                                        >
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? "bg-copper-500 text-white shadow-lg shadow-copper-500/20"
                                    : "bg-white border border-slate-200 text-slate-600 hover:border-copper-500 hover:text-copper-600"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 text-sm bg-white"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Article Grid */}
                {filteredArticles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(isFilterActive ? filteredArticles : regularArticles).map((article) => (
                            <Link
                                key={article.slug}
                                href={`/articles/${article.slug}`}
                                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-900 shadow-sm border border-slate-100">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 uppercase tracking-wider font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{article.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-copper-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {article.description}
                                    </p>
                                    <div className="flex items-center text-copper-600 font-bold text-sm group/btn">
                                        Read More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                            className="mt-4 text-copper-600 font-bold hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Newsletter Section */}
                <div className="mt-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-copper-500/10 to-transparent blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-copper-500/20 text-copper-500 mb-6 border border-copper-500/20">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                            Level Up Your Trading
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Join 10,000+ traders receiving our weekly insights on market structure and institutional order flow.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 focus:border-copper-500 transition-colors"
                            />
                            <button className="px-6 py-3 rounded-xl bg-copper-500 text-white font-bold hover:bg-copper-600 transition-colors shadow-lg shadow-copper-500/20">
                                Subscribe Free
                            </button>
                        </form>
                    </div>
                </div>

            </main>
        </div>
    );
}
