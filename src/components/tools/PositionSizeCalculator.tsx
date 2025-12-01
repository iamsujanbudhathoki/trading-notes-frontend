"use client";

import { useState, useEffect } from "react";
import { Calculator, RefreshCw, DollarSign, Percent, Target } from "lucide-react";

const currencyPairs = [
    "EURUSD", "GBPUSD", "USDJPY", "AUDUSD", "USDCAD", "USDCHF", "NZDUSD",
    "EURGBP", "EURJPY", "GBPJPY", "AUDJPY", "XAUUSD"
];

export function PositionSizeCalculator() {
    const [balance, setBalance] = useState<number>(10000);
    const [riskPercent, setRiskPercent] = useState<number>(1);
    const [stopLoss, setStopLoss] = useState<number>(20);
    const [pair, setPair] = useState<string>("EURUSD");
    const [results, setResults] = useState<{
        riskAmount: number;
        standardLots: number;
        miniLots: number;
        microLots: number;
    } | null>(null);

    const calculate = () => {
        const riskAmount = (balance * riskPercent) / 100;
        // Simplified calculation assuming USD base/quote for now or standard pip values
        // In a real app, we'd need live exchange rates for accurate cross-pair calc
        let pipValueStandard = 10; // Standard lot pip value for USD pairs roughly

        if (pair === "XAUUSD") pipValueStandard = 100; // Gold is different

        const positionSizeStandard = riskAmount / (stopLoss * pipValueStandard);

        setResults({
            riskAmount,
            standardLots: Number(positionSizeStandard.toFixed(2)),
            miniLots: Number((positionSizeStandard * 10).toFixed(2)),
            microLots: Number((positionSizeStandard * 100).toFixed(2))
        });
    };

    // Auto-calculate on change
    useEffect(() => {
        calculate();
    }, [balance, riskPercent, stopLoss, pair]);

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                        <Calculator className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Position Size Calculator</h3>
                        <p className="text-slate-400 text-sm">Manage your risk per trade</p>
                    </div>
                </div>
                <button
                    onClick={calculate}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    title="Refresh Calculation"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Account Balance</label>
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="number"
                                value={balance}
                                onChange={(e) => setBalance(Number(e.target.value))}
                                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#B85C38] focus:ring-1 focus:ring-[#B85C38] transition-all font-mono text-lg"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Risk (%)</label>
                            <div className="relative">
                                <Percent className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="number"
                                    step="0.1"
                                    value={riskPercent}
                                    onChange={(e) => setRiskPercent(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#B85C38] focus:ring-1 focus:ring-[#B85C38] transition-all font-mono text-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Stop Loss (Pips)</label>
                            <div className="relative">
                                <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="number"
                                    value={stopLoss}
                                    onChange={(e) => setStopLoss(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#B85C38] focus:ring-1 focus:ring-[#B85C38] transition-all font-mono text-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Currency Pair</label>
                        <select
                            value={pair}
                            onChange={(e) => setPair(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#B85C38] focus:ring-1 focus:ring-[#B85C38] transition-all appearance-none cursor-pointer"
                        >
                            {currencyPairs.map(p => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center space-y-6">
                    <div className="text-center pb-6 border-b border-slate-200">
                        <div className="text-sm text-slate-500 mb-1 uppercase tracking-wider font-bold">Risk Amount</div>
                        <div className="text-4xl font-bold text-slate-900">${results?.riskAmount.toFixed(2)}</div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-medium">Standard Lots</span>
                            <span className="font-mono font-bold text-lg text-[#B85C38]">{results?.standardLots}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-medium">Mini Lots (0.1)</span>
                            <span className="font-mono font-bold text-lg text-slate-900">{results?.miniLots}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-600 font-medium">Micro Lots (0.01)</span>
                            <span className="font-mono font-bold text-lg text-slate-900">{results?.microLots}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
