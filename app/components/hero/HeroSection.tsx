'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
    darkMode?: boolean;
}

export default function HeroSection({ darkMode = false }: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            title: "Website Profesional untuk Bisnis Anda",
            subtitle: "Tingkatkan brand awareness dengan website yang modern dan responsif",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop"
        },
        {
            title: "Desain Modern & User Friendly",
            subtitle: "UI/UX yang intuitif untuk pengalaman pengguna terbaik",
            image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1200&h=600&fit=crop"
        },
        {
            title: "Optimasi SEO & Performa Tinggi",
            subtitle: "Website cepat dan mudah ditemukan di mesin pencari",
            image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c203?w=1200&h=600&fit=crop"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section id="home" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className={`relative overflow-hidden rounded-[2.5rem] ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-violet-900/30' : 'bg-gradient-to-br from-purple-50/50 to-violet-50/50'} backdrop-blur-2xl border ${darkMode ? 'border-purple-500/20 shadow-2xl shadow-purple-500/10' : 'border-purple-200/30 shadow-2xl shadow-purple-200/20'}`}
                    style={{
                        backdropFilter: 'blur(40px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(40px) saturate(180%)'
                    }}>
                    <div className="relative h-[500px] md:h-[650px]">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    }`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? 'from-purple-900/95 via-purple-800/90 to-violet-900/95' : 'from-purple-600/90 via-purple-500/85 to-violet-600/90'} z-10`} />
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
                                    <div className="text-center max-w-5xl">
                                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20">
                                            <Sparkles className="w-4 h-4 text-white" />
                                            <span className="text-white text-sm font-medium">Premium Web Solutions</span>
                                        </div>
                                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                                            {slide.title}
                                        </h1>
                                        <p className="text-xl md:text-3xl text-purple-100 mb-10 font-light">
                                            {slide.subtitle}
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <a href="#contact" className={`group px-10 py-4 rounded-2xl bg-white text-purple-600 font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all hover:scale-105 inline-flex items-center justify-center gap-2`}>
                                                Konsultasi Gratis
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                            <a href="#services" className={`px-10 py-4 rounded-2xl bg-purple-500/20 text-white backdrop-blur-2xl border border-white/30 font-semibold text-lg shadow-2xl transition-all hover:scale-105 hover:bg-purple-500/30`}>
                                                Lihat Portfolio
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slider Controls */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                            style={{
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                            }}
                        >
                            <ChevronLeft className="w-7 h-7" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110 shadow-lg"
                            style={{
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                            }}
                        >
                            <ChevronRight className="w-7 h-7" />
                        </button>

                        {/* Slider Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all ${index === currentSlide
                                            ? 'bg-white w-10'
                                            : 'bg-white/40 hover:bg-white/60 w-2'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
