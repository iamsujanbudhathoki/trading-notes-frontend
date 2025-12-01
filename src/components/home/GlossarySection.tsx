import Link from "next/link";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const popularTerms = [
    "Fair Value Gap",
    "Order Block",
    "Liquidity",
    "Market Structure",
    "Imbalance"
];

export function GlossarySection() {
    return (
        <section className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-12">
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900">
                    Glossary
                </h2>
                <Link
                    href="/glossary"
                    className="text-[#B85C38] font-sans font-semibold hover:gap-2 transition-all duration-300 flex items-center"
                >
                    Browse all terms →
                </Link>
            </div>

            {/* Alphabetical Navigation */}
            <div className="flex flex-wrap gap-2 mb-10">
                {alphabet.map((letter) => (
                    <Link
                        key={letter}
                        href={`/glossary#${letter}`}
                        className="w-10 h-10 flex items-center justify-center border border-cream-dark rounded-lg hover:bg-[#B85C38] hover:text-white hover:border-[#B85C38] transition-all duration-300 font-sans font-semibold text-sm"
                    >
                        {letter}
                    </Link>
                ))}
            </div>

            {/* Popular Terms */}
            <div>
                <p className="text-slate-600 font-sans mb-4">Popular:</p>
                <div className="flex flex-wrap gap-3">
                    {popularTerms.map((term, index) => (
                        <span key={term} className="text-slate-900 font-sans">
                            <Link href={`/glossary/${term.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#B85C38] transition-colors duration-300">
                                {term}
                            </Link>
                            {index < popularTerms.length - 1 && <span className="text-slate-400 ml-3">·</span>}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
