"use client";

import { useState, useEffect } from "react";

export function useCourseProgress() {
    const [completedLessons, setCompletedLessons] = useState<string[]>([]);

    // Load progress from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("smc-course-progress");
        if (saved) {
            try {
                setCompletedLessons(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse course progress", e);
            }
        }
    }, []);

    // Save progress to localStorage whenever it changes
    useEffect(() => {
        if (completedLessons.length > 0) {
            localStorage.setItem("smc-course-progress", JSON.stringify(completedLessons));
        }
    }, [completedLessons]);

    const markAsComplete = (slug: string) => {
        if (!completedLessons.includes(slug)) {
            setCompletedLessons(prev => [...prev, slug]);
        }
    };

    const isCompleted = (slug: string) => {
        return completedLessons.includes(slug);
    };

    return { completedLessons, markAsComplete, isCompleted };
}
