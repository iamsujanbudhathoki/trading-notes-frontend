
export type Lesson = {
    title: string;
    duration: string;
    slug: string;
};

export type Section = {
    section: string;
    lessons: Lesson[];
};

export type Curriculum = Section[];

const smcCurriculum: Curriculum = [
    {
        section: "Foundation",
        lessons: [
            { title: "What is Smart Money?", duration: "8 min", slug: "what-is-smart-money" },
            { title: "Understanding Institutional Orderflow", duration: "12 min", slug: "understanding-institutional-orderflow" },
            { title: "Market Structure Basics", duration: "10 min", slug: "market-structure-basics" },
            { title: "Higher Highs, Higher Lows, Lower Highs, Lower Lows", duration: "15 min", slug: "market-structure-advanced" }
        ]
    },
    {
        section: "Order Blocks",
        lessons: [
            { title: "What are Order Blocks?", duration: "10 min", slug: "what-are-order-blocks" },
            { title: "Bullish Order Blocks", duration: "12 min", slug: "bullish-order-blocks" },
            { title: "Bearish Order Blocks", duration: "12 min", slug: "bearish-order-blocks" },
            { title: "Breaker Blocks Explained", duration: "14 min", slug: "breaker-blocks-explained" },
            { title: "Mitigation Blocks", duration: "10 min", slug: "mitigation-blocks" },
            { title: "How to Trade Order Blocks", duration: "18 min", slug: "how-to-trade-order-blocks" }
        ]
    },
    {
        section: "Fair Value Gaps (FVG)",
        lessons: [
            { title: "Understanding Price Inefficiencies", duration: "10 min", slug: "understanding-price-inefficiencies" },
            { title: "Bullish Fair Value Gaps", duration: "12 min", slug: "bullish-fair-value-gaps" },
            { title: "Bearish Fair Value Gaps", duration: "12 min", slug: "bearish-fair-value-gaps" },
            { title: "FVG Inversions", duration: "15 min", slug: "fvg-inversions" },
            { title: "Rejection Blocks", duration: "10 min", slug: "rejection-blocks" },
            { title: "Trading FVGs Effectively", duration: "20 min", slug: "trading-fvgs-effectively" }
        ]
    },
    {
        section: "Liquidity Concepts",
        lessons: [
            { title: "What is Liquidity?", duration: "8 min", slug: "what-is-liquidity" },
            { title: "Buy-Side Liquidity (BSL)", duration: "12 min", slug: "buy-side-liquidity" },
            { title: "Sell-Side Liquidity (SSL)", duration: "12 min", slug: "sell-side-liquidity" },
            { title: "Liquidity Grabs & Stop Hunts", duration: "15 min", slug: "liquidity-grabs-stop-hunts" },
            { title: "Liquidity Pools", duration: "10 min", slug: "liquidity-pools" },
            { title: "Trading Liquidity Sweeps", duration: "18 min", slug: "trading-liquidity-sweeps" }
        ]
    },
    {
        section: "Market Structure",
        lessons: [
            { title: "Break of Structure (BOS)", duration: "12 min", slug: "break-of-structure" },
            { title: "Change of Character (ChoCH)", duration: "14 min", slug: "change-of-character" },
            { title: "Market Structure Shifts (MSS)", duration: "15 min", slug: "market-structure-shifts" },
            { title: "Internal vs External Structure", duration: "16 min", slug: "internal-vs-external-structure" },
            { title: "Identifying Trend Reversals", duration: "18 min", slug: "identifying-trend-reversals" }
        ]
    },
    {
        section: "Advanced Concepts",
        lessons: [
            { title: "Premium & Discount Zones", duration: "14 min", slug: "premium-discount-zones" },
            { title: "Optimal Trade Entry (OTE)", duration: "16 min", slug: "optimal-trade-entry" },
            { title: "Institutional Reference Points", duration: "12 min", slug: "institutional-reference-points" },
            { title: "Kill Zones & Session Trading", duration: "15 min", slug: "kill-zones-session-trading" },
            { title: "Confluence & Multi-Timeframe Analysis", duration: "20 min", slug: "confluence-multi-timeframe-analysis" }
        ]
    },
    {
        section: "Putting It All Together",
        lessons: [
            { title: "Complete Trade Setup Checklist", duration: "18 min", slug: "complete-trade-setup-checklist" },
            { title: "Risk Management for SMC", duration: "15 min", slug: "risk-management-smc" },
            { title: "Common Mistakes to Avoid", duration: "12 min", slug: "common-mistakes-avoid" },
            { title: "Live Trade Examples", duration: "25 min", slug: "live-trade-examples" },
            { title: "Building Your Trading Plan", duration: "20 min", slug: "building-trading-plan" }
        ]
    }
];

// Placeholder for other categories
const placeholderCurriculum: Curriculum = [
    {
        section: "Introduction",
        lessons: [
            { title: "Introduction to the Concept", duration: "5 min", slug: "introduction" },
            { title: "Core Principles", duration: "10 min", slug: "core-principles" }
        ]
    }
];

const curricula: Record<string, Curriculum> = {
    "smart-money-concepts": smcCurriculum,
    "price-action": placeholderCurriculum,
    "chart-patterns": placeholderCurriculum,
    "indicators": placeholderCurriculum,
    "volume-analysis": placeholderCurriculum,
    "support-resistance": placeholderCurriculum,
    "candlestick-patterns": placeholderCurriculum,
    "market-structure": placeholderCurriculum, // If it's a separate category
    "wyckoff": placeholderCurriculum
};

export const categoryMetadata: Record<string, { title: string; description: string; color: string }> = {
    "smart-money-concepts": {
        title: "Smart Money Concepts",
        description: "Master institutional trading methodology. Learn how banks and institutions move the market.",
        color: "#059669" // Emerald-600 (Primary Brand)
    },
    "price-action": {
        title: "Price Action Trading",
        description: "Trade without indicators using support, resistance, and candlestick patterns.",
        color: "#0891B2" // Cyan-600 (Professional/Distinct)
    },
    "chart-patterns": {
        title: "Chart Patterns",
        description: "Identify and trade head & shoulders, triangles, flags, and more.",
        color: "#0D9488" // Teal-600 (Harmonious with Emerald)
    },
    "indicators": {
        title: "Indicator-Based Analysis",
        description: "Master RSI, MACD, Moving Averages, Bollinger Bands, and more.",
        color: "#2563EB" // Blue-600 (Trustworthy)
    },
    "volume-analysis": {
        title: "Volume Analysis",
        description: "Understand volume profiles, accumulation, distribution, and orderflow.",
        color: "#4F46E5" // Indigo-600 (Deep/Analytical)
    },
    "support-resistance": {
        title: "Support & Resistance",
        description: "Master horizontal levels, trend lines, and dynamic S/R.",
        color: "#475569" // Slate-600 (Neutral/Foundational)
    },
    "candlestick-patterns": {
        title: "Candlestick Patterns",
        description: "Learn doji, engulfing, hammers, and reversal patterns.",
        color: "#0D9488" // Teal-600
    },
    "market-structure": {
        title: "Market Structure",
        description: "Identify trends, reversals, and market phases.",
        color: "#059669" // Emerald-600 (Core Concept)
    },
    "wyckoff": {
        title: "Wyckoff Method",
        description: "Accumulation, distribution, and market cycles.",
        color: "#0891B2" // Cyan-600
    }
};

export function getCurriculum(category: string): Curriculum | null {
    return curricula[category] || null;
}

export function getLesson(category: string, slug: string) {
    const curriculum = getCurriculum(category);
    if (!curriculum) return null;

    for (const section of curriculum) {
        const lesson = section.lessons.find(l => l.slug === slug);
        if (lesson) return lesson;
    }
    return null;
}

// Keep backward compatibility if needed, or just for SMC
export function getLessonBySlug(slug: string) {
    return getLesson("smart-money-concepts", slug);
}

export function getLessonContent(slug: string) {
    // In a real app, this would fetch from an API or CMS
    // We simulate distinct content for different lessons

    const commonStyles = "rounded-xl shadow-lg my-8 w-full h-auto object-cover border border-slate-100";

    switch (slug) {
        // --- SMART MONEY CONCEPTS ---
        case "what-is-smart-money":
            return `
                <p class="lead">
                    Smart Money Concepts (SMC) is not just a strategy; it's a paradigm shift. It's about viewing the market through the lens of institutional order flow rather than retail patterns.
                </p>
                <img src="/ict-vs-smc.jpg" alt="SMC vs Retail" class="${commonStyles}" />
                <h3>The Retail Trap</h3>
                <p>
                    Most retail traders are taught to trade support and resistance, trendlines, and chart patterns. Institutions know this. They use this liquidity to fuel their own moves. When you buy at support, who is selling to you? The Smart Money.
                </p>
                <blockquote>
                    "If you don't know where the liquidity is, you are the liquidity."
                </blockquote>
                <h3>Institutional Footprints</h3>
                <p>
                    Smart money leaves clues. Large orders cannot be hidden. We look for:
                </p>
                <ul>
                    <li><strong>Displacement:</strong> Sudden, strong moves that break structure, indicating intent.</li>
                    <li><strong>Inefficiencies:</strong> Fair Value Gaps (FVG) where price was delivered too quickly.</li>
                    <li><strong>Liquidity:</strong> Areas where stop-losses are clustered (Equal Highs/Lows).</li>
                </ul>
            `;

        case "market-structure-basics":
        case "market-structure-advanced":
            return `
                <p class="lead">
                    Market structure is the skeleton of the market. Without understanding structure, you are trading blind. It tells us the direction of the trend and when that trend is likely to reverse.
                </p>
                <img src="/structure_mapping.avif" alt="Market Structure Mapping" class="${commonStyles}" />
                <h3>Trend Identification</h3>
                <p>
                    A bullish trend is defined by a series of <strong>Higher Highs (HH)</strong> and <strong>Higher Lows (HL)</strong>. A bearish trend consists of <strong>Lower Lows (LL)</strong> and <strong>Lower Highs (LH)</strong>.
                </p>
                <h3>Break of Structure (BOS)</h3>
                <p>
                    When price breaks a previous high in an uptrend (or low in a downtrend) and closes beyond it, we have a Break of Structure. This confirms the trend continuation.
                </p>
                <h3>Key Rules</h3>
                <ul>
                    <li>Always wait for a candle close to confirm a BOS. Wicks are often just liquidity grabs.</li>
                    <li>Map structure on higher timeframes (4H, Daily) for direction, and lower timeframes (15m, 1h) for entry.</li>
                </ul>
            `;

        case "change-of-character":
            return `
                <p class="lead">
                    A Change of Character (ChoCH) is the first sign of a potential trend reversal. It occurs when price breaks the most recent structural point that led to a new high (or low).
                </p>
                <img src="/choch.avif" alt="Change of Character (ChoCH)" class="${commonStyles}" />
                <h3>Identifying ChoCH</h3>
                <p>
                    Unlike a Break of Structure (BOS) which signals continuation, a ChoCH signals a shift in momentum. It is often found at Higher Timeframe (HTF) Points of Interest (POI).
                </p>
                <h3>Valid vs Invalid ChoCH</h3>
                <p>
                    Not every structural break is a reversal. A valid ChoCH must happen after:
                </p>
                <ul>
                    <li>Price taps into a higher timeframe POI (Order Block, FVG).</li>
                    <li>A liquidity sweep of a major high or low.</li>
                </ul>
            `;

        case "understanding-institutional-orderflow":
            return `
                <p class="lead">
                    Institutional Order Flow is the engine that drives price. It is the collective buying and selling activity of large institutions.
                </p>
                <img src="/order_flow.webp" alt="Institutional Order Flow" class="${commonStyles}" />
                <h3>Following the Money</h3>
                <p>
                    We don't try to predict where price will go; we react to where the money is flowing. When order flow is bullish, we look for longs at discount prices. When bearish, we look for shorts at premium prices.
                </p>
                <h3>Order Flow vs Market Structure</h3>
                <p>
                    Market structure tells you <em>what</em> happened. Order flow tells you <em>why</em> it happened. Structure can be bearish while order flow is bullish (pullback phase).
                </p>
            `;

        case "bullish-fair-value-gaps":
        case "bearish-fair-value-gaps":
        case "understanding-price-inefficiencies":
            return `
                <p class="lead">
                    Fair Value Gaps (FVG) represent inefficiencies in the market where price has moved too quickly in one direction, leaving behind unfilled orders.
                </p>
                <img src="/fvg.png" alt="Fair Value Gap (FVG)" class="${commonStyles}" />
                <h3>The Magnet Effect</h3>
                <p>
                    Price often returns to these gaps to "rebalance" the market. These areas act as high-probability support or resistance zones.
                </p>
                <h3>Trading the FVG</h3>
                <p>
                    Don't blindly trade every FVG. Look for:
                </p>
                <ul>
                    <li>FVGs that caused a Break of Structure (BOS).</li>
                    <li>FVGs located in Premium (for shorts) or Discount (for longs) zones.</li>
                    <li>FVGs that align with other confluences like Order Blocks.</li>
                </ul>
            `;

        case "risk-management-smc":
            return `
                <p class="lead">
                    Risk management is the only thing you can control in trading. Without it, even the best strategy will fail.
                </p>
                <img src="/risk-management.jpg" alt="Risk Management" class="${commonStyles}" />
                <h3>Capital Preservation</h3>
                <p>
                    Your primary job as a trader is to protect your capital. Never risk more than 1-2% of your account on a single trade.
                </p>
                <h3>The Mathematics of Ruin</h3>
                <p>
                    If you lose 50% of your account, you need a 100% gain just to break even. This is why avoiding large drawdowns is crucial.
                </p>
                <ul>
                    <li><strong>Risk per trade:</strong> 0.5% to 1%</li>
                    <li><strong>Daily Loss Limit:</strong> 2-3%</li>
                    <li><strong>Max Drawdown:</strong> 5-10% (Stop trading and review)</li>
                </ul>
            `;

        // --- PRICE ACTION ---
        case "introduction":
        case "core-principles":
            return `
                <p class="lead">
                    Price Action trading is the art of reading the raw price movements on a chart, without the noise of lagging indicators. It is the purest form of technical analysis.
                </p>
                <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop" alt="Price Action Chart" class="${commonStyles}" />
                <h3>Why Price Action?</h3>
                <p>
                    Indicators are derived from price. By the time an indicator signals a move, price has often already moved. Price action gets you in earlier and with better risk-to-reward.
                </p>
                <h3>The Three Pillars</h3>
                <ul>
                    <li><strong>Trend:</strong> Is the market moving up, down, or sideways?</li>
                    <li><strong>Levels:</strong> Where are the key Support and Resistance zones?</li>
                    <li><strong>Signals:</strong> What are the candlesticks telling us at these levels?</li>
                </ul>
            `;

        // --- CHART PATTERNS ---
        case "head-and-shoulders":
        case "double-top-bottom":
            return `
                <p class="lead">
                    Chart patterns are recurring formations that signal potential market moves. They represent the collective psychology of the market participants.
                </p>
                <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop" alt="Chart Patterns" class="${commonStyles}" />
                <h3>Reversal Patterns</h3>
                <p>
                    These patterns indicate that the current trend is losing momentum and a reversal is likely.
                </p>
                <ul>
                    <li><strong>Head and Shoulders:</strong> A classic bearish reversal pattern.</li>
                    <li><strong>Double Top:</strong> Indicates resistance is holding strong.</li>
                </ul>
                <blockquote>
                    "History repeats itself because human psychology remains the same."
                </blockquote>
            `;

        // --- INDICATORS ---
        case "rsi-divergence":
        case "moving-averages":
            return `
                <p class="lead">
                    While price is king, indicators can serve as valuable tools for confirmation and filtering. The key is to use them as servants, not masters.
                </p>
                <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop" alt="Technical Indicators" class="${commonStyles}" />
                <h3>RSI Divergence</h3>
                <p>
                    Divergence occurs when price makes a new high, but the RSI makes a lower high. This signals weakening momentum and a potential reversal.
                </p>
                <h3>Moving Averages</h3>
                <p>
                    Moving averages smooth out price data to identify the trend direction. The 200 EMA is widely watched by institutions as a dynamic support/resistance level.
                </p>
            `;

        default:
            // Dynamic fallback for other lessons
            return `
                <p class="lead">
                    This lesson covers the advanced mechanics of <strong>${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>. We will explore how this concept integrates into the broader trading framework.
                </p>
                <img src="/ict_image.jpg" alt="Trading Concepts" class="${commonStyles}" />
                <h3>Core Concepts</h3>
                <p>
                    Mastering this topic requires patience and observation. We focus on:
                </p>
                <ul>
                    <li>Identifying high-probability zones on the chart.</li>
                    <li>Waiting for confirmation on lower timeframes.</li>
                    <li>Managing risk effectively.</li>
                </ul>
                <p>
                    As you study this section, pay close attention to the reaction of price at key reference points.
                </p>
                <blockquote>
                    "The market is a device for transferring money from the impatient to the patient." - Warren Buffett
                </blockquote>
                <h3>Practical Application</h3>
                <p>
                    Open your charts and try to identify 5 examples of this concept from the past week. Backtesting is the only way to build true confidence.
                </p>
            `;
    }
}

// Export smcCurriculum for backward compatibility if needed, but prefer getCurriculum
export { smcCurriculum };
