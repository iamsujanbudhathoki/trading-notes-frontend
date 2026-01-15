import Link from "next/link";
import { DiscordIcon } from "@/components/icons";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
                    {/* Brand - Spans 4 columns */}
                    <div className="md:col-span-4 space-y-8">
                        <Link href="/" className="inline-block font-serif text-2xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
                            TRADE<span className="text-emerald-500">NOTES</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed pr-6 font-medium text-sm">
                            A personal trading journal and educational platform dedicated to demystifying institutional price action.
                            <span className="block mt-2 text-slate-500 text-xs">Not financial advice. Just logic & sharing my observation.</span>
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="https://discord.gg/trading" label="Discord">
                                <DiscordIcon className="w-5 h-5" />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Links - Spans 8 columns (2+3+3) */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-serif font-bold text-white mb-6">Learn</h4>
                            <ul className="space-y-4 text-sm">
                                <FooterLink href="/learn/smart-money-concepts">Smart Money Concepts</FooterLink>
                                <FooterLink href="/learn/price-action">Price Action</FooterLink>
                                <FooterLink href="/learn/indicators">Indicators</FooterLink>
                                <FooterLink href="/learn/chart-patterns">Chart Patterns</FooterLink>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-serif font-bold text-white mb-6">Resources</h4>
                            <ul className="space-y-4 text-sm">
                                <FooterLink href="/glossary">Trading Glossary</FooterLink>
                                <FooterLink href="/brokers">Broker Reviews</FooterLink>
                                <FooterLink href="/resources/books">Recommended Books</FooterLink>
                                <FooterLink href="/resources/templates">Templates & Checklists</FooterLink>
                                <FooterLink href="/community">Trading Communities</FooterLink>
                                <FooterLink href="/tools">
                                    Trader's Toolbox
                                    <span className="ml-2 px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase rounded-sm border border-emerald-500/20">Free</span>
                                </FooterLink>
                                <FooterLink href="/about">About Us</FooterLink>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-serif font-bold text-white mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm">
                                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                                <FooterLink href="/terms">Terms of Service</FooterLink>
                                <FooterLink href="/disclaimer">Disclaimer</FooterLink>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Risk Disclaimer */}
                <div className="border-t border-slate-900 pt-10 mb-10">
                    <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800/50 backdrop-blur-sm">
                        <h5 className="text-slate-300 font-bold mb-3 text-sm uppercase tracking-wider">Risk Warning</h5>
                        <p className="text-xs text-slate-500 leading-relaxed text-justify">
                            Trading financial markets involves a high degree of risk and is not suitable for all investors. You could lose some or all of your initial investment. The content on this website is for educational purposes only and does not constitute financial advice. I am not a financial advisor. Always do your own research and consult with a certified financial planner before making any investment decisions.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
                    <p>&copy; {new Date().getFullYear()} TRADENOTES. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Designed with <span className="text-emerald-500">♥</span> for traders
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-emerald-400 hover:translate-x-1 transition-all duration-300 block">
                {children}
            </Link>
        </li>
    );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 text-slate-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
            aria-label={label}
        >
            {children}
        </Link>
    );
}
