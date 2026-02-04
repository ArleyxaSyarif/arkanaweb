'use client';

import { ArrowDown, Bolt } from 'lucide-react';

export default function HeroService() {
    return (
        <section className="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-[60vh] overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7f13ec]/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7f13ec] text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#7f13ec] animate-pulse"></span>
                    Layanan Kelas Dunia
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                    Solusi Premium <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f13ec] to-purple-400">Kami</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
                    Mengubah kehadiran digital Anda dengan strategi khusus kelas atas dan estetika modern yang disesuaikan untuk pertumbuhan.
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button className="bg-[#7f13ec] text-white hover:bg-[#4c0b8d] transition-all px-8 py-4 rounded-full text-base font-bold shadow-[0_0_40px_-10px_rgba(127,19,236,0.3)] hover:shadow-lg flex items-center gap-2">
                        Jelajahi Layanan
                        <ArrowDown className="w-4 h-4" />
                    </button>
                    <button className="bg-white text-slate-900 hover:bg-slate-50 transition-all border border-slate-200 px-8 py-4 rounded-full text-base font-bold">
                        Lihat Portofolio
                    </button>
                </div>
            </div>
        </section>
    );
}
