import { HeroSection } from "@/components/home/HeroSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { TradingToolsSection } from "@/components/home/TradingToolsSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { SMCICTSection } from "@/components/home/SMCICTSection";
import { CandlestickPatternsSection } from "@/components/home/CandlestickPatternsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Trading Education | Smart Money Concepts & Price Action",
  description: "Master institutional trading with free courses on Smart Money Concepts (SMC), ICT, Price Action, and Order Flow. No signals, just logic. Start learning today.",
  keywords: ["trading education", "smart money concepts", "price action trading", "ICT trading", "forex education", "free trading course"],
  openGraph: {
    title: "TRADENOTES | Free Trading Education",
    description: "Stop gambling. Start trading with institutional logic. Free courses on SMC, Price Action, and Order Flow.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full bg-cream">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section - Build Trust */}
      <StatsSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Learning Paths - Main value proposition */}
      <div className="bg-cream border-t border-slate-100">
        <LearningPathsSection />
      </div>

      {/* SMC & ICT Trading - Featured Methodology */}
      <div className="bg-white border-y border-slate-100">
        <SMCICTSection />
      </div>

      {/* Trading Tools */}
      <div className="bg-cream">
        <TradingToolsSection />
      </div>

      {/* Candlestick Patterns */}
      <div className="bg-white border-y border-slate-100">
        <CandlestickPatternsSection />
      </div>

      {/* Latest Articles */}
      <div className="bg-cream">
        <LatestArticlesSection />
      </div>

      {/* Social Proof / Testimonials */}
      <div className="bg-white border-t border-slate-100">
        <TestimonialsSection />
      </div>

    </div>
  );
}
