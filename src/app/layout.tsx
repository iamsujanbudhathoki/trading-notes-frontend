import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TRADENOTES | Master Institutional Price Action & SMC",
    template: "%s | TRADENOTES"
  },
  description: "Stop gambling and start trading. Free, professional-grade education on Smart Money Concepts (SMC), Price Action, and Institutional Order Flow. No signals, just logic.",
  keywords: [
    "Smart Money Concepts",
    "SMC Trading",
    "Price Action",
    "Institutional Trading",
    "Forex Education",
    "Trading Psychology",
    "Order Flow",
    "Fair Value Gaps",
    "ICT Concepts",
    "Trading Strategy"
  ],
  authors: [{ name: "TRADENOTES" }],
  creator: "TRADENOTES",
  publisher: "TRADENOTES",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TRADENOTES | Master Institutional Price Action",
    description: "Free, professional-grade education on Smart Money Concepts (SMC) and Price Action. Decode the market algorithm.",
    url: "https://tradenotes.com", // Placeholder URL
    siteName: "TRADENOTES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop", // Placeholder OG Image
        width: 1200,
        height: 630,
        alt: "TRADENOTES - Professional Trading Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TRADENOTES | Master Institutional Price Action",
    description: "Stop gambling. Start trading. Master Smart Money Concepts and Price Action logic.",
    images: ["https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop"], // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { AppShell } from "@/components/layout/AppShell";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://tradenotes.com/#organization",
        "name": "TRADENOTES",
        "url": "https://tradenotes.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tradenotes.com/logo.png"
        },
        "description": "Free, professional-grade education on Smart Money Concepts (SMC), Price Action, and Institutional Order Flow."
      },
      {
        "@type": "WebSite",
        "@id": "https://tradenotes.com/#website",
        "url": "https://tradenotes.com",
        "name": "TRADENOTES",
        "publisher": {
          "@id": "https://tradenotes.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://tradenotes.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://tradenotes.com/#educational",
        "name": "TRADENOTES",
        "url": "https://tradenotes.com",
        "description": "Professional trading education platform focused on Smart Money Concepts, Price Action, and Institutional Trading",
        "educationalCredentialAwarded": "Trading Education Certificate",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Trading Courses",
          "itemListElement": [
            {
              "@type": "Course",
              "name": "Smart Money Concepts",
              "description": "Learn institutional trading concepts and order flow",
              "provider": {
                "@id": "https://tradenotes.com/#organization"
              }
            },
            {
              "@type": "Course",
              "name": "Price Action Trading",
              "description": "Master price action analysis and market structure",
              "provider": {
                "@id": "https://tradenotes.com/#organization"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-cream text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900`}
      >
        <AppShell>
          <NextTopLoader color="#D4A574" showSpinner={false} />
          {children}
        </AppShell>
      </body>
    </html>
  );
}
