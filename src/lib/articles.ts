export interface Article {
    slug: string;
    title: string;
    description: string;
    content: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    isPartOfCourse?: boolean;
    lessonNumber?: number;
    totalLessons?: number;
    nextLessonSlug?: string;
}

export const articles: Article[] = [
    {
        slug: "fair-value-gaps",
        title: "Understanding Fair Value Gaps in SMC Trading",
        description: "Learn how to identify and trade Fair Value Gaps (FVG) - one of the most powerful Smart Money Concepts for precision entries.",
        image: "/fvg.png",
        category: "Smart Money Concepts",
        date: "Nov 28, 2024",
        readTime: "12 min read",
        isPartOfCourse: true,
        lessonNumber: 3,
        totalLessons: 6,
        nextLessonSlug: "order-blocks",
        content: `
            <p>Fair Value Gaps (FVG) represent one of the most reliable price action setups in Smart Money Concepts trading. Understanding how institutions use these gaps can dramatically improve your entry precision.</p>
            
            <h2>What is a Fair Value Gap?</h2>
            <p>A Fair Value Gap occurs when there's an imbalance between buyers and sellers, creating a "gap" in price action that the market often returns to fill. These gaps represent areas where institutional orders were executed so quickly that retail traders were left behind.</p>
            
            <div class="callout callout-concept">
                <strong>Key Concept:</strong> FVGs are formed by three consecutive candles where the wick of candle 1 doesn't touch the wick of candle 3, leaving a visible gap on the chart.
            </div>
            
            <h2>Types of Fair Value Gaps</h2>
            <ul>
                <li><strong>Bullish FVG:</strong> Forms during upward price movement, acts as support</li>
                <li><strong>Bearish FVG:</strong> Forms during downward price movement, acts as resistance</li>
            </ul>
            
            <div class="callout callout-tip">
                <strong>Pro Tip:</strong> The most powerful FVGs are those that form at key market structure levels, such as after a Break of Structure (BOS) or Change of Character (CHOCH).
            </div>
        `
    },
    {
        slug: "candlestick-mastery",
        title: "Candlestick Patterns Every Trader Must Know",
        description: "From Doji to Engulfing patterns - master the language of price action with this comprehensive guide.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop",
        category: "Price Action",
        date: "Nov 27, 2024",
        readTime: "10 min read",
        isPartOfCourse: false,
        content: `
            <p>Candlestick patterns are the foundation of technical analysis. Understanding them is crucial for reading market sentiment and making informed trading decisions.</p>
            
            <h2>Essential Reversal Patterns</h2>
            <p>These patterns signal potential trend reversals:</p>
            <ul>
                <li><strong>Doji:</strong> Market indecision, potential reversal</li>
                <li><strong>Hammer/Shooting Star:</strong> Strong rejection of price levels</li>
                <li><strong>Engulfing Patterns:</strong> Momentum shift confirmation</li>
            </ul>
            
            <h2>Continuation Patterns</h2>
            <p>These patterns suggest the trend will continue:</p>
            <ul>
                <li><strong>Three White Soldiers:</strong> Strong bullish continuation</li>
                <li><strong>Three Black Crows:</strong> Strong bearish continuation</li>
            </ul>
        `
    },
    {
        slug: "risk-management-psychology",
        title: "The Psychology of Risk Management",
        description: "Why most traders fail at risk management and how to fix it with proven psychological techniques.",
        image: "/risk-management.jpg",
        category: "Trading Psychology",
        date: "Nov 26, 2024",
        readTime: "15 min read",
        isPartOfCourse: false,
        content: `
            <p>Risk management isn't just about numbers - it's about psychology. Learn how to overcome emotional biases and protect your capital.</p>
            
            <h2>The 1% Rule</h2>
            <p>Never risk more than 1-2% of your account on a single trade. This simple rule has saved countless traders from ruin.</p>
            
            <h2>Overcoming Loss Aversion</h2>
            <p>Traders are hardwired to feel losses more intensely than gains. Understanding this bias is the first step to overcoming it.</p>
        `
    }
];

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find(article => article.slug === slug);
}
