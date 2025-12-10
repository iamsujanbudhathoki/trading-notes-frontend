"use client";

import { CheckCircle2, Circle, Lock } from "lucide-react";
import Link from "next/link";

export interface LessonProgress {
    id: string;
    title: string;
    href: string;
    completed: boolean;
    locked: boolean;
    duration?: string;
}

interface ProgressTrackerProps {
    lessons: LessonProgress[];
    currentLessonId?: string;
}

export function ProgressTracker({ lessons, currentLessonId }: ProgressTrackerProps) {
    const completedCount = lessons.filter(l => l.completed).length;
    const totalCount = lessons.length;
    const progressPercent = (completedCount / totalCount) * 100;

    return (
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">Your Progress</h3>
                    <span className="text-sm text-slate-600">
                        {completedCount} of {totalCount} complete
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-[#B85C38] to-[#E67E5A] transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                {progressPercent === 100 && (
                    <div className="mt-3 text-sm text-[#B85C38] font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Course Complete! 🎉
                    </div>
                )}
            </div>

            {/* Lesson List */}
            <div className="space-y-2">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === currentLessonId;
                    const isLocked = lesson.locked;

                    return (
                        <div key={lesson.id}>
                            {isLocked ? (
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 text-slate-400 cursor-not-allowed">
                                    <Lock className="w-5 h-5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">{lesson.title}</div>
                                        {lesson.duration && (
                                            <div className="text-xs mt-0.5">{lesson.duration}</div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={lesson.href}
                                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isCurrent
                                            ? 'bg-[#B85C38] text-white shadow-md'
                                            : lesson.completed
                                                ? 'bg-green-50 text-green-900 hover:bg-green-100'
                                                : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    {lesson.completed ? (
                                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-green-600" />
                                    ) : (
                                        <Circle className={`w-5 h-5 flex-shrink-0 ${isCurrent ? 'text-white' : 'text-slate-400'}`} />
                                    )}
                                    <div className="flex-1">
                                        <div className="font-medium text-sm">{lesson.title}</div>
                                        {lesson.duration && (
                                            <div className={`text-xs mt-0.5 ${isCurrent ? 'text-white/80' : 'text-slate-500'}`}>
                                                {lesson.duration}
                                            </div>
                                        )}
                                    </div>
                                    {isCurrent && (
                                        <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded">
                                            Current
                                        </span>
                                    )}
                                </Link>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
