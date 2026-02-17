"use client";

import React from "react";
import { PARTNERS } from "@/data/partners";

export default function PartnerSection() {
    return (
        <section className="w-full py-24 px-6 bg-[#7f13ec]/5 border-y border-[#7f13ec]/5 font-display overflow-hidden">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                {/* Section Header */}
                <div className="flex flex-col items-center gap-5 mb-16 text-center">
                    <h4 className="text-[#7f13ec] text-sm font-bold tracking-[0.2em] uppercase leading-none">
                        Dipercaya oleh Perusahaan Global
                    </h4>
                    {/* Thin decorative horizontal line */}
                    <div className="w-20 h-[1px] bg-[#7f13ec]/30"></div>
                </div>

                {/* Logos Marquee Container */}
                <div className="w-full overflow-hidden mask-fade">
                    <div className="flex w-max animate-scroll gap-20">
                        {/* Duplicate lists for seamless loop */}
                        {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                            <div key={`${partner.name}-${index}`} className="flex justify-center items-center flex-shrink-0 w-32 md:w-48">
                                <img
                                    className="h-16 md:h-20 w-auto max-w-full object-contain filter grayscale opacity-50 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 cursor-pointer"
                                    alt={`${partner.name} logo`}
                                    src={partner.src}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
