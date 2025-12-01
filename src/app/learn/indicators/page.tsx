import Link from "next/link";
import { PlayCircle, Clock } from "lucide-react";

const curriculum = [
    {
        section: "Moving Averages",
        lessons: [
            { title: "Simple Moving Average (SMA)", duration: "10 min" },
            { title: "Exponential Moving Average (EMA)", duration: "12 min" },
            { title: "MA Crossover Strategy", duration: "15 min" },
            { title: "Dynamic Support & Resistance", duration: "14 min" },
        ],
    },
    {
        section: "Oscillators",
        lessons: [
            { title: "RSI (Relative Strength Index)", duration: "12 min" },
            { title: "RSI Divergence", duration: "16 min" },
            { title: "Stochastic Oscillator", duration: "14 min" },
            { title: "CCI (Commodity Channel Index)", duration: "10 min" },
        ],
    },
    {
        section: "Momentum Indicators",
        lessons: [
            { title: "MACD Basics", duration: "14 min" },
            { title: "MACD Crossovers", duration: "12 min" },
            { title: "MACD Divergence", duration: "16 min" },
            { title: "Momentum Indicator", duration: "10 min" },
        ],
    },
    {
        section: "Volatility Indicators",
        lessons: [
            { title: "Bollinger Bands", duration: "14 min" },
            { title: "Bollinger Band Squeeze", duration: "16 min" },
            { title: "ATR (Average True Range)", duration: "12 min" },
            { title: "Standard Deviation", duration: "10 min" },
        ],
    },
    {
        section: "Fibonacci Tools",
        lessons: [
            { title: "Fibonacci Retracement", duration: "16 min" },
            { title: "Fibonacci Extension", duration: "14 min" },
            { title: "Fibonacci Time Zones", duration: "12 min" },
        ],
    },
    {
        section: "Volume Indicators",
        lessons: [
            { title: "On-Balance Volume", duration: "12 min" },
            { title: "Volume Profile", duration: "14 min" },
            { title: "Accumulation/Distribution", duration: "13 min" },
        ],
    },
];

export default function IndicatorsPage() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Technical Indicators Curriculum</h1>
            {curriculum.map((section, sectionIndex) => (
                <div key={section.section} className="mb-8">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">{section.section}</h2>
                    <div className="divide-y divide-slate-200">
                        {section.lessons.map((lesson, lessonIndex) => (
                            <Link
                                key={lesson.title}
                                href={`/learn/indicators/${sectionIndex + 1}/${lessonIndex + 1}`}
                                className="group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-[#3B82F6]">
                                        <PlayCircle className="w-4 h-4 text-slate-400 group-hover:text-[#3B82F6]" />
                                    </div>
                                    <h3 className="font-medium text-slate-900 group-hover:text-[#3B82F6]">{lesson.title}</h3>
                                </div>
                                <span className="flex items-center gap-1 text-sm text-slate-500">
                                    <Clock className="w-4 h-4" />
                                    {lesson.duration}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
            <div className="mt-12 text-center">
                <Link
                    href="/learn/indicators/1/1"
                    className="inline-flex items-center gap-2 bg-[#3B82F6] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#2563EB] transition-colors"
                >
                    <PlayCircle className="w-5 h-5" />
                    Start First Lesson
                </Link>
            </div>
        </section>
    );
}
