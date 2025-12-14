export const smcCurriculum = [
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

export function getLessonBySlug(slug: string) {
    for (const section of smcCurriculum) {
        const lesson = section.lessons.find(l => l.slug === slug);
        if (lesson) return lesson;
    }
    return null;
}

export function getLessonContent(slug: string) {
    // In a real app, this would fetch from an API or CMS
    // We simulate distinct content for different lessons

    const commonStyles = "rounded-xl shadow-lg my-8 w-full h-auto object-cover border border-slate-100";

    switch (slug) {
        case "what-is-smart-money":
            return `
                <p class="lead">
                    Smart Money Concepts (SMC) is not just a strategy; it's a paradigm shift. It's about viewing the market through the lens of institutional order flow rather than retail patterns.
                </p>
                <img src="/ict-vs-smc.jpg" alt="SMC vs Retail" class="${commonStyles}" />
                <h3>The Retail Trap</h3>
                <p>
                    Most retail traders are taught to trade support and resistance, trendlines, and chart patterns. Institutions know this. They use this liquidity to fuel their own moves.
                </p>
                <h3>Institutional Footprints</h3>
                <p>
                    Smart money leaves clues. Large orders cannot be hidden. We look for:
                </p>
                <ul>
                    <li><strong>Displacement:</strong> Sudden, strong moves that break structure.</li>
                    <li><strong>Inefficiencies:</strong> Fair Value Gaps (FVG) where price was delivered too quickly.</li>
                    <li><strong>Liquidity:</strong> Areas where stop-losses are clustered.</li>
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
            `;

        default:
            // Dynamic fallback for other lessons
            return `
                <p class="lead">
                    This lesson covers the advanced mechanics of <strong>${slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>. We will explore how this concept integrates into the broader Smart Money framework.
                </p>
                <img src="/ict_image.jpg" alt="ICT Concepts" class="${commonStyles}" />
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
            `;
    }
}
