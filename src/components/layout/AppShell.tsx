"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReadingHeader } from "./ReadingHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isReadingMode = pathname?.startsWith("/articles/") && pathname !== "/articles";
    // Check for lesson pages (e.g., /learn/smart-money-concepts/some-slug)
    // We want to exclude the main listing page /learn/smart-money-concepts
    const isLessonMode = pathname?.includes("/learn/smart-money-concepts/") && pathname.split("/").length > 3;

    return (
        <>
            {!isLessonMode && (isReadingMode ? <ReadingHeader /> : <Navbar />)}
            <main className="min-h-screen">
                {children}
            </main>
            {!isReadingMode && !isLessonMode && <Footer />}
        </>
    );
}
