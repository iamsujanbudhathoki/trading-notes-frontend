"use client";

import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { ArrowRight, Calendar, Clock, Search, TrendingUp, BookOpen, X, ExternalLink, Sparkles } from "lucide-react";
import { useState, useMemo, Fragment } from "react";

function NativeAdCard() {
    return (
        <div className="group relative flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards" style={{ animationDelay: '100ms' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-copper-500/10 to-transparent blur-2xl" />

            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-copper-500/0 via-copper-500/10 to-copper-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
                        Partner
                    </span>
                    <Sparkles className="w-4 h-4 text-copper-400 animate-pulse" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                    Trade with <span className="text-copper-400">Zero Spreads</span> on Major Pairs
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-serif">
                    Stop losing your edge to slippage. Join 50,000+ serious traders executing on institutional-grade liquidity.
                </p>

                <button className="w-full py-3.5 rounded-lg bg-gradient-to-r from-copper-600 to-copper-500 text-white font-bold text-sm hover:from-copper-500 hover:to-copper-400 transition-all shadow-lg shadow-copper-900/20 flex items-center justify-center gap-2 group-hover:gap-3">
                    Open Pro Account <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

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

    // Insert Native Ad into the grid logic
    const displayArticles = isFilterActive ? filteredArticles : regularArticles;

    // We want to insert the ad after the 2nd item if we are NOT filtering (or even if we are, but let's keep it simple)
    // Actually, let's just put it in the grid.

    return (
        <div className="min-h-screen bg-[#fdfdfd] selection:bg-slate-200 selection:text-slate-900">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-20 px-6 border-b border-slate-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-8">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>The Trading Journal</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                            Market Insights & <br />
                            <span className="text-copper-600 italic">Strategic Notes</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl font-serif">
                            A collection of thoughts on price action, institutional order flow, and the psychology of high-performance trading.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-[1400px] mx-auto px-6 py-16">

                {/* Featured Article - Only show when NOT filtering */}
                {!isFilterActive && featuredArticle && (
                    <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/5 hover:shadow-slate-900/10 transition-all duration-500 border border-slate-100">
                            <div className="grid lg:grid-cols-12 gap-0">
                                <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] overflow-hidden">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center bg-white relative">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-copper-500 hidden lg:block" />

                                    <div className="flex items-center gap-3 text-xs font-bold text-copper-600 mb-6 uppercase tracking-wider">
                                        <span className="px-2 py-1 rounded bg-copper-50 text-copper-700">Featured Entry</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span>{featuredArticle.date}</span>
                                    </div>

                                    <Link href={`/articles/${featuredArticle.slug}`}>
                                        <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6 group-hover:text-copper-700 transition-colors leading-tight">
                                            {featuredArticle.title}
                                        </h2>
                                    </Link>

                                    <p className="text-slate-500 text-lg mb-8 line-clamp-3 leading-relaxed font-serif">
                                        {featuredArticle.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredArticle.readTime}</span>
                                        </div>
                                        <Link
                                            href={`/articles/${featuredArticle.slug}`}
                                            className="inline-flex items-center gap-2 text-slate-900 font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide"
                                        >
                                            Read Entry <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Filters & Search */}
                <div className="sticky top-20 z-40 bg-[#fdfdfd]/90 backdrop-blur-xl py-4 mb-12 border-b border-slate-100 shadow-sm transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        {/* Category Filters with Scroll Indicators */}
                        <div className="relative flex-1">
                            {/* Left fade indicator */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#fdfdfd] to-transparent z-10 pointer-events-none md:hidden" />

                            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar px-1">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 transform scale-105"
                                            : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            {/* Right fade indicator */}
                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#fdfdfd] to-transparent z-10 pointer-events-none md:hidden" />
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search journal entries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-10 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 text-sm bg-white font-medium transition-all shadow-sm focus:shadow-md"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Article Grid */}
                {displayArticles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayArticles.map((article, index) => (
                            <Fragment key={article.slug}>
                                {/* Insert Native Ad after the 1st item in the grid (so it's the 2nd item visually) */}
                                {index === 1 && !isFilterActive && <NativeAdCard />}

                                <Link
                                    href={`/articles/${article.slug}`}
                                    className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded bg-white/95 backdrop-blur-md text-[10px] font-bold text-slate-900 shadow-sm border border-slate-100 uppercase tracking-wider">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-1 p-8 flex flex-col">
                                        <div className="flex items-center gap-4 text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-copper-700 transition-colors line-clamp-2 leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-serif">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center text-slate-900 font-bold text-xs uppercase tracking-wider group/btn pt-6 border-t border-slate-50">
                                            Read Entry <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover/btn:translate-x-1 transition-transform text-copper-600" />
                                        </div>
                                    </div>
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                            <Search className="w-6 h-6 text-slate-400" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">No entries found</h3>
                        <p className="text-slate-500 mb-6">We couldn't find any articles matching your search.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                            className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Newsletter Section */}
                <div className="mt-32 bg-slate-900 rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-slate-900/20">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-copper-500/10 to-transparent blur-3xl" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-copper-400 mb-8 border border-white/10 backdrop-blur-sm">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            The Weekly Entry
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed font-serif">
                            Join 10,000+ traders receiving our curated insights on market structure, psychology, and institutional order flow.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 focus:border-copper-500 transition-colors"
                            />
                            <button className="px-8 py-4 rounded-xl bg-copper-500 text-white font-bold hover:bg-copper-600 transition-colors shadow-lg shadow-copper-500/20 hover:shadow-copper-500/40">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-slate-600 font-medium uppercase tracking-wider">
                            No spam. Unsubscribe at any time.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
