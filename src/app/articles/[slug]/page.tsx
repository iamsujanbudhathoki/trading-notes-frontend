"use client";

import { use, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronDown, PlayCircle, CheckCircle2, Lock, Twitter, Linkedin, Facebook, Link as LinkIcon } from "lucide-react";
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
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
            <div
                className="h-full bg-[#B85C38] transition-all duration-150 ease-out"
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
        return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
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
        <div className="bg-white min-h-screen pb-32">
            <ReadingProgress />

            {/* Hero */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 max-w-[1400px] mx-auto">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#B85C38] mb-4 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B85C38]" />
                            {article.category}
                        </div>
                        <h1 className="font-serif font-extrabold text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/70 text-xs">
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meta Bar */}
            <div className="border-b border-slate-100 bg-white sticky top-0 z-30 h-14" />

            {/* Main Content */}
            <main className={`max-w-[1400px] mx-auto px-6 pt-12 grid gap-8 ${article.isPartOfCourse ? 'grid-cols-1 lg:grid-cols-[80px_1fr_300px]' : 'grid-cols-1 lg:grid-cols-[80px_1fr]'}`}>

                {/* Left Sidebar */}
                <aside className="hidden lg:block h-full">
                    <div className="sticky top-32 flex flex-col items-center gap-6">
                        <Link href="/articles" className="group flex flex-col items-center gap-1 text-slate-400 hover:text-[#B85C38] transition-colors relative">
                            <div className="p-3 rounded-full bg-slate-50 group-hover:bg-[#B85C38]/10 transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute left-14 bg-slate-800 text-white px-2 py-1 rounded shadow-sm whitespace-nowrap z-50 pointer-events-none">
                                Back
                            </span>
                        </Link>

                        <div className="w-8 h-px bg-slate-200" />

                        <div className="flex flex-col gap-3 relative" ref={shareMenuRef}>
                            <ActionButton icon={Share2} label="Share" onClick={() => setShowShareMenu(!showShareMenu)} />
                            {showShareMenu && (
                                <div className="absolute left-14 top-0 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50">
                                    <button onClick={() => handleShare('twitter')} className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer">
                                        <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                                        Twitter
                                    </button>
                                    <button onClick={() => handleShare('linkedin')} className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer">
                                        <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                                        LinkedIn
                                    </button>
                                    <button onClick={() => handleShare('facebook')} className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer">
                                        <Facebook className="w-4 h-4 text-[#1877F2]" />
                                        Facebook
                                    </button>
                                    <button onClick={() => handleShare('copy')} className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 cursor-pointer">
                                        <LinkIcon className="w-4 h-4 text-slate-600" />
                                        Copy Link
                                    </button>
                                </div>
                            )}
                            <ActionButton icon={Bookmark} label="Save" onClick={() => { }} />
                        </div>
                    </div>
                </aside>

                <article className="min-w-0 max-w-[680px] mx-auto w-full">

                    <p className="text-base text-slate-600 font-sans leading-relaxed mb-8 border-l-4 border-[#B85C38] pl-5">
                        {article.description}
                    </p>

                    <div
                        className="max-w-none text-sm text-slate-700 leading-relaxed
                        [&>h1]:font-serif [&>h1]:font-semibold [&>h1]:text-2xl [&>h1]:text-slate-900 [&>h1]:mt-8 [&>h1]:mb-4
                        [&>h2]:font-serif [&>h2]:font-semibold [&>h2]:text-xl [&>h2]:text-slate-900 [&>h2]:mt-6 [&>h2]:mb-3
                        [&>h3]:font-serif [&>h3]:font-semibold [&>h3]:text-lg [&>h3]:text-slate-900 [&>h3]:mt-5 [&>h3]:mb-2
                        [&>p]:text-sm [&>p]:text-slate-700 [&>p]:leading-relaxed [&>p]:mb-4
                        [&>ul]:text-sm [&>ul]:text-slate-700 [&>ul]:my-4 [&>ul]:ml-6
                        [&>ol]:text-sm [&>ol]:text-slate-700 [&>ol]:my-4 [&>ol]:ml-6
                        [&>li]:text-sm [&>li]:leading-relaxed
                        [&>strong]:text-slate-900 [&>strong]:font-semibold
                        [&>a]:text-[#B85C38] [&>a]:no-underline hover:[&>a]:underline
                        [&>blockquote]:border-l-4 [&>blockquote]:border-[#B85C38] [&>blockquote]:bg-slate-50 [&>blockquote]:py-3 [&>blockquote]:px-4 [&>blockquote]:my-4 [&>blockquote]:text-sm
                        [&>img]:rounded-lg [&>img]:shadow-sm [&>img]:my-4 [&>img]:w-full"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />



                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <div className="flex flex-wrap gap-2 mb-8">
                            <Tag label={article.category} />
                            <Tag label="Trading" />
                        </div>
                    </div>

                    {/* Comment Section */}
                    <CommentSection />

                </article>

                {/* Right Sidebar - Course only */}
                {article.isPartOfCourse && article.lessonNumber && article.totalLessons && (
                    <aside className="hidden lg:block">
                        <div className="sticky top-24">
                            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                                <div
                                    className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between cursor-pointer"
                                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                >
                                    <div>
                                        <h4 className="font-sans font-bold text-slate-900 text-xs uppercase">Curriculum</h4>
                                        <div className="text-xs text-slate-500 mt-1">{article.totalLessons} Lessons</div>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {isSidebarOpen && (
                                    <div className="max-h-[400px] overflow-y-auto">
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
                )}

            </main>

            {/* Related Articles - Full Width Section - only for standalone */}
            {!article.isPartOfCourse && (
                <RelatedArticles currentSlug={article.slug} articles={articles} />
            )}
        </div>
    );
}

function ActionButton({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) {
    return (
        <button onClick={onClick} className="group flex flex-col items-center gap-1 text-slate-400 hover:text-[#B85C38] transition-colors relative cursor-pointer">
            <div className="p-3 rounded-full bg-slate-50 group-hover:bg-[#B85C38]/10 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute left-14 bg-slate-800 text-white px-2 py-1 rounded shadow-sm whitespace-nowrap z-50 pointer-events-none">
                {label}
            </span>
        </button>
    );
}

function Tag({ label }: { label: string }) {
    return (
        <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
            {label}
        </span>
    );
}

function LessonItem({ number, title, duration, status, slug }: { number: number, title: string, duration: string, status: 'completed' | 'current' | 'locked', slug: string }) {
    const content = (
        <div className={`p-4 flex items-start gap-3 border-b border-slate-50 transition-colors ${status === 'current' ? 'bg-[#B85C38]/5' : 'hover:bg-slate-50'}`}>
            <div className="mt-0.5">
                {status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                {status === 'current' && <PlayCircle className="w-4 h-4 text-[#B85C38]" />}
                {status === 'locked' && <Lock className="w-4 h-4 text-slate-300" />}
            </div>
            <div>
                <div className={`text-sm font-medium ${status === 'current' ? 'text-[#B85C38]' : 'text-slate-700'}`}>
                    {number}. {title}
                </div>
                <div className="text-xs text-slate-400">{duration}</div>
            </div>
        </div>
    );

    if (status === 'locked') {
        return <div className="cursor-not-allowed opacity-75">{content}</div>;
    }

    return (
        <Link href={`/articles/${slug}`} className="block">
            {content}
        </Link>
    );
}
