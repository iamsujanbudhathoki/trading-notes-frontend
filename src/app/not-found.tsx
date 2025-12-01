import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-6">
            <div className="text-center max-w-2xl">
                <div className="font-mono text-9xl font-bold text-slate-200 mb-8">404</div>
                <h1 className="font-sans font-bold text-4xl text-slate-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-xl text-slate-600 mb-12">
                    Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#B85C38] hover:bg-[#A04D2F] text-white font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-sans font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-slate-200"
                    >
                        <Search className="w-5 h-5" />
                        Browse Curriculum
                    </Link>
                </div>
            </div>
        </div>
    );
}
