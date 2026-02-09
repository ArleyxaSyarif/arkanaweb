"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function PricingHero() {
    return (
        <section className="relative pt-20 pb-24 lg:pt-20 lg:pb-20 overflow-hidden bg-white">
            {/* Ambient Glow Background */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(127, 19, 236, 0.4) 0%, rgba(255, 255, 255, 0) 70%)' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f13ec]/10 border border-[#7f13ec]/20 text-[#7f13ec] text-xs font-semibold uppercase tracking-wider mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7f13ec] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7f13ec]"></span>
                        </span>
                        Paket Baru Tersedia
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
                        Harga Transparan untuk <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#7f13ec] to-indigo-600 bg-clip-text text-transparent">Setiap Tahapan</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                        Paket sederhana dan terukur yang tumbuh bersama bisnis Anda. Tanpa biaya tersembunyi, tanpa kejutan—hanya alat yang Anda perlukan untuk sukses.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 mt-4 w-full sm:w-auto">
                        {/* Primary CTA */}
                        <button className="group relative flex items-center justify-center gap-2 h-12 px-8 bg-gradient-to-br from-[#7f13ec] to-indigo-600 text-white text-base font-semibold rounded-lg shadow-[0_4px_20px_-2px_rgba(127,19,236,0.25)] hover:shadow-[0_0_80px_40px_rgba(127,19,236,0.15)] transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto overflow-hidden">
                            <span className="relative z-10">Mulai Sekarang</span>
                            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </button>

                        {/* Secondary CTA */}
                        <button className="flex items-center justify-center gap-2 h-12 px-8 bg-transparent text-[#7f13ec] border-2 border-[#7f13ec]/20 hover:border-[#7f13ec] hover:bg-[#7f13ec]/5 text-base font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto">
                            <span>Jadwalkan Demo</span>
                        </button>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span>Tanpa kartu kredit</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span>Uji coba gratis 14 hari</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
