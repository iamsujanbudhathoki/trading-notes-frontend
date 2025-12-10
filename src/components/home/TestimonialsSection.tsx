"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';

const testimonials = [
    {
        name: "Marcus Chen",
        role: "Full-Time Trader",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        content: "TRADENOTES transformed my understanding of market structure. The SMC course alone is worth thousands. Best free trading education I've ever found.",
        rating: 5
    },
    {
        name: "Sarah Martinez",
        role: "Forex Trader",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        content: "Finally, someone explains institutional trading without the BS. The price action concepts are crystal clear and immediately applicable to my trading.",
        rating: 5
    },
    {
        name: "David Kumar",
        role: "Swing Trader",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        content: "I've spent thousands on trading courses. This free platform beats 90% of them. The structured approach to learning SMC is genius.",
        rating: 5
    },
    {
        name: "Emma Thompson",
        role: "Day Trader",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        content: "The depth of knowledge here is incredible. Every concept is explained with real chart examples. My win rate has improved by 20% since studying here.",
        rating: 5
    },
    {
        name: "James Rodriguez",
        role: "Crypto Trader",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        content: "I finally understand what the big players are doing. The liquidity concepts alone changed my entire trading approach. Absolutely brilliant.",
        rating: 5
    }
];

export function TestimonialsSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B85C38]/10 text-[#B85C38] font-medium text-sm mb-6">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Trusted by Traders Worldwide</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                    What Traders Say
                </h2>
                <p className="text-lg text-slate-600">
                    Join thousands of traders who've transformed their understanding of the markets
                </p>
            </div>

            {/* Carousel */}
            <div className="relative">
                {/* Navigation Buttons */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#B85C38] hover:border-[#B85C38] transition-all duration-300 hover:scale-110"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#B85C38] hover:border-[#B85C38] transition-all duration-300 hover:scale-110"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                            >
                                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full flex flex-col">
                                    {/* Quote Icon */}
                                    <div className="absolute top-6 right-6 text-[#B85C38]/10">
                                        <Quote className="w-12 h-12 fill-current" />
                                    </div>

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-[#B85C38] fill-current" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-slate-700 leading-relaxed mb-6 relative z-10 flex-1">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{testimonial.name}</div>
                                            <div className="text-sm text-slate-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 text-center">
                <div className="inline-flex flex-wrap items-center justify-center gap-8 px-8 py-6 bg-slate-50 rounded-2xl">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900 font-serif">4.9/5</div>
                        <div className="text-sm text-slate-600">Average Rating</div>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900 font-serif">10K+</div>
                        <div className="text-sm text-slate-600">Reviews</div>
                    </div>
                    <div className="h-10 w-px bg-slate-200" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-slate-900 font-serif">100%</div>
                        <div className="text-sm text-slate-600">Free Forever</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
