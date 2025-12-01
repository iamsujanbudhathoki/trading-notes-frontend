"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReadingHeader } from "./ReadingHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isReadingMode = pathname?.startsWith("/articles/") && pathname !== "/articles";

    return (
        <>
            {isReadingMode ? <ReadingHeader /> : <Navbar />}
            <main className="min-h-screen">
                {children}
            </main>
            {!isReadingMode && <Footer />}
        </>
    );
}
