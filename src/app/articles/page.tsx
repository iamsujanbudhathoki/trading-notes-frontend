"use client";

import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { ArrowRight, Calendar, Clock, Search, TrendingUp, BookOpen, X, ExternalLink, Sparkles, Filter } from "lucide-react";
import { useState, useMemo, Fragment } from "react";
import { cn } from "@/lib/utils";

function NativeAdCard() {
    return (
        <div className="group relative flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-500 h-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-emerald-500/20 to-transparent blur-3xl opacity-50" />

            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

            <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="px-3 py-1 rounded-full bg-white/10 border border-white/5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider backdrop-blur-sm">
                            Partner
                        </span>
                        <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-white mb-4 leading-tight">
                        Trade with <span className="text-emerald-400">Zero Spreads</span> on Major Pairs
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-serif">
                        Stop losing your edge to slippage. Join 50,000+ serious traders executing on institutional-grade liquidity.
                    </p>
                </div>

                <button className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 group-hover:gap-3">
                    Open Pro Account <ExternalLink className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default function ArticlesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...new Set(articles.map(article => article.category))];

    const filteredArticles = useMemo(() => {
        return articles.filter(article => {
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    const isFilterActive = searchQuery !== "" || selectedCategory !== "All";
    const featuredArticle = articles[0];
    const regularArticles = articles.slice(1);
    const displayArticles = isFilterActive ? filteredArticles : regularArticles;

    return (
        <div className="min-h-screen bg-[#f8fafc] selection:bg-emerald-100 selection:text-emerald-900">
            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-16 px-6 border-b border-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-serif italic mb-8 shadow-sm">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                        <span>The Trading Journal</span>
                    </div>

                    <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 leading-[1.1] tracking-tight text-balance">
                        Market <span className="relative inline-block text-slate-900">
                            <span className="relative z-10">Insights</span>
                            <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-100 -z-0 -rotate-1" />
                        </span><br className="hidden md:block" />
                        & Casual Notes.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-serif text-balance md:mx-0 mx-auto font-medium">
                        Decoding institutional order flow, psychology, and price action. <br className="hidden md:block" />
                        Simple observations for complex markets.
                    </p>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* Search & Filter Bar */}
                <div className="sticky top-20 z-40 mb-16 -mx-6 md:mx-0">
                    <div className="bg-white/80 backdrop-blur-xl border-y md:border border-slate-200/60 md:rounded-2xl p-4 shadow-sm shadow-slate-200/50 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            {/* Categories */}
                            <div className="flex-1 overflow-x-auto no-scrollbar mask-gradient-x md:mask-none">
                                <div className="flex items-center gap-1.5 pb-2 md:pb-0 px-2 md:px-0 min-w-max">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={cn(
                                                "px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                                                selectedCategory === category
                                                    ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20"
                                                    : "bg-white border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                            )}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Search */}
                            <div className="relative w-full md:w-80 shrink-0 px-2 md:px-0 pb-2 md:pb-0">
                                <Search className="absolute left-6 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by topic..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-sm font-medium transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-6 md:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 hover:bg-slate-200 rounded-full transition-colors"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Article (When not filtering) */}
                {!isFilterActive && featuredArticle && (
                    <div className="mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <Link href={`/articles/${featuredArticle.slug}`} className="group relative block">
                            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                {/* Image Side */}
                                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                        priority
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
                                </div>

                                {/* Content Side */}
                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                                            Latest Entry
                                        </span>
                                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {featuredArticle.date}
                                        </span>
                                    </div>

                                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-[1.1] group-hover:text-emerald-700 transition-colors">
                                        {featuredArticle.title}
                                    </h2>

                                    <p className="text-lg text-slate-500 mb-8 leading-relaxed font-serif line-clamp-3">
                                        {featuredArticle.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs group/btn">
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4 ml-1 text-emerald-600 group-hover/btn:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Article Grid */}
                {displayArticles.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {displayArticles.map((article, index) => (
                            <Fragment key={article.slug}>
                                {/* Native Ad Insert */}
                                {index === 1 && !isFilterActive && <NativeAdCard />}

                                <Link
                                    href={`/articles/${article.slug}`}
                                    className="group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                                >
                                    <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-6 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10 transition-shadow">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-sm text-[10px] font-bold text-slate-900 shadow-sm border border-slate-100 uppercase tracking-wider">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-1">
                                        <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{article.readTime}</span>
                                        </div>

                                        <h3 className="font-serif text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                            {article.title}
                                        </h3>

                                        <p className="text-slate-500 text-sm leading-relaxed font-serif line-clamp-2 mb-4 flex-1">
                                            {article.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider group-hover:text-emerald-700 transition-colors">Read Article</span>
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                                                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <Search className="w-8 h-8 text-slate-300" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">No entries found</h3>
                        <p className="text-slate-500 mb-8 text-center max-w-md">
                            We couldn't find any articles matching "{searchQuery}". Try adjusting your filters or search terms.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Newsletter Section - Refined */}
                <div className="mt-32 relative overflow-hidden rounded-3xl bg-emerald-900 px-6 py-20 sm:px-24 xl:py-32">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
                    <div className="absolute left-1/2 top-1/2 -ml-96 -mt-96 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-emerald-500/20 to-transparent blur-3xl" />

                    <div className="relative mx-auto max-w-2xl text-center">
                        <TrendingUp className="mx-auto h-12 w-12 text-emerald-400 mb-8" />
                        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Get the Weekly Trade Report
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100/80 font-serif">
                            Curated insights on market structure, institutional order flow, and high-performance psychology. No fluff, just alpha.
                        </p>
                        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 flex-auto rounded-xl border-0 bg-white/10 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-emerald-200/50 focus:ring-2 focus:ring-inset focus:ring-emerald-500 sm:text-sm sm:leading-6 backdrop-blur-sm transition-all"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="flex-none rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-emerald-900 shadow-sm hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
                            >
                                Join
                            </button>
                        </form>
                        <p className="mt-8 text-xs leading-5 text-emerald-200/60 uppercase tracking-widest font-medium">
                            100% Free · Unsubscribe anytime
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}
