'use client';

import React from 'react';

const CtaExperience = () => {
    return (
        <section className="mt-20 py-20 px-10 glass rounded-xl border border-primary/20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-primary/5 blur-[80px]"></div>
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start a project?</h2>
                <p className="text-lg mb-10 max-w-2xl mx-auto">
                    Let's collaborate to build something extraordinary. Whether it's a new product or a redesign, I'm here to help.
                </p>
                <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-lg glow-primary hover:scale-105 transition-transform">
                    Get In Touch
                </button>
            </div>
        </section>
    );
};

export default CtaExperience;
