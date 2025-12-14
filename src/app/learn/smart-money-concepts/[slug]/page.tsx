"use client";

import { useRouter } from "next/navigation";
import { use, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronRight, PlayCircle, CheckCircle2, Lock, Menu, X, Clock } from "lucide-react";
import { smcCurriculum, getLessonBySlug, getLessonContent } from "@/lib/curriculum";
import { useCourseProgress } from "@/hooks/useCourseProgress";

function ReadingProgress({ targetRef, onComplete }: { targetRef: React.RefObject<HTMLElement | null>, onComplete?: () => void }) {
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
                className="h-full bg-copper-500 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const [lesson, setLesson] = useState<any>(null);
    const [content, setContent] = useState<string>("");
    const [prevLesson, setPrevLesson] = useState<any>(null);
    const [nextLesson, setNextLesson] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);
    const mainContentRef = useRef<HTMLElement>(null);

    const { markAsComplete, isCompleted, completedLessons } = useCourseProgress();
    const isLessonCompleted = lesson ? isCompleted(lesson.slug) : false;

    // Calculate Course Progress
    const totalLessons = smcCurriculum.reduce((acc, sec) => acc + sec.lessons.length, 0);
    const completedCount = completedLessons.length;
    const progressPercentage = Math.round((completedCount / totalLessons) * 100);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" && prevLesson) {
                router.push(`/learn/smart-money-concepts/${prevLesson.slug}`);
            }
            if (e.key === "ArrowRight" && nextLesson) {
                router.push(`/learn/smart-money-concepts/${nextLesson.slug}`);
            }
            if (e.key === "Escape") {
                setZoomedImage(null);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [prevLesson, nextLesson, router]);

    useEffect(() => {
        const data = getLessonBySlug(resolvedParams.slug);
        if (data) {
            setLesson(data);
            setContent(getLessonContent(resolvedParams.slug));

            // Calculate prev/next
            const allLessons = smcCurriculum.flatMap(section => section.lessons);
            const currentIndex = allLessons.findIndex(l => l.slug === resolvedParams.slug);

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
    }, [resolvedParams.slug]);

    if (!lesson) return null;

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
            {/* Image Lightbox */}
            {zoomedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setZoomedImage(null)}
                >
                    <button
                        onClick={() => setZoomedImage(null)}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
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
                fixed inset-y-0 left-0 z-50 w-80 bg-slate-50 border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen md:overflow-y-auto
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 border-b border-slate-200 bg-white sticky top-0 z-10">
                    <Link href="/learn/smart-money-concepts" className="flex items-center gap-2 text-sm text-slate-500 hover:text-copper-600 mb-6 transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Course
                    </Link>

                    <div className="mb-4">
                        <h2 className="font-serif font-bold text-xl text-slate-900 leading-tight mb-2">
                            Smart Money Concepts
                        </h2>
                        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1.5">
                            <span>Course Progress</span>
                            <span className="text-copper-600">{progressPercentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-copper-500 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progressPercentage}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-4 space-y-8 pb-20">
                    {smcCurriculum.map((section, sIdx) => (
                        <div key={section.section}>
                            <h3 className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[9px] text-slate-500">{sIdx + 1}</span>
                                {section.section}
                            </h3>
                            <div className="space-y-0.5">
                                {section.lessons.map((l, lIdx) => {
                                    const isActive = l.slug === lesson.slug;
                                    const isDone = isCompleted(l.slug);

                                    return (
                                        <Link
                                            key={l.slug}
                                            href={`/learn/smart-money-concepts/${l.slug}`}
                                            className={`
                                                flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group relative
                                                ${isActive
                                                    ? 'bg-white shadow-sm border border-slate-200 z-10'
                                                    : 'hover:bg-slate-100 border border-transparent opacity-80 hover:opacity-100'
                                                }
                                            `}
                                            onClick={() => setIsSidebarOpen(false)}
                                        >
                                            {isActive && (
                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-copper-500 rounded-r-full" />
                                            )}

                                            <div className={`mt-0.5 shrink-0 ${isActive ? 'text-copper-600' : isDone ? 'text-green-600' : 'text-slate-300 group-hover:text-slate-400'}`}>
                                                {isDone ? (
                                                    <CheckCircle2 className="w-4 h-4" />
                                                ) : isActive ? (
                                                    <PlayCircle className="w-4 h-4" />
                                                ) : (
                                                    <div className="w-4 h-4 rounded-full border-2 border-current" />
                                                )}
                                            </div>
                                            <div className="min-w-0">
                                                <div className={`text-sm font-medium leading-snug mb-0.5 truncate pr-2 ${isActive ? 'text-copper-900' : isDone ? 'text-slate-600' : 'text-slate-600'}`}>
                                                    {l.title}
                                                </div>
                                                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                                                    <span>{l.duration}</span>
                                                    {isDone && <span className="text-green-600 font-medium">• Completed</span>}
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
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <main ref={mainContentRef} className="flex-1 min-w-0 md:h-screen md:overflow-y-auto bg-white relative">
                {/* Reading Progress */}
                <ReadingProgress
                    targetRef={mainContentRef}
                    onComplete={() => markAsComplete(lesson.slug)}
                />

                {/* Top Header */}
                <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between transition-all duration-200">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden text-slate-500 hover:text-slate-900">
                            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden md:flex">
                                <Link href="/learn" className="hover:text-copper-600 transition-colors">Learn</Link>
                                <ChevronRight className="w-3 h-3" />
                                <Link href="/learn/smart-money-concepts" className="hover:text-copper-600 transition-colors">SMC</Link>
                            </div>
                            <h1 className="font-serif font-bold text-slate-900 text-lg md:text-xl truncate max-w-[200px] md:max-w-md mt-0.5">
                                {lesson.title}
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {isLessonCompleted ? (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full border border-green-200/50 shadow-sm">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Completed</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider rounded-full border border-slate-200/50">
                                <div className="w-2 h-2 rounded-full bg-copper-500 animate-pulse" />
                                <span className="hidden sm:inline">In Progress</span>
                            </div>
                        )}
                    </div>
                </header>

                <div key={resolvedParams.slug} className="max-w-3xl mx-auto px-6 py-12 min-h-[calc(100vh-5rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                    {/* Lesson Content */}
                    <div
                        className="flex-1 prose prose-slate prose-sm max-w-none
                            prose-headings:font-serif prose-headings:font-bold prose-headings:text-slate-900
                            prose-p:text-slate-600 prose-p:leading-7
                            prose-a:text-copper-600 prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 prose-strong:font-bold
                            prose-code:text-copper-600 prose-code:bg-copper-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-xs prose-code:font-medium
                            prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-slate-100 prose-img:transition-transform prose-img:duration-300 hover:prose-img:scale-[1.02] prose-img:cursor-zoom-in
                            prose-ul:my-6 prose-li:my-2 prose-li:marker:text-copper-400
                            prose-blockquote:border-l-4 prose-blockquote:border-copper-500 prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700
                        "
                        dangerouslySetInnerHTML={{ __html: content }}
                        onClick={(e) => {
                            const target = e.target as HTMLElement;
                            if (target.tagName === 'IMG') {
                                setZoomedImage((target as HTMLImageElement).src);
                            }
                        }}
                    />

                    {/* Navigation Footer */}
                    <div className="mt-auto pt-16 border-t border-slate-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {prevLesson ? (
                                <Link
                                    href={`/learn/smart-money-concepts/${prevLesson.slug}`}
                                    className="group flex flex-col justify-between p-5 h-full rounded-2xl border border-slate-200 hover:border-copper-200 hover:bg-copper-50/30 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2 group-hover:text-copper-600 transition-colors">
                                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                                        Previous Lesson
                                    </div>
                                    <div className="font-serif font-bold text-slate-900 text-base leading-tight line-clamp-2 group-hover:text-copper-700 transition-colors">
                                        {prevLesson.title}
                                    </div>
                                </Link>
                            ) : (
                                <div /> /* Spacer */
                            )}

                            {nextLesson ? (
                                <Link
                                    href={`/learn/smart-money-concepts/${nextLesson.slug}`}
                                    className="group flex flex-col justify-between p-5 h-full rounded-2xl bg-slate-900 text-white hover:bg-copper-600 hover:shadow-xl hover:shadow-copper-500/20 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-end gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-2 group-hover:text-white/90 transition-colors">
                                        Next Lesson
                                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                    <div className="font-serif font-bold text-white text-base leading-tight text-right line-clamp-2">
                                        {nextLesson.title}
                                    </div>
                                </Link>
                            ) : (
                                <Link
                                    href="/learn/smart-money-concepts"
                                    className="group flex flex-col justify-between p-5 h-full rounded-2xl bg-gradient-to-br from-copper-500 to-copper-600 text-white hover:shadow-xl hover:shadow-copper-500/30 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center justify-end gap-2 text-white/80 text-[11px] font-bold uppercase tracking-wider mb-2">
                                        Course Complete
                                        <CheckCircle2 className="w-3 h-3" />
                                    </div>
                                    <div className="font-serif font-bold text-white text-base leading-tight text-right">
                                        Back to Curriculum
                                    </div>
                                </Link>
                            )}
                        </div>

                        {/* Keyboard Hint */}
                        <div className="hidden md:flex items-center justify-center gap-6 mt-8 text-[10px] font-medium text-slate-400 uppercase tracking-widest">
                            <span className="flex items-center gap-1.5">
                                <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-slate-500 font-sans">←</kbd>
                                Prev
                            </span>
                            <span className="flex items-center gap-1.5">
                                <kbd className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-slate-500 font-sans">→</kbd>
                                Next
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
