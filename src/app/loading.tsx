export default function Loading() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#B85C38] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-3 h-3 bg-[#B85C38] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-3 h-3 bg-[#B85C38] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
                <p className="text-sm font-sans font-semibold text-slate-400 uppercase tracking-wider">
                    Loading...
                </p>
            </div>
        </div>
    );
}
