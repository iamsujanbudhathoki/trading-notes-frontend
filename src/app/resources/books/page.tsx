import Link from "next/link";
import Image from "next/image";
import { Book, Star, ShoppingCart, ExternalLink, Bookmark } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Trading Books | Psychology, Technical Analysis & Strategy",
    description: "Curated list of must-read trading books: Trading in the Zone, Market Wizards, Technical Analysis of Financial Markets, and more. Elevate your trading mindset.",
    keywords: ["trading books", "Trading in the Zone", "Market Wizards", "trading psychology books", "technical analysis books", "best trading books"],
    openGraph: {
        title: "Best Trading Books | TRADENOTES",
        description: "Essential reading for serious traders. From psychology to technical analysis.",
        type: "website",
    },
};

const books = [
    {
        title: "Trading in the Zone",
        author: "Mark Douglas",
        description: "Master the market with confidence, discipline, and a winning attitude. The bible of trading psychology.",
        rating: 4.9,
        category: "Psychology",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
        link: "https://www.amazon.com/Trading-Zone-Confidence-Discipline-Attitude/dp/0735201447"
    },
    {
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        description: "The definitive book on value investing. A must-read for anyone serious about long-term wealth creation.",
        rating: 4.8,
        category: "Investing",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        link: "https://www.amazon.com/Intelligent-Investor-Definitive-Value-Investing/dp/0060555661"
    },
    {
        title: "Technical Analysis of the Financial Markets",
        author: "John J. Murphy",
        description: "A comprehensive guide to trading methods and applications. The standard reference for technical analysis.",
        rating: 4.7,
        category: "Technical Analysis",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=600&fit=crop",
        link: "https://www.amazon.com/Technical-Analysis-Financial-Markets-Comprehensive/dp/0735200661"
    },
    {
        title: "Market Wizards",
        author: "Jack D. Schwager",
        description: "Interviews with top traders. Learn the secrets of success from the world's most profitable market participants.",
        rating: 4.8,
        category: "Interviews",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=600&fit=crop",
        link: "https://www.amazon.com/Market-Wizards-Interviews-Top-Traders/dp/1118273052"
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        description: "Understand how your mind works and make better decisions. Essential for overcoming cognitive biases in trading.",
        rating: 4.6,
        category: "Psychology",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop",
        link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555"
    }
];

export default function BooksPage() {
    return (
        <div className="w-full min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-slate-900 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-6">
                        Recommended Reading
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Curated books to elevate your trading mindset, technical skills, and market understanding.
                    </p>
                </div>
            </section>

            {/* Books Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 -mt-10 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book) => (
                        <div key={book.title} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                            <div className="relative h-64 w-full bg-slate-100">
                                <Image
                                    src={book.image}
                                    alt={book.title}
                                    fill
                                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                    {book.category}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-2">
                                    <h2 className="font-sans font-bold text-xl text-slate-900 line-clamp-1" title={book.title}>
                                        {book.title}
                                    </h2>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
                                        <Star className="w-4 h-4 fill-current" />
                                        {book.rating}
                                    </div>
                                </div>
                                <p className="text-sm text-[#B85C38] font-medium mb-4">{book.author}</p>
                                <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-1">
                                    {book.description}
                                </p>

                                <a
                                    href={book.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Check Price
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
