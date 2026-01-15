"use client";

import { use, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronDown, PlayCircle, CheckCircle2, Lock, Twitter, Linkedin, Facebook, Link2, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, Article } from "@/lib/articles";
import { CommentSection } from "@/components/article/CommentSection";
import { RelatedArticles } from "@/components/article/RelatedArticles";

function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-150 ease-out shadow-lg shadow-emerald-500/20"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [article, setArticle] = useState<Article | null>(null);
    const [loading, setLoading] = useState(true);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const shareMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
                setShowShareMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const data = getArticleBySlug(resolvedParams.slug);
        setArticle(data ?? null);
        setLoading(false);
    }, [resolvedParams.slug]);

    if (!loading && !article) {
        notFound();
    }

    if (loading || !article) {
        return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center font-serif text-slate-400 animate-pulse">Loading Entry...</div>;
    }

    const handleShare = (platform: string) => {
        const url = window.location.href;
        const text = `Check out this article: ${article.title}`;

        switch (platform) {
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
                break;
        }
        setShowShareMenu(false);
    };

    return (
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 min-h-screen pb-32 selection:bg-emerald-100 selection:text-emerald-900">
            <ReadingProgress />

            {/* Premium Hero Section */}
            <div className="relative w-full bg-slate-950 overflow-hidden">
                <div className="max-w-[1800px] mx-auto">
                    <div className="relative h-[65vh] min-h-[550px] max-h-[750px]">
                        {/* Background Image */}
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Sophisticated Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/95" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent" />

                        {/* Content Container */}
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full px-6 md:px-12 lg:px-20 xl:px-24 pb-12 md:pb-16 lg:pb-24">
                                <div className="max-w-5xl">
                                    {/* Category Badge */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-5 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/10">
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 md:mb-8 leading-[1.08] tracking-tight drop-shadow-2xl">
                                        {article.title}
                                    </h1>

                                    {/* Meta Information */}
                                    <div className="flex flex-wrap items-center gap-5 text-white/90 text-sm backdrop-blur-sm">
                                        <div className="flex items-center gap-2.5">
                                            <Calendar className="w-4 h-4 text-emerald-400" />
                                            <span className="font-semibold">{article.date}</span>
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        <div className="flex items-center gap-2.5">
                                            <Clock className="w-4 h-4 text-emerald-400" />
                                            <span className="font-semibold">{article.readTime}</span>
                                        </div>
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center text-[11px] font-bold text-white shadow-lg">
                                                TN
                                            </div>
                                            <span className="font-semibold">TradeNotes Team</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <main className={`max-w-[1700px] mx-auto px-6 pt-20 lg:pt-28 grid gap-20 relative ${article.isPartOfCourse ? 'grid-cols-1 lg:grid-cols-[100px_1fr_350px]' : 'grid-cols-1 lg:grid-cols-[minmax(100px,140px)_1fr_minmax(100px,140px)]'}`}>

                {/* Left Floating Navigation & Share */}
                <aside className="hidden lg:flex flex-col items-center h-full">
                    <div className="sticky top-32 flex flex-col items-center gap-8">
                        <Link href="/articles" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-900 transition-all duration-300">
                            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-emerald-500 group-hover:text-emerald-600 group-hover:-translate-x-0.5 transition-all duration-300">
                                <ArrowLeft className="w-5 h-5" />
                            </div>
                        </Link>

                        <div className="w-px h-16 bg-gradient-to-b from-slate-200 to-transparent" />

                        <div className="flex flex-col gap-5 relative" ref={shareMenuRef}>
                            <ActionButton icon={Share2} label="Share" onClick={() => setShowShareMenu(!showShareMenu)} />
                            {showShareMenu && (
                                <div className="absolute left-16 top-0 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-2.5 z-50 animate-in fade-in slide-in-from-left-2 duration-200">
                                    <button onClick={() => handleShare('twitter')} className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3.5 font-semibold transition-colors">
                                        <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                                        Share on Twitter
                                    </button>
                                    <button onClick={() => handleShare('linkedin')} className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3.5 font-semibold transition-colors">
                                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                                        Share on LinkedIn
                                    </button>
                                    <button onClick={() => handleShare('facebook')} className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3.5 font-semibold transition-colors">
                                        <Facebook className="w-4 h-4 text-[#1877F2]" />
                                        Share on Facebook
                                    </button>
                                    <div className="h-px bg-slate-100 my-1.5 mx-3" />
                                    <button onClick={() => handleShare('copy')} className="w-full px-5 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3.5 font-semibold transition-colors">
                                        <Link2 className="w-4 h-4 text-slate-400" />
                                        Copy Link
                                    </button>
                                </div>
                            )}
                            <ActionButton 
                                icon={Bookmark} 
                                label={isBookmarked ? "Saved" : "Save"} 
                                onClick={() => setIsBookmarked(!isBookmarked)}
                                isActive={isBookmarked}
                            />
                        </div>
                    </div>
                </aside>

                {/* Article Content - Optimized for Reading */}
                <article className="min-w-0 w-full flex flex-col items-center">

                    {/* Engaging Introduction */}
                    <p className="max-w-[750px] w-full text-[1.4rem] md:text-[1.6rem] leading-[1.75] text-slate-600 font-serif mb-16 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-4 first-letter:float-left first-letter:leading-[0.85] first-letter:mt-2">
                        {article.description}
                    </p>

                    {/* Subtle Divider */}
                    <div className="max-w-[750px] w-full w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full mb-12" />

                    {/* Main Content with Enhanced Typography */}
                    <div
                        className="max-w-[750px] w-full prose prose-slate prose-lg max-w-none
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:scroll-mt-24
                        prose-h1:text-4xl prose-h1:mb-6
                        prose-h2:text-3xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-100
                        prose-h3:text-2xl prose-h3:mt-14 prose-h3:mb-6
                        prose-p:font-serif prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:mb-7 prose-p:text-[1.125rem] prose-p:tracking-wide
                        prose-a:text-emerald-600 prose-a:font-semibold prose-a:no-underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-emerald-700 hover:prose-a:underline prose-a:transition-all
                        prose-strong:text-slate-900 prose-strong:font-bold
                        prose-em:text-slate-600 prose-em:italic
                        prose-li:font-serif prose-li:text-slate-700 prose-li:leading-[1.85] prose-li:mb-3 prose-li:marker:text-emerald-500 prose-li:text-[1.1rem]
                        prose-ul:my-8 prose-ol:my-8
                        prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800 prose-blockquote:bg-gradient-to-r prose-blockquote:from-slate-50 prose-blockquote:to-transparent prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:pr-8 prose-blockquote:rounded-r-xl prose-blockquote:my-10 prose-blockquote:shadow-sm
                        prose-code:text-emerald-700 prose-code:bg-emerald-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:font-medium prose-code:before:content-[''] prose-code:after:content-['']
                        prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-xl prose-pre:border prose-pre:border-slate-700
                        prose-img:rounded-2xl prose-img:shadow-2xl prose-img:shadow-slate-200/50 prose-img:my-12 prose-img:border prose-img:border-slate-100
                        prose-hr:border-slate-200 prose-hr:my-16"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Tags Section */}
                    <div className="max-w-[750px] w-full mt-24 pt-10 border-t border-slate-200">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Topics</p>
                        <div className="flex flex-wrap gap-3">
                            <Tag label={article.category} />
                            <Tag label="Trading Strategy" />
                            <Tag label="Technical Analysis" />
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div className="mt-16 pt-16 border-t border-slate-200">
                        <CommentSection />
                    </div>

                </article>

                {/* Right Spacer */}
                <div className="hidden lg:block" />

            </main>

            {/* Related Articles - Full Width Section */}
            {!article.isPartOfCourse && (
                <div className="mt-40 bg-gradient-to-br from-slate-100 via-slate-50 to-white py-28 border-t border-slate-200">
                    <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
                        <div className="flex items-center gap-4 mb-14">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <Sparkles className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h2 className="font-serif text-4xl font-bold text-slate-900 tracking-tight">Continue Your Journey</h2>
                        </div>
                        <RelatedArticles currentSlug={article.slug} articles={articles} />
                    </div>
                </div>
            )}
        </div>
    );
}

function ActionButton({ icon: Icon, label, onClick, isActive = false }: { icon: any, label: string, onClick: () => void, isActive?: boolean }) {
    return (
        <button onClick={onClick} className="group flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-all duration-300 relative cursor-pointer">
            <div className={`p-3.5 rounded-xl bg-white border shadow-sm group-hover:shadow-md transition-all duration-300 ${isActive ? 'border-emerald-500 text-emerald-600 bg-emerald-50' : 'border-slate-200 group-hover:border-emerald-500 group-hover:text-emerald-600'}`}>
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute left-16 bg-slate-900 text-white px-3.5 py-2 rounded-lg whitespace-nowrap z-50 pointer-events-none shadow-xl">
                {label}
            </span>
        </button>
    );
}

function Tag({ label }: { label: string }) {
    return (
        <span className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 hover:shadow-sm transition-all duration-200 cursor-default">
            {label}
        </span>
    );
}

function LessonItem({ number, title, duration, status, slug }: { number: number, title: string, duration: string, status: 'completed' | 'current' | 'locked', slug: string }) {
    const content = (
        <div className={`p-5 flex items-start gap-4 border-b border-slate-100 transition-all duration-200 ${status === 'current' ? 'bg-emerald-50/30 border-l-4 border-l-emerald-500' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}>
            <div className="mt-0.5 shrink-0">
                {status === 'completed' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                {status === 'current' && <PlayCircle className="w-5 h-5 text-emerald-500 fill-emerald-100" />}
                {status === 'locked' && <Lock className="w-4 h-4 text-slate-300" />}
            </div>
            <div>
                <div className={`text-sm font-bold font-serif leading-tight mb-1.5 ${status === 'current' ? 'text-emerald-700' : 'text-slate-700'}`}>
                    {number}. {title}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{duration}</div>
            </div>
        </div>
    );

    if (status === 'locked') {
        return <div className="cursor-not-allowed opacity-60">{content}</div>;
    }

    return (
        <a href={`/articles/${slug}`} className="block group">
            {content}
        </a>
    );
}