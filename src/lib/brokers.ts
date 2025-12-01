export interface Broker {
    name: string;
    logo: string;
    rating: number;
    minDeposit: string;
    leverage: string;
    spreads: string;
    regulation: string[];
    types: ('forex' | 'crypto' | 'stocks' | 'prop-firm' | 'binary-options')[];
    pros: string[];
    cons: string[];
    description: string;
    website: string;
    yearEstablished: number;
    slug: string; // Added slug for easier linking
}


export const brokers: Broker[] = [
  // Forex Brokers
  {
    name: "IC Markets",
    slug: "ic-markets",
    // Clearbit logo (domain-based) — generally reliable
    logo: "https://logo.clearbit.com/icmarkets.com?size=256",
    rating: 4.8,
    minDeposit: "$200",
    leverage: "1:500",
    spreads: "From 0.0 pips",
    regulation: ["ASIC", "CySEC", "FSA"],
    types: ["forex", "crypto"],
    pros: ["Lowest spreads", "Fast execution", "Wide range of platforms"],
    cons: ["Higher minimum deposit", "Limited educational resources"],
    description:
      "IC Markets is one of the world's largest forex brokers, known for its ultra-low spreads and lightning-fast execution.",
    website: "https://www.icmarkets.com",
    yearEstablished: 2007
  },
  {
    name: "Pepperstone",
    slug: "pepperstone",
    logo: "https://logo.clearbit.com/pepperstone.com?size=256",
    rating: 4.7,
    minDeposit: "$0",
    leverage: "1:500",
    spreads: "From 0.0 pips",
    regulation: ["ASIC", "FCA", "CySEC", "DFSA"],
    types: ["forex", "crypto", "stocks"],
    pros: ["No minimum deposit", "Excellent customer service", "Multiple platforms"],
    cons: ["Limited crypto offerings", "No US clients"],
    description:
      "Pepperstone is a leading global forex and CFD broker offering traders access to over 1,200+ instruments.",
    website: "https://www.pepperstone.com",
    yearEstablished: 2010
  },

  // Crypto Exchanges
  {
    name: "Binance",
    slug: "binance",
    logo: "https://logo.clearbit.com/binance.com?size=256",
    rating: 4.5,
    minDeposit: "$10",
    leverage: "1:125",
    spreads: "0.1% trading fee",
    regulation: ["Multiple jurisdictions"],
    types: ["crypto"],
    pros: ["Largest crypto exchange", "Lowest fees", "Huge selection"],
    cons: ["Complex for beginners", "Regulatory concerns"],
    description:
      "Binance is the world's largest cryptocurrency exchange by trading volume, offering 350+ cryptocurrencies.",
    website: "https://www.binance.com",
    yearEstablished: 2017
  },
  {
    name: "Bybit",
    slug: "bybit",
    logo: "https://logo.clearbit.com/bybit.com?size=256",
    rating: 4.6,
    minDeposit: "$1",
    leverage: "1:100",
    spreads: "0.1% fee",
    regulation: ["Dubai VARA"],
    types: ["crypto"],
    pros: ["Great for derivatives", "Copy trading", "Low fees"],
    cons: ["Not available in US", "Limited fiat support"],
    description:
      "Bybit is a top-tier cryptocurrency exchange known for its professional derivatives trading platform.",
    website: "https://www.bybit.com",
    yearEstablished: 2018
  },

  // Prop Firms
  {
    name: "FTMO",
    slug: "ftmo",
    logo: "https://logo.clearbit.com/ftmo.com?size=256",
    rating: 4.9,
    minDeposit: "€155 (Fee)",
    leverage: "1:100",
    spreads: "Raw spreads",
    regulation: ["Self-regulated"],
    types: ["prop-firm"],
    pros: ["Industry leader", "Reliable payouts", "Great scaling plan"],
    cons: ["Strict trading rules", "Time limits on challenges"],
    description:
      "FTMO is the industry-leading proprietary trading firm, offering up to $200,000 in funding to profitable traders.",
    website: "https://ftmo.com",
    yearEstablished: 2015
  },
  {
    name: "The 5%ers",
    slug: "the-5ers",
    logo: "https://logo.clearbit.com/the5ers.com?size=256",
    rating: 4.7,
    minDeposit: "€235 (Fee)",
    leverage: "1:30",
    spreads: "Low spreads",
    regulation: ["Self-regulated"],
    types: ["prop-firm"],
    pros: ["Instant funding", "Long time limits", "Growth program"],
    cons: ["Lower leverage", "Trailing drawdown"],
    description:
      "The 5%ers provides instant funding accounts and a growth program for serious forex traders.",
    website: "https://the5ers.com",
    yearEstablished: 2016
  },

  // Binary Options
  {
    name: "Pocket Option",
    slug: "pocket-option",
    logo: "https://logo.clearbit.com/pocketoption.com?size=256",
    rating: 4.2,
    minDeposit: "$50",
    leverage: "N/A",
    spreads: "N/A",
    regulation: ["IFMRRC"],
    types: ["binary-options"],
    pros: ["Easy to use", "Social trading", "US clients accepted"],
    cons: ["High risk", "Limited regulation"],
    description:
      "Pocket Option is a modern binary options broker offering a simple interface and social trading features.",
    website: "https://pocketoption.com",
    yearEstablished: 2017
  },
  {
    name: "Quotex",
    slug: "quotex",
    logo: "https://logo.clearbit.com/quotex.io?size=256",
    rating: 4.1,
    minDeposit: "$10",
    leverage: "N/A",
    spreads: "N/A",
    regulation: ["IFMRRC"],
    types: ["binary-options"],
    pros: ["Low minimum deposit", "Clean interface", "Fast withdrawals"],
    cons: ["Unregulated in major jurisdictions", "High risk"],
    description:
      "Quotex is a new digital options broker known for its seamless user experience and low entry barrier.",
    website: "https://quotex.io",
    yearEstablished: 2019
  },

  // Stock Brokers
  {
    name: "Interactive Brokers",
    slug: "interactive-brokers",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Interactive_Brokers_Logo_%282014%29.svg/425px-Interactive_Brokers_Logo_%282014%29.svg.png?20191214200627",
    rating: 4.7,
    minDeposit: "$0",
    leverage: "1:4",
    spreads: "$0.005/share",
    regulation: ["SEC", "FINRA", "FCA"],
    types: ["stocks", "forex"],
    pros: ["Low commissions", "Global market access", "Professional tools"],
    cons: ["Complex platform", "Not beginner-friendly"],
    description:
      "Interactive Brokers is a professional-grade broker offering access to stocks, options, futures, and forex in 150+ markets.",
    website: "https://www.interactivebrokers.com",
    yearEstablished: 1978
  },
  {
    name: "eToro",
    slug: "etoro",
    logo: "https://logo.clearbit.com/etoro.com?size=256",
    rating: 4.4,
    minDeposit: "$50",
    leverage: "1:30",
    spreads: "Variable",
    regulation: ["FCA", "ASIC", "CySEC"],
    types: ["stocks", "crypto", "forex"],
    pros: ["Social trading", "User-friendly", "Copy top traders"],
    cons: ["High non-trading fees", "Slow withdrawals"],
    description:
      "eToro is the world's leading social trading platform, allowing you to copy the trades of successful investors.",
    website: "https://www.etoro.com",
    yearEstablished: 2007
  }
];


export function getBrokersByType(type: string) {
    // Map URL slugs to internal types if needed, or just use the type string
    const typeMap: Record<string, string> = {
        'forex': 'forex',
        'crypto': 'crypto',
        'stocks': 'stocks',
        'prop-firms': 'prop-firm',
        'binary-options': 'binary-options'
    };

    const mappedType = typeMap[type] || type;
    return brokers.filter(broker => broker.types.includes(mappedType as any));
}

export function getBrokerBySlug(slug: string) {
    return brokers.find(broker => broker.slug === slug);
}
