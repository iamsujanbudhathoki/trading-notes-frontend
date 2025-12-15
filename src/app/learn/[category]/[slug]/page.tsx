"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, PlayCircle, CheckCircle2, Lock, Menu, X, Clock, BookOpen, Calendar, Check, ArrowRight, Maximize2, Minimize2 } from "lucide-react";
import { getLesson, getLessonContent, getCurriculum, categoryMetadata } from "@/lib/curriculum";
import { useCourseProgress } from "@/hooks/useCourseProgress";

function ReadingProgress({ targetRef, onComplete, accentColor }: { targetRef: React.RefObject<HTMLElement | null>, onComplete?: () => void, accentColor: string }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const updateProgress = () => {
            const currentProgress = target.scrollTop;
            const scrollHeight = target.scrollHeight - target.clientHeight;
            if (scrollHeight) {
                const percent = Number((currentProgress / scrollHeight).toFixed(2)) * 100;
                setProgress(percent);

                // Auto-complete when user reads 90% of the content
                if (percent > 90 && onComplete) {
                    onComplete();
                }
            }
        };

        target.addEventListener("scroll", updateProgress);
        return () => target.removeEventListener("scroll", updateProgress);
    }, [targetRef, onComplete]);

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
            <div
                className="h-full transition-all duration-150 ease-out"
                style={{
                    width: `${progress}%`,
                    backgroundColor: accentColor,
                    boxShadow: `0 0 10px ${accentColor}80`
                }}
            />
        </div>
    );
}

export default function LessonPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const resolvedParams = use(params);
    const { category, slug } = resolvedParams;
    const router = useRouter();

    const [lesson, setLesson] = useState<any>(null);
    const [content, setContent] = useState<string>("");
    const [prevLesson, setPrevLesson] = useState<any>(null);
    const [nextLesson, setNextLesson] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const mainContentRef = useRef<HTMLElement>(null);

    const { markAsComplete, isCompleted, completedLessons } = useCourseProgress();
    const isLessonCompleted = lesson ? isCompleted(lesson.slug) : false;

    // Get curriculum and metadata
    const curriculum = getCurriculum(category);
    const metadata = categoryMetadata[category];
    const accentColor = metadata?.color || "#B85C38"; // Default to copper if not found

    // Calculate Course Progress
    const totalLessons = curriculum ? curriculum.reduce((acc, sec) => acc + sec.lessons.length, 0) : 0;

    const currentCurriculumSlugs = curriculum ? curriculum.flatMap(s => s.lessons.map(l => l.slug)) : [];
    const completedInThisCourse = completedLessons.filter(slug => currentCurriculumSlugs.includes(slug)).length;
    const progressPercentage = totalLessons > 0 ? Math.round((completedInThisCourse / totalLessons) * 100) : 0;

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    // Update isFullscreen state on change (e.g. via Esc key)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" && prevLesson) {
                router.push(`/learn/${category}/${prevLesson.slug}`);
            }
            if (e.key === "ArrowRight" && nextLesson) {
                router.push(`/learn/${category}/${nextLesson.slug}`);
            }
            if (e.key === "Escape") {
                setZoomedImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [prevLesson, nextLesson, router, category]);

    useEffect(() => {
        if (!curriculum) {
            notFound();
            return;
        }

        const data = getLesson(category, slug);
        if (data) {
            setLesson(data);
            setContent(getLessonContent(slug));

            // Calculate prev/next
            const allLessons = curriculum.flatMap(section => section.lessons);
            const currentIndex = allLessons.findIndex(l => l.slug === slug);

            if (currentIndex > 0) {
                setPrevLesson(allLessons[currentIndex - 1]);
            } else {
                setPrevLesson(null);
            }

            if (currentIndex < allLessons.length - 1) {
                setNextLesson(allLessons[currentIndex + 1]);
            } else {
                setNextLesson(null);
            }
        } else {
            notFound();
        }
    }, [category, slug, curriculum]);

    if (!lesson || !curriculum || !metadata) return null;

    return (
        <div className="flex h-screen bg-white overflow-hidden selection:bg-copper-500/30 selection:text-copper-900">
            {/* Image Lightbox */}
            {zoomedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setZoomedImage(null)}
                >
                    <button
                        onClick={() => setZoomedImage(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={zoomedImage}
                        alt="Zoomed View"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in-95 duration-300"
                    />
                </div>
            )}

            {/* Sidebar Navigation */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-80 bg-slate-50/80 backdrop-blur-xl border-r border-slate-200/60 transform transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:translate-x-0 md:static md:h-screen md:overflow-y-auto
                ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
            `}>
                <div className="p-6 border-b border-slate-200/60 bg-white/50 backdrop-blur-md sticky top-0 z-10">
                    <Link href={`/learn/${category}`} className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 mb-6 transition-colors group uppercase tracking-wider">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        Back to Course
                    </Link>

                    <div className="mb-4">
                        <h2 className="font-serif font-bold text-xl text-slate-900 leading-tight mb-3">
                            {metadata.title}
                        </h2>
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            <span>Progress</span>
                            <span style={{ color: accentColor }}>{progressPercentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-700 ease-out"
                                style={{ width: `${progressPercentage}%`, backgroundColor: accentColor }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 space-y-8 pb-20">
                    {curriculum.map((section, sIdx) => (
                        <div key={section.section}>
                            <h3 className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[9px] text-slate-500 font-serif">{sIdx + 1}</span>
                                {section.section}
                            </h3>
                            <div className="space-y-1">
                                {section.lessons.map((l, lIdx) => {
                                    const isActive = l.slug === lesson.slug;
                                    const isDone = isCompleted(l.slug);

                                    return (
                                        <Link
                                            key={l.slug}
                                            href={`/learn/${category}/${l.slug}`}
                                            className={`
                                                flex items-start gap-3 p-3 rounded-xl transition-all duration-200 group relative
                                                ${isActive
                                                    ? 'bg-white shadow-lg shadow-slate-900/5 border border-slate-100 z-10'
                                                    : 'hover:bg-white/60 hover:shadow-sm border border-transparent text-slate-500 hover:text-slate-900'
                                                }
                                            `}
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            {isActive && (
                                                <div
                                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                                                    style={{ backgroundColor: accentColor }}
                                                />
                                            )}

                                            <div className={`mt-0.5 shrink-0 transition-colors duration-200 ${isActive ? '' : isDone ? 'text-green-500' : 'text-slate-300 group-hover:text-slate-400'}`}
                                                style={isActive ? { color: accentColor } : {}}
                                            >
                                                {isDone ? (
                                                    <CheckCircle2 className="w-4 h-4" />
                                                ) : isActive ? (
                                                    <PlayCircle className="w-4 h-4 fill-white" />
                                                ) : (
                                                    <div className="w-4 h-4 rounded-full border-2 border-current" />
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <div className={`text-sm font-medium leading-snug mb-0.5 truncate pr-2 transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                                                    {l.title}
                                                </div>
                                                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                                                    <span>{l.duration}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 z-40 md:hidden backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <main ref={mainContentRef} className="flex-1 min-w-0 md:h-screen md:overflow-y-auto bg-[#fdfdfd] relative scroll-smooth">
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 bg-[#fafafa] opacity-50 pointer-events-none mix-blend-multiply z-0" />

                {/* Reading Progress */}
                <ReadingProgress
                    targetRef={mainContentRef}
                    onComplete={() => markAsComplete(lesson.slug)}
                    accentColor={accentColor}
                />

                {/* Top Header */}
                <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex items-center justify-between transition-all duration-200 supports-[backdrop-filter]:bg-white/60">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden md:flex">
                                <Link href="/learn" className="hover:text-slate-900 transition-colors">Learn</Link>
                                <ChevronRight className="w-3 h-3" />
                                <Link href={`/learn/${category}`} className="hover:text-slate-900 transition-colors">{metadata.title}</Link>
                            </div>
                            <h1 className="font-serif font-bold text-slate-900 text-lg md:text-xl truncate max-w-[200px] md:max-w-md mt-0.5">
                                {lesson.title}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors hidden sm:block"
                            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                        >
                            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => markAsComplete(lesson.slug)}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border
                                ${isLessonCompleted
                                    ? "bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                                    : "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                }
                            `}
                        >
                            {isLessonCompleted ? (
                                <>
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Completed</span>
                                </>
                            ) : (
                                <>
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Mark Complete</span>
                                </>
                            )}
                        </button>
                    </div>
                </header>

                <div key={slug} className="relative z-10 max-w-3xl mx-auto px-6 py-12 min-h-[calc(100vh-5rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">

                    {/* Lesson Metadata */}
                    <div className="flex items-center gap-6 text-sm text-slate-500 font-medium mb-10 pb-6 border-b border-slate-100 border-dashed">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            {lesson.duration} read
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-slate-400" />
                            Last updated: Oct 24, 2024
                        </div>
                    </div>

                    {/* Lesson Content */}
                    <div
                        className="flex-1 prose prose-slate prose-lg max-w-none
                            prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                            prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                            prose-p:font-serif prose-p:text-slate-700 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[1.125rem]
                            prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                            prose-strong:text-slate-900 prose-strong:font-bold
                            prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:font-medium prose-code:text-slate-800
                            prose-img:rounded-xl prose-img:shadow-lg prose-img:shadow-slate-900/5 prose-img:border prose-img:border-slate-200/50 prose-img:my-10 prose-img:transition-transform prose-img:duration-500 hover:prose-img:scale-[1.01] prose-img:cursor-zoom-in
                            prose-ul:my-8 prose-li:my-3 prose-li:marker:text-slate-300 prose-li:font-serif
                            prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-800 prose-blockquote:bg-[#fffdf5] prose-blockquote:border prose-blockquote:border-yellow-200/50 prose-blockquote:rounded-xl prose-blockquote:p-6 prose-blockquote:shadow-sm prose-blockquote:my-10 prose-blockquote:relative
                            prose-hr:border-slate-100 prose-hr:my-12
                        "
                        style={{
                            '--tw-prose-links': accentColor,
                            '--tw-prose-code': accentColor,
                            '--tw-prose-quote-borders': 'transparent', // Overridden by class
                        } as React.CSSProperties}
                        dangerouslySetInnerHTML={{ __html: content }}
                        onClick={(e) => {
                            const target = e.target as HTMLElement;
                            if (target.tagName === 'IMG') {
                                setZoomedImage((target as HTMLImageElement).src);
                            }
                        }}
                    />

                    {/* Navigation Footer */}
                    <div className="mt-20 pt-12 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prevLesson ? (
                                <Link
                                    href={`/learn/${category}/${prevLesson.slug}`}
                                    className="group flex flex-col justify-between p-6 h-full rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
                                    style={{ '--hover-border-color': accentColor } as React.CSSProperties}
                                >
                                    <div
                                        className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-3 group-hover:text-slate-600 transition-colors"
                                    >
                                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                        Previous Lesson
                                    </div>
                                    <div className="font-serif font-bold text-slate-900 text-lg leading-tight line-clamp-2 group-hover:text-slate-700 transition-colors">
                                        {prevLesson.title}
                                    </div>
                                    <style jsx>{`
                                        .group:hover {
                                            border-color: ${accentColor}40;
                                        }
                                    `}</style>
                                </Link>
                            ) : (
                                <div /> /* Spacer */
                            )}

                            {nextLesson ? (
                                <Link
                                    href={`/learn/${category}/${nextLesson.slug}`}
                                    className="group flex flex-col justify-between p-6 h-full rounded-2xl bg-slate-900 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ '--hover-bg': accentColor } as React.CSSProperties}
                                >
                                    <div className="flex items-center justify-end gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-3 group-hover:text-white/90 transition-colors">
                                        Next Lesson
                                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <div className="font-serif font-bold text-white text-lg leading-tight text-right line-clamp-2">
                                        {nextLesson.title}
                                    </div>
                                    <style jsx>{`
                                        .group:hover {
                                            background-color: ${accentColor};
                                            box-shadow: 0 10px 25px -5px ${accentColor}40;
                                        }
                                    `}</style>
                                </Link>
                            ) : (
                                <Link
                                    href={`/learn/${category}`}
                                    className="group flex flex-col justify-between p-6 h-full rounded-2xl text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{
                                        background: `linear-gradient(to bottom right, ${accentColor}, ${accentColor}dd)`,
                                        boxShadow: `0 10px 25px -5px ${accentColor}40`
                                    }}
                                >
                                    <div className="flex items-center justify-end gap-2 text-white/80 text-[11px] font-bold uppercase tracking-wider mb-3">
                                        Course Complete
                                        <CheckCircle2 className="w-3 h-3" />
                                    </div>
                                    <div className="font-serif font-bold text-white text-lg leading-tight text-right">
                                        Back to Curriculum
                                    </div>
                                </Link>
                            )}
                        </div>

                        {/* Keyboard Hint */}
                        <div className="hidden md:flex items-center justify-center gap-8 mt-12 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-500 font-sans min-w-[24px] text-center">←</kbd>
                                Prev
                            </span>
                            <span className="flex items-center gap-2">
                                <kbd className="px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-500 font-sans min-w-[24px] text-center">→</kbd>
                                Next
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
