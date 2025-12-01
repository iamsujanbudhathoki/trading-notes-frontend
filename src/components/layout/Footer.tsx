import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand - Spans 4 columns */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="inline-block font-serif text-2xl font-bold text-slate-900 tracking-tight">
                            TRADE<span className="text-[#B85C38]">NOTES</span>
                        </Link>
                        <p className="text-slate-500 leading-relaxed pr-6">
                            A personal trading journal and educational platform dedicated to demystifying institutional price action. Not financial advice.
                        </p>
                    </div>

                    {/* Links - Spans 6 columns (3+3) */}
                    <div className="md:col-span-3">
                        <h4 className="font-sans font-bold text-slate-900 mb-6">Learn</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <FooterLink href="/learn/smart-money-concepts">Smart Money Concepts</FooterLink>
                            <FooterLink href="/learn/price-action">Price Action</FooterLink>
                            <FooterLink href="/learn/indicators">Indicators</FooterLink>
                            <FooterLink href="/learn/chart-patterns">Chart Patterns</FooterLink>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-sans font-bold text-slate-900 mb-6">Resources</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <FooterLink href="/glossary">Trading Glossary</FooterLink>
                            <FooterLink href="/brokers">Broker Reviews</FooterLink>
                            <FooterLink href="/tools">Trading Tools</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                        </ul>
                    </div>
                </div>

                {/* Risk Disclaimer */}
                <div className="border-t border-slate-100 pt-8 mb-8">
                    <p className="text-xs text-slate-400 leading-relaxed text-justify">
                        <span className="font-bold text-slate-500">Risk Warning:</span> Trading financial markets involves a high degree of risk and is not suitable for all investors. You could lose some or all of your initial investment. The content on this website is for educational purposes only and does not constitute financial advice. I am not a financial advisor. Always do your own research and consult with a certified financial planner before making any investment decisions.
                    </p>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} TRADENOTES. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
                        <Link href="/disclaimer" className="hover:text-slate-900 transition-colors">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-[#B85C38] transition-colors duration-200 block">
                {children}
            </Link>
        </li>
    );
}
