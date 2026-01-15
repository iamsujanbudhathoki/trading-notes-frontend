import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const popularTerms = [
    "Fair Value Gap",
    "Order Block",
    "Liquidity",
    "Break of Structure",
    "Premium & Discount"
];

export function GlossarySection() {
    return (
        <section className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="font-serif font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                        The Trader's Dictionary
                    </h2>
                    <p className="text-slate-500 text-lg font-serif italic">
                        Decoding the language of the algorithm.
                    </p>
                </div>
                <Link
                    href="/glossary"
                    className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors flex items-center gap-2 group mb-2"
                >
                    View Full Index <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

            {/* Alphabetical Navigation - Refined */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-12">
                <div className="flex flex-wrap gap-2 justify-center">
                    {alphabet.map((letter) => (
                        <Link
                            key={letter}
                            href={`/glossary#${letter}`}
                            className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-500 font-bold hover:bg-emerald-50 hover:text-emerald-600 hover:scale-110 transition-all duration-200 text-sm"
                        >
                            {letter}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Terms - Integrated */}
            <div className="flex flex-col md:flex-row items-center gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs whitespace-nowrap">Trending Terms:</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start">
                    {popularTerms.map((term) => (
                        <Link
                            key={term}
                            href={`/glossary/${term.toLowerCase().replace(/ /g, '-')}`}
                            className="text-slate-700 font-serif hover:text-emerald-600 transition-colors duration-200 border-b border-transparent hover:border-emerald-200"
                        >
                            {term}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
