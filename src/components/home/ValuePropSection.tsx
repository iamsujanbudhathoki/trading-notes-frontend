import { Target, Shield, Zap } from "lucide-react";

export function ValuePropSection() {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-900 mb-6">
                        Why Most Traders Fail
                    </h2>
                    <p className="text-lg text-slate-500 leading-relaxed">
                        The market is designed to take money from the uninformed. We teach you how to align with the "Smart Money" — the institutions that move the price.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <FeatureCard
                        icon={Target}
                        title="Precision Entries"
                        description="Stop chasing candles. Learn to identify high-probability entry points using Fair Value Gaps and Order Blocks."
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Risk Management"
                        description="It's not about how much you make, but how much you keep. Master the art of position sizing and capital preservation."
                    />
                    <FeatureCard
                        icon={Zap}
                        title="Institutional Logic"
                        description="Decode the algorithm. Understand why price moves the way it does, and stop being liquidity for the big players."
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#B85C38] mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="font-sans font-bold text-xl text-slate-900 mb-4">{title}</h3>
            <p className="text-slate-500 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
