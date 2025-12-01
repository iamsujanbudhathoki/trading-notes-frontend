import { HeroSection } from "@/components/home/HeroSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { TradingToolsSection } from "@/components/home/TradingToolsSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { SMCICTSection } from "@/components/home/SMCICTSection";
import { CandlestickPatternsSection } from "@/components/home/CandlestickPatternsSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
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
    <div className="w-full bg-[#FAF9F7]">
      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Learning Paths */}
      <div className="py-20 md:py-32 bg-[#FAF9F7]">
        <LearningPathsSection />
      </div>

      {/* Trading Tools */}
      <div className="py-20 md:py-32 bg-white border-y border-slate-100">
        <TradingToolsSection />
      </div>

      {/* SMC & ICT Trading */}
      <div className="py-20 md:py-32 bg-[#FAF9F7]">
        <SMCICTSection />
      </div>

      {/* Candlestick Patterns */}
      <div className="py-20 md:py-32 bg-white">
        <CandlestickPatternsSection />
      </div>

      {/* Latest Articles */}
      <div className="py-20 md:py-32 pb-32 bg-[#FAF9F7]">
        <LatestArticlesSection />
      </div>
    </div>
  );
}
