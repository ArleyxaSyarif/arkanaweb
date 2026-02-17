'use client';

import React from 'react';
import { ArrowUpRight, Code, Brush, Box } from 'lucide-react';

const HeroExperience = () => {
    return (
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
            <div className="lg:col-span-7 z-10">
                <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                    Available for Freelance
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-glow-sm">
                    Building the <span className="text-primary">Future</span> of Web.
                </h1>
                <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed text-gray-600">
                    I create high-end, tech-forward digital experiences with depth and motion. Specializing in immersive SaaS interfaces and crypto platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 glow-primary hover:scale-105 transition-transform">
                        Explore Work <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="glass px-8 py-4 rounded-full font-bold border border-white/10 hover:bg-white/5 transition-colors">
                        My Resume
                    </button>
                </div>
            </div>
            {/* Floating Profile Composition */}
            <div className="lg:col-span-5 relative">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
                    {/* Main Profile Image */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            alt="Professional Portrait"
                            className="w-full h-full object-cover"
                            data-alt="Professional portrait of a male developer in dark attire"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc98qTTJutVfRK6BBAUIJOoQG0Y1NN_CauM3CHk_Eyqd9Od6C7CDHWuBUW90F_6oTISIYA8ReBLG9wp5hfitPZ-h34bv-zpH3fPpPomHMF_zFyuQ5Uc36PT0qNBDC28VQy5Quof-Pm1KwZjoU5M717j00TfQn9y19wipV7kL7VZrjcKHi8FrfXtB_KXwa_CbuLZi-FPTD82O1PFF-qkDAae0CUCfUUc1DLC9XxyQfk_SRtC3jBQFVqCX5oalGzjLXTeTOCPKYoGGE"
                        />
                    </div>
                    {/* Overlapping Floating Cards */}
                    <div className="absolute -top-6 -right-6 glass p-6 rounded-xl border border-white/20 animate-bounce-subtle z-20">
                        <div className="flex flex-col gap-1">
                            <span className="text-primary text-3xl font-bold">5+</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">Years Experience</span>
                        </div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 glass-heavy p-5 rounded-xl border border-primary/30 z-20 max-w-[200px]">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold">Currently Designing</span>
                        </div>
                        <p className="text-sm font-medium">Next-gen AI Dashboard for FinTech</p>
                    </div>
                    {/* Orbiting Skill Badges */}
                    <div className="absolute top-1/2 -left-12 size-12 glass rounded-full flex items-center justify-center border border-white/10">
                        <Code className="text-primary w-6 h-6" />
                    </div>
                    <div className="absolute top-1/4 right-0 size-10 glass rounded-full flex items-center justify-center border border-white/10">
                        <Brush className="text-primary w-5 h-5" />
                    </div>
                    <div className="absolute bottom-1/4 -right-4 size-14 glass rounded-full flex items-center justify-center border border-white/10">
                        <Box className="text-primary w-7 h-7" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroExperience;
