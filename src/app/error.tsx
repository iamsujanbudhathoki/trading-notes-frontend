"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
            <div className="text-center max-w-2xl">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-50 mb-8">
                    <AlertTriangle className="w-12 h-12 text-red-500" />
                </div>

                <h1 className="font-sans font-bold text-4xl text-slate-900 mb-4">
                    Something Went Wrong
                </h1>

                <p className="text-xl text-slate-600 mb-8">
                    We encountered an unexpected error. Don't worry, your data is safe.
                </p>

                {error.message && (
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-8 text-left">
                        <p className="text-sm font-mono text-red-800 break-all">
                            {error.message}
                        </p>
                    </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 bg-[#B85C38] hover:bg-[#A04D2F] text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-slate-200"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                </div>

                <p className="text-sm text-slate-400 mt-8">
                    If this problem persists, please try refreshing the page or clearing your browser cache.
                </p>
            </div>
        </div>
    );
}
