"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Layers, TrendingUp, BrainCircuit } from "lucide-react";

const features = [
    "Institutional Concepts",
    "Market Mechanics",
    "Experimental Strategies",
    "Psychological Frameworks"
];

const slides = [
    {
        id: "smc",
        image: "/ict-vs-smc.jpg",
        title: "Multi-Timeframe Analysis",
        description: "Understanding how higher timeframe narrative dictates lower timeframe execution.",
        icon: Layers
    },
    {
        id: "price-action",
        image: "/hero-chart-relatable.png",
        title: "Pure Price Action",
        description: "Reading the raw language of the market without lagging indicators.",
        icon: TrendingUp
    },
    {
        id: "psychology",
        image: "/ict-vs-smc.jpg",
        title: "Trader Psychology",
        description: "Mastering the mental game: patience, discipline, and risk control.",
        icon: BrainCircuit
    }
];

export function SMCICTSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest mb-6">
                            <Layers className="w-3 h-3" />
                            The Complete Toolkit
                        </div>

                        <h2 className="font-serif font-bold text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
                            Build Your Own <br />
                            <span className="text-emerald-600">Trading Edge.</span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            I don't preach a single "holy grail" strategy. Instead, I document what works.
                            From the precision of <strong>Smart Money Concepts</strong> to the clarity of <strong>Price Action</strong> and my own personal experiments.
                            This is a collection of insights, not a rigid rulebook. Explore, adapt, and build an edge that fits <em>you</em>.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/learn"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 group"
                        >
                            Explore the Curriculum
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Visual - Dynamic Slideshow */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200 bg-slate-50 aspect-[4/3]">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                </div>
                            ))}

                            {/* Caption Container - Always visible on top */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                                <div className="bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl p-5 shadow-lg">
                                    {slides.map((slide, index) => {
                                        const Icon = slide.icon;
                                        return (
                                            <div
                                                key={slide.id}
                                                className={`transition-all duration-500 ${index === currentSlide ? "block opacity-100 translate-y-0" : "hidden opacity-0 translate-y-4"
                                                    }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                                        <Icon className="w-5 h-5 text-emerald-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900 text-base mb-1">{slide.title}</h3>
                                                        <p className="text-sm text-slate-500 leading-relaxed">
                                                            {slide.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* Progress Indicators */}
                                    <div className="flex gap-2 mt-4 ml-14">
                                        {slides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-emerald-500" : "w-2 bg-slate-200 hover:bg-slate-300"
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
