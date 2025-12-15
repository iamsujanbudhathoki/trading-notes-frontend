import { HeroSection } from "@/components/home/HeroSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { SMCICTSection } from "@/components/home/SMCICTSection";
import { BrowseCategoriesSection } from "@/components/home/BrowseCategoriesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { CommunityCTA } from "@/components/home/CommunityCTA";
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
    <div className="w-full bg-white">
      {/* Hero Section - The Hook */}
      <HeroSection />

      {/* Stats Section - The Authority */}
      <StatsSection />

      {/* SMC & ICT Trading - The Core Value */}
      <div className="bg-white border-b border-slate-100">
        <SMCICTSection />
      </div>

      {/* Categories - The Exploration */}
      <BrowseCategoriesSection />

      {/* Latest Articles - The Fresh Content */}
      <div className="bg-slate-50 border-y border-slate-200">
        <LatestArticlesSection />
      </div>

      {/* Final CTA - The Conversion */}
      <CommunityCTA />
    </div>
  );
}
