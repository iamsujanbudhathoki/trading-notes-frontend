"use client";

import { use, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronDown, PlayCircle, CheckCircle2, Lock, Twitter, Linkedin, Facebook, Link as LinkIcon, Sparkles } from "lucide-react";
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
                className="h-full bg-copper-500 transition-all duration-150 ease-out"
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
        return <div className="min-h-screen bg-white flex items-center justify-center font-serif text-slate-400 animate-pulse">Loading Entry...</div>;
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
        <div className="bg-white min-h-screen pb-32 selection:bg-slate-200 selection:text-slate-900">
            <ReadingProgress />

            {/* Premium Hero Section - Contained Width */}
            <div className="relative w-full bg-slate-950 overflow-hidden">
                <div className="max-w-[1600px] mx-auto">
                    <div className="relative h-[70vh] min-h-[600px] max-h-[800px]">
                        {/* Background Image - Contained */}
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Clean Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />

                        {/* Content Container - Properly Aligned */}
                        <div className="absolute inset-0 flex items-end">
                            <div className="w-full px-6 md:px-12 lg:px-16 pb-12 md:pb-16 lg:pb-20">
                                <div className="max-w-4xl">
                                    {/* Category Badge - Refined */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-4 py-1.5 rounded-full bg-copper-500/20 backdrop-blur-sm border border-copper-400/30 text-copper-300 text-xs font-bold uppercase tracking-widest">
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Title - Better Hierarchy */}
                                    <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 md:mb-8 leading-[1.1] tracking-tight max-w-5xl">
                                        {article.title}
                                    </h1>

                                    {/* Meta Information - Clean & Minimal */}
                                    <div className="flex flex-wrap items-center gap-5 text-white/80 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-copper-400" />
                                            <span className="font-medium">{article.date}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-white/30" />
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-copper-400" />
                                            <span className="font-medium">{article.readTime}</span>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-white/30" />
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-copper-400 to-copper-600 flex items-center justify-center text-[10px] font-bold text-white">
                                                TN
                                            </div>
                                            <span className="font-medium">TradeNotes Team</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <main className={`max-w-[1400px] mx-auto px-6 pt-16 lg:pt-24 grid gap-16 relative ${article.isPartOfCourse ? 'grid-cols-1 lg:grid-cols-[80px_1fr_350px]' : 'grid-cols-1 lg:grid-cols-[80px_1fr_80px]'}`}>

                {/* Left Floating Navigation & Share */}
                <aside className="hidden lg:flex flex-col items-center h-full">
                    <div className="sticky top-32 flex flex-col items-center gap-8">
                        <Link href="/articles" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors relative">
                            <div className="p-3 rounded-full bg-white border border-slate-200 group-hover:border-copper-500 group-hover:text-copper-600 transition-all duration-300">
                                <ArrowLeft className="w-5 h-5" />
                            </div>
                        </Link>

                        <div className="w-px h-12 bg-slate-200" />

                        <div className="flex flex-col gap-4 relative" ref={shareMenuRef}>
                            <ActionButton icon={Share2} label="Share" onClick={() => setShowShareMenu(!showShareMenu)} />
                            {showShareMenu && (
                                <div className="absolute left-14 top-0 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                                    <button onClick={() => handleShare('twitter')} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 font-medium transition-colors">
                                        <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                                        Twitter
                                    </button>
                                    <button onClick={() => handleShare('linkedin')} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 font-medium transition-colors">
                                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                                        LinkedIn
                                    </button>
                                    <button onClick={() => handleShare('facebook')} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 font-medium transition-colors">
                                        <Facebook className="w-4 h-4 text-[#1877F2]" />
                                        Facebook
                                    </button>
                                    <button onClick={() => handleShare('copy')} className="w-full px-4 py-2.5 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 font-medium transition-colors border-t border-slate-100 mt-1 pt-2">
                                        <LinkIcon className="w-4 h-4 text-slate-400" />
                                        Copy Link
                                    </button>
                                </div>
                            )}
                            <ActionButton icon={Bookmark} label="Save" onClick={() => { }} />
                        </div>
                    </div>
                </aside>

                {/* Article Content */}
                <article className="min-w-0 max-w-[760px] mx-auto w-full">

                    <p className="text-2xl md:text-3xl text-slate-600 font-serif leading-relaxed mb-16 first-letter:text-6xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
                        {article.description}
                    </p>

                    <div
                        className="prose prose-slate prose-lg max-w-none
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                        prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                        prose-p:font-serif prose-p:text-slate-700 prose-p:leading-[2] prose-p:mb-8 prose-p:text-[1.15rem]
                        prose-a:text-copper-600 prose-a:font-bold prose-a:no-underline hover:prose-a:text-copper-700 hover:prose-a:underline
                        prose-strong:text-slate-900 prose-strong:font-bold
                        prose-li:font-serif prose-li:text-slate-700 prose-li:marker:text-copper-500
                        prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800 prose-blockquote:bg-slate-50 prose-blockquote:border-l-4 prose-blockquote:border-copper-500 prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:pr-8 prose-blockquote:rounded-r-xl prose-blockquote:my-12
                        prose-img:rounded-xl prose-img:shadow-2xl prose-img:shadow-slate-200 prose-img:my-12
                        prose-hr:border-slate-100 prose-hr:my-16"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    <div className="mt-20 pt-12 border-t border-slate-100">
                        <div className="flex flex-wrap gap-3 mb-12">
                            <Tag label={article.category} />
                            <Tag label="Trading Strategy" />
                            <Tag label="Technical Analysis" />
                        </div>
                    </div>

                    {/* Comment Section */}
                    <div className="mt-12">
                        <CommentSection />
                    </div>

                </article>

                {/* Right Sidebar - Course only */}
                {article.isPartOfCourse && article.lessonNumber && article.totalLessons ? (
                    <aside className="hidden lg:block h-full">
                        <div className="sticky top-32">
                            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <div
                                    className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    <div>
                                        <h4 className="font-serif font-bold text-slate-900 text-base">Course Curriculum</h4>
                                        <div className="text-xs text-slate-500 mt-1.5 font-medium uppercase tracking-wider">{article.totalLessons} Lessons</div>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isSidebarOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {isSidebarOpen && (
                                    <div className="max-h-[60vh] overflow-y-auto bg-white">
                                        <LessonItem number={1} title="Introduction" duration="8 min" status="completed" slug="introduction-to-technical-analysis" />
                                        <LessonItem number={2} title="Market Structure" duration="15 min" status="completed" slug="market-structure-basics" />
                                        <LessonItem number={3} title="Fair Value Gaps" duration="12 min" status={article.lessonNumber === 3 ? 'current' : 'completed'} slug="understanding-fair-value-gaps" />
                                        <LessonItem number={4} title="Order Blocks" duration="10 min" status="locked" slug="order-blocks-explained" />
                                        <LessonItem number={5} title="Liquidity" duration="14 min" status="locked" slug="liquidity-concepts" />
                                        <LessonItem number={6} title="Premium/Discount" duration="9 min" status="locked" slug="premium-discount-zones" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>
                ) : (
                    <div className="hidden lg:block" />
                )}

            </main>

            {/* Related Articles - Full Width Section - only for standalone */}
            {!article.isPartOfCourse && (
                <div className="mt-32 bg-slate-50 py-24">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex items-center gap-4 mb-12">
                            <Sparkles className="w-6 h-6 text-copper-500" />
                            <h2 className="font-serif text-3xl font-bold text-slate-900">Continue Reading</h2>
                        </div>
                        <RelatedArticles currentSlug={article.slug} articles={articles} />
                    </div>
                </div>
            )}
        </div>
    );
}

function ActionButton({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className="group flex flex-col items-center gap-1 text-slate-400 hover:text-slate-900 transition-colors relative cursor-pointer">
            <div className="p-3 rounded-full bg-white border border-slate-200 group-hover:border-copper-500 group-hover:text-copper-600 transition-all duration-300">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute left-14 bg-slate-900 text-white px-3 py-1.5 rounded-lg whitespace-nowrap z-50 pointer-events-none">
                {label}
            </span>
        </button>
    );
}

function Tag({ label }: { label: string }) {
    return (
        <span className="px-5 py-2 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full hover:border-copper-500 hover:text-copper-600 transition-all cursor-default">
            {label}
        </span>
    );
}

function LessonItem({ number, title, duration, status, slug }: { number: number, title: string, duration: string, status: 'completed' | 'current' | 'locked', slug: string }) {
    const content = (
        <div className={`p-5 flex items-start gap-4 border-b border-slate-100 transition-all duration-200 ${status === 'current' ? 'bg-copper-50/30 border-l-4 border-l-copper-500' : 'hover:bg-slate-50 border-l-4 border-l-transparent'}`}>
            <div className="mt-0.5 shrink-0">
                {status === 'completed' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                {status === 'current' && <PlayCircle className="w-5 h-5 text-copper-500 fill-copper-100" />}
                {status === 'locked' && <Lock className="w-4 h-4 text-slate-300" />}
            </div>
            <div>
                <div className={`text-sm font-bold font-serif leading-tight mb-1.5 ${status === 'current' ? 'text-copper-700' : 'text-slate-700'}`}>
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