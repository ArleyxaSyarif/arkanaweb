"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { TESTIMONIALS } from "@/data/testimonials";



export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };

    const handlePrev = () => {
        setActiveIndex(
            (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
        );
    };

    // Helper to determine styles for the stacked cards
    const getCardStyle = (index: number) => {
        // Relative index handling to create infinite loop visual
        const diff = (index - activeIndex + TESTIMONIALS.length) % TESTIMONIALS.length;

        if (diff === 0) {
            // Active card
            return "z-20 scale-100 opacity-100 translate-y-0";
        } else if (diff === 1) {
            // Behind card 1
            return "z-10 scale-[0.92] opacity-70 translate-y-6";
        } else if (diff === 2) {
            // Behind card 2
            return "z-0 scale-[0.85] opacity-40 translate-y-12";
        } else {
            // Hidden cards (optional: could also stack them all at the back if needed, but hiding them is cleaner)
            return "hidden pointer-events-none opacity-0";
        }
    };

    return (
        <section className="bg-white font-display text-[#140d1b] overflow-hidden">

            {/* Hero Headline */}
            <div className="px-6 md:px-40 pt-16 pb-8 text-center">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-[#7f13ec] bg-[#7f13ec]/10 rounded-full">
                    Kisah Sukses
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
                    Ulasan dari Para Klien
                </h2>
                <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                    Bergabunglah dengan ribuan tim yang telah merevolusi alur kerja mereka menggunakan
                    ruang kerja modern DesignPro.
                </p>
            </div>

            {/* 3D Stacked Cards Section */}
            <div className="relative w-full max-w-[1200px] mx-auto px-6 py-20 flex flex-col items-center justify-center overflow-visible">
                {/* Mesh Background Decoration */}
                <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7f13ec] blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 blur-[120px] rounded-full"></div>
                </div>

                {/* The Stack Container */}
                <div className="relative w-full max-w-2xl h-[450px] flex items-center justify-center group">

                    {TESTIMONIALS.map((t, i) => (
                        <div
                            key={t.id}
                            className={`absolute w-full h-full rounded-xl border border-[#7f13ec]/10 transition-all duration-500 ease-in-out ${getCardStyle(i)} bg-white shadow-[0_20px_50px_rgba(127,19,236,0.15)]`}
                        >
                            <div className="w-full h-full p-8 md:p-12 flex flex-col justify-between">
                                <div className="flex flex-col gap-6">
                                    <Quote className="text-[#7f13ec] w-12 h-12 opacity-20 select-none" />
                                    <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-slate-700">
                                        &quot;{t.quote}&quot;
                                    </p>
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-slate-100">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="size-14 rounded-full bg-center bg-cover border-2 border-[#7f13ec]/20"
                                            style={{ backgroundImage: `url('${t.image}')` }}
                                        ></div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[#7f13ec]">{t.name}</h4>
                                            <p className="text-sm text-slate-500">{t.role}</p>
                                        </div>
                                    </div>
                                    <button className="flex items-center justify-center gap-2 min-w-[160px] h-12 px-6 bg-[#7f13ec] text-white font-bold rounded-lg hover:bg-[#7f13ec]/90 transition-all hover:shadow-lg hover:shadow-[#7f13ec]/30 group/btn">
                                        <span>Baca Cerita Lengkap</span>
                                        <ArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Side Controls */}
                    <button
                        onClick={handlePrev}
                        className="absolute -left-4 md:-left-16 z-30 size-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-[#7f13ec]/10 text-[#7f13ec] hover:scale-110 transition-transform cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute -right-4 md:-right-16 z-30 size-12 flex items-center justify-center rounded-full bg-white shadow-xl border border-[#7f13ec]/10 text-[#7f13ec] hover:scale-110 transition-transform cursor-pointer"
                    >
                        <ChevronRight />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-3 mt-12 z-20">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`size-2.5 rounded-full transition-colors ${i === activeIndex
                                ? "bg-[#7f13ec]"
                                : "bg-[#7f13ec]/20 hover:bg-[#7f13ec]/40"
                                }`}
                        />
                    ))}
                </div>
            </div>



        </section>
    );
}

