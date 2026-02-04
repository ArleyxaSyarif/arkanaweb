"use client";

import React from "react";

const PARTNERS = [
    { name: "ACME", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMVQLkgWwjwSxpebq3UtIP8_cspWBF7oQtryQoakvrjX32pMyGU8-McaHhtEp-SJHov5mBaJhkhTHHx51xWcePlqTKyljrlzRtDNP0Gt8HURz1AcV_bT_mDTeBLdn68tMAZi0saJzXF35qw2z3dUWSe2Lm2NRKputATF9BJTLhHoWstuRj7QWlqy37A7jqiFqSQNtv6b8RXu9Mg3ipLPRwcHpI7rTvHapniy1kX5-T_xeWOgXxo5t9nZtGG3oongICTFh-Xf7UDYU" },
    { name: "QUANTUM", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKPlO0rmRClOB4zdpD2iUZl1h8jlmNJTC9X6AVOMAgqj8Lqt8eZvLWu0-zGLZ1LfShvbcxHrUKiBIa6_X75wuBziYUJ-1Ig_d1y7t6yyCt5krFpvzMjhZHHjbHbfH5ddsyH_Ypowz2NnkEF4TKV_AztTYGiRrYzDLOn-2bJnSVyozMrclsVHLQNPaiP9tR-gk6KXQ2F1s-kPORrr0ZBtU1CKOP85AmGI68onhGgeZ2Xmxa7I-GRkLqWjJx0_ZDVBMa5IsNvHjqCZg" },
    { name: "ECHO", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIIXaoKbImYWPtV426YeAzNNoDZmvTsAGZRaU0pVqkDPk6KkjocOuuuUJsk7wRLPkxB6hVHB7FuI5wEYD2t3_KlyAZ6WnpZysj_i8XsCF4F_4_vH5h-MxDY4TRzAyCS4M9dY0GRz_jTl3Wism3u9wn9q9PBYHPsHaFB_fXzLpvarACo8Scczm9sN0lNwxkviZtxsxOXc74IbQUdIgpp0gnE2kmdOFoDaM1XH4eXR3Azd7aIvvgxiIMIPLkq1Wfdib7duj_aUGpaEA" },
    { name: "NEBULA", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3WJ1Fk6YrtrpfS_GwWrX6gl75GhsPmcNmroq1wkKX4BdmgR0XK35ZpVCFCEmXmSXqJSpabol78WHxOuuCB3Phia7tHmyZjowuf2jOlNa5bg_A-7yVG5fmSnUQn8KSjH8vnG7tfDSa0_we6YHOScEybqywES3lCvPv-mmIEkceKkxhtgYZGZTI_gWMb6e60T7LykFr1jjfatBEVcW2ArPMNpyiMUjveestnGc1pwdkE2BHYS-EEniewD3BrotYpMGoJwDylzvdSXg" },
    { name: "VERTEX", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLDzjFxfflHaXywWj2sQ_RRzRl8jHlNcCq7JZUoyAVdK7w_YE0v9qlGrlnGhWQx4wnBzggLHEo7b0XRFqRy8BA_3ui93KJC4Ce93PaCYWpAF3hQ4ZY_VuIvPJIY_lagOz4AkGLSuh6eqYchO2E8FwP4H3TsdYzvZbgTS1CF0PIs_PwUCiqPVsKNcoSXsGF4TWcXTtJbxQ9LBFnPaEOPg2J3hGBjZSob3JsrAI-ixvfjhgWGfBGO-2QEAyWA0QNYKJxjCPDLnoUr6U" },
    { name: "KINETIC", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo6RQTsm6FqoOyfrG6IoQzz31c2_zhIt2GDUIdzwW5Lt6MkY0XuylvzSwMh-gxpdeLfiXYrq2S3dPhN_gvIsrEw5uDAZyA2iQRvkX1KIsfza6sKtO2ijYSVR5vUzvPB5sCJ1hhgZOGNA2xNWcGtP2S9VSF4XzwDkErnUea94JWdq94Eavic3TZfIVLHh-ONHk6U2kqkF68h6HVk68LUdaeaT6AYIjJuIu9O14vXc-ART5KuoZaAdwwh2YciWj5lwq3Un758vN1uow" }
];

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
                            <div key={`${partner.name}-${index}`} className="flex justify-center items-center flex-shrink-0">
                                <img
                                    className="h-16 md:h-20 w-auto object-contain mix-blend-multiply filter grayscale opacity-60 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 cursor-pointer"
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
